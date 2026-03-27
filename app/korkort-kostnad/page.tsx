import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ta körkort kostnad 2026 – vad kostar det totalt? | Huvet',
  description:
    'Vad kostar det att ta körkort 2026? Komplett kostnadskalkyl för B-körkort: trafikskola, teoriprov, körprov, riskutbildning och handpenning. Total kostnad: 15 000–35 000 kr.',
  keywords: [
    'ta körkort kostnad',
    'körkort pris',
    'körkort kostnad 2026',
    'vad kostar körkort',
    'körkort totalkostnad',
    'trafikskola pris',
    'körlektion pris',
    'teoriprov kostnad',
    'körprov kostnad',
    'riskutbildning kostnad',
    'privat övningskörning kostnad',
    'körkort billigt',
  ],
  alternates: { canonical: 'https://huvet.se/korkort-kostnad' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad kostar det att ta körkort 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Totalkostnaden för B-körkort i Sverige 2026 ligger vanligtvis mellan 15 000 och 35 000 kr. Spannet beror på hur många lektioner du behöver och hur mycket du privatövningskör. Med mycket privat övningskörning kan du ligga närmre 15 000 kr — utan det hamnar de flesta på 25 000–35 000 kr.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad kostar ett körkortstillfälle (teoriprov)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Teoriprovet kostar 325 kr per tillfälle (2026). Om du inte klarar måste du betala igen och boka ny tid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad kostar körprovet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Körprovet kostar 1 400 kr per tillfälle (2026). Körprovet måste bokas via Trafikverket. Om du underkänns betalar du full kostnad för nästa försök.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan man spara pengar på körkortet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Det mest effektiva sättet att spara pengar är att privatövningskörna maximalt med en handledare innan du börjar på trafikskola. Varje lektion du klarar av att ersätta med gratis privat träning sparar dig 500–700 kr. Att dessutom vara väl förberedd på teoriprovet sparar dig 325 kr per undvikt omprov.',
      },
    },
    {
      '@type': 'Question',
      name: 'Är det billigare med intensivkurs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Inte nödvändigtvis. Intensivkurser kostar ofta 20 000–30 000 kr paketpris och inkluderar lektioner, prov och riskutbildning. De kan vara värda det i tid, men inte alltid i pengar. Jämför alltid vad som ingår.',
      },
    },
  ],
};

const costItems = [
  {
    item: 'Handledarutbildning (privat övningskörning)',
    low: '500',
    high: '1 000',
    note: 'Engångskostnad. Krävs för att privatövningsköra.',
  },
  {
    item: 'Riskutbildning del 1 (trafiksäkerhet)',
    low: '1 200',
    high: '1 800',
    note: 'Obligatorisk. Görs på trafikskola.',
  },
  {
    item: 'Riskutbildning del 2 (halk- och mörkerövning)',
    low: '1 800',
    high: '3 500',
    note: 'Obligatorisk. Görs på en halkbana.',
  },
  {
    item: 'Teorilektioner / studiematerial',
    low: '0',
    high: '3 000',
    note: 'Frivilligt men rekommenderat. Teorikurs 2 000–3 000 kr.',
  },
  {
    item: 'Körkortstester och övningsappar',
    low: '0',
    high: '500',
    note: 'Huvet är gratis att börja med.',
  },
  {
    item: 'Teoriprov (Trafikverket)',
    low: '325',
    high: '975',
    note: '325 kr/ggn. Räkna på 1–3 försök.',
  },
  {
    item: 'Körlektioner på trafikskola',
    low: '5 000',
    high: '15 000',
    note: '500–700 kr/lektion × 10–25 lektioner beroende på privatövning.',
  },
  {
    item: 'Körprov (Trafikverket)',
    low: '1 400',
    high: '2 800',
    note: '1 400 kr/ggn. Räkna på 1–2 försök.',
  },
  {
    item: 'Utfärdande av körkort',
    low: '220',
    high: '220',
    note: 'Fast avgift till Transportstyrelsen.',
  },
];

