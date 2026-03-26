import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Intensivkurs körkort 2026 – ta körkort på 2–4 veckor | Huvet',
  description:
    'Allt om intensivkurs för körkort 2026. Vad ingår, vad kostar det, för vem passar det och hur snabbt kan du ta körkort? Jämför intensivkurs vs vanlig utbildning.',
  keywords: [
    'intensivkurs körkort',
    'ta körkort snabbt',
    'körkort 2 veckor',
    'körkort 4 veckor',
    'intensivkurs pris',
    'snabbkurs körkort',
    'intensivkurs körkort kostnad',
    'intensivkurs körkort stockholm',
    'intensivkurs körkort göteborg',
    'ta körkort på kortast tid',
    'körkortskurs intensiv',
  ],
  alternates: { canonical: 'https://huvet.se/intensivkurs' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hur snabbt kan man ta körkort med intensivkurs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Med en intensivkurs kan du ta körkort på 2–6 veckor beroende på upplägg och hur snabbt du kan boka teoriprov och körprov. De flesta intensivkurser är upplagda för 3–4 veckor heltid. Kom ihåg att teoriprovet och körprovet måste bokas hos Trafikverket — och tillgängligheten varierar med säsong.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad kostar en intensivkurs körkort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En intensivkurs kostar vanligtvis 18 000–30 000 kr inklusive körlektion, riskutbildning och ibland teorikurs. Det kan vara dyrare än traditionell utbildning men sparar tid. Jämför alltid vad som ingår — teoriprov och körprov tillkommer ofta utöver paketpriset.',
      },
    },
    {
      '@type': 'Question',
      name: 'Är intensivkurs bra eller dåligt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Det beror på dig. Intensivkurs passar bra om du lär dig snabbt, kan fokusera heltid och har stark motivation. Det passar sämre om du behöver tid att smälta information, har svårt med motoriken bakom ratten, eller om du kombinerar det med jobb. Statistiken visar att andelen som klarar körprovet första gången är något lägre på intensivkurser.',
      },
    },
    {
      '@type': 'Question',
      name: 'Måste man läsa teori på intensivkurs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja — teoriprovet är obligatoriskt och måste klaras innan körprovet. De flesta intensivkurser inkluderar teorilektioner, men du behöver ändå lägga tid på att memorera trafikregler, vägmärken och riskfaktorer. Huvet hjälper dig fokusera träningen på dina svagheter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan man privatövningskörning kombinera med intensivkurs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, och det är ofta klokt. Även vid intensivkurs kan du privatövningsköra för att bygga upp grunderna snabbare och billigare. Det minskar antalet körlektioner du behöver på trafikskolan och sänker totalkostnaden.',
      },
    },
  ],
};

const pros = [
  { icon: '⚡', title: 'Snabbt', body: 'Körkort på 2–4 veckor istället för 6–18 månader. Perfekt om du behöver körkort snabbt — nytt jobb, flytt, livssituation.' },
  { icon: '🎯', title: 'Fokuserat', body: 'All inlärning sker koncentrerat under kort tid. Teori och praktik stödjer varandra — du lär dig i ett sammanhang.' },
  { icon: '📦', title: 'Paketlösning', body: 'Allt är inkluderat: körlektion, riskutbildning, teori. Slipper koordinera olika delar själv.' },
];

const cons = [
  { icon: '💰', title: 'Högre prislapp', body: 'Intensivkurser kostar 18 000–30 000 kr. Traditionell utbildning med privat övningskörning kan kosta 10 000–18 000 kr.' },
  { icon: '🧠', title: 'Hård belastning', body: 'Intensiv inlärning under kort tid är mentalt krävande. Passar inte alla inlärningsstilar.' },
  { icon: '📉', title: 'Lägre klarat-frekvens', body: 'Statistiskt sett klarar fler körprovet på första försöket vid traditionell utbildning. Skillnaden är 5–10%.' },
  { icon: '📅', title: 'Beroende av tillgänglighet', body: 'Teori- och körprov måste bokas hos Trafikverket. Ibland 3–6 veckors väntetid — det kan stoppa hela tidplanen.' },
];

const tips = [
  { num: '01', title: 'Börja med teoriförberedelse INNAN kursen', body: 'Öva på Huvet minst 1–2 veckor innan intensivkursen börjar. Att kunna teorigrunderna när körningen startar gör att du hinner mer på kortare tid.' },
  { num: '02', title: 'Boka teoriprov tidigt', body: 'Boka teoriprov hos Trafikverket redan första dagen — väntetiden varierar från dagar till veckor beroende på ort och säsong. Det är ofta flaskhalsen.' },
  { num: '03', title: 'Sov och återhämta dig', body: 'Motorinlärning sker under sömn. Lägg in pausar och sov tillräckligt — det är inte slöseri med tid.' },
  { num: '04', title: 'Privatövningskör innan om möjligt', body: 'Även 5–10 timmars privat övning innan kursen kan spara 4–6 betalda körlektioner och sänka totalkostnaden med 2 000–4 000 kr.' },
];

