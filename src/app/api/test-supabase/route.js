import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/client';

export async function GET() {
  try {
    // Intentar hacer una consulta simple
    const { data, error } = await supabase
      .from('usuarios')
      .select('count')
      .limit(1);

    if (error) {
      return NextResponse.json(
        { error: 'Error al conectar con Supabase', details: error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: '✅ Conexión a Supabase exitosa',
      data
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error inesperado', details: error },
      { status: 500 }
    );
  }
}