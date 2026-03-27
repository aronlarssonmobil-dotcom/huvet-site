import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Riskutbildning körkort 2026 – del 1 och del 2 | Huvet',
  description:
    'Allt om riskutbildning för B-körkort 2026. Vad ingår i del 1 (trafiksäkerhet) och del 2 (halkkörning), vad det kostar, var du bokar och varför det är obligatoriskt.',
  keywords: [
    'riskutbildning',
    'riskutbildning körkort',
    'riskutbildning del 1',
    'riskutbildning del 2',
    'halkkörning körkort',
    'riskutbildning kostnad',
    'boka riskutbildning',
    'riskutbildning obligatorisk',
    'mörkerövning körkort',
    'riskutbildning trafikverket',
    'riskutbildning pris',
  ],
  alternates: { canonical: 'https://huvet.se/riskutbildning' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Är riskutbildningen obligatorisk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Både del 1 och del 2 av riskutbildningen är obligatoriska för att få ta körkortsprovet i Sverige. Du kan inte boka körprov utan att ha genomfört båda delarna.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad kostar riskutbildningen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Del 1 kostar normalt 1 200–1 800 kr. Del 2 (halkkörning) kostar 1 800–3 500 kr beroende på anläggning. Totalt räknar du med 3 000–5 300 kr för båda delarna.',
      },
    },
    {
      '@type': 'Question',
      name: 'När ska man göra riskutbildningen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Riskutbildning del 1 kan göras när som helst under utbildningen. Del 2 (halkbanan) kräver att du kommit en bit i körkortsutbildningen — trafikskolan rekommenderar när som är lämpligt. Boka i god tid, halkkörningsplatser är ofta fullbokade veckor framåt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Var kan man göra riskutbildning del 2?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Riskutbildning del 2 görs på godkända halkbanor runt om i Sverige. Trafikskolan hjälper dig boka eller du bokar direkt via halkbanans hemsida. Populära anläggningar är ofta bokade 4–8 veckor framåt, speciellt på vintern.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur länge gäller godkänd riskutbildning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Godkänd riskutbildning gäller i 5 år. Om du inte tar körkortet inom 5 år från godkänd riskutbildning måste du göra om den.',
      },
    },
  ],
};

const parts = [
  {
    num: '01',
    title: 'Del 1 — Trafiksäkerhet och riskfaktorer',
    duration: '3 timmar',
    cost: '1 200–1 800 kr',
    description: 'Del 1 är en teoridel som normalt hålls i grupp på en trafikskola. Den täcker: alkohol och droger i trafiken, trötthet bakom ratten, distraktioner (mobiltelefon), riskfaktorer i olika trafikmiljöer, och hur du som förare kan påverka din egen och andras säkerhet.',
    tips: 'Boka del 1 tidigt — det är lätt att glömma och man kan inte avboka närgångna kvällar utan att förlora sin plats.',
  },
  {
    num: '02',
    title: 'Del 2 — Halkkörning och fordonskontroll',
    duration: '4–5 timmar',
    cost: '1 800–3 500 kr',
    description: 'Del 2 genomförs på en halkbana eller liknande anläggning. Du kör bilen i kontrollerade halkiga förhållanden och övar: körning på halt underlag, undvikningsmanövrar, inbromsning vid sladd, och hur bilen reagerar vid olika hastigheter och väggrepp.',
    tips: 'Platser på halkbanan tar slut snabbt på vintern. Boka minst 4–6 veckor i förväg. Sommartid är det lättare att få tid på kortare varsel.',
  },
];

const steps = [
  { step: '1', title: 'Kontakta din trafikskola', body: 'De flesta trafikskolor erbjuder riskutbildning del 1 och hjälper dig boka del 2 på en anläggning de samarbetar med. Det enklaste är att hantera det samlat.' },
  { step: '2', title: 'Boka del 2 i god tid', body: 'Halkbanor är populära och fyller upp snabbt. Boka del 2 så fort du kommit igång med körkortsutbildningen — inte som sista steg.' },
  { step: '3', title: 'Ta med giltig ID', body: 'Du måste styrka din identitet vid riskutbildningen. Ta med körkortsintyg eller pass.' },
  { step: '4', title: 'Genomför och få intyg', body: 'Efter godkänd riskutbildning får du ett intyg som din trafikskola registrerar hos Trafikverket. Utan registrerat intyg kan du inte boka körprov.' },
];

