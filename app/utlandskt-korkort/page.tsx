import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Byta utländskt körkort till svenskt 2026 – guide | Huvet',
  description:
    'Komplett guide för att byta utländskt körkort till svenskt körkort 2026. EU/EES och icke-EU process, krav, dokument, kostnader och tidsramar hos Transportstyrelsen.',
  keywords: [
    'byta utländskt körkort',
    'utländskt körkort Sverige',
    'byta körkort från utlandet',
    'körkort från annat land',
    'EU körkort Sverige',
    'utbyta utländskt körkort',
    'Transportstyrelsen körkort utbyte',
    'utländskt körkort giltighet',
    'körkort invandrare',
    'körkort nyanlända',
  ],
  alternates: { canonical: 'https://huvet.se/utlandskt-korkort' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Kan jag köra i Sverige med utländskt körkort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, du kan köra i Sverige med ett giltigt utländskt körkort under en begränsad period. Med EU/EES-körkort kan du köra obegränsat så länge det är giltigt. Med icke-EU-körkort kan du köra i upp till 1 år efter folkbokföring i Sverige.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur byter man utländskt körkort till svenskt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Processen beror på ditt körkorts ursprung. EU/EES-körkort kan bytas direkt via Transportstyrelsen utan prov. Icke-EU-körkort kräver vanligtvis att du gör nya teoriprov och körprov i Sverige. Ansökan görs till Transportstyrelsen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad kostar det att byta utländskt körkort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Utbyte av EU/EES-körkort kostar 250 kr (ansökningsavgift). För icke-EU-körkort tillkommer provavgifter: teoriprov 325 kr och körprov 800 kr. Totalkostnaden för icke-EU blir därmed ca 1 375 kr eller mer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur lång tid tar det att byta utländskt körkort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Handläggningstiden hos Transportstyrelsen är normalt 4-8 veckor för EU/EES-körkort. För icke-EU-körkort varierar det beroende på hur snabbt du klarar proven, men räkna med 2-6 månader totalt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad är 1-årsregeln för EU-körkort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Det finns ingen 1-årsgräns för EU/EES-körkort — de gäller i Sverige så länge de är giltiga. Däremot gäller 1-årsregeln för icke-EU-körkort: du kan köra i Sverige i högst 1 år efter att du folkbokfört dig, sedan måste du ha svenskt körkort.',
      },
    },
  ],
};

const facts = [
  { label: 'EU/EES', sub: 'direkt utbyte möjligt', icon: '🇪🇺' },
  { label: '1 år', sub: 'giltighet icke-EU', icon: '⏰' },
  { label: '250 kr', sub: 'ansökningsavgift', icon: '💳' },
  { label: '4–8 v', sub: 'handläggningstid', icon: '📄' },
];

const euSteps = [
  {
    step: '1',
    title: 'Kontrollera giltighet',
    text: 'Ditt EU/EES-körkort måste vara giltigt (inte utgånget). Kontrollera också att alla uppgifter stämmer och att körkortet inte är återkallat i ursprungslandet.',
  },
  {
    step: '2',
    title: 'Ansök hos Transportstyrelsen',
    text: 'Skicka in ansökan om utbyte via Transportstyrelsens webbplats eller blankett. Du behöver bifoga en kopia av ditt körkort och ett aktuellt foto. Avgiften är 250 kr.',
  },
  {
    step: '3',
    title: 'Lämna in originalkörkort',
    text: 'När ditt svenska körkort är klart måste du lämna in ditt utländska körkort. Transportstyrelsen skickar tillbaka det till utfärdarlandet.',
  },
  {
    step: '4',
    title: 'Hämta nytt svenskt körkort',
    text: 'Ditt nya svenska körkort skickas hem till din folkbokföringsadress inom 4-8 veckor. Körkortet har samma behörigheter som ditt EU/EES-körkort.',
  },
];

