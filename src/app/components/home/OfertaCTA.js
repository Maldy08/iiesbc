import Link from "next/link";

export default function OfertaCTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-[var(--color-surface-alt)] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #1a1f14 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="absolute -top-20 -left-20 w-[28rem] h-[28rem] rounded-full bg-[#66822c]/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-24 -right-20 w-[32rem] h-[32rem] rounded-full bg-[#f68c24]/10 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="h-px w-10 bg-[#f68c24]" />
          <span className="text-eyebrow text-[#f68c24]">Oferta educativa</span>
          <span className="h-px w-10 bg-[#f68c24]" />
        </div>

        <h2 className="font-display text-display-xl font-extrabold text-[#1a1f14] tracking-display-tight leading-[0.95] text-balance mb-8">
          Conoce toda nuestra <br className="hidden md:block" />
          <span className="text-[#66822c]">oferta educativa</span>
        </h2>

        <p className="text-lg lg:text-xl text-[#4a5240] max-w-2xl mx-auto mb-12 text-pretty">
          Licenciaturas, Maestrías y Doctorado con reconocimiento oficial. Explora todos
          nuestros programas en un solo lugar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/oferta-academica"
            className="group inline-flex items-center gap-3 bg-[#66822c] hover:bg-[#556e23] text-white px-10 py-5 rounded-full font-semibold text-base transition-all duration-300 shadow-[0_18px_44px_-14px_rgba(102,130,44,0.8)] hover:-translate-y-0.5"
          >
            Ver Oferta Académica
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <div className="flex items-center gap-6 text-sm text-[#4a5240]">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#66822c]" />
              3 Licenciaturas
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f68c24]" />
              3 Maestrías
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#cd751e]" />
              1 Doctorado
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
