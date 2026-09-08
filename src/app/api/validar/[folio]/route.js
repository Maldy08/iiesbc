import { NextResponse } from 'next/server';

import { validarFolioPublico } from '@/lib/constancias/service';

// Ruta pública: es el destino del QR impreso. Vive fuera de /api/constancias
// para que el middleware de sesión no la bloquee.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  try {
    const { folio } = await params;
    const resultado = await validarFolioPublico(folio);
    return NextResponse.json(resultado, { status: resultado.valida ? 200 : 404 });
  } catch (error) {
    console.error('Error al validar folio:', error);
    return NextResponse.json({ valida: false, motivo: 'error' }, { status: 500 });
  }
}
