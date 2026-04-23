import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/slid-IIESBC-Inscrip.jpg"
          alt="Campus IIESBC"
          fill
          priority
          className="object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1208]/85 via-[#0c1208]/60 to-[#0c1208]/92" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(246,140,36,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(102,130,44,0.22),transparent_55%)]" />
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <span className="absolute top-[22%] left-[18%] w-1.5 h-1.5 rounded-full bg-white/50 animate-float-slow" />
        <span className="absolute top-[40%] right-[22%] w-2 h-2 rounded-full bg-[#f68c24]/45 animate-float-medium" style={{ animationDelay: "1.2s" }} />
        <span className="absolute bottom-[28%] left-[42%] w-1.5 h-1.5 rounded-full bg-[#66822c]/60 animate-float-fast" style={{ animationDelay: "0.6s" }} />
      </div>

      <div className="relative min-h-[92vh] flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-6 lg:px-10 py-24 lg:py-32 flex flex-col items-center text-center animate-fade-in-up">

          <div className="inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-xl border border-white/15 px-4 py-1.5 rounded-full mb-10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-[#a5c94c] opacity-75 animate-ping" />
              <span className="relative rounded-full h-2 w-2 bg-[#a5c94c]" />
            </span>
            <span className="text-white/90 text-xs font-medium tracking-[0.18em] uppercase">
              Inscripciones Abiertas 2025
            </span>
          </div>

          <div className="font-display font-extrabold leading-[0.92] tracking-display-tight mb-6">
            <span className="block text-[clamp(4rem,12vw,9rem)]">
              <span className="text-[#a5c94c]">IIES</span>
              <span className="text-[#f68c24]">BC</span>
            </span>
          </div>

          <div className="relative w-40 h-px bg-gradient-to-r from-transparent via-[#f68c24] to-transparent mb-8 overflow-hidden mx-auto">
            <span className="absolute inset-0 bg-white/60 animate-shimmer" />
          </div>

          <h1 className="font-display text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] text-balance mb-6">
            Instituto Interamericano de Estudios Superiores de{" "}
            <span className="text-[#f68c24]">Baja California</span>
          </h1>

          <p className="text-white/80 text-lg lg:text-xl leading-relaxed max-w-2xl mb-10 text-pretty">
            Transformamos vidas a través de la educación superior de calidad, formando
            profesionales competitivos para un mundo en constante cambio.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/oferta-academica"
              className="group inline-flex items-center justify-center gap-2 bg-[#66822c] hover:bg-[#556e23] text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-[0_14px_36px_-12px_rgba(102,130,44,0.7)] hover:shadow-[0_16px_40px_-8px_rgba(102,130,44,0.9)] hover:-translate-y-0.5"
            >
              Conoce Nuestros Programas
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfSsj4lfLF9akHmCPjL5pTK8PaebMFQ2__qE-wJZpShmka01A/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/25 px-8 py-4 rounded-full font-semibold text-base backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
            >
              Inscríbete Ahora
              <span className="inline-flex w-1.5 h-1.5 rounded-full bg-[#f68c24]" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-10 hidden lg:flex items-center gap-2 text-white/50">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </section>
  );
}
