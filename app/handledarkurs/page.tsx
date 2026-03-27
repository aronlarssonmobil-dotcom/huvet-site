import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Handledarkurs — krav, kostnad och bokning 2026 | Huvet',
  description:
    'Allt om handledarkursen för privat övningskörning i Sverige 2026. Krav på handledare, kostnad (~500 kr), var du bokar, vad kursen innehåller och hur länge den gäller.',
  keywords: [
    'handledarkurs',
    'handledare körkort',
    'handledarkurs online',
    'handledarkurs pris',
    'handledarkurs krav',
    'privat övningskörning handledare',
    'handledarkurs kostnad',
    'handledarutbildning',
    'övningskörning handledare',
    'handledartillstånd',
  ],
  alternates: { canonical: 'https://huvet.se/handledarkurs' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad kostar en handledarkurs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En handledarkurs kostar vanligtvis mellan 300 och 600 kr beroende på var du gör den. Genomsnittspriset ligger runt 500 kr. Många trafikskolor erbjuder kursen både på plats och online.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka krav finns för att bli handledare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Du måste vara minst 24 år gammal, ha haft B-körkort i minst 5 år sammanhängande, ha genomfört en godkänd handledarkurs, och inte ha något aktivt återkallat körkort. Dessutom behöver du ett godkänt handledartillstånd från Transportstyrelsen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan man ta handledarkursen online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, flera trafikskolor och utbildningsföretag erbjuder handledarkursen online. Du kan genomföra den hemifrån via dator eller mobil. Kursen tar normalt 3-4 timmar och du får ett intyg direkt efter godkänt resultat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur länge gäller en handledarkurs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Handledarkursen i sig har ingen giltighetstid — den gäller på obestämd tid. Däremot gäller körkortstillståndet (som eleven ansöker om) i 5 år. Handledaren måste vara registrerad på elevens tillstånd.',
      },
    },
    {
      '@type': 'Question',
      name: 'Måste handledaren sitta bredvid vid övningskörning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, handledaren måste alltid sitta i framsätet bredvid eleven under övningskörning. Handledaren ska vara nykter, utvilad och kunna ingripa vid behov. Handledaren har samma juridiska ansvar som föraren.',
      },
    },
  ],
};

const requirements = [
  { text: 'Minst 24 år gammal', icon: '🎂' },
  { text: 'Haft B-körkort i minst 5 år sammanhängande', icon: '🪪' },
  { text: 'Inget återkallat körkort', icon: '✅' },
  { text: 'Godkänd handledarkurs', icon: '📚' },
  { text: 'Registrerad som handledare på elevens körkortstillstånd', icon: '📝' },
  { text: 'Inget körkort villkorat med alkolås', icon: '🚫' },
];

const facts = [
  { label: '~500 kr', sub: 'kurskostnad', icon: '💳' },
  { label: '3-4 tim', sub: 'kurslängd', icon: '⏱' },
  { label: '24 år', sub: 'minimiålder', icon: '🎯' },
  { label: '5 år', sub: 'körkortskrav', icon: '🪪' },
];

