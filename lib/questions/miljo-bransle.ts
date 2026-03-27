import { Question } from './types';

export const miljoBransleQuestions: Question[] = [
  {
    id: 'mil-1',
    category: 'miljo-bransle',
    difficulty: 'easy',
    question: 'Vad är ecodriving?',
    options: [
      'Att köra så fort som möjligt för att spara tid',
      'Ett bränsleeffektivt körsätt som minskar utsläpp och förbrukning',
      'Att bara köra elbil',
    ],
    correctIndex: 1,
    explanation:
      'Ecodriving innebär ett mjukt och framsynt körsätt som minskar bränsleförbrukningen med upp till 10–15 % och sänker utsläppen.',
  },
  {
    id: 'mil-2',
    category: 'miljo-bransle',
    difficulty: 'easy',
    question: 'Vilken åtgärd minskar bränsleförbrukningen mest?',
    options: [
      'Köra med öppna fönster istället för AC',
      'Hålla jämn hastighet och undvika kraftiga accelerationer',
      'Alltid köra på lägsta växel',
    ],
    correctIndex: 1,
    explanation:
      'Jämn hastighet och mjuka accelerationer är de mest effektiva sätten att minska bränsleförbrukningen. Kraftiga gasningar ökar förbrukningen markant.',
  },
  {
    id: 'mil-3',
    category: 'miljo-bransle',
    difficulty: 'medium',
    question: 'Hur påverkar tomgångskörning miljön?',
    options: [
      'Den har ingen påverkan eftersom motorn knappt arbetar',
      'Den orsakar onödiga utsläpp och bränsleförbrukning utan att fordonet rör sig',
      'Den är bra för motorn och minskar slitage',
    ],
    correctIndex: 1,
    explanation:
      'Tomgångskörning förbrukar bränsle och producerar utsläpp helt i onödan. Stäng av motorn om du väntar mer än 30 sekunder.',
  },
  {
    id: 'mil-4',
    category: 'miljo-bransle',
    difficulty: 'medium',
    question: 'Vad är en miljözon?',
    options: [
      'Ett område med gratis parkering för elbilar',
      'Ett avgränsat område i en stad där fordon med höga utsläpp inte får köra',
      'En laddstation för elbilar',
    ],
    correctIndex: 1,
    explanation:
      'Miljözoner finns i större svenska städer och begränsar vilka fordon som får köra där baserat på fordonets utsläppsklassificering.',
  },
  {
    id: 'mil-5',
    category: 'miljo-bransle',
    difficulty: 'easy',
    question: 'Vilken fördel har elbilar jämfört med bensinbilar?',
    options: [
      'De kräver aldrig service',
      'De har inga avgasutsläpp vid körning',
      'De är alltid billigare att köpa',
    ],
    correctIndex: 1,
    explanation:
      'Elbilar producerar inga avgasutsläpp vid körning. De bidrar till bättre luftkvalitet i städer, även om elproduktionen kan ha miljöpåverkan.',
  },
  {
    id: 'mil-6',
    category: 'miljo-bransle',
    difficulty: 'medium',
    question: 'Vad är en laddhybrid?',
    options: [
      'En bil som bara drivs av bränsle men har en stor generator',
      'En bil med både elmotor och förbränningsmotor som kan laddas via elnätet',
      'En elbil med extra batteri',
    ],
    correctIndex: 1,
    explanation:
      'En laddhybrid har både elmotor och förbränningsmotor. Batteriet kan laddas via elnätet och ger möjlighet att köra kortare sträckor helt på el.',
  },
  {
    id: 'mil-7',
    category: 'miljo-bransle',
    difficulty: 'hard',
    question: 'Vilken utsläppsklass krävs minst för att få köra i miljözon klass 2?',
    options: [
      'Euro 3',
      'Euro 5',
      'Euro 6',
    ],
    correctIndex: 1,
    explanation:
      'I miljözon klass 2 krävs minst Euro 5 för dieselfordon. Kraven kan variera beroende på bränsletyp och fordonskategori.',
  },
  {
    id: 'mil-8',
    category: 'miljo-bransle',
    difficulty: 'easy',
    question: 'Hur kan du minska bilens bränsleförbrukning genom underhåll?',
    options: [
      'Använda tjockare motorolja',
      'Hålla rätt däcktryck och serva bilen regelbundet',
      'Köra med tungt takräcke monterat',
    ],
    correctIndex: 1,
    explanation:
      'Rätt däcktryck minskar rullmotståndet. Regelbunden service säkerställer att motor, filter och tändstift fungerar optimalt.',
  },
  {
    id: 'mil-9',
    category: 'miljo-bransle',
    difficulty: 'medium',
    question: 'Varför bör du använda motorvärmare på vintern?',
    options: [
      'Bara för att få det varmt i kupén',
      'Det minskar utsläpp och slitage vid kallstart samt sänker bränsleförbrukningen',
      'Det ökar motorns effekt permanent',
    ],
    correctIndex: 1,
    explanation:
      'En motorvärmare gör att motorn snabbare når arbetstemperatur, vilket minskar utsläpp, bränsleförbrukning och motorslitage vid kallstart.',
  },
  {
    id: 'mil-10',
    category: 'miljo-bransle',
    difficulty: 'hard',
    question: 'Hur lång tid innan avfärd bör motorvärmaren slås på?',
    options: [
      'Minst 2 timmar',
      'Cirka 1–2 timmar beroende på temperatur',
      'Det räcker med 15 minuter',
    ],
    correctIndex: 1,
    explanation:
      'Motorvärmaren bör slås på 1–2 timmar innan avfärd beroende på utetemperatur. En timer är energieffektivt och praktiskt.',
  },
  {
    id: 'mil-11',
    category: 'miljo-bransle',
    difficulty: 'medium',
    question: 'Vilken körstrategi sparar mest bränsle i stadstrafik?',
    options: [
      'Accelerera snabbt upp till rätt hastighet och sedan rulla',
      'Förutse trafikrytmen och accelerera mjukt, utnyttja motorbroms',
      'Hålla låg växel och hög motorvarv',
    ],
    correctIndex: 1,
    explanation:
      'Genom att förutse trafikrytmen och köra jämnt med mjuka accelerationer och motorbroms kan du minska bränsleförbrukningen avsevärt i stad.',
  },
  {
    id: 'mil-12',
    category: 'miljo-bransle',
    difficulty: 'easy',
    question: 'Hur påverkar ett tungt lastat takräcke bränsleförbrukningen?',
    options: [
      'Det har ingen påverkan',
      'Det ökar luftmotståndet och bränsleförbrukningen',
      'Det minskar förbrukningen genom bättre balans',
    ],
    correctIndex: 1,
    explanation:
      'Ett takräcke ökar luftmotståndet markant, särskilt vid högre hastigheter. Ta av takräcket när det inte används.',
  },
  {
    id: 'mil-13',
    category: 'miljo-bransle',
    difficulty: 'hard',
    question: 'Vilka gaser i bilens avgaser bidrar mest till växthuseffekten?',
    options: [
      'Syre och kväve',
      'Koldioxid (CO₂) och metan',
      'Argon och helium',
    ],
    correctIndex: 1,
    explanation:
      'Koldioxid (CO₂) är den dominerande växthusgasen från fordon. Metan kan också bildas. Dessa gaser bidrar till global uppvärmning.',
  },
  {
    id: 'mil-14',
    category: 'miljo-bransle',
    difficulty: 'medium',
    question: 'Vad bör du göra med växeln vid ecodriving?',
    options: [
      'Alltid köra på lägsta möjliga växel',
      'Växla upp tidigt till högre växel för att hålla varvtalet lågt',
      'Aldrig använda högsta växeln',
    ],
    correctIndex: 1,
    explanation:
      'Vid ecodriving bör du växla upp tidigt (runt 2000–2500 varv) och köra på högsta möjliga växel. Lägre varvtal ger lägre bränsleförbrukning.',
  },
  {
    id: 'mil-15',
    category: 'miljo-bransle',
    difficulty: 'hard',
    question: 'Vilken av följande åtgärder ger störst minskning av koldioxidutsläpp?',
    options: [
      'Byta till syntetolja',
      'Minska hastigheten från 120 till 100 km/h på motorväg',
      'Byta till bredare däck',
    ],
    correctIndex: 1,
    explanation:
      'Att sänka hastigheten från 120 till 100 km/h minskar bränsleförbrukningen med cirka 20 %, vilket ger en betydande minskning av CO₂-utsläpp.',
  },
];
