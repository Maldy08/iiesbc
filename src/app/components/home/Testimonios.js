"use client";

import { useEffect, useState } from "react";

const testimonios = [
  {
    nombre: "María González",
    programa: "Maestría en Educación",
    foto: "👩‍🎓",
    comentario:
      "IIESBC transformó mi carrera profesional. Los profesores son excelentes y el contenido es muy aplicable.",
    estrellas: 5,
  },
  {
    nombre: "Carlos Rodríguez",
    programa: "Licenciatura en Derecho",
    foto: "👨‍⚖️",
    comentario:
      "La mejor decisión que pude tomar. El nivel académico es excepcional y las instalaciones son de primer nivel.",
    estrellas: 5,
  },
  {
    nombre: "Ana Martínez",
    programa: "Maestría en Administración",
    foto: "👩‍💼",
    comentario:
      "Gracias a IIESBC obtuve el ascenso que buscaba. La modalidad en línea me permitió estudiar y trabajar.",
    estrellas: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-1" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-[#f68c24]" : "text-[#e6e3d8]"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonios() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonios.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const active = testimonios[current];

  return (
    <section className="py-24 lg:py-32 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#66822c]" />
              <span className="text-eyebrow text-[#66822c]">Testimonios</span>
            </div>
            <h2 className="font-display text-display-lg font-bold text-[#1a1f14] text-balance mb-6">
              Lo que dicen{" "}
              <span className="text-[#66822c]">nuestros estudiantes</span>
            </h2>
            <p className="text-lg text-[#4a5240] leading-relaxed mb-10 text-pretty">
              Testimonios reales de quienes han transformado su futuro con nosotros.
            </p>

            <div className="hidden lg:flex flex-col gap-3">
              {testimonios.map((t, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-pressed={current === i}
                  className={`group flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 ring-1 ${
                    current === i
                      ? "bg-white ring-[#66822c]/30 shadow-[var(--shadow-card)]"
                      : "bg-transparent ring-transparent hover:bg-white/60 hover:ring-[var(--color-line)]"
                  }`}
                >
                  <span
                    className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl ring-1 transition-colors ${
                      current === i
                        ? "bg-[#66822c]/10 ring-[#66822c]/30"
                        : "bg-white ring-[var(--color-line)]"
                    }`}
                    aria-hidden="true"
                  >
                    {t.foto}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className={`font-display font-bold text-sm truncate ${current === i ? "text-[#1a1f14]" : "text-[#4a5240]"}`}>
                      {t.nombre}
                    </p>
                    <p className={`text-xs truncate ${current === i ? "text-[#66822c]" : "text-[#8a9180]"}`}>
                      {t.programa}
                    </p>
                  </div>
                  <span
                    className={`font-display text-sm font-semibold tabular-nums ${current === i ? "text-[#66822c]" : "text-[#8a9180]"}`}
                  >
                    0{i + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <article className="relative bg-white rounded-[2rem] p-10 lg:p-14 shadow-[var(--shadow-card-hover)] ring-1 ring-black/5 overflow-hidden">
              <svg
                className="absolute top-8 right-8 w-16 h-16 text-[#66822c]/10"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
              </svg>

              <div key={current} className="animate-fade-in">
                <Stars count={active.estrellas} />

                <blockquote className="font-display text-[#1a1f14] text-2xl lg:text-3xl font-medium leading-[1.25] mt-8 mb-10 text-balance">
                  &ldquo;{active.comentario}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4 pt-8 border-t border-[var(--color-line)]">
                  <span className="shrink-0 w-14 h-14 rounded-full bg-[#66822c]/10 flex items-center justify-center text-3xl" aria-hidden="true">
                    {active.foto}
                  </span>
                  <div className="flex-1">
                    <p className="font-display font-bold text-[#1a1f14] text-lg">{active.nombre}</p>
                    <p className="text-sm text-[#66822c] font-medium">{active.programa}</p>
                  </div>
                </div>
              </div>
            </article>

            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center gap-2">
                {testimonios.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrent(i)}
                    aria-label={`Ver testimonio ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      current === i ? "w-10 bg-[#66822c]" : "w-4 bg-[#e6e3d8] hover:bg-[#8a9180]"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrent((prev) => (prev - 1 + testimonios.length) % testimonios.length)}
                  aria-label="Testimonio anterior"
                  className="w-11 h-11 rounded-full bg-white ring-1 ring-[var(--color-line)] hover:ring-[#66822c] hover:bg-[#66822c] group transition-all duration-300 flex items-center justify-center"
                >
                  <svg className="w-4 h-4 text-[#4a5240] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => setCurrent((prev) => (prev + 1) % testimonios.length)}
                  aria-label="Siguiente testimonio"
                  className="w-11 h-11 rounded-full bg-white ring-1 ring-[var(--color-line)] hover:ring-[#66822c] hover:bg-[#66822c] group transition-all duration-300 flex items-center justify-center"
                >
                  <svg className="w-4 h-4 text-[#4a5240] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
