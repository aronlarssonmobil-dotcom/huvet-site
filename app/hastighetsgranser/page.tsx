import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hastighetsgränser i Sverige 2026 — Komplett guide | Huvet',
  description: 'Alla hastighetsgränser i Sverige 2026. Motorväg, landsväg, tättbebyggt område, skolzon. Vad gäller vid tillfälliga skyltar? Klara körkortsprovet med säkerhet.',
  keywords: ['hastighetsgränser', 'hastighetsgränser sverige', 'hastighet motorväg', 'hastighet landsväg', 'hastighet tättbebyggt', 'hastighetsgränser 2026', 'körkortsprovet hastighet'],
};

export default function HastighetsgranserPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Vad är hastighetsgränsen på motorväg i Sverige?', acceptedAnswer: { '@type': 'Answer', text: '110 km/h generellt, 120 km/h där det är skyltad.' } },
      { '@type': 'Question', name: 'Vad gäller inom tättbebyggt område?', acceptedAnswer: { '@type': 'Answer', text: '50 km/h om inget annat är skyltad.' } },
      { '@type': 'Question', name: 'Vad är hastighetsgränsen på landsväg?', acceptedAnswer: { '@type': 'Answer', text: '70 km/h på vanlig tvåfältsväg utanför tättbebyggt område.' } },
    ],
  };

  const hastighetData = [
    { typ: 'Motorväg (standard)', hastighet: '110 km/h', ikon: '🛣️' },
    { typ: 'Motorväg (skyltad 120)', hastighet: '120 km/h', ikon: '🛣️' },
    { typ: 'Motortrafikled', hastighet: '90 km/h', ikon: '🚗' },
    { typ: 'Landsväg (2-fält)', hastighet: '70 km/h', ikon: '🌲' },
    { typ: 'Tättbebyggt område', hastighet: '50 km/h', ikon: '🏙️' },
    { typ: 'Skolzon (skyltad)', hastighet: '30 km/h', ikon: '🏫' },
    { typ: 'Gågata', hastighet: '7 km/h (gångfart)', ikon: '🚶' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '2rem 1.25rem 4rem', fontFamily: 'system-ui, sans-serif', color: '#0d1f17' }}>
        <nav style={{ fontSize: '0.8rem', color: '#555', marginBottom: '1.5rem' }}>
          <Link href="/" style={{ color: '#1DB954' }}>Huvet</Link> › Hastighetsgränser
        </nav>

        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '0.75rem' }}>
          Hastighetsgränser i Sverige 2026
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: '2rem' }}>
          Att kunna hastighetsgränserna är centralt för körkortsprovet. Här är alla gränser du måste kunna — uppdaterade för 2026.
        </p>

        <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '2.5rem' }}>
          {hastighetData.map(({ typ, hastighet, ikon }) => (
            <div key={typ} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#e6f4ee', borderRadius: '12px', padding: '1rem 1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.5rem' }}>{ikon}</span>
                <span style={{ fontWeight: 500 }}>{typ}</span>
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.2rem', color: '#1DB954' }}>{hastighet}</span>
            </div>
          ))}
        </div>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Viktiga undantag</h2>
        <ul style={{ lineHeight: 2, paddingLeft: '1.5rem', marginBottom: '2rem' }}>
          <li>Tillfälliga skyltar (t.ex. vägarbete) gäller alltid framför fasta skyltar.</li>
          <li>På vägar utan hastighetsskylt gäller <strong>bashastigheten</strong> — 50 km/h inom tättbebyggt, 70 km/h utanför.</li>
          <li>Att köra för fort med mer än 30 km/h kan ge körkortsåterkallelse.</li>
          <li>Fordonets registrerade maxhastighet får inte överskridas.</li>
        </ul>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Vanliga frågor</h2>
        <div>
          {jsonLd.mainEntity.map((q) => (
            <div key={q.name} style={{ borderBottom: '1px solid #e6f4ee', padding: '1rem 0' }}>
              <strong>{q.name}</strong>
              <p style={{ margin: '0.4rem 0 0', color: '#444' }}>{q.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#e6f4ee', borderRadius: '12px', padding: '1.5rem', marginTop: '2rem' }}>
          <h3 style={{ marginTop: 0, color: '#1DB954' }}>Öva på hastighetsfrågor</h3>
          <Link href="/korkortsfragor" style={{ background: '#1DB954', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
            Starta körkortsövning →
          </Link>
        </div>

        <nav style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e6f4ee', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/trafikregler" style={{ color: '#1DB954' }}>← Trafikregler</Link>
          <Link href="/vagmarken" style={{ color: '#1DB954', marginLeft: 'auto' }}>Vägmärken →</Link>
        </nav>
      </main>
    </>
  );
}