const tips = [
  {
    num: '01',
    title: 'Privatövningskör maximalt',
    body: 'Varje körtimme med handledaren ersätter en betald lektion på 500–700 kr. 20 timmar privatövning = 10 000–14 000 kr spar. Det är den enskilt största hävstången.',
  },
  {
    num: '02',
    title: 'Klara teoriprovet på första försöket',
    body: 'Att kugga teoriprovet kostar 325 kr extra + en ny väntetid. Träna ordentligt — rikta in dig på väjningsregler och vägmärken, de vanligaste felområdena.',
  },
  {
    num: '03',
    title: 'Välj trafikskola med omdömen, inte lägst pris',
    body: 'En dålig trafikskola kostar dig fler lektioner. En bra instruktör som lär dig rätt teknik från start sparar 5–10 lektioner jämfört med en som bara kör runt.',
  },
  {
    num: '04',
    title: 'Boka körprov när du faktiskt är redo',
    body: 'Underkänt körprov kostar 1 400 kr. Boka inte för tidigt. Din trafikskola bör kunna bedöma din nivå — lita på den bedömningen.',
  },
  {
    num: '05',
    title: 'Jämför intensivkurs vs. löpande lektioner',
    body: 'Intensivkurser är bekvämt men inte alltid billigast. Räkna på vad som ingår. Ibland är löpande lektioner kombinerat med privat övning 5 000–8 000 kr billigare.',
  },
];

