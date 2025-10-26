"use client";

import { useState, useEffect } from 'react';

export default function CongresoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const congresoImages = [
    '/images/congreso/congreso-1.jpg',
    '/images/congreso/congreso-2.jpg',
    '/images/congreso/congreso-3.jpg',
    '/images/congreso/congreso-4.jpg',
    '/images/congreso/congreso-5.jpg',
  ];

  const openModal = (index) => {
    setImageIndex(index);
    setSelectedImage(congresoImages[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (imageIndex + 1) % congresoImages.length;
    setImageIndex(newIndex);
    setSelectedImage(congresoImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (imageIndex - 1 + congresoImages.length) % congresoImages.length;
    setImageIndex(newIndex);
    setSelectedImage(congresoImages[newIndex]);
  };

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, imageIndex]);

  // Prevenir scroll cuando el modal está abierto
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <>
      {/* Sección de la Galería */}
      <section className="relative py-24 overflow-hidden">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/congreso/congreso.jpg"
            alt="Fondo Congreso IIESBC"
            className="w-full h-full object-cover"
          />
          {/* Overlay más sutil para no opacar las imágenes de la galería */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 via-green-800/40 to-orange-900/50"></div>
        </div>

        {/* Efectos de luz elegantes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-orange-400/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-400/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-300/10 rounded-full blur-3xl"></div>
        </div>


        <div className="relative max-w-7xl mx-auto px-4">
          {/* Título con diseño elegante */}
          <div className="text-center mb-16">
            {/* Badge superior */}
            <div className="inline-block mb-6">
              <div className="bg-orange-500/20 backdrop-blur-md border border-orange-400/30 px-6 py-2 rounded-full shadow-lg">
                <span className="text-orange-200 font-bold text-sm uppercase tracking-wider">
                  🎓 Evento Destacado
                </span>
              </div>
            </div>

            <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
              <span className="inline-block hover:scale-105 transition-transform duration-300">CONGRESO</span>{" "}
              <span className="text-orange-300 inline-block hover:scale-105 transition-transform duration-300">MULTIDISCIPLINARIO</span>
            </h2>

            <p className="text-xl lg:text-2xl text-green-100 max-w-3xl mx-auto mb-8 font-light">
                GESTIÓN DIRECTIVA
            </p>

            {/* Línea decorativa */}
            <div className="flex items-center justify-center gap-2">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-orange-400 to-orange-400 rounded-full"></div>
              <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-green-400 rounded-full"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-green-400 via-green-400 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Grid de imágenes mejorado */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* Imagen grande - Primera imagen */}
            <div 
              onClick={() => openModal(0)}
              className="col-span-2 row-span-2 group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer border-4 border-white/10 hover:border-orange-400/50"
            >
              <img
                src={congresoImages[0]}
                alt="Congreso IIESBC 1"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 via-green-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              {/* Badge de "Principal" */}
              <div className="absolute top-6 left-6">
                <div className="bg-orange-500/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-white font-bold text-sm">📸 Destacada</span>
                </div>
              </div>

              {/* Ícono de zoom elegante */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border-2 border-white/30 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                  <svg className="w-10 h-10 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>

              {/* Texto descriptivo en la parte inferior */}
              <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20">
                  <p className="text-green-200 text-sm">Click para ampliar</p>
                </div>
              </div>
            </div>

            {/* Imágenes pequeñas - Resto de imágenes */}
            {congresoImages.slice(1).map((img, idx) => (
              <div 
                key={idx + 1}
                onClick={() => openModal(idx + 1)}
                className="col-span-1 group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border-4 border-white/10 hover:border-green-400/50 transform hover:-translate-y-2"
              >
                <img
                  src={img}
                  alt={`Congreso IIESBC ${idx + 2}`}
                  className="w-full h-64 lg:h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay con gradiente alternado */}
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  idx % 2 === 0 ? 'from-orange-900/70' : 'from-green-900/70'
                } via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
                
                {/* Número de imagen */}
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                    <span className="text-white font-bold text-sm">{idx + 2}</span>
                  </div>
                </div>

                {/* Ícono de zoom */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border-2 border-white/30 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <svg className="w-7 h-7 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Texto adicional debajo de la galería */}
          <div className="mt-12 text-center">
        
          </div>
        </div>
      </section>

      {/* Modal moderno para ver imágenes */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 animate-fadeIn"
          onClick={closeModal}
        >
          {/* Botón de cerrar elegante */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:rotate-90 z-50 border border-white/20 group"
            aria-label="Cerrar"
          >
            <svg className="w-7 h-7 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Contador de imágenes */}
          <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 z-50">
            <p className="text-white font-bold text-lg">
              <span className="text-orange-400">{imageIndex + 1}</span>
              <span className="text-white/60 mx-2">/</span>
              <span className="text-white/90">{congresoImages.length}</span>
            </p>
          </div>

          {/* Botón anterior */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-50 border border-white/20 group"
            aria-label="Anterior"
          >
            <svg className="w-8 h-8 group-hover:scale-110 group-hover:-translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Botón siguiente */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-50 border border-white/20 group"
            aria-label="Siguiente"
          >
            <svg className="w-8 h-8 group-hover:scale-110 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Contenedor de la imagen con animación */}
          <div 
            className="relative max-w-7xl max-h-[90vh] animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Brillo decorativo alrededor */}
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-orange-500/20 to-green-500/20 rounded-3xl blur-2xl"></div>
            
            <img
              src={selectedImage}
              alt="Imagen ampliada del congreso"
              className="relative max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl border-4 border-white/10"
            />

   
          </div>



        </div>
      )}

      {/* Estilos para las animaciones */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </>
  );
}