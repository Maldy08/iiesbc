// Folio de constancias: IIESBC-2026-DI-NATCC-CO-0001
//
//   IIESBC  prefijo institucional
//   2026    año de emisión
//   DI      tipo de programa (diplomado)
//   NATCC   clave del diplomado
//   CO      tipo de documento (constancia)
//   0001    consecutivo, reinicia por año y por diplomado

export const PREFIJO = 'IIESBC';
export const TIPO_PROGRAMA = 'DI';
export const TIPO_DOCUMENTO = 'CO';
export const DIGITOS_CONSECUTIVO = 4;

const PATRON = /^IIESBC-(\d{4})-([A-Z]{2})-([A-Z0-9]{2,10})-([A-Z]{2})-(\d{3,6})$/;

export function construirFolio({ anio, clave, consecutivo }) {
  const numero = String(consecutivo).padStart(DIGITOS_CONSECUTIVO, '0');
  return `${PREFIJO}-${anio}-${TIPO_PROGRAMA}-${clave.toUpperCase()}-${TIPO_DOCUMENTO}-${numero}`;
}

export function normalizarFolio(folio) {
  return String(folio || '').trim().toUpperCase().replace(/\s+/g, '');
}

export function esFolioValido(folio) {
  return PATRON.test(normalizarFolio(folio));
}

export function desglosarFolio(folio) {
  const coincidencia = PATRON.exec(normalizarFolio(folio));
  if (!coincidencia) return null;
  const [, anio, tipoPrograma, clave, tipoDocumento, consecutivo] = coincidencia;
  return {
    anio: Number(anio),
    tipoPrograma,
    clave,
    tipoDocumento,
    consecutivo: Number(consecutivo),
  };
}
