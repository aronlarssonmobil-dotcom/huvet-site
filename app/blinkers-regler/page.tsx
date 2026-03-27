import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Blinkers regler – när ska man blinka? 2026 | Huvet',
  description:
    'Komplett guide till blinkers i trafiken. När du måste blinka, vanliga misstag, regler vid filbyte, korsningar, rondeller och parkering. Teoriprovskunskap.',
  keywords: [
    'blinkers regler',
    'när ska man blinka',
    'blinkers korsning',
    'blinkers rondell',
    'blinkers filbyte',
    'blinkers parkering',
    'blinkers körkort',
    'blinkers teoriprov',
    'glömma blinka straff',
    'blinkers regler Sverige',
  ],
  alternates: { canonical: 'https://huvet.se/blinkers-regler' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'När måste man använda blinkers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Du måste använda blinkers vid sväng i korsning, filbyte, körfältsbyte, start från stillastående vid vägkant, parkering/avfärd från p-plats, omkörning, och vid in-/utfart i rondell. Grundregeln: blinka alltid när du ändrar riktning eller position på vägen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ska man blinka i rondell?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja! Du ska blinka höger när du lämnar rondellen. Det är inte obligatoriskt att blinka vänster vid infart, men rekommenderas starkt om du ska ta en avfart längre bort — det hjälper andra trafikanter att förstå din avsikt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad händer om man inte blinkar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Att inte blinka kan leda till böter och är en vanlig orsak till underkänt på körprovet. Böter för att inte använda körriktningsvisare ligger på 1 500 kr. Vid körprov bedömer inspektören det som bristande kommunikation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ska man blinka vid filbyte på motorväg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolut. Varje filbyte på motorväg kräver blinkers — även om du tror att ingen ser. Blinkers ska sättas PÅ FÖRE filbytet, inte under. Blinka i god tid så att bakomvarande kan se din avsikt.',
      },
    },
  ],
};

const facts = [
  { label: 'Alltid', sub: 'vid riktningsändring', icon: '↗️' },
  { label: '1 500 kr', sub: 'böter utan blinkers', icon: '💰' },
  { label: 'Rondell', sub: 'blinka ut', icon: '🔄' },
  { label: 'Körprov', sub: 'vanlig kuggorsak', icon: '❌' },
];

const sections = [
  {
    title: 'Grundregeln för blinkers',
    content: [
      'Blinkers (körriktningsvisare) är bilens sätt att kommunicera med andra trafikanter. Grundregeln är enkel: blinka varje gång du ändrar riktning eller position på vägen. Det inkluderar svängar, filbyten, parkering och start från stillastående.',
      'Syftet med blinkers är att varna andra trafikanter om din avsikt INNAN du genomför manövern. Därför ska blinkers sättas på i god tid — inte mitt i svängen. Tumregel: börja blinka 3–5 sekunder innan du svänger eller byter fil.',
      'Att blinka är inte valfritt — det är ett lagkrav. Att inte blinka är en trafikförseelse som kan ge böter och som bedöms negativt vid körprovet.',
    ],
  },
  {
    title: 'Blinkers i korsningar',
    content: [
      'Sväng höger: Blinka höger i god tid innan korsningen. Börja blinka senast 30 meter innan (i tätort) eller 100 meter innan (utanför tätort). Sluta blinka automatiskt eller stäng av manuellt efter svängen.',
      'Sväng vänster: Blinka vänster. Placera dig i körbanans vänstra del (om det inte finns separat svängfil). Lämna företräde åt mötande trafik. Sväng när det är fritt.',
      'Kör rakt: Blinka INTE om du kör rakt genom en korsning. Att blinka utan att svänga är vilseledande och kan orsaka olyckor. Andra trafikanter kan tro att du svänger och agera därefter.',
    ],
  },
  {
    title: 'Blinkers i rondeller',
    content: [
      'In i rondellen: Det är inte obligatoriskt att blinka vänster vid infart, men det rekommenderas starkt om du ska åka mer än halvvägs runt. Det hjälper andra att förstå att du inte tar nästa avfart.',
      'Ut ur rondellen: Blinka ALLTID höger när du lämnar rondellen. Börja blinka strax innan din avfart — ungefär vid avfarten FÖRE den du ska ta. Det ger andra trafikanter tid att reagera.',
      'Vanligaste misstaget: Att inte blinka ut ur rondellen. Det skapar förvirring och farliga situationer — andra väntar på att du ska passera, men du svänger ut. Blinka höger varje gång du lämnar rondellen.',
    ],
  },
  {
    title: 'Blinkers vid filbyte och omkörning',
    content: [
      'Vid varje filbyte: Backspegel → sidospegel → dödvinkelkontroll → blinkers → filbyte. Samma ordning varje gång. Blinkers ska vara PÅ innan du börjar byta fil — inte samtidigt.',
      'Vid omkörning: Blinka vänster när du byter till omkörningsfilen. Kör om. Blinka höger när du återvänder till höger fil. Två separata blinkningar vid varje omkörning.',
      'På motorväg: Extra viktigt att blinka i god tid vid filbyte. Hastigheten är hög och andra trafikanter behöver mer tid att reagera. Blinka minst 3 sekunder innan filbytet.',
    ],
  },
  {
    title: 'Vanliga misstag och teoriprovsfrågor',
    content: [
      'Misstag 1: Blinka för sent. Blinkers ska sättas PÅ FÖRE manövern, inte under. Om du blinkar samtidigt som du svänger har det inget kommunikativt värde — andra har redan sett att du svänger.',
      'Misstag 2: Glömma att stänga av blinkers. Om blinkers inte stängs av automatiskt (en del bilar gör det), stäng av manuellt direkt efter manövern. Att köra med blinkers på utan att svänga vilseleder andra.',
      'Misstag 3: Tro att blinkers ger rätt. Att blinka ger dig INTE automatiskt företräde. Det är en avsiktsförklaring — andra ska fortfarande bedöma om det är säkert att släppa fram dig. Du måste fortfarande följa trafikreglerna.',
    ],
  },
];

