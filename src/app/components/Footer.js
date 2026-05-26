import Link from "next/link";
import Image from "next/image";

const FOOTER_NAV = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
  { href: "/eventos-academicos", label: "Eventos Académicos" },
  { href: "/contacto", label: "Contacto" },
];

const FOOTER_PROGRAMAS = [
  { href: "/oferta-academica/licenciaturas", label: "Licenciaturas" },
  { href: "/oferta-academica/maestrias", label: "Maestrías" },
  { href: "/oferta-academica/doctorado", label: "Doctorado" },
  { href: "/oferta-academica/diplomados", label: "Diplomados" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative mt-auto overflow-hidden bg-[#0c1208] text-white/80"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Pie de página
      </h2>

      {/* Ambient olive glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(60% 80% at 85% 0%, rgba(102,130,44,0.22) 0%, transparent 60%), radial-gradient(50% 70% at 10% 100%, rgba(246,140,36,0.10) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" aria-label="Ir al inicio" className="inline-flex items-center gap-3">
              <Image
                src="/images/ICO.png"
                alt=""
                width={52}
                height={52}
                className="h-13 w-13"
              />
              <span className="font-display text-lg font-semibold tracking-[0.02em] text-white">
                IIESBC
              </span>
            </Link>

            <p className="mt-5 max-w-sm font-display text-[0.95rem] font-medium leading-relaxed text-white/75">
              Instituto Interamericano de Estudios Superiores de Baja California.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">
              Formando profesionales de excelencia con valores y compromiso social.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-3.5 py-1.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-primary-green)]" />
              <span className="font-display text-xs font-medium tracking-[0.08em] text-white/70">
                RVOE-BC · 02PSU0128P
              </span>
            </div>
          </div>

          {/* Navegación */}
          <nav aria-label="Navegación" className="lg:col-span-2">
            <h3 className="text-eyebrow text-white/50">Navegación</h3>
            <div className="mt-3 h-px bg-white/10" />
            <ul className="mt-4 space-y-2.5">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-display text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    <span className="link-underline">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Programas */}
          <nav aria-label="Programas académicos" className="lg:col-span-2">
            <h3 className="text-eyebrow text-white/50">Programas</h3>
            <div className="mt-3 h-px bg-white/10" />
            <ul className="mt-4 space-y-2.5">
              {FOOTER_PROGRAMAS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-display text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    <span className="link-underline">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div className="lg:col-span-4">
            <h3 className="text-eyebrow text-white/50">Contacto</h3>
            <div className="mt-3 h-px bg-white/10" />

            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <IconPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/50" />
                <address className="not-italic leading-relaxed text-white/70">
                  Río Fuerte #1692, Col. Independencia Magisterial
                  <br />
                  Mexicali, B.C.
                </address>
              </li>
              <li className="flex items-start gap-3">
                <IconPhone className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/50" />
                <a
                  href="tel:+526864335197"
                  className="font-display font-medium text-white/75 transition-colors duration-300 hover:text-white"
                >
                  <span className="link-underline">(686) 433-5197</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <IconMail className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/50" />
                <a
                  href="mailto:im.iiesbc@gmail.com"
                  className="font-display font-medium text-white/75 transition-colors duration-300 hover:text-white"
                >
                  <span className="link-underline">im.iiesbc@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <IconClock className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/50" />
                <span className="leading-relaxed text-white/70">
                  Lunes a Viernes
                  <span className="mx-2 text-white/30">·</span>
                  9:00 – 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div className="text-xs text-white/50">
              <span>© {year} IIESBC. Todos los derechos reservados.</span>
              <span className="mx-2 hidden text-white/25 md:inline">·</span>
              <span className="mt-1 block md:mt-0 md:inline">
                RVOE-BC (229 a la 235) M1/13
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="mr-2 hidden text-eyebrow text-white/40 sm:inline">Síguenos</span>
              <SocialLink
                href="https://www.facebook.com/share/1D6PU7xWbP/"
                label="Facebook"
              >
                <IconFacebook className="h-4 w-4" />
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/iiesbc?igsh=NWhkYTRkZHluN3ox"
                label="Instagram"
              >
                <IconInstagram className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/65 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-primary-green)]/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-green)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c1208]"
    >
      {children}
    </a>
  );
}

function IconPin({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconPhone({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMail({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconClock({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconFacebook({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5H16.7V4.6a22 22 0 0 0-2.4-.12c-2.4 0-4 1.46-4 4.14v2.28H7.6V14h2.7v8h3.2Z" />
    </svg>
  );
}

function IconInstagram({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}
