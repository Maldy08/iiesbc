import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Maestría en Administración Competitiva - IIESBC',
  description: 'Maestría con Reconocimiento de Validez Oficial de Estudios (RVOE). Forma líderes capaces de generar ventajas competitivas en organizaciones.',
  keywords: 'maestría, administración competitiva, RVOE, posgrado, IIESBC, Mexicali',
  openGraph: {
    title: 'Maestría en Administración Competitiva - IIESBC',
    description: 'Maestría con RVOE que forma líderes en gestión competitiva',
    images: ['/images/maestrias/administracion-competitiva.jpg'],
  },
};

export default function MaestriaAdministracionCompetitiva() {
  const planEstudios = [
    {
      cuatrimestre: 1,
      titulo: "PRIMER CUATRIMESTRE",
      materias: ["Administración", "Toma de Decisiones Gerenciales"]
    },
    {
      cuatrimestre: 2,
      titulo: "SEGUNDO CUATRIMESTRE",
      materias: ["Administración Estratégica", "Dirección de Empresas"]
    },
    {
      cuatrimestre: 3,
      titulo: "TERCER CUATRIMESTRE",
      materias: ["Cambio y Desarrollo Organizacional", "Mercadotecnia de los Negocios"]
    },
    {
      cuatrimestre: 4,
      titulo: "CUARTO CUATRIMESTRE",
      materias: ["Teoría y Análisis Financiero", "Liderazgo Asertivo de los Negocios"]
    },
    {
      cuatrimestre: 5,
      titulo: "QUINTO CUATRIMESTRE",
      materias: ["Análisis e Investigación de Mercados", "Administración de las Finanzas Organizacionales"]
    },
    {
      cuatrimestre: 6,
      titulo: "SEXTO CUATRIMESTRE",
      materias: ["Talleres de Emprendedores", "Investigación Aplicada"]
    },
  ];

  const requisitos = [
    "Copia de CURP",
    "Certificado de estudios de licenciatura (original y copia)",
    "Cédula profesional de licenciatura (original y copia)",
    "En caso de no contar con Título presentar carta constancia de trámite en proceso",
    "Acta de nacimiento (original y 2 copias)",
    "Fotografías tamaño credencial e infantil en blanco y negro",
    "Identificación oficial (copia)",
    "Recibo de pagos correspondientes",
  ];

  const datosClave = [
    { numero: "6", texto: "Cuatrimestres", sub: "18 meses" },
    { numero: "12", texto: "Materias", sub: "Plan completo" },
    { numero: "Sábados", texto: "Clases", sub: "8:00 - 14:00 hrs" },
    { numero: "RVOE", texto: "Validez Oficial", sub: "Reconocido" },
  ];

  const highlights = [
    { numero: "100%", texto: "Presencial" },
    { numero: "18", texto: "Meses de duración" },
    { numero: "RVOE", texto: "Certificado oficial" },
    { numero: "Becas", texto: "Disponibles" },
  ];

  return (
    <main id="main" className="relative isolate bg-[var(--color-surface)]">
      {/* ─────────────────────────── Hero ─────────────────────────── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/madministracion.jpg"
            alt="Maestría en Administración Competitiva"
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
                  Maestría
                </span>
              </div>

              <h1 className="font-display font-extrabold text-white text-display-xl tracking-display-tight text-balance mb-8">
                Maestría en{" "}
                <span className="text-[#f68c24]">Administración Competitiva</span>
              </h1>

              <div className="relative w-40 h-px bg-gradient-to-r from-[#66822c] via-[#f68c24] to-transparent mb-10 overflow-hidden">
                <span className="absolute inset-0 bg-white/60 animate-shimmer" />
              </div>

              <p className="text-white/85 text-lg lg:text-xl leading-relaxed max-w-2xl text-pretty mb-10">
                Con Reconocimiento de Validez Oficial de Estudios (RVOE).
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contacto"
                  className="group inline-flex items-center justify-center gap-2 bg-[#f68c24] hover:bg-[#cd751e] text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-[0_12px_32px_-10px_rgba(246,140,36,0.8)] hover:shadow-[0_16px_40px_-8px_rgba(246,140,36,0.9)] hover:-translate-y-0.5"
                >
                  Solicitar Información
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="#plan-estudios"
                  className="group inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/25 px-8 py-4 rounded-full font-semibold text-base backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  Ver Plan de Estudios
                  <span className="inline-flex w-1.5 h-1.5 rounded-full bg-[#f68c24]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── Información del Programa ─────────────── */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-10 bg-[#66822c]" />
                  <span className="text-eyebrow text-[#66822c]">El programa</span>
                </div>
                <h2 className="font-display text-display-lg font-bold text-[#1a1f14] tracking-display-tight text-balance mb-4">
                  Información del <span className="text-[#66822c]">Programa</span>
                </h2>
                <p className="text-lg text-[#4a5240] leading-relaxed text-pretty">
                  Conoce todos los detalles de nuestra Maestría en Administración Competitiva.
                </p>
              </div>

              <div className="space-y-4">
                <AccordionItem
                  accent="#66822c"
                  title="Objetivo"
                  icon={
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  }
                >
                  <p className="text-[#4a5240] leading-relaxed text-pretty">
                    Formar maestros en administración competitiva de las organizaciones con
                    los conocimientos, habilidades y actitudes necesarias para desarrollar e
                    implementar estrategias competitivas innovadoras capaces de diseñar e
                    implementar soluciones a problemas complejos por medio de compromiso,
                    liderazgo, determinación y sentido humano, con pensamiento creativo e
                    innovador con enfoque en nuevas ideas y conocimientos; expandiendo la
                    visión, la perspectiva del liderazgo y la exposición a un ambiente
                    multicultural para desarrollar un ambiente colaborativo de trabajo.
                  </p>
                </AccordionItem>

                <AccordionItem
                  accent="#f68c24"
                  title="Perfil del Egresado"
                  icon={
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  }
                >
                  <p className="text-[#4a5240] leading-relaxed text-pretty">
                    Los maestros egresados de la Maestría en Administración Competitiva de
                    las Organizaciones serán capaces, entre otras cosas, de analizar,
                    diseñar, evaluar y mejorar sistemas organizacionales con base a
                    planteamientos estratégicos; mediante la aplicación de conocimientos en
                    dirección estratégica, tecnologías de información e integración humana
                    así como, metodologías de análisis y toma de decisiones.
                  </p>
                </AccordionItem>

                <AccordionItem
                  accent="#66822c"
                  title="Campo Laboral"
                  icon={
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  }
                >
                  <p className="text-[#4a5240] leading-relaxed text-pretty">
                    Los maestros egresados de la Maestría en Administración Competitiva de
                    las Organizaciones podrán emplearse en centros de investigación, en
                    empresas del sector privado o público ocupando puestos de la alta
                    dirección, auto emplearse creando empresas o en trabajos de consultoría.
                  </p>
                </AccordionItem>

                <AccordionItem
                  accent="#f68c24"
                  title="Requisitos de Ingreso"
                  icon={
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  }
                >
                  <ul className="space-y-3">
                    {requisitos.map((req, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#4a5240] leading-relaxed">
                        <svg className="w-5 h-5 text-[#f68c24] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionItem>
              </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden ring-1 ring-black/5 shadow-[var(--shadow-card-hover)]">
                <Image
                  src="/images/estudiantes-3.jpg"
                  alt="Estudiantes de Maestría en Administración Competitiva"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1208]/80 via-[#0c1208]/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-eyebrow text-[#f68c24] mb-3">Tu carrera</p>
                  <h3 className="font-display text-3xl lg:text-4xl font-bold tracking-display-tight text-balance mb-3">
                    Transforma tu Carrera
                  </h3>
                  <p className="text-white/85 text-pretty">
                    Conviértete en un líder estratégico de la administración moderna.
                  </p>
                </div>

                <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 bg-white rounded-2xl px-5 py-3 shadow-[var(--shadow-ring)] ring-1 ring-black/5">
                  <p className="text-eyebrow text-[#f68c24] mb-1">RVOE</p>
                  <p className="font-display font-semibold text-[#1a1f14] text-sm">Programa oficial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── Datos Clave ─────────────── */}
      <section className="relative py-24 lg:py-32 bg-[var(--color-surface)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#66822c]" />
              <span className="text-eyebrow text-[#66822c]">Datos Clave</span>
            </div>
            <h2 className="font-display text-display-lg font-bold text-[#1a1f14] tracking-display-tight text-balance mb-4">
              Datos Clave del <span className="text-[#66822c]">Programa</span>
            </h2>
            <p className="text-lg text-[#4a5240] leading-relaxed text-pretty">
              Información general sobre la maestría.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {datosClave.map((stat, idx) => {
              const accent = idx % 2 === 0 ? '#66822c' : '#f68c24';
              return (
                <div
                  key={idx}
                  className="group relative bg-white rounded-[1.5rem] p-7 ring-1 ring-black/5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1"
                >
                  <span
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ backgroundColor: accent }}
                  />
                  <p
                    className="font-display text-4xl lg:text-5xl font-extrabold tracking-display-tight tabular-nums mb-2"
                    style={{ color: accent }}
                  >
                    {stat.numero}
                  </p>
                  <p className="font-display text-base font-semibold text-[#1a1f14] mb-1">
                    {stat.texto}
                  </p>
                  <p className="text-eyebrow text-[#8a9180]">{stat.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── Plan de Estudios ─────────────── */}
      <section id="plan-estudios" className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#66822c]" />
              <span className="text-eyebrow text-[#66822c]">Currícula</span>
            </div>
            <h2 className="font-display text-display-lg font-bold text-[#1a1f14] tracking-display-tight text-balance mb-6">
              Plan de <span className="text-[#66822c]">Estudios</span>
            </h2>
            <p className="text-lg text-[#4a5240] leading-relaxed text-pretty">
              Programa académico estructurado en 6 cuatrimestres.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {planEstudios.map((periodo, idx) => {
              const accent = idx % 2 === 0 ? '#66822c' : '#f68c24';
              return (
                <article
                  key={periodo.cuatrimestre}
                  className="group relative bg-[var(--color-surface)] rounded-[1.75rem] p-7 lg:p-8 ring-1 ring-black/5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1"
                >
                  <span
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ backgroundColor: accent }}
                  />

                  <div className="flex items-center justify-between mb-6 pb-5 border-b border-[var(--color-line)]">
                    <span
                      className="font-display text-5xl font-extrabold tracking-display-tight tabular-nums leading-none"
                      style={{ color: accent }}
                    >
                      {String(periodo.cuatrimestre).padStart(2, '0')}
                    </span>
                    <div className="text-right">
                      <p className="text-eyebrow mb-1" style={{ color: accent }}>
                        Cuatrimestre
                      </p>
                      <p className="font-display text-sm font-semibold text-[#1a1f14]">
                        {periodo.titulo}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {periodo.materias.map((materia, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[#4a5240] text-sm leading-snug"
                      >
                        <span
                          className="font-display font-bold tabular-nums text-xs mt-0.5 shrink-0 opacity-60"
                          style={{ color: accent }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="flex-1">{materia}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── Inscripciones y Becas ─────────────── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#0c1208]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(246,140,36,0.22),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(102,130,44,0.25),transparent_55%)]" />
        </div>

        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
          <span className="absolute top-[28%] left-[20%] w-1.5 h-1.5 rounded-full bg-white/50 animate-float-slow" />
          <span className="absolute bottom-[30%] right-[22%] w-2 h-2 rounded-full bg-[#f68c24]/45 animate-float-medium" style={{ animationDelay: "1.2s" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-[#f68c24]" />
                <span className="text-eyebrow text-[#f68c24]">Admisiones</span>
              </div>

              <h2 className="font-display font-extrabold text-white text-display-lg tracking-display-tight text-balance mb-8">
                Inscripciones <span className="text-[#f68c24]">Abiertas</span>
              </h2>

              <p className="text-white/85 text-lg lg:text-xl leading-relaxed text-pretty mb-6">
                Ten la oportunidad de vincular tus estudios con Universidades Internacionales.
                En un ambiente sano, cómodo y dedicado se estudia mejor.
              </p>
              <p className="text-white/75 text-base lg:text-lg leading-relaxed text-pretty mb-10">
                Pregunta sobre nuestros planes de estudio, promociones y las becas que tenemos para ti.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contacto"
                  className="group inline-flex items-center justify-center gap-2 bg-[#f68c24] hover:bg-[#cd751e] text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-[0_14px_36px_-12px_rgba(246,140,36,0.7)] hover:shadow-[0_16px_40px_-8px_rgba(246,140,36,0.9)] hover:-translate-y-0.5"
                >
                  Solicitar Información
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a
                  href="tel:+526861819889"
                  className="group inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/25 px-8 py-4 rounded-full font-semibold text-base backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5 text-[#a5c94c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (686) 181-9889
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((h, idx) => (
                  <div
                    key={idx}
                    className="bg-white/8 backdrop-blur-xl rounded-[1.25rem] p-6 lg:p-7 ring-1 ring-white/15"
                  >
                    <p className="font-display text-3xl lg:text-4xl font-extrabold tracking-display-tight text-white mb-2 tabular-nums">
                      {h.numero}
                    </p>
                    <p className="text-sm text-white/75">{h.texto}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────── CTA Final ─────────────────────── */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-[#66822c]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#f68c24]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#f68c24]" />
              <span className="text-eyebrow text-[#f68c24]">El siguiente paso</span>
            </div>

            <h2 className="font-display text-display-lg font-bold text-[#1a1f14] tracking-display-tight text-balance mb-6">
              ¿Listo para Impulsar tu{" "}
              <span className="text-[#f68c24]">Carrera?</span>
            </h2>

            <p className="text-lg lg:text-xl text-[#4a5240] leading-relaxed text-pretty mb-10">
              Únete a nuestra comunidad de profesionales exitosos y transforma tu futuro
              profesional.
            </p>

            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfSsj4lfLF9akHmCPjL5pTK8PaebMFQ2__qE-wJZpShmka01A/viewform?usp=publish-editor"
              target="_blank"
              className="group inline-flex items-center justify-center gap-2 bg-[#f68c24] hover:bg-[#cd751e] text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-[0_14px_36px_-12px_rgba(246,140,36,0.7)] hover:shadow-[0_16px_40px_-8px_rgba(246,140,36,0.9)] hover:-translate-y-0.5"
            >
              Inscríbete Ahora
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ────────────────────────── Subcomponentes ────────────────────────── */

function AccordionItem({ accent, icon, title, children }) {
  return (
    <details className="group bg-white rounded-[1.25rem] ring-1 ring-black/5 shadow-[var(--shadow-card)] open:shadow-[var(--shadow-card-hover)] transition-shadow duration-500 overflow-hidden">
      <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
        <div className="flex items-center gap-4">
          <span
            className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform duration-500 group-open:scale-110"
            style={{ backgroundColor: `${accent}15` }}
          >
            <svg className="w-5 h-5" fill="none" stroke={accent} viewBox="0 0 24 24">
              {icon}
            </svg>
          </span>
          <span className="font-display text-lg lg:text-xl font-bold text-[#1a1f14] tracking-display-tight">
            {title}
          </span>
        </div>
        <svg
          className="w-5 h-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
          fill="none"
          stroke={accent}
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="px-6 pb-6 pt-0">
        <div className="pl-[3.75rem]">
          {children}
        </div>
      </div>
    </details>
  );
}
