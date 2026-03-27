import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Riskettan 2026 — Allt om riskutbildning del 1 | Huvet',
  description: 'Komplett guide om Riskettan (riskutbildning del 1). Vad ingår, hur lång tid tar den, vad kostar den och vad behöver du kunna? Förbered dig inför körkort 2026.',
  keywords: ['riskettan', 'riskutbildning del 1', 'risk 1 körkort', 'riskettan pris', 'riskettan vad ingår', 'riskettan online', 'riskutbildning körkort 2026'],
  openGraph: {
    title: 'Riskettan 2026 — Guide till riskutbildning del 1 | Huvet',
    description: 'Allt du behöver veta om Riskettan: innehåll, pris, längd och tips.',
  },
};

export default function RiskettanPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Vad är Riskettan?', acceptedAnswer: { '@type': 'Answer', text: 'Riskettan (riskutbildning del 1) är en obligatorisk kurs om alkohol, droger och trötthet i trafiken. Den måste genomföras innan du får göra teoriprovet.' } },
      { '@type': 'Question', name: 'Hur lång är Riskettan?', acceptedAnswer: { '@type': 'Answer', text: 'Riskettan är cirka 3 timmar lång. Den kan genomföras fysiskt på en trafikskola eller online via godkänd leverantör.' } },
      { '@type': 'Question', name: 'Vad kostar Riskettan 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Riskettan kostar mellan 500 och 1 500 kr beroende på leverantör och om du gör den online eller på plats. Onlinekurser brukar vara billigast (500–800 kr).' } },
      { '@type': 'Question', name: 'Kan man göra Riskettan online?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, sedan 2020 är det möjligt att genomföra Riskettan online. Kursen måste dock vara godkänd av Transportstyrelsen. Kontrollera att leverantören är certifierad.' } },
      { '@type': 'Question', name: 'När ska man göra Riskettan?', acceptedAnswer: { '@type': 'Answer', text: 'Riskettan måste vara genomförd INNAN du bokar teoriprovet. De flesta gör den i början av körkortsutbildningen. Du måste vara minst 16 år.' } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ background: '#006B3F', height: '64px' }}><SiteHeader /></div>
      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '2rem 1.25rem 4rem', color: '#0d1f17' }}>
        <nav style={{ fontSize: '0.8rem', color: '#555', marginBottom: '1.5rem' }}>
          <Link href="/" style={{ color: '#006B3F', textDecoration: 'none' }}>Huvet</Link> › <Link href="/riskutbildning" style={{ color: '#006B3F', textDecoration: 'none' }}>Riskutbildning</Link> › Riskettan
        </nav>

        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '0.75rem' }}>
          Riskettan — Allt om riskutbildning del 1 (2026)
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: '2rem' }}>
          Riskettan är den första av två obligatoriska riskutbildningar du måste genomföra för att ta B-körkort i Sverige. Den fokuserar på hur alkohol, droger och trötthet påverkar din körförmåga — och konsekvenserna av att köra påverkad. Här berättar vi allt du behöver veta innan, under och efter kursen.
        </p>

        <div style={{ background: '#e6f4ee', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem' }}>
          <strong style={{ color: '#006B3F' }}>📋 Snabbfakta om Riskettan</strong>
          <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', lineHeight: 2, color: '#333' }}>
            <li><strong>Längd:</strong> Cirka 3 timmar</li>
            <li><strong>Pris:</strong> 500–1 500 kr</li>
            <li><strong>Format:</strong> Fysiskt på trafikskola eller online</li>
            <li><strong>Ålder:</strong> Minst 16 år</li>
            <li><strong>Krav:</strong> Måste genomföras innan teoriprovet</li>
            <li><strong>Giltighetstid:</strong> 5 år</li>
          </ul>
        </div>

        <h2 style={{ color: '#006B3F', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Vad handlar Riskettan om?</h2>
        <p style={{ lineHeight: 1.8, color: '#333' }}>
          Riskettan fokuserar på tre huvudområden som alla kopplar till risk i trafiken:
        </p>
        <ul style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
          <li><strong>Alkohol:</strong> Hur alkohol påverkar reaktionsförmåga, omdöme och syn. Vad rattfylleri innebär juridiskt. Konsekvenser av att köra berusad — för dig, för andra.</li>
          <li><strong>Droger:</strong> Nolltolerans i Sverige. Hur olika droger påverkar körförmågan. Mediciner som kan påverka körning.</li>
          <li><strong>Trötthet:</strong> Varför trötthet är lika farligt som alkohol. Tecken på att du är för trött att köra. Hur du förebygger trötthetsrelaterade olyckor.</li>
        </ul>

        <h2 style={{ color: '#006B3F', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Hur går kursen till?</h2>
        <p style={{ lineHeight: 1.8, color: '#333' }}>
          Riskettan är en <strong>teoretisk kurs</strong> — det innebär att du sitter och lyssnar, diskuterar och ibland deltar i övningar. Det finns inget praktiskt moment (det kommer i Risktvåan). Kursen leds av en utbildare och inkluderar ofta:
        </p>
        <ul style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
          <li>Föreläsning om alkoholens och drogers effekter</li>
          <li>Filmvisning med verkliga olycksscenarier</li>
          <li>Gruppdiskussioner om attityder och risker</li>
          <li>Genomgång av lagstiftningen kring rattfylleri</li>
          <li>Quiz eller kunskapstest (inte betygsatt, men aktivt deltagande krävs)</li>
        </ul>

        <h2 style={{ color: '#006B3F', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Riskettan online vs på plats</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.95rem' }}>
          <thead>
            <tr style={{ background: '#e6f4ee' }}>
              <th style={{ textAlign: 'left', padding: '0.6rem 1rem' }}></th>
              <th style={{ textAlign: 'center', padding: '0.6rem 1rem' }}>Online</th>
              <th style={{ textAlign: 'center', padding: '0.6rem 1rem' }}>På plats</th>
            </tr>
          </thead>
          <tbody>
            {[
              { falt: 'Pris', online: '500–800 kr', plats: '800–1 500 kr' },
              { falt: 'Tid', online: '~3 timmar', plats: '~3 timmar' },
              { falt: 'Flexibilitet', online: 'Gör när du vill', plats: 'Schemalagd tid' },
              { falt: 'Interaktion', online: 'Chat/video', plats: 'Fysisk diskussion' },
              { falt: 'Intyg', online: 'Digitalt direkt', plats: 'Digitalt/papper' },
            ].map((r) => (
              <tr key={r.falt} style={{ borderBottom: '1px solid #e6f4ee' }}>
                <td style={{ padding: '0.6rem 1rem', fontWeight: 600 }}>{r.falt}</td>
                <td style={{ textAlign: 'center', padding: '0.6rem 1rem' }}>{r.online}</td>
                <td style={{ textAlign: 'center', padding: '0.6rem 1rem' }}>{r.plats}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={{ color: '#006B3F', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Tips inför Riskettan</h2>
        <ol style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
          <li><strong>Gör den tidigt i utbildningen.</strong> Du behöver den innan teoriprovet — vänta inte till sista sekunden.</li>
          <li><strong>Välj online om du vill spara pengar.</strong> Samma innehåll, lägre pris.</li>
          <li><strong>Var aktiv under kursen.</strong> Du måste delta aktivt för att bli godkänd — sova dig igenom funkar inte.</li>
          <li><strong>Kolla att leverantören är Transportstyrelsen-godkänd.</strong> Annars räknas inte intyget.</li>
          <li><strong>Spara intyget.</strong> Du behöver det när du bokar teoriprovet. Det gäller i 5 år.</li>
        </ol>

        <h2 style={{ color: '#006B3F', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Vad händer efter Riskettan?</h2>
        <p style={{ lineHeight: 1.8, color: '#333' }}>
          Efter godkänd Riskettan kan du <strong>boka och göra teoriprovet</strong>. Nästa steg i riskutbildningen är <strong>Risktvåan (del 2)</strong> som inkluderar praktisk halkbanekörning. Risktvåan behöver du genomföra innan uppkörningen.
        </p>

        <div style={{ background: '#e6f4ee', borderRadius: '12px', padding: '1.5rem', marginTop: '2rem' }}>
          <h3 style={{ marginTop: 0, color: '#006B3F' }}>Förberedd för teoriprovet?</h3>
          <p style={{ margin: '0 0 1rem' }}>Efter Riskettan är nästa steg att klara teoriprovet. Öva med riktiga körkortsfrågor.</p>
          <Link href="/korkortsfragor" style={{ background: '#006B3F', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
            Öva inför teoriprovet →
          </Link>
        </div>

        <nav style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e6f4ee', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/korkort-kostnad-guide" style={{ color: '#006B3F', textDecoration: 'none' }}>← Körkort kostnad</Link>
          <Link href="/risktvaan" style={{ color: '#006B3F', textDecoration: 'none', marginLeft: 'auto' }}>Risktvåan →</Link>
        </nav>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link href="/halkkörning" style={{ color: '#006B3F', fontSize: '0.85rem', textDecoration: 'none' }}>Halkkörning</Link>
          <span style={{ color: '#ccc' }}>•</span>
          <Link href="/teoriprov-tips" style={{ color: '#006B3F', fontSize: '0.85rem', textDecoration: 'none' }}>Teoriprov-tips</Link>
          <span style={{ color: '#ccc' }}>•</span>
          <Link href="/ovningsprov-guide" style={{ color: '#006B3F', fontSize: '0.85rem', textDecoration: 'none' }}>Övningsprov-guide</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
