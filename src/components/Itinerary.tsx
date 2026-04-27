import { useState } from 'react';
import { useItinerary } from '../hooks/useItinerary';
import { MapPin, ExternalLink, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { travelItinerary } from '../lib/data';

export function Itinerary() {
  const { itineraryData, updateItinerary } = useItinerary();
  
  // 현재 어떤 날짜가 펼쳐져 있는지 관리하는 상태 (기본적으로 첫 번째 날짜만 열어둠)
  const [expandedDays, setExpandedDays] = useState<string[]>([travelItinerary[0].date]);

  const toggleDay = (date: string) => {
    setExpandedDays(prev => 
      prev.includes(date) 
        ? prev.filter(d => d !== date) 
        : [...prev, date]
    );
  };

  const handleMapUrlChange = (itemId: string, url: string) => {
    updateItinerary(itemId, { map_url: url });
  };

  return (
    <div className="space-y-3 pb-24">
      {travelItinerary.map((dayGroup, groupIndex) => {
        const isExpanded = expandedDays.includes(dayGroup.date);

        return (
          <div key={dayGroup.date} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
            {/* 날짜 헤더 - 클릭 시 토글 */}
            <button 
              onClick={() => toggleDay(dayGroup.date)}
              className="w-full flex items-center justify-between p-5 text-left bg-white active:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="bg-[#e9c46a] text-white text-[10px] font-black px-2 py-1 rounded-full uppercase">
                  Day {groupIndex + 1}
                </span>
                <h2 className="text-md font-bold text-[#1d3557]">{dayGroup.date}</h2>
              </div>
              <div className="text-slate-300">
                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </button>

            {/* 상세 일정 영역 (펼쳐졌을 때만 보임) */}
            {isExpanded && (
              <div className="px-5 pb-5 space-y-6 border-t border-slate-50 pt-5 animate-in fade-in duration-300">
                {dayGroup.items.map((item) => {
                  const dbData = itineraryData?.find(d => d.id === item.id);
                  const currentMapUrl = dbData?.map_url || '';

                  return (
                    <div key={item.id} className="relative pl-6 border-l-2 border-slate-100">
                      {/* 타임라인 점 */}
                      <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-slate-200 border-2 border-white" />
                      
                      <div className="flex items-center gap-2 text-[#e63946] font-bold text-[11px] mb-1">
                        <Clock size={12} />
                        <span>{item.time}</span>
                        <span className="text-slate-300 ml-1">|</span>
                        <span className="text-slate-400">{item.location}</span>
                      </div>

                      <h3 className="font-bold text-[#1d3557] text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-3">{item.desc}</p>
                      
                      {item.tip && (
                        <div className="bg-amber-50/50 p-2.5 rounded-xl mb-3 text-[10px] text-amber-700 leading-normal">
                          <span className="font-bold">💡 Tip:</span> {item.tip}
                        </div>
                      )}

                      {/* 구글맵 입력부 */}
                      <div className="flex gap-1.5 mt-2">
                        <input 
                          type="text" 
                          placeholder="Google Map URL"
                          className="flex-1 text-[10px] p-2 bg-slate-50 rounded-lg outline-none focus:ring-1 ring-[#e9c46a]"
                          value={currentMapUrl}
                          onChange={(e) => handleMapUrlChange(item.id, e.target.value)}
                        />
                        {currentMapUrl && (
                          <a 
                            href={currentMapUrl} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="p-2 bg-[#1d3557] rounded-lg text-white"
                          >
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
