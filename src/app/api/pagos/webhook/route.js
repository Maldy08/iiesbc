// src/app/api/pagos/webhook/route.js

import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';
import Stripe from 'stripe';
import { Resend } from 'resend'; // <-- NUEVO

// --- Inicialización ---
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const resend = new Resend(process.env.RESEND_API_KEY); // <-- NUEVO

export async function POST(request) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    // 1. Verificar que la petición viene de Stripe
    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);

    let paymentIntent;

    // 2. Manejar el evento
    switch (event.type) {
      case 'payment_intent.succeeded':
        paymentIntent = event.data.object;
        
        // Obtenemos los IDs que guardamos en los metadata
        const inscripcionId = paymentIntent.metadata.inscripcion_id;
        const usuarioId = paymentIntent.metadata.usuario_id;
        const programaId = paymentIntent.metadata.programa_id;

        if (!inscripcionId || !usuarioId || !programaId) {
          throw new Error('Error: Metadata de Stripe incompleta (falta inscripcion_id, usuario_id o programa_id).');
        }

        // 3. Actualizar nuestra base de datos
        const { error: dbError } = await supabaseAdmin
          .from('inscripciones')
          .update({ 
            estado: 'completado',
            updated_at: new Date().toISOString()
          })
          .eq('id', inscripcionId);

        if (dbError) {
          throw new Error(`Error al actualizar la inscripción en Supabase: ${dbError.message}`);
        }

        console.log(`✅ Pago exitoso para inscripción: ${inscripcionId}`);

        // --- 4. Enviar email de confirmación (NUEVO) ---
        // Lo ponemos en un try/catch separado. Si el email falla,
        // NO queremos que Stripe piense que el webhook falló.
        try {
          // Obtener datos del usuario y del programa para el email
          const { data: usuarioData, error: userError } = await supabaseAdmin
            .from('usuarios')
            .select('email, nombre_completo')
            .eq('id', usuarioId)
            .single();

          const { data: programaData, error: progError } = await supabaseAdmin
            .from('programas')
            .select('nombre, monto_inscripcion')
            .eq('id', programaId)
            .single();

          if (userError || progError || !usuarioData || !programaData) {
            throw new Error('Error al obtener datos de usuario o programa para el email.');
          }
          
          const montoPagado = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(programaData.monto_inscripcion);

          // Enviar email
          await resend.emails.send({
            from: 'Inscripciones IIESBC <contacto@iiesbc.mx>', // Asegúrate de que este sea tu dominio verificado en Resend
            to: usuarioData.email,
            subject: `✅ ¡Inscripción Exitosa! - ${programaData.nombre}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
                <div style="background-color: #66822c; color: white; padding: 20px; text-align: center;">
                  <h1 style="margin: 0; font-size: 24px;">¡Bienvenido a IIESBC!</h1>
                </div>
                <div style="padding: 30px;">
                  <p style="font-size: 16px; color: #333;">Hola <strong>${usuarioData.nombre_completo}</strong>,</p>
                  <p style="font-size: 16px; color: #333;">Tu inscripción a <strong>${programaData.nombre}</strong> ha sido procesada exitosamente.</p>
                  
                  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 25px 0;">
                    <h2 style="color: #1f2937; margin-top: 0; border-bottom: 2px solid #eee; padding-bottom: 10px;">Resumen del Pago</h2>
                    <p style="font-size: 16px; color: #333;"><strong>Programa:</strong> ${programaData.nombre}</p>
                    <p style="font-size: 16px; color: #333;"><strong>Monto Pagado:</strong> ${montoPagado}</p>
                    <p style="font-size: 16px; color: #333;"><strong>ID de Transacción:</strong> ${paymentIntent.id}</p>
                  </div>
                  
                  <p style="font-size: 16px; color: #333;">Nos pondremos en contacto contigo pronto con los siguientes pasos e información de bienvenida.</p>
                  
                  <p style="margin-top: 30px; font-size: 16px; color: #555;">
                    Atentamente,<br>
                    El equipo de IIESBC
                  </p>
                </div>
                <div style="background-color: #f4f4f4; color: #888; padding: 20px; text-align: center; font-size: 12px;">
                  &copy; ${new Date().getFullYear()} IIESBC. Todos los derechos reservados.
                </div>
              </div>
            `,
          });

          console.log(`📧 Email de confirmación enviado a: ${usuarioData.email}`);

        } catch (emailError) {
          console.error('Error al enviar email de confirmación:', emailError);
          // No relanzamos el error, para que Stripe reciba el 200 OK
        }
        break;

      case 'payment_intent.payment_failed':
        paymentIntent = event.data.object;
        console.log(`❌ Falló el pago: ${paymentIntent.id} (Inscripción: ${paymentIntent.metadata.inscripcion_id})`);
        
        // Opcional: Actualizar la BD a "fallido"
        await supabaseAdmin
          .from('inscripciones')
          .update({ estado: 'fallido' })
          .eq('id', paymentIntent.metadata.inscripcion_id);
          
        break;
      
      default:
        console.log(`Evento no manejado: ${event.type}`);
    }

    // 5. Responder a Stripe que todo salió bien
    return NextResponse.json({ received: true });

  } catch (err) {
    console.error('Error en webhook de Stripe:', err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }
}