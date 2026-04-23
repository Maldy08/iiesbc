import Image from "next/image";

export const metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto con IIESBC. Información sobre ubicaciones, teléfonos y atención para resolver tus dudas.',
};

export default function Contacto() {
  return (
    <main id="main" className="relative isolate bg-[var(--color-surface)]">
      {/* ─────────────────────────── Hero ─────────────────────────── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/contacto/contacto.jpg"
            alt="Contacto IIESBC"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1208]/85 via-[#0c1208]/60 to-[#0c1208]/92" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(246,140,36,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(102,130,44,0.22),transparent_55%)]" />
        </div>

        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
          <span className="absolute top-[24%] left-[18%] w-1.5 h-1.5 rounded-full bg-white/50 animate-float-slow" />
          <span className="absolute top-[42%] right-[22%] w-2 h-2 rounded-full bg-[#f68c24]/45 animate-float-medium" style={{ animationDelay: "1.2s" }} />
          <span className="absolute bottom-[30%] left-[44%] w-1.5 h-1.5 rounded-full bg-[#a5c94c]/60 animate-float-fast" style={{ animationDelay: "0.6s" }} />
        </div>

        <div className="relative min-h-[62vh] flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-28">
            <div className="max-w-3xl animate-fade-in-up">
              <div className="inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-xl border border-white/15 px-4 py-1.5 rounded-full mb-10">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-[#a5c94c] opacity-75 animate-ping" />
                  <span className="relative rounded-full h-2 w-2 bg-[#a5c94c]" />
                </span>
                <span className="text-white/90 text-xs font-medium tracking-[0.18em] uppercase">
                  Estamos para ti
                </span>
              </div>

              <h1 className="font-display font-extrabold text-white text-display-xl tracking-display-tight text-balance mb-8">
                <span className="text-[#f68c24]">Contacto</span>
              </h1>

              <div className="relative w-40 h-px bg-gradient-to-r from-[#66822c] via-[#f68c24] to-transparent mb-10 overflow-hidden">
                <span className="absolute inset-0 bg-white/60 animate-shimmer" />
              </div>

              <p className="text-white/85 text-lg lg:text-xl leading-relaxed max-w-2xl text-pretty">
                Con gusto te atenderemos. Estamos aquí para resolver tus dudas y acompañarte
                en cada paso de tu camino académico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── Información de Contacto ─────────────── */}
      <section className="relative py-24 lg:py-32 bg-[var(--color-surface)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#66822c]" />
              <span className="text-eyebrow text-[#66822c]">Directorio</span>
            </div>
            <h2 className="font-display text-display-lg font-bold text-[#1a1f14] text-balance mb-6">
              <span className="text-[#66822c]">Información</span> de Contacto
            </h2>
            <p className="text-lg text-[#4a5240] leading-relaxed text-pretty">
              Estamos aquí para resolver tus dudas y ayudarte en tu camino académico.
            </p>
          </div>

          {/* Tarjetas de contacto */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-16">
            <ContactCard
              eyebrow="Teléfono"
              accent="#66822c"
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              }
              href="tel:6865649010"
              label="(686) 564-9010"
            />

            <ContactCard
              eyebrow="Email principal"
              accent="#f68c24"
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              }
              href="mailto:im.iiesbc@gmail.com"
              label="im.iiesbc@gmail.com"
              breakAll
            />

            <ContactCard
              eyebrow="Email alternativo"
              accent="#66822c"
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              }
              href="mailto:Ivelezg@yahoo.com.mx"
              label="Ivelezg@yahoo.com.mx"
              breakAll
            />

            <ContactCard
              eyebrow="Dirección"
              accent="#f68c24"
              icon={
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </>
              }
              href="https://www.google.com/maps/dir//Independencia,+Mexicali,+B.C./@32.6345864,-115.438891,19.03z"
              external
              label={
                <>
                  Río Fuerte #1692<br />
                  Col. Independencia Magisterial<br />
                  Mexicali, B.C.
                </>
              }
              align="start"
            />

            <ContactCard
              eyebrow="WhatsApp"
              accent="#66822c"
              icon={
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              }
              iconFilled
              href="http://wa.me/6864335197"
              external
              label="Solicitar información"
            />

            <ContactCard
              eyebrow="Registro"
              accent="#f68c24"
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              }
              href="https://forms.gle/4UXSWinKqFnwdcne6"
              external
              label="Ir al formulario"
              subtitle="Déjanos tus datos, nos ponemos en contacto contigo."
            />
          </div>

          {/* Mapa */}
          <div className="relative">
            <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-px w-10 bg-[#f68c24]" />
                  <span className="text-eyebrow text-[#f68c24]">Ubicación</span>
                </div>
                <h3 className="font-display text-display-md font-bold text-[#1a1f14] tracking-display-tight text-balance">
                  Mapa y cómo llegar
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=R%C3%ADo%20Fuerte%201692%2C%20Independencia%20Magisterial%2C%20Mexicali%2C%20B.C."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-[#66822c] hover:bg-[#556e23] text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 shadow-[0_12px_32px_-10px_rgba(102,130,44,0.8)] hover:shadow-[0_16px_40px_-8px_rgba(102,130,44,0.9)] hover:-translate-y-0.5"
                >
                  Cómo llegar
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="https://www.google.com/maps?q=32.635013%2C-115.438566"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white hover:bg-[var(--color-surface-alt)] text-[#1a1f14] px-6 py-3 rounded-full font-semibold text-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>

            <div className="relative rounded-[2rem] overflow-hidden ring-1 ring-black/5 shadow-[var(--shadow-card-hover)] bg-white p-2">
              <div className="relative rounded-[1.5rem] overflow-hidden">
                <iframe
                  title="Mapa IIESBC"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d503.0740792684633!2d-115.43856581383808!3d32.63501311725772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDM4JzA1LjciTiAxMTXCsDI2JzE4LjIiVw!5e0!3m2!1ses!2sus!4v1537078115223"
                  width="100%"
                  height="720"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[420px] md:h-[560px] lg:h-[680px] block"
                />

                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-full shadow-[var(--shadow-ring)] ring-1 ring-black/5 px-5 py-3 flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#66822c]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#66822c]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="text-eyebrow text-[#66822c]">Encuéntranos aquí</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── Redes Sociales ─────────────────── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/contacto/redes-sociales.jpg"
            alt="Redes Sociales IIESBC"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1208]/85 via-[#0c1208]/70 to-[#0c1208]/92" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(246,140,36,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(102,130,44,0.22),transparent_55%)]" />
        </div>

        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
          <span className="absolute top-[28%] left-[20%] w-1.5 h-1.5 rounded-full bg-white/50 animate-float-slow" />
          <span className="absolute bottom-[30%] right-[22%] w-2 h-2 rounded-full bg-[#f68c24]/45 animate-float-medium" style={{ animationDelay: "1.2s" }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#f68c24]" />
              <span className="text-eyebrow text-[#f68c24]">Comunidad</span>
            </div>
            <h2 className="font-display text-display-lg font-bold text-white tracking-display-tight text-balance mb-6">
              Síguenos en <span className="text-[#f68c24]">Redes Sociales</span>
            </h2>
            <p className="text-white/80 text-lg lg:text-xl leading-relaxed text-pretty">
              Mantente al día con nuestras novedades, eventos y contenido educativo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 mb-12">
            <SocialCard
              name="Facebook"
              handle="facebook.com/iiesbc"
              href="https://www.facebook.com/share/1D6PU7xWbP/"
              icon={
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              }
            />

            <SocialCard
              name="Instagram"
              handle="@iiesbc"
              href="https://www.instagram.com/iiesbc?igsh=NWhkYTRkZHluN3ox"
              icon={
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              }
            />
          </div>

          <div className="bg-white/8 backdrop-blur-xl rounded-[1.75rem] p-8 lg:p-10 ring-1 ring-white/15">
            <p className="text-white/90 text-lg leading-relaxed text-pretty">
              ¿Tienes preguntas sobre nuestros programas académicos?{" "}
              <span className="font-semibold text-[#f68c24]">¡Contáctanos hoy mismo!</span>{" "}
              Estamos listos para ayudarte a alcanzar tus metas educativas.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────── Horarios de Atención ─────────────────── */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#66822c]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-[#f68c24]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#66822c]" />
              <span className="text-eyebrow text-[#66822c]">Atención</span>
            </div>
            <h2 className="font-display text-display-lg font-bold text-[#1a1f14] tracking-display-tight text-balance">
              Horarios de <span className="text-[#f68c24]">Atención</span>
            </h2>
          </div>

          <div className="relative bg-[var(--color-surface)] rounded-[2rem] p-8 md:p-12 lg:p-14 ring-1 ring-black/5 shadow-[var(--shadow-card-hover)]">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <HorarioCard
                accent="#66822c"
                dia="Lunes a Viernes"
                horario="9:00 AM – 7:00 PM"
              />
              <HorarioCard
                accent="#f68c24"
                dia="Sábados"
                horario="9:00 AM – 2:00 PM"
              />
            </div>

            <div className="mt-10 pt-8 border-t border-[var(--color-line)]">
              <p className="text-[#4a5240] leading-relaxed text-pretty">
                <span className="font-display font-semibold text-[#1a1f14]">Nota:</span>{" "}
                También puedes escribirnos por correo electrónico en cualquier momento.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ────────────────────────── Subcomponentes ────────────────────────── */

function ContactCard({ eyebrow, accent, icon, iconFilled, href, label, subtitle, breakAll, external, align = "center" }) {
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      {...linkProps}
      className="group relative block bg-white rounded-[1.5rem] p-6 lg:p-7 ring-1 ring-black/5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1"
    >
      <span
        className="absolute top-0 left-6 right-6 h-px"
        style={{ backgroundColor: `${accent}40` }}
      />

      <div className={`flex ${align === "start" ? "items-start" : "items-center"} gap-5`}>
        <span
          className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundColor: `${accent}15` }}
        >
          <svg
            className="w-6 h-6"
            fill={iconFilled ? accent : "none"}
            stroke={iconFilled ? "none" : accent}
            viewBox="0 0 24 24"
          >
            {icon}
          </svg>
        </span>

        <div className="flex-1 min-w-0">
          <p
            className="text-eyebrow mb-1.5"
            style={{ color: accent }}
          >
            {eyebrow}
          </p>
          {subtitle && (
            <p className="text-sm text-[#8a9180] leading-relaxed mb-1.5">{subtitle}</p>
          )}
          <span
            className={`font-display text-lg lg:text-xl font-bold text-[#1a1f14] leading-snug block transition-colors duration-300 group-hover:text-[color:var(--hover-color,#1a1f14)] ${breakAll ? "break-all" : ""}`}
            style={{ "--hover-color": accent }}
          >
            {label}
          </span>
        </div>

        <span
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
          style={{ backgroundColor: `${accent}15` }}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke={accent} strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </div>
    </a>
  );
}

