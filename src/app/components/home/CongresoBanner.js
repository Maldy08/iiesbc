"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Franja del II Congreso Multidisciplinario en la página de inicio.
// Se oculta sola al terminar el congreso (fin del 5 de diciembre de 2026, hora de Mexicali).
const FIN_CONGRESO = new Date("2026-12-06T00:00:00-08:00");
const CIERRE_REGISTRO = new Date("2026-12-01T00:00:00-08:00");

export default function CongresoBanner() {
  const [estado, setEstado] = useState({ visible: true, registroAbierto: true });

  useEffect(() => {
    const ahora = new Date();
    setEstado({ visible: ahora < FIN_CONGRESO, registroAbierto: ahora < CIERRE_REGISTRO });
  }, []);

  if (!estado.visible) return null;

  return (
    <section className="relative bg-[var(--color-surface)] py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-[#0c1208] ring-1 ring-black/5 shadow-[var(--shadow-card-hover)]">
          <div
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(246,140,36,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(102,130,44,0.25),transparent_55%)]"
            aria-hidden="true"
          />
          <div className="grid lg:grid-cols-12 items-center">
            <div className="lg:col-span-8 p-8 sm:p-10 lg:p-14">
              <div className="inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-xl border border-white/15 px-4 py-1.5 rounded-full mb-7">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-[#a5c94c] opacity-75 animate-ping" />
                  <span className="relative rounded-full h-2 w-2 bg-[#a5c94c]" />
                </span>
                <span className="text-white/90 text-xs font-medium tracking-[0.18em] uppercase">
                  4 y 5 de diciembre de 2026
                </span>
              </div>

              <h2 className="font-display text-[clamp(1.5rem,6.4vw,3rem)] leading-[1.08] font-bold text-white tracking-display-tight text-balance mb-4">
                II Congreso <span className="text-[#f68c24]">Multidisciplinario</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl text-pretty mb-2">
                «El dilema del cumplimiento: navegando entre la regulación e innovación en la era de la
                Inteligencia Artificial»
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                y IX Foro de Divulgación Científica de Trabajos de Posgrado
                {estado.registroAbierto && " · Registro abierto hasta el 30 de noviembre"}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/congreso"
                  className="inline-flex items-center gap-2 bg-[#f68c24] hover:bg-[#cd751e] text-[#1a1f14] font-semibold px-7 py-3.5 rounded-full transition-all duration-300 shadow-[0_14px_36px_-12px_rgba(246,140,36,0.7)] hover:shadow-[0_16px_40px_-8px_rgba(246,140,36,0.9)]"
                >
                  Conoce el programa
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                {estado.registroAbierto && (
                  <Link
                    href="/congreso#registro"
                    className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/25 backdrop-blur-md text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a5c94c]" />
                    Registro
                  </Link>
                )}
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-4 relative h-full min-h-[22rem]">
              <Image
                src="/images/congreso-2026/justicia-ia.png"
                alt=""
                fill
                sizes="33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0c1208] via-[#0c1208]/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
