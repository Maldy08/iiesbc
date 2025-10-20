"use client";

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function NavbarModern() {
  // Estados
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  // Detectar dirección del scroll para ocultar/mostrar navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determinar dirección del scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      
      setLastScrollY(currentScrollY);
      setScrolled(currentScrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Verificar si la ruta está activa
  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const programas = [
    {
      categoria: "Licenciaturas",
      color: "green",
      items: [
        { nombre: "Derecho", href: "/oferta-academica/licenciaturas/derecho", icon: "⚖️" },
        { nombre: "Criminología", href: "/oferta-academica/licenciaturas/criminologia", icon: "🔍" },
        { nombre: "Ciencias de la Educación", href: "/oferta-academica/licenciaturas/ciencias-de-la-educacion", icon: "🎓" }
      ]
    },
    {
      categoria: "Maestrías",
      color: "orange",
      items: [
        { nombre: "Educación", href: "/oferta-academica/maestrias/educacion", icon: "📚" },
        { nombre: "Administración Competitiva", href: "/oferta-academica/maestrias/administracion-competitiva", icon: "💼" },
        { nombre: "Gestión de Políticas Públicas", href: "/oferta-academica/maestrias/gestion-de-politicas-publicas", icon: "🏛️" }
      ]
    },
    {
      categoria: "Doctorados",
      color: "purple",
      items: [
        { nombre: "Administración de Instituciones Educativas", href: "/oferta-academica/doctorado/administracion-de-instituciones-educativas", icon: "🎯" }
      ]
    },
    {
      categoria: "Diplomados",
      color: "blue",
      items: [
        { nombre: "Desarrollo del Lenguaje", href: "/oferta-academica/diplomados/desarrollo-del-lenguaje", icon: "💬" },
        { nombre: "Trastornos del Neurodesarrollo", href: "/oferta-academica/diplomados/trantornos-del-neurodesarrollo", icon: "🧠" }
      ]
    }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50' 
          : 'bg-white/90 backdrop-blur-md shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center px-4 lg:px-8">
            {/* Logo */}
            <Link 
              href="/" 
              className="group relative py-3 flex items-center gap-3 hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <Image 
                  src="/images/icono.png" 
                  alt="IIESBC" 
                  width={scrolled ? 50 : 65} 
                  height={scrolled ? 50 : 65} 
                  className="transition-all duration-300 drop-shadow-md" 
                />
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <Image 
                src="/images/NOMBRE.png" 
                alt="Instituto Interamericano" 
                width={scrolled ? 140 : 280} 
                height={scrolled ? 35 : 70} 
                className="transition-all duration-300 object-contain hidden sm:block" 
              />
            </Link>

            {/* Menú Desktop */}
            <div className="hidden lg:flex items-center space-x-1">
              <NavLink href="/" isActive={isActive('/')}>
                Inicio
              </NavLink>
              
              <NavLink href="/sobre-nosotros" isActive={isActive('/sobre-nosotros')}>
                Sobre Nosotros
              </NavLink>

              {/* Dropdown Mejorado */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`group relative px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                    isActive('/oferta-academica')
                      ? 'text-white bg-gradient-to-r from-green-600 to-green-700 shadow-lg shadow-green-500/30'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50/80'
                  }`}
                >
                  <span>Oferta Académica</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mega Dropdown Menu */}
                <div className={`absolute left-1/2 -translate-x-1/2 mt-3 transition-all duration-300 ${
                  dropdownOpen 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}>
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden min-w-[800px]">
                    <div className="grid grid-cols-2 gap-6 p-6">
                      {programas.map((grupo, idx) => (
                        <div key={idx} className="space-y-3">
                          <div className={`flex items-center gap-2 pb-2 border-b-2 border-${grupo.color}-500`}>
                            <div className={`w-2 h-2 rounded-full bg-${grupo.color}-500 animate-pulse`}></div>
                            <h3 className={`text-sm font-bold text-${grupo.color}-700 uppercase tracking-wider`}>
                              {grupo.categoria}
                            </h3>
                          </div>
                          <div className="space-y-1">
                            {grupo.items.map((item, itemIdx) => (
                              <Link
                                key={itemIdx}
                                href={item.href}
                                className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-green-50 hover:to-orange-50 transition-all duration-200"
                              >
                                <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                                  {item.icon}
                                </span>
                                <span className="text-sm text-gray-700 group-hover:text-green-700 font-medium transition-colors">
                                  {item.nombre}
                                </span>
                                <svg 
                                  className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 text-orange-500 transition-all duration-200 transform group-hover:translate-x-1" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Footer del dropdown */}
                    <div className="bg-gradient-to-r from-green-50 to-orange-50 px-6 py-4 border-t border-gray-200/50">
                      <Link 
                        href="/oferta-academica" 
                        className="group flex items-center justify-center gap-2 text-green-700 font-semibold hover:text-orange-600 transition-colors"
                      >
                        <span>Ver toda la oferta académica</span>
                        <svg 
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <NavLink href="/eventos-academicos" isActive={isActive('/eventos-academicos')}>
                Eventos Académicos
              </NavLink>

              <NavLink href="/contacto" isActive={isActive('/contacto')}>
                Contacto
              </NavLink>

              {/* CTA Button */}
              <Link
                href="/contacto"
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl shadow-orange-500/30"
              >
                Inscríbete Ahora
              </Link>
            </div>

            {/* Botón Hamburguesa Moderno */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 rounded-xl hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center group"
              aria-label="Menú"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}></span>
                <span className={`block h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0 scale-x-0' : ''
                }`}></span>
                <span className={`block h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Espaciador para compensar el navbar fixed */}
      <div className={`transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}></div>

      {/* Menú Móvil Fullscreen Mejorado */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
        mobileMenuOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible'
      }`}>
        {/* Overlay con blur */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        
        {/* Panel del menú */}
        <div className={`absolute top-0 right-0 bottom-0 w-full sm:w-96 bg-white shadow-2xl transition-transform duration-500 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="h-full overflow-y-auto">
            {/* Header del menú móvil */}
            <div className="sticky top-0 bg-gradient-to-r from-green-600 to-orange-600 text-white p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Menú</h2>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-white/80">Instituto Interamericano de Estudios Superiores</p>
            </div>

            {/* Links del menú móvil */}
            <div className="p-4 space-y-2">
              <MobileNavLink href="/" isActive={isActive('/')} icon="🏠">
                Inicio
              </MobileNavLink>
              
              <MobileNavLink href="/sobre-nosotros" isActive={isActive('/sobre-nosotros')} icon="ℹ️">
                Sobre Nosotros
              </MobileNavLink>

              {/* Acordeón de Oferta Académica en móvil */}
              <div className="space-y-2">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-200 ${
                    isActive('/oferta-academica')
                      ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xl">🎓</span>
                    <span className="font-semibold">Oferta Académica</span>
                  </span>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Submenú desplegable */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  dropdownOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="ml-4 pl-4 border-l-2 border-green-200 space-y-2 py-2">
                    {programas.map((grupo, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider px-4 py-2">
                          {grupo.categoria}
                        </div>
                        {grupo.items.map((item, itemIdx) => (
                          <Link
                            key={itemIdx}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span>{item.icon}</span>
                            <span className="text-sm font-medium">{item.nombre}</span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <MobileNavLink href="/eventos-academicos" isActive={isActive('/eventos-academicos')} icon="📅">
                Eventos Académicos
              </MobileNavLink>

              <MobileNavLink href="/contacto" isActive={isActive('/contacto')} icon="📞">
                Contacto
              </MobileNavLink>

              {/* CTA en móvil */}
              <Link
                href="/contacto"
                className="block w-full mt-6 px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center font-bold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inscríbete Ahora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Componente NavLink para desktop
function NavLink({ href, isActive, children }) {
  return (
    <Link
      href={href}
      className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 group ${
        isActive
          ? 'text-white bg-gradient-to-r from-green-600 to-green-700 shadow-lg shadow-green-500/30'
          : 'text-gray-700 hover:text-green-600 hover:bg-green-50/80'
      }`}
    >
      {children}
      {!isActive && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-600 to-orange-500 rounded-full group-hover:w-3/4 transition-all duration-300"></span>
      )}
    </Link>
  );
}

// Componente MobileNavLink para móvil
function MobileNavLink({ href, isActive, icon, children }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-200 ${
        isActive
          ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg'
          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span className="font-semibold">{children}</span>
      {isActive && (
        <svg className="w-5 h-5 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      )}
    </Link>
  );
}
