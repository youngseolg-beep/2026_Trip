import { useItinerary } from '../hooks/useItinerary';
import { MapPin, ExternalLink } from 'lucide-react';

// 여행 데이터는 기존 lib/data.ts 것을 사용한다고 가정합니다.
import { itinerary } from '../lib/data';

export function Itinerary() {
  const { itineraryData, updateItinerary } = useItinerary();

  const handleMapUrlChange = (dayId: string, url: string) => {
    updateItinerary(dayId, { map_url: url });
  };

  return (
    <div className="space-y-8 pb-20">
      {itinerary.map((item) => {
        // DB에서 해당 일차의 map_url을 찾습니다.
        const dbData = itineraryData.find(d => d.id === item.id);
        const currentMapUrl = dbData?.map_url || '';

        return (
          <div key={item.id} className="relative pl-8 border-l-2 border-slate-100 last:border-0">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#e9c46a] border-4 border-white shadow-sm" />
            
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xs font-black text-[#e9c46a] uppercase">{item.day}</span>
              <h3 className="font-bold text-[#1d3557]">{item.title}</h3>
            </div>

            <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">{item.content}</p>
              
              <div className="space-y-2 pt-2 border-t border-slate-50">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                  <MapPin size={14} />
                  <span>Google Map URL</span>
                </div>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="구글맵 링크를 붙여넣으세요"
                    className="flex-1 text-xs p-2 bg-slate-50 rounded-lg outline-none focus:ring-1 ring-[#e9c46a]"
                    value={currentMapUrl}
                    onChange={(e) => handleMapUrlChange(item.id, e.target.value)}
                  />
                  {currentMapUrl && (
                    <a href={currentMapUrl} target="_blank" rel="noreferrer" className="p-2 bg-slate-100 rounded-lg text-slate-500">
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
