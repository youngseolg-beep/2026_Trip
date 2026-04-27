import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export function useExpenses() {
  const [expenses, setExpenses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchExpenses = async () => {
    const { data } = await supabase.from('expenses').select('*').order('created_at', { ascending: false });
    if (data) setExpenses(data);
    setLoading(false);
  };

  useEffect(() => { fetchExpenses(); }, []);

  const addExpense = async (newExpense: any) => {
    const { error } = await supabase.from('expenses').insert([newExpense]);
    if (!error) fetchExpenses();
  };

  const deleteExpense = async (id: string) => {
    const { error } = await supabase.from('expenses').delete().eq('id', id);
    if (!error) fetchExpenses();
  };

  return { expenses, addExpense, deleteExpense, loading };
}
