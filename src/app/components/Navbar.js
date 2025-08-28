"use client"; // Muy importante para que los hooks de React funcionen

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  // Estados para controlar la visibilidad
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  // Detectar scroll para cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cierra el dropdown si se hace clic fuera de él
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    // Agrega el event listener
    document.addEventListener("mousedown", handleClickOutside);
    // Limpia el event listener al desmontar el componente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Función para verificar si la ruta está activa
  const isActive = (href) => pathname === href || pathname.startsWith(href + '/');

  return (
    <nav className={`bg-white text-primary-green shadow-md sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-2 shadow-lg' : 'py-4'
    }`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="hover:scale-105 transition-transform duration-300 flex items-center gap-3">
          <Image 
            src="/images/icono.png" 
            alt="Ícono IIESBC" 
            width={scrolled ? 60 : 80} 
            height={scrolled ? 60 : 80} 
            className="transition-all duration-300 flex-shrink-0" 
          />
          <Image 
            src="/images/NOMBRE.png" 
            alt="Nombre IIESBC" 
            width={scrolled ? 150 : 300} 
            height={scrolled ? 37 : 5} 
            className="transition-all duration-300 object-contain" 
          />
        </Link>
        {/* Menú Desktop */}
        <ul className="hidden lg:flex items-center space-x-6">
          <li><Link href="/" className={`transition-all duration-300 py-2 px-3 rounded-md ${
            isActive('/') ? 'text-primary-orange bg-orange-50 font-semibold' : 'hover:text-primary-orange hover:bg-gray-100'
          }`}>Inicio</Link></li>
          <li><Link href="/sobre-nosotros" className={`transition-all duration-300 py-2 px-3 rounded-md ${
            isActive('/sobre-nosotros') ? 'text-primary-orange bg-orange-50 font-semibold' : 'hover:text-primary-orange hover:bg-gray-100'
          }`}>Sobre Nosotros</Link></li>
          
          {/* ----- Contenedor del Dropdown ----- */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center py-2 px-3 rounded-md transition-all duration-300 ${
                isActive('/oferta-academica') ? 'text-primary-orange bg-orange-50 font-semibold' : 'hover:text-primary-orange hover:bg-gray-100'
              }`}
            >
              Oferta Académica
              <svg className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            {/* ----- El Menú Desplegable Mejorado ----- */}
            <div className={`absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-2xl z-20 border border-gray-100 transform transition-all duration-300 ease-out ${
              dropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
            }`}>
              <div className="py-3">
                <div className="px-4 py-2 text-primary-green text-xs uppercase font-bold tracking-wider border-b border-gray-100">Licenciaturas</div>
                <Link href="/oferta-academica/licenciaturas/derecho" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-primary-green hover:text-white transition-all duration-200 group">
                  <span className="w-2 h-2 bg-primary-orange rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Lic. en Derecho
                </Link>
                <Link href="/oferta-academica/licenciaturas/criminologia" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-primary-green hover:text-white transition-all duration-200 group">
                  <span className="w-2 h-2 bg-primary-orange rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Lic. en Criminología
                </Link>
                <Link href="/oferta-academica/licenciaturas/ciencias-de-la-educacion" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-primary-green hover:text-white transition-all duration-200 group">
                  <span className="w-2 h-2 bg-primary-orange rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Lic. en Ciencias de la Educación
                </Link>
                
                <div className="border-t border-gray-100 my-2"></div>

                <div className="px-4 py-2 text-primary-green text-xs uppercase font-bold tracking-wider">Maestrías</div>
                <Link href="/oferta-academica/maestrias/educacion" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-primary-green hover:text-white transition-all duration-200 group">
                  <span className="w-2 h-2 bg-primary-orange rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Maestría en Educación
                </Link>
                <Link href="/oferta-academica/maestrias/administracion-competitiva" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-primary-green hover:text-white transition-all duration-200 group">
                  <span className="w-2 h-2 bg-primary-orange rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Maestría en Administración Competitiva
                </Link>
                <Link href="/oferta-academica/maestrias/gestion-de-politicas-publicas" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-primary-green hover:text-white transition-all duration-200 group">
                  <span className="w-2 h-2 bg-primary-orange rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Maestría en Gestión de Políticas Públicas
                </Link>

                <div className="border-t border-gray-100 my-2"></div>
                <div className="px-4 py-2 text-primary-green text-xs uppercase font-bold tracking-wider">Doctorados</div>
                <Link href="/oferta-academica/doctorado/administracion-de-instituciones-educativas" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-primary-green hover:text-white transition-all duration-200 group">
                  <span className="w-2 h-2 bg-primary-orange rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Doctorado en Administración de Instituciones Educativas
                </Link>
                 
                <div className="border-t border-gray-100 my-2"></div>
                <div className="px-4 py-2 text-primary-green text-xs uppercase font-bold tracking-wider">Diplomados</div>
                <Link href="/oferta-academica/diplomados/desarrollo-del-lenguaje" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-primary-green hover:text-white transition-all duration-200 group">
                  <span className="w-2 h-2 bg-primary-orange rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Diplomado en Desarrollo del Lenguaje
                </Link>
                <Link href="/oferta-academica/diplomados/trantornos-del-neurodesarrollo" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-primary-green hover:text-white transition-all duration-200 group">
                  <span className="w-2 h-2 bg-primary-orange rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Diplomado en Trastornos del Neurodesarrollo
                </Link>

                <div className="px-4 py-3 bg-gray-50 rounded-b-lg">
                  <Link href="/oferta-academica" className="text-primary-green font-semibold text-sm hover:text-primary-orange transition-colors">
                    Ver toda la oferta académica →
                  </Link>
                </div>
              </div>
            </div>
          </li>
          {/* ----- Fin del Dropdown ----- */}

          <li><Link href="/eventos-academicos" className={`transition-all duration-300 py-2 px-3 rounded-md ${
            isActive('/eventos-academicos') ? 'text-primary-orange bg-orange-50 font-semibold' : 'hover:text-primary-orange hover:bg-gray-100'
          }`}>Eventos Académicos</Link></li>
          <li><Link href="/contacto" className={`transition-all duration-300 py-2 px-3 rounded-md ${
            isActive('/contacto') ? 'text-primary-orange bg-orange-50 font-semibold' : 'hover:text-primary-orange hover:bg-gray-100'
          }`}>Contacto</Link></li>
        </ul>

        {/* Botón hamburguesa para móviles */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
          aria-label="Abrir menú"
        >
          <div className="space-y-1">
            <span className={`block w-6 h-0.5 bg-primary-green transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-primary-green transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-primary-green transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Menú móvil */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
          <div className="space-y-2">
            <Link href="/" className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
              isActive('/') ? 'text-primary-orange bg-orange-100 font-semibold' : 'text-gray-700 hover:bg-white hover:text-primary-green'
            }`} onClick={() => setMobileMenuOpen(false)}>
              Inicio
            </Link>
            <Link href="/sobre-nosotros" className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
              isActive('/sobre-nosotros') ? 'text-primary-orange bg-orange-100 font-semibold' : 'text-gray-700 hover:bg-white hover:text-primary-green'
            }`} onClick={() => setMobileMenuOpen(false)}>
              Sobre Nosotros
            </Link>
            <Link href="/oferta-academica" className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
              isActive('/oferta-academica') ? 'text-primary-orange bg-orange-100 font-semibold' : 'text-gray-700 hover:bg-white hover:text-primary-green'
            }`} onClick={() => setMobileMenuOpen(false)}>
              Oferta Académica
            </Link>
            <Link href="/eventos-academicos" className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
              isActive('/eventos-academicos') ? 'text-primary-orange bg-orange-100 font-semibold' : 'text-gray-700 hover:bg-white hover:text-primary-green'
            }`} onClick={() => setMobileMenuOpen(false)}>
              Eventos Académicos
            </Link>
            <Link href="/contacto" className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
              isActive('/contacto') ? 'text-primary-orange bg-orange-100 font-semibold' : 'text-gray-700 hover:bg-white hover:text-primary-green'
            }`} onClick={() => setMobileMenuOpen(false)}>
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
