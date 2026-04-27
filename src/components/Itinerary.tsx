import { useState, useEffect } from 'react';
import { useItinerary } from '../hooks/useItinerary';
import { MapPin, ExternalLink, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { travelItinerary } from '../lib/data';

export function Itinerary() {
  const { itineraryData, updateItinerary } = useItinerary();
  const [expandedDays, setExpandedDays] = useState<string[]>([travelItinerary[0].date]);
  
  // 로컬 입력 상태를 별도로 관리하여 버벅임 방지
  const [localMapUrls, setLocalMapUrls] = useState<{[key: string]: string}>({});

  useEffect(() => {
    if (itineraryData) {
      const urls: {[key: string]: string} = {};
      itineraryData.forEach(d => { urls[d.id] = d.map_url || ''; });
      setLocalMapUrls(urls);
    }
  }, [itineraryData]);

  const toggleDay = (date: string) => {
    setExpandedDays(prev => prev.includes(date) ? prev.filter(d => d !== date) : [...prev, date]);
  };

  const handleBlur = (itemId: string) => {
    // 포커스를 잃었을 때(입력이 끝났을 때)만 DB에 저장
    updateItinerary(itemId, { map_url: localMapUrls[itemId] || '' });
  };

  return (
    <div className="space-y-3 pb-24">
      {travelItinerary.map((dayGroup, groupIndex) => {
        const isExpanded = expandedDays.includes(dayGroup.date);
        return (
          <div key={dayGroup.date} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
            <button onClick={() => toggleDay(dayGroup.date)} className="w-full flex items-center justify-between p-5 text-left">
              <div className="flex items-center gap-3">
                <span className="bg-[#e9c46a] text-white text-[10px] font-black px-2 py-1 rounded-full">Day {groupIndex + 1}</span>
                <h2 className="text-md font-bold text-[#1d3557]">{dayGroup.date}</h2>
              </div>
              <div className="text-slate-300">{isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</div>
            </button>

            {isExpanded && (
              <div className="px-5 pb-5 space-y-6 border-t border-slate-50 pt-5">
                {dayGroup.items.map((item) => (
                  <div key={item.id} className="relative pl-6 border-l-2 border-slate-100">
                    <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-slate-200 border-2 border-white" />
                    <div className="flex items-center gap-2 text-[#e63946] font-bold text-[11px] mb-1">
                      <Clock size={12} /><span>{item.time}</span>
                      <span className="text-slate-300 ml-1">|</span><span className="text-slate-400">{item.location}</span>
                    </div>
                    <h3 className="font-bold text-[#1d3557] text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-500 mb-3">{item.desc}</p>
                    
                    <div className="flex gap-1.5 mt-2">
                      <input 
                        type="text" 
                        placeholder="Google Map URL"
                        className="flex-1 text-[10px] p-2 bg-slate-50 rounded-lg outline-none"
                        value={localMapUrls[item.id] || ''}
                        onChange={(e) => setLocalMapUrls({...localMapUrls, [item.id]: e.target.value})}
                        onBlur={() => handleBlur(item.id)} // 입력 마치면 저장
                      />
                      {localMapUrls[item.id] && (
                        <a href={localMapUrls[item.id]} target="_blank" rel="noreferrer" className="p-2 bg-[#1d3557] rounded-lg text-white">
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
