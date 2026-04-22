import AnimatedCounter from "./AnimatedCounter";

const stats = [
  {
    end: 15,
    suffix: "+",
    label: "Años de Experiencia",
    sub: "Formando profesionales competitivos desde 1999",
    accent: "#a5c94c",
    size: "lg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    end: 2500,
    suffix: "+",
    label: "Estudiantes",
    sub: "Han confiado en nuestra formación académica",
    accent: "#f68c24",
    size: "lg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-5.13a4 4 0 10-8 0 4 4 0 008 0zm6 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    end: 98,
    suffix: "%",
    label: "Satisfacción",
    sub: "De nuestros egresados",
    accent: "#a5c94c",
    size: "sm",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
  },
  {
    end: 7,
    suffix: "+",
    label: "Programas",
    sub: "Licenciaturas, maestrías y doctorado",
    accent: "#f68c24",
    size: "sm",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
];

export default function NumerosStats() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0f1b08] overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#66822c]/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#f68c24]/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#f68c24]" />
            <span className="text-eyebrow text-[#f68c24]">Impacto</span>
          </div>
          <h2 className="font-display text-display-lg font-extrabold text-white text-balance mb-5">
            Números que nos <span className="text-[#f68c24]">respaldan</span>
          </h2>
          <p className="text-lg text-white/70 text-pretty">
            Más de una década formando profesionales de excelencia en Baja California.
          </p>
        </div>

        <div className="grid lg:grid-cols-6 gap-5">
          {stats.map((s, idx) => (
            <article
              key={idx}
              className={`group relative rounded-[1.75rem] p-8 lg:p-10 ring-1 ring-white/10 bg-white/[0.04] backdrop-blur-sm hover:bg-white/[0.07] hover:ring-white/20 transition-all duration-500 overflow-hidden ${
                s.size === "lg" ? "lg:col-span-3" : "lg:col-span-3"
              }`}
            >
              <div
                className="absolute -inset-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${s.accent}22, transparent 60%)`,
                }}
                aria-hidden="true"
              />

              <div className="relative flex items-start justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <span
                    className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] mb-6"
                    style={{ color: s.accent }}
                  >
                    <span className="h-px w-6" style={{ backgroundColor: s.accent }} />
                    0{idx + 1}
                  </span>

                  <div
                    className="font-display font-extrabold tracking-display-tight leading-none mb-4 text-white"
                    style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
                  >
                    <AnimatedCounter end={s.end} suffix={s.suffix} />
                  </div>

                  <p className="font-display text-white text-lg lg:text-xl font-semibold mb-2">
                    {s.label}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed max-w-sm text-pretty">
                    {s.sub}
                  </p>
                </div>

                <span
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ring-1 ring-white/15"
                  style={{ color: s.accent, background: `${s.accent}15` }}
                >
                  {s.icon}
                </span>
              </div>

              <div className="relative mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.22em] text-white/40 font-semibold">
                  IIESBC
                </span>
                <span className="h-1 flex-1 mx-6 bg-white/10 rounded-full overflow-hidden">
                  <span
                    className="block h-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[1200ms] ease-out rounded-full"
                    style={{ backgroundColor: s.accent }}
                  />
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-white/40 font-semibold">
                  {s.size === "lg" ? "Destacado" : "Métrica"}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
