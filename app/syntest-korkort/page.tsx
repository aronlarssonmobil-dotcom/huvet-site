import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Syntest för körkort – krav, kostnad och tips 2026 | Huvet',
  description:
    'Allt om syntest för körkort i Sverige 2026. Synskärpekrav, var du gör syntest, kostnad hos optiker, vad som händer om du inte klarar det och tips för bästa resultat.',
  keywords: [
    'syntest körkort',
    'syntest körkort krav',
    'syntest optiker körkort',
    'synskärpa körkort',
    'syntest körkort kostnad',
    'syntest transportstyrelsen',
    'synkrav körkort Sverige',
    'glasögon körkort',
    'syntest körkort tips',
  ],
  alternates: { canonical: 'https://huvet.se/syntest-korkort' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad krävs för att klara syntestet för körkort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Du behöver minst 0,5 i synskärpa på bästa ögat (med eller utan glasögon/linser). Du behöver också ha normalt synfält — minst 120 grader horisontellt. Färgseende testas inte för B-körkort.',
      },
    },
    {
      '@type': 'Question',
      name: 'Var gör man syntest för körkort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Syntest för körkort görs hos en legitimerad optiker. Du kan välja valfri optiker — Specsavers, Synoptik, Synsam eller en fristående optiker. Resultatet skickas digitalt till Transportstyrelsen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad kostar syntest för körkort 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Syntestet kostar vanligtvis 200–400 kr beroende på optiker. Vissa kedjor har kampanjpriser. Priset inkluderar undersökning och digital rapportering till Transportstyrelsen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad händer om jag inte klarar syntestet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Om du inte klarar syntestet utan glasögon kan du göra om testet med glasögon eller kontaktlinser. Klarar du med korrigering får du villkor 01 på körkortet — du måste alltid köra med glasögon/linser. Om du inte klarar alls kan du inte få körkortstillstånd.',
      },
    },
  ],
};

const facts = [
  { label: '0,5', sub: 'minsta synskärpa', icon: '👁️' },
  { label: '200–400 kr', sub: 'kostnad optiker', icon: '💰' },
  { label: '120°', sub: 'synfältskrav', icon: '📐' },
  { label: 'Digitalt', sub: 'skickas automatiskt', icon: '💻' },
];

const sections = [
  {
    title: 'Varför krävs syntest för körkort?',
    content: [
      'Syntestet är ett av de grundläggande medicinska kraven för att få körkortstillstånd i Sverige. Anledningen är enkel: god syn är avgörande för trafiksäkerheten. Du måste kunna läsa vägskyltar, se andra trafikanter och bedöma avstånd.',
      'Syntestet är obligatoriskt för alla som ansöker om körkortstillstånd — oavsett behörighet (B, A, C, D). Du kan inte påbörja övningskörning eller göra prov utan godkänt syntest.',
      'Testet behöver bara göras en gång vid ansökan om körkortstillstånd. Du behöver normalt inte göra om det vid förnyelse av körkort (vart 15:e år), men Transportstyrelsen kan begära det om det finns medicinska skäl.',
    ],
  },
  {
    title: 'Synskärpekrav för B-körkort',
    content: [
      'Kravet för B-körkort (grupp I) är minst 0,5 i synskärpa på bästa ögat. Synskärpa mäts med en standardiserad bokstavstavla där 1,0 är normalsyn. 0,5 innebär att du ser hälften så bra som normalt — men det räcker för körkort.',
      'Du får använda glasögon eller kontaktlinser vid testet. Om du klarar kravet med korrigering men inte utan, får du villkor 01 på ditt körkort. Det betyder att du alltid måste köra med glasögon/linser.',
      'Synfältskravet är minst 120 grader horisontellt. Det innebär att du ska kunna se brett åt sidorna utan att vrida på huvudet. Synfältsbortfall (till exempel vid glaukom) kan innebära att du inte får körkort.',
    ],
  },
  {
    title: 'Hur går syntestet till?',
    content: [
      'Boka tid hos valfri legitimerad optiker. Ring eller boka online — de flesta stora kedjor (Specsavers, Synoptik, Synsam) erbjuder körkorts-syntest och har ofta tid samma vecka.',
      'Testet tar 10–20 minuter. Optikern testar din synskärpa (bokstavstavla), synfält och ibland ögonsamspel. Du testar först utan glasögon, sedan med om du har. Inga smärtsamma moment — det är ett enkelt test.',
      'Resultatet skickas direkt digitalt till Transportstyrelsen. Du behöver inte göra något själv — optikern sköter rapporteringen. Det tar normalt 1–2 arbetsdagar innan Transportstyrelsen registrerar resultatet.',
    ],
  },
  {
    title: 'Tips för att klara syntestet',
    content: [
      'Har du glasögon? Ta med dina aktuella glasögon. Om det var länge sedan du uppdaterade styrkan, boka en synundersökning först och skaffa rätt glasögon innan du gör körkorts-syntestet.',
      'Vila ögonen innan testet. Undvik långa skärmpass morgonen innan. Sov ordentligt natten innan. Trötta ögon kan tillfälligt ge sämre synskärpa.',
      'Var ärlig med optikern. Om du märker att din syn blivit sämre, berätta det. Optikern kan hjälpa dig hitta rätt korrigering. Det är bättre att få villkor 01 och köra säkert än att chansa utan glasögon.',
    ],
  },
  {
    title: 'Syntest för C- och D-körkort (tunga fordon)',
    content: [
      'För C-körkort (lastbil) och D-körkort (buss) gäller strängare synkrav — grupp II. Kravet är minst 0,8 synskärpa på bästa ögat och minst 0,1 på det sämre ögat. Synfältskravet är också utökat.',
      'Syntestet för grupp II görs hos ögonläkare, inte vanlig optiker. Det ingår i det utökade hälsointyget som krävs för tunga behörigheter och måste förnyas regelbundet (vart 5:e år).',
      'Om du planerar att ta C- eller D-körkort i framtiden: kontrollera din syn tidigt. Strängare krav innebär att vissa synfel som är OK för B-körkort inte räcker för tunga fordon.',
    ],
  },
];

