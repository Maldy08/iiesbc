'use client';

import { useState } from 'react';

const LARGO_MINIMO = 10;

const claseCampo =
  'mt-1.5 w-full rounded-xl border border-[var(--color-line)] px-3.5 py-2.5 text-sm text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-primary-green)]';
const claseEtiqueta = 'block text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-ink-muted)]';

export default function FormularioContrasena() {
  const [actual, setActual] = useState('');
  const [nueva, setNueva] = useState('');
  const [confirmacion, setConfirmacion] = useState('');
  const [error, setError] = useState('');
  const [listo, setListo] = useState(false);
  const [guardando, setGuardando] = useState(false);

  const guardar = async (evento) => {
    evento.preventDefault();
    setError('');
    setListo(false);

    if (nueva !== confirmacion) {
      setError('La nueva contraseña y su confirmación no coinciden.');
      return;
    }

    setGuardando(true);
    try {
      const respuesta = await fetch('/api/constancias/cuenta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ actual, nueva }),
      });
      const datos = await respuesta.json();
      if (!respuesta.ok) throw new Error(datos.error || 'No se pudo cambiar la contraseña.');

      setActual('');
      setNueva('');
      setConfirmacion('');
      setListo(true);
    } catch (e) {
      setError(e.message);
    } finally {
      setGuardando(false);
    }
  };

  return (
    <form onSubmit={guardar} className="rounded-[1.5rem] bg-white p-6 ring-1 ring-black/5 shadow-[var(--shadow-card)]">
      <label className={claseEtiqueta}>
        Contraseña actual
        <input
          type="password"
          required
          autoComplete="current-password"
          value={actual}
          onChange={(e) => setActual(e.target.value)}
          className={claseCampo}
        />
      </label>

      <label className={`${claseEtiqueta} mt-5`}>
        Nueva contraseña
        <input
          type="password"
          required
          minLength={LARGO_MINIMO}
          autoComplete="new-password"
          value={nueva}
          onChange={(e) => setNueva(e.target.value)}
          className={claseCampo}
        />
      </label>
      <p className="mt-1.5 text-xs text-[var(--color-ink-muted)]">Mínimo {LARGO_MINIMO} caracteres.</p>

      <label className={`${claseEtiqueta} mt-5`}>
        Confirmar nueva contraseña
        <input
          type="password"
          required
          minLength={LARGO_MINIMO}
          autoComplete="new-password"
          value={confirmacion}
          onChange={(e) => setConfirmacion(e.target.value)}
          className={claseCampo}
        />
      </label>

      {error && (
        <p className="mt-5 rounded-xl bg-[var(--color-primary-orange)]/10 px-3.5 py-2.5 text-sm text-[var(--color-primary-dark-orange)]">
          {error}
        </p>
      )}
      {listo && (
        <p className="mt-5 rounded-xl bg-[var(--color-primary-green)]/10 px-3.5 py-2.5 text-sm text-[#556e23]">
          Contraseña actualizada. Úsala la próxima vez que entres.
        </p>
      )}

      <button
        type="submit"
        disabled={guardando}
        className="mt-6 rounded-full bg-[var(--color-primary-green)] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_36px_-12px_rgba(102,130,44,0.7)] transition-all hover:bg-[#556e23] disabled:opacity-60"
      >
        {guardando ? 'Guardando…' : 'Cambiar contraseña'}
      </button>
    </form>
  );
}
