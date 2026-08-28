import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const ANON_KEY     = process.env.SUPABASE_ANON_KEY
                  || process.env.VITE_SUPABASE_ANON_KEY
                  || process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const SERVICE_KEY  = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Public client — RLS applies (published articles only for anon reads)
export const supabase = createClient(SUPABASE_URL, ANON_KEY);

// Admin client — service role bypasses RLS for full CRUD
export const supabaseAdmin = SERVICE_KEY
  ? createClient(SUPABASE_URL, SERVICE_KEY, {
      auth: { autoRefreshToken: false, persistSession: false },
    })
  : supabase;
