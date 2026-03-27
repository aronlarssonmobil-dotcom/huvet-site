import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Körkort ålder – åldersgränser för alla körkortskategorier 2026 | Huvet',
  description:
    'Vilken ålder krävs för körkort i Sverige? Komplett guide till åldersgränser för moped (15 år), A1 MC (16), B personbil (18), A2 (18), A (24), C lastbil (21), D buss (24) och mer.',
  keywords: [
    'körkort ålder',
    'åldersgräns körkort',
    'körkort 18 år',
    'mopedkörkort ålder',
    'mc körkort ålder',
    'övningskörning ålder',
    'b-körkort ålder',
    'lastbilskörkort ålder',
    'busskörkort ålder',
    'handledare körkort ålder',
  ],
  alternates: { canonical: 'https://huvet.se/korkort-alder' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hur gammal måste man vara för att ta körkort i Sverige?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'För B-körkort (personbil) måste du vara 18 år. Du kan börja övningsköra privat vid 16 år med en godkänd handledare som har handledartillstånd.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilken ålder krävs för mopedkörkort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Du kan ta AM-körkort (moped klass I, max 45 km/h) från 15 år. Moped klass II (max 25 km/h) kräver inget körkort men du måste vara 15 år för att köra.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vid vilken ålder kan man börja övningsköra bil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Du kan börja övningsköra personbil vid 16 års ålder. Du behöver körkortstillstånd och en handledare med handledartillstånd som är minst 24 år.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur gammal måste man vara för MC-körkort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A1 (lätt MC, max 125cc): 16 år. A2 (mellantung MC, max 35 kW): 18 år. A (tung MC, obegränsad): 24 år, eller 20 år om du haft A2 i minst 2 år.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilken ålder krävs för att vara handledare vid övningskörning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Du måste vara minst 24 år gammal för att få handledartillstånd. Du måste också ha haft körkort i minst 5 år sammanhängande.',
      },
    },
  ],
};

const ageCategories = [
  { category: 'AM', name: 'Moped klass I', age: '15 år', description: 'Moped med max hastighet 45 km/h', color: '#f5d020' },
  { category: 'A1', name: 'Lätt motorcykel', age: '16 år', description: 'MC max 125cc, max 11 kW', color: '#006B3F' },
  { category: 'B (övning)', name: 'Övningskörning bil', age: '16 år', description: 'Med handledare och körkortstillstånd', color: '#006B3F' },
  { category: 'B', name: 'Personbil', age: '18 år', description: 'Bil, max 3 500 kg totalvikt', color: '#006B3F' },
  { category: 'A2', name: 'Mellantung MC', age: '18 år', description: 'MC max 35 kW (48 hk)', color: '#006B3F' },
  { category: 'BE', name: 'Bil med tungt släp', age: '18 år', description: 'Bil + släpvagn över 750 kg', color: '#006B3F' },
  { category: 'C / CE', name: 'Lastbil', age: '21 år', description: 'Lastbil över 3 500 kg', color: '#004d2d' },
  { category: 'A', name: 'Tung motorcykel', age: '24 år*', description: '* Eller 20 år med 2 års A2-erfarenhet', color: '#004d2d' },
  { category: 'D / DE', name: 'Buss', age: '24 år', description: 'Buss för persontransport', color: '#004d2d' },
  { category: 'Handledare', name: 'Handledartillstånd', age: '24 år', description: 'Krav: haft körkort i minst 5 år', color: '#004d2d' },
];

