// Catálogo de centros que emiten constancias bajo el aval del IIESBC.
//
// Vive en código y no en Supabase a propósito: dar de alta un centro obliga a
// subir su logo y su firma a assets/img, así que de todos modos hay que
// desplegar. Una tabla solo agregaría un lugar más donde desincronizarse.
//
// Fuente: "ENLISTADO DE CENTROS Y FIRMAS" (Dirección, septiembre 2026). Los
// nueve centros se reparten en tres bloques de firma; los del bloque de CACP
// comparten logo y firmante porque así lo entregó la Dirección.

// Bloques de firma. Un bloque es la combinación logo + firma + firmante que
// comparten varios centros.
const GUILLEN = {
  firma: 'firma-guillen.png',
  firmante: { nombre: 'Ing. Carlos Sebastián Guillen Arguello', cargo: 'DIRECTOR CACP' },
};

const SERRANO = {
  firma: 'firma-serrano.png',
  // TODO(Dirección): el enlistado no indica el cargo del Lic. Serrano, solo el
  // sello que acompaña cada bloque. Confirmar antes de emitir en firme.
  firmante: { nombre: 'Lic. Efraín Leopoldo Serrano Cruz', cargo: 'DIRECTOR GRUPO CEFIDCA' },
};

const CACP = {
  logo: 'logo-cacp.png',
  logoP2: 'logo-cacp-p2.png',
  // El CACP conserva las cajas medidas del documento original para que las
  // constancias ya emitidas se regeneren idénticas. Los demás centros usan las
  // cajas genéricas de plantilla.js, que ajustan la imagen sin deformarla.
  cajaLogo: { x: 300.9, y: 576.9, ancho: 183.8, alto: 183.8, ajuste: 'estirar' },
  cajaLogoP2: { x: 297.1, y: 192.8, ancho: 105.7, alto: 80.3, ajuste: 'estirar' },
  cajaFirma: { x: 110.7, y: 196.5, ancho: 154.5, alto: 154.5, ajuste: 'estirar' },
};

const CEFIC = { logo: 'logo-cefic.png' };
const IDCA = { logo: 'logo-idca.png' };

/**
 * @typedef {object} Centro
 * @property {string}   clave       Identificador corto; es lo que se guarda en `constancias.centro_clave`.
 * @property {string}   nombre      Nombre oficial completo, para el panel y los listados.
 * @property {string[]} encabezado  Las dos líneas que van bajo el logo en la página 1.
 * @property {string}   logo        Archivo en assets/img para la página 1.
 * @property {string}   [logoP2]    Archivo para la página 2; si falta se reusa `logo`.
 * @property {string}   firma       Archivo de la firma del director del centro.
 * @property {object}   firmante    { nombre, cargo } que se imprime bajo la firma.
 */

/** @type {Centro[]} */
export const CENTROS = [
  {
    clave: 'CACP',
    nombre: 'Centro Latinoamericano de Actualización y Capacitación Profesional',
    // Texto exacto del documento original: no es el nombre oficial completo,
    // pero es el que llevan las constancias ya emitidas.
    encabezado: ['CENTRO DE ACTUALIZACIÓN', 'Y CAPACITACIÓN PROFESIONAL'],
    ...CACP,
    ...GUILLEN,
  },
  {
    clave: 'CIE',
    nombre: 'Centro Integral Educativo',
    encabezado: ['CENTRO INTEGRAL', 'EDUCATIVO'],
    ...CACP,
    ...GUILLEN,
  },
  {
    clave: 'CLEC',
    nombre: 'Conexión Latinoamericana de Educación Continua',
    encabezado: ['CONEXIÓN LATINOAMERICANA', 'DE EDUCACIÓN CONTINUA'],
    ...CACP,
    ...GUILLEN,
  },
  {
    clave: 'REC',
    nombre: 'Red de Educación Continua',
    encabezado: ['RED DE EDUCACIÓN', 'CONTINUA'],
    ...CACP,
    ...GUILLEN,
  },
  {
    clave: 'IIE',
    nombre: 'Instituto de Innovación Educativa',
    encabezado: ['INSTITUTO DE INNOVACIÓN', 'EDUCATIVA'],
    ...CACP,
    ...GUILLEN,
  },
  {
    clave: 'SIE',
    nombre: 'Sistema Innova Educativo',
    encabezado: ['SISTEMA INNOVA', 'EDUCATIVO'],
    ...CACP,
    ...GUILLEN,
  },
  {
    clave: 'CEFIC',
    nombre: 'Centro de Fisioterapia Continua',
    encabezado: ['CENTRO DE FISIOTERAPIA', 'CONTINUA'],
    ...CEFIC,
    ...SERRANO,
  },
  {
    clave: 'IAJFF',
    nombre: 'Instituto de Actualización Jurídica, Fiscal y Forense',
    encabezado: ['INSTITUTO DE ACTUALIZACIÓN', 'JURÍDICA, FISCAL Y FORENSE'],
    ...CEFIC,
    ...SERRANO,
  },
  {
    clave: 'IDCA',
    nombre: 'Instituto de Desarrollo de Competencias Académicas',
    encabezado: ['INSTITUTO DE DESARROLLO', 'DE COMPETENCIAS ACADÉMICAS'],
    ...IDCA,
    ...SERRANO,
    firmante: { ...SERRANO.firmante, cargo: 'DIRECTOR IDCA' },
  },
];

/** Centro con el que se emitía antes de que existiera el catálogo. */
export const CLAVE_CENTRO_PREDETERMINADO = 'CACP';

const PORCLAVE = new Map(CENTROS.map((centro) => [centro.clave, centro]));

/**
 * Devuelve el centro de una clave. Ante una clave desconocida —una constancia
 * vieja, un renglón raro del Excel— cae al CACP en lugar de reventar: el PDF
 * siempre se tiene que poder generar.
 *
 * @param {string} clave
 * @returns {Centro}
 */
export function obtenerCentro(clave) {
  return PORCLAVE.get(normalizarClaveCentro(clave)) ?? PORCLAVE.get(CLAVE_CENTRO_PREDETERMINADO);
}

/** @param {string} clave */
export function normalizarClaveCentro(clave) {
  return String(clave ?? '').trim().toUpperCase();
}

/** @param {string} clave */
export function esClaveCentro(clave) {
  return PORCLAVE.has(normalizarClaveCentro(clave));
}

/** Nombre del centro para listados y pantallas; nunca lanza. */
export function nombreCentro(clave) {
  return obtenerCentro(clave).nombre;
}

/** Los archivos de imagen que el generador tiene que precargar. */
export function archivosDeCentros() {
  const archivos = new Set();
  for (const centro of CENTROS) {
    archivos.add(centro.logo);
    archivos.add(centro.logoP2 ?? centro.logo);
    archivos.add(centro.firma);
  }
  return [...archivos];
}