export default function KorkortKostnadPage() {
  return (
    <div style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif', background: '#fff', color: '#0d1f17' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      {/* Header */}
      <header style={{ background: '#1DB954', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: '900', fontSize: '20px', letterSpacing: '-0.03em' }}>Huvet</Link>
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>·</span>
        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Körkort kostnad</span>
      </header>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1DB954 0%, #17a34a 100%)', padding: '64px 20px 56px', textAlign: 'center', color: 'white' }}>
        <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', borderRadius: '999px', padding: '6px 16px', fontSize: '12px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px' }}>
          Kostnadskalkyl 2026
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: '900', margin: '0 0 16px', lineHeight: '1.1', letterSpacing: '-0.04em' }}>
          Vad kostar det att ta körkort 2026?
        </h1>
        <p style={{ fontSize: '18px', opacity: 0.85, maxWidth: '560px', margin: '0 auto 32px', lineHeight: '1.6' }}>
          Totalkostnad: <strong>15 000–35 000 kr</strong>. Spannet beror på hur mycket du privatövningskör och hur snabbt du klarar proven.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/#demo" style={{ background: 'white', color: '#1DB954', padding: '14px 28px', borderRadius: '999px', fontWeight: '800', textDecoration: 'none', fontSize: '15px' }}>
            Träna teori gratis →
          </Link>
          <Link href="/teoriprov" style={{ background: 'transparent', color: 'white', padding: '14px 28px', borderRadius: '999px', fontWeight: '700', textDecoration: 'none', fontSize: '15px', border: '2px solid rgba(255,255,255,0.4)' }}>
            Om teoriprovet
          </Link>
        </div>
      </section>

      {/* Cost table */}
      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: '900', color: '#0d1f17', margin: '0 0 8px', letterSpacing: '-0.03em' }}>
            Kostnadskalkyl B-körkort
          </h2>
          <p style={{ color: '#555', fontSize: '16px', margin: '0 0 32px', lineHeight: '1.6' }}>
            Alla obligatoriska och vanliga kostnader samlade. Siffror gäller 2026.
          </p>

          <div style={{ background: 'white', border: '2px solid #e2efe9', borderRadius: '20px', overflow: 'hidden' }}>
            {/* Table header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 100px 100px', gap: '12px', padding: '14px 20px', background: '#e6f4ee', fontWeight: '800', fontSize: '13px', color: '#1DB954', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              <span>Post</span>
              <span style={{ textAlign: 'right' }}>Lägst</span>
              <span style={{ textAlign: 'right' }}>Högst</span>
            </div>
            {costItems.map((c, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 100px 100px', gap: '12px', padding: '16px 20px', borderTop: '1px solid #e2efe9' }}>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '15px', color: '#0d1f17' }}>{c.item}</div>
                  <div style={{ fontSize: '13px', color: '#888', marginTop: '3px' }}>{c.note}</div>
                </div>
                <div style={{ textAlign: 'right', fontWeight: '700', fontSize: '15px', color: '#555', alignSelf: 'center' }}>{c.low} kr</div>
                <div style={{ textAlign: 'right', fontWeight: '700', fontSize: '15px', color: '#0d1f17', alignSelf: 'center' }}>{c.high} kr</div>
              </div>
            ))}
            {/* Total */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 100px 100px', gap: '12px', padding: '18px 20px', borderTop: '2px solid #1DB954', background: '#e6f4ee' }}>
              <div style={{ fontWeight: '900', fontSize: '16px', color: '#1DB954' }}>TOTALT</div>
              <div style={{ textAlign: 'right', fontWeight: '900', fontSize: '16px', color: '#1DB954' }}>≈ 10 445 kr</div>
              <div style={{ textAlign: 'right', fontWeight: '900', fontSize: '16px', color: '#1DB954' }}>≈ 28 795 kr</div>
            </div>
          </div>

          <p style={{ fontSize: '13px', color: '#999', marginTop: '12px' }}>
            * Siffrorna är uppskattningar. Priset på körlektioner varierar mellan trafikskolor och orter. I storstäder är priset ofta 50–100 kr/lektion högre.
          </p>
        </div>
      </section>

      {/* Tips */}
      <section style={{ background: '#fff', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: '900', color: '#0d1f17', margin: '0 0 8px', letterSpacing: '-0.03em' }}>
            5 sätt att spara pengar på körkortet
          </h2>
          <p style={{ color: '#555', fontSize: '16px', margin: '0 0 40px', lineHeight: '1.6' }}>
            Med rätt strategi kan du spara 8 000–15 000 kr jämfört med genomsnittet.
          </p>

          {tips.map((t, i) => (
            <div key={i} style={{ display: 'flex', gap: '20px', marginBottom: '32px', paddingBottom: '32px', borderBottom: i < tips.length - 1 ? '1px solid #e2efe9' : 'none' }}>
              <div style={{ flexShrink: 0, width: '44px', height: '44px', borderRadius: '12px', background: '#e6f4ee', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '13px', color: '#1DB954' }}>
                {t.num}
              </div>
              <div>
                <div style={{ fontWeight: '800', fontSize: '17px', color: '#0d1f17', marginBottom: '8px' }}>{t.title}</div>
                <p style={{ color: '#555', lineHeight: '1.7', fontSize: '15px', margin: 0 }}>{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #1DB954 0%, #17a34a 100%)', padding: '64px 20px', textAlign: 'center', color: 'white' }}>
        <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: '900', margin: '0 0 12px', letterSpacing: '-0.03em' }}>
          Klara teoriprovet på första försöket
        </h2>
        <p style={{ fontSize: '17px', opacity: 0.8, maxWidth: '440px', margin: '0 auto 32px', lineHeight: '1.6' }}>
          Spara 325 kr och flera veckor väntetid. Huvet tränar dig på exakt de frågor du missar.
        </p>
        <Link href="/#demo" style={{ display: 'inline-block', background: 'white', color: '#1DB954', padding: '16px 36px', borderRadius: '999px', fontWeight: '800', textDecoration: 'none', fontSize: '16px' }}>
          Börja träna gratis →
        </Link>
      </section>

      {/* FAQ */}
      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: '900', color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em' }}>
            Vanliga frågor om körkortets kostnad
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
