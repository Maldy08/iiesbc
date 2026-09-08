'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function FormularioAcceso({ destino }) {
  const router = useRouter();
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const [enviando, setEnviando] = useState(false);

  const enviar = async (evento) => {
    evento.preventDefault();
    setEnviando(true);
    setError('');

    try {
      const respuesta = await fetch('/api/constancias/sesion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario, contrasena }),
      });
      const datos = await respuesta.json();

      if (!respuesta.ok) throw new Error(datos.error || 'No se pudo iniciar sesión.');

      router.replace(destino);
      router.refresh();
    } catch (e) {
      setError(e.message);
      setEnviando(false);
    }
  };

  return (
    <form
      onSubmit={enviar}
      className="rounded-[1.5rem] bg-white p-8 ring-1 ring-black/5 shadow-[var(--shadow-card)]"
    >
      <label className="block text-sm font-medium text-[var(--color-ink)]">
        Usuario
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          autoComplete="username"
          required
          className="mt-1.5 w-full rounded-xl border border-[var(--color-line)] px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[var(--color-primary-green)]"
        />
      </label>

      <label className="mt-5 block text-sm font-medium text-[var(--color-ink)]">
        Contraseña
        <input
          type="password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          autoComplete="current-password"
          required
          className="mt-1.5 w-full rounded-xl border border-[var(--color-line)] px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[var(--color-primary-green)]"
        />
      </label>

      {error && (
        <p className="mt-4 rounded-xl bg-[var(--color-primary-orange)]/10 px-3.5 py-2.5 text-sm text-[var(--color-primary-dark-orange)]">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={enviando}
        className="mt-6 w-full rounded-full bg-[var(--color-primary-green)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_36px_-12px_rgba(102,130,44,0.7)] transition-all hover:bg-[#556e23] hover:shadow-[0_16px_40px_-8px_rgba(102,130,44,0.9)] disabled:opacity-60"
      >
        {enviando ? 'Entrando…' : 'Entrar'}
      </button>
    </form>
  );
}
