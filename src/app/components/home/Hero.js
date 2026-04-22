import Image from "next/image";
import Link from "next/link";

const pillars = ["Licenciaturas", "Maestrías", "Doctorado", "Diplomados"];

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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1208]/85 via-[#0c1208]/60 to-[#0c1208]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(246,140,36,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(102,130,44,0.22),transparent_55%)]" />
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <span className="absolute top-[22%] left-[18%] w-1.5 h-1.5 rounded-full bg-white/50 animate-float-slow" />
        <span className="absolute top-[40%] right-[22%] w-2 h-2 rounded-full bg-[#f68c24]/45 animate-float-medium" style={{ animationDelay: "1.2s" }} />
        <span className="absolute bottom-[28%] left-[42%] w-1.5 h-1.5 rounded-full bg-[#66822c]/60 animate-float-fast" style={{ animationDelay: "0.6s" }} />
      </div>

      <div className="relative min-h-[92vh] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">
            <div className="lg:col-span-7 animate-fade-in-up">
              <div className="inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-xl border border-white/15 px-4 py-1.5 rounded-full mb-10">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-[#a5c94c] opacity-75 animate-ping" />
                  <span className="relative rounded-full h-2 w-2 bg-[#a5c94c]" />
                </span>
                <span className="text-white/90 text-xs font-medium tracking-[0.18em] uppercase">
                  Inscripciones Abiertas 2025
                </span>
              </div>

              <div className="font-display font-extrabold text-white leading-[0.92] tracking-display-tight mb-8">
                <span className="block text-[clamp(3.5rem,9vw,7.5rem)]">
                  <span className="text-[#a5c94c]">IIES</span>
                  <span className="text-[#f68c24]">BC</span>
                </span>
              </div>

              <div className="relative w-40 h-px bg-gradient-to-r from-[#66822c] via-[#f68c24] to-transparent mb-10 overflow-hidden">
                <span className="absolute inset-0 bg-white/60 animate-shimmer" />
              </div>

              <h1 className="font-display text-white text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] text-balance max-w-2xl mb-6">
                Instituto Interamericano de Estudios Superiores de{" "}
                <span className="text-[#f68c24] font-semibold">Baja California</span>
              </h1>

              <p className="text-white/80 text-lg lg:text-xl leading-relaxed max-w-xl mb-10 text-pretty">
                Transformamos vidas a través de la educación superior de calidad, formando
                profesionales competitivos para un mundo en constante cambio.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/oferta-academica"
                  className="group inline-flex items-center justify-center gap-2 bg-[#66822c] hover:bg-[#556e23] text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-[0_12px_32px_-10px_rgba(102,130,44,0.8)] hover:shadow-[0_16px_40px_-8px_rgba(102,130,44,0.9)] hover:-translate-y-0.5"
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

            <div className="lg:col-span-5 lg:pl-4">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-[#66822c]/30 via-transparent to-[#f68c24]/20 rounded-[2.5rem] blur-2xl -z-10" aria-hidden="true" />
                <div className="relative bg-white/95 backdrop-blur-xl rounded-[1.75rem] p-8 lg:p-10 shadow-[0_30px_90px_-30px_rgba(0,0,0,0.5)] ring-1 ring-black/5">
                  <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] uppercase text-[#66822c] mb-5">
                    <span className="w-6 h-px bg-[#66822c]" />
                    Tu futuro comienza aquí
                  </div>

                  <div className="font-display font-extrabold leading-[0.95] tracking-display-tight mb-8">
                    <span className="block text-[#1a1f14] text-4xl lg:text-5xl">INSCRIPCIONES</span>
                    <span className="block text-[#f68c24] text-4xl lg:text-5xl">ABIERTAS</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pillars.map((label, i) => (
                      <li key={label} className="flex items-center gap-3 group">
                        <span className="font-display font-semibold text-xs text-[#8a9180] tabular-nums w-6">
                          0{i + 1}
                        </span>
                        <span className="h-px flex-1 bg-[#e6e3d8] group-hover:bg-[#66822c] transition-colors duration-300" />
                        <span className="text-[#1a1f14] font-medium text-base">{label}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-[#e6e3d8] flex items-center justify-between">
                    <div>
                      <p className="text-xs text-[#8a9180] uppercase tracking-widest font-semibold">RVOE</p>
                      <p className="text-sm text-[#1a1f14] font-medium">Reconocimiento oficial</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#66822c]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#66822c]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/60">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-white/70 to-transparent" />
      </div>
    </section>
  );
}
