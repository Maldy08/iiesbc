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
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[620px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/95 to-red-900/95 z-10" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/doctorados/administracion-instituciones-educativas.jpg"
            alt="Doctorado en Administración de Instituciones Educativas"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute -bottom-24 left-0 right-0 z-10 h-48 bg-gradient-to-t from-gray-50 to-transparent" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2 rounded-full mb-6 ring-1 ring-white/25">
            <span className="text-amber-100 font-semibold">RVOE Oficial • Nivel Doctoral</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Doctorado en
            <span className="block text-amber-300 mt-2">
              Administración de
            </span>
            <span className="block text-amber-200 mt-2">
              Instituciones Educativas
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            Forma investigadores de alto nivel y lidera la transformación educativa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="px-8 py-4 bg-white text-amber-900 hover:bg-amber-50 font-bold rounded-full transition-all transform hover:scale-[1.02] shadow-lg"
            >
              Solicitar Información
            </Link>
            <Link
              href="#plan-estudios"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-full transition-all border border-white/60"
            >
              Ver Plan de Estudios
            </Link>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="relative z-20 -mt-10">
        <div className="mx-4 md:mx-8 lg:mx-16 rounded-2xl bg-white shadow-lg ring-1 ring-black/5">
          <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="group text-center p-5 rounded-2xl hover:bg-amber-50/70 transition-all duration-300">
                <div className="mx-auto mb-3 h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-600 to-red-600 flex items-center justify-center text-2xl shadow-md">
                  <span aria-hidden>📅</span>
                </div>
                <div className="text-4xl font-bold text-amber-700 mb-1">6</div>
                <div className="text-gray-600 font-semibold">Cuatrimestres</div>
              </div>
              <div className="group text-center p-5 rounded-2xl hover:bg-amber-50/70 transition-all duration-300">
                <div className="mx-auto mb-3 h-12 w-12 rounded-2xl bg-gradient-to-br from-red-600 to-amber-600 flex items-center justify-center text-2xl shadow-md">
                  <span aria-hidden>📚</span>
                </div>
                <div className="text-4xl font-bold text-red-700 mb-1">12</div>
                <div className="text-gray-600 font-semibold">Materias</div>
              </div>

              <div className="group text-center p-5 rounded-2xl hover:bg-amber-50/70 transition-all duration-300">
                <div className="mx-auto mb-3 h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-600 to-red-600 flex items-center justify-center text-2xl shadow-md">
                  <span aria-hidden>🏆</span>
                </div>
                <div className="text-4xl font-bold text-red-700 mb-1">RVOE</div>
                <div className="text-gray-600 font-semibold">Oficial</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas Competitivas */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 tracking-tight">
            ¿Por qué estudiar este Doctorado?
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            El más alto nivel académico en administración educativa
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ventajas.map((ventaja, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ring-1 ring-black/5"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-50 to-red-50 ring-1 ring-amber-200/60">
                  <span className="text-4xl" aria-hidden>{ventaja.icon}</span>
                </div>
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
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Columna Izquierda - Tabs de Información */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                  Información del Programa
                </h2>
                <p className="text-lg text-gray-600">
                  Conoce todos los detalles de nuestro Doctorado en Administración de Instituciones Educativas
                </p>
              </div>

              {/* Tabs Accordion Style */}
              <div className="space-y-4">
                {/* Objetivo */}
                <details className="group rounded-2xl overflow-hidden bg-gradient-to-r from-amber-50 to-red-50 shadow-lg ring-1 ring-black/5">
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
                <details className="group rounded-2xl overflow-hidden bg-gradient-to-r from-red-50 to-amber-50 shadow-lg ring-1 ring-black/5">
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
                <details className="group rounded-2xl overflow-hidden bg-gradient-to-r from-amber-50 to-red-50 shadow-lg ring-1 ring-black/5">
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
                <details className="group rounded-2xl overflow-hidden bg-gradient-to-r from-red-50 to-amber-50 shadow-lg ring-1 ring-black/5">
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
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
              <Image
                src="/images/estudiantes-4.jpg"
                alt="Doctorado en Administración de Instituciones Educativas"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
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
      <section id="plan-estudios" className="py-20 bg-gradient-to-br from-gray-50 to-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 tracking-tight">
              Plan de Estudios
            </h2>
            <p className="text-xl text-gray-600">
              Programa doctoral estructurado en 6 cuatrimestres
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planEstudios.map((periodo) => (
              <div key={periodo.cuatrimestre} className="bg-gradient-to-br from-amber-50 to-red-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow ring-1 ring-black/5">
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
                      className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow ring-1 ring-black/5"
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
              href="https://docs.google.com/forms/d/e/1FAIpQLSfSsj4lfLF9akHmCPjL5pTK8PaebMFQ2__qE-wJZpShmka01A/viewform?usp=publish-editor"
              target="_blank"
              className="px-8 py-4 bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              Inscríbete Ahora
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}