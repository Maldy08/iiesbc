import Image from "next/image";
import Link from "next/link";

export default function Mision() {
  return (
    <section className="relative py-24 lg:py-32 bg-[var(--color-surface)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] lg:aspect-[4/5] rounded-[2rem] overflow-hidden ring-1 ring-black/5 shadow-[var(--shadow-card-hover)]">
              <Image
                src="/images/brooke-cagle.jpg"
                alt="Comunidad estudiantil IIESBC"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f14]/25 via-transparent to-transparent" />
            </div>

            <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 bg-white rounded-2xl px-6 py-4 shadow-[var(--shadow-ring)] ring-1 ring-black/5">
              <p className="text-eyebrow text-[#f68c24] mb-1">Nuestra misión</p>
              <p className="font-display font-semibold text-[#1a1f14] text-sm">Desde 1999</p>
            </div>

            <div className="absolute -bottom-6 -left-4 lg:-bottom-8 lg:-left-8 bg-[#66822c] text-white rounded-2xl px-6 py-5 shadow-[0_20px_50px_-20px_rgba(102,130,44,0.7)] hidden sm:block">
              <p className="font-display text-3xl font-extrabold leading-none">25+</p>
              <p className="text-xs font-medium text-white/80 mt-1 uppercase tracking-widest">Años de historia</p>
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
