import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Maestría en Administración Competitiva - IIESBC',
  description: 'Maestría con Reconocimiento de Validez Oficial de Estudios (RVOE). Forma líderes capaces de generar ventajas competitivas en organizaciones.',
  keywords: 'maestría, administración competitiva, RVOE, posgrado, IIESBC, Mexicali',
  openGraph: {
    title: 'Maestría en Administración Competitiva - IIESBC',
    description: 'Maestría con RVOE que forma líderes en gestión competitiva',
    images: ['/images/maestrias/administracion-competitiva.jpg'],
  },
};

export default function MaestriaAdministracionCompetitiva() {
  const planEstudios = [
    {
      cuatrimestre: 1,
      titulo: "PRIMER CUATRIMESTRE",
      materias: ["Administración", "Toma de Decisiones Gerenciales"]
    },
    {
      cuatrimestre: 2,
      titulo: "SEGUNDO CUATRIMESTRE",
      materias: ["Administración Estratégica", "Dirección de Empresas"]
    },
    {
      cuatrimestre: 3,
      titulo: "TERCER CUATRIMESTRE",
      materias: ["Cambio y Desarrollo Organizacional", "Mercadotecnia de los Negocios"]
    },
    {
      cuatrimestre: 4,
      titulo: "CUARTO CUATRIMESTRE",
      materias: ["Teoría y Análisis Financiero", "Liderazgo Asertivo de los Negocios"]
    },
    {
      cuatrimestre: 5,
      titulo: "QUINTO CUATRIMESTRE",
      materias: ["Análisis e Investigación de Mercados", "Administración de las Finanzas Organizacionales"]
    },
    {
      cuatrimestre: 6,
      titulo: "SEXTO CUATRIMESTRE",
      materias: ["Talleres de Emprendedores", "Investigación Aplicada"]
    },
  ];

  const requisitos = [
    "Copia de CURP",
    "Certificado de estudios de licenciatura (original y copia)",
    "Cédula profesional de licenciatura (original y copia)",
    "En caso de no contar con Título presentar carta constancia de trámite en proceso",
    "Acta de nacimiento (original y 2 copias)",
    "Fotografías tamaño credencial e infantil en blanco y negro",
    "Identificación oficial (copia)",
    "Recibo de pagos correspondientes",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

        <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-orange-900/70 z-10"></div>
          <div className="absolute inset-0 z-0">
            <Image
          src="/images/madministracion.jpg"
          alt="Maestría en Administración Competitiva"
          fill
          className="object-cover"
          priority
            />
          </div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Maestría en
          <span className="block text-orange-400 mt-2">
            Administración Competitiva
          </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Con Reconocimiento de Validez Oficial de Estudios (RVOE)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contacto"
            className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            Solicitar Información
          </Link>
          <Link
            href="#plan-estudios"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-full transition-all border-2 border-white"
          >
            Ver Plan de Estudios
          </Link>
            </div>
          </div>
        </section>

        {/* Sección de Tabs con Información */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Columna Izquierda - Tabs de Información */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Información del Programa
                </h2>
                <p className="text-lg text-gray-600">
                  Conoce todos los detalles de nuestra Maestría en Administración Competitiva
                </p>
              </div>

              {/* Tabs Accordion Style */}
              <div className="space-y-4">
                {/* Objetivo */}
                <details className="group bg-gradient-to-r from-green-50 to-orange-50 rounded-xl overflow-hidden shadow-lg">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-gray-900 hover:bg-white/50 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span>Objetivo</span>
                    </div>
                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="p-6 pt-0 bg-white/70">
                    <p className="text-gray-700 leading-relaxed">
                      Formar maestros en administración competitiva de las organizaciones con los conocimientos, 
                      habilidades y actitudes necesarias para desarrollar e implementar estrategias competitivas 
                      innovadoras capaces de diseñar e implementar soluciones a problemas complejos por medio de 
                      compromiso, liderazgo, determinación y sentido humano, con pensamiento creativo e innovador 
                      con enfoque en nuevas ideas y conocimientos; expandiendo la visión, la perspectiva del 
                      liderazgo y la exposición a un ambiente multicultural para desarrollar un ambiente 
                      colaborativo de trabajo.
                    </p>
                  </div>
                </details>

                {/* Perfil del Egresado */}
                <details className="group bg-gradient-to-r from-green-50 to-orange-50 rounded-xl overflow-hidden shadow-lg">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-gray-900 hover:bg-white/50 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span>Perfil del Egresado</span>
                    </div>
                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="p-6 pt-0 bg-white/70">
                    <p className="text-gray-700 leading-relaxed">
                      Los maestros egresados de la Maestría en Administración Competitiva de las Organizaciones 
                      serán capaces, entre otras cosas, de analizar, diseñar, evaluar y mejorar sistemas 
                      organizacionales con base a planteamientos estratégicos; mediante la aplicación de 
                      conocimientos en dirección estratégica, tecnologías de información e integración humana 
                      así como, metodologías de análisis y toma de decisiones.
                    </p>
                  </div>
                </details>

                {/* Campo Laboral */}
                <details className="group bg-gradient-to-r from-green-50 to-orange-50 rounded-xl overflow-hidden shadow-lg">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-gray-900 hover:bg-white/50 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <span>Campo Laboral</span>
                    </div>
                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="p-6 pt-0 bg-white/70">
                    <p className="text-gray-700 leading-relaxed">
                      Los maestros egresados de la Maestría en Administración Competitiva de las Organizaciones 
                      podrán emplearse en centros de investigación, en empresas del sector privado o público 
                      ocupando puestos de la alta dirección, auto emplearse creando empresas o en trabajos de 
                      consultoría.
                    </p>
                  </div>
                </details>

                {/* Requisitos de Ingreso */}
                <details className="group bg-gradient-to-r from-green-50 to-orange-50 rounded-xl overflow-hidden shadow-lg">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-gray-900 hover:bg-white/50 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <span>Requisitos de Ingreso</span>
                    </div>
                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="p-6 pt-0 bg-white/70">
                    <ul className="space-y-2">
                      {requisitos.map((requisito, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <span className="text-orange-500 font-bold mt-1">•</span>
                          <span>{requisito}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              </div>
            </div>

            {/* Columna Derecha - Imagen */}
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/maestrias/administracion-competitiva-main.jpg"
                alt="Estudiantes de Maestría en Administración Competitiva"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">
                  Transforma tu Carrera
                </h3>
                <p className="text-lg opacity-90">
                  Conviértete en un líder estratégico de la administración moderna
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Datos Clave */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Datos Clave del Programa
            </h2>
            <p className="text-xl text-gray-600">
              Información general sobre la maestría
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="text-5xl font-bold text-green-600 mb-2">6</div>
              <div className="text-gray-700 font-semibold">Cuatrimestres</div>
              <div className="text-sm text-gray-500 mt-1">18 meses</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="text-5xl font-bold text-orange-600 mb-2">12</div>
              <div className="text-gray-700 font-semibold">Materias</div>
              <div className="text-sm text-gray-500 mt-1">Plan completo</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-green-600 mb-2">Sábados</div>
              <div className="text-gray-700 font-semibold">Clases</div>
              <div className="text-sm text-gray-500 mt-1">8:00 - 14:00 hrs</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-orange-600 mb-2">RVOE</div>
              <div className="text-gray-700 font-semibold">Validez Oficial</div>
              <div className="text-sm text-gray-500 mt-1">Reconocido</div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan de Estudios */}
      <section id="plan-estudios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gray-900">
              Plan de Estudios
            </h2>
            <p className="text-xl text-gray-600">
              Programa académico estructurado en 6 cuatrimestres
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planEstudios.map((periodo) => (
              <div key={periodo.cuatrimestre} className="bg-gradient-to-br from-green-50 to-orange-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="inline-block bg-gradient-to-r from-green-600 to-orange-600 text-white px-6 py-2 rounded-full font-bold mb-2">
                    {periodo.cuatrimestre}º Cuatrimestre
                  </div>
                  <h3 className="text-sm text-gray-600 font-semibold">{periodo.titulo}</h3>
                </div>
                <ul className="space-y-3">
                  {periodo.materias.map((materia, index) => (
                    <li
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <p className="font-semibold text-gray-800 text-center">{materia}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Inscripciones y Becas */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Inscripciones Abiertas
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Ten la oportunidad de vincular tus estudios con Universidades Internacionales. 
                En un ambiente sano, cómodo y dedicado se estudia mejor.
              </p>
              <p className="text-lg mb-8 opacity-90">
                Pregunta sobre nuestros planes de estudio, promociones y las becas que tenemos para ti.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="px-8 py-4 bg-white text-green-600 hover:bg-gray-100 font-bold rounded-full transition-all transform hover:scale-105 shadow-lg text-center"
                >
                  Solicitar Información
                </Link>
                <a
                  href="tel:+526861819889"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-full transition-all border-2 border-white flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (686) 181-9889
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Presencial</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-4xl font-bold mb-2">18</div>
                <div className="text-sm opacity-90">Meses de duración</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-4xl font-bold mb-2">RVOE</div>
                <div className="text-sm opacity-90">Certificado oficial</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-4xl font-bold mb-2">Becas</div>
                <div className="text-sm opacity-90">Disponibles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            ¿Listo para Impulsar tu Carrera?
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Únete a nuestra comunidad de profesionales exitosos y transforma tu futuro profesional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-orange-600 hover:from-green-700 hover:to-orange-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              Solicitar Información
            </Link>
            <Link
              href="/oferta-academica"
              className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-full transition-all"
            >
              Ver Más Programas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}