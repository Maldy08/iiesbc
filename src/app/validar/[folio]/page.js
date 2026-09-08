import Link from 'next/link';

import { validarFolioPublico } from '@/lib/constancias/service';
import { normalizarFolio } from '@/lib/constancias/folio';

export const dynamic = 'force-dynamic';

// Cada folio es un dato de una persona: la página es pública porque el QR lleva
// a ella, pero no debe terminar indexada en buscadores.
export const metadata = {
  title: 'Validación de constancia',
  robots: { index: false, follow: false },
};

const CAMPOS = [
  { clave: 'folio', etiqueta: 'Folio', mono: true },
  { clave: 'nombre_completo', etiqueta: 'Nombre completo' },
  { clave: 'diplomado_nombre', etiqueta: 'Diplomado' },
];

function Marco({ children }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0c1208] py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_20%_0%,rgba(102,130,44,0.28),transparent),radial-gradient(50%_50%_at_85%_20%,rgba(246,140,36,0.18),transparent)]" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export default async function PaginaValidacion({ params }) {
  const { folio } = await params;
  const consultado = normalizarFolio(decodeURIComponent(folio));
  const resultado = await validarFolioPublico(consultado);

  const encabezado = resultado.valida
    ? { chip: 'Documento verificado', titulo: 'Constancia', resalte: 'válida', color: '#a5c94c' }
    : resultado.motivo === 'cancelada'
      ? { chip: 'Documento cancelado', titulo: 'Constancia', resalte: 'cancelada', color: '#f68c24' }
      : { chip: 'Sin coincidencias', titulo: 'Constancia', resalte: 'no válida', color: '#f68c24' };

  return (
    <Marco>
      <div className="flex items-center gap-2.5">
        <span className="relative flex h-2 w-2">
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
            style={{ backgroundColor: encabezado.color }}
          />
          <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: encabezado.color }} />
        </span>
        <span className="text-eyebrow text-white/70">{encabezado.chip}</span>
      </div>

      <h1 className="mt-5 font-display text-4xl font-semibold tracking-[-0.02em] text-white sm:text-5xl">
        {encabezado.titulo} <span style={{ color: encabezado.color }}>{encabezado.resalte}</span>
      </h1>
      <div className="mt-6 h-px w-40 bg-gradient-to-r from-[#66822c] via-[#f68c24] to-transparent" />

      {resultado.valida ? (
        <>
          <p className="mt-6 max-w-xl text-pretty text-white/70">
            Este documento aparece en el registro del Instituto Interamericano de Estudios Superiores de
            Baja California y del Centro de Actualización y Capacitación Profesional.
          </p>

          <dl className="mt-10 overflow-hidden rounded-[1.75rem] bg-white/95 shadow-[var(--shadow-ring)] backdrop-blur">
            {CAMPOS.map((campo) => (
              <div
                key={campo.clave}
                className="border-b border-[var(--color-line)] px-7 py-6 last:border-0 sm:flex sm:items-baseline sm:gap-8"
              >
                <dt className="text-eyebrow shrink-0 text-[var(--color-ink-muted)] sm:w-44">{campo.etiqueta}</dt>
                <dd
                  className={`mt-1.5 text-[var(--color-ink)] sm:mt-0 ${
                    campo.mono ? 'font-mono text-sm tabular-nums' : 'font-display text-lg font-medium'
                  }`}
                >
                  {resultado.constancia[campo.clave]}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-sm text-white/50">
            Por protección de datos personales, el resto de la información del expediente no se muestra
            en esta consulta.
          </p>
        </>
      ) : (
        <>
          <p className="mt-6 max-w-xl text-pretty text-white/70">
            {resultado.motivo === 'cancelada'
              ? 'Este folio existe en el registro pero la constancia fue cancelada por el instituto, por lo que no debe considerarse un documento vigente.'
              : 'No encontramos ninguna constancia con este folio. Verifica que esté capturado correctamente o comunícate con el instituto.'}
          </p>

          <div className="mt-8 rounded-[1.75rem] bg-white/10 px-7 py-6 ring-1 ring-white/15">
            <span className="text-eyebrow text-white/50">Folio consultado</span>
            <p className="mt-2 break-all font-mono text-sm text-white">{consultado || '—'}</p>
          </div>
        </>
      )}

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/validar"
          className="rounded-full bg-[var(--color-primary-orange)] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_36px_-12px_rgba(246,140,36,0.7)] transition-all hover:bg-[var(--color-primary-dark-orange)]"
        >
          Consultar otro folio
        </Link>
        <Link
          href="/contacto"
          className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60"
        >
          Contactar al instituto
        </Link>
      </div>
    </Marco>
  );
}
