import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Högerregeln – förklaring, exempel och undantag 2026 | Huvet',
  description:
    'Förstå högerregeln i trafiken. Enkel förklaring med exempel, illustrationer och vanliga misstag. Lär dig när högerregeln gäller och när den inte gäller.',
  keywords: [
    'högerregeln',
    'högerregeln trafik',
    'högerregeln förklaring',
    'högerregeln exempel',
    'högerregeln korsning',
    'högerregeln undantag',
    'väjningsplikt höger',
    'högerregeln körkort',
    'högerregeln teoriprov',
  ],
  alternates: { canonical: 'https://huvet.se/hogersregeln' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad innebär högerregeln?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Högerregeln innebär att du ska lämna företräde åt fordon som kommer från höger i en korsning där ingen annan reglering (vägmärke, trafiksignal eller trafikpolis) anger något annat.',
      },
    },
    {
      '@type': 'Question',
      name: 'När gäller inte högerregeln?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Högerregeln gäller inte när det finns vägmärken (stopplikt, väjningsplikt, huvudled), trafiksignaler, trafikpolis som dirigerar, vid utfart från parkeringsplats/fastighet, eller på motorväg.',
      },
    },
    {
      '@type': 'Question',
      name: 'Gäller högerregeln i rondeller?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I de flesta rondeller i Sverige finns väjningspliktsskyltar vid infarten, så högerregeln gäller normalt inte. Men om en rondell saknar skyltar gäller tekniskt sett högerregeln — den som kommer in i rondellen har då företräde framför den som redan kör i rondellen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur fungerar högerregeln i en korsning med fyra vägar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I en fyrvägskorsning utan vägmärken gäller högerregeln. Du väjer för den som kommer från höger. Om alla fyra bilar kommer samtidigt ska förarna visa hänsyn och kommunicera — det finns ingen formell regel för det exakta scenariot.',
      },
    },
  ],
};

const facts = [
  { label: 'Höger', sub: 'väj för höger', icon: '➡️' },
  { label: '~30%', sub: 'av teorifrågor', icon: '📝' },
  { label: 'Ej motorväg', sub: 'gäller ej där', icon: '🛣️' },
  { label: 'Grundregel', sub: 'utan skylt/signal', icon: '⚖️' },
];

const sections = [
  {
    title: 'Vad är högerregeln?',
    content: [
      'Högerregeln är en av de mest grundläggande trafikreglerna i Sverige. Den innebär att du i en korsning utan annan reglering ska lämna företräde åt fordon som närmar sig från höger.',
      'Regeln gäller i korsningar som saknar vägmärken (väjningsplikt, stopplikt, huvudled), trafiksignaler och dirigering av trafikpolis. Det är alltså en "defaultregel" — den gäller när inget annat säger annorlunda.',
      'Högerregeln är en av de vanligaste frågorna på teoriprovet. Trafikverket testar den i många varianter — med bilar, cyklister och fotgängare. Att förstå högerregeln på djupet är avgörande för att klara provet.',
    ],
  },
  {
    title: 'Så fungerar högerregeln — steg för steg',
    content: [
      'Scenario 1: Du kör rakt fram i en korsning. En bil närmar sig från höger. Ingen skylt finns. → Du ska stanna och släppa fram bilen från höger. Den har företräde enligt högerregeln.',
      'Scenario 2: Du kör rakt fram. En bil kommer från vänster. Ingen skylt finns. → Du har företräde! Bilen från vänster ska väja för dig, eftersom du kommer från deras höger.',
      'Scenario 3: Tre bilar möts i en korsning — en från varje riktning. Alla måste kolla sitt höger. Den som inte har någon bil från höger kör först. Sedan löser sig resten i ordning. Tänk steg-för-steg, inte alla samtidigt.',
    ],
  },
  {
    title: 'När gäller INTE högerregeln?',
    content: [
      'Vägmärken åsidosätter högerregeln: Om det finns en väjningspliktsskylt, stoppskylt eller skylt för huvudled bestämmer skylten — inte högerregeln. Skyltar har alltid högre prioritet.',
      'Trafiksignaler: Rött, gult och grönt ljus bestämmer vem som kör. Högerregeln är irrelevant vid trafikljus (förutsatt att de fungerar). Vid trasiga trafikljus gäller dock uppsatta vägmärken, eller i sista hand högerregeln.',
      'Utfarter: Om du kör ut från en parkering, bensinstation, gårdsväg eller fastighet har du ALLTID väjningsplikt mot all trafik på vägen — oavsett från vilket håll de kommer. Högerregeln gäller inte vid utfarter.',
    ],
  },
  {
    title: 'Högerregeln och cyklister',
    content: [
      'En vanlig missuppfattning är att cyklister inte omfattas av högerregeln. Det stämmer inte — cyklister är fordon och högerregeln gäller lika mycket för dem som för bilar.',
      'Om en cyklist kommer från höger i en korsning utan skylt ska du som bilist stanna och släppa fram cyklisten. Många missar detta på teoriprovet.',
      'Undantag: Cyklister som korsar en väg på en cykelpassage (markerad med vita fyrkanter) har normalt väjningsplikt mot fordonstrafiken om inget annat anges. Men om cykelpassagen har en egen signal gäller den.',
    ],
  },
  {
    title: 'Vanliga misstag på teoriprovet',
    content: [
      'Misstag 1: Tro att den som kör på en "större" väg alltid har företräde. Utan skyltar gäller högerregeln — oavsett vägbredd. En bil från en smal gata har företräde om den kommer från höger.',
      'Misstag 2: Glömma att utfart alltid innebär väjningsplikt. Kommer du från en parkering eller gård ska du väja för alla — högerregeln gäller inte.',
      'Misstag 3: Blanda ihop högerregeln med väjningsplikt vid sväng. Om du svänger vänster i en korsning utan skyltar ska du lämna företräde åt mötande trafik — det är en separat regel från högerregeln.',
    ],
  },
];

