import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gratis körkortsövning online – öva inför teoriprovet 2026 | Huvet',
  description:
    'Öva körkortsfrågor gratis online inför teoriprovet 2026. Huvet ger dig ett personaliserat övningsprov baserat på dina svagheter — 450+ riktiga teorifrågor.',
  keywords: [
    'gratis körkortsövning',
    'körkortsprov online',
    'övningsprov körkort',
    'öva teoriprov gratis',
    'körkortsfrågor online gratis',
    'teoriprov övning',
    'öva körkort online',
    'körkortstest gratis',
    'gratis teoriprov',
    'övningsprov körkort gratis',
    'körkortsprov öva',
  ],
  alternates: { canonical: 'https://huvet.se/ovningsprov' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Kan jag öva körkortsfrågor gratis online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Huvet erbjuder gratis körkortsövning online med 450+ riktiga teorifrågor. Du behöver inte skapa ett konto för att börja öva.',
      },
    },
    {
      '@type': 'Question',
      name: 'Liknar övningsprovets frågor de riktiga teoriprovsfrågorna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Frågorna är baserade på Transportstyrelsens officiella frågebank och täcker samma ämnesområden som det riktiga teoriprovet: väjningsregler, vägmärken, hastighetsgränser, fordon och miljö.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur många frågor har Huvets övningsprov?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Huvet har över 450 övningsfrågor fördelade på 38 kategorier. Systemet väljer frågor baserat på dina svagheter — inte slumpmässigt.',
      },
    },
  ],
};

const benefits = [
  {
    icon: '🎯',
    title: 'Inte slumpmässig drill',
    body: 'Huvet analyserar vilka kategorier du missar mest och lägger mer vikt på dem. Du slösar inte tid på det du redan kan.',
  },
  {
    icon: '📊',
    title: 'Se din provberedskap i realtid',
    body: 'En provberedskapspoäng (0–100%) uppdateras efter varje fråga. Du vet exakt när du är redo att boka teoriprovet.',
  },
  {
    icon: '🇸🇪',
    title: 'Förklaringar på riktig svenska',
    body: 'Varje svar har en förklaring skriven på vanlig svenska — inte torr läroboksstil. Sitter snabbare i minnet.',
  },
  {
    icon: '⚡',
    title: 'Ingen inloggning krävs',
    body: 'Börja öva direkt — inga konton, inga kreditkort. Full tillgång till 50 frågor utan registrering.',
  },
];

const stats = [
  { number: '94%', label: 'av Huvets elever godkänns' },
  { number: '450+', label: 'övningsfrågor' },
  { number: '38', label: 'kategorier' },
  { number: '3,5 v', label: 'genomsnittlig studietid' },
];

