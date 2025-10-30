import { NextResponse } from 'next/server';
import { obtenerMisPonencias } from '@/lib/supabase/ponencias.service';
import { actualizarEstadoPonencia } from '@/lib/supabase/ponencias.service';

export async function GET() {
  try {
    // 1. Obtener primera ponencia
    const ponencias = await obtenerMisPonencias('ponente@test.com');
    
    if (ponencias.length === 0) {
      return NextResponse.json(
        { error: 'No hay ponencias para probar' },
        { status: 404 }
      );
    }

    const ponencia = ponencias[0];

    // 2. Cambiar estado a "En Revisión"
    const ponenciaActualizada = await actualizarEstadoPonencia(
      ponencia.id,
      'En Revisión',
      'Se ha iniciado la revisión de tu trabajo'
    );

    return NextResponse.json({
      success: true,
      message: '✅ Estado cambiado',
      estadoAnterior: ponencia.estado,
      estadoNuevo: ponenciaActualizada.estado,
      ponencia: ponenciaActualizada,
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
