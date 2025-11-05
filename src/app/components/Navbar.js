"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const dropdownRef = useRef(null);

  // Helpers
  const isActive = useCallback(
    (href) => pathname === href || pathname.startsWith(href + "/"),
    [pathname]
  );

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const { style } = document.body;
    if (mobileMenuOpen) {
      const scrollY = window.scrollY;
      style.position = "fixed";
      style.top = `-${scrollY}px`;
      style.left = "0";
      style.right = "0";
      style.width = "100%";
    } else {
      const top = style.top;
      style.position = "";
      style.top = "";
      style.left = "";
      style.right = "";
      style.width = "";
      if (top) {
        const y = -parseInt(top, 10);
        window.scrollTo(0, y);
      }
    }
  }, [mobileMenuOpen]);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const onDown = (e) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  // Close with Escape + on route change
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLink = (href) =>
    `group relative flex items-center transition-all duration-300 px-5 py-2 font-medium tracking-wide rounded-lg ${
      isActive(href)
        ? "text-green-700"
        : "text-gray-700 hover:text-green-700"
    }`;

  return (
    <nav
      className={[
        "sticky top-0 z-50 border-b border-white/20 transition-all duration-300",
        "bg-white/90 supports-[backdrop-filter]:backdrop-blur-md",
        scrolled ? "py-2 bg-white/95 shadow-xl" : "py-4 shadow-lg",
      ].join(" ")}
      aria-label="Navegación principal"
    >
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 rounded bg-white/95 px-3 py-2 shadow"
      >
        Saltar al contenido
      </a>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <Link
          href="/"
          className="group/logo flex items-center gap-3 transition-transform duration-300 hover:scale-[1.03]"
          aria-label="Ir al inicio"
        >
          <div className="relative">
            {/* Animated halo on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-orange-400 rounded-full blur-lg opacity-0 group-hover/logo:opacity-30 transition-opacity duration-500" />
            <Image
              src="/images/ICO.png"
              alt="Ícono IIESBC"
              width={scrolled ? 60 : 80}
              height={scrolled ? 60 : 80}
              priority
              sizes="(max-width: 1024px) 48px, 80px"
              className="relative flex-shrink-0 transition-all duration-300 group-hover/logo:rotate-6"
            />
          </div>
          <Image
            src="/images/iiesbc.png"
            alt="Nombre IIESBC"
            width={scrolled ? 150 : 200}
            height={40}
            sizes="(max-width: 1024px) 120px, 200px"
            className="h-10 w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop */}
        <ul className="hidden h-full items-stretch space-x-2 lg:flex">
          <li className="flex items-stretch">
            <Link 
              href="/" 
              className={navLink("/")} 
              aria-current={isActive("/") ? "page" : undefined}
              onMouseEnter={() => setHoveredLink("/")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <span className="relative z-10">Inicio</span>
              {/* Gradient background on hover/active */}
              {(hoveredLink === "/" || isActive("/")) && (
                <span className="absolute inset-0 bg-gradient-to-r from-green-50 to-orange-50 rounded-lg -z-0 animate-fadeIn" />
              )}
              {/* Indicador de página activa */}
              <span className={`absolute bottom-0 left-0 h-1 w-full origin-left transform transition-all duration-300 ${
                isActive("/") 
                  ? "scale-x-100 bg-gradient-to-r from-green-600 to-orange-600" 
                  : "scale-x-0 bg-green-600 group-hover:scale-x-100"
              }`} />
            </Link>
          </li>
          <li className="flex items-stretch">
            <Link
              href="/sobre-nosotros"
              className={navLink("/sobre-nosotros")}
              aria-current={isActive("/sobre-nosotros") ? "page" : undefined}
              onMouseEnter={() => setHoveredLink("/sobre-nosotros")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <span className="relative z-10">Sobre Nosotros</span>
              {/* Gradient background on hover/active */}
              {(hoveredLink === "/sobre-nosotros" || isActive("/sobre-nosotros")) && (
                <span className="absolute inset-0 bg-gradient-to-r from-green-50 to-orange-50 rounded-lg -z-0 animate-fadeIn" />
              )}
              <span className={`absolute bottom-0 left-0 h-1 w-full origin-left transform transition-all duration-300 ${
                isActive("/sobre-nosotros") 
                  ? "scale-x-100 bg-gradient-to-r from-green-600 to-orange-600" 
                  : "scale-x-0 bg-green-600 group-hover:scale-x-100"
              }`} />
            </Link>
          </li>

          {/* Dropdown */}
          <li className="relative flex items-stretch" ref={dropdownRef}>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdownOpen}
              aria-controls="menu-oferta"
              onClick={() => {
                setDropdownOpen((v) => !v);
                setMobileMenuOpen(false);
              }}
              onMouseEnter={() => setHoveredLink("/oferta-academica")}
              onMouseLeave={() => setHoveredLink(null)}
              className={navLink("/oferta-academica")}
            >
              <span className="relative z-10 flex items-center">
                Oferta Académica
                <svg
                  className={`ml-1 h-4 w-4 transform transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
              {/* Gradient background on hover/active */}
              {(hoveredLink === "/oferta-academica" || isActive("/oferta-academica") || dropdownOpen) && (
                <span className="absolute inset-0 bg-gradient-to-r from-green-50 to-orange-50 rounded-lg -z-0 animate-fadeIn" />
              )}
              <span className={`absolute bottom-0 left-0 h-1 w-full origin-left transform transition-all duration-300 ${
                isActive("/oferta-academica") 
                  ? "scale-x-100 bg-gradient-to-r from-green-600 to-orange-600" 
                  : dropdownOpen
                  ? "scale-x-100 bg-orange-500"
                  : "scale-x-0 bg-green-600 group-hover:scale-x-100"
              }`} />
            </button>

            <div
              id="menu-oferta"
              role="menu"
              aria-label="Oferta Académica"
              className={[
                "absolute left-0 mt-2 w-80 rounded-xl border border-gray-200/50 bg-white/95 backdrop-blur-md shadow-2xl overflow-hidden",
                "transform transition-all duration-300 ease-out",
                dropdownOpen
                  ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                  : "pointer-events-none -translate-y-2 scale-95 opacity-0",
              ].join(" ")}
            >
              {/* Arrow decoration */}
              <div className="absolute -top-2 left-8 w-4 h-4 bg-white border-l border-t border-gray-200/50 transform rotate-45" />
              
              <div className="py-3 relative">
                <div className="border-l-4 border-green-500 bg-gradient-to-r from-green-50 to-transparent px-4 py-2 text-xs font-bold uppercase tracking-wider text-green-700">
                  🎓 Licenciaturas
                </div>
                <MenuItem href="/oferta-academica/licenciaturas/derecho">Lic. en Derecho</MenuItem>
                <MenuItem href="/oferta-academica/licenciaturas/criminologia">Lic. en Criminología</MenuItem>
                <MenuItem href="/oferta-academica/licenciaturas/ciencias-de-la-educacion">
                  Lic. en Ciencias de la Educación
                </MenuItem>

                <div className="my-2 border-t border-gray-100" />

                <div className="border-l-4 border-orange-500 bg-gradient-to-r from-orange-50 to-transparent px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-700">
                  🎯 Maestrías
                </div>
                <MenuItem href="/oferta-academica/maestrias/educacion">Maestría en Educación</MenuItem>
                <MenuItem href="/oferta-academica/maestrias/administracion-competitiva">
                  Maestría en Administración Competitiva
                </MenuItem>
                <MenuItem href="/oferta-academica/maestrias/gestion-de-politicas-publicas">
                  Maestría en Gestión de Políticas Públicas
                </MenuItem>

                <div className="my-2 border-t border-gray-100" />

                <div className="border-l-4 border-purple-500 bg-gradient-to-r from-purple-50 to-transparent px-4 py-2 text-xs font-bold uppercase tracking-wider text-purple-700">
                  🏆 Doctorados
                </div>
                <MenuItem href="/oferta-academica/doctorado/administracion-de-instituciones-educativas">
                  Doctorado en Administración de Instituciones Educativas
                </MenuItem>

                <div className="rounded-b-lg bg-gray-50 px-4 py-3">
                  <Link
                    href="/oferta-academica"
                    className="text-sm font-semibold text-green-700 underline-offset-2 hover:text-orange-500 hover:underline"
                    role="menuitem"
                  >
                    Ver toda la oferta académica →
                  </Link>
                </div>
              </div>
            </div>
          </li>

          <li className="flex items-stretch">
            <Link
              href="/eventos-academicos"
              className={navLink("/eventos-academicos")}
              aria-current={isActive("/eventos-academicos") ? "page" : undefined}
              onMouseEnter={() => setHoveredLink("/eventos-academicos")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <span className="relative z-10">Eventos Académicos</span>
              {/* Gradient background on hover/active */}
              {(hoveredLink === "/eventos-academicos" || isActive("/eventos-academicos")) && (
                <span className="absolute inset-0 bg-gradient-to-r from-green-50 to-orange-50 rounded-lg -z-0 animate-fadeIn" />
              )}
              <span className={`absolute bottom-0 left-0 h-1 w-full origin-left transform transition-all duration-300 ${
                isActive("/eventos-academicos") 
                  ? "scale-x-100 bg-gradient-to-r from-green-600 to-orange-600" 
                  : "scale-x-0 bg-green-600 group-hover:scale-x-100"
              }`} />
            </Link>
          </li>
          <li className="flex items-stretch">
            <Link
              href="/contacto"
              className={navLink("/contacto")}
              aria-current={isActive("/contacto") ? "page" : undefined}
              onMouseEnter={() => setHoveredLink("/contacto")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <span className="relative z-10">Contacto</span>
              {/* Gradient background on hover/active */}
              {(hoveredLink === "/contacto" || isActive("/contacto")) && (
                <span className="absolute inset-0 bg-gradient-to-r from-green-50 to-orange-50 rounded-lg -z-0 animate-fadeIn" />
              )}
              <span className={`absolute bottom-0 left-0 h-1 w-full origin-left transform transition-all duration-300 ${
                isActive("/contacto") 
                  ? "scale-x-100 bg-gradient-to-r from-green-600 to-orange-600" 
                  : "scale-x-0 bg-green-600 group-hover:scale-x-100"
              }`} />
            </Link>
          </li>
        </ul>

        {/* Botón hamburguesa */}
        <button
          onClick={() => {
            setMobileMenuOpen((v) => !v);
            setDropdownOpen(false);
          }}
          className="group relative rounded-lg p-2 transition-all duration-200 hover:bg-gradient-to-r hover:from-green-50 hover:to-orange-50 lg:hidden"
          aria-label="Abrir menú móvil"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Abrir menú</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-gradient-to-r from-green-600 to-orange-600 transition-all duration-300 ${
                mobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span className={`block h-0.5 w-6 bg-gradient-to-r from-green-600 to-orange-600 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-6 bg-gradient-to-r from-green-600 to-orange-600 transition-all duration-300 ${
                mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-200/50 bg-white/95 px-4 py-3 supports-[backdrop-filter]:backdrop-blur-md">
          <div className="space-y-2">
            <MobileItem href="/" active={isActive("/")} icon="🏠">Inicio</MobileItem>
            <MobileItem href="/sobre-nosotros" active={isActive("/sobre-nosotros")} icon="👥">Sobre Nosotros</MobileItem>
            <MobileItem href="/oferta-academica" active={isActive("/oferta-academica")} icon="📚">Oferta Académica</MobileItem>
            <MobileItem href="/eventos-academicos" active={isActive("/eventos-academicos")} icon="🎓">Eventos Académicos</MobileItem>
            <MobileItem href="/contacto" active={isActive("/contacto")} icon="📞">Contacto</MobileItem>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}

function MenuItem({ href, children }) {
  return (
    <Link
      href={href}
      role="menuitem"
      className="group relative flex items-center px-4 py-3 text-sm text-gray-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-green-600 hover:to-orange-600 hover:text-white rounded-md overflow-hidden"
    >
      {/* Sliding indicator bar */}
      <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-green-500 to-orange-500 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
      <span className="mr-3 h-2 w-2 rounded-full bg-orange-500 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-125" />
      {children}
    </Link>
  );
}

function MobileItem({ href, active, icon, children }) {
  return (
    <Link
      href={href}
      className={`group relative flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-300 overflow-hidden ${
        active 
          ? "bg-gradient-to-r from-green-100 to-orange-50 font-semibold text-green-700 shadow-md" 
          : "text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-orange-50 hover:text-green-700"
      }`}
    >
      {/* Active indicator */}
      {active && (
        <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-green-600 to-orange-600 rounded-r" />
      )}
      <span className="text-xl">{icon}</span>
      {children}
    </Link>
  );
}
