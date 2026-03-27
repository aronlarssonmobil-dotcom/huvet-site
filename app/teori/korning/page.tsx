import type { Metadata } from 'next';
import Link from 'next/link';
import TheoryChapterLayout from '../../../components/TheoryChapterLayout';

export const metadata: Metadata = {
  title: 'Körkortsteori: Körning i olika förhållanden — Komplett guide 2026 | Huvet',
  description: 'Lär dig köra i mörker, halt väglag, regn och dimma. Skillnader mellan stad och motorväg. Komplett guide för körkortsprovet.',
  keywords: ['körning mörker', 'halt väglag', 'körning regn', 'körning dimma', 'motorvägskörning', 'stadskörning', 'vattenplaning', 'sladd'],
  alternates: { canonical: 'https://huvet.se/teori/korning' },
  openGraph: {
    title: 'Körkortsteori: Körning — Komplett guide 2026 | Huvet',
    description: 'Mörker, halt väglag, regn, dimma, stad och motorväg. Så klarar du alla förhållanden.',
    url: 'https://huvet.se/teori/korning',
  },
};

export default function TeoriKorning() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Vad gör man vid vattenplaning?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vid vattenplaning (aquaplaning) har däcken tappat kontakten med vägen på grund av vatten. Släpp gasen försiktigt, trampa INTE på bromsen, och håll ratten rakt. Vänta tills däcken får grepp igen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hur kör man säkert i dimma?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sänk hastigheten kraftigt, tänd dimljus (fram och bak om sikten är under 150 m), håll stort avstånd, och undvik omkörning. Sikten kan variera — var beredd på att den plötsligt försämras.',
        },
      },
      {
        '@type': 'Question',
        name: 'Vad ska man göra vid sladd?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vid sladd: släpp gasen, trampa inte på bromsen, och vrid ratten i den riktning du vill åka (motstyr). Titta dit du vill — inte på hindret. ESP hjälper, men kan inte upphäva fysikens lagar.',
        },
      },
      {
        '@type': 'Question',
        name: 'Vad är skillnaden på körning i stad vs motorväg?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I stad krävs mer uppmärksamhet på oskyddade trafikanter, tätare trafiksituationer och lägre hastigheter. På motorväg krävs högre hastighet, längre avstånd, bättre planering vid körfältsbyten, och uppmärksamhet på påfarter.',
        },
      },
    ],
  };

  return (
    <TheoryChapterLayout currentSlug="korning">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <h1 style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '0.5rem', color: '#0d1f17' }}>
        Körning i olika förhållanden
      </h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Kapitel 6 av 7 · Uppdaterad mars 2026
      </p>

      <p>
        En bra förare anpassar sin körning efter förhållandena. Det som fungerar en solig sommardag
        är inte samma sak som det som krävs en mörk vinternatt med is på vägen. I det här kapitlet
        lär du dig hantera alla situationer — mörker, regn, halt väglag, dimma och skillnaderna
        mellan stad och motorväg.
      </p>

      <h2>Körning i mörker</h2>
      <p>
        Risken att omkomma i trafiken är <strong>dubbelt så hög i mörker</strong> jämfört med
        dagsljus, trots att trafiken är mindre. Anledningen: sämre sikt, svårare att
        bedöma avstånd, och fotgängare som inte syns.
      </p>

      <h3>Belysning</h3>
      <p>
        Använd <strong>halvljus alltid</strong>. Byt till helljus utanför tätort när det är mörkt — men
        bländ av vid möte, vid omkörning och om du kör nära bilen framför. Helljusets räckvidd
        är ca 200–300 meter. Det betyder att du ska kunna stanna inom den sträcka du ser —
        anpassa hastigheten efter ljusräckvidden.
      </p>

      <div className="theory-info-box">
        <p>💡 Kör aldrig fortare än att du kan stanna inom den sträcka du ser framför dig. Det kallas att "köra på sikt".</p>
      </div>

      <h3>Bli sedd</h3>
      <p>
        Som fotgängare: använd reflex — det ökar synligheten från 25 meter till 125 meter.
        Som cyklist: se till att lampor och reflexer fungerar. Som bilförare: håll strålkastarna
        rena och korrekt inställda. Smutsiga eller felinställda ljus minskar sikten drastiskt.
      </p>

      <h3>Bländning</h3>
      <p>
        Vid bländning av mötande bil: titta mot höger vägkant, sänk farten. Det kan ta
        5–10 sekunder att återfå full syn efter bländning. Under den tiden är du i praktiken blind.
        Håll din vindruta ren — smuts förstärker bländningseffekten.
      </p>

      <h2>Halt väglag</h2>
      <p>
        Halt väglag uppstår vid is, snö, frost, lövslask och regn på smutsig väg. Bromssträckan
        kan bli <strong>5–10 gånger längre</strong> på is jämfört med torr asfalt.
      </p>

      <table className="theory-table">
        <thead>
          <tr>
            <th>Väglag</th>
            <th>Bromssträcka (50 km/h)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Torr asfalt</td><td>~13 m</td></tr>
          <tr><td>Våt asfalt</td><td>~18 m</td></tr>
          <tr><td>Packad snö</td><td>~40 m</td></tr>
          <tr><td>Is</td><td>~65–130 m</td></tr>
        </tbody>
      </table>

      <h3>Särskilt farliga platser</h3>
      <ul>
        <li><strong>Broar:</strong> Kyls av från undersidan — fryser före resten av vägen</li>
        <li><strong>Skuggiga partier:</strong> Solen når inte — is ligger kvar längre</li>
        <li><strong>Bergsskärningar:</strong> Fukt från berg kan ge isbildning</li>
        <li><strong>Korsningar:</strong> Bromsar och gaspedaler polerar ytan — extra halt</li>
      </ul>

      <h3>Vid sladd</h3>
      <p>
        Om bilen börjar slira:
      </p>
      <ol>
        <li><strong>Släpp gasen</strong> — tryck inte på bromsen</li>
        <li><strong>Motstyr</strong> — vrid ratten i den riktning du vill åka</li>
        <li><strong>Titta dit du vill</strong> — inte på hindret</li>
        <li>Vänta tills du får grepp och räta upp försiktigt</li>
      </ol>

      <div className="theory-warning-box">
        <p>⚠️ ESP hjälper vid sladd men kan inte upphäva fysikens lagar. Hastigheten är alltid avgörande — anpassa den till väglaget!</p>
      </div>

      <h2>Körning i regn</h2>
      <p>
        Regn försämrar sikten och minskar greppet. De mest farliga minuterna är <strong>de första
        efter att det börjat regna</strong> — då blandas vattnet med damm och olja på vägytan och
        skapar en extremt hal film.
      </p>

      <h3>Vattenplaning (aquaplaning)</h3>
      <p>
        Vid vattenplaning glider däcken ovanpå vattnet utan kontakt med vägen. Du tappar styrförmåga
        och bromsförmåga. Risken ökar med:
      </p>
      <ul>
        <li>Hög hastighet (vanligast över 70–80 km/h)</li>
        <li>Grunt mönsterdjup</li>
        <li>Lågt däcktryck</li>
        <li>Breda däck</li>
        <li>Vattensamlingar/spår i vägen</li>
      </ul>

      <p><strong>Om det händer:</strong> Släpp gasen mjukt, bromsa INTE, håll ratten rakt. Vänta tills
        du känner att däcken får kontakt med vägen igen.</p>

      <h2>Körning i dimma</h2>
      <p>
        Dimma är farlig för att den drastiskt minskar sikten — och för att den kan variera
        snabbt. Plötsligt kan du gå från bra sikt till nästan noll.
      </p>

      <h3>Så kör du i dimma</h3>
      <ul>
        <li><strong>Sänk hastigheten kraftigt</strong> — kör inte fortare än att du kan stanna inom siktsträckan</li>
        <li><strong>Tänd dimljus</strong> (fram). Bakre dimljus bara vid sikt under 150 m</li>
        <li><strong>Håll stort avstånd</strong> till bilen framför</li>
        <li><strong>Undvik omkörning</strong> — extremt farligt i dimma</li>
        <li>Använd <strong>halvljus, inte helljus</strong> — helljus reflekteras i dimman och försämrar sikten</li>
      </ul>

      <h2>Stad vs motorväg</h2>
      <p>
        Körning i stad och på motorväg kräver olika typer av uppmärksamhet och teknik.
      </p>

      <h3>Stadskörning</h3>
      <p>
        I staden finns oskyddade trafikanter överallt — fotgängare, cyklister, elsparkcyklister.
        Nyckelord: <strong>låg hastighet, högt fokus, många blickar</strong>.
      </p>
      <ul>
        <li>Håll uppsikt åt alla håll — speciellt i korsningar</li>
        <li>Var extra försiktig vid <Link href="/teori/vagmarken" style={{ color: '#1DB954', fontWeight: 500 }}>övergångsställen</Link> och busshållplatser</li>
        <li>Räkna med plötsliga stopp och fotgängare som kliver ut</li>
        <li>Uppmärksam på cyklister i döda vinkeln vid sväng höger</li>
      </ul>

      <h3>Motorvägskörning</h3>
      <p>
        På motorvägen är hastigheterna höga men trafiksituationerna mer förutsägbara.
        Nyckelord: <strong>avstånd, planering, speglar</strong>.
      </p>
      <ul>
        <li><strong>Acceleration vid påfart:</strong> Anpassa hastigheten till motorvägens flöde redan i påfarten</li>
        <li><strong>3-sekundersregeln:</strong> Håll minst 3 sekunders avstånd till framförvarande</li>
        <li><strong>Håll höger:</strong> Vänster körfält är till för omkörning — inte för att ligga kvar i</li>
        <li><strong>Speglar:</strong> Kontrollera speglar och döda vinkeln innan körfältsbyte</li>
        <li><strong>Avfart:</strong> Byt till avfartsfil i tid — bromsa INTE i motorvägens körfält</li>
      </ul>

      <div className="theory-info-box">
        <p>💡 3-sekundersregeln: välj ett fast föremål vid vägen. När bilen framför passerar det, räkna "tusen-ett, tusen-två, tusen-tre". Du ska inte nå föremålet innan du räknat klart.</p>
      </div>

      <h3>Minimihastighet på motorväg</h3>
      <p>
        Det finns ingen formell minimihastighet på svensk motorväg, men fordon som inte kan hålla
        minst 40 km/h får inte använda motorvägen. Det gäller mopeder, traktorer och cyklar.
        Fotgängare får aldrig vara på motorvägen.
      </p>

      <h2>Sammanfattning</h2>
      <p>
        Anpassa alltid hastigheten efter förhållandena. Mörker, regn, is och dimma kräver lägre hastighet
        och större avstånd. Lär dig vattenplaning och sladd — det kan rädda ditt liv.
        I det sista kapitlet går vi igenom <Link href="/teori/forsta-hjalpen" style={{ color: '#1DB954', fontWeight: 500 }}>första hjälpen</Link> —
        vad du gör om olyckan trots allt har hänt.
      </p>
    </TheoryChapterLayout>
  );
}
