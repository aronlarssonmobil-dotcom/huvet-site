import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MC-körkort 2026 – A-körkort klasser, krav och pris | Huvet',
  description:
    'Komplett guide till MC-körkort (A-körkort) i Sverige 2026. Körkortsklasser A, A2 och A1 — ålderskrav, teori, körprov, kostnad och vad som skiljer sig mot B-körkort.',
  keywords: [
    'mc körkort',
    'mc körkort Sverige',
    'a körkort',
    'motorcykelkörkort',
    'mc körkort ålder',
    'mc körkort krav',
    'mc körkort kostnad',
    'mc körkort 2026',
    'a2 körkort',
    'a1 körkort',
    'motorcykel teori',
  ],
  alternates: { canonical: 'https://huvet.se/mc' },
};

const differences = [
  {
    icon: '📋',
    title: 'Körkortsklasserna för MC',
    body: (
      <div>
        <p style={{ margin: '0 0 12px' }}>Det finns tre MC-klasser:</p>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '8px' }}>
          {[
            { label: 'A1 — Lätt motorcykel', desc: 'Från 16 år. Max 11 kW (15 hk), max 125 cc. Kräver AM-körkort sedan tidigare (eller separat teori+praktik). Kan inte uppgraderas direkt till A2.' },
            { label: 'A2 — Mellanklass', desc: 'Från 18 år. Max 35 kW (48 hk), ej fler än 2:1 effektförhållande mot originalversion. Vanligaste startpunkten för unga vuxna.' },
            { label: 'A — Obegränsad motorcykel', desc: 'Från 24 år direkt, eller från 20 år om du haft A2 i minst 2 år (progressiv tillgång). Inga effektbegränsningar.' },
          ].map(cls => (
            <div key={cls.label} style={{ background: '#f0f7f3', borderRadius: '12px', padding: '14px 16px', border: '2px solid #e2efe9' }}>
              <div style={{ fontWeight: '800', fontSize: '15px', color: '#0d1f17', marginBottom: '4px' }}>{cls.label}</div>
              <div style={{ fontSize: '13px', color: '#555', lineHeight: '1.6' }}>{cls.desc}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: '🧠',
    title: 'Teorin är ANNORLUNDA från B-provet',
    body: (
      <p style={{ margin: 0, lineHeight: '1.7' }}>
        MC-teorin innehåller specifika frågor om motorcycle-dynamik: bromssträcka (motorcyklar stannar annorlunda), kurvor (lutning, centrifugalkraft), stabilitet, fällor i vägbanan och defensiv körning. Det är inte tillräckligt att plugga bara B-teorin — du behöver MC-specifika frågor. Huvet har separata bankgrupper för MC.
      </p>
    ),
  },
  {
    icon: '🔧',
    title: 'Obligatorisk körkortsutbildning — inga genvägar',
    body: (
      <div>
        <p style={{ margin: '0 0 12px', lineHeight: '1.7' }}>
          Till skillnad från B-körkort (där privat övningskörning är möjligt) <strong>måste</strong> MC-utbildning ske hos trafikskola. Kurserna inkluderar:
        </p>
        <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: '2' }}>
          <li>Grundläggande manövrar (parkering, start, balans)</li>
          <li>Körning i trafikmiljö</li>
          <li>Körning i hög hastighet på väg/motorväg</li>
          <li>Riskutbildning (obligatorisk)</li>
        </ul>
        <p style={{ margin: '12px 0 0', fontSize: '13px', color: '#888' }}>
          Kostnaden för MC-körkort är typiskt 15 000–25 000 kr beroende på skola och startkunskaper.
        </p>
      </div>
    ),
  },
  {
    icon: '🛡️',
    title: 'Hjälm och skyddsutrustning — lagkrav',
    body: (
      <p style={{ margin: 0, lineHeight: '1.7' }}>
        Hjälm är lagkrav för förare och passagerare. Det finns inga lagkrav på övrig utrustning (jacka, handskar, stövlar) men ECE-godkänd motorcykeljacka, handskar och stövlar rekommenderas starkt. På teorin kan det ställas frågor om hjälmtyper och hur de ska bäras.
      </p>
    ),
  },
  {
    icon: '⚡',
    title: 'Specifika körregler för MC',
    body: (
      <div>
        <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: '2.2' }}>
          <li><strong>Lane splitting</strong> (köra mellan bilar i kö) är förbjudet i Sverige.</li>
          <li>MC måste ha helljus/dagsljus tänt alltid.</li>
          <li>Passagerare kräver fotpinnar — det är trafikbrott att ta passagerare utan fotpinnar.</li>
          <li>Sidovagn ändrar körkortskraven: med sidovagn krävs B-körkort, ej A.</li>
          <li>Tillåten totalvikt med A-körkort: ingen specifik begränsning, men slapsläp max 750 kg.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: '📅',
    title: 'Processen steg för steg',
    body: (
      <div>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '10px' }}>
          {[
            { step: '1', text: 'Hälsodeklaration + synkontroll (om ej gjort vid B)' },
            { step: '2', text: 'Teori — genomgång + godkänt teoriprov (Transportstyrelsen)' },
            { step: '3', text: 'Manöverövning på avspärrad plats (trafikskola)' },
            { step: '4', text: 'Körning i trafik' },
            { step: '5', text: 'Riskutbildning 2 (krävs för A och A2)' },
            { step: '6', text: 'Körprov (praktiskt prov hos Trafikverket)' },
          ].map(s => (
            <div key={s.step} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ width: '28px', height: '28px', background: '#006B3F', borderRadius: '8px', color: 'white', fontSize: '12px', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {s.step}
              </div>
              <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#444', lineHeight: '1.5' }}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'MC-körkort i Sverige – vad som gäller för motorcykel',
  description: 'Komplett guide till MC-körkort (A-körkort) i Sverige. Körkortsklasser A, A2, A1, steg-för-steg-process, teori och praktik.',
  url: 'https://huvet.se/mc',
  publisher: {
    '@type': 'Organization',
    name: 'Huvet',
    url: 'https://huvet.se',
  },
};

export default function MCPage() {
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
            Börja träna gratis
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #f0f7f3 0%, #fff 60%)', padding: '64px 20px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#006B3F', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>
            MC-körkort
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: '900', lineHeight: '1.1', color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.04em' }}>
            MC-körkort (A-behörighet) — allt du behöver veta
          </h1>
          <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#555', margin: '0 0 20px' }}>
            MC-körkortet skiljer sig väsentligt från vanligt B-körkort. Det finns tre klasser (A1, A2, A), obligatorisk trafikskola och specifika teorifrågor. Här är hela bilden.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{ background: '#e6f4ee', color: '#006B3F', padding: '8px 16px', borderRadius: '999px', fontSize: '13px', fontWeight: '700' }}>A1 från 16 år</div>
            <div style={{ background: '#dbeafe', color: '#1d4ed8', padding: '8px 16px', borderRadius: '999px', fontSize: '13px', fontWeight: '700' }}>A2 från 18 år</div>
            <div style={{ background: '#fee2e2', color: '#dc2626', padding: '8px 16px', borderRadius: '999px', fontSize: '13px', fontWeight: '700' }}>A (full) från 20–24 år</div>
          </div>
        </div>
      </section>

      {/* Differences */}
      <section style={{ padding: '48px 20px 80px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {differences.map((item) => (
              <div key={item.title} style={{
                background: '#fafcfb',
                borderRadius: '20px',
                padding: '28px 32px',
                border: '2px solid #e2efe9',
              }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '28px', flexShrink: 0 }}>{item.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#0d1f17', margin: '0 0 12px' }}>
                      {item.title}
                    </h2>
                    <div style={{ fontSize: '15px', color: '#555' }}>
                      {item.body}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick compare */}
          <div style={{ marginTop: '48px', background: '#0d1f17', borderRadius: '24px', padding: '40px 32px', color: 'white' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '900', marginBottom: '20px' }}>MC vs. B-körkort — snabbfakta</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              {[
                { label: 'Privat övning', mc: '❌ Ej tillåtet', b: '✓ Tillåtet' },
                { label: 'Riskutbildning', mc: '✓ Obligatorisk', b: '✓ Obligatorisk' },
                { label: 'Teoriinnehåll', mc: 'MC-specifikt', b: 'Bil-specifikt' },
                { label: 'Minsta ålder', mc: '16 år (A1)', b: '16 år (övn), 18 år (körkort)' },
                { label: 'Kostnad ungefär', mc: '15 000–25 000 kr', b: '10 000–20 000 kr' },
              ].map(row => (
                <div key={row.label} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontWeight: '700', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{row.label}</div>
                  <div style={{ fontSize: '13px', color: '#4ade96', fontWeight: '700', marginBottom: '4px' }}>🏍️ MC: {row.mc}</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>🚗 B: {row.b}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ marginTop: '40px', background: 'linear-gradient(160deg, #006B3F, #004d2d)', borderRadius: '24px', padding: '40px 32px', textAlign: 'center', color: 'white' }}>
            <h3 style={{ fontSize: '22px', fontWeight: '900', marginBottom: '12px' }}>Klara teorin för MC</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '24px', fontSize: '15px' }}>
              Huvet har separata övningsfrågor för MC-teori — inkl. dynamik, säkerhet och MC-specifika trafikregler.
            </p>
            <Link href="/#demo" style={{ background: 'white', color: '#006B3F', padding: '16px 32px', borderRadius: '999px', fontSize: '16px', fontWeight: '700', textDecoration: 'none', display: 'inline-block' }}>
              Börja öva gratis →
            </Link>
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