const detailedSections = [
  {
    title: 'Mopedkörkort — AM (15 år)',
    content: [
      'Mopedkörkort (AM-behörighet) är det första körkort du kan ta i Sverige. Åldersgränsen är 15 år. Det ger dig rätt att köra moped klass I med en maxhastighet på 45 km/h.',
      'Utbildningen består av teori och praktik, och avslutas med ett teoriprov. Du behöver inte göra något körprov för AM-körkort.',
      'Moped klass II (max 25 km/h) kräver inget körkort alls, men du måste ändå vara minst 15 år för att köra en sådan moped på väg.',
    ],
  },
  {
    title: 'Lätt MC — A1 (16 år)',
    content: [
      'Från 16 år kan du ta A1-körkort för lätt motorcykel. Det ger rätt att köra motorcyklar med max 125cc motorvolym och max 11 kW effekt.',
      'A1-körkortet kräver både teoriprov och praktiskt körprov. Du behöver även genomgå riskutbildning.',
      'Många väljer att börja med A1 och sedan utöka till A2 och A när de uppfyller ålderskraven.',
    ],
  },
  {
    title: 'Övningskörning bil (16 år)',
    content: [
      'Redan vid 16 års ålder kan du börja övningsköra personbil i Sverige. Du behöver ett giltigt körkortstillstånd och en godkänd handledare.',
      'Handledaren måste ha handledartillstånd och vara minst 24 år gammal samt ha haft körkort i minst 5 sammanhängande år.',
      'De tidiga övningstimmarna handlar ofta om att få grundläggande fordonshantering — start, stopp, styrning och växling. Privat övningskörning kompletteras ofta med lektioner på trafikskola.',
    ],
  },
  {
    title: 'B-körkort — Personbil (18 år)',
    content: [
      'Det vanligaste körkort i Sverige. Du måste vara minst 18 år för att ta B-körkort. Det ger dig rätt att köra personbil med en totalvikt upp till 3 500 kg.',
      'Processen inkluderar körkortstillstånd, riskutbildning del 1 och 2, teoriprov och körprov. Många börjar övningsköra vid 16 och tar provet vid 18.',
      'B-körkortet ger också rätt att köra lätt släpvagn (max 750 kg). För tyngre släp behöver du BE-behörighet.',
    ],
  },
  {
    title: 'A2 och A — Mellantung och tung MC (18 / 24 år)',
    content: [
      'A2-körkort (mellantung MC) kan du ta från 18 år. Det ger rätt att köra motorcyklar med max 35 kW effekt (ca 48 hk).',
      'A-körkort (tung MC, obegränsad effekt) kräver normalt att du är minst 24 år. Det finns dock en genväg: har du haft A2-körkort i minst 2 år kan du utöka till A redan vid 20 års ålder genom ett praktiskt prov.',
      'Progressionen A1 (16 år) till A2 (18 år) till A (20–24 år) kallas stegvis utökning och är ett populärt alternativ.',
    ],
  },
  {
    title: 'C och D — Lastbil och buss (21 / 24 år)',
    content: [
      'C-körkort (lastbil) kräver att du är minst 21 år. Det ger rätt att framföra fordon med totalvikt över 3 500 kg. För lastbil med tungt släp krävs CE-behörighet.',
      'D-körkort (buss) har den högsta åldersgränsen: 24 år. Det ger rätt att köra bussar för persontransport. Lägre åldersgränser (21 år) kan gälla inom yrkesförarkompetens (YKB).',
      'Både C och D kräver att du redan har B-körkort. Du behöver även genomgå medicinsk kontroll med utökade krav, inklusive syn, hjärta och diabetes.',
    ],
  },
  {
    title: 'Handledartillstånd (24 år)',
    content: [
      'För att vara handledare vid privat övningskörning måste du vara minst 24 år gammal och ha haft svenskt körkort i minst 5 sammanhängande år.',
      'Du ansöker om handledartillstånd hos Transportstyrelsen. Tillståndet kopplas till en specifik elev — du kan inte vara handledare för vem som helst utan att ansöka separat.',
      'Handledaren behöver inte vara släkt med eleven, men ska kunna följa med vid all övningskörning och har ansvar för att eleven kör säkert.',
    ],
  },
];

