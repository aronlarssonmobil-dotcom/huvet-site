import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Övningskörning – regler, handledarutbildning och krav 2026 | Huvet',
  description:
    'Allt om privat övningskörning i Sverige 2026. Handledarens krav, åldersgräns, handledarutbildning, vilken bil du får köra och hur du optimerar träningen.',
  keywords: [
    'övningskörning',
    'övningskörning regler',
    'handledarutbildning',
    'privat övningskörning',
    'övningskörning ålder',
    'övningskörning bil',
    'handledarutbildning trafikverket',
    'handledar krav körkort',
  ],
  alternates: { canonical: 'https://huvet.se/ovningskörning' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hur gammal måste handledaren vara?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Handledaren måste vara minst 24 år och ha haft giltigt B-körkort i minst 5 år. Båda kraven måste uppfyllas samtidigt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Måste handledaren ha handledarutbildning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, sedan 2012 krävs ett godkänt handledarutbildningstillstånd från Trafikverket. Utbildningen bokas och genomförs online eller på plats och tar ca 3 timmar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Från vilken ålder får man övningsköra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Du får börja övningsköra privat (med handledar­tillstånd) från 16 år. För att ta körkort måste du dock vara minst 18 år.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilken bil får man övningsköra i?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bilen måste vara registrerad och försäkrad. Det finns inget krav på dubbla pedaler för privat övningskörning från 2012, men bilen ska vara i trafikdugligt skick. Handledaren sitter alltid i framsätet bredvid eleven.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur många timmar övningskörning behöver man?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Det finns inget lagstadgat minsta antal timmar. De flesta behöver 40–80 timmar praktisk körning för att bli tillräckligt säkra. Kvaliteten på träningen är viktigare än antalet timmar.',
      },
    },
  ],
};

const facts = [
  { label: '24 år', sub: 'handledarens minimiålder', icon: '👤' },
  { label: '5 år', sub: 'körkort krävs av handledaren', icon: '📋' },
  { label: '16 år', sub: 'eleven kan börja', icon: '🚗' },
  { label: '~3 h', sub: 'handledarutbildning', icon: '🎓' },
];

const sections = [
  {
    title: 'Handledarens krav — exakt vad som gäller',
    content: [
      'Handledaren måste uppfylla tre krav: (1) minst 24 år gammal, (2) haft giltigt B-körkort i minst 5 år, och (3) ha godkänt handledarutbildningstillstånd från Trafikverket.',
      'Handledarutbildningen bokas via trafikverket.se och tar ungefär 3 timmar. Den kan göras online. Tillståndet knyts till handledaren och eleven — en handledare kan ha tillstånd för flera elever.',
      'Handledaren måste sitta i framsätet bredvid eleven. Det räcker inte att sitta baksätet och "övervaka". Trafikverket är tydliga på det.',
    ],
  },
  {
    title: 'Från vilken ålder och var man får köra',
    content: [
      'Du får börja övningsköra privat med handledar­tillstånd från 16 år. Minsta åldern för att ta B-körkort är dock 18 år — men de extra åren med övningskörning ger en enorm erfarenhetsbas.',
      'Övningskörning är tillåten på alla allmänna vägar i Sverige. Det finns inga specifika vägar du måste börja på — men det rekommenderas att börja lugnt (industriområden, parkeringsplatser) och successivt öka komplexiteten.',
      'Du får inte övningsköra utanför Sverige utan att kontrollera det landets regler. I Norge och Finland är reglerna liknande, men kontrollera alltid innan.',
    ],
  },
  {
    title: 'Vilken bil och vilka krav gäller?',
    content: [
      'Bilen måste vara registrerad, besiktad och försäkrad i Sverige. Den ska vara i trafikdugligt skick — fungerande belysning, bromsar, däck och säkerhetsbälten.',
      'Sedan 2012 krävs inte längre dubbla bromspedaler för privat övningskörning. Handledaren kan ingripa verbalt och genom att ta ratten vid behov.',
      'En automatväxlad bil ger körkortstillstånd för automatväxlad bil (BE-koden). Vill eleven ta vanligt B-körkort (som inkluderar manuell) måste eleven klara körprovet på manuell.',
    ],
  },
  {
    title: 'Hur du optimerar övningskörningen',
    content: [
      'Kombinera alltid teori och praktik parallellt. Det är ett vanligt misstag att köra massor av timmar utan att repetera teorireglerna — då lärs fel beteenden in utan att man vet om det.',
      'Variera träningsförhållandena: körkörning i dagslljus, mörker, regn, motorväg, stadstrafik, landsvägskörning och parkeringsmoment. Körprovet kan innehålla alla dessa element.',
      'Sikta på att klara simulerade teoriprov på 85%+ *medan* du kör praktiskt. De hänger ihop — förståelsen för varför man kör som man kör förstärker båda.',
      'De sista 2–3 veckorna innan körprovet: kör specifikt på de sträckor och situationer som liknar körprovets standard för din stad.',
    ],
  },
];

