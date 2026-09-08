'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function BotonSalir() {
  const router = useRouter();
  const [saliendo, setSaliendo] = useState(false);

  const salir = async () => {
    setSaliendo(true);
    await fetch('/api/constancias/sesion', { method: 'DELETE' });
    router.replace('/constancias/login');
    router.refresh();
  };

  return (
    <button
      type="button"
      onClick={salir}
      disabled={saliendo}
      className="rounded-full border border-[var(--color-line)] px-3.5 py-1.5 text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:border-[var(--color-primary-green)] hover:text-[var(--color-primary-green)] disabled:opacity-50"
    >
      {saliendo ? 'Saliendo…' : 'Salir'}
    </button>
  );
}
