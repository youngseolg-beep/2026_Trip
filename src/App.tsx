import { useState } from 'react';
import { TabBar } from './components/TabBar';
import { Itinerary } from './components/Itinerary';
import { Guide } from './components/Guide';
import { Expenses } from './components/Expenses';
import { Supplies } from './components/Supplies';

export default function App() {
  const [activeTab, setActiveTab] = useState('itinerary');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      <header className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-slate-200 z-10">
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
            <h1 className="text-lg font-bold text-[#1d3557] font-serif">2026 Mediterranean Journey</h1>
            <div className="w-8 h-8 rounded-full bg-[#1d3557] flex items-center justify-center text-[#e9c46a] font-bold">Y</div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4">
        {activeTab === 'itinerary' && <Itinerary />}
        {activeTab === 'guide' && <Guide />}
        {activeTab === 'expenses' && <Expenses />}
        {activeTab === 'supplies' && <Supplies />}
      </main>

      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
