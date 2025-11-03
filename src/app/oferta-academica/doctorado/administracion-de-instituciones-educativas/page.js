import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Doctorado en Administración de Instituciones Educativas - IIESBC',
  description: 'Forma investigadores de alto nivel en administración educativa. Programa doctoral con RVOE para profesores, consultores y directivos del sector educativo.',
  keywords: 'doctorado, administración educativa, RVOE, investigación, IIESBC, Mexicali',
  openGraph: {
    title: 'Doctorado en Administración de Instituciones Educativas - IIESBC',
    description: 'El más alto nivel académico en administración educativa',
    images: ['/images/doctorados/administracion-instituciones-educativas.jpg'],
  },
};

export default function DoctoradoAdministracionEducativa() {
  const planEstudios = [
    {
      cuatrimestre: 1,
      titulo: "PRIMER CUATRIMESTRE",
      materias: [
        "Sistemas de Consultoría y Gestoría Educativa",
        "Estrategias de Gestión Escolar"
      ]
    },
    {
      cuatrimestre: 2,
      titulo: "SEGUNDO CUATRIMESTRE",
      materias: [
        "Administración y Gestión de Instituciones",
        "Gestión y Desarrollo de Programas Virtuales"
      ]
    },
    {
      cuatrimestre: 3,
      titulo: "TERCER CUATRIMESTRE",
      materias: [
        "Seguimiento y Evaluación Pedagógica",
        "Prácticas de Enseñanza Aprendizaje"
      ]
    },
    {
      cuatrimestre: 4,
      titulo: "CUARTO CUATRIMESTRE",
      materias: [
        "Gestión de la Calidad Educativa",
        "Planeación y Control de Proyectos Educativos"
      ]
    },
    {
      cuatrimestre: 5,
      titulo: "QUINTO CUATRIMESTRE",
      materias: [
        "Evaluación y Control de Instituciones Educativas",
        "Desarrollo Organizacional en Instituciones Educativas"
      ]
    },
    {
      cuatrimestre: 6,
      titulo: "SEXTO CUATRIMESTRE",
      materias: [
        "Dirección Estratégica en Instituciones Educativas",
        "Investigación Aplicada"
      ]
    },
  ];

  const perfilEgresado = [
    "Contarán con una visión integral de los problemas que enfrentan las instituciones educativas",
    "Serán capaces de realizar investigaciones o dirigir grupos de investigación que contribuyan con aportes originales en el campo de la administración de instituciones educativas",
    "Tendrán liderazgo en las acciones de transformación institucional educativa",
    "Tendrán la capacidad de identificar problemáticas con base en la investigación para orientar procesos de toma de decisiones"
  ];

  const requisitos = [
    "Copia de CURP",
    "Certificado de estudios de licenciatura (original y copia)",
    "Cédula profesional de licenciatura (original y copia)",
    "Certificado de estudios de maestría (original y copia)",
    "Cédula profesional de maestría (original y copia)",
    "En caso de no contar con Título presentar carta constancia de trámite en proceso",
    "Acta de nacimiento (original y 2 copias)",
    "Fotografías tamaño credencial e infantil en blanco y negro",
    "Identificación oficial (copia)",
    "Recibo de pagos correspondientes"
  ];

  const ventajas = [
    {
      icon: "🎓",
      titulo: "Máximo Nivel Académico",
      descripcion: "Doctorado con RVOE oficial"
    },
    {
      icon: "🔬",
      titulo: "Investigación de Alto Nivel",
      descripcion: "Aportes originales al campo educativo"
    },
    {
      icon: "👨‍🏫",
      titulo: "Liderazgo Educativo",
      descripcion: "Transformación institucional"
    },
    {
      icon: "📊",
      titulo: "Gestión Estratégica",
      descripcion: "Toma de decisiones basada en investigación"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/95 to-red-900/95 z-10"></div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/doctorados/administracion-instituciones-educativas.jpg"
            alt="Doctorado en Administración de Instituciones Educativas"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center text-white">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <span className="text-amber-100 font-semibold">RVOE Oficial • Nivel Doctoral</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Doctorado en
            <span className="block text-amber-300 mt-2">
              Administración de
            </span>
            <span className="block text-amber-200 mt-2">
              Instituciones Educativas
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Forma investigadores de alto nivel y lidera la transformación educativa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="px-8 py-4 bg-white text-amber-900 hover:bg-amber-50 font-bold rounded-full transition-all transform hover:scale-105 shadow-lg"
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

      {/* Estadísticas */}
      <section className="bg-white py-12 shadow-lg -mt-8 relative z-20 mx-4 md:mx-8 lg:mx-16 rounded-2xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-xl hover:bg-amber-50 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <div className="text-4xl mb-2">📅</div>
              <div className="text-4xl font-bold text-amber-700 mb-2">6</div>
              <div className="text-gray-600 font-semibold">Cuatrimestres</div>
            </div>
            <div className="text-center p-4 rounded-xl hover:bg-amber-50 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <div className="text-4xl mb-2">📚</div>
              <div className="text-4xl font-bold text-red-700 mb-2">12</div>
              <div className="text-gray-600 font-semibold">Materias</div>
            </div>
            <div className="text-center p-4 rounded-xl hover:bg-amber-50 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <div className="text-4xl mb-2">🎓</div>
              <div className="text-4xl font-bold text-amber-700 mb-2">Ph.D</div>
              <div className="text-gray-600 font-semibold">Nivel Doctoral</div>
            </div>
            <div className="text-center p-4 rounded-xl hover:bg-amber-50 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <div className="text-4xl mb-2">🏆</div>
              <div className="text-4xl font-bold text-red-700 mb-2">RVOE</div>
              <div className="text-gray-600 font-semibold">Oficial</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas Competitivas */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            ¿Por qué estudiar este Doctorado?
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            El más alto nivel académico en administración educativa
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ventajas.map((ventaja, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-amber-500"
              >
                <div className="text-5xl mb-4">{ventaja.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{ventaja.titulo}</h3>
                <p className="text-gray-600">{ventaja.descripcion}</p>
              </div>
            ))}
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
                  Conoce todos los detalles de nuestro Doctorado en Administración de Instituciones Educativas
                </p>
              </div>

              {/* Tabs Accordion Style */}
              <div className="space-y-4">
                {/* Objetivo */}
                <details className="group bg-gradient-to-r from-amber-50 to-red-50 rounded-xl overflow-hidden shadow-lg">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-gray-900 hover:bg-white/50 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
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
                      Formar investigadores de alto nivel en el área de la administración de instituciones 
                      educativas y ofrecer una opción de formación a profesores, consultores especializados, 
                      funcionarios directivos del sector educativo ante la demanda de doctores que existe en México.
                    </p>
                  </div>
                </details>

                {/* Perfil del Egresado */}
                <details className="group bg-gradient-to-r from-red-50 to-amber-50 rounded-xl overflow-hidden shadow-lg">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-gray-900 hover:bg-white/50 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
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
                    <ul className="space-y-3">
                      {perfilEgresado.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <span className="text-red-500 font-bold mt-1 flex-shrink-0">•</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>

                {/* Campo Laboral */}
                <details className="group bg-gradient-to-r from-amber-50 to-red-50 rounded-xl overflow-hidden shadow-lg">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-gray-900 hover:bg-white/50 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
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
                      Administración de proyectos para la evaluación y/o certificación de los resultados 
                      de la educación en base a consultorías, dirección de centros educativos, investigación 
                      o asesor de proyectos institucionales educativos.
                    </p>
                  </div>
                </details>

                {/* Requisitos de Ingreso */}
                <details className="group bg-gradient-to-r from-red-50 to-amber-50 rounded-xl overflow-hidden shadow-lg">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-gray-900 hover:bg-white/50 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
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
                          <span className="text-red-500 font-bold mt-1">•</span>
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
                src="/images/doctorados/administracion-instituciones-educativas.jpg"
                alt="Doctorado en Administración de Instituciones Educativas"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">
                  Lidera la Transformación
                </h3>
                <p className="text-lg opacity-90">
                  Investigación de alto nivel en administración educativa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan de Estudios */}
      <section id="plan-estudios" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gray-900">
              Plan de Estudios
            </h2>
            <p className="text-xl text-gray-600">
              Programa doctoral estructurado en 6 cuatrimestres
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planEstudios.map((periodo) => (
              <div key={periodo.cuatrimestre} className="bg-gradient-to-br from-amber-50 to-red-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="inline-block bg-gradient-to-r from-amber-600 to-red-600 text-white px-6 py-2 rounded-full font-bold mb-2">
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
      <section className="py-20 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¡Inscripciones Abiertas!
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Alcanza el más alto nivel académico en administración educativa. 
              Ten la oportunidad de vincular tus estudios con Universidades Internacionales.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">✓ Becas Disponibles</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">✓ Financiamiento</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">✓ RVOE Oficial</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="px-12 py-5 bg-white text-orange-600 hover:bg-gray-100 font-bold rounded-full transition-all transform hover:scale-105 shadow-2xl text-xl"
              >
                Solicita Información Ahora
              </Link>
              <a
                href="tel:+526861819889"
                className="px-12 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-full transition-all border-2 border-white flex items-center justify-center gap-2 text-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (686) 181-9889
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            ¿Listo para el Máximo Nivel Académico?
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Únete a nuestro selecto grupo de doctores e investiga en el más alto nivel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="px-8 py-4 bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg"
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