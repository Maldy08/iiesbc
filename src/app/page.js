import Image from "next/image";

export default function Home() {
    return (
      <main className="pt-20">
        {/* Hero Section - Presentación Principal */}
        <section className="relative overflow-hidden">
          {/* Imagen de fondo con overlay */}
          <div className="absolute inset-0">
            <img
              src="/images/slid-IIESBC-Inscrip.jpg"
              alt="Instituto Interamericano de Estudios Superiores"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          {/* Contenido sobre la imagen */}
          <div className="relative z-10 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Lado izquierdo - Contenido principal */}
                <div className="text-center lg:text-left">
                  <div className="mb-8">
                    <h1 className="text-6xl lg:text-8xl font-black mb-6 leading-tight text-white">
                      <span className="text-green-400">IIES</span>
                      <span className="text-orange-400">BC</span>
                    </h1>
                    <div className="w-64 h-2 bg-gradient-to-r from-green-400 to-orange-400 mx-auto lg:mx-0 rounded-full mb-6"></div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                      Instituto Interamericano de<br />
                      Estudios Superiores de<br />
                      <span className="text-orange-400">Baja California</span>
                    </h2>
                  </div>
                  
                  <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Transformamos vidas a través de la educación superior de calidad, 
                    formando profesionales competitivos para un mundo en constante cambio.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      Conoce Nuestros Programas
                    </button>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      Inscríbete Ahora
                    </button>
                  </div>
                </div>
                
                {/* Lado derecho - Tarjeta de inscripciones */}
                <div className="flex justify-center lg:justify-end">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 max-w-md shadow-2xl border border-gray-200 transform hover:scale-105 transition-transform duration-300">
                    <div className="text-center">
                      <div className="mb-6">
                        <h3 className="text-2xl font-black text-orange-500 mb-2">¡Tu futuro comienza aquí!</h3>
                        <h4 className="text-4xl font-black text-green-600 mb-4">INSCRIPCIONES</h4>
                        <h4 className="text-4xl font-black text-yellow-500">ABIERTAS</h4>
                      </div>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Licenciaturas</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Maestrías</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Doctorado</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Diplomados</span>
                        </div>
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-green-600 to-orange-500 text-white py-3 rounded-lg font-bold text-lg hover:from-green-700 hover:to-orange-600 transition-all duration-300 shadow-lg">
                        Más Información
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Misión Section - Información institucional */}
        <section className="relative py-24 text-white overflow-hidden">
          {/* Imagen de fondo con efectos modernos */}
          <div className="absolute inset-0">
            <img
              src="/images/brooke-cagle.jpg"
              alt="Universidad comprometida"
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient con efecto moderno */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-800/85 via-green-700/75 to-green-900/90"></div>
            {/* Patrón de puntos decorativo */}
            <div className="absolute inset-0 opacity-20" 
                 style={{
                   backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
                   backgroundSize: '20px 20px'
                 }}>
            </div>
          </div>
          
          {/* Elementos decorativos animados */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-orange-400/20 rounded-full animate-ping"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400/15 rounded-full animate-bounce"></div>
            <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-white/5 rounded-full animate-pulse"></div>
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            <div className="mb-12">
              <div className="inline-block p-6 bg-white/20 backdrop-blur-sm rounded-full mb-6 shadow-2xl">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Somos una universidad comprometida<br />
              <span className="text-orange-300 animate-pulse">con la comunidad estudiantil</span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl lg:text-3xl font-light leading-relaxed mb-8 text-gray-100 backdrop-blur-sm bg-black/20 p-6 rounded-xl">
                Fundada con la misión de desarrollar la competitividad y la preparación 
                de nuestros alumnos para un entorno profesional demandante.
              </p>
              
              {/* Botón de acción mejorado */}
              <div className="mt-12">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-2 hover:scale-105 backdrop-blur-sm border border-white/20">
                  Conoce Nuestra Historia
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Servicios institucionales mejorados */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
          {/* Elementos decorativos de fondo */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-green-200/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-200/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-200/15 rounded-full blur-lg"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4">
            {/* Encabezado de la sección */}
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Servicios especializados que nos distinguen como institución educativa de excelencia
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-orange-500 mx-auto mt-6 rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Clases Institucionales */}
              <div className="group relative bg-white rounded-2xl shadow-2xl hover:shadow-3xl transform transition-all duration-500 hover:scale-105 hover:-rotate-1 p-8 overflow-hidden">
                {/* Gradiente de fondo animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Partículas decorativas */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-green-400/30 rounded-full animate-pulse"></div>
                <div className="absolute top-6 right-6 w-1 h-1 bg-orange-400/40 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-green-300/20 rounded-full animate-bounce"></div>
                
                <div className="relative text-center">
                  {/* Ícono mejorado */}
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  
                  <h5 className="text-2xl font-black text-gray-800 mb-4 group-hover:text-green-700 transition-colors duration-300">
                    📚 CLASES INSTITUCIONALES
                  </h5>
                  
                  <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Posgrados dirigidos a instituciones educativas públicas y a empresas 
                    que confían en nosotros para la preparación continua de su fuerza laboral.
                  </p>
                  
                  <div className="mt-6">
                    <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                      Más información
                    </button>
                  </div>
                </div>
              </div>

              {/* Vinculación */}
              <div className="group relative bg-white rounded-2xl shadow-2xl hover:shadow-3xl transform transition-all duration-500 hover:scale-105 hover:rotate-1 p-8 overflow-hidden">
                {/* Gradiente de fondo animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Partículas decorativas */}
                <div className="absolute top-4 left-3 w-2 h-2 bg-orange-400/30 rounded-full animate-pulse"></div>
                <div className="absolute top-3 left-7 w-1 h-1 bg-green-400/40 rounded-full animate-ping"></div>
                <div className="absolute bottom-6 right-4 w-3 h-3 bg-orange-300/20 rounded-full animate-bounce"></div>
                
                <div className="relative text-center">
                  {/* Ícono mejorado */}
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  
                  <h5 className="text-2xl font-black text-gray-800 mb-4 group-hover:text-orange-700 transition-colors duration-300">
                    🤝 VINCULACIÓN
                  </h5>
                  
                  <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mb-6 rounded-full"></div>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Convenios con instituciones educativas, gubernamentales y empresas 
                    para que nuestros estudiantes realicen en ellos sus prácticas y servicios.
                  </p>
                  
                  <div className="mt-6">
                    <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                      Más información
                    </button>
                  </div>
                </div>
              </div>

              {/* Becas */}
              <div className="group relative bg-white rounded-2xl shadow-2xl hover:shadow-3xl transform transition-all duration-500 hover:scale-105 hover:-rotate-1 p-8 overflow-hidden">
                {/* Gradiente de fondo animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Partículas decorativas */}
                <div className="absolute top-5 right-4 w-2 h-2 bg-green-400/30 rounded-full animate-pulse"></div>
                <div className="absolute top-2 right-8 w-1 h-1 bg-orange-400/40 rounded-full animate-ping"></div>
                <div className="absolute bottom-3 left-5 w-3 h-3 bg-green-300/20 rounded-full animate-bounce"></div>
                
                <div className="relative text-center">
                  {/* Ícono mejorado */}
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-600 to-orange-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  
                  <h5 className="text-2xl font-black text-gray-800 mb-4 group-hover:text-green-700 transition-colors duration-300">
                    🎓 BECAS
                  </h5>
                  
                  <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Tanto para licenciatura como para los cursos de posgrado existe 
                    la posibilidad de ser recipiente de una beca y de obtener facilidades 
                    de pago de colegiaturas.
                  </p>
                  
                  <div className="mt-6">
                    <button className="bg-gradient-to-r from-green-600 to-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:from-green-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                      Más información
                    </button>
                  </div>
                </div>
              </div>

              {/* Horarios Flexibles */}
              <div className="group relative bg-white rounded-2xl shadow-2xl hover:shadow-3xl transform transition-all duration-500 hover:scale-105 hover:rotate-1 p-8 overflow-hidden">
                {/* Gradiente de fondo animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Partículas decorativas */}
                <div className="absolute top-6 left-4 w-2 h-2 bg-orange-400/30 rounded-full animate-pulse"></div>
                <div className="absolute top-3 left-8 w-1 h-1 bg-green-400/40 rounded-full animate-ping"></div>
                <div className="absolute bottom-5 right-3 w-3 h-3 bg-orange-300/20 rounded-full animate-bounce"></div>
                
                <div className="relative text-center">
                  {/* Ícono mejorado */}
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-orange-600 to-green-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  <h5 className="text-2xl font-black text-gray-800 mb-4 group-hover:text-orange-700 transition-colors duration-300">
                    ⏰ HORARIOS FLEXIBLES
                  </h5>
                  
                  <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mb-6 rounded-full"></div>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Entre nuestros estudiantes contamos con personas que trabajan tiempo 
                    completo, empresarios y profesores universitarios, por lo que buscamos 
                    el mejor horario para su preparación.
                  </p>
                  
                  <div className="mt-6">
                    <button className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-6 py-2 rounded-full font-semibold hover:from-orange-600 hover:to-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                      Más información
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Programs - Oferta Académica con efectos mejorados */}
        <section className="py-8 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 mb-8">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-gray-800 mb-4">Nuestra Oferta Académica</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Programas educativos de excelencia diseñados para formar líderes del futuro
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-orange-500 mx-auto mt-6 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
            {/* Licenciaturas */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1">
              <div className="h-96 bg-cover bg-center relative" style={{backgroundImage: 'url(/images/licenc-IIESBC.jpg)'}}>
                {/* Overlay gradient animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/40 via-green-700/30 to-green-800/50 group-hover:from-green-500/30 group-hover:via-green-600/20 group-hover:to-green-700/40 transition-all duration-500"></div>
                
                {/* Partículas decorativas */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
                <div className="absolute top-12 right-8 w-2 h-2 bg-orange-400/40 rounded-full animate-ping"></div>
                <div className="absolute bottom-8 left-4 w-4 h-4 bg-yellow-300/20 rounded-full animate-bounce"></div>
                
                {/* Contenido */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                    {/* Ícono */}
                    <div className="w-16 h-16 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    
                    <h3 className="text-4xl font-black text-white mb-6 drop-shadow-lg group-hover:text-green-100 transition-colors duration-300">
                      Licenciaturas
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 transform group-hover:bg-white/20 transition-all duration-300">
                        <p className="font-semibold text-white drop-shadow-md">📚 Lic. en Derecho</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 transform group-hover:bg-white/20 transition-all duration-300">
                        <p className="font-semibold text-white drop-shadow-md">🔍 Lic. en Criminología</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 transform group-hover:bg-white/20 transition-all duration-300">
                        <p className="font-semibold text-white drop-shadow-md">📖 Lic. en Ciencias de la Educación</p>
                      </div>
                    </div>
                    
                    <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-semibold hover:bg-white/30 transform hover:scale-105 transition-all duration-300 border border-white/30">
                      Ver más detalles
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Maestrías */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
              <div className="h-96 bg-cover bg-center relative" style={{backgroundImage: 'url(/images/maestri-IIESBC.jpg)'}}>
                {/* Overlay gradient animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 via-orange-600/30 to-orange-700/50 group-hover:from-orange-400/30 group-hover:via-orange-500/20 group-hover:to-orange-600/40 transition-all duration-500"></div>
                
                {/* Partículas decorativas */}
                <div className="absolute top-6 left-4 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
                <div className="absolute top-8 left-12 w-2 h-2 bg-green-400/40 rounded-full animate-ping"></div>
                <div className="absolute bottom-12 right-6 w-4 h-4 bg-yellow-300/20 rounded-full animate-bounce"></div>
                
                {/* Contenido */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                    {/* Ícono */}
                    <div className="w-16 h-16 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-4xl font-black text-white mb-6 drop-shadow-lg group-hover:text-orange-100 transition-colors duration-300">
                      Maestrías
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 transform group-hover:bg-white/20 transition-all duration-300">
                        <p className="font-semibold text-white drop-shadow-md">🎓 Maestría en Educación</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 transform group-hover:bg-white/20 transition-all duration-300">
                        <p className="font-semibold text-white drop-shadow-md">💼 M. en Administración Competitiva</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 transform group-hover:bg-white/20 transition-all duration-300">
                        <p className="font-semibold text-white drop-shadow-md">🏛️ M. en Gestión de Políticas Públicas</p>
                      </div>
                    </div>
                    
                    <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-semibold hover:bg-white/30 transform hover:scale-105 transition-all duration-300 border border-white/30">
                      Ver más detalles
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctorado */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1">
              <div className="h-96 bg-cover bg-center relative" style={{backgroundImage: 'url(/images/docto-IIESBC.jpg)'}}>
                {/* Overlay gradient animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-700/40 via-green-800/30 to-green-900/50 group-hover:from-green-600/30 group-hover:via-green-700/20 group-hover:to-green-800/40 transition-all duration-500"></div>
                
                {/* Partículas decorativas */}
                <div className="absolute top-8 right-6 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
                <div className="absolute top-4 right-12 w-2 h-2 bg-orange-400/40 rounded-full animate-ping"></div>
                <div className="absolute bottom-6 left-8 w-4 h-4 bg-yellow-300/20 rounded-full animate-bounce"></div>
                
                {/* Contenido */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                    {/* Ícono */}
                    <div className="w-16 h-16 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-4xl font-black text-white mb-6 drop-shadow-lg group-hover:text-green-100 transition-colors duration-300">
                      Doctorado
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 transform group-hover:bg-white/20 transition-all duration-300">
                        <p className="font-semibold text-white drop-shadow-md">👨‍🎓 Doctorado en Administración de Instituciones Educativas</p>
                      </div>
                    </div>
                    
                    <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-semibold hover:bg-white/30 transform hover:scale-105 transition-all duration-300 border border-white/30">
                      Ver más detalles
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success & Motivation Section - Renovada */}
        <section className="relative py-24 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
          {/* Elementos de fondo animados */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full"></div>
              <div className="absolute top-20 left-40 w-3 h-3 bg-orange-300 rounded-full"></div>
              <div className="absolute top-40 left-20 w-2 h-2 bg-yellow-300 rounded-full"></div>
              <div className="absolute top-60 left-60 w-3 h-3 bg-white rounded-full"></div>
              <div className="absolute top-32 left-80 w-4 h-4 bg-orange-200 rounded-full"></div>
            </div>
            <div className="absolute top-10 left-20 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-400/15 rounded-full blur-3xl animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-400/10 rounded-full blur-xl animate-ping"></div>
            <div className="absolute top-20 right-1/4 w-28 h-28 bg-orange-300/15 rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative max-w-6xl mx-auto px-4 text-center">
            {/* Ícono central animado */}
            <div className="mb-12">
              <div className="inline-block relative">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300 animate-pulse">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                {/* Anillos alrededor del ícono */}
                <div className="absolute inset-0 w-24 h-24 border-4 border-orange-300/30 rounded-full animate-ping"></div>
                <div className="absolute inset-0 w-32 h-32 -m-4 border-2 border-yellow-300/20 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            {/* Mensaje principal */}
            <div className="space-y-8 mb-16">
              <h1 className="text-6xl lg:text-8xl font-black text-white mb-6 leading-tight">
                <span className="inline-block transform hover:scale-105 transition-transform duration-300">¡Ponemos</span>{" "}
                <span className="text-orange-300 inline-block transform hover:scale-105 transition-transform duration-300">el éxito</span>{" "}
                <span className="inline-block transform hover:scale-105 transition-transform duration-300">a tu</span>{" "}
                <span className="text-yellow-300 inline-block transform hover:scale-105 transition-transform duration-300 font-extrabold">alcance!</span>
              </h1>
              
              <p className="text-2xl lg:text-3xl text-green-100 max-w-4xl mx-auto leading-relaxed font-light">
                Más que una institución educativa, somos tu puerta hacia un futuro lleno de oportunidades
              </p>
            </div>
            
            {/* Estadísticas destacadas */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform group-hover:scale-105 transition-all duration-300 border border-white/20">
                  <div className="text-4xl lg:text-5xl font-black text-orange-300 mb-2 animate-pulse">25+</div>
                  <div className="text-lg text-green-100 font-semibold">Años transformando vidas</div>
                </div>
              </div>
              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform group-hover:scale-105 transition-all duration-300 border border-white/20">
                  <div className="text-4xl lg:text-5xl font-black text-yellow-300 mb-2">1000+</div>
                  <div className="text-lg text-green-100 font-semibold">Profesionales exitosos</div>
                </div>
              </div>
              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform group-hover:scale-105 transition-all duration-300 border border-white/20">
                  <div className="text-4xl lg:text-5xl font-black text-orange-300 mb-2">98%</div>
                  <div className="text-lg text-green-100 font-semibold">Tasa de empleabilidad</div>
                </div>
              </div>
              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform group-hover:scale-105 transition-all duration-300 border border-white/20">
                  <div className="text-4xl lg:text-5xl font-black text-yellow-300 mb-2">∞</div>
                  <div className="text-lg text-green-100 font-semibold">Posibilidades ilimitadas</div>
                </div>
              </div>
            </div>
            
            {/* Frase motivacional y CTA */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto border border-white/20">
              <div className="mb-8">
                <blockquote className="text-2xl lg:text-3xl text-white font-medium italic leading-relaxed">
                  "El éxito no es casualidad. Es trabajo duro, perseverancia, aprendizaje, estudio, 
                  sacrificio y, sobre todo, amor por lo que haces."
                </blockquote>
                <div className="text-orange-300 font-semibold mt-4">- Tu futuro comienza aquí</div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">

              </div>
            </div>
            
            {/* Elementos decorativos flotantes */}
            <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce">🎓</div>
            <div className="absolute bottom-20 right-10 text-6xl opacity-20 animate-pulse">⭐</div>
            <div className="absolute top-40 right-20 text-5xl opacity-15 animate-ping">🚀</div>
            <div className="absolute bottom-40 left-20 text-5xl opacity-15 animate-bounce">💡</div>
          </div>
        </section>

        {/* Bienvenida Section - Renovada */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-green-50">
          {/* Elementos decorativos de fondo */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-40 h-40 bg-green-200/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-32 h-32 bg-orange-200/15 rounded-full blur-xl animate-bounce"></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-green-300/10 rounded-full blur-lg"></div>
          </div>
          
          <div className="relative grid lg:grid-cols-2 min-h-[600px]">
            {/* Lado izquierdo - Contenido */}
            <div className="flex flex-col justify-center p-12 lg:p-20 relative">
              {/* Partículas decorativas */}
              <div className="absolute top-8 left-8 w-3 h-3 bg-green-400/30 rounded-full animate-pulse"></div>
              <div className="absolute top-16 left-16 w-2 h-2 bg-orange-400/40 rounded-full animate-ping"></div>
              <div className="absolute bottom-12 right-8 w-4 h-4 bg-green-300/25 rounded-full animate-bounce"></div>
              
              <div className="space-y-8">
                {/* Encabezado con efectos */}
                <div className="space-y-4">
                  <div className="inline-block">
                    <h2 className="text-5xl lg:text-6xl font-bold text-green-600 mb-4 relative">
                      Bienvenida
                      <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-green-500 to-orange-500 rounded-full"></div>
                    </h2>
                  </div>
                  
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                
                {/* Contenido del mensaje */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 relative overflow-hidden">
                  {/* Gradiente sutil en el fondo de la tarjeta */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-orange-50/30 opacity-50"></div>
                  
                  <div className="relative text-gray-700 leading-relaxed text-lg space-y-6">
                    <p className="text-xl lg:text-2xl font-medium text-gray-800 mb-6">
                      A través de este medio deseo dar la bienvenida al{" "}
                      <span className="text-green-600 font-bold">
                        Instituto Interamericano de Estudios Superiores de Baja California
                      </span>,
                      a aquellas personas que buscan una educación superior de calidad.
                    </p>
                    
                    <div className="border-l-4 border-orange-500 pl-6 py-4 bg-orange-50/50 rounded-r-lg">
                      <p className="italic text-gray-600">
                        "Nos enorgullece ser una institución comprometida con la excelencia académica 
                        y el desarrollo integral de nuestros estudiantes."
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-semibold hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Seguir leyendo
                      </button>
                      <button className="border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transform hover:scale-105 transition-all duration-300">
                        Conoce más sobre nosotros
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Lado derecho - Imagen */}
            <div className="relative group overflow-hidden">
              <div className="h-full min-h-[600px] bg-cover bg-center relative transform group-hover:scale-105 transition-transform duration-700" style={{backgroundImage: 'url(/images/bienve-IIESBC.jpg)'}}>
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-transparent to-orange-600/20 group-hover:from-green-600/10 group-hover:to-orange-600/10 transition-all duration-500"></div>
                
                {/* Elementos decorativos sobre la imagen */}
                <div className="absolute top-8 left-8 w-4 h-4 bg-white/40 rounded-full animate-pulse"></div>
                <div className="absolute top-16 left-16 w-3 h-3 bg-orange-400/50 rounded-full animate-ping"></div>
                <div className="absolute bottom-12 right-8 w-5 h-5 bg-green-400/40 rounded-full animate-bounce"></div>
                
                {/* Gradiente en los bordes para integración */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-green-50/30 via-transparent to-transparent"></div>
                
                {/* Tarjeta flotante con información adicional */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-orange-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Educación de Calidad</h4>
                      <p className="text-sm text-gray-600">Comprometidos con tu futuro profesional</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inscripciones Section - Renovada */}
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-gray-50 to-white">
          {/* Elementos decorativos de fondo */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-40 h-40 bg-orange-200/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-200/15 rounded-full blur-xl animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-300/10 rounded-full blur-lg"></div>
          </div>
          
          <div className="relative grid lg:grid-cols-2 min-h-[600px]">
            {/* Lado izquierdo - Imagen */}
            <div className="relative group overflow-hidden order-2 lg:order-1">
              <div className="h-full min-h-[600px] bg-cover bg-center relative transform group-hover:scale-105 transition-transform duration-700" style={{backgroundImage: 'url(/images/inscripciones-IIESBC.jpg)'}}>
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-green-600/20 group-hover:from-orange-600/10 group-hover:to-green-600/10 transition-all duration-500"></div>
                
                {/* Elementos decorativos sobre la imagen */}
                <div className="absolute top-8 right-8 w-4 h-4 bg-white/40 rounded-full animate-pulse"></div>
                <div className="absolute top-16 right-16 w-3 h-3 bg-green-400/50 rounded-full animate-ping"></div>
                <div className="absolute bottom-12 left-8 w-5 h-5 bg-orange-400/40 rounded-full animate-bounce"></div>
                
                {/* Gradiente en los bordes para integración */}
                <div className="absolute inset-0 bg-gradient-to-l from-white/20 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-orange-50/30 via-transparent to-transparent"></div>
                
                {/* Tarjeta flotante con información adicional */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Inscripciones Abiertas</h4>
                      <p className="text-sm text-gray-600">Tu futuro académico te espera</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Lado derecho - Contenido */}
            <div className="flex flex-col justify-center p-12 lg:p-20 relative order-1 lg:order-2 bg-gradient-to-br from-gray-50/80 to-orange-50/60">
              {/* Partículas decorativas */}
              <div className="absolute top-8 right-8 w-3 h-3 bg-orange-400/30 rounded-full animate-pulse"></div>
              <div className="absolute top-16 right-16 w-2 h-2 bg-green-400/40 rounded-full animate-ping"></div>
              <div className="absolute bottom-12 left-8 w-4 h-4 bg-orange-300/25 rounded-full animate-bounce"></div>
              
              <div className="space-y-8">
                {/* Encabezado con efectos */}
                <div className="space-y-4">
                  <div className="inline-block">
                    <h2 className="text-5xl lg:text-6xl font-bold text-orange-600 mb-4 relative">
                      Inscripciones
                      <div className="absolute -bottom-2 left-0 w-40 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full"></div>
                    </h2>
                  </div>
                  
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                
                {/* Contenido del mensaje */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 relative overflow-hidden">
                  {/* Gradiente sutil en el fondo de la tarjeta */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-green-50/30 opacity-50"></div>
                  
                  <div className="relative text-gray-700 leading-relaxed space-y-6">
                    <p className="text-xl lg:text-2xl font-medium text-gray-800 mb-6">
                      Ten la oportunidad de vincular tus estudios con{" "}
                      <span className="text-orange-600 font-bold">
                        Universidades Internacionales
                      </span>.
                    </p>
                    
                    <p className="text-lg text-gray-700 mb-6">
                      En un ambiente sano, cómodo y dedicado se estudia mejor. Pregunta sobre 
                      nuestros planes de estudio, promociones y las becas que tenemos para ti.
                    </p>
                    
                    {/* Beneficios destacados */}
                    <div className="grid md:grid-cols-2 gap-4 my-6">
                      <div className="flex items-center space-x-3 bg-orange-50/80 p-3 rounded-lg">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="font-semibold text-gray-700">Becas disponibles</span>
                      </div>
                      <div className="flex items-center space-x-3 bg-green-50/80 p-3 rounded-lg">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="font-semibold text-gray-700">Facilidades de pago</span>
                      </div>
                      <div className="flex items-center space-x-3 bg-orange-50/80 p-3 rounded-lg">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="font-semibold text-gray-700">Planes flexibles</span>
                      </div>
                      <div className="flex items-center space-x-3 bg-green-50/80 p-3 rounded-lg">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="font-semibold text-gray-700">Vinculación internacional</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <button className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-700 hover:to-orange-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Más Información
                      </button>
                      <button className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-500 hover:text-white transform hover:scale-105 transition-all duration-300">
                        Solicitar Beca
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
