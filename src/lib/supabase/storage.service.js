import { supabase } from './client';

const BUCKET_NAME = 'ponencias';

/**
 * Subir archivo de ponencia a Supabase Storage
 */
export async function subirArchivoPonencia(file, usuarioId, ponenciaId) {
  try {
    // Validar que sea PDF
    if (file.type !== 'application/pdf') {
      throw new Error('Solo se permiten archivos PDF');
    }

    // Validar tamaño (máximo 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      throw new Error('El archivo no debe superar los 10MB');
    }

    // Crear nombre único para el archivo
    const timestamp = Date.now();
    const fileName = `${usuarioId}/${ponenciaId}_v${timestamp}.pdf`;

    // Subir a Supabase Storage
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) throw error;

    // Obtener URL pública
    const { data: urlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(fileName);

    return {
      url: urlData.publicUrl,
      path: fileName,
      size: file.size,
      name: file.name,
    };
  } catch (error) {
    console.error('Error al subir archivo:', error);
    throw error;
  }
}

/**
 * Eliminar archivo del storage
 */
export async function eliminarArchivo(filePath) {
  try {
    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([filePath]);

    if (error) throw error;
    
    return { success: true };
  } catch (error) {
    console.error('Error al eliminar archivo:', error);
    throw error;
  }
}