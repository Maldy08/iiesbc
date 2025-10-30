import { NextResponse } from 'next/server';
import { obtenerTodasLasPonencias } from '@/lib/supabase/ponencias.service';
import { esAdministrador } from '@/lib/supabase/usuarios.service';

export async function POST(request) {
  try {
    const { email, filtros } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email requerido' },
        { status: 400 }
      );
    }

    // Verificar que sea administrador
    const esAdmin = await esAdministrador(email);
    
    if (!esAdmin) {
      return NextResponse.json(
        { error: 'No tienes permisos de administrador' },
        { status: 403 }
      );
    }

    // Obtener todas las ponencias con filtros opcionales
    const ponencias = await obtenerTodasLasPonencias(filtros || {});

    return NextResponse.json({
      success: true,
      ponencias,
      total: ponencias.length,
    });

  } catch (error) {
    console.error('Error al obtener ponencias:', error);
    return NextResponse.json(
      { error: 'Error al obtener ponencias', details: error.message },
      { status: 500 }
    );
  }
}