export default function Contacto() {
  return (
    <main className="pt-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/contacto/contacto.jpg"
            alt="Contacto IIESBC"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-800/60 via-green-700/50 to-orange-800/60"></div>
        </div>

        {/* Efectos de luz */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 py-32 text-center w-full">
          <div className="inline-block p-6 bg-white/10 backdrop-blur-md rounded-full mb-8 shadow-2xl border border-white/20">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
            <span className="inline-block hover:scale-110 transition-transform duration-300">Contacto</span>
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl lg:text-3xl text-green-100 leading-relaxed font-light">
              Con gusto te atenderemos
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-orange-400 to-orange-400 rounded-full"></div>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-green-400 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 via-green-400 to-transparent rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Información de Contacto Section */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-green-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-green-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información de Contacto */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-4">
                  <span className="text-green-700">Información</span> de Contacto
                </h2>
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-12 h-1 bg-gradient-to-r from-green-600 to-orange-500 rounded-full"></div>
                  <div className="w-8 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full"></div>
                </div>
                <p className="text-lg text-gray-600">
                  Estamos aquí para resolver tus dudas y ayudarte en tu camino académico.
                </p>
              </div>

              {/* Tarjetas de Contacto */}
              <div className="space-y-6">
                {/* Teléfono */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-gray-200/50">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Teléfono</p>
                        <a href="tel:6865649010" className="text-2xl font-bold text-gray-800 hover:text-green-600 transition-colors duration-300">
                          (686) 564-9010
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email 1 */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-gray-200/50">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Email Principal</p>
                        <a href="mailto:im.iiesbc@gmail.com" className="text-xl font-bold text-gray-800 hover:text-orange-600 transition-colors duration-300 break-all">
                          im.iiesbc@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email 2 */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-gray-200/50">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 via-green-600 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Email Alternativo</p>
                        <a href="mailto:Ivelezg@yahoo.com.mx" className="text-xl font-bold text-gray-800 hover:text-green-600 transition-colors duration-300 break-all">
                          Ivelezg@yahoo.com.mx
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dirección */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-green-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-gray-200/50">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-orange-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Dirección</p>
                        <a 
                          href="https://www.google.com/maps/dir//Independencia,+Mexicali,+B.C./@32.6345864,-115.438891,19.03z"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl font-bold text-gray-800 hover:text-orange-600 transition-colors duration-300"
                        >
                          Río Fuerte #1692<br />
                          Col. Independencia Magisterial<br />
                          Mexicali, B.C.
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="relative group">
              {/* Marco decorativo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-green-600 via-orange-500 to-green-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d503.0740792684633!2d-115.43856581383808!3d32.63501311725772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDM4JzA1LjciTiAxMTXCsDI2JzE4LjIiVw!5e0!3m2!1ses!2sus!4v1537078115223"
                  width="100%"
                  height="600"
                  style={{border: 0}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[600px] transform group-hover:scale-105 transition-transform duration-700"
                ></iframe>
                
                {/* Badge sobre el mapa */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                  <p className="text-sm font-bold text-green-700 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Encuéntranos aquí
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redes Sociales Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <img
            src="/images/contacto/redes-sociales.jpg"
            alt="Redes Sociales IIESBC"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-700/70 via-green-800/60 to-orange-800/70"></div>
        </div>
        
        {/* Efectos de luz */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Síguenos en <span className="text-orange-300">Redes Sociales</span>
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Mantente al día con nuestras novedades, eventos y contenido educativo
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent to-orange-400 rounded-full"></div>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-green-400 rounded-full"></div>
              <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-transparent rounded-full"></div>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/iiesbc"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute -inset-2 bg-blue-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border-2 border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <p className="text-white font-bold mt-4">Facebook</p>
              </div>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/iiesbc"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute -inset-2 bg-sky-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border-2 border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                <p className="text-white font-bold mt-4">Twitter</p>
              </div>
            </a>
          </div>

          {/* Mensaje adicional */}
          <div className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-3xl mx-auto">
            <p className="text-white text-lg leading-relaxed">
              ¿Tienes preguntas sobre nuestros programas académicos? <br className="hidden sm:block" />
              <span className="font-bold text-orange-300">¡Contáctanos hoy mismo!</span> Estamos listos para ayudarte a alcanzar tus metas educativas.
            </p>
          </div>
        </div>
      </section>

      {/* Horarios de Atención */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-green-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-4">
              Horarios de <span className="text-orange-600">Atención</span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-1 bg-gradient-to-r from-transparent to-green-600 rounded-full"></div>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-orange-500 rounded-full"></div>
              <div className="w-8 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full"></div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-12 border border-gray-200/50">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">Lunes a Viernes</p>
                    <p className="text-gray-600">9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">Sábados</p>
                    <p className="text-gray-600">9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-800">Nota:</span> También puedes escribirnos por correo electrónico en cualquier momento.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}