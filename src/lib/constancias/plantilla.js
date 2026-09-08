// Plantilla de la constancia IIESBC - CACP.
//
// Todas las coordenadas salieron de medir el PDF original
// (Adriana Amezcua Garibay.pdf): página carta 612x792 pt, origen abajo-izquierda.
// Los valores están en puntos y replican el documento hecho a mano, así que
// cualquier ajuste visual se hace aquí y no en el generador.

export const PAGINA = { ancho: 612, alto: 792 };

export const COLOR = {
  oro: '#9B8357',      // CONSTANCIA, reglas y bordes de la tabla
  oroOscuro: '#624E2B', // encabezados de la tabla de módulos
  tinta: '#000000',
  crema: '#FCF1D7',     // fondo del marco, para el QR
  qr: '#332B1E',
};

// Datos institucionales fijos del documento
export const INSTITUCION = {
  claveSep: 'CLAVE: 02MSU0103J',
  centro: ['CENTRO DE ACTUALIZACIÓN', 'Y CAPACITACIÓN PROFESIONAL'],
  directores: {
    cacp: { nombre: 'Ing. Carlos Sebastián Guillen Arguello', cargo: 'DIRECTOR CACP' },
    iiesbc: { nombre: 'Dr. Rafael López Oñate', cargo: 'DIRECTOR GENERAL IIESBC' },
  },
  // Texto tal cual aparece en el documento original (incluye "concocimiento").
  cuerpoCierre: 'otorgan de acuerdo en concocimiento, habilidades, destrezas y aptitudes.',
  leyendaValidez: [
    'ESTA CONSTANCIA ES VÁLIDA EN TODO EL TERRITORIO DE LOS ESTADOS UNIDOS',
    'MEXICANOS Y NO REQUIERE TRÁMITES ADICIONALES DE LEGALIZACIÓN, ESTE',
    'DOCUMENTO PARA SER VÁLIDO NO DEBERÁ PRESENTAR TACHADURAS,',
    'RASPADURAS O ENMENDADURAS.',
  ],
};

// Página 1 ------------------------------------------------------------------
export const P1 = {
  logoIiesbc: { x: 127.0, y: 592.7, ancho: 171.1, alto: 121.4 },
  logoCacp: { x: 300.9, y: 576.9, ancho: 183.8, alto: 183.8 },
  reglaCacp: { x0: 311.5, x1: 485.0, y: 622.1, grosor: 1.2, color: COLOR.tinta },
  centro: { centroX: 392.95, tamano: 9.7, ys: [604, 594] },
  claveSep: { centroX: 212.3, y: 583, tamano: 9.3 },
  otorga: { centroX: 306, y: 556, tamano: 15.2, anchoObjetivo: 166.2 },
  titulo: { centroX: 306, y: 500, tamano: 34.7, anchoObjetivo: 272.6 },
  prefijoNombre: { x: 110.4, y: 436, tamano: 23.1 },
  nombre: { centroX: 306, y: 430, tamano: 25, anchoMaximo: 290 },
  reglaNombre: { x0: 167.4, x1: 444.6, y: 416.8, grosor: 1.0, color: COLOR.oro },
  cuerpo: {
    tamano: 11.8,
    interlineado: 16.4,
    anchoMaximo: 396,
    centroX: 306,
    // El bloque de texto se mantiene centrado en este eje aunque cambie el
    // número de líneas, para que no se recorra hacia las firmas.
    centroVertical: 342,
    separacionParrafos: 28,
  },
  firmas: [
    {
      imagen: 'firma-cacp.png',
      caja: { x: 110.7, y: 196.5, ancho: 154.5, alto: 154.5 },
      regla: { x0: 100.8, x1: 282.0, y: 247.7, grosor: 0.8 },
      centroX: 192.95,
      yNombre: 230,
      yCargo: 211.3,
      cargoEnNegrita: false,
    },
    {
      imagen: 'firma-iiesbc.png',
      caja: { x: 383.5, y: 232.7, ancho: 95.2, alto: 74.2 },
      regla: { x0: 336.9, x1: 518.1, y: 245.3, grosor: 0.8 },
      centroX: 429.25,
      yNombre: 229.3,
      yCargo: 210.6,
      cargoEnNegrita: true,
    },
  ],
  tamanoFirmas: 10.2,
  expedido: { centroX: 306, y: 174, tamano: 11.8 },
  bandaAvales: { x: 76.8, y: 80.7, ancho: 458.2, alto: 30.0 },
};

// Página 2 ------------------------------------------------------------------
export const P2 = {
  encabezado: { x: 83.4, y: 672.5, tamano: 10.5 },
  tabla: {
    x0: 83.9,
    x1: 529.1,
    divisorX: 195.0,
    yTope: 664.0,
    altoEncabezado: 42.7, // 664.0 -> 621.3
    altoFila: 39.2,
    grosor: 0.8,
    tamanoEncabezado: 13,
    tamanoNumero: 11.2,
    tamanoModulo: 9,
    baseNumero: 12.9, // desde el borde inferior de la fila
    baseModulo: 14.7,
  },
  leyenda: { x: 83.4, yPrimera: 357.9, interlineado: 14.25, tamano: 10.5, anchoJustificado: 445.7 },
  logoCacp: { x: 297.1, y: 192.8, ancho: 105.7, alto: 80.3 },
  logoIiesbc: { x: 420.1, y: 179.9, ancho: 108.7, alto: 105.7 },
  registro: { x: 83.0, tamano: 10.5, ys: [159.1, 145.4, 130.6, 116.3], sangriaFolio: 34.6 },
  qr: { x: 447, y: 97, lado: 82, tamanoLeyenda: 6.2, yLeyenda: 88 },
};

export const MESES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];
