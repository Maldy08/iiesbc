// src/app/api/registro-congreso/route.js

import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { Resend } from 'resend';
import { google } from 'googleapis';
import crypto from 'crypto';

// Inicializar Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Función para generar token único
const generarToken = () => {
  return crypto.randomBytes(16).toString('hex');
};

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
      nombreCompleto: formData.get('nombreCompleto'),
      correoElectronico: formData.get('correoElectronico'),
      institucion: formData.get('institucion'),
      nivelAcademico: formData.get('nivelAcademico'),
      modalidad: formData.get('modalidad'),
      ejeTematico: formData.get('ejeTematico'),
      interesPosgrado: formData.get('interesPosgrado'),
    };

    // Validar que todos los campos estén presentes
    const camposRequeridos = ['nombreCompleto', 'correoElectronico', 'institucion', 'nivelAcademico', 'modalidad', 'ejeTematico'];
    const camposFaltantes = camposRequeridos.filter(campo => !data[campo]);
    
    if (camposFaltantes.length > 0) {
      return NextResponse.json(
        { 
          error: 'Faltan campos requeridos',
          camposFaltantes 
        },
        { status: 400 }
      );
    }

    // Extraer archivo del recibo
    const file = formData.get('reciboPago');
    
    if (!file) {
      return NextResponse.json(
        { error: 'No se recibió el comprobante de pago' },
        { status: 400 }
      );
    }

    // Validar tipo de archivo (solo PDF, JPG, PNG)
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Formato de archivo no válido. Solo se permiten PDF, JPG y PNG' },
        { status: 400 }
      );
    }

    // Validar tamaño de archivo (máximo 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'El archivo es demasiado grande. Máximo 5MB' },
        { status: 400 }
      );
    }

    // ====================================
    // SUBIR ARCHIVO A VERCEL BLOB
    // ====================================
    
    const timestamp = Date.now();
    const fileExtension = file.name.split('.').pop();
    const fileName = `recibo_${data.nombreCompleto.replace(/\s+/g, '_')}_${timestamp}.${fileExtension}`;
    
    console.log('📤 Subiendo archivo a Vercel Blob:', fileName);
    
    const blob = await put(fileName, file, {
      access: 'public',
      addRandomSuffix: false,
    });

    console.log('✅ Archivo subido exitosamente:', blob.url);

    // ====================================
    // PREPARAR DATOS COMPLETOS
    // ====================================
    
    const fechaRegistro = new Date().toLocaleString('es-MX', {
      timeZone: 'America/Tijuana',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    // Generar token único para subir ponencia
    const token = generarToken();

    const registroCompleto = {
      ...data,
      reciboUrl: blob.url,
      fechaRegistro,
      estado: 'Pendiente',
      token,
      ponenciaSubida: 'No'
    };

    // ====================================
    // GUARDAR EN GOOGLE SHEETS
    // ====================================
    
    try {
      console.log('📊 Guardando en Google Sheets...');
      
      const sheets = getGoogleSheetsClient();
      
      const values = [[
        data.nombreCompleto,           // A
        data.correoElectronico,        // B
        data.institucion,              // C
        data.nivelAcademico,           // D
        data.modalidad,                // E
        data.ejeTematico,              // F
        blob.url,                      // G - Recibo URL
        fechaRegistro,                 // H - Fecha Registro
        'Pendiente',                   // I - Estado
        data.interesPosgrado || 'N/A', // J - Interés Posgrado
        token,                         // K - Token
        'No'                           // L - Ponencia Subida
      ]];

      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: 'Registros!A:L',
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        requestBody: {
          values: values,
        },
      });

      console.log('✅ Datos guardados en Google Sheets exitosamente');
    } catch (sheetsError) {
      console.error('❌ Error al guardar en Google Sheets:', sheetsError);
      // Continuamos aunque falle Google Sheets
    }

    // ====================================
    // ENVIAR EMAIL AL PARTICIPANTE
    // ====================================
    
    try {
      console.log('📧 Enviando email de confirmación al participante...');
      
      const urlBase = process.env.NEXT_PUBLIC_URL || 'https://iiesbc.mx';
      
      await resend.emails.send({
        from: process.env.EMAIL_FROM || 'congreso@iiesbc.mx',
        to: data.correoElectronico,
        subject: '✅ Registro Recibido - Congreso IIESBC',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #1e3a8a 0%, #dc2626 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
              .info-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #1e3a8a; }
              .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
              h1 { margin: 0; font-size: 28px; }
              h2 { color: #1e3a8a; margin-top: 0; }
              .info-row { margin: 10px 0; }
              .label { font-weight: bold; color: #1e3a8a; }
              .btn { display: inline-block; padding: 12px 24px; background: #16a34a; color: white; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 10px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>¡Registro Recibido!</h1>
                <p>Congreso IIESBC</p>
              </div>
              <div class="content">
                <p>Estimado/a <strong>${data.nombreCompleto}</strong>,</p>
                
                <p>Hemos recibido exitosamente tu registro para el Congreso IIESBC. Tu información está siendo procesada.</p>
                
                <div class="info-box">
                  <h2>📋 Datos de tu Registro</h2>
                  <div class="info-row">
                    <span class="label">Nombre:</span> ${data.nombreCompleto}
                  </div>
                  <div class="info-row">
                    <span class="label">Correo:</span> ${data.correoElectronico}
                  </div>
                  <div class="info-row">
                    <span class="label">Institución:</span> ${data.institucion}
                  </div>
                  <div class="info-row">
                    <span class="label">Nivel Académico:</span> ${data.nivelAcademico}
                  </div>
                  <div class="info-row">
                    <span class="label">Modalidad:</span> ${data.modalidad}
                  </div>
                  <div class="info-row">
                    <span class="label">Eje Temático:</span> ${data.ejeTematico}
                  </div>
                  <div class="info-row">
                    <span class="label">Fecha de Registro:</span> ${fechaRegistro}
                  </div>
                </div>

                <div class="info-box" style="border-left-color: #dc2626;">
                  <h2>⏳ Próximos Pasos</h2>
                  <ol>
                    <li>Verificaremos tu comprobante de pago</li>
                    <li>Confirmaremos tu registro en las próximas 24-48 horas</li>
                    <li>Te enviaremos los detalles del evento y credenciales de acceso</li>
                  </ol>
                </div>

                <div class="info-box" style="border-left-color: #16a34a;">
                  <h2>🔗 Tu Link Personal para Subir Ponencia</h2>
                  <p>Una vez confirmado tu pago, podrás subir tu ponencia usando este link:</p>
                  <p style="text-align: center; margin: 20px 0;">
                    <a href="${urlBase}/subir-ponencia?token=${token}" class="btn">
                      Subir Mi Ponencia
                    </a>
                  </p>
                  <p style="font-size: 14px; color: #666;">
                    <strong>Importante:</strong> Este link es personal y único. Guárdalo para cuando necesites subir tu ponencia.
                  </p>
                </div>

                <p><strong>📎 Comprobante de Pago:</strong> Tu recibo ha sido adjuntado correctamente.</p>

                <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>

                <p>¡Nos vemos en el congreso!</p>
                
                <p style="margin-top: 30px;">
                  <strong>Equipo Organizador</strong><br>
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
        subject: '🔔 Nuevo Registro - Congreso IIESBC',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #1e3a8a; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
              .info-box { background: white; padding: 15px; border-radius: 8px; margin: 15px 0; }
              .info-row { margin: 8px 0; padding: 8px; border-bottom: 1px solid #e5e7eb; }
              .label { font-weight: bold; color: #1e3a8a; display: inline-block; width: 150px; }
              .btn { display: inline-block; padding: 12px 24px; background: #dc2626; color: white; text-decoration: none; border-radius: 6px; margin-top: 15px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>🔔 Nuevo Registro Recibido</h2>
              </div>
              <div class="content">
                <div class="info-box">
                  <div class="info-row">
                    <span class="label">Nombre:</span> ${data.nombreCompleto}
                  </div>
                  <div class="info-row">
                    <span class="label">Correo:</span> ${data.correoElectronico}
                  </div>
                  <div class="info-row">
                    <span class="label">Institución:</span> ${data.institucion}
                  </div>
                  <div class="info-row">
                    <span class="label">Nivel Académico:</span> ${data.nivelAcademico}
                  </div>
                  <div class="info-row">
                    <span class="label">Modalidad:</span> ${data.modalidad}
                  </div>
                  <div class="info-row">
                    <span class="label">Eje Temático:</span> ${data.ejeTematico}
                  </div>
                  <div class="info-row">
                    <span class="label">Interés Posgrado:</span> ${data.interesPosgrado || 'N/A'}
                  </div>
                  <div class="info-row">
                    <span class="label">Fecha:</span> ${fechaRegistro}
                  </div>
                  <div class="info-row">
                    <span class="label">Token:</span> ${token}
                  </div>
                </div>

                <p><strong>📎 Comprobante de Pago:</strong></p>
                <a href="${blob.url}" class="btn" target="_blank">Ver Comprobante</a>

                <p style="margin-top: 20px; color: #666; font-size: 14px;">
                  Por favor, verifica el comprobante y actualiza el estado en Google Sheets.
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
        message: 'Registro exitoso. Recibirás un correo de confirmación pronto.',
        data: {
          nombreCompleto: registroCompleto.nombreCompleto,
          correoElectronico: registroCompleto.correoElectronico,
          fechaRegistro: registroCompleto.fechaRegistro,
          reciboUrl: blob.url,
          token: token
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Error al procesar registro:', error);
    return NextResponse.json(
      { 
        error: 'Error al procesar el registro. Por favor intenta nuevamente.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// Endpoint GET para verificar el estado del API
export async function GET() {
  const checks = {
    blob: !!process.env.BLOB_READ_WRITE_TOKEN,
    resend: !!process.env.RESEND_API_KEY,
    googleSheets: {
      sheetId: !!process.env.GOOGLE_SHEET_ID,
      serviceAccount: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      privateKey: !!process.env.GOOGLE_PRIVATE_KEY
    }
  };

  const allConfigured = checks.blob && 
                        checks.resend && 
                        checks.googleSheets.sheetId && 
                        checks.googleSheets.serviceAccount && 
                        checks.googleSheets.privateKey;

  return NextResponse.json({
    status: allConfigured ? 'ok' : 'warning',
    message: allConfigured 
      ? 'API de registro para Congreso IIESBC funcionando correctamente' 
      : 'Algunas configuraciones faltan',
    timestamp: new Date().toISOString(),
    services: checks
  });
}

// Configuración para Next.js
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';