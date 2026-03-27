export type SignData = {
  id: string;
  code: string;
  name: string;
  slug: string;
  category: 'A' | 'B' | 'C' | 'D' | 'E' | 'T';
  svgFile: string;
  shortDescription: string;
  fullDescription: string;
  usage: string;
  commonMisunderstandings: string;
  quizQuestions: { question: string; options: string[]; correctIndex: number; explanation: string }[];
  hasIndividualPage: boolean;
};

export type CategoryData = {
  id: string;
  slug: string;
  prefix: string;
  title: string;
  titleShort: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  color: string;
  bgColor: string;
  borderColor: string;
  shape: string;
  shapeDescription: string;
};

export const categories: CategoryData[] = [
  {
    id: 'varning',
    slug: 'varning',
    prefix: 'A',
    title: 'Varningsmärken',
    titleShort: 'Varning',
    description: 'Varningsmärken (A-skyltar) har triangulär form med röd kant och gul/vit bakgrund. De varnar för faror längre fram på vägen och kräver ökad uppmärksamhet.',
    metaTitle: 'Varningsmärken (A-skyltar) – Alla varningsskyltar för körkort | Huvet',
    metaDescription: 'Lär dig alla svenska varningsmärken (A-skyltar) inför körkortsprovet. Triangelformade skyltar med röd kant som varnar för faror på vägen.',
    color: '#d97706',
    bgColor: '#fef3c7',
    borderColor: '#f59e0b',
    shape: '▲',
    shapeDescription: 'Triangel med röd kant, gul bakgrund',
  },
  {
    id: 'vajning',
    slug: 'vajning',
    prefix: 'B',
    title: 'Väjningspliktsmärken',
    titleShort: 'Väjning',
    description: 'Väjningspliktsmärken (B-skyltar) anger att du måste väja för annan trafik eller stanna helt. Hit hör bland annat stopplikt och väjningsplikt.',
    metaTitle: 'Väjningspliktsmärken (B-skyltar) – Stopplikt & väjning | Huvet',
    metaDescription: 'Alla väjningspliktsmärken (B-skyltar) för körkortet. Lär dig stopplikt, väjningsplikt, huvudled och andra viktiga företrädesmärken.',
    color: '#dc2626',
    bgColor: '#fee2e2',
    borderColor: '#ef4444',
    shape: '▽',
    shapeDescription: 'Nedåtvänd triangel, röd kant / Oktagon (stoppskylt)',
  },
  {
    id: 'forbud',
    slug: 'forbud',
    prefix: 'C',
    title: 'Förbudsmärken',
    titleShort: 'Förbud',
    description: 'Förbudsmärken (C-skyltar) har cirkulär form med röd kant och vit bakgrund. De förbjuder specifika handlingar som att köra in, parkera eller överskrida en viss hastighet.',
    metaTitle: 'Förbudsmärken (C-skyltar) – Alla förbudsskyltar för körkort | Huvet',
    metaDescription: 'Lär dig alla svenska förbudsmärken (C-skyltar). Runda skyltar med röd kant som förbjuder infart, parkering, hastighetsöverträdelser med mera.',
    color: '#dc2626',
    bgColor: '#fee2e2',
    borderColor: '#ef4444',
    shape: '⊘',
    shapeDescription: 'Cirkel med röd kant, vit bakgrund',
  },
  {
    id: 'pabud',
    slug: 'pabud',
    prefix: 'D',
    title: 'Påbudsmärken',
    titleShort: 'Påbud',
    description: 'Påbudsmärken (D-skyltar) har cirkulär form med blå bakgrund och vit symbol. De anger vad trafikanterna MÅSTE göra, till exempel köra i en viss riktning eller använda cykelbana.',
    metaTitle: 'Påbudsmärken (D-skyltar) – Alla påbudsskyltar för körkort | Huvet',
    metaDescription: 'Lär dig alla svenska påbudsmärken (D-skyltar). Blå runda skyltar som anger vad du måste göra: körriktning, cykelbana, lägsta hastighet med mera.',
    color: '#1d4ed8',
    bgColor: '#dbeafe',
    borderColor: '#3b82f6',
    shape: '●',
    shapeDescription: 'Blå cirkel med vit symbol',
  },
  {
    id: 'information',
    slug: 'information',
    prefix: 'E',
    title: 'Anvisningsmärken',
    titleShort: 'Information',
    description: 'Anvisningsmärken (E-skyltar) är oftast rektangulära med blå bakgrund. De ger viktig information om t.ex. motorväg, övergångsställe, parkering och tätbebyggelse.',
    metaTitle: 'Anvisningsmärken (E-skyltar) – Alla informationsskyltar | Huvet',
    metaDescription: 'Alla svenska anvisningsmärken (E-skyltar) för körkortet. Blå rektangulära skyltar med information om motorväg, parkering, övergångsställe med mera.',
    color: '#0369a1',
    bgColor: '#e0f2fe',
    borderColor: '#0ea5e9',
    shape: '▬',
    shapeDescription: 'Blå rektangel med vit symbol',
  },
];

