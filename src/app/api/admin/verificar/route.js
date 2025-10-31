import { NextResponse } from 'next/server';
import { esAdministrador } from '@/lib/supabase/usuarios.service';

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email requerido' },
        { status: 400 }
      );
    }

    const esAdmin = await esAdministrador(email);

    if (!esAdmin) {
      return NextResponse.json(
        { error: 'No tienes permisos de administrador', esAdmin: false },
        { status: 403 }
      );
    }

    return NextResponse.json({
      success: true,
      esAdmin: true,
      email,
    });

  } catch (error) {
    console.error('Error al verificar admin:', error);
    return NextResponse.json(
      { error: 'Error al verificar permisos', details: error.message },
      { status: 500 }
    );
  }
}