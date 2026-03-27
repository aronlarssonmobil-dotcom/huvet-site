import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Risktvåan 2026 — Allt om riskutbildning del 2 & halkbana | Huvet',
  description: 'Komplett guide om Risktvåan (riskutbildning del 2). Halkbanekörning, bromsövningar, undanmanöver. Vad händer, vad kostar den och hur förbereder du dig? Körkort 2026.',
  keywords: ['risktvåan', 'riskutbildning del 2', 'risk 2 körkort', 'risktvåan pris', 'halkbana körkort', 'risktvåan vad ingår', 'halkbanekörning', 'risktvåan 2026'],
  openGraph: {
    title: 'Risktvåan 2026 — Guide till riskutbildning del 2 | Huvet',
    description: 'Allt du behöver veta om Risktvåan: halkbana, pris, innehåll och tips.',
  },
};

export default function RisktvaanPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Vad är Risktvåan?', acceptedAnswer: { '@type': 'Answer', text: 'Risktvåan (riskutbildning del 2) är en obligatorisk praktisk kurs som inkluderar körning på halkbana, bromsövningar och undanmanöver. Den måste genomföras innan uppkörningen.' } },
      { '@type': 'Question', name: 'Vad kostar Risktvåan 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Risktvåan kostar mellan 2 500 och 4 500 kr beroende på var i Sverige du bor och vilken anläggning du väljer. Storstäder tenderar att vara dyrare.' } },
      { '@type': 'Question', name: 'Hur lång är Risktvåan?', acceptedAnswer: { '@type': 'Answer', text: 'Risktvåan är cirka 3-4 timmar lång, varav en stor del är praktisk körning på halkbana. Det ingår också en teoridel med gruppdiskussion.' } },
      { '@type': 'Question', name: 'Måste man göra Risktvåan innan uppkörningen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, Risktvåan måste vara genomförd innan du får göra uppkörningen (körprovet). Intyget gäller i 5 år.' } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ background: '#1DB954', height: '64px' }}><SiteHeader /></div>
      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '2rem 1.25rem 4rem', color: '#0d1f17' }}>
        <nav style={{ fontSize: '0.8rem', color: '#555', marginBottom: '1.5rem' }}>
          <Link href="/" style={{ color: '#1DB954', textDecoration: 'none' }}>Huvet</Link> › <Link href="/riskutbildning" style={{ color: '#1DB954', textDecoration: 'none' }}>Riskutbildning</Link> › Risktvåan
        </nav>

        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '0.75rem' }}>
          Risktvåan — Allt om riskutbildning del 2 (2026)
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: '2rem' }}>
          Risktvåan är den andra obligatoriska riskutbildningen för B-körkort. Till skillnad från Riskettan som är teoretisk, innehåller Risktvåan <strong>praktisk körning på halkbana</strong>. Du får uppleva hur bilen beter sig vid halt väglag, öva nödbromsning och lära dig undanmanöver. Många tycker det är den roligaste delen av körkortutbildningen.
        </p>

        <div style={{ background: '#e6f4ee', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem' }}>
          <strong style={{ color: '#1DB954' }}>📋 Snabbfakta om Risktvåan</strong>
          <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', lineHeight: 2, color: '#333' }}>
            <li><strong>Längd:</strong> Cirka 3–4 timmar</li>
            <li><strong>Pris:</strong> 2 500–4 500 kr</li>
            <li><strong>Format:</strong> Praktisk halkbanekörning + teori</li>
            <li><strong>Krav:</strong> Måste genomföras innan uppkörningen</li>
            <li><strong>Giltighetstid:</strong> 5 år</li>
            <li><strong>Förutsättning:</strong> Körkortstillstånd + viss körvana</li>
          </ul>
        </div>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Vad ingår i Risktvåan?</h2>
        <p style={{ lineHeight: 1.8, color: '#333', marginBottom: '1rem' }}>
          Risktvåan har både en praktisk och en teoretisk del:
        </p>

        <h3 style={{ color: '#333', marginTop: '1.5rem' }}>🚗 Praktisk del — halkbana</h3>
        <ul style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
          <li><strong>Bromsövning på halt underlag:</strong> Du lär dig skillnaden mellan att bromsa med och utan ABS, och hur bromssträckan ändras beroende på underlag och hastighet.</li>
          <li><strong>Undanmanöver:</strong> Du kör i en viss hastighet och måste plötsligt väja för ett hinder. Syftet är att lära sig styra och bromsa samtidigt.</li>
          <li><strong>Styrning i kurva:</strong> Upplev hur bilen beter sig i kurvor på halt underlag — understyrd och överstyrd bil.</li>
          <li><strong>Hastighetsuppfattning:</strong> Demonstrationer som visar hur hastigheten påverkar bromssträcka och krockvåld.</li>
        </ul>

        <h3 style={{ color: '#333', marginTop: '1.5rem' }}>📚 Teoretisk del</h3>
        <ul style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
          <li>Gruppdiskussion om hastighetens betydelse</li>
          <li>Genomgång av krockvåld vid olika hastigheter</li>
          <li>Reflektion efter övningarna — vad lärde du dig?</li>
          <li>Diskussion om riskbeteenden i trafiken</li>
        </ul>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Hur förbereder du dig?</h2>
        <ol style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
          <li><strong>Ha viss körvana först.</strong> Risktvåan kräver att du kan hantera bilen grundläggande. Boka den efter att du haft minst 10-15 körlektioner.</li>
          <li><strong>Klä dig bekvämt.</strong> Du sitter i bil och kliver in och ut — skor du kan köra i, kläder efter väder.</li>
          <li><strong>Ät och drick innan.</strong> Kursen är 3–4 timmar lång och det kan vara kallt ute vid halkbanan.</li>
          <li><strong>Ha med körkortstillstånd.</strong> Du måste kunna visa det vid ankomst.</li>
          <li><strong>Var mentalt redo att lära, inte prestera.</strong> Poängen är att uppleva gränserna — inte att köra perfekt.</li>
        </ol>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Var kan man göra Risktvåan?</h2>
        <p style={{ lineHeight: 1.8, color: '#333' }}>
          Risktvåan genomförs på <strong>godkända halkbanor</strong> runt om i Sverige. De flesta trafikskolor samarbetar med en halkbana och kan hjälpa dig boka. Några av de största anläggningarna:
        </p>
        <ul style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
          <li><strong>Stockholmsområdet:</strong> Stora Holm, Flen, Vängsö</li>
          <li><strong>Göteborg:</strong> Torslanda, Stora Holm</li>
          <li><strong>Malmö:</strong> Hörby, Sturup</li>
          <li><strong>Norrland:</strong> Gävle, Umeå, Sundsvall</li>
        </ul>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Vad händer om det inte finns snö?</h2>
        <p style={{ lineHeight: 1.8, color: '#333' }}>
          Halkbanorna använder vatten och specialbehandlad asfalt för att simulera halt väglag. Du behöver alltså <strong>inte vänta på vintern</strong> — halkbanorna fungerar året runt. Sommar eller vinter spelar ingen roll för övningarna.
        </p>

        <div style={{ background: '#e6f4ee', borderRadius: '12px', padding: '1.5rem', marginTop: '2rem' }}>
          <h3 style={{ marginTop: 0, color: '#1DB954' }}>Nästa steg: Uppkörningen</h3>
          <p style={{ margin: '0 0 1rem' }}>Efter Risktvåan är du redo för det sista steget — uppkörningen. Läs våra tips.</p>
          <Link href="/uppkorning-tips" style={{ background: '#1DB954', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
            Uppkörning-tips →
          </Link>
        </div>

        <nav style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e6f4ee', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/riskettan" style={{ color: '#1DB954', textDecoration: 'none' }}>← Riskettan</Link>
          <Link href="/halkkörning" style={{ color: '#1DB954', textDecoration: 'none', marginLeft: 'auto' }}>Halkkörning →</Link>
        </nav>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link href="/korkort-kostnad-guide" style={{ color: '#1DB954', fontSize: '0.85rem', textDecoration: 'none' }}>Körkort kostnad</Link>
          <span style={{ color: '#ccc' }}>•</span>
          <Link href="/trafikregler-guide" style={{ color: '#1DB954', fontSize: '0.85rem', textDecoration: 'none' }}>Trafikregler guide</Link>
          <span style={{ color: '#ccc' }}>•</span>
          <Link href="/teoriprov-tips" style={{ color: '#1DB954', fontSize: '0.85rem', textDecoration: 'none' }}>Teoriprov-tips</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