export default function OvningsprovPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#fafaf8', color: '#0d1f17', fontFamily: 'var(--font-inter, system-ui, sans-serif)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      {/* Header */}
      <header style={{ borderBottom: '1px solid #e8e5de', background: '#fafaf8' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontWeight: 900, fontSize: '20px', color: '#0d1f17', textDecoration: 'none', letterSpacing: '-0.03em' }}>
            Huvet
          </Link>
          <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <Link href="/teoriprov" style={{ color: '#555', fontSize: '14px', textDecoration: 'none' }}>Teoriprov</Link>
            <Link href="/korkortstips" style={{ color: '#555', fontSize: '14px', textDecoration: 'none' }}>Tips</Link>
            <Link href="/" style={{ background: '#f5d020', color: '#0d1f17', fontWeight: 700, fontSize: '14px', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none' }}>
              Börja öva
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px 60px' }}>
        <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', margin: '0 0 16px' }}>
          Gratis körkortsövning online
        </p>
        <h1 style={{ fontSize: 'clamp(42px, 6vw, 76px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.04em', margin: '0 0 24px', maxWidth: '820px' }}>
          Öva inför teoriprovet.<br />
          <span style={{ color: '#888' }}>Gratis. Utan inloggning.</span>
        </h1>
        <p style={{ fontSize: '20px', lineHeight: 1.6, color: '#555', maxWidth: '560px', margin: '0 0 40px' }}>
          450+ riktiga körkortsf­rågor. Huvet hittar dina svagheter och fokuserar träningen dit — istället för slumpmässig drill.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/" style={{ background: '#f5d020', color: '#0d1f17', fontWeight: 800, fontSize: '17px', padding: '16px 32px', borderRadius: '12px', textDecoration: 'none', display: 'inline-block' }}>
            Starta övningsprov →
          </Link>
          <Link href="/korkortsfragor" style={{ background: 'transparent', color: '#0d1f17', fontWeight: 600, fontSize: '17px', padding: '16px 32px', borderRadius: '12px', textDecoration: 'none', border: '2px solid #e8e5de', display: 'inline-block' }}>
            Se vanliga frågor
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#0d1f17', padding: '48px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px', textAlign: 'center' }}>
          {stats.map((s) => (
            <div key={s.number}>
              <div style={{ fontSize: '48px', fontWeight: 900, color: '#f5d020', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.number}</div>
              <div style={{ fontSize: '15px', color: '#aaa', marginTop: '8px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px' }}>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, letterSpacing: '-0.03em', margin: '0 0 48px' }}>
          Varför Huvets övningsprov slår vanliga apper
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {benefits.map((b) => (
            <div key={b.title} style={{ background: '#fff', border: '1px solid #e8e5de', borderRadius: '20px', padding: '28px' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>{b.icon}</div>
              <div style={{ fontWeight: 800, fontSize: '17px', marginBottom: '8px', letterSpacing: '-0.02em' }}>{b.title}</div>
              <div style={{ fontSize: '15px', color: '#666', lineHeight: 1.6 }}>{b.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#f3f0e8', padding: '80px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 900, letterSpacing: '-0.03em', margin: '0 0 40px' }}>
            Vanliga frågor om körkortsövning online
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {pageJsonLd.mainEntity.map((item) => (
              <div key={item.name} style={{ background: '#fff', borderRadius: '16px', padding: '24px', border: '1px solid #e8e5de' }}>
                <div style={{ fontWeight: 700, fontSize: '16px', marginBottom: '8px' }}>{item.name}</div>
                <div style={{ fontSize: '15px', color: '#555', lineHeight: 1.6 }}>{item.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, letterSpacing: '-0.03em', margin: '0 0 16px' }}>
          Redo att börja öva?
        </h2>
        <p style={{ fontSize: '18px', color: '#666', margin: '0 0 32px' }}>
          Inget konto. Inget kreditkort. 5 frågor visar exakt var du behöver jobba.
        </p>
        <Link href="/" style={{ background: '#f5d020', color: '#0d1f17', fontWeight: 800, fontSize: '18px', padding: '18px 40px', borderRadius: '14px', textDecoration: 'none', display: 'inline-block' }}>
          Starta gratis övningsprov →
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #e8e5de', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
          <Link href="/teoriprov" style={{ color: '#888', fontSize: '14px', textDecoration: 'none' }}>Teoriprov</Link>
          <Link href="/korprov" style={{ color: '#888', fontSize: '14px', textDecoration: 'none' }}>Körprov</Link>
          <Link href="/korkortstips" style={{ color: '#888', fontSize: '14px', textDecoration: 'none' }}>Tips</Link>
          <Link href="/korkortsfragor" style={{ color: '#888', fontSize: '14px', textDecoration: 'none' }}>Frågor & svar</Link>
          <Link href="/korkort-kostnad" style={{ color: '#888', fontSize: '14px', textDecoration: 'none' }}>Kostnad</Link>
        </div>
        <p style={{ color: '#aaa', fontSize: '13px', marginTop: '20px' }}>© 2026 Huvet</p>
      </footer>
    </main>
  );
}
