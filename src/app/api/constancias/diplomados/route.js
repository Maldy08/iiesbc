import { NextResponse } from 'next/server';

import { exigirSesion } from '@/lib/constancias/auth';
import { guardarDiplomado, listarDiplomados } from '@/lib/constancias/service';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await exigirSesion();
    const diplomados = await listarDiplomados();
    return NextResponse.json({ diplomados });
  } catch (error) {
    console.error('Error al listar diplomados:', error);
    return NextResponse.json({ error: error.message }, { status: error.status || 500 });
  }
}

export async function POST(request) {
  try {
    await exigirSesion();
    const datos = await request.json();

    if (!datos.clave || !datos.nombre) {
      return NextResponse.json({ error: 'La clave y el nombre son obligatorios.' }, { status: 400 });
    }

    const diplomado = await guardarDiplomado({
      clave: datos.clave,
      nombre: datos.nombre,
      horasTotales: datos.horasTotales,
      modulos: datos.modulos,
    });

    return NextResponse.json({ diplomado }, { status: 201 });
  } catch (error) {
    console.error('Error al guardar diplomado:', error);
    return NextResponse.json({ error: error.message }, { status: error.status || 500 });
  }
}
