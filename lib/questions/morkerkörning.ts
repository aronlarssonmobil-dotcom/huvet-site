import { Question } from './types';

export const morkerkorningQuestions: Question[] = [
  {
    id: 'mrk-1',
    category: 'morkerkörning',
    difficulty: 'easy',
    question: 'När ska du använda halvljus?',
    options: [
      'Bara när det är helt mörkt',
      'Alltid vid körning, även dagtid',
      'Bara utanför tättbebyggt område',
    ],
    correctIndex: 1,
    explanation:
      'I Sverige är det krav att använda halvljus (eller varselljus) under all körning, dygnet runt, oavsett väder och ljusförhållanden.',
  },
  {
    id: 'mrk-2',
    category: 'morkerkörning',
    difficulty: 'medium',
    question: 'När ska du byta från helljus till halvljus?',
    options: [
      'Bara i tätort',
      'När du möter eller kör nära bakom ett annat fordon, samt vid tillräcklig gatubelysning',
      'Aldrig, helljus ska alltid användas i mörker',
    ],
    correctIndex: 1,
    explanation:
      'Helljus bländar mötande och framförvarande trafikanter. Byt till halvljus i god tid vid möte, när du kör bakom annat fordon eller i belyst område.',
  },
  {
    id: 'mrk-3',
    category: 'morkerkörning',
    difficulty: 'medium',
    question: 'Vad ska du göra om du blir bländad av mötande bils helljus?',
    options: [
      'Tända ditt eget helljus som svar',
      'Titta mot höger vägkant, sakta ner och undvik att titta rakt in i ljuset',
      'Stanna omedelbart mitt på vägen',
    ],
    correctIndex: 1,
    explanation:
      'Vid bländning: rikta blicken mot höger vägkant, sänk farten och undvik att titta rakt in i ljuset. Blinka inte tillbaka med helljus.',
  },
  {
    id: 'mrk-4',
    category: 'morkerkörning',
    difficulty: 'easy',
    question: 'När får du använda dimljus framtill?',
    options: [
      'Bara vid dimma',
      'Vid dimma, kraftigt regn, snöfall eller liknande siktnedsättande förhållanden',
      'Alltid som extra belysning i mörker',
    ],
    correctIndex: 1,
    explanation:
      'Dimljus framtill får användas vid dimma, kraftigt regn, snöfall eller liknande förhållanden som kraftigt nedsätter sikten.',
  },
  {
    id: 'mrk-5',
    category: 'morkerkörning',
    difficulty: 'easy',
    question: 'Ska fotgängare använda reflex vid mörkerkörning?',
    options: [
      'Nej, det är bara en rekommendation utan lagkrav',
      'Ja, reflexer rekommenderas starkt och kan rädda liv genom att synas upp till 125 meter bort',
      'Bara barn behöver reflexer',
    ],
    correctIndex: 1,
    explanation:
      'En fotgängare utan reflex syns på bara 25 meter i halvljus. Med reflex syns du på upp till 125 meter, vilket ger föraren tid att reagera.',
  },
  {
    id: 'mrk-6',
    category: 'morkerkörning',
    difficulty: 'medium',
    question: 'Vilken belysning krävs på en cykel vid mörkerkörning?',
    options: [
      'Bara en reflex baktill räcker',
      'Vit lampa fram, röd lampa och reflex baktill samt reflexer på sidorna',
      'Ingen belysning behövs om cykeln har reflexer',
    ],
    correctIndex: 1,
    explanation:
      'En cykel ska ha vit lampa fram, röd lampa bak, röd reflex bak och sidoreflexer (eller reflexdäck) vid körning i mörker.',
  },
  {
    id: 'mrk-7',
    category: 'morkerkörning',
    difficulty: 'hard',
    question: 'Hur långt lyser halvljuset ungefär framför bilen?',
    options: [
      'Cirka 20–30 meter',
      'Cirka 30–50 meter',
      'Cirka 100 meter',
    ],
    correctIndex: 1,
    explanation:
      'Halvljuset lyser upp vägen cirka 30–50 meter framåt. Det innebär att du vid 70 km/h kan ha en stoppsträcka som överstiger ljusområdet.',
  },
  {
    id: 'mrk-8',
    category: 'morkerkörning',
    difficulty: 'hard',
    question: 'Varför är risken för viltolyckor extra stor i mörker?',
    options: [
      'Djuren attackerar bilar i mörker',
      'Djur syns sent i strålkastarljuset och kan bländas så de stannar på vägen',
      'Djur rör sig bara på natten',
    ],
    correctIndex: 1,
    explanation:
      'Djur syns mycket sent i halvljuset. De kan dessutom bländas av strålkastarna och stanna mitt på vägen istället för att fly.',
  },
  {
    id: 'mrk-9',
    category: 'morkerkörning',
    difficulty: 'easy',
    question: 'Hur bör du anpassa hastigheten vid mörkerkörning?',
    options: [
      'Kör samma hastighet som dagtid',
      'Sänk hastigheten så att du kan stanna inom det upplysta området',
      'Kör snabbare för att komma hem fortare',
    ],
    correctIndex: 1,
    explanation:
      'Du ska alltid kunna stanna inom den sträcka du ser framför dig. I mörker innebär det ofta lägre hastighet än hastighetsgränsen.',
  },
  {
    id: 'mrk-10',
    category: 'morkerkörning',
    difficulty: 'hard',
    question: 'Vad gäller för dimljus baktill?',
    options: [
      'Det ska alltid vara på i mörker',
      'Det får bara användas vid sikt under 150 meter och måste släckas när sikten förbättras',
      'Det får användas istället för bakljus',
    ],
    correctIndex: 1,
    explanation:
      'Dimbakljus får bara tändas vid kraftigt nedsatt sikt (under 150 meter). Det bländar annars bakomvarande och måste släckas direkt när sikten blir bättre.',
  },
];