export default function RiskutbildningPage() {
  return (
    <div style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif', background: '#fff', color: '#0d1f17' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      {/* Header */}
      <header style={{ background: '#1DB954', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: '900', fontSize: '20px', letterSpacing: '-0.03em' }}>Huvet</Link>
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>·</span>
        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Riskutbildning</span>
      </header>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1DB954 0%, #17a34a 100%)', padding: '64px 20px 56px', textAlign: 'center', color: 'white' }}>
        <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', borderRadius: '999px', padding: '6px 16px', fontSize: '12px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px' }}>
          Obligatorisk del av körkortet
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: '900', margin: '0 0 16px', lineHeight: '1.1', letterSpacing: '-0.04em' }}>
          Riskutbildning för körkort 2026
        </h1>
        <p style={{ fontSize: '18px', opacity: 0.85, maxWidth: '560px', margin: '0 auto 32px', lineHeight: '1.6' }}>
          Riskutbildningen är obligatorisk — du kan inte ta körkortet utan den. Här är allt du behöver veta om del 1 och del 2.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          {[
            { label: '2 delar', sub: 'Båda obligatoriska' },
            { label: '3 000–5 300 kr', sub: 'Total kostnad' },
            { label: '5 år', sub: 'Giltighet' },
          ].map((s, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '16px', padding: '16px 24px', textAlign: 'center' }}>
              <div style={{ fontWeight: '900', fontSize: '20px' }}>{s.label}</div>
              <div style={{ fontSize: '13px', opacity: 0.7, marginTop: '4px' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Parts */}
      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: '900', color: '#0d1f17', margin: '0 0 8px', letterSpacing: '-0.03em' }}>
            Del 1 och del 2 — vad ingår?
          </h2>
          <p style={{ color: '#555', fontSize: '16px', margin: '0 0 32px', lineHeight: '1.6' }}>
            Riskutbildningen är uppdelad i två delar som kompletterar varandra.
          </p>
          <div style={{ display: 'grid', gap: '20px' }}>
            {parts.map((p, i) => (
              <div key={i} style={{ background: 'white', border: '2px solid #e2efe9', borderRadius: '20px', padding: '28px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '14px', background: '#e6f4ee', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '14px', color: '#1DB954' }}>{p.num}</div>
                  <div>
                    <h3 style={{ fontWeight: '800', fontSize: '18px', color: '#0d1f17', margin: '0 0 4px' }}>{p.title}</h3>
                    <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#888' }}>
                      <span>⏱ {p.duration}</span>
                      <span>💰 {p.cost}</span>
                    </div>
                  </div>
                </div>
                <p style={{ color: '#555', lineHeight: '1.7', fontSize: '15px', margin: '0 0 12px' }}>{p.description}</p>
                <div style={{ background: '#f0f7f3', borderRadius: '12px', padding: '12px 16px', fontSize: '14px', color: '#1DB954', fontWeight: '600' }}>
                  💡 {p.tips}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section style={{ background: '#fff', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: '900', color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em' }}>
            Hur du bokar riskutbildningen
          </h2>
          {steps.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '20px', marginBottom: '28px', paddingBottom: '28px', borderBottom: i < steps.length - 1 ? '1px solid #e2efe9' : 'none' }}>
              <div style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', background: '#1DB954', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '900', fontSize: '15px' }}>{s.step}</div>
              <div>
                <div style={{ fontWeight: '800', fontSize: '16px', color: '#0d1f17', marginBottom: '6px' }}>{s.title}</div>
                <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #1DB954 0%, #17a34a 100%)', padding: '64px 20px', textAlign: 'center', color: 'white' }}>
        <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: '900', margin: '0 0 12px', letterSpacing: '-0.03em' }}>
          Klara teoriprovet — nästa steg mot körkortet
        </h2>
        <p style={{ fontSize: '17px', opacity: 0.8, maxWidth: '440px', margin: '0 auto 32px', lineHeight: '1.6' }}>
          Medan du väntar på din riskutbildning: träna på teoriprovet med Huvet. 450+ frågor, personlig analys.
        </p>
        <Link href="/#demo" style={{ display: 'inline-block', background: 'white', color: '#1DB954', padding: '16px 36px', borderRadius: '999px', fontWeight: '800', textDecoration: 'none', fontSize: '16px' }}>
          Börja träna gratis →
        </Link>
      </section>

      {/* FAQ */}
      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: '900', color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em' }}>
            Vanliga frågor om riskutbildning
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
          {[
            { href: '/teoriprov', label: 'Teoriprov' },
            { href: '/korprov', label: 'Körprov' },
            { href: '/ovningskörning', label: 'Övningskörning' },
            { href: '/korkort-kostnad', label: 'Körkort kostnad' },
            { href: '/korkortstips', label: 'Körkortslips' },
            { href: '/korkortsfragor', label: 'Körkortsfrågor' },
            { href: '/vagmarken', label: 'Vägmärken' },
            { href: '/mc', label: 'MC-körkort' },
            { href: '/moped', label: 'Mopedkörkort' },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>{l.label}</Link>
          ))}
        </div>
        <span>© 2026 Huvet (huvet.se). Byggt för svenska körkortselever. 🇸🇪</span>
      </footer>
    </div>
  );
}
