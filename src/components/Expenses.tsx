import { useLocalStorage } from '../hooks/useLocalStorage';
import { initialExpenses } from '../lib/data';
import { Expense } from '../types';
import { useState } from 'react';
import { Trash2, Edit2, PlusCircle, Check } from 'lucide-react';

export function Expenses() {
  const [expenses, setExpenses] = useLocalStorage<Expense[]>('expenses', initialExpenses);
  const [item, setItem] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState<Expense['category']>('식비');
  const [country, setCountry] = useState<Expense['country']>('공통');
  const [paymentMethod, setPaymentMethod] = useState('카드');
  const [editingId, setEditingId] = useState<string | null>(null);

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  const addOrUpdateExpense = () => {
    if (!item || !amount) return;
    if (editingId) {
      setExpenses(expenses.map(e => e.id === editingId ? { ...e, item, amount: Number(amount), category, country, paymentMethod } : e));
      setEditingId(null);
    } else {
      setExpenses([...expenses, {
        id: Date.now().toString(),
        date: new Date().toISOString().split('T')[0],
        category,
        country,
        item,
        amount: Number(amount),
        paymentMethod,
        isSettled: false
      }]);
    }
    setItem(''); setAmount('');
  };

  const deleteExpense = (id: string) => setExpenses(expenses.filter(e => e.id !== id));
  const editExpense = (e: Expense) => { setEditingId(e.id); setItem(e.item); setAmount(e.amount.toString()); setCategory(e.category); setCountry(e.country); };

  return (
    <div className="space-y-6">
      <div className="bg-[#1d3557] text-[#e9c46a] p-6 rounded-3xl shadow-lg shadow-[#1d3557]/20">
        <h2 className="text-sm uppercase tracking-widest opacity-80 font-medium">총 지출액</h2>
        <p className="text-4xl font-bold font-serif mt-1">{total.toLocaleString()}원</p>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
        <input placeholder="항목명" value={item} onChange={e => setItem(e.target.value)} className="w-full bg-slate-50 p-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-[#1d3557]/20"/>
        <input type="number" placeholder="금액 (원)" value={amount} onChange={e => setAmount(e.target.value)} className="w-full bg-slate-50 p-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-[#1d3557]/20"/>
        <div className='flex gap-2'>
            <select value={country} onChange={e => setCountry(e.target.value as any)} className="w-1/2 bg-slate-50 p-3 rounded-xl border border-slate-200 outline-none">
                {["이스탄불", "산토리니", "아테네", "공통"].map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={category} onChange={e => setCategory(e.target.value as any)} className="w-1/2 bg-slate-50 p-3 rounded-xl border border-slate-200 outline-none">
            {["항공권", "숙박", "식비", "교통비", "여행용품", "기타"].map(c => <option key={c} value={c}>{c}</option>)}
            </select>
        </div>
        <button onClick={addOrUpdateExpense} className="w-full bg-[#1d3557] text-[#e9c46a] p-3 rounded-2xl font-bold uppercase tracking-wider flex items-center justify-center gap-2">
            {editingId ? <><Check size={18}/> 수정 완료</> : <><PlusCircle size={18}/> 추가하기</>}
        </button>
      </div>
      
      <div className='space-y-3'>
        {expenses.map(e => (
            <div key={e.id} className="bg-white border border-slate-100 p-4 rounded-2xl flex justify-between items-center shadow-sm">
            <div>
                <p className="font-bold text-slate-800">{e.item}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">{e.date} / {e.country} / {e.category} / {e.paymentMethod}</p>
            </div>
            <div className='flex gap-2 items-center'>
                <p className="font-bold text-[#1d3557] text-sm">{e.amount.toLocaleString()}원</p>
                <button onClick={() => editExpense(e)} className='text-slate-400 hover:text-slate-600'><Edit2 size={16}/></button>
                <button onClick={() => deleteExpense(e.id)} className='text-red-400 hover:text-red-600'><Trash2 size={16}/></button>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
}
