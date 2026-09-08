import { NextResponse } from 'next/server';

import { exigirSesion } from '@/lib/constancias/auth';
import { leerCedula } from '@/lib/constancias/importar';
import { crearConstancia } from '@/lib/constancias/service';

// exceljs necesita Node; la subida del archivo obliga a respuesta dinámica.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const LIMITE_ARCHIVO = 5 * 1024 * 1024;

/**
 * Dos usos según el content-type:
 *  - multipart/form-data → previsualiza el .xlsx (no escribe nada)
 *  - application/json    → guarda las filas ya revisadas
 */
export async function POST(request) {
  try {
    const sesion = await exigirSesion();
    const tipo = request.headers.get('content-type') || '';

    if (tipo.includes('multipart/form-data')) {
      const formulario = await request.formData();
      const archivo = formulario.get('archivo');
      const claveDiplomado = String(formulario.get('claveDiplomado') || '');

      if (!archivo || typeof archivo === 'string') {
        return NextResponse.json({ error: 'No llegó ningún archivo.' }, { status: 400 });
      }
      if (archivo.size > LIMITE_ARCHIVO) {
        return NextResponse.json({ error: 'El archivo supera los 5 MB.' }, { status: 413 });
      }

      const { filas, filaEncabezados } = await leerCedula(await archivo.arrayBuffer(), { claveDiplomado });
      return NextResponse.json({
        filaEncabezados,
        filas,
        conProblemas: filas.filter((f) => f.problemas.length).length,
      });
    }

    const { filas } = await request.json();
    if (!Array.isArray(filas) || !filas.length) {
      return NextResponse.json({ error: 'No hay filas por importar.' }, { status: 400 });
    }

    // Se importa fila por fila para que un registro malo no tire el lote
    // completo: al final se informa qué entró y qué no.
    const resultados = [];
    for (const fila of filas) {
      try {
        const constancia = await crearConstancia(fila, { emitidaPor: sesion.id });
        resultados.push({ fila: fila.fila, nombre: fila.nombre_completo, ok: true, folio: constancia.folio });
      } catch (error) {
        resultados.push({ fila: fila.fila, nombre: fila.nombre_completo, ok: false, error: error.message });
      }
    }

    return NextResponse.json({
      resultados,
      importadas: resultados.filter((r) => r.ok).length,
      fallidas: resultados.filter((r) => !r.ok).length,
    });
  } catch (error) {
    console.error('Error al importar constancias:', error);
    return NextResponse.json({ error: error.message }, { status: error.status || 500 });
  }
}
