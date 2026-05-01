import Image from "next/image";
import Link from "next/link";

export default function Mision() {
  return (
    <section className="relative py-24 lg:py-32 bg-[var(--color-surface)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-6 lg:-inset-10 rounded-[3rem] bg-[#66822c]/5 blur-3xl" aria-hidden="true" />
            <div className="absolute -left-4 top-16 h-36 w-36 rounded-full bg-[#f68c24]/10 blur-3xl" aria-hidden="true" />

            <div className="relative min-h-[520px] sm:min-h-[640px] lg:min-h-[780px]">
              <div className="absolute inset-x-6 top-8 bottom-0 rounded-[2.75rem] bg-[#66822c]/10 rotate-[-2deg] ring-1 ring-black/5" aria-hidden="true" />
              <div className="absolute -right-2 top-4 bottom-12 w-24 rounded-full bg-[#f68c24]/10 blur-2xl" aria-hidden="true" />

              <div className="group relative h-[520px] sm:h-[640px] lg:h-[780px] overflow-hidden rounded-[2.75rem] ring-1 ring-black/5 shadow-[var(--shadow-card-hover)]">
                <Image
                  src="/images/brooke-cagle.jpg"
                  alt="Comunidad estudiantil IIESBC"
                  fill
                  className="object-cover scale-105 transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0c1208]/50 via-[#0c1208]/10 to-[#0c1208]/65" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(246,140,36,0.24),transparent_34%),radial-gradient(circle_at_88%_74%,rgba(102,130,44,0.28),transparent_38%)]" />
                <div className="absolute left-8 right-8 top-8 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#0c1208]/85 to-transparent" />
              </div>

              <div className="absolute top-6 right-4 lg:top-10 lg:right-8 bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 shadow-[var(--shadow-ring)] ring-1 ring-white/70 animate-float-slow">
                <p className="text-eyebrow text-[#f68c24] mb-1">Nuestra misión</p>
                <p className="font-display font-semibold text-[#1a1f14] text-sm">Desde 1999</p>
              </div>

              <div className="absolute bottom-6 left-4 lg:bottom-10 lg:left-8 bg-[#66822c] text-white rounded-2xl px-6 py-5 shadow-[0_20px_50px_-20px_rgba(102,130,44,0.7)] hidden sm:block">
                <p className="font-display text-3xl font-extrabold leading-none">25+</p>
                <p className="text-xs font-medium text-white/80 mt-1 uppercase tracking-widest">Años de historia</p>
              </div>

              <div className="absolute -bottom-3 right-8 hidden lg:flex items-center gap-2 rounded-full bg-white px-4 py-3 shadow-[var(--shadow-ring)] ring-1 ring-black/5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#a5c94c] animate-ping" />
                <span className="h-2.5 w-10 rounded-full bg-[#66822c]/25" />
                <span className="h-2.5 w-6 rounded-full bg-[#f68c24]/35" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#66822c]" />
              <span className="text-eyebrow text-[#66822c]">Universidad con propósito</span>
            </div>

            <h2 className="font-display text-display-lg font-bold text-[#1a1f14] text-balance mb-8">
              Somos una universidad comprometida con la{" "}
              <span className="text-[#66822c]">comunidad estudiantil</span>
            </h2>

            <p className="text-xl text-[#4a5240] leading-relaxed mb-6 text-pretty">
              Fundada con la misión de desarrollar la competitividad y la preparación de
              nuestros alumnos para un entorno profesional demandante.
            </p>

            <p className="text-base text-[#4a5240] leading-relaxed mb-10 text-pretty">
              Nos enorgullece ser una institución comprometida con la excelencia académica y
              el desarrollo integral de cada estudiante que transita por nuestras aulas.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/sobre-nosotros"
                className="group inline-flex items-center gap-2 bg-[#f68c24] hover:bg-[#cd751e] text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-[0_14px_36px_-12px_rgba(246,140,36,0.7)] hover:-translate-y-0.5"
              >
                Conoce Nuestra Historia
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <div className="flex items-center gap-3 pl-2">
                <div className="flex -space-x-2">
                  <span className="w-8 h-8 rounded-full bg-[#66822c] ring-2 ring-[var(--color-surface)]" />
                  <span className="w-8 h-8 rounded-full bg-[#f68c24] ring-2 ring-[var(--color-surface)]" />
                  <span className="w-8 h-8 rounded-full bg-[#cd751e] ring-2 ring-[var(--color-surface)]" />
                </div>
                <p className="text-sm text-[#4a5240]">
                  <span className="font-semibold text-[#1a1f14]">+1,000</span> egresados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
