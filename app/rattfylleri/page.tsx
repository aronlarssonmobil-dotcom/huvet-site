import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Rattfylleri i Sverige 2026 — Lagar, straff och konsekvenser | Huvet',
  description:
    'Allt om rattfylleri och alkohol i trafiken 2026. Promillegrans 0,2, grovt rattfylleri, straff, korkortsaterkallelse, alkolas och hur alkohol paverkar korningen.',
  keywords: [
    'rattfylleri',
    'rattfylleri straff',
    'promillegrans Sverige',
    'grovt rattfylleri',
    'alkohol korkort',
    'korkortsaterkallelse',
    'alkolas',
    'rattfylleri boter',
    'drograttfylleri',
    'nykterhet trafik',
  ],
  openGraph: {
    title: 'Rattfylleri i Sverige 2026 — Lagar, straff och konsekvenser | Huvet',
    description: 'Promillegrans, straff, korkortsaterkallelse och alkolas — allt du maste veta for korkortsprovet.',
    locale: 'sv_SE',
    type: 'article',
  },
  alternates: { canonical: 'https://huvet.se/rattfylleri' },
};

const straffData = [
  { brott: 'Rattfylleri (0,2–1,0 promille)', straff: 'Boter eller fangelse i hogst 6 man', korkort: 'Aterkallelse 12 man' },
  { brott: 'Grovt rattfylleri (over 1,0 promille)', straff: 'Fangelse i hogst 2 ar', korkort: 'Aterkallelse 24–36 man' },
  { brott: 'Drograttfylleri (narkotika)', straff: 'Boter eller fangelse i hogst 6 man', korkort: 'Aterkallelse 12 man' },
  { brott: 'Grovt drograttfylleri', straff: 'Fangelse i hogst 2 ar', korkort: 'Aterkallelse 24–36 man' },
  { brott: 'Vagran att lamna utandningsprov', straff: 'Boter', korkort: 'Kan leda till aterkallelse' },
];

