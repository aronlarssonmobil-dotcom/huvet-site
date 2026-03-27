import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Parkeringsregler 2026 — Komplett guide for korkortsprovet | Huvet',
  description:
    'Alla parkeringsregler du behover kunna for korkortsprovet 2026. P-forbud, datumparkering, 24-timmarsregeln, boter och vanliga misstag.',
  keywords: [
    'parkeringsregler',
    'parkeringsregler Sverige',
    'parkering korkort',
    'datumparkering',
    'P-forbud',
    'parkeringsboter',
    'parkering korsning',
    'p-skiva',
    'parkeringsregler 2026',
  ],
  openGraph: {
    title: 'Parkeringsregler 2026 — Komplett guide | Huvet',
    description: 'Alla parkeringsregler for korkortsprovet 2026. P-forbud, datumparkering, boter och vanliga misstag.',
    locale: 'sv_SE',
    type: 'article',
  },
  alternates: { canonical: 'https://huvet.se/parkering' },
};

const boterData = [
  { overtrattelse: 'Parkering mot P-forbudsskylt', belopp: '800 kr' },
  { overtrattelse: 'Parkering narmre an 10 m fran korsning', belopp: '800 kr' },
  { overtrattelse: 'Parkering narmre an 10 m fran overgangsstalle', belopp: '800 kr' },
  { overtrattelse: 'Parkering pa handikappplats utan tillstand', belopp: '1 300 kr' },
  { overtrattelse: 'Parkering vid busshallplats', belopp: '800 kr' },
  { overtrattelse: 'Overtid vid P-skiva / P-automat', belopp: '500 kr' },
  { overtrattelse: 'Stannande / parkering mot gul heldragen linje', belopp: '800 kr' },
  { overtrattelse: 'Felparkering i zon med datumparkering', belopp: '800 kr' },
];