export default function HogersregelnPage() {
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
          <Breadcrumbs items={[{ label: 'Hem', href: '/' }, { label: 'Trafikregler', href: '/trafikregler' }, { label: 'Högerregeln' }]} />
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#006B3F', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>Trafikregler</div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 900, lineHeight: 1.05, color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.04em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Högerregeln — förklaring, exempel och undantag
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#5a6b62', maxWidth: '600px', margin: '0 0 40px' }}>
            Högerregeln är grundregeln i svenska korsningar. Förstå exakt hur den fungerar, när den gäller och — lika viktigt — när den inte gäller.
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
            <div style={{ fontSize: '28px', fontWeight: 900, marginBottom: '12px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Testa dina kunskaper</div>
            <p style={{ fontSize: '16px', opacity: 0.85, marginBottom: '28px', maxWidth: '440px', margin: '0 auto 28px' }}>Öva på högerregeln och alla andra trafikregler med Huvets övningsprov. 450+ frågor som förbereder dig för teoriprovet.</p>
            <Link href="/#demo" style={{ display: 'inline-block', background: '#f5d020', color: '#0d1f17', padding: '16px 36px', borderRadius: '999px', fontWeight: 800, textDecoration: 'none', fontSize: '16px' }}>Börja träna gratis</Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 900, color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Vanliga frågor om högerregeln</h2>
          {pageJsonLd.mainEntity.map((faq, i) => (
            <div key={i} style={{ background: 'white', border: '2px solid #dceee5', borderRadius: '16px', padding: '24px', marginBottom: '12px' }}>
              <div style={{ fontWeight: 800, fontSize: '16px', color: '#0d1f17', marginBottom: '8px' }}>{faq.name}</div>
              <p style={{ color: '#5a6b62', lineHeight: 1.65, fontSize: '15px', margin: 0 }}>{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}><RelatedGuides currentPath="/hogersregeln" /></div>
      </section>

      <footer style={{ background: '#0d1f17', color: 'rgba(255,255,255,0.4)', padding: '32px 20px', textAlign: 'center', fontSize: '13px' }}>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="/trafikregler" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Trafikregler</Link>
          <Link href="/vagmarken" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Vägmärken</Link>
          <Link href="/teoriprov" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Teoriprov</Link>
          <Link href="/stopplikt-vs-vajningsplikt" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Stopplikt vs väjningsplikt</Link>
        </div>
        <span>&copy; 2026 Huvet (huvet.se). Byggt för svenska körkortselever.</span>
      </footer>
    </div>
  );
}
