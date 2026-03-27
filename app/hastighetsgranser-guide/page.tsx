import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Hastighetsgränser i Sverige 2026 — Alla hastigheter på varje vägtyp | Huvet',
  description: 'Komplett guide till alla hastighetsgränser i Sverige 2026. Motorväg, landsväg, tättbebyggt område, skolzon, gågata. Vad händer vid överträdelse? Klara teoriprovet.',
  keywords: ['hastighetsgränser', 'hastighetsgränser sverige', 'hastighet motorväg', 'hastighet tättbebyggt område', 'hastighet landsväg', 'fortkörning böter', 'hastighetsgränser 2026'],
  openGraph: {
    title: 'Hastighetsgränser i Sverige 2026 — Komplett guide | Huvet',
    description: 'Alla hastighetsgränser i Sverige. Motorväg, landsväg, tättbebyggt, skolzon och mer.',
  },
};

export default function HastighetsgranserGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Vad är hastighetsgränsen på motorväg i Sverige 2026?', acceptedAnswer: { '@type': 'Answer', text: '110 km/h är standardhastigheten på motorväg. Vissa sträckor har 120 km/h om det finns en skylt som anger det. Minsta tillåtna hastighet på motorväg är 40 km/h.' } },
      { '@type': 'Question', name: 'Hur snabbt får man köra i tättbebyggt område?', acceptedAnswer: { '@type': 'Answer', text: '50 km/h gäller inom tättbebyggt område om inget annat skyltas. I skolzoner kan det vara 30 km/h och på gågator gångfart (ca 7 km/h).' } },
      { '@type': 'Question', name: 'Vad kostar det att köra för fort?', acceptedAnswer: { '@type': 'Answer', text: 'Fortkörningsböter i Sverige: 1-10 km/h för fort = 2 000 kr, 11-15 km/h = 2 800 kr, 16-20 km/h = 3 200 kr, 21-25 km/h = 3 600 kr, 26-30 km/h = 4 000 kr. Över 30 km/h kan leda till åtal.' } },
      { '@type': 'Question', name: 'Vad är skillnaden mellan rekommenderad och obligatorisk hastighetsgräns?', acceptedAnswer: { '@type': 'Answer', text: 'Obligatorisk hastighetsgräns anges med ett runt vägmärke med röd kant (förbudsmärke). Rekommenderad hastighet anges med blå kvadratisk skylt och är inte tvingande, men visar vad som anses lämpligt.' } },
    ],
  };

  const hastigheter = [
    { typ: 'Gågata', hastighet: '~7 km/h', detalj: 'Gångfart. Fotgängare har företräde. Fordon får bara köra i gångfart.', ikon: '🚶' },
    { typ: 'Skolzon (skyltad)', hastighet: '30 km/h', detalj: 'Gäller vid skolor och förskolor under angivna tider. Var extremt uppmärksam på barn.', ikon: '🏫' },
    { typ: 'Tättbebyggt område', hastighet: '50 km/h', detalj: 'Standardhastighet i städer och tätorter. Gäller om inget annat skyltas.', ikon: '🏙️' },
    { typ: 'Landsväg (2-fält)', hastighet: '70 km/h', detalj: 'Vanlig tvåfältsväg utanför tättbebyggt område utan mittseparering.', ikon: '🌲' },
    { typ: 'Landsväg (mittseparerad)', hastighet: '80–90 km/h', detalj: 'Tvåfältsväg med vajerräcke eller mittseparering. Ofta skyltad 80 eller 90.', ikon: '🛤️' },
    { typ: 'Motortrafikled', hastighet: '90 km/h', detalj: 'Väg med motortrafikledsskylt. Kan ha korsningar i plan till skillnad från motorväg.', ikon: '🚗' },
    { typ: 'Motorväg (standard)', hastighet: '110 km/h', detalj: 'De flesta motorvägar har 110 km/h. Minsta tillåtna hastighet: 40 km/h.', ikon: '🛣️' },
    { typ: 'Motorväg (skyltad 120)', hastighet: '120 km/h', detalj: 'Gäller på utvalda motorvägssträckor med extra skylt. Sveriges högsta tillåtna hastighet.', ikon: '🏎️' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ background: '#1DB954', height: '64px' }}><SiteHeader /></div>
      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '2rem 1.25rem 4rem', color: '#0d1f17' }}>
        <nav style={{ fontSize: '0.8rem', color: '#555', marginBottom: '1.5rem' }}>
          <Link href="/" style={{ color: '#1DB954', textDecoration: 'none' }}>Huvet</Link> › <Link href="/hastighetsgranser" style={{ color: '#1DB954', textDecoration: 'none' }}>Hastighetsgränser</Link> › Guide
        </nav>

        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '0.75rem' }}>
          Hastighetsgränser i Sverige 2026 — Alla hastigheter du måste kunna
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: '2rem' }}>
          Hastighetsfrågor är bland de vanligaste på teoriprovet. Det räcker inte att veta att motorväg är 110 km/h — du behöver förstå alla vägtyper, undantag och vad som händer vid tillfälliga skyltar. Här är den kompletta guiden till Sveriges hastighetsgränser.
        </p>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Alla hastighetsgränser</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.95rem' }}>
          <thead>
            <tr style={{ background: '#e6f4ee' }}>
              <th style={{ textAlign: 'left', padding: '0.6rem 1rem' }}>Vägtyp</th>
              <th style={{ textAlign: 'center', padding: '0.6rem 1rem' }}>Hastighet</th>
              <th style={{ textAlign: 'left', padding: '0.6rem 1rem' }}>Detalj</th>
            </tr>
          </thead>
          <tbody>
            {hastigheter.map((h) => (
              <tr key={h.typ} style={{ borderBottom: '1px solid #e6f4ee' }}>
                <td style={{ padding: '0.6rem 1rem', fontWeight: 600 }}>{h.ikon} {h.typ}</td>
                <td style={{ textAlign: 'center', padding: '0.6rem 1rem', fontWeight: 700, color: '#1DB954' }}>{h.hastighet}</td>
                <td style={{ padding: '0.6rem 1rem', fontSize: '0.85rem', color: '#555' }}>{h.detalj}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Viktiga undantag och regler</h2>
        <ul style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
          <li><strong>Tillfälliga vägmärken</strong> (gul bakgrund) gäller alltid framför fasta skyltar. Ofta vid vägarbeten.</li>
          <li><strong>Polisens anvisningar</strong> gäller framför alla skyltar och trafiksignaler.</li>
          <li><strong>Dimma, regn, snö</strong> — du ska alltid anpassa hastigheten efter förhållandena, även om skyltad hastighet är högre.</li>
          <li><strong>Släp/trailer:</strong> Max 80 km/h med obromsad släpvagn. Med bromsad släpvagn gäller samma som skyltad hastighet.</li>
          <li><strong>Körning med dubbdäck:</strong> Inga särskilda hastighetsgränser, men dubbdäck påverkar bromssträckan på torr vägbana.</li>
        </ul>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Fortkörningsböter 2026</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.95rem' }}>
          <thead>
            <tr style={{ background: '#fff3e0' }}>
              <th style={{ textAlign: 'left', padding: '0.6rem 1rem' }}>Överträdelse</th>
              <th style={{ textAlign: 'right', padding: '0.6rem 1rem' }}>Böter</th>
            </tr>
          </thead>
          <tbody>
            {[
              { over: '1–10 km/h', bot: '2 000 kr' },
              { over: '11–15 km/h', bot: '2 800 kr' },
              { over: '16–20 km/h', bot: '3 200 kr' },
              { over: '21–25 km/h', bot: '3 600 kr' },
              { over: '26–30 km/h', bot: '4 000 kr' },
              { over: 'Över 30 km/h', bot: 'Åtal + risk för indraget körkort' },
            ].map((r) => (
              <tr key={r.over} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '0.6rem 1rem' }}>{r.over}</td>
                <td style={{ textAlign: 'right', padding: '0.6rem 1rem', fontWeight: 700, color: '#D32F2F' }}>{r.bot}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Anpassad hastighet — grundregeln</h2>
        <p style={{ lineHeight: 1.8, color: '#333' }}>
          Trafikförordningen säger att du alltid ska <strong>anpassa hastigheten till vad trafiksäkerheten kräver</strong>. Det betyder att även om skylten visar 70 km/h, ska du köra långsammare om det:
        </p>
        <ul style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
          <li>Regnar, snöar eller är halt</li>
          <li>Är dålig sikt (dimma, mörker)</li>
          <li>Finns barn, fotgängare eller cyklister nära vägen</li>
          <li>Vägen är smal eller kurvigt</li>
          <li>Du kör förbi en skola, buss vid hållplats, eller olycksplats</li>
        </ul>

        <div style={{ background: '#e6f4ee', borderRadius: '12px', padding: '1.5rem', marginTop: '2rem' }}>
          <h3 style={{ marginTop: 0, color: '#1DB954' }}>Testa dina kunskaper</h3>
          <p style={{ margin: '0 0 1rem' }}>Öva på hastighetsfrågor och andra trafikregler med riktiga körkortsfrågor.</p>
          <Link href="/korkortsfragor" style={{ background: '#1DB954', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
            Öva körkortsfrågorna →
          </Link>
        </div>

        <nav style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e6f4ee', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/trafikregler-guide" style={{ color: '#1DB954', textDecoration: 'none' }}>← Trafikregler guide</Link>
          <Link href="/ovningsprov-guide" style={{ color: '#1DB954', textDecoration: 'none', marginLeft: 'auto' }}>Övningsprov-guide →</Link>
        </nav>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link href="/vagmarken-guide" style={{ color: '#1DB954', fontSize: '0.85rem', textDecoration: 'none' }}>Vägmärken guide</Link>
          <span style={{ color: '#ccc' }}>•</span>
          <Link href="/teoriprov-tips" style={{ color: '#1DB954', fontSize: '0.85rem', textDecoration: 'none' }}>Teoriprov-tips</Link>
          <span style={{ color: '#ccc' }}>•</span>
          <Link href="/halkkörning" style={{ color: '#1DB954', fontSize: '0.85rem', textDecoration: 'none' }}>Halkkörning</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