export default function BlinkersReglerPage() {
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
          <Breadcrumbs items={[{ label: 'Hem', href: '/' }, { label: 'Trafikregler', href: '/trafikregler' }, { label: 'Blinkers regler' }]} />
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#006B3F', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>Trafikregler</div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 900, lineHeight: 1.05, color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.04em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Blinkers regler — när ska man blinka?
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#5a6b62', maxWidth: '600px', margin: '0 0 40px' }}>
            Blinkers är bilens viktigaste kommunikationsverktyg. Lär dig exakt när du måste blinka, vanliga misstag och reglerna för rondeller, filbyten och korsningar.
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
            <div style={{ fontSize: '28px', fontWeight: 900, marginBottom: '12px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Öva inför teoriprovet</div>
            <p style={{ fontSize: '16px', opacity: 0.85, marginBottom: '28px', maxWidth: '440px', margin: '0 auto 28px' }}>Blinkers, högerregeln, vägmärken — testa allt med Huvets 450+ körkortsfrågor.</p>
            <Link href="/#demo" style={{ display: 'inline-block', background: '#f5d020', color: '#0d1f17', padding: '16px 36px', borderRadius: '999px', fontWeight: 800, textDecoration: 'none', fontSize: '16px' }}>Börja träna gratis</Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 900, color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Vanliga frågor om blinkers</h2>
          {pageJsonLd.mainEntity.map((faq, i) => (
            <div key={i} style={{ background: 'white', border: '2px solid #dceee5', borderRadius: '16px', padding: '24px', marginBottom: '12px' }}>
              <div style={{ fontWeight: 800, fontSize: '16px', color: '#0d1f17', marginBottom: '8px' }}>{faq.name}</div>
              <p style={{ color: '#5a6b62', lineHeight: 1.65, fontSize: '15px', margin: 0 }}>{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}><RelatedGuides currentPath="/blinkers-regler" /></div>
      </section>

      <footer style={{ background: '#0d1f17', color: 'rgba(255,255,255,0.4)', padding: '32px 20px', textAlign: 'center', fontSize: '13px' }}>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="/trafikregler" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Trafikregler</Link>
          <Link href="/hogersregeln" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Högerregeln</Link>
          <Link href="/korning-pa-motorvag" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körning på motorväg</Link>
          <Link href="/vagmarken" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Vägmärken</Link>
        </div>
        <span>&copy; 2026 Huvet (huvet.se). Byggt för svenska körkortselever.</span>
      </footer>
    </div>
  );
}
