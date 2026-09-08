// Generador del PDF de la constancia.
//
// Reconstruye las dos páginas del documento original con pdf-lib: el marco
// ornamental, los logos y las firmas se dibujan como imágenes (extraídas del
// PDF que hizo el instituto) y todo el texto se compone con fuentes embebidas.
// No hay navegador headless de por medio, así que corre en el runtime Node de
// Vercel sin cold start pesado.
//
// Sustituciones tipográficas (las originales son comerciales):
//   Amsterdam One / Corsiva -> Parisienne
//   Roxborough CF (versalitas) -> Cinzel
//   Roxborough CF (caja mixta) -> Playfair Display
//   Arial                   -> Helvetica (métricas idénticas)
//   Questrial, Montserrat, Open Sans -> las mismas, vía Google Fonts
// Para volver a las originales basta con reemplazar los .ttf en assets/fonts
// y ajustar ARCHIVOS_FUENTE.

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import QRCode from 'qrcode';

import { PAGINA, COLOR, INSTITUCION, P1, P2, MESES } from './plantilla.js';

const RAIZ_ASSETS = path.join(process.cwd(), 'src', 'lib', 'constancias', 'assets');

const ARCHIVOS_FUENTE = {
  script: 'Parisienne-Regular.ttf',
  serif: 'Cinzel-Regular.ttf',
  serifNegrita: 'Cinzel-Bold.ttf',
  display: 'PlayfairDisplay-Bold.ttf',
  sans: 'Questrial-Regular.ttf',
  cuerpo: 'Montserrat-Regular.ttf',
  cuerpoCursiva: 'Montserrat-Italic.ttf',
  institucional: 'OpenSans-Regular.ttf',
};

const IMAGENES = [
  'fondo-marco.png',
  'logo-iiesbc.png',
  'logo-cacp.png',
  'firma-cacp.png',
  'firma-iiesbc.png',
  'banda-avales.png',
  'logo-cacp-p2.png',
  'logo-iiesbc-p2.png',
];

// Los assets no cambian entre invocaciones: se leen una vez por instancia.
const cacheArchivos = new Map();

async function leerAsset(subcarpeta, nombre) {
  const clave = `${subcarpeta}/${nombre}`;
  if (!cacheArchivos.has(clave)) {
    cacheArchivos.set(clave, readFile(path.join(RAIZ_ASSETS, subcarpeta, nombre)));
  }
  return cacheArchivos.get(clave);
}

// --- utilidades de texto -----------------------------------------------------