export const signs: SignData[] = [
  // ===== A-SKYLTAR (VARNING) =====
  {
    id: 'A1-1', code: 'A1-1', name: 'Varning för kurva, höger', slug: 'varning-for-kurva-hoger', category: 'A', svgFile: 'A1-1.svg',
    shortDescription: 'Varnar för skarp kurva åt höger.',
    fullDescription: 'Varningsmärket A1-1 anger att en skarp kurva åt höger finns framför dig. Märket sätts upp när kurvan är så pass skarp att den kräver extra uppmärksamhet och hastighetsanpassning. Det är ett av de vanligaste varningsmärkena på svenska landsvägar, särskilt på slingriga sträckor genom skog och bergsterräng. Kurvan kan vara betydligt skarpare än vad den ser ut att vara på avstånd. Att bromsa i kurvan är farligare än att bromsa före — anpassa hastigheten innan du når kurvan. Märket placeras normalt 150–250 meter före faran utanför tätort och 50–100 meter i tätort.',
    usage: 'Placeras på landsvägar och riksvägar där kurvor är oväntat skarpa, speciellt vid begränsad sikt eller nedförsbacke innan kurvan.',
    commonMisunderstandings: 'Många underskattar hur skarp kurvan faktiskt är. Att skylten sitter uppe betyder att kurvan är farligare än normalt — det är inte bara en "vanlig sväng".',
    quizQuestions: [
      { question: 'Vad ska du göra när du ser varningsmärket för skarp kurva?', options: ['Accelerera för att komma igenom snabbt', 'Sänka hastigheten innan kurvan', 'Byta fil till vänster', 'Stanna helt'], correctIndex: 1, explanation: 'Du ska alltid sänka hastigheten innan du når kurvan. Att bromsa mitt i kurvan ökar risken för sladd.' },
      { question: 'Hur långt före faran placeras varningsmärken utanför tätort?', options: ['10–30 meter', '50–100 meter', '150–250 meter', '500 meter'], correctIndex: 2, explanation: 'Utanför tätort placeras varningsmärken normalt 150–250 meter före faran.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'A2-1', code: 'A2-1', name: 'Varning för flera kurvor, första höger', slug: 'varning-for-kurvor', category: 'A', svgFile: 'A2-1.svg',
    shortDescription: 'Varnar för slingrande väg med flera kurvor.',
    fullDescription: 'Märket A2-1 varnar för en slingrande vägsträcka med flera kurvor i rad, där den första kurvan går åt höger. Detta är ett av de viktigare varningsmärkena för landsvägskörning, då det indikerar att du behöver vara beredd på upprepade hastighetsförändringar och rattkorrigeringar. Sträckan kan vara särskilt farlig vid våt vägbana eller halka. Håll hastigheten jämn och undvik plötsliga rattutslag. Tänk på att mötande trafik också kan vara i kurvan.',
    usage: 'Vanlig på bergiga landsvägar, kustvägar och skogsvägar med naturliga kurvor som följer terrängen.',
    commonMisunderstandings: 'Många tror att det bara är en kurva — märket anger att det är FLERA kurvor i rad, vilket kräver sustained uppmärksamhet.',
    quizQuestions: [
      { question: 'Vad betyder märke A2 med slingrande väg?', options: ['En enda kurva', 'Flera kurvor i rad', 'Smal väg', 'Halt väglag'], correctIndex: 1, explanation: 'Märket varnar för en slingrande sträcka med flera kurvor i rad.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'A3', code: 'A3', name: 'Varning för nedförsbacke', slug: 'varning-for-nedforslut', category: 'A', svgFile: 'A3.svg',
    shortDescription: 'Varnar för brant nedförsbacke.',
    fullDescription: 'Varningsmärket A3 anger att en brant nedförsbacke finns framför dig. Procentsatsen på skylten anger hur brant lutningen är. Exempelvis betyder 10% att vägen sjunker 10 meter per 100 meter körd sträcka. Vid nedförsbacke ökar fordonets hastighet automatiskt på grund av gravitationen, vilket gör det viktigt att använda motorbroms i kombination med fotbromsen. Använd lägre växel för att utnyttja motorbromsens effekt. Lita inte enbart på fotbromsen — den kan överhettas vid längre utförsbackar, särskilt för tyngre fordon.',
    usage: 'Placeras vid backar med betydande lutning, särskilt vanligt i fjäll- och bergsterräng.',
    commonMisunderstandings: 'Många kör i för hög växel nedför och förlitar sig helt på fotbromsen. Det kan leda till att bromsarna överhettas (bromsblekning) och bromskraften minskar dramatiskt.',
    quizQuestions: [
      { question: 'Vad bör du göra vid brant nedförsbacke?', options: ['Köra i friläge', 'Använda motorbroms (låg växel)', 'Pumpa bromspedalen', 'Öka hastigheten'], correctIndex: 1, explanation: 'Motorbroms genom att köra i lägre växel sparar bromsarna och ger jämn retardation.' },
      { question: 'Vad innebär 10% lutning?', options: ['10 graders vinkel', '10 meter fall per 100 meter', '10 km/h hastighetsökning', 'Max 10 km/h hastighet'], correctIndex: 1, explanation: '10% lutning innebär att vägen sjunker 10 meter per 100 meter horisontell sträcka.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'A4', code: 'A4', name: 'Varning för uppförsbacke', slug: 'varning-for-uppforslut', category: 'A', svgFile: 'A4.svg',
    shortDescription: 'Varnar för brant uppförsbacke.',
    fullDescription: 'Märket A4 varnar för en brant uppförsbacke framöver. Lutningsgraden anges i procent på skylten. Vid kraftig stigning kan långsammare fordon ha svårt att hålla hastigheten, vilket skapar hastighetsskillnader i trafiken. Var beredd på att tunga fordon kan gå mycket långsammare i uppförsbackar och kan kräva omkörning. Se till att du har rätt växel vald så att motorn orkar hålla farten.',
    usage: 'Vanlig i bergs- och fjällterräng samt vid större höjdskillnader på landsvägar.',
    commonMisunderstandings: 'Risken handlar inte bara om din egen bil — det är framför allt hastighetsskillnaden mot långsamma lastbilar som skapar faror.',
    quizQuestions: [
      { question: 'Vad bör du vara beredd på vid brant uppförsbacke?', options: ['Hög fart i mötande trafik', 'Långsamma fordon framför dig', 'Vägarbete', 'Järnvägskorsning'], correctIndex: 1, explanation: 'Tunga fordon går långsammare i uppförsbackar, så var beredd på att anpassa hastigheten eller köra om säkert.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'A5-1', code: 'A5-1', name: 'Varning för avsmalnande väg', slug: 'varning-for-avsmalnande-vag', category: 'A', svgFile: 'A5-1.svg',
    shortDescription: 'Varnar för att vägen blir smalare.',
    fullDescription: 'Varningsmärke A5-1 anger att vägen framöver smalnar av. Det kan innebära att ett eller flera körfält försvinner, att vägrenen upphör eller att vägen övergår från tvåfilig till enfilig. När vägen smalnar av behöver du anpassa hastigheten och vara beredd på att väja eller stanna för mötande trafik. Var extra uppmärksam på cyklister och fotgängare som kan tvingas ut i körbanan.',
    usage: 'Placeras före broar, tunnlar och andra vägavsnitt där vägen smalnar av.',
    commonMisunderstandings: 'Avsmalnande väg kan innebära att man behöver ge mötande trafik företräde om inte båda rymmer — det är inte självklart att man har förtur.',
    quizQuestions: [
      { question: 'Vad innebär märket "avsmalnande väg"?', options: ['Vägen breddas', 'Vägen blir smalare', 'Vägarbete pågår', 'Hastigheten ökar'], correctIndex: 1, explanation: 'Märket varnar för att vägen smalnar av framöver.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'A6', code: 'A6', name: 'Varning för bro', slug: 'varning-for-bro', category: 'A', svgFile: 'A6.svg',
    shortDescription: 'Varnar för öppningsbar bro framöver.',
    fullDescription: 'Märket A6 varnar för en öppningsbar bro framöver. När bron öppnas måste all trafik stanna och vänta. Ljus- och ljudsignaler varnar när bron ska öppnas. Det är viktigt att stanna i god tid och inte försöka passera när bommar är på väg ner. Öppningsbara broar finns främst i städer nära vatten, hamnar och kanaler. Broöppning kan ta allt från ett par minuter till längre tid beroende på fartygstrafiken.',
    usage: 'Placeras före öppningsbara broar vid kanaler, hamnar och vattendrag.',
    commonMisunderstandings: 'En del bilister tror att de kan hinna förbi om bommen precis börjar gå ner. Det är livsfarligt och förbjudet att passera när ljussignalerna blinkar.',
    quizQuestions: [
      { question: 'Vad ska du göra vid en öppningsbar bro när ljusen blinkar?', options: ['Köra snabbt förbi', 'Stanna och vänta', 'Tuta', 'Köra runt bommen'], correctIndex: 1, explanation: 'Du måste stanna och vänta tills bron har stängts och signalerna släcker.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'A7', code: 'A7', name: 'Varning för kaj', slug: 'varning-for-kaj', category: 'A', svgFile: 'A7.svg',
    shortDescription: 'Varnar för kajkant eller strand nära vägen.',
    fullDescription: 'Varningsmärke A7 varnar för att det finns en kajkant, strand eller vattenbryn i närheten av vägen. Risken är att man kan köra av vägen och hamna i vattnet. Var extra försiktig vid dålig sikt, mörker eller halt väglag. Märket är vanligt vid hamnar, färjelägen och vägar som löper längs vattendrag.',
    usage: 'Placeras vid hamnar, färjelägen och vägar nära kajkanter eller vattendrag.',
    commonMisunderstandings: 'Märket handlar inte om att det finns fin strand — det varnar för att vägen går nära vatten och att det finns risk att köra av.',
    quizQuestions: [
      { question: 'Vad varnar märke A7 för?', options: ['Badplats', 'Kajkant nära vägen', 'Bro', 'Översvämning'], correctIndex: 1, explanation: 'A7 varnar för att det finns en kajkant eller vattenbryn nära vägen.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'A8', code: 'A8', name: 'Varning för ojämn väg', slug: 'varning-for-ojamn-vag', category: 'A', svgFile: 'A8.svg',
    shortDescription: 'Varnar för ojämnheter i vägbanan.',
    fullDescription: 'Märke A8 varnar för ojämnheter i vägbanan som gupp, gropar eller sättningar. Vid hög hastighet kan ojämnheter orsaka att fordonet studsar, tappar väggrepp eller skadar underredet. Sänk hastigheten och håll ett stadigt grepp om ratten. Ojämnheter kan vara svåra att se i tid, särskilt i mörker eller vid motljus.',
    usage: 'Vanligt vid vägarbeten, äldre vägsträckor och platser där marken har satt sig.',
    commonMisunderstandings: 'Många tror att det bara handlar om lite gupp — men ojämnheter kan vara tillräckligt allvarliga för att skada bilen eller orsaka tappad kontroll.',
    quizQuestions: [
      { question: 'Vad bör du göra vid märket "ojämn väg"?', options: ['Accelerera', 'Sänka hastigheten', 'Byta fil', 'Stanna'], correctIndex: 1, explanation: 'Sänk hastigheten för att behålla kontrollen och undvika skador på fordonet.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'A9-1', code: 'A9-1', name: 'Varning för farthinder', slug: 'varning-for-farthinder', category: 'A', svgFile: 'A9-1.svg',
    shortDescription: 'Varnar för farthinder (väggupp).',
    fullDescription: 'Märke A9-1 varnar för farthinder, ofta kallade väggupp eller fartgupp. Dessa byggs medvetet för att tvinga ner hastigheten, oftast i bostadsområden, nära skolor och vid övergångsställen. Om du kör för fort över ett farthinder kan det skada bilens fjädring och upphängning, och passagerare kan skadas. Sänk hastigheten till cirka 20–30 km/h.',
    usage: 'Vanligt i tättbebyggt område, bostadsområden, vid skolor och lekplatser.',
    commonMisunderstandings: 'Farthinder är inte bara obehagliga gupp — de är designade för att skydda fotgängare och cyklister. Respektera dem.',
    quizQuestions: [
      { question: 'Vilken hastighet bör du hålla vid ett farthinder?', options: ['50 km/h', '70 km/h', '20–30 km/h', '10 km/h'], correctIndex: 2, explanation: 'De flesta farthinder är designade för en passage i ca 20–30 km/h.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'A9-2', code: 'A9-2', name: 'Varning för upphöjd korsning', slug: 'varning-for-upphojd-korsning', category: 'A', svgFile: 'A9-2.svg',
    shortDescription: 'Varnar för upphöjd korsning eller passage.',
    fullDescription: 'Märke A9-2 varnar för en upphöjd korsning eller passage. Hela korsningen är upphöjd som ett farthinder för att tvinga ner hastigheten och öka trafiksäkerheten. Vanligt vid övergångsställen och korsningar i bostadsområden. Sänk hastigheten i god tid.',
    usage: 'Placeras vid korsningar och övergångsställen i tätort som har höjts upp som hastighetsdämpande åtgärd.',
    commonMisunderstandings: 'Inte samma sak som ett enstaka väggupp — hela korsningen är upphöjd, vilket ger fotgängare bättre sikt och mer tid.',
    quizQuestions: [
      { question: 'Varför byggs upphöjda korsningar?', options: ['För att spara pengar', 'För att sänka hastigheten och öka säkerheten', 'Som dekoration', 'För att leda bort vatten'], correctIndex: 1, explanation: 'Upphöjda korsningar tvingar ner hastigheten och gör korsningen säkrare för alla trafikanter.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'A10', code: 'A10', name: 'Varning för slipprig väg', slug: 'varning-for-halka', category: 'A', svgFile: 'A10.svg',
    shortDescription: 'Varnar för halt eller slipprigt väglag.',
    fullDescription: 'Varningsmärke A10 varnar för att vägbanan kan vara hal eller slipprig. Det kan bero på is, snö, regn, lövfall, oljespill eller annan beläggning som minskar friktionen. Vid halt väglag förlängs bromssträckan avsevärt — upp till tio gånger längre på is jämfört med torr asfalt. Håll större avstånd till framförvarande fordon, undvik plötsliga rattutslag och bromsa mjukt. Kör jämnt och undvik onödiga accelerationer. Om bilen börjar slira, styr i den riktning du vill åka utan att panikbromsa.',
    usage: 'Vanligt vid broar (fryser först), skuggiga partier, längs vattendrag och vid platser där vatten rinner över vägen.',
    commonMisunderstandings: 'Halka uppstår inte bara på vintern. Regn efter lång torrperiod skapar extremt hal vägbana eftersom olja och damm bildar en glatt film. Även löv på hösten ger mycket halt väglag.',
    quizQuestions: [
      { question: 'Hur mycket längre kan bromssträckan bli på isig väg?', options: ['Dubbelt så lång', '3 gånger längre', 'Upp till 10 gånger längre', '50% längre'], correctIndex: 2, explanation: 'På ren is kan bromssträckan bli upp till 10 gånger längre jämfört med torr asfalt.' },
      { question: 'Vad ska du göra om bilen börjar slira?', options: ['Bromsa hårt', 'Styra i den riktning du vill åka', 'Accelerera', 'Släppa ratten'], correctIndex: 1, explanation: 'Styr försiktigt i den riktning du vill färdas och undvik att panikbromsa.' },
      { question: 'Vilken årstid kan det vara halt?', options: ['Bara vintern', 'Bara hösten', 'Bara vid regn', 'Alla årstider'], correctIndex: 3, explanation: 'Halka kan uppstå alla årstider — is, regn, löv, oljespill med mera.' },
    ],
    hasIndividualPage: true,
  },
  {
    id: 'A11', code: 'A11', name: 'Varning för stenskott', slug: 'varning-for-stenskott', category: 'A', svgFile: 'A11.svg',
    shortDescription: 'Varnar för risk för stenskott eller löst grus.',
    fullDescription: 'Märke A11 varnar för löst grus eller stenar på vägbanan som kan kastas upp av andra fordons däck. Stenskott kan krossa vindrutor och skada lacken. Sänk hastigheten och håll extra avstånd till fordon framför. Var särskilt försiktig vid nybelagda vägar eller vägarbeten där grusning pågår.',
    usage: 'Vanligt vid nygrusade vägar, vägarbeten och grusvägar.',
    commonMisunderstandings: 'Det räcker inte att sänka egen hastighet — det viktigaste är att hålla avstånd till bilen framför, då det är den bilens däck som kastar upp stenar.',
    quizQuestions: [
      { question: 'Vad är viktigast vid risk för stenskott?', options: ['Köra fort', 'Hålla avstånd', 'Tuta', 'Blinka'], correctIndex: 1, explanation: 'Stenskott kastas upp av framförvarande fordons däck — mer avstånd = mindre risk.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'A13', code: 'A13', name: 'Varning för övergångsställe', slug: 'varning-for-overgangsstalle', category: 'A', svgFile: 'A13.svg',
    shortDescription: 'Varnar för övergångsställe framöver.',
    fullDescription: 'Märke A13 varnar för att ett övergångsställe finns framöver. Du som bilförare har väjningsplikt mot fotgängare på övergångsstället — det innebär att du måste sakta ner och vara beredd att stanna. Fotgängare har alltid företräde på ett övergångsställe. Var särskilt uppmärksam på barn, äldre och synskadade. Kör aldrig om ett fordon som stannat vid ett övergångsställe utan att kontrollera om det finns fotgängare.',
    usage: 'Placeras före övergångsställen i tätort, ofta i kombination med vägmärke E19 (övergångsställe).',
    commonMisunderstandings: 'Väjningsplikt innebär inte att fotgängaren "måste vänta tills det är fritt" — som bilförare måste DU stanna om en fotgängare visar avsikt att gå ut.',
    quizQuestions: [
      { question: 'Vem har företräde vid ett övergångsställe?', options: ['Bilisten', 'Fotgängaren', 'Den som kom först', 'Ingen'], correctIndex: 1, explanation: 'Fotgängare har alltid företräde på ett markerat övergångsställe.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'A14', code: 'A14', name: 'Varning för cyklister', slug: 'varning-for-cyklister', category: 'A', svgFile: 'A14.svg',
    shortDescription: 'Varnar för cyklister och cykelöverfarter.',
    fullDescription: 'Varningsmärke A14 varnar för att cyklister kan korsa eller finnas på vägen. Cyklister är oskyddade trafikanter och extra utsatta vid kollisioner. Var beredd att sakta ner och ge plats. Kontrollera dödvinkeln extra noga vid svängar. Sedan 2014 har bilister väjningsplikt mot cyklister vid cykelöverfarter som ligger i anslutning till cykelbanor.',
    usage: 'Placeras där cykelbanor korsar vägen eller där cykeltrafik förekommer frekvent.',
    commonMisunderstandings: 'Sedan regeländringen 2014 har bilister väjningsplikt vid cykelöverfarter — inte bara "ökad uppmärksamhet" som förr.',
    quizQuestions: [
      { question: 'Har bilister väjningsplikt vid cykelöverfarter?', options: ['Nej, cyklisten ska vänta', 'Ja, sedan 2014', 'Bara i tätort', 'Bara vid ljussignaler'], correctIndex: 1, explanation: 'Sedan 2014 har bilister väjningsplikt mot cyklister vid cykelöverfarter.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'A15', code: 'A15', name: 'Varning för barn', slug: 'varning-for-barn', category: 'A', svgFile: 'A15.svg',
    shortDescription: 'Varnar för att barn kan finnas i närheten av vägen.',
    fullDescription: 'Varningsmärke A15, ett av de mest igenkännliga trafikmärkena i Sverige, varnar för att barn kan befinna sig i närheten av vägen. Det placeras vid skolor, förskolor, lekplatser och andra platser där barn regelbundet vistas. Barn är oförutsägbara i trafiken — de kan plötsligt springa ut på vägen utan att titta sig för, jaga en boll eller följa kamrater utan att tänka på bilar. Som bilförare måste du sänka hastigheten avsevärt och vara beredd att stanna omedelbart. Tänk på att barn har begränsat synfält, sämre avståndsbedömning och hör inte trafiken lika bra som vuxna. Särskild försiktighet krävs vid skoltider (morgon och eftermiddag) och vid skollov när barn leker utomhus.',
    usage: 'Placeras vid skolor, förskolor, daghem, lekplatser, idrottsanläggningar och bostadsområden med mycket barn.',
    commonMisunderstandings: 'Många anser att 30-zoner "räcker" — men märket anger att du bör vara beredd på att barn plötsligt kan dyka upp, oavsett hastighetszon. Var lika vaksam vid 50-vägar med barn-skylt.',
    quizQuestions: [
      { question: 'Varför är barn extra oförutsägbara i trafiken?', options: ['De kör fort', 'De har begränsat synfält och sämre avståndsbedömning', 'De cyklar mycket', 'De går alltid på trottoaren'], correctIndex: 1, explanation: 'Barn har smalare synfält, sämre förmåga att bedöma avstånd och hastighet, och agerar ofta impulsivt.' },
      { question: 'Vid vilka tider bör du vara extra vaksam nära skolor?', options: ['Mitt på natten', 'Morgon och eftermiddag (skoltider)', 'Bara på helger', 'Bara i mörker'], correctIndex: 1, explanation: 'Skoltider, morgon (~07:30–08:30) och eftermiddag (~14:00–16:00), innebär flest barn i trafiken.' },
      { question: 'Vad ska du göra om du ser barn vid vägkanten?', options: ['Tuta för att varna', 'Sänka hastigheten och vara beredd att stanna', 'Köra som vanligt', 'Blinka med helljuset'], correctIndex: 1, explanation: 'Sänk hastigheten kraftigt och var beredd att stanna — barn kan plötsligt springa ut.' },
    ],
    hasIndividualPage: true,
  },
  {
    id: 'A16', code: 'A16', name: 'Varning för vilt', slug: 'varning-for-vilt', category: 'A', svgFile: 'A16.svg',
    shortDescription: 'Varnar för vilt (älg, hjort, rådjur) på vägen.',
    fullDescription: 'Varningsmärke A16 anger att det finns risk för viltpassage — älgar, hjortar, rådjur och andra vilda djur kan korsa vägen. Sverige har bland de högsta antalen viltolyckor i Europa med cirka 65 000 viltolyckor per år. En kollision med en älg vid 90 km/h innebär en enorm kraftpåverkan — älgen väger 300–700 kg. Var särskilt vaksam i gryning och skymning, då djuren är mest aktiva. Om du ser ett djur vid vägkanten: sänk hastigheten kraftigt, blända av helljuset (ljuset förvirrar djuret) och var beredd på att fler djur kan följa efter.',
    usage: 'Placeras längs vägar i skogs- och lantbruksområden där vilt regelbundet korsar.',
    commonMisunderstandings: 'Många tänker att det bara gäller älg. Märket gäller allt vilt — rådjur, kronhjort, vildsvin med mera. Och ett rådjur i 90 km/h är också livsfarligt.',
    quizQuestions: [
      { question: 'Ungefär hur många viltolyckor sker i Sverige varje år?', options: ['5 000', '15 000', '65 000', '200 000'], correctIndex: 2, explanation: 'Sverige har cirka 65 000 rapporterade viltolyckor per år.' },
      { question: 'Vad ska du göra om du ser ett djur vid vägen i mörker?', options: ['Blända med helljus', 'Blända av och sänk hastigheten', 'Tuta kraftigt', 'Accelerera förbi'], correctIndex: 1, explanation: 'Blända av — helljus förvirrar djuret och det kan springa ut i vägen. Sänk hastigheten.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'A17', code: 'A17', name: 'Varning för korsning med järnväg', slug: 'varning-for-jarnvagskorsning', category: 'A', svgFile: 'A17.svg',
    shortDescription: 'Varnar för plankorsning med järnväg med bommar.',
    fullDescription: 'Märke A17 varnar för en bevakad järnvägskorsning med bommar framöver. Vid bomfällning visas blinkande rött ljus och ofta hörs en signal. Du MÅSTE stanna när bommarna fälls eller ljuset blinkar rött. Det är absolut förbjudet att passera under en bom eller köra slalom runt halvbommar. Tåg kan komma i hastigheter upp till 200 km/h på svenska järnvägar och har en bromssträcka på flera kilometer — tåget kan inte stanna för dig.',
    usage: 'Placeras före alla bevakade plankorsningar med järnväg.',
    commonMisunderstandings: 'Halvbommar täcker bara halva vägen — men det är INTE en inbjudan att köra runt dem. Det är livsfarligt och straffbart.',
    quizQuestions: [
      { question: 'Vad gör du vid blinkande rött ljus vid en järnvägskorsning?', options: ['Kör försiktigt förbi', 'Stannar och väntar', 'Kör om bommen bara är halvt nere', 'Backar'], correctIndex: 1, explanation: 'Du MÅSTE stanna och vänta tills ljuset slutar blinka och bommarna höjts.' },
      { question: 'Varför kan man inte "hinna förbi" framför ett tåg?', options: ['Tåget kör långsamt', 'Tåget har flera kilometers bromssträcka', 'Tåget stannar alltid', 'Det finns alltid bommar'], correctIndex: 1, explanation: 'Tåg i full fart har kilometer-lång bromssträcka. De kan inte stanna eller väja.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'A18', code: 'A18', name: 'Varning för korsning med järnväg utan bommar', slug: 'varning-for-jarnvag-utan-bommar', category: 'A', svgFile: 'A18.svg',
    shortDescription: 'Varnar för obevakad järnvägskorsning utan bommar.',
    fullDescription: 'Märke A18 varnar för en obevakad plankorsning utan bommar eller ljussignaler. DU måste själv stanna och kontrollera att det är fritt innan du passerar. Lyssna efter tågsignaler, titta åt båda hållen och kör inte ut på spåret om du inte kan passera hela sträckan utan att stanna. Obevakade järnvägskorsningar är bland de farligaste platserna i svensk trafikmiljö.',
    usage: 'Vanligt på landsvägar och grusvägar i landsbygd där järnväg korsar.',
    commonMisunderstandings: 'Att det inte finns bommar betyder INTE att det inte kommer tåg. Tåg kan komma tyst och oväntat snabbt.',
    quizQuestions: [
      { question: 'Vad måste du göra vid en obevakad järnvägskorsning?', options: ['Köra rakt igenom', 'Stanna, titta och lyssna innan du passerar', 'Bara sakta ner', 'Tuta innan du kör över'], correctIndex: 1, explanation: 'Vid obevakade korsningar måste du själv kontrollera att spåret är fritt.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'A19-1', code: 'A19-1', name: 'Varning för korsning med spårväg', slug: 'varning-for-sparvag', category: 'A', svgFile: 'A19-1.svg',
    shortDescription: 'Varnar för korsning med spårväg.',
    fullDescription: 'Märke A19-1 varnar för att spårväg korsar eller finns nära vägen. Spårvagnar har alltid företräde om inte trafikljus anger annat. Spårvagnar kan inte väja — de är bundna till rälsen. Var extra försiktig vid hållplatser där passagerare kan kliva av och gå ut i vägen.',
    usage: 'Finns i städer med spårvagnstrafik: Göteborg, Norrköping, Stockholm (Lidingö) med flera.',
    commonMisunderstandings: 'Spårvagnar har ALLTID företräde i Sverige (om inte ljussignaler anger annat). Det är inte som en buss som kan väja.',
    quizQuestions: [
      { question: 'Har spårvagnen företräde framför bilar?', options: ['Nej, bilen har alltid företräde', 'Ja, om inte trafikljus anger annat', 'Bara i Göteborg', 'Bara på natten'], correctIndex: 1, explanation: 'Spårvagnar har företräde om inte trafikljus anger annat. De kan inte väja.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'A20', code: 'A20', name: 'Varning för korsande trafik', slug: 'varning-for-korsande-trafik', category: 'A', svgFile: 'A20.svg',
    shortDescription: 'Varnar för vägkorsning med korsande trafik.',
    fullDescription: 'Märke A20 varnar för en vägkorsning framöver där korsande trafik kan förekomma. Märket anger att du bör vara extra uppmärksam — det kan finnas trafik från höger och vänster som inte har väjningsplikt. Kontrollera noga åt båda håll och anpassa hastigheten. I kombination med högerregeln gäller att den som kommer från höger har företräde om inte annat anges.',
    usage: 'Placeras vid korsningar som kan vara svåra att upptäcka eller som har begränsad sikt.',
    commonMisunderstandings: 'Märket ger dig INTE företräde — det varnar bara för att det finns en korsning. Högerregeln eller andra märken avgör företrädet.',
    quizQuestions: [
      { question: 'Ger varningsmärke för korsning dig företräde?', options: ['Ja', 'Nej, det varnar bara', 'Ja, om man kör snabbt', 'Beror på vädret'], correctIndex: 1, explanation: 'Varningsmärken ger aldrig företräde — de varnar bara för en fara framöver.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'A21', code: 'A21', name: 'Varning för cirkulationsplats', slug: 'varning-for-cirkulationsplats', category: 'A', svgFile: 'A21.svg',
    shortDescription: 'Varnar för cirkulationsplats (rondell) framöver.',
    fullDescription: 'Märke A21 varnar för att en cirkulationsplats (rondell) finns framöver. I en cirkulationsplats gäller att trafik i rondellen alltid har företräde — du måste väja innan du kör in. Använd blinkers åt höger när du ska lämna rondellen. Du behöver inte blinka åt vänster när du kör in. Anpassa hastigheten och var beredd att stanna för trafik inifrån rondellen.',
    usage: 'Placeras före cirkulationsplatser, ofta i kombination med påbudsmärke D3 (cirkulationsplats).',
    commonMisunderstandings: 'Väldigt många kör in i rondellen utan att kontrollera trafiken inifrån — trafik i rondellen har ALLTID företräde.',
    quizQuestions: [
      { question: 'Vem har företräde i en cirkulationsplats?', options: ['Den som kör in', 'Den som är inne i rondellen', 'Den största bilen', 'Den som tutar först'], correctIndex: 1, explanation: 'Trafik som redan är inne i cirkulationsplatsen har alltid företräde.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'A22', code: 'A22', name: 'Varning för trafikljus', slug: 'varning-for-trafikljus', category: 'A', svgFile: 'A22.svg',
    shortDescription: 'Varnar för trafiksignal framöver.',
    fullDescription: 'Märke A22 varnar för att en trafiksignal (trafikljus) finns framöver. Märket sätts upp där signalen kan vara svår att upptäcka i tid, till exempel efter en krön eller kurva. Var beredd att stanna vid rött ljus. Vid gult ljus ska du stanna om du kan göra det säkert.',
    usage: 'Placeras vid trafiksignaler som kan vara överraskande, t.ex. efter kurvor, kröner eller vid höga hastigheter.',
    commonMisunderstandings: 'Gult ljus betyder inte "kör snabbt" — det betyder "stanna om du kan". Du får bara passera gult om du inte kan stanna säkert.',
    quizQuestions: [
      { question: 'Vad ska du göra vid gult trafikljus?', options: ['Köra snabbt igenom', 'Stanna om du kan göra det säkert', 'Backa', 'Ignorera det'], correctIndex: 1, explanation: 'Vid gult ljus ska du stanna om du kan göra det säkert. Annars passera försiktigt.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'A25', code: 'A25', name: 'Varning för mötande trafik', slug: 'varning-for-motande-trafik', category: 'A', svgFile: 'A25.svg',
    shortDescription: 'Varnar för att mötande trafik kan förekomma.',
    fullDescription: 'Märke A25 varnar för att mötande trafik kan förekomma, typiskt efter en sträcka med enkelriktad trafik eller avfartsramp som övergår till dubbelriktad väg. Håll dig på din sida av vägen och var beredd på mötande fordon.',
    usage: 'Placeras där enkelriktad trafik övergår till dubbelriktad, eller vid smala vägar.',
    commonMisunderstandings: 'Märket sätts inte upp på vanliga dubbelriktade vägar — det finns bara där det kan vara oväntat att mötas.',
    quizQuestions: [
      { question: 'När sätts märke A25 upp?', options: ['Överallt', 'Där mötande trafik kan vara oväntat', 'Bara på motorvägar', 'Vid cirkulationsplatser'], correctIndex: 1, explanation: 'Märket varnar specifikt där mötande trafik kan vara oväntat, t.ex. efter enkelriktad sträcka.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'A29-1', code: 'A29-1', name: 'Varning för flygplan', slug: 'varning-for-flygplan', category: 'A', svgFile: 'A29-1.svg',
    shortDescription: 'Varnar för lågtflygande flygplan nära vägen.',
    fullDescription: 'Märke A29-1 varnar för lågtflygande flygplan nära vägen. Förekommer vid flygplatser och flygfält. Ljud och synintryck från lågtflygande flygplan kan vara distraherande och överraskande.',
    usage: 'Placeras vid vägar nära flygplatser och landningsbanor.',
    commonMisunderstandings: 'Det handlar inte om flygplan som landar på vägen — det varnar om att ljudet och synen av ett lågtflygande plan kan distrahera.',
    quizQuestions: [
      { question: 'Varför sätts varning för flygplan upp?', options: ['Flygplan kan landa på vägen', 'Lågtflygande plan kan distrahera förare', 'Det är en flygplats', 'Bullerskydd'], correctIndex: 1, explanation: 'Lågtflygande flygplan kan överraska och distrahera bilförare.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'A34', code: 'A34', name: 'Varning för sidvind', slug: 'varning-for-sidvind', category: 'A', svgFile: 'A34.svg',
    shortDescription: 'Varnar för stark sidvind.',
    fullDescription: 'Märke A34 varnar för stark sidvind. Sidvind kan pressa fordonet ur kurs, särskilt vid broar, öppna fält och tunnelutfarter. Höga fordon som lastbilar, bussar och fordon med släp är extra känsliga. Håll ett stadigt grepp om ratten och var beredd på plötsliga vindbyar.',
    usage: 'Vanligt vid broar (t.ex. Öresundsbron), öppna fält och vid tunnelutfarter.',
    commonMisunderstandings: 'Sidvind är farligast när den plötsligt upphör — t.ex. när du kör bakom en lastbil och kör om, eller när du lämnar en vindskyddande skog.',
    quizQuestions: [
      { question: 'När är sidvind mest farlig?', options: ['I tunnlar', 'Vid plötsliga förändringar (t.ex. ut på en bro)', 'I kurvor', 'Vid regn'], correctIndex: 1, explanation: 'Plötsliga vindförändringar är farligast, t.ex. vid broar eller när vindskydd försvinner.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'A40', code: 'A40', name: 'Varning för annan fara', slug: 'varning-for-annan-fara', category: 'A', svgFile: 'A40.svg',
    shortDescription: 'Varnar för fara som inte har eget vägmärke.',
    fullDescription: 'Märke A40, med ett utropstecken, är ett allmänt varningsmärke som anger att det finns en fara framöver som inte täcks av något specifikt varningsmärke. Faran specificeras vanligtvis med en tilläggstavla under märket. Det kan handla om sänka i vägen, vallning av boskap, dimma, eller andra ovanliga faror.',
    usage: 'Används vid ovanliga faror som inte har egna varningsmärken — med tilläggstavla som förklarar.',
    commonMisunderstandings: 'Utropstecknet är INTE bara en "allmän varning utan mening" — det finns alltid en specifik fara, ofta förklarad på tilläggstavlan.',
    quizQuestions: [
      { question: 'Vad betyder ett varningsmärke med utropstecken?', options: ['Ingenting speciellt', 'Fara som inte har eget märke', 'Stopp', 'Hastighetsökning'], correctIndex: 1, explanation: 'Utropstecknet varnar för en fara som inte har eget varningsmärke — läs tilläggstavlan.' },
    ],
    hasIndividualPage: false,
  },

  // ===== B-SKYLTAR (VÄJNING) =====
  {
    id: 'B1', code: 'B1', name: 'Väjningsplikt', slug: 'vajningsplikt', category: 'B', svgFile: 'B1.svg',
    shortDescription: 'Anger att du har väjningsplikt mot korsande trafik.',
    fullDescription: 'Vägmärke B1, väjningsplikten, är en av de mest fundamentala trafikskyltarna i Sverige. Den nedåtvända röda triangeln anger att du har väjningsplikt mot trafik på den korsande vägen. Du måste sakta ner och vara beredd att stanna helt om det krävs för att ge andra trafikanter företräde. Till skillnad från stopplikt (B2) behöver du inte stanna om vägen är fri — men du måste kunna bedöma trafiksituationen korrekt i fart. Väjningsplikt innebär att du ska anpassa hastigheten så att du kan stanna om det behövs, och att du inte får orsaka att annan förare tvingas väja eller bromsa. Märket sätts upp vid korsningar där högerregeln inte gäller och det inte finns trafikljus.',
    usage: 'Placeras vid korsningar där trafik från huvudvägen har företräde. Vanligt vid infarter till större vägar.',
    commonMisunderstandings: 'Väjningsplikt ≠ stopplikt. Du BEHÖVER inte stanna om vägen är fri. Men du MÅSTE vara beredd att stanna. Många kör in i korsningen utan att sakta ner tillräckligt.',
    quizQuestions: [
      { question: 'Vad innebär väjningsplikt?', options: ['Du måste alltid stanna', 'Du måste vara beredd att stanna och ge annan trafik företräde', 'Du har företräde', 'Du ska köra fortare'], correctIndex: 1, explanation: 'Väjningsplikt innebär att du ska ge annan trafik företräde och vara beredd att stanna.' },
      { question: 'Vilken form har väjningspliktsmärket?', options: ['Rund', 'Fyrkantig', 'Nedåtvänd triangel', 'Åttakantig'], correctIndex: 2, explanation: 'Väjningspliktsmärket (B1) är en nedåtvänd triangel med röd kant.' },
      { question: 'Måste du alltid stanna vid väjningsplikt?', options: ['Ja, alltid', 'Nej, bara om det behövs för att ge företräde', 'Bara på natten', 'Bara vid dålig sikt'], correctIndex: 1, explanation: 'Du behöver bara stanna om det krävs för att ge annan trafik företräde.' },
    ],
    hasIndividualPage: true,
  },
  {
    id: 'B2', code: 'B2', name: 'Stopplikt', slug: 'stopplikt', category: 'B', svgFile: 'B2.svg',
    shortDescription: 'Anger att du MÅSTE stanna helt vid stopplinjen.',
    fullDescription: 'Vägmärke B2, stopplikten, är en av de mest kända trafikskyltarna i världen med sin unika åttakantiga (oktagonala) form och röda färg. Stopplikt innebär att du MÅSTE stanna helt vid stopplinjen eller, om stopplinje saknas, omedelbart före korsningen. Du får inte rulla fram långsamt — bilen måste stå helt stilla. Efter att du stannat ska du kontrollera att det är fritt i alla riktningar innan du kör vidare. Stopplikten används vid korsningar där sikten är begränsad eller trafikflödet kräver att fordon stannar helt för att bedöma situationen. Att inte stanna vid stopplikt är en av de vanligaste anledningarna till att folk kuggass på körprovet. Bötesbeloppet för att bryta mot stopplikt är 3 000 kronor.',
    usage: 'Placeras vid korsningar med begränsad sikt, farliga korsningar och vid järnvägskorsningar. Ofta i kombination med stopplinje.',
    commonMisunderstandings: 'Det vanligaste felet är att "nästan stanna" eller rulla sakta — du MÅSTE stå helt stilla. Även om det är uppenbart fritt ska du stanna. Polisen kan bötfälla dig även om ingen annan trafik fanns.',
    quizQuestions: [
      { question: 'Vad innebär stopplikt?', options: ['Sakta ner', 'Stanna helt och ge företräde', 'Bara titta sig omkring', 'Tuta före korsningen'], correctIndex: 1, explanation: 'Stopplikt betyder att du MÅSTE stanna helt vid stopplinjen och sedan ge företräde.' },
      { question: 'Vilken form har stoppskylten?', options: ['Cirkulär', 'Triangulär', 'Åttakantig (oktagon)', 'Rektangulär'], correctIndex: 2, explanation: 'Stoppskylten är unik med sin åttakantiga (oktagonala) form.' },
      { question: 'Vad kostar böterna för att bryta mot stopplikt?', options: ['500 kr', '1 500 kr', '3 000 kr', '5 000 kr'], correctIndex: 2, explanation: 'Böterna för att inte stanna vid stopplikt är 3 000 kronor.' },
    ],
    hasIndividualPage: true,
  },
  {
    id: 'B3-1', code: 'B3-1', name: 'Huvudled', slug: 'huvudled', category: 'B', svgFile: 'B3-1.svg',
    shortDescription: 'Anger att du kör på huvudled och har företräde.',
    fullDescription: 'Vägmärke B3 anger att du kör på en huvudled. Det betyder att du har företräde framför trafik som kommer från sidovägar — de har antingen väjningsplikt eller stopplikt mot dig. Märket är en gul romb (stående fyrkant). Huvudleden gäller tills märket "Huvudled upphör" (B4) visas. På en huvudled kan du räkna med att ha företräde i korsningar, men var ändå uppmärksam — andra bilister kan missa sina väjningsskyltar.',
    usage: 'Placeras vid större vägar som genomgående har företräde framför sidovägar.',
    commonMisunderstandings: 'Att du kör på huvudled och har företräde betyder inte att du kan köra oförsiktigt. Olyckor sker när sidotrafik missar sin väjningsplikt.',
    quizQuestions: [
      { question: 'Vad innebär att du kör på en huvudled?', options: ['Du har väjningsplikt', 'Du har företräde i korsningar', 'Du måste köra minst 70 km/h', 'Du får inte svänga'], correctIndex: 1, explanation: 'På en huvudled har du företräde framför trafik från sidovägar.' },
      { question: 'Vilken form har huvudledsmärket?', options: ['Cirkel', 'Triangel', 'Gul romb', 'Oktagon'], correctIndex: 2, explanation: 'Huvudledsmärket är en gul romb (stående fyrkant) med vit kant.' },
    ],
    hasIndividualPage: true,
  },
  {
    id: 'B4', code: 'B4', name: 'Huvudled upphör', slug: 'huvudled-upphor', category: 'B', svgFile: 'B4.svg',
    shortDescription: 'Anger att huvudleden upphör.',
    fullDescription: 'Märke B4 anger att huvudleden upphör. Från och med denna skylt har du inte längre automatiskt företräde i korsningar. Högerregeln eller andra trafikskyltar gäller. Det är viktigt att vara extra uppmärksam efter detta märke, då du kan ha vant dig vid att ha företräde.',
    usage: 'Placeras där huvudleden slutar, ofta vid infart i tätort eller vid byte av vägtyp.',
    commonMisunderstandings: 'Många kör vidare med samma "jag har företräde"-mentalitet efter att huvudleden upphört. Var medveten om att högerregeln kan gälla igen.',
    quizQuestions: [
      { question: 'Vad gäller efter märket "Huvudled upphör"?', options: ['Du har fortfarande företräde', 'Högerregeln eller andra skyltar gäller', 'Du måste stanna', 'Motorvägsregler gäller'], correctIndex: 1, explanation: 'När huvudleden upphör gäller högerregeln eller andra uppsatta trafikmärken.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'B5', code: 'B5', name: 'Företräde vid möte', slug: 'foretrade-vid-mote', category: 'B', svgFile: 'B5.svg',
    shortDescription: 'Du har företräde vid möte på smal väg.',
    fullDescription: 'Märke B5 anger att du har företräde vid möte. Det används vid smala passager, broar eller vägavsnitt där bara ett fordon i taget kan passera. Mötande trafik har skylt B6 (mötande har företräde) och måste vänta tills du passerat.',
    usage: 'Placeras vid smala broar, vägförträngningar och vid vägarbeten.',
    commonMisunderstandings: 'Att du har företräde betyder inte att mötande alltid stannar — kör försiktigt och förbered dig på att stanna.',
    quizQuestions: [
      { question: 'Vad innebär märket "Företräde vid möte"?', options: ['Du måste vänta', 'Du får passera först', 'Du ska stanna', 'Du ska blinka'], correctIndex: 1, explanation: 'Du har företräde och mötande trafik ska vänta tills du passerat.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'B6', code: 'B6', name: 'Väjningsplikt vid möte', slug: 'vajningsplikt-vid-mote', category: 'B', svgFile: 'B6.svg',
    shortDescription: 'Du har väjningsplikt vid möte — mötande har företräde.',
    fullDescription: 'Märke B6 anger att mötande trafik har företräde vid smal passage. Du måste stanna och vänta tills mötande fordon passerat. Märket sitter på motsatt sida av B5 (företräde vid möte).',
    usage: 'Placeras vid smala broar och vägavsnitt i kombination med B5 på andra sidan.',
    commonMisunderstandings: 'Man måste faktiskt STANNA och vänta — inte bara sakta ner och hoppas att det löser sig.',
    quizQuestions: [
      { question: 'Vad ska du göra vid märke B6?', options: ['Köra igenom snabbt', 'Stanna och låta mötande passera', 'Tuta och köra', 'Blinka och köra'], correctIndex: 1, explanation: 'Du har väjningsplikt och ska stanna tills mötande fordon passerat.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'B7', code: 'B7', name: 'Förkörsrätt i korsning', slug: 'forkorsratt-i-korsning', category: 'B', svgFile: 'B7.svg',
    shortDescription: 'Anger att du har förkörsrätt i nästa korsning.',
    fullDescription: 'Märke B7 anger att du har företräde i nästa korsning. Till skillnad från huvudled (B3) gäller detta bara för en specifik korsning, inte en hel vägsträcka. Trafik från sidovägen har väjningsplikt eller stopplikt.',
    usage: 'Placeras före enskilda korsningar där du har företräde, utan att det är en genomgående huvudled.',
    commonMisunderstandings: 'Gäller bara för NÄSTA korsning — inte alla kommande korsningar.',
    quizQuestions: [
      { question: 'Gäller förkörsrätt i korsning för hela vägsträckan?', options: ['Ja', 'Nej, bara för nästa korsning', 'Ja, i 500 meter', 'Beror på hastigheten'], correctIndex: 1, explanation: 'B7 gäller bara för den specifika korsningen — inte hela sträckan.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'B8', code: 'B8', name: 'Väjningsplikt i korsning', slug: 'vajningsplikt-i-korsning', category: 'B', svgFile: 'B8.svg',
    shortDescription: 'Anger att korsande trafik har väjningsplikt.',
    fullDescription: 'Märke B8 informerar om att korsande trafik vid den kommande korsningen har väjningsplikt. Det är en informationsskylt till dig som förare — du har företräde i korsningen. Men var ändå uppmärksam på att korsande trafik respekterar sin väjningsplikt.',
    usage: 'Placeras på huvudvägar före korsningar där sidotrafiken har väjnings- eller stopplikt.',
    commonMisunderstandings: 'Att korsande har väjningsplikt garanterar inte att de stannar. Kör alltid defensivt.',
    quizQuestions: [
      { question: 'Vad innebär B8?', options: ['Du har väjningsplikt', 'Korsande trafik har väjningsplikt', 'Stanna alltid', 'Kör försiktigt'], correctIndex: 1, explanation: 'B8 anger att korsande trafik har väjningsplikt — du har företräde.' },
    ],
    hasIndividualPage: false,
  },

  // ===== C-SKYLTAR (FÖRBUD) =====
  {
    id: 'C1', code: 'C1', name: 'Förbud mot infart med fordon', slug: 'forbud-mot-infart', category: 'C', svgFile: 'C1.svg',
    shortDescription: 'Förbud mot att köra in — infart förbjuden.',
    fullDescription: 'Vägmärke C1, ofta kallat "infart förbjuden", är ett av de vanligaste förbudsmärkena i svensk trafik. Det runda röda märket med ett vitt horisontellt streck förbjuder all infart med fordon i den riktning skylten är vänd. Det gäller alla motorfordon, cyklar och mopeder. Märket sätts ofta upp vid enkelriktade gator för att förhindra trafik mot köriktningen, vid avfarter och påfarter till motorvägar (för att förhindra spökkörning), och vid vägavsnitt som tillfälligt stängts av. Att köra mot detta märke kan leda till frontalkollision och är ett av de allvarligaste trafikbrott man kan begå som bilförare. Spökkörning (att köra i fel riktning på motorväg) leder till livsfarliga situationer.',
    usage: 'Vanligt vid enkelriktade gator, motorvägsavfarter och tillfälligt avstängda vägar.',
    commonMisunderstandings: 'Många blandar ihop C1 (infart förbjuden) med C2 (all trafik förbjuden). C1 förbjuder infart i en riktning — det kan finnas trafik i andra riktningen. C2 förbjuder all fordonstrafik.',
    quizQuestions: [
      { question: 'Vad betyder det röda runda märket med vitt streck?', options: ['Parkering förbjuden', 'Infart förbjuden', 'Stanna förbjudet', 'Vägarbete'], correctIndex: 1, explanation: 'Det röda runda märket med ett vitt horisontellt streck betyder infart förbjuden.' },
      { question: 'Vilka fordon gäller förbudet för?', options: ['Bara bilar', 'Bara lastbilar', 'Alla fordon inklusive cyklar', 'Bara motorfordon'], correctIndex: 2, explanation: 'Förbudet gäller alla fordon — bilar, motorcyklar, cyklar och mopeder.' },
      { question: 'Var placeras "infart förbjuden" ofta?', options: ['Vid parkeringsplatser', 'Vid enkelriktade gator', 'Vid busshållplatser', 'Vid skolor'], correctIndex: 1, explanation: 'Märket är mycket vanligt vid enkelriktade gator för att förhindra trafik i fel riktning.' },
    ],
    hasIndividualPage: true,
  },
  {
    id: 'C2', code: 'C2', name: 'Förbud mot trafik med fordon', slug: 'forbud-mot-trafik', category: 'C', svgFile: 'C2.svg',
    shortDescription: 'Förbud mot all fordonstrafik i båda riktningar.',
    fullDescription: 'Märke C2 förbjuder all fordonstrafik i båda riktningar. Till skillnad från C1 som bara gäller infart i en riktning, stänger C2 av vägen helt för motorfordon. Gående är normalt tillåtna. Märket kan ha tilläggstavla som anger undantag, t.ex. "Gäller ej behörig trafik".',
    usage: 'Vid gågator, parkområden och tillfälligt avstängda vägar.',
    commonMisunderstandings: 'Gående får vanligtvis passera — förbudet gäller fordon, inte fotgängare.',
    quizQuestions: [
      { question: 'Vad skiljer C2 från C1?', options: ['C2 gäller bara bilar', 'C2 förbjuder trafik i båda riktningar', 'C2 gäller bara på natten', 'Ingen skillnad'], correctIndex: 1, explanation: 'C1 förbjuder infart i en riktning, C2 förbjuder all fordonstrafik i båda riktningar.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'C3', code: 'C3', name: 'Förbud mot trafik med motorfordon', slug: 'forbud-mot-motorfordon', category: 'C', svgFile: 'C3.svg',
    shortDescription: 'Förbud mot motorfordon (bilar, motorcyklar etc).',
    fullDescription: 'Märke C3 förbjuder all trafik med motorfordon. Cyklister och gående får passera. Märket används på vägar reserverade för gång- och cykeltrafik.',
    usage: 'Vid cykel- och gångbanor, parkvägar och naturområden.',
    commonMisunderstandings: 'Mopeder klass II som kan köra på cykelbana undantas inte automatiskt — det beror på lokal reglering.',
    quizQuestions: [
      { question: 'Får cyklister passera C3-märket?', options: ['Nej', 'Ja', 'Bara barn', 'Bara elcyklar'], correctIndex: 1, explanation: 'C3 förbjuder bara motorfordon — cyklister och gående får passera.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'C4', code: 'C4', name: 'Förbud mot trafik med tung lastbil', slug: 'forbud-mot-lastbil', category: 'C', svgFile: 'C4.svg',
    shortDescription: 'Förbud mot tung lastbil.',
    fullDescription: 'Märke C4 förbjuder trafik med tung lastbil (totalvikt över 3,5 ton). Personbilar, lätta lastbilar och bussar tillåts normalt. Märket placeras vid vägar som inte tål tunga fordon eller i bostadsområden.',
    usage: 'Vid bostadsområden, svaga broar och vägar med viktbegränsning.',
    commonMisunderstandings: 'Gäller TUNG lastbil (>3,5 ton) — inte vanliga skåpbilar eller lätta lastbilar.',
    quizQuestions: [
      { question: 'Vilka fordon förbjuds av C4?', options: ['Alla bilar', 'Tunga lastbilar (>3,5 ton)', 'Alla lastbilar', 'Bussar'], correctIndex: 1, explanation: 'C4 förbjuder tunga lastbilar med totalvikt över 3,5 ton.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'C5', code: 'C5', name: 'Förbud mot trafik med fordonståg', slug: 'forbud-mot-fordonståg', category: 'C', svgFile: 'C5.svg',
    shortDescription: 'Förbud mot fordonståg och släpfordon.',
    fullDescription: 'Märke C5 förbjuder fordon med tillkopplat släp (fordonståg). Fordon utan släp får passera. Vanligt vid smala vägar och skarpa kurvor där långa fordon inte kan manövreras säkert.',
    usage: 'Vid smala vägar, skarpa kurvor och områden där långa ekipage inte ryms.',
    commonMisunderstandings: 'Gäller bara om du har släp kopplat — utan släp får du passera.',
    quizQuestions: [
      { question: 'Får du passera C5 om du kör utan släp?', options: ['Nej', 'Ja', 'Bara med personbil', 'Bara nattetid'], correctIndex: 1, explanation: 'C5 förbjuder bara fordon med tillkopplat släp.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'C6', code: 'C6', name: 'Förbud mot trafik med motorcykel', slug: 'forbud-mot-motorcykel', category: 'C', svgFile: 'C6.svg',
    shortDescription: 'Förbud mot motorcykel.',
    fullDescription: 'Märke C6 förbjuder motorcyklar. Andra motorfordon som bilar och mopeder av klass II kan tillåtas. Vanligt vid bostadsområden eller stadsdelar med bullerbegränsningar.',
    usage: 'Vid bullerkänsliga områden och vägar reserverade för annan trafik.',
    commonMisunderstandings: 'Gäller specifikt motorcyklar — inte mopeder klass II.',
    quizQuestions: [
      { question: 'Gäller C6 för mopeder?', options: ['Ja, alla mopeder', 'Nej, bara motorcyklar', 'Bara på natten', 'Ja, klass I'], correctIndex: 1, explanation: 'C6 gäller specifikt motorcyklar. Moped klass II omfattas normalt inte.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'C7', code: 'C7', name: 'Förbud mot trafik med moped klass I', slug: 'forbud-mot-moped-klass-1', category: 'C', svgFile: 'C7.svg',
    shortDescription: 'Förbud mot moped klass I.',
    fullDescription: 'Märke C7 förbjuder trafik med moped klass I (max 45 km/h). Moped klass II och cyklar påverkas inte. Vanligt vid motorvägar och motortrafikleder där mopeder inte får köra.',
    usage: 'Vid vägar med hastigheter som inte lämpar sig för mopeder.',
    commonMisunderstandings: 'Klass I mopeder (max 45 km/h) ≠ klass II (max 25 km/h). Bara klass I förbjuds.',
    quizQuestions: [
      { question: 'Vilken moped-klass förbjuds av C7?', options: ['Klass II', 'Klass I', 'Båda klasserna', 'Ingen'], correctIndex: 1, explanation: 'C7 förbjuder moped klass I (max 45 km/h).' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'C8', code: 'C8', name: 'Förbud mot trafik med cykel och moped klass II', slug: 'forbud-mot-cykel', category: 'C', svgFile: 'C8.svg',
    shortDescription: 'Förbud mot cykel och moped klass II.',
    fullDescription: 'Märke C8 förbjuder cyklar och mopeder av klass II. Motorfordon tillåts. Vanligt vid motorvägar, motortrafikleder och vägar där cykeltrafik utgör en fara.',
    usage: 'Vid motortrafikleder, tunnlar och vägar där cyklar är förbjudna av säkerhetsskäl.',
    commonMisunderstandings: 'Förbudet gäller ALLA cyklar inklusive elcyklar och moped klass II.',
    quizQuestions: [
      { question: 'Gäller C8 för elcyklar?', options: ['Nej', 'Ja', 'Bara snabba elcyklar', 'Beror på'], correctIndex: 1, explanation: 'C8 gäller alla cyklar, inklusive elcyklar.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'C10', code: 'C10', name: 'Förbud mot trafik med terrängmotorfordon', slug: 'forbud-mot-terrengfordon', category: 'C', svgFile: 'C10.svg',
    shortDescription: 'Förbud mot terrängmotorfordon (fyrhjulingar, snöskotrar).',
    fullDescription: 'Märke C10 förbjuder trafik med terrängmotorfordon som fyrhjulingar och snöskotrar. Vanligt vid naturreservat och känsliga naturområden.',
    usage: 'Vid naturreservat, nationalparker och känsliga naturmiljöer.',
    commonMisunderstandings: 'Gäller inte vanliga bilar eller motorcyklar — bara specifika terrängfordon.',
    quizQuestions: [
      { question: 'Vilka fordon förbjuds av C10?', options: ['Bilar', 'Terrängmotorfordon som fyrhjulingar', 'Cyklar', 'Lastbilar'], correctIndex: 1, explanation: 'C10 förbjuder terrängmotorfordon som fyrhjulingar, snöskotrar och liknande.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'C11', code: 'C11', name: 'Förbud mot ridning', slug: 'forbud-mot-ridning', category: 'C', svgFile: 'C11.svg',
    shortDescription: 'Förbud mot ridning.',
    fullDescription: 'Märke C11 förbjuder ridning på häst. Används vid vägar och stigar där ryttare utgör en fara eller inte är önskade.',
    usage: 'Vid motortrafikleder och vägar där hästar inte är tillåtna.',
    commonMisunderstandings: 'Gäller enbart ridning — att leda en häst kan fortfarande vara tillåtet.',
    quizQuestions: [
      { question: 'Vad förbjuder C11?', options: ['Hundar', 'Ridning', 'Cyklar', 'Mopeder'], correctIndex: 1, explanation: 'C11 förbjuder ridning på häst.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'C12', code: 'C12', name: 'Förbud mot gångtrafik', slug: 'forbud-mot-gangtrafik', category: 'C', svgFile: 'C12.svg',
    shortDescription: 'Förbud mot gångtrafik.',
    fullDescription: 'Märke C12 förbjuder gångtrafik (fotgängare). Vanligt vid motorvägar och motortrafikleder där fotgängare utgör en trafikfara.',
    usage: 'Vid motorvägar, motortrafikleder och höghastighetsvägar.',
    commonMisunderstandings: 'Gäller fotgängare — cyklister kan ha separat reglering.',
    quizQuestions: [
      { question: 'Var ser man ofta förbud mot gångtrafik?', options: ['I parker', 'Vid motorvägar', 'I bostadsområden', 'Vid skolor'], correctIndex: 1, explanation: 'Förbudet mot gångtrafik finns vid motorvägar och motortrafikleder.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'C13', code: 'C13', name: 'Förbud mot omkörning', slug: 'forbud-mot-omkorning', category: 'C', svgFile: 'C13.svg',
    shortDescription: 'Förbud mot omkörning.',
    fullDescription: 'Märke C13 förbjuder omkörning av motorfordon som har fler än två hjul. Du får dock köra om mopeder, cyklar och andra tvåhjuliga fordon. Förbudet gäller till det upphävs av slutmärke, korsning med väjnings-/stopplikt eller nytt hastighetsmärke.',
    usage: 'Vid oöverskådliga sträckor, backkrön, kurvor och smala vägar.',
    commonMisunderstandings: 'Du FÅR köra om tvåhjuliga fordon (cyklar, mopeder) även inom förbudszon.',
    quizQuestions: [
      { question: 'Får du köra om en cykel inom omkörningsförbud?', options: ['Nej, aldrig', 'Ja, tvåhjuliga fordon undantas', 'Bara om det är säkert', 'Bara i tätort'], correctIndex: 1, explanation: 'Omkörningsförbudet gäller inte tvåhjuliga fordon som cyklar och mopeder.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'C14', code: 'C14', name: 'Förbud mot omkörning med tung lastbil', slug: 'forbud-mot-omkorning-lastbil', category: 'C', svgFile: 'C14.svg',
    shortDescription: 'Förbud mot omkörning för tung lastbil.',
    fullDescription: 'Märke C14 förbjuder tunga lastbilar (>3,5 ton) att köra om andra motorfordon. Personbilar och lätta fordon påverkas inte. Vanligt på tvåfältsvägar där lastbilsomkörningar skapar farliga situationer.',
    usage: 'Vid tvåfältsvägar där lastbilsomkörningar orsakar fara, ofta vid backar och begränsad sikt.',
    commonMisunderstandings: 'Gäller bara tunga lastbilar — du i din personbil får fortfarande köra om.',
    quizQuestions: [
      { question: 'Vem förbjuds att köra om av C14?', options: ['Alla', 'Tunga lastbilar', 'Personbilar', 'Bussar'], correctIndex: 1, explanation: 'C14 förbjuder bara tunga lastbilar (>3,5 ton) att köra om.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'C15', code: 'C15', name: 'Förbud mot U-sväng', slug: 'forbud-mot-u-svang', category: 'C', svgFile: 'C15.svg',
    shortDescription: 'Förbud mot U-sväng.',
    fullDescription: 'Märke C15 förbjuder U-sväng (att vända i korsningen). Vanligt vid trafikerade korsningar och platser där U-svängar skapar trafikfaror.',
    usage: 'Vid trafikerade korsningar, delad körbana och platser med begränsad sikt.',
    commonMisunderstandings: 'Förbudet gäller bara U-sväng — du får fortfarande svänga vänster i korsningen.',
    quizQuestions: [
      { question: 'Får du svänga vänster vid C15?', options: ['Nej', 'Ja, bara U-sväng förbjuds', 'Bara i tätort', 'Aldrig'], correctIndex: 1, explanation: 'C15 förbjuder bara U-sväng, inte vanlig vänstersväng.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'C16', code: 'C16', name: 'Förbud mot sväng i korsning', slug: 'forbud-mot-svang', category: 'C', svgFile: 'C16.svg',
    shortDescription: 'Förbud mot sväng (höger eller vänster).',
    fullDescription: 'Märke C16 förbjuder sväng i angiven riktning i korsningen. Pilen visar vilken riktning som är förbjuden. Vanligt vid korsningar med hög trafikbelastning eller begränsad sikt.',
    usage: 'Vid korsningar där svängar i viss riktning orsakar trafikproblem.',
    commonMisunderstandings: 'Pilen visar VILKEN riktning som är förbjuden — inte vilken riktning du ska köra.',
    quizQuestions: [
      { question: 'Hur vet du vilken riktning som är förbjuden?', options: ['Alltid höger', 'Pilen på skylten visar', 'Alltid vänster', 'Det beror på trafiken'], correctIndex: 1, explanation: 'Pilen på märket anger vilken svängriktning som är förbjuden.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'C17', code: 'C17', name: 'Förbud att parkera fordon', slug: 'parkering-forbjuden', category: 'C', svgFile: 'C17.svg',
    shortDescription: 'Förbud mot parkering.',
    fullDescription: 'Vägmärke C17, den välkända "P-förbuds"-skylten, förbjuder parkering på den sida av vägen där skylten sitter. Det runda blå märket med röd kant och röd diagonal linje anger att du inte får ställa bilen här. Viktigt att veta: kort stannande för av- och påstigning (högst 1 minut) är fortfarande tillåtet. Det är skillnad på parkering och stannande — parkering innebär att fordonet lämnas eller att det står stilla längre tid än vad som behövs för av-/påstigning. Förbudet gäller från skylten och framåt tills det upphävs av ny skylt, korsning eller annat märke.',
    usage: 'Mycket vanligt i stadsmiljö vid gator, torg och platser där parkering hindrar framkomlighet.',
    commonMisunderstandings: 'P-förbud ≠ stoppförbud. Du FÅR stanna kort (max ~1 min) för av- och påstigning vid parkeringsförbud. Vid stoppförbud (C18) får du inte ens stanna.',
    quizQuestions: [
      { question: 'Får du stanna kort vid parkeringsförbud?', options: ['Nej, aldrig', 'Ja, för av- och påstigning (max ~1 min)', 'Bara med varningsblinkers', 'Bara på natten'], correctIndex: 1, explanation: 'Vid parkeringsförbud (C17) får du stanna kort för av- och påstigning.' },
      { question: 'Vad skiljer parkeringsförbud (C17) från stoppförbud (C18)?', options: ['Ingenting', 'C17 tillåter kort stannande, C18 förbjuder allt stannande', 'C17 gäller bara bilar', 'C18 gäller bara lastbilar'], correctIndex: 1, explanation: 'C17 förbjuder parkering men tillåter kort stannande. C18 förbjuder även stannande.' },
    ],
    hasIndividualPage: true,
  },
  {
    id: 'C18', code: 'C18', name: 'Förbud att stanna och parkera fordon', slug: 'forbud-mot-att-stanna', category: 'C', svgFile: 'C18.svg',
    shortDescription: 'Förbud mot både stannande och parkering.',
    fullDescription: 'Märke C18 förbjuder ALLA former av stannande och parkering. Det blå runda märket med röd kant och två diagonala röda linjer (kryss) innebär att du varken får parkera eller stanna kort. Inte ens för att släppa av passagerare. Undantag kan gälla vid nödsituationer. Detta är ett striktare förbud än C17 (parkeringsförbud).',
    usage: 'Vid trafikerade gator, busshållplatser, räddningsvägar och platser där stannande blockerar trafiken.',
    commonMisunderstandings: 'Många stannar "bara en sekund" vid stoppförbud — det är också förbjudet. Stoppförbud innebär att du inte ens får stanna momentant (utom i nödsituationer).',
    quizQuestions: [
      { question: 'Får du släppa av en passagerare vid stoppförbud?', options: ['Ja, det går snabbt', 'Nej, inte ens kort stannande är tillåtet', 'Ja, med varningsblinkers', 'Ja, om trafiken tillåter'], correctIndex: 1, explanation: 'Stoppförbud förbjuder allt stannande — du får inte ens stanna kort.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'C20', code: 'C20', name: 'Datumparkering', slug: 'datumparkering', category: 'C', svgFile: 'C20.svg',
    shortDescription: 'Förbud mot parkering udda/jämna datum.',
    fullDescription: 'Märke C20 anger datumparkering — parkering är förbjuden på den sida av vägen där skylten står under udda respektive jämna datum. Systemet växlar vid midnatt. Den klassiska regeln: udda datum = parkering förbjuden på sidan med udda nummer.',
    usage: 'Vanligt i äldre stadsdelar och villaområden med smala gator.',
    commonMisunderstandings: 'Bytet sker vid midnatt — se till att flytta bilen i tid om datumet skiftar.',
    quizQuestions: [
      { question: 'När skiftar datumparkering?', options: ['Vid 06:00', 'Vid midnatt', 'Vid 18:00', 'Vid lunchtid'], correctIndex: 1, explanation: 'Datumparkering skiftar vid midnatt.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'C21', code: 'C21', name: 'Ändamålsplats (vändplats)', slug: 'vandplats', category: 'C', svgFile: 'C21.svg',
    shortDescription: 'Vändplats — parkering förbjuden.',
    fullDescription: 'Märke C21 anger en vändplats. Parkering är förbjuden här för att möjliggöra att fordon kan vända. Platsen ska alltid vara fri.',
    usage: 'Vid vändplatser i bostadsområden och vid återvändsgator.',
    commonMisunderstandings: 'Det är inte en parkeringsplats — det är en vändplats som MÅSTE hållas fri.',
    quizQuestions: [
      { question: 'Får du parkera vid en vändplats?', options: ['Ja, om det finns plats', 'Nej, vändplatsen ska hållas fri', 'Bara nattetid', 'Ja, max 10 min'], correctIndex: 1, explanation: 'Vändplatser ska alltid hållas fria för att fordon ska kunna vända.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'C23', code: 'C23', name: 'Förbud mot att använda signalhorn', slug: 'forbud-mot-signalhorn', category: 'C', svgFile: 'C23.svg',
    shortDescription: 'Förbud mot att tuta.',
    fullDescription: 'Märke C23 förbjuder användning av signalhorn (tuta). Vanligt i bostadsområden och vid sjukhus. Du får dock alltid tuta för att avvärja fara.',
    usage: 'Vid sjukhus, vilohem och bullerkänsliga bostadsområden.',
    commonMisunderstandings: 'Förbudet gäller inte om du tutar för att avvärja fara — det är alltid tillåtet.',
    quizQuestions: [
      { question: 'Får du tuta vid förbud mot signalhorn om det är fara?', options: ['Nej, aldrig', 'Ja, för att avvärja fara är alltid tillåtet', 'Bara på natten', 'Bara vid skola'], correctIndex: 1, explanation: 'Att signalera med tutan för att avvärja fara är alltid tillåtet oavsett skyltar.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'C24', code: 'C24', name: 'Hastighetsbegränsning', slug: 'hastighetsbegransning-50', category: 'C', svgFile: 'C24.svg',
    shortDescription: 'Anger högsta tillåtna hastighet.',
    fullDescription: 'Vägmärke C24 anger den högsta tillåtna hastigheten i km/h. Siffran inom den röda cirkeln visar maxhastigheten. I Sverige finns hastighetsbegränsningar på 20, 30, 40, 50, 60, 70, 80, 90, 100, 110 och 120 km/h. Bashastigheten i tätort är 50 km/h och utanför tätort 70 km/h. Hastighetsbegränsningen gäller från skylten tills ny skylt med annan hastighet visas, tills vägen slutar, eller tills du passerar en skylt som upphäver begränsningen. Att överskrida hastighetsbegränsningen är en av de vanligaste trafikförseelserna — bötesbeloppen varierar från 2 000 kr (1–10 km/h över) upp till 4 000 kr och körkortsåterkallelse vid grövre överträdelser. Hastigheten är den enskilt viktigaste faktorn för trafiksäkerhet. En ökning från 30 till 50 km/h tredubblar risken för att en fotgängare dör vid en påkörning.',
    usage: 'Används på alla typer av vägar i hela Sverige. Den vanligaste varianten i tätort är 30, 40 och 50 km/h.',
    commonMisunderstandings: 'Bashastigheten 50 km/h i tätort gäller UTAN skylt. Men 70 km/h utanför tätort gäller bara om ingen annan skylt finns. Många tror att det är 90 km/h utanför tätort — men det är bara på vägar med den specifika skylten.',
    quizQuestions: [
      { question: 'Vad är bashastigheten i tätort?', options: ['30 km/h', '40 km/h', '50 km/h', '70 km/h'], correctIndex: 2, explanation: 'Bashastigheten i tätort är 50 km/h om inget annat anges.' },
      { question: 'Vad är bashastigheten utanför tätort?', options: ['50 km/h', '70 km/h', '80 km/h', '90 km/h'], correctIndex: 1, explanation: 'Utanför tätort gäller 70 km/h som bashastighet om inget annat anges.' },
      { question: 'Hur mycket ökar dödsrisken för fotgängare vid påkörning i 50 jämfört med 30 km/h?', options: ['Obetydligt', 'Dubbelt', 'Tre gånger så hög', 'Tio gånger så hög'], correctIndex: 2, explanation: 'Dödsrisken för en fotgängare tredubblas vid en ökning från 30 till 50 km/h.' },
    ],
    hasIndividualPage: true,
  },
  {
    id: 'C25-1', code: 'C25-1', name: 'Slut på hastighetsbegränsning', slug: 'slut-pa-hastighetsbegransning', category: 'C', svgFile: 'C25-1.svg',
    shortDescription: 'Hastighetsbegränsningen upphör.',
    fullDescription: 'Märke C25-1 anger att den lokala hastighetsbegränsningen upphör. Bashastigheten gäller igen (50 km/h i tätort, 70 km/h utanför tätort) om inte annan skylt visas.',
    usage: 'Placeras där lokala hastighetsbegränsningar slutar.',
    commonMisunderstandings: 'Att begränsningen upphör betyder INTE att du kan köra hur fort som helst — bashastigheten gäller.',
    quizQuestions: [
      { question: 'Vad gäller efter "slut på hastighetsbegränsning" i tätort?', options: ['Fri fart', 'Bashastigheten 50 km/h', '70 km/h', '90 km/h'], correctIndex: 1, explanation: 'Bashastigheten i tätort (50 km/h) gäller om ingen annan skylt finns.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'C31-3', code: 'C31-3', name: 'Begränsad fordonsbredd', slug: 'begransad-fordonsbredd', category: 'C', svgFile: 'C31-3.svg',
    shortDescription: 'Fordon bredare än angivet mått förbjuds.',
    fullDescription: 'Märke C31 med breddmått anger att fordon bredare än det angivna måttet inte får passera. Siffran anger maximal tillåten bredd i meter.',
    usage: 'Vid smala broar, tunnlar och portar.',
    commonMisunderstandings: 'Bredden gäller hela fordonet inklusive last och speglar.',
    quizQuestions: [
      { question: 'Räknas backspeglar med i fordonsbredden?', options: ['Nej', 'Ja', 'Bara infällda', 'Beror på typ'], correctIndex: 1, explanation: 'Hela fordonets bredd inklusive speglar och utstickande last räknas.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'C31-5', code: 'C31-5', name: 'Begränsad fordonshöjd', slug: 'begransad-fordonshojd', category: 'C', svgFile: 'C31-5.svg',
    shortDescription: 'Fordon högre än angivet mått förbjuds.',
    fullDescription: 'Märke C31 med höjdmått anger att fordon högre än det angivna måttet inte får passera. Viktigt att kunna sin fordons höjd, särskilt med takbox eller last.',
    usage: 'Vid tunnlar, viadukter, portar och broar med begränsad höjd.',
    commonMisunderstandings: 'Glöm inte takbox, lasthållare och antenner när du mäter höjden.',
    quizQuestions: [
      { question: 'Vad ska du tänka på vid höjdbegränsning?', options: ['Bara bilens höjd', 'Bilens höjd inklusive takbox och last', 'Längden', 'Bredden'], correctIndex: 1, explanation: 'Total höjd inklusive takbox, last och andra utstickande föremål räknas.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'C31-7', code: 'C31-7', name: 'Begränsad fordonslängd', slug: 'begransad-fordonslangd', category: 'C', svgFile: 'C31-7.svg',
    shortDescription: 'Fordon längre än angivet mått förbjuds.',
    fullDescription: 'Märke C31 med längdmått anger att fordon längre än angivet mått inte får passera. Gäller hela fordonets längd inklusive eventuellt släp.',
    usage: 'Vid skarpa kurvor, snäva vägavsnitt och broar där långa fordon inte kan manövreras.',
    commonMisunderstandings: 'Totallängden inklusive släp räknas — inte bara dragbilen.',
    quizQuestions: [
      { question: 'Räknas släpet med i fordonslängden?', options: ['Nej', 'Ja', 'Bara om det är tungt', 'Beror på typ'], correctIndex: 1, explanation: 'Hela ekipagets längd inklusive släp räknas.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'C31-9', code: 'C31-9', name: 'Begränsad bruttovikt', slug: 'begransad-bruttovikt', category: 'C', svgFile: 'C31-9.svg',
    shortDescription: 'Fordon tyngre än angiven vikt förbjuds.',
    fullDescription: 'Märke C31 med viktbegränsning anger att fordon med totalvikt (bruttovikt) över det angivna värdet inte får passera. Vikten anges i ton. Gäller fordonets totalvikt inklusive last och passagerare.',
    usage: 'Vid svaga broar, smala vägar och områden som inte tål tungt trafikk.',
    commonMisunderstandings: 'Det är TOTALVIKTEN som gäller, inte bara fordonets tjänstevikt.',
    quizQuestions: [
      { question: 'Avser viktbegränsningen fordonets tomvikt?', options: ['Ja', 'Nej, det är totalvikten med last', 'Bara motorns vikt', 'Bara lasten'], correctIndex: 1, explanation: 'Viktbegränsningen avser totalvikt inklusive fordon, passagerare och last.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'C35', code: 'C35', name: 'Slut på förbud mot omkörning', slug: 'slut-pa-omkorningsforbud', category: 'C', svgFile: 'C35.svg',
    shortDescription: 'Omkörningsförbudet upphör.',
    fullDescription: 'Märke C35 anger att det generella omkörningsförbudet upphör. Du får åter köra om. Var dock fortfarande försiktig — omkörning ska bara ske när det är säkert.',
    usage: 'Placeras där omkörningsförbud upphör, ofta efter en kurva eller backkrön.',
    commonMisunderstandings: 'Att omkörning är tillåten igen betyder inte att det är säkert att köra om just där.',
    quizQuestions: [
      { question: 'Betyder C35 att det alltid är säkert att köra om?', options: ['Ja', 'Nej, du måste fortfarande bedöma säkerheten', 'Ja, i båda riktningarna', 'Bara på raksträckor'], correctIndex: 1, explanation: 'C35 upphäver förbudet, men du ansvarar fortfarande för att omkörningen är säker.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'C36', code: 'C36', name: 'Slut på förbud mot omkörning med tung lastbil', slug: 'slut-pa-omkorningsforbud-lastbil', category: 'C', svgFile: 'C36.svg',
    shortDescription: 'Omkörningsförbudet för tung lastbil upphör.',
    fullDescription: 'Märke C36 anger att omkörningsförbudet för tunga lastbilar upphör. Tunga lastbilar (>3,5 ton) får åter köra om.',
    usage: 'Placeras efter avsnitt med C14 (omkörningsförbud för tung lastbil).',
    commonMisunderstandings: 'Gäller bara upphävande av lastbilsomkörningsförbud — inte det generella.',
    quizQuestions: [
      { question: 'Vem gäller C36 för?', options: ['Alla', 'Tunga lastbilar', 'Personbilar', 'Motorcyklar'], correctIndex: 1, explanation: 'C36 upphäver specifikt omkörningsförbudet för tunga lastbilar.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'C39', code: 'C39', name: 'Förbud mot fordonstrafik med farligt gods', slug: 'forbud-mot-farligt-gods', category: 'C', svgFile: 'C39.svg',
    shortDescription: 'Förbud mot fordon med farligt gods.',
    fullDescription: 'Märke C39 förbjuder fordon som transporterar farligt gods att passera. Vanligt vid tunnlar, tätbebyggda områden och broar.',
    usage: 'Vid tunnlar, broar och stadscentrum där farligt gods inte tillåts.',
    commonMisunderstandings: 'Gäller inte vanliga fordon — bara de som är märkta med farligt gods-skyltar.',
    quizQuestions: [
      { question: 'Var ser man ofta C39?', options: ['Vid skolor', 'Vid tunnlar och broar', 'Vid parkeringar', 'Bara i hamnar'], correctIndex: 1, explanation: 'C39 är vanligt vid tunnlar och broar där farligt gods skulle vara extra farligt vid olycka.' },
    ],
    hasIndividualPage: false,
  },

  // ===== D-SKYLTAR (PÅBUD) =====
  {
    id: 'D1-1', code: 'D1-1', name: 'Påbjuden körriktning rakt fram', slug: 'pabjuden-korriktning-rakt-fram', category: 'D', svgFile: 'D1-1.svg',
    shortDescription: 'Du måste köra rakt fram.',
    fullDescription: 'Märke D1-1 anger att du måste köra rakt fram i korsningen. Sväng varken höger eller vänster — du får bara fortsätta rakt fram. Påbudsmärken har blå bakgrund med vit symbol och anger vad du MÅSTE göra, till skillnad från förbudsmärken som anger vad du inte FÅR göra.',
    usage: 'Vid korsningar där svängning i sidoled är förbjuden eller farlig.',
    commonMisunderstandings: 'Det är ett PÅBUD, inte bara en rekommendation. Du MÅSTE köra rakt fram.',
    quizQuestions: [
      { question: 'Vad anger blå runda märken med vit pil?', options: ['Rekommenderad riktning', 'Påbjuden (obligatorisk) körriktning', 'Förbud', 'Varning'], correctIndex: 1, explanation: 'Blå cirklar med vit symbol är påbudsmärken — de anger vad du MÅSTE göra.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'D1-3', code: 'D1-3', name: 'Påbjuden körriktning höger', slug: 'pabjuden-korriktning-hoger', category: 'D', svgFile: 'D1-3.svg',
    shortDescription: 'Du måste svänga höger.',
    fullDescription: 'Märke D1-3 anger att du måste svänga höger i korsningen. Att köra rakt fram eller svänga vänster är inte tillåtet. Pilen anger tydligt riktningen du ska ta.',
    usage: 'Vid korsningar med enkelriktad trafik, cirkulationsplatser och liknande.',
    commonMisunderstandings: 'Du MÅSTE svänga höger — det är inte valfritt.',
    quizQuestions: [
      { question: 'Vad ska du göra vid D1-3?', options: ['Köra rakt fram', 'Svänga höger', 'Svänga vänster', 'Stanna'], correctIndex: 1, explanation: 'D1-3 anger att du måste svänga höger i korsningen.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'D1-6', code: 'D1-6', name: 'Påbjuden körriktning höger eller vänster', slug: 'pabjuden-korriktning-hoger-eller-vanster', category: 'D', svgFile: 'D1-6.svg',
    shortDescription: 'Du måste svänga höger eller vänster (inte rakt fram).',
    fullDescription: 'Märke D1-6 anger att du måste svänga antingen höger eller vänster — att köra rakt fram är inte tillåtet. Vanligt vid T-korsningar och korsningar med refuger.',
    usage: 'Vid T-korsningar, delad körbana och korsningar där genomfart förbjuds.',
    commonMisunderstandings: 'Du kan välja höger ELLER vänster — men rakt fram är förbjudet.',
    quizQuestions: [
      { question: 'Får du köra rakt fram vid D1-6?', options: ['Ja', 'Nej, du måste svänga höger eller vänster', 'Bara om det är fritt', 'Bara i nödsituationer'], correctIndex: 1, explanation: 'D1-6 anger att du måste svänga — rakt fram är inte ett alternativ.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'D1-7', code: 'D1-7', name: 'Påbjuden körriktning passera höger', slug: 'pabjuden-passera-hoger', category: 'D', svgFile: 'D1-7.svg',
    shortDescription: 'Du måste passera hindret på höger sida.',
    fullDescription: 'Märke D1-7 anger att du måste passera hindret (refugen, trafikdelare) på höger sida. Vanligt vid refuger och trafiköar.',
    usage: 'Vid refuger, trafikdelare och mittenöar på vägen.',
    commonMisunderstandings: 'Pilen anger vilken sida du ska passera — följ den noggrant.',
    quizQuestions: [
      { question: 'Vad anger D1-7?', options: ['Sväng höger', 'Passera hindret på höger sida', 'Parkera höger', 'Stanna höger'], correctIndex: 1, explanation: 'D1-7 anger att du ska passera hindret (refugen) på höger sida.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'D2-1', code: 'D2-1', name: 'Påbjuden lägsta hastighet', slug: 'pabjuden-lagsta-hastighet', category: 'D', svgFile: 'D2-1.svg',
    shortDescription: 'Anger lägsta tillåtna hastighet.',
    fullDescription: 'Märke D2-1 anger den lägsta hastigheten du måste hålla (om trafikförhållandena tillåter). Det blå runda märket med vit siffra anger minimihastigheten i km/h. Om du inte kan hålla minimihastigheten (t.ex. i kö eller vid halt väglag) behöver du inte — märket gäller under normala trafikförhållanden.',
    usage: 'Vanligt i tunnlar och på vägar där för låg hastighet skapar trafikfaror.',
    commonMisunderstandings: 'Minimihastigheten gäller bara under normala förhållanden. I kö, vid olycka eller halt väglag behöver du inte hålla den.',
    quizQuestions: [
      { question: 'Måste du alltid hålla minimihastigheten?', options: ['Ja, alltid', 'Nej, bara under normala trafikförhållanden', 'Ja, annars böter', 'Nej, det är bara en rekommendation'], correctIndex: 1, explanation: 'Minimihastigheten gäller under normala förhållanden — inte i kö, olycka eller halt väglag.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'D3', code: 'D3', name: 'Cirkulationsplats', slug: 'cirkulationsplats', category: 'D', svgFile: 'D3.svg',
    shortDescription: 'Cirkulationsplats (rondell) — kör medurs.',
    fullDescription: 'Vägmärke D3 anger att du ska köra medurs runt rondellen (cirkulationsplatsen). Trafik som redan befinner sig i rondellen har alltid företräde — du måste väja innan du kör in. Blinka höger när du lämnar rondellen, men du behöver inte blinka vänster när du kör in. I Sverige kör vi alltid medurs (moturs i högertrafikländer som styr åt andra hållet). En vanlig fråga på teoriprovet handlar om cirkulationsplatser — nämligen reglerna kring blinkers. Du ska ALLTID blinka höger innan du lämnar rondellen. Att inte blinka är inte bara oartigt — det är farligt för trafiken bakom dig som inte vet vart du ska.',
    usage: 'Placeras vid alla cirkulationsplatser (rondeller) i Sverige.',
    commonMisunderstandings: 'Du behöver INTE blinka vänster när du kör in i rondellen (ett av de vanligaste felen). Blinka bara höger när du lämnar.',
    quizQuestions: [
      { question: 'Ska du blinka vänster när du kör in i en rondell?', options: ['Ja, alltid', 'Nej', 'Bara om du ska ta första avfarten', 'Bara om det finns cyklister'], correctIndex: 1, explanation: 'Du ska INTE blinka vänster in i rondellen. Blinka bara höger när du lämnar.' },
      { question: 'Vem har företräde i en cirkulationsplats?', options: ['Den som kör in', 'Den som redan är inne i rondellen', 'Den som kör störst bil', 'Ingen har företräde'], correctIndex: 1, explanation: 'Trafik som redan är i rondellen har alltid företräde.' },
      { question: 'Vilken riktning kör man i en svensk rondell?', options: ['Moturs', 'Medurs', 'Valfri riktning', 'Rakt igenom'], correctIndex: 1, explanation: 'I Sverige (högertrafikland) kör man alltid medurs i rondeller.' },
    ],
    hasIndividualPage: true,
  },
  {
    id: 'D4', code: 'D4', name: 'Påbjuden cykelbana', slug: 'pabjuden-cykelbana', category: 'D', svgFile: 'D4.svg',
    shortDescription: 'Påbjuden cykelbana — cyklister och moped klass II ska använda banan.',
    fullDescription: 'Märke D4 anger att cyklister och moped klass II måste använda den anvisade cykelbanan. Det är inte valfritt — du får INTE cykla på körbanan om det finns en påbjuden cykelbana. Bilförare får inte köra på cykelbanan.',
    usage: 'Vid separata cykelbanor längs vägar och gator.',
    commonMisunderstandings: 'Många cyklister tror att de kan välja om de vill cykla på körbanan eller cykelbanan. När D4 finns måste du använda cykelbanan.',
    quizQuestions: [
      { question: 'Måste du använda cykelbanan om D4-märke finns?', options: ['Nej, det är valfritt', 'Ja, det är obligatoriskt', 'Bara i tätort', 'Bara vid rusningstid'], correctIndex: 1, explanation: 'När D4 finns är det obligatoriskt att använda cykelbanan.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'D6', code: 'D6', name: 'Påbjuden gång- och cykelbana', slug: 'pabjuden-gang-och-cykelbana', category: 'D', svgFile: 'D6.svg',
    shortDescription: 'Gemensam gång- och cykelbana.',
    fullDescription: 'Märke D6 anger en gemensam gång- och cykelbana. Både fotgängare och cyklister delar utrymmet. Visa hänsyn och anpassa hastigheten. Cyklister ska visa särskild hänsyn mot gående.',
    usage: 'Vid delade gång- och cykelbanor i tätort och utanför.',
    commonMisunderstandings: 'Cyklister har inte automatiskt företräde — gående och cyklister ska samsas.',
    quizQuestions: [
      { question: 'Vem har företräde på gemensam gång- och cykelbana?', options: ['Cyklister', 'Fotgängare', 'Ingen — alla ska visa hänsyn', 'Den snabbaste'], correctIndex: 2, explanation: 'Alla ska visa hänsyn och anpassa sig — ingen har automatiskt företräde.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'D8', code: 'D8', name: 'Påbjuden gångbana', slug: 'pabjuden-gangbana', category: 'D', svgFile: 'D8.svg',
    shortDescription: 'Påbjuden gångbana — bara för fotgängare.',
    fullDescription: 'Märke D8 anger en gångbana avsedd enbart för fotgängare. Cyklar och mopeder är inte tillåtna. Fotgängare ska använda denna bana.',
    usage: 'Vid separata gångbanor i stadsmiljö.',
    commonMisunderstandings: 'Cyklar får INTE köra på en ren gångbana — det är bara för gående.',
    quizQuestions: [
      { question: 'Får cyklister använda en gångbana (D8)?', options: ['Ja', 'Nej', 'Bara barn', 'Bara vid behov'], correctIndex: 1, explanation: 'D8 anger gångbana för fotgängare — cyklar är inte tillåtna.' },
    ],
    hasIndividualPage: false,
  },

  // ===== E-SKYLTAR (ANVISNING/INFORMATION) =====
  {
    id: 'E1', code: 'E1', name: 'Motorväg', slug: 'motorvag', category: 'E', svgFile: 'E1.svg',
    shortDescription: 'Motorväg börjar — särskilda regler gäller.',
    fullDescription: 'Vägmärke E1 anger att motorväg börjar. Motorvägen är Sveriges snabbaste vägtyp med hastighetsgräns på normalt 110 eller 120 km/h. Särskilda regler gäller: bara motorfordon som kan hålla minst 40 km/h tillåts, fotgängare och cyklister är förbjudna, du får inte stanna på motorvägen (utom i nödfall), U-sväng är förbjudet, och backning är förbjudet. Du kör på motorvägen via påfarter och lämnar via avfarter. Accelerationsfältet (påfartsrampen) är till för att anpassa hastigheten till motorvägens flöde innan du byter fil. Det är en av de vanligaste felpunkterna på körprovet — många accelererar för lite på rampen och försöker komma ut i 70 km/h bland trafik i 110.',
    usage: 'Placeras vid motorvägens start.',
    commonMisunderstandings: 'Motorväg ≠ automatiskt 110 km/h. Hastigheten anges av separata hastighetsskyltar och kan variera. Dessutom tror många att högra filen är "den långsamma filen" — i själva verket ska du normalt köra i den högra filen och bara använda vänsterfilen för omkörning.',
    quizQuestions: [
      { question: 'Vilken lägsta hastighet ska fordon kunna hålla på motorväg?', options: ['20 km/h', '40 km/h', '70 km/h', '90 km/h'], correctIndex: 1, explanation: 'Fordon måste kunna köra minst 40 km/h för att få trafikera motorvägen.' },
      { question: 'Får du stanna på motorvägen?', options: ['Ja, var som helst', 'Bara i höger fil', 'Nej, bara vid nödfall', 'Ja, i 5 minuter'], correctIndex: 2, explanation: 'Du får bara stanna på motorvägen vid nödsituationer — använd nödfickor.' },
      { question: 'Vilken fil ska du normalt köra i på motorvägen?', options: ['Vänster fil', 'Höger fil', 'Valfri', 'Mittfil'], correctIndex: 1, explanation: 'Du ska normalt köra i höger fil. Vänster fil används för omkörning.' },
    ],
    hasIndividualPage: true,
  },
  {
    id: 'E3', code: 'E3', name: 'Motortrafikled', slug: 'motortrafikled', category: 'E', svgFile: 'E3.svg',
    shortDescription: 'Motortrafikled börjar.',
    fullDescription: 'Märke E3 anger att motortrafikled börjar. Motortrafikled liknar motorväg men kan ha plankorsningar och saknar mitträcke på vissa sträckor. Samma fordonskrav som motorväg — minst 40 km/h. Fotgängare och cyklister är förbjudna.',
    usage: 'Vid motortrafikleder, ofta mellan städer.',
    commonMisunderstandings: 'Motortrafikled ≠ motorväg. Motortrafikleder kan ha korsningar i plan och sakna mitträcke.',
    quizQuestions: [
      { question: 'Hur skiljer sig motortrafikled från motorväg?', options: ['Ingen skillnad', 'Motortrafikled kan ha plankorsningar', 'Motortrafikled har högre hastighet', 'Motorväg har plankorsningar'], correctIndex: 1, explanation: 'Motortrafikleder kan ha korsningar i plan och sakna mitträcke, till skillnad från motorvägar.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'E4', code: 'E4', name: 'Motorväg upphör', slug: 'motorvag-upphor', category: 'E', svgFile: 'E4.svg',
    shortDescription: 'Motorvägen upphör.',
    fullDescription: 'Märke E4 anger att motorvägen upphör. Sänk hastigheten och var beredd på förändrade trafikförhållanden — korsningar, fotgängare, cyklister och lägre hastigheter kan förekomma direkt efter.',
    usage: 'Placeras vid motorvägens slut.',
    commonMisunderstandings: 'Många fortsätter i motorvägshastighet efter detta märke. Sänk hastigheten direkt.',
    quizQuestions: [
      { question: 'Vad ska du göra när motorvägen upphör?', options: ['Öka hastigheten', 'Sänka hastigheten och anpassa sig', 'Stanna', 'U-svinga'], correctIndex: 1, explanation: 'Sänk hastigheten och var beredd på nya trafikförhållanden.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'E5', code: 'E5', name: 'Rekommenderad lägre hastighet', slug: 'rekommenderad-lagre-hastighet', category: 'E', svgFile: 'E5.svg',
    shortDescription: 'Rekommenderad lägre hastighet.',
    fullDescription: 'Märke E5 anger en rekommenderad lägre hastighet. Till skillnad från C24 (obligatorisk hastighetsbegränsning) är detta en rekommendation, inte ett krav. Det sätts upp vid farliga avsnitt där det vore klokt att sänka hastigheten.',
    usage: 'Vid skarpa kurvor, branta backar och andra farliga avsnitt där lägre hastighet rekommenderas.',
    commonMisunderstandings: 'Det är en REKOMMENDATION, inte lag. Men att ignorera den kan innebära att du kör oförsiktigt.',
    quizQuestions: [
      { question: 'Är rekommenderad hastighet lagkrav?', options: ['Ja', 'Nej, det är en rekommendation', 'Ja, vid dåligt väder', 'Bara för lastbilar'], correctIndex: 1, explanation: 'E5 är en rekommendation — inte obligatorisk som C24.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'E6', code: 'E6', name: 'Rekommenderad högre hastighet', slug: 'rekommenderad-hogre-hastighet', category: 'E', svgFile: 'E6.svg',
    shortDescription: 'Slut på rekommenderad lägre hastighet.',
    fullDescription: 'Märke E6 anger att den rekommenderade lägre hastigheten upphör. Normal hastighet gäller igen.',
    usage: 'Placeras efter E5 när det rekommenderade avsnittet slutar.',
    commonMisunderstandings: 'Ingen missuppfattning — märket upphäver bara E5.',
    quizQuestions: [
      { question: 'Vad gör E6?', options: ['Sätter ny hastighet', 'Upphäver rekommenderad lägre hastighet', 'Ger stopp', 'Anger motorväg'], correctIndex: 1, explanation: 'E6 upphäver den rekommenderade lägre hastigheten från E5.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'E7', code: 'E7', name: 'Gågata', slug: 'gagata', category: 'E', svgFile: 'E7.svg',
    shortDescription: 'Gågata — fotgängare har företräde.',
    fullDescription: 'Märke E7 anger att en gågata börjar. I gågatan har fotgängare företräde och fordon får bara köra i gångfart (max ~7 km/h). Fordon får bara köra in om det är nödvändigt, t.ex. för varutransporter eller utryckningsfordon.',
    usage: 'Vid shoppinggator, torg och andra gångtrafikområden.',
    commonMisunderstandings: 'Gångfart = max ~7 km/h. Många kör i 20-30 km/h och tror det räcker — det gör det inte.',
    quizQuestions: [
      { question: 'Vilken hastighet gäller i en gågata?', options: ['30 km/h', '20 km/h', 'Gångfart (~7 km/h)', '50 km/h'], correctIndex: 2, explanation: 'I en gågata ska fordon framföras i gångfart, max ca 7 km/h.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'E8', code: 'E8', name: 'Gågata upphör', slug: 'gagata-upphor', category: 'E', svgFile: 'E8.svg',
    shortDescription: 'Gågatan upphör.',
    fullDescription: 'Märke E8 anger att gågatan upphör. Normala trafikregler gäller igen efter denna skylt.',
    usage: 'Placeras vid gågatans slut.',
    commonMisunderstandings: 'Ingen speciell — normala regler gäller igen.',
    quizQuestions: [
      { question: 'Vad gäller efter E8?', options: ['Fortsatt gångfart', 'Normala trafikregler', 'Motorvägsregler', 'Cykelregler'], correctIndex: 1, explanation: 'Efter gågatan upphör gäller normala trafikregler.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'E9', code: 'E9', name: 'Tätbebyggt område', slug: 'tatbebyggt-omrade', category: 'E', svgFile: 'E9.svg',
    shortDescription: 'Tätbebyggt område börjar — bashastighet 50 km/h.',
    fullDescription: 'Märke E9, tätbebyggt område (ofta en gul skylt med ortens namn), anger att tätbebyggt område börjar. Bashastigheten är 50 km/h om inget annat anges. Inom tätort gäller särskilda parkeringsregler, och du ska vara extra uppmärksam på fotgängare, cyklister och barn. Många trafikolyckor med personskador sker inom tätbebyggda områden.',
    usage: 'Vid infarterna till alla tätorter i Sverige.',
    commonMisunderstandings: 'Bashastigheten 50 km/h gäller automatiskt i tätort UTAN att det behöver stå på en skylt.',
    quizQuestions: [
      { question: 'Vad är bashastigheten i tätbebyggt område?', options: ['30 km/h', '40 km/h', '50 km/h', '70 km/h'], correctIndex: 2, explanation: 'I tätbebyggt område gäller bashastigheten 50 km/h om inget annat anges.' },
      { question: 'Gäller 50 km/h även utan hastighetsskylt i tätort?', options: ['Nej, man får köra valfritt', 'Ja', 'Nej, då gäller 70', 'Beror på kommun'], correctIndex: 1, explanation: 'Bashastigheten 50 km/h gäller automatiskt inom tätbebyggt område.' },
    ],
    hasIndividualPage: true,
  },
  {
    id: 'E10', code: 'E10', name: 'Tätbebyggt område upphör', slug: 'tatbebyggt-omrade-upphor', category: 'E', svgFile: 'E10.svg',
    shortDescription: 'Tätbebyggt område upphör — bashastighet 70 km/h.',
    fullDescription: 'Märke E10 anger att det tätbebyggda området upphör. Bashastigheten ändras till 70 km/h om inget annat anges. Var medveten om att landsvägshastigheter gäller, men kontrollera alltid om det finns hastighetsskyltar.',
    usage: 'Vid utfart från tätorter.',
    commonMisunderstandings: 'Utanför tätort gäller 70 km/h — INTE 90 km/h. Många tror att landsvägshastigheten automatiskt är 90.',
    quizQuestions: [
      { question: 'Vad är bashastigheten utanför tätort?', options: ['50 km/h', '70 km/h', '80 km/h', '90 km/h'], correctIndex: 1, explanation: 'Utanför tätort gäller 70 km/h som bashastighet om inget annat anges.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'E11-2', code: 'E11-2', name: 'Parkeringsplats', slug: 'parkeringsplats', category: 'E', svgFile: 'E11-2.svg',
    shortDescription: 'Anger parkeringsplats.',
    fullDescription: 'Märke E11-2 anger att det finns en parkeringsplats. Det blå P-märket är ett av de mest igenkännliga vägmärkena. Tilläggstavlor kan ange tidsbegränsningar, avgifter eller villkor. Kontrollera alltid tilläggsinformation.',
    usage: 'Vid alla typer av parkeringsplatser — gatuparkeringar, parkeringshus och parkeringsytor.',
    commonMisunderstandings: 'P-skylt utan tilläggstavla innebär att parkering är tillåten utan tidsbegränsning — men kommunala regler kan fortfarande gälla.',
    quizQuestions: [
      { question: 'Vad bör du kontrollera vid ett P-märke?', options: ['Ingenting', 'Tilläggstavlor med villkor och tider', 'Bara färgen', 'Bara storleken'], correctIndex: 1, explanation: 'Kontrollera alltid tilläggstavlor som kan ange tider, avgifter och villkor.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'E15', code: 'E15', name: 'Sammanvävning', slug: 'sammanvavning', category: 'E', svgFile: 'E15.svg',
    shortDescription: 'Sammanvävning — varannan bil.',
    fullDescription: 'Märke E15 anger sammanvävning, det vill säga att två körfält ska flyta samman till ett. Principen "varannan bil" (blixtlåsprincipen) gäller — fordon från de två filerna ska turas om att köra in i den kvarvarande filen. Anpassa hastigheten och var beredd att släppa in ett fordon framför dig.',
    usage: 'Vid filsammanslagningar, ofta efter accelerationsfält och vid vägarbeten.',
    commonMisunderstandings: 'Det är inte "den som vågar vinner" — blixtlåsprincipen (varannan bil) gäller. Att blockera eller trycka sig in är både farligt och oartigt.',
    quizQuestions: [
      { question: 'Vilken princip gäller vid sammanvävning?', options: ['Högerregeln', 'Varannan bil (blixtlåsprincipen)', 'Största fordonet först', 'Den snabbaste först'], correctIndex: 1, explanation: 'Vid sammanvävning gäller blixtlåsprincipen — varannan bil turas om.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'E16-1', code: 'E16-1', name: 'Övergångsställe', slug: 'overgangsstalle', category: 'E', svgFile: 'E16-1.svg',
    shortDescription: 'Övergångsställe — fotgängare har företräde.',
    fullDescription: 'Vägmärke E16 (ofta i kombination med zebraränder på vägen) anger ett övergångsställe. Som bilförare har du väjningsplikt mot fotgängare som befinner sig på eller visar avsikt att gå ut på övergångsstället. Det innebär att du måste sakta ner och vara beredd att stanna. Du får ALDRIG köra om ett fordon som stannat vid ett övergångsställe — det kan finnas en fotgängare du inte ser. Parkering är förbjuden inom 10 meter före ett övergångsställe för att säkerställa god sikt. Många allvarliga olyckor sker vid övergångsställen, ofta för att bilister kör för fort eller inte uppmärksammar fotgängare. Särskild försiktighet krävs i mörker, regn och skymning.',
    usage: 'Vid alla markerade övergångsställen i Sverige.',
    commonMisunderstandings: 'Väjningsplikten gäller redan när fotgängaren VISAR AVSIKT att gå ut — du behöver inte vänta tills personen redan står på övergångsstället.',
    quizQuestions: [
      { question: 'Hur nära ett övergångsställe får du parkera?', options: ['1 meter', '5 meter', '10 meter', '20 meter'], correctIndex: 2, explanation: 'Parkering är förbjuden inom 10 meter före ett övergångsställe.' },
      { question: 'Får du köra om ett fordon som stannat vid ett övergångsställe?', options: ['Ja, om det är fritt', 'Nej, aldrig', 'Ja, om du ser att det är tomt', 'Bara i vänster fil'], correctIndex: 1, explanation: 'Du får ALDRIG köra om ett fordon som stannat vid ett övergångsställe.' },
      { question: 'När inträder din väjningsplikt vid övergångsställe?', options: ['När fotgängaren redan passerat mitten', 'När fotgängaren visar avsikt att gå ut', 'När fotgängaren ropar', 'Bara vid dagsljus'], correctIndex: 1, explanation: 'Väjningsplikten gäller redan när fotgängaren visar avsikt att gå ut på övergångsstället.' },
    ],
    hasIndividualPage: true,
  },
  {
    id: 'E19', code: 'E19', name: 'Parkering', slug: 'parkering', category: 'E', svgFile: 'E19.svg',
    shortDescription: 'Parkeringsplats eller parkeringszon.',
    fullDescription: 'Märke E19 anger parkeringsplats. Blått P-märke indikerar var du får parkera. Tilläggstavlor anger eventuella villkor som tidsbegränsning, avgift eller parkeringsskiva.',
    usage: 'Vid alla anvisade parkeringsplatser.',
    commonMisunderstandings: 'Kontrollera alltid tilläggstavlor — bara för att det är ett P-märke betyder inte att parkering alltid är gratis eller obegränsad.',
    quizQuestions: [
      { question: 'Vad bör du alltid göra vid ett P-märke?', options: ['Bara parkera', 'Kontrollera tilläggstavlor', 'Betala', 'Ingenting'], correctIndex: 1, explanation: 'Kontrollera alltid tilläggstavlor för villkor, tider och avgifter.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'E20-1', code: 'E20-1', name: 'Enkelriktat', slug: 'enkelriktat', category: 'E', svgFile: 'E20-1.svg',
    shortDescription: 'Enkelriktad gata — trafik tillåten i pilens riktning.',
    fullDescription: 'Märke E20-1 anger att gatan är enkelriktad i den riktning pilen pekar. All trafik rör sig åt samma håll. Var ändå uppmärksam på fotgängare och cyklister som kan komma från oväntat håll.',
    usage: 'Vid alla enkelriktade gator, vanligt i stadsmiljö.',
    commonMisunderstandings: 'Enkelriktad gata innebär inte att du kan köra slarvigt — fotgängare och cyklister kan fortfarande korsa.',
    quizQuestions: [
      { question: 'Vad innebär en enkelriktad gata?', options: ['Trafik i båda riktningar', 'Trafik bara i pilens riktning', 'Bara bussar', 'Bara cyklar'], correctIndex: 1, explanation: 'All fordonstrafik rör sig i samma riktning som pilen anger.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'E21-1', code: 'E21-1', name: 'Återvändsgata', slug: 'atervandsgata', category: 'E', svgFile: 'E21-1.svg',
    shortDescription: 'Återvändsgata — ingen genomfart.',
    fullDescription: 'Märke E21-1 anger att gatan är en återvändsgata och inte leder vidare. Det finns ingen genomfart — du måste vända tillbaka.',
    usage: 'Vid alla återvändsgator.',
    commonMisunderstandings: 'Det kan finnas gång- eller cykelväg vidare — men inte bilväg.',
    quizQuestions: [
      { question: 'Vad innebär märket "återvändsgata"?', options: ['Ingen parkering', 'Gatan är en dead end', 'Enbart bussar', 'Farlig väg'], correctIndex: 1, explanation: 'Gatan är en återvändsgata — du måste vända om.' },
    ],
    hasIndividualPage: false,
  },

  // ===== T-SKYLTAR (TILLÄGGSTAVLOR) =====
  {
    id: 'T2', code: 'T2', name: 'Avstånd till fara', slug: 'avstand-till-fara', category: 'T', svgFile: 'T2.svg',
    shortDescription: 'Tilläggstavla som anger avstånd till faran.',
    fullDescription: 'Tilläggstavla T2 anger avståndet till den fara eller det förhållande som huvudmärket varnar för. Avståndet anges i meter.',
    usage: 'Under varningsmärken för att ange exakt avstånd till faran.',
    commonMisunderstandings: 'Avståndet är inte från skylten till korsningen — det är till faran som huvudmärket anger.',
    quizQuestions: [
      { question: 'Vad anger tilläggstavla T2?', options: ['Tid', 'Avstånd till faran', 'Hastighet', 'Vägnummer'], correctIndex: 1, explanation: 'T2 anger avståndet (i meter) till det som huvudmärket varnar för.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'T3', code: 'T3', name: 'Sträckans längd', slug: 'strackans-langd', category: 'T', svgFile: 'T3.svg',
    shortDescription: 'Anger hur lång sträcka förbudet/varningen gäller.',
    fullDescription: 'Tilläggstavla T3 anger hur lång sträcka det aktuella förhållandet (t.ex. varning eller förbud) gäller. Sträckan anges i meter eller kilometer.',
    usage: 'Under varningsmärken och förbudsmärken för att ange giltighetens längd.',
    commonMisunderstandings: 'Sträckan gäller FRAMÅT från skylten — inte bakåt.',
    quizQuestions: [
      { question: 'Vad anger T3?', options: ['Avstånd till skylten', 'Hur lång sträcka förbudet gäller', 'Antal fordon', 'Tidsperiod'], correctIndex: 1, explanation: 'T3 anger hur lång sträcka det aktuella förhållandet gäller.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'T4', code: 'T4', name: 'Tidsbegränsning', slug: 'tidsbegransning', category: 'T', svgFile: 'T4.svg',
    shortDescription: 'Anger under vilka tider märket gäller.',
    fullDescription: 'Tilläggstavla T4 anger under vilka klockslag och/eller dagar som huvudmärket gäller. Vanligt vid parkeringsskyltar och hastighetsbegränsningar som bara gäller vissa tider.',
    usage: 'Under parkerings- och förbudsmärken med tidsbegränsning.',
    commonMisunderstandings: 'Kontrollera noggrant vilka tider som anges — märket gäller BARA under de angivna tiderna.',
    quizQuestions: [
      { question: 'Vad anger T4?', options: ['Avstånd', 'Tidsbegränsning för huvudmärket', 'Hastighet', 'Vägnummer'], correctIndex: 1, explanation: 'T4 anger under vilka tider huvudmärket gäller.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'T5', code: 'T5', name: 'Gäller fordon med handikapptillstånd', slug: 'handikapp-tillstand', category: 'T', svgFile: 'T5.svg',
    shortDescription: 'Undantag för fordon med handikapptillstånd.',
    fullDescription: 'Tilläggstavla T5 anger att huvudmärket (ofta parkeringsmärke) gäller specifikt för fordon med parkeringstillstånd för rörelsehindrade.',
    usage: 'Under parkeringsmärken vid handikapparkering.',
    commonMisunderstandings: 'Utan giltigt parkeringstillstånd för rörelsehindrade får du INTE parkera här — det leder till höga böter.',
    quizQuestions: [
      { question: 'Vem får parkera vid märke med T5?', options: ['Alla', 'Bara fordon med handikapptillstånd', 'Bara äldre', 'Bara taxibilar'], correctIndex: 1, explanation: 'Bara fordon med giltigt parkeringstillstånd för rörelsehindrade.' },
    ],
    hasIndividualPage: false,
  },
  {
    id: 'T6', code: 'T6', name: 'Korsande trafik har väjnings- eller stopplikt', slug: 'korsande-trafik-vajningsplikt', category: 'T', svgFile: 'T6.svg',
    shortDescription: 'Tilläggstavla som anger att korsande trafik har väjnings- eller stopplikt.',
    fullDescription: 'Tilläggstavla T6 anger att trafik på den korsande vägen har väjnings- eller stopplikt. Den placeras under huvudledsmärke (B3) eller liknande för att informera om situationen i kommande korsning.',
    usage: 'Under huvudledsmärken och förkörsrättsmärken.',
    commonMisunderstandings: 'Att korsande har väjningsplikt garanterar inte att de stannar. Kör alltid defensivt.',
    quizQuestions: [
      { question: 'Vad säger T6?', options: ['Du har väjningsplikt', 'Korsande trafik har väjningsplikt', 'Alla måste stanna', 'Fri passage'], correctIndex: 1, explanation: 'T6 informerar om att korsande trafik har väjnings- eller stopplikt.' },
    ],
    hasIndividualPage: false,
  },
];

// Helper functions
export function getSignsByCategory(prefix: string): SignData[] {
  return signs.filter(s => s.category === prefix);
}

export function getSignBySlug(slug: string): SignData | undefined {
  return signs.find(s => s.slug === slug);
}

export function getSignsWithIndividualPages(): SignData[] {
  return signs.filter(s => s.hasIndividualPage);
}

export function getCategoryBySlug(slug: string): CategoryData | undefined {
  return categories.find(c => c.slug === slug);
}

export function getCategoryByPrefix(prefix: string): CategoryData | undefined {
  return categories.find(c => c.prefix === prefix);
}
