'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const VACIO = {
  matricula: '',
  folio: '',
  nombre_completo: '',
  curp: '',
  rfc: '',
  correo: '',
  diplomado_clave: '',
  diplomado_nombre: '',
  fecha_inicio: '',
  fecha_termino: '',
  horas_totales: '',
  libro_no: 1,
  estatus: 'emitida',
  fecha_emision: new Date().toISOString().slice(0, 10),
};

const claseCampo =
  'mt-1.5 w-full rounded-xl border border-[var(--color-line)] px-3.5 py-2.5 text-sm text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-primary-green)] disabled:bg-[var(--color-surface-alt)] disabled:text-[var(--color-ink-muted)]';
const claseEtiqueta = 'block text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-ink-muted)]';

function Campo({ etiqueta, hijo, ancho = '' }) {
  return (
    <label className={`${claseEtiqueta} ${ancho}`}>
      {etiqueta}
      {hijo}
    </label>
  );
}

export default function FormularioConstancia({ diplomados = [], constancia = null }) {
  const router = useRouter();
  const editando = Boolean(constancia);

  const [datos, setDatos] = useState(() => ({
    ...VACIO,
    ...(constancia || {}),
    fecha_inicio: constancia?.fecha_inicio || '',
    fecha_termino: constancia?.fecha_termino || '',
    fecha_emision: constancia?.fecha_emision || VACIO.fecha_emision,
  }));
  const [modulos, setModulos] = useState(() => {
    const base = constancia?.modulos || [];
    return Array.from({ length: 6 }, (_, i) => base[i] || '');
  });
  const [errores, setErrores] = useState([]);
  const [guardando, setGuardando] = useState(false);

  const cambiar = (campo) => (evento) => setDatos((d) => ({ ...d, [campo]: evento.target.value }));

  // Elegir un diplomado del catálogo rellena nombre, clave, horas y módulos;
  // todo sigue siendo editable por si esta generación tuvo variaciones.
  const elegirDiplomado = (evento) => {
    const clave = evento.target.value;
    const elegido = diplomados.find((d) => d.clave === clave);
    if (!elegido) {
      setDatos((d) => ({ ...d, diplomado_clave: clave }));
      return;
    }
    setDatos((d) => ({
      ...d,
      diplomado_clave: elegido.clave,
      diplomado_nombre: elegido.nombre,
      horas_totales: elegido.horas_totales ?? d.horas_totales,
    }));
    if (elegido.modulos?.length) {
      setModulos(Array.from({ length: 6 }, (_, i) => elegido.modulos[i] || ''));
    }
  };

  const guardar = async (evento) => {
    evento.preventDefault();
    setGuardando(true);
    setErrores([]);

    const cuerpo = { ...datos, modulos: modulos.filter((m) => m.trim()) };

    try {
      const url = editando
        ? `/api/constancias/${encodeURIComponent(constancia.folio)}`
        : '/api/constancias';

      const respuesta = await fetch(url, {
        method: editando ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cuerpo),
      });
      const resultado = await respuesta.json();

      if (!respuesta.ok) {
        setErrores(resultado.errores?.length ? resultado.errores : [resultado.error || 'No se pudo guardar.']);
        setGuardando(false);
        return;
      }

      router.push('/constancias');
      router.refresh();
    } catch (error) {
      setErrores([error.message]);
      setGuardando(false);
    }
  };

  return (
    <form onSubmit={guardar} className="space-y-6">
      <section className="rounded-[1.5rem] bg-white p-6 ring-1 ring-black/5 shadow-[var(--shadow-card)]">
        <h2 className="font-display text-lg font-semibold text-[var(--color-ink)]">Datos del egresado</h2>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Campo
            etiqueta="Nombre completo *"
            ancho="sm:col-span-2"
            hijo={
              <input
                type="text"
                required
                value={datos.nombre_completo}
                onChange={cambiar('nombre_completo')}
                className={claseCampo}
              />
            }
          />
          <Campo
            etiqueta="Matrícula"
            hijo={<input type="text" value={datos.matricula || ''} onChange={cambiar('matricula')} className={claseCampo} />}
          />
          <Campo
            etiqueta="CURP"
            hijo={
              <input
                type="text"
                maxLength={18}
                value={datos.curp || ''}
                onChange={cambiar('curp')}
                className={`${claseCampo} uppercase`}
              />
            }
          />
          <Campo
            etiqueta="RFC"
            hijo={
              <input
                type="text"
                maxLength={13}
                value={datos.rfc || ''}
                onChange={cambiar('rfc')}
                className={`${claseCampo} uppercase`}
              />
            }
          />
          <Campo
            etiqueta="Correo"
            hijo={<input type="email" value={datos.correo || ''} onChange={cambiar('correo')} className={claseCampo} />}
          />
        </div>
      </section>

      <section className="rounded-[1.5rem] bg-white p-6 ring-1 ring-black/5 shadow-[var(--shadow-card)]">
        <h2 className="font-display text-lg font-semibold text-[var(--color-ink)]">Diplomado</h2>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Campo
            etiqueta="Del catálogo"
            hijo={
              <select value={datos.diplomado_clave || ''} onChange={elegirDiplomado} className={claseCampo}>
                <option value="">— Capturar manualmente —</option>
                {diplomados.map((d) => (
                  <option key={d.clave} value={d.clave}>
                    {d.clave} · {d.nombre}
                  </option>
                ))}
              </select>
            }
          />
          <Campo
            etiqueta="Clave * (va en el folio)"
            hijo={
              <input
                type="text"
                required
                maxLength={10}
                value={datos.diplomado_clave || ''}
                onChange={cambiar('diplomado_clave')}
                className={`${claseCampo} uppercase`}
              />
            }
          />
          <Campo
            etiqueta="Nombre del diplomado *"
            ancho="sm:col-span-2"
            hijo={
              <input
                type="text"
                required
                value={datos.diplomado_nombre || ''}
                onChange={cambiar('diplomado_nombre')}
                className={claseCampo}
              />
            }
          />
          <Campo
            etiqueta="Fecha de inicio"
            hijo={<input type="date" value={datos.fecha_inicio || ''} onChange={cambiar('fecha_inicio')} className={claseCampo} />}
          />
          <Campo
            etiqueta="Fecha de término"
            hijo={<input type="date" value={datos.fecha_termino || ''} onChange={cambiar('fecha_termino')} className={claseCampo} />}
          />
          <Campo
            etiqueta="Horas totales *"
            hijo={
              <input
                type="number"
                min={1}
                required
                value={datos.horas_totales || ''}
                onChange={cambiar('horas_totales')}
                className={`${claseCampo} tabular-nums`}
              />
            }
          />
        </div>

        <div className="mt-6">
          <span className={claseEtiqueta}>Módulos cursados (hasta 6)</span>
          <div className="mt-2 grid gap-3 sm:grid-cols-2">
            {modulos.map((modulo, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-5 shrink-0 text-center text-sm tabular-nums text-[var(--color-ink-muted)]">{i + 1}</span>
                <input
                  type="text"
                  value={modulo}
                  onChange={(e) => setModulos((m) => m.map((v, j) => (j === i ? e.target.value : v)))}
                  placeholder={`Nombre del módulo ${i + 1}`}
                  className={`${claseCampo} mt-0`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[1.5rem] bg-white p-6 ring-1 ring-black/5 shadow-[var(--shadow-card)]">
        <h2 className="font-display text-lg font-semibold text-[var(--color-ink)]">Emisión</h2>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Campo
            etiqueta={editando ? 'Folio (no se modifica)' : 'Folio (vacío = automático)'}
            ancho="sm:col-span-2"
            hijo={
              <input
                type="text"
                value={datos.folio || ''}
                onChange={cambiar('folio')}
                disabled={editando}
                placeholder="IIESBC-2026-DI-CLAVE-CO-0001"
                className={`${claseCampo} font-mono text-xs uppercase`}
              />
            }
          />
          <Campo
            etiqueta="Fecha de emisión"
            hijo={
              <input type="date" value={datos.fecha_emision || ''} onChange={cambiar('fecha_emision')} className={claseCampo} />
            }
          />
          <Campo
            etiqueta="Libro núm."
            hijo={
              <input
                type="number"
                min={1}
                value={datos.libro_no || 1}
                onChange={cambiar('libro_no')}
                className={`${claseCampo} tabular-nums`}
              />
            }
          />
          <Campo
            etiqueta="Estatus"
            hijo={
              <select value={datos.estatus || 'emitida'} onChange={cambiar('estatus')} className={claseCampo}>
                <option value="emitida">Emitida</option>
                <option value="enviada">Enviada</option>
                <option value="cancelada">Cancelada</option>
              </select>
            }
          />
        </div>
      </section>

      {errores.length > 0 && (
        <ul className="rounded-[1.25rem] bg-[var(--color-primary-orange)]/10 p-5 text-sm text-[var(--color-primary-dark-orange)]">
          {errores.map((e) => (
            <li key={e}>• {e}</li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={guardando}
          className="rounded-full bg-[var(--color-primary-green)] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_36px_-12px_rgba(102,130,44,0.7)] transition-all hover:bg-[#556e23] disabled:opacity-60"
        >
          {guardando ? 'Guardando…' : editando ? 'Guardar cambios' : 'Emitir constancia'}
        </button>

        {editando && (
          <a
            href={`/api/constancias/${encodeURIComponent(constancia.folio)}/pdf`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--color-line)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-primary-green)] hover:text-[var(--color-primary-green)]"
          >
            Ver PDF
          </a>
        )}
      </div>
    </form>
  );
}
