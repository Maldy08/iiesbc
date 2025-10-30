import { NextResponse } from 'next/server';
import { actualizarEstadoPonencia } from '@/lib/supabase/ponencias.service';
import { esAdministrador } from '@/lib/supabase/usuarios.service';

export async function POST(request) {
  try {
    const { email, ponencia_id, nuevo_estado, comentarios } = await request.json();

    // Validaciones
    if (!email || !ponencia_id || !nuevo_estado) {
      return NextResponse.json(
        { error: 'Faltan datos requeridos' },
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

    // Estados válidos
    const estadosValidos = [
      'Pendiente de Revisión',
      'En Revisión',
      'Requiere Cambios',
      'Aprobada',
      'Rechazada'
    ];

    if (!estadosValidos.includes(nuevo_estado)) {
      return NextResponse.json(
        { error: 'Estado no válido' },
        { status: 400 }
      );
    }

    // Actualizar estado
    const ponencia = await actualizarEstadoPonencia(
      ponencia_id,
      nuevo_estado,
      comentarios
    );

    return NextResponse.json({
      success: true,
      message: 'Estado actualizado exitosamente',
      ponencia,
    });

  } catch (error) {
    console.error('Error al cambiar estado:', error);
    return NextResponse.json(
      { error: 'Error al cambiar estado', details: error.message },
      { status: 500 }
    );
  }
}
