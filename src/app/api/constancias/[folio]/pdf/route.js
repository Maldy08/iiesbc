import { exigirSesion } from '@/lib/constancias/auth';
import { generarConstanciaPDF } from '@/lib/constancias/pdf';
import { obtenerConstancia } from '@/lib/constancias/service';
import { urlValidacion } from '@/lib/constancias/urls';

// pdf-lib y la lectura de los assets necesitan Node, no edge.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  try {
    await exigirSesion();
    const { folio } = await params;
    const constancia = await obtenerConstancia(folio);

    if (!constancia) {
      return Response.json({ error: 'Constancia no encontrada.' }, { status: 404 });
    }

    const pdf = await generarConstanciaPDF(constancia, {
      urlValidacion: urlValidacion(constancia.folio),
    });

    // ?descargar=1 fuerza la descarga; sin el parámetro se abre en el visor.
    const { searchParams } = new URL(request.url);
    const descargar = searchParams.get('descargar') === '1';
    const nombreArchivo = `${constancia.nombre_completo.replace(/[^\p{L}\p{N} ]/gu, '').trim() || constancia.folio}.pdf`;

    return new Response(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `${descargar ? 'attachment' : 'inline'}; filename*=UTF-8''${encodeURIComponent(nombreArchivo)}`,
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    console.error('Error al generar el PDF:', error);
    return Response.json({ error: error.message }, { status: error.status || 500 });
  }
}
