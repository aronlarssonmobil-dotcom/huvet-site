import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Körkortstillstånd – ansökan, krav och kostnad 2026 | Huvet',
  description:
    'Allt om körkortstillstånd i Sverige 2026. Hur du ansöker, krav på syntest och hälsodeklaration, kostnad, handläggningstid och giltighetstid. Steg-för-steg-guide.',
  keywords: [
    'körkortstillstånd',
    'ansöka körkortstillstånd',
    'körkortstillstånd kostnad',
    'körkortstillstånd krav',
    'körkortstillstånd syntest',
    'körkortstillstånd giltighetstid',
    'körkortstillstånd transportstyrelsen',
    'hälsodeklaration körkort',
    'körkortstillstånd hur lång tid',
  ],
  alternates: { canonical: 'https://huvet.se/korkortstillstand' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad är ett körkortstillstånd?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ett körkortstillstånd är ett godkännande från Transportstyrelsen som krävs innan du får börja övningsköra och göra körkortsprov. Det visar att du uppfyller de medicinska kraven för att köra.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur ansöker man om körkortstillstånd?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Du ansöker digitalt via Transportstyrelsens e-tjänst. Logga in med BankID, fyll i hälsodeklarationen och gör en synundersökning hos optiker. Ansökan kostar 220 kr (2026).',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur lång tid tar det att få körkortstillstånd?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Handläggningstiden är normalt 2–4 veckor. Om du har en medicinsk anmärkning kan det ta längre tid. Du kan följa ditt ärende på Transportstyrelsens webbplats.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur länge gäller körkortstillståndet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ett körkortstillstånd gäller i 5 år från beslutsdatumet. Om det hinner löpa ut innan du tagit körkort måste du ansöka om ett nytt körkortstillstånd och betala igen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad kostar ett körkortstillstånd 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ansökan om körkortstillstånd kostar 220 kr. Utöver det tillkommer kostnad för synundersökning hos optiker, vanligtvis 200–400 kr beroende på optiker.',
      },
    },
  ],
};

const facts = [
  { label: '220 kr', sub: 'ansökningsavgift', icon: '💳' },
  { label: '5 år', sub: 'giltighetstid', icon: '📅' },
  { label: '2–4 veckor', sub: 'handläggningstid', icon: '⏱️' },
  { label: 'Digitalt', sub: 'ansökan via BankID', icon: '💻' },
];

const requirements = [
  {
    title: 'Hälsodeklaration',
    description: 'Du fyller i en hälsodeklaration digitalt via Transportstyrelsen. Där uppger du om du har några sjukdomar eller tillstånd som kan påverka din körförmåga, till exempel epilepsi, diabetes eller synnedsättning.',
    icon: '🏥',
  },
  {
    title: 'Synundersökning',
    description: 'Du måste göra ett syntest hos en legitimerad optiker. Kravet är minst 0,5 i synskärpa på bästa ögat (med eller utan glasögon). Intyget skickas direkt till Transportstyrelsen digitalt.',
    icon: '👁️',
  },
  {
    title: 'Ålderskrav',
    description: 'Du måste vara minst 16 år för att ansöka om körkortstillstånd för B-körkort (personbil). Från 16 år kan du börja övningsköra privat med handledare, men du får inte ta körkort förrän du fyllt 18.',
    icon: '🎂',
  },
  {
    title: 'Inga hinder',
    description: 'Du får inte ha ett körkortsåterkallat eller vara olämplig att ha körkort av andra skäl. Transportstyrelsen gör en kontroll mot belastningsregistret i vissa fall.',
    icon: '✅',
  },
];

const steps = [
  {
    step: 1,
    title: 'Boka syntest hos optiker',
    description: 'Besök en legitimerad optiker och gör en synundersökning. Det kostar vanligtvis 200–400 kr. Optikern skickar resultatet digitalt till Transportstyrelsen.',
  },
  {
    step: 2,
    title: 'Logga in på Transportstyrelsen',
    description: 'Gå till transportstyrelsen.se och logga in med BankID. Välj "Ansökan om körkortstillstånd" under Körkort.',
  },
  {
    step: 3,
    title: 'Fyll i hälsodeklaration',
    description: 'Svara ärligt på frågorna om din hälsa. Om du har en medicinsk anmärkning kan Transportstyrelsen begära ett läkarintyg.',
  },
  {
    step: 4,
    title: 'Betala ansökningsavgiften',
    description: 'Betala 220 kr direkt via Transportstyrelsens e-tjänst. Betalningen sker med kort eller Swish.',
  },
  {
    step: 5,
    title: 'Invänta beslut',
    description: 'Handläggningstiden är normalt 2–4 veckor. Du får besked via brev eller digitalt. När tillståndet är klart kan du börja övningsköra.',
  },
];

