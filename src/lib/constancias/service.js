// Acceso a datos del módulo de constancias.
//
// Todo pasa por supabaseAdmin (service-role): las tablas tienen RLS activo sin
// políticas, así que la anon key del navegador no las alcanza. Este archivo es
// solo de servidor — nunca importarlo desde un componente cliente.

import { supabaseAdmin } from '@/lib/supabase/server';
import { construirFolio, desglosarFolio, normalizarFolio } from './folio';

const CAMPOS_PUBLICOS = 'folio, nombre_completo, diplomado_nombre, estatus';

// --- diplomados --------------------------------------------------------------

export async function listarDiplomados({ soloActivos = true } = {}) {
  let consulta = supabaseAdmin.from('diplomados').select('*').order('nombre');
  if (soloActivos) consulta = consulta.eq('activo', true);

  const { data, error } = await consulta;
  if (error) throw new Error(`No se pudieron cargar los diplomados: ${error.message}`);
  return data;
}

export async function guardarDiplomado({ clave, nombre, horasTotales, modulos }) {
  const { data, error } = await supabaseAdmin
    .from('diplomados')
    .upsert(
      {
        clave: String(clave).trim().toUpperCase(),
        nombre: String(nombre).trim(),
        horas_totales: horasTotales ?? null,
        modulos: (modulos || []).filter((m) => String(m || '').trim()).slice(0, 6),
      },
      { onConflict: 'clave' }
    )
    .select()
    .single();

  if (error) throw new Error(`No se pudo guardar el diplomado: ${error.message}`);
  return data;
}

// --- constancias -------------------------------------------------------------

export async function listarConstancias({
  busqueda = '',
  estatus = '',
  diplomado = '',
  pagina = 1,
  porPagina = 25,
} = {}) {
  let consulta = supabaseAdmin
    .from('constancias')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false });

  const termino = String(busqueda).trim();
  if (termino) {
    const patron = `%${termino}%`;
    consulta = consulta.or(
      `folio.ilike.${patron},nombre_completo.ilike.${patron},matricula.ilike.${patron},curp.ilike.${patron}`
    );
  }
  if (estatus) consulta = consulta.eq('estatus', estatus);
  if (diplomado) consulta = consulta.eq('diplomado_clave', diplomado);

  const desde = (pagina - 1) * porPagina;
  consulta = consulta.range(desde, desde + porPagina - 1);

  const { data, error, count } = await consulta;
  if (error) throw new Error(`No se pudieron cargar las constancias: ${error.message}`);
  return { constancias: data, total: count ?? 0, pagina, porPagina };
}

export async function obtenerConstancia(folio) {
  const { data, error } = await supabaseAdmin
    .from('constancias')
    .select('*')
    .eq('folio', normalizarFolio(folio))
    .maybeSingle();

  if (error) throw new Error(`No se pudo cargar la constancia: ${error.message}`);
  return data;
}

/**
 * Consulta de la página pública de validación: devuelve solo los tres campos
 * que se pueden mostrar sin exponer datos personales (CURP, RFC, correo...).
 */
export async function validarFolioPublico(folio) {
  const { data, error } = await supabaseAdmin
    .from('constancias')
    .select(CAMPOS_PUBLICOS)
    .eq('folio', normalizarFolio(folio))
    .maybeSingle();

  if (error) throw new Error(`No se pudo validar el folio: ${error.message}`);
  if (!data) return { valida: false, motivo: 'inexistente' };
  if (data.estatus === 'cancelada') {
    return { valida: false, motivo: 'cancelada', constancia: data };
  }
  return {
    valida: true,
    constancia: {
      folio: data.folio,
      nombre_completo: data.nombre_completo,
      diplomado_nombre: data.diplomado_nombre,
    },
  };
}

function limpiarDatos(datos) {
  const texto = (v) => {
    const s = String(v ?? '').trim();
    return s === '' ? null : s;
  };

  const modulos = (datos.modulos || [])
    .map((m) => String(m ?? '').trim())
    .filter(Boolean)
    .slice(0, 6);

  return {
    matricula: texto(datos.matricula),
    nombre_completo: texto(datos.nombre_completo),
    curp: texto(datos.curp)?.toUpperCase() ?? null,
    rfc: texto(datos.rfc)?.toUpperCase() ?? null,
    correo: texto(datos.correo)?.toLowerCase() ?? null,
    diplomado_clave: texto(datos.diplomado_clave)?.toUpperCase() ?? null,
    diplomado_nombre: texto(datos.diplomado_nombre),
    fecha_inicio: texto(datos.fecha_inicio),
    fecha_termino: texto(datos.fecha_termino),
    horas_totales: Number(datos.horas_totales) || null,
    modulos,
    libro_no: Number(datos.libro_no) || 1,
    estatus: texto(datos.estatus) || 'emitida',
    fecha_emision: texto(datos.fecha_emision) || new Date().toISOString().slice(0, 10),
  };
}

