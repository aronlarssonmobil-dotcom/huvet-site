import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Körning i mörker – belysning, risker och tips 2026 | Huvet',
  description:
    'Guide till säker körning i mörker. Halvljus, helljus, dimljus, bländning, viltolycksr och hur du anpassar körningen. Vanliga teoriprovsfrågor förklarade.',
  keywords: [
    'körning i mörker',
    'köra i mörker tips',
    'helljus halvljus regler',
    'bländning mötande',
    'viltolycka mörker',
    'belysning bil regler',
    'dimljus regler',
    'nattkörning',
    'körning mörker teoriprov',
    'ljus bil körkort',
  ],
  alternates: { canonical: 'https://huvet.se/korning-i-morker' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'När ska man använda helljus?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Helljus används på mörka vägar utan gatubelysning när det inte finns mötande trafik, fordon framför dig, eller gående/cyklister som kan bländas. Du måste byta till halvljus minst 200 meter innan du möter en annan trafikant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad ska man göra om man bländas av mötande bil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Titta inte rakt in i ljuset. Rikta blicken nedåt och åt höger mot vägkanten. Sänk hastigheten. Blinka inte tillbaka med helljus — det bländar den mötande föraren och skapar en farlig situation för båda.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilken belysning är obligatorisk på bil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I Sverige måste du alltid köra med minst halvljus (eller varselljus) — även på dagtid. I mörker: halvljus eller helljus, plus bakljus och skyltbelysning. Dimljus bak får bara användas vid kraftig dimma.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur undviker man viltolyckor i mörker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Var extra uppmärksam i gryning och skymning. Sänk hastigheten vid varningsskyltar för vilt. Håll koll på dikeskanterna — ögon reflekterar ljus. Om du ser ett djur: sänk hastigheten, tuta, och var beredd att stanna. Väj aldrig för älg — risken för dikeskörning är stor.',
      },
    },
  ],
};

const facts = [
  { label: '200 m', sub: 'byt till halvljus', icon: '💡' },
  { label: '50%', sub: 'av dödsolyckor i mörker', icon: '⚠️' },
  { label: 'Halvljus', sub: 'alltid obligatoriskt', icon: '🔦' },
  { label: 'Gryning', sub: 'högst viltrisk', icon: '🦌' },
];

const sections = [
  {
    title: 'Varför är körning i mörker farligare?',
    content: [
      'Cirka 50% av alla dödsolyckor i trafiken sker i mörker, trots att bara 25% av körningen sker då. Orsaken: sämre sikt, svårare att bedöma avstånd och hastighet, trötthet och ökad risk för viltolyckor.',
      'Med halvljus ser du bara 30–50 meter framåt. Med helljus 100–200 meter. Jämför det med att du vid 90 km/h behöver ca 70 meters stoppsträcka — marginalerna är minimala.',
      'Mörker påverkar också din perception: du uppfattar hastigheter som lägre än de faktiskt är, du ser fotgängare och cyklister sämre (speciellt i mörka kläder), och din reaktionstid ökar pga trötthet.',
    ],
  },
  {
    title: 'Halvljus, helljus och dimljus — reglerna',
    content: [
      'Halvljus: Obligatoriskt i Sverige dygnet runt (alternativt varselljus på dagtid). I mörker ger halvljus sikt ca 30–50 meter. Halvljus ska användas vid mötande trafik, i tätort med gatubelysning och när du kör bakom andra fordon.',
      'Helljus: Används på mörka vägar utan belysning och utan mötande trafik. Ger sikt 100–200 meter. Du MÅSTE byta till halvljus senast 200 meter innan du möter annan trafikant, och även om det finns fordon framför dig (du bländar via deras speglar).',
      'Dimljus fram: Får användas som komplement till halvljus vid dimma, kraftigt regn eller snöfall. Dimljus bak: Får BARA användas vid kraftigt nedsatt sikt (under 150 m). Att köra med bakre dimljus i klart väder bländar bakomvarande och är förbjudet.',
    ],
  },
  {
    title: 'Bländning — vad du gör',
    content: [
      'Om du bländas av mötande bil: Rikta blicken nedåt och åt höger mot vägkanten. Använd vägkantlinjen som referens. Sänk hastigheten. BLINKA INTE med helljuset tillbaka — det hjälper ingen och skapar dubbel risk.',
      'Om du bländas bakifrån: Fäll innerbackspegeln till mörkerläge (de flesta bilar har en spak under spegeln). Det minskar ljusstyrkan från bakomvarande fordon avsevärt.',
      'Förebygg bländning: Håll vindrutan ren — smuts och imma sprider ljuset och förvärrar bländning. Se till att dina egna strålkastare är korrekt inställda — felriktade halvljus bländar mötande.',
    ],
  },
  {
    title: 'Viltolyckor — risker och förebyggande',
    content: [
      'Sverige har ca 60 000 viltolyckor per år — de flesta sker i gryning och skymning. Älg, rådjur och vildsvin är vanligast. En kollision med älg i 80 km/h är livsfarlig — älgen väger 300–600 kg.',
      'Varningsskyltar: Gula trianglar med djursymbol visar att viltstråk finns i närheten. Sänk hastigheten. Var extra uppmärksam i skogrika områden, nära vatten och vid fält med grödor.',
      'Om du ser ett djur: Sänk hastigheten. Tuta. Blinka med helljuset. Om kollision är oundviklig: bromsa rakt och håll ratten rak. Väj INTE — risken att köra i diket eller kollidera med mötande trafik är större än att träffa djuret (gäller speciellt älg).',
    ],
  },
  {
    title: 'Tips för säker körning i mörker',
    content: [
      'Hastighetsanpassning: Kör aldrig fortare än att du kan stanna inom den sträcka du kan se. Med halvljus innebär det max 50–70 km/h på mörk väg. Många kör för fort i mörker.',
      'Undvik trötthetskörning: Mörker ökar tröttheten. Planera pauser var 2:a timme. Känn igen tecken: gäspningar, tunga ögonlock, svårt att hålla filposition. Om du blir trött: stanna och vila 20 minuter.',
      'Håll bilen synbar: Se till att alla lampor fungerar. Reflexer och lyktor ska vara rena. Om du stannar vid vägen: parkera helt utanför körbanan, slå på varningsblinkers och sätt ut varningstriangel.',
    ],
  },
];

