import React, { useState } from 'react';
import { useExpenses } from '../hooks/useExpenses';
import { Plus, Trash2, Calendar } from 'lucide-react';

export function Expenses() {
  const { expenses, addExpense, deleteExpense, loading } = useExpenses();
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    country: '그리스',
    category: '식비',
    item: '',
    amount: '',
    currency: '유로',
    payment_method: '카드'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.item || !formData.amount) {
      alert("내용과 금액을 입력해주세요!");
      return;
    }
    
    try {
      await addExpense({
        ...formData,
        amount: Number(formData.amount)
      });
      setFormData({ ...formData, item: '', amount: '' });
      setIsAdding(false);
    } catch (err) {
      alert("저장 실패! 다시 시도해주세요.");
    }
  };

  const totals = expenses.reduce((acc, exp) => {
    const amt = Number(exp.amount) || 0;
    if (exp.currency === '유로') acc.eur += amt;
    else if (exp.currency === '원') acc.krw += amt;
    else if (exp.currency === '리라') acc.try += amt;
    return acc;
  }, { eur: 0, krw: 0, try: 0 });

  if (loading) return <div className="p-10 text-center text-slate-400">데이터를 불러오는 중...</div>;

  return (
    <div className="space-y-4 pb-24 px-1">
      {/* 통화별 합계 */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-white p-3 rounded-2xl border border-slate-200 text-center shadow-sm">
          <p className="text-[9px] font-bold text-slate-400 uppercase">Total EUR</p>
          <p className="text-sm font-black text-[#1d3557]">€ {totals.eur.toLocaleString()}</p>
        </div>
        <div className="bg-white p-3 rounded-2xl border border-slate-200 text-center shadow-sm">
          <p className="text-[9px] font-bold text-slate-400 uppercase">Total KRW</p>
          <p className="text-sm font-black text-[#e63946]">₩ {totals.krw.toLocaleString()}</p>
        </div>
        <div className="bg-white p-3 rounded-2xl border border-slate-200 text-center shadow-sm">
          <p className="text-[9px] font-bold text-slate-400 uppercase">Total TRY</p>
          <p className="text-sm font-black text-emerald-600">₺ {totals.try.toLocaleString()}</p>
        </div>
      </div>

      {/* 리스트 본문 */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-[10px] text-slate-500">
              <th className="p-3 font-bold">내역/분류</th>
              <th className="p-3 font-bold text-right">금액</th>
              <th className="p-3 w-8"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {expenses.length === 0 ? (
              <tr><td colSpan={3} className="p-10 text-center text-slate-300 text-xs">내역 없음</td></tr>
            ) : (
              expenses.map((exp) => (
                <tr key={exp.id} className="text-sm">
                  <td className="p-3">
                    <p className="font-bold text-[#1d3557] text-xs">{exp.item}</p>
                    <p className="text-[9px] text-slate-400 font-medium">{exp.date} · {exp.country}</p>
                  </td>
                  <td className="p-3 text-right font-black text-slate-700 text-xs">
                    {exp.currency === '유로' ? '€' : exp.currency === '원' ? '₩' : '₺'} {Number(exp.amount).toLocaleString()}
                  </td>
                  <td className="p-3 text-right">
                    <button onClick={() => { if(confirm('삭제하시겠습니까?')) deleteExpense(exp.id) }} className="text-slate-300 hover:text-red-500">
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* 지출 추가 폼 */}
      {isAdding ? (
        <form onSubmit={handleSubmit} className="p-4 bg-white rounded-2xl border-2 border-[#1d3557] space-y-3 shadow-xl mx-1">
          <div className="flex items-center gap-2 mb-2">
            <Calendar size={16} className="text-[#1d3557]" />
            <input 
              type="date" 
              /* 모바일 줌 방지 및 캘린더 접근성 위해 text-sm 적용 */
              className="flex-1 p-2 text-sm border rounded-lg bg-slate-50 outline-none" 
              value={formData.date} 
              onChange={e => setFormData({...formData, date: e.target.value})} 
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <select className="p-2 text-sm border rounded-lg bg-white" value={formData.country} onChange={e => setFormData({...formData, country: e.target.value})}>
              <option value="그리스">그리스</option>
              <option value="이스탄불">이스탄불</option>
              <option value="공통">공통</option>
            </select>
            <select className="p-2 text-sm border rounded-lg bg-white" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
              <option value="식비">식비</option><option value="숙소">숙소</option><option value="교통비">교통비</option>
              <option value="항공권">항공권</option><option value="여행용품">여행용품</option><option value="기타">기타</option>
            </select>
          </div>
          <input type="text" placeholder="결제 내역" className="w-full p-2 text-sm border rounded-lg bg-white" value={formData.item} onChange={e => setFormData({...formData, item: e.target.value})} />
          <div className="grid grid-cols-2 gap-2">
            <input type="number" placeholder="금액" className="w-full p-2 text-sm border rounded-lg bg-white" value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value})} />
            <select className="p-2 text-sm border rounded-lg bg-white" value={formData.currency} onChange={e => setFormData({...formData, currency: e.target.value})}>
              <option value="유로">유로(€)</option><option value="원">원(₩)</option><option value="리라">리라(₺)</option>
            </select>
          </div>
          <div className="flex gap-2">
            <button type="submit" className="flex-1 bg-[#1d3557] text-white p-2 rounded-lg text-sm font-bold shadow-sm">저장</button>
            <button type="button" onClick={() => setIsAdding(false)} className="flex-1 bg-white border p-2 rounded-lg text-sm font-bold">취소</button>
          </div>
        </form>
      ) : (
        <button 
          onClick={() => setIsAdding(true)} 
          className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors mx-1"
        >
          <Plus size={16} /> <span className="text-xs font-bold uppercase tracking-tighter">Add New Expense</span>
        </button>
      )}
    </div>
  );
}
