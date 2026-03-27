import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Digitalt körkort Sverige — EU:s digitala körkort 2026-2030 | Huvet',
  description:
    'Allt om det digitala körkortet som kommer till Sverige senast 2030. Hur EU:s digitala körkort fungerar, vad det innebär, tidplan, digital wallet och vad som ändras för dig.',
  keywords: [
    'digitalt körkort',
    'digitalt körkort Sverige',
    'EU digitalt körkort',
    'digitalt körkort 2026',
    'digitalt körkort app',
    'digital wallet körkort',
    'körkort i mobilen',
    'digitalt körkort Transportstyrelsen',
    'nytt EU-körkort',
    'körkort digital plånbok',
  ],
  alternates: { canonical: 'https://huvet.se/digitalt-korkort' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'När kommer det digitala körkortet till Sverige?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enligt EU-direktivet ska alla medlemsländer erbjuda digitala körkort senast 2030. Sverige arbetar genom Transportstyrelsen med att implementera lösningen. Ett exakt svenskt lanseringsdatum har ännu inte meddelats, men det förväntas vara tillgängligt före 2030.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kommer det fysiska körkortet att försvinna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nej, det fysiska plastkortet kommer att finnas kvar parallellt med det digitala körkortet. Du väljer själv om du vill använda det digitala, det fysiska, eller båda. EU har bekräftat att det fysiska kortet inte kommer att fasas ut.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur kommer det digitala körkortet att fungera?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Det digitala körkortet lagras i en digital plånbok (wallet-app) på din mobiltelefon, liknande hur du har boardingkort eller bankkort digitalt idag. Du kan visa det vid kontroll genom att låta polisen skanna en QR-kod eller använda NFC. Giltighetstiden är densamma som för det fysiska kortet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Går det att använda det digitala körkortet utomlands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, det digitala körkortet kommer att gälla i alla EU- och EES-länder. Det är en av de stora fördelarna — ett standardiserat system som fungerar över gränserna. Exakt vilka länder utanför EU som accepterar det är ännu inte helt klart.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad händer om min telefon får slut på batteri?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Om telefonen är avstängd kan du inte visa det digitala körkortet. Därför rekommenderas det att du fortfarande har tillgång till det fysiska kortet som backup. Många bilister förväntas bära båda, åtminstone under övergångsperioden.',
      },
    },
  ],
};

const facts = [
  { label: 'Senast 2030', sub: 'EU-deadline', icon: '📅' },
  { label: 'EU-wide', sub: 'gäller i hela EU/EES', icon: '🇪🇺' },
  { label: 'Wallet-app', sub: 'digital plånbok', icon: '📱' },
  { label: 'Frivilligt', sub: 'plastkortet finns kvar', icon: '🪪' },
];

const timeline = [
  { year: '2023', event: 'EU-kommissionen presenterar förslag om digitalt körkort som del av den fjärde körkortsdirektivet.' },
  { year: '2024', event: 'EU-parlamentet och Europeiska rådet når preliminär överenskommelse om det nya körkortsdirektivet.' },
  { year: '2025', event: 'Direktivet formellt antaget. Medlemsländer börjar planera nationell implementering.' },
  { year: '2026-2028', event: 'Transportstyrelsen arbetar med teknisk infrastruktur, digital wallet-integration och säkerhetslösningar för Sverige.' },
  { year: 'Senast 2030', event: 'Alla EU-medlemsländer måste erbjuda digitala körkort. Sverige förväntas vara klart i god tid.' },
];

