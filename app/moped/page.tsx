import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mopedkörkort 2026 – AM-behörighet, ålder och krav | Huvet',
  description:
    'Allt om mopedkörkort (AM-behörighet) i Sverige 2026. Skillnad på moped klass I och klass II, ålderskrav, teori, körprov och kostnad.',
  keywords: [
    'mopedkörkort',
    'am körkort',
    'am behörighet',
    'moped klass 1',
    'moped klass 2',
    'mopedkörkort ålder',
    'mopedkörkort krav',
    'mopedkörkort kostnad',
    'moped teori',
    'moped körprov',
  ],
  alternates: { canonical: 'https://huvet.se/moped' },
};

const facts = [
  {
    icon: '🛵',
    title: 'Moped klass I vs. klass II — det är stor skillnad',
    content: (
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '16px' }}>
          <div style={{ background: '#fef3c7', borderRadius: '14px', padding: '20px', border: '2px solid #f5d020' }}>
            <div style={{ fontWeight: '900', fontSize: '16px', color: '#0d1f17', marginBottom: '8px' }}>Moped klass I</div>
            <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '14px', color: '#555', lineHeight: '2' }}>
              <li>Max 45 km/h</li>
              <li>Max 4 kW (om elmotor)</li>
              <li>AM-körkort krävs</li>
              <li>Från 15 år</li>
              <li>Hjälm obligatorisk</li>
              <li>Får köra på cykelbana: NEJ</li>
              <li>Registrering + försäkring krävs</li>
            </ul>
          </div>
          <div style={{ background: '#e0f2fe', borderRadius: '14px', padding: '20px', border: '2px solid #7dd3fc' }}>
            <div style={{ fontWeight: '900', fontSize: '16px', color: '#0d1f17', marginBottom: '8px' }}>Moped klass II (cykel med motor)</div>
            <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '14px', color: '#555', lineHeight: '2' }}>
              <li>Max 30 km/h (självgående)</li>
              <li>Max 250 W</li>
              <li>Inget körkort krävs</li>
              <li>Från 15 år (åldersgräns)</li>
              <li>Hjälm ej obligatorisk (rekommenderas)</li>
              <li>Får köra på cykelbana: JA</li>
              <li>Registrering krävs ej</li>
            </ul>
          </div>
        </div>
        <p style={{ fontSize: '13px', color: '#888', marginTop: '12px', marginBottom: 0 }}>
          ⚠️ Tänk på: En "trimmad" moped som går fortare än tillåtet klassificeras om och kräver MC-körkort. Det är ett vanligt misstag som kan ge körförbud.
        </p>
      </div>
    ),
  },
  {
    icon: '📋',
    title: 'Vad krävs för AM-körkort (moped klass I)?',
    content: (
      <div>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '10px' }}>
          {[
            { step: '1', text: 'Uppfylla ålderskravet: minst 15 år' },
            { step: '2', text: 'Hälsodeklaration (synkrav etc.)' },
            { step: '3', text: 'Teoriprov hos Trafikverket (godkänd gräns: 52 av 65 frågor)' },
            { step: '4', text: 'Körprov (praktisk körning i trafik)' },
          ].map(s => (
            <div key={s.step} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ width: '28px', height: '28px', background: '#1DB954', borderRadius: '8px', color: 'white', fontSize: '12px', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {s.step}
              </div>
              <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#444', lineHeight: '1.5' }}>{s.text}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '16px', background: '#f0f7f3', borderRadius: '12px', padding: '14px 16px', border: '2px solid #e2efe9' }}>
          <p style={{ fontSize: '13px', color: '#1DB954', fontWeight: '700', margin: '0 0 4px' }}>💡 Privat övning</p>
          <p style={{ fontSize: '13px', color: '#555', margin: 0, lineHeight: '1.6' }}>
            Privat övningskörning för moped klass I är tillåten med handledare (24 år, B-körkort i 5 år). Trafikskola krävs inte, men rekommenderas.
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: '🧠',
    title: 'Teorin för AM-körkort — vad är annorlunda?',
    content: (
      <div>
        <p style={{ margin: '0 0 12px', lineHeight: '1.7', fontSize: '15px' }}>
          AM-teorin liknar B-teorin men har specifika tillägg och skillnader:
        </p>
        <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: '2.2', fontSize: '14px', color: '#555' }}>
          <li>Moped-specifika trafikregler (cykelbanor, hastighetsgränser)</li>
          <li>Stabilitet och körning (mopeder är mer känsliga i kurvor)</li>
          <li>Underhåll: däcktryck, bromskontroll, bränsle</li>
          <li>Samma väjningsregler som bilar gäller</li>
          <li>Hjälm-och skyddsutrustningsfrågor</li>
          <li>Vad som händer vid trimmning (lagpåföljder)</li>
        </ul>
        <div style={{ marginTop: '16px', background: '#fee2e2', borderRadius: '12px', padding: '14px 16px', border: '2px solid #fca5a5' }}>
          <p style={{ fontSize: '13px', color: '#dc2626', fontWeight: '700', margin: '0 0 4px' }}>⚠️ Vanligaste felet</p>
          <p style={{ fontSize: '13px', color: '#555', margin: 0, lineHeight: '1.6' }}>
            Många tror att moped klass I alltid får köra på cykelbana. Det stämmer inte — moped klass I ska köra på körbanan, precis som bilar. Cykelbanan är för moped klass II.
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: '⚖️',
    title: 'Regler du måste kunna för körprovet',
    content: (
      <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: '2.2', fontSize: '14px', color: '#555' }}>
        <li>Moped klass I: hastighet max 45 km/h alltid (även om vägen tillåter mer)</li>
        <li>Hjälm: alltid obligatorisk för förare och passagerare på moped klass I</li>
        <li>Passagerare: tillåtet på moped klass I om fordonet är konstruerat för det</li>
        <li>Ingen körning i motorväg — mopeder är förbjudna</li>
        <li>Moped ska inte hindra övrig trafik — håll dig till höger</li>
        <li>Samma krav på belysning som bilar (strålkastare alltid tänt)</li>
        <li>Promillegräns: 0,2 promille gäller — samma som för bilar</li>
      </ul>
    ),
  },
  {
    icon: '💰',
    title: 'Kostnad och tidplan',
    content: (
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
          {[
            { label: 'Teoriprov', cost: 'Ca 325 kr', note: 'Trafikverkets avgift' },
            { label: 'Körprov', cost: 'Ca 830 kr', note: 'Trafikverkets avgift' },
            { label: 'Trafikskola (valfritt)', cost: '2 000–6 000 kr', note: 'Varierar kraftigt' },
            { label: 'Total budget', cost: 'Ca 1 500–7 000 kr', note: 'Beroende på utbildning' },
          ].map(item => (
            <div key={item.label} style={{ background: '#fafcfb', borderRadius: '12px', padding: '16px', border: '2px solid #e2efe9' }}>
              <div style={{ fontSize: '12px', color: '#888', fontWeight: '700', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.label}</div>
              <div style={{ fontSize: '18px', fontWeight: '900', color: '#1DB954', marginBottom: '2px' }}>{item.cost}</div>
              <div style={{ fontSize: '12px', color: '#aaa' }}>{item.note}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: '🔄',
    title: 'Från AM till B-körkort — vad gäller?',
    content: (
      <p style={{ margin: 0, lineHeight: '1.7', fontSize: '15px', color: '#555' }}>
        AM-körkort ger inte automatisk rätt att köra bil. Du behöver ta B-körkort separat. Däremot räknas teoriprov och körprov separat — du behöver inte göra om teorin för B om du redan har AM (kontrollera aktuella regler hos Trafikverket). Har du B-körkort behöver du inte AM för att köra moped klass I.
      </p>
    ),
  },
];

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Mopedkörkort i Sverige – AM-behörighet guide',
  description: 'Allt om mopedkörkort (AM-behörighet) i Sverige. Moped klass I och II, ålderskrav, teori, körprov och vad som skiljer sig från bil- och MC-körkort.',
  url: 'https://huvet.se/moped',
  publisher: {
    '@type': 'Organization',
    name: 'Huvet',
    url: 'https://huvet.se',
  },
};

export default function MopedPage() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#fff', minHeight: '100vh', color: '#0d1f17' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Hur gammal måste man vara för att köra moped?', acceptedAnswer: { '@type': 'Answer', text: 'Du måste vara 15 år för att köra moped klass I (EU-moped, max 45 km/h) och ha AM-körkort. Moped klass II (EU-moped, max 30 km/h) får köras från 15 år utan körkort men kräver traktorkort.' } },
          { '@type': 'Question', name: 'Behöver man ta teoriprov för mopedkörkort?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, för AM-körkort (moped klass I) krävs teoriprov och körprov precis som för bilkörkort. Teoriprovet liknar bilteoriprovet men fokuserar på moped-specifika regler.' } },
          { '@type': 'Question', name: 'Vad kostar mopedkörkort?', acceptedAnswer: { '@type': 'Answer', text: 'AM-körkort kostar totalt 3 000–8 000 kr beroende på om du kör via trafikskola. Teoriprov kostar 400 kr och körprov ca 1 000 kr. Privatövning är billigare men kräver handledare.' } },
          { '@type': 'Question', name: 'Kan man köra moped med B-körkort?', acceptedAnswer: { '@type': 'Answer', text: 'Ja! Med B-körkort (bilkörkort) har du automatiskt rätt att köra moped klass I och II. Du behöver inte ta ett separat AM-körkort om du redan har B-körkort.' } },
        ],
      }) }} />

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
            Börja träna gratis
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #f0f7f3 0%, #fff 60%)', padding: '64px 20px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#1DB954', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>
            Mopedkörkort
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: '900', lineHeight: '1.1', color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.04em' }}>
            Mopedkörkort (AM) — komplett guide
          </h1>
          <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#555', margin: '0 0 20px' }}>
            Mopedkörkort i Sverige är inte samma sak som B-körkort — det finns egna teorifrågor, körprov och specifika regler. Och skillnaden mellan moped klass I och klass II är avgörande att känna till.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{ background: '#fef3c7', color: '#d97706', padding: '8px 16px', borderRadius: '999px', fontSize: '13px', fontWeight: '700' }}>Klass I: max 45 km/h, körkort krävs</div>
            <div style={{ background: '#e0f2fe', color: '#0369a1', padding: '8px 16px', borderRadius: '999px', fontSize: '13px', fontWeight: '700' }}>Klass II: max 30 km/h, inget körkort</div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '48px 20px 80px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {facts.map((item) => (
              <div key={item.title} style={{
                background: '#fafcfb',
                borderRadius: '20px',
                padding: '28px 32px',
                border: '2px solid #e2efe9',
              }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '28px', flexShrink: 0 }}>{item.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#0d1f17', margin: '0 0 14px' }}>
                      {item.title}
                    </h2>
                    <div style={{ fontSize: '15px', color: '#555' }}>
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: '48px', background: 'linear-gradient(160deg, #0d1f17 0%, #1a3a26 100%)', borderRadius: '24px', padding: '40px 32px', textAlign: 'center', color: 'white' }}>
            <h3 style={{ fontSize: '22px', fontWeight: '900', marginBottom: '12px' }}>Klara AM-teorin med Huvet</h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '24px', fontSize: '15px' }}>
              Huvet har specifika frågor för mopedkörkort — inkl. moped klass I-regler, hjälmkrav och trimmning.
            </p>
            <Link href="/#demo" style={{ background: '#1DB954', color: 'white', padding: '16px 32px', borderRadius: '999px', fontSize: '16px', fontWeight: '700', textDecoration: 'none', display: 'inline-block', boxShadow: '0 4px 20px rgba(0,107,63,0.4)' }}>
              Börja träna gratis →
            </Link>
          </div>

          {/* Also see */}
          <div style={{ marginTop: '32px', background: '#f0f7f3', borderRadius: '20px', padding: '24px 28px', border: '2px solid #e2efe9' }}>
            <div style={{ fontWeight: '800', color: '#0d1f17', marginBottom: '12px', fontSize: '15px' }}>Läs även</div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/mc" style={{ color: '#1DB954', fontWeight: '700', fontSize: '14px', textDecoration: 'none', background: '#e6f4ee', padding: '8px 16px', borderRadius: '999px' }}>MC-körkort (A-behörighet) →</Link>
              <Link href="/korkortstips" style={{ color: '#1DB954', fontWeight: '700', fontSize: '14px', textDecoration: 'none', background: '#e6f4ee', padding: '8px 16px', borderRadius: '999px' }}>15 körkortstips →</Link>
              <Link href="/korkortsfragor" style={{ color: '#1DB954', fontWeight: '700', fontSize: '14px', textDecoration: 'none', background: '#e6f4ee', padding: '8px 16px', borderRadius: '999px' }}>Vanliga körkortsfrågor →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#081610', color: 'rgba(255,255,255,0.4)', padding: '40px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', marginBottom: '32px' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: '800', fontSize: '18px' }}>Huvet</Link>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {[
                { href: '/teoriprov', label: 'Teoriprov' },
                { href: '/korprov', label: 'Körprov' },
                { href: '/ovningskörning', label: 'Övningskörning' },
                { href: '/korkort-kostnad', label: 'Körkort kostnad' },
                { href: '/intensivkurs', label: 'Intensivkurs' },
                { href: '/korkortstips', label: 'Körkortslips' },
                { href: '/vagmarken', label: 'Vägmärken' },
                { href: '/korkortsfragor', label: 'Körkortsfrågor' },
                { href: '/mc', label: 'MC-körkort' },
                { href: '/moped', label: 'Mopedkörkort' },
              ].map(({ href, label }) => (
                <Link key={href} href={href} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px' }}>{label}</Link>
              ))}
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px', fontSize: '13px' }}>
            © 2026 Huvet (huvet.se). Alla rättigheter förbehållna.
          </div>
        </div>
      </footer>
    </div>
  );
}
