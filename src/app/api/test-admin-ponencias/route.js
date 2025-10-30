import { NextResponse } from 'next/server';
import { obtenerTodasLasPonencias } from '@/lib/supabase/ponencias.service';
import { esAdministrador } from '@/lib/supabase/usuarios.service';

export async function GET() {
  try {
    // Verificar que el usuario es admin
    const esAdmin = await esAdministrador('admin@test.com');

    if (!esAdmin) {
      return NextResponse.json(
        { error: 'No es administrador' },
        { status: 403 }
      );
    }

    // Obtener todas las ponencias
    const ponencias = await obtenerTodasLasPonencias();

    return NextResponse.json({
      success: true,
      esAdmin,
      total: ponencias.length,
      ponencias,
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}