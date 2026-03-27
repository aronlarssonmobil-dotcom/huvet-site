import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Körprov körkort – hur det går till och hur du klarar det | Huvet',
  description:
    'Allt om körprovet för B-körkort i Sverige 2026. Hur provet går till, vad det kostar, vad provcertifikaten mäter och de vanligaste misstagen som leder till underkänt.',
  keywords: [
    'körprov',
    'körprov körkort',
    'boka körprov',
    'körprov kostnad',
    'körprov underkänt',
    'körprov tips',
    'körprov vad händer',
    'trafikverket körprov',
    'klara körprovet',
  ],
  alternates: { canonical: 'https://huvet.se/korprov' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hur lång tid tar körprovet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Körprovet tar normalt 40–45 minuter. Det inkluderar en kortare introduktion, körning i stadstrafik, eventuellt motorväg, och en avslutande bedömning. Du kör alltid med en enda provförrättare från Trafikverket.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad kostar körprovet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Körprovet för personbil (B-körkort) kostar 1 400 kr (2026). Om du underkänns måste du betala igen vid nästa tillfälle. Det lönar sig att vara välförberedd.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur många klarar körprovet på första försöket?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ungefär 50–55% klarar körprovet på första försöket. De vanligaste orsakerna till underkänt är: bristande observation (inte kolla tillräckligt), felaktig hastighetsbedömning och osäkerhet i korsningar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad bedöms under körprovet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Provförrättaren bedömer: iakttagelse och observation, hastighetsanpassning, utrymme/säkerhetsavstånd, väjningsplikt, kurvkörning, backning och manövrering, samt miljöanpassad körning. Allvarliga fel (t.ex. bräda en stoppskylt) leder direkt till underkänt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur länge gäller ett godkänt teoriprov inför körprovet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ett godkänt teoriprov gäller i 4 månader. Du måste klara körprovet inom den perioden. Annars måste du göra teoriprovet på nytt.',
      },
    },
  ],
};

const facts = [
  { label: '40–45 min', sub: 'provtid', icon: '⏱️' },
  { label: '1 400 kr', sub: 'kostnad 2026', icon: '💳' },
  { label: '~50%', sub: 'klarar första gången', icon: '🎯' },
  { label: '4 mån', sub: 'teoriprov gäller', icon: '📋' },
];

const sections = [
  {
    title: 'Hur går körprovet till?',
    content: [
      'Körprovet börjar med att du träffar provförrättaren vid Trafikverkets provstation. Du visar legitimation och ser till att fordonet uppfyller kraven (fungerande belysning, däck i skick, säkerhetsbälte).',
      'Körningen sker normalt i och runt den stad där provcentrat ligger. Du kör i verklig trafik — inte på avspärrade banor. Provet inkluderar vanligtvis: stadskörning, väjningsplikt i korsningar, eventuellt motorvägskörning, backning/manövrering och parkering.',
      'Provförrättaren sitter bredvid dig och observerar. De ger dig vägledning om var du ska köra men bedömer hela tiden ditt körbeteende. I slutet av provet får du direkt besked om du klarade eller inte.',
    ],
  },
  {
    title: 'Vad kostar körprovet 2026?',
    content: [
      'Körprovet för personbil (B-körkort) kostar 1 400 kr per tillfälle (2026). Till skillnad från teoriprovet (325 kr) är körprovet avsevärt dyrare — och tid med körskola kostar dessutom extra.',
      'Om du underkänns behöver du boka nytt prov och betala igen. Räkna med minst 2–4 veckors väntetid beroende på stad och tillgänglighet.',
      'Totala kostnaden för körkort i Sverige varierar kraftigt: 15 000–35 000 kr beroende på antal lektionstimmar och om du kör via trafikskola eller privat övningskörning.',
    ],
  },
  {
    title: 'De vanligaste misstagen på körprovet',
    content: [
      '1. Dålig observation — inte titta tillräckligt vid korsningar, backning eller filbyte. Provförrättaren ser om dina ögon rör sig.',
      '2. Felaktig hastighet — för snabbt in i kurvor eller för långsamt på höghastighetsvägar. Anpassa alltid till väglag och situation.',
      '3. Osäker väjningsplikt — tveksamhet i korsningar, missad stoppskylt eller fel prioritet i rondell. Dessa är direkta underkäntorsaker.',
      '4. Nervös körning — ryckiga inbromsningar, trög acceleration, inte flyta med trafiken. Regelbunden övning minskar nervositet markant.',
      '5. Backning och manövrering — många misslyckas specifikt med backningsmoment. Öva backning med referenspunkter tills det sitter.',
    ],
  },
  {
    title: 'Hur du maximerar chansen att klara på första försöket',
    content: [
      'Kör simulerade teoriprov och klara minst 85% konsekvent innan du bokar körprovet. Teorin och körningen hänger ihop — du måste kunna reglerna för att köra rätt.',
      'Boka körprovet ca 3–6 veckor efter teoriprovet. Det ger tid att öva praktiskt men du har teorin färsk i minnet.',
      'Kör i den stad där provet sker. Varje stad har sina vanliga provsträckor — träna specifikt på stadsdelarna runt provcentrat.',
      'Öva specifikt på de moment som flest underkänds på: observation i korsningar, rondeller och backning. Repeat tills det är automatiserat.',
    ],
  },
];

