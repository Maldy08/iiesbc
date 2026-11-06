import Image from "next/image";

export const metadata = {
  title: "II Congreso Multidisciplinario 2026",
  description:
    "II Congreso Multidisciplinario del IIESBC «El dilema del cumplimiento: navegando entre la regulación e innovación en la era de la Inteligencia Artificial» y IX Foro de Divulgación Científica de Trabajos de Posgrado. 4 y 5 de diciembre de 2026, Mexicali, B.C.",
  openGraph: {
    title: "II Congreso Multidisciplinario IIESBC · 4 y 5 de diciembre de 2026",
    description:
      "El dilema del cumplimiento: navegando entre la regulación e innovación en la era de la Inteligencia Artificial. Registro abierto hasta el 30 de noviembre.",
    images: ["/images/congreso-2026/justicia-ia.png"],
  },
};

// La página se regenera cada hora para que el botón de registro se apague solo
// al pasar la fecha de cierre.
export const revalidate = 3600;

const FORM_URL = "https://forms.gle/Bd9AUR5fw98YAYFb7";
// Cierre: 30 de noviembre de 2026, fin del día en hora de Mexicali (UTC-8).
const CIERRE_REGISTRO = new Date("2026-12-01T00:00:00-08:00");
// Fin del congreso: después del sábado 5 de diciembre la página habla en pasado.
const FIN_CONGRESO = new Date("2026-12-06T00:00:00-08:00");

const IMG = "/images/congreso-2026";

const TITULO_CONGRESO =
  "El dilema del cumplimiento: navegando entre la regulación e innovación en la era de la Inteligencia Artificial";

const EJES = [
  {
    titulo: "Evaluación institucional como estrategia de mejoramiento",
    texto: "Procesos de evaluación y planeación para fortalecer la cultura institucional y la toma de decisiones.",
  },
  {
    titulo: "Impacto del aprendizaje y la educación en la sociedad",
    texto: "Educación inclusiva, desarrollo de habilidades para el cambio y transformación digital como impulsores del desarrollo social.",
  },
  {
    titulo: "Actores educativos y transformación institucional",
    texto: "Participación de directivos, docentes y familias en la mejora educativa y en la gestión institucional.",
  },
  {
    titulo: "Políticas públicas y liderazgo educativo",
    texto: "Liderazgo directivo, trabajo colaborativo y acciones preventivas ante problemáticas escolares.",
  },
  {
    titulo: "Gobernanza colaborativa en entornos multinivel",
    texto: "Redes, plataformas y participación ciudadana como medios para la toma de decisiones públicas efectivas.",
  },
  {
    titulo: "Gobernabilidad y liderazgo en sistemas interinstitucionales",
    texto: "Coordinación, liderazgo público y evaluación de políticas en sistemas complejos.",
  },
  {
    titulo: "Educación transformadora para la sostenibilidad organizacional",
    texto: "Modelos inclusivos, alianzas estratégicas y formación de talento humano con enfoque sostenible.",
  },
  {
    titulo: "Gestión organizacional con conciencia ecológica e innovación tecnológica",
    texto: "Educación ambiental, innovación pedagógica y experiencias de aprendizaje en entornos naturales.",
  },
];

const GENERACIONES = [
  "VII Generación del Doctorado en Administración de Instituciones Educativas",
  "VI Generación de la Maestría en Educación",
];

const FORO_TEXTO =
  "Difusión de proyectos de investigación desarrollados en los programas de maestría y doctorado del IIESBC y de otras instituciones de educación superior en el nivel de licenciatura, maestría y doctorado.";

