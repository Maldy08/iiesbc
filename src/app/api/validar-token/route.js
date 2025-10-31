import { NextResponse } from 'next/server';
import { validarToken } from '@/lib/supabase/tokens.service';

export async function POST(request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { error: 'Token requerido' },
        { status: 400 }
      );
    }

    const resultado = await validarToken(token);

    if (!resultado || !resultado.valido) {
      return NextResponse.json(
        { 
          valido: false, 
          mensaje: resultado?.mensaje || 'Token inválido o expirado' 
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      valido: true,
      usuario: resultado.data.usuario,
      mensaje: 'Token válido',
    });

  } catch (error) {
    console.error('Error al validar token:', error);
    return NextResponse.json(
      { error: 'Error al validar token', details: error.message },
      { status: 500 }
    );
  }
}