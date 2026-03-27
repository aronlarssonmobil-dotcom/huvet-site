import { Question } from './types';

export const fordonTeknikQuestions: Question[] = [
  {
    id: 'ftk-1',
    category: 'fordon-teknik',
    difficulty: 'easy',
    question: 'Vad är det lagliga minimikravet för mönsterdjup på däck?',
    options: [
      '1,0 mm',
      '1,6 mm',
      '3,0 mm',
    ],
    correctIndex: 1,
    explanation:
      'Enligt lag måste mönsterdjupet vara minst 1,6 mm. Vid vinterväglag rekommenderas dock minst 3 mm för bra grepp.',
  },
  {
    id: 'ftk-2',
    category: 'fordon-teknik',
    difficulty: 'easy',
    question: 'Under vilken period måste vinterdäck användas vid vinterväglag?',
    options: [
      '1 november – 31 mars',
      '1 december – 31 mars',
      '1 oktober – 30 april',
    ],
    correctIndex: 1,
    explanation:
      'Vinterdäck är obligatoriska vid vinterväglag under perioden 1 december – 31 mars. Utanför denna period krävs de enbart om det råder vinterväglag.',
  },
  {
    id: 'ftk-3',
    category: 'fordon-teknik',
    difficulty: 'medium',
    question: 'Vad kan felaktigt däcktryck leda till?',
    options: [
      'Bättre väggrepp',
      'Ökad bränsleförbrukning och ojämnt däckslitage',
      'Snabbare acceleration',
    ],
    correctIndex: 1,
    explanation:
      'För lågt däcktryck ökar rullmotståndet, bränsleförbrukningen och ger ojämnt slitage. Det försämrar även köregenskaper och kan orsaka överhettning.',
  },
  {
    id: 'ftk-4',
    category: 'fordon-teknik',
    difficulty: 'easy',
    question: 'Vad betyder en röd varningslampa i instrumentpanelen?',
    options: [
      'Ett mindre fel som kan åtgärdas senare',
      'Ett allvarligt fel – stanna och kontrollera fordonet',
      'Normal driftindikation',
    ],
    correctIndex: 1,
    explanation:
      'Röda varningslampor indikerar allvarliga fel som kräver omedelbar åtgärd, till exempel oljetryck, laddning eller bromsfel.',
  },
  {
    id: 'ftk-5',
    category: 'fordon-teknik',
    difficulty: 'medium',
    question: 'Varför ska du kontrollera motoroljan regelbundet?',
    options: [
      'För att oljan påverkar bilens färg',
      'För att otillräcklig olja kan orsaka allvarliga motorskador',
      'Det behöver bara göras vid besiktning',
    ],
    correctIndex: 1,
    explanation:
      'Motoroljan smörjer och kyler motorn. För låg oljenivå kan leda till överhettning och allvarliga skador. Kontrollera nivån regelbundet.',
  },
  {
    id: 'ftk-6',
    category: 'fordon-teknik',
    difficulty: 'medium',
    question: 'Vad händer om kylvätskenivån är för låg?',
    options: [
      'Bilen går tystare',
      'Motorn kan överhettas och skadas allvarligt',
      'Bränsleförbrukningen minskar',
    ],
    correctIndex: 1,
    explanation:
      'Kylvätskan reglerar motorns temperatur. Om nivån är för låg riskerar motorn att överhettas, vilket kan leda till motorhaveri.',
  },
  {
    id: 'ftk-7',
    category: 'fordon-teknik',
    difficulty: 'hard',
    question: 'Vad är skillnaden mellan skivbromsar och trumbromsar?',
    options: [
      'Skivbromsar finns bara på bakhjulen',
      'Skivbromsar kyls effektivare och ger jämnare bromskraft',
      'Trumbromsar är alltid bättre vid höga hastigheter',
    ],
    correctIndex: 1,
    explanation:
      'Skivbromsar är öppna och kyls bättre, vilket ger jämnare och mer tillförlitlig bromskraft. Trumbromsar kan överhettas vid upprepad bromsning.',
  },
  {
    id: 'ftk-8',
    category: 'fordon-teknik',
    difficulty: 'easy',
    question: 'Varför måste alla i bilen använda bilbälte?',
    options: [
      'Det är bara en rekommendation',
      'Det är lagkrav och minskar risken för allvarliga skador vid olycka drastiskt',
      'Det behövs bara på motorväg',
    ],
    correctIndex: 1,
    explanation:
      'Bilbälte är lagkrav för alla passagerare. Det minskar risken att dödas i en olycka med upp till 60 % och förhindrar att man slungas runt.',
  },
  {
    id: 'ftk-9',
    category: 'fordon-teknik',
    difficulty: 'medium',
    question: 'Hur fungerar en krockkudde (airbag)?',
    options: [
      'Den ersätter bilbältet vid olycka',
      'Den blåses upp vid kollision och fungerar som komplement till bilbältet',
      'Den skyddar bara föraren',
    ],
    correctIndex: 1,
    explanation:
      'Krockkudden utlöses vid kraftig kollision och fungerar som ett komplement till bilbältet. Utan bälte kan krockkudden orsaka skador istället.',
  },
  {
    id: 'ftk-10',
    category: 'fordon-teknik',
    difficulty: 'medium',
    question: 'Hur ska barn under 135 cm säkras i bilen?',
    options: [
      'Med vanligt bilbälte räcker',
      'Med godkänd barnstol eller bälteskudde anpassad efter barnets storlek',
      'Barn behöver inte bälte i baksätet',
    ],
    correctIndex: 1,
    explanation:
      'Barn under 135 cm ska använda godkänd barnstol eller bälteskudde. Skyddet ska vara anpassat efter barnets vikt och längd.',
  },
  {
    id: 'ftk-11',
    category: 'fordon-teknik',
    difficulty: 'hard',
    question: 'Vad betyder en gul varningslampa som visar en motor?',
    options: [
      'Motorn behöver mer olja omedelbart',
      'Motorstyrningen har registrerat ett fel – boka verkstadsbesök',
      'Bilen behöver tankas',
    ],
    correctIndex: 1,
    explanation:
      'En gul motorlampa (check engine) betyder att motorstyrningen upptäckt ett fel. Det kräver inte omedelbart stopp men bör kontrolleras snarast.',
  },
  {
    id: 'ftk-12',
    category: 'fordon-teknik',
    difficulty: 'easy',
    question: 'Vad är nackstödets funktion?',
    options: [
      'Det ger enbart komfort vid långa resor',
      'Det skyddar nacken mot pisksnärtskada vid påkörning bakifrån',
      'Det stödjer huvudet under sömn',
    ],
    correctIndex: 1,
    explanation:
      'Nackstödet ska skydda mot pisksnärtskador vid påkörning bakifrån. Det ska vara inställt så att överkanten är i nivå med huvudets ovansida.',
  },
  {
    id: 'ftk-13',
    category: 'fordon-teknik',
    difficulty: 'medium',
    question: 'Vilka krav gäller för avgaser vid besiktning?',
    options: [
      'Det finns inga krav på avgaser',
      'Avgasutsläppen måste understiga gällande gränsvärden för fordonets miljöklass',
      'Bara dieselbilar kontrolleras',
    ],
    correctIndex: 1,
    explanation:
      'Vid besiktning kontrolleras avgasutsläpp och de måste ligga inom gränsvärdena för fordonets specifika miljöklass.',
  },
  {
    id: 'ftk-14',
    category: 'fordon-teknik',
    difficulty: 'hard',
    question: 'Vad ska du tänka på vid koppling av släpvagn med dragkrok?',
    options: [
      'Det räcker att koppla draganordningen',
      'Koppla draganordning, elkontakt, vajer/kedja och kontrollera att lamporna fungerar',
      'Bara elkontakten behövs för att det ska vara lagligt',
    ],
    correctIndex: 1,
    explanation:
      'Vid tillkoppling ska du säkra draganordningen, ansluta elkontakten, fästa säkerhetsvajer eller -kedja och kontrollera att alla lampor fungerar.',
  },
  {
    id: 'ftk-15',
    category: 'fordon-teknik',
    difficulty: 'easy',
    question: 'Vad krävs för att få köra personbil i Sverige?',
    options: [
      'Bara ett godkänt syntest',
      'B-körkort och godkänt syntest',
      'Man behöver bara ha fyllt 18 år',
    ],
    correctIndex: 1,
    explanation:
      'För att köra personbil krävs B-körkort. I samband med körkortsansökan genomförs ett syntest som ska vara godkänt.',
  },
  {
    id: 'ftk-16',
    category: 'fordon-teknik',
    difficulty: 'medium',
    question: 'Hur ofta ska en personbil besiktigas?',
    options: [
      'Varje år från att bilen är ny',
      'Första gången efter 4 år, sedan vartannat år (efter 8 år: varje år)',
      'Bara vid ägarbyten',
    ],
    correctIndex: 1,
    explanation:
      'Nya personbilar besiktigas första gången senast 4 år efter registrering, därefter vartannat år. Bilar äldre än 8 år besiktigas varje år.',
  },
  {
    id: 'ftk-17',
    category: 'fordon-teknik',
    difficulty: 'hard',
    question: 'Vad kontrollerar ABS-systemet?',
    options: [
      'Att airbagen löser ut vid kollision',
      'Att hjulen inte låser sig vid hård inbromsning',
      'Att bilen håller rätt fil på vägen',
    ],
    correctIndex: 1,
    explanation:
      'ABS (Anti-lock Braking System) förhindrar att hjulen låser sig vid hård inbromsning, så att du behåller styrförmågan.',
  },
  {
    id: 'ftk-18',
    category: 'fordon-teknik',
    difficulty: 'medium',
    question: 'Varför ska strålkastarna vara rena och rätt inställda?',
    options: [
      'Det påverkar bara utseendet',
      'Smutsiga eller felinställda lampor minskar sikten och kan blända mötande',
      'Det spelar ingen roll om lamporna lyser',
    ],
    correctIndex: 1,
    explanation:
      'Smutsiga strålkastare kan minska ljusstyrkan med upp till 50 %. Felinställda lampor bländar mötande trafik och försämrar din egen sikt.',
  },
  {
    id: 'ftk-19',
    category: 'fordon-teknik',
    difficulty: 'easy',
    question: 'Vad ska du göra innan en lång resa med bilen?',
    options: [
      'Tvätta bilen',
      'Kontrollera däcktryck, vätskenivåer, lampor och bromsar',
      'Det räcker att tanka fullt',
    ],
    correctIndex: 1,
    explanation:
      'Innan en längre resa bör du kontrollera däcktryck, olja, kylvätska, spolarvätska, att lamporna fungerar och att bromsarna är i gott skick.',
  },
  {
    id: 'ftk-20',
    category: 'fordon-teknik',
    difficulty: 'hard',
    question: 'Vad innebär ESC (Electronic Stability Control)?',
    options: [
      'Ett system som automatiskt bromsar bilen i nödsituationer',
      'Ett system som motverkar sladd genom att bromsa enskilda hjul och justera motoreffekten',
      'Ett system som håller bilen i rätt fil',
    ],
    correctIndex: 1,
    explanation:
      'ESC upptäcker sladd och ingriper genom att bromsa enskilda hjul och justera motoreffekten för att stabilisera bilen.',
  },
];
