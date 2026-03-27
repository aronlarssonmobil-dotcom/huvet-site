import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Vad kostar körkort 2026? — Komplett prisguide | Huvet',
  description: 'Vad kostar det att ta körkort 2026? Komplett prisöversikt: teoriprov, körlektioner, riskutbildning, uppkörning och halkkörning. Spara pengar med våra tips.',
  keywords: ['körkort kostnad', 'vad kostar körkort', 'körkort pris 2026', 'körlektion pris', 'teoriprov kostnad', 'riskutbildning pris', 'uppkörning kostnad', 'billigt körkort'],
  openGraph: {
    title: 'Vad kostar körkort 2026? — Prisguide | Huvet',
    description: 'Komplett prisöversikt för körkort 2026. Alla kostnader från ansökan till körkort.',
  },
};

export default function KorkortKostnadGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Vad kostar körkort totalt 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Totalkostnaden för B-körkort 2026 varierar mellan 15 000 och 30 000 kr beroende på hur många körlektioner du behöver. Genomsnittet ligger runt 20 000–22 000 kr.' } },
      { '@type': 'Question', name: 'Vad kostar en körlektion?', acceptedAnswer: { '@type': 'Answer', text: 'En körlektion (40 min) kostar mellan 500 och 900 kr beroende på stad och trafikskola. Storstäderna är dyrast. Genomsnittet ligger på cirka 650–750 kr per lektion.' } },
      { '@type': 'Question', name: 'Hur mycket kostar teoriprovet?', acceptedAnswer: { '@type': 'Answer', text: 'Teoriprovet (kunskapsprovet) kostar 325 kr per tillfälle hos Trafikverket (2026). Priset är detsamma oavsett om du gör provet för första gången eller omprovar.' } },
      { '@type': 'Question', name: 'Kan man ta körkort billigt?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, genom att privat-öva mycket med handledare (gratis), plugga teori online, och bara ta de körlektioner du verkligen behöver kan du komma ner mot 12 000–15 000 kr.' } },
    ],
  };

  const kostnader = [
    { post: 'Körkortstillstånd (ansökan)', pris: '250 kr', obligatorisk: true },
    { post: 'Syntest (optiker)', pris: '0–200 kr', obligatorisk: true },
    { post: 'Introduktionskurs', pris: '200–400 kr', obligatorisk: true },
    { post: 'Riskutbildning del 1 (Riskettan)', pris: '500–1 500 kr', obligatorisk: true },
    { post: 'Riskutbildning del 2 (Risktvåan/Halkbana)', pris: '2 500–4 500 kr', obligatorisk: true },
    { post: 'Körlektioner (15–25 st)', pris: '8 000–22 000 kr', obligatorisk: false },
    { post: 'Teorikurs/studiematerial', pris: '0–500 kr', obligatorisk: false },
    { post: 'Teoriprov (kunskapsprov)', pris: '325 kr', obligatorisk: true },
    { post: 'Uppkörning (körprov)', pris: '800 kr', obligatorisk: true },
    { post: 'Foto + körkort (Transportstyrelsen)', pris: '250 kr', obligatorisk: true },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ background: '#006B3F', height: '64px' }}><SiteHeader /></div>
      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '2rem 1.25rem 4rem', color: '#0d1f17' }}>
        <nav style={{ fontSize: '0.8rem', color: '#555', marginBottom: '1.5rem' }}>
          <Link href="/" style={{ color: '#006B3F', textDecoration: 'none' }}>Huvet</Link> › <Link href="/korkort-kostnad" style={{ color: '#006B3F', textDecoration: 'none' }}>Körkort kostnad</Link> › Guide
        </nav>

        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '0.75rem' }}>
          Vad kostar körkort 2026? — Komplett prisguide
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: '2rem' }}>
          Att ta körkort är en av de största investeringarna unga svenskar gör. Totalkostnaden varierar enormt — från runt 12 000 kr om du övar privat till över 30 000 kr om du tar alla lektioner på trafikskola. Här bryter vi ner varje kostnad så du vet exakt vad du kan förvänta dig.
        </p>

        <h2 style={{ color: '#006B3F', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Alla kostnader i detalj</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.95rem' }}>
          <thead>
            <tr style={{ background: '#e6f4ee' }}>
              <th style={{ textAlign: 'left', padding: '0.6rem 1rem' }}>Kostnad</th>
              <th style={{ textAlign: 'right', padding: '0.6rem 1rem' }}>Pris (ca)</th>
              <th style={{ textAlign: 'center', padding: '0.6rem 1rem' }}>Obligatorisk?</th>
            </tr>
          </thead>
          <tbody>
            {kostnader.map((k) => (
              <tr key={k.post} style={{ borderBottom: '1px solid #e6f4ee' }}>
                <td style={{ padding: '0.6rem 1rem' }}>{k.post}</td>
                <td style={{ textAlign: 'right', padding: '0.6rem 1rem', fontWeight: 600 }}>{k.pris}</td>
                <td style={{ textAlign: 'center', padding: '0.6rem 1rem' }}>{k.obligatorisk ? '✅ Ja' : '📌 Valfri'}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ background: '#fff3e0', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem', border: '1px solid #ffe0b2' }}>
          <strong style={{ color: '#E65100' }}>💰 Totalkostnad sammanfattning</strong>
          <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', lineHeight: 2, color: '#333' }}>
            <li><strong>Minimum (sparsam):</strong> ~12 000–15 000 kr — mycket privat övning, få körlektioner</li>
            <li><strong>Genomsnitt:</strong> ~20 000–22 000 kr — blandning av privat och skola</li>
            <li><strong>Maximum (allt på skola):</strong> ~25 000–35 000 kr — allt via trafikskola</li>
          </ul>
        </div>

        <h2 style={{ color: '#006B3F', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Så sparar du pengar på körkortet</h2>
        <ol style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
          <li><strong>Öva privat så mycket som möjligt.</strong> Hitta en handledare (förälder, syskon, kompis med rätt behörighet) och kör regelbundet. Privat övning kostar bara bensin.</li>
          <li><strong>Plugga teori gratis online.</strong> Använd Huvet istället för att köpa dyra teoripaket. Spara 200–500 kr.</li>
          <li><strong>Jämför trafikskolor.</strong> Prisskillnaden mellan skolor kan vara 200–300 kr per lektion. Ring runt och jämför.</li>
          <li><strong>Undvik att kugga.</strong> Varje omprov kostar 325 kr (teori) eller 800 kr (uppkörning). Var ordentligt förberedd.</li>
          <li><strong>Ta intensivkurs.</strong> Vissa trafikskolor erbjuder paketpriser som är billigare per lektion.</li>
          <li><strong>Boka riskutbildning tidigt.</strong> Priserna kan variera med säsong — sommar och vår är dyast.</li>
        </ol>

        <h2 style={{ color: '#006B3F', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Körkort kostnad per stad (uppskattning 2026)</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.95rem' }}>
          <thead>
            <tr style={{ background: '#e6f4ee' }}>
              <th style={{ textAlign: 'left', padding: '0.6rem 1rem' }}>Stad</th>
              <th style={{ textAlign: 'right', padding: '0.6rem 1rem' }}>Körlektion (40 min)</th>
              <th style={{ textAlign: 'right', padding: '0.6rem 1rem' }}>Total (uppskattat)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { stad: 'Stockholm', lektion: '750–900 kr', total: '22 000–30 000 kr' },
              { stad: 'Göteborg', lektion: '650–800 kr', total: '20 000–27 000 kr' },
              { stad: 'Malmö', lektion: '600–750 kr', total: '18 000–25 000 kr' },
              { stad: 'Uppsala', lektion: '600–750 kr', total: '18 000–24 000 kr' },
              { stad: 'Mindre städer', lektion: '500–650 kr', total: '15 000–20 000 kr' },
            ].map((s) => (
              <tr key={s.stad} style={{ borderBottom: '1px solid #e6f4ee' }}>
                <td style={{ padding: '0.6rem 1rem', fontWeight: 600 }}>{s.stad}</td>
                <td style={{ textAlign: 'right', padding: '0.6rem 1rem' }}>{s.lektion}</td>
                <td style={{ textAlign: 'right', padding: '0.6rem 1rem', color: '#006B3F', fontWeight: 600 }}>{s.total}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={{ color: '#006B3F', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Tidslinje: Steg för steg till körkort</h2>
        <ol style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
          <li><strong>Ansök om körkortstillstånd</strong> (250 kr) — kräver syntest och godkänd foto</li>
          <li><strong>Gå introduktionskurs</strong> (200–400 kr) — krävs för att handledare ska få lära upp dig</li>
          <li><strong>Börja öva</strong> — privat och/eller körlektioner</li>
          <li><strong>Riskutbildning del 1 (Riskettan)</strong> (500–1 500 kr)</li>
          <li><strong>Plugga och gör teoriprovet</strong> (325 kr)</li>
          <li><strong>Riskutbildning del 2 (Risktvåan/Halkbana)</strong> (2 500–4 500 kr)</li>
          <li><strong>Uppkörning</strong> (800 kr)</li>
          <li><strong>Körkort utfärdat!</strong> 🎉</li>
        </ol>

        <div style={{ background: '#e6f4ee', borderRadius: '12px', padding: '1.5rem', marginTop: '2rem' }}>
          <h3 style={{ marginTop: 0, color: '#006B3F' }}>Plugga teori gratis och spara pengar</h3>
          <p style={{ margin: '0 0 1rem' }}>Med Huvet kan du öva på riktiga körkortsfrågor helt gratis — spara pengar på dyra teoripaket.</p>
          <Link href="/korkortsfragor" style={{ background: '#006B3F', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
            Öva gratis →
          </Link>
        </div>

        <nav style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e6f4ee', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/ovningsprov-guide" style={{ color: '#006B3F', textDecoration: 'none' }}>← Övningsprov guide</Link>
          <Link href="/riskettan" style={{ color: '#006B3F', textDecoration: 'none', marginLeft: 'auto' }}>Riskettan →</Link>
        </nav>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link href="/risktvaan" style={{ color: '#006B3F', fontSize: '0.85rem', textDecoration: 'none' }}>Risktvåan</Link>
          <span style={{ color: '#ccc' }}>•</span>
          <Link href="/halkkörning" style={{ color: '#006B3F', fontSize: '0.85rem', textDecoration: 'none' }}>Halkkörning</Link>
          <span style={{ color: '#ccc' }}>•</span>
          <Link href="/uppkorning-tips" style={{ color: '#006B3F', fontSize: '0.85rem', textDecoration: 'none' }}>Uppkörning-tips</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