const PROGRAMA = [
  {
    dia: "Viernes 4 de diciembre",
    fecha: "04",
    actividades: [
      { hora: "8:00 – 8:45", titulo: "Fotografía de generaciones", lista: GENERACIONES },
      { hora: "9:00 – 9:15", titulo: "Inauguración", texto: "Palabras del Rector del IIESBC, Dr. Rafael López Oñate." },
      {
        hora: "9:15 – 12:15",
        titulo: "Conferencias",
        texto: "Dra. Lorena Velez García, Dra. Celia Noemi Olmedo Noguera y M.C. Rodolfo Urbalejo Gallego.",
        destacado: true,
      },
      {
        hora: "12:30 – 14:00",
        titulo: "Conversatorios",
        texto: "Participación de especialistas en diferentes disciplinas, tales como administración privada, sociedad civil, políticas públicas, medio ambiente, tecnologías, asociaciones civiles y educación.",
      },
      {
        hora: "14:15 – 15:15",
        titulo: "Mesas de trabajo",
        texto: "Intercambio de experiencias profesionales y de avances de investigación, promoviendo el diálogo y la colaboración.",
      },
      { hora: "15:30 – 17:30", titulo: "Foro de Divulgación Científica", texto: FORO_TEXTO },
    ],
  },
  {
    dia: "Sábado 5 de diciembre",
    fecha: "05",
    actividades: [
      { hora: "9:00 – 11:00", titulo: "Foro de Divulgación Científica", texto: "Segunda sesión del foro." },
      { hora: "12:30 – 14:00", titulo: "Graduación", lista: GENERACIONES, destacado: true },
    ],
  },
];

const CONFERENCIAS = [
  {
    nombre: "Dra. Lorena Velez García",
    titulo: "La legislación en materia del uso de la inteligencia artificial; avances en México y la situación en otros países del mundo",
    foto: `${IMG}/lorena-velez-garcia.jpg`,
  },
  {
    nombre: "Dra. Celia Noemi Olmedo Noguera",
    titulo: "Modelo Europeo AI Act, como base para la legislación mexicana en materia de la Inteligencia Artificial",
    foto: `${IMG}/celia-olmedo-noguera.jpg`,
  },
  {
    nombre: "M.C. Rodolfo Urbalejo Gallego",
    titulo: "El compliance, una ventaja competitiva para las empresas e instituciones en México",
    foto: `${IMG}/rodolfo-urbalejo-gallego.jpg`,
  },
];

const CONVERSATORIOS = [
  { area: "Iniciativa Privada", nombre: "Mtro. Carlos Eduardo Martínez Arvizu", foto: `${IMG}/carlos-martinez-arvizu.jpg` },
  { area: "Educación y Sindicatos", nombre: "Dr. Oscar Daniel Camarero Viniegra", foto: `${IMG}/oscar-camarero-viniegra.jpg` },
  { area: "Sociedad Civil", nombre: "Dra. Celia Pelayo González", foto: `${IMG}/celia-pelayo-gonzalez.jpg` },
  { area: "Responsabilidad Ambiental", nombre: "Dr. Jose Alejandro Suastegui Macias", foto: `${IMG}/jose-suastegui-macias.jpg` },
  { area: "Políticas Públicas", nombre: "Dr. Gerardo Arturo Galván Rubio", foto: `${IMG}/gerardo-galvan-rubio.jpg` },
  { area: "Tecnología", nombre: "Dra. Claudia Viviana Álvarez Vega", foto: `${IMG}/claudia-alvarez-vega.jpg` },
];

const CONTACTO = {
  telefono: "686 564 90 10",
  telefonoHref: "tel:+526865649010",
  correo: "im.iiesbc@gmail.com",
  direccion: ["C. Río Fuerte 1692", "Col. Independencia Magisterial", "21290 Mexicali, B.C."],
  mapa: "https://www.google.com/maps/search/?api=1&query=R%C3%ADo+Fuerte+1692+Independencia+Magisterial+Mexicali",
};

