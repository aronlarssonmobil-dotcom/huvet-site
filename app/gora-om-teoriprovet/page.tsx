import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Göra om teoriprovet 2026 – väntetid, kostnad & tips | Huvet',
  description:
    'Underkänd på teoriprovet? Här förklarar vi hur många gånger du får göra om teoriprovet, väntetid, kostnad (325 kr), vanliga misstag och hur du klarar det nästa gång.',
  keywords: [
    'göra om teoriprovet',
    'göra om teoriprov',
    'underkänd teoriprov',
    'omprov teoriprov',
    'hur många gånger teoriprov',
    'teoriprov kostnad omprov',
    'boka om teoriprov',
    'klara teoriprovet andra gången',
    'teoriprov tips',
  ],
  alternates: { canonical: 'https://huvet.se/gora-om-teoriprovet' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hur många gånger får man göra om teoriprovet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Det finns ingen gräns för hur många gånger du får göra om teoriprovet. Du kan göra om det hur många gånger som helst, men du måste vänta minst 2 veckor mellan varje försök och betala 325 kr per tillfälle.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur lång tid måste man vänta innan man gör om teoriprovet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Du måste vänta minst 2 veckor (14 dagar) efter ett underkänt teoriprov innan du kan göra ett nytt försök. Det gäller oavsett om det är ditt första eller tionde omprov.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad kostar det att göra om teoriprovet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Varje omtagning kostar 325 kr (2026). Det finns ingen rabatt vid omprov. Om du gör om provet 3 gånger har du totalt betalat 975 kr bara i provavgifter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Varför blir man underkänd på teoriprovet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De vanligaste orsakerna till underkänt teoriprov är bristande kunskap om väjningsregler, förväxlade vägmärken, svåra situationsfrågor, stress och tidspress. Ungefär 43% underkänns vid första försöket.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur förbereder man sig bäst inför omprovet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Analysera vilka ämnesområden du var svag i, fokusera din träning på dem, gör minst 10 fullängdsprov (65 frågor) innan du bokar om, och träna under tidspress. Använd Huvet för att identifiera dina svaga områden automatiskt.',
      },
    },
  ],
};

const facts = [
  { label: 'Obegränsat', sub: 'antal omtagningar', icon: '🔄' },
  { label: '2 veckor', sub: 'minsta väntetid', icon: '📅' },
  { label: '325 kr', sub: 'per försök', icon: '💳' },
  { label: '43%', sub: 'underkänns första gången', icon: '📊' },
];

const failReasons = [
  {
    title: 'Väjningsregler',
    desc: 'Komplexa korsningar med huvudled, högerregel och avvikande regler är den vanligaste orsaken till underkänt.',
    pct: '34%',
  },
  {
    title: 'Vägmärken',
    desc: 'Förväxling av liknande skyltar, tilläggstavlor och ovanliga vägmärken som sällan dyker upp i vardagen.',
    pct: '22%',
  },
  {
    title: 'Situationsfrågor',
    desc: 'Filmklipp och bildbaserade frågor kräver snabb analys och förståelse för trafikdynamik i realtid.',
    pct: '19%',
  },
  {
    title: 'Hastighet & avstånd',
    desc: 'Beräkning av stoppsträcka, reaktionssträcka och anpassad hastighet vid olika väder- och vägförhållanden.',
    pct: '15%',
  },
  {
    title: 'Tidspress & stress',
    desc: '50 minuter för 65 frågor ger knappt 46 sekunder per fråga. Stress leder till slarvfel och tveksamhet.',
    pct: '10%',
  },
];

const studySteps = [
  {
    step: '1',
    title: 'Analysera dina resultat',
    text: 'Gå igenom resultatet från ditt underkända prov. Trafikverket visar vilka kategorier du var svag i. Fokusera din träning på dessa områden istället för att plugga allt igen.',
  },
  {
    step: '2',
    title: 'Identifiera kunskapsluckor',
    text: 'Använd Huvet för att köra riktade övningar inom dina svaga ämnesområden. Vår AI analyserar exakt var dina kunskapsluckor finns och anpassar frågorna automatiskt.',
  },
  {
    step: '3',
    title: 'Träna under provförhållanden',
    text: 'Gör minst 10 fullständiga övningsprov med 65 frågor och 50 minuters tidsgräns. Du bör klara 55+ rätt konsekvent innan du bokar omprovet.',
  },
  {
    step: '4',
    title: 'Boka och gör om provet',
    text: 'Boka omprovet via Trafikverket tidigast 2 veckor efter ditt senaste försök. Välj en tid på dagen då du känner dig pigg och fokuserad — undvik att boka tidigt på morgonen om du inte är en morgonmänniska.',
  },
];

