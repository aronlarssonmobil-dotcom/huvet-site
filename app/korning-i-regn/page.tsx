import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Körning i regn – tips, risker och säkerhet 2026 | Huvet',
  description:
    'Guide till säker körning i regn. Vattenplaning, bromssträcka, sikt, hastighetsanpassning och tips för att köra tryggt i dåligt väder. Viktigt inför teoriprovet.',
  keywords: [
    'körning i regn',
    'köra i regn tips',
    'vattenplaning',
    'bromssträcka regn',
    'sikt regn bil',
    'aquaplaning',
    'köra bil dåligt väder',
    'regn trafiksäkerhet',
    'körning i regn teoriprov',
  ],
  alternates: { canonical: 'https://huvet.se/korning-i-regn' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hur påverkar regn bromssträckan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I regn ökar bromssträckan med ungefär 50% jämfört med torr vägbana. Vid kraftigt regn med vattenfilm på vägen kan bromssträckan fördubblas eller mer. Anpassa alltid hastigheten och öka avståndet till framförvarande.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad är vattenplaning (aquaplaning)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vattenplaning uppstår när däcken inte hinner trycka undan vattnet på vägen. En vattenfilm bildas under däcket och bilen tappar kontakt med vägbanan — du kan inte styra eller bromsa. Risk ökar vid hög hastighet och slitna däck.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilken hastighet ska man hålla i regn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Det finns ingen exakt regel, men tumregeln är att sänka hastigheten med 10–20 km/h under hastighetsgränsen vid regn. Vid kraftigt regn eller dålig sikt kan du behöva sänka ännu mer. Kör aldrig fortare än du kan se.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ska man använda helljus i regn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nej, använd halvljus vid regn. Helljus reflekteras i vattendroppar och försämrar sikten — både din och mötandes. Vid extremt dålig sikt (dimma + regn) kan dimljus vara ett komplement till halvljuset.',
      },
    },
  ],
};

const facts = [
  { label: '+50%', sub: 'längre bromssträcka', icon: '🛑' },
  { label: '80+ km/h', sub: 'vattenplaningsrisk', icon: '🌊' },
  { label: 'Halvljus', sub: 'alltid i regn', icon: '💡' },
  { label: '4 sek', sub: 'rekommenderat avstånd', icon: '⏱️' },
];

const sections = [
  {
    title: 'Varför är regn farligt i trafiken?',
    content: [
      'Regn är en av de vanligaste orsakerna till trafikolyckor i Sverige. Våt vägbana minskar friktionen mellan däck och väg drastiskt, vilket ger längre bromssträcka, sämre styrbarhet och risk för vattenplaning.',
      'De första minuterna av ett regn är ofta farligast. Vatten blandar sig med olja, damm och gummi på vägbanan och skapar en extremt hal yta. Efter ett tag tvättas smutsen bort och friktionen förbättras något.',
      'Sikten försämras också avsevärt — regndroppar på vindrutan, stänk från andra bilar och dimma gör det svårare att se vägmärken, trafikanter och hinder. Allt detta kräver att du anpassar din körning.',
    ],
  },
  {
    title: 'Vattenplaning — vad det är och hur du undviker det',
    content: [
      'Vattenplaning (aquaplaning) uppstår när däcken inte hinner pressa undan vattenfilmen på vägen. Däcket "flyter" på vattnet och tappar kontakt med asfalten. Du kan varken styra eller bromsa — bilen glider okontrollerat.',
      'Risken ökar vid: hög hastighet (över 80 km/h), stående vatten eller djupa vattensamlingar, slitna däck med grunt mönsterdjup, och lågt lufttryck i däcken. Bredare däck har också högre risk eftersom de har svårare att pressa undan vatten.',
      'Om du börjar vattenplana: BROMSA INTE. Släpp gasen försiktigt och håll ratten rak tills däcken får grepp igen. Undvik kraftiga rattutslag — de kan orsaka snurrning när greppet plötsligt återkommer.',
    ],
  },
  {
    title: 'Anpassa hastigheten',
    content: [
      'Tumregel: Sänk hastigheten med minst 10–20 km/h under hastighetsgränsen vid regn. Vid kraftigt regn, stående vatten eller mycket dålig sikt kan du behöva sänka ännu mer.',
      'Tänk på att hastighetsgränsen är en maxgräns som gäller vid ideala förhållanden. Vid regn är förhållandena per definition inte ideala. Du har en skyldighet att anpassa hastigheten till rådande förhållanden — det står i trafikförordningen.',
      'Kör aldrig fortare än du kan se. Om sikten är 100 meter ska du kunna stanna inom 100 meter. Det innebär ofta en betydligt lägre hastighet än du är van vid.',
    ],
  },
  {
    title: 'Bromssträcka i regn',
    content: [
      'På torr väg vid 80 km/h: reaktionssträcka ca 22 m + bromssträcka ca 25 m = stoppsträcka ca 47 m. På våt väg vid samma hastighet: bromssträckan ökar till ca 38–50 m. Total stoppsträcka: 60–72 m.',
      'Öka avståndet till bilen framför. Normalregeln "3-sekunders-regeln" bör utökas till minst 4–5 sekunder i regn. Det ger dig mer tid att reagera och längre sträcka att bromsa på.',
      'Vid kraftigt regn med vattenfilm: bromssträckan kan fördubblas eller tredubblas. ABS-bromsar hjälper dig att styra under bromsning men förkortar inte nödvändigtvis bromssträckan på vått underlag.',
    ],
  },
  {
    title: 'Tips för säker körning i regn',
    content: [
      'Belysning: Använd alltid halvljus, aldrig helljus. Helljus reflekteras i regndroppar och bländar mötande. Se till att vindrutetorkarna fungerar bra och att du har spolarvätska. Byt torkarblad om de lämnar ränder.',
      'Däck: Kontrollera mönsterdjupet — minst 1,6 mm enligt lag, men 3+ mm rekommenderas för bra regngrepp. Kontrollera lufttrycket. Slitna däck dramatiskt ökar vattenplaningsrisken.',
      'Körning: Undvik plötsliga manövrer — inget tvärbromsande, inga snabba filbyten, inga kraftiga rattutslag. Kör jämnt och förutsebart. Håll båda händerna på ratten. Kör i hjulspåren från framförvarande — vattnet är grundare där.',
    ],
  },
];

