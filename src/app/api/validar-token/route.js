// src/app/api/validar-token/route.js

import { NextResponse } from 'next/server';
import { google } from 'googleapis';

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

export async function GET(request) {
  try {
    // Obtener token de la URL
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.json(
        { error: 'Token no proporcionado' },
        { status: 400 }
      );
    }

    console.log('🔍 Validando token:', token);

    // ====================================
    // BUSCAR TOKEN EN GOOGLE SHEETS
    // ====================================

    const sheets = getGoogleSheetsClient();

    // Obtener todos los datos de la pestaña Registros
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Registros!A:L',
    });

    const rows = response.data.values;

    if (!rows || rows.length === 0) {
      return NextResponse.json(
        { error: 'No hay registros en la base de datos' },
        { status: 404 }
      );
    }

    // La primera fila son los encabezados
    const headers = rows[0];
    const dataRows = rows.slice(1);

    // Buscar el índice de la columna Token (columna K = índice 10)
    const tokenIndex = 10; // Columna K

    // Buscar la fila que coincide con el token
    const participanteRow = dataRows.find(row => row[tokenIndex] === token);

    if (!participanteRow) {
      console.log('❌ Token no encontrado');
      return NextResponse.json(
        { error: 'Token inválido o no encontrado' },
        { status: 404 }
      );
    }

    // ====================================
    // VALIDAR QUE ESTÉ CONFIRMADO
    // ====================================

    const estado = participanteRow[8]; // Columna I - Estado
    const ponenciaSubida = participanteRow[11]; // Columna L - Ponencia Subida

    // Validar que el pago esté confirmado
    if (estado !== 'Confirmado') {
      return NextResponse.json(
        { 
          error: 'Tu registro aún no ha sido confirmado. Espera a que verifiquemos tu pago.',
          estado: estado
        },
        { status: 403 }
      );
    }

    // Verificar si ya subió ponencia
    if (ponenciaSubida === 'Sí') {
      return NextResponse.json(
        {
          error: 'Ya has subido tu ponencia anteriormente',
          yaSubida: true
        },
        { status: 400 }
      );
    }

    // ====================================
    // DEVOLVER DATOS DEL PARTICIPANTE
    // ====================================

    const participante = {
      nombreCompleto: participanteRow[0],      // A
      correoElectronico: participanteRow[1],   // B
      institucion: participanteRow[2],         // C
      nivelAcademico: participanteRow[3],      // D
      modalidad: participanteRow[4],           // E
      ejeTematico: participanteRow[5],         // F
      interesPosgrado: participanteRow[9],     // J
      token: token,
      estado: estado
    };

    console.log('✅ Token válido para:', participante.nombreCompleto);

    return NextResponse.json({
      valid: true,
      participante: participante
    });

  } catch (error) {
    console.error('❌ Error al validar token:', error);
    return NextResponse.json(
      { 
        error: 'Error al validar el token',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}