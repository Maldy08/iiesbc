'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const claseCampo =
  'mt-1.5 w-full rounded-xl border border-[var(--color-line)] px-3.5 py-2.5 text-sm text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-primary-green)]';
const claseEtiqueta = 'block text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-ink-muted)]';

export default function FormularioDiplomado() {
  const router = useRouter();
  const [clave, setClave] = useState('');
  const [nombre, setNombre] = useState('');
  const [horas, setHoras] = useState('');
  const [modulos, setModulos] = useState(Array(6).fill(''));
  const [error, setError] = useState('');
  const [guardando, setGuardando] = useState(false);

  const guardar = async (evento) => {
    evento.preventDefault();
    setGuardando(true);
    setError('');

    try {
      const respuesta = await fetch('/api/constancias/diplomados', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clave,
          nombre,
          horasTotales: Number(horas) || null,
          modulos: modulos.filter((m) => m.trim()),
        }),
      });
      const datos = await respuesta.json();
      if (!respuesta.ok) throw new Error(datos.error || 'No se pudo guardar.');

      setClave('');
      setNombre('');
      setHoras('');
      setModulos(Array(6).fill(''));
      router.refresh();
    } catch (e) {
      setError(e.message);
    } finally {
      setGuardando(false);
    }
  };

  return (
    <form onSubmit={guardar} className="h-fit rounded-[1.5rem] bg-white p-6 ring-1 ring-black/5 shadow-[var(--shadow-card)]">
      <h2 className="font-display text-lg font-semibold text-[var(--color-ink)]">Agregar o actualizar</h2>
      <p className="mt-1 text-xs text-[var(--color-ink-muted)]">
        Si la clave ya existe, se sobrescriben nombre, horas y módulos.
      </p>

      <label className={`${claseEtiqueta} mt-5`}>
        Clave *
        <input
          type="text"
          required
          maxLength={10}
          value={clave}
          onChange={(e) => setClave(e.target.value.toUpperCase())}
          placeholder="NATCC"
          className={`${claseCampo} font-mono uppercase`}
        />
      </label>

      <label className={`${claseEtiqueta} mt-4`}>
        Nombre *
        <input type="text" required value={nombre} onChange={(e) => setNombre(e.target.value)} className={claseCampo} />
      </label>

      <label className={`${claseEtiqueta} mt-4`}>
        Horas totales
        <input
          type="number"
          min={1}
          value={horas}
          onChange={(e) => setHoras(e.target.value)}
          className={`${claseCampo} tabular-nums`}
        />
      </label>

      <span className={`${claseEtiqueta} mt-5 block`}>Módulos</span>
      <div className="mt-2 space-y-2">
        {modulos.map((modulo, i) => (
          <input
            key={i}
            type="text"
            value={modulo}
            onChange={(e) => setModulos((m) => m.map((v, j) => (j === i ? e.target.value : v)))}
            placeholder={`Módulo ${i + 1}`}
            className={`${claseCampo} mt-0`}
          />
        ))}
      </div>

      {error && <p className="mt-4 text-sm text-[var(--color-primary-dark-orange)]">{error}</p>}

      <button
        type="submit"
        disabled={guardando}
        className="mt-5 w-full rounded-full bg-[var(--color-primary-green)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#556e23] disabled:opacity-60"
      >
        {guardando ? 'Guardando…' : 'Guardar diplomado'}
      </button>
    </form>
  );
}