const nonEuSteps = [
  {
    step: '1',
    title: 'Ansök om körkortstillstånd',
    text: 'Ansök om körkortstillstånd hos Transportstyrelsen. Du behöver en synundersökning (ögonläkare eller optiker) och ett godkänt hälsointyg. Kostnaden är 250 kr.',
  },
  {
    step: '2',
    title: 'Studera svensk trafikteori',
    text: 'Svenska trafikregler skiljer sig från många länder. Plugga vägmärken, väjningsregler, hastighetsgränser och miljöfrågor specifika för Sverige. Huvet hjälper dig plugga effektivt.',
  },
  {
    step: '3',
    title: 'Gör teoriprovet',
    text: 'Boka och genomför teoriprovet hos Trafikverket. 65 frågor, 50 minuter, minst 52 rätt för godkänt. Provet finns tillgängligt på svenska och engelska. Kostnad: 325 kr.',
  },
  {
    step: '4',
    title: 'Övningskör (vid behov)',
    text: 'Beroende på din erfarenhet kan du behöva övningsköra i svensk trafik. Du kan köra privat med handledare eller ta lektioner på trafikskola för att anpassa dig till svenska förhållanden.',
  },
  {
    step: '5',
    title: 'Genomför riskutbildning',
    text: 'Du måste genomföra Risk 1 (riskettan) och Risk 2 (halkbanan) hos en godkänd anordnare. Dessa är obligatoriska för alla, oavsett tidigare erfarenhet.',
  },
  {
    step: '6',
    title: 'Gör körprovet',
    text: 'Boka och gör körprovet hos Trafikverket inom 4 månader efter godkänt teoriprov. Provet tar ca 45 minuter. Kostnad: 800 kr.',
  },
];

const requiredDocs = [
  { doc: 'Giltigt utländskt körkort (original)', note: 'Måste vara i gott skick och läsbart' },
  { doc: 'Kopia av utländskt körkort', note: 'Framsida och baksida' },
  { doc: 'Passfoto', note: 'Aktuellt foto enligt Transportstyrelsens krav' },
  { doc: 'Personbevis', note: 'Från Skatteverket (max 3 månader gammalt)' },
  { doc: 'Synundersökning', note: 'Intyg från ögonläkare eller legitimerad optiker' },
  { doc: 'Översättning', note: 'Auktoriserad översättning om körkortet inte är på svenska, engelska, tyska eller franska' },
];

