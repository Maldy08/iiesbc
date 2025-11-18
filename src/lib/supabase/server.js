// src/lib/supabase/server.js
import { createClient } from '@supabase/supabase-js';

// Cliente con privilegios de admin (solo para Server Components y API Routes)
// Usa las variables secretas (sin NEXT_PUBLIC_)
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY, // Esta variable ahora es segura aquí
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
); 