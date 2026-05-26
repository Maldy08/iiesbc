"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LicenciaturaEducacion() {
  const [hoveredCard, setHoveredCard] = useState();

  const perfilEgresado = [
    "Aplicar las técnicas de investigación de tipo cualitativo y cuantitativo",
    "Desarrollar propuestas educativas innovadoras para responder a la demanda de la sociedad globalizada",
    "Intervenir y dirigir innovaciones en las gestiones educativas",
    "Asesorar empresas para la optimización de Capital Humano",
    "Evaluar programas de orientación educativa que promuevan el desarrollo humano",
    "Manejar fundamentos teóricos e instrumentos pedagógicos necesarios",
    "Aplicar las nuevas tecnologías de la información y comunicación",
    "Ejercer la docencia en los diferentes niveles educativos",
    "Ejecutar y evaluar proyectos educativos en distintos niveles y modalidades",
    "Formular proyectos de investigación desde una perspectiva interdisciplinaria",
    "Aplicar diferentes tipos de didácticas en el proceso enseñanza-aprendizaje",
    "Diseñar estrategias educativas en modelos alternativos de formación",
    "Planear, organizar, controlar y evaluar procesos de gestión educativa",
    "Generar proyectos de intervención didáctica significativos",
    "Analizar corrientes filosóficas y efectos sociológicos en educación",
    "Diseñar, instrumentar y evaluar planes y programas de estudio",
    "Desarrollar proyectos de investigación con herramientas estadísticas",
    "Desarrollar propuestas de mejora continua en instituciones educativas"
  ];

  const campoLaboral = [
    "Instituciones educativas de diferente nivel",
    "Instituciones o centros de investigación",
    "Escuelas, instituciones y organizaciones públicas y privadas",
    "Autogestor de su propia institución educativa",
    "Centros de asesoramiento y formación docente",
    "Bufetes de asesorías y consultoría en materia educativa",
    "Organizaciones de transformación educativa",
    "Empresas e industrias en capacitación y capital humano",
    "Áreas de docencia, diseño curricular, planeación e investigación",
    "Centros de planeación educativa",
    "Organizaciones de mejora en calidad educativa",
    "Instituciones de asistencia social",
    "Centros de asesoría y capacitación educativa"
  ];

  const planEstudios = [
    {
      nombre: "PRIMER CUATRIMESTRE",
      materias: [
        "Principios de Administración",
        "Metodología de la Investigación",
        "Sistemas Computacionales",
        "Principios de la Sociología",
        "Formas de Comunicación",
      ],
    },
    {
      nombre: "SEGUNDO CUATRIMESTRE",
      materias: [
        "Antecedentes de la Educación en México",
        "Filosofía en la Educación",
        "TICS Aplicadas a la Educación",
        "Teorías del Aprendizaje",
        "Teoría de la Educación I",
      ],
    },
    {
      nombre: "TERCER CUATRIMESTRE",
      materias: [
        "Teoría de la Educación II",
        "Legislación Educativa",
        "Investigación de Campo",
        "Principios de Aprendizaje",
        "Didáctica Educativa I",
      ],
    },
    {
      nombre: "CUARTO CUATRIMESTRE",
      materias: [
        "Educación Infantil y Especial",
        "Educación y Creatividad",
        "Planeación de la Educación",
        "Didáctica Educativa II",
        "Diseño de Material Didáctico en el Aula",
      ],
    },
    {
      nombre: "QUINTO CUATRIMESTRE",
      materias: [
        "Psicología Educativa I",
        "Pedagogía y Evaluación",
        "Planeación Estratégica de la Educación Actual",
        "Métodos de Investigación Cuantitativa",
        "Administración de la Educación",
      ],
    },
    {
      nombre: "SEXTO CUATRIMESTRE",
      materias: [
        "Teoría y Dinámica de Grupos",
        "Diseño Curricular",
        "Investigación Cualitativa",
        "Principios de Aprendizaje del Adolescente y Adulto",
        "Microenseñanza",
        "Psicología Educativa II",
      ],
    },
    {
      nombre: "SEPTIMO CUATRIMESTRE",
      materias: [
        "Teoría y Manejo de Grupos",
        "Educación y Economía",
        "Elaboración de Programas de Capacitación",
        "Tecnología Educativa",
        "Eficiencia de Centros Educativos",
        "OPTATIVA",
      ],
    },
    {
      nombre: "OCTAVO CUATRIMESTRE",
      materias: [
        "Evaluación Curricular",
        "Medición de la Calidad Educativa",
        "Gestión Educativa",
        "Medición de la Inteligencia",
        "OPTATIVA",
      ],
    },
    {
      nombre: "NOVENO CUATRIMESTRE",
      materias: [
        "OPTATIVA",
        "Desarrollo y Evaluación de Proyectos Educativos",
        "Valores y Ética Profesional",
        "Seminario de Tésis",
        "Educación Virtual",
      ],
    },
  ];

  const requisitos = [
    "Copia de CURP",
    "Certificado de estudios de Preparatoria (original y copia)",
    "Acta de nacimiento (original y 2 copias)",
    "Fotografías tamaño credencial e infantil en blanco y negro",
    "Identificación oficial (copia)",
    "Recibo de pagos correspondientes",
  ];

  const estadisticas = [
    { numero: "9", texto: "Cuatrimestres", icon: "📅" },
    { numero: "48", texto: "Materias", icon: "📚" },
    { numero: "3", texto: "Años", icon: "⏱️" },
    { numero: "3", texto: "Optativas", icon: "🎯" }
  ];

  const ventajas = [
    {
      icon: "🎓",
      titulo: "Innovación Pedagógica",
      descripcion: "Metodologías educativas actuales y vanguardistas"
    },
    {
      icon: "💻",
      titulo: "Tecnología Educativa",
      descripcion: "Dominio de herramientas digitales para la enseñanza"
    },
    {
      icon: "🔬",
      titulo: "Investigación Aplicada",
      descripcion: "Desarrollo de proyectos educativos innovadores"
    },
    {
      icon: "🌟",
      titulo: "Formación Integral",
      descripcion: "Competencias en gestión y liderazgo educativo"
    }
  ];

  return (
    <main id="main" className="relative isolate bg-[var(--color-surface)]">
      {/* ─────────────────────────── Hero ─────────────────────────── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/comunicacion.jpg"
            alt="Comunicación - IIESBC"
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
                  Licenciatura
                </span>
              </div>

              <h1 className="font-display font-extrabold text-white text-display-xl tracking-display-tight text-balance mb-8">
                Licenciatura en Ciencias de la{" "}
                <span className="text-[#f68c24]">Educación</span>
              </h1>

              <div className="relative w-40 h-px bg-gradient-to-r from-[#66822c] via-[#f68c24] to-transparent mb-10 overflow-hidden">
                <span className="absolute inset-0 bg-white/60 animate-shimmer" />
              </div>

              <p className="text-white/85 text-lg lg:text-xl leading-relaxed max-w-2xl text-pretty mb-10">
                Transforma vidas a través de la educación. Conviértete en un líder educativo
                que innova y hace la diferencia.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#informacion"
                  className="group inline-flex items-center justify-center gap-2 bg-[#66822c] hover:bg-[#556e23] text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-[0_12px_32px_-10px_rgba(102,130,44,0.8)] hover:shadow-[0_16px_40px_-8px_rgba(102,130,44,0.9)] hover:-translate-y-0.5"
                >
                  Descubre el Programa
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#plan-estudios"
                  className="group inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/25 px-8 py-4 rounded-full font-semibold text-base backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  Ver Plan de Estudios
                  <span className="inline-flex w-1.5 h-1.5 rounded-full bg-[#f68c24]" />
                </a>
                <Link
                  href="/contacto"
                  className="group inline-flex items-center justify-center gap-2 bg-[#f68c24] hover:bg-[#cd751e] text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-[0_12px_32px_-10px_rgba(246,140,36,0.8)] hover:shadow-[0_16px_40px_-8px_rgba(246,140,36,0.9)] hover:-translate-y-0.5"
                >
                  Solicitar Información
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── Datos Clave del Programa ─────────────── */}
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
              Información general de la Licenciatura.
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

      {/* ─────────────── Ventajas Competitivas ─────────────── */}
      <section className="relative py-24 lg:py-32 bg-[var(--color-surface)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#f68c24]" />
              <span className="text-eyebrow text-[#f68c24]">Ventajas</span>
            </div>
            <h2 className="font-display text-display-lg font-bold text-[#1a1f14] tracking-display-tight text-balance mb-6">
              ¿Por qué estudiar{" "}
              <span className="text-[#f68c24]">Ciencias de la Educación?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {ventajas.map((ventaja, idx) => {
              const accent = idx % 2 === 0 ? '#66822c' : '#f68c24';
              const isHovered = hoveredCard === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative bg-white rounded-[1.5rem] p-7 ring-1 ring-black/5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1"
                  style={isHovered ? { boxShadow: `0 16px 40px -16px ${accent}55` } : undefined}
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
      <section id="informacion" className="relative py-24 lg:py-32 bg-white overflow-hidden">
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
                  Conoce los detalles de la Licenciatura en Ciencias de la Educación.
                </p>
              </div>

              <div className="space-y-4">
                <AccordionItem accent="#66822c" icon="👨‍🏫" title="Perfil del Egresado">
                  <ul className="space-y-3">
                    {perfilEgresado.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#4a5240] leading-relaxed">
                        <span className="font-display font-bold text-[#66822c] tabular-nums text-sm mt-0.5 shrink-0">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionItem>

                <AccordionItem accent="#f68c24" icon="🎓" title="Campo Laboral">
                  <ul className="space-y-3">
                    {campoLaboral.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#4a5240] leading-relaxed">
                        <span className="font-display font-bold text-[#f68c24] tabular-nums text-sm mt-0.5 shrink-0">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionItem>

                <AccordionItem accent="#66822c" icon="📝" title="Requisitos de Ingreso">
                  <ul className="space-y-3">
                    {requisitos.map((req, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#4a5240] leading-relaxed">
                        <svg className="w-5 h-5 text-[#66822c] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
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
                  src="/images/educacion-iiesbc.jpg"
                  alt="Licenciatura en Ciencias de la Educación"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1208]/80 via-[#0c1208]/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-eyebrow text-[#f68c24] mb-3">Tu vocación</p>
                  <h3 className="font-display text-3xl lg:text-4xl font-bold tracking-display-tight text-balance mb-3">
                    Educa el Futuro
                  </h3>
                  <p className="text-white/85 text-pretty">
                    Forma líderes educativos del mañana.
                  </p>
                </div>

                <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 bg-white rounded-2xl px-5 py-3 shadow-[var(--shadow-ring)] ring-1 ring-black/5">
                  <p className="text-eyebrow text-[#f68c24] mb-1">RVOE</p>
                  <p className="font-display font-semibold text-[#1a1f14] text-sm tabular-nums">BC-231-M1/13</p>
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
              Programa académico estructurado en 9 cuatrimestres.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {planEstudios.map((periodo, idx) => {
              const accent = idx % 2 === 0 ? '#66822c' : '#f68c24';
              return (
                <article
                  key={idx}
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
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="text-right">
                      <p
                        className="text-eyebrow mb-1"
                        style={{ color: accent }}
                      >
                        Cuatrimestre
                      </p>
                      <p className="font-display text-sm font-semibold text-[#1a1f14]">
                        {periodo.nombre}
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
              ¡Inscripciones <span className="text-[#f68c24]">Abiertas!</span>
            </h2>

            <p className="text-white/85 text-lg lg:text-xl leading-relaxed max-w-2xl text-pretty mb-10">
              Ten la oportunidad de vincular tus estudios con Universidades Internacionales.
              En un ambiente sano, cómodo y dedicado se estudia mejor.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <Badge>Becas Disponibles</Badge>
              <Badge>Financiamiento</Badge>
              <Badge>RVOE Oficial</Badge>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfSsj4lfLF9akHmCPjL5pTK8PaebMFQ2__qE-wJZpShmka01A/viewform?usp=publish-editor"
              target="_blank"
              className="group inline-flex items-center justify-center gap-2 bg-[#f68c24] hover:bg-[#cd751e] text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-[0_14px_36px_-12px_rgba(246,140,36,0.7)] hover:shadow-[0_16px_40px_-8px_rgba(246,140,36,0.9)] hover:-translate-y-0.5"
            >
              Inscríbete Ahora
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
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
            className="w-11 h-11 rounded-2xl flex items-center justify-center text-lg transition-transform duration-500 group-open:scale-110"
            style={{ backgroundColor: `${accent}15` }}
          >
            {icon}
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

function Badge({ children }) {
  return (
    <div className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-md text-white border border-white/20 px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300">
      <svg className="w-4 h-4 text-[#a5c94c]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      {children}
    </div>
  );
}
