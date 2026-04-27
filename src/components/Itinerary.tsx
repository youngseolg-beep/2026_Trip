import { useLocalStorage } from '../hooks/useLocalStorage';
import { travelItinerary } from '../lib/data';
import { useState } from 'react';
import { ChevronDown, MapPin, Pencil } from 'lucide-react';
import { ItineraryItem } from '../types';

export function Itinerary() {
  const [items, setItems] = useLocalStorage<ItineraryItem[]>('itinerary', travelItinerary);
  const [openDates, setOpenDates] = useState<string[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newUrl, setNewUrl] = useState('');

  const toggleDate = (date: string) => setOpenDates(prev => prev.includes(date) ? prev.filter(d => d !== date) : [...prev, date]);

  return (
    <div className="space-y-4">
      {items.map((day, idx) => (
        <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <button onClick={() => toggleDate(day.date)} className="w-full font-bold text-[#1d3557] p-5 flex justify-between items-center bg-white hover:bg-slate-50 transition">
                <span className="text-lg">{day.date}</span>
                <ChevronDown className={`transition-transform text-slate-400 ${openDates.includes(day.date) ? 'rotate-180' : ''}`} size={20} />
            </button>
            {openDates.includes(day.date) && (
                <div className="p-5 pt-0 space-y-4">
                    {day.items.map((item) => (
                        <div key={item.id} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <div className='flex justify-between items-start'>
                                <p className="text-xs font-semibold text-slate-500">{item.time} | {item.location}</p>
                                <button onClick={() => { setEditingId(item.id); setNewUrl(item.mapUrl); }} className='text-xs flex items-center gap-1 text-[#457b9d] bg-white px-2 py-1 rounded shadow-sm border border-slate-200'>
                                    <Pencil size={12}/> 수정
                                </button>
                            </div>
                            <p className="font-bold text-base text-[#1d3557] mt-1">{item.title}</p>
                            <p className="text-sm text-slate-700 mt-1">{item.desc}</p>
                            {editingId === item.id ? (
                                <div className='mt-2 flex flex-col gap-2'>
                                    {item.mapUrl && <a href={item.mapUrl} target="_blank" className="text-[10px] text-[#457b9d] block font-bold underline truncate"><MapPin size={10} className='inline'/> {item.mapUrl}</a>}
                                    <input value={newUrl} onChange={e => setNewUrl(e.target.value)} className='text-xs p-1 border rounded' placeholder='지도 URL (수정)'/>
                                    <div className='flex gap-2'>
                                        <input value={item.tip} onChange={e => {
                                            setItems(items.map(d => d.date === day.date ? {...d, items: d.items.map(it => it.id === item.id ? {...it, tip: e.target.value} : it)} : d));
                                        }} className='text-xs p-1 border rounded flex-1' placeholder='팁'/>
                                        <input value={item.cost} onChange={e => {
                                            setItems(items.map(d => d.date === day.date ? {...d, items: d.items.map(it => it.id === item.id ? {...it, cost: e.target.value} : it)} : d));
                                        }} className='text-xs p-1 border rounded w-20' placeholder='비용'/>
                                    </div>
                                    <button onClick={() => { 
                                        setItems(items.map(d => d.date === day.date ? {...d, items: d.items.map(it => it.id === item.id ? {...it, mapUrl: newUrl} : it)} : d));
                                        setEditingId(null); 
                                    }} className='text-xs bg-[#1d3557] text-white px-2 py-1 rounded'>저장</button>
                                </div>
                            ) : (
                                <>
                                    {item.mapUrl && <a href={item.mapUrl} target="_blank" className="text-[10px] text-[#457b9d] mt-2 block font-bold underline truncate"><MapPin size={10} className='inline'/> {item.mapUrl}</a>}
                                    <p className="text-xs text-slate-500 mt-2 bg-white p-2 rounded-lg inline-block">💡 {item.tip} | 지출: {item.cost}</p>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
      ))}
    </div>
  );
}