export default function CongresoPage() {
  const ahora = new Date();
  const registroAbierto = ahora < CIERRE_REGISTRO;
  const congresoRealizado = ahora >= FIN_CONGRESO;

  return (
    <main id="main" className="relative isolate bg-white">
      {/* ─────────────────────────── Hero ─────────────────────────── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/congreso/congreso.jpg"
            alt=""
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

        <div className="relative min-h-[70vh] flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-14 sm:py-20 lg:py-20">
            <div className="max-w-4xl animate-fade-in-up">
              <EstadoChip vivo={registroAbierto} className="mb-8">
                {registroAbierto
                  ? "Registro abierto · cierra el 30 de noviembre"
                  : congresoRealizado
                    ? "Se realizó el 4 y 5 de diciembre de 2026"
                    : "4 y 5 de diciembre de 2026"}
              </EstadoChip>

              <h1 className="font-display font-extrabold text-white text-[clamp(1.85rem,8vw,5.75rem)] leading-[0.98] tracking-display-tight text-balance mb-6">
                II Congreso <span className="text-[#f68c24]">Multidisciplinario</span>
              </h1>

              <div className="relative w-40 h-px bg-gradient-to-r from-[#66822c] via-[#f68c24] to-transparent mb-7 overflow-hidden">
                <span className="absolute inset-0 bg-white/60 animate-shimmer" />
              </div>

              <p className="font-display text-white text-xl lg:text-2xl font-medium leading-snug max-w-3xl text-balance mb-3">
                «{TITULO_CONGRESO}»
              </p>
              <p className="text-white/75 text-lg leading-relaxed max-w-2xl text-pretty mb-8">
                y IX Foro de Divulgación Científica de Trabajos de Posgrado
              </p>

              <dl className="flex flex-wrap gap-x-10 gap-y-4 mb-9">
                <HeroDato etiqueta="Fechas" valor="4 y 5 de diciembre de 2026" />
                <HeroDato etiqueta="Sede" valor="IIESBC · Mexicali, B.C." />
                <HeroDato etiqueta="Constancia" valor="De participación" />
              </dl>

              <div className="flex flex-wrap gap-4">
                {registroAbierto && <BotonRegistro>Regístrate</BotonRegistro>}
                <a
                  href="#programa"
                  className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/25 backdrop-blur-md text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a5c94c]" />
                  Ver programa
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────── Presentación ─────────────────────── */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            <SectionHeader eyebrow="Convocatoria">
              Una invitación a <span className="text-[#66822c]">dialogar</span>
            </SectionHeader>
            <p className="text-lg text-[#4a5240] leading-relaxed text-pretty mb-10">
              El Instituto Interamericano de Estudios Superiores de Baja California (IIESBC) invita a la
              comunidad académica, profesional y estudiantil a participar en el Congreso Multidisciplinario,
              cuyo propósito es generar un espacio de intercambio, reflexión y colaboración en torno a los
              desafíos actuales de la gestión directiva, la educación y la sostenibilidad institucional en
              contextos globales.
            </p>

            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#66822c]" />
              <span className="text-eyebrow text-[#556e23]">Objetivo del congreso</span>
            </div>
            <blockquote className="pl-6 lg:pl-8 border-l-2 border-[#f68c24]">
              <p className="font-display text-xl lg:text-2xl text-[#1a1f14] font-medium leading-snug text-pretty">
                Fomentar la difusión de experiencias, investigaciones y buenas prácticas, para examinar las
                herramientas y estrategias que permitan a las organizaciones alinear el desarrollo de la
                Inteligencia Artificial con las normativas globales emergentes, como un motor de innovación
                segura y éticamente responsable.
              </p>
            </blockquote>
          </div>

          <div className="lg:col-span-5">
            <div className="relative max-w-md mx-auto">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden ring-1 ring-black/5 shadow-[var(--shadow-card-hover)]">
                <Image
                  src={`${IMG}/justicia-ia.png`}
                  alt="Ilustración de la justicia con elementos de inteligencia artificial"
                  fill
                  sizes="(min-width: 1024px) 28rem, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1208]/50 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white rounded-2xl px-6 py-4 shadow-[var(--shadow-ring)] ring-1 ring-black/5">
                <div className="text-eyebrow text-[#8a9180] mb-1">Diciembre 2026</div>
                <div className="font-display font-bold text-[#1a1f14] text-lg tabular-nums">Viernes 4 y sábado 5</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────── Ejes temáticos ─────────────────────── */}
      <section className="relative py-24 lg:py-32 bg-[var(--color-surface)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <SectionHeader eyebrow="Ocho líneas de trabajo">
              Ejes <span className="text-[#66822c]">temáticos</span>
            </SectionHeader>
          </div>

          <ol className="grid md:grid-cols-2 gap-x-14 lg:gap-x-20 border-t border-[var(--color-line)] md:border-t-0">
            {EJES.map((eje, i) => (
              <li
                key={eje.titulo}
                className="flex gap-5 py-6 lg:py-7 border-b border-[var(--color-line)] md:[&:nth-child(-n+2)]:border-t"
              >
                <span className="font-display font-extrabold text-2xl leading-none text-[#66822c] tabular-nums w-8 shrink-0 pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display font-bold text-[#1a1f14] text-lg leading-snug text-balance mb-1.5">
                    {eje.titulo}
                  </h3>
                  <p className="text-[#4a5240] leading-relaxed text-pretty">{eje.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─────────────────────────── Programa ─────────────────────────── */}
      <section id="programa" className="relative py-24 lg:py-32 bg-white overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <SectionHeader eyebrow="Dos días de actividades">
              <span className="text-[#66822c]">Programa</span> del congreso
            </SectionHeader>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {PROGRAMA.map((dia) => (
              <div key={dia.dia}>
                <div className="flex items-end gap-4 mb-8 pb-6 border-b border-[var(--color-line)]">
                  <span className="font-display font-extrabold text-6xl leading-none text-[#66822c] tabular-nums">
                    {dia.fecha}
                  </span>
                  <div>
                    <div className="text-eyebrow text-[#8a9180]">Diciembre 2026</div>
                    <div className="font-display font-bold text-xl text-[#1a1f14]">{dia.dia}</div>
                  </div>
                </div>

                <ol className="relative border-l border-[var(--color-line)] ml-2 space-y-8">
                  {dia.actividades.map((act) => (
                    <li key={act.hora} className="relative pl-8">
                      <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full ring-4 ring-white bg-[#66822c]" />
                      <div className="text-sm font-semibold text-[#556e23] tabular-nums mb-1">{act.hora} h</div>
                      <h3 className="font-display font-bold text-lg text-[#1a1f14] mb-1.5">{act.titulo}</h3>
                      {act.texto && <p className="text-[#4a5240] leading-relaxed text-pretty">{act.texto}</p>}
                      {act.lista && (
                        <ul className="text-[#4a5240] leading-relaxed space-y-1">
                          {act.lista.map((l) => (
                            <li key={l}>{l}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── Conferencias ─────────────────────── */}
      <section className="relative py-24 lg:py-32 bg-[var(--color-surface)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <SectionHeader eyebrow="Viernes 4 de diciembre · 9:15 h">
              <span className="text-[#66822c]">Conferencias</span> magistrales
            </SectionHeader>
          </div>

          {/* Las fotos de origen miden 278–384 px de ancho: el marco se mantiene
              chico (≤ 9rem) para que no se vean borrosas en pantallas de alta densidad. */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {CONFERENCIAS.map((c) => (
              <article
                key={c.nombre}
                className="bg-white rounded-[1.75rem] p-6 lg:p-7 ring-1 ring-black/5 shadow-[var(--shadow-card)] flex flex-col"
              >
                <div className="flex items-end gap-5 mb-6">
                  <div className="relative w-28 sm:w-32 lg:w-36 aspect-[4/5] shrink-0 rounded-2xl overflow-hidden ring-1 ring-black/5">
                    <Image src={c.foto} alt="" fill sizes="144px" className="object-cover object-top" />
                  </div>
                  <h3 className="font-display font-bold text-[#1a1f14] text-xl leading-snug text-balance pb-1">
                    {c.nombre}
                  </h3>
                </div>
                <p className="font-display text-[#4a5240] text-lg font-medium leading-snug text-pretty border-t border-[var(--color-line)] pt-5">
                  «{c.titulo}»
                </p>
              </article>
            ))}
          </div>

          {registroAbierto && (
            <div className="mt-14 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
              <BotonRegistro>Regístrate al congreso</BotonRegistro>
              <p className="text-[#4a5240]">
                Registro abierto hasta el <strong className="font-semibold text-[#1a1f14]">30 de noviembre</strong>.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ─────────────────────── Conversatorios ─────────────────────── */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <SectionHeader eyebrow="Viernes 4 de diciembre · 12:30 h">
              <span className="text-[#66822c]">Conversatorios</span>
            </SectionHeader>
            <p className="text-lg text-[#4a5240] leading-relaxed text-pretty">
              Para la acción interdisciplinaria en administración, sociedad, políticas públicas, medio ambiente,
              tecnologías, asociaciones civiles, educación y sindicatos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {CONVERSATORIOS.map((p) => (
              <article
                key={p.nombre}
                className="bg-white rounded-[1.75rem] p-6 ring-1 ring-black/5 shadow-[var(--shadow-card)] flex items-center gap-5"
              >
                <div className="relative w-20 h-20 shrink-0 rounded-full overflow-hidden ring-1 ring-black/5">
                  <Image src={p.foto} alt="" fill sizes="80px" className="object-cover object-top" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-[#556e23] mb-1">{p.area}</div>
                  <div className="font-display font-bold text-[#1a1f14] leading-snug text-balance">{p.nombre}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── Registro (CTA final) ─────────────────────── */}
      <section id="registro" className="relative isolate overflow-hidden bg-[#0c1208] py-24 lg:py-32 scroll-mt-20">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(246,140,36,0.16),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(102,130,44,0.22),transparent_55%)]"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-7">
            <EstadoChip vivo={registroAbierto} className="mb-8">
              {registroAbierto
                ? "Cierre del registro: 30 de noviembre"
                : congresoRealizado
                  ? "Congreso realizado"
                  : "Registro cerrado"}
            </EstadoChip>

            <h2 className="font-display text-display-lg font-bold text-white text-balance mb-6">
              {registroAbierto ? (
                <>
                  Asegura tu <span className="text-[#f68c24]">lugar</span>
                </>
              ) : congresoRealizado ? (
                <>
                  Gracias por <span className="text-[#f68c24]">acompañarnos</span>
                </>
              ) : (
                <>
                  El registro en línea ha <span className="text-[#f68c24]">cerrado</span>
                </>
              )}
            </h2>
            <p className="text-white/75 text-lg leading-relaxed max-w-xl text-pretty mb-8">
              {registroAbierto
                ? "El registro se hace en un formulario de Google que se abre en otra pestaña."
                : congresoRealizado
                  ? "Si tienes dudas sobre tu constancia de participación, comunícate con nosotros."
                  : "Cerró el 30 de noviembre. Si quieres saber si aún puedes participar, comunícate con nosotros."}
            </p>

            {registroAbierto && (
              <>
                <ul className="grid gap-3 mb-10 text-white/85">
                  <Incluye>Dos días: viernes 4 y sábado 5 de diciembre, en el IIESBC, Mexicali.</Incluye>
                  <Incluye>Conferencias magistrales, conversatorios, mesas de trabajo y foro de posgrado.</Incluye>
                  <Incluye>Constancia de participación.</Incluye>
                </ul>
                <BotonRegistro className="mb-12">Ir al formulario de registro</BotonRegistro>
              </>
            )}

            <div className="grid sm:grid-cols-3 gap-6 pt-10 border-t border-white/10">
              <ContactoDato etiqueta="Teléfono">
                <a href={CONTACTO.telefonoHref} className="hover:text-[#f68c24] transition-colors tabular-nums">
                  {CONTACTO.telefono}
                </a>
              </ContactoDato>
              <ContactoDato etiqueta="Correo">
                <a href={`mailto:${CONTACTO.correo}`} className="hover:text-[#f68c24] transition-colors break-all">
                  {CONTACTO.correo}
                </a>
              </ContactoDato>
              <ContactoDato etiqueta="Sede">
                <a href={CONTACTO.mapa} target="_blank" rel="noopener noreferrer" className="hover:text-[#f68c24] transition-colors">
                  {CONTACTO.direccion.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                  <span className="sr-only"> (abre el mapa en otra pestaña)</span>
                </a>
              </ContactoDato>
            </div>
          </div>

          {/* El QR solo sirve si estás en la computadora: en celular se oculta. */}
          {registroAbierto && (
            <div className="hidden lg:block lg:col-span-5">
              <div className="max-w-xs ml-auto bg-white rounded-[1.75rem] p-6 ring-1 ring-black/5 shadow-[var(--shadow-card-hover)]">
                <div className="relative aspect-square">
                  <Image
                    src={`${IMG}/qr-registro.png`}
                    alt="Código QR del formulario de registro al congreso"
                    fill
                    sizes="18rem"
                    className="object-contain"
                  />
                </div>
                <p className="mt-4 text-center text-sm text-[#4a5240] text-balance">
                  ¿Prefieres hacerlo desde tu celular? Escanea el código.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Barra fija de registro en celular: queda pegada abajo mientras se recorre
          la página y se detiene al final del contenido (no tapa el pie de página). */}
      {registroAbierto && (
        <div className="lg:hidden sticky bottom-0 z-40 bg-[#0c1208]/95 backdrop-blur-md border-t border-white/10 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <div className="flex items-center justify-between gap-4 max-w-xl mx-auto">
            <p className="text-white/80 text-sm leading-tight">
              Registro abierto
              <span className="block text-white font-semibold">hasta el 30 de noviembre</span>
            </p>
            <BotonRegistro compacto>Regístrate</BotonRegistro>
          </div>
        </div>
      )}
    </main>
  );
}

/* ─────────────────────────── Subcomponentes ─────────────────────────── */

// Sobre fondo claro el naranja no alcanza el contraste mínimo como texto (2.4:1),
// así que eyebrows y palabras de acento van en olivo; el naranja queda para acciones.
function SectionHeader({ eyebrow, children }) {
  return (
    <>
      <div className="flex items-center gap-3 mb-6">
        <span className="h-px w-10 bg-[#66822c]" />
        <span className="text-eyebrow text-[#556e23]">{eyebrow}</span>
      </div>
      <h2 className="font-display text-display-lg font-bold text-[#1a1f14] text-balance mb-6">{children}</h2>
    </>
  );
}

function HeroDato({ etiqueta, valor }) {
  return (
    <div>
      <dt className="text-eyebrow text-white/55 mb-1">{etiqueta}</dt>
      <dd className="font-display font-semibold text-white text-lg">{valor}</dd>
    </div>
  );
}

function ContactoDato({ etiqueta, children }) {
  return (
    <div>
      <div className="text-eyebrow text-white/50 mb-2">{etiqueta}</div>
      <div className="text-white/85 leading-relaxed">{children}</div>
    </div>
  );
}

function BotonRegistro({ children, compacto = false, className = "" }) {
  return (
    <a
      href={FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center justify-center gap-2 shrink-0 bg-[#f68c24] hover:bg-[#cd751e] text-[#1a1f14] font-semibold rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f68c24]",
        compacto
          ? "px-5 py-3 text-sm"
          : "px-7 py-3.5 shadow-[0_14px_36px_-12px_rgba(246,140,36,0.7)] hover:shadow-[0_16px_40px_-8px_rgba(246,140,36,0.9)] hover:-translate-y-0.5",
        className,
      ].join(" ")}
    >
      {children}
      <span className="sr-only"> (se abre en otra pestaña)</span>
      <ArrowIcon />
    </a>
  );
}

function EstadoChip({ vivo, className = "", children }) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-xl border border-white/15 px-4 py-1.5 rounded-full ${className}`}
    >
      <span className="relative flex h-2 w-2" aria-hidden="true">
        {vivo && <span className="absolute inset-0 rounded-full bg-[#a5c94c] opacity-75 animate-ping" />}
        <span className={`relative rounded-full h-2 w-2 ${vivo ? "bg-[#a5c94c]" : "bg-white/40"}`} />
      </span>
      <span className="text-white/90 text-xs font-medium tracking-[0.18em] uppercase">{children}</span>
    </div>
  );
}

function Incluye({ children }) {
  return (
    <li className="flex gap-3 leading-relaxed">
      <svg className="w-5 h-5 mt-0.5 shrink-0 text-[#a5c94c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span>{children}</span>
    </li>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}
