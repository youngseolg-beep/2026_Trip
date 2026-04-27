import { Map, BookOpen, Wallet, CheckCircle } from 'lucide-react';

type Props = { activeTab: string; setActiveTab: (tab: string) => void };

export function TabBar({ activeTab, setActiveTab }: Props) {
  const tabs = [
    { id: 'itinerary', label: '일정', icon: Map },
    { id: 'guide', label: '가이드', icon: BookOpen },
    { id: 'expenses', label: '비용', icon: Wallet },
    { id: 'supplies', label: '준비물', icon: CheckCircle },
  ];

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-[#1d3557] rounded-3xl text-[#e9c46a] flex justify-around p-3 shadow-2xl">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex flex-col items-center flex-1 transition p-2 rounded-2xl ${activeTab === tab.id ? 'bg-[#e9c46a]/20' : 'opacity-60'}`}
        >
          <tab.icon className="w-6 h-6" />
          <span className="text-[10px] mt-1 font-bold">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
