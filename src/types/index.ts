export type ItineraryItem = {
  date: string;
  items: {
    time: string;
    location: string;
    title: string;
    desc: string;
    tip: string;
    cost: string;
  }[];
};

export type GuideItem = {
  nation: 'gr' | 'tr';
  title: string;
  subtitle: string;
  survival: string[];
  route: {
    name: string;
    mapQuery: string;
    desc: string;
    geo: string;
    tip: string;
    youtube?: { title: string; url: string };
  }[];
};

export type Expense = {
  id: string;
  date: string;
  country: "이스탄불" | "산토리니" | "아테네" | "공통";
  category: "항공권" | "숙박" | "식비" | "교통비" | "여행용품" | "기타";
  item: string;
  amount: number;
  paymentMethod: string;
  isSettled: boolean;
};
