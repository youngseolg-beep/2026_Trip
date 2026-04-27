import { useLocalStorage } from '../hooks/useLocalStorage';
import { SupplyItem } from '../types';

const initialSupplies: SupplyItem[] = [
    { id: '1', category: '의류', detail: '운동화', packed: false },
    { id: '2', category: '의류', detail: '선글라스', packed: false }
];

export function Supplies() {
  const [supplies, setSupplies] = useLocalStorage<SupplyItem[]>('supplies', initialSupplies);
  
  const toggleItem = (id: string, field: 'packed') => {
    setSupplies(supplies.map(s => s.id === id ? { ...s, [field]: !s[field] } : s));
  };

  const categories = Array.from(new Set(supplies.map(s => s.category)));

  return (
    <div className="space-y-4">
      {categories.map(cat => (
        <div key={cat} className="space-y-2">
          <h3 className="font-bold text-[#1d3557] border-b border-[#e9c46a]">{cat}</h3>
          {supplies.filter(s => s.category === cat).map(item => (
            <div key={item.id} className="bg-white p-3 rounded-xl border border-slate-100 flex items-center gap-3 shadow-sm">
                <input type='checkbox' checked={item.packed} onChange={() => toggleItem(item.id, 'packed')} className="w-5 h-5"/>
                <span className={`font-bold text-sm ${item.packed ? 'line-through opacity-50' : 'text-[#1d3557]'}`}>{item.detail}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