const sections = [
  {
    title: 'Vad är ett körkortstillstånd?',
    content: [
      'Ett körkortstillstånd är ett obligatoriskt godkännande från Transportstyrelsen som du behöver innan du kan börja övningsköra eller göra körkortsprov i Sverige. Det fungerar som ett intyg på att du uppfyller de grundläggande medicinska och personliga kraven för att framföra ett fordon.',
      'Utan körkortstillstånd kan du varken övningsköra privat, ta lektioner på trafikskola eller boka teoriprov och körprov. Det är alltså det allra första steget i hela körkortsprocessen.',
      'Tillståndet gäller i 5 år. Om du inte hinner ta körkort under den tiden behöver du ansöka om ett nytt tillstånd och betala avgiften igen.',
    ],
  },
  {
    title: 'Kostnad för körkortstillstånd 2026',
    content: [
      'Ansökan om körkortstillstånd kostar 220 kr (2026). Avgiften betalas direkt via Transportstyrelsens e-tjänst med kort eller Swish.',
      'Utöver ansökningsavgiften tillkommer kostnaden för synundersökning hos optiker, vilket vanligtvis kostar 200–400 kr beroende på vilken optiker du väljer. Vissa erbjuder rabatterade priser för körkortselever.',
      'Totalkostnaden för körkortstillståndet inklusive syntest hamnar alltså på ca 420–620 kr. Jämfört med hela körkortsutbildningens kostnad (15 000–25 000 kr) är det en liten men obligatorisk utgift.',
    ],
  },
  {
    title: 'Vad händer om körkortstillståndet löper ut?',
    content: [
      'Om ditt körkortstillstånd löper ut innan du tagit körkort måste du ansöka om ett nytt. Det innebär ny hälsodeklaration, nytt syntest och ny avgift på 220 kr.',
      'Tänk på att alla godkända prov (teoriprov och körprov) också har begränsad giltighetstid. Ett godkänt teoriprov gäller i 4 månader — oavsett hur länge ditt körkortstillstånd är giltigt.',
      'Tips: om ditt tillstånd snart löper ut och du inte hunnit klara proven, kan det vara värt att förnya tillståndet i god tid så att du inte hamnar i en situation där du måste göra om allting.',
    ],
  },
];

