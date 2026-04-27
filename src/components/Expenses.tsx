import React, { useState } from 'react';
import { useExpenses } from '../hooks/useExpenses';
import { Plus, Trash2, CreditCard, Banknote } from 'lucide-react';

export function Expenses() {
  const { expenses, addExpense, deleteExpense, loading } = useExpenses();
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    category: '숙소',
    item: '',
    amount: '',
    payment_method: '카드'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.item || !formData.amount) return;
    await addExpense({
      ...formData,
      amount: Number(formData.amount)
    });
    setFormData({ ...formData, item: '', amount: '' });
    setIsAdding(false);
  };

  const totalAmount = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);

  if (loading) return <div className="p-10 text-center text-slate-400">데이터를 불러오는 중...</div>;

  return (
    <div className="space-y-4 pb-24">
      {/* 요약 헤더 (이미지의 우측 상단 TOTAL 부분 스타일) */}
      <div className="flex justify-between items-end px-2">
        <h2 className="text-xl font-bold text-[#1d3557]">지출 내역</h2>
        <div className="text-right">
          <p className="text-[10px] text-slate-400 uppercase font-bold">Total Amount</p>
          <p className="text-2xl font-black text-[#e63946]">€ {totalAmount.toLocaleString()}</p>
        </div>
      </div>

      {/* 리스트 본문 (이미지 6의 표 구조를 모바일화) */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-[11px] text-slate-500">
              <th className="p-3 font-bold">결제일/품목</th>
              <th className="p-3 font-bold text-right">금액(€)</th>
              <th className="p-3 w-10"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {expenses.length === 0 ? (
              <tr>
                <td colSpan={3} className="p-10 text-center text-slate-300 text-sm">기록된 내역이 없습니다.</td>
              </tr>
            ) : (
              expenses.map((exp) => (
                <tr key={exp.id} className="text-sm">
                  <td className="p-3">
                    <p className="font-bold text-[#1d3557]">{exp.item}</p>
                    <p className="text-[10px] text-slate-400">{exp.date} · {exp.category} · {exp.payment_method}</p>
                  </td>
                  <td className="p-3 text-right font-black text-slate-700">
                    {Number(exp.amount).toLocaleString()}
                  </td>
                  <td className="p-3 text-right">
                    <button onClick={() => deleteExpense(exp.id)} className="text-slate-300 hover:text-red-500">
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* 추가 폼 (심플하게 하단 고정 대신 리스트 위/아래 배치) */}
      {isAdding ? (
        <form onSubmit={handleSubmit} className="p-5 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <input type="date" className="p-2 text-xs border rounded-lg" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
            <select className="p-2 text-xs border rounded-lg" value={formData.payment_method} onChange={e => setFormData({...formData, payment_method: e.target.value})}>
              <option value="카드">카드</option>
              <option value="현금">현금</option>
            </select>
          </div>
          <input type="text" placeholder="결제 품목" className="w-full p-2 text-xs border rounded-lg" value={formData.item} onChange={e => setFormData({...formData, item: e.target.value})} />
          <input type="number" placeholder="금액" className="w-full p-2 text-xs border rounded-lg" value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value})} />
          <div className="flex gap-2">
            <button type="submit" className="flex-1 bg-[#1d3557] text-white p-2 rounded-lg text-xs font-bold">추가</button>
            <button type="button" onClick={() => setIsAdding(false)} className="flex-1 bg-white border p-2 rounded-lg text-xs">취소</button>
          </div>
        </form>
      ) : (
        <button 
          onClick={() => setIsAdding(true)} 
          className="w-full py-3 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
        >
          <Plus size={18} />
          <span className="text-sm font-bold">지출 내역 추가</span>
        </button>
      )}
    </div>
  );
}
