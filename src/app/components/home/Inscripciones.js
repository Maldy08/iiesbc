import Image from "next/image";

const beneficios = [
  { numero: "01", titulo: "Becas disponibles", texto: "Apoyos para licenciatura y posgrado." },
  { numero: "02", titulo: "Facilidades de pago", texto: "Planes adaptados a tu situación." },
  { numero: "03", titulo: "Planes flexibles", texto: "Escolarizado o en línea, tú decides." },
  { numero: "04", titulo: "Vinculación internacional", texto: "Convenios con universidades extranjeras." },
];

export default function Inscripciones() {
  return (
    <section className="py-24 lg:py-32 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative aspect-[4/5] rounded-[1.75rem] overflow-hidden ring-1 ring-black/5 shadow-[var(--shadow-card-hover)]">
              <Image
                src="/images/inscripciones-IIESBC.jpg"
                alt="Inscripciones IIESBC"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f14]/30 via-transparent to-transparent" />
            </div>

            <div className="absolute -top-5 -right-4 lg:-right-8 bg-[#f68c24] text-white rounded-2xl px-6 py-4 shadow-[0_18px_44px_-16px_rgba(246,140,36,0.8)] rotate-[2deg]">
              <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white/80 mb-0.5">Abiertas</p>
              <p className="font-display text-xl font-extrabold leading-none">Inscripciones 2026</p>
            </div>

            <div className="absolute -bottom-6 -left-4 lg:-left-8 bg-white rounded-2xl px-6 py-4 shadow-[var(--shadow-ring)] ring-1 ring-black/5">
              <p className="text-xs text-[#8a9180] uppercase tracking-widest font-semibold">Inscripciones Abiertas</p>
              <p className="font-display font-semibold text-sm text-[#1a1f14] mt-0.5">Tu futuro académico te espera</p>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#f68c24]" />
              <span className="text-eyebrow text-[#f68c24]">Inscripciones</span>
            </div>

            <h2 className="font-display text-display-lg font-bold text-[#1a1f14] text-balance mb-6">
              Ten la oportunidad de vincular tus estudios con{" "}
              <span className="text-[#f68c24]">Universidades Internacionales</span>
            </h2>

            <p className="text-lg text-[#4a5240] leading-relaxed max-w-2xl mb-12 text-pretty">
              En un ambiente sano, cómodo y dedicado se estudia mejor. Pregunta sobre nuestros
              planes de estudio, promociones y las becas que tenemos para ti.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
              {beneficios.map((b) => (
                <div key={b.numero} className="group">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="font-display text-2xl font-bold text-[#f68c24] tabular-nums">
                      {b.numero}
                    </span>
                    <span className="flex-1 h-px bg-[var(--color-line)] group-hover:bg-[#f68c24]/40 transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#1a1f14] mb-1">{b.titulo}</h3>
                  <p className="text-sm text-[#4a5240] leading-relaxed">{b.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
