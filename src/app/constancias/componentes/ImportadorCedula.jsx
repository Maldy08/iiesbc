'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ImportadorCedula({ diplomados = [] }) {
  const router = useRouter();
  const [archivo, setArchivo] = useState(null);
  const [claveDiplomado, setClaveDiplomado] = useState('');
  const [filas, setFilas] = useState(null);
  const [resultados, setResultados] = useState(null);
  const [error, setError] = useState('');
  const [trabajando, setTrabajando] = useState(false);

  const previsualizar = async (evento) => {
    evento.preventDefault();
    if (!archivo) return;

    setTrabajando(true);
    setError('');
    setResultados(null);

    try {
      const formulario = new FormData();
      formulario.append('archivo', archivo);
      formulario.append('claveDiplomado', claveDiplomado);

      const respuesta = await fetch('/api/constancias/importar', { method: 'POST', body: formulario });
      const datos = await respuesta.json();
      if (!respuesta.ok) throw new Error(datos.error || 'No se pudo leer el archivo.');

      setFilas(datos.filas);
    } catch (e) {
      setError(e.message);
      setFilas(null);
    } finally {
      setTrabajando(false);
    }
  };

  const importar = async () => {
    const limpias = filas.filter((f) => !f.problemas.length);
    if (!limpias.length) return;

    setTrabajando(true);
    setError('');

    try {
      const respuesta = await fetch('/api/constancias/importar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filas: limpias }),
      });
      const datos = await respuesta.json();
      if (!respuesta.ok) throw new Error(datos.error || 'No se pudo importar.');

      setResultados(datos);
      setFilas(null);
      router.refresh();
    } catch (e) {
      setError(e.message);
    } finally {
      setTrabajando(false);
    }
  };

  const conProblemas = filas?.filter((f) => f.problemas.length).length ?? 0;
  const listas = filas ? filas.length - conProblemas : 0;

  return (
    <div className="mt-8 space-y-6">
      <form onSubmit={previsualizar} className="rounded-[1.5rem] bg-white p-6 ring-1 ring-black/5 shadow-[var(--shadow-card)]">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
            Archivo (.xlsx)
            <input
              type="file"
              accept=".xlsx,.xls"
              required
              onChange={(e) => {
                setArchivo(e.target.files?.[0] || null);
                setFilas(null);
                setResultados(null);
              }}
              className="mt-1.5 w-full rounded-xl border border-[var(--color-line)] px-3.5 py-2.5 text-sm font-normal normal-case tracking-normal text-[var(--color-ink)] file:mr-3 file:rounded-full file:border-0 file:bg-[var(--color-surface-alt)] file:px-3 file:py-1.5 file:text-xs file:font-medium"
            />
          </label>

          <label className="block text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
            Diplomado (para filas sin folio)
            <select
              value={claveDiplomado}
              onChange={(e) => setClaveDiplomado(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-[var(--color-line)] px-3.5 py-2.5 text-sm font-normal normal-case tracking-normal text-[var(--color-ink)] outline-none focus:border-[var(--color-primary-green)]"
            >
              <option value="">— Deducir del folio del archivo —</option>
              {diplomados.map((d) => (
                <option key={d.clave} value={d.clave}>
                  {d.clave} · {d.nombre}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button
          type="submit"
          disabled={trabajando || !archivo}
          className="mt-5 rounded-full border border-[var(--color-line)] px-5 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-primary-green)] hover:text-[var(--color-primary-green)] disabled:opacity-50"
        >
          {trabajando ? 'Leyendo…' : 'Revisar archivo'}
        </button>
      </form>

      {error && (
        <p className="rounded-[1.25rem] bg-[var(--color-primary-orange)]/10 p-5 text-sm text-[var(--color-primary-dark-orange)]">
          {error}
        </p>
      )}

      {resultados && (
        <div className="rounded-[1.5rem] bg-white p-6 ring-1 ring-black/5 shadow-[var(--shadow-card)]">
          <h2 className="font-display text-lg font-semibold text-[var(--color-ink)]">
            {resultados.importadas} {resultados.importadas === 1 ? 'constancia importada' : 'constancias importadas'}
            {resultados.fallidas > 0 && ` · ${resultados.fallidas} con error`}
          </h2>
          <ul className="mt-4 space-y-1.5 text-sm">
            {resultados.resultados.map((r) => (
              <li key={r.fila} className={r.ok ? 'text-[var(--color-ink-soft)]' : 'text-[var(--color-primary-dark-orange)]'}>
                Fila {r.fila} · {r.nombre} — {r.ok ? <span className="font-mono text-xs">{r.folio}</span> : r.error}
              </li>
            ))}
          </ul>
        </div>
      )}

      {filas && (
        <div className="rounded-[1.5rem] bg-white ring-1 ring-black/5 shadow-[var(--shadow-card)]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-line)] px-6 py-5">
            <div>
              <h2 className="font-display text-lg font-semibold text-[var(--color-ink)]">
                {filas.length} {filas.length === 1 ? 'fila leída' : 'filas leídas'}
              </h2>
              <p className="mt-0.5 text-sm text-[var(--color-ink-soft)]">
                {listas} lista{listas === 1 ? '' : 's'} para importar
                {conProblemas > 0 && ` · ${conProblemas} con datos incompletos (se omiten)`}
              </p>
            </div>

            <button
              type="button"
              onClick={importar}
              disabled={trabajando || listas === 0}
              className="rounded-full bg-[var(--color-primary-green)] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_14px_36px_-12px_rgba(102,130,44,0.7)] transition-all hover:bg-[#556e23] disabled:opacity-50"
            >
              {trabajando ? 'Importando…' : `Importar ${listas}`}
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[56rem] text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--color-line)] text-xs uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
                  <th className="px-5 py-3 font-medium tabular-nums">Fila</th>
                  <th className="px-5 py-3 font-medium">Egresado</th>
                  <th className="px-5 py-3 font-medium">Folio</th>
                  <th className="px-5 py-3 font-medium tabular-nums">Horas</th>
                  <th className="px-5 py-3 font-medium tabular-nums">Módulos</th>
                  <th className="px-5 py-3 font-medium">Estado</th>
                </tr>
              </thead>
              <tbody>
                {filas.map((f) => (
                  <tr key={f.fila} className="border-b border-[var(--color-line)] last:border-0 align-top">
                    <td className="px-5 py-3 tabular-nums text-[var(--color-ink-muted)]">{f.fila}</td>
                    <td className="px-5 py-3">
                      <span className="block font-medium text-[var(--color-ink)]">{f.nombre_completo}</span>
                      <span className="text-xs text-[var(--color-ink-muted)]">{f.diplomado_nombre}</span>
                    </td>
                    <td className="px-5 py-3 font-mono text-xs text-[var(--color-ink-soft)]">
                      {f.folio || <span className="font-sans italic text-[var(--color-ink-muted)]">automático</span>}
                    </td>
                    <td className="px-5 py-3 tabular-nums text-[var(--color-ink-soft)]">{f.horas_totales ?? '—'}</td>
                    <td className="px-5 py-3 tabular-nums text-[var(--color-ink-soft)]">{f.modulos.length}</td>
                    <td className="px-5 py-3">
                      {f.problemas.length ? (
                        <span className="text-xs text-[var(--color-primary-dark-orange)]">{f.problemas.join(' ')}</span>
                      ) : (
                        <span className="text-xs text-[#556e23]">Lista</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
