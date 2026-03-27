import { Question } from './types';

export const riskbeteendeQuestions: Question[] = [
  {
    id: 'risk-1',
    category: 'riskbeteende',
    difficulty: 'easy',
    question: 'Vad är den vanligaste orsaken till olyckor i trafiken?',
    options: [
      'Fordonstekniska fel',
      'Mänskliga faktorer som ouppmärksamhet och trötthet',
      'Dåligt vägunderlag',
    ],
    correctIndex: 1,
    explanation:
      'Cirka 90 % av alla trafikolyckor beror på den mänskliga faktorn, till exempel ouppmärksamhet, trötthet eller riskfyllt beteende.',
  },
  {
    id: 'risk-2',
    category: 'riskbeteende',
    difficulty: 'easy',
    question: 'Vad bör du göra om du känner dig trött under körning?',
    options: [
      'Öppna fönstret och fortsätta köra',
      'Stanna och vila minst 20 minuter',
      'Dricka kaffe och köra vidare direkt',
    ],
    correctIndex: 1,
    explanation:
      'Att öppna fönstret eller dricka kaffe ger bara kortvarig effekt. Det enda säkra är att stanna och sova eller vila ordentligt, minst 20 minuter.',
  },
  {
    id: 'risk-3',
    category: 'riskbeteende',
    difficulty: 'easy',
    question: 'Hur påverkar mobilanvändning din körförmåga?',
    options: [
      'Den påverkar inte om du har handsfree',
      'Reaktionstiden ökar kraftigt och uppmärksamheten minskar',
      'Den förbättrar din förmåga att multitaska',
    ],
    correctIndex: 1,
    explanation:
      'Att prata i mobil, även med handsfree, försämrar uppmärksamheten. Att skriva meddelanden är ännu farligare och jämförbart med rattfylleri.',
  },
  {
    id: 'risk-4',
    category: 'riskbeteende',
    difficulty: 'medium',
    question: 'Vad innebär 3-sekundersregeln?',
    options: [
      'Du ska kunna stanna inom 3 sekunder',
      'Avståndet till framförvarande bör motsvara minst 3 sekunders körtid',
      'Du ska reagera inom 3 sekunder på en fara',
    ],
    correctIndex: 1,
    explanation:
      '3-sekundersregeln innebär att du ska hålla minst 3 sekunders avstånd till bilen framför. Välj en fast punkt och räkna tiden tills du når den.',
  },
  {
    id: 'risk-5',
    category: 'riskbeteende',
    difficulty: 'medium',
    question: 'Hur lång är en normal reaktionstid för en uppmärksam förare?',
    options: [
      'Cirka 0,5 sekunder',
      'Cirka 1 sekund',
      'Cirka 3 sekunder',
    ],
    correctIndex: 1,
    explanation:
      'En uppmärksam förare har en reaktionstid på cirka 1 sekund. Trötthet, stress och distraktioner kan förlänga den avsevärt.',
  },
  {
    id: 'risk-6',
    category: 'riskbeteende',
    difficulty: 'medium',
    question: 'Vid 90 km/h och normal reaktionstid – hur långt hinner du köra innan du börjar bromsa?',
    options: [
      'Cirka 10 meter',
      'Cirka 25 meter',
      'Cirka 50 meter',
    ],
    correctIndex: 1,
    explanation:
      'Vid 90 km/h färdas du 25 meter per sekund. Med 1 sekunds reaktionstid hinner du alltså köra ca 25 meter innan du ens börjar bromsa.',
  },
  {
    id: 'risk-7',
    category: 'riskbeteende',
    difficulty: 'hard',
    question: 'Hur påverkas bromssträckan på en våt väg jämfört med torr väg?',
    options: [
      'Den förblir ungefär lika lång',
      'Den kan bli dubbelt så lång',
      'Den minskar tack vare vattnets kyleffekt',
    ],
    correctIndex: 1,
    explanation:
      'På en våt väg minskar friktionen markant, vilket kan göra bromssträckan upp till dubbelt så lång som på torr väg.',
  },
  {
    id: 'risk-8',
    category: 'riskbeteende',
    difficulty: 'hard',
    question: 'Vad är aquaplaning?',
    options: [
      'När bromsskivorna överhettas vid kraftig inbromsning',
      'När däcken tappar kontakten med vägen på grund av ett vattenlager',
      'När bilen glider på is i kurvor',
    ],
    correctIndex: 1,
    explanation:
      'Aquaplaning uppstår när vatten samlas framför däcken snabbare än det leds bort, så att bilen "flyter" på vattnet och du tappar styrförmågan.',
  },
  {
    id: 'risk-9',
    category: 'riskbeteende',
    difficulty: 'easy',
    question: 'Vilka trafikanter är extra utsatta och kräver särskild uppmärksamhet?',
    options: [
      'Lastbilsförare',
      'Barn, cyklister och äldre',
      'Andra bilister med nya bilar',
    ],
    correctIndex: 1,
    explanation:
      'Barn kan plötsligt springa ut i gatan, cyklister och äldre är oskyddade. Dessa grupper kräver extra försiktighet och lägre hastighet.',
  },
  {
    id: 'risk-10',
    category: 'riskbeteende',
    difficulty: 'medium',
    question: 'Vad ska du göra om du ser barn leka nära vägen?',
    options: [
      'Tuta för att uppmärksamma barnen',
      'Sänka hastigheten kraftigt och vara beredd att stanna',
      'Byta fil och köra förbi snabbt',
    ],
    correctIndex: 1,
    explanation:
      'Barn har svårt att bedöma hastighet och avstånd. Sänk hastigheten rejält och var alltid beredd att stanna helt.',
  },
  {
    id: 'risk-11',
    category: 'riskbeteende',
    difficulty: 'medium',
    question: 'Vad är en dödvinkel?',
    options: [
      'Ett område framför bilen som sikten inte når',
      'Ett område bredvid eller bakom bilen som inte syns i backspeglarna',
      'Området direkt under bilen',
    ],
    correctIndex: 1,
    explanation:
      'Dödvinkeln är det område bredvid och snett bakom fordonet som inte syns i backspeglarna. Kontrollera alltid genom att vrida på huvudet innan filbyte.',
  },
  {
    id: 'risk-12',
    category: 'riskbeteende',
    difficulty: 'easy',
    question: 'Varför är det extra farligt att köra fort i mörker?',
    options: [
      'Bilen drar mer bränsle i mörker',
      'Sikten är begränsad och stoppsträckan kan överstiga ljusområdet',
      'Vägbanan blir mjukare på natten',
    ],
    correctIndex: 1,
    explanation:
      'I mörker ser du kortare sträckor framför dig. Om du kör för fort kan du behöva stanna på en längre sträcka än vad strålkastarna lyser upp.',
  },
  {
    id: 'risk-13',
    category: 'riskbeteende',
    difficulty: 'hard',
    question: 'Hur lång kan den totala stoppsträckan bli vid 80 km/h på isig väg?',
    options: [
      'Cirka 50 meter',
      'Cirka 100 meter',
      'Över 200 meter',
    ],
    correctIndex: 2,
    explanation:
      'På isig väg kan friktionen vara så låg att bromssträckan blir 5–10 gånger längre. Vid 80 km/h kan total stoppsträcka överstiga 200 meter.',
  },
  {
    id: 'risk-14',
    category: 'riskbeteende',
    difficulty: 'medium',
    question: 'Vilken är den största risken med aggressiv körning?',
    options: [
      'Ökad bränsleförbrukning',
      'Kraftigt ökad olycksrisk på grund av sämre beslutsfattande',
      'Större slitage på bromsar',
    ],
    correctIndex: 1,
    explanation:
      'Aggressiv körning leder till riskfyllt beteende som för kort avstånd, plötsliga filbyten och för hög hastighet, vilket kraftigt ökar olycksrisken.',
  },
  {
    id: 'risk-15',
    category: 'riskbeteende',
    difficulty: 'easy',
    question: 'Hur påverkar grupptryck unga förares beteende i trafiken?',
    options: [
      'Det gör dem mer försiktiga',
      'Det kan leda till högre risktagande och farligare körning',
      'Det har ingen påverkan alls',
    ],
    correctIndex: 1,
    explanation:
      'Unga förare tar ofta större risker med passagerare i bilen, särskilt jämnåriga. Grupptryck kan leda till högre hastigheter och farligare beteenden.',
  },
  {
    id: 'risk-16',
    category: 'riskbeteende',
    difficulty: 'medium',
    question: 'Vad bör du göra om ett djur plötsligt dyker upp på vägen?',
    options: [
      'Alltid väja kraftigt åt sidan',
      'Bromsa och försöka behålla kontrollen – undvik kraftig väjning vid hög hastighet',
      'Accelerera för att passera snabbt',
    ],
    correctIndex: 1,
    explanation:
      'Kraftig väjning vid hög hastighet kan leda till att du förlorar kontrollen eller hamnar i mötande körfält. Bromsa kontrollerat istället.',
  },
  {
    id: 'risk-17',
    category: 'riskbeteende',
    difficulty: 'hard',
    question: 'Var är risken störst för viltolyckor?',
    options: [
      'I stadsmiljö nära parker',
      'Vid gryning och skymning, nära skog och åkermark',
      'På motorvägar mitt på dagen',
    ],
    correctIndex: 1,
    explanation:
      'Vilt är mest aktivt vid gryning och skymning. Sträckor nära skog och åkermark är särskilt riskfyllda, ofta markerade med viltvarningsmärken.',
  },
  {
    id: 'risk-18',
    category: 'riskbeteende',
    difficulty: 'medium',
    question: 'Vad händer med stoppsträckan om hastigheten fördubblas?',
    options: [
      'Stoppsträckan fördubblas',
      'Stoppsträckan fyrdubblas',
      'Stoppsträckan tredubblas',
    ],
    correctIndex: 1,
    explanation:
      'Bromssträckan ökar med hastigheten i kvadrat. Om hastigheten fördubblas blir bromssträckan fyra gånger längre.',
  },
  {
    id: 'risk-19',
    category: 'riskbeteende',
    difficulty: 'easy',
    question: 'Vilken tidsperiod på dygnet är olycksrisken störst?',
    options: [
      'Mitt på dagen (12–14)',
      'Natten och tidiga morgontimmarna (02–06)',
      'Kvällstid (18–20)',
    ],
    correctIndex: 1,
    explanation:
      'Under natten och tidiga morgontimmarna är olycksrisken störst på grund av trötthet, dålig sikt och eventuell alkoholpåverkan.',
  },
  {
    id: 'risk-20',
    category: 'riskbeteende',
    difficulty: 'hard',
    question: 'Hur mycket ökar risken att dödas i en kollision om hastigheten ökar från 30 till 50 km/h?',
    options: [
      'Risken fördubblas',
      'Risken ökar med cirka 5 gånger',
      'Risken ökar med cirka 10 gånger',
    ],
    correctIndex: 1,
    explanation:
      'Risken att en fotgängare dödas ökar dramatiskt vid högre hastigheter. Vid 30 km/h överlever de flesta, vid 50 km/h är risken att dö ca 5 gånger högre.',
  },
  {
    id: 'risk-21',
    category: 'riskbeteende',
    difficulty: 'medium',
    question: 'Vad menas med "säkerhetsavstånd"?',
    options: [
      'Avståndet mellan bilens sida och vägkanten',
      'Avståndet till framförvarande fordon som ger dig tid att reagera och stanna',
      'Minsta avstånd till mötande trafik',
    ],
    correctIndex: 1,
    explanation:
      'Säkerhetsavstånd är det avstånd du behöver hålla till framförvarande fordon för att hinna reagera och bromsa om något oväntat händer.',
  },
  {
    id: 'risk-22',
    category: 'riskbeteende',
    difficulty: 'hard',
    question: 'Varför är risken för singelolyckor större i kurvor?',
    options: [
      'Hastighetsmätaren visar fel i kurvor',
      'Centrifugalkraften kan dra ut bilen ur kurvan vid för hög hastighet',
      'Sikten alltid är sämre i kurvor',
    ],
    correctIndex: 1,
    explanation:
      'I kurvor verkar centrifugalkraft på fordonet. Vid för hög hastighet kan bilen inte följa kurvan och köra av vägen, särskilt på hal vägbana.',
  },
  {
    id: 'risk-23',
    category: 'riskbeteende',
    difficulty: 'easy',
    question: 'Vad bör du göra om en förare bakom dig kör aggressivt och ligger tätt?',
    options: [
      'Bromsa plötsligt för att lära dem en läxa',
      'Hålla jämn fart och låta föraren köra om när det är möjligt',
      'Accelerera för att öka avståndet',
    ],
    correctIndex: 1,
    explanation:
      'Undvik konflikter i trafiken. Håll lugn, kör i jämn fart och låt den aggressiva föraren passera säkert när tillfälle ges.',
  },
  {
    id: 'risk-24',
    category: 'riskbeteende',
    difficulty: 'medium',
    question: 'Vilken av följande faktorer ökar reaktionstiden mest?',
    options: [
      'Att lyssna på musik',
      'Att vara trött eller påverkad av läkemedel',
      'Att köra i regn',
    ],
    correctIndex: 1,
    explanation:
      'Trötthet och läkemedel har störst påverkan på reaktionstiden. Musik i sig påverkar normalt inte reaktionstiden lika kraftigt.',
  },
  {
    id: 'risk-25',
    category: 'riskbeteende',
    difficulty: 'hard',
    question: 'Vid vilken temperatur är risken för halka störst?',
    options: [
      'Vid minus 15 grader eller kallare',
      'Runt 0 grader, när vägbanan ligger nära fryspunkten',
      'Vid plus 5 grader',
    ],
    correctIndex: 1,
    explanation:
      'Runt 0 grader växlar vägbanan mellan att vara våt och isig, vilket gör den extra hal. Blixthalka kan uppstå snabbt och oväntat.',
  },
];