export default function KorprovPage() {
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
            <div style={{ width: '36px', height: '36px', background: '#1DB954', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
          <Link href="/#demo" style={{ background: '#1DB954', color: 'white', padding: '10px 22px', borderRadius: '999px', fontSize: '14px', fontWeight: '700', textDecoration: 'none', whiteSpace: 'nowrap' }}>
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
            <span style={{ color: '#0d1f17' }}>Körprov</span>
          </nav>
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#1DB954', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>
            Körkort 2026
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: '900', lineHeight: '1.05', color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.04em' }}>
            Körprov — allt du behöver veta för att klara det
          </h1>
          <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#555', maxWidth: '600px', margin: '0 0 40px' }}>
            Hur körprovet fungerar, vad det kostar, de vanligaste misstagen och hur du maximerar chansen att klara på första försöket.
          </p>

          {/* Facts grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginBottom: '48px' }}>
            {facts.map((f) => (
              <div key={f.label} style={{ background: 'white', border: '2px solid #e2efe9', borderRadius: '16px', padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{f.icon}</div>
                <div style={{ fontSize: '20px', fontWeight: '900', color: '#1DB954', lineHeight: 1 }}>{f.label}</div>
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
                { href: '/teoriprov', label: '→ Teoriprovet' },
                { href: '/korkortstips', label: '→ 15 körkortstips' },
                { href: '/korkortsfragor', label: '→ Körkortsfrågor' },
                { href: '/vagmarken', label: '→ Vägmärken' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ background: 'white', border: '2px solid #c3ddd2', borderRadius: '999px', padding: '8px 16px', fontSize: '14px', fontWeight: '600', color: '#1DB954', textDecoration: 'none' }}>{l.label}</Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ background: 'linear-gradient(135deg, #1DB954 0%, #17a34a 100%)', borderRadius: '24px', padding: '40px', textAlign: 'center', color: 'white' }}>
            <div style={{ fontSize: '28px', fontWeight: '900', marginBottom: '12px', letterSpacing: '-0.03em' }}>
              Klara teorin — kör vidare
            </div>
            <p style={{ fontSize: '16px', opacity: 0.8, marginBottom: '28px', maxWidth: '400px', margin: '0 auto 28px' }}>
              Innan körprovet måste teorin sitta. Huvet analyserar dina svagheter och ger dig ett exakt träningsupplägg.
            </p>
            <Link href="/#demo" style={{ display: 'inline-block', background: 'white', color: '#1DB954', padding: '16px 36px', borderRadius: '999px', fontWeight: '800', textDecoration: 'none', fontSize: '16px' }}>
              Börja träna gratis →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: '900', color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em' }}>
            Vanliga frågor om körprovet
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
          <Link href="/ovningskörning" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Övningskörning</Link>
          <Link href="/korkort-kostnad" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körkort kostnad</Link>
          <Link href="/intensivkurs" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Intensivkurs</Link>
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
