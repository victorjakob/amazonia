import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Missing Supabase env vars. Run: vercel env pull .env.local --environment=production"
  );
}

// This client is only used for anonymous, server-side reads (no auth flows),
// so session persistence is disabled. This also avoids supabase-js touching
// the experimental global `localStorage` that Node 25 exposes but leaves
// non-functional unless `--localstorage-file` is set, which throws
// "localStorage.getItem is not a function" during SSR.
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});
