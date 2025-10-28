// src/app/api/subir-ponencia/route.js

import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { Resend } from 'resend';
import { google } from 'googleapis';

// Inicializar Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Configurar Google Sheets
const getGoogleSheetsClient = () => {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    return google.sheets({ version: 'v4', auth });
  } catch (error) {
    console.error('❌ Error al configurar Google Sheets:', error);
    throw error;
  }
};

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    // Extraer datos del formulario
    const data = {
      token: formData.get('token'),
      email: formData.get('email'),
      nombre: formData.get('nombre'),
      titulo: formData.get('titulo'),
      resumen: formData.get('resumen'),
      palabrasClave: formData.get('palabrasClave'),
      ejeTematico: formData.get('ejeTematico'),
      coautores: formData.get('coautores'),
    };

    // Validar campos requeridos
    if (!data.token || !data.email || !data.titulo || !data.resumen || !data.palabrasClave || !data.ejeTematico) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Extraer archivo
    const file = formData.get('archivoPonencia');
    
    if (!file) {
      return NextResponse.json(
        { error: 'No se recibió el archivo de la ponencia' },
        { status: 400 }
      );
    }

    // Validar tipo de archivo
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Formato de archivo no válido. Solo se permiten PDF o Word' },
        { status: 400 }
      );
    }

    // Validar tamaño de archivo (máximo 10MB)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'El archivo es demasiado grande. Máximo 10MB' },
        { status: 400 }
      );
    }

    // ====================================
    // VALIDAR TOKEN
    // ====================================

    console.log('🔍 Validando token antes de guardar...');

    const sheets = getGoogleSheetsClient();

    // Obtener todos los registros
    const registrosResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Registros!A:L',
    });

    const registrosRows = registrosResponse.data.values;
    
    if (!registrosRows || registrosRows.length === 0) {
      return NextResponse.json(
        { error: 'No se encontraron registros' },
        { status: 404 }
      );
    }

    const registrosData = registrosRows.slice(1); // Saltar encabezados
    const tokenIndex = 10; // Columna K
    const ponenciaSubidaIndex = 11; // Columna L

    // Buscar el registro por token
    const rowIndex = registrosData.findIndex(row => row[tokenIndex] === data.token);
    
    if (rowIndex === -1) {
      return NextResponse.json(
        { error: 'Token inválido' },
        { status: 404 }
      );
    }

    const participanteRow = registrosData[rowIndex];
    const estado = participanteRow[8]; // Columna I

    // Verificar que esté confirmado
    if (estado !== 'Confirmado') {
      return NextResponse.json(
        { error: 'Tu registro aún no ha sido confirmado' },
        { status: 403 }
      );
    }

    // Verificar que no haya subido ponencia antes
    if (participanteRow[ponenciaSubidaIndex] === 'Sí') {
      return NextResponse.json(
        { error: 'Ya has subido una ponencia anteriormente' },
        { status: 400 }
      );
    }

    // ====================================
    // SUBIR ARCHIVO A VERCEL BLOB
    // ====================================
    
    const timestamp = Date.now();
    const fileExtension = file.name.split('.').pop();
    const fileName = `ponencia_${data.nombre.replace(/\s+/g, '_')}_${timestamp}.${fileExtension}`;
    
    console.log('📤 Subiendo ponencia a Vercel Blob:', fileName);
    
    const blob = await put(fileName, file, {
      access: 'public',
      addRandomSuffix: false,
    });

    console.log('✅ Ponencia subida exitosamente:', blob.url);

    // ====================================
    // GUARDAR EN GOOGLE SHEETS (Ponencias)
    // ====================================
    
    const fechaSubida = new Date().toLocaleString('es-MX', {
      timeZone: 'America/Tijuana',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    try {
      console.log('📊 Guardando ponencia en Google Sheets...');
      
      const valoresPonencia = [[
        data.email,              // A - Email
        data.nombre,             // B - Nombre
        data.titulo,             // C - Título
        data.resumen,            // D - Resumen
        data.palabrasClave,      // E - Palabras Clave
        data.ejeTematico,        // F - Eje Temático
        blob.url,                // G - Archivo URL
        fechaSubida,             // H - Fecha Subida
        data.coautores || 'N/A'  // I - Co-autores
      ]];

      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: 'Ponencias!A:I',
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        requestBody: {
          values: valoresPonencia,
        },
      });

      console.log('✅ Ponencia guardada en Google Sheets');
    } catch (sheetsError) {
      console.error('❌ Error al guardar ponencia en Google Sheets:', sheetsError);
    }

    // ====================================
    // ACTUALIZAR REGISTRO (Ponencia Subida = Sí)
    // ====================================

    try {
      console.log('📊 Actualizando estado de ponencia en Registros...');
      
      const actualRowNumber = rowIndex + 2; // +1 para header, +1 para índice basado en 1
      
      await sheets.spreadsheets.values.update({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: `Registros!L${actualRowNumber}`, // Columna L (Ponencia Subida)
        valueInputOption: 'RAW',
        requestBody: {
          values: [['Sí']]
        }
      });

      console.log('✅ Estado actualizado en Registros');
    } catch (updateError) {
      console.error('⚠️ Error al actualizar estado:', updateError);
    }

    // ====================================
    // ENVIAR EMAIL AL PARTICIPANTE
    // ====================================
    
    try {
      console.log('📧 Enviando email de confirmación al participante...');
      
      await resend.emails.send({
        from: process.env.EMAIL_FROM || 'congreso@iiesbc.mx',
        to: data.email,
        subject: '✅ Ponencia Recibida - Congreso IIESBC',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #16a34a 0%, #15803d 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
              .info-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #16a34a; }
              .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
              h1 { margin: 0; font-size: 28px; }
              h2 { color: #16a34a; margin-top: 0; }
              .info-row { margin: 10px 0; }
              .label { font-weight: bold; color: #16a34a; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div style="font-size: 48px; margin-bottom: 10px;">✅</div>
                <h1>¡Ponencia Recibida!</h1>
                <p>Congreso IIESBC</p>
              </div>
              <div class="content">
                <p>Estimado/a <strong>${data.nombre}</strong>,</p>
                
                <p>Hemos recibido exitosamente tu ponencia. Gracias por tu participación en el Congreso IIESBC.</p>
                
                <div class="info-box">
                  <h2>📋 Datos de tu Ponencia</h2>
                  <div class="info-row">
                    <span class="label">Título:</span> ${data.titulo}
                  </div>
                  <div class="info-row">
                    <span class="label">Eje Temático:</span> ${data.ejeTematico}
                  </div>
                  <div class="info-row">
                    <span class="label">Palabras Clave:</span> ${data.palabrasClave}
                  </div>
                  ${data.coautores ? `
                  <div class="info-row">
                    <span class="label">Co-autores:</span> ${data.coautores}
                  </div>
                  ` : ''}
                  <div class="info-row">
                    <span class="label">Fecha de Envío:</span> ${fechaSubida}
                  </div>
                </div>

                <div class="info-box" style="border-left-color: #3b82f6;">
                  <h2>📅 Próximos Pasos</h2>
                  <ol>
                    <li>Nuestro comité académico revisará tu ponencia</li>
                    <li>Te contactaremos en las próximas semanas con el resultado</li>
                    <li>Recibirás información sobre el programa del congreso</li>
                  </ol>
                </div>

                <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>

                <p>¡Nos vemos en el congreso!</p>
                
                <p style="margin-top: 30px;">
                  <strong>Comité Organizador</strong><br>
                  Congreso IIESBC
                </p>
              </div>
              <div class="footer">
                <p>Este es un correo automático, por favor no responder.</p>
                <p>&copy; ${new Date().getFullYear()} IIESBC. Todos los derechos reservados.</p>
              </div>
            </div>
          </body>
          </html>
        `,
      });

      console.log('✅ Email enviado al participante');
    } catch (emailError) {
      console.error('⚠️ Error al enviar email al participante:', emailError);
    }

    // ====================================
    // ENVIAR EMAIL A ADMINISTRADORES
    // ====================================
    
    try {
      console.log('📧 Enviando notificación a administradores...');
      
      const adminEmails = process.env.EMAIL_TO?.split(',') || ['camv29@gmail.com'];
      
      await resend.emails.send({
        from: process.env.EMAIL_FROM || 'congreso@iiesbc.mx',
        to: adminEmails,
        subject: '📝 Nueva Ponencia Recibida - Congreso IIESBC',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #16a34a; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
              .info-box { background: white; padding: 15px; border-radius: 8px; margin: 15px 0; }
              .info-row { margin: 8px 0; padding: 8px; border-bottom: 1px solid #e5e7eb; }
              .label { font-weight: bold; color: #16a34a; display: inline-block; width: 150px; }
              .btn { display: inline-block; padding: 12px 24px; background: #16a34a; color: white; text-decoration: none; border-radius: 6px; margin-top: 15px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>📝 Nueva Ponencia Recibida</h2>
              </div>
              <div class="content">
                <div class="info-box">
                  <div class="info-row">
                    <span class="label">Participante:</span> ${data.nombre}
                  </div>
                  <div class="info-row">
                    <span class="label">Email:</span> ${data.email}
                  </div>
                  <div class="info-row">
                    <span class="label">Título:</span> ${data.titulo}
                  </div>
                  <div class="info-row">
                    <span class="label">Eje Temático:</span> ${data.ejeTematico}
                  </div>
                  <div class="info-row">
                    <span class="label">Palabras Clave:</span> ${data.palabrasClave}
                  </div>
                  ${data.coautores && data.coautores !== 'N/A' ? `
                  <div class="info-row">
                    <span class="label">Co-autores:</span> ${data.coautores}
                  </div>
                  ` : ''}
                  <div class="info-row">
                    <span class="label">Fecha:</span> ${fechaSubida}
                  </div>
                </div>

                <p><strong>📎 Archivo de la Ponencia:</strong></p>
                <a href="${blob.url}" class="btn" target="_blank">Descargar Ponencia</a>

                <p style="margin-top: 20px; color: #666; font-size: 14px;">
                  Revisa la ponencia en la pestaña "Ponencias" de Google Sheets.
                </p>
              </div>
            </div>
          </body>
          </html>
        `,
      });

      console.log('✅ Email enviado a administradores');
    } catch (emailError) {
      console.error('⚠️ Error al enviar email a administradores:', emailError);
    }

    // ====================================
    // RESPUESTA EXITOSA
    // ====================================
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Ponencia subida exitosamente',
        data: {
          titulo: data.titulo,
          archivoUrl: blob.url,
          fechaSubida: fechaSubida
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Error al procesar ponencia:', error);
    return NextResponse.json(
      { 
        error: 'Error al procesar la ponencia. Por favor intenta nuevamente.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}