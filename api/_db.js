// Deprecated: database layer migrated to Supabase — see _supabase.js
// This file is kept to avoid breaking any cached imports during deployment.
/* global process */
import { neon } from '@neondatabase/serverless';
export const sql = neon(process.env.DATABASE_URL || 'postgresql://localhost/placeholder');
