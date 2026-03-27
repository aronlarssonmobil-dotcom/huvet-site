import type { Metadata } from 'next';
import Link from 'next/link';
import TheoryChapterLayout from '../../../components/TheoryChapterLayout';

export const metadata: Metadata = {
  title: 'Körkortsteori: Fordonskännedom — Komplett guide 2026 | Huvet',
  description: 'Lär dig allt om fordonskännedom för körkortsprovet. Bromsar, däck, belysning, motor och säkerhetssystem förklarat steg för steg.',
  keywords: ['fordonskännedom', 'fordonskännedom körkort', 'bromsar bil', 'däck körkort', 'belysning bil', 'ABS bromsar', 'ESP', 'antisladdsystem'],
  alternates: { canonical: 'https://huvet.se/teori/fordonskanndom' },
  openGraph: {
    title: 'Körkortsteori: Fordonskännedom — Komplett guide 2026 | Huvet',
    description: 'Bromsar, däck, belysning, motor och säkerhetssystem. Allt du behöver kunna om bilen.',
    url: 'https://huvet.se/teori/fordonskanndom',
  },
};

export default function TeoriFordonskanndom() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Vad gör ABS-bromsar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ABS (Anti-lock Braking System) förhindrar att hjulen låser sig vid hård inbromsning. Det gör att du kan styra bilen även under kraftig bromsning, vilket minskar risken för att tappa kontrollen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hur djupt ska mönsterdjupet vara på däcken?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lagkravet är minst 1,6 mm mönsterdjup för sommardäck och minst 3 mm för vinterdäck. Trafikverket rekommenderar dock minst 3 mm för sommardäck och 5 mm för vinterdäck för bästa grepp.',
        },
      },
      {
        '@type': 'Question',
        name: 'När ska man använda helljus vs halvljus?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Halvljus ska alltid vara på under körning i Sverige. Helljus får användas utanför tättbebyggt område i mörker, men måste bländas av (byta till halvljus) vid möte, vid omkörning och om du kör ifatt ett annat fordon.',
        },
      },
      {
        '@type': 'Question',
        name: 'Vad är ESP/antisladdsystem?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ESP (Electronic Stability Program) är ett elektroniskt stabilitetssystem som hjälper dig behålla kontrollen vid sladd. Det bromsar enskilda hjul automatiskt och minskar motoreffekten för att rätta upp bilen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hur ofta ska man kontrollera bilens vätskenivåer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Motorolja bör kontrolleras minst en gång i månaden eller vid varje tankning. Kylarvätska och bromsvätska bör kontrolleras regelbundet. Vindrutevätska fyller du på vid behov.',
        },
      },
    ],
  };

  return (
    <TheoryChapterLayout currentSlug="fordonskanndom">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <h1 style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '0.5rem', color: '#0d1f17' }}>
        Fordonskännedom — Lär dig bilens teknik
      </h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Kapitel 3 av 7 · Uppdaterad mars 2026
      </p>

      <p>
        Fordonskännedom handlar om att förstå hur din bil fungerar — från bromsar och däck till belysning
        och elektroniska säkerhetssystem. Det här är inte bara teori för provet: att förstå sin bil gör dig
        till en säkrare förare som kan upptäcka problem innan de blir farliga.
      </p>

      <h2>Bromsar</h2>
      <p>
        Bromsarna är bilens viktigaste säkerhetssystem. De flesta moderna bilar har skivbromsar på framhjulen
        och antingen skiv- eller trumbromsar på bakhjulen. Frambromsarna gör den största delen av arbetet
        eftersom vikten förflyttas framåt vid inbromsning.
      </p>

      <h3>ABS — Anti-lock Braking System</h3>
      <p>
        ABS förhindrar att hjulen låser sig vid hård inbromsning. När ett hjul är på väg att låsa sig
        släpper ABS-systemet bromsningen tillfälligt och bromsar igen — detta sker många gånger per sekund.
        Fördelen är att du kan <strong>styra bilen samtidigt som du bromsar</strong>. Utan ABS kan låsta hjul
        göra att bilen glider rakt fram och inte reagerar på styrning.
      </p>

      <div className="theory-info-box">
        <p>💡 Med ABS: trampa ner bromspedalen hårt och håll kvar. Pumpa INTE. Systemet sköter pulseringen åt dig.</p>
      </div>

      <h3>Bromssträcka och reaktionssträcka</h3>
      <p>
        <strong>Reaktionssträckan</strong> är den sträcka du färdas under din reaktionstid (normalt ca 1 sekund).
        <strong> Bromssträckan</strong> är den sträcka det tar att stanna efter att du börjat bromsa.
        Tillsammans bildar de <strong>stoppsträckan</strong>.
      </p>

      <table className="theory-table">
        <thead>
          <tr>
            <th>Hastighet</th>
            <th>Reaktionssträcka (1s)</th>
            <th>Bromssträcka (torrt)</th>
            <th>Stoppsträcka</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>30 km/h</td><td>~8 m</td><td>~5 m</td><td>~13 m</td></tr>
          <tr><td>50 km/h</td><td>~14 m</td><td>~13 m</td><td>~27 m</td></tr>
          <tr><td>70 km/h</td><td>~19 m</td><td>~25 m</td><td>~44 m</td></tr>
          <tr><td>90 km/h</td><td>~25 m</td><td>~41 m</td><td>~66 m</td></tr>
          <tr><td>110 km/h</td><td>~31 m</td><td>~61 m</td><td>~92 m</td></tr>
        </tbody>
      </table>

      <div className="theory-warning-box">
        <p>⚠️ Bromssträckan dubbleras ungefär när hastigheten ökar med 40%. Vid halt väglag kan den bli 5–10 gånger längre!</p>
      </div>

      <h2>Däck</h2>
      <p>
        Däcken är bilens enda kontaktyta med vägen — fyra handflator stort per hjul. Rätt däck med rätt
        mönsterdjup och rätt lufttryck är helt avgörande för säkerheten.
      </p>

      <h3>Mönsterdjup</h3>
      <ul>
        <li><strong>Sommardäck:</strong> Lagkrav minst 1,6 mm. Rekommenderat minst 3 mm.</li>
        <li><strong>Vinterdäck:</strong> Lagkrav minst 3 mm. Rekommenderat minst 5 mm.</li>
      </ul>

      <h3>Vinterdäck — när gäller kravet?</h3>
      <p>
        Vinterdäck är obligatoriskt <strong>1 december – 31 mars</strong> om det är vinterväglag.
        Dubbdäck får användas <strong>1 oktober – 15 april</strong>. Utanför dessa perioder får
        dubbdäck bara användas om det är eller befaras bli vinterväglag.
      </p>

      <h3>Lufttryck</h3>
      <p>
        Rätt lufttryck hittar du i instruktionsboken, på en dekal i dörren eller tankluckan. Kontrollera
        lufttrycket <strong>minst en gång i månaden</strong> och alltid innan långresa. För lågt tryck
        ökar bränsleförbrukningen, försämrar stabiliteten och sliter däcken ojämnt.
      </p>

      <h2>Belysning</h2>
      <p>
        I Sverige ska du <strong>alltid köra med halvljus</strong>, även på dagtid. Det gäller alla fordon
        på vägar och det finns ingen sommarundantag. Belysningen hjälper inte bara dig att se — den
        hjälper <strong>andra att se dig</strong>.
      </p>

      <table className="theory-table">
        <thead>
          <tr>
            <th>Ljustyp</th>
            <th>När</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Halvljus</td><td>Alltid under körning</td></tr>
          <tr><td>Helljus</td><td>Mörker utanför tätort — blända av vid möte</td></tr>
          <tr><td>Dimljus fram</td><td>Dimma, snöfall eller kraftigt regn</td></tr>
          <tr><td>Dimljus bak</td><td>Sikt under 150 meter — INTE i normalt regn</td></tr>
          <tr><td>Parkeringsljus</td><td>Parkering i mörker på väg utan gatubelysning</td></tr>
        </tbody>
      </table>

      <div className="theory-warning-box">
        <p>⚠️ Bakre dimljus bländar trafik bakom dig! Använd bara vid sikt under 150 m — stäng av direkt när sikten förbättras.</p>
      </div>

      <h2>Motor och vätskor</h2>
      <p>
        Du behöver inte vara mekaniker, men du ska kunna grunderna om bilens motor och vätskor.
      </p>
      <ul>
        <li><strong>Motorolja:</strong> Smörjer motorn. Kontrollera med oljestickan regelbundet. Låg nivå kan orsaka allvarliga motorskador.</li>
        <li><strong>Kylarvätska:</strong> Håller motorn på rätt temperatur. Kontrollera nivån — för lite kan leda till överhettning.</li>
        <li><strong>Bromsvätska:</strong> Överför trycket från bromspedalen till bromsarna. Måste ha rätt nivå — för lite innebär att bromsarna inte fungerar ordentligt.</li>
        <li><strong>Vindrutevätska:</strong> Håller vindrutan ren. Vintertid ska den vara frostskyddad.</li>
        <li><strong>Batteri:</strong> Ger ström till start och elektronik. Extra känsligt på vintern.</li>
      </ul>

      <h2>Säkerhetssystem</h2>
      <p>
        Moderna bilar har ett flertal elektroniska system som hjälper dig vara säker. De viktigaste
        att kunna för <Link href="/ovningsprov" style={{ color: '#006B3F', fontWeight: 500 }}>teoriprovet</Link>:
      </p>

      <h3>ESP/ESC — Elektronisk stabilitetskontroll</h3>
      <p>
        ESP (Electronic Stability Program) känner av om bilen börjar slira och bromsar enskilda hjul
        automatiskt för att rätta upp den. Det kan även minska motoreffekten. ESP har räddat otaliga
        liv sedan det blev obligatoriskt 2014.
      </p>

      <h3>Antisladdsystem (ASR/TCS)</h3>
      <p>
        Förhindrar att drivhjulen spinner vid start eller acceleration på halt underlag. Minskar
        motoreffekten eller bromsar det spinnande hjulet.
      </p>

      <h3>Krockkuddar (airbags)</h3>
      <p>
        Moderna bilar har krockkuddar framför förare och passagerare, i sidorna, och ibland i taket.
        De utlöser vid kraftig kollision och minskar skaderisken markant. Krockkudden ersätter
        dock <strong>inte</strong> bilbältet — de är designade att fungera <strong>tillsammans</strong>.
        Läs mer om detta i kapitlet om <Link href="/teori/sakerhet" style={{ color: '#006B3F', fontWeight: 500 }}>säkerhet</Link>.
      </p>

      <h3>Varningslampor</h3>
      <p>
        Instrumentpanelens varningslampor talar om när något är fel. De viktigaste:
      </p>
      <ul>
        <li><strong>Röd oljelampa:</strong> Stanna omedelbart — risk för motorskada.</li>
        <li><strong>Röd temperaturlampa:</strong> Motorn överhettas — stanna och låt den svalna.</li>
        <li><strong>Röd batterilampa:</strong> Generatorn laddar inte — kör till verkstad snarast.</li>
        <li><strong>ABS-lampa:</strong> ABS-systemet ur funktion — vanliga bromsar fungerar fortfarande.</li>
        <li><strong>ESP-lampa (blinkar):</strong> ESP arbetar — du är nära gränsen för grepp.</li>
      </ul>

      <h2>Sammanfattning</h2>
      <p>
        Fordonskännedom handlar om att förstå bilens system så att du kan köra säkert och upptäcka problem
        tidigt. Lär dig bromssträckorna, mönsterdjupen och belysningsreglerna — de dyker ofta upp på
        provet. I nästa kapitel går vi igenom <Link href="/teori/miljo" style={{ color: '#006B3F', fontWeight: 500 }}>miljö och eco-driving</Link> —
        hur du kör ekonomiskt och miljövänligt.
      </p>
    </TheoryChapterLayout>
  );
}
