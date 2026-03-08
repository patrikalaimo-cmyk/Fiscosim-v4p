import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://nhddvvategpthkchylfs.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oZGR2dmF0ZWdwdGhrY2h5bGZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMDQ0MDMsImV4cCI6MjA4ODU4MDQwM30.tMsdUvUrEVQFDXRhvp9adgqQ3YRqdntcMoULj_tQaPw"

export const supabase = createClient(supabaseUrl,supabaseKey)