export default function KorningIRegnPage() {
  return (
    <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", background: '#fff', minHeight: '100vh', color: '#0d1f17' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #dceee5', padding: '0 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ width: '36px', height: '36px', background: '#1DB954', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2"/><circle cx="10" cy="10" r="2.5" fill="white"/><line x1="10" y1="2" x2="10" y2="7.5" stroke="white" strokeWidth="2" strokeLinecap="round"/><line x1="3.4" y1="13.5" x2="7.8" y2="11.2" stroke="white" strokeWidth="2" strokeLinecap="round"/><line x1="16.6" y1="13.5" x2="12.2" y2="11.2" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <span style={{ fontSize: '20px', fontWeight: 900, color: '#0d1f17', letterSpacing: '-0.04em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Huvet</span>
          </Link>
          <Link href="/#demo" style={{ background: '#1DB954', color: 'white', padding: '10px 22px', borderRadius: '999px', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}>Träna gratis</Link>
        </div>
      </header>

      <section style={{ background: 'linear-gradient(160deg, #f0f7f3 0%, #fff 60%)', padding: '64px 20px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Breadcrumbs items={[{ label: 'Hem', href: '/' }, { label: 'Körning i regn' }]} />
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#1DB954', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>Väder & körning</div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 900, lineHeight: 1.05, color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.04em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Körning i regn — tips, risker och säkerhet
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#5a6b62', maxWidth: '600px', margin: '0 0 40px' }}>
            Regn förändrar allt: bromssträcka, sikt och grepp. Lär dig köra säkert i regn, undvika vattenplaning och förstå varför detta är viktigt för teoriprovet.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginBottom: '48px' }}>
            {facts.map((f) => (
              <div key={f.label} style={{ background: 'white', border: '2px solid #dceee5', borderRadius: '16px', padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{f.icon}</div>
                <div style={{ fontSize: '20px', fontWeight: 900, color: '#1DB954', lineHeight: 1 }}>{f.label}</div>
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
          <div style={{ background: 'linear-gradient(135deg, #1DB954 0%, #17a34a 100%)', borderRadius: '20px', padding: '40px', textAlign: 'center', color: 'white' }}>
            <div style={{ fontSize: '28px', fontWeight: 900, marginBottom: '12px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Testa dina kunskaper</div>
            <p style={{ fontSize: '16px', opacity: 0.85, marginBottom: '28px', maxWidth: '440px', margin: '0 auto 28px' }}>Vattenplaning, bromssträcka och sikt — vanliga ämnen på teoriprovet. Öva med 450+ körkortsfrågor.</p>
            <Link href="/#demo" style={{ display: 'inline-block', background: '#f5d020', color: '#0d1f17', padding: '16px 36px', borderRadius: '999px', fontWeight: 800, textDecoration: 'none', fontSize: '16px' }}>Börja träna gratis</Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 900, color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Vanliga frågor om körning i regn</h2>
          {pageJsonLd.mainEntity.map((faq, i) => (
            <div key={i} style={{ background: 'white', border: '2px solid #dceee5', borderRadius: '16px', padding: '24px', marginBottom: '12px' }}>
              <div style={{ fontWeight: 800, fontSize: '16px', color: '#0d1f17', marginBottom: '8px' }}>{faq.name}</div>
              <p style={{ color: '#5a6b62', lineHeight: 1.65, fontSize: '15px', margin: 0 }}>{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}><RelatedGuides currentPath="/korning-i-regn" /></div>
      </section>

      <footer style={{ background: '#0d1f17', color: 'rgba(255,255,255,0.4)', padding: '32px 20px', textAlign: 'center', fontSize: '13px' }}>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="/korning-pa-motorvag" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körning på motorväg</Link>
          <Link href="/korning-i-morker" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körning i mörker</Link>
          <Link href="/hastighetsgranser" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Hastighetsgränser</Link>
          <Link href="/riskutbildning" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Riskutbildning</Link>
        </div>
        <span>&copy; 2026 Huvet (huvet.se). Byggt för svenska körkortselever.</span>
      </footer>
    </div>
  );
}
