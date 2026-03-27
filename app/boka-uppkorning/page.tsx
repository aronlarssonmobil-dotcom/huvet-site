import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Boka uppkorning 2026 – guide till korprovet hos Trafikverket | Huvet',
  description:
    'Komplett guide for att boka uppkorning via Trafikverket. Krav, kostnad (800 kr), vad provet innehaller, vad du behover ta med, godkandgrad och tips for att klara korprovet.',
  keywords: [
    'boka uppkorning',
    'boka korprovet',
    'boka korprov trafikverket',
    'uppkorning kostnad',
    'uppkorning krav',
    'boka uppkorning online',
    'korprov bokning',
    'uppkorning tips',
    'trafikverket boka uppkorning',
    'boka korprov korkort',
  ],
  alternates: { canonical: 'https://huvet.se/boka-uppkorning' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hur bokar jag uppkorningen hos Trafikverket?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Du bokar uppkorningen via Trafikverkets bokningstjanst pa trafikverket.se. Logga in med BankID, valj "Korprov B" och sedan ort, datum och tid. Du kan ocksa boka via din trafikskola.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad kostar uppkorningen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Uppkorningen for personbil (B-korkort) kostar 800 kr per tillfalle (2026). Om du inte klarar provet maste du betala hela avgiften igen vid nasta forsok.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka krav maste vara uppfyllda innan jag bokar uppkorning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Du behover: giltigt korkortstillstand, godkant teoriprov (giltigt i 4 manader), genomford riskutbildning del 1 och del 2, samt tillgang till en provfordonsgodkand bil. Om du kor via trafikskola ordnar de bilen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur lang tid tar uppkorningen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Uppkorningen tar normalt 40-45 minuter. Det inkluderar introduktion, korning i trafik (stadstrafik, eventuellt motorvag), manovrering (backning, parkering) och en avslutande bedomning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur manga klarar uppkorningen pa forsta forsoket?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ungefar 50-55% klarar uppkorningen pa forsta forsoket. De vanligaste orsakerna till underkant ar bristande observation, fel hastighetsanpassning och osakerhet i korsningar.',
      },
    },
  ],
};

const requirements = [
  {
    icon: '📋',
    title: 'Giltigt korkortstillstand',
    description: 'Ansok via Transportstyrelsen. Kravs synundersokning. Giltigt i 5 ar.',
  },
  {
    icon: '✅',
    title: 'Godkant teoriprov',
    description: 'Maste vara godkant och giltigt — galler i 4 manader fran provdagen.',
  },
  {
    icon: '⚠️',
    title: 'Riskutbildning 1 (riskettan)',
    description: 'Obligatorisk utbildning om alkohol, droger och trotthet i trafiken.',
  },
  {
    icon: '🚗',
    title: 'Riskutbildning 2 (halkbanan)',
    description: 'Praktisk ovning pa halkbana. Boka via trafikskola.',
  },
  {
    icon: '🆔',
    title: 'Giltig legitimation',
    description: 'Pass, nationellt ID-kort eller svenskt korkort. Ta med pa provdagen.',
  },
  {
    icon: '🚙',
    title: 'Provfordonsgodkand bil',
    description: 'Bilen maste ha dubbla pedaler (broms). Via trafikskola ingar bilen i priset.',
  },
];