export default function SyntestKorkortPage() {
  return (
    <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", background: '#fff', minHeight: '100vh', color: '#0d1f17' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #dceee5', padding: '0 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ width: '36px', height: '36px', background: '#006B3F', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2"/><circle cx="10" cy="10" r="2.5" fill="white"/><line x1="10" y1="2" x2="10" y2="7.5" stroke="white" strokeWidth="2" strokeLinecap="round"/><line x1="3.4" y1="13.5" x2="7.8" y2="11.2" stroke="white" strokeWidth="2" strokeLinecap="round"/><line x1="16.6" y1="13.5" x2="12.2" y2="11.2" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <span style={{ fontSize: '20px', fontWeight: 900, color: '#0d1f17', letterSpacing: '-0.04em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Huvet</span>
          </Link>
          <Link href="/#demo" style={{ background: '#006B3F', color: 'white', padding: '10px 22px', borderRadius: '999px', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}>Träna gratis</Link>
        </div>
      </header>

      <section style={{ background: 'linear-gradient(160deg, #f0f7f3 0%, #fff 60%)', padding: '64px 20px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Breadcrumbs items={[{ label: 'Hem', href: '/' }, { label: 'Syntest för körkort' }]} />
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#006B3F', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>Medicinska krav</div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 900, lineHeight: 1.05, color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.04em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Syntest för körkort — krav, kostnad och tips
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#5a6b62', maxWidth: '600px', margin: '0 0 40px' }}>
            Syntestet är obligatoriskt för körkortstillstånd. Här får du alla detaljer — synskärpekrav, var du testar, vad det kostar och vad som händer om du inte klarar det.
          </p>
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

      <section style={{ background: '#fff', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {sections.map((s, i) => (
            <div key={i} style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: i < sections.length - 1 ? '1px solid #dceee5' : 'none' }}>
              <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', margin: '0 0 16px', letterSpacing: '-0.02em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>{s.title}</h2>
              {s.content.map((p, j) => (
                <p key={j} style={{ fontSize: '16px', lineHeight: 1.75, color: '#5a6b62', margin: '0 0 12px' }}>{p}</p>
              ))}
            </div>
          ))}
          <div style={{ background: 'linear-gradient(135deg, #006B3F 0%, #004d2d 100%)', borderRadius: '20px', padding: '40px', textAlign: 'center', color: 'white' }}>
            <div style={{ fontSize: '28px', fontWeight: 900, marginBottom: '12px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Klarat syntestet?</div>
            <p style={{ fontSize: '16px', opacity: 0.85, marginBottom: '28px', maxWidth: '440px', margin: '0 auto 28px' }}>Dags att börja plugga till teoriprovet! Huvet har 450+ körkortsfrågor och AI-driven träning.</p>
            <Link href="/#demo" style={{ display: 'inline-block', background: '#f5d020', color: '#0d1f17', padding: '16px 36px', borderRadius: '999px', fontWeight: 800, textDecoration: 'none', fontSize: '16px' }}>Börja träna gratis</Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 900, color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Vanliga frågor om syntest</h2>
          {pageJsonLd.mainEntity.map((faq, i) => (
            <div key={i} style={{ background: 'white', border: '2px solid #dceee5', borderRadius: '16px', padding: '24px', marginBottom: '12px' }}>
              <div style={{ fontWeight: 800, fontSize: '16px', color: '#0d1f17', marginBottom: '8px' }}>{faq.name}</div>
              <p style={{ color: '#5a6b62', lineHeight: 1.65, fontSize: '15px', margin: 0 }}>{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}><RelatedGuides currentPath="/syntest-korkort" /></div>
      </section>

      <footer style={{ background: '#0d1f17', color: 'rgba(255,255,255,0.4)', padding: '32px 20px', textAlign: 'center', fontSize: '13px' }}>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="/korkortstillstand" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körkortstillstånd</Link>
          <Link href="/korkort-alder" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körkort ålder</Link>
          <Link href="/b-korkort" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>B-körkort</Link>
          <Link href="/korkort-kostnad" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körkort kostnad</Link>
        </div>
        <span>&copy; 2026 Huvet (huvet.se). Byggt för svenska körkortselever.</span>
      </footer>
    </div>
  );
}
