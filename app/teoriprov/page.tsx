import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Teoriprov körkort – allt du behöver veta 2026 | Huvet',
  description:
    'Komplett guide till teoriprovet för körkort i Sverige 2026. Hur det går till, vad det kostar, hur många frågor, godkäntgräns och hur du förbereder dig bäst.',
  keywords: [
    'teoriprov',
    'teoriprov körkort',
    'boka teoriprov',
    'teoriprov frågor',
    'teoriprov kostnad',
    'teoriprov godkänt',
    'körkortsteoriprov',
    'teoriprov hur många frågor',
    'trafikverket teoriprov',
  ],
  alternates: { canonical: 'https://huvet.se/teoriprov' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hur många frågor är teoriprovet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Teoriprovet består av 65 frågor. Du behöver minst 52 rätt (80%) för att bli godkänd. Provet har en tidsgräns på 50 minuter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad kostar teoriprovet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Teoriprovet för personbil (B-körkort) kostar 325 kr (2026). Om du inte klarar måste du betala på nytt och boka en ny tid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur bokar man teoriprovet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Du bokar teoriprovet via Trafikverkets bokningstjänst på trafikverket.se. Du kan också boka via en trafikskola. Ta med giltig legitimation till provet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur svårt är teoriprovet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ungefär 43% av alla som gör teoriprovet för första gången blir underkända. De vanligaste felen handlar om väjningsregler, vägmärken och situationsbaserade frågor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur länge gäller ett godkänt teoriprov?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ett godkänt teoriprov gäller i 4 månader. Under den tiden måste du klara körprovet. Annars måste du göra teoriprovet igen.',
      },
    },
  ],
};

const facts = [
  { label: '65 frågor', sub: 'per prov', icon: '📋' },
  { label: '52 rätt', sub: 'för godkänt (80%)', icon: '✅' },
  { label: '50 min', sub: 'tidsgräns', icon: '⏱️' },
  { label: '325 kr', sub: 'kostnad 2026', icon: '💳' },
];

const sections = [
  {
    title: 'Hur går teoriprovet till?',
    content: [
      'Teoriprovet görs digitalt på ett av Trafikverkets provcentra. Du sitter vid en datorskärm och svarar på 65 flervalsfrågor — de flesta är situationsbaserade och kan innehålla bilder eller filmklipp.',
      'Frågorna är hämtade från Transportstyrelsens officiella frågebank och täcker alla ämnesområden: trafikregler, vägmärken, fordon, miljö och säkerhet. Du har 50 minuter på dig.',
      'Resultatet visas direkt när du är klar. Du ser hur många du fick rätt och i vilka kategorier du hade svagheter — oavsett om du klarade eller inte.',
    ],
  },
  {
    title: 'Vad kostar teoriprovet 2026?',
    content: [
      'Teoriprovet för personbil (B-körkort) kostar 325 kr per tillfälle (2026). Priset gäller oavsett om du klarar eller inte.',
      'Om du underkänns behöver du boka och betala på nytt. Det finns ingen rabatt för omtagning. Det lönar sig alltså ekonomiskt att vara välförberedd.',
      'Jämfört med en hel körkortsutbildning (15 000–25 000 kr) är provet billigt — men underkänt kostar ändå 325 kr + väntetid + förlorad träningsmomentum.',
    ],
  },
  {
    title: 'Hur bokar du teoriprovet?',
    content: [
      'Du bokar via Trafikverkets hemsida (trafikverket.se) under "Boka prov". Logga in med BankID och välj stad, datum och tid.',
      'Det går också att boka via din trafikskola om du kör privat övningskörning. Ta alltid med giltig legitimation (körkort, pass eller nationellt ID-kort) till provtillfället.',
      'Tider kan vara begränsade i storstäder — boka minst 2–3 veckor i förväg för att få en bra tid.',
    ],
  },
  {
    title: 'Hur länge gäller ett godkänt teoriprov?',
    content: [
      'Ett godkänt teoriprov är giltigt i 4 månader. Under dessa 4 månader måste du göra och klara körprovet.',
      'Om du inte hinner klara körprovet inom 4 månader måste du göra teoriprovet på nytt — och betala igen.',
      'Tips: boka körprovet redan när du bokar teoriprovet. Välj ett körprovsdatum ca 3–6 veckor efter teoriprovet för att hinna öva tillräckligt.',
    ],
  },
  {
    title: 'Godkäntgräns och statistik',
    content: [
      'Du behöver minst 52 rätt av 65 frågor (80%) för att bli godkänd på teoriprovet. Det låter högt — och det är högt.',
      'Statistik från Trafikverket visar att ungefär 43% underkänns på sitt första försök. De vanligaste svaghetsområdena är väjningsregler i komplexa situationer, vägmärken man glömmer, och hastighetsfrågor med beräkning.',
      'Med rätt förberedelse (strukturerad träning på svaga områden, simulerade prov) ökar dina chanser avsevärt. Huvet-elever klarar provet i 94% av fallen.',
    ],
  },
];

