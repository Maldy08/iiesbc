import { NextResponse } from 'next/server';
import { crearOActualizarUsuario } from '@/lib/supabase/usuarios.service';
import { crearToken } from '@/lib/supabase/tokens.service';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    
    const {
      email,
      nombre_completo,
      institucion,
      telefono,
    } = body;

    // Validaciones
    if (!email || !nombre_completo) {
      return NextResponse.json(
        { error: 'Email y nombre son obligatorios' },
        { status: 400 }
      );
    }

    // 1. Crear o actualizar usuario en Supabase
    const usuario = await crearOActualizarUsuario({
      email,
      nombre_completo,
      institucion,
      telefono,
      rol: 'ponente',
    });

    // 2. Generar token de acceso
    const tokenData = await crearToken(usuario.id);

    // 3. Enviar email con el token usando Resend
    const emailEnviado = await resend.emails.send({
      from: 'Congreso IIESBC <congreso@iiesbc.mx>', // Cambia esto por tu dominio
      to: email,
      subject: '¡Registro exitoso al Congreso! - Tu token de acceso',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">¡Bienvenido al Congreso!</h1>
          
          <p>Hola <strong>${nombre_completo}</strong>,</p>
          
          <p>Tu registro ha sido exitoso. Para subir tu ponencia, utiliza el siguiente token de acceso:</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <h2 style="color: #1f2937; font-size: 32px; letter-spacing: 4px; margin: 0;">
              ${tokenData.token}
            </h2>
          </div>
          
          <p><strong>Instrucciones:</strong></p>
          <ol>
            <li>Ve a la página de subir ponencia</li>
            <li>Ingresa tu token: <code>${tokenData.token}</code></li>
            <li>Completa el formulario y sube tu archivo PDF</li>
          </ol>
          
          <p style="color: #6b7280; font-size: 14px;">
            <strong>Nota:</strong> Este token es válido por 30 días y solo puede usarse una vez.
          </p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          
          <p style="color: #9ca3af; font-size: 12px;">
            Si tienes alguna duda, contacta al equipo organizador.
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Registro exitoso. Revisa tu email para obtener el token de acceso.',
      usuario: {
        id: usuario.id,
        email: usuario.email,
        nombre_completo: usuario.nombre_completo,
      },
      token: tokenData.token, // Solo para testing, en producción no devolver el token aquí
    });

  } catch (error) {
    console.error('Error en registro:', error);
    return NextResponse.json(
      { error: 'Error al procesar el registro', details: error.message },
      { status: 500 }
    );
  }
}