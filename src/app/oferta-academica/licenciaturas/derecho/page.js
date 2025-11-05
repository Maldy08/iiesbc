"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LicenciaturaDerecho() {
  const [hoveredCard, setHoveredCard] = useState(null);
  // Contenido reorganizado en arreglos (sin tabs)
  const perfilEgresadoTexto = `El Licenciado en Derecho será un profesional que cuente con los más altos conocimientos, habilidades y actitudes necesarias para desempeñarse de la forma idónea en la aplicación de la ley, gracias a sus conocimientos doctrinales y legales de la misma. A su vez, podrá aplicar las normas jurídicas que regulan las instituciones en materia de derecho en nuestro país. El egresado de nuestra institución tendrá un amplio dominio en materia de juicios orales, civil, penal, laboral, mercantil, fiscal, internacional, administrativo, constitucional y social.`;

  const campoLaboral = [
    "Administradores de justicia",
    "Administrador de instituciones políticas, sociales y culturales",
    "Desempeño en el poder judicial y ejecutivo; en Secretarías de Estado, organismos descentralizados y estatales",
    "Apoderado y asesor legal de empresas privadas y públicas",
    "Prácticas de la abogacía con amplio dominio en juicios orales, civil, penal, laboral, mercantil, fiscal, internacional, administrativa, constitucional y social",
  ];

  const planEstudios = [
    {
      nombre: "PRIMER CUATRIMESTRE",
      materias: [
        "Principios de Administración",
        "Metodología de la Investigación",
        "Sistemas Computacionales",
        "Principios de Sociología",
        "Formas de Comunicación",
      ],
    },
    {
      nombre: "SEGUNDO CUATRIMESTRE",
      materias: [
        "Introducción al Estudio del Derecho",
        "Derecho Romano I",
        "Sistemas de Información Jurídica",
        "Teoría del Estado",
        "Garantías Individuales y Sociales",
      ],
    },
    {
      nombre: "TERCER CUATRIMESTRE",
      materias: [
        "Derecho Civil I",
        "Derecho Romano II",
        "Teoría Jurídica",
        "Teoría del Proceso",
        "Interpretación Jurídica",
      ],
    },
    {
      nombre: "CUARTO CUATRIMESTRE",
      materias: [
        "Derecho Civil II",
        "Derecho Laboral I",
        "Derecho Constitucional",
        "Derecho Mercantil I",
        "Derecho Administrativo I",
      ],
    },
    {
      nombre: "QUINTO CUATRIMESTRE",
      materias: [
        "Derecho Civil III",
        "Derecho Laboral II",
        "Ética y Valores",
        "Derecho Mercantil II",
        "Derecho Administrativo II",
      ],
    },
    {
      nombre: "SEXTO CUATRIMESTRE",
      materias: [
        "Derecho Civil IV",
        "Derecho Penal I",
        "Derecho Notarial y Registral",
        "Derecho Procesal Laboral",
        "Derecho Fiscal",
      ],
    },
    {
      nombre: "SEPTIMO CUATRIMESTRE",
      materias: [
        "Derecho Procesal Civil",
        "Derecho Penal II",
        "Delitos Federales",
        "Derecho Fiscal II",
        "Criminología",
      ],
    },
    {
      nombre: "OCTAVO CUATRIMESTRE",
      materias: [
        "Derecho Internacional Público",
        "Derecho Procesal Penal y Nuevo Procedimiento Penal",
        "Medicina Legal",
        "Amparo",
        "Derecho Electoral",
      ],
    },
    {
      nombre: "NOVENO CUATRIMESTRE",
      materias: [
        "Derecho Agrario",
        "Derecho Aduanero",
        "Comunicación y Estrategias Aplicadas a la Litigación Oral",
        "Solución de Controversias",
        "Derecho Internacional Privado",
      ],
    },
  ];

  const requisitos = [
    "Copia de CURP",
    "Certificado de estudios de Preparatoria (original y copia)",
    "Acta de nacimiento (original y 2 copias)",
    "Fotografías tamaño credencial e infantil en blanco y negro",
    "Identificación oficial (copia)",
    "Recibo de pagos correspondientes",
  ];

  const estadisticas = [
    { numero: "9", texto: "Cuatrimestres", icon: "📅" },
    { numero: "45+", texto: "Materias", icon: "📖" },
    { numero: "3", texto: "Años", icon: "⏱️" },
    { numero: "100%", texto: "Práctico", icon: "⚖️" }
  ];

  const ventajas = [
    {
      icon: "🎓",
      titulo: "Excelencia Académica",
      descripcion: "Programa reconocido con RVOE oficial"
    },
    {
      icon: "👨‍⚖️",
      titulo: "Docentes Experimentados",
      descripcion: "Abogados en ejercicio activo"
    },
    {
      icon: "🏛️",
      titulo: "Prácticas Profesionales",
      descripcion: "Convenios con despachos y tribunales"
    },
    {
      icon: "🌐",
      titulo: "Vinculación Internacional",
      descripcion: "Convenios con universidades extranjeras"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section con patrón de fondo */}
      <section className="relative text-white py-24 overflow-hidden">
        {/* Imagen de fondo del hero */}
        <Image
          src="/images/derecho.jpg"
          alt="Licenciatura en Derecho - IIESBC"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlay al estilo del sitio */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/85 via-green-800/75 to-orange-800/65" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Licenciatura en Derecho
            </h1>
            <p className="text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              Forma parte de la nueva generación de abogados comprometidos con la justicia y el Estado de Derecho
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#informacion" className="bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-xl">
                Conoce el Programa
              </a>
              <a href="#plan-estudios" className="bg-white/15 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold hover:bg-white/25 border-2 border-white transition-all">
                Ver Plan de Estudios
              </a>
              <Link href="/contacto" className="bg-gradient-to-r from-green-600 to-orange-600 text-white px-8 py-4 rounded-full font-bold hover:from-green-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                Solicitar Información
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Datos Clave del Programa */}
      <section className="bg-white py-12 shadow-lg -mt-8 relative z-20 mx-4 md:mx-8 lg:mx-16 rounded-2xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Datos Clave del Programa</h2>
            <p className="text-gray-600">Información general de la Licenciatura</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {estadisticas.map((stat, idx) => (
              <div
                key={idx}
                className="relative text-center p-5 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-green-50 hover:to-orange-50 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] border border-gray-100 shadow-sm"
              >
                <div className="absolute -top-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500/60 to-transparent rounded-full" />
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-600 mb-1">
                  {stat.numero}
                </div>
                <div className="text-gray-600 font-semibold">{stat.texto}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas Competitivas */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            ¿Por qué estudiar con nosotros?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ventajas.map((ventaja, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                  hoveredCard === idx ? 'border-green-500' : 'border-transparent'
                }`}
              >
                <div className="text-5xl mb-4">{ventaja.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{ventaja.titulo}</h3>
                <p className="text-gray-600">{ventaja.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Información del Programa con acordeones + imagen */}
      <section id="informacion" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Columna Izquierda - Accordions */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Información del Programa</h2>
              <p className="text-lg text-gray-600">Conoce los detalles de la Licenciatura en Derecho</p>
            </div>

            <div className="space-y-4">
              {/* Perfil del Egresado */}
              <details className="group bg-gradient-to-r from-green-50 to-orange-50 rounded-xl overflow-hidden shadow-lg">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-gray-900 hover:bg-white/50 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-base">👨‍🎓</span>
                    </div>
                    <span>Perfil del Egresado</span>
                  </div>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="p-6 pt-0 bg-white/70">
                  <p className="text-gray-700 leading-relaxed">{perfilEgresadoTexto}</p>
                </div>
              </details>

              {/* Campo Laboral */}
              <details className="group bg-gradient-to-r from-green-50 to-orange-50 rounded-xl overflow-hidden shadow-lg">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-gray-900 hover:bg-white/50 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-base">🏢</span>
                    </div>
                    <span>Campo Laboral</span>
                  </div>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="p-6 pt-0 bg-white/70">
                  <ul className="space-y-2">
                    {campoLaboral.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="text-orange-500 font-bold mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>

              {/* Requisitos de Ingreso */}
              <details className="group bg-gradient-to-r from-green-50 to-orange-50 rounded-xl overflow-hidden shadow-lg">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-gray-900 hover:bg-white/50 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-base">✅</span>
                    </div>
                    <span>Requisitos de Ingreso</span>
                  </div>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="p-6 pt-0 bg-white/70">
                  <ul className="space-y-2">
                    {requisitos.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="text-orange-500 font-bold mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </div>
          </div>

          {/* Columna Derecha - Imagen destacada */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/derecho-iiesbc.jpg"
              alt="Licenciatura en Derecho"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Tu Futuro Comienza Aquí</h3>
              <p className="text-lg opacity-90">Conviértete en un profesional del derecho</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plan de Estudios */}
      <section id="plan-estudios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gray-900">Plan de Estudios</h2>
            <p className="text-xl text-gray-600">Programa académico estructurado en 9 cuatrimestres</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planEstudios.map((periodo, idx) => (
              <div key={idx} className="bg-gradient-to-br from-green-50 to-orange-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="inline-block bg-gradient-to-r from-green-600 to-orange-600 text-white px-6 py-2 rounded-full font-bold mb-2">
                    {idx + 1}º Cuatrimestre
                  </div>
                  <h3 className="text-sm text-gray-600 font-semibold">{periodo.nombre}</h3>
                </div>
                <ul className="space-y-3">
                  {periodo.materias.map((materia, i) => (
                    <li key={i} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <p className="font-semibold text-gray-800 text-center">{materia}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

  {/* CTA final */}
  <section className="relative bg-gradient-to-r from-green-600 via-green-700 to-orange-600 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¡Inscripciones Abiertas!
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ten la oportunidad de vincular tus estudios con Universidades Internacionales. 
              En un ambiente sano, cómodo y dedicado se estudia mejor.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-white font-semibold">✓ Becas Disponibles</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-white font-semibold">✓ Financiamiento</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-white font-semibold">✓ RVOE Oficial</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfSsj4lfLF9akHmCPjL5pTK8PaebMFQ2__qE-wJZpShmka01A/viewform?usp=publish-editor"
                target="_blank"
                className="inline-block bg-white text-green-700 px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Inscríbete Ahora
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}