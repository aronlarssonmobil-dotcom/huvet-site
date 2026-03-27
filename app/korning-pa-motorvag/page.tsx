import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Körning på motorväg – regler, tips och säkerhet 2026 | Huvet',
  description:
    'Guide till körning på motorväg i Sverige 2026. Påfart, avfart, filbyte, hastighetsregler, minsta hastighet och vad som inte är tillåtet på motorväg.',
  keywords: [
    'körning på motorväg',
    'motorväg regler',
    'motorväg hastighet',
    'påfart motorväg',
    'filbyte motorväg',
    'motorväg förbud',
    'minsta hastighet motorväg',
    'motorväg teoriprov',
    'avfart motorväg',
    'motorvägsregler Sverige',
  ],
  alternates: { canonical: 'https://huvet.se/korning-pa-motorvag' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad är lägsta tillåtna hastighet på motorväg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Det finns ingen formell minsta hastighetsgräns på motorväg i Sverige. Däremot är det förbjudet att köra fordon som inte kan hålla minst 40 km/h på motorväg. Undvik att köra onödigt långsamt då det skapar farliga situationer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur gör man vid påfart till motorväg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Accelerera på accelerationsfältet så att din hastighet matchar motorvägstrafiken. Använd blinkers åt vänster. Anpassa dig till ett lämpligt gap i trafiken och kör in smidigt. Trafiken på motorvägen har företräde.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad är förbjudet på motorväg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Förbjudet på motorväg: stanna eller parkera (utom nödstopp), backa, vända, köra fordon som inte kan hålla 40 km/h, gående/cyklister, mopeder klass II, och övningskörning (om förbud gäller).',
      },
    },
    {
      '@type': 'Question',
      name: 'Gäller högerregeln på motorväg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nej, högerregeln gäller inte på motorväg. Trafiken på motorvägen har alltid företräde framför fordon som kör in via påfarten. Det gäller även om fordonet på påfarten kommer från höger.',
      },
    },
  ],
};

const facts = [
  { label: '110–120', sub: 'km/h maxhastighet', icon: '🚗' },
  { label: '40 km/h', sub: 'minimum fordonskrav', icon: '⚡' },
  { label: 'Höger', sub: 'grundfil att köra i', icon: '➡️' },
  { label: 'Ej backa', sub: 'eller stanna', icon: '🚫' },
];

const sections = [
  {
    title: 'Grundregler för motorväg',
    content: [
      'Motorväg (skylt med grön bakgrund och vit bil) är den snabbaste vägtypen i Sverige med hastighetsgränser på 110 eller 120 km/h. Motorvägen är byggd för snabb och effektiv trafik utan korsningar i plan — alla anslutningar sker via på- och avfarter.',
      'Grundregeln på motorväg är att köra i höger körbana (grundfilen). Vänsterfilen är till för omkörning. När du kört om ska du snarast återvända till höger fil. Att ligga kvar i vänsterfilen utan att köra om kallas filblockering och är olagligt.',
      'Motorvägen kräver extra uppmärksamhet: höga hastigheter innebär kortare reaktionstid, längre bromssträcka och allvarligare konsekvenser vid misstag. Koncentration och framförhållning är avgörande.',
    ],
  },
  {
    title: 'Påfart — så kör du in på motorvägen',
    content: [
      'Accelerationsfältet (påfarten) är din vän. Använd hela sträckan för att accelerera till motorvägshastighet. Det vanligaste misstaget nya förare gör är att köra för långsamt på accelerationsfältet — det skapar farliga situationer.',
      'Steg-för-steg: 1) Börja accelerera direkt när du ser accelerationsfältet. 2) Kolla backspegel, sidospegel och dödvinkel. 3) Blinkers vänster. 4) Anpassa farten till ett gap i trafiken. 5) Kör in smidigt.',
      'Viktig regel: Trafiken på motorvägen har ALLTID företräde. Det är ditt ansvar att anpassa dig till motorvägstrafiken — inte tvärtom. Om du inte hittar ett gap, sakta ner och försök igen. I värsta fall kan du stanna i slutet av accelerationsfältet.',
    ],
  },
  {
    title: 'Filbyte och omkörning',
    content: [
      'Kör alltid i höger fil om du inte kör om. Innan filbyte: backspegel → sidospegel → dödvinkelkontroll → blinkers → filbyte. Samma procedur varje gång, utan undantag.',
      'Vid omkörning: bedöm hastigheten på fordonet du ska köra om. Se till att du har tillräckligt med utrymme och att ingen redan håller på att köra om i vänsterfilen. Kör förbi och återgå till höger fil när du ser hela fordonet i backspegeln.',
      'Att köra om på höger sida (högerkörning) är normalt förbjudet på motorväg. Undantag: vid köbildning när alla filer rullar långsamt, eller om vänsterfilen har lägre hastighetsgräns (vid t.ex. avfarter).',
    ],
  },
  {
    title: 'Avfart — så lämnar du motorvägen',
    content: [
      'Planera i god tid. Var i höger fil minst 500 m innan din avfart. Sätt blinkers höger. Retardationsfältet (avfarten) är till för att sänka hastigheten — sakta inte ner på motorvägen innan du nått retardationsfältet.',
      'Vanligt misstag: Att sakta ner för tidigt, medan du fortfarande är på motorvägen. Det skapar farliga situationer för trafiken bakom dig. Behåll motorvägshastighet tills du svängt in på retardationsfältet.',
      'Om du missar din avfart: Kör ALDRIG tillbaka eller stanna. Fortsätt till nästa avfart och vänd. Att backa på motorvägen är livsfarligt och ger böter på 3 000 kr.',
    ],
  },
  {
    title: 'Vad är förbjudet på motorväg?',
    content: [
      'Stanna och parkera: Förbjudet utom vid nödstopp. Vid nödstopp: kör av så långt åt höger som möjligt (vägrenen), sätt på varningsblinkers, och sätt ut varningstriangel 100 meter bakom bilen.',
      'Backa, vända och korsa mittremsan: Totalt förbjudet. Även om du missade avfarten. Även om GPS:en säger "vänd om". Att backa på motorvägen är en av de farligaste sakerna du kan göra i trafiken.',
      'Fordon och trafikanter som inte får vara på motorväg: gående, cyklister, mopeder klass II, traktorer och andra fordon som inte kan hålla minst 40 km/h. Vissa motorvägsavsnitt förbjuder även övningskörning.',
    ],
  },
];

