// Este archivo no es necesario en JavaScript
// Puedes dejarlo vacío o eliminarlo

// Si quieres documentar los tipos con JSDoc:
/**
 * @typedef {Object} Usuario
 * @property {string} id
 * @property {string} email
 * @property {string} nombre_completo
 * @property {string} [institucion]
 * @property {string} [telefono]
 * @property {'ponente'|'revisor'|'admin'} rol
 * @property {string} created_at
 * @property {string} updated_at
 */

/**
 * @typedef {Object} Ponencia
 * @property {string} id
 * @property {string} usuario_id
 * @property {string} titulo
 * @property {string} resumen
 * @property {string} [area_tematica]
 * @property {'ponencia'|'poster'|'taller'} [tipo_participacion]
 * @property {string} [archivo_url]
 * @property {string} [archivo_nombre]
 * @property {number} [archivo_size]
 * @property {'Pendiente de Revisión'|'En Revisión'|'Requiere Cambios'|'Aprobada'|'Rechazada'} estado
 * @property {number} version
 * @property {string} [revisor_asignado_id]
 * @property {string} [comentarios_revisor]
 * @property {string} [fecha_revision]
 * @property {string} created_at
 * @property {string} updated_at
 */

export {};