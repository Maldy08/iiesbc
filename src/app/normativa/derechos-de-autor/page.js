import Link from "next/link";

export const metadata = {
  title: "Reglamento de Derechos de Autor y Propiedad Intelectual | IIESBC",
  description:
    "Consulta el Reglamento de Derechos de Autor y Propiedad Intelectual del Instituto Interamericano de Estudios Superiores de Baja California.",
};

const PDF_URL = "/documentos/reglamento-derechos-de-autor-iiesbc.pdf";

export default function DerechosDeAutorPage() {
  return (
    <main id="main" className="relative isolate bg-[var(--color-surface)]">

      {/* ─── Hero ─── */}
      <section className="relative isolate overflow-hidden bg-[#0c1208]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(246,140,36,0.15) 0%, transparent 55%), radial-gradient(ellipse at bottom left, rgba(102,130,44,0.18) 0%, transparent 55%)",
          }}
        />

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <span className="absolute top-[28%] left-[14%] w-1.5 h-1.5 rounded-full bg-white/40 animate-float-slow" />
          <span className="absolute top-[55%] right-[20%] w-2 h-2 rounded-full bg-[#f68c24]/35 animate-float-medium" style={{ animationDelay: "1.1s" }} />
          <span className="absolute bottom-[25%] left-[52%] w-1.5 h-1.5 rounded-full bg-[#a5c94c]/50 animate-float-fast" style={{ animationDelay: "0.7s" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 backdrop-blur-xl mb-10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-[#a5c94c] opacity-75 animate-ping" />
                <span className="relative h-2 w-2 rounded-full bg-[#a5c94c]" />
              </span>
              <span className="text-xs font-medium tracking-[0.18em] uppercase text-white/90">
                Normativa Institucional
              </span>
            </div>

            <h1 className="font-display font-extrabold text-display-xl tracking-display-tight text-balance text-white mb-8">
              Derechos de Autor y{" "}
              <span className="text-[#f68c24]">Propiedad Intelectual</span>
            </h1>

            <div className="relative mb-10 h-px w-40 overflow-hidden bg-gradient-to-r from-[#66822c] via-[#f68c24] to-transparent">
              <span className="absolute inset-0 animate-shimmer bg-white/60" />
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-pretty text-white/85 lg:text-xl">
              El presente reglamento establece las normas que rigen la creación,
              uso, protección y divulgación de obras intelectuales generadas en el
              marco de las actividades académicas, de investigación y administrativas
              del IIESBC.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Contenido ─── */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_auto] lg:items-start">

          {/* Texto editorial */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px w-8 bg-[#66822c]" />
              <span className="text-eyebrow text-[#66822c]">Documento oficial</span>
            </div>
            <h2 className="font-display font-bold text-display-lg tracking-display-tight text-balance text-[#1a1f14] mb-6">
              Reglamento de Derechos de{" "}
              <span className="text-[#66822c]">Autor</span>
            </h2>

            <div className="space-y-4 text-[#4a5240] leading-relaxed text-pretty">
              <p>
                Este reglamento forma parte del marco normativo del Instituto
                Interamericano de Estudios Superiores de Baja California y tiene
                como propósito garantizar el reconocimiento y la protección de las
                obras intelectuales producidas por la comunidad académica.
              </p>
              <p>
                Aplica a docentes, estudiantes, investigadores y personal
                administrativo que, en el ejercicio de sus funciones o dentro de
                los programas académicos del instituto, generen cualquier tipo de
                producción intelectual, artística o científica.
              </p>
              <p>
                Su lectura y observancia son obligatorias para todos los miembros
                de la comunidad IIESBC.
              </p>
            </div>

            <blockquote className="mt-10 pl-6 border-l-2 border-[#f68c24]">
              <p className="font-display text-xl font-medium text-[#1a1f14]">
                "La propiedad intelectual es un derecho que el IIESBC reconoce,
                promueve y defiende como parte de su compromiso con la excelencia
                académica."
              </p>
            </blockquote>
          </div>

          {/* Tarjeta de descarga */}
          <div className="relative w-full max-w-sm lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-white p-8 ring-1 ring-black/5 shadow-[var(--shadow-card)]">
              <span className="absolute top-0 left-0 right-0 h-px bg-[#66822c]" />

              <div
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ backgroundColor: "rgba(102,130,44,0.08)" }}
              >
                <IconPDF stroke="#66822c" />
              </div>

              <p className="text-eyebrow text-[#8a9180] mb-1">Documento PDF</p>
              <h3 className="font-display text-lg font-semibold text-[#1a1f14] leading-snug mb-1">
                Reglamento de Derechos de Autor y Propiedad Intelectual
              </h3>
              <p className="text-sm text-[#8a9180] mb-8">IIESBC · Vigente</p>

              <a
                href={PDF_URL}
                download
                className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#66822c] px-6 py-3.5 font-display text-sm font-semibold text-white transition-all duration-300 hover:bg-[#556e23] shadow-[0_14px_36px_-12px_rgba(102,130,44,0.7)] hover:shadow-[0_16px_40px_-8px_rgba(102,130,44,0.9)]"
              >
                <IconDownload />
                Descargar reglamento
              </a>

              <a
                href={PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--color-line)] px-6 py-3 font-display text-sm font-medium text-[#4a5240] transition-colors duration-300 hover:bg-[var(--color-surface-alt)]"
              >
                <IconEye />
                Ver en el navegador
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA final ─── */}
      <section className="relative isolate overflow-hidden bg-[#0c1208]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top left, rgba(102,130,44,0.18) 0%, transparent 55%), radial-gradient(ellipse at bottom right, rgba(246,140,36,0.12) 0%, transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24 text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 backdrop-blur-xl mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-[#a5c94c]" />
            <span className="text-xs font-medium tracking-[0.18em] uppercase text-white/80">
              ¿Tienes dudas?
            </span>
          </div>
          <h2 className="font-display font-bold text-display-lg tracking-display-tight text-balance text-white mb-4">
            Contáctanos para más{" "}
            <span className="text-[#f68c24]">información</span>
          </h2>
          <p className="mx-auto max-w-xl text-white/70 leading-relaxed mb-10">
            Si tienes preguntas sobre la aplicación de este reglamento o sobre
            la protección de tu propiedad intelectual dentro del IIESBC,
            nuestro equipo está disponible para orientarte.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2.5 rounded-xl bg-[#f68c24] px-8 py-4 font-display font-semibold text-white transition-all duration-300 hover:bg-[#cd751e] shadow-[0_14px_36px_-12px_rgba(246,140,36,0.7)] hover:shadow-[0_16px_40px_-8px_rgba(246,140,36,0.9)]"
          >
            Ir a contacto
          </Link>
        </div>
      </section>
    </main>
  );
}

function IconPDF({ stroke }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="13" y2="17" />
    </svg>
  );
}

function IconDownload() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function IconEye() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
