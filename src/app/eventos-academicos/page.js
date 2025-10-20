"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function EventosAcademicos() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Datos de eventos y sus imágenes
  const eventos = [
    {
      id: 1,
      titulo: "GRADUACIÓN II GENERACIÓN 2017-2019",
      fecha: "09.11.2019",
      descripcion: "Ceremonia de graduación de la segunda generación de nuestros estudiantes.",
      imagenes: [
        "DSC_0198.jpg",
        "DSC_0197.jpg",
        "DSC_0191.jpg",
        "DSC_0190.jpg",
        "DSC_0184.jpg",
        "DSC_0009.jpg",
        "DSC_0029.jpg",
        "DSC_0027.jpg",
        "DSC_0026.jpg",
        "DSC_0023.jpg",
        "DSC_0181.jpg",
        "DSC_0180.jpg",
        "DSC_0179.jpg",
        "DSC_0169.jpg"
      ],
      columns: 4
    },
    {
      id: 2,
      titulo: "IV COLOQUIO DE INVESTIGACIÓN",
      fecha: "19.10.2019",
      descripcion: "Cuarto coloquio de investigación con la participación de estudiantes y docentes.",
      imagenes: [
        "76900426_540086626803716_1900193024667811840_n.jpg",
        "76747380_1010641499267823_5408325829618827264_n.jpg",
        "76638824_608014943278027_3379043839133089792_n.jpg",
        "76613122_428815111159472_2399678664422719488_n.jpg",
        "75625233_587705135121936_8691684055164387328_n.jpg",
        "75610830_786842555088662_4614455877196316672_n.jpg",
        "75580472_2551933751562098_7933416989328932864_n.jpg",
        "75474089_541644713070217_7542098219728109568_n.jpg",
        "75446480_735082600324542_2439652324478550016_n.jpg",
        "75339490_568089130613309_4225539480372641792_n.jpg",
        "75311436_2443248515772848_2589600821171716096_n.jpg",
        "75233427_776375312817156_3383440326571065344_n.jpg",
        "74634646_2390983964552050_4262277359312306176_n.jpg",
        "74632441_738908606584402_6113201547112349696_n.jpg",
        "74624143_2877327369161279_6536089198217134080_n.jpg",
        "74615525_2226595480972251_2149811026353192960_n.jpg",
        "74278241_2208308949274959_6576732576818397184_n.jpg",
        "74209795_2515771491871714_9143184804164927488_n.jpg",
        "73261240_2159497117686557_4697974080362512384_n.jpg",
        "73243588_1010206716024936_8769368357007785984_n.jpg",
        "73122219_692913924564427_9066132974910570496_n.jpg",
        "72705457_742537066259033_5167094662111952896_n.jpg",
        "72680112_759084407908000_6277658791223754752_n.jpg"
      ],
      columns: 4
    },
    {
      id: 3,
      titulo: "3ER. COLOQUIO DE INVESTIGACIÓN",
      fecha: "2018",
      descripcion: "Tercer coloquio de investigación con presentaciones académicas destacadas.",
      imagenes: [
        "52276895_2003163526477262_158449705850765312_n.jpg",
        "DSC_0572.jpg",
        "DSC_0574.jpg",
        "DSC_0576.jpg",
        "DSC_0577.jpg",
        "DSC_0580.jpg",
        "DSC_0582.jpg",
        "DSC_0631.jpg",
        "DSC_0637.jpg",
        "DSC_0640.jpg",
        "DSC_0643.jpg",
        "DSC_0644.jpg",
        "DSC_0647.jpg",
        "DSC_0651.jpg",
        "DSC_0653.jpg"
      ],
      columns: 5
    },
    {
      id: 4,
      titulo: "TOMA DE PROTESTA LIC. EN CRIMINOLOGÍA",
      fecha: "2018",
      descripcion: "Ceremonia de toma de protesta de la Licenciatura en Criminología.",
      imagenes: [
        "52766751_2057172227704354_6294279915227316224_n.jpg",
        "52771821_545202249305660_7595218839101505536_n.jpg",
        "52633896_1860005274105568_1750931568123183104_n.jpg",
        "52991353_2350649301652816_2783360501134917632_n.jpg",
        "53323389_618285908592500_4331115119447638016_n.jpg",
        "53365808_1370643446434435_6060473534994448384_n.jpg",
        "53563782_2817637415128150_6989016211367395328_n.jpg",
        "52923179_1090040267869553_2861391643062304768_n.jpg",
        "52963046_2362681373751249_5311476670736105472_n.jpg",
        "52816677_1191685657660065_946159244946702336_n.jpg",
        "52976490_446449716121072_2385854878388846592_n.jpg"
      ],
      columns: 3
    }
  ];

  const closeModal = () => setSelectedImage(null);

  return (
    <main className="pt-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/eventos-academicos/eventos-academicos.jpg"
            alt="Eventos Académicos IIESBC"
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
            <span className="inline-block hover:scale-110 transition-transform duration-300">Eventos</span>{" "}
            <span className="text-orange-300 inline-block hover:scale-110 transition-transform duration-300">Académicos</span>
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl lg:text-3xl text-green-100 leading-relaxed font-light">
              Momentos memorables que marcan nuestra historia institucional
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-orange-400 to-orange-400 rounded-full"></div>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-green-400 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 via-green-400 to-transparent rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Eventos Section */}
      {eventos.map((evento, index) => (
        <section 
          key={evento.id} 
          className={`py-24 relative overflow-hidden ${
            index % 2 === 0 
              ? 'bg-gradient-to-br from-white via-gray-50 to-green-50' 
              : 'bg-gradient-to-br from-gray-50 via-white to-orange-50'
          }`}
        >
          {/* Efectos de luz de fondo */}
          <div className="absolute inset-0">
            <div className={`absolute top-20 ${index % 2 === 0 ? 'right-20' : 'left-20'} w-96 h-96 ${index % 2 === 0 ? 'bg-green-200/10' : 'bg-orange-200/10'} rounded-full blur-3xl`}></div>
            <div className={`absolute bottom-20 ${index % 2 === 0 ? 'left-20' : 'right-20'} w-96 h-96 ${index % 2 === 0 ? 'bg-orange-200/10' : 'bg-green-200/10'} rounded-full blur-3xl`}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4">
            {/* Encabezado del evento */}
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${index % 2 === 0 ? 'from-green-500 to-green-700' : 'from-orange-500 to-orange-700'} rounded-full flex items-center justify-center shadow-lg`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className={`text-sm font-bold ${index % 2 === 0 ? 'text-green-700' : 'text-orange-700'} uppercase tracking-wider`}>
                    {evento.fecha}
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-4">
                  {evento.titulo}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {evento.descripcion}
                </p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className={`w-8 h-1 bg-gradient-to-r from-transparent ${index % 2 === 0 ? 'to-green-600' : 'to-orange-600'} rounded-full`}></div>
                <div className={`w-24 h-1 bg-gradient-to-r ${index % 2 === 0 ? 'from-green-600 to-orange-500' : 'from-orange-600 to-green-500'} rounded-full`}></div>
                <div className={`w-8 h-1 bg-gradient-to-r ${index % 2 === 0 ? 'from-orange-500' : 'from-green-500'} to-transparent rounded-full`}></div>
              </div>
            </div>

            {/* Galería de imágenes */}
            <div className={`grid grid-cols-2 md:grid-cols-${evento.columns} gap-4`}>
              {evento.imagenes.map((imagen, imgIndex) => (
                <div 
                  key={imgIndex} 
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                  onClick={() => setSelectedImage(`/images/eventos-academicos/${imagen}`)}
                >
                  <div className="aspect-square relative">
                    <img
                      src={`/images/eventos-academicos/${imagen}`}
                      alt={`${evento.titulo} - Foto ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            onClick={closeModal}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-6xl max-h-[90vh] relative">
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/eventos-academicos/eventos-academicos-2.jpg"
            alt="Únete a nuestros eventos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-700/65 via-green-800/55 to-orange-800/65"></div>
        </div>
        
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            ¿Quieres ser parte de nuestros próximos <span className="text-orange-300">eventos</span>?
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto mb-10">
            Mantente informado sobre nuestras actividades académicas y culturales
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/contacto"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-2 hover:scale-105"
            >
              Contáctanos
            </a>
            <a
              href="/sobre-nosotros"
              className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              Conoce más sobre nosotros
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}