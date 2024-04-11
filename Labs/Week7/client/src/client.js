import { createClient } from '@supabase/supabase-js'

const URL = 'https://advbbtuplouvgkmxmlpa.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkdmJidHVwbG91dmdrbXhtbHBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0MjQ0ODQsImV4cCI6MjAyODAwMDQ4NH0.hIq_WJHiw_KptE8_8p4FCKhLd9oY3dWSUW9WT0vZVSM'

export const supabase = createClient(URL, API_KEY)