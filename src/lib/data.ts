import { ItineraryItem, GuideItem, Expense } from '../types';

export const travelItinerary = [
  {
    date: "5/1 (금)",
    items: [
      { id: '1', time: "19:40-22:00", location: "이스탄불", title: "공항 도착 및 숙소 이동", desc: "[석식] 기내식 또는 공항 간단 식사", tip: "택시/호텔 픽업", cost: "-", mapUrl: "" }
    ]
  },
  {
    date: "5/2 (토)",
    items: [
      { id: '2', time: "08:00-09:30", location: "숙소", title: "조식 및 이동 준비", desc: "[조식] 호텔 조식", tip: "-", cost: "포함", mapUrl: "" },
      { id: '3', time: "13:45-15:00", location: "Canaves Ena", title: "공항 도착 및 이아 이동", desc: "[체크인] 웰컴 드링크", tip: "호텔 픽업 대기", cost: "€50", mapUrl: "" },
      { id: '4', time: "18:30-21:00", location: "Canaves Ena", title: "이아 일몰 & 석식", desc: "[석식] 숙소 테라스 / Nikos Place", tip: "도보 이동", cost: "€30", mapUrl: "" }
    ]
  },
  {
    date: "5/3 (일)",
    items: [
      { id: '5', time: "08:30-10:00", location: "Canaves Ena", title: "숙소 조식", desc: "[조식] 절벽 뷰 럭셔리 조식", tip: "숙소 내 이동", cost: "포함", mapUrl: "" },
      { id: '6', time: "11:30-13:30", location: "Canaves Ena", title: "암무디 베이 정복", desc: "[중식] Ammoudi Fish / Sunset", tip: "도보(계단)", cost: "€150", mapUrl: "" },
      { id: '7', time: "19:00-21:00", location: "Canaves Ena", title: "이아의 밤", desc: "[석식] ADAMI / 1800-Floga", tip: "숙소 내 이동", cost: "€200", mapUrl: "" }
    ]
  },
  {
    date: "5/4 (월)",
    items: [
      { id: '8', time: "08:30-10:00", location: "Canaves Ena", title: "마지막 이아 조식", desc: "[조식] 체크아웃 준비", tip: "-", cost: "포함", mapUrl: "" },
      { id: '9', time: "11:30-13:00", location: "피라 숙소", title: "체크아웃 후 오찬", desc: "[중식] Lotza / Thalami", tip: "짐 들고 도보", cost: "€80", mapUrl: "" },
      { id: '10', time: "13:30-20:00", location: "피라 숙소", title: "[핵심] 요트 투어", desc: "[선상식] 식사 포함", tip: "투어 차량 픽업", cost: "€450", mapUrl: "" },
      { id: '11', time: "20:30-22:00", location: "피라 숙소", title: "피라 체크인 및 저녁", desc: "[석식] 숙소 테라스 / Lucky's", tip: "요트 차량 드랍", cost: "€20", mapUrl: "" }
    ]
  },
  {
    date: "5/5 (화)",
    items: [
      { id: '12', time: "08:30-10:00", location: "피라 숙소", title: "숙소 조식", desc: "[조식] 피라 칼데라 뷰", tip: "숙소 내 이동", cost: "포함", mapUrl: "" },
      { id: '13', time: "11:30-13:00", location: "피라 숙소", title: "피라 마을 구경", desc: "[중식] Parea / Mama Thira", tip: "도보 산책", cost: "€70", mapUrl: "" },
      { id: '14', time: "14:00-16:30", location: "피라 숙소", title: "와이너리 투어", desc: "[시음] 베네차노스 (노을 전)", tip: "로컬 버스", cost: "€80", mapUrl: "" },
      { id: '15', time: "19:00-20:30", location: "피라 숙소", title: "피라 야경 정복", desc: "[Bar] PK Cocktail / V-Lounge", tip: "도보", cost: "€100", mapUrl: "" },
      { id: '16', time: "20:45-22:30", location: "피라 숙소", title: "맘마미아 시네마", desc: "[석식] Volkan / Idol", tip: "도보", cost: "€60", mapUrl: "" }
    ]
  },
  {
    date: "5/6 (수)",
    items: [
      { id: '17', time: "08:30-10:00", location: "피라 숙소", title: "산토리니 마지막 조식", desc: "[조식] 짐 보관 후 자유시간", tip: "-", cost: "포함", mapUrl: "" },
      { id: '18', time: "11:30-13:00", location: "피라 숙소", title: "마지막 미식 정복", desc: "[중식] Naoussa / Galini", tip: "도보", cost: "€120", mapUrl: "" },
      { id: '19', time: "14:30-18:30", location: "아테네 이동", title: "공항 이동 및 비행기", desc: "-", tip: "택시 이용", cost: "€30", mapUrl: "" },
      { id: '20', time: "19:30-23:00", location: "A for Athens", title: "숙소 체크인 및 야경", desc: "[칵테일] 아크로폴리스 야경", tip: "도보", cost: "€60", mapUrl: "" }
    ]
  },
  {
    date: "5/7 (목)",
    items: [
      { id: '21', time: "07:00-08:00", location: "숙소 근처", title: "간단한 조식", desc: "[조식] 그리스식 빵과 커피", tip: "-", cost: "€20", mapUrl: "" },
      { id: '22', time: "08:00-10:30", location: "아테네", title: "아크로폴리스 오픈런", desc: "가이드 참조 관람", tip: "도보", cost: "-", mapUrl: "" },
      { id: '23', time: "10:30-12:30", location: "아테네", title: "신 아크로폴리스 박물관", desc: "유적 진품 관람", tip: "도보", cost: "-", mapUrl: "" },
      { id: '24', time: "12:30-14:30", location: "플라카 지구", title: "플라카 런치", desc: "[중식] 그리스 정식", tip: "도보", cost: "€80", mapUrl: "" },
      { id: '25', time: "18:25-21:30", location: "이스탄불 이동", title: "이스탄불행 비행 및 체크인", desc: "[석식] 숙소 근처 간단 야식", tip: "공항 이동/픽업", cost: "-", mapUrl: "" }
    ]
  },
  {
    date: "5/8 (금)",
    items: [
      { id: '26', time: "07:30-08:30", location: "숙소", title: "이스탄불 조식", desc: "[조식] 터키식 카흐발트", tip: "-", cost: "포함", mapUrl: "" },
      { id: '27', time: "08:30-10:30", location: "구시가지", title: "아야소피아 & 블루모스크", desc: "역사 지구 투어", tip: "도보", cost: "-", mapUrl: "" },
      { id: '28', time: "10:30-12:00", location: "구시가지", title: "예레바탄 사라이", desc: "지하 수조 관람", tip: "도보", cost: "-", mapUrl: "" },
      { id: '29', time: "12:00-13:30", location: "구시가지", title: "점심: Sehzade Cag Kebap", desc: "[중식] 양꼬치 케밥 맛집", tip: "도보", cost: "€40", mapUrl: "" },
      { id: '30', time: "13:30-15:30", location: "바자르", title: "그랜드 & 이집션 바자르", desc: "쇼핑 (31번 가게 로쿰)", tip: "도보", cost: "-", mapUrl: "" },
      { id: '31', time: "15:30-17:00", location: "카라쾨이", title: "소카크 케밥", desc: "[간식] 고등어 케밥 체험", tip: "트램(T1)", cost: "-", mapUrl: "" },
      { id: '32', time: "17:00-19:00", location: "신시가지", title: "돌마바흐체 궁전", desc: "궁전 내부 관람", tip: "트램 이동", cost: "-", mapUrl: "" },
      { id: '33', time: "19:00-21:00", location: "보스포루스", title: "선셋 투어", desc: "[석식] 배 위에서 노을 감상", tip: "항구 이동", cost: "-", mapUrl: "" },
      { id: '34', time: "21:00-23:00", location: "Nusret", title: "저녁: Nusret (누스렛)", desc: "[석식] 솔트배 스테이크", tip: "택시 이동", cost: "€250", mapUrl: "" }
    ]
  },
  {
    date: "5/9 (토)",
    items: [
      { id: '35', time: "11:00-13:00", location: "카라쾨이", title: "카이막 조식 (브런치)", desc: "[조식] 최고의 카이막 맛집", tip: "도보", cost: "€30", mapUrl: "" },
      { id: '36', time: "13:00-15:00", location: "카라쾨이", title: "스타벅스 카라쾨이", desc: "[카페] 골든혼 뷰 루프탑", tip: "도보", cost: "-", mapUrl: "" },
      { id: '37', time: "15:00-17:00", location: "신시가지", title: "갈라타 탑 주변 산책", desc: "가벼운 쇼핑 및 골목 구경", tip: "도보", cost: "-", mapUrl: "" },
      { id: '38', time: "18:00-21:00", location: "공항 이동", title: "공항 수속 및 대기", desc: "[석식] 공항 라운지/식사", tip: "셔틀 이동", cost: "-", mapUrl: "" }
    ]
  },
  {
    date: "5/10 (일)",
    items: [
      { id: '39', time: "-", location: "한국", title: "인천 공항 도착", desc: "안전 귀국", tip: "-", cost: "-", mapUrl: "" }
    ]
  }
];

