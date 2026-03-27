import type { Metadata } from 'next';
import Link from 'next/link';
import TheoryChapterLayout from '../../../components/TheoryChapterLayout';

export const metadata: Metadata = {
  title: 'Körkortsteori: Trafikregler — Komplett guide 2026 | Huvet',
  description: 'Lär dig alla trafikregler för körkortsprovet. Hastighetsbegränsningar, högerregeln, stopplikt, väjningsplikt, omkörning och parkering. Uppdaterad 2026.',
  keywords: ['trafikregler', 'trafikregler körkort', 'högerregeln', 'stopplikt', 'väjningsplikt', 'hastighetsbegränsningar', 'parkeringsregler', 'omkörning'],
  alternates: { canonical: 'https://huvet.se/teori/trafikregler' },
  openGraph: {
    title: 'Körkortsteori: Trafikregler — Komplett guide 2026 | Huvet',
    description: 'Alla trafikregler du behöver kunna för teoriprovet. Hastighetsgränser, väjning, omkörning och parkering.',
    url: 'https://huvet.se/teori/trafikregler',
  },
};

export default function TeoriTrafikregler() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Vad är högerregeln?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Högerregeln innebär att du ska lämna företräde åt fordon som kommer från höger i en korsning där inga vägmärken eller trafiksignaler reglerar företrädet. Den gäller i korsningar där vägarna är likvärdiga.',
        },
      },
      {
        '@type': 'Question',
        name: 'Vad är skillnaden mellan stopplikt och väjningsplikt?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vid stopplikt (stoppskylten, åttkantigt rött märke) måste du stanna helt innan du kör vidare. Vid väjningsplikt (triangelformat märke med spetsen nedåt) behöver du bara stanna om det kommer trafik — annars kan du köra vidare utan att stanna.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hur nära ett övergångsställe får man parkera?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Du får inte parkera eller stanna inom 10 meter före ett övergångsställe eller cykelöverfart, räknat i din körriktning. Regeln finns för att fotgängare och cyklister ska ha god sikt.',
        },
      },
      {
        '@type': 'Question',
        name: 'Vilka hastighetsgränser gäller i Sverige?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Grundregeln är 50 km/h i tättbebyggt område och 70 km/h utanför. Motortrafikled har normalt 90 km/h, motorväg 110 km/h (ibland 120 km/h). Nära skolor kan det vara 30 km/h.',
        },
      },
      {
        '@type': 'Question',
        name: 'När är det förbjudet att köra om?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Det är förbjudet att köra om vid övergångsställen, strax före korsningar utan fri sikt, vid järnvägsövergångar, i kurvor med skymd sikt, och vid omkörningsförbud. Du får aldrig köra om om det innebär fara.',
        },
      },
    ],
  };

  return (
    <TheoryChapterLayout currentSlug="trafikregler">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <h1 style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '0.5rem', color: '#0d1f17' }}>
        Trafikregler — Allt du behöver kunna
      </h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Kapitel 1 av 7 · Uppdaterad mars 2026
      </p>

      <p>
        Trafikregler är grunden för hela körkortet. Oavsett om du kör i stan eller på motorvägen gäller samma princip: alla
        trafikanter ska kunna lita på att alla andra följer reglerna. I det här kapitlet går vi igenom de viktigaste
        trafikreglerna som du behöver kunna för att klara teoriprovet — och för att bli en säker förare.
      </p>

      <h2>Hastighetsbegränsningar</h2>
      <p>
        I Sverige finns tydliga hastighetsgränser beroende på vilken typ av väg du kör på. Att hålla rätt hastighet
        är en av de viktigaste sakerna du kan göra för trafiksäkerheten — hastigheten påverkar både stoppsträckan och
        hur allvarliga skadorna blir vid en olycka.
      </p>

      <table className="theory-table">
        <thead>
          <tr>
            <th>Vägtyp</th>
            <th>Hastighetsgräns</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Tättbebyggt område</td><td>50 km/h</td></tr>
          <tr><td>Utanför tättbebyggt område</td><td>70 km/h</td></tr>
          <tr><td>Motortrafikled</td><td>90 km/h</td></tr>
          <tr><td>Motorväg</td><td>110 km/h</td></tr>
          <tr><td>Motorväg (skyltad)</td><td>120 km/h</td></tr>
          <tr><td>Nära skolor (skyltad)</td><td>30 km/h</td></tr>
        </tbody>
      </table>

      <div className="theory-info-box">
        <p>💡 Grundregeln: om ingen skylt finns gäller 50 km/h i tätort och 70 km/h utanför tätort.</p>
      </div>

      <p>
        Kom ihåg att hastighetsgränsen alltid är en <strong>maxgräns</strong> — inte en rekommendation. Vid dåligt väder,
        dålig sikt eller halt väglag ska du anpassa hastigheten nedåt. Det kallas <em>anpassad hastighet</em> och
        det gäller alltid, oavsett vad skylten visar.
      </p>

      <h2>Högerregeln</h2>
      <p>
        Högerregeln är den mest grundläggande företrädesregeln i Sverige. Den gäller i korsningar där
        vägarna är <strong>likvärdiga</strong> — det vill säga där inga vägmärken, trafiksignaler eller trafikpoliser
        anger något annat.
      </p>
      <p>
        Regeln är enkel: <strong>du ska lämna företräde åt fordon som kommer från din höger sida</strong>.
        Det spelar ingen roll om du kör rakt fram eller svänger — det som avgör är varifrån det andra fordonet kommer.
      </p>

      <div className="theory-warning-box">
        <p>⚠️ Högerregeln gäller INTE om det finns trafikljus, stoppskylt, väjningsplikt eller huvudled.</p>
      </div>

      <p>
        I en <strong>rondell</strong> (cirkulationsplats) gäller normalt väjningsplikt vid infarten, markerad med
        vägmärke. Inne i rondellen har du företräde. Många förväxlar detta med högerregeln — men i rondeller
        regleras företrädet med skyltar, inte med högerregeln.
      </p>

      <h2>Stopplikt och väjningsplikt</h2>
      <p>
        Dessa två skyltar reglerar företräde och är bland de vanligaste på <Link href="/ovningsprov" style={{ color: '#1DB954', fontWeight: 500 }}>teoriprovet</Link>.
        Det är viktigt att förstå skillnaden:
      </p>

      <h3>Stopplikt (STOP)</h3>
      <p>
        Den åttkantiga röda skylten med texten STOP. Du <strong>måste stanna helt</strong> vid stopplinjen
        (eller vid korsningen om ingen linje finns), titta åt alla håll och sedan köra vidare först när det är säkert.
        Även om det inte kommer någon trafik måste du stanna.
      </p>

      <h3>Väjningsplikt</h3>
      <p>
        Den triangelformade skylten med spetsen nedåt och röd kant. Du ska <strong>lämna företräde</strong> åt
        trafiken på den korsande vägen. Om det inte kommer någon trafik behöver du inte stanna — du kan sakta ner
        och köra vidare.
      </p>

      <div className="theory-info-box">
        <p>💡 Stopplikt = alltid stanna. Väjningsplikt = stanna bara vid behov.</p>
      </div>

      <h2>Omkörning</h2>
      <p>
        Omkörning är ett av de farligaste momenten i trafiken. I Sverige kör vi om till <strong>vänster</strong>,
        men det finns undantag. Innan du kör om måste du kontrollera:
      </p>
      <ul>
        <li>Att det inte finns omkörningsförbud (skylt eller heldragen linje)</li>
        <li>Att sikten framåt är tillräcklig</li>
        <li>Att ingen bakom dig redan har påbörjat en omkörning</li>
        <li>Att du kan genomföra omkörningen säkert och återvända till höger körfält</li>
      </ul>

      <h3>Förbjudet att köra om</h3>
      <p>Omkörning är förbjuden i flera situationer:</p>
      <ul>
        <li>Strax före och i <strong>övergångsställen</strong></li>
        <li>Strax före <strong>korsningar</strong> utan fri sikt</li>
        <li>Vid <strong>järnvägsövergångar</strong></li>
        <li>I <strong>kurvor och backkrön</strong> med skymd sikt</li>
        <li>Där <strong>heldragen mittlinje</strong> finns (på din sida)</li>
        <li>Vid skylt för <strong>omkörningsförbud</strong></li>
      </ul>

      <h3>Omkörning till höger</h3>
      <p>
        I vissa fall är det tillåtet att köra om till höger: i <strong>tättbebyggt område med flera körfält</strong>
        i samma riktning. Då får du byta till ett körfält till höger som är snabbare. Utanför tättbebyggt
        område får du köra om till höger bara om fordonet framför svänger vänster.
      </p>

      <h2>Parkering</h2>
      <p>
        Parkeringsreglerna är ett populärt ämne på teoriprovet. Här är de viktigaste avståndsreglerna
        du behöver kunna:
      </p>

      <table className="theory-table">
        <thead>
          <tr>
            <th>Situation</th>
            <th>Minsta avstånd</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Före övergångsställe/cykelöverfart</td><td>10 meter</td></tr>
          <tr><td>Före korsning</td><td>10 meter</td></tr>
          <tr><td>Före/efter busshållplats</td><td>20 meter</td></tr>
          <tr><td>Från järnvägskorsning</td><td>30 meter</td></tr>
        </tbody>
      </table>

      <p>
        Det är också förbjudet att parkera på <strong>huvudled</strong>, på <strong>motorväg</strong> och
        <strong> motortrafikled</strong> (annat än på speciella parkeringsplatser). Du får inte heller parkera
        så att du hindrar utfart från garageinfart eller så att ditt fordon skymmer vägmärken eller trafiksignaler.
      </p>

      <h3>Stanna vs parkera</h3>
      <p>
        Det finns en viktig skillnad: att <strong>stanna</strong> innebär ett kort uppehåll (t.ex. för att
        släppa av passagerare). Att <strong>parkera</strong> innebär att du lämnar fordonet eller att det
        står stilla längre tid. Stanningsförbud gäller båda — parkeringsförbud gäller bara parkering.
      </p>

      <div className="theory-info-box">
        <p>💡 Stanningsförbud = får varken stanna eller parkera. Parkeringsförbud = får stanna men inte parkera.</p>
      </div>

      <h2>Sammanfattning</h2>
      <p>
        Trafikreglerna är grunden i hela körkortsteorin. Se till att du verkligen förstår högerregeln, skillnaden
        mellan stopplikt och väjningsplikt, och parkeringsavstånden — de kommer garanterat på provet. Läs
        gärna vidare om <Link href="/teori/vagmarken" style={{ color: '#1DB954', fontWeight: 500 }}>vägmärken</Link> i
        nästa kapitel, eftersom vägmärken och trafikregler hänger ihop.
      </p>
    </TheoryChapterLayout>
  );
}
