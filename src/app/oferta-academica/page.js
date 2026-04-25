"use client";

import Image from "next/image";
import Link from "next/link";

export default function OfertaAcademica() {
  const licenciaturas = [
    {
      title: "Licenciatura en Derecho",
      href: "/oferta-academica/licenciaturas/derecho",
      desc: "Formación sólida en el ámbito jurídico con enfoque práctico y ético.",
      icon: "⚖️",
    },
    {
      title: "Licenciatura en Criminología",
      href: "/oferta-academica/licenciaturas/criminologia",
      desc: "Estudia el fenómeno delictivo desde una perspectiva científica y humana.",
      icon: "🕵️",
    },
    {
      title: "Licenciatura en Ciencias de la Educación",
      href: "/oferta-academica/licenciaturas/ciencias-de-la-educacion",
      desc: "Diseño, gestión e innovación educativa para contextos reales.",
      icon: "📚",
    },
  ];

  const maestrias = [
    {
      title: "Maestría en Educación",
      href: "/oferta-academica/maestrias/educacion",
      desc: "Desarrolla competencias para liderar procesos de enseñanza-aprendizaje.",
      icon: "🎓",
    },
    {
      title: "Maestría en Administración Competitiva",
      href: "/oferta-academica/maestrias/administracion-competitiva",
      desc: "Dirección estratégica y gestión organizacional con visión integral.",
      icon: "📈",
    },
    {
      title: "Maestría en Gestión de Políticas Públicas",
      href: "/oferta-academica/maestrias/gestion-de-politicas-publicas",
      desc: "Diseño, evaluación e implementación de políticas públicas efectivas.",
      icon: "🏛️",
    },
  ];

  const doctorados = [
    {
      title: "Doctorado en Administración de Instituciones Educativas",
      href: "/oferta-academica/doctorado/administracion-de-instituciones-educativas",
      desc: "Alta formación para la investigación y gestión educativa a nivel directivo.",
      icon: "🏆",
    },
  ];

  const diplomados = [
    {
      title: "Diplomado en Desarrollo del Lenguaje",
      href: "/oferta-academica/diplomados/desarrollo-del-lenguaje",
      desc: "Estrategias para la intervención y estimulación del lenguaje.",
      icon: "🗣️",
    },
    {
      title: "Diplomado en Trastornos del Neurodesarrollo",
      href: "/oferta-academica/diplomados/transtornos-del-neurodesarrollo",
      desc: "Comprensión y abordaje integral de los TND.",
      icon: "🧠",
    },
  ];

  const secciones = [
    { title: "Licenciaturas", emoji: "🎓", items: licenciaturas, eyebrow: "01", accent: "#66822c" },
    { title: "Maestrías", emoji: "🎯", items: maestrias, eyebrow: "02", accent: "#f68c24" },
    { title: "Doctorado", emoji: "🏆", items: doctorados, eyebrow: "03", accent: "#66822c" },
    { title: "Diplomados", emoji: "🧩", items: diplomados, eyebrow: "04", accent: "#f68c24" },
  ];

  return (
    <main id="main" className="relative isolate bg-[var(--color-surface)]">
      {/* ─────────────────────────── Hero ─────────────────────────── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/oferta-academica/programas-desarrollo-profesional.png"
            alt="Estudiantes adultos colaborando en un entorno académico moderno"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1208]/85 via-[#0c1208]/60 to-[#0c1208]/92" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(246,140,36,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(102,130,44,0.22),transparent_55%)]" />
        </div>

        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
          <span className="absolute top-[24%] left-[18%] w-1.5 h-1.5 rounded-full bg-white/50 animate-float-slow" />
          <span className="absolute top-[42%] right-[22%] w-2 h-2 rounded-full bg-[#f68c24]/45 animate-float-medium" style={{ animationDelay: "1.2s" }} />
          <span className="absolute bottom-[30%] left-[44%] w-1.5 h-1.5 rounded-full bg-[#a5c94c]/60 animate-float-fast" style={{ animationDelay: "0.6s" }} />
        </div>

        <div className="relative min-h-[72vh] flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <div className="max-w-3xl animate-fade-in-up">
              <div className="inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-xl border border-white/15 px-4 py-1.5 rounded-full mb-10">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-[#a5c94c] opacity-75 animate-ping" />
                  <span className="relative rounded-full h-2 w-2 bg-[#a5c94c]" />
                </span>
                <span className="text-white/90 text-xs font-medium tracking-[0.18em] uppercase">
                  Oferta Académica IIESBC
                </span>
              </div>

              <h1 className="font-display font-extrabold text-white text-display-xl tracking-display-tight text-balance mb-8">
                Programas que impulsan tu{" "}
                <span className="text-[#f68c24]">desarrollo profesional</span>
              </h1>

              <div className="relative w-40 h-px bg-gradient-to-r from-[#66822c] via-[#f68c24] to-transparent mb-10 overflow-hidden">
                <span className="absolute inset-0 bg-white/60 animate-shimmer" />
              </div>

              <p className="text-white/85 text-lg lg:text-xl leading-relaxed max-w-2xl text-pretty">
                Descubre nuestra oferta de Licenciaturas, Maestrías, Doctorado y Diplomados,
                diseñados con enfoque práctico, pertinencia social y acompañamiento docente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── Secciones de programas ─────────────────── */}
      {secciones.map((sec, idx) => {
        const bg = idx % 2 === 0 ? 'bg-[var(--color-surface)]' : 'bg-white';
        return (
          <section
            key={sec.title}
            className={`relative py-20 lg:py-24 overflow-hidden ${bg}`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="font-display font-bold text-sm tabular-nums tracking-[0.2em]"
                      style={{ color: sec.accent }}
                    >
                      #{sec.eyebrow}
                    </span>
                    <span className="h-px w-10" style={{ backgroundColor: sec.accent }} />
                    <span className="text-eyebrow" style={{ color: sec.accent }}>
                      Programas
                    </span>
                  </div>

                  <h2 className="font-display text-display-md font-bold text-[#1a1f14] tracking-display-tight text-balance">
                    {sec.title}
                  </h2>
                </div>

                <span
                  className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ backgroundColor: `${sec.accent}15` }}
                >
                  {sec.emoji}
                </span>
              </div>

              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {sec.items.map((p) => (
                  <li key={p.href}>
                    <ProgramCard item={p} accent={sec.accent} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      {/* ─────────────────────── CTA Final ─────────────────────── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#0c1208]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(246,140,36,0.22),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(102,130,44,0.25),transparent_55%)]" />
        </div>

        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
          <span className="absolute top-[28%] left-[20%] w-1.5 h-1.5 rounded-full bg-white/50 animate-float-slow" />
          <span className="absolute bottom-[30%] right-[22%] w-2 h-2 rounded-full bg-[#f68c24]/45 animate-float-medium" style={{ animationDelay: "1.2s" }} />
          <span className="absolute top-[52%] left-[50%] w-1.5 h-1.5 rounded-full bg-[#a5c94c]/60 animate-float-fast" style={{ animationDelay: "0.8s" }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-28">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-[#f68c24]" />
                <span className="text-eyebrow text-[#f68c24]">Orientación</span>
              </div>

              <h3 className="font-display font-extrabold text-white text-display-md tracking-display-tight text-balance mb-4">
                ¿Tienes dudas o necesitas{" "}
                <span className="text-[#f68c24]">orientación?</span>
              </h3>

              <p className="text-white/80 text-lg leading-relaxed text-pretty">
                Nuestro equipo te acompaña para elegir el programa ideal para ti.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contacto"
                className="group inline-flex items-center justify-center gap-2 bg-[#f68c24] hover:bg-[#cd751e] text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-[0_14px_36px_-12px_rgba(246,140,36,0.7)] hover:shadow-[0_16px_40px_-8px_rgba(246,140,36,0.9)] hover:-translate-y-0.5"
              >
                Contactar a IIESBC
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/sobre-nosotros"
                className="group inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/25 px-8 py-4 rounded-full font-semibold text-base backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
              >
                Conoce más de IIESBC
                <span className="inline-flex w-1.5 h-1.5 rounded-full bg-[#a5c94c]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ────────────────────────── Subcomponentes ────────────────────────── */

function ProgramCard({ item, accent }) {
  return (
    <Link
      href={item.href}
      aria-label={`${item.title} - Ver programa`}
      className="group relative block h-full bg-white rounded-[1.5rem] p-6 ring-1 ring-black/5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
    >
      <span
        className="absolute top-0 left-0 right-0 h-px"
        style={{ backgroundColor: `${accent}40` }}
      />

      <div className="flex items-start gap-4">
        <span
          className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundColor: `${accent}15` }}
        >
          {item.icon}
        </span>

        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg font-bold text-[#1a1f14] tracking-display-tight leading-snug mb-2">
            {item.title}
          </h3>
          <p className="text-sm text-[#4a5240] leading-relaxed text-pretty mb-5">
            {item.desc}
          </p>

          <div
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: accent }}
          >
            <span>Ver programa</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>

      <span
        className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{ backgroundColor: accent }}
      />
    </Link>
  );
}
