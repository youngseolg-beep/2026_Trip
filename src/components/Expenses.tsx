import React, { useState } from 'react';
import { useExpenses } from '../hooks/useExpenses';
import { Plus, Trash2, CreditCard, Banknote } from 'lucide-react';

export function Expenses() {
  const { expenses, addExpense, deleteExpense, loading } = useExpenses();
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    category: '식비',
    item: '',
    amount: '',
    payment_method: '카드'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.item || !formData.amount) return;
    
    addExpense({
      ...formData,
      amount: Number(formData.amount)
    });
    
    setFormData({ ...formData, item: '', amount: '' });
    setIsAdding(false);
  };

  const totalAmount = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);

  if (loading) return <div className="p-10 text-center animate-pulse">지출 내역 불러오는 중...</div>;

  return (
    <div className="space-y-6 pb-24">
      {/* 총액 카드 */}
      <div className="bg-[#1d3557] p-6 rounded-3xl text-white shadow-xl">
        <p className="text-blue-200 text-sm mb-1">총 지출 금액</p>
        <h2 className="text-3xl font-bold">€ {totalAmount.toLocaleString()}</h2>
      </div>

      {/* 지출 목록 */}
      <div className="space-y-3">
        {expenses.map((exp) => (
          <div key={exp.id} className="bg-white p-4 rounded-2xl border border-slate-100 flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-3">
              <div className="bg-slate-50 p-2 rounded-full text-slate-400">
                {exp.payment_method === '카드' ? <CreditCard size={18} /> : <Banknote size={18} />}
              </div>
              <div>
                <p className="font-bold text-[#1d3557]">{exp.item}</p>
                <p className="text-xs text-slate-400">{exp.date} · {exp.category}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-bold text-[#e63946]">€ {Number(exp.amount).toLocaleString()}</p>
              <button onClick={() => deleteExpense(exp.id)} className="text-slate-300 hover:text-red-500">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 추가 버튼 및 폼 */}
      {isAdding ? (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-3xl border-2 border-[#e9c46a] space-y-4 shadow-lg">
          <input type="text" placeholder="항목 (예: 저녁 식사)" className="w-full p-3 bg-slate-50 rounded-xl outline-none" value={formData.item} onChange={e => setFormData({...formData, item: e.target.value})} />
          <input type="number" placeholder="금액 (Euro)" className="w-full p-3 bg-slate-50 rounded-xl outline-none" value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value})} />
          <div className="flex gap-2">
            <button type="submit" className="flex-1 bg-[#1d3557] text-white p-3 rounded-xl font-bold">저장</button>
            <button type="button" onClick={() => setIsAdding(false)} className="flex-1 bg-slate-100 text-slate-500 p-3 rounded-xl font-bold">취소</button>
          </div>
        </form>
      ) : (
        <button onClick={() => setIsAdding(true)} className="fixed bottom-24 right-6 bg-[#e9c46a] text-[#1d3557] w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
          <Plus size={28} />
        </button>
      )}
    </div>
  );
}
