import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Ta körkort som privatist 2026 – guide, kostnad & steg | Huvet',
  description:
    'Komplett guide till att ta körkort som privatist i Sverige 2026. Jämför kostnad mot trafikskola, krav på handledare, steg-för-steg-process och hur du bokar prov.',
  keywords: [
    'ta körkort som privatist',
    'privatist körkort',
    'körkort utan trafikskola',
    'privat övningskörning körkort',
    'körkort privatist kostnad',
    'handledare körkort',
    'privat körkort steg',
    'körkort billigt',
    'privatist vs trafikskola',
  ],
  alternates: { canonical: 'https://huvet.se/privatist' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad innebär det att ta körkort som privatist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Att ta körkort som privatist innebär att du övningskör privat med en godkänd handledare istället för att gå på trafikskola. Du pluggar teori på egen hand, bokar riskutbildning separat och gör proven direkt hos Trafikverket.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur mycket kostar det att ta körkort som privatist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Att ta körkort som privatist kostar cirka 5 000–10 000 kr totalt (2026). Det inkluderar körkortstillstånd (250 kr), riskutbildning (ca 2 000–4 000 kr), teoriprov (325 kr), körprov (800 kr), och bränsle/försäkring. Jämfört med trafikskola (15 000–25 000 kr) sparar du mycket.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka krav finns på en handledare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Handledaren måste vara minst 24 år gammal, ha haft B-körkort i minst 5 år sammanhängande, ha ett godkänt handledarskap registrerat hos Transportstyrelsen, och får inte ha något återkallat körkort under de senaste 5 åren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Måste man gå på trafikskola alls som privatist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nej, du behöver inte gå på trafikskola, men du måste genomföra riskutbildning del 1 (riskettan) och del 2 (halka) hos en godkänd utbildningsanordnare. Dessa är obligatoriska oavsett om du är privatist eller går på trafikskola.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur bokar man prov som privatist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Du bokar teoriprov och körprov direkt hos Trafikverket via deras webbplats (trafikverket.se). Logga in med BankID, välj provcentra, datum och tid. Du behöver inte gå via en trafikskola för att boka.',
      },
    },
  ],
};

const facts = [
  { label: '5 000–10 000 kr', sub: 'total kostnad privatist', icon: '💰' },
  { label: '15 000–25 000 kr', sub: 'total kostnad trafikskola', icon: '🏫' },
  { label: '24 år', sub: 'miniålder handledare', icon: '👤' },
  { label: '5 år', sub: 'körkort krävs handledare', icon: '📋' },
];

const processSteps = [
  {
    step: '1',
    title: 'Ansök om körkortstillstånd',
    text: 'Ansök hos Transportstyrelsen via deras webbplats. Du behöver ha fyllt 16 år (för att börja övningsköra) och klara en synundersökning. Körkortstillståndet kostar 250 kr och gäller i 5 år.',
  },
  {
    step: '2',
    title: 'Registrera handledare',
    text: 'Din handledare (förälder, släkting eller vän) ansöker om handledarskap via Transportstyrelsen. Handledaren måste ha haft B-körkort i minst 5 år och vara minst 24 år. Handledarskapet kostar 170 kr.',
  },
  {
    step: '3',
    title: 'Introducerande utbildning',
    text: 'Både du och din handledare måste genomföra en introduktionskurs (3 timmar) hos en trafikskola innan ni börjar övningsköra. Detta är obligatoriskt och kostar ca 300–600 kr.',
  },
  {
    step: '4',
    title: 'Övningsköra privat',
    text: 'Öva i trafiken med din handledare. Sikta på minst 100 timmar körning i varierande situationer: stad, landsväg, motorväg, mörker, regn. Bilen behöver övningskörningsskylt och handledaren ska sitta bredvid.',
  },
  {
    step: '5',
    title: 'Plugga teori',
    text: 'Studera trafikteori på egen hand med Huvet, böcker eller appar. Täck alla ämnen: trafikregler, vägmärken, hastigheter, miljö, fordon och säkerhet. Gör övningsprov tills du klarar 55+ av 65.',
  },
  {
    step: '6',
    title: 'Genomför riskutbildning',
    text: 'Boka och genomför Risk 1 (riskettan, ca 3-4 timmar) och Risk 2 (halkbanan, ca 3-4 timmar) hos en godkänd anordnare. Dessa är obligatoriska och kostar ca 2 000–4 000 kr totalt.',
  },
  {
    step: '7',
    title: 'Gör teoriprov',
    text: 'Boka och gör teoriprovet hos Trafikverket. 65 frågor, 50 minuter, minst 52 rätt (80%) för godkänt. Kostar 325 kr. Du måste ha fyllt 18 år.',
  },
  {
    step: '8',
    title: 'Gör körprov (uppkörning)',
    text: 'Boka och gör körprovet hos Trafikverket inom 4 månader efter godkänt teoriprov. Kostar 800 kr. Du kör med en förrättare i ca 45 minuter i varierande trafikmiljöer.',
  },
];

