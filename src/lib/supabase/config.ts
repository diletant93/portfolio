import {createClient} from '@supabase/supabase-js'
export const supabaseConfig = {
    SUPABASE_URL:import.meta.env.VITE_PUBLIC_SUPPABASE_PROJECT_URL as string,
    SUPABASE_API_KEY:import.meta.env.VITE_PUBLIC_SUPPABASE_API_KEY as string,
    SUPABASE_SECRET_ROLE: import.meta.env.VITE_SUPPABASE_SECRET_ROLE as string,
  }
  export const supabase = createClient(supabaseConfig.SUPABASE_URL, supabaseConfig.SUPABASE_API_KEY)
  export const supabaseAdmin = createClient(supabaseConfig.SUPABASE_URL, supabaseConfig.SUPABASE_SECRET_ROLE)
  