export default function KorkortAlderPage() {
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
            { label: 'Körkort ålder' },
          ]} />
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#006B3F', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>
            Åldersgränser 2026
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
            Körkort ålder — alla åldersgränser i Sverige
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#5a6b62', maxWidth: '620px', margin: '0 0 40px' }}>
            Vilken ålder krävs för olika typer av körkort? Här hittar du en komplett guide till åldersgränser för moped, MC, personbil, lastbil, buss och övningskörning.
          </p>
        </div>
      </section>

      {/* Age table */}
      <section style={{ background: '#fff', padding: '0 20px 64px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
            fontWeight: 800,
            color: '#0d1f17',
            margin: '0 0 24px',
            letterSpacing: '-0.03em',
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
          }}>
            Åldersgränser per körkortskategori
          </h2>

          {/* Table header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '80px 1fr 90px',
            gap: '0',
            background: '#006B3F',
            borderRadius: '14px 14px 0 0',
            padding: '14px 20px',
            color: 'white',
            fontSize: '13px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}>
            <span>Kategori</span>
            <span>Beskrivning</span>
            <span style={{ textAlign: 'right' }}>Ålder</span>
          </div>

          {/* Table rows */}
          {ageCategories.map((cat, i) => (
            <div key={cat.category} style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr 90px',
              gap: '0',
              padding: '16px 20px',
              background: i % 2 === 0 ? '#f0f7f3' : 'white',
              borderLeft: '1px solid #dceee5',
              borderRight: '1px solid #dceee5',
              borderBottom: '1px solid #dceee5',
              ...(i === ageCategories.length - 1 ? { borderRadius: '0 0 14px 14px' } : {}),
              alignItems: 'center',
            }}>
              <span style={{
                fontWeight: 900,
                fontSize: '15px',
                color: cat.color,
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              }}>
                {cat.category}
              </span>
              <div>
                <div style={{ fontWeight: 700, fontSize: '15px', color: '#0d1f17' }}>{cat.name}</div>
                <div style={{ fontSize: '13px', color: '#5a6b62', marginTop: '2px' }}>{cat.description}</div>
              </div>
              <span style={{
                textAlign: 'right',
                fontWeight: 900,
                fontSize: '16px',
                color: '#006B3F',
                background: '#e6f4ee',
                padding: '6px 12px',
                borderRadius: '10px',
                whiteSpace: 'nowrap',
              }}>
                {cat.age}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed sections per category */}
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
            Detaljerad genomgång per kategori
          </h2>
          {detailedSections.map((s, i) => (
            <div key={i} style={{
              background: 'white',
              border: '1px solid #dceee5',
              borderRadius: '18px',
              padding: '32px 28px',
              marginBottom: '16px',
            }}>
              <h3 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
                fontWeight: 800,
                color: '#0d1f17',
                margin: '0 0 16px',
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              }}>
                {s.title}
              </h3>
              {s.content.map((p, j) => (
                <p key={j} style={{ fontSize: '15px', lineHeight: 1.7, color: '#5a6b62', margin: j < s.content.length - 1 ? '0 0 12px' : 0 }}>
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#fff', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #006B3F 0%, #004d2d 100%)', borderRadius: '20px', padding: '40px', textAlign: 'center', color: 'white' }}>
            <div style={{
              fontSize: '28px',
              fontWeight: 900,
              marginBottom: '12px',
              letterSpacing: '-0.03em',
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            }}>
              Redo att börja plugga för körkort?
            </div>
            <p style={{ fontSize: '16px', opacity: 0.85, marginBottom: '28px', maxWidth: '440px', margin: '0 auto 28px' }}>
              Oavsett vilken ålder du är — förbered dig med Huvet. 450+ riktiga körkortsfrågor och personlig svaghetsanalys.
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
            Vanliga frågor om körkort och ålder
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
          <RelatedGuides currentPath="/korkort-alder" />
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
          <Link href="/korkortstillstand" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körkortstillstånd</Link>
          <Link href="/mc" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>MC-körkort</Link>
          <Link href="/moped" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Mopedkörkort</Link>
        </div>
        <span>&copy; 2026 Huvet (huvet.se). Byggt för svenska körkortselever.</span>
      </footer>
    </div>
  );
}
