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
    `group relative flex items-center transition-all duration-300 px-5 font-medium tracking-wide ${
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
          className="flex items-center gap-3 transition-transform duration-300 hover:scale-[1.03]"
          aria-label="Ir al inicio"
        >
          <Image
            src="/images/ico.png"
            alt="Ícono IIESBC"
            width={scrolled ? 60 : 80}
            height={scrolled ? 60 : 80}
            priority
            sizes="(max-width: 1024px) 48px, 80px"
            className="flex-shrink-0 transition-all duration-300"
          />
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
            <Link href="/" className={navLink("/")} aria-current={isActive("/") ? "page" : undefined}>
              Inicio
              {/* Indicador de página activa */}
              <span className={`absolute bottom-0 left-0 h-1 w-full origin-left transform transition-all duration-300 ${
                isActive("/") 
                  ? "scale-x-100 bg-gradient-to-r from-green-600 to-green-500" 
                  : "scale-x-0 bg-green-600 group-hover:scale-x-100"
              }`} />
            </Link>
          </li>
          <li className="flex items-stretch">
            <Link
              href="/sobre-nosotros"
              className={navLink("/sobre-nosotros")}
              aria-current={isActive("/sobre-nosotros") ? "page" : undefined}
            >
              Sobre Nosotros
              <span className={`absolute bottom-0 left-0 h-1 w-full origin-left transform transition-all duration-300 ${
                isActive("/sobre-nosotros") 
                  ? "scale-x-100 bg-gradient-to-r from-green-600 to-green-500" 
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
              className={navLink("/oferta-academica")}
            >
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
              <span className={`absolute bottom-0 left-0 h-1 w-full origin-left transform transition-all duration-300 ${
                isActive("/oferta-academica") 
                  ? "scale-x-100 bg-gradient-to-r from-green-600 to-green-500" 
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
                "absolute left-0 mt-2 w-80 rounded-lg border border-gray-200 bg-white shadow-2xl",
                "transform transition-all duration-200 ease-out",
                dropdownOpen
                  ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                  : "pointer-events-none -translate-y-2 scale-95 opacity-0",
              ].join(" ")}
            >
              <div className="py-3">
                <div className="border-b border-gray-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-green-700">
                  Licenciaturas
                </div>
                <MenuItem href="/oferta-academica/licenciaturas/derecho">Lic. en Derecho</MenuItem>
                <MenuItem href="/oferta-academica/licenciaturas/criminologia">Lic. en Criminología</MenuItem>
                <MenuItem href="/oferta-academica/licenciaturas/ciencias-de-la-educacion">
                  Lic. en Ciencias de la Educación
                </MenuItem>

                <div className="my-2 border-t border-gray-100" />

                <div className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-green-700">Maestrías</div>
                <MenuItem href="/oferta-academica/maestrias/educacion">Maestría en Educación</MenuItem>
                <MenuItem href="/oferta-academica/maestrias/administracion-competitiva">
                  Maestría en Administración Competitiva
                </MenuItem>
                <MenuItem href="/oferta-academica/maestrias/gestion-de-politicas-publicas">
                  Maestría en Gestión de Políticas Públicas
                </MenuItem>

                <div className="my-2 border-t border-gray-100" />

                <div className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-green-700">Doctorados</div>
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
            >
              Eventos Académicos
              <span className={`absolute bottom-0 left-0 h-1 w-full origin-left transform transition-all duration-300 ${
                isActive("/eventos-academicos") 
                  ? "scale-x-100 bg-gradient-to-r from-green-600 to-green-500" 
                  : "scale-x-0 bg-green-600 group-hover:scale-x-100"
              }`} />
            </Link>
          </li>
          <li className="flex items-stretch">
            <Link
              href="/contacto"
              className={navLink("/contacto")}
              aria-current={isActive("/contacto") ? "page" : undefined}
            >
              Contacto
              <span className={`absolute bottom-0 left-0 h-1 w-full origin-left transform transition-all duration-300 ${
                isActive("/contacto") 
                  ? "scale-x-100 bg-gradient-to-r from-green-600 to-green-500" 
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
          className="rounded-md p-2 transition-colors duration-200 hover:bg-gray-100 lg:hidden"
          aria-label="Abrir menú móvil"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Abrir menú</span>
          <div className="space-y-1">
            <span
              className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                mobileMenuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                mobileMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
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
            <MobileItem href="/" active={isActive("/")}>Inicio</MobileItem>
            <MobileItem href="/sobre-nosotros" active={isActive("/sobre-nosotros")}>Sobre Nosotros</MobileItem>
            <MobileItem href="/oferta-academica" active={isActive("/oferta-academica")}>Oferta Académica</MobileItem>
            <MobileItem href="/eventos-academicos" active={isActive("/eventos-academicos")}>Eventos Académicos</MobileItem>
            <MobileItem href="/contacto" active={isActive("/contacto")}>Contacto</MobileItem>
          </div>
        </div>
      </div>
    </nav>
  );
}

function MenuItem({ href, children }) {
  return (
    <Link
      href={href}
      role="menuitem"
      className="group flex items-center px-4 py-3 text-sm text-gray-700 transition-all duration-200 hover:bg-green-600 hover:text-white"
    >
      <span className="mr-3 h-2 w-2 rounded-full bg-orange-500 opacity-0 transition-opacity group-hover:opacity-100" />
      {children}
    </Link>
  );
}

function MobileItem({ href, active, children }) {
  return (
    <Link
      href={href}
      className={`block rounded-lg px-4 py-3 transition-all duration-200 ${
        active ? "bg-green-100 font-semibold text-green-700" : "text-gray-700 hover:bg-green-50 hover:text-green-600"
      }`}
    >
      {children}
    </Link>
  );
}
