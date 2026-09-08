'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AccionesConstancia({ folio, estatus }) {
  const router = useRouter();
  const [trabajando, setTrabajando] = useState(false);

  const cambiarEstatus = async (nuevo) => {
    if (nuevo === 'cancelada') {
      const motivo = window.prompt(`Motivo de cancelación de ${folio}:`);
      if (motivo === null) return;
      await enviar(nuevo, motivo);
      return;
    }
    await enviar(nuevo);
  };

  const enviar = async (nuevo, motivo) => {
    setTrabajando(true);
    try {
      const respuesta = await fetch(`/api/constancias/${encodeURIComponent(folio)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ soloEstatus: true, estatus: nuevo, motivo }),
      });
      if (!respuesta.ok) {
        const datos = await respuesta.json();
        throw new Error(datos.error || 'No se pudo actualizar.');
      }
      router.refresh();
    } catch (error) {
      window.alert(error.message);
    } finally {
      setTrabajando(false);
    }
  };

  const claseEnlace =
    'rounded-full border border-[var(--color-line)] px-3 py-1.5 text-xs font-medium text-[var(--color-ink-soft)] transition-colors hover:border-[var(--color-primary-green)] hover:text-[var(--color-primary-green)]';

  return (
    <div className="flex flex-wrap items-center justify-end gap-1.5">
      <a href={`/api/constancias/${encodeURIComponent(folio)}/pdf`} target="_blank" rel="noreferrer" className={claseEnlace}>
        PDF
      </a>
      <Link href={`/constancias/${encodeURIComponent(folio)}/editar`} className={claseEnlace}>
        Editar
      </Link>
      <a href={`/validar/${encodeURIComponent(folio)}`} target="_blank" rel="noreferrer" className={claseEnlace}>
        Validación
      </a>

      {estatus !== 'enviada' && estatus !== 'cancelada' && (
        <button type="button" disabled={trabajando} onClick={() => cambiarEstatus('enviada')} className={claseEnlace}>
          Marcar enviada
        </button>
      )}
      {estatus !== 'cancelada' ? (
        <button type="button" disabled={trabajando} onClick={() => cambiarEstatus('cancelada')} className={claseEnlace}>
          Cancelar
        </button>
      ) : (
        <button type="button" disabled={trabajando} onClick={() => cambiarEstatus('emitida')} className={claseEnlace}>
          Reactivar
        </button>
      )}
    </div>
  );
}
