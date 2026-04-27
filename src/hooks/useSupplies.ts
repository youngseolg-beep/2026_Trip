import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { SupplyItem } from '../types';

export function useSupplies(initialData: SupplyItem[]) {
  const [supplies, setSupplies] = useState<SupplyItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSupplies = async () => {
    const { data, error } = await supabase
      .from('supplies')
      .select('*')
      .order('id', { ascending: true });

    if (data && data.length > 0) {
      setSupplies(data);
    } else {
      setSupplies(initialData);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSupplies();
  }, []);

  const toggleItem = async (id: string) => {
    const item = supplies.find(s => s.id === id);
    if (!item) return;

    const newStatus = !item.packed;

    // 1. 화면 먼저 업데이트 (사용자 경험)
    setSupplies(prev => prev.map(s => s.id === id ? { ...s, packed: newStatus } : s));

    // 2. DB 업데이트
    const { error } = await supabase
      .from('supplies')
      .upsert({ 
        id: id, 
        packed: newStatus,
        category: item.category,
        detail: item.detail 
      });

    if (error) {
      console.error('DB 저장 실패:', error.message);
      alert('저장에 실패했습니다. 인터넷 연결이나 DB 설정을 확인하세요.');
      fetchSupplies(); // 실패 시 데이터 원복
    }
  };

  return { supplies, toggleItem, loading };
}
