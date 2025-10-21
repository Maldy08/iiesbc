"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function MaestriaEducacion() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const tabs = [
    {
      id: 0,
      icon: "🎯",
      title: "Objetivo",
      color: "from-blue-600 to-blue-800",
      content: `Formar maestros en el campo de la educación capaces de aportar propuestas y soluciones viables e innovadoras a los problemas educativos que enfrentan las instituciones y centros educativos.`
    },
    {
      id: 1,
      icon: "👨‍🎓",
      title: "Perfil del Egresado",
      color: "from-purple-600 to-purple-800",
      content: [
        "Generar una visión sobre la realidad educativa local, nacional e internacional que les permita contribuir en procesos de cambio educativo",
        "Fundamentar de manera práctica los aspectos disciplinarios de su disciplina",
        "Realizar investigación como herramienta de trabajo para la toma de decisiones en su práctica profesional en ámbitos educativos",
        "Manifestar conocimientos amplios de las áreas fundamentales de la Educación como: administración escolar, pedagogía, orientación escolar, diseño curricular y metodología de la investigación",
        "Habilidad para generar proyectos innovadores que mejoren la calidad del proceso",
        "Compromiso social y actitud ética que guíen sus decisiones en beneficio de la Educación"
      ]
    },
    {
      id: 2,
      icon: "🏢",
      title: "Campo Laboral",
      color: "from-green-600 to-green-800",
      content: [
        "Centros de investigación educativa",
        "Administración de centros educativos públicos",
        "Administración de instituciones del sector privado",
        "Asesoría y consultoría educativa",
        "Coordinación académica en instituciones de educación superior",
        "Diseño y evaluación de programas educativos"
      ]
    },
    {
      id: 3,
      icon: "📚",
      title: "Plan de Estudios",
      color: "from-amber-600 to-amber-800",
      content: {
        cuatrimestres: [
          {
            nombre: "PRIMER CUATRIMESTRE",
            materias: [
              "Planeación y Administración Educativa",
              "Legislación y Política Educativa"
            ]
          },
          {
            nombre: "SEGUNDO CUATRIMESTRE",
            materias: [
              "Entorno Educativo y Liderazgo",
              "Planeación Estratégica de la Educación"
            ]
          },
          {
            nombre: "TERCER CUATRIMESTRE",
            materias: [
              "TICS en la Educación",
              "Planeación e Implantación de Proyectos Educativos I"
            ]
          },
          {
            nombre: "CUARTO CUATRIMESTRE",
            materias: [
              "Taller de Diseño Curricular",
              "Enseñanza y Aprendizaje"
            ]
          },
          {
            nombre: "QUINTO CUATRIMESTRE",
            materias: [
              "Investigación y Evaluación de Proyectos Educativos II",
              "Impacto y Evaluación Curricular"
            ]
          },
          {
            nombre: "SEXTO CUATRIMESTRE",
            materias: [
              "Aprovechamiento y Solución de Conflictos en la Institución",
              "Investigación Aplicada"
            ]
          }
        ]
      }
    },
    {
      id: 4,
      icon: "✅",
      title: "Requisitos de Ingreso",
      color: "from-red-600 to-red-800",
      content: [
        "Copia de CURP",
        "Certificado de estudios de licenciatura (original y copia)",
        "Cédula profesional de licenciatura (original y copia)",
        "En caso de no contar con Título presentar carta constancia de trámite en proceso",
        "Acta de nacimiento (original y 2 copias)",
        "Fotografías tamaño credencial e infantil en blanco y negro",
        "Identificación oficial (copia)",
        "Recibo de pagos correspondientes"
      ]
    }
  ];

  const estadisticas = [
    { numero: "6", texto: "Cuatrimestres", icon: "📅" },
    { numero: "12", texto: "Materias", icon: "📚" },
    { numero: "2", texto: "Años", icon: "⏱️" },
    { numero: "RVOE", texto: "Oficial", icon: "🎓" }
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-24 overflow-hidden">
        {/* Imagen de fondo del hero */}
        <div className="absolute inset-0">
          <img
            src="/images/maestrias/maestria-educacion-iiesbc.jpg"
            alt="Maestría en Educación - IIESBC"
            className="w-full h-full object-cover"
          />
          {/* Overlay para mejorar contraste del texto */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-purple-900/80"></div>
        </div>

        {/* Patrón decorativo sutil sobre la imagen */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <span className="text-blue-100 font-semibold">RVOE-BC (229 a la 235) M1/13</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Maestría en Educación
            </h1>
            <p className="text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Transforma la educación con propuestas innovadoras y soluciones efectivas
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#informacion" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl">
                Conoce el Programa
              </a>
              <a href="/inscripciones" className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-xl">
                Inscríbete Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="bg-white py-12 shadow-lg -mt-8 relative z-20 mx-4 md:mx-8 lg:mx-16 rounded-2xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {estadisticas.map((stat, idx) => (
              <div key={idx} className="text-center p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 cursor-pointer transform hover:scale-105">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold text-blue-700 mb-2">{stat.numero}</div>
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
            ¿Por qué estudiar esta Maestría?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ventajas.map((ventaja, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                  hoveredCard === idx ? 'border-blue-500' : 'border-transparent'
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

      {/* Main Content */}
      <section id="informacion" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Sidebar con imagen */}
          <div className="lg:col-span-2 space-y-6">
            <div className="sticky top-24">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="/images/maestrias/maestria-educacion-iiesbc.jpg"
                  alt="Maestría en Educación"
                  width={800}
                  height={600}
                  className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Lidera el Cambio</h3>
                  <p className="text-blue-200">Innova en el campo educativo</p>
                </div>
              </div>

              {/* Mini tabs */}
              <div className="mt-6 bg-white rounded-2xl shadow-lg p-4 space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r ' + tab.color + ' text-white shadow-lg'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span className="text-2xl">{tab.icon}</span>
                    <span className="font-semibold">{tab.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className={`bg-gradient-to-br ${tabs[activeTab].color} rounded-2xl p-8 shadow-2xl min-h-[600px] text-white`}>
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/20">
                <div className="text-6xl bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                  {tabs[activeTab].icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{tabs[activeTab].title}</h2>
                  <p className="text-white/80">Información detallada del programa</p>
                </div>
              </div>

              <div className="space-y-6">
                {activeTab === 3 ? (
                  // Plan de Estudios
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                    {tabs[activeTab].content.cuatrimestres.map((cuatrimestre, idx) => (
                      <div 
                        key={idx} 
                        className="bg-white/15 backdrop-blur-md rounded-xl p-5 hover:bg-white/25 transition-all duration-300 border border-white/20"
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <div className="bg-white/30 px-3 py-1 rounded-full">
                            <span className="font-bold text-sm">{idx + 1}°</span>
                          </div>
                          <h4 className="font-bold text-sm uppercase tracking-wide">
                            Cuatrimestre
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {cuatrimestre.materias.map((materia, mIdx) => (
                            <li key={mIdx} className="flex items-start gap-2 text-sm">
                              <span className="text-white/60 mt-1 text-xs">▪</span>
                              <span className="leading-tight">{materia}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : Array.isArray(tabs[activeTab].content) ? (
                  // Perfil del Egresado, Campo Laboral y Requisitos
                  <div className="grid grid-cols-1 gap-4">
                    {tabs[activeTab].content.map((item, idx) => (
                      <div 
                        key={idx}
                        className="bg-white/15 backdrop-blur-md rounded-xl p-5 hover:bg-white/25 transition-all duration-300 border border-white/20 flex items-start gap-4"
                      >
                        <div className="bg-white/30 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="font-bold text-sm">{idx + 1}</span>
                        </div>
                        <p className="leading-relaxed text-lg flex-1">{item}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Objetivo
                  <div className="bg-white/15 backdrop-blur-md rounded-xl p-8 border border-white/20">
                    <p className="leading-relaxed text-lg">
                      {tabs[activeTab].content}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 py-20 overflow-hidden">
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
            <a
              href="/inscripciones"
              className="inline-block bg-white text-orange-600 px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Solicita Información Ahora
            </a>
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