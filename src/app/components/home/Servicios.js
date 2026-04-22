const servicios = [
  {
    id: "clases",
    emoji: "📚",
    titulo: "Clases Institucionales",
    descripcion:
      "Posgrados dirigidos a instituciones educativas públicas y a empresas que confían en nosotros para la preparación continua de su fuerza laboral.",
    featured: true,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: "vinculacion",
    emoji: "🤝",
    titulo: "Vinculación",
    descripcion:
      "Convenios con instituciones educativas, gubernamentales y empresas para que nuestros estudiantes realicen en ellos sus prácticas y servicios.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7a3 3 0 106 0 3 3 0 00-6 0zM4 21v-1a4 4 0 014-4h2m6 5v-1a4 4 0 00-4-4h-1m7 0l-3-3m0 0l-3 3m3-3v8" />
      </svg>
    ),
  },
  {
    id: "becas",
    emoji: "🎓",
    titulo: "Becas",
    descripcion:
      "Tanto para licenciatura como para los cursos de posgrado existe la posibilidad de ser recipiente de una beca y de obtener facilidades de pago de colegiaturas.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    id: "horarios",
    emoji: "⏰",
    titulo: "Horarios Flexibles",
    descripcion:
      "Entre nuestros estudiantes contamos con personas que trabajan tiempo completo, empresarios y profesores universitarios, por lo que buscamos el mejor horario para su preparación.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Servicios() {
  const featured = servicios.find((s) => s.featured);
  const rest = servicios.filter((s) => !s.featured);

  return (
    <section className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#66822c]" />
            <span className="text-eyebrow text-[#66822c]">Nuestros servicios</span>
          </div>
          <h2 className="font-display text-display-lg font-bold text-[#1a1f14] text-balance mb-5">
            Lo que nos distingue como{" "}
            <span className="text-[#66822c]">institución de excelencia</span>
          </h2>
          <p className="text-lg text-[#4a5240] text-pretty">
            Servicios especializados diseñados para acompañar el crecimiento académico y
            profesional de nuestra comunidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-6 gap-5">
          <article className="group lg:col-span-3 lg:row-span-2 relative bg-[var(--color-surface)] rounded-[1.75rem] p-10 lg:p-12 ring-1 ring-[var(--color-line)] hover:ring-[#66822c]/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#66822c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#66822c]/8 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative flex flex-col h-full">
              <div className="flex items-center justify-between mb-10">
                <span className="w-14 h-14 rounded-2xl bg-[#66822c] text-white flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(102,130,44,0.6)]">
                  {featured.icon}
                </span>
                <span className="text-eyebrow text-[#8a9180]">01 / Principal</span>
              </div>

              <div className="flex-1">
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-[#1a1f14] mb-5 text-balance">
                  <span className="inline-block mr-2 text-2xl align-middle" aria-hidden="true">{featured.emoji}</span>
                  {featured.titulo}
                </h3>
                <p className="text-[#4a5240] text-lg leading-relaxed text-pretty max-w-lg">
                  {featured.descripcion}
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-[var(--color-line)] flex items-center justify-between">
                <span className="font-display text-[11px] tracking-[0.22em] uppercase text-[#66822c] font-semibold">
                  Programa insignia
                </span>
                <span className="w-10 h-10 rounded-full bg-white ring-1 ring-[var(--color-line)] flex items-center justify-center group-hover:bg-[#66822c] group-hover:ring-[#66822c] transition-colors duration-300">
                  <svg className="w-4 h-4 text-[#66822c] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </article>

          {rest.map((s, i) => (
            <article
              key={s.id}
              className="group lg:col-span-3 relative bg-white rounded-[1.75rem] p-8 lg:p-9 ring-1 ring-[var(--color-line)] hover:ring-[#66822c]/40 transition-all duration-400 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
            >
              <div className="flex items-start gap-5">
                <span className="shrink-0 w-12 h-12 rounded-xl bg-[#66822c]/8 text-[#66822c] flex items-center justify-center group-hover:bg-[#66822c] group-hover:text-white transition-colors duration-300">
                  {s.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-4 mb-3">
                    <h3 className="font-display text-xl font-bold text-[#1a1f14] truncate">
                      <span className="mr-1.5 text-base" aria-hidden="true">{s.emoji}</span>
                      {s.titulo}
                    </h3>
                    <span className="font-display text-[11px] tracking-widest text-[#8a9180] font-semibold tabular-nums shrink-0">
                      0{i + 2}
                    </span>
                  </div>
                  <p className="text-[#4a5240] leading-relaxed text-sm lg:text-base text-pretty">
                    {s.descripcion}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