export default function KorningIMorkerPage() {
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
          <Breadcrumbs items={[{ label: 'Hem', href: '/' }, { label: 'Körning i mörker' }]} />
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#006B3F', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>Väder & körning</div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 900, lineHeight: 1.05, color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.04em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Körning i mörker — belysning, risker och tips
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#5a6b62', maxWidth: '600px', margin: '0 0 40px' }}>
            Hälften av alla dödsolyckor sker i mörker. Lär dig reglerna för belysning, hur du hanterar bländning, undviker viltolyckor och kör säkert.
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
            <div style={{ fontSize: '28px', fontWeight: 900, marginBottom: '12px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Öva belysningsfrågor</div>
            <p style={{ fontSize: '16px', opacity: 0.85, marginBottom: '28px', maxWidth: '440px', margin: '0 auto 28px' }}>Helljus, halvljus, dimljus — vanliga ämnen på teoriprovet. Öva med 450+ körkortsfrågor på Huvet.</p>
            <Link href="/#demo" style={{ display: 'inline-block', background: '#f5d020', color: '#0d1f17', padding: '16px 36px', borderRadius: '999px', fontWeight: 800, textDecoration: 'none', fontSize: '16px' }}>Börja träna gratis</Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 900, color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Vanliga frågor om körning i mörker</h2>
          {pageJsonLd.mainEntity.map((faq, i) => (
            <div key={i} style={{ background: 'white', border: '2px solid #dceee5', borderRadius: '16px', padding: '24px', marginBottom: '12px' }}>
              <div style={{ fontWeight: 800, fontSize: '16px', color: '#0d1f17', marginBottom: '8px' }}>{faq.name}</div>
              <p style={{ color: '#5a6b62', lineHeight: 1.65, fontSize: '15px', margin: 0 }}>{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}><RelatedGuides currentPath="/korning-i-morker" /></div>
      </section>

      <footer style={{ background: '#0d1f17', color: 'rgba(255,255,255,0.4)', padding: '32px 20px', textAlign: 'center', fontSize: '13px' }}>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="/korning-i-regn" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körning i regn</Link>
          <Link href="/korning-pa-motorvag" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körning på motorväg</Link>
          <Link href="/hastighetsgranser" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Hastighetsgränser</Link>
          <Link href="/riskutbildning" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Riskutbildning</Link>
        </div>
        <span>&copy; 2026 Huvet (huvet.se). Byggt för svenska körkortselever.</span>
      </footer>
    </div>
  );
}
