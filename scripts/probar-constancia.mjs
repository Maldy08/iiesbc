// Genera una constancia de ejemplo sin tocar la base de datos.
//
//   npm run constancia:demo
//   npm run constancia:demo -- "Nombre del Egresado" 4
//
// Sirve para revisar el diseño del PDF (tipografías, márgenes, QR, tabla de
// módulos) mientras se itera, y para comprobar que la tabla se ajusta cuando el
// diplomado tiene menos de 6 módulos.

import { writeFileSync } from 'node:fs';
import { generarConstanciaPDF } from '../src/lib/constancias/pdf.js';

const [nombreArg, modulosArg] = process.argv.slice(2);

const MODULOS = [
  'Neurociencias de las Adicciones',
  'Neuropsicopatología de las Adicciones',
  'Psicopatología de las Adicciones y Comorbilidades',
  'Tratamiento Cognitivo Conductual en Adicciones',
  'Intervenciones Conductuales y Prevención de Recaídas',
  'Intervención Integral y Abordajes Multimodales en Adicciones',
];

const cuantosModulos = Math.min(Math.max(Number(modulosArg) || 6, 1), 6);

const constancia = {
  folio: 'IIESBC-2026-DI-NATCC-CO-0001',
  nombre_completo: nombreArg || 'Adriana Amezcua Garibay',
  diplomado_nombre:
    'Diplomado en Neuropsicopatología de las Adicciones y Tratamiento Cognitivo Conductual',
  horas_totales: 128,
  libro_no: 1,
  fecha_emision: '2026-08-12',
  modulos: MODULOS.slice(0, cuantosModulos),
};

const pdf = await generarConstanciaPDF(constancia, {
  urlValidacion: `https://www.iiesbc.mx/validar/${constancia.folio}`,
});

const salida = 'constancia-demo.pdf';
writeFileSync(salida, pdf);

console.log(`Listo: ${salida}`);
console.log(`  ${constancia.nombre_completo} · ${cuantosModulos} módulos · ${(pdf.length / 1024 / 1024).toFixed(2)} MB`);
console.log('  Ábrelo con: open constancia-demo.pdf');
