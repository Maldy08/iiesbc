import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Maestría en Educación - IIESBC',
  description: 'Forma maestros capaces de aportar propuestas y soluciones viables e innovadoras a los problemas educativos. RVOE-BC (229 a la 235) M1/13',
  keywords: 'maestría, educación, RVOE, posgrado, IIESBC, Mexicali, pedagogía',
  openGraph: {
    title: 'Maestría en Educación - IIESBC',
    description: 'Transforma la educación con propuestas innovadoras y soluciones efectivas',
    images: ['/images/maestrias/maestria-educacion-iiesbc.jpg'],
  },
};

export default function MaestriaEducacion() {
  const planEstudios = [
    {
      cuatrimestre: 1,
      titulo: "PRIMER CUATRIMESTRE",
      materias: [
        "Planeación y Administración Educativa",
        "Legislación y Política Educativa"
      ]
    },
    {
      cuatrimestre: 2,
      titulo: "SEGUNDO CUATRIMESTRE",
      materias: [
        "Entorno Educativo y Liderazgo",
        "Planeación Estratégica de la Educación"
      ]
    },
    {
      cuatrimestre: 3,
      titulo: "TERCER CUATRIMESTRE",
      materias: [
        "TICS en la Educación",
        "Planeación e Implantación de Proyectos Educativos I"
      ]
    },
    {
      cuatrimestre: 4,
      titulo: "CUARTO CUATRIMESTRE",
      materias: [
        "Taller de Diseño Curricular",
        "Enseñanza y Aprendizaje"
      ]
    },
    {
      cuatrimestre: 5,
      titulo: "QUINTO CUATRIMESTRE",
      materias: [
        "Investigación y Evaluación de Proyectos Educativos II",
        "Impacto y Evaluación Curricular"
      ]
    },
    {
      cuatrimestre: 6,
      titulo: "SEXTO CUATRIMESTRE",
      materias: [
        "Aprovechamiento y Solución de Conflictos en la Institución",
        "Investigación Aplicada"
      ]
    },
  ];

  const perfilEgresado = [
    "Generar una visión sobre la realidad educativa local, nacional e internacional que les permita contribuir en procesos de cambio educativo",
    "Fundamentar de manera práctica los aspectos disciplinarios de su disciplina",
    "Realizar investigación como herramienta de trabajo para la toma de decisiones en su práctica profesional en ámbitos educativos",
    "Manifestar conocimientos amplios de las áreas fundamentales de la Educación como: administración escolar, pedagogía, orientación escolar, diseño curricular y metodología de la investigación",
    "Habilidad para generar proyectos innovadores que mejoren la calidad del proceso",
    "Compromiso social y actitud ética que guíen sus decisiones en beneficio de la Educación"
  ];

  const campoLaboral = [
    "Centros de investigación educativa",
    "Administración de centros educativos públicos",
    "Administración de instituciones del sector privado",
    "Asesoría y consultoría educativa",
    "Coordinación académica en instituciones de educación superior",
    "Diseño y evaluación de programas educativos"
  ];

  const requisitos = [
    "Copia de CURP",
    "Certificado de estudios de licenciatura (original y copia)",
    "Cédula profesional de licenciatura (original y copia)",
    "En caso de no contar con Título presentar carta constancia de trámite en proceso",
    "Acta de nacimiento (original y 2 copias)",
    "Fotografías tamaño credencial e infantil en blanco y negro",
    "Identificación oficial (copia)",
    "Recibo de pagos correspondientes"
  ];

  const ventajas = [
    {
      icon: "🎓",
      titulo: "Excelencia Académica",
      descripcion: "Programa con reconocimiento oficial RVOE"
    },
    {
      icon: "👨‍🏫",
      titulo: "Docentes Especializados",
      descripcion: "Profesores con amplia experiencia educativa"
    },
    {
      icon: "🔬",
      titulo: "Enfoque en Investigación",
      descripcion: "Desarrollo de proyectos educativos innovadores"
    },
    {
      icon: "🌐",
      titulo: "Vinculación Internacional",
      descripcion: "Convenios con universidades extranjeras"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

        <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-blue-800/40 to-purple-900/50 z-10"></div>
          <div className="absolute inset-0 z-0">
            <Image
          src="/images/meducacion.jpg"
          alt="Maestría en Educación"
          fill
          className="object-cover"
          priority
            />
          </div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 text-center text-white">

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Maestría en
          <span className="block text-blue-300 mt-2">
            Educación
          </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Transforma la educación con propuestas innovadoras y soluciones efectivas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contacto"
            className="px-8 py-4 bg-white text-blue-900 hover:bg-blue-50 font-bold rounded-full transition-all transform hover:scale-105 shadow-lg"
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
            <div className="text-center p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <div className="text-4xl mb-2">📅</div>
              <div className="text-4xl font-bold text-blue-700 mb-2">6</div>
              <div className="text-gray-600 font-semibold">Cuatrimestres</div>
            </div>
            <div className="text-center p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <div className="text-4xl mb-2">📚</div>
              <div className="text-4xl font-bold text-purple-700 mb-2">12</div>
              <div className="text-gray-600 font-semibold">Materias</div>
            </div>
            <div className="text-center p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <div className="text-4xl mb-2">⏱️</div>
              <div className="text-4xl font-bold text-blue-700 mb-2">2</div>
              <div className="text-gray-600 font-semibold">Años</div>
            </div>
            <div className="text-center p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <div className="text-4xl mb-2">🎓</div>
              <div className="text-4xl font-bold text-purple-700 mb-2">RVOE</div>
              <div className="text-gray-600 font-semibold">Oficial</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas Competitivas */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            ¿Por qué estudiar esta Maestría?
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Desarrolla tu potencial como líder educativo
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ventajas.map((ventaja, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-500"
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
                  Conoce todos los detalles de nuestra Maestría en Educación
                </p>
              </div>

              {/* Tabs Accordion Style */}
              <div className="space-y-4">
                {/* Objetivo */}
                <details className="group bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl overflow-hidden shadow-lg">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-gray-900 hover:bg-white/50 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
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
                      Formar maestros en el campo de la educación capaces de aportar propuestas y soluciones 
                      viables e innovadoras a los problemas educativos que enfrentan las instituciones y centros 
                      educativos.
                    </p>
                  </div>
                </details>

                {/* Perfil del Egresado */}
                <details className="group bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl overflow-hidden shadow-lg">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-gray-900 hover:bg-white/50 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
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
                          <span className="text-purple-500 font-bold mt-1 flex-shrink-0">•</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>

                {/* Campo Laboral */}
                <details className="group bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl overflow-hidden shadow-lg">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-gray-900 hover:bg-white/50 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
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
                    <ul className="space-y-3">
                      {campoLaboral.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <span className="text-blue-500 font-bold mt-1 flex-shrink-0">•</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>

                {/* Requisitos de Ingreso */}
                <details className="group bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl overflow-hidden shadow-lg">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-gray-900 hover:bg-white/50 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
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
                          <span className="text-purple-500 font-bold mt-1">•</span>
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
                src="/images/estudiantes-1.jpg"
                alt="Estudiantes de Maestría en Educación"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">
                  Lidera el Cambio
                </h3>
                <p className="text-lg opacity-90">
                  Innova en el campo educativo
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
              Programa académico estructurado en 6 cuatrimestres
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planEstudios.map((periodo) => (
              <div key={periodo.cuatrimestre} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-bold mb-2">
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


      {/* Call to Action Final */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            ¿Listo para Transformar la Educación?
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Únete a nuestra comunidad de educadores innovadores y lidera el cambio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfSsj4lfLF9akHmCPjL5pTK8PaebMFQ2__qE-wJZpShmka01A/viewform?usp=publish-editor"
              target="_blank"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              Inscríbete Ahora
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}