export default function GoraOmTeoriprovetPage() {
  return (
    <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", background: '#fff', minHeight: '100vh', color: '#0d1f17' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      {/* Header */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #dceee5', padding: '0 20px',
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
            <span style={{ fontSize: '20px', fontWeight: '900', color: '#0d1f17', letterSpacing: '-0.04em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Huvet</span>
          </Link>
          <Link href="/#demo" style={{ background: '#1DB954', color: 'white', padding: '10px 22px', borderRadius: '999px', fontSize: '14px', fontWeight: '700', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Träna gratis
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #f0f7f3 0%, #fff 60%)', padding: '64px 20px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Breadcrumbs items={[
            { label: 'Hem', href: '/' },
            { label: 'Teoriprov', href: '/teoriprov' },
            { label: 'Göra om teoriprovet' },
          ]} />
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#1DB954', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>
            Omprov 2026
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: '900', lineHeight: '1.08', color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.04em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Göra om teoriprovet — allt du behöver veta
          </h1>
          <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#5a6b62', maxWidth: '620px', margin: '0 0 40px' }}>
            Du får göra om teoriprovet hur många gånger som helst. Det finns ingen begränsning, men du måste vänta minst 2 veckor mellan varje försök och betala 325 kr per tillfälle. Här går vi igenom regler, kostnader, vanliga orsaker till underkänt och hur du klarar det nästa gång.
          </p>

          {/* Facts grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px', marginBottom: '48px' }}>
            {facts.map((f) => (
              <div key={f.label} style={{ background: 'white', border: '2px solid #dceee5', borderRadius: '16px', padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{f.icon}</div>
                <div style={{ fontSize: '20px', fontWeight: '900', color: '#1DB954', lineHeight: 1 }}>{f.label}</div>
                <div style={{ fontSize: '12px', color: '#5a6b62', marginTop: '4px' }}>{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section style={{ background: '#fff', padding: '0 20px 80px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>

          {/* Section: Regler */}
          <div style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid #dceee5' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: '800', color: '#0d1f17', margin: '0 0 16px', letterSpacing: '-0.02em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Hur många gånger får man göra om teoriprovet?
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 12px' }}>
              Det finns ingen övre gräns för hur många gånger du får göra om teoriprovet hos Trafikverket. Oavsett om du har underkänts en, fem eller tio gånger kan du alltid boka ett nytt försök. Den enda begränsningen är att du måste vänta minst 14 dagar mellan varje provtillfälle.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 12px' }}>
              Väntetiden på 2 veckor gäller från dagen du gjorde provet, inte från den dag du får resultatet. Resultatet visas direkt efter provet, så det finns ingen extra fördröjning att vänta på.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 12px' }}>
              Dock ska du vara medveten om att ditt körkortstillstånd har en giltighetstid. Ett körkortstillstånd för B-körkort gäller i 5 år. Om tillståndet löper ut måste du ansöka om ett nytt innan du kan göra fler prov. Ditt tillstånd måste alltid vara giltigt vid provtillfället.
            </p>
          </div>

          {/* Section: Kostnad */}
          <div style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid #dceee5' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: '800', color: '#0d1f17', margin: '0 0 16px', letterSpacing: '-0.02em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Vad kostar det att göra om teoriprovet?
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 12px' }}>
              Varje provtillfälle kostar 325 kr (2026), oavsett om det är ditt första försök eller ett omprov. Det finns ingen rabatt vid omtagning och ingen paketlösning.
            </p>
            <div style={{ background: '#f0f7f3', borderRadius: '16px', padding: '24px', margin: '20px 0' }}>
              <div style={{ fontWeight: '800', fontSize: '16px', color: '#0d1f17', marginBottom: '12px' }}>Kostnadsexempel vid flera försök</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {[
                  { tries: '1 försök', cost: '325 kr' },
                  { tries: '2 försök', cost: '650 kr' },
                  { tries: '3 försök', cost: '975 kr' },
                  { tries: '5 försök', cost: '1 625 kr' },
                ].map((item) => (
                  <div key={item.tries} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'white', borderRadius: '10px', border: '1px solid #dceee5' }}>
                    <span style={{ color: '#5a6b62', fontSize: '14px' }}>{item.tries}</span>
                    <span style={{ fontWeight: '700', color: '#1DB954', fontSize: '14px' }}>{item.cost}</span>
                  </div>
                ))}
              </div>
            </div>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 12px' }}>
              Utöver provavgiften tillkommer tid och eventuellt förlorad inkomst. Varje underkänt prov innebär minst 2 veckors extra väntan plus restid till provcentrat. Det lönar sig verkligen att vara välförberedd och klara provet på så få försök som möjligt.
            </p>
          </div>

          {/* Section: Vanliga orsaker */}
          <div style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid #dceee5' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: '800', color: '#0d1f17', margin: '0 0 16px', letterSpacing: '-0.02em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Vanliga orsaker till underkänt teoriprov
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 20px' }}>
              Ungefär 43% av alla som gör teoriprovet för första gången blir underkända. Här är de vanligaste orsakerna — och hur stor andel av felen de står för:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {failReasons.map((r) => (
                <div key={r.title} style={{ background: '#f0f7f3', border: '1px solid #dceee5', borderRadius: '16px', padding: '20px 24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ minWidth: '48px', height: '48px', background: '#1DB954', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '900', fontSize: '14px' }}>
                    {r.pct}
                  </div>
                  <div>
                    <div style={{ fontWeight: '800', color: '#0d1f17', marginBottom: '4px' }}>{r.title}</div>
                    <p style={{ fontSize: '15px', color: '#5a6b62', margin: 0, lineHeight: '1.6' }}>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Studietips */}
          <div style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid #dceee5' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: '800', color: '#0d1f17', margin: '0 0 16px', letterSpacing: '-0.02em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Så förbereder du dig inför omprovet — steg för steg
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 24px' }}>
              Att bara göra om provet utan att ändra studieteknik ger sällan bättre resultat. Följ dessa steg för att maximera dina chanser:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {studySteps.map((s) => (
                <div key={s.step} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ minWidth: '40px', height: '40px', background: '#f5d020', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '18px', color: '#0d1f17' }}>
                    {s.step}
                  </div>
                  <div>
                    <div style={{ fontWeight: '800', color: '#0d1f17', marginBottom: '4px', fontSize: '16px' }}>{s.title}</div>
                    <p style={{ fontSize: '15px', color: '#5a6b62', margin: 0, lineHeight: '1.65' }}>{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: När boka om */}
          <div style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid #dceee5' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: '800', color: '#0d1f17', margin: '0 0 16px', letterSpacing: '-0.02em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              När bör du boka om teoriprovet?
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 12px' }}>
              Boka inte om provet för tidigt. Två veckor är minimum-väntetiden, men det betyder inte att du måste göra om provet direkt. Ge dig själv tillräckligt med tid att plugga ordentligt.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 12px' }}>
              En bra tumregel är att vänta tills du konsekvent klarar 55+ rätt av 65 på övningsprov under tidspress. Om du bara nådde 45 rätt på det riktiga provet behöver du förmodligen 3-4 veckor av intensiv träning, inte bara 2 veckor.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 12px' }}>
              Kom ihåg att provtider i storstäder ofta har lång väntetid. Boka tidigt så du får en tid som passar. Det kan ibland vara snabbare att välja ett provcentra utanför storstaden.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 12px' }}>
              Du bokar om provet på exakt samma sätt som första gången: via Trafikverkets webbplats med BankID. Logga in, välj stad och tid, och betala 325 kr.
            </p>
          </div>

          {/* Section: Tips provdagen */}
          <div style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid #dceee5' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: '800', color: '#0d1f17', margin: '0 0 16px', letterSpacing: '-0.02em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Tips för provdagen
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
              {[
                { tip: 'Sov ordentligt', desc: 'Minst 7-8 timmars sömn natten innan. Trött hjärna gör fler slarvfel.' },
                { tip: 'Ät frukost', desc: 'Hjärnan behöver energi. Undvik tunga måltider men skippa inte frukost.' },
                { tip: 'Kom i tid', desc: 'Var på plats minst 15 minuter innan. Stress försämrar prestationen.' },
                { tip: 'Läs noga', desc: 'Många missar frågor för att de läser för snabbt. Ta dig tid att läsa hela frågan.' },
                { tip: 'Hoppa inte över', desc: 'Svara på alla frågor. Även en gissning har 25% chans att vara rätt.' },
                { tip: 'Kontrollera tiden', desc: 'Du har knappt 46 sekunder per fråga. Fastna inte på en svår fråga.' },
              ].map((t) => (
                <div key={t.tip} style={{ background: 'white', border: '2px solid #dceee5', borderRadius: '14px', padding: '16px' }}>
                  <div style={{ fontWeight: '800', color: '#1DB954', marginBottom: '4px', fontSize: '15px' }}>{t.tip}</div>
                  <p style={{ fontSize: '14px', color: '#5a6b62', margin: 0, lineHeight: '1.5' }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA block */}
          <div style={{ background: 'linear-gradient(135deg, #1DB954 0%, #17a34a 100%)', borderRadius: '20px', padding: '40px', textAlign: 'center', color: 'white', marginBottom: '48px' }}>
            <div style={{ fontSize: '28px', fontWeight: '900', marginBottom: '12px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Klara teoriprovet nästa gång
            </div>
            <p style={{ fontSize: '16px', opacity: 0.85, marginBottom: '28px', maxWidth: '440px', margin: '0 auto 28px' }}>
              Huvet identifierar exakt vilka ämnesområden du behöver öva på och skapar ett personligt träningsupplägg. 94% av Huvet-elever klarar provet.
            </p>
            <Link href="/#demo" style={{ display: 'inline-block', background: '#f5d020', color: '#0d1f17', padding: '16px 36px', borderRadius: '999px', fontWeight: '800', textDecoration: 'none', fontSize: '16px' }}>
              Börja träna gratis
            </Link>
          </div>

          {/* Related Guides */}
          <RelatedGuides currentPath="/gora-om-teoriprovet" />
        </div>
      </section>

      {/* FAQ section */}
      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: '900', color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Vanliga frågor om att göra om teoriprovet
          </h2>
          {pageJsonLd.mainEntity.map((faq, i) => (
            <div key={i} style={{ background: 'white', border: '2px solid #dceee5', borderRadius: '16px', padding: '24px', marginBottom: '12px' }}>
              <div style={{ fontWeight: '800', fontSize: '16px', color: '#0d1f17', marginBottom: '8px' }}>
                {faq.name}
              </div>
              <p style={{ color: '#5a6b62', lineHeight: '1.65', fontSize: '15px', margin: 0 }}>
                {faq.acceptedAnswer.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #dceee5', padding: '3rem 20px 2rem', background: '#0d1f17', color: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          <div>
            <div style={{ fontSize: '1.15rem', fontWeight: '900', marginBottom: '0.75rem', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Huvet</div>
            <p style={{ fontSize: '0.85rem', color: '#aaa', lineHeight: 1.6 }}>Sveriges smartaste förberedelse för körkortsprovet.</p>
          </div>
          <div>
            <div style={{ fontWeight: '700', marginBottom: '0.75rem', fontSize: '0.9rem' }}>Guider</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Link href="/teoriprov" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.85rem' }}>Teoriprov</Link>
              <Link href="/korprov" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.85rem' }}>Körprov</Link>
              <Link href="/vagmarken" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.85rem' }}>Vägmärken</Link>
              <Link href="/korkort-kostnad" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.85rem' }}>Körkort kostnad</Link>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: '700', marginBottom: '0.75rem', fontSize: '0.9rem' }}>Mer</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Link href="/ovningsprov" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.85rem' }}>Övningsprov</Link>
              <Link href="/privatist" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.85rem' }}>Privatist</Link>
              <Link href="/utlandskt-korkort" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.85rem' }}>Utländskt körkort</Link>
              <Link href="/gora-om-teoriprovet" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.85rem' }}>Göra om teoriprovet</Link>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: '1100px', margin: '2rem auto 0', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', fontSize: '0.8rem', color: '#666' }}>
          &copy; 2026 Huvet. Alla rättigheter reserverade.
        </div>
      </footer>
    </div>
  );
}
