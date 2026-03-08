import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "INSERISCI_URL_SUPABASE"
const supabaseKey = "INSERISCI_ANON_KEY"

export const supabase = createClient(supabaseUrl,supabaseKey)