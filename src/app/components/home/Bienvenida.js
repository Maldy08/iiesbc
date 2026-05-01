import Image from "next/image";

export default function Bienvenida() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#66822c]" />
              <span className="text-eyebrow text-[#66822c]">Bienvenida</span>
            </div>

            <h2 className="font-display text-display-lg font-bold text-[#1a1f14] text-balance mb-10">
              Un espacio para quienes buscan{" "}
              <span className="text-[#66822c]">educación superior de calidad.</span>
            </h2>

            <blockquote className="relative pl-6 lg:pl-8 border-l-2 border-[#f68c24] mb-8">
              <p className="font-display text-xl lg:text-2xl text-[#1a1f14] font-medium leading-relaxed text-pretty">
                A través de este medio deseo dar la bienvenida al Instituto Interamericano de
                Estudios Superiores de Baja California, a aquellas personas que buscan una
                educación superior de calidad.
              </p>
            </blockquote>

            <p className="text-[#4a5240] text-lg leading-relaxed max-w-2xl text-pretty">
              Nos enorgullece ser una institución comprometida con la excelencia académica y
              el desarrollo integral de nuestros estudiantes.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-[var(--color-line)] max-w-lg">
              <div>
                <p className="font-display text-3xl font-bold text-[#66822c]">25+</p>
                <p className="text-xs text-[#8a9180] uppercase tracking-widest mt-1">Años</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-[#66822c]">7</p>
                <p className="text-xs text-[#8a9180] uppercase tracking-widest mt-1">Programas</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-[#66822c]">RVOE</p>
                <p className="text-xs text-[#8a9180] uppercase tracking-widest mt-1">Oficial</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative min-h-[520px] sm:min-h-[640px] lg:min-h-[760px]">
              <div className="absolute -inset-5 rounded-[3rem] bg-[#f68c24]/5 blur-3xl" aria-hidden="true" />
              <div className="absolute inset-x-5 top-8 bottom-0 rounded-[2.5rem] bg-[#f68c24]/10 rotate-[2deg] ring-1 ring-black/5" aria-hidden="true" />
              <div className="absolute -left-4 top-20 h-36 w-36 rounded-full bg-[#66822c]/10 blur-3xl" aria-hidden="true" />

              <div className="group relative h-[520px] sm:h-[640px] lg:h-[760px] rounded-[2.5rem] overflow-hidden ring-1 ring-black/5 shadow-[var(--shadow-card-hover)]">
                <Image
                  src="/images/bienve-IIESBC.jpg"
                  alt="Comunidad IIESBC"
                  fill
                  className="object-cover scale-105 transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0c1208]/45 via-[#0c1208]/5 to-[#0c1208]/70" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(246,140,36,0.24),transparent_34%),radial-gradient(circle_at_18%_78%,rgba(102,130,44,0.28),transparent_38%)]" />
                <div className="absolute left-7 right-7 top-7 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0c1208]/85 to-transparent" />
              </div>

              <div className="absolute bottom-6 left-4 right-4 lg:left-[-2rem] lg:right-auto bg-white/92 backdrop-blur-md rounded-2xl p-5 shadow-[var(--shadow-ring)] ring-1 ring-white/70 max-w-[18rem]">
                <div className="flex items-center gap-4">
                  <span className="shrink-0 w-11 h-11 rounded-full bg-[#66822c] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-display font-bold text-[#1a1f14] text-sm">Educación de Calidad</p>
                    <p className="text-xs text-[#4a5240] mt-0.5">Comprometidos con tu futuro profesional</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-8 right-6 hidden sm:flex items-center gap-2 rounded-full bg-white/90 px-4 py-3 shadow-[var(--shadow-ring)] ring-1 ring-white/70 backdrop-blur-md" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#a5c94c] animate-ping" />
                <span className="h-2.5 w-10 rounded-full bg-[#66822c]/25" />
                <span className="h-2.5 w-6 rounded-full bg-[#f68c24]/35" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