const sections = [
  {
    title: 'Vad är ett digitalt körkort?',
    content: [
      'Ett digitalt körkort är en elektronisk version av ditt körkort som lagras i en digital plånbok på din mobiltelefon. Det fungerar som ett fullvärdigt körkort — du kan visa det vid poliskontroller, vid biluthyrning och som identifikationshandling.',
      'EU driver projektet som en del av den bredare digitaliseringsstrategin. Tanken är att alla EU-medborgare ska kunna ha sitt körkort i mobilen, precis som man idag har bankkort och boardingkort digitalt.',
    ],
  },
  {
    title: 'Hur kommer det att fungera i praktiken?',
    content: [
      'Du laddar ner en godkänd wallet-app (sannolikt en nationell eller EU-standard app) och verifierar din identitet med BankID eller motsvarande. Ditt körkort laddas sedan ner krypterat till din telefon.',
      'Vid kontroll kan du visa körkortet genom att polisen skannar en QR-kod på din skärm eller via NFC (trådlös överföring). Systemet är designat för att skydda din integritet — du behöver bara dela den information som är relevant, exempelvis att du har giltigt B-körkort, utan att visa hela ditt personnummer.',
    ],
  },
  {
    title: 'Vad ändras för svenska bilister?',
    content: [
      'I praktiken behöver du inte göra något nytt. Ditt befintliga körkort gäller precis som vanligt. När det digitala alternativet lanseras i Sverige kan du välja att aktivera det — det är helt frivilligt.',
      'Den stora fördelen är bekvämlighet: du behöver inte bära plastkortet om du inte vill. Det digitala körkortet kan också uppdateras snabbare vid exempelvis adressändring eller när du tar en ny körkortsbehörighet.',
    ],
  },
  {
    title: 'Integritet och säkerhet',
    content: [
      'EU har lagt stort fokus på integritetsfrågor. Det digitala körkortet kommer att använda end-to-end-kryptering och lagras lokalt på din enhet — inte i molnet. Du har full kontroll över vilken information som delas.',
      'En viktig princip är "selektiv delning" — du kan bevisa att du har körkort utan att avslöja ditt fullständiga namn eller personnummer. Detta är en förbättring jämfört med att visa ett fysiskt plastkort där all information är synlig.',
    ],
  },
  {
    title: 'Vad händer om telefonen går sönder eller blir stulen?',
    content: [
      'Om du tappar telefonen kan du spärra det digitala körkortet via samma app eller via Transportstyrelsen, liknande hur du spärrar ett bankkort. Du kan sedan aktivera det på en ny enhet.',
      'Det fysiska plastkortet påverkas inte — det fungerar helt oberoende. Under övergångsperioden rekommenderas det att ha båda tillgängliga, särskilt vid längre resor.',
    ],
  },
  {
    title: 'Varför detta är viktigt — och varför nu',
    content: [
      'Sverige är ett av världens mest digitaliserade länder, men just körkort har legat efter. Flera länder som Danmark och Estland har redan digitala ID-lösningar som inkluderar körkort.',
      'Det nya EU-direktivet standardiserar systemet så att ett svenskt digitalt körkort fungerar lika bra i Spanien som i Sverige. Det är en del av EU:s digitala identitets-plånbok (EUDI Wallet) som också kommer att innehålla pass, försäkringar och utbildningsbevis.',
    ],
  },
];

