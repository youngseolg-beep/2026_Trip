import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient'; // 설정하신 클라이언트 경로
import { SupplyItem } from '../types';

export function useSupplies(initialData: SupplyItem[]) {
  const [supplies, setSupplies] = useState<SupplyItem[]>([]);
  const [loading, setLoading] = useState(true);

  // 1. 데이터 불러오기
  useEffect(() => {
    async function fetchSupplies() {
      const { data, error } = await supabase
        .from('supplies')
        .select('*')
        .order('id', { ascending: true });

      if (data && data.length > 0) {
        setSupplies(data);
      } else {
        // 데이터가 없으면 초기 데이터 삽입 (선택 사항)
        setSupplies(initialData);
      }
      setLoading(false);
    }
    fetchSupplies();
  }, []);

  // 2. 상태 업데이트 및 DB 저장
  const toggleItem = async (id: string) => {
    const item = supplies.find(s => s.id === id);
    if (!item) return;

    const newPackedStatus = !item.packed;

    // 화면 먼저 업데이트 (낙관적 업데이트)
    setSupplies(prev => prev.map(s => s.id === id ? { ...s, packed: newPackedStatus } : s));

    // Supabase DB 업데이트
    const { error } = await supabase
      .from('supplies')
      .update({ packed: newPackedStatus })
      .eq('id', id);

    if (error) {
      console.error('Error updating DB:', error);
      // 에러 시 롤백 로직 추가 가능
    }
  };

  return { supplies, toggleItem, loading };
}