export default function UtlandskKorkortPage() {
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
            { label: 'Byta utländskt körkort' },
          ]} />
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#1DB954', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>
            Guide 2026
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: '900', lineHeight: '1.08', color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.04em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Byta utländskt körkort till svenskt — komplett guide
          </h1>
          <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#5a6b62', maxWidth: '620px', margin: '0 0 40px' }}>
            Har du ett utländskt körkort och vill köra i Sverige? Processen skiljer sig beroende på om ditt körkort är utfärdat inom EU/EES eller utanför. Här får du en komplett guide med krav, dokument, kostnader och steg-för-steg-instruktioner.
          </p>

          {/* Facts grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px', marginBottom: '48px' }}>
            {facts.map((f) => (
              <div key={f.label} style={{ background: 'white', border: '2px solid #dceee5', borderRadius: '16px', padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{f.icon}</div>
                <div style={{ fontSize: '20px', fontWeight: '900', color: '#1DB954', lineHeight: 1 }}>{f.label}</div>
                <div style={{ fontSize: '12px', color: '#5a6b62', marginTop: '4px' }}>{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section style={{ background: '#fff', padding: '0 20px 80px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>

          {/* Section: Vem kan byta */}
          <div style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid #dceee5' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: '800', color: '#0d1f17', margin: '0 0 16px', letterSpacing: '-0.02em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Vem kan byta utländskt körkort till svenskt?
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 12px' }}>
              Du kan ansöka om att byta ditt utländska körkort om du har permanent uppehållsrätt eller är folkbokförd i Sverige. Processen och kraven varierar kraftigt beroende på var ditt körkort är utfärdat:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', margin: '20px 0' }}>
              <div style={{ background: '#f0f7f3', border: '2px solid #dceee5', borderRadius: '16px', padding: '20px' }}>
                <div style={{ fontWeight: '800', color: '#1DB954', marginBottom: '8px', fontSize: '16px' }}>EU/EES-körkort</div>
                <p style={{ fontSize: '14px', color: '#5a6b62', margin: 0, lineHeight: '1.6' }}>
                  Kan bytas direkt utan prov. Gäller körkort från alla EU-länder, Norge, Island och Liechtenstein. Även Schweiz och UK (post-Brexit-avtal) har särskilda utbytesavtal.
                </p>
              </div>
              <div style={{ background: '#fff', border: '2px solid #dceee5', borderRadius: '16px', padding: '20px' }}>
                <div style={{ fontWeight: '800', color: '#0d1f17', marginBottom: '8px', fontSize: '16px' }}>Icke-EU-körkort</div>
                <p style={{ fontSize: '14px', color: '#5a6b62', margin: 0, lineHeight: '1.6' }}>
                  Kräver vanligtvis nya prov (teori + körprov) i Sverige. Vissa länder har bilaterala avtal som underlättar processen (t.ex. Japan, Kanada, Sydkorea).
                </p>
              </div>
            </div>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 12px' }}>
              Ditt utländska körkort måste vara giltigt och utfärdat i det land där du var folkbokförd vid utfärdandet. Internationella körkort (IDP) räknas inte som ett riktigt körkort utan är bara en översättning.
            </p>
          </div>

          {/* Section: EU/EES process */}
          <div style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid #dceee5' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: '800', color: '#0d1f17', margin: '0 0 16px', letterSpacing: '-0.02em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Byta EU/EES-körkort — steg för steg
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 12px' }}>
              Har du ett körkort utfärdat i ett EU- eller EES-land är processen enkel. Du behöver inte göra nya prov. Ditt EU-körkort gäller i Sverige så länge det är giltigt, men om du vill byta till ett svenskt kort (t.ex. vid förlängning) gör du så här:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '24px 0' }}>
              {euSteps.map((s) => (
                <div key={s.step} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ minWidth: '40px', height: '40px', background: '#1DB954', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '18px', color: 'white' }}>
                    {s.step}
                  </div>
                  <div>
                    <div style={{ fontWeight: '800', color: '#0d1f17', marginBottom: '4px', fontSize: '16px' }}>{s.title}</div>
                    <p style={{ fontSize: '15px', color: '#5a6b62', margin: 0, lineHeight: '1.65' }}>{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: '#f0f7f3', border: '2px solid #dceee5', borderRadius: '14px', padding: '16px 20px', marginTop: '16px' }}>
              <div style={{ fontWeight: '800', color: '#1DB954', marginBottom: '4px', fontSize: '14px' }}>Viktigt om EU-körkort</div>
              <p style={{ fontSize: '14px', color: '#5a6b62', margin: 0, lineHeight: '1.6' }}>
                Du behöver inte byta ditt EU/EES-körkort alls om du inte vill. Det gäller fullt ut i Sverige. Anledningar att byta kan vara att kortet snart går ut, att du vill ha ett svenskt kort av praktiska skäl, eller att du behöver lägga till nya behörigheter.
              </p>
            </div>
          </div>

          {/* Section: Non-EU process */}
          <div style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid #dceee5' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: '800', color: '#0d1f17', margin: '0 0 16px', letterSpacing: '-0.02em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Byta icke-EU-körkort — steg för steg
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 12px' }}>
              Om ditt körkort är utfärdat utanför EU/EES behöver du i de flesta fall göra nya prov i Sverige. Ditt utländska körkort gäller i högst 1 år efter att du folkbokfört dig i Sverige. Här är processen:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '24px 0' }}>
              {nonEuSteps.map((s) => (
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
            <div style={{ background: '#fff8e1', border: '2px solid #f5d020', borderRadius: '14px', padding: '16px 20px', marginTop: '16px' }}>
              <div style={{ fontWeight: '800', color: '#0d1f17', marginBottom: '4px', fontSize: '14px' }}>1-årsregeln</div>
              <p style={{ fontSize: '14px', color: '#5a6b62', margin: 0, lineHeight: '1.6' }}>
                Du kan köra i Sverige med ditt icke-EU-körkort i maximalt 1 år efter att du har folkbokfört dig. Efter det är körkortet ogiltigt i Sverige och du måste ha ett svenskt körkort. Planera i god tid!
              </p>
            </div>
          </div>

          {/* Section: Dokument */}
          <div style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid #dceee5' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: '800', color: '#0d1f17', margin: '0 0 16px', letterSpacing: '-0.02em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Dokument du behöver
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 20px' }}>
              Förbered följande dokument innan du ansöker om utbyte:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {requiredDocs.map((d) => (
                <div key={d.doc} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '14px 18px', background: '#f0f7f3', borderRadius: '14px', border: '1px solid #dceee5' }}>
                  <div style={{ minWidth: '28px', height: '28px', background: '#1DB954', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px', fontWeight: '800' }}>✓</div>
                  <div>
                    <div style={{ fontWeight: '700', color: '#0d1f17', fontSize: '15px' }}>{d.doc}</div>
                    <div style={{ fontSize: '13px', color: '#5a6b62', marginTop: '2px' }}>{d.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Kostnader */}
          <div style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid #dceee5' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: '800', color: '#0d1f17', margin: '0 0 16px', letterSpacing: '-0.02em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Kostnader för att byta utländskt körkort (2026)
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              <div style={{ background: '#f0f7f3', border: '2px solid #dceee5', borderRadius: '16px', padding: '24px' }}>
                <div style={{ fontWeight: '800', color: '#1DB954', fontSize: '18px', marginBottom: '16px' }}>EU/EES-körkort</div>
                {[
                  { item: 'Ansökningsavgift', cost: '250 kr' },
                  { item: 'Synundersökning', cost: '0–400 kr' },
                  { item: 'Foto', cost: '0–150 kr' },
                ].map((row) => (
                  <div key={row.item} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #dceee5' }}>
                    <span style={{ fontSize: '14px', color: '#0d1f17' }}>{row.item}</span>
                    <span style={{ fontWeight: '700', color: '#1DB954', fontSize: '14px' }}>{row.cost}</span>
                  </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0 0' }}>
                  <span style={{ fontWeight: '900', fontSize: '15px' }}>Totalt</span>
                  <span style={{ fontWeight: '900', color: '#1DB954', fontSize: '15px' }}>ca 250–800 kr</span>
                </div>
              </div>
              <div style={{ background: '#fff', border: '2px solid #dceee5', borderRadius: '16px', padding: '24px' }}>
                <div style={{ fontWeight: '800', color: '#0d1f17', fontSize: '18px', marginBottom: '16px' }}>Icke-EU-körkort</div>
                {[
                  { item: 'Körkortstillstånd', cost: '250 kr' },
                  { item: 'Synundersökning', cost: '0–400 kr' },
                  { item: 'Teoriprov', cost: '325 kr' },
                  { item: 'Körprov', cost: '800 kr' },
                  { item: 'Riskutbildning', cost: '2 000–4 000 kr' },
                  { item: 'Ev. körlektioner', cost: '0–5 000 kr' },
                ].map((row) => (
                  <div key={row.item} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #dceee5' }}>
                    <span style={{ fontSize: '14px', color: '#0d1f17' }}>{row.item}</span>
                    <span style={{ fontWeight: '700', color: '#1DB954', fontSize: '14px' }}>{row.cost}</span>
                  </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0 0' }}>
                  <span style={{ fontWeight: '900', fontSize: '15px' }}>Totalt</span>
                  <span style={{ fontWeight: '900', color: '#1DB954', fontSize: '15px' }}>ca 3 375–10 775 kr</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Tidsplan */}
          <div style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid #dceee5' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: '800', color: '#0d1f17', margin: '0 0 16px', letterSpacing: '-0.02em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Tidsplan och handläggningstider
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 12px' }}>
              Handläggningstiden varierar beroende på typ av körkort och aktuell belastning hos Transportstyrelsen:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', margin: '16px 0' }}>
              {[
                { type: 'EU/EES-utbyte', time: '4–8 veckor', desc: 'Ren handläggning, inga prov krävs' },
                { type: 'Icke-EU med avtal', time: '2–4 månader', desc: 'Förenklade krav, färre prov' },
                { type: 'Icke-EU utan avtal', time: '3–6 månader', desc: 'Full process med teori + körprov' },
              ].map((t) => (
                <div key={t.type} style={{ background: '#f0f7f3', border: '1px solid #dceee5', borderRadius: '14px', padding: '18px' }}>
                  <div style={{ fontWeight: '800', color: '#1DB954', fontSize: '20px' }}>{t.time}</div>
                  <div style={{ fontWeight: '700', color: '#0d1f17', fontSize: '15px', marginTop: '4px' }}>{t.type}</div>
                  <div style={{ fontSize: '13px', color: '#5a6b62', marginTop: '4px' }}>{t.desc}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 12px' }}>
              Börja processen i god tid innan ditt utländska körkort slutar gälla i Sverige. Särskilt om du har icke-EU-körkort bör du starta processen så snart du folkbokför dig, eftersom 1-årsregeln tickar.
            </p>
          </div>

          {/* CTA block */}
          <div style={{ background: 'linear-gradient(135deg, #1DB954 0%, #17a34a 100%)', borderRadius: '20px', padding: '40px', textAlign: 'center', color: 'white', marginBottom: '48px' }}>
            <div style={{ fontSize: '28px', fontWeight: '900', marginBottom: '12px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Behöver du klara teoriprovet?
            </div>
            <p style={{ fontSize: '16px', opacity: 0.85, marginBottom: '28px', maxWidth: '440px', margin: '0 auto 28px' }}>
              Huvet hjälper dig plugga svensk trafikteori effektivt. Provet finns på svenska och engelska — vi förbereder dig för båda.
            </p>
            <Link href="/#demo" style={{ display: 'inline-block', background: '#f5d020', color: '#0d1f17', padding: '16px 36px', borderRadius: '999px', fontWeight: '800', textDecoration: 'none', fontSize: '16px' }}>
              Börja träna gratis
            </Link>
          </div>

          {/* Related Guides */}
          <RelatedGuides currentPath="/utlandskt-korkort" />
        </div>
      </section>

      {/* FAQ section */}
      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: '900', color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Vanliga frågor om utländskt körkort i Sverige
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
              <Link href="/vagmarken" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.85rem' }}>Vägmärken</Link>
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
