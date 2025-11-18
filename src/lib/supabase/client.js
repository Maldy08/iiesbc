// src/lib/supabase/client.js
import { createClient } from '@supabase/supabase-js';

// Cliente para usar en el navegador (componentes de cliente)
// Usa las variables NEXT_PUBLIC_
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);