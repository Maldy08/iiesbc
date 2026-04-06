"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import CongresoGallery from "./components/CongresoGallery";
import Link from "next/link";

export default function Home() {
  const [isWhatsAppVisible, setIsWhatsAppVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("todos");
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Control de scroll para mostrar WhatsApp
  useEffect(() => {
    const handleScroll = () => {
      setIsWhatsAppVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Contador animado
  const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        },
        { threshold: 0.5 }
      );

      if (countRef.current) {
        observer.observe(countRef.current);
      }

      return () => {
        if (countRef.current) {
          observer.unobserve(countRef.current);
        }
      };
    }, []);

    useEffect(() => {
      if (!isVisible) return;

      let startTime;
      let animationFrame;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration]);

    return <span ref={countRef}>{count}{suffix}</span>;
  };

  // Datos de programas
  const programas = [
    {
      id: 1,
      tipo: "licenciatura",
      nombre: "Licenciatura en Ciencias de la Educación",
      duracion: "8 semestres",
      modalidad: "Escolarizada / En línea",
      descripcion: "Forma profesionales capaces de diseñar, implementar y evaluar programas educativos innovadores.",
      icono: "🎓",
      imagen: "/images/educacion.jpg",
    },
    {
      id: 2,
      tipo: "licenciatura",
      nombre: "Licenciatura en Criminología",
      duracion: "8 semestres",
      modalidad: "Escolarizada",
      descripcion: "Prepara especialistas en prevención y análisis del delito con enfoque multidisciplinario.",
      icono: "⚖️",
      imagen: "/images/criminologia.jpg",
    },
    {
      id: 3,
      tipo: "licenciatura",
      nombre: "Licenciatura en Derecho",
      duracion: "9 semestres",
      modalidad: "Escolarizada",
      descripcion: "Forma abogados con sólidos conocimientos jurídicos y ética profesional.",
      icono: "⚖️",
      imagen: "/images/derecho.jpg",
    },
    {
      id: 4,
      tipo: "maestria",
      nombre: "Maestría en Educación",
      duracion: "4 semestres",
      modalidad: "En línea",
      descripcion: "Especialización en procesos educativos y desarrollo de competencias docentes.",
      icono: "🎯",
      imagen: "/images/meducacion.jpg",
    },
    {
      id: 5,
      tipo: "maestria",
      nombre: "Maestría en Administración Competitiva",
      duracion: "4 semestres",
      modalidad: "Escolarizada / En línea",
      descripcion: "Desarrolla líderes empresariales con visión estratégica y competitiva.",
      icono: "💼",
      imagen: "/images/madministracion.jpg",
    },
    {
      id: 6,
      tipo: "maestria",
      nombre: "Maestría en Gestión de Políticas Públicas",
      duracion: "4 semestres",
      modalidad: "En línea",
      descripcion: "Forma especialistas en diseño e implementación de políticas públicas efectivas.",
      icono: "🏛️",
      imagen: "/images/mpublicas.jpg",
    },
    {
      id: 7,
      tipo: "doctorado",
      nombre: "Doctorado en Administración de Instituciones Educativas",
      duracion: "6 semestres",
      modalidad: "En línea",
      descripcion: "Máximo grado académico para líderes en gestión educativa e investigación.",
      icono: "🎓",
      imagen: "/images/comunicacion.jpg",
    },
  ];

  // Testimonios
  const testimonios = [
    {
      nombre: "María González",
      programa: "Maestría en Educación",
      foto: "👩‍🎓",
      comentario: "IIESBC transformó mi carrera profesional. Los profesores son excelentes y el contenido es muy aplicable.",
      estrellas: 5,
    },
    {
      nombre: "Carlos Rodríguez",
      programa: "Licenciatura en Derecho",
      foto: "👨‍⚖️",
      comentario: "La mejor decisión que pude tomar. El nivel académico es excepcional y las instalaciones son de primer nivel.",
      estrellas: 5,
    },
    {
      nombre: "Ana Martínez",
      programa: "Maestría en Administración",
      foto: "👩‍💼",
      comentario: "Gracias a IIESBC obtuve el ascenso que buscaba. La modalidad en línea me permitió estudiar y trabajar.",
      estrellas: 5,
    },
  ];

  const filteredProgramas = activeFilter === "todos"
    ? programas
    : programas.filter(p => p.tipo === activeFilter);

  // Auto-scroll testimonios
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonios.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="pt-0">
      {/* Schema.org JSON-LD para Universidad */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollegeOrUniversity",
            "name": "Instituto Interamericano de Estudios Superiores de Baja California (IIESBC)",
            "url": "https://www.iiesbc.mx",
            "logo": "https://www.iiesbc.mx/images/logo.png",
            "sameAs": [
              "https://www.facebook.com/share/1D6PU7xWbP/",
              "https://www.instagram.com/iiesbc"
            ],
            "description": "Transformamos vidas a través de la educación superior de calidad, formando profesionales competitivos en licenciaturas, maestrías y doctorados en Mexicali.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Río Fuerte #1692, Col. Independencia Magisterial",
              "addressLocality": "Mexicali",
              "addressRegion": "B.C.",
              "postalCode": "21290",
              "addressCountry": "MX"
            },
            "telephone": "+526865649010",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+52-686-564-9010",
              "contactType": "Admissions",
              "email": "im.iiesbc@gmail.com"
            }
          })
        }}
      />
      {/* Hero Section - Presentación Principal */}
      <section className="relative overflow-hidden">
        {/* Imagen de fondo con overlay mejorado */}
        <div className="absolute inset-0">
          <Image
            src="/images/slid-IIESBC-Inscrip.jpg"
            alt="Instituto Interamericano de Estudios Superiores"
            fill
            className="object-cover scale-105 animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        {/* Partículas flotantes animadas */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-float-slow"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-green-400/30 rounded-full animate-float-medium"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-orange-400/30 rounded-full animate-float-fast"></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white/30 rounded-full animate-float-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-green-300/20 rounded-full animate-float-medium" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Contenido sobre la imagen */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <div className="text-center lg:text-left animate-fade-in-up">
                <div className="mb-8">
                  {/* Badge animado de inscripciones */}
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 animate-pulse-slow">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
                    <span className="text-white text-sm font-semibold">Inscripciones Abiertas 2025</span>
                  </div>

                  <div className="text-6xl lg:text-8xl font-black mb-6 leading-tight text-white transform hover:scale-105 transition-transform duration-300 inline-block">
                    <span className="text-green-400 drop-shadow-lg">IIES</span>
                    <span className="text-orange-400 drop-shadow-lg">BC</span>
                  </div>

                  {/* Línea animada con gradiente */}
                  <div className="relative w-64 h-2 bg-gradient-to-r from-green-400 via-orange-400 to-green-400 mx-auto lg:mx-0 rounded-full mb-6 overflow-hidden">
                    <div className="absolute inset-0 bg-white/50 animate-shimmer"></div>
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Instituto Interamericano de<br />
                    Estudios Superiores de<br />
                    <span className="text-orange-400">Baja California</span>
                  </h1>
                </div>

                <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Transformamos vidas a través de la educación superior de calidad,
                  formando profesionales competitivos para un mundo en constante cambio.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/oferta-academica"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                  >
                    Conoce Nuestros Programas
                  </Link>
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfSsj4lfLF9akHmCPjL5pTK8PaebMFQ2__qE-wJZpShmka01A/viewform?usp=publish-editor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                  >
                    Inscríbete Ahora
                  </Link>
                </div>
              </div>


              <div className="flex justify-center lg:justify-end">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 max-w-md shadow-2xl border border-gray-200 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <div className="mb-6">
                      <p className="text-2xl font-black text-orange-500 mb-2">¡Tu futuro comienza aquí!</p>
                      <p className="text-4xl font-black text-green-600 mb-4 block">INSCRIPCIONES</p>
                      <p className="text-4xl font-black text-yellow-500 block">ABIERTAS</p>
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

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/images/biblioteca-virtual.jpg"
            alt="Instituto Interamericano de Estudios Superiores"
            fill
            className="object-contain scale-105 animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-float-slow" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-green-400/30 rounded-full animate-float-medium" />
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-orange-400/30 rounded-full animate-float-fast" />
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white/30 rounded-full animate-float-slow" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-green-300/20 rounded-full animate-float-medium" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="flex justify-center">
              <Link
                href="https://www.canva.com/design/DAG38pVRiqw/96Z1wuHznTSSzWeZrGt8Gg/view?utm_content=DAG38pVRiqw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8906bd033e"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex justify-center rounded-2xl px-10 py-4 text-lg font-semibold text-white border border-white/20 bg-white/10 backdrop-blur-2xl overflow-hidden shadow-[0_25px_60px_-25px_rgba(249,115,22,0.7)] transition-all duration-300 hover:scale-105 hover:shadow-[0_35px_80px_-25px_rgba(16,185,129,0.7)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500/40 via-white/10 to-green-400/40 opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                <span className="absolute -inset-10 bg-gradient-to-t from-white/50 via-transparent to-transparent opacity-40 blur-3xl group-hover:opacity-60 transition-opacity duration-700" />
                <span className="absolute left-1/2 -top-8 h-16 w-32 -translate-x-1/2 rounded-full bg-white/70 blur-3xl opacity-80 group-hover:translate-y-3 transition-all duration-700" />
                <span className="relative z-10">Acceder al contenido</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Misión Section - Información institucional */}
      <section className="relative py-24 text-white overflow-hidden">
        {/* Imagen de fondo con efectos modernos */}
        <div className="absolute inset-0">
          <Image
            src="/images/brooke-cagle.jpg"
            alt="Universidad comprometida"
            fill
            className="object-cover"
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

            <div className="mt-12">
              <Link
                href="/sobre-nosotros"
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-2 hover:scale-105 backdrop-blur-sm border border-white/20"
              >
                Conoce Nuestra Historia
              </Link>
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

                <h3 className="text-2xl font-black text-gray-800 mb-4 group-hover:text-green-700 transition-colors duration-300">
                  📚 CLASES INSTITUCIONALES
                </h3>

                <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto mb-6 rounded-full"></div>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Posgrados dirigidos a instituciones educativas públicas y a empresas
                  que confían en nosotros para la preparación continua de su fuerza laboral.
                </p>


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

                <h3 className="text-2xl font-black text-gray-800 mb-4 group-hover:text-orange-700 transition-colors duration-300">
                  🤝 VINCULACIÓN
                </h3>

                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mb-6 rounded-full"></div>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Convenios con instituciones educativas, gubernamentales y empresas
                  para que nuestros estudiantes realicen en ellos sus prácticas y servicios.
                </p>


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

                <h3 className="text-2xl font-black text-gray-800 mb-4 group-hover:text-green-700 transition-colors duration-300">
                  🎓 BECAS
                </h3>

                <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto mb-6 rounded-full"></div>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Tanto para licenciatura como para los cursos de posgrado existe
                  la posibilidad de ser recipiente de una beca y de obtener facilidades
                  de pago de colegiaturas.
                </p>

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

                <h3 className="text-2xl font-black text-gray-800 mb-4 group-hover:text-orange-700 transition-colors duration-300">
                  ⏰ HORARIOS FLEXIBLES
                </h3>

                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mb-6 rounded-full"></div>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Entre nuestros estudiantes contamos con personas que trabajan tiempo
                  completo, empresarios y profesores universitarios, por lo que buscamos
                  el mejor horario para su preparación.
                </p>


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
            <h2 className="text-6xl lg:text-8xl font-black text-white mb-6 leading-tight">
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">¡Ponemos</span>{" "}
              <span className="text-orange-300 inline-block transform hover:scale-105 transition-transform duration-300">el éxito</span>{" "}
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">a tu</span>{" "}
              <span className="text-yellow-300 inline-block transform hover:scale-105 transition-transform duration-300 font-extrabold">alcance!</span>
            </h2>

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


                </div>
              </div>
            </div>
          </div>

          {/* Lado derecho - Imagen */}
          <div className="relative group overflow-hidden">
            <div className="h-full min-h-[600px] bg-cover bg-center relative transform group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: 'url(/images/bienve-IIESBC.jpg)' }}>
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
            <div className="h-full min-h-[600px] bg-cover bg-center relative transform group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: 'url(/images/inscripciones-IIESBC.jpg)' }}>
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

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mención a la Oferta Educativa con botón */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
        {/* Fondo decorativo sutil */}
        <div className="absolute inset-0">
          {/* Patrón suave */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #0f172a 1px, transparent 0)',
              backgroundSize: '24px 24px'
            }}
          />
          {/* Blobs */}
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-green-500 rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-sm font-bold text-green-700 uppercase tracking-widest bg-green-50 px-6 py-2 rounded-full mb-4">
            Oferta Educativa
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Conoce toda nuestra oferta educativa
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Licenciaturas, Maestrías y Doctorado con reconocimiento oficial. Explora todos nuestros programas en un solo lugar.
          </p>
          <Link
            href="/oferta-academica"
            className="inline-block px-10 py-4 bg-gradient-to-r from-green-600 to-orange-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:from-green-700 hover:to-orange-700 transform hover:-translate-y-0.5 transition-all"
          >
            Ver Oferta Académica
          </Link>
        </div>
      </section>

      {/* Estadísticas con Contadores Animados - Mejorado */}
      <section className="relative py-24 overflow-hidden">
        {/* Fondo con efecto glassmorphism */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-900">
          <div className="absolute inset-0 backdrop-blur-3xl bg-white/5"></div>
        </div>

        {/* Efectos de luz mejorados */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              Números que nos <span className="text-orange-400">Respaldan</span>
            </h2>
            <p className="text-xl text-green-100">
              Más de una década formando profesionales de excelencia
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-orange-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500">
                {/* Ícono animado */}
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-orange-400 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>

                <div className="text-5xl lg:text-6xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={15} suffix="+" />
                </div>

                <p className="text-green-100 text-lg font-semibold mb-4">Años de Experiencia</p>

                {/* Barra de progreso animada */}
                <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-400 to-orange-400 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-green-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-green-400 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>

                <div className="text-5xl lg:text-6xl font-black text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={2500} suffix="+" />
                </div>

                <p className="text-green-100 text-lg font-semibold mb-4">Estudiantes</p>

                <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-400 to-green-400 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-orange-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-orange-400 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <div className="text-5xl lg:text-6xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={98} suffix="%" />
                </div>

                <p className="text-green-100 text-lg font-semibold mb-4">Satisfacción</p>

                <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-400 to-orange-400 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
                </div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-green-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-green-400 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>

                <div className="text-5xl lg:text-6xl font-black text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={7} suffix="+" />
                </div>

                <p className="text-green-100 text-lg font-semibold mb-4">Programas</p>

                <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-400 to-green-400 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios - Mejorado */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Lo que dicen <span className="text-green-600">nuestros estudiantes</span>
            </h2>
            <p className="text-xl text-gray-600">
              Testimonios reales de quienes han transformado su futuro con nosotros
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Contenedor con transición */}
            <div className="relative overflow-hidden">
              {testimonios.map((testimonio, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${index === currentTestimonial
                    ? 'opacity-100 transform translate-x-0 relative'
                    : 'opacity-0 transform translate-x-full absolute inset-0 pointer-events-none'
                    }`}
                >
                  <div className="bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden">
                    {/* Citas decorativas */}
                    <svg className="absolute -top-4 -left-4 w-16 h-16 text-green-200" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                    </svg>

                    <div className="relative text-center">
                      {/* Avatar con efecto de brillo */}
                      <div className="relative w-24 h-24 mx-auto mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-orange-400 rounded-full animate-pulse-slow"></div>
                        <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center text-5xl shadow-lg">
                          {testimonio.foto}
                        </div>
                      </div>

                      {/* Cita */}
                      <p className="text-2xl text-gray-700 italic leading-relaxed mb-6 relative z-10">
                        {testimonio.comentario}
                      </p>

                      {/* Estrellas con animación */}
                      <div className="flex justify-center gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-6 h-6 transition-all duration-200 hover:scale-125 ${i < testimonio.estrellas ? 'text-yellow-400' : 'text-gray-300'
                              }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <h4 className="text-xl font-bold text-gray-900">{testimonio.nombre}</h4>
                      <p className="text-green-600 font-semibold">{testimonio.programa}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controles de navegación mejorados */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonios.length) % testimonios.length)}
                className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
                aria-label="Testimonio anterior"
              >
                <svg className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Indicadores mejorados */}
              <div className="flex gap-2">
                {testimonios.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${currentTestimonial === index
                      ? 'w-8 bg-green-600'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                    aria-label={`Ver testimonio ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonios.length)}
                className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
                aria-label="Siguiente testimonio"
              >
                <svg className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Botón Flotante de WhatsApp */}
      {isWhatsAppVisible && (
        <a
          href="https://wa.me/6864335197?text=Hola,%20me%20interesa%20más%20información%20sobre%20IIESBC"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      )}

      {/* Modal de Programa */}
      {selectedProgram && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedProgram(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 text-white relative">
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="text-6xl mb-4">{selectedProgram.icono}</div>
              <h3 className="text-3xl font-bold mb-2">{selectedProgram.nombre}</h3>
              <div className="flex gap-4">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">{selectedProgram.duracion}</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">{selectedProgram.modalidad}</span>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">{selectedProgram.descripcion}</p>

              <div className="space-y-4 mb-8">
                <h4 className="text-xl font-bold text-gray-900">Beneficios del programa:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Profesores con experiencia profesional activa</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Reconocimiento de Validez Oficial (RVOE)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Instalaciones modernas y equipadas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Becas y financiamiento disponible</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white text-center px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg"
                >
                  Solicitar Información
                </Link>
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Estilos CSS personalizados para animaciones */}
      <style jsx>{`
          @keyframes slow-zoom {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }

          @keyframes float-slow {
            0%, 100% { 
              transform: translateY(0px) translateX(0px); 
              opacity: 0.4;
            }
            33% { 
              transform: translateY(-20px) translateX(10px); 
              opacity: 0.6;
            }
            66% { 
              transform: translateY(-10px) translateX(-10px); 
              opacity: 0.5;
            }
          }

          @keyframes float-medium {
            0%, 100% { 
              transform: translateY(0px) translateX(0px); 
              opacity: 0.3;
            }
            50% { 
              transform: translateY(-30px) translateX(15px); 
              opacity: 0.5;
            }
          }

          @keyframes float-fast {
            0%, 100% { 
              transform: translateY(0px); 
              opacity: 0.3;
            }
            50% { 
              transform: translateY(-40px); 
              opacity: 0.6;
            }
          }

          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pulse-slow {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }

          .animate-slow-zoom {
            animation: slow-zoom 20s ease-in-out infinite;
          }

          .animate-float-slow {
            animation: float-slow 6s ease-in-out infinite;
          }

          .animate-float-medium {
            animation: float-medium 4s ease-in-out infinite;
          }

          .animate-float-fast {
            animation: float-fast 3s ease-in-out infinite;
          }

          .animate-shimmer {
            animation: shimmer 2s ease-in-out infinite;
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out;
          }

          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }
        `}</style>
    </main>
  );
}