function SocialCard({ name, handle, href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-white/8 hover:bg-white/12 backdrop-blur-xl rounded-[1.5rem] p-6 lg:p-8 ring-1 ring-white/15 hover:ring-white/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
    >
      <div className="flex items-center gap-5">
        <span className="shrink-0 w-16 h-16 rounded-2xl bg-white/10 ring-1 ring-white/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            {icon}
          </svg>
        </span>
        <div className="flex-1">
          <p className="font-display text-xl lg:text-2xl font-bold text-white tracking-display-tight">
            {name}
          </p>
          <p className="text-sm text-white/70 mt-1">{handle}</p>
        </div>
        <span className="shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </div>
    </a>
  );
}

function HorarioCard({ accent, dia, horario }) {
  return (
    <div className="group flex items-center gap-5 bg-white rounded-[1.25rem] p-6 ring-1 ring-black/5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500">
      <span
        className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundColor: `${accent}15` }}
      >
        <svg className="w-6 h-6" fill="none" stroke={accent} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </span>
      <div>
        <p className="text-eyebrow mb-1.5" style={{ color: accent }}>
          {dia}
        </p>
        <p className="font-display text-xl lg:text-2xl font-bold text-[#1a1f14] tracking-display-tight tabular-nums">
          {horario}
        </p>
      </div>
    </div>
  );
}
