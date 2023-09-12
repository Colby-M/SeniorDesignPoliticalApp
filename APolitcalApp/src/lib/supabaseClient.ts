import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
console.log(url, anonKey);
export default createClient(url, anonKey);