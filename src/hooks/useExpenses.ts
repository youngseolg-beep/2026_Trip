import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export function useExpenses() {
  const [expenses, setExpenses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchExpenses = async () => {
    setLoading(true);
    // created_at 대신 date(지출일) 기준으로 정렬하여 에러 방지
    const { data, error } = await supabase
      .from('expenses')
      .select('*')
      .order('date', { ascending: false });

    if (error) {
      console.error('데이터 불러오기 실패:', error.message);
    } else if (data) {
      setExpenses(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async (newExpense: any) => {
    const { data, error } = await supabase
      .from('expenses')
      .insert([newExpense])
      .select(); // 저장된 데이터를 다시 확인

    if (error) {
      console.error('저장 실패 에러:', error.message);
      alert(`저장 실패: ${error.message}`); // 사용자에게 알림
      return;
    }
    
    console.log('저장 성공:', data);
    await fetchExpenses(); // 목록 새로고침
  };

  const deleteExpense = async (id: string) => {
    const { error } = await supabase
      .from('expenses')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('삭제 실패:', error.message);
      alert('삭제에 실패했습니다.');
    } else {
      await fetchExpenses();
    }
  };

  return { expenses, addExpense, deleteExpense, loading };
}