const comparisonData = [
  { category: 'Total kostnad', privatist: '5 000–10 000 kr', trafikskola: '15 000–25 000 kr' },
  { category: 'Körlektioner', privatist: 'Privat med handledare', trafikskola: 'Med trafiklärare' },
  { category: 'Teori', privatist: 'Självstudier (Huvet)', trafikskola: 'Lärarledd + material' },
  { category: 'Flexibilitet', privatist: 'Helt i din takt', trafikskola: 'Schema & bokningar' },
  { category: 'Riskutbildning', privatist: 'Bokas separat', trafikskola: 'Ingår ofta' },
  { category: 'Provbokning', privatist: 'Du bokar själv', trafikskola: 'Skolan hjälper' },
  { category: 'Godkäntgrad', privatist: 'Kräver disciplin', trafikskola: 'Mer struktur' },
  { category: 'Tidsåtgång', privatist: '3–12 månader', trafikskola: '3–6 månader' },
];

export default function PrivatistPage() {
  return (
    <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", background: '#fff', minHeight: '100vh', color: '#0d1f17' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      {/* Header */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #dceee5', padding: '0 20px',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ width: '36px', height: '36px', background: '#1DB954', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2"/>
                <circle cx="10" cy="10" r="2.5" fill="white"/>
                <line x1="10" y1="2" x2="10" y2="7.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3.4" y1="13.5" x2="7.8" y2="11.2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="16.6" y1="13.5" x2="12.2" y2="11.2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span style={{ fontSize: '20px', fontWeight: '900', color: '#0d1f17', letterSpacing: '-0.04em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Huvet</span>
          </Link>
          <Link href="/#demo" style={{ background: '#1DB954', color: 'white', padding: '10px 22px', borderRadius: '999px', fontSize: '14px', fontWeight: '700', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Träna gratis
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #f0f7f3 0%, #fff 60%)', padding: '64px 20px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Breadcrumbs items={[
            { label: 'Hem', href: '/' },
            { label: 'Ta körkort som privatist' },
          ]} />
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#1DB954', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>
            Privatist 2026
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: '900', lineHeight: '1.08', color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.04em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Ta körkort som privatist — komplett guide
          </h1>
          <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#5a6b62', maxWidth: '620px', margin: '0 0 40px' }}>
            Att ta körkort som privatist innebär att du övningskör privat med en handledare istället för att gå på trafikskola. Du kan spara 10 000–15 000 kr jämfört med traditionell trafikskola. Här får du hela processen steg för steg.
          </p>

          {/* Facts grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px', marginBottom: '48px' }}>
            {facts.map((f) => (
              <div key={f.label} style={{ background: 'white', border: '2px solid #dceee5', borderRadius: '16px', padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{f.icon}</div>
                <div style={{ fontSize: '17px', fontWeight: '900', color: '#1DB954', lineHeight: 1.2 }}>{f.label}</div>
                <div style={{ fontSize: '12px', color: '#5a6b62', marginTop: '4px' }}>{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section style={{ background: '#fff', padding: '0 20px 80px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>

          {/* Section: Vad innebär privatist */}
          <div style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid #dceee5' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: '800', color: '#0d1f17', margin: '0 0 16px', letterSpacing: '-0.02em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Vad innebär det att ta körkort som privatist?
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 12px' }}>
              Som privatist tar du körkort utan att gå en traditionell kurs på trafikskola. Istället övningskör du med en privat handledare (ofta en förälder eller nära anhörig) och pluggar teori på egen hand. Du gör sedan proven direkt hos Trafikverket.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 12px' }}>
              Det enda obligatoriska momentet utöver proven är riskutbildningen (Risk 1 och Risk 2), som du måste genomföra hos en godkänd anordnare oavsett om du kör privat eller via trafikskola.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 12px' }}>
              Många väljer privatistvägen för att spara pengar, ha större flexibilitet i planeringen eller för att de föredrar att lära sig i sin egen takt. Det kräver dock mer eget ansvar och disciplin jämfört med att ha en trafiklärare som guidar processen.
            </p>
          </div>

          {/* Section: Krav på handledare */}
          <div style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid #dceee5' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: '800', color: '#0d1f17', margin: '0 0 16px', letterSpacing: '-0.02em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Krav på handledare för privat övningskörning
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 16px' }}>
              Inte vem som helst kan vara handledare. Transportstyrelsen ställer tydliga krav:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
              {[
                'Minst 24 år gammal',
                'Haft B-körkort i minst 5 år sammanhängande',
                'Inget återkallat körkort de senaste 5 åren',
                'Godkänt handledarskap registrerat hos Transportstyrelsen',
                'Genomfört introduktionskurs (3 timmar) tillsammans med eleven',
              ].map((req) => (
                <div key={req} style={{ display: 'flex', gap: '10px', alignItems: 'center', padding: '12px 16px', background: '#f0f7f3', borderRadius: '12px' }}>
                  <div style={{ minWidth: '24px', height: '24px', background: '#1DB954', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: '800' }}>✓</div>
                  <span style={{ fontSize: '15px', color: '#0d1f17' }}>{req}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 12px' }}>
              Handledarskapet kostar 170 kr att ansöka om och gäller tills körkortstillståndet löper ut (upp till 5 år). En person kan vara handledare åt flera elever samtidigt.
            </p>
          </div>

          {/* Section: Steg för steg */}
          <div style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid #dceee5' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: '800', color: '#0d1f17', margin: '0 0 16px', letterSpacing: '-0.02em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Steg-för-steg: ta körkort som privatist
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 24px' }}>
              Följ dessa 8 steg för att ta B-körkort som privatist:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {processSteps.map((s) => (
                <div key={s.step} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ minWidth: '40px', height: '40px', background: '#f5d020', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '18px', color: '#0d1f17' }}>
                    {s.step}
                  </div>
                  <div>
                    <div style={{ fontWeight: '800', color: '#0d1f17', marginBottom: '4px', fontSize: '16px' }}>{s.title}</div>
                    <p style={{ fontSize: '15px', color: '#5a6b62', margin: 0, lineHeight: '1.65' }}>{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Jämförelsetabell */}
          <div style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid #dceee5' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: '800', color: '#0d1f17', margin: '0 0 16px', letterSpacing: '-0.02em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Privatist vs trafikskola — jämförelse
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 20px' }}>
              Här ser du en direkt jämförelse mellan att ta körkort som privatist och via trafikskola:
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, border: '2px solid #dceee5', borderRadius: '16px', overflow: 'hidden', fontSize: '15px' }}>
                <thead>
                  <tr style={{ background: '#1DB954', color: 'white' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: '700' }}>Kategori</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: '700' }}>Privatist</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: '700' }}>Trafikskola</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={row.category} style={{ background: i % 2 === 0 ? '#f0f7f3' : 'white' }}>
                      <td style={{ padding: '12px 16px', fontWeight: '700', color: '#0d1f17', borderTop: '1px solid #dceee5' }}>{row.category}</td>
                      <td style={{ padding: '12px 16px', color: '#1DB954', fontWeight: '600', borderTop: '1px solid #dceee5' }}>{row.privatist}</td>
                      <td style={{ padding: '12px 16px', color: '#5a6b62', borderTop: '1px solid #dceee5' }}>{row.trafikskola}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section: Fördelar & nackdelar */}
          <div style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid #dceee5' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: '800', color: '#0d1f17', margin: '0 0 16px', letterSpacing: '-0.02em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Fördelar och nackdelar med privatistvägen
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              <div style={{ background: '#f0f7f3', border: '2px solid #dceee5', borderRadius: '16px', padding: '24px' }}>
                <div style={{ fontWeight: '800', color: '#1DB954', fontSize: '18px', marginBottom: '16px' }}>Fördelar</div>
                {[
                  'Mycket lägre kostnad (spara 10 000–15 000 kr)',
                  'Flexibilitet — kör när det passar dig',
                  'Lär i din egen takt',
                  'Mer körtid (lättare att nå 100+ timmar)',
                  'Tryggt att öva med någon du känner',
                ].map((pro) => (
                  <div key={pro} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <span style={{ color: '#1DB954', fontWeight: '800', fontSize: '16px' }}>+</span>
                    <span style={{ fontSize: '14px', color: '#0d1f17', lineHeight: '1.5' }}>{pro}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: '#fff', border: '2px solid #dceee5', borderRadius: '16px', padding: '24px' }}>
                <div style={{ fontWeight: '800', color: '#0d1f17', fontSize: '18px', marginBottom: '16px' }}>Nackdelar</div>
                {[
                  'Kräver mer eget ansvar och disciplin',
                  'Handledaren är inte utbildad pedagog',
                  'Risk för dåliga vanor utan professionell feedback',
                  'Kan ta längre tid utan struktur',
                  'Riskutbildning måste ändå bokas separat',
                ].map((con) => (
                  <div key={con} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <span style={{ color: '#d4af00', fontWeight: '800', fontSize: '16px' }}>-</span>
                    <span style={{ fontSize: '14px', color: '#5a6b62', lineHeight: '1.5' }}>{con}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section: Kostnad detaljerad */}
          <div style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid #dceee5' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: '800', color: '#0d1f17', margin: '0 0 16px', letterSpacing: '-0.02em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Detaljerad kostnad som privatist (2026)
            </h2>
            <div style={{ background: '#f0f7f3', borderRadius: '16px', padding: '24px', margin: '0 0 16px' }}>
              {[
                { item: 'Körkortstillstånd', cost: '250 kr' },
                { item: 'Handledarskap', cost: '170 kr' },
                { item: 'Introduktionskurs', cost: '300–600 kr' },
                { item: 'Riskutbildning (Risk 1 + 2)', cost: '2 000–4 000 kr' },
                { item: 'Teoriprov', cost: '325 kr' },
                { item: 'Körprov', cost: '800 kr' },
                { item: 'Bränsle & slitage (uppskattning)', cost: '1 500–3 000 kr' },
                { item: 'Övningsmaterial / Huvet', cost: '0–500 kr' },
              ].map((row) => (
                <div key={row.item} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #dceee5' }}>
                  <span style={{ color: '#0d1f17', fontSize: '15px' }}>{row.item}</span>
                  <span style={{ fontWeight: '700', color: '#1DB954', fontSize: '15px' }}>{row.cost}</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0 0', marginTop: '4px' }}>
                <span style={{ fontWeight: '900', color: '#0d1f17', fontSize: '16px' }}>Totalt</span>
                <span style={{ fontWeight: '900', color: '#1DB954', fontSize: '16px' }}>ca 5 345–9 645 kr</span>
              </div>
            </div>
          </div>

          {/* CTA block */}
          <div style={{ background: 'linear-gradient(135deg, #1DB954 0%, #17a34a 100%)', borderRadius: '20px', padding: '40px', textAlign: 'center', color: 'white', marginBottom: '48px' }}>
            <div style={{ fontSize: '28px', fontWeight: '900', marginBottom: '12px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Plugga teori smart som privatist
            </div>
            <p style={{ fontSize: '16px', opacity: 0.85, marginBottom: '28px', maxWidth: '440px', margin: '0 auto 28px' }}>
              Huvet ersätter dyr teoriundervisning med AI-driven personlig träning. Spara pengar och klara provet snabbare.
            </p>
            <Link href="/#demo" style={{ display: 'inline-block', background: '#f5d020', color: '#0d1f17', padding: '16px 36px', borderRadius: '999px', fontWeight: '800', textDecoration: 'none', fontSize: '16px' }}>
              Börja träna gratis
            </Link>
          </div>

          {/* Related Guides */}
          <RelatedGuides currentPath="/privatist" />
        </div>
      </section>

      {/* FAQ section */}
      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: '900', color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Vanliga frågor om att ta körkort som privatist
          </h2>
          {pageJsonLd.mainEntity.map((faq, i) => (
            <div key={i} style={{ background: 'white', border: '2px solid #dceee5', borderRadius: '16px', padding: '24px', marginBottom: '12px' }}>
              <div style={{ fontWeight: '800', fontSize: '16px', color: '#0d1f17', marginBottom: '8px' }}>
                {faq.name}
              </div>
              <p style={{ color: '#5a6b62', lineHeight: '1.65', fontSize: '15px', margin: 0 }}>
                {faq.acceptedAnswer.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #dceee5', padding: '3rem 20px 2rem', background: '#0d1f17', color: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          <div>
            <div style={{ fontSize: '1.15rem', fontWeight: '900', marginBottom: '0.75rem', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Huvet</div>
            <p style={{ fontSize: '0.85rem', color: '#aaa', lineHeight: 1.6 }}>Sveriges smartaste förberedelse för körkortsprovet.</p>
          </div>
          <div>
            <div style={{ fontWeight: '700', marginBottom: '0.75rem', fontSize: '0.9rem' }}>Guider</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Link href="/teoriprov" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.85rem' }}>Teoriprov</Link>
              <Link href="/korprov" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.85rem' }}>Körprov</Link>
              <Link href="/ovningskorning" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.85rem' }}>Övningskörning</Link>
              <Link href="/korkort-kostnad" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.85rem' }}>Körkort kostnad</Link>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: '700', marginBottom: '0.75rem', fontSize: '0.9rem' }}>Mer</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Link href="/gora-om-teoriprovet" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.85rem' }}>Göra om teoriprovet</Link>
              <Link href="/privatist" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.85rem' }}>Privatist</Link>
              <Link href="/utlandskt-korkort" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.85rem' }}>Utländskt körkort</Link>
              <Link href="/intensivkurs" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.85rem' }}>Intensivkurs</Link>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: '1100px', margin: '2rem auto 0', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', fontSize: '0.8rem', color: '#666' }}>
          &copy; 2026 Huvet. Alla rättigheter reserverade.
        </div>
      </footer>
    </div>
  );
}
