export default function SobreNosotros() {
  return (
    <main className="pt-0">
      {/* Hero Section - Ultra profesional con imagen de fondo */}
      <section className="relative overflow-hidden min-h-[600px] flex items-center">
        {/* Imagen de fondo del hero con efecto parallax */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-green-800/50 to-green-700/40 z-10"></div>
          <img
            src="/images/sobre-nosotros/hero-sobre-nosotros.jpg"
            alt="Campus IIESBC"
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[3000ms]"
          />
        </div>

        {/* Efectos de luz elegantes */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 py-32 text-center w-full">
          <div className="inline-block p-6 bg-white/10 backdrop-blur-md rounded-full mb-8 shadow-2xl border border-white/20">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
            Sobre <span className="text-orange-300 inline-block hover:scale-110 transition-transform duration-300">Nosotros</span>
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl lg:text-3xl text-green-100 leading-relaxed font-light">
              Conoce nuestra historia, misión y el compromiso que nos impulsa cada día
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-orange-400 to-orange-400 rounded-full"></div>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-green-400 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 via-green-400 to-transparent rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ¿Quiénes Somos? Section - Diseño moderno con imagen */}
      <section className="py-32 bg-gradient-to-br from-white via-gray-50 to-green-50 relative overflow-hidden">
        {/* Efectos de luz de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-40 right-20 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-5xl lg:text-6xl font-black text-gray-800 mb-4">
                <span className="text-orange-600">¿Quiénes</span> Somos?
              </h2>
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="w-8 h-1 bg-gradient-to-r from-transparent to-green-600 rounded-full"></div>
                <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-orange-500 rounded-full"></div>
                <div className="w-8 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Imagen con efecto elegante */}
            <div className="relative group">
              {/* Marco decorativo animado */}
              <div className="absolute -inset-4 bg-gradient-to-r from-green-600 to-orange-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-orange-600/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-all duration-500"></div>
              
              {/* Contenedor de imagen */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/sobre-nosotros/quienes-somos.jpg" 
                  alt="Estudiantes IIESBC colaborando" 
                  className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay elegante */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent"></div>
                
                {/* Badge decorativo */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                  <p className="text-sm font-bold text-green-700">Excelencia Académica</p>
                </div>
              </div>
            </div>

            {/* Contenido con diseño elegante */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-green-600 via-orange-500 to-green-600 rounded-full"></div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
                  <p className="text-2xl text-gray-700 leading-relaxed mb-6 font-light">
                    Somos una <span className="font-bold text-green-700 bg-green-50 px-2 py-1 rounded">universidad comprometida</span> con la comunidad estudiantil.
                  </p>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Fundada con la misión de desarrollar la competitividad y la preparación de sus alumnos para un entorno profesional demandante.
                  </p>
                </div>
              </div>

              {/* Stats decorativos */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300">
                  <p className="text-3xl font-black text-white mb-1">25+</p>
                  <p className="text-sm text-green-100">Años</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300">
                  <p className="text-3xl font-black text-white mb-1">1000+</p>
                  <p className="text-sm text-orange-100">Egresados</p>
                </div>
                <div className="bg-gradient-to-br from-green-700 to-orange-600 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300">
                  <p className="text-3xl font-black text-white mb-1">98%</p>
                  <p className="text-sm text-green-100">Empleabilidad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bienvenida Section - Diseño sofisticado */}
      <section className="relative py-32 overflow-hidden">
        {/* Imagen de fondo elegante */}
        <div className="absolute inset-0">
          <img
            src="/images/sobre-nosotros/bienvenida-director.jpg"
            alt="Biblioteca IIESBC"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        </div>

        {/* Efectos de luz */}
        <div className="absolute inset-0">
          <div className="absolute top-40 left-40 w-96 h-96 bg-green-200/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-40 w-96 h-96 bg-orange-200/15 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-5xl lg:text-6xl font-black mb-4">
                <span className="text-orange-600">Bienvenida</span>
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-1 bg-gradient-to-r from-transparent to-orange-500 rounded-full"></div>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full"></div>
                <div className="w-8 h-1 bg-gradient-to-r from-green-500 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Marco decorativo */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-600 via-green-600 to-orange-600 rounded-3xl opacity-20 blur-2xl"></div>
            
            <div className="relative bg-white/95 backdrop-blur-md rounded-3xl p-10 lg:p-16 shadow-2xl border border-gray-200/50">
              <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
                <p className="text-xl lg:text-2xl font-light text-gray-800 first-letter:text-6xl first-letter:font-bold first-letter:text-green-700 first-letter:mr-3 first-letter:float-left">
                  A través de este medio deseo dar la bienvenida al <strong className="text-green-700 font-semibold">Instituto Interamericano de Estudios Superiores de Baja California</strong>, a aquellas personas quienes han tomado una de las decisiones más importantes de su vida, iniciar una carrera universitaria, felicidades.
                </p>
                
                <p className="text-lg">
                  Quiero que sepas que es un honor para mi pertenecer y estar al frente de esta joven institución que al igual que yo, tiene el compromiso ético y social de formar seres humanos íntegros, responsables, con liderazgo, con valores y conocimientos profesionales que sean para el servicio y ejemplo de nuestra sociedad.
                </p>
                
                <p className="text-lg">
                  Debo decirte que en el <strong className="text-green-700 font-semibold">IIESBC</strong> te ayudaremos a forjar un buen futuro, por lo tanto te encontrarás con retos, conocerás tu potencial, tus debilidades, y desarrollarás tus habilidades, lograrás crecer como persona y apreciar a los demás, nuestra excelente planta docente exigirá lo mejor de ti, pero siempre estará contigo siendo tu guía en el proceso.
                </p>
                
                <div className="relative my-10">
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-100 via-orange-50 to-green-100 rounded-2xl"></div>
                  <div className="relative bg-gradient-to-r from-green-50 via-white to-orange-50 border-l-4 border-orange-500 p-8 rounded-xl shadow-lg">
                    <svg className="w-12 h-12 text-orange-500/20 absolute top-4 left-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                    <p className="text-lg italic text-gray-700 relative z-10 pl-8">
                      Te ofrecemos una educación de alta calidad, tus docentes tienen la experiencia y aptitudes para guiarte y mostrarte lo que necesitas para llegar a tu meta. Ten la certeza que en el <strong className="text-green-700 font-semibold">IIESBC</strong> tu ahora casa, confiamos en tus capacidades y por ello hoy, nuestra prioridad es lograr tu grandeza personal y profesional.
                    </p>
                  </div>
                </div>
                
                <p className="text-lg">
                  Te invito a que adoptes hoy la actitud y el compromiso de un estudiante universitario que aprovecha las oportunidades para aprender y crecer en respeto y armonía.
                </p>
                
                <div className="pt-8 border-t border-gray-200">
                  <p className="text-2xl font-semibold text-green-700 mb-4">
                    En el IIESBC <span className="text-orange-600">"Tu éxito es el nuestro"</span>.<br />
                    Caminemos juntos.
                  </p>
                  
                  <div className="flex items-center justify-end gap-4 mt-6">
                    <div className="text-right">
                      <p className="font-bold text-gray-800 text-xl">Dr. Rafael López Oñate</p>
                      <p className="text-sm text-gray-600">Director General IIESBC</p>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">RL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión - Ultra moderno */}
      <section className="relative py-32 overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <img
            src="/images/sobre-nosotros/mision-vision.jpg"
            alt="Graduación IIESBC"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/85 via-white/80 to-green-50/85 backdrop-blur-sm"></div>
        </div>

        {/* Efectos de luz elegantes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-green-300/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Misión - Diseño elegante */}
            <div className="group relative">
              {/* Marco decorativo animado */}
              <div className="absolute -inset-2 bg-gradient-to-br from-green-600 to-green-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              
              <div className="relative bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transform transition-all duration-500 hover:scale-[1.02] p-10 overflow-hidden border border-gray-200/50">
                {/* Efecto de brillo superior */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
                
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-xl">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>

                  <h3 className="text-4xl font-black text-gray-800 mb-6 text-center group-hover:text-green-700 transition-colors duration-300">
                    Nuestra Misión
                  </h3>

                  <div className="flex items-center justify-center gap-2 mb-8">
                    <div className="w-8 h-1 bg-gradient-to-r from-transparent to-green-500 rounded-full"></div>
                    <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-orange-500 rounded-full"></div>
                    <div className="w-8 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full"></div>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-center text-lg">
                    El Instituto Interamericano de Estudios Superiores de Baja California tiene como esencia de su misión, filosofía y responsabilidad social, la formación de seres morales, virtuosos e íntegros en el pensar y en el hacer.
                  </p>
                </div>
              </div>
            </div>

            {/* Visión - Diseño elegante */}
            <div className="group relative">
              {/* Marco decorativo animado */}
              <div className="absolute -inset-2 bg-gradient-to-br from-orange-600 to-orange-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              
              <div className="relative bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transform transition-all duration-500 hover:scale-[1.02] p-10 overflow-hidden border border-gray-200/50">
                {/* Efecto de brillo superior */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
                
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-xl">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>

                  <h3 className="text-4xl font-black text-gray-800 mb-6 text-center group-hover:text-orange-700 transition-colors duration-300">
                    Nuestra Visión
                  </h3>

                  <div className="flex items-center justify-center gap-2 mb-8">
                    <div className="w-8 h-1 bg-gradient-to-r from-transparent to-orange-500 rounded-full"></div>
                    <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full"></div>
                    <div className="w-8 h-1 bg-gradient-to-r from-green-500 to-transparent rounded-full"></div>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-center text-lg">
                    El Instituto orienta sus acciones hacia la combinación de conocimientos teóricos y prácticos de nivel licenciatura y Posgrado; a partir de un desarrollo de ideas que se presentan en forma ordenada y disciplinada, consolidando propuestas que se suscitan de un proceso de investigación que de acuerdo a los requerimientos invita a trabajar en forma colaborativa a diversas disciplinas y tiende redes con enfoque al impacto de crecimiento social y económico; tanto en los ámbitos locales, nacionales como internacionales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios IIESBC - Diseño premium */}
      <section className="relative py-32 overflow-hidden">
        {/* Imagen de fondo sutil */}
        <div className="absolute inset-0">
          <img
            src="/images/sobre-nosotros/beneficios-estudiantes.jpg"
            alt="Estudiantes felices IIESBC"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-gray-50/80 to-white/85 backdrop-blur-sm"></div>
        </div>

        {/* Efectos de luz */}
        <div className="absolute inset-0">
          <div className="absolute top-40 right-40 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-40 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-5xl lg:text-6xl font-black text-gray-800 mb-4">
                Beneficios <span className="text-orange-600">IIESBC</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                Descubre las ventajas que te ofrecemos para tu desarrollo académico y profesional
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-12 h-1 bg-gradient-to-r from-transparent to-green-600 rounded-full"></div>
                <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-orange-500 rounded-full"></div>
                <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Horarios Flexibles */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-gray-200/50">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-700 transition-colors duration-300">
                      Horarios Flexibles
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Por qué sabemos que tu formación es muy importante, tenemos horarios flexibles para que elijas el que más te convenga.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Equivalencia de Materias */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-gray-200/50">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-700 transition-colors duration-300">
                      Equivalencia de Materias
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Si deseas continuar tus estudios con nosotros y ya tienes materias cursadas hacemos una equivalencia o revalidación en el programa que elijas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Plan de Becas */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-gray-200/50">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 via-green-600 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-700 transition-colors duration-300">
                      Plan de Becas
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Tanto para licenciatura como para los cursos de posgrado existe la posibilidad de ser recipiente de una beca y de obtener facilidades de pago de colegiaturas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vinculación */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-green-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-gray-200/50">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-orange-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-700 transition-colors duration-300">
                      Vinculación
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Contamos con Convenios con dependencias de Gobierno, empresas privadas instituciones educativas del sector público y privado, con fines de vincular proyectos de investigación, así como realizar intercambios, prácticas profesionales y estancias de aprendizaje.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Información Institucional - Diseño premium final */}
      <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-green-200/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-200/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4">
          <div className="relative">
            {/* Marco decorativo exterior */}
            <div className="absolute -inset-6 bg-gradient-to-r from-green-600 via-orange-500 to-green-600 rounded-3xl opacity-20 blur-2xl"></div>
            
            <div className="relative bg-white/95 backdrop-blur-md rounded-3xl p-16 shadow-2xl border border-gray-200/50">
              {/* Badge decorativo superior */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-green-600 to-orange-600 px-8 py-3 rounded-full shadow-xl">
                  <p className="text-white font-bold text-sm uppercase tracking-wider">Institución Certificada</p>
                </div>
              </div>

              {/* Ícono central elegante */}
              <div className="w-28 h-28 mx-auto mb-10 bg-gradient-to-br from-green-600 via-green-700 to-orange-600 rounded-full flex items-center justify-center shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-orange-600 rounded-full animate-ping opacity-20"></div>
                <svg className="w-14 h-14 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-8 text-center">
                Información <span className="text-orange-600">Institucional</span>
              </h2>

              <div className="flex items-center justify-center gap-2 mb-10">
                <div className="w-12 h-1 bg-gradient-to-r from-transparent to-green-600 rounded-full"></div>
                <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-orange-500 rounded-full"></div>
                <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full"></div>
              </div>

              <div className="space-y-6 mb-10">
                <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl p-6 border-l-4 border-green-600">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-green-700">Clave institucional:</span> <span className="text-2xl font-black text-gray-800">02PSU0128P</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-2xl p-6 border-l-4 border-orange-600">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Reconocimiento de Validez Oficial de Estudios<br />
                    por Baja California. <span className="font-black text-gray-800">RVOE-BC (229 a la 235) M1/13</span>
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <button className="w-full sm:w-auto mx-auto block bg-gradient-to-r from-green-600 via-green-700 to-orange-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:from-green-700 hover:via-green-800 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl relative overflow-hidden group">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Solicita Información
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}