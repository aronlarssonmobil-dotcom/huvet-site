import { Question } from './types';

export const vajningspliktQuestions: Question[] = [
  // === EASY (10 questions) ===
  {
    id: 'vaj-1',
    category: 'vajningsplikt',
    difficulty: 'easy',
    question: 'Vad innebär högerregeln?',
    options: [
      'Du ska väja för fordon som kommer från höger',
      'Du ska alltid köra till höger på vägen',
      'Du ska väja för fordon som kommer från vänster',
    ],
    correctIndex: 0,
    explanation:
      'Högerregeln innebär att du ska lämna företräde åt fordon som närmar sig från höger i en korsning där inga andra trafikregler gäller.',
  },
  {
    id: 'vaj-2',
    category: 'vajningsplikt',
    difficulty: 'easy',
    question: 'Vad betyder en triangelformad skylt med spetsen nedåt (väjningspliktsskylten)?',
    options: [
      'Du har företräde',
      'Du ska lämna företräde åt trafik på den korsande vägen',
      'Du ska stanna helt innan du kör vidare',
    ],
    correctIndex: 1,
    explanation:
      'Väjningspliktsskylten (omvänd triangel) innebär att du ska lämna företräde åt fordon på den korsande vägen. Du behöver inte stanna helt om det är fritt.',
  },
  {
    id: 'vaj-3',
    category: 'vajningsplikt',
    difficulty: 'easy',
    question: 'Vad gäller när du kör ut från en parkeringsplats?',
    options: [
      'Du har företräde framför trafiken på vägen',
      'Du ska väja för all trafik på vägen du kör ut på',
      'Högerregeln avgör vem som har företräde',
    ],
    correctIndex: 1,
    explanation:
      'När du kör ut från en parkeringsplats, bensinstation, gårdsplan eller liknande ska du alltid väja för all trafik på vägen du kör ut på.',
  },
  {
    id: 'vaj-4',
    category: 'vajningsplikt',
    difficulty: 'easy',
    question: 'Vilken skylt innebär att du måste stanna helt innan du kör vidare?',
    options: [
      'Väjningspliktsskylten (omvänd triangel)',
      'Stoppskylt (oktagon med texten STOP)',
      'Huvudledsskylt (gul romb)',
    ],
    correctIndex: 1,
    explanation:
      'Stoppskylt (oktagonformad med texten STOP) innebär att du måste stanna helt vid stopplinje eller korsningen, och sedan lämna företräde åt korsande trafik.',
  },
  {
    id: 'vaj-5',
    category: 'vajningsplikt',
    difficulty: 'easy',
    question: 'Vad gäller vid en cirkulationsplats (rondell)?',
    options: [
      'Du som kör inne i rondellen ska väja för inkommande trafik',
      'Du ska alltid väja för trafik som redan är inne i cirkulationsplatsen',
      'Högerregeln gäller alltid i en rondell',
    ],
    correctIndex: 1,
    explanation:
      'Vid infart till en cirkulationsplats finns normalt väjningspliktsskylt. Du ska lämna företräde åt fordon som redan befinner sig i cirkulationsplatsen.',
  },
  {
    id: 'vaj-6',
    category: 'vajningsplikt',
    difficulty: 'easy',
    question: 'Vad gäller när en spårvagn korsar din väg?',
    options: [
      'Du har alltid företräde framför spårvagnen',
      'Spårvagn har som regel företräde i korsningar',
      'Högerregeln gäller även för spårvagnar',
    ],
    correctIndex: 1,
    explanation:
      'Spårvagnar har som huvudregel företräde i korsningar, oavsett från vilket håll de kommer. Undantag är om spårvagnen har rött ljus eller väjningsplikt.',
  },
  {
    id: 'vaj-7',
    category: 'vajningsplikt',
    difficulty: 'easy',
    question: 'Vad ska du göra när ett utryckningsfordon närmar sig med blåljus och siren?',
    options: [
      'Stanna omedelbart var du än befinner dig',
      'Lämna fri väg genom att köra åt sidan och om nödvändigt stanna',
      'Öka farten för att komma undan snabbare',
    ],
    correctIndex: 1,
    explanation:
      'Du ska lämna fri väg för utryckningsfordon med påslagna blåljus och siren. Kör åt sidan och stanna om nödvändigt, men gör det på ett säkert sätt.',
  },
  {
    id: 'vaj-8',
    category: 'vajningsplikt',
    difficulty: 'easy',
    question: 'Vad innebär det att köra på en huvudled?',
    options: [
      'Du har företräde i korsningar mot anslutande vägar',
      'Du måste alltid hålla minst 70 km/h',
      'Du får inte svänga vänster',
    ],
    correctIndex: 0,
    explanation:
      'På en huvudled har du företräde mot korsande och anslutande vägar. Fordon som ska in på huvudleden har väjningsplikt eller stopplikt.',
  },
  {
    id: 'vaj-9',
    category: 'vajningsplikt',
    difficulty: 'easy',
    question: 'Du kör ut från en gångfartsväg till en vanlig väg. Vad gäller?',
    options: [
      'Du har företräde eftersom du kommer från höger',
      'Du ska väja för all trafik på vägen du kör ut på',
      'Samma regler gäller som i vilken korsning som helst',
    ],
    correctIndex: 1,
    explanation:
      'Utfart från en gångfartsväg likställs med utfart från t.ex. parkeringsplats. Du ska väja för all trafik på vägen du kör ut på.',
  },
  {
    id: 'vaj-10',
    category: 'vajningsplikt',
    difficulty: 'easy',
    question: 'Vad skiljer väjningsplikt från stoppplikt?',
    options: [
      'Det finns ingen skillnad',
      'Vid stoppplikt måste du alltid stanna helt, vid väjningsplikt behöver du bara sakta ner och väja',
      'Vid väjningsplikt måste du stanna helt, vid stoppplikt räcker det att sakta ner',
    ],
    correctIndex: 1,
    explanation:
      'Vid stoppplikt (STOP-skylt) måste du alltid stanna helt vid stopplinje. Vid väjningsplikt ska du lämna företräde men behöver inte stanna om vägen är fri.',
  },

  // === MEDIUM (12 questions) ===
  {
    id: 'vaj-11',
    category: 'vajningsplikt',
    difficulty: 'medium',
    question: 'Du närmar dig en korsning utan vägmärken eller signaler. Från vänster kommer en bil och från höger en cyklist. Vem ska du väja för?',
    options: [
      'Bara bilen från vänster',
      'Bara cyklisten från höger',
      'Cyklisten från höger, men inte bilen från vänster',
    ],
    correctIndex: 2,
    explanation:
      'Högerregeln gäller alla fordon, inklusive cyklister. Du ska väja för cyklisten som kommer från höger. Bilen från vänster ska väja för dig.',
  },
  {
    id: 'vaj-12',
    category: 'vajningsplikt',
    difficulty: 'medium',
    question: 'Du ska svänga vänster i en korsning. Vad gäller gentemot mötande trafik?',
    options: [
      'Du har företräde om du hunnit ut i korsningen först',
      'Du ska lämna företräde åt mötande trafik som kör rakt fram eller svänger höger',
      'Mötande trafik ska alltid väja för dig',
    ],
    correctIndex: 1,
    explanation:
      'Vid vänstersväng ska du lämna företräde åt mötande fordon som kör rakt fram eller svänger höger. Detta gäller även om du hunnit ut i korsningen.',
  },
  {
    id: 'vaj-13',
    category: 'vajningsplikt',
    difficulty: 'medium',
    question: 'Två bilar möts i en brant backe som är för smal för att passera. Vem ska backa?',
    options: [
      'Den som kör uppför backen ska backa',
      'Den som kör nedför backen ska backa',
      'Den som har längst att backa ska backa',
    ],
    correctIndex: 1,
    explanation:
      'Vid möte i backe ska den som kör nedför ge den som kör uppför företräde, eftersom det är svårare att starta i en uppförsbacke. Den som kör nedför backar alltså.',
  },
  {
    id: 'vaj-14',
    category: 'vajningsplikt',
    difficulty: 'medium',
    question: 'Du kör ut från en tankstation. En cykel kommer på cykelbanan utanför. Vad gäller?',
    options: [
      'Cyklisten ska väja för dig',
      'Du ska väja för cyklisten',
      'Högerregeln avgör',
    ],
    correctIndex: 1,
    explanation:
      'Vid utfart från tankstation, parkering eller liknande ska du alltid väja för all trafik, inklusive cyklister och gående på gång- och cykelbanor.',
  },
  {
    id: 'vaj-15',
    category: 'vajningsplikt',
    difficulty: 'medium',
    question: 'Gäller högerregeln om du kör på en väg med utfartsväg från höger (t.ex. gårdsplan)?',
    options: [
      'Ja, du ska alltid väja för fordon från höger',
      'Nej, fordon som kör ut från utfart har alltid väjningsplikt oavsett riktning',
      'Det beror på om det finns vägmarkeringar',
    ],
    correctIndex: 1,
    explanation:
      'Högerregeln gäller inte vid utfart. Den som kör ut från en gårdsplan, parkeringsplats eller liknande har alltid väjningsplikt mot trafiken på vägen.',
  },
  {
    id: 'vaj-16',
    category: 'vajningsplikt',
    difficulty: 'medium',
    question: 'Du gör en U-sväng. Vad gäller gentemot övrig trafik?',
    options: [
      'Du har företräde om du visar tecken i tid',
      'Du ska lämna företräde åt all annan trafik',
      'Högerregeln avgör',
    ],
    correctIndex: 1,
    explanation:
      'Den som vänder (gör U-sväng) ska lämna företräde åt all annan trafik. En U-sväng innebär alltid väjningsplikt.',
  },
  {
    id: 'vaj-17',
    category: 'vajningsplikt',
    difficulty: 'medium',
    question: 'Du kommer till en korsning med trafikljus. Ljuset är grönt men en fotgängare är kvar på övergångsstället. Vad gäller?',
    options: [
      'Du kan köra eftersom du har grönt ljus',
      'Du ska låta fotgängaren passera klart innan du kör',
      'Fotgängaren ska skynda sig ur vägen',
    ],
    correctIndex: 1,
    explanation:
      'Även om du har grönt ljus ska du inte köra om en fotgängare fortfarande befinner sig på övergångsstället. Fotgängarens säkerhet går alltid först.',
  },
  {
    id: 'vaj-18',
    category: 'vajningsplikt',
    difficulty: 'medium',
    question: 'Två fordon kommer samtidigt till en fyrvägskorsning utan skyltar. Bil A kommer från öster, bil B från söder. Vem har företräde?',
    options: [
      'Bil A, eftersom den kommer från höger sett från bil B',
      'Bil B, eftersom den kommer från höger sett från bil A',
      'Den som kom till korsningen först',
    ],
    correctIndex: 0,
    explanation:
      'Högerregeln gäller. Bil B ska väja för bil A som kommer från höger (från öster sett från bil B som kör norrut).',
  },
  {
    id: 'vaj-19',
    category: 'vajningsplikt',
    difficulty: 'medium',
    question: 'Vad gäller i ett gångfartsområde?',
    options: [
      'Bilar har alltid företräde framför gående',
      'Fordonsförare ska anpassa hastigheten till gångtrafik och har väjningsplikt mot gående',
      'Det är förbjudet att köra bil i ett gångfartsområde',
    ],
    correctIndex: 1,
    explanation:
      'I ett gångfartsområde ska fordon köras i gångfart (max ca 7 km/h) och föraren har väjningsplikt mot gående. Gående har företräde men får inte hindra fordon i onödan.',
  },
  {
    id: 'vaj-20',
    category: 'vajningsplikt',
    difficulty: 'medium',
    question: 'Du har grönt ljus och ska svänga höger. En cyklist har grönt och ska rakt fram i samma riktning. Vem har företräde?',
    options: [
      'Du, eftersom bilar har företräde framför cyklar',
      'Cyklisten, eftersom den kör rakt fram',
      'Den som kommer först till korsningen',
    ],
    correctIndex: 1,
    explanation:
      'Vid högersväng ska du lämna företräde åt cyklister som kör rakt fram på din högra sida, även om ni båda har grönt ljus.',
  },
  {
    id: 'vaj-21',
    category: 'vajningsplikt',
    difficulty: 'medium',
    question: 'Trafikljusen i en korsning har slutat fungera. Vad gäller?',
    options: [
      'Du ska stanna och vänta tills ljusen repareras',
      'Högerregeln gäller om inga andra vägmärken finns',
      'Den som kör snabbast har företräde',
    ],
    correctIndex: 1,
    explanation:
      'Om trafikljusen är ur funktion gäller de vägmärken som finns. Saknas vägmärken tillämpas högerregeln.',
  },
  {
    id: 'vaj-22',
    category: 'vajningsplikt',
    difficulty: 'medium',
    question: 'Du kör på en väg och en polis dirigerar trafiken i en korsning. Polisen visar att du ska stanna, men trafikljuset är grönt. Vad gäller?',
    options: [
      'Grönt ljus gäller, du kan köra',
      'Polisens tecken gäller före trafikljuset',
      'Du ska köra försiktigt genom korsningen',
    ],
    correctIndex: 1,
    explanation:
      'En polis som dirigerar trafiken har alltid företräde framför trafikljus och vägmärken. Du ska följa polisens anvisningar.',
  },

  // === HARD (8 questions) ===
  {
    id: 'vaj-23',
    category: 'vajningsplikt',
    difficulty: 'hard',
    question: 'Du kör på en huvudled och ska svänga vänster in på en mindre väg. Mötande bil kör rakt fram. Vem har företräde?',
    options: [
      'Du, eftersom du kör på huvudleden',
      'Mötande bil, eftersom du svänger vänster och ska lämna företräde åt mötande',
      'Den som hinner först in i korsningen',
    ],
    correctIndex: 1,
    explanation:
      'Trots att du kör på huvudleden måste du vid vänstersväng lämna företräde åt mötande trafik som kör rakt fram. Huvudled ger företräde mot korsande vägar, inte mot mötande.',
  },
  {
    id: 'vaj-24',
    category: 'vajningsplikt',
    difficulty: 'hard',
    question: 'Du och en spårvagn närmar er en korsning utan signaler eller vägmärken. Spårvagnen kommer från vänster. Vem har företräde?',
    options: [
      'Du, eftersom spårvagnen kommer från vänster',
      'Spårvagnen, eftersom spårvagnar i princip alltid har företräde i obevakade korsningar',
      'Ingen har företräde, ni måste samsas',
    ],
    correctIndex: 1,
    explanation:
      'Spårvagnar har som huvudregel företräde oavsett från vilket håll de kommer i korsningar utan trafikljus, även om de kommer från vänster.',
  },
  {
    id: 'vaj-25',
    category: 'vajningsplikt',
    difficulty: 'hard',
    question: 'Du ska köra in i en cirkulationsplats och har väjningsplikt. Inne i rondellen kör en bil som blinkar höger för att lämna rondellen precis före din infart. Får du köra in?',
    options: [
      'Ja, du kan köra in direkt eftersom bilen lämnar rondellen',
      'Nej, du måste fortfarande försäkra dig om att bilen verkligen lämnar och att ingen annan trafik kommer',
      'Ja, blinkern räcker som garanti',
    ],
    correctIndex: 1,
    explanation:
      'Även om ett fordon blinkar höger kan det ändra sig eller ha fel blinker. Du har väjningsplikt och måste försäkra dig om att det verkligen är säkert innan du kör in.',
  },
  {
    id: 'vaj-26',
    category: 'vajningsplikt',
    difficulty: 'hard',
    question: 'Du kör på en väg med väjningspliktsskylt och närmar dig korsningen. En ambulans med blåljus och siren kommer på den korsande vägen. Vad gäller?',
    options: [
      'Du har redan väjningsplikt, så du stannar som vanligt',
      'Du ska stanna och ge företräde, men av dubbla skäl: väjningsplikt och utryckningsfordon',
      'Ambulansen ska väja för dig eftersom du redan stannat',
    ],
    correctIndex: 1,
    explanation:
      'Du har väjningsplikt mot korsande trafik, och utryckningsfordon med blåljus och siren ska dessutom alltid lämnas fri väg. Stanna och låt ambulansen passera.',
  },
  {
    id: 'vaj-27',
    category: 'vajningsplikt',
    difficulty: 'hard',
    question: 'I en korsning gäller högerregeln. Du kör rakt fram. Från höger kommer en bil, och från vänster kommer ytterligare en bil. Bilen från höger ska svänga vänster (in på din väg). Vad händer?',
    options: [
      'Du väjer för bilen från höger, och den väjer i sin tur för bilen från vänster som kör rakt fram',
      'Alla tre kan köra samtidigt utan problem',
      'Du har företräde framför båda bilarna',
    ],
    correctIndex: 0,
    explanation:
      'Du ska väja för bilen från höger (högerregeln). Men den bilen ska i sin tur vid vänstersväng lämna företräde åt mötande (bilen från din vänstra sida). Alla måste respektera sina egna väjningsplikter.',
  },
  {
    id: 'vaj-28',
    category: 'vajningsplikt',
    difficulty: 'hard',
    question: 'Du kör på en väg där hastigheten är 50 km/h. En buss har stannat vid en busshållplats och blinkar för att köra ut. Vad gäller?',
    options: [
      'Du ska alltid lämna företräde åt bussen',
      'Du ska ge bussen möjlighet att köra ut om hastighetsbegränsningen är högst 50 km/h',
      'Bussen har aldrig företräde',
    ],
    correctIndex: 1,
    explanation:
      'Om hastighetsbegränsningen är högst 50 km/h ska du ge bussen möjlighet att lämna hållplatsen. Du ska sakta ner och om nödvändigt stanna.',
  },
  {
    id: 'vaj-29',
    category: 'vajningsplikt',
    difficulty: 'hard',
    question: 'Du kör och ser ett vägmärke som anger slutet på huvudled. Kort därefter kommer en korsning utan skyltar. Vad gäller?',
    options: [
      'Du har fortfarande företräde i nästa korsning',
      'Högerregeln gäller i nästa korsning eftersom huvudleden har upphört',
      'Du har väjningsplikt i nästa korsning',
    ],
    correctIndex: 1,
    explanation:
      'När skylt anger att huvudled upphör gäller inte längre företräde. I efterföljande korsning utan vägmärken tillämpas högerregeln.',
  },
  {
    id: 'vaj-30',
    category: 'vajningsplikt',
    difficulty: 'hard',
    question: 'Du kör på en smal väg och möter en lastbil. Bredvid dig finns en mötesplats (ficka) på din sida. Vad gäller?',
    options: [
      'Lastbilen ska backa eftersom den är störst',
      'Du ska använda mötesplatsen och lämna företräde åt lastbilen',
      'Den som kör fortast har företräde',
    ],
    correctIndex: 1,
    explanation:
      'På smala vägar ska du använda mötesplatsen om den finns på din sida. Tyngre eller större fordon har svårare att manövrera, och du bör underlätta för mötande trafik.',
  },
];