export default function KorkortstillstandPage() {
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
            <div style={{ width: '36px', height: '36px', background: '#006B3F', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2"/>
                <circle cx="10" cy="10" r="2.5" fill="white"/>
                <line x1="10" y1="2" x2="10" y2="7.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3.4" y1="13.5" x2="7.8" y2="11.2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="16.6" y1="13.5" x2="12.2" y2="11.2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span style={{ fontSize: '20px', fontWeight: 900, color: '#0d1f17', letterSpacing: '-0.04em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Huvet</span>
          </Link>
          <Link href="/#demo" style={{ background: '#006B3F', color: 'white', padding: '10px 22px', borderRadius: '999px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Träna gratis
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #f0f7f3 0%, #fff 60%)', padding: '64px 20px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Breadcrumbs items={[
            { label: 'Hem', href: '/' },
            { label: 'Körkortstillstånd' },
          ]} />
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#006B3F', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>
            Steg 1 i körkortsprocessen
          </div>
          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            color: '#0d1f17',
            margin: '0 0 20px',
            letterSpacing: '-0.04em',
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
          }}>
            Körkortstillstånd — ansökan, krav och kostnad
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#5a6b62', maxWidth: '600px', margin: '0 0 40px' }}>
            Körkortstillståndet är det allra första steget mot körkort. Här förklarar vi hur du ansöker, vad som krävs, vad det kostar och hur lång tid det tar. Uppdaterat för 2026.
          </p>

          {/* Facts grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginBottom: '48px' }}>
            {facts.map((f) => (
              <div key={f.label} style={{ background: 'white', border: '2px solid #dceee5', borderRadius: '16px', padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{f.icon}</div>
                <div style={{ fontSize: '20px', fontWeight: 900, color: '#006B3F', lineHeight: 1 }}>{f.label}</div>
                <div style={{ fontSize: '12px', color: '#5a6b62', marginTop: '4px' }}>{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements cards */}
      <section style={{ background: '#fff', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
            fontWeight: 800,
            color: '#0d1f17',
            margin: '0 0 32px',
            letterSpacing: '-0.03em',
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
          }}>
            Krav för körkortstillstånd
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {requirements.map((req) => (
              <div key={req.title} style={{
                background: '#f0f7f3',
                border: '1px solid #dceee5',
                borderRadius: '18px',
                padding: '28px 24px',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{req.icon}</div>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  color: '#0d1f17',
                  margin: '0 0 8px',
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                }}>
                  {req.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#5a6b62', margin: 0 }}>
                  {req.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to apply (steps) */}
      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
            fontWeight: 800,
            color: '#0d1f17',
            margin: '0 0 32px',
            letterSpacing: '-0.03em',
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
          }}>
            Så ansöker du — steg för steg
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {steps.map((s) => (
              <div key={s.step} style={{
                background: 'white',
                border: '1px solid #dceee5',
                borderRadius: '18px',
                padding: '28px 24px',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  minWidth: '44px',
                  height: '44px',
                  background: '#006B3F',
                  color: 'white',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: 900,
                  flexShrink: 0,
                }}>
                  {s.step}
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: '#0d1f17',
                    margin: '0 0 6px',
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#5a6b62', margin: 0 }}>
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content sections (cost & validity, what happens if it expires) */}
      <section style={{ background: '#fff', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {sections.map((s, i) => (
            <div key={i} style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: i < sections.length - 1 ? '1px solid #dceee5' : 'none' }}>
              <h2 style={{
                fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                fontWeight: 800,
                color: '#0d1f17',
                margin: '0 0 16px',
                letterSpacing: '-0.02em',
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              }}>
                {s.title}
              </h2>
              {s.content.map((p, j) => (
                <p key={j} style={{ fontSize: '16px', lineHeight: 1.75, color: '#5a6b62', margin: '0 0 12px' }}>
                  {p}
                </p>
              ))}
            </div>
          ))}

          {/* CTA block */}
          <div style={{ background: 'linear-gradient(135deg, #006B3F 0%, #004d2d 100%)', borderRadius: '20px', padding: '40px', textAlign: 'center', color: 'white' }}>
            <div style={{
              fontSize: '28px',
              fontWeight: 900,
              marginBottom: '12px',
              letterSpacing: '-0.03em',
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            }}>
              Har du fått ditt körkortstillstånd?
            </div>
            <p style={{ fontSize: '16px', opacity: 0.85, marginBottom: '28px', maxWidth: '440px', margin: '0 auto 28px' }}>
              Dags att börja träna inför teoriprovet. Huvet ger dig personlig träning och 450+ riktiga körkortsfrågor. 94% klarar provet.
            </p>
            <Link href="/#demo" style={{ display: 'inline-block', background: '#f5d020', color: '#0d1f17', padding: '16px 36px', borderRadius: '999px', fontWeight: 800, textDecoration: 'none', fontSize: '16px' }}>
              Börja träna gratis
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
            fontWeight: 900,
            color: '#0d1f17',
            margin: '0 0 32px',
            letterSpacing: '-0.03em',
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
          }}>
            Vanliga frågor om körkortstillstånd
          </h2>
          {pageJsonLd.mainEntity.map((faq, i) => (
            <div key={i} style={{ background: 'white', border: '2px solid #dceee5', borderRadius: '16px', padding: '24px', marginBottom: '12px' }}>
              <div style={{ fontWeight: 800, fontSize: '16px', color: '#0d1f17', marginBottom: '8px' }}>
                {faq.name}
              </div>
              <p style={{ color: '#5a6b62', lineHeight: 1.65, fontSize: '15px', margin: 0 }}>
                {faq.acceptedAnswer.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Guides */}
      <section style={{ padding: '0 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <RelatedGuides currentPath="/korkortstillstand" />
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0d1f17', color: 'rgba(255,255,255,0.4)', padding: '32px 20px', textAlign: 'center', fontSize: '13px' }}>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="/teoriprov" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Teoriprov</Link>
          <Link href="/korprov" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körprov</Link>
          <Link href="/ovningskorning" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Övningskörning</Link>
          <Link href="/korkort-kostnad" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körkort kostnad</Link>
          <Link href="/vagmarken" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Vägmärken</Link>
          <Link href="/korkort-alder" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körkort ålder</Link>
          <Link href="/mc" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>MC-körkort</Link>
          <Link href="/moped" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Mopedkörkort</Link>
        </div>
        <span>&copy; 2026 Huvet (huvet.se). Byggt för svenska körkortselever.</span>
      </footer>
    </div>
  );
}
