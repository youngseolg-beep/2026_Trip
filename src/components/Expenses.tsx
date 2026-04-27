import React, { useState } from 'react';
import { useExpenses } from '../hooks/useExpenses';
import { Plus, Trash2, CreditCard, Banknote, Calendar } from 'lucide-react';

export function Expenses() {
  // useExpenses 훅이 Supabase와 통신합니다.
  const { expenses, addExpense, deleteExpense, loading } = useExpenses();
  const [isAdding, setIsAdding] = useState(false);
  
  // 폼 입력 상태
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    category: '식비',
    item: '',
    amount: '',
    payment_method: '카드'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.item || !formData.amount) return;
    
    // DB에 저장 (Supabase 테이블 컬럼명에 맞춰 전달)
    await addExpense({
      date: formData.date,
      category: formData.category,
      item: formData.item,
      amount: Number(formData.amount),
      payment_method: formData.payment_method
    });
    
    // 폼 초기화 및 닫기
    setFormData({ ...formData, item: '', amount: '' });
    setIsAdding(false);
  };

  // 총액 계산 (문자열일 경우를 대비해 Number 처리)
  const totalAmount = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);

  if (loading) return <div className="p-10 text-center text-slate-400">비용 내역을 불러오는 중...</div>;

  return (
    <div className="space-y-6 pb-24">
      {/* 총액 카드 */}
      <div className="bg-[#1d3557] p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10" />
        <p className="text-blue-200 text-sm font-bold mb-2 uppercase tracking-wider">Total Expenses</p>
        <h2 className="text-4xl font-black">€ {totalAmount.toLocaleString()}</h2>
      </div>

      {/* 지출 목록 */}
      <div className="space-y-3">
        {expenses.length === 0 ? (
          <div className="text-center py-10 text-slate-400 text-sm">
            아직 등록된 비용이 없습니다.<br/>아래 + 버튼을 눌러 첫 지출을 기록하세요!
          </div>
        ) : (
          expenses.map((exp) => (
            <div key={exp.id} className="bg-white p-5 rounded-2xl border border-slate-100 flex justify-between items-center shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${exp.payment_method === '카드' ? 'bg-blue-50 text-blue-500' : 'bg-emerald-50 text-emerald-500'}`}>
                  {exp.payment_method === '카드' ? <CreditCard size={20} /> : <Banknote size={20} />}
                </div>
                <div>
                  <p className="font-bold text-[#1d3557]">{exp.item}</p>
                  <p className="text-[11px] text-slate-400 font-medium">{exp.date} · {exp.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="font-black text-[#e63946] text-lg">€ {Number(exp.amount).toLocaleString()}</p>
                <button 
                  onClick={() => { if(confirm('정말 삭제할까요?')) deleteExpense(exp.id) }} 
                  className="text-slate-300 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 추가 폼 (입력 시에만 등장) */}
      {isAdding ? (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4">
          <form onSubmit={handleSubmit} className="bg-white w-full max-w-md p-8 rounded-[2.5rem] shadow-2xl space-y-5 animate-in slide-in-from-bottom">
            <h3 className="text-xl font-black text-[#1d3557] mb-2">지출 추가</h3>
            
            <div className="space-y-4">
              <div className="flex gap-2">
                <input type="date" className="flex-1 p-4 bg-slate-50 rounded-2xl outline-none text-sm" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                <select className="p-4 bg-slate-50 rounded-2xl outline-none text-sm" value={formData.payment_method} onChange={e => setFormData({...formData, payment_method: e.target.value})}>
                  <option value="카드">카드</option>
                  <option value="현금">현금</option>
                </select>
              </div>
              <input type="text" placeholder="어디에 쓰셨나요?" className="w-full p-4 bg-slate-50 rounded-2xl outline-none" value={formData.item} onChange={e => setFormData({...formData, item: e.target.value})} autoFocus />
              <input type="number" placeholder="금액 (Euro)" className="w-full p-4 bg-slate-50 rounded-2xl outline-none font-bold text-lg" value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value})} />
            </div>

            <div className="flex gap-3 pt-2">
              <button type="submit" className="flex-[2] bg-[#1d3557] text-white p-4 rounded-2xl font-bold shadow-lg shadow-blue-900/20">저장하기</button>
              <button type="button" onClick={() => setIsAdding(false)} className="flex-1 bg-slate-100 text-slate-500 p-4 rounded-2xl font-bold">취소</button>
            </div>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsAdding(true)} 
          className="fixed bottom-24 right-6 bg-[#e9c46a] text-[#1d3557] w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40"
        >
          <Plus size={32} />
        </button>
      )}
    </div>
  );
}
