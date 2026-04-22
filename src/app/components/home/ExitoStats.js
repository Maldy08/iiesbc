const stats = [
  { value: "25+", label: "Años transformando vidas", tone: "orange" },
  { value: "1000+", label: "Profesionales exitosos", tone: "yellow" },
  { value: "98%", label: "Tasa de empleabilidad", tone: "orange" },
  { value: "∞", label: "Posibilidades ilimitadas", tone: "yellow" },
];

export default function ExitoStats() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#66822c] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-0 -left-20 w-96 h-96 rounded-full bg-[#a5c94c]/30 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 -right-20 w-[32rem] h-[32rem] rounded-full bg-[#f68c24]/20 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#f68c24]" />
            <span className="text-eyebrow text-[#f68c24]">Éxito a tu alcance</span>
            <span className="h-px w-10 bg-[#f68c24]" />
          </div>
          <h2 className="font-display text-white text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] font-extrabold tracking-display-tight text-balance mb-8">
            ¡Ponemos <span className="text-[#ffd675] italic font-medium">el éxito</span>{" "}
            <br className="hidden md:block" />
            a tu alcance!
          </h2>
          <p className="text-xl lg:text-2xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto text-pretty">
            Más que una institución educativa, somos tu puerta hacia un futuro lleno de
            oportunidades.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/15 border-y border-white/15 mb-16 lg:mb-20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="px-6 py-10 lg:py-12 text-center group"
            >
              <div
                className={`font-display font-extrabold tracking-display-tight leading-none mb-4 text-[clamp(3rem,6vw,5rem)] ${
                  stat.tone === "orange" ? "text-[#ffb663]" : "text-[#ffd675]"
                }`}
              >
                {stat.value}
              </div>
              <div className="text-white/75 text-sm lg:text-base font-medium leading-snug text-balance max-w-[14rem] mx-auto">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <figure className="max-w-4xl mx-auto text-center">
          <svg className="w-10 h-10 text-[#ffd675]/60 mx-auto mb-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
          </svg>
          <blockquote className="font-display text-white text-2xl lg:text-3xl font-medium leading-relaxed italic text-balance">
            El éxito no es casualidad. Es trabajo duro, perseverancia, aprendizaje, estudio,
            sacrificio y, sobre todo, amor por lo que haces.
          </blockquote>
          <figcaption className="mt-6 text-[#ffd675] font-semibold text-sm tracking-wide uppercase">
            — Tu futuro comienza aquí
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
