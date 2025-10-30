import { NextResponse } from 'next/server';
import { obtenerPonenciaPorId } from '@/lib/supabase/ponencias.service';

export async function GET(request, { params }) {
  try {
    const { id } = params;

    const ponencia = await obtenerPonenciaPorId(id);

    if (!ponencia) {
      return NextResponse.json(
        { error: 'Ponencia no encontrada' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      ponencia,
    });

  } catch (error) {
    console.error('Error al obtener ponencia:', error);
    return NextResponse.json(
      { error: 'Error al obtener ponencia', details: error.message },
      { status: 500 }
    );
  }
}