function color(hex) {
  const n = parseInt(hex.replace('#', ''), 16);
  return rgb(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
}

// Helvetica se codifica en WinAnsi; cualquier carácter fuera de esa tabla hace
// tronar a pdf-lib, así que se reemplaza antes de dibujar.
const EXTRAS_WINANSI = '€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ';

function winAnsi(texto) {
  return [...String(texto ?? '')]
    .map((c) => (c.charCodeAt(0) <= 0xff || EXTRAS_WINANSI.includes(c) ? c : '?'))
    .join('');
}

function ancho(fuente, texto, tamano, tracking = 0) {
  const base = fuente.widthOfTextAtSize(texto, tamano);
  const n = [...texto].length;
  return base + tracking * Math.max(0, n - 1);
}

function dibujar(pagina, texto, { fuente, tamano, x, y, color: tinta, tracking = 0 }) {
  if (!texto) return;
  if (!tracking) {
    pagina.drawText(texto, { x, y, size: tamano, font: fuente, color: tinta });
    return;
  }
  let cursor = x;
  for (const caracter of texto) {
    pagina.drawText(caracter, { x: cursor, y, size: tamano, font: fuente, color: tinta });
    cursor += fuente.widthOfTextAtSize(caracter, tamano) + tracking;
  }
}

function dibujarCentrado(pagina, texto, opciones) {
  const { fuente, tamano, centroX, tracking = 0 } = opciones;
  const w = ancho(fuente, texto, tamano, tracking);
  dibujar(pagina, texto, { ...opciones, x: centroX - w / 2 });
}

// Ajusta el espaciado entre letras para que un texto ocupe exactamente el ancho
// que tenía en el documento original, aunque la fuente sustituta mida distinto.
function dibujarAAncho(pagina, texto, { fuente, tamano, centroX, y, color: tinta, anchoObjetivo }) {
  const n = [...texto].length;
  const natural = fuente.widthOfTextAtSize(texto, tamano);
  const tracking = n > 1 ? (anchoObjetivo - natural) / (n - 1) : 0;
  dibujar(pagina, texto, { fuente, tamano, x: centroX - anchoObjetivo / 2, y, color: tinta, tracking });
}

function linea(pagina, { x0, x1, y, grosor, color: tinta }) {
  pagina.drawRectangle({
    x: x0,
    y: y - grosor / 2,
    width: x1 - x0,
    height: grosor,
    color: tinta,
  });
}

// Parte una secuencia de fragmentos (normal / cursiva) en líneas centradas.
function partirEnLineas(fragmentos, anchoMaximo, tamano) {
  const palabras = [];
  for (const fragmento of fragmentos) {
    for (const palabra of String(fragmento.texto).split(/\s+/).filter(Boolean)) {
      palabras.push({ palabra, fuente: fragmento.fuente });
    }
  }

  const lineas = [];
  let actual = [];
  let anchoActual = 0;

  for (const item of palabras) {
    const w = item.fuente.widthOfTextAtSize(item.palabra, tamano);
    const espacio = actual.length ? item.fuente.widthOfTextAtSize(' ', tamano) : 0;
    if (actual.length && anchoActual + espacio + w > anchoMaximo) {
      lineas.push(actual);
      actual = [item];
      anchoActual = w;
    } else {
      actual.push(item);
      anchoActual += espacio + w;
    }
  }
  if (actual.length) lineas.push(actual);
  return lineas;
}

function anchoLinea(linea, tamano) {
  return linea.reduce((suma, item, i) => {
    const espacio = i ? item.fuente.widthOfTextAtSize(' ', tamano) : 0;
    return suma + espacio + item.fuente.widthOfTextAtSize(item.palabra, tamano);
  }, 0);
}

function dibujarLineaCentrada(pagina, linea, { tamano, centroX, y, color: tinta }) {
  let cursor = centroX - anchoLinea(linea, tamano) / 2;
  linea.forEach((item, i) => {
    if (i) cursor += item.fuente.widthOfTextAtSize(' ', tamano);
    pagina.drawText(item.palabra, { x: cursor, y, size: tamano, font: item.fuente, color: tinta });
    cursor += item.fuente.widthOfTextAtSize(item.palabra, tamano);
  });
}

// Justificado a ambos márgenes, como la leyenda de validez del original.
function dibujarJustificado(pagina, texto, { fuente, tamano, x, y, anchoObjetivo, color: tinta, ultima }) {
  const palabras = texto.split(/\s+/).filter(Boolean);
  if (ultima || palabras.length < 2) {
    dibujar(pagina, texto, { fuente, tamano, x, y, color: tinta });
    return;
  }
  const anchoPalabras = palabras.reduce((s, p) => s + fuente.widthOfTextAtSize(p, tamano), 0);
  const espacio = (anchoObjetivo - anchoPalabras) / (palabras.length - 1);
  let cursor = x;
  for (const palabra of palabras) {
    pagina.drawText(palabra, { x: cursor, y, size: tamano, font: fuente, color: tinta });
    cursor += fuente.widthOfTextAtSize(palabra, tamano) + espacio;
  }
}

// --- fechas ------------------------------------------------------------------

// Las fechas llegan como 'YYYY-MM-DD' desde Postgres: se parten a mano para no
// pasar por Date() y que la zona horaria mueva el día.
function partesFecha(valor) {
  if (!valor) return null;
  const texto = typeof valor === 'string' ? valor : new Date(valor).toISOString();
  const [anio, mes, dia] = texto.slice(0, 10).split('-').map(Number);
  if (!anio || !mes || !dia) return null;
  return { anio, mes, dia };
}

export function fechaLarga(valor) {
  const f = partesFecha(valor);
  if (!f) return '';
  return `${f.dia} de ${MESES[f.mes - 1]} de ${f.anio}`;
}

export function fechaCorta(valor) {
  const f = partesFecha(valor);
  if (!f) return '';
  return `${String(f.dia).padStart(2, '0')}/${String(f.mes).padStart(2, '0')}/${f.anio}`;
}

// --- generación --------------------------------------------------------------

/**
 * Construye el PDF de una constancia.
 *
 * @param {object} constancia  Fila de la tabla `constancias`.
 * @param {object} opciones
 * @param {string} opciones.urlValidacion  URL a la que apunta el QR.
 * @returns {Promise<Uint8Array>}
 */
export async function generarConstanciaPDF(constancia, { urlValidacion }) {
  const doc = await PDFDocument.create();
  doc.registerFontkit(fontkit);

  doc.setTitle(`Constancia ${constancia.folio}`);
  doc.setSubject(constancia.diplomado_nombre);
  doc.setAuthor('Instituto Interamericano de Estudios Superiores de Baja California');
  doc.setProducer('IIESBC');
  doc.setCreator('IIESBC · Módulo de constancias');

  const [script, serif, serifNegrita, display, sans, cuerpo, cuerpoCursiva, institucional] = await Promise.all(
    ['script', 'serif', 'serifNegrita', 'display', 'sans', 'cuerpo', 'cuerpoCursiva', 'institucional'].map(
      async (clave) => doc.embedFont(await leerAsset('fonts', ARCHIVOS_FUENTE[clave]), { subset: true })
    )
  );
  const arial = await doc.embedFont(StandardFonts.Helvetica);
  const arialNegrita = await doc.embedFont(StandardFonts.HelveticaBold);

  const imagenes = {};
  await Promise.all(
    IMAGENES.map(async (nombre) => {
      imagenes[nombre] = await doc.embedPng(await leerAsset('img', nombre));
    })
  );

  const oro = color(COLOR.oro);
  const oroOscuro = color(COLOR.oroOscuro);
  const tinta = color(COLOR.tinta);

  const modulos = (constancia.modulos || []).filter((m) => String(m || '').trim()).slice(0, 6);

  // ---------------------------------------------------------------- página 1
  const p1 = doc.addPage([PAGINA.ancho, PAGINA.alto]);
  p1.drawImage(imagenes['fondo-marco.png'], { x: 0, y: 0, width: PAGINA.ancho, height: PAGINA.alto });

  p1.drawImage(imagenes['logo-iiesbc.png'], {
    x: P1.logoIiesbc.x, y: P1.logoIiesbc.y, width: P1.logoIiesbc.ancho, height: P1.logoIiesbc.alto,
  });
  p1.drawImage(imagenes['logo-cacp.png'], {
    x: P1.logoCacp.x, y: P1.logoCacp.y, width: P1.logoCacp.ancho, height: P1.logoCacp.alto,
  });
  linea(p1, { ...P1.reglaCacp, color: tinta });

  INSTITUCION.centro.forEach((texto, i) => {
    dibujarCentrado(p1, texto, {
      fuente: institucional, tamano: P1.centro.tamano, centroX: P1.centro.centroX,
      y: P1.centro.ys[i], color: tinta,
    });
  });

  dibujarCentrado(p1, INSTITUCION.claveSep, {
    fuente: serif, tamano: P1.claveSep.tamano, centroX: P1.claveSep.centroX,
    y: P1.claveSep.y, color: tinta,
  });

  dibujarAAncho(p1, 'Otorga la presente', {
    fuente: sans, tamano: P1.otorga.tamano, centroX: P1.otorga.centroX,
    y: P1.otorga.y, color: tinta, anchoObjetivo: P1.otorga.anchoObjetivo,
  });

  dibujarAAncho(p1, 'CONSTANCIA', {
    fuente: serif, tamano: P1.titulo.tamano, centroX: P1.titulo.centroX,
    y: P1.titulo.y, color: oro, anchoObjetivo: P1.titulo.anchoObjetivo,
  });

  dibujar(p1, 'A:', {
    fuente: script, tamano: P1.prefijoNombre.tamano,
    x: P1.prefijoNombre.x, y: P1.prefijoNombre.y, color: tinta,
  });

  // El nombre se encoge si no cabe entre los extremos de la regla.
  const nombre = String(constancia.nombre_completo || '').trim();
  let tamanoNombre = P1.nombre.tamano;
  while (tamanoNombre > 14 && script.widthOfTextAtSize(nombre, tamanoNombre) > P1.nombre.anchoMaximo) {
    tamanoNombre -= 0.5;
  }
  dibujarCentrado(p1, nombre, {
    fuente: script, tamano: tamanoNombre, centroX: P1.nombre.centroX, y: P1.nombre.y, color: tinta,
  });
  linea(p1, { ...P1.reglaNombre, color: oro });

  // Cuerpo: dos párrafos centrados que se mantienen equilibrados sobre el
  // mismo eje aunque el nombre del diplomado ocupe más renglones.
  const parrafo1 = partirEnLineas(
    [
      { texto: 'En virtud de haber concluido el programa:', fuente: cuerpo },
      { texto: constancia.diplomado_nombre, fuente: cuerpoCursiva },
    ],
    P1.cuerpo.anchoMaximo,
    P1.cuerpo.tamano
  );
  const parrafo2 = partirEnLineas(
    [
      {
        texto: `Satisfactoriamente con valor de ${constancia.horas_totales} horas curriculares, los cuales se ${INSTITUCION.cuerpoCierre}`,
        fuente: cuerpo,
      },
    ],
    P1.cuerpo.anchoMaximo,
    P1.cuerpo.tamano
  );

  const alturaBloque =
    (parrafo1.length - 1) * P1.cuerpo.interlineado +
    P1.cuerpo.separacionParrafos +
    (parrafo2.length - 1) * P1.cuerpo.interlineado;
  let y = P1.cuerpo.centroVertical + alturaBloque / 2;

  for (const l of parrafo1) {
    dibujarLineaCentrada(p1, l, { tamano: P1.cuerpo.tamano, centroX: P1.cuerpo.centroX, y, color: tinta });
    y -= P1.cuerpo.interlineado;
  }
  y -= P1.cuerpo.separacionParrafos - P1.cuerpo.interlineado;
  for (const l of parrafo2) {
    dibujarLineaCentrada(p1, l, { tamano: P1.cuerpo.tamano, centroX: P1.cuerpo.centroX, y, color: tinta });
    y -= P1.cuerpo.interlineado;
  }

  const firmantes = [INSTITUCION.directores.cacp, INSTITUCION.directores.iiesbc];
  P1.firmas.forEach((firma, i) => {
    p1.drawImage(imagenes[firma.imagen], {
      x: firma.caja.x, y: firma.caja.y, width: firma.caja.ancho, height: firma.caja.alto,
    });
    linea(p1, { ...firma.regla, color: oro });
    dibujarCentrado(p1, firmantes[i].nombre, {
      fuente: display, tamano: P1.tamanoFirmas, centroX: firma.centroX, y: firma.yNombre, color: tinta,
    });
    dibujarCentrado(p1, firmantes[i].cargo, {
      fuente: firma.cargoEnNegrita ? serifNegrita : serif,
      tamano: P1.tamanoFirmas, centroX: firma.centroX, y: firma.yCargo, color: tinta,
    });
  });

  dibujarCentrado(p1, `Expedido el ${fechaLarga(constancia.fecha_emision)}`, {
    fuente: cuerpo, tamano: P1.expedido.tamano, centroX: P1.expedido.centroX, y: P1.expedido.y, color: tinta,
  });

  p1.drawImage(imagenes['banda-avales.png'], {
    x: P1.bandaAvales.x, y: P1.bandaAvales.y, width: P1.bandaAvales.ancho, height: P1.bandaAvales.alto,
  });

  // ---------------------------------------------------------------- página 2
  const p2 = doc.addPage([PAGINA.ancho, PAGINA.alto]);
  p2.drawImage(imagenes['fondo-marco.png'], { x: 0, y: 0, width: PAGINA.ancho, height: PAGINA.alto });

  dibujar(p2, winAnsi('ESTE DOCUMENTO AVALA LOS SIGUIENTES MÓDULOS DEL PROGRAMA'), {
    fuente: arialNegrita, tamano: P2.encabezado.tamano, x: P2.encabezado.x, y: P2.encabezado.y, color: tinta,
  });

  // Tabla de módulos: crece o se encoge según cuántos módulos traiga la constancia.
  const t = P2.tabla;
  const yEncabezadoInferior = t.yTope - t.altoEncabezado;
  const yBase = yEncabezadoInferior - modulos.length * t.altoFila;

  linea(p2, { x0: t.x0, x1: t.x1, y: t.yTope, grosor: t.grosor, color: oro });
  linea(p2, { x0: t.x0, x1: t.x1, y: yEncabezadoInferior, grosor: t.grosor, color: oro });
  for (let i = 1; i <= modulos.length; i += 1) {
    linea(p2, { x0: t.x0, x1: t.x1, y: yEncabezadoInferior - i * t.altoFila, grosor: t.grosor, color: oro });
  }
  for (const x of [t.x0 + 0.8, t.divisorX, t.x1 - 0.8]) {
    p2.drawRectangle({ x: x - t.grosor / 2, y: yBase, width: t.grosor, height: t.yTope - yBase, color: oro });
  }

  const centroNumero = (t.x0 + t.divisorX) / 2;
  const centroModulo = (t.divisorX + t.x1) / 2;
  const yTextoEncabezado = yEncabezadoInferior + 13.7;

  dibujarCentrado(p2, winAnsi('Módulos'), {
    fuente: arialNegrita, tamano: t.tamanoEncabezado, centroX: centroNumero, y: yTextoEncabezado, color: oroOscuro,
  });
  dibujarCentrado(p2, winAnsi('Nombre Módulo'), {
    fuente: arialNegrita, tamano: t.tamanoEncabezado, centroX: centroModulo, y: yTextoEncabezado, color: oroOscuro,
  });

  modulos.forEach((modulo, i) => {
    const yFila = yEncabezadoInferior - (i + 1) * t.altoFila;
    dibujarCentrado(p2, String(i + 1), {
      fuente: serif, tamano: t.tamanoNumero, centroX: centroNumero, y: yFila + t.baseNumero, color: tinta,
    });

    // Un módulo con nombre largo se encoge antes que salirse de la celda.
    const texto = winAnsi(String(modulo).trim());
    let tamano = t.tamanoModulo;
    const anchoCelda = t.x1 - t.divisorX - 20;
    while (tamano > 6 && arial.widthOfTextAtSize(texto, tamano) > anchoCelda) tamano -= 0.25;
    dibujarCentrado(p2, texto, {
      fuente: arial, tamano, centroX: centroModulo, y: yFila + t.baseModulo, color: tinta,
    });
  });

  INSTITUCION.leyendaValidez.forEach((texto, i) => {
    dibujarJustificado(p2, winAnsi(texto), {
      fuente: arialNegrita,
      tamano: P2.leyenda.tamano,
      x: P2.leyenda.x,
      y: P2.leyenda.yPrimera - i * P2.leyenda.interlineado,
      anchoObjetivo: P2.leyenda.anchoJustificado,
      color: tinta,
      ultima: i === INSTITUCION.leyendaValidez.length - 1,
    });
  });

  p2.drawImage(imagenes['logo-cacp-p2.png'], {
    x: P2.logoCacp.x, y: P2.logoCacp.y, width: P2.logoCacp.ancho, height: P2.logoCacp.alto,
  });
  p2.drawImage(imagenes['logo-iiesbc-p2.png'], {
    x: P2.logoIiesbc.x, y: P2.logoIiesbc.y, width: P2.logoIiesbc.ancho, height: P2.logoIiesbc.alto,
  });

  const r = P2.registro;
  dibujar(p2, winAnsi(`AMPARANDO UN TOTAL DE ${constancia.horas_totales} HORAS`), {
    fuente: arialNegrita, tamano: r.tamano, x: r.x, y: r.ys[0], color: tinta,
  });
  dibujar(p2, 'FOLIO', { fuente: arialNegrita, tamano: r.tamano, x: r.x, y: r.ys[1], color: tinta });
  dibujar(p2, winAnsi(constancia.folio), {
    fuente: arialNegrita, tamano: r.tamano, x: r.x + r.sangriaFolio, y: r.ys[1], color: tinta,
  });
  dibujar(p2, winAnsi(`REGISTRADA EN LIBRO NO. ${constancia.libro_no ?? 1}`), {
    fuente: arialNegrita, tamano: r.tamano, x: r.x, y: r.ys[2], color: tinta,
  });
  dibujar(p2, `CON FECHA: ${fechaCorta(constancia.fecha_emision)}`, {
    fuente: arialNegrita, tamano: r.tamano, x: r.x, y: r.ys[3], color: tinta,
  });

  // QR de validación, junto al bloque registral.
  const pngQR = await QRCode.toBuffer(urlValidacion, {
    type: 'png',
    errorCorrectionLevel: 'M',
    margin: 1,
    scale: 10,
    color: { dark: `${COLOR.qr}FF`, light: `${COLOR.crema}FF` },
  });
  const imagenQR = await doc.embedPng(pngQR);
  p2.drawImage(imagenQR, { x: P2.qr.x, y: P2.qr.y, width: P2.qr.lado, height: P2.qr.lado });
  dibujarCentrado(p2, 'Verifica esta constancia', {
    fuente: arial, tamano: P2.qr.tamanoLeyenda,
    centroX: P2.qr.x + P2.qr.lado / 2, y: P2.qr.yLeyenda, color: tinta,
  });

  return doc.save();
}