export default function TeoriProvPage() {
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
            Träna gratis
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #f0f7f3 0%, #fff 60%)', padding: '64px 20px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <nav style={{ marginBottom: '20px', fontSize: '12px', color: '#888', display: 'flex', gap: '6px', alignItems: 'center' }}>
            <Link href="/" style={{ color: '#888', textDecoration: 'none' }}>Hem</Link>
            <span>›</span>
            <span style={{ color: '#0d1f17' }}>Teoriprov</span>
          </nav>
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#006B3F', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>
            Körkort 2026
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: '900', lineHeight: '1.05', color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.04em' }}>
            Teoriprov körkort — allt du behöver veta
          </h1>
          <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#555', maxWidth: '600px', margin: '0 0 40px' }}>
            Hur teoriprovet fungerar, vad det kostar, hur du bokar, godkäntgränsen och de vanligaste misstagen. Uppdaterat för 2026.
          </p>

          {/* Facts grid */}
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

      {/* Content sections */}
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

          {/* CTA block */}
          <div style={{ background: 'linear-gradient(135deg, #006B3F 0%, #004d2d 100%)', borderRadius: '24px', padding: '40px', textAlign: 'center', color: 'white' }}>
            <div style={{ fontSize: '28px', fontWeight: '900', marginBottom: '12px', letterSpacing: '-0.03em' }}>
              Klara teoriprovet på första försöket
            </div>
            <p style={{ fontSize: '16px', opacity: 0.8, marginBottom: '28px', maxWidth: '400px', margin: '0 auto 28px' }}>
              Huvet analyserar dina svagheter och ger dig ett exakt träningsupplägg. 94% av Huvet-elever klarar provet.
            </p>
            <Link href="/#demo" style={{ display: 'inline-block', background: 'white', color: '#006B3F', padding: '16px 36px', borderRadius: '999px', fontWeight: '800', textDecoration: 'none', fontSize: '16px' }}>
              Börja träna gratis →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ-section for rich results */}
      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: '900', color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em' }}>
            Vanliga frågor om teoriprovet
          </h2>
          {pageJsonLd.mainEntity.map((faq, i) => (
            <div key={i} style={{ background: 'white', border: '2px solid #e2efe9', borderRadius: '16px', padding: '24px', marginBottom: '12px' }}>
              <div style={{ fontWeight: '800', fontSize: '16px', color: '#0d1f17', marginBottom: '8px' }}>
                {faq.name}
              </div>
              <p style={{ color: '#555', lineHeight: '1.65', fontSize: '15px', margin: 0 }}>
                {faq.acceptedAnswer.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#081610', color: 'rgba(255,255,255,0.4)', padding: '32px 20px', textAlign: 'center', fontSize: '13px' }}>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="/korkortstips" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körkortslips</Link>
          <Link href="/korkortsfragor" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körkortsfrågor</Link>
          <Link href="/vagmarken" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Vägmärken</Link>
          <Link href="/mc" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>MC-körkort</Link>
          <Link href="/moped" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Mopedkörkort</Link>
        </div>
        <span>© 2026 Huvet (huvet.se). Byggt för svenska körkortselever. 🇸🇪</span>
      </footer>
    </div>
  );
}
