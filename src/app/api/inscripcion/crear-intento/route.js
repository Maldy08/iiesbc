// src/app/api/inscripcion/crear-intento/route.js

import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';
import { crearOActualizarUsuario } from '@/lib/supabase/usuarios.service';
import Stripe from 'stripe';

// Inicializa Stripe con tu llave secreta
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { email, nombre, telefono, programa_id } = await request.json();

    // --- 1. Validar datos de entrada ---
    if (!email || !nombre || !programa_id) {
      return NextResponse.json(
        { error: 'Faltan datos (Email, Nombre, ID del Programa)' },
        { status: 400 }
      );
    }

    // --- 2. Obtener o crear al usuario ---
    const usuario = await crearOActualizarUsuario({
      email,
      nombre_completo: nombre,
      telefono,
      rol: 'ponente', // O podrías usar un rol 'estudiante'
    });

    // --- 3. Obtener el precio del programa (desde el Backend, por seguridad) ---
    const { data: programa, error: programaError } = await supabaseAdmin
      .from('programas')
      .select('monto_inscripcion, moneda')
      .eq('id', programa_id)
      .single();

    if (programaError || !programa) {
      throw new Error('Programa no encontrado o error al consultar precio.');
    }

    const monto = programa.monto_inscripcion;
    const moneda = programa.moneda;
    const montoEnCentavos = Math.round(monto * 100); // Stripe maneja montos en centavos

    // --- 4. Crear el registro de inscripción en "pendiente" ---
    const { data: nuevaInscripcion, error: inscError } = await supabaseAdmin
      .from('inscripciones')
      .insert({
        usuario_id: usuario.id,
        programa_id: programa_id,
        monto: monto,
        moneda: moneda,
        estado: 'pendiente',
        gateway: 'stripe'
      })
      .select('id') // Pedimos que nos devuelva el ID
      .single();

    if (inscError) {
      throw new Error('Error al crear el registro de inscripción: ' + inscError.message);
    }

    // --- 5. Crear el Intento de Pago (Payment Intent) en Stripe ---
    const paymentIntent = await stripe.paymentIntents.create({
      amount: montoEnCentavos,
      currency: moneda,
      receipt_email: email, // Opcional: Stripe envía un recibo
      metadata: {
        // ¡Muy importante! Vinculamos el pago de Stripe con nuestras tablas
        inscripcion_id: nuevaInscripcion.id,
        usuario_id: usuario.id,
        programa_id: programa_id
      }
    });

    // --- 6. Actualizar nuestra inscripción con el ID de Stripe ---
    const { error: updateError } = await supabaseAdmin
      .from('inscripciones')
      .update({ gateway_payment_id: paymentIntent.id })
      .eq('id', nuevaInscripcion.id);

    if (updateError) {
      // No es un error fatal, pero hay que registrarlo
      console.error('Error al actualizar inscripción con ID de Stripe:', updateError.message);
    }

    // --- 7. Devolver el client_secret al frontend ---
    return NextResponse.json({
      clientSecret: paymentIntent.client_secret
    });

  } catch (error) {
    console.error('Error en crear-intento:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}