export const expertGuides: GuideItem[] = [
  {
    nation: "gr",
    title: "🇬🇷 아크로폴리스 (Acropolis) 마스터 코스",
    subtitle: "인파를 피해 감동을 극대화하는 남사면(South Slope) 동선",
    survival: [
      "마찰력 좋은 운동화 (필수): 2,500년 된 대리석이 천연 빙판길 같습니다. 절대 샌들 금지!",
      "생수와 선글라스: 꼭대기엔 매점도, 그늘도 없습니다. 5월의 태양을 피할 선글라스와 얼음물 필수.",
      "가벼운 몸: 큰 백팩은 제지당합니다. 최대한 가볍게 가세요."
    ],
    route: [
      {
        name: "1. 디오니소스 극장 (남사면 쪽문 입장)",
        mapQuery: "Theatre of Dionysus",
        desc: "기원전 6세기에 지어진 세계 최초의 극장입니다. 소포클레스의 '오이디푸스 왕', 에우리피데스의 비극이 처음 상연된 곳이죠. 대리석 의자 중 가장 앞줄, 등받이가 있고 조각이 화려한 의자는 귀족과 제사장들의 지정석(VIP)이었습니다. 이 자리에 앉아 고대 그리스인들이 느꼈을 카타르시스를 상상해 보세요.",
        geo: "지리와 역사의 연결: 왜 극장을 산기슭에 지었을까요? 언덕의 자연스러운 경사를 그대로 활용하여 1만 7천 석의 객석을 만들었으며, 소리가 위로 퍼져나가는 완벽한 천연 음향(Acoustic) 시스템을 갖추고 있습니다.",
        tip: "📍팁: 극장 무대(오케스트라) 정중앙에 서서 박수를 쳐보세요. 마이크 없이도 소리가 끝까지 울려 퍼집니다.",
        youtube: { title: "EBS 다큐 - 고대 그리스 비극의 탄생", url: "https://www.youtube.com/results?search_query=EBS+다큐+그리스+비극" }
      },
      {
        name: "2. 오데온 헤로데스 아티쿠스",
        mapQuery: "Odeon of Herodes Atticus",
        desc: "2세기 로마의 대부호 헤로데스 아티쿠스가 죽은 아내를 기리며 지어 아테네 시민에게 기증한 음악당입니다. 3층 높이의 로마식 아치형 외벽이 압권이며, 현재도 야니(Yanni), 조수미 등 세계적인 거장들이 여름밤마다 공연을 여는 '현역 극장'입니다.",
        geo: "시야의 미학: 밑에서 올려다보는 것이 아니라, 절벽 길을 걸으며 '위에서 아래로' 극장 전체를 조망하게 됩니다. 압도적인 스케일이 한눈에 들어옵니다.",
        tip: "📍사진 명당: 이곳을 지나 정문(프로필라이아)으로 꺾어지기 직전의 코너가 극장을 배경으로 찍는 최고의 포토존입니다.",
        youtube: { title: "야니(Yanni) 아크로폴리스 라이브 공연", url: "https://www.youtube.com/results?search_query=Yanni+Live+at+the+Acropolis+1080p" }
      },
      {
        name: "3. 아테나 니케 신전",
        mapQuery: "Temple of Athena Nike",
        desc: "정문을 통과하기 전 오른쪽 절벽에 있는 작고 우아한 이오니아식 신전입니다. 승리의 여신 '니케(Nike, 나이키의 어원)'를 모셨습니다. 당시 펠로폰네소스 전쟁 중이던 아테네 시민들은 승리가 절실했습니다.",
        geo: "아테네인의 집착: 본래 니케는 날개가 달린 여신입니다. 하지만 아테네인들은 승리의 여신이 다른 곳으로 날아가지 못하도록 '날개를 자른(Apteros)' 니케 상을 모셨습니다. 그들의 간절함이 돋보이는 위치입니다.",
        tip: "📍주의: 매우 좁은 절벽 위에 있으니 관람 시 발밑을 조심하세요.",
        youtube: { title: "TED-Ed - 아테네의 숨겨진 신화들", url: "https://www.youtube.com/results?search_query=TED+Ed+Greek+Mythology+Athena" }
      },
      {
        name: "4. 프로필라이아 (정문)",
        mapQuery: "Propylaea",
        desc: "천재 건축가 므네시클레스가 설계한 웅장한 대리석 대문. 세속의 공간에서 신성한 신의 영역으로 넘어가는 결계입니다. 이 문을 지날 때는 반드시 천장을 올려다보세요. 2500년 전 대리석을 깎아 만든 우물 정(井)자 모양의 화려한 천장 장식이 남아 있습니다.",
        geo: "극적인 연출의 절정: 고대 건축가들은 바위산의 비좁은 입구 지형을 역이용했습니다. 거대한 문으로 시야를 가렸다가, 어두운 문을 통과하는 순간 태양빛을 받는 거대한 파르테논 신전이 눈앞에 폭발하듯 나타나도록 설계했습니다.",
        tip: "📍감동 포인트: 바닥만 보지 말고, 문을 통과하며 고개를 들어 파르테논과 처음 마주치는 순간을 만끽하세요.",
        youtube: { title: "걸어서 세계속으로 - 아테네 아크로폴리스", url: "https://www.youtube.com/results?search_query=걸어서+세계속으로+아테네" }
      },
      {
        name: "5. 파르테논 신전",
        mapQuery: "Parthenon",
        desc: "유네스코 세계문화유산 1호. 지혜의 여신 아테나를 위한 신전입니다. 페이디아스가 총감독을 맡은 이 건물에는 '직선'이 하나도 없습니다. 착시를 교정하기 위해 기둥 배흘림(엔타시스) 기법을 썼고, 바닥의 중앙부는 살짝 솟아오르게 만들었습니다. 1687년 오스만 제국이 이곳을 화약고로 쓰다 베네치아군의 포탄에 맞아 지붕이 날아가는 비극을 겪었습니다.",
        geo: "완벽한 황금비율: 하늘과 가장 가까운 평평한 바위산 중앙에 위치해, 아테네 시내 어디서든 우러러볼 수 있는 완벽한 랜드마크입니다.",
        tip: "📍그늘 위치: 신전 주변은 땡볕입니다. 뒤쪽으로 돌아가 대형 국기 게양대(전망대) 쪽에 서면 시내 전경이 다 보이고 시원한 바람이 붑니다.",
        youtube: { title: "EBS 위대한 유산 - 파르테논의 비밀", url: "https://www.youtube.com/results?search_query=EBS+파르테논의+비밀" }
      },
      {
        name: "6. 에레크테이온 신전",
        mapQuery: "Erechtheion",
        desc: "지붕을 이고 있는 6명의 아름다운 소녀상(카리아티드)으로 유명한 신전입니다. 아테네의 수호신 자리를 놓고 지혜의 여신 '아테나'와 바다의 신 '포세이돈'이 대결을 펼친 신화 속 무대입니다. 포세이돈은 삼지창으로 바위를 쳐 소금물을 솟게 했고, 아테나는 평화를 상징하는 '올리브 나무'를 주어 승리했습니다.",
        geo: "신화의 증거: 지금도 신전 바로 옆에는 아테나가 선물했다는 최초의 올리브 나무(의 후손)가 심어져 있습니다.",
        tip: "📍진품 정보: 야외에 서 있는 6명의 소녀상은 매연과 산성비로 인한 훼손을 막기 위해 세워둔 복제품입니다. 진품 5개는 신 아크로폴리스 박물관에, 1개는 영국 대영박물관에 빼앗겨 있습니다.",
        youtube: { title: "Smarthistory - 에레크테이온과 카리아티드", url: "https://www.youtube.com/results?search_query=Smarthistory+Erechtheion" }
      }
    ]
  },
  {
    nation: "tr",
    title: "🇹🇷 오스만 제국의 심장 투어",
    subtitle: "비잔틴과 오스만의 겹겹이 쌓인 역사를 벗겨내는 동선",
    survival: [
      "스카프 준비: 블루모스크 등 사원 입장 시 여성은 머리를 가릴 스카프가 필수입니다.",
      "기도 시간 확인: 금요일 낮이나 하루 5번의 기도 시간에는 이교도의 사원 내부 입장이 제한될 수 있습니다.",
      "소매치기 주의: 바자르와 트램(T1) 안에서는 가방을 무조건 앞으로 메세요."
    ],
    route: [
      {
        name: "1. 아야소피아 (Hagia Sophia)",
        mapQuery: "Hagia Sophia Grand Mosque",
        desc: "532년 비잔틴 제국의 유스티니아누스 황제가 지은 당대 세계 최대의 성당. 완공 후 황제가 '솔로몬이여, 내가 당신을 이겼다!'라고 외쳤다는 일화가 유명합니다. 1453년 오스만 제국이 정복한 후 십자가를 떼어내고 미나렛(첨탑)을 세워 이슬람 사원으로 개조했습니다. 내부의 황금빛 기독교 모자이크(성모 마리아, 예수)와 이슬람의 아랍어 캘리그라피 원반이 공존하는, 인류 역사상 가장 기묘하고도 위대한 건물입니다.",
        geo: "세계의 배꼽: 보스포루스 해협과 마르마라해, 골든혼이 만나는 반도의 끝자락. 즉 유럽과 아시아를 동시에 통제할 수 있는 권력의 중심지에 지어졌습니다.",
        tip: "📍관람 포인트: 천장의 돔 구조를 보세요. 기둥 없이 4개의 삼각 궁륭(펜덴티브)으로 거대한 돔을 떠받쳐, 마치 돔이 빛줄기를 타고 공중에 떠 있는 듯한 착각을 줍니다.",
        youtube: { title: "EBS 세계테마기행 - 성 소피아 성당의 비밀", url: "https://www.youtube.com/results?search_query=세계테마기행+아야소피아" }
      },
      {
        name: "2. 블루 모스크 (Sultan Ahmed Mosque)",
        mapQuery: "Sultan Ahmed Mosque",
        desc: "아야소피아 바로 맞은편에 웅장하게 서 있는 오스만 제국 최고의 모스크입니다. 술탄 아흐멧 1세가 아야소피아를 뛰어넘겠다는 야심으로 지었습니다. 본래 이슬람 성지인 메카의 모스크만이 6개의 미나렛(첨탑)을 가질 수 있었으나, 술탄이 '황금(Altin)으로 지어라'라고 한 것을 건축가가 '여섯 개(Alti)'로 잘못 알아듣고 6개를 세웠다는 재미있는 전설이 있습니다.",
        geo: "권력의 과시: 완벽한 평지 광장(과거 전차 경주장인 히포드롬) 바로 옆에 거대하게 세워, 맞은편의 아야소피아와 팽팽한 기싸움을 하는 형상입니다.",
        tip: "📍관람 포인트: 안으로 들어가 천장을 올려다보세요. 2만여 장의 푸른빛 '이즈닉 타일'에 햇빛이 반사될 때 내부가 온통 푸른 바다처럼 빛나 '블루 모스크'라 불립니다.",
        youtube: { title: "Rick Steves' Europe - 이스탄불 투어", url: "https://www.youtube.com/results?search_query=Rick+Steves+Istanbul" }
      },
      {
        name: "3. 예레바탄 사라이 (지하 저수조)",
        mapQuery: "Basilica Cistern",
        desc: "거리를 걷다 무심코 지하로 내려가면, 336개의 대리석 기둥이 신비로운 조명을 받으며 물속에 잠겨 있는 '지하 궁전'이 펼쳐집니다. 사실 이곳은 비잔틴 제국 시절 전시에 물을 공급하기 위해 만든 거대한 식수 저장고입니다. 제임스 본드 영화 <위기일발>과 댄 브라운의 <인페르노> 영화의 배경이 된 곳이기도 합니다.",
        geo: "고대의 업사이클링: 이 수조의 기둥들은 모양과 길이가 조금씩 다릅니다. 제국 곳곳의 폐허가 된 그리스/로마 신전 기둥들을 재활용해 만들었기 때문입니다.",
        tip: "📍메두사를 찾아라: 수조 가장 안쪽(서북쪽 코너)으로 가면 거꾸로, 혹은 옆으로 눕혀진 2개의 '메두사 머리' 기둥 받침대가 있습니다. 이교도의 신을 짓밟고 저주를 피하려는 비잔틴 시대 기독교인들의 의도입니다.",
        youtube: { title: "톡파원 25시 - 이스탄불 지하궁전", url: "https://www.youtube.com/results?search_query=톡파원+25시+지하궁전" }
      },
      {
        name: "4. 돌마바흐체 궁전",
        mapQuery: "Dolmabahçe Palace",
        desc: "오스만 제국의 쇠퇴기, 국력을 과시하기 위해 프랑스의 베르사유 궁전을 모방해 지은 초호화 궁전입니다. 금 14톤, 은 40톤이 내장 장식에 사용되었습니다. 너무나 화려하게 지은 나머지 제국이 파산에 이르게 된 결정적 원인이 되었습니다. 튀르키예 건국의 아버지 무스타파 케말 아타튀르크가 마지막으로 숨을 거둔 곳이기도 하며, 궁전 안의 모든 시계는 그가 사망한 09시 05분에 멈춰 있습니다.",
        geo: "바다 위의 궁전, 서구화의 열망: 낡고 폐쇄적인 구시가지(톱카프 궁전)를 버리고, 바다를 흙으로 메워('돌마바흐체'는 꽉 찬 정원이란 뜻) 유럽 쪽 보스포루스 해협과 맞닿게 지었습니다.",
        tip: "📍관람 포인트: 궁전 중앙 홀에 있는 무게 4.5톤, 750개의 전구가 달린 세계 최대의 보헤미안 크리스탈 샹들리에(영국 빅토리아 여왕의 선물)를 놓치지 마세요. 내부 사진 촬영은 엄격히 금지되어 있습니다.",
        youtube: { title: "KBS 걸어서 세계속으로 - 돌마바흐체 궁전", url: "https://www.youtube.com/results?search_query=걸어서+세계속으로+돌마바흐체" }
      }
    ]
  }
];

export const initialExpenses: Expense[] = [
  { id: '1', date: '2026-04-26', country: '공통', category: '숙박', item: 'Meshk airport hotel (AGODA)', amount: 36504, paymentMethod: '카카오페이', isSettled: false },
  { id: '2', date: '2026-04-26', country: '공통', category: '여행용품', item: '인스타 360 카메라 렌즈', amount: 35000, paymentMethod: '농협 플렉스카드', isSettled: false }
];