const steps = [
  {
    number: '1',
    title: 'Uppfyll alla forkunskapskrav',
    description: 'Kontrollera att du har giltigt korkortstillstand, godkant teoriprov, och genomford riskutbildning del 1 och 2. Alla dessa maste vara registrerade i Transportstyrelsens system.',
  },
  {
    number: '2',
    title: 'Ga till trafikverket.se',
    description: 'Besok Trafikverkets bokningstjanst under "Boka prov". Du kan ocksa anvanda appen "Mitt forarprov". Systemet kontrollerar automatiskt att du uppfyller alla krav.',
  },
  {
    number: '3',
    title: 'Logga in med BankID',
    description: 'Identifiera dig med mobilt BankID. Systemet verifierar att ditt teoriprov fortfarande ar giltigt och att riskutbildningen ar registrerad.',
  },
  {
    number: '4',
    title: 'Valj "Korprov B" och provort',
    description: 'Valj korprovstyp (B for personbil) och sedan vilken ort du vill gora provet pa. Korprovet gar alltid i den lokala trafiken — valj en ort du kanner till.',
  },
  {
    number: '5',
    title: 'Valj datum och tid',
    description: 'Boka en tid som passar. Korprovet tar ca 40-45 minuter. Valj en tid pa dagen da du kannar dig pigg och fokuserad — undvik att boka sent pa eftermiddagen om du ar morgonpigg.',
  },
  {
    number: '6',
    title: 'Betala 800 kr',
    description: 'Betalning sker med kort (Visa/Mastercard) direkt vid bokning. Du far en bokningsbekraftelse via e-post. Avboka senast 24 timmar innan for aterbetalning.',
  },
];

const facts = [
  { label: '800 kr', sub: 'provavgift 2026', icon: '💳' },
  { label: '40-45 min', sub: 'provets langd', icon: '⏱️' },
  { label: '~50%', sub: 'klarar pa forsta forsoket', icon: '📊' },
  { label: '4 man', sub: 'teoriprovets giltighet', icon: '📅' },
];

const testCovers = [
  {
    title: 'Korning i stadstrafik',
    body: 'Du kor i vanlig stadstrafik med korsningar, rondeller, overtaget och vaghallning. Provforattaren bedomt din observation, hastighetsanpassning och placeering.',
  },
  {
    title: 'Motorvagskoming (ibland)',
    body: 'Beroende pa provort kan du fa kora pa motorvag eller 2+1-vag. Har bedoms din pafart, filbyte, hastighetsanpassning och avfart.',
  },
  {
    title: 'Manovrering',
    body: 'Du far backa, ficparkera eller vandsparrparkera. Kontroll over fordonet, observation och precision bedoms.',
  },
  {
    title: 'Observation och sakerhet',
    body: 'Genom hela provet bedoms din blickteknik — speglar, dodvinkel, fotgangaroverfarter. Bristande observation ar den vanligaste orsaken till underkant.',
  },
  {
    title: 'Miljomedveten korning',
    body: 'Jaman korning, sparsam gasanvandning och motorbromsning. Miljokoring ar ett bedomningsomrade sedan 2010.',
  },
  {
    title: 'Hastighetsanpassning',
    body: 'Ratt hastighet i relation till vagforhallendan, vader och trafiksituation. Bada for hog och for lag hastighet kan leda till underkant.',
  },
];

