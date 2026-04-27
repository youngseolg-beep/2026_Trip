import { useItinerary } from '../hooks/useItinerary';
import { MapPin, ExternalLink, Clock } from 'lucide-react';
// 데이터 파일에서 실제 변수명인 travelItinerary를 가져옵니다.
import { travelItinerary } from '../lib/data';

export function Itinerary() {
  const { itineraryData, updateItinerary } = useItinerary();

  const handleMapUrlChange = (itemId: string, url: string) => {
    // Supabase에 해당 아이템의 ID를 기준으로 지도 URL을 저장/업데이트합니다.
    updateItinerary(itemId, { map_url: url });
  };

  return (
    <div className="space-y-10 pb-24">
      {travelItinerary.map((dayGroup, groupIndex) => (
        <div key={dayGroup.date} className="relative">
          {/* 날짜 헤더 */}
          <div className="sticky top-0 z-10 bg-slate-50/80 backdrop-blur-md py-2 mb-4">
            <h2 className="text-lg font-black text-[#1d3557] flex items-center gap-2">
              <span className="bg-[#e9c46a] text-white px-3 py-1 rounded-full text-sm">Day {groupIndex + 1}</span>
              {dayGroup.date}
            </h2>
          </div>

          <div className="space-y-6 ml-4 border-l-2 border-slate-200 pl-6">
            {dayGroup.items.map((item) => {
              // DB에서 저장된 지도 URL이 있는지 확인
              const dbData = itineraryData?.find(d => d.id === item.id);
              const currentMapUrl = dbData?.map_url || '';

              return (
                <div key={item.id} className="relative bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  {/* 타임라인 불렛 */}
                  <div className="absolute -left-[33px] top-6 w-3 h-3 rounded-full bg-slate-300 border-2 border-white" />
                  
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <div className="flex items-center gap-2 text-[#e63946] font-bold text-sm">
                      <Clock size={14} />
                      <span>{item.time}</span>
                    </div>
                    <span className="bg-slate-100 text-slate-500 px-2 py-1 rounded-lg text-[10px] font-bold uppercase">
                      {item.location}
                    </span>
                  </div>

                  <h3 className="font-bold text-[#1d3557] mb-2 text-lg">{item.title}</h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">{item.desc}</p>
                  
                  {item.tip && (
                    <div className="bg-amber-50 p-3 rounded-xl mb-4 text-xs text-amber-700">
                      <strong>Tip:</strong> {item.tip}
                    </div>
                  )}

                  {/* 지도 입력 영역 */}
                  <div className="pt-3 border-t border-slate-50">
                    <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 mb-2">
                      <MapPin size={12} />
                      <span>위치 메모 (Google Map URL)</span>
                    </div>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        placeholder="링크를 붙여넣으세요"
                        className="flex-1 text-xs p-2.5 bg-slate-50 rounded-xl outline-none focus:ring-2 ring-[#e9c46a]/30 transition-all"
                        value={currentMapUrl}
                        onChange={(e) => handleMapUrlChange(item.id, e.target.value)}
                      />
                      {currentMapUrl && (
                        <a 
                          href={currentMapUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="p-2.5 bg-[#1d3557] rounded-xl text-white flex items-center justify-center shadow-lg shadow-blue-900/20"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
