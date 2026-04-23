"use client";

import Image from "next/image";
import Link from "next/link";

export default function SobreNosotros() {
  return (
    <main id="main" className="relative isolate bg-[var(--color-surface)]">
      {/* ─────────────────────────── Hero ─────────────────────────── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/sobre-nosotros/hero-sobre-nosotros.jpg"
            alt="Campus IIESBC"
            fill
            priority
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

        <div className="relative min-h-[78vh] flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <div className="max-w-3xl animate-fade-in-up">
              <div className="inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-xl border border-white/15 px-4 py-1.5 rounded-full mb-10">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-[#a5c94c] opacity-75 animate-ping" />
                  <span className="relative rounded-full h-2 w-2 bg-[#a5c94c]" />
                </span>
                <span className="text-white/90 text-xs font-medium tracking-[0.18em] uppercase">
                  Nuestra Historia
                </span>
              </div>

              <h1 className="font-display font-extrabold text-white text-display-xl tracking-display-tight text-balance mb-8">
                Sobre <span className="text-[#f68c24]">Nosotros</span>
              </h1>

              <div className="relative w-40 h-px bg-gradient-to-r from-[#66822c] via-[#f68c24] to-transparent mb-10 overflow-hidden">
                <span className="absolute inset-0 bg-white/60 animate-shimmer" />
              </div>

              <p className="text-white/85 text-lg lg:text-xl leading-relaxed max-w-2xl text-pretty">
                Conoce nuestra historia, misión y el compromiso que nos impulsa cada día a
                formar profesionales íntegros y competitivos.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/60">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <span className="w-px h-10 bg-gradient-to-b from-white/70 to-transparent" />
        </div>
      </section>

      {/* ───────────────────── ¿Quiénes Somos? ──────────────────── */}
      <section className="relative py-24 lg:py-32 bg-[var(--color-surface)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Imagen */}
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden ring-1 ring-black/5 shadow-[var(--shadow-card-hover)]">
                <Image
                  src="/images/sobre-nosotros/quienes-somos.jpg"
                  alt="Estudiantes IIESBC"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f14]/35 via-transparent to-transparent" />
              </div>

              <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 bg-white rounded-2xl px-6 py-4 shadow-[var(--shadow-ring)] ring-1 ring-black/5">
                <p className="text-eyebrow text-[#f68c24] mb-1">Excelencia</p>
                <p className="font-display font-semibold text-[#1a1f14] text-sm">Certificada y reconocida</p>
              </div>

              <div className="absolute -bottom-6 -left-4 lg:-bottom-8 lg:-left-8 bg-[#66822c] text-white rounded-2xl px-6 py-5 shadow-[0_20px_50px_-20px_rgba(102,130,44,0.7)] hidden sm:block">
                <p className="font-display text-3xl font-extrabold leading-none">25+</p>
                <p className="text-xs font-medium text-white/80 mt-1 uppercase tracking-widest">Años de historia</p>
              </div>
            </div>

            {/* Contenido */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-[#66822c]" />
                <span className="text-eyebrow text-[#66822c]">Conócenos</span>
              </div>

              <h2 className="font-display text-display-lg font-bold text-[#1a1f14] text-balance mb-8">
                ¿Quiénes <span className="text-[#f68c24]">Somos?</span>
              </h2>

              <p className="text-xl text-[#4a5240] leading-relaxed mb-6 text-pretty">
                Somos una{" "}
                <span className="text-[#66822c] font-semibold">universidad comprometida</span>{" "}
                con la comunidad estudiantil.
              </p>

              <p className="text-base text-[#4a5240] leading-relaxed mb-10 text-pretty">
                Fundada con la misión de desarrollar la competitividad y la preparación de
                sus alumnos para un entorno profesional demandante.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[var(--color-line)]">
                <StatCell number="25+" label="Años" />
                <StatCell number="1000+" label="Egresados" />
                <StatCell number="98%" label="Empleabilidad" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────── Bienvenida del Director ─────────────── */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <Image
            src="/images/sobre-nosotros/bienvenida-director.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.06]"
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#f68c24]" />
              <span className="text-eyebrow text-[#f68c24]">Mensaje del Director</span>
              <span className="h-px w-10 bg-[#f68c24]" />
            </div>
            <h2 className="font-display text-display-lg font-bold text-[#1a1f14] text-balance">
              Bienvenida
            </h2>
          </div>

          <article className="relative bg-[var(--color-surface)] rounded-[2rem] p-8 md:p-12 lg:p-16 ring-1 ring-black/5 shadow-[var(--shadow-card-hover)]">
            <svg className="w-14 h-14 text-[#f68c24]/20 absolute top-8 left-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <div className="relative space-y-6 text-[#4a5240] leading-relaxed text-lg">
              <p className="font-display text-xl md:text-2xl text-[#1a1f14] leading-relaxed text-pretty first-letter:font-display first-letter:text-6xl first-letter:font-bold first-letter:text-[#66822c] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                A través de este medio deseo dar la bienvenida al{" "}
                <strong className="text-[#66822c] font-semibold">Instituto Interamericano de Estudios Superiores de Baja California</strong>,
                a aquellas personas quienes han tomado una de las decisiones más importantes
                de su vida, iniciar una carrera universitaria, felicidades.
              </p>

              <p className="text-pretty">
                Quiero que sepas que es un honor para mi pertenecer y estar al frente de esta
                joven institución que al igual que yo, tiene el compromiso ético y social de
                formar seres humanos íntegros, responsables, con liderazgo, con valores y
                conocimientos profesionales que sean para el servicio y ejemplo de nuestra
                sociedad.
              </p>

              <p className="text-pretty">
                Debo decirte que en el{" "}
                <strong className="text-[#66822c] font-semibold">IIESBC</strong> te ayudaremos
                a forjar un buen futuro, por lo tanto te encontrarás con retos, conocerás tu
                potencial, tus debilidades, y desarrollarás tus habilidades, lograrás crecer
                como persona y apreciar a los demás, nuestra excelente planta docente exigirá
                lo mejor de ti, pero siempre estará contigo siendo tu guía en el proceso.
              </p>

              <blockquote className="relative pl-6 lg:pl-8 border-l-2 border-[#f68c24] my-10">
                <p className="font-display text-xl lg:text-2xl text-[#1a1f14] font-medium leading-relaxed text-pretty">
                  Te ofrecemos una educación de alta calidad, tus docentes tienen la
                  experiencia y aptitudes para guiarte y mostrarte lo que necesitas para
                  llegar a tu meta. Ten la certeza que en el{" "}
                  <strong className="text-[#66822c] font-semibold">IIESBC</strong> tu ahora
                  casa, confiamos en tus capacidades y por ello hoy, nuestra prioridad es
                  lograr tu grandeza personal y profesional.
                </p>
              </blockquote>

              <p className="text-pretty">
                Te invito a que adoptes hoy la actitud y el compromiso de un estudiante
                universitario que aprovecha las oportunidades para aprender y crecer en
                respeto y armonía.
              </p>

              <div className="pt-10 mt-4 border-t border-[var(--color-line)]">
                <p className="font-display text-xl md:text-2xl font-semibold text-[#66822c] mb-8 text-pretty">
                  En el IIESBC <span className="text-[#f68c24]">&ldquo;Tu éxito es el nuestro&rdquo;</span>.<br />
                  Caminemos juntos.
                </p>

                <div className="flex items-center justify-end gap-4">
                  <div className="text-right">
                    <p className="font-display font-bold text-[#1a1f14] text-lg md:text-xl">Dr. Rafael López Oñate</p>
                    <p className="text-sm text-[#8a9180] uppercase tracking-widest mt-1">Director General IIESBC</p>
                  </div>
                  <div className="w-16 h-16 md:w-18 md:h-18 bg-[#66822c] rounded-full flex items-center justify-center ring-4 ring-white shadow-[0_20px_50px_-20px_rgba(102,130,44,0.7)]">
                    <span className="font-display text-xl md:text-2xl font-bold text-white">RL</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ───────────────────── Misión & Visión ──────────────────── */}
      <section className="relative py-24 lg:py-32 bg-[var(--color-surface)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#66822c]" />
              <span className="text-eyebrow text-[#66822c]">Nuestros pilares</span>
            </div>
            <h2 className="font-display text-display-lg font-bold text-[#1a1f14] text-balance">
              Misión &amp; <span className="text-[#66822c]">Visión</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <PillarCard
              eyebrow="01 — Misión"
              title="Nuestra Misión"
              accent="#66822c"
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              }
            >
              El Instituto Interamericano de Estudios Superiores de Baja California tiene como
              esencia de su misión, filosofía y responsabilidad social, la formación de seres
              morales, virtuosos e íntegros en el pensar y en el hacer.
            </PillarCard>

            <PillarCard
              eyebrow="02 — Visión"
              title="Nuestra Visión"
              accent="#f68c24"
              icon={
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </>
              }
            >
              El Instituto orienta sus acciones hacia la combinación de conocimientos teóricos
              y prácticos de nivel licenciatura y Posgrado; a partir de un desarrollo de ideas
              que se presentan en forma ordenada y disciplinada, consolidando propuestas que
              se suscitan de un proceso de investigación que de acuerdo a los requerimientos
              invita a trabajar en forma colaborativa a diversas disciplinas y tiende redes
              con enfoque al impacto de crecimiento social y económico; tanto en los ámbitos
              locales, nacionales como internacionales.
            </PillarCard>
          </div>
        </div>
      </section>

      {/* ───────────────────── Beneficios ──────────────────── */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#f68c24]" />
              <span className="text-eyebrow text-[#f68c24]">Por qué elegirnos</span>
            </div>
            <h2 className="font-display text-display-lg font-bold text-[#1a1f14] text-balance mb-6">
              Beneficios <span className="text-[#f68c24]">IIESBC</span>
            </h2>
            <p className="text-lg text-[#4a5240] leading-relaxed text-pretty">
              Descubre las ventajas que te ofrecemos para tu desarrollo académico y profesional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <BenefitCard
              number="01"
              title="Horarios Flexibles"
              accent="#66822c"
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              }
            >
              Por qué sabemos que tu formación es muy importante, tenemos horarios flexibles
              para que elijas el que más te convenga.
            </BenefitCard>

            <BenefitCard
              number="02"
              title="Equivalencia y Revalidación"
              accent="#f68c24"
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              }
            >
              Si deseas continuar tus estudios con nosotros y ya tienes materias cursadas
              hacemos una equivalencia o revalidación en el programa que elijas.
            </BenefitCard>

            <BenefitCard
              number="03"
              title="Plan de Becas"
              accent="#66822c"
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              }
            >
              Tanto para licenciatura como para los cursos de posgrado existe la posibilidad
              de ser recipiente de una beca y de obtener facilidades de pago de colegiaturas.
            </BenefitCard>
          </div>
        </div>
      </section>

      {/* ───────────────────── Vinculación ──────────────────── */}
      <section className="relative py-24 lg:py-32 bg-[var(--color-surface)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#66822c]" />
              <span className="text-eyebrow text-[#66822c]">Vinculación</span>
            </div>
            <h2 className="font-display text-display-lg font-bold text-[#1a1f14] text-balance mb-6">
              Nuestros <span className="text-[#66822c]">Convenios</span>
            </h2>
            <p className="text-lg text-[#4a5240] leading-relaxed text-pretty">
              Contamos con convenios con dependencias de Gobierno, empresas privadas e
              instituciones educativas del sector público y privado, con fines de vincular
              proyectos de investigación, así como realizar intercambios, prácticas
              profesionales y estancias de aprendizaje.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Convenios Nacionales */}
            <div className="relative bg-white rounded-[1.75rem] p-8 lg:p-10 ring-1 ring-black/5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-[var(--color-line)]">
                <div className="w-12 h-12 rounded-2xl bg-[#66822c]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#66822c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <div>
                  <p className="text-eyebrow text-[#66822c] mb-1">Nacionales</p>
                  <h3 className="font-display text-xl font-bold text-[#1a1f14]">Convenios Nacionales</h3>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { src: "/images/vinculacion/cobash.png", alt: "COBACH" },
                  { src: "/images/vinculacion/cecyte.png", alt: "CECYTEBC" },
                  { src: "/images/vinculacion/gobbc.png", alt: "Gobierno del Estado de Baja California" },
                ].map((logo) => (
                  <div
                    key={logo.alt}
                    className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-[var(--color-surface)] ring-1 ring-[var(--color-line)] hover:ring-[#66822c]/40 transition-all duration-300"
                  >
                    <div className="relative w-full h-16">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span className="text-[11px] font-semibold text-[#8a9180] text-center leading-tight uppercase tracking-wider">
                      {logo.alt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Convenios Internacionales */}
            <div className="relative bg-white rounded-[1.75rem] p-8 lg:p-10 ring-1 ring-black/5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-[var(--color-line)]">
                <div className="w-12 h-12 rounded-2xl bg-[#f68c24]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#f68c24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <p className="text-eyebrow text-[#f68c24] mb-1">Internacionales</p>
                  <h3 className="font-display text-xl font-bold text-[#1a1f14]">Convenios Internacionales</h3>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-[var(--color-surface)] ring-1 ring-[var(--color-line)] hover:ring-[#f68c24]/40 transition-all duration-300 w-56">
                  <div className="relative w-full h-24">
                    <Image
                      src="/images/vinculacion/salamanca.jpg"
                      alt="Universidad de Salamanca"
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-[#8a9180] text-center leading-tight uppercase tracking-wider">
                    Universidad de Salamanca
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── Información Institucional (CTA) ───────────────── */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-[#66822c]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#f68c24]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
          <div className="relative bg-[var(--color-surface)] rounded-[2rem] p-10 md:p-14 lg:p-16 ring-1 ring-black/5 shadow-[var(--shadow-card-hover)]">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <span className="h-px w-10 bg-[#f68c24]" />
              <span className="text-eyebrow text-[#f68c24]">Institución Certificada</span>
              <span className="h-px w-10 bg-[#f68c24]" />
            </div>

            <h2 className="font-display text-display-md font-bold text-[#1a1f14] text-center text-balance mb-12">
              Información <span className="text-[#f68c24]">Institucional</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 lg:p-8 ring-1 ring-black/5 shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-[#66822c]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#66822c]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                  </span>
                  <p className="text-eyebrow text-[#66822c]">Clave institucional</p>
                </div>
                <p className="font-display text-3xl lg:text-4xl font-extrabold text-[#1a1f14] tracking-display-tight">
                  02PSU0128P
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 lg:p-8 ring-1 ring-black/5 shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-[#f68c24]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#f68c24]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </span>
                  <p className="text-eyebrow text-[#f68c24]">RVOE</p>
                </div>
                <p className="text-[#4a5240] leading-relaxed mb-2">
                  Reconocimiento de Validez Oficial de Estudios por Baja California.
                </p>
                <p className="font-display text-lg lg:text-xl font-bold text-[#1a1f14]">
                  RVOE-BC (229 a la 235) M1/13
                </p>
              </div>
            </div>

            <div className="flex justify-center pt-8 border-t border-[var(--color-line)]">
              <Link
                href="/contacto"
                className="group inline-flex items-center justify-center gap-2 bg-[#66822c] hover:bg-[#556e23] text-white px-10 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-[0_14px_36px_-12px_rgba(102,130,44,0.7)] hover:shadow-[0_16px_40px_-8px_rgba(102,130,44,0.9)] hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Solicita Información
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ────────────────────────── Subcomponentes ────────────────────────── */

function StatCell({ number, label }) {
  return (
    <div>
      <p className="font-display text-3xl lg:text-4xl font-bold text-[#66822c] tracking-display-tight">{number}</p>
      <p className="text-xs text-[#8a9180] uppercase tracking-widest mt-1">{label}</p>
    </div>
  );
}

function PillarCard({ eyebrow, title, accent, icon, children }) {
  return (
    <article className="group relative bg-white rounded-[1.75rem] p-8 lg:p-10 ring-1 ring-black/5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
      <span
        className="absolute top-0 left-0 right-0 h-px"
        style={{ backgroundColor: accent }}
      />

      <div className="flex items-center justify-between mb-8">
        <span
          className="text-eyebrow"
          style={{ color: accent }}
        >
          {eyebrow}
        </span>
        <span
          className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-6"
          style={{ backgroundColor: `${accent}15` }}
        >
          <svg className="w-7 h-7" fill="none" stroke={accent} viewBox="0 0 24 24">
            {icon}
          </svg>
        </span>
      </div>

      <h3 className="font-display text-2xl lg:text-3xl font-bold text-[#1a1f14] mb-6 tracking-display-tight">
        {title}
      </h3>

      <p className="text-[#4a5240] leading-relaxed text-base lg:text-lg text-pretty">
        {children}
      </p>
    </article>
  );
}

function BenefitCard({ number, title, accent, icon, children }) {
  return (
    <article className="group relative bg-[var(--color-surface)] rounded-[1.5rem] p-8 ring-1 ring-[var(--color-line)] hover:ring-black/10 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-8">
        <span
          className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundColor: `${accent}15` }}
        >
          <svg className="w-7 h-7" fill="none" stroke={accent} viewBox="0 0 24 24">
            {icon}
          </svg>
        </span>
        <span
          className="font-display text-xl font-bold tabular-nums opacity-60"
          style={{ color: accent }}
        >
          {number}
        </span>
      </div>

      <h3 className="font-display text-xl lg:text-2xl font-bold text-[#1a1f14] mb-4 tracking-display-tight">
        {title}
      </h3>

      <p className="text-[#4a5240] leading-relaxed text-pretty">
        {children}
      </p>
    </article>
  );
}
