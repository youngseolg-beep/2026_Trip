import { useSupplies } from '../hooks/useSupplies';
import { SupplyItem } from '../types';

// 초기 데이터 (폴라로이드 항목 추가됨)
const initialSupplies: SupplyItem[] = [
  { id: 'prep-1', category: '사전준비/서류', detail: '아크로폴리스 티켓 (hhticket.gr)', packed: false },
  { id: 'prep-2', category: '사전준비/서류', detail: '신 아크로폴리스 박물관 티켓', packed: false },
  { id: 'prep-3', category: '사전준비/서류', detail: '여권 원본 (만료일 6개월 확인)', packed: false },
  { id: 'prep-4', category: '사전준비/서류', detail: '여권 사본 (분실 대비용)', packed: false },
  { id: 'prep-5', category: '사전준비/서류', detail: '항공권 E-티켓 (캡처/프린트)', packed: false },
  { id: 'prep-6', category: '사전준비/서류', detail: '숙소 바우처 (캡처/프린트)', packed: false },
  { id: 'pay-1', category: '결제 수단', detail: '트래블 카드 (월렛/로그)', packed: false },
  { id: 'pay-2', category: '결제 수단', detail: '현금 유로 (€)', packed: false },
  { id: 'pay-3', category: '결제 수단', detail: '현금 리라 (시내 환전용 유로)', packed: false },
  { id: 'wear-1', category: '의류/신발', detail: '가디건/셔츠 (일교차 대비)', packed: false },
  { id: 'wear-2', category: '의류/신발', detail: '얇은 바람막이 (비/바람 대비)', packed: false },
  { id: 'wear-3', category: '의류/신발', detail: '걷기 편한 운동화 (접지력 필수)', packed: false },
  { id: 'acc-1', category: '잡화/액세서리', detail: '얇고 넓은 스카프 (사원 입장용)', packed: false },
  { id: 'acc-2', category: '잡화/액세서리', detail: '선글라스 & 선크림', packed: false },
  { id: 'acc-3', category: '잡화/액세서리', detail: '챙이 넓은 모자', packed: false },
  { id: 'san-1', category: '세면/위생', detail: '칫솔 & 치약 (호텔 미제공 대비)', packed: false },
  { id: 'san-2', category: '세면/위생', detail: '린스/트리트먼트 (석회수 대비)', packed: false },
  { id: 'med-1', category: '상비약', detail: '소화제 & 지사제 (물갈이 대비)', packed: false },
  { id: 'med-2', category: '상비약', detail: '진통제 & 밴드류', packed: false },
  { id: 'med-3', category: '상비약', detail: '멀미약 (산토리니 페리/요트용)', packed: false },
  { id: 'elec-1', category: '전자기기', detail: '보조 배터리 & 충전 케이블', packed: false },
  { id: 'elec-2', category: '전자기기', detail: '멀티 어댑터 (돼지코)', packed: false },
  { id: 'elec-3', category: '전자기기', detail: '통합 유심 또는 eSIM (EU/튀르키예)', packed: false },
  /* --- 폴라로이드 항목 추가 --- */
  { id: 'elec-4', category: '전자기기', detail: '폴라로이드 카메라', packed: false },
  { id: 'elec-5', category: '전자기기', detail: '폴라로이드 필름 (넉넉히)', packed: false },
  /* -------------------------- */
  { id: 'etc-1', category: '기타 필수품', detail: '도난 방지 가방 (힙색/크로스백)', packed: false },
  { id: 'etc-2', category: '기타 필수품', detail: '휴대용 물통', packed: false },
  { id: 'etc-3', category: '기타 필수품', detail: '작은 3단 우산', packed: false },
];

export function Supplies() {
  const { supplies, toggleItem, loading } = useSupplies(initialSupplies);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-20">
        <div className="text-[#1d3557] font-bold animate-pulse">데이터를 불러오는 중...</div>
      </div>
    );
  }

  const currentSupplies = supplies.length > 0 ? supplies : initialSupplies;
  const categories = Array.from(new Set(currentSupplies.map(s => s.category)));

  return (
    <div className="space-y-6 pb-20">
      {categories.map(cat => (
        <div key={cat} className="space-y-3">
          <h3 className="font-bold text-[#1d3557] border-b-2 border-[#e9c46a] pb-1 text-md">
            {cat}
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {currentSupplies.filter(s => s.category === cat).map(item => (
              <div 
                key={item.id} 
                onClick={() => toggleItem(item.id)}
                className="bg-white p-3 rounded-xl border border-slate-100 flex items-center gap-3 shadow-sm active:bg-slate-50 transition-colors cursor-pointer"
              >
                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${item.packed ? 'bg-[#e9c46a] border-[#e9c46a]' : 'border-slate-300'}`}>
                  {item.packed && <span className="text-white text-xs">✓</span>}
                </div>
                <span className={`font-bold text-sm transition-all ${item.packed ? 'line-through opacity-50 text-slate-400' : 'text-[#1d3557]'}`}>
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
