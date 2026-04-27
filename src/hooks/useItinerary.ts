import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export function useItinerary() {
  const [itineraryData, setItineraryData] = useState<any[]>([]);

  const fetchItinerary = async () => {
    const { data } = await supabase.from('itinerary').select('*');
    if (data) setItineraryData(data);
  };

  useEffect(() => { fetchItinerary(); }, []);

  const updateItinerary = async (id: string, updates: any) => {
    const { error } = await supabase.from('itinerary').upsert({ id, ...updates });
    if (!error) fetchItinerary();
  };

  return { itineraryData, updateItinerary };
}