export default function KorningPaMotorvagPage() {
  return (
    <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", background: '#fff', minHeight: '100vh', color: '#0d1f17' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #dceee5', padding: '0 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ width: '36px', height: '36px', background: '#006B3F', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2"/><circle cx="10" cy="10" r="2.5" fill="white"/><line x1="10" y1="2" x2="10" y2="7.5" stroke="white" strokeWidth="2" strokeLinecap="round"/><line x1="3.4" y1="13.5" x2="7.8" y2="11.2" stroke="white" strokeWidth="2" strokeLinecap="round"/><line x1="16.6" y1="13.5" x2="12.2" y2="11.2" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <span style={{ fontSize: '20px', fontWeight: 900, color: '#0d1f17', letterSpacing: '-0.04em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Huvet</span>
          </Link>
          <Link href="/#demo" style={{ background: '#006B3F', color: 'white', padding: '10px 22px', borderRadius: '999px', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}>Träna gratis</Link>
        </div>
      </header>

      <section style={{ background: 'linear-gradient(160deg, #f0f7f3 0%, #fff 60%)', padding: '64px 20px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Breadcrumbs items={[{ label: 'Hem', href: '/' }, { label: 'Körning på motorväg' }]} />
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#006B3F', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>Trafikregler</div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 900, lineHeight: 1.05, color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.04em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Körning på motorväg — regler, tips och säkerhet
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#5a6b62', maxWidth: '600px', margin: '0 0 40px' }}>
            Motorväg har egna regler som skiljer sig från vanlig väg. Här lär du dig allt om påfart, filbyte, hastighet och vad som är förbjudet.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginBottom: '48px' }}>
            {facts.map((f) => (
              <div key={f.label} style={{ background: 'white', border: '2px solid #dceee5', borderRadius: '16px', padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{f.icon}</div>
                <div style={{ fontSize: '20px', fontWeight: 900, color: '#006B3F', lineHeight: 1 }}>{f.label}</div>
                <div style={{ fontSize: '12px', color: '#5a6b62', marginTop: '4px' }}>{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {sections.map((s, i) => (
            <div key={i} style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: i < sections.length - 1 ? '1px solid #dceee5' : 'none' }}>
              <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', margin: '0 0 16px', letterSpacing: '-0.02em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>{s.title}</h2>
              {s.content.map((p, j) => (
                <p key={j} style={{ fontSize: '16px', lineHeight: 1.75, color: '#5a6b62', margin: '0 0 12px' }}>{p}</p>
              ))}
            </div>
          ))}
          <div style={{ background: 'linear-gradient(135deg, #006B3F 0%, #004d2d 100%)', borderRadius: '20px', padding: '40px', textAlign: 'center', color: 'white' }}>
            <div style={{ fontSize: '28px', fontWeight: 900, marginBottom: '12px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Redo för teoriprovet?</div>
            <p style={{ fontSize: '16px', opacity: 0.85, marginBottom: '28px', maxWidth: '440px', margin: '0 auto 28px' }}>Motorvägsfrågor dyker upp på nästan alla teoriprov. Öva med 450+ körkortsfrågor.</p>
            <Link href="/#demo" style={{ display: 'inline-block', background: '#f5d020', color: '#0d1f17', padding: '16px 36px', borderRadius: '999px', fontWeight: 800, textDecoration: 'none', fontSize: '16px' }}>Börja träna gratis</Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 900, color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Vanliga frågor</h2>
          {pageJsonLd.mainEntity.map((faq, i) => (
            <div key={i} style={{ background: 'white', border: '2px solid #dceee5', borderRadius: '16px', padding: '24px', marginBottom: '12px' }}>
              <div style={{ fontWeight: 800, fontSize: '16px', color: '#0d1f17', marginBottom: '8px' }}>{faq.name}</div>
              <p style={{ color: '#5a6b62', lineHeight: 1.65, fontSize: '15px', margin: 0 }}>{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}><RelatedGuides currentPath="/korning-pa-motorvag" /></div>
      </section>

      <footer style={{ background: '#0d1f17', color: 'rgba(255,255,255,0.4)', padding: '32px 20px', textAlign: 'center', fontSize: '13px' }}>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="/hastighetsgranser" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Hastighetsgränser</Link>
          <Link href="/korning-i-regn" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körning i regn</Link>
          <Link href="/korning-i-morker" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körning i mörker</Link>
          <Link href="/trafikregler" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Trafikregler</Link>
        </div>
        <span>&copy; 2026 Huvet (huvet.se). Byggt för svenska körkortselever.</span>
      </footer>
    </div>
  );
}
