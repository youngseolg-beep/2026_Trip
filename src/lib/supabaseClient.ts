import { createClient } from '@supabase/supabase-js';

// Vite 환경변수를 읽어옵니다.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL 또는 Anon Key가 설정되지 않았습니다. 환경 변수를 확인해주세요.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
