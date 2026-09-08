import { NextResponse } from 'next/server';

import { exigirSesion } from '@/lib/constancias/auth';
import { crearConstancia, listarConstancias } from '@/lib/constancias/service';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    await exigirSesion();
    const { searchParams } = new URL(request.url);

    const resultado = await listarConstancias({
      busqueda: searchParams.get('busqueda') || '',
      estatus: searchParams.get('estatus') || '',
      diplomado: searchParams.get('diplomado') || '',
      pagina: Number(searchParams.get('pagina')) || 1,
      porPagina: Math.min(Number(searchParams.get('porPagina')) || 25, 100),
    });

    return NextResponse.json(resultado);
  } catch (error) {
    console.error('Error al listar constancias:', error);
    return NextResponse.json({ error: error.message }, { status: error.status || 500 });
  }
}

export async function POST(request) {
  try {
    const sesion = await exigirSesion();
    const datos = await request.json();
    const constancia = await crearConstancia(datos, { emitidaPor: sesion.id });
    return NextResponse.json({ constancia }, { status: 201 });
  } catch (error) {
    console.error('Error al crear constancia:', error);
    return NextResponse.json(
      { error: error.message, errores: error.errores },
      { status: error.status || 500 }
    );
  }
}
