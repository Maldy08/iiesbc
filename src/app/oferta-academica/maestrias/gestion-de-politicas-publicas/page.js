import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Maestría en Gestión de Políticas Públicas - IIESBC',
  description: 'Forma maestros con conocimientos teóricos y prácticos en políticas públicas para influir positivamente en el logro de una sociedad con sentido humano.',
  keywords: 'maestría, políticas públicas, RVOE, posgrado, IIESBC, Mexicali, gobierno',
  openGraph: {
    title: 'Maestría en Gestión de Políticas Públicas - IIESBC',
    description: 'Desarrolla tu carrera en el sector público con nuestra maestría',
    images: ['/images/maestrias/politicas-publicas-iiesbc.jpg'],
  },
};

export default function MaestriaPoliticasPublicas() {
  const planEstudios = [
    {
      cuatrimestre: 1,
      titulo: "PRIMER CUATRIMESTRE",
      materias: [
        "Conceptos Introductorios a las Políticas Públicas",
        "Sociedad y Política Nacional e Internacional"
      ]
    },
    {
      cuatrimestre: 2,
      titulo: "SEGUNDO CUATRIMESTRE",
      materias: [
        "Instituciones Políticas en México",
        "Toma de Decisiones con Base en Métodos Cuantitativos"
      ]
    },
    {
      cuatrimestre: 3,
      titulo: "TERCER CUATRIMESTRE",
      materias: [
        "Análisis y Diseño de Políticas Públicas",
        "El Sector Público y la Gestión Estratégica"
      ]
    },
    {
      cuatrimestre: 4,
      titulo: "CUARTO CUATRIMESTRE",
      materias: [
        "Instrumentación de Políticas Públicas",
        "La Gestión de Programas y Proyectos Públicos"
      ]
    },
    {
      cuatrimestre: 5,
      titulo: "QUINTO CUATRIMESTRE",
      materias: [
        "Seguimiento y Evaluación de Políticas Públicas",
        "Gestión y Administración del Gasto Público"
      ]
    },
    {
      cuatrimestre: 6,
      titulo: "SEXTO CUATRIMESTRE",
      materias: [
        "Gestión, Estructura y Modelos de Liderazgo",
        "Metodología de la Investigación Aplicada al Sector Público"
      ]
    },
  ];

  const perfilEgresado = [
    "Investigar sobre los problemas públicos y sus posibles soluciones",
    "Desarrollar procesos por medio de los cuales se diseñan, implementan y evalúan las políticas públicas",
    "Investigar las bases y condicionamientos de las principales decisiones públicas, tanto en el nivel político-social como en el económico-gubernamental",
    "Generar modelos para la determinación de la agenda pública gubernamental",
    "Promover metodologías para la implementación de políticas públicas con enfoque humanista estructural"
  ];

  const requisitos = [
    "Copia de CURP",
    "Certificado de estudios de licenciatura (original y copia)",
    "Cédula profesional de licenciatura (original y copia)",
    "En caso de no contar con Título presentar carta constancia de trámite en proceso",
    "Acta de nacimiento (original y 2 copias)",
    "Fotografías tamaño credencial e infantil en blanco y negro",
    "Identificación oficial (copia)",
    "Recibo de pagos correspondientes"
  ];

  const ventajas = [
    {
      icon: "🏛️",
      titulo: "Sector Público",
      descripcion: "Desarrolla tu carrera en instituciones gubernamentales"
    },
    {
      icon: "📊",
      titulo: "Análisis Estratégico",
      descripcion: "Toma de decisiones basada en métodos cuantitativos"
    },
    {
      icon: "🎯",
      titulo: "Enfoque Práctico",
      descripcion: "Diseña e implementa políticas públicas efectivas"
    },
    {
      icon: "👥",
      titulo: "Impacto Social",
      descripcion: "Contribuye al desarrollo de tu comunidad"
    }
  ];

  const estadisticas = [
    { numero: "6", texto: "Cuatrimestres", icon: "📅" },
    { numero: "12", texto: "Materias", icon: "📚" },
    { numero: "18", texto: "Meses", icon: "⏱️" },
    { numero: "RVOE", texto: "Oficial", icon: "🎓" },
  ];

  return (
    <main id="main" className="relative isolate bg-[var(--color-surface)]">
      {/* ─────────────────────────── Hero ─────────────────────────── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/mpublicas.jpg"
            alt="Maestría en Gestión de Políticas Públicas"
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
                Maestría en Gestión de{" "}
                <span className="text-[#f68c24]">Políticas Públicas</span>
              </h1>

              <div className="relative w-40 h-px bg-gradient-to-r from-[#66822c] via-[#f68c24] to-transparent mb-10 overflow-hidden">
                <span className="absolute inset-0 bg-white/60 animate-shimmer" />
              </div>

              <p className="text-white/85 text-lg lg:text-xl leading-relaxed max-w-2xl text-pretty mb-10">
                Lidera el cambio social y transforma el sector público.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contacto"
                  className="group inline-flex items-center justify-center gap-2 bg-[#66822c] hover:bg-[#556e23] text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-[0_12px_32px_-10px_rgba(102,130,44,0.8)] hover:shadow-[0_16px_40px_-8px_rgba(102,130,44,0.9)] hover:-translate-y-0.5"
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

      {/* ─────────────── Estadísticas ─────────────── */}
      <section className="relative py-24 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#66822c]" />
              <span className="text-eyebrow text-[#66822c]">Datos Clave</span>
            </div>
            <h2 className="font-display text-display-md font-bold text-[#1a1f14] tracking-display-tight text-balance mb-4">
              Datos Clave del <span className="text-[#66822c]">Programa</span>
            </h2>
            <p className="text-base text-[#4a5240] leading-relaxed text-pretty">
              Información general de la Maestría.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
            {estadisticas.map((stat, idx) => {
              const accent = idx % 2 === 0 ? '#66822c' : '#f68c24';
              return (
                <div
                  key={idx}
                  className="group relative bg-[var(--color-surface)] rounded-[1.5rem] p-6 ring-1 ring-black/5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1"
                >
                  <span
                    className="absolute top-0 left-6 right-6 h-px"
                    style={{ backgroundColor: `${accent}40` }}
                  />
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundColor: `${accent}15` }}
                  >
                    {stat.icon}
                  </div>
                  <p
                    className="font-display text-4xl lg:text-5xl font-extrabold tracking-display-tight tabular-nums mb-1"
                    style={{ color: accent }}
                  >
                    {stat.numero}
                  </p>
                  <p className="text-eyebrow text-[#8a9180]">{stat.texto}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── Ventajas ─────────────── */}
      <section className="relative py-24 lg:py-32 bg-[var(--color-surface)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#f68c24]" />
              <span className="text-eyebrow text-[#f68c24]">Ventajas</span>
            </div>
            <h2 className="font-display text-display-lg font-bold text-[#1a1f14] tracking-display-tight text-balance mb-4">
              ¿Por qué estudiar <span className="text-[#f68c24]">esta Maestría?</span>
            </h2>
            <p className="text-lg text-[#4a5240] leading-relaxed text-pretty">
              Conviértete en un agente de cambio en el sector público.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {ventajas.map((ventaja, idx) => {
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
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundColor: `${accent}15` }}
                  >
                    {ventaja.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#1a1f14] mb-3 tracking-display-tight">
                    {ventaja.titulo}
                  </h3>
                  <p className="text-[#4a5240] leading-relaxed text-pretty">
                    {ventaja.descripcion}
                  </p>
                </div>
              );
            })}
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
                  Conoce todos los detalles de nuestra Maestría en Gestión de Políticas Públicas.
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
                    Formar maestros con conocimientos teóricos y prácticos en el área de
                    políticas públicas y que relacionen el entorno económico, político e
                    institucional del país para que les permitan influir positivamente en el
                    logro de una sociedad con sentido humano y desarrollarte exitosamente en
                    el campo profesional.
                  </p>
                </AccordionItem>

                <AccordionItem
                  accent="#f68c24"
                  title="Perfil del Egresado"
                  icon={
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  }
                >
                  <p className="text-[#4a5240] leading-relaxed font-semibold mb-4">
                    Los maestros egresados serán capaces de:
                  </p>
                  <ul className="space-y-3">
                    {perfilEgresado.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#4a5240] leading-relaxed">
                        <span className="font-display font-bold text-[#f68c24] tabular-nums text-sm mt-0.5 shrink-0">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionItem>

                <AccordionItem
                  accent="#66822c"
                  title="Campo Laboral"
                  icon={
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  }
                >
                  <p className="text-[#4a5240] leading-relaxed text-pretty">
                    Los maestros egresados de la Maestría en Gestión de Políticas Públicas
                    podrán emplearse en organizaciones y dependencias públicas de los tres
                    órdenes de gobierno (federal, estatal y municipal), así como en
                    organizaciones civiles, sociales y auto emplearse como consultor.
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
                  src="/images/estudiantes-2.jpg"
                  alt="Estudiantes de Maestría en Gestión de Políticas Públicas"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1208]/80 via-[#0c1208]/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-eyebrow text-[#f68c24] mb-3">Tu vocación</p>
                  <h3 className="font-display text-3xl lg:text-4xl font-bold tracking-display-tight text-balance mb-3">
                    Lidera el Cambio Social
                  </h3>
                  <p className="text-white/85 text-pretty">
                    Transforma el sector público con políticas efectivas.
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

      {/* ─────────────── Plan de Estudios ─────────────── */}
      <section id="plan-estudios" className="relative py-24 lg:py-32 bg-[var(--color-surface)] overflow-hidden">
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
                  className="group relative bg-white rounded-[1.75rem] p-7 lg:p-8 ring-1 ring-black/5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1"
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

      {/* ─────────────────────── CTA Final ─────────────────────── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#0c1208]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(246,140,36,0.22),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(102,130,44,0.25),transparent_55%)]" />
        </div>

        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
          <span className="absolute top-[30%] left-[20%] w-1.5 h-1.5 rounded-full bg-white/50 animate-float-slow" />
          <span className="absolute bottom-[32%] right-[24%] w-2 h-2 rounded-full bg-[#f68c24]/45 animate-float-medium" style={{ animationDelay: "1.4s" }} />
          <span className="absolute top-[50%] left-[52%] w-1.5 h-1.5 rounded-full bg-[#a5c94c]/60 animate-float-fast" style={{ animationDelay: "0.8s" }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-xl border border-white/15 px-4 py-1.5 rounded-full mb-10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-[#a5c94c] opacity-75 animate-ping" />
                <span className="relative rounded-full h-2 w-2 bg-[#a5c94c]" />
              </span>
              <span className="text-white/90 text-xs font-medium tracking-[0.18em] uppercase">
                Inscripciones abiertas
              </span>
            </div>

            <h2 className="font-display font-extrabold text-white text-display-lg tracking-display-tight text-balance mb-8">
              ¿Listo para Transformar el{" "}
              <span className="text-[#f68c24]">Sector Público?</span>
            </h2>

            <p className="text-white/85 text-lg lg:text-xl leading-relaxed max-w-2xl text-pretty mb-10">
              Únete a nuestra comunidad de profesionales del sector público y lidera el cambio.
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
