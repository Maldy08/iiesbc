"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const NAV_OFERTA = [
  {
    label: "Licenciaturas",
    items: [
      { href: "/oferta-academica/licenciaturas/derecho", name: "Derecho" },
      { href: "/oferta-academica/licenciaturas/criminologia", name: "Criminología" },
      { href: "/oferta-academica/licenciaturas/ciencias-de-la-educacion", name: "Ciencias de la Educación" },
    ],
  },
  {
    label: "Maestrías",
    items: [
      { href: "/oferta-academica/maestrias/educacion", name: "Educación" },
      { href: "/oferta-academica/maestrias/administracion-competitiva", name: "Administración Competitiva" },
      { href: "/oferta-academica/maestrias/gestion-de-politicas-publicas", name: "Gestión de Políticas Públicas" },
    ],
  },
  {
    label: "Doctorado",
    items: [
      {
        href: "/oferta-academica/doctorado/administracion-de-instituciones-educativas",
        name: "Administración de Instituciones Educativas",
      },
    ],
  },
  {
    label: "Diplomados",
    items: [
      { href: "/oferta-academica/diplomados/desarrollo-del-lenguaje", name: "Desarrollo del Lenguaje" },
      { href: "/oferta-academica/diplomados/transtornos-del-neurodesarrollo", name: "Trastornos del Neurodesarrollo" },
    ],
  },
];

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
  { href: "/eventos-academicos", label: "Eventos Académicos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileOfertaOpen, setMobileOfertaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  const isActive = useCallback(
    (href) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/")),
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
      if (!dropdownRef.current.contains(e.target)) setDropdownOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  // Close with Escape
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

  // Close on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileOfertaOpen(false);
  }, [pathname]);

  const ofertaActive = pathname.startsWith("/oferta-academica");

  const desktopLinkClass = (active) =>
    [
      "relative inline-flex items-center px-1 py-1 font-display text-[0.9rem] font-medium tracking-[0.01em] transition-colors duration-300",
      active
        ? "text-[var(--color-primary-green)]"
        : "text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]",
    ].join(" ");

  return (
    <nav
      className={[
        "sticky top-0 z-50 transition-all duration-300",
        "border-b backdrop-blur-md supports-[backdrop-filter]:backdrop-blur-md",
        scrolled
          ? "border-[var(--color-line)] bg-white/95 py-2 shadow-[var(--shadow-card)]"
          : "border-[var(--color-line)]/60 bg-white/80 py-3",
      ].join(" ")}
      aria-label="Navegación principal"
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 rounded-md bg-white px-3 py-2 text-sm font-medium text-[var(--color-ink)] shadow-[var(--shadow-card)]"
      >
        Saltar al contenido
      </a>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group/logo flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
          aria-label="Ir al inicio"
        >
          <Image
            src="/images/ICO.png"
            alt="Ícono IIESBC"
            width={scrolled ? 52 : 68}
            height={scrolled ? 52 : 68}
            priority
            sizes="(max-width: 1024px) 48px, 68px"
            className="flex-shrink-0 transition-all duration-300"
          />
          <Image
            src="/images/iiesbc.png"
            alt="Nombre IIESBC"
            width={scrolled ? 140 : 180}
            height={36}
            sizes="(max-width: 1024px) 120px, 180px"
            className="hidden h-9 w-auto object-contain transition-all duration-300 sm:block"
          />
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-7 lg:flex">
          <li>
            <DesktopLink href="/" active={isActive("/")} className={desktopLinkClass(isActive("/"))}>
              Inicio
            </DesktopLink>
          </li>
          <li>
            <DesktopLink
              href="/sobre-nosotros"
              active={isActive("/sobre-nosotros")}
              className={desktopLinkClass(isActive("/sobre-nosotros"))}
            >
              Sobre Nosotros
            </DesktopLink>
          </li>

          {/* Oferta Académica dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdownOpen}
              aria-controls="menu-oferta"
              onClick={() => setDropdownOpen((v) => !v)}
              className={[
                desktopLinkClass(ofertaActive),
                "group gap-1.5",
              ].join(" ")}
            >
              <span className="relative">
                Oferta Académica
                <span
                  className={[
                    "absolute -bottom-1 left-0 h-[1.5px] bg-[var(--color-primary-green)] transition-all duration-300",
                    ofertaActive || dropdownOpen ? "w-full" : "w-0 group-hover:w-full",
                  ].join(" ")}
                />
              </span>
              <svg
                className={`h-3.5 w-3.5 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div
              id="menu-oferta"
              role="menu"
              aria-label="Oferta Académica"
              className={[
                "absolute left-1/2 top-[calc(100%+0.75rem)] w-[min(760px,90vw)] -translate-x-1/2",
                "rounded-2xl border border-[var(--color-line)] bg-white",
                "shadow-[var(--shadow-ring)] overflow-hidden",
                "transition-all duration-300 ease-out",
                dropdownOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0",
              ].join(" ")}
            >
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 p-8 md:grid-cols-4">
                {NAV_OFERTA.map((col) => (
                  <div key={col.label} className="min-w-0">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="text-eyebrow text-[var(--color-ink-muted)]">{col.label}</span>
                    </div>
                    <div className="mb-3 h-px bg-[var(--color-line)]" />
                    <ul className="space-y-1.5">
                      {col.items.map((it) => (
                        <li key={it.href}>
                          <Link
                            href={it.href}
                            role="menuitem"
                            className="group/item flex items-start gap-2 rounded-md py-1.5 font-display text-[0.875rem] font-medium leading-snug text-[var(--color-ink)] transition-colors duration-300 hover:text-[var(--color-primary-green)]"
                          >
                            <span className="mt-[0.5em] inline-block h-1.5 w-1.5 flex-shrink-0 scale-0 rounded-full bg-[var(--color-primary-green)] transition-transform duration-300 group-hover/item:scale-100" />
                            <span className="link-underline">{it.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-[var(--color-line)] bg-[var(--color-surface)] px-8 py-4">
                <Link
                  href="/oferta-academica"
                  role="menuitem"
                  className="font-display text-sm font-semibold text-[var(--color-primary-green)]"
                >
                  <span className="link-underline">Ver toda la oferta académica →</span>
                </Link>
                <Link
                  href="/eventos-academicos"
                  role="menuitem"
                  className="hidden font-display text-sm font-medium text-[var(--color-ink-soft)] transition-colors duration-300 hover:text-[var(--color-ink)] sm:inline"
                >
                  <span className="link-underline">Próximos eventos →</span>
                </Link>
              </div>
            </div>
          </li>

          <li>
            <DesktopLink
              href="/eventos-academicos"
              active={isActive("/eventos-academicos")}
              className={desktopLinkClass(isActive("/eventos-academicos"))}
            >
              Eventos Académicos
            </DesktopLink>
          </li>
          <li>
            <DesktopLink
              href="/contacto"
              active={isActive("/contacto")}
              className={desktopLinkClass(isActive("/contacto"))}
            >
              Contacto
            </DesktopLink>
          </li>
        </ul>

        {/* Right side: CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/oferta-academica"
            className={[
              "hidden items-center gap-2 rounded-full bg-[var(--color-primary-green)] px-5 py-2.5",
              "font-display text-sm font-semibold text-white",
              "shadow-[var(--shadow-card)] transition-all duration-300",
              "hover:-translate-y-0.5 hover:bg-[#556e23] hover:shadow-[var(--shadow-card-hover)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-green)]/40 focus-visible:ring-offset-2",
              "lg:inline-flex",
            ].join(" ")}
          >
            Inscríbete
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <button
            onClick={() => {
              setMobileMenuOpen((v) => !v);
              setDropdownOpen(false);
            }}
            className="group relative rounded-lg p-2 text-[var(--color-ink)] transition-colors duration-300 hover:bg-[var(--color-surface-alt)] lg:hidden"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="space-y-[5px]">
              <span
                className={`block h-[1.5px] w-6 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "translate-y-[6.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-6 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-6 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-h-[80vh] overflow-y-auto border-t border-[var(--color-line)] bg-white/98 px-4 py-4 supports-[backdrop-filter]:backdrop-blur-md sm:px-6">
          <ul className="divide-y divide-[var(--color-line)]">
            {NAV_LINKS.slice(0, 2).map((l) => (
              <li key={l.href}>
                <MobileLink href={l.href} active={isActive(l.href)}>
                  {l.label}
                </MobileLink>
              </li>
            ))}

            {/* Oferta Académica accordion */}
            <li>
              <button
                type="button"
                onClick={() => setMobileOfertaOpen((v) => !v)}
                aria-expanded={mobileOfertaOpen}
                className={[
                  "relative flex w-full items-center justify-between py-3 pl-4 pr-2 text-left font-display text-[0.95rem] font-medium transition-colors duration-300",
                  ofertaActive ? "text-[var(--color-primary-green)]" : "text-[var(--color-ink)]",
                ].join(" ")}
              >
                {ofertaActive && (
                  <span className="absolute left-0 top-1/2 h-6 w-[3px] -translate-y-1/2 rounded-full bg-[var(--color-primary-green)]" />
                )}
                <span>Oferta Académica</span>
                <svg
                  className={`h-4 w-4 text-[var(--color-ink-muted)] transition-transform duration-300 ${
                    mobileOfertaOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  mobileOfertaOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0">
                  <div className="space-y-4 pb-4 pl-4 pr-2 pt-1">
                    {NAV_OFERTA.map((col) => (
                      <div key={col.label}>
                        <div className="text-eyebrow mb-2 text-[var(--color-ink-muted)]">{col.label}</div>
                        <ul className="space-y-1 border-l border-[var(--color-line)] pl-3">
                          {col.items.map((it) => (
                            <li key={it.href}>
                              <Link
                                href={it.href}
                                className="block py-1.5 font-display text-[0.875rem] font-medium leading-snug text-[var(--color-ink)] transition-colors duration-300 hover:text-[var(--color-primary-green)]"
                              >
                                {it.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <Link
                      href="/oferta-academica"
                      className="inline-block pt-1 font-display text-sm font-semibold text-[var(--color-primary-green)]"
                    >
                      <span className="link-underline">Ver toda la oferta académica →</span>
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            {NAV_LINKS.slice(2).map((l) => (
              <li key={l.href}>
                <MobileLink href={l.href} active={isActive(l.href)}>
                  {l.label}
                </MobileLink>
              </li>
            ))}
          </ul>

          <Link
            href="/oferta-academica"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-primary-green)] px-5 py-3 font-display text-sm font-semibold text-white shadow-[var(--shadow-card)] transition-colors duration-300 hover:bg-[#556e23]"
          >
            Inscríbete
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}

function DesktopLink({ href, active, className, children }) {
  return (
    <Link href={href} className={className + " group"} aria-current={active ? "page" : undefined}>
      <span className="relative">
        {children}
        <span
          className={[
            "absolute -bottom-1 left-0 h-[1.5px] bg-[var(--color-primary-green)] transition-all duration-300",
            active ? "w-full" : "w-0 group-hover:w-full",
          ].join(" ")}
        />
      </span>
    </Link>
  );
}

function MobileLink({ href, active, children }) {
  return (
    <Link
      href={href}
      className={[
        "relative flex items-center py-3 pl-4 pr-2 font-display text-[0.95rem] font-medium transition-colors duration-300",
        active
          ? "text-[var(--color-primary-green)]"
          : "text-[var(--color-ink)] hover:text-[var(--color-primary-green)]",
      ].join(" ")}
      aria-current={active ? "page" : undefined}
    >
      {active && (
        <span className="absolute left-0 top-1/2 h-6 w-[3px] -translate-y-1/2 rounded-full bg-[var(--color-primary-green)]" />
      )}
      {children}
    </Link>
  );
}
