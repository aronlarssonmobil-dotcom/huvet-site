import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Trafikregler 2026 — Allt du måste kunna för körkortsprovet | Huvet',
  description: 'Komplett guide till svenska trafikregler 2026. Hastighetsgränser, väjningsplikt, körfältsbyten, rondell, parkering och möte. Klara teoriprov med säkerhet.',
  keywords: ['trafikregler', 'trafikregler sverige', 'trafikregler 2026', 'trafikregler körkortet', 'hastighetsgränser', 'väjningsplikt', 'trafikregler rondell', 'körkortsregler'],
  openGraph: {
    title: 'Trafikregler 2026 — Allt du måste kunna | Huvet',
    description: 'Kompletta svenska trafikregler för körkortsprovet 2026.',
  },
};

const regler = [
  {
    titel: 'Hastighetsgränser',
    innehall: [
      { regel: 'Inom tättbebyggt område', hastighet: '50 km/h' },
      { regel: 'Utom tättbebyggt område (2-fältsväg)', hastighet: '70 km/h' },
      { regel: 'Motortrafikled', hastighet: '90 km/h' },
      { regel: 'Motorväg', hastighet: '110 km/h' },
      { regel: 'Motorväg med skylt 120', hastighet: '120 km/h' },
      { regel: 'Skolzon (skyltad)', hastighet: '30 km/h' },
    ],
  },
];

