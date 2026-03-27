import { Question } from './types';

export const motorvagQuestions: Question[] = [
  {
    id: 'mot-1',
    category: 'motorvag',
    difficulty: 'easy',
    question: 'Vad ska du göra på accelerationsfältet vid påfart till motorväg?',
    options: [
      'Stanna och vänta på lucka',
      'Accelerera till motorvägens hastighet och anpassa dig till trafikflödet',
      'Köra in långsamt och sedan öka hastigheten',
    ],
    correctIndex: 1,
    explanation:
      'På accelerationsfältet ska du öka hastigheten för att nå samma fart som övrig trafik och smidigt flyta in i trafikströmmen.',
  },
  {
    id: 'mot-2',
    category: 'motorvag',
    difficulty: 'easy',
    question: 'Vad ska du göra på retardationsfältet vid avfart från motorväg?',
    options: [
      'Bromsa redan på motorvägen innan du svänger av',
      'Byta till retardationsfältet och sedan sänka hastigheten',
      'Stanna och blinka innan du kör av',
    ],
    correctIndex: 1,
    explanation:
      'Byt till retardationsfältet i god tid och sänk hastigheten där – inte i genomfartsfilen. Signalera i tid med blinkers.',
  },
  {
    id: 'mot-3',
    category: 'motorvag',
    difficulty: 'medium',
    question: 'Vilka fordon får INTE köra på motorväg?',
    options: [
      'Lastbilar över 3,5 ton',
      'Mopeder, cyklar, traktorer och fordon som inte kan hålla minst 40 km/h',
      'Husbilar och husvagnar',
    ],
    correctIndex: 1,
    explanation:
      'Fordon som inte kan hålla minst 40 km/h får inte köra på motorväg. Det gäller mopeder, cyklar, traktorer och gående.',
  },
  {
    id: 'mot-4',
    category: 'motorvag',
    difficulty: 'easy',
    question: 'Vad är högsta tillåtna hastighet på motorväg i Sverige?',
    options: [
      '100 km/h',
      '110 km/h (120 km/h på vissa sträckor)',
      '130 km/h',
    ],
    correctIndex: 1,
    explanation:
      'Normalt är högsta hastigheten på motorväg 110 km/h. På vissa sträckor tillåts 120 km/h, men det anges med skyltar.',
  },
  {
    id: 'mot-5',
    category: 'motorvag',
    difficulty: 'medium',
    question: 'Får du stanna på motorvägens vägren?',
    options: [
      'Ja, om du vill ringa ett samtal',
      'Nej, bara vid nödstopp eller fordonshaveri',
      'Ja, om du stannar kortare än 5 minuter',
    ],
    correctIndex: 1,
    explanation:
      'Det är förbjudet att stanna på motorvägens vägren utom vid nödstopp eller haveri. Använd istället nästa avfart eller rastplats.',
  },
  {
    id: 'mot-6',
    category: 'motorvag',
    difficulty: 'hard',
    question: 'Vad bör du göra vid nödstopp på motorväg?',
    options: [
      'Stanna i vänstra körfältet och vänta på hjälp',
      'Stanna på vägrenen, slå på varningsblinkers, sätt ut varningstriangel och gå bakom räcket',
      'Ring polisen och vänta i bilen',
    ],
    correctIndex: 1,
    explanation:
      'Vid nödstopp: styr ut på vägrenen, aktivera varningsblinkers, sätt ut varningstriangel minst 200 m bakom bilen och gå bakom vägräcket.',
  },
  {
    id: 'mot-7',
    category: 'motorvag',
    difficulty: 'medium',
    question: 'Vilken sida ska du köra om på motorväg?',
    options: [
      'Höger sida',
      'Vänster sida',
      'Vilken sida som helst',
    ],
    correctIndex: 1,
    explanation:
      'Omkörning ska alltid ske på vänster sida på motorväg. Omkörning på höger sida (smitning) är förbjuden.',
  },
  {
    id: 'mot-8',
    category: 'motorvag',
    difficulty: 'easy',
    question: 'Vilken fil ska du normalt köra i på en motorväg med två körfält i din riktning?',
    options: [
      'Vänster fil',
      'Höger fil',
      'Valfri fil',
    ],
    correctIndex: 1,
    explanation:
      'Du ska normalt köra i höger fil. Vänster fil används för omkörning. När omkörningen är klar ska du återgå till höger fil.',
  },
  {
    id: 'mot-9',
    category: 'motorvag',
    difficulty: 'medium',
    question: 'Hur långt avstånd bör du hålla till framförvarande vid 110 km/h på motorväg?',
    options: [
      'Cirka 30 meter',
      'Minst 3 sekunders avstånd, ungefär 90 meter',
      'Cirka 50 meter',
    ],
    correctIndex: 1,
    explanation:
      'Vid 110 km/h färdas du ca 30 meter per sekund. Med 3-sekundersregeln blir avståndet ungefär 90 meter.',
  },
  {
    id: 'mot-10',
    category: 'motorvag',
    difficulty: 'hard',
    question: 'Vad skiljer en motortrafikled från en motorväg?',
    options: [
      'Det finns ingen skillnad',
      'Motortrafikled kan ha korsningar i plan och saknar ibland mitträcke',
      'Motortrafikled har alltid högre hastighetsgräns',
    ],
    correctIndex: 1,
    explanation:
      'En motortrafikled kan ha plankorsningar, sakna mitträcke och ha anslutningar utan accelerationsfält. Den har ofta lägre hastighetsgräns.',
  },
  {
    id: 'mot-11',
    category: 'motorvag',
    difficulty: 'medium',
    question: 'Vad ska du göra om du missar din avfart på motorvägen?',
    options: [
      'Stanna och backa tillbaka',
      'Fortsätta till nästa avfart och köra tillbaka',
      'Köra i nödstoppsfilen tillbaka',
    ],
    correctIndex: 1,
    explanation:
      'Det är strängt förbjudet att backa eller vända på motorväg. Kör vidare till nästa avfart och ta dig tillbaka via det vanliga vägnätet.',
  },
  {
    id: 'mot-12',
    category: 'motorvag',
    difficulty: 'easy',
    question: 'Får du göra U-sväng på motorväg?',
    options: [
      'Ja, om det inte kommer trafik',
      'Nej, det är strängt förbjudet',
      'Ja, vid mittremsor och öppningar',
    ],
    correctIndex: 1,
    explanation:
      'U-sväng och vändning är strängt förbjudet på motorväg. Öppningarna i mitträcket är enbart avsedda för räddningsfordon.',
  },
  {
    id: 'mot-13',
    category: 'motorvag',
    difficulty: 'hard',
    question: 'Vad innebär "dragsugseffekt" vid omkörning av lastbilar på motorväg?',
    options: [
      'Att din bil accelererar av sig själv',
      'Att luft- och vinddrag från lastbilen kan påverka styrningen på ditt fordon',
      'Att lastbilen suger åt sig din bil',
    ],
    correctIndex: 1,
    explanation:
      'Stora fordon skapar turbulens. Vid omkörning kan du först dras mot lastbilen och sedan tryckas utåt, vilket kräver korrigerande styrrörelser.',
  },
  {
    id: 'mot-14',
    category: 'motorvag',
    difficulty: 'medium',
    question: 'Vad bör du göra innan du byter fil på motorväg?',
    options: [
      'Bara titta i backspegeln',
      'Kontrollera backspegel, ytterbackspegel, döda vinkeln och blinka i god tid',
      'Blinka och byta direkt',
    ],
    correctIndex: 1,
    explanation:
      'Kontrollera alla speglar, vrid på huvudet för att se döda vinkeln, blinka i god tid och byt fil mjukt när det är fritt.',
  },
  {
    id: 'mot-15',
    category: 'motorvag',
    difficulty: 'hard',
    question: 'Vad gäller om ett fordon på accelerationsfältet inte hinner komma upp i rätt hastighet?',
    options: [
      'Fordonet ska stanna och vänta',
      'Fordonet ska använda vägrenen och öka hastigheten där om det är säkert',
      'Fordonet ska köra in i trafiken ändå, övriga ska anpassa sig',
    ],
    correctIndex: 1,
    explanation:
      'Om du inte hinner komma upp i rätt fart kan du i nödfall använda vägrenen för att fortsätta accelerera, men undvik att stanna helt.',
  },
];
