import type { Metadata } from 'next';
import Link from 'next/link';
import TheoryChapterLayout from '../../../components/TheoryChapterLayout';

export const metadata: Metadata = {
  title: 'Körkortsteori: Miljö & Eco-driving — Komplett guide 2026 | Huvet',
  description: 'Lär dig eco-driving, utsläpp, bränsleförbrukning och miljözoner för körkortsprovet. Tips för miljövänlig och ekonomisk körning.',
  keywords: ['eco-driving', 'eco driving körkort', 'miljö körkort', 'bränsleförbrukning', 'miljözoner', 'sparsam körning', 'utsläpp bil'],
  alternates: { canonical: 'https://huvet.se/teori/miljo' },
  openGraph: {
    title: 'Körkortsteori: Miljö & Eco-driving — Komplett guide 2026 | Huvet',
    description: 'Eco-driving, utsläpp och miljözoner. Allt om miljövänlig körning för körkortsprovet.',
    url: 'https://huvet.se/teori/miljo',
  },
};

export default function TeoriMiljo() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Vad är eco-driving?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Eco-driving är en körsstil som minskar bränsleförbrukning och utsläpp. Det handlar om mjuk acceleration, tidig uppväxling, motorbroms istället för fotrems, och att planera körningen för att undvika onödiga stopp.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hur mycket bränsle kan man spara med eco-driving?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Med konsekvent eco-driving kan du spara 10-30% bränsle jämfört med en aggressiv körstil. Det innebär hundratals kronor per månad för en genomsnittlig bilägare.',
        },
      },
      {
        '@type': 'Question',
        name: 'Vad är en miljözon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'En miljözon är ett område i en stad där bara fordon som uppfyller vissa utsläppskrav får köra. Sverige har tre klasser av miljözoner. De finns i Stockholm, Göteborg, Malmö och flera andra städer.',
        },
      },
      {
        '@type': 'Question',
        name: 'Vilka avgaser är farligast från en bil?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'De farligaste avgaserna är kolmonoxid (CO) som är giftig, kväveoxider (NOx) som bidrar till luftföroreningar, och partiklar (PM) som orsakar lungproblem. Koldioxid (CO2) bidrar till växthuseffekten men är inte direkt giftig.',
        },
      },
    ],
  };

  return (
    <TheoryChapterLayout currentSlug="miljo">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <h1 style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '0.5rem', color: '#0d1f17' }}>
        Miljö & Eco-driving — Kör smartare
      </h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Kapitel 4 av 7 · Uppdaterad mars 2026
      </p>

      <p>
        Biltrafiken påverkar miljön genom avgaser, buller och slitage. Som förare har du ett ansvar — och
        en möjlighet — att minska den påverkan. Eco-driving handlar inte bara om att vara snäll mot planeten:
        det sparar pengar, minskar slitage på bilen och gör dig till en lugnare, säkrare förare. Miljöfrågorna
        är också ett återkommande tema på <Link href="/ovningsprov" style={{ color: '#006B3F', fontWeight: 500 }}>teoriprovet</Link>.
      </p>

      <h2>Eco-driving — grundprinciperna</h2>
      <p>
        Eco-driving är en körstil som minimerar bränsleförbrukning och utsläpp utan att göra resan
        långsammare. Studier visar att skillnaden mellan en ekonomisk och en aggressiv körstil kan
        vara <strong>10–30% i bränsleförbrukning</strong>. Så här gör du:
      </p>

      <h3>1. Mjuk acceleration</h3>
      <p>
        Tryck inte gasen i botten vid start. Accelerera lugnt och jämnt. Det är den enskilt viktigaste
        eco-driving-åtgärden. Tänk på det som att du har ett ägg under gaspedalen — du vill inte krossa det.
      </p>

      <h3>2. Tidig uppväxling</h3>
      <p>
        Växla upp tidigt — runt 2 000–2 500 varv per minut. Ju högre varv motorn går, desto mer bränsle
        förbrukas. En motor som går på låga varv i hög växel är betydligt mer ekonomisk. Med automatlåda
        hjälper du systemet genom att accelerera mjukt.
      </p>

      <h3>3. Jämn hastighet</h3>
      <p>
        Försök hålla en jämn hastighet. Undvik att gasa och bromsa i onödan. Använd farthållare
        (cruise control) på motorvägen om bilen har det — det håller hastigheten konstant.
      </p>

      <h3>4. Motorbroms</h3>
      <p>
        Släpp gasen i tid och låt bilen rulla ut med motorbroms istället för att bromsa sent.
        När du rullar med en växel i utan att gaspedalen är nertryckt stänger moderna bilar
        av bränsleinsprutningen helt — <strong>noll bränsleförbrukning</strong>.
      </p>

      <h3>5. Planera körningen</h3>
      <p>
        Se långt fram i trafiken. Om du ser ett rött ljus framåt — släpp gasen direkt istället för
        att köra fram och bromsa. Undvik onödiga stopp och starter. Varje gång du stannar från
        50 km/h och accelererar igen förbrukas energi motsvarande att köra ca 300 meter.
      </p>

      <div className="theory-info-box">
        <p>💡 Eco-driving i fem ord: planera, accelerera mjukt, rulla mer.</p>
      </div>

      <h3>6. Undvik tomgångskörning</h3>
      <p>
        Stäng av motorn om du väntar mer än 30 sekunder. Moderna bilar behöver inte "värmas upp" genom
        att stå på tomgång — kör istället direkt men varsamt. Tomgång förbrukar ca 0,5–1 liter per timme
        helt i onödan. Många nya bilar har <strong>start-stopp-automatik</strong> som sköter detta åt dig.
      </p>

      <h3>7. Minska luftmotståndet</h3>
      <p>
        Ta bort takbox och takräcke när du inte använder dem. En takbox kan öka bränsleförbrukningen med
        10–20% vid motorvägshastighet. Stäng fönstren vid hög hastighet — öppna fönster skapar turbulens
        som ökar motståndet.
      </p>

      <h2>Utsläpp och avgaser</h2>
      <p>
        Bilar producerar flera typer av utsläpp som påverkar hälsa och miljö:
      </p>

      <table className="theory-table">
        <thead>
          <tr>
            <th>Ämne</th>
            <th>Effekt</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Koldioxid (CO₂)</td><td>Växthusgas — bidrar till global uppvärmning</td></tr>
          <tr><td>Kolmonoxid (CO)</td><td>Giftig gas — kan vara dödlig i slutna utrymmen</td></tr>
          <tr><td>Kväveoxider (NOₓ)</td><td>Luftföroreningar, smog, andningsproblem</td></tr>
          <tr><td>Partiklar (PM)</td><td>Lungsjukdomar, cancer vid långtidsexponering</td></tr>
          <tr><td>Kolväten (HC)</td><td>Bidrar till marknära ozon och smog</td></tr>
        </tbody>
      </table>

      <p>
        <strong>Katalysatorn</strong> renar avgaserna och minskar utsläppen av CO, NOₓ och HC med upp till
        90%. Den måste vara varm för att fungera — de första minuterna efter kallstart släpper bilen ut
        mest föroreningar. Ett skäl till att korta bilresor är extra miljöbelastande.
      </p>

      <div className="theory-warning-box">
        <p>⚠️ Kolmonoxid (CO) är luktfri och osynlig. Låt aldrig motorn gå i garage eller slutna utrymmen — livsfarligt!</p>
      </div>

      <h2>Bränsleförbrukning</h2>
      <p>
        Flera faktorer påverkar hur mycket bränsle din bil förbrukar:
      </p>
      <ul>
        <li><strong>Körstil:</strong> Aggressiv körning = 10–30% mer bränsle</li>
        <li><strong>Hastighet:</strong> 110 km/h förbrukar ca 30% mer än 90 km/h</li>
        <li><strong>Däcktryck:</strong> 0,3 bar för lite = ca 2% mer bränsle</li>
        <li><strong>Luftmotstånd:</strong> Takbox kan ge +10–20%</li>
        <li><strong>Vikt:</strong> Varje extra 100 kg ökar förbrukningen med ca 5%</li>
        <li><strong>AC:</strong> Klimatanläggningen kan öka förbrukningen med 5–10%</li>
        <li><strong>Korta resor:</strong> Kall motor förbrukar mer — korta resor är ineffektiva</li>
      </ul>

      <h2>Miljözoner</h2>
      <p>
        Sverige har infört miljözoner i flera städer för att förbättra luftkvaliteten. Det finns
        tre klasser:
      </p>

      <table className="theory-table">
        <thead>
          <tr>
            <th>Klass</th>
            <th>Krav</th>
            <th>Gäller</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Miljözon klass 1</td><td>Tunga fordon med viss utsläppsnivå</td><td>Stockholm, Göteborg, Malmö m.fl.</td></tr>
          <tr><td>Miljözon klass 2</td><td>Personbilar max Euro 5 diesel / Euro 3 bensin</td><td>Utpekat av kommuner</td></tr>
          <tr><td>Miljözon klass 3</td><td>Bara nollutsläppsfordon (elbil etc.)</td><td>Utpekat av kommuner</td></tr>
        </tbody>
      </table>

      <p>
        Miljözon skyltas med <Link href="/teori/vagmarken" style={{ color: '#006B3F', fontWeight: 500 }}>vägmärken</Link> vid
        infart. Det är ditt ansvar att veta vilken klass din bil uppfyller. Böter för att köra in i en
        förbjuden miljözon är 1 000 kr.
      </p>

      <h2>Alternativa drivmedel</h2>
      <p>
        Allt fler bilar drivs av alternativa bränslen:
      </p>
      <ul>
        <li><strong>Elbil:</strong> Noll lokala utsläpp, låga driftkostnader, tyst</li>
        <li><strong>Hybrid:</strong> Kombination av bensinmotor och elmotor — bra för stadskörning</li>
        <li><strong>Laddhybrid (PHEV):</strong> Kan laddas och köra längre sträckor på el</li>
        <li><strong>Biogas:</strong> Förnybart bränsle med lägre klimatpåverkan</li>
        <li><strong>Etanol (E85):</strong> Delvis förnybart — kräver flexifuel-bil</li>
      </ul>

      <h2>Sammanfattning</h2>
      <p>
        Miljömedveten körning börjar med eco-driving: mjuk acceleration, tidig uppväxling och planering.
        Du sparar både pengar och miljö. Tänk på att katalysatorn behöver värme, att korta resor belastar
        mest, och att miljözoner är verklighet i svenska städer. Nästa kapitel handlar
        om <Link href="/teori/sakerhet" style={{ color: '#006B3F', fontWeight: 500 }}>säkerhet</Link> — bilbälte,
        krockkuddar och hur alkohol påverkar körningen.
      </p>
    </TheoryChapterLayout>
  );
}
