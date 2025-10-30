import { NextResponse } from 'next/server';
import { obtenerMisPonencias } from '@/lib/supabase/ponencias.service';
import { obtenerUsuarioPorEmail } from '@/lib/supabase/usuarios.service';

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email requerido' },
        { status: 400 }
      );
    }

    // Verificar que el usuario exista
    const usuario = await obtenerUsuarioPorEmail(email);
    
    if (!usuario) {
      return NextResponse.json(
        { error: 'Usuario no encontrado' },
        { status: 404 }
      );
    }

    // Obtener ponencias del usuario
    const ponencias = await obtenerMisPonencias(email);

    return NextResponse.json({
      success: true,
      ponencias,
    });

  } catch (error) {
    console.error('Error al obtener ponencias:', error);
    return NextResponse.json(
      { error: 'Error al obtener ponencias', details: error.message },
      { status: 500 }
    );
  }
}