export default function IntensivkursPage() {
  return (
    <div style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif', background: '#fff', color: '#0d1f17' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      {/* Header */}
      <header style={{ background: '#006B3F', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: '900', fontSize: '20px', letterSpacing: '-0.03em' }}>Huvet</Link>
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>·</span>
        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Intensivkurs körkort</span>
      </header>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #006B3F 0%, #004d2d 100%)', padding: '64px 20px 56px', textAlign: 'center', color: 'white' }}>
        <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', borderRadius: '999px', padding: '6px 16px', fontSize: '12px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px' }}>
          Körkort på 2–4 veckor
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: '900', margin: '0 0 16px', lineHeight: '1.1', letterSpacing: '-0.04em' }}>
          Intensivkurs körkort 2026
        </h1>
        <p style={{ fontSize: '18px', opacity: 0.85, maxWidth: '560px', margin: '0 auto 32px', lineHeight: '1.6' }}>
          Allt om att ta körkort snabbt. Vad ingår, vad kostar det, vem det passar — och hur du maximerar chansen att klara provet.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          {[
            { label: '18–30 000 kr', sub: 'Paketpris' },
            { label: '2–4 veckor', sub: 'Typisk tid' },
            { label: 'Allt inkl.', sub: 'Körning + teori' },
          ].map((s, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '16px', padding: '16px 24px', textAlign: 'center' }}>
              <div style={{ fontWeight: '900', fontSize: '20px' }}>{s.label}</div>
              <div style={{ fontSize: '13px', opacity: 0.7, marginTop: '4px' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pros & Cons */}
      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: '900', color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em' }}>
            Fördelar och nackdelar
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '24px' }}>
            <div>
              <div style={{ fontWeight: '800', fontSize: '13px', color: '#006B3F', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>✅ Fördelar</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {pros.map((p, i) => (
                  <div key={i} style={{ background: 'white', border: '2px solid #e2efe9', borderRadius: '16px', padding: '18px' }}>
                    <div style={{ fontWeight: '800', fontSize: '15px', color: '#0d1f17', marginBottom: '6px' }}>{p.icon} {p.title}</div>
                    <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.65', margin: 0 }}>{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontWeight: '800', fontSize: '13px', color: '#c0392b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>⚠️ Nackdelar</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {cons.map((c, i) => (
                  <div key={i} style={{ background: 'white', border: '2px solid #e2efe9', borderRadius: '16px', padding: '18px' }}>
                    <div style={{ fontWeight: '800', fontSize: '15px', color: '#0d1f17', marginBottom: '6px' }}>{c.icon} {c.title}</div>
                    <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.65', margin: 0 }}>{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section style={{ background: '#fff', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: '900', color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em' }}>
            4 tips för att lyckas med intensivkursen
          </h2>
          {tips.map((t, i) => (
            <div key={i} style={{ display: 'flex', gap: '20px', marginBottom: '28px', paddingBottom: '28px', borderBottom: i < tips.length - 1 ? '1px solid #e2efe9' : 'none' }}>
              <div style={{ flexShrink: 0, width: '44px', height: '44px', borderRadius: '12px', background: '#e6f4ee', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '13px', color: '#006B3F' }}>{t.num}</div>
              <div>
                <div style={{ fontWeight: '800', fontSize: '17px', color: '#0d1f17', marginBottom: '8px' }}>{t.title}</div>
                <p style={{ color: '#555', lineHeight: '1.7', fontSize: '15px', margin: 0 }}>{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #006B3F 0%, #004d2d 100%)', padding: '64px 20px', textAlign: 'center', color: 'white' }}>
        <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: '900', margin: '0 0 12px', letterSpacing: '-0.03em' }}>
          Förbered dig innan kursen startar
        </h2>
        <p style={{ fontSize: '17px', opacity: 0.8, maxWidth: '440px', margin: '0 auto 32px', lineHeight: '1.6' }}>
          Öva teori på Huvet redan idag. Kom in i kursen med försprång — det är skillnaden mellan att klara teoriprovet v.1 och v.3.
        </p>
        <Link href="/#demo" style={{ display: 'inline-block', background: 'white', color: '#006B3F', padding: '16px 36px', borderRadius: '999px', fontWeight: '800', textDecoration: 'none', fontSize: '16px' }}>
          Börja träna gratis →
        </Link>
      </section>

      {/* FAQ */}
      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: '900', color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em' }}>
            Vanliga frågor om intensivkurs
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
            { href: '/riskutbildning', label: 'Riskutbildning' },
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
