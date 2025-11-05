"use client";

import Link from "next/link";

export default function OfertaAcademica() {
  const licenciaturas = [
    {
      title: "Licenciatura en Derecho",
      href: "/oferta-academica/licenciaturas/derecho",
      desc: "Formación sólida en el ámbito jurídico con enfoque práctico y ético.",
      icon: "⚖️",
    },
    {
      title: "Licenciatura en Criminología",
      href: "/oferta-academica/licenciaturas/criminologia",
      desc: "Estudia el fenómeno delictivo desde una perspectiva científica y humana.",
      icon: "🕵️",
    },
    {
      title: "Licenciatura en Ciencias de la Educación",
      href: "/oferta-academica/licenciaturas/ciencias-de-la-educacion",
      desc: "Diseño, gestión e innovación educativa para contextos reales.",
      icon: "📚",
    },
  ];

  const maestrias = [
    {
      title: "Maestría en Educación",
      href: "/oferta-academica/maestrias/educacion",
      desc: "Desarrolla competencias para liderar procesos de enseñanza-aprendizaje.",
      icon: "🎓",
    },
    {
      title: "Maestría en Administración Competitiva",
      href: "/oferta-academica/maestrias/administracion-competitiva",
      desc: "Dirección estratégica y gestión organizacional con visión integral.",
      icon: "📈",
    },
    {
      title: "Maestría en Gestión de Políticas Públicas",
      href: "/oferta-academica/maestrias/gestion-de-politicas-publicas",
      desc: "Diseño, evaluación e implementación de políticas públicas efectivas.",
      icon: "🏛️",
    },
  ];

  const doctorados = [
    {
      title: "Doctorado en Administración de Instituciones Educativas",
      href: "/oferta-academica/doctorado/administracion-de-instituciones-educativas",
      desc: "Alta formación para la investigación y gestión educativa a nivel directivo.",
      icon: "🏆",
    },
  ];

  const diplomados = [
    {
      title: "Diplomado en Desarrollo del Lenguaje",
      href: "/oferta-academica/diplomados/desarrollo-del-lenguaje",
      desc: "Estrategias para la intervención y estimulación del lenguaje.",
      icon: "🗣️",
    },
    {
      title: "Diplomado en Trastornos del Neurodesarrollo",
      href: "/oferta-academica/diplomados/transtornos-del-neurodesarrollo",
      desc: "Comprensión y abordaje integral de los TND.",
      icon: "🧠",
    },
  ];

  const Section = ({ title, emoji, items }) => (
    <section className="relative">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-600 to-orange-500 text-white shadow-lg">
          <span className="text-xl" aria-hidden>{emoji}</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <li key={p.href} className="group">
            <Link
              href={p.href}
              className="block h-full rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl supports-[backdrop-filter]:backdrop-blur-md"
              aria-label={`${p.title} - Ver programa`}
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-lg bg-gradient-to-br from-green-100 to-orange-100 p-2 text-2xl">
                  <span aria-hidden>{p.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {p.desc}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-sm font-medium text-green-700">
                    <span>Ver programa</span>
                    <svg
                      className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>

              <span className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-green-50 to-orange-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 rounded-b-2xl bg-gradient-to-r from-green-600 to-orange-600 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );

  return (
    <main id="main" className="relative isolate overflow-hidden">
      {/* Elegant decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-orange-50 to-green-50" />
        
        {/* Animated gradient orbs */}
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-green-300/40 to-green-500/20 blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 -right-32 h-[400px] w-[400px] rounded-full bg-gradient-to-bl from-orange-300/40 to-orange-500/20 blur-3xl animate-float-medium" />
        <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-green-200/30 to-orange-200/30 blur-3xl animate-float-fast" />
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
        
        {/* Elegant top border gradient */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
        
        {/* Subtle side gradients */}
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-white/60 to-transparent" />
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-white/60 to-transparent" />
      </div>

      {/* Hero */}
      <section className="border-b border-white/30 bg-white/80 py-12 supports-[backdrop-filter]:backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-orange-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
            <span className="inline-block h-2 w-2 animate-ping rounded-full bg-white/90" />
            Oferta Académica IIESBC
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Programas que impulsan tu desarrollo profesional
          </h1>
          <p className="mt-4 max-w-3xl text-gray-600">
            Descubre nuestra oferta de Licenciaturas, Maestrías, Doctorado y Diplomados, diseñados con enfoque práctico,
            pertinencia social y acompañamiento docente.
          </p>
        </div>
      </section>

      {/* Content sections */}
      <div className="mx-auto max-w-7xl space-y-12 px-4 py-12">
        <Section title="Licenciaturas" emoji="🎓" items={licenciaturas} />
        <Section title="Maestrías" emoji="🎯" items={maestrias} />
        <Section title="Doctorado" emoji="🏆" items={doctorados} />
        <Section title="Diplomados" emoji="🧩" items={diplomados} />

        {/* CTA */}
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm supports-[backdrop-filter]:backdrop-blur-md">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">¿Tienes dudas o necesitas orientación?</h3>
              <p className="text-sm text-gray-600">Nuestro equipo te acompaña para elegir el programa ideal para ti.</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-green-600 to-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-[1.02]"
              >
                Contactar a IIESBC
              </Link>
              <Link
                href="/sobre-nosotros"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-800 transition-colors duration-200 hover:bg-gray-50"
              >
                Conoce más de IIESBC
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.05);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
          }
        }
        
        @keyframes float-medium {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-40px, 30px) scale(1.08);
          }
        }
        
        @keyframes float-fast {
          0%, 100% {
            transform: translateX(-50%) translateY(0) scale(1);
          }
          33% {
            transform: translateX(-50%) translateY(-20px) scale(1.03);
          }
          66% {
            transform: translateX(-50%) translateY(15px) scale(0.97);
          }
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 15s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 12s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
