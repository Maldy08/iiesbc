import Image from "next/image";
import Link from "next/link";

export default function BibliotecaVirtual() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#0c1208] overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/images/biblioteca-virtual.jpg"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1208] via-[#0c1208]/70 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-white">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#f68c24]" />
              <span className="text-eyebrow text-[#f68c24]">Recursos académicos</span>
            </div>
            <h2 className="font-display text-display-lg font-bold text-balance mb-6">
              Biblioteca virtual abierta para la{" "}
              <span className="text-[#a5c94c]">comunidad IIESBC</span>
            </h2>
            <p className="text-white/70 text-lg max-w-xl mb-10 text-pretty">
              Accede a material de consulta, colecciones digitales y contenidos curados
              para acompañar tu formación académica desde cualquier lugar.
            </p>
            <Link
              href="https://www.canva.com/design/DAG38pVRiqw/96Z1wuHznTSSzWeZrGt8Gg/view?utm_content=DAG38pVRiqw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8906bd033e"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white text-[#1a1f14] hover:bg-[#f68c24] hover:text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-[0_20px_50px_-20px_rgba(246,140,36,0.8)] hover:-translate-y-0.5"
            >
              Acceder al contenido
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 aspect-[4/5] bg-black">
              <Image
                src="/images/biblioteca-virtual.jpg"
                alt="Biblioteca virtual IIESBC"
                fill
                className="object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-eyebrow text-white/60 mb-2">Acervo digital</p>
                <p className="font-display text-white text-2xl font-semibold leading-tight">
                  Colecciones, revistas y bases de datos académicas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