const sections = [
  {
    title: 'Vad kostar uppkorningen 2026?',
    content: [
      'Uppkorningen for personbil (B-korkort) kostar 800 kr per tillfalle (2026). Det ar den totala kostnaden for sjalva provet hos Trafikverket.',
      'Om du kor via trafikskola tillkommer dessutom hyra av provfordon — vanligtvis 500-1500 kr beroende pa skola och ort. Manga trafikskolor erbjuder ett paket med uppvarming + provbil.',
      'Om du inte klarar provet maste du betala 800 kr igen nasta gang. Det finns ingen rabatt for omtagning. Med en kostnad pa 800 kr + eventuell bilhyra (1000-2000 kr totalt) ar det ekonomiskt klokt att vara valtforberedd.',
    ],
  },
  {
    title: 'Vantetider for uppkorning',
    content: [
      'Vantetiderna for uppkorning ar generellt langre an for teoriprovet. I Stockholm och Goteborg kan du behova vanta 4-8 veckor for en ledig tid. Under hogsasong (maj-september) kan det ta annu langre.',
      'Mindre stader har kortare vantetider. Om du har mojlighet att gora provet i t.ex. Eskilstuna, Gavle eller Karlstad istallet for Stockholm kan du spara veckor.',
      'Viktigt: eftersom ditt godkanda teoriprov bara galler i 4 manader bor du boka uppkorningen SA SNART du blivit godkand pa teoriprovet. Annars riskerar du att teorin hinner ga ut.',
    ],
  },
  {
    title: 'Tips for att klara uppkorningen',
    content: [
      'Observation ar nyckeln. Den absolut vanligaste orsaken till underkant ar bristande observation — att man inte tittar tillrackligt i speglar, dodvinkel eller vid overfarter. Gorda blickkontroll till en vana.',
      'Kor lugnt och sakert — inte snabbt. Provforattaren vill se att du ar en trygg forare, inte att du ar snabb. Att kora for fort ar aldrig bra. Att kora lagret ar daremot aldrig ett problem sa lange det inte hindrar trafiken.',
      'Ova pa provorten. Om du vet var provet agar rum, kor flera ganger i det omradet. Bekanta dig med korsningarna, cirkulationsplatserna och vanliga strackor. De flesta trafikskolor erbjuder en provomradestraning.',
      'Ta en uppvarmningslektion. De flesta trafikskolor erbjuder en 40-minuterslektion direkt innan provet. Det hjalper dig att bli varm i kladderna och lugna nerverna. Kosta runt 600-800 kr — vart varje krona.',
    ],
  },
  {
    title: 'Om du inte klarar uppkorningen',
    content: [
      'Om du underkands pa uppkorningen far du se exakt vilka bedomningsomraden som var problemet. Provforattaren ger dig muntlig feedback direkt efter provet.',
      'Det finns ingen karenstid — du kan boka om direkt. Men du maste betala 800 kr igen. Och kom ihag: ditt teoriprov galler bara i 4 manader. Om det hinner ga ut maste du gora bade teoriprovet OCH korprovet igen.',
      'De flesta som underkands behover 5-10 extra korlektioner (a 45 min) for att farbattra sina svagheter. Fokusera pa de specifika omraden som provforattaren pekade ut.',
    ],
  },
];