export default function ParkeringPage() {
  const faqItems = [
    {
      question: 'Hur nara en korsning far man parkera?',
      answer:
        'Du far inte parkera narmre an 10 meter fran en korsning. Detta galler fran korsningens ytterkant och ar till for att sakerstalla fri sikt for alla trafikanter.',
    },
    {
      question: 'Vad ar datumparkering?',
      answer:
        'Datumparkering innebar att parkering tillats pa den sida av gatan som har jamma husnummer pa jamma datum, och udda husnummer pa udda datum. Byte sker kl 00:00.',
    },
    {
      question: 'Hur lange far man sta parkerad pa samma plats?',
      answer:
        '24-timmarsregeln innebar att du inte far parkera pa samma plats i mer an 24 timmar i strack pa vardagar, om inte annat framgar av vagmarke.',
    },
    {
      question: 'Vad ar skillnaden mellan stannande och parkering?',
      answer:
        'Stannande ar ett kort uppehall pa hogst tre minuter dar foraren stannar kvar i eller vid fordonet. Parkering ar allt darutover — aven om foraren sitter kvar i bilen.',
    },
    {
      question: 'Far man parkera vid en busshallplats?',
      answer:
        'Nej, parkering ar forbjuden inom hela busshallplatsomradet. Stannande (under 3 minuter) ar tillatet om du inte hindrar busstrafiken.',
    },
    {
      question: 'Vad innebar en p-skiva?',
      answer:
        'En p-skiva visar nar du borjade parkera. Du staller in ankomsttiden och placerar skivan synligt i framrutan. Den anvands dar skyltar anger tidsbegransad parkering med p-skiva.',
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
        <Breadcrumbs items={[{ label: 'Huvet', href: '/' }, { label: 'Parkeringsregler' }]} />

        {/* Hero */}
        <section style={{ padding: '2rem 0 2.5rem' }}>
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#1DB954', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>
            Teoriprovet 2026
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', fontWeight: 800, lineHeight: 1.12, color: '#0d1f17', marginBottom: '1rem' }}>
            Parkeringsregler i Sverige 2026
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1.1rem', color: '#5a6b62', lineHeight: 1.7, maxWidth: '640px' }}>
            Parkering ar ett av de vanligaste omradena pa korkortsprovet. Har gar vi igenom alla regler du maste kunna — fran avstand till korsningar och overgangsstallen till datumparkering och p-skiva.
          </p>
        </section>

        {/* Rules overview */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', marginBottom: '1.25rem' }}>
            Grundregler for parkering
          </h2>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {[
              { regel: 'Minst 10 meter fran korsning', ikon: '🔀', detalj: 'Mats fran korsningens ytterkant. Galler bade fore och efter.' },
              { regel: 'Minst 10 meter fran overgangsstalle', ikon: '🚶', detalj: 'Galler aven fran en cykelpassage. Sakrar fri sikt for gaende.' },
              { regel: '24-timmarsregeln', ikon: '⏰', detalj: 'Pa vardagar far du inte sta parkerad mer an 24 timmar i strack pa samma plats.' },
              { regel: 'Datumparkering', ikon: '📅', detalj: 'Jamma sida pa jamma datum, udda sida pa udda datum. Byte vid midnatt.' },
              { regel: 'Stannande vs parkering', ikon: '⏱️', detalj: 'Stannande = max 3 minuter och foraren ar kvar. Allt darutover = parkering.' },
              { regel: 'Gul heldragen kantlinje', ikon: '🟡', detalj: 'Bade stannande och parkering ar forbjudet.' },
              { regel: 'Gul streckad kantlinje', ikon: '🟨', detalj: 'Stannande tillatet, men parkering ar forbjudet.' },
            ].map((item) => (
              <div key={item.regel} style={{ background: '#f0f7f3', borderRadius: '16px', padding: '1.25rem', border: '1px solid #dceee5' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '1.4rem' }}>{item.ikon}</span>
                  <strong style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1rem', color: '#0d1f17' }}>{item.regel}</strong>
                </div>
                <p style={{ margin: 0, color: '#5a6b62', fontSize: '0.92rem', lineHeight: 1.6, paddingLeft: '2.4rem' }}>{item.detalj}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Signs explained */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', marginBottom: '1.25rem' }}>
            Parkeringsskyltar du maste kunna
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {[
              { skylt: 'P-forbudsskylt', beskrivning: 'Rund skylt med rod kant och bla bakgrund med rod diagonal linje. Parkering forbjuden.', symbol: '🚫' },
              { skylt: 'Stannande forbjudet', beskrivning: 'Rund skylt med rod kant, bla bakgrund och rott kryss. Bade stannande och parkering forbjudet.', symbol: '⛔' },
              { skylt: 'P-skylt (bla)', beskrivning: 'Bla skylt med vitt P. Parkering tillaten — kontrollera tillaggsskyltar for villkor.', symbol: '🅿️' },
              { skylt: 'P-skylt med tillagg', beskrivning: 'Tillaggsskyltar anger tidsbegransning, p-skiva-krav eller vilka dagar som galler.', symbol: '📋' },
              { skylt: 'Zon-skylt for parkering', beskrivning: 'Anger att parkeringsregler galler i ett helt omrade. Slutskylt markerar zonens slut.', symbol: '🔶' },
              { skylt: 'Handikapp-skylt', beskrivning: 'Bla skylt med rullstolssymbol. Krav pa giltigt parkeringstillstand for rorelsehindrade.', symbol: '♿' },
            ].map((item) => (
              <div key={item.skylt} style={{ background: '#fff', borderRadius: '16px', padding: '1.25rem', border: '1px solid #dceee5' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.symbol}</div>
                <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1rem', fontWeight: 700, color: '#1DB954', margin: '0 0 0.4rem' }}>{item.skylt}</h3>
                <p style={{ margin: 0, color: '#5a6b62', fontSize: '0.9rem', lineHeight: 1.5 }}>{item.beskrivning}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Common mistakes */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', marginBottom: '1.25rem' }}>
            Vanliga misstag vid parkering
          </h2>
          <div style={{ background: '#f0f7f3', borderRadius: '16px', padding: '1.5rem', border: '1px solid #dceee5' }}>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', lineHeight: 2, color: '#0d1f17', fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
              <li>Parkera for nara en korsning — manga uppskattar 10 meter fel.</li>
              <li>Glomma att flytta bilen vid datumparkering — byte sker vid midnatt.</li>
              <li>Parkera pa handikappplats &quot;bara en stund&quot; — ger hoga boter oavsett tid.</li>
              <li>Missforsta skillnaden mellan stannande och parkering.</li>
              <li>Parkera vid busshallplats och tro att det ar okej nar ingen buss syns.</li>
              <li>Glomma att stalla in p-skivan korrekt pa tidsbegransade platser.</li>
              <li>Parkera pa trottoar eller gangbana utan sarskilt tillstand.</li>
              <li>Parkera i garage utan att notera maxhojd eller tidsgrans.</li>
            </ul>
          </div>
        </section>

        {/* Garage rules */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', marginBottom: '1.25rem' }}>
            Parkering i garage
          </h2>
          <ul style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#0d1f17', fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
            <li>Kontrollera alltid maxhojd innan du kor in — skador tacks inte av forsakringen om du kor in trots varning.</li>
            <li>Folj pilmarkeringar och hastighetsgranser inne i garaget (vanligtvis 10-20 km/h).</li>
            <li>Hor- och synbarhet ar begransad — kor extra forsiktigt vid svangare.</li>
            <li>Parkera alltid inom markeringarna och lamna tillrackligt utrymme for intilliggande bilar.</li>
            <li>Stang av motorn direkt — det ar forbjudet att lamna motorn pa tomgang i ett garage.</li>
          </ul>
        </section>

        {/* Fines table */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', marginBottom: '1.25rem' }}>
            Parkeringsboter — vad kostar det?
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#e6f4ee' }}>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem', fontWeight: 700, color: '#0d1f17' }}>Overtrattelse</th>
                  <th style={{ textAlign: 'right', padding: '0.75rem 1rem', fontWeight: 700, color: '#0d1f17' }}>Belopp</th>
                </tr>
              </thead>
              <tbody>
                {boterData.map((row) => (
                  <tr key={row.overtrattelse} style={{ borderBottom: '1px solid #dceee5' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>{row.overtrattelse}</td>
                    <td style={{ textAlign: 'right', padding: '0.75rem 1rem', fontWeight: 700, color: '#1DB954' }}>{row.belopp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#5a6b62', marginTop: '0.75rem', fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
            Beloppen ar ungefaerliga och kan variera mellan kommuner. Kontrollera alltid lokala regler.
          </p>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', marginBottom: '1.25rem' }}>
            Vanliga fragor om parkeringsregler
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
            Testa dina kunskaper om parkering
          </h3>
          <p style={{ color: '#5a6b62', marginBottom: '1.25rem', fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
            Ova pa riktiga korkorsfragor om parkeringsregler och vagmarken.
          </p>
          <Link href="/korkortsfragor" style={{ display: 'inline-block', background: '#1DB954', color: '#fff', padding: '0.85rem 2rem', borderRadius: '999px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem', fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
            Starta ovning →
          </Link>
        </section>

        <RelatedGuides currentPath="/parkering" />
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
            <Link href="/rattfylleri" style={{ color: '#a3b5ab', textDecoration: 'none' }}>Rattfylleri</Link>
          </div>
          <p style={{ fontSize: '0.75rem', color: '#5a6b62', marginTop: '2rem' }}>&copy; 2026 Huvet. Alla rattigheter forbehallna.</p>
        </div>
      </footer>
    </>
  );
}
