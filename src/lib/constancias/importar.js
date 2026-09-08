// Lectura de la cédula de Excel que hoy se llena a mano.
//
// El archivo real trae los encabezados hasta la fila 10 (arriba va el título y
// el nombre del diplomado), así que en lugar de asumir posiciones se busca la
// fila de encabezados y se mapean las columnas por nombre.

import ExcelJS from 'exceljs';

import { desglosarFolio, normalizarFolio } from './folio';

// Cada campo acepta varias formas de escribirse: la cédula tiene erratas
// ("CONSTACIA", "FECHA EMICIÓN") y conviene tolerar variantes.
const COLUMNAS = {
  matricula: ['matricula'],
  folio: ['folio'],
  nombre_completo: ['nombrecompleto'],
  curp: ['curp'],
  rfc: ['rfc'],
  correo: ['correoelectronico', 'correo'],
  diplomado_nombre: ['nombrediplomadocursado', 'nombrediplomado', 'diplomado'],
  fecha_inicio: ['fechainiciodiplomado', 'fechainicio'],
  fecha_termino: ['fechaterminodiplomado', 'fechatermino'],
  horas_totales: ['horastotalescursadas', 'horastotales', 'horas'],
  cantidad_modulos: ['cantidaddemoduloscursadospordiplomado', 'cantidaddemodulos'],
  estatus: ['constacia', 'constancia', 'estatus'],
  fecha_emision: ['fechaemicion', 'fechaemision'],
};

const ESTATUS_VALIDOS = { enviada: 'enviada', emitida: 'emitida', cancelada: 'cancelada' };

function clave(texto) {
  return String(texto ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9#]/g, '');
}

function valorCelda(celda) {
  const v = celda?.value;
  if (v === null || v === undefined) return '';
  if (v instanceof Date) return v;
  if (typeof v === 'object') {
    if (v.text) return v.text; // hipervínculos
    if (v.result !== undefined) return v.result; // fórmulas
    if (v.richText) return v.richText.map((t) => t.text).join('');
    return '';
  }
  return v;
}

// Excel guarda fechas como serial (días desde 1899-12-30) o como texto
// dd/mm/aaaa según cómo se haya capturado la celda. Se aceptan las tres formas.
export function normalizarFecha(valor) {
  if (valor === '' || valor === null || valor === undefined) return null;

  if (valor instanceof Date) return valor.toISOString().slice(0, 10);

  if (typeof valor === 'number' && Number.isFinite(valor)) {
    const ms = Date.UTC(1899, 11, 30) + valor * 86400000;
    return new Date(ms).toISOString().slice(0, 10);
  }

  const texto = String(valor).trim();
  const conBarras = /^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/.exec(texto);
  if (conBarras) {
    const [, d, m, a] = conBarras;
    return `${a}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
  }
  if (/^\d{4}-\d{2}-\d{2}/.test(texto)) return texto.slice(0, 10);
  return null;
}

function mapearEncabezados(fila) {
  const mapa = {};
  fila.eachCell({ includeEmpty: false }, (celda, columna) => {
    const k = clave(valorCelda(celda));
    if (!k) return;

    for (const [campo, alias] of Object.entries(COLUMNAS)) {
      if (alias.includes(k)) mapa[campo] = columna;
    }
    const modulo = /^nombredelmodulo#?(\d)$/.exec(k);
    if (modulo) mapa[`modulo_${modulo[1]}`] = columna;
  });
  return mapa;
}

/**
 * Convierte el .xlsx en filas listas para revisar antes de importar.
 * No escribe nada: devuelve los datos ya normalizados y los problemas
 * detectados por fila, para que la pantalla de importación los muestre.
 *
 * @param {ArrayBuffer|Buffer} contenido
 * @param {object} opciones
 * @param {string} [opciones.claveDiplomado] Clave para las filas sin folio.
 */
export async function leerCedula(contenido, { claveDiplomado = '' } = {}) {
  const libro = new ExcelJS.Workbook();
  await libro.xlsx.load(contenido);

  const hoja = libro.worksheets[0];
  if (!hoja) throw new Error('El archivo no tiene hojas de cálculo.');

  let filaEncabezados = 0;
  let mapa = {};
  for (let i = 1; i <= Math.min(hoja.rowCount, 40); i += 1) {
    const posible = mapearEncabezados(hoja.getRow(i));
    if (posible.nombre_completo && (posible.diplomado_nombre || posible.folio)) {
      filaEncabezados = i;
      mapa = posible;
      break;
    }
  }

  if (!filaEncabezados) {
    throw new Error(
      'No se encontró la fila de encabezados. Debe incluir al menos "Nombre Completo" y "Folio" o "Nombre Diplomado Cursado".'
    );
  }

  const filas = [];
  for (let i = filaEncabezados + 1; i <= hoja.rowCount; i += 1) {
    const fila = hoja.getRow(i);
    const leer = (campo) => (mapa[campo] ? valorCelda(fila.getCell(mapa[campo])) : '');
    const texto = (campo) => String(leer(campo) ?? '').trim();

    const nombre = texto('nombre_completo');
    if (!nombre) continue; // fila vacía o de relleno

    const modulos = [];
    for (let m = 1; m <= 6; m += 1) {
      const nombreModulo = texto(`modulo_${m}`);
      if (nombreModulo) modulos.push(nombreModulo);
    }

    const folio = normalizarFolio(texto('folio'));
    const desglose = folio ? desglosarFolio(folio) : null;
    const estatusCrudo = clave(texto('estatus'));

    const datos = {
      fila: i,
      matricula: texto('matricula'),
      folio,
      nombre_completo: nombre,
      curp: texto('curp').toUpperCase(),
      rfc: texto('rfc').toUpperCase(),
      correo: texto('correo').toLowerCase(),
      diplomado_clave: desglose?.clave || claveDiplomado.toUpperCase(),
      diplomado_nombre: texto('diplomado_nombre'),
      fecha_inicio: normalizarFecha(leer('fecha_inicio')),
      fecha_termino: normalizarFecha(leer('fecha_termino')),
      horas_totales: Number(texto('horas_totales')) || null,
      modulos,
      estatus: ESTATUS_VALIDOS[estatusCrudo] || 'emitida',
      fecha_emision: normalizarFecha(leer('fecha_emision')),
    };

    const problemas = [];
    if (!datos.diplomado_nombre) problemas.push('Falta el nombre del diplomado.');
    if (!datos.diplomado_clave) problemas.push('Falta la clave del diplomado (no viene folio del cual deducirla).');
    if (!datos.horas_totales) problemas.push('Faltan las horas totales.');
    if (!datos.modulos.length) problemas.push('No trae módulos.');
    if (folio && !desglose) problemas.push(`El folio "${folio}" no tiene el formato esperado.`);
    if (datos.curp && !/^[A-Z0-9]{18}$/.test(datos.curp)) problemas.push('La CURP no tiene 18 caracteres.');
    if (!datos.fecha_emision) datos.fecha_emision = new Date().toISOString().slice(0, 10);

    filas.push({ ...datos, problemas });
  }

  return { filaEncabezados, filas };
}
