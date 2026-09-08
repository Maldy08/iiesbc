import { NextResponse } from 'next/server';

import { exigirSesion } from '@/lib/constancias/auth';
import { actualizarConstancia, cambiarEstatus, obtenerConstancia } from '@/lib/constancias/service';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  try {
    await exigirSesion();
    const { folio } = await params;
    const constancia = await obtenerConstancia(folio);

    if (!constancia) return NextResponse.json({ error: 'Constancia no encontrada.' }, { status: 404 });
    return NextResponse.json({ constancia });
  } catch (error) {
    console.error('Error al obtener constancia:', error);
    return NextResponse.json({ error: error.message }, { status: error.status || 500 });
  }
}

export async function PATCH(request, { params }) {
  try {
    await exigirSesion();
    const { folio } = await params;
    const cuerpo = await request.json();

    // Cambiar solo el estatus (enviar / cancelar) o reescribir todos los datos.
    const constancia = cuerpo.soloEstatus
      ? await cambiarEstatus(folio, cuerpo.estatus, { motivo: cuerpo.motivo })
      : await actualizarConstancia(folio, cuerpo);

    return NextResponse.json({ constancia });
  } catch (error) {
    console.error('Error al actualizar constancia:', error);
    return NextResponse.json(
      { error: error.message, errores: error.errores },
      { status: error.status || 500 }
    );
  }
}