export default function DigitaltKorkortPage() {
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
            <span style={{ fontSize: '20px', fontWeight: '900', color: '#0d1f17', letterSpacing: '-0.04em', fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>Huvet</span>
          </Link>
          <Link href="/#demo" style={{ background: '#006B3F', color: 'white', padding: '10px 22px', borderRadius: '999px', fontSize: '14px', fontWeight: '700', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Träna gratis
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #f0f7f3 0%, #fff 60%)', padding: '64px 20px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Breadcrumbs items={[
            { label: 'Hem', href: '/' },
            { label: 'Digitalt körkort' },
          ]} />
          <div style={{ display: 'inline-flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
            <span style={{ display: 'inline-block', background: '#e6f4ee', color: '#006B3F', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px' }}>
              EU-nyhet
            </span>
            <span style={{ display: 'inline-block', background: '#f5d02030', color: '#8a6d00', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px' }}>
              Trending
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: '900', lineHeight: '1.08', color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.03em' }}>
            Digitalt körkort i Sverige — allt du behöver veta
          </h1>
          <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#5a6b62', maxWidth: '600px', margin: '0 0 40px' }}>
            EU inför digitala körkort senast 2030. Här förklarar vi vad det innebär för svenska bilister, hur det fungerar och vad som händer med ditt plastkörkort.
          </p>

          {/* Facts grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginBottom: '48px' }}>
            {facts.map((f) => (
              <div key={f.label} style={{ background: 'white', border: '2px solid #dceee5', borderRadius: '16px', padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{f.icon}</div>
                <div style={{ fontSize: '20px', fontWeight: '900', color: '#006B3F', lineHeight: 1 }}>{f.label}</div>
                <div style={{ fontSize: '12px', color: '#5a6b62', marginTop: '4px' }}>{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: '#fff', padding: '0 20px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ background: '#f0f7f3', border: '2px solid #dceee5', borderRadius: '20px', padding: '32px' }}>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: '1.5rem', fontWeight: '800', color: '#0d1f17', margin: '0 0 24px' }}>
              Tidslinje — digitalt körkort i EU
            </h2>
            <div style={{ position: 'relative', paddingLeft: '32px' }}>
              {/* Vertical line */}
              <div style={{ position: 'absolute', left: '11px', top: '8px', bottom: '8px', width: '2px', background: '#dceee5' }} />
              {timeline.map((t, i) => (
                <div key={i} style={{ position: 'relative', marginBottom: i < timeline.length - 1 ? '24px' : 0 }}>
                  <div style={{
                    position: 'absolute', left: '-32px', top: '4px',
                    width: '22px', height: '22px', borderRadius: '50%',
                    background: i === timeline.length - 1 ? '#006B3F' : 'white',
                    border: `3px solid ${i === timeline.length - 1 ? '#006B3F' : '#dceee5'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {i === timeline.length - 1 && (
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'white' }} />
                    )}
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: '800', color: '#006B3F', marginBottom: '4px', letterSpacing: '0.04em' }}>
                    {t.year}
                  </div>
                  <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#5a6b62', margin: 0 }}>
                    {t.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section style={{ background: '#fff', padding: '0 20px 80px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {sections.map((s, i) => (
            <div key={i} style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: i < sections.length - 1 ? '1px solid #dceee5' : 'none' }}>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: '800', color: '#0d1f17', margin: '0 0 16px', letterSpacing: '-0.02em' }}>
                {s.title}
              </h2>
              {s.content.map((p, j) => (
                <p key={j} style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 12px' }}>
                  {p}
                </p>
              ))}
            </div>
          ))}

          {/* Info box */}
          <div style={{ background: '#f5d02015', border: '2px solid #f5d02040', borderRadius: '18px', padding: '28px', marginBottom: '48px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '24px', flexShrink: 0 }}>💡</span>
              <div>
                <div style={{ fontWeight: '800', fontSize: '16px', color: '#0d1f17', marginBottom: '8px' }}>
                  Gäller detta dig som tar körkort nu?
                </div>
                <p style={{ fontSize: '15px', lineHeight: '1.65', color: '#5a6b62', margin: 0 }}>
                  Om du tar körkort 2026 kommer du att få ett vanligt plastkort. När det digitala systemet lanseras i Sverige kan du aktivera en digital version av ditt befintliga körkort. Du behöver alltså inte vänta eller göra om något.
                </p>
              </div>
            </div>
          </div>

          {/* CTA block */}
          <div style={{ background: 'linear-gradient(135deg, #006B3F 0%, #004d2d 100%)', borderRadius: '24px', padding: '40px', textAlign: 'center', color: 'white' }}>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: '28px', fontWeight: '900', marginBottom: '12px', letterSpacing: '-0.03em' }}>
              Ta körkortet — fysiskt eller digitalt börjar det här
            </div>
            <p style={{ fontSize: '16px', opacity: 0.8, marginBottom: '28px', maxWidth: '460px', margin: '0 auto 28px' }}>
              Oavsett format börjar allt med teoriprovet. Öva med Huvet och klara provet på första försöket.
            </p>
            <Link href="/#demo" style={{ display: 'inline-block', background: '#f5d020', color: '#0d1f17', padding: '16px 36px', borderRadius: '999px', fontWeight: '800', textDecoration: 'none', fontSize: '16px' }}>
              Börja träna gratis →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: '900', color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em' }}>
            Vanliga frågor om digitalt körkort
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

      {/* Related Guides */}
      <section style={{ padding: '0 20px 64px', background: '#fff' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <RelatedGuides currentPath="/digitalt-korkort" />
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0d1f17', color: 'rgba(255,255,255,0.4)', padding: '32px 20px', textAlign: 'center', fontSize: '13px' }}>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="/korprov" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körprov</Link>
          <Link href="/teoriprov" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Teoriprov</Link>
          <Link href="/ovningskörning" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Övningskörning</Link>
          <Link href="/vanliga-fel-korprov" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Vanliga fel körprov</Link>
          <Link href="/handledarkurs" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Handledarkurs</Link>
          <Link href="/vagmarken" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Vägmärken</Link>
          <Link href="/korkort-kostnad" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körkort kostnad</Link>
          <Link href="/mc" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>MC-körkort</Link>
          <Link href="/moped" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Mopedkörkort</Link>
        </div>
        <span>&copy; 2026 Huvet (huvet.se). Byggt för svenska körkortselever.</span>
      </footer>
    </div>
  );
}