export default function RattfylleriPage() {
  const faqItems = [
    {
      question: 'Vad ar promillegransen i Sverige?',
      answer:
        'I Sverige ar det olagligt att kora med 0,2 promille eller mer alkohol i blodet. Detta ar en av de lagsta granserna i Europa.',
    },
    {
      question: 'Vad raknas som grovt rattfylleri?',
      answer:
        'Grovt rattfylleri innebar att foraren har minst 1,0 promille alkohol i blodet, eller att korningen inneburit en pataglig fara for trafiksakerheten.',
    },
    {
      question: 'Hur lange mister man korkortet vid rattfylleri?',
      answer:
        'Vid rattfylleri aterkallas korkortet i minst 12 manader. Vid grovt rattfylleri ar sparrtiden 24–36 manader. Du maste sedan ansoka om nytt korkort.',
    },
    {
      question: 'Vad ar ett alkolas?',
      answer:
        'Ett alkolas ar en anordning kopplad till bilens startsystem som kraver att foraren blaer i apparaten. Om alkohol detekteras gar bilen inte att starta. Alkolas kan beviljas som villkorligt alternativ till korkortsaterkallelse.',
    },
    {
      question: 'Galler nolltolerans for narkotika i trafiken?',
      answer:
        'Ja, i Sverige galler nolltolerans for narkotikaklassade preparat i trafiken. Aven sma mangder leder till drograttfylleri.',
    },
    {
      question: 'Hur testas man for rattfylleri?',
      answer:
        'Polisen kan gora ett utandningsprov (sallningsprov) vid vagkontroll. Om det visar positivt tas ett blodprov eller ett bevisandningsprov pa polisstationen, som har hogre bevisvarde.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Inline header */}
      <header style={{ background: 'rgba(255,255,255,0.96)', borderBottom: '1px solid #dceee5', padding: '0 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ width: '36px', height: '36px', background: '#1DB954', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2" />
                <circle cx="10" cy="10" r="2.5" fill="white" />
                <line x1="10" y1="2" x2="10" y2="7.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="3.4" y1="13.5" x2="7.8" y2="11.2" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="16.6" y1="13.5" x2="12.2" y2="11.2" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span style={{ fontSize: '20px', fontWeight: 900, color: '#0d1f17', letterSpacing: '-0.04em' }}>Huvet</span>
          </Link>
          <Link href="/#demo" style={{ background: '#1DB954', color: 'white', padding: '10px 22px', borderRadius: '999px', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}>
            Trana gratis
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '0 1.25rem 4rem' }}>
        <Breadcrumbs items={[{ label: 'Huvet', href: '/' }, { label: 'Rattfylleri' }]} />

        {/* Hero */}
        <section style={{ padding: '2rem 0 2.5rem' }}>
          <div style={{ display: 'inline-block', background: '#fef3cd', color: '#856404', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>
            Viktigt for korkortsprovet
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', fontWeight: 800, lineHeight: 1.12, color: '#0d1f17', marginBottom: '1rem' }}>
            Rattfylleri i Sverige 2026 — lagar, straff och konsekvenser
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1.1rem', color: '#5a6b62', lineHeight: 1.7, maxWidth: '640px' }}>
            Rattfylleri ar ett av de allvarligaste trafikbrotten i Sverige. Har forklarar vi promilleganser, straff, korkortsaterkallelse och alkolasprogrammet — allt du behover veta for bade korkortsprovet och som ansvarsfull forare.
          </p>
        </section>

        {/* Limits & definitions */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', marginBottom: '1.25rem' }}>
            Promillegranser och definitioner
          </h2>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {[
              { grans: '0,2 promille', typ: 'Rattfylleri', beskrivning: 'Redan vid 0,2 promille ar det olagligt att kora. Sverige har en av Europas lagsta granser.', farg: '#f5d020' },
              { grans: '1,0 promille', typ: 'Grovt rattfylleri', beskrivning: 'Eller om korningen utgjort en pataglig fara for trafiksakerheten, oavsett promillehalt.', farg: '#e74c3c' },
              { grans: '0,0 promille', typ: 'Narkotika — nolltolerans', beskrivning: 'Alla narkotikaklassade amnen ar forbjudna. Aven recept­belagda lakemedel kan ge drograttfylleri.', farg: '#e74c3c' },
            ].map((item) => (
              <div key={item.typ} style={{ background: '#f0f7f3', borderRadius: '16px', padding: '1.25rem', border: '1px solid #dceee5', borderLeft: `4px solid ${item.farg}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                  <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1.3rem', fontWeight: 800, color: item.farg === '#f5d020' ? '#856404' : item.farg }}>{item.grans}</span>
                  <span style={{ background: item.farg === '#f5d020' ? '#fef3cd' : '#fde8e8', color: item.farg === '#f5d020' ? '#856404' : '#c0392b', fontSize: '0.75rem', fontWeight: 700, padding: '3px 10px', borderRadius: '999px', textTransform: 'uppercase' }}>{item.typ}</span>
                </div>
                <p style={{ margin: 0, color: '#5a6b62', fontSize: '0.92rem', lineHeight: 1.6, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>{item.beskrivning}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Penalties table */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', marginBottom: '1.25rem' }}>
            Straff vid rattfylleri
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ background: '#e6f4ee' }}>
                  <th style={{ textAlign: 'left', padding: '0.75rem 0.75rem', fontWeight: 700, color: '#0d1f17' }}>Brott</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem 0.75rem', fontWeight: 700, color: '#0d1f17' }}>Straff</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem 0.75rem', fontWeight: 700, color: '#0d1f17' }}>Korkort</th>
                </tr>
              </thead>
              <tbody>
                {straffData.map((row) => (
                  <tr key={row.brott} style={{ borderBottom: '1px solid #dceee5' }}>
                    <td style={{ padding: '0.75rem 0.75rem', fontWeight: 600 }}>{row.brott}</td>
                    <td style={{ padding: '0.75rem 0.75rem' }}>{row.straff}</td>
                    <td style={{ padding: '0.75rem 0.75rem', color: '#1DB954', fontWeight: 600 }}>{row.korkort}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Effects on driving */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', marginBottom: '1.25rem' }}>
            Hur alkohol paverkar korningen
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
            {[
              { effekt: 'Langre reaktionstid', ikon: '⏱️', beskrivning: 'Redan vid 0,2 promille okat reaktionstiden markbart. Vid 0,8 promille ar den fordubblad.' },
              { effekt: 'Samre omdomme', ikon: '🧠', beskrivning: 'Overskattning av egen formaga och okad riskbenogenhet. Foraren tar chanser den inte annars skulle ta.' },
              { effekt: 'Tunnelseende', ikon: '👁️', beskrivning: 'Synfaltet smalnar av. Periferiseendet forsvagas vilket gor det svarare att uppfatta fotgangare och cyklister.' },
              { effekt: 'Samre koordination', ikon: '🖐️', beskrivning: 'Motoriken paverkas — svarare att styra, bromsa och hantera oforutsedda situationer.' },
              { effekt: 'Nedsatt morkerseende', ikon: '🌙', beskrivning: 'Ogonen anpassar sig langsammare till morker och blandning. Sarskilt farligt vid nattkörning.' },
              { effekt: 'Trotthet', ikon: '😴', beskrivning: 'Alkohol forstarker trotthet. Risken for sekundsoömn okar kraftigt, sarskilt pa motorvag.' },
            ].map((item) => (
              <div key={item.effekt} style={{ background: '#f0f7f3', borderRadius: '16px', padding: '1.25rem', border: '1px solid #dceee5' }}>
                <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem' }}>{item.ikon}</span>
                <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1rem', fontWeight: 700, color: '#0d1f17', margin: '0 0 0.4rem' }}>{item.effekt}</h3>
                <p style={{ margin: 0, color: '#5a6b62', fontSize: '0.88rem', lineHeight: 1.5 }}>{item.beskrivning}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Alkolås program */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', marginBottom: '1.25rem' }}>
            Alkolasprogrammet
          </h2>
          <div style={{ background: '#f0f7f3', borderRadius: '16px', padding: '1.5rem', border: '1px solid #dceee5' }}>
            <p style={{ color: '#0d1f17', lineHeight: 1.75, margin: '0 0 1rem', fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
              Om du doms for rattfylleri kan du ansoka om <strong>villkorligt korkort med alkolas</strong> hos Transportstyrelsen. Det innebar att du far kora, men bilen ar utrustad med ett alkolas som maste visa 0,0 promille for att motorn ska starta.
            </p>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', lineHeight: 2, color: '#0d1f17', fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
              <li><strong>Krav:</strong> Lakarintyg, godkand ansökan hos Transportstyrelsen.</li>
              <li><strong>Tid:</strong> Alkolaset kraves under hela sparrtiden (vanligtvis 1–2 ar).</li>
              <li><strong>Kostnad:</strong> Du bekostar sjalv installation och kontroller (ca 1 000–1 500 kr/man).</li>
              <li><strong>Kontroll:</strong> Regelbunden service och kalibrering av alkolaset.</li>
              <li><strong>Regler:</strong> Om alkolaset registrerar forsok att kora paverkad kan tillstandet aterkallas.</li>
            </ul>
          </div>
        </section>

        {/* Blood test vs breath test */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', marginBottom: '1.25rem' }}>
            Utandningsprov och blodprov
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            <div style={{ background: '#fff', borderRadius: '16px', padding: '1.25rem', border: '1px solid #dceee5' }}>
              <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1.05rem', fontWeight: 700, color: '#1DB954', margin: '0 0 0.5rem' }}>
                Utandningsprov (sallning)
              </h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 1.9, color: '#5a6b62', fontSize: '0.92rem' }}>
                <li>Polisen kan stoppaa dig nar som helst for ett utandningsprov.</li>
                <li>Ger ett omedelbart preliminart resultat.</li>
                <li>Du ar skyldig att medverka — vagran kan leda till boter.</li>
              </ul>
            </div>
            <div style={{ background: '#fff', borderRadius: '16px', padding: '1.25rem', border: '1px solid #dceee5' }}>
              <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1.05rem', fontWeight: 700, color: '#1DB954', margin: '0 0 0.5rem' }}>
                Blodprov / bevisandning
              </h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 1.9, color: '#5a6b62', fontSize: '0.92rem' }}>
                <li>Tas pa polisstationen efter positivt sallningsprov.</li>
                <li>Har hogre bevisvarde och anvands i rattegang.</li>
                <li>Blodprov kan aven visa narkotika och lakemedel.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', marginBottom: '1.25rem' }}>
            Vanliga fragor om rattfylleri
          </h2>
          <div>
            {faqItems.map((item) => (
              <div key={item.question} style={{ borderBottom: '1px solid #dceee5', padding: '1.25rem 0' }}>
                <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1.05rem', fontWeight: 700, color: '#0d1f17', margin: '0 0 0.5rem' }}>
                  {item.question}
                </h3>
                <p style={{ margin: 0, color: '#5a6b62', lineHeight: 1.65, fontSize: '0.95rem' }}>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#e6f4ee', borderRadius: '18px', padding: '2rem', marginBottom: '2.5rem', textAlign: 'center' }}>
          <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 800, color: '#0d1f17', marginTop: 0, marginBottom: '0.75rem' }}>
            Ova pa fragor om alkohol och trafik
          </h3>
          <p style={{ color: '#5a6b62', marginBottom: '1.25rem', fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
            Testa dina kunskaper med riktiga korkorsfragor om rattfylleri och trafiksakerhet.
          </p>
          <Link href="/korkortsfragor" style={{ display: 'inline-block', background: '#1DB954', color: '#fff', padding: '0.85rem 2rem', borderRadius: '999px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem', fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
            Starta ovning →
          </Link>
        </section>

        <RelatedGuides currentPath="/rattfylleri" />
      </main>

      {/* Footer */}
      <footer style={{ background: '#0d1f17', color: '#a3b5ab', padding: '3rem 1.25rem 2rem', fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 900, fontSize: '1.2rem', letterSpacing: '-0.04em' }}>Huvet</Link>
          <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', color: '#5a6b62' }}>Sveriges smartaste forberedelse for korkortsprovet.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1rem', fontSize: '0.85rem' }}>
            <Link href="/teoriprov" style={{ color: '#a3b5ab', textDecoration: 'none' }}>Teoriprov</Link>
            <Link href="/vagmarken" style={{ color: '#a3b5ab', textDecoration: 'none' }}>Vagmarken</Link>
            <Link href="/trafikregler" style={{ color: '#a3b5ab', textDecoration: 'none' }}>Trafikregler</Link>
            <Link href="/parkering" style={{ color: '#a3b5ab', textDecoration: 'none' }}>Parkering</Link>
          </div>
          <p style={{ fontSize: '0.75rem', color: '#5a6b62', marginTop: '2rem' }}>&copy; 2026 Huvet. Alla rattigheter forbehallna.</p>
        </div>
      </footer>
    </>
  );
}