export function revisarDatos(datos) {
  const errores = [];
  if (!datos.nombre_completo) errores.push('El nombre completo es obligatorio.');
  if (!datos.diplomado_nombre) errores.push('El nombre del diplomado es obligatorio.');
  if (!datos.diplomado_clave) errores.push('La clave del diplomado es obligatoria (se usa en el folio).');
  if (!datos.horas_totales) errores.push('Las horas totales deben ser un número mayor a cero.');
  if (!datos.modulos.length) errores.push('Captura al menos un módulo.');
  if (datos.curp && !/^[A-Z0-9]{18}$/.test(datos.curp)) errores.push('La CURP debe tener 18 caracteres.');
  return errores;
}

/**
 * Reserva el siguiente consecutivo para (año, diplomado) y arma el folio.
 * El consecutivo lo entrega Postgres de forma atómica, así que dos emisiones
 * simultáneas no pueden quedarse con el mismo número.
 */
export async function generarFolio({ clave, anio }) {
  const { data, error } = await supabaseAdmin.rpc('siguiente_consecutivo_constancia', {
    p_anio: anio,
    p_clave: clave.toUpperCase(),
  });

  if (error) throw new Error(`No se pudo reservar el folio: ${error.message}`);
  return construirFolio({ anio, clave, consecutivo: data });
}

export async function crearConstancia(entrada, { emitidaPor } = {}) {
  const datos = limpiarDatos(entrada);
  const errores = revisarDatos(datos);
  if (errores.length) {
    const error = new Error(errores.join(' '));
    error.errores = errores;
    error.status = 400;
    throw error;
  }

  const anio = Number(datos.fecha_emision.slice(0, 4));
  const folioManual = normalizarFolio(entrada.folio);
  const folio = folioManual || (await generarFolio({ clave: datos.diplomado_clave, anio }));

  const { data, error } = await supabaseAdmin
    .from('constancias')
    .insert({ ...datos, folio, anio, emitida_por: emitidaPor ?? null })
    .select()
    .single();

  if (error) {
    if (error.code === '23505') {
      const duplicado = new Error(`El folio ${folio} ya está registrado.`);
      duplicado.status = 409;
      throw duplicado;
    }
    throw new Error(`No se pudo guardar la constancia: ${error.message}`);
  }

  // Si el folio vino capturado, el contador tiene que alcanzarlo para que la
  // siguiente emisión automática no reutilice ese número.
  const desglose = folioManual ? desglosarFolio(folioManual) : null;
  if (desglose) {
    await supabaseAdmin.rpc('sincronizar_consecutivo_constancia', {
      p_anio: desglose.anio,
      p_clave: desglose.clave,
      p_valor: desglose.consecutivo,
    });
  }

  return data;
}

export async function actualizarConstancia(folio, entrada) {
  const datos = limpiarDatos(entrada);
  const errores = revisarDatos(datos);
  if (errores.length) {
    const error = new Error(errores.join(' '));
    error.errores = errores;
    error.status = 400;
    throw error;
  }

  // El folio no se reescribe: es el identificador impreso y el destino del QR.
  const { data, error } = await supabaseAdmin
    .from('constancias')
    .update(datos)
    .eq('folio', normalizarFolio(folio))
    .select()
    .single();

  if (error) throw new Error(`No se pudo actualizar la constancia: ${error.message}`);
  return data;
}

export async function cambiarEstatus(folio, estatus, { motivo } = {}) {
  const cambios = { estatus };
  if (estatus === 'cancelada') cambios.motivo_cancelacion = motivo || null;

  const { data, error } = await supabaseAdmin
    .from('constancias')
    .update(cambios)
    .eq('folio', normalizarFolio(folio))
    .select()
    .single();

  if (error) throw new Error(`No se pudo cambiar el estatus: ${error.message}`);
  return data;
}