const sections = [
  {
    title: 'Vad är en handledarkurs?',
    content: [
      'En handledarkurs (ibland kallad handledarutbildning) är en obligatorisk utbildning för dig som vill vara handledare vid privat övningskörning. Kursen ger dig kunskapen du behöver för att hjälpa en elev träna bilkörning på ett säkert och effektivt sätt.',
      'Kursen är lagstadgad — utan den får du inte agera som handledare vid övningskörning, oavsett hur länge du har haft körkort. Den täcker pedagogik, trafiksäkerhet, riskmedvetenhet och juridiska ansvarsförhållanden.',
    ],
  },
  {
    title: 'Vem behöver ta handledarkursen?',
    content: [
      'Alla som vill vara handledare vid privat övningskörning måste ha gått handledarkursen. Det gäller oftast föräldrar, partner, syskon eller vänner som vill hjälpa en körkortselev att träna utanför trafikskolan.',
      'Om eleven enbart kör med trafiklärare på en trafikskola behövs ingen handledarkurs. Kursen krävs bara för privat övningskörning.',
    ],
  },
  {
    title: 'Vad innehåller kursen?',
    content: [
      'Handledarkursen behandlar: grundläggande pedagogik för körundervisning, trafiksäkerhet och riskmedvetenhet, vilka ansvarsförhållanden som gäller (handledaren har juridiskt ansvar), hur du planerar en övningskörning, och vad som är vanliga misstag hos nya förare.',
      'Kursen avslutas vanligtvis med ett kunskapstest. Du får ett intyg efter godkänt resultat som du sedan använder när eleven ansöker om körkortstillstånd hos Transportstyrelsen.',
    ],
  },
  {
    title: 'Online vs. fysisk kurs',
    content: [
      'De flesta som tar handledarkursen idag gör det online. Det är bekvämt, billigare och du kan göra den i din egen takt. Onlinekurser erbjuds av flera trafikskolor och specialiserade utbildningsföretag.',
      'Fysiska kurser på trafikskola finns fortfarande och kan passa bättre om du föredrar klassrumsmiljö eller vill kunna ställa frågor direkt. Priserna varierar mellan 300-600 kr oavsett format.',
    ],
  },
  {
    title: 'Hur ansöker du om handledartillstånd?',
    content: [
      'Steg 1: Genomför handledarkursen och få ditt intyg. Steg 2: Eleven ansöker om körkortstillstånd via Transportstyrelsens webbplats. I ansökan anges vem som ska vara handledare. Steg 3: Du som handledare kopplas till elevens tillstånd. Transportstyrelsen kontrollerar att du uppfyller kraven.',
      'Det kan ta några veckor att få körkortstillståndet beviljat. Börja processen i god tid innan ni vill börja övningsköra.',
    ],
  },
  {
    title: 'Handledarens ansvar under övningskörning',
    content: [
      'Som handledare har du ett stort ansvar. Du sitter i framsätet och ska vara beredd att ingripa. Du har juridiskt sett samma ansvar som föraren — om en olycka inträffar kan du ställas till svars.',
      'Du måste vara helt nykter och utvilad vid övningskörning. Fordonet ska ha skylten "Övningskör" synlig. Eleven måste alltid ha sitt körkortstillstånd med sig, och du måste ha ditt körkort.',
    ],
  },
];

export default function HandledarkursPage() {
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
            { label: 'Övningskörning', href: '/ovningskörning' },
            { label: 'Handledarkurs' },
          ]} />
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#006B3F', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>
            Övningskörning 2026
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: '900', lineHeight: '1.08', color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.03em' }}>
            Handledarkurs — allt du behöver veta
          </h1>
          <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#5a6b62', maxWidth: '600px', margin: '0 0 40px' }}>
            Obligatorisk kurs för dig som vill vara handledare vid privat övningskörning. Krav, kostnad, bokning och vad kursen innehåller.
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

      {/* Requirements checklist */}
      <section style={{ background: '#fff', padding: '0 20px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ background: '#f0f7f3', border: '2px solid #dceee5', borderRadius: '20px', padding: '32px' }}>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: '1.5rem', fontWeight: '800', color: '#0d1f17', margin: '0 0 20px' }}>
              Krav for att bli handledare — checklista
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {requirements.map((req, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  background: 'white', borderRadius: '14px', padding: '16px 20px',
                  border: '1px solid #dceee5',
                }}>
                  <span style={{ fontSize: '20px', flexShrink: 0 }}>{req.icon}</span>
                  <span style={{ fontSize: '15px', fontWeight: '600', color: '#0d1f17' }}>{req.text}</span>
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

          {/* CTA block */}
          <div style={{ background: 'linear-gradient(135deg, #006B3F 0%, #004d2d 100%)', borderRadius: '24px', padding: '40px', textAlign: 'center', color: 'white' }}>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: '28px', fontWeight: '900', marginBottom: '12px', letterSpacing: '-0.03em' }}>
              Börja förbereda eleven med Huvet
            </div>
            <p style={{ fontSize: '16px', opacity: 0.8, marginBottom: '28px', maxWidth: '460px', margin: '0 auto 28px' }}>
              Medan du tar handledarkursen kan eleven redan börja träna teori med Huvet. 94% klarar teoriprovet.
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
            Vanliga frågor om handledarkursen
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
          <RelatedGuides currentPath="/handledarkurs" />
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0d1f17', color: 'rgba(255,255,255,0.4)', padding: '32px 20px', textAlign: 'center', fontSize: '13px' }}>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="/korprov" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körprov</Link>
          <Link href="/teoriprov" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Teoriprov</Link>
          <Link href="/ovningskörning" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Övningskörning</Link>
          <Link href="/vanliga-fel-korprov" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Vanliga fel körprov</Link>
          <Link href="/digitalt-korkort" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Digitalt körkort</Link>
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