export default function TrafiktreglerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Trafikregler 2026 — Allt du måste kunna för körkortsprovet',
    description: 'Kompletta svenska trafikregler för teoriprov och körkortsprov 2026.',
    dateModified: '2026-03-26',
    publisher: { '@type': 'Organization', name: 'Huvet', url: 'https://huvet.se' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Vad är de viktigaste trafikreglerna att kunna på körkortsprovet?', acceptedAnswer: { '@type': 'Answer', text: 'De vanligaste frågorna gäller högerregeln, stopplikt vs vajningsplikt, hastigheter i olika zoner, körning i korsningar, omkörningsregler och alkohol i trafiken. Dessa ämnen återkommer ofta på teoriprovet.' } },
          { '@type': 'Question', name: 'Vad gäller högerregeln i Sverige?', acceptedAnswer: { '@type': 'Answer', text: 'Högerregeln innebär att du ska väja för fordon som kommer från höger om inget annat anges med vägmärken. Regeln gäller i korsningar utan skyltar eller markeringar. Vid stopplinje eller vajningsplikt gäller skylten istället.' } },
          { '@type': 'Question', name: 'Vad är skillnaden på stopplikt och vajningsplikt?', acceptedAnswer: { '@type': 'Answer', text: 'Stopplikt (oktagonalt STOP-märke) kräver att du stannar helt och väntar tills det är säkert. Vajningsplikt (triangel med spetsen nedåt) innebär att du måste ge företräde men behöver inte stanna om det är fri väg.' } },
          { '@type': 'Question', name: 'Vad är promillegränsen i Sverige?', acceptedAnswer: { '@type': 'Answer', text: '0,2 promille alkohol i blodet är gränsen för rattfylleri. Över 1,0 promille är grovt rattfylleri. Narkotikapåverkan är aldrig tillåtet. Sverige har en av Europas striktaste alkohollagar i trafiken.' } },
        ],
      }) }} />
      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '2rem 1.25rem 4rem', fontFamily: 'system-ui, sans-serif', color: '#0d1f17' }}>
        <nav style={{ fontSize: '0.8rem', color: '#555', marginBottom: '1.5rem' }}>
          <Link href="/" style={{ color: '#1DB954' }}>Huvet</Link> › Trafikregler
        </nav>

        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '0.75rem' }}>
          Trafikregler 2026 — Allt du måste kunna
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: '2rem' }}>
          Att kunna trafikreglerna är avgörande för att klara körkortsprovet. Här är de viktigaste reglerna samlade — uppdaterade för 2026.
        </p>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Hastighetsgränser</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.95rem' }}>
          <thead>
            <tr style={{ background: '#e6f4ee' }}>
              <th style={{ textAlign: 'left', padding: '0.6rem 1rem' }}>Vägsträcka</th>
              <th style={{ textAlign: 'right', padding: '0.6rem 1rem' }}>Hastighet</th>
            </tr>
          </thead>
          <tbody>
            {regler[0].innehall.map(({ regel, hastighet }) => (
              <tr key={regel} style={{ borderBottom: '1px solid #e6f4ee' }}>
                <td style={{ padding: '0.6rem 1rem' }}>{regel}</td>
                <td style={{ textAlign: 'right', padding: '0.6rem 1rem', fontWeight: 700, color: '#1DB954' }}>{hastighet}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Väjningsplikt och stopplikt</h2>
        <ul style={{ lineHeight: 2, paddingLeft: '1.5rem' }}>
          <li><strong>Väjningsplikt (väjningspliktsmarkering):</strong> Du ska väja för trafik på den väg du ansluter till.</li>
          <li><strong>Stopplikt (stoppskylt + heldragen linje):</strong> Du måste stanna fullständigt innan du fortsätter.</li>
          <li><strong>Högerregeln:</strong> På vägar utan skyltar eller markeringar gäller högerregeln — trafik från höger har företräde.</li>
          <li><strong>Rondell:</strong> Trafik inne i rondellen har alltid företräde. Du väjer när du kör in.</li>
        </ul>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Körfältsregler</h2>
        <ul style={{ lineHeight: 2, paddingLeft: '1.5rem' }}>
          <li>Håll alltid så långt till höger som möjligt inom körfältet.</li>
          <li>Byt körfält när det är säkert — kontrollera spegel, döda vinkeln, blinkers.</li>
          <li>Vänster körfält på motorväg är <strong>omkörningsfält</strong> — kör inte i det i onödan.</li>
          <li>Vid filsammanslagning (blixtlåsregeln) turas du om med fordon i angränsande fil.</li>
        </ul>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Parkering och stannande</h2>
        <ul style={{ lineHeight: 2, paddingLeft: '1.5rem' }}>
          <li>Parkering förbjudet inom <strong>10 meter från övergångsställe</strong>.</li>
          <li>Parkering förbjudet inom <strong>10 meter från korsning</strong>.</li>
          <li>Stannande är kortare än 3 minuter, parkering är längre.</li>
          <li>Gult heldragen kantlinje = parkering och stannande förbjudet.</li>
          <li>Gult streckad kantlinje = stannande tillåtet, parkering förbjudet.</li>
        </ul>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Möte och omkörning</h2>
        <ul style={{ lineHeight: 2, paddingLeft: '1.5rem' }}>
          <li>Vid möte på smal väg ska båda hålla till höger och sänka hastigheten.</li>
          <li>Omkörning sker alltid till vänster (undantag: spårvagn, cykelfält).</li>
          <li>Övertäckt vägmarkering är alltid förbjudet att köra om.</li>
          <li>Kontrollera alltid döda vinkeln och blinkers innan omkörning.</li>
        </ul>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Alkohol och droger i trafiken</h2>
        <ul style={{ lineHeight: 2, paddingLeft: '1.5rem' }}>
          <li>Rattfylleri: 0,2 promille eller mer i blodet.</li>
          <li>Grovt rattfylleri: 1,0 promille eller mer.</li>
          <li>Narkotika: nolltolerans — alla nivåer är olagliga.</li>
        </ul>

        <div style={{ background: '#e6f4ee', borderRadius: '12px', padding: '1.5rem', marginTop: '2rem' }}>
          <h3 style={{ marginTop: 0, color: '#1DB954' }}>Träna på trafikregler-frågor</h3>
          <p style={{ margin: '0 0 1rem' }}>Testa dina kunskaper med riktiga körkortsfrågor om trafikregler.</p>
          <Link href="/korkortsfragor" style={{ background: '#1DB954', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
            Öva körkortsfrågorna →
          </Link>
        </div>

        <nav style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e6f4ee', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/vagmarken" style={{ color: '#1DB954' }}>← Vägmärken</Link>
          <Link href="/teoriprov" style={{ color: '#1DB954', marginLeft: 'auto' }}>Teoriprov →</Link>
        </nav>
      </main>
    </>
  );
}
