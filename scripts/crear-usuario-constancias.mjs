// Alta de usuarios del módulo de constancias.
//
//   node scripts/crear-usuario-constancias.mjs <usuario> <contraseña> "<Nombre>" [rol]
//
// El rol es 'emisor' por omisión. Si el usuario ya existe se le reemplaza la
// contraseña, así que este mismo script sirve para restablecerla.

import { readFileSync } from 'node:fs';
import bcrypt from 'bcryptjs';
import { createClient } from '@supabase/supabase-js';

function cargarEnv(ruta = '.env.local') {
  try {
    for (const linea of readFileSync(ruta, 'utf8').split('\n')) {
      const limpia = linea.trim();
      if (!limpia || limpia.startsWith('#')) continue;
      const i = limpia.indexOf('=');
      if (i === -1) continue;
      const nombre = limpia.slice(0, i).trim();
      const valor = limpia.slice(i + 1).trim().replace(/^["']|["']$/g, '');
      if (!process.env[nombre]) process.env[nombre] = valor;
    }
  } catch {
    // Sin .env.local se asume que las variables ya vienen del entorno.
  }
}

cargarEnv();

const [usuario, contrasena, nombre, rol = 'emisor'] = process.argv.slice(2);

if (!usuario || !contrasena || !nombre) {
  console.error('Uso: node scripts/crear-usuario-constancias.mjs <usuario> <contraseña> "<Nombre>" [rol]');
  process.exit(1);
}

if (contrasena.length < 10) {
  console.error('La contraseña debe tener al menos 10 caracteres.');
  process.exit(1);
}

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const { data, error } = await supabase
  .from('constancias_usuarios')
  .upsert(
    {
      usuario: usuario.trim().toLowerCase(),
      password_hash: await bcrypt.hash(contrasena, 12),
      nombre: nombre.trim(),
      rol,
      activo: true,
    },
    { onConflict: 'usuario' }
  )
  .select('usuario, nombre, rol')
  .single();

if (error) {
  console.error('No se pudo guardar el usuario:', error.message);
  process.exit(1);
}

console.log(`Usuario listo: ${data.usuario} (${data.nombre}, rol ${data.rol})`);