export default function BokaUppkorningPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#fafaf8', color: '#0d1f17', fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      {/* Header */}
      <header style={{ borderBottom: '1px solid #dceee5', background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
            <span style={{ fontSize: '20px', fontWeight: 900, color: '#0d1f17', letterSpacing: '-0.04em' }}>Huvet</span>
          </Link>
          <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <Link href="/teoriprov" style={{ color: '#5a6b62', fontSize: '14px', textDecoration: 'none' }}>Teoriprov</Link>
            <Link href="/korkortstips" style={{ color: '#5a6b62', fontSize: '14px', textDecoration: 'none' }}>Tips</Link>
            <Link href="/" style={{ background: '#f5d020', color: '#0d1f17', fontWeight: 700, fontSize: '14px', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none' }}>
              Borja ova
            </Link>
          </nav>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0.5rem 24px 0' }}>
        <Breadcrumbs items={[
          { label: 'Huvet', href: '/' },
          { label: 'Korprov', href: '/korprov' },
          { label: 'Boka uppkorning' },
        ]} />
      </div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #f0f7f3 0%, #fafaf8 60%)', padding: '40px 20px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#1DB954', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>
            Guide 2026
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 900,
            lineHeight: 1.08,
            color: '#0d1f17',
            margin: '0 0 20px',
            letterSpacing: '-0.04em',
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
          }}>
            Boka uppkorning — komplett guide
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#5a6b62', maxWidth: '600px', margin: '0 0 40px' }}>
            Alla krav, steg-for-steg-bokning, vad provet innehaller och hur du maximerar dina chanser att klara uppkorningen pa forsta forsoket.
          </p>

          {/* Facts grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
            {facts.map((f) => (
              <div key={f.label} style={{ background: 'white', border: '2px solid #dceee5', borderRadius: '16px', padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{f.icon}</div>
                <div style={{ fontSize: '20px', fontWeight: 900, color: '#1DB954', lineHeight: 1 }}>{f.label}</div>
                <div style={{ fontSize: '12px', color: '#5a6b62', marginTop: '4px' }}>{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements checklist */}
      <section style={{ padding: '64px 20px', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
            fontWeight: 900,
            color: '#0d1f17',
            margin: '0 0 12px',
            letterSpacing: '-0.03em',
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
          }}>
            Krav for att boka uppkorning
          </h2>
          <p style={{ fontSize: '16px', color: '#5a6b62', lineHeight: 1.7, margin: '0 0 32px', maxWidth: '600px' }}>
            Alla dessa maste vara uppfyllda och registrerade i Transportstyrelsens system innan du kan boka.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {requirements.map((req) => (
              <div key={req.title} style={{
                background: '#f0f7f3',
                border: '1px solid #dceee5',
                borderRadius: '18px',
                padding: '24px',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}>
                <div style={{ fontSize: '28px', lineHeight: 1 }}>{req.icon}</div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0d1f17', margin: '0 0 6px' }}>{req.title}</h3>
                  <p style={{ fontSize: '14px', color: '#5a6b62', lineHeight: 1.6, margin: 0 }}>{req.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-step guide */}
      <section style={{ padding: '64px 20px', background: '#fafaf8' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
            fontWeight: 900,
            color: '#0d1f17',
            margin: '0 0 40px',
            letterSpacing: '-0.03em',
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
          }}>
            Sa bokar du uppkorningen — 6 steg
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {steps.map((step) => (
              <div key={step.number} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  minWidth: '48px',
                  background: '#1DB954',
                  color: 'white',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: 900,
                }}>
                  {step.number}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0d1f17', margin: '0 0 8px', letterSpacing: '-0.02em' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#5a6b62', margin: 0 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What the test covers */}
      <section style={{ padding: '64px 20px', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
            fontWeight: 900,
            color: '#0d1f17',
            margin: '0 0 12px',
            letterSpacing: '-0.03em',
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
          }}>
            Vad bedoms under uppkorningen?
          </h2>
          <p style={{ fontSize: '16px', color: '#5a6b62', lineHeight: 1.7, margin: '0 0 32px', maxWidth: '600px' }}>
            Provforattaren bedomt din korning i flera kategorier. Allvarliga fel leder direkt till underkant.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            {testCovers.map((item) => (
              <div key={item.title} style={{
                background: '#f0f7f3',
                border: '1px solid #dceee5',
                borderRadius: '18px',
                padding: '28px',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0d1f17', margin: '0 0 10px', letterSpacing: '-0.02em' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#5a6b62', margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section style={{ background: '#fafaf8', padding: '64px 20px' }}>
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
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 20px 64px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #1DB954 0%, #17a34a 100%)', borderRadius: '24px', padding: '48px 40px', textAlign: 'center', color: 'white' }}>
            <div style={{ fontSize: '28px', fontWeight: 900, marginBottom: '12px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Forbered dig for korprovet
            </div>
            <p style={{ fontSize: '16px', opacity: 0.85, marginBottom: '28px', maxWidth: '440px', margin: '0 auto 28px' }}>
              Klara teoriprovet forst — 94% av Huvet-elever godkanns pa forsta forsoket. Sen ar du ett steg narmare uppkorningen.
            </p>
            <Link href="/#demo" style={{ display: 'inline-block', background: '#f5d020', color: '#0d1f17', padding: '16px 36px', borderRadius: '999px', fontWeight: 800, textDecoration: 'none', fontSize: '16px' }}>
              Ova till teoriprovet gratis &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
            Vanliga fragor om uppkorningen
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
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <RelatedGuides currentPath="/boka-uppkorning" />
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #dceee5', background: '#081610', color: 'rgba(255,255,255,0.4)', padding: '32px 20px', textAlign: 'center', fontSize: '13px' }}>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="/teoriprov" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Teoriprov</Link>
          <Link href="/korprov" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Korprov</Link>
          <Link href="/boka-teoriprov" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Boka teoriprov</Link>
          <Link href="/ovningskorning" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Ovningskorning</Link>
          <Link href="/riskutbildning" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Riskutbildning</Link>
          <Link href="/korkort-kostnad" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Kostnad</Link>
          <Link href="/korkortstips" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Tips</Link>
          <Link href="/korkortsfragor" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Fragor</Link>
        </div>
        <span>&copy; 2026 Huvet (huvet.se). Byggt for svenska korkortselever.</span>
      </footer>
    </main>
  );
}
