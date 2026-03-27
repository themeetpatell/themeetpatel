import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY;

const hasSupabaseConfig = Boolean(supabaseUrl && supabasePublishableKey);

if (!hasSupabaseConfig) {
  console.error(
    'Missing Supabase env vars. Set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY.'
  );
}

export const supabase = createClient(
  hasSupabaseConfig ? supabaseUrl : 'https://placeholder.supabase.co',
  hasSupabaseConfig ? supabasePublishableKey : 'sb_publishable_placeholder',
  {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
  }
);

export { hasSupabaseConfig };
