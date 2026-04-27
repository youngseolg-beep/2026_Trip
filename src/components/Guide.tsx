import { useState } from 'react';
import { expertGuides } from '../lib/data';
import { ChevronDown, Youtube, BookOpen } from 'lucide-react';

export function Guide() {
  const [openIds, setOpenIds] = useState<string[]>([]);
  const toggle = (id: string) => setOpenIds(prev => prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id]);

  return (
    <div className="space-y-4">
      {expertGuides.map((guide, idx) => (
        <div key={idx} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
          <button onClick={() => toggle(guide.title)} className="w-full text-left p-5 flex justify-between items-center bg-white hover:bg-slate-50 transition">
            <span className='font-bold text-[#1d3557]'>{guide.title}</span>
            <ChevronDown className={`transition-transform text-slate-400 ${openIds.includes(guide.title) ? 'rotate-180' : ''}`} size={20} />
          </button>
          {openIds.includes(guide.title) && (
            <div className="p-5 pt-0 space-y-5">
              <p className="text-sm font-bold text-[#457b9d] bg-[#457b9d]/10 p-3 rounded-xl">{guide.subtitle}</p>
              
              <div className="space-y-3 bg-white border border-slate-100 p-4 rounded-2xl">
                <p className="font-bold text-[#1d3557] flex items-center gap-2"><BookOpen size={18}/> 생존 지침</p>
                {guide.survival.map((s, i) => (
                    <p key={i} className="text-xs text-slate-600 bg-slate-50 p-2 rounded-lg">• {s}</p>
                ))}
              </div>
              
              <div className="space-y-3">
                <p className="font-bold text-[#1d3557]">🗺️ 동선 상세 가이드</p>
                {guide.route.map((r, i) => (
                    <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm">
                        <p className="font-bold text-sm text-[#1d3557]">{r.name}</p>
                        <p className="text-xs text-slate-700 mt-2 leading-relaxed">{r.desc}</p>
                        <p className="text-[10px] text-slate-500 mt-3 italic bg-white p-2 rounded-lg">{r.geo}</p>
                        <p className="text-[11px] text-[#457b9d] mt-2 font-bold bg-[#e9c46a]/20 p-2 rounded-lg flex items-center gap-2">📍 {r.tip}</p>
                        {r.youtube && (
                            <a href={r.youtube.url} target="_blank" className="flex items-center gap-2 text-[11px] text-red-600 mt-3 font-semibold hover:underline">
                                <Youtube size={16}/> {r.youtube.title}
                            </a>
                        )}
                    </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
