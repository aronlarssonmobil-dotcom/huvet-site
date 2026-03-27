import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Halkkörning 2026 — Vad händer på halkbanan? Komplett guide | Huvet',
  description: 'Allt om halkkörning för körkort. Vad händer på halkbanan? Bromsövningar, undanmanöver, kurvkörning. Tips för att klara halkbanekörningen 2026.',
  keywords: ['halkkörning', 'halkbana körkort', 'halkbanekörning', 'halkkörning tips', 'risktvåan halkbana', 'bromsa halt väglag', 'körkort halkbana', 'halkkörning pris'],
  openGraph: {
    title: 'Halkkörning 2026 — Guide till halkbanan | Huvet',
    description: 'Vad händer vid halkbanan? Allt du behöver veta om halkkörning för körkort.',
  },
};

export default function HalkkorningPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Vad gör man vid halkbanekörning?', acceptedAnswer: { '@type': 'Answer', text: 'Vid halkbanekörning övar du nödbromsning, undanmanöver och kurvkörning på halt underlag. Du lär dig hur bilen beter sig vid halka och hur du ska reagera för att behålla kontrollen.' } },
      { '@type': 'Question', name: 'Kan man göra halkkörning på sommaren?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, halkbanor använder vatten och specialbehandlad asfalt för att simulera halka. Du kan göra halkkörningen när som helst på året — det behöver inte vara vinter.' } },
      { '@type': 'Question', name: 'Vad kostar halkkörning?', acceptedAnswer: { '@type': 'Answer', text: 'Halkkörningen ingår i Risktvåan (riskutbildning del 2) som kostar mellan 2 500 och 4 500 kr. Du kan inte boka halkkörning separat för körkort.' } },
      { '@type': 'Question', name: 'Hur ska man bromsa på halt underlag?', acceptedAnswer: { '@type': 'Answer', text: 'Med ABS-bromsar: trampa hårt och håll pedalen nedtryckt. Bilen bromsar maximalt utan att låsa hjulen. Utan ABS: pumpa bromsarna snabbt. Styr dit du vill åka, inte dit bilen glider.' } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ background: '#006B3F', height: '64px' }}><SiteHeader /></div>
      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '2rem 1.25rem 4rem', color: '#0d1f17' }}>
        <nav style={{ fontSize: '0.8rem', color: '#555', marginBottom: '1.5rem' }}>
          <Link href="/" style={{ color: '#006B3F', textDecoration: 'none' }}>Huvet</Link> › <Link href="/riskutbildning" style={{ color: '#006B3F', textDecoration: 'none' }}>Riskutbildning</Link> › Halkkörning
        </nav>

        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '0.75rem' }}>
          Halkkörning — Vad händer vid halkbanan?
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: '2rem' }}>
          Halkkörning på halkbana är en del av Risktvåan och en av de mest lärorika delarna av körkortsutbildningen. Du får uppleva på riktigt hur bilen beter sig när vägbanan är hal — och lära dig hantera det. Många är nervösa innan, men nästan alla tycker det är kul när de väl provat.
        </p>

        <h2 style={{ color: '#006B3F', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Övningar på halkbanan</h2>
        <p style={{ lineHeight: 1.8, color: '#333' }}>
          Halkbanan har flera stationer där du övar olika moment. Instruktören går igenom varje övning innan du kör.
        </p>

        <div style={{ marginBottom: '2rem' }}>
          {[
            { titel: '🛑 Nödbromsning', text: 'Du kör i en bestämd hastighet (ofta 40-70 km/h) på halt underlag och ska bromsa till full stopp. Du upplever hur lång bromssträckan blir på halt väglag jämfört med torr asfalt. Med ABS: trampa hårt, håll och styr. Utan ABS: pumpa bromsarna.' },
            { titel: '↪️ Undanmanöver', text: 'Du kör mot ett hinder som plötsligt dyker upp och måste väja. Här lär du dig att det ofta är bättre att styra runt hindret än att försöka bromsa. Kombinationen av bromsning och styrning på halt underlag är svår — det är poängen.' },
            { titel: '🔄 Kurvkörning', text: 'Du kör genom kurvor på halt underlag och upplever understyrning (bilen vill rakt) och överstyrning (bakänden slirar ut). Du lär dig att sänka hastigheten FÖRE kurvan, inte i den.' },
            { titel: '💨 Hastighetsdemonstration', text: 'Instruktören visar skillnaden i bromssträcka vid 30 km/h, 50 km/h och 70 km/h. Skillnaden är enorm — och det är precis det som är poängen. Hastighet dödar.' },
          ].map((o) => (
            <div key={o.titel} style={{ padding: '1rem 0', borderBottom: '1px solid #f0f0f0' }}>
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.05rem' }}>{o.titel}</h3>
              <p style={{ margin: 0, lineHeight: 1.7, color: '#444', fontSize: '0.95rem' }}>{o.text}</p>
            </div>
          ))}
        </div>

        <h2 style={{ color: '#006B3F', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Hur halkbanan fungerar</h2>
        <p style={{ lineHeight: 1.8, color: '#333' }}>
          En vanlig fråga är hur halkbanor kan fungera på sommaren. Svaret är enkelt:
        </p>
        <ul style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
          <li><strong>Vattenspridare</strong> håller banan konstant blöt.</li>
          <li><strong>Specialbehandlad asfalt</strong> med extremt låg friktion simulerar is/snö.</li>
          <li><strong>Plastplattor</strong> används ibland för att minska greppet ytterligare.</li>
          <li>Resultatet: banan är lika hal som is — oavsett årstid.</li>
        </ul>

        <h2 style={{ color: '#006B3F', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>De viktigaste lärdomarna</h2>
        <div style={{ background: '#fff3e0', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2rem', border: '1px solid #ffe0b2' }}>
          <ol style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 2.2, color: '#333' }}>
            <li><strong>Hastigheten avgör allt.</strong> Dubbla hastigheten = fyrdubbla bromssträckan. 50 → 70 km/h ökar bromssträckan med 96%.</li>
            <li><strong>Styr dit du vill, inte dit du glider.</strong> Titta och styr åt det håll du vill åka — bilen följer blicken.</li>
            <li><strong>Bromsa FÖRE kurvan.</strong> Aldrig i kurvan — då tappar du greppet.</li>
            <li><strong>ABS räddar liv.</strong> Med ABS-bromsar: trampa hårt och HÅLL. Släpp inte. Bilen bromsar maximalt och du kan styra samtidigt.</li>
            <li><strong>Anpassa hastigheten efter väglag.</strong> Den bästa halkkörnings-tekniken är att aldrig behöva använda den.</li>
          </ol>
        </div>

        <h2 style={{ color: '#006B3F', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Tips inför halkbanan</h2>
        <ul style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
          <li><strong>Klä dig varmt.</strong> Även på sommaren kan det vara kyligt och blåsigt vid halkbanan.</li>
          <li><strong>Använd bekväma skor.</strong> Du ska kunna känna pedalerna ordentligt.</li>
          <li><strong>Var inte nervös.</strong> Ingen förväntar sig att du ska vara bra — poängen är att uppleva och lära dig.</li>
          <li><strong>Lyssna på instruktören.</strong> De har sett tusentals elever och vet exakt vad du behöver fokusera på.</li>
          <li><strong>Det är OK att göra fel.</strong> Att tappa kontrollen på halkbanan är meningen — det är mycket bättre att det händer där än på riktigt.</li>
        </ul>

        <div style={{ background: '#e6f4ee', borderRadius: '12px', padding: '1.5rem', marginTop: '2rem' }}>
          <h3 style={{ marginTop: 0, color: '#006B3F' }}>Förbered dig med körkortsfrågor</h3>
          <p style={{ margin: '0 0 1rem' }}>Teoriprovet innehåller frågor om halka, bromssträcka och riskmedvetenhet. Öva på dem.</p>
          <Link href="/korkortsfragor" style={{ background: '#006B3F', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
            Öva körkortsfrågorna →
          </Link>
        </div>

        <nav style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e6f4ee', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/risktvaan" style={{ color: '#006B3F', textDecoration: 'none' }}>← Risktvåan</Link>
          <Link href="/teoriprov-tips" style={{ color: '#006B3F', textDecoration: 'none', marginLeft: 'auto' }}>Teoriprov-tips →</Link>
        </nav>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link href="/riskettan" style={{ color: '#006B3F', fontSize: '0.85rem', textDecoration: 'none' }}>Riskettan</Link>
          <span style={{ color: '#ccc' }}>•</span>
          <Link href="/hastighetsgranser-guide" style={{ color: '#006B3F', fontSize: '0.85rem', textDecoration: 'none' }}>Hastighetsgränser</Link>
          <span style={{ color: '#ccc' }}>•</span>
          <Link href="/uppkorning-tips" style={{ color: '#006B3F', fontSize: '0.85rem', textDecoration: 'none' }}>Uppkörning-tips</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