export default function OvningskörningPage() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#fff', minHeight: '100vh', color: '#0d1f17' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      {/* Header */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #e2efe9', padding: '0 20px',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ width: '36px', height: '36px', background: '#006B3F', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2"/>
                <circle cx="10" cy="10" r="2.5" fill="white"/>
                <line x1="10" y1="2" x2="10" y2="7.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3.4" y1="13.5" x2="7.8" y2="11.2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="16.6" y1="13.5" x2="12.2" y2="11.2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span style={{ fontSize: '20px', fontWeight: '900', color: '#0d1f17', letterSpacing: '-0.04em' }}>Huvet</span>
          </Link>
          <Link href="/#demo" style={{ background: '#006B3F', color: 'white', padding: '10px 22px', borderRadius: '999px', fontSize: '14px', fontWeight: '700', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Träna teorin gratis
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #f0f7f3 0%, #fff 60%)', padding: '64px 20px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <nav style={{ marginBottom: '20px', fontSize: '12px', color: '#888', display: 'flex', gap: '6px', alignItems: 'center' }}>
            <Link href="/" style={{ color: '#888', textDecoration: 'none' }}>Hem</Link>
            <span>›</span>
            <span style={{ color: '#0d1f17' }}>Övningskörning</span>
          </nav>
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#006B3F', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>
            Körkort 2026
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: '900', lineHeight: '1.05', color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.04em' }}>
            Övningskörning — regler och krav 2026
          </h1>
          <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#555', maxWidth: '600px', margin: '0 0 40px' }}>
            Handledarens ålderskrav, handledarutbildning, vilken bil du får köra och hur du lägger upp träningen optimalt.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginBottom: '48px' }}>
            {facts.map((f) => (
              <div key={f.label} style={{ background: 'white', border: '2px solid #e2efe9', borderRadius: '16px', padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{f.icon}</div>
                <div style={{ fontSize: '20px', fontWeight: '900', color: '#006B3F', lineHeight: 1 }}>{f.label}</div>
                <div style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: '#fff', padding: '0 20px 80px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {sections.map((s, i) => (
            <div key={i} style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: i < sections.length - 1 ? '1px solid #e2efe9' : 'none' }}>
              <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: '800', color: '#0d1f17', margin: '0 0 16px', letterSpacing: '-0.02em' }}>
                {s.title}
              </h2>
              {s.content.map((p, j) => (
                <p key={j} style={{ fontSize: '16px', lineHeight: '1.75', color: '#555', margin: '0 0 12px' }}>
                  {p}
                </p>
              ))}
            </div>
          ))}

          {/* Cross-links */}
          <div style={{ background: '#f0f7f3', borderRadius: '20px', padding: '28px', marginBottom: '48px' }}>
            <div style={{ fontWeight: '800', fontSize: '16px', color: '#0d1f17', marginBottom: '12px' }}>Relaterade guider</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                { href: '/teoriprov', label: '→ Teoriprov' },
                { href: '/korprov', label: '→ Körprov' },
                { href: '/korkortstips', label: '→ 15 körkortstips' },
                { href: '/korkortsfragor', label: '→ Körkortsfrågor' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ background: 'white', border: '2px solid #c3ddd2', borderRadius: '999px', padding: '8px 16px', fontSize: '14px', fontWeight: '600', color: '#006B3F', textDecoration: 'none' }}>{l.label}</Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ background: 'linear-gradient(135deg, #006B3F 0%, #004d2d 100%)', borderRadius: '24px', padding: '40px', textAlign: 'center', color: 'white' }}>
            <div style={{ fontSize: '28px', fontWeight: '900', marginBottom: '12px', letterSpacing: '-0.03em' }}>
              Träna teorin parallellt med körningen
            </div>
            <p style={{ fontSize: '16px', opacity: 0.8, marginBottom: '28px', maxWidth: '420px', margin: '0 auto 28px' }}>
              De som kombinerar praktik och strukturerad teoriträning klarar provet snabbare. Huvet anpassar sig till dina svagheter.
            </p>
            <Link href="/#demo" style={{ display: 'inline-block', background: 'white', color: '#006B3F', padding: '16px 36px', borderRadius: '999px', fontWeight: '800', textDecoration: 'none', fontSize: '16px' }}>
              Börja träna gratis →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: '900', color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em' }}>
            Vanliga frågor om övningskörning
          </h2>
          {pageJsonLd.mainEntity.map((faq, i) => (
            <div key={i} style={{ background: 'white', border: '2px solid #e2efe9', borderRadius: '16px', padding: '24px', marginBottom: '12px' }}>
              <div style={{ fontWeight: '800', fontSize: '16px', color: '#0d1f17', marginBottom: '8px' }}>{faq.name}</div>
              <p style={{ color: '#555', lineHeight: '1.65', fontSize: '15px', margin: 0 }}>{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#081610', color: 'rgba(255,255,255,0.4)', padding: '32px 20px', textAlign: 'center', fontSize: '13px' }}>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="/teoriprov" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Teoriprov</Link>
          <Link href="/korprov" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körprov</Link>
          <Link href="/korkortstips" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körkortstips</Link>
          <Link href="/korkortsfragor" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körkortsfrågor</Link>
          <Link href="/vagmarken" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Vägmärken</Link>
          <Link href="/mc" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>MC-körkort</Link>
        </div>
        <span>© 2026 Huvet (huvet.se). Byggt för svenska körkortselever. 🇸🇪</span>
      </footer>
    </div>
  );
}
