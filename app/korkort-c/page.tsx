import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'C-körkort lastbil – krav, kostnad och utbildning 2026 | Huvet',
  description:
    'Komplett guide till C-körkort för lastbil 2026. Ålderskrav, YKB-utbildning, teoriprov, körprov, kostnad och hur lång tid det tar att ta lastbilskörkort i Sverige.',
  keywords: [
    'C-körkort',
    'lastbilskörkort',
    'C-körkort krav',
    'C-körkort kostnad',
    'lastbil körkort',
    'YKB utbildning',
    'C-körkort ålder',
    'C-körkort teoriprov',
    'C-körkort körprov',
    'tung lastbil körkort',
  ],
  alternates: { canonical: 'https://huvet.se/korkort-c' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad krävs för att ta C-körkort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Du behöver ha B-körkort, vara minst 21 år (eller 18 med YKB), klara ett hälsointyg med utökat syntest, genomföra teori- och körprov specifikt för C-behörighet, samt ha YKB-grundutbildning om du ska köra yrkesmässigt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur mycket kostar C-körkort 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Totalkostnaden för C-körkort hamnar vanligtvis på 25 000–50 000 kr beroende på om du väljer trafikskola eller intensivkurs, samt hur många lektioner du behöver. YKB-utbildningen tillkommer ofta med 15 000–30 000 kr.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad är skillnaden mellan C och CE-körkort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'C-körkort ger dig rätt att köra lastbil utan tungt släp (totalvikt över 3 500 kg). CE-körkort ger dig dessutom rätt att dra tungt släp, alltså lastbilskombinationer. CE kräver att du redan har C-körkort.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur lång tid tar det att ta C-körkort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Med intensivkurs kan du klara C-körkort på 3–6 veckor. Studerar du på deltid kan det ta 2–6 månader. YKB-grundutbildningen tar normalt 280 timmar (ca 8 veckor heltid).',
      },
    },
  ],
};

const facts = [
  { label: '21 år', sub: 'ålderskrav (18 med YKB)', icon: '🎂' },
  { label: '25–50k kr', sub: 'total kostnad', icon: '💰' },
  { label: 'B-körkort', sub: 'förkunskapskrav', icon: '🚗' },
  { label: '5 år', sub: 'giltighetstid YKB', icon: '📅' },
];

const requirements = [
  {
    title: 'B-körkort krävs',
    description: 'Du måste ha ett giltigt B-körkort (personbil) innan du kan börja utbilda dig för C-körkort. Det finns inga genvägar — B-behörigheten är ett absolut krav.',
    icon: '🚗',
  },
  {
    title: 'Ålderskrav 21 år',
    description: 'Normalt krävs 21 års ålder för C-körkort. Undantag: om du genomgår YKB-grundutbildning (280 timmar) kan du ta C-körkort redan vid 18 års ålder.',
    icon: '🎂',
  },
  {
    title: 'Hälsointyg (utökat)',
    description: 'C-körkort kräver ett utökat hälsointyg (grupp II) från läkare. Det inkluderar syntest med högre krav än för B-körkort, samt kontroll av hjärta, diabetes och andra tillstånd.',
    icon: '🏥',
  },
  {
    title: 'YKB för yrkestrafik',
    description: 'Om du ska köra lastbil yrkesmässigt (godstransport) behöver du yrkeskompetensbevis (YKB). Grundutbildningen är 280 timmar och förnyas vart 5:e år med fortbildning (35 timmar).',
    icon: '📋',
  },
];

const sections = [
  {
    title: 'Vad är C-körkort?',
    content: [
      'C-körkort ger dig rätt att köra tunga lastbilar med en totalvikt över 3 500 kg. Det är det körkort du behöver om du vill arbeta som lastbilschaufför, köra distributionsbilar eller framföra andra tunga fordon.',
      'C-behörigheten omfattar fordonet utan tungt släp. Om du vill köra lastbil med tungt släp (totalvikt över 750 kg) behöver du även CE-körkort, som kräver att du redan har C.',
      'Med C-körkort får du även köra personbilar (B-behörighet behålls) och lätta lastbilar. Det är alltså en utökning av dina befintliga körrättigheter.',
    ],
  },
  {
    title: 'C-körkort vs CE-körkort — skillnaden',
    content: [
      'C-körkort: Lastbil utan tungt släp. Du får köra en lastbil med totalvikt över 3 500 kg, men eventuellt släp får inte överstiga 750 kg totalvikt.',
      'CE-körkort: Lastbil med tungt släp. Ger rätt att köra lastbilskombinationer — exempelvis dragbil med trailer. De flesta fjärrtransportjobb kräver CE.',
      'Strategitips: Många börjar med C och tar CE kort därefter. Vissa trafikskolor erbjuder paketpriser för båda. Om du vet att du vill köra långtradare, satsa direkt på CE efter att du klarat C.',
    ],
  },
  {
    title: 'Kostnad för C-körkort 2026',
    content: [
      'Totalkostnaden för C-körkort varierar stort beroende på utbildningsform och hur snabbt du lär dig. En genomsnittlig kostnad hamnar på 25 000–50 000 kr.',
      'Körlektioner: ca 1 200–1 800 kr/lektion. De flesta behöver 15–25 lektioner. Teorikurs: 3 000–8 000 kr beroende på om det är klassrum eller distans. Provavgifter: teoriprov 420 kr, körprov 1 200 kr.',
      'YKB-grundutbildning tillkommer om du behöver det: 15 000–30 000 kr för hela programmet. Arbetsgivare betalar ibland detta. CSN-berättigade utbildningar finns via YH-skolor.',
    ],
  },
  {
    title: 'Så tar du C-körkort — steg för steg',
    content: [
      '1. Skaffa B-körkort om du inte redan har det. 2. Gör en utökad läkarundersökning (grupp II hälsointyg). 3. Ansök om körkortstillstånd för C hos Transportstyrelsen. 4. Anmäl dig till en trafikskola med lastbilsutbildning.',
      '5. Genomgå teoriutbildning (manöverprov, avgaskrav, lastsäkring, kör- och vilotider). 6. Öva manövrering och körning med lastbil. 7. Avlägg teoriprov hos Trafikverket. 8. Avlägg körprov med godkänt resultat.',
      'Om du ska köra yrkesmässigt: Genomgå YKB-grundutbildning (280 timmar) antingen före eller parallellt med C-utbildningen. YKB-beviset skrivs in på ditt körkort som kod 95.',
    ],
  },
  {
    title: 'Teoriprov för C-körkort',
    content: [
      'Teoriprovet för C-körkort skiljer sig från B-provet. Det innehåller frågor om lastsäkring, kör- och vilotider, bromssystem för tunga fordon, avgaskrav och specifika trafikregler för lastbilar.',
      'Provet består av 70 frågor och du har 50 minuter. Godkäntgränsen är ca 75%. Du bokar provet via Trafikverkets e-tjänst och det kostar 420 kr.',
      'Tips: Använd lastbilsspecifika teoriböcker och övningsprov. Fokusera extra på kör- och vilotider (EU-förordning 561/2006) och lastsäkring — dessa områden har flest frågor och är svårast för nya elever.',
    ],
  },
];

export default function KorkortCPage() {
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
          <Breadcrumbs items={[{ label: 'Hem', href: '/' }, { label: 'C-körkort lastbil' }]} />
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#006B3F', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>Tunga fordon</div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 900, lineHeight: 1.05, color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.04em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            C-körkort lastbil — krav, kostnad och utbildning
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#5a6b62', maxWidth: '600px', margin: '0 0 40px' }}>
            Vill du köra lastbil? C-körkort är nyckeln till tunga fordon och en karriär inom transport. Här får du allt om krav, YKB, kostnad och hur processen ser ut 2026.
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
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 800, color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Krav för C-körkort</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {requirements.map((req) => (
              <div key={req.title} style={{ background: '#f0f7f3', border: '1px solid #dceee5', borderRadius: '18px', padding: '28px 24px' }}>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{req.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0d1f17', margin: '0 0 8px', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>{req.title}</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#5a6b62', margin: 0 }}>{req.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '0 20px 64px' }}>
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
            <div style={{ fontSize: '28px', fontWeight: 900, marginBottom: '12px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Börja med B-körkort först?</div>
            <p style={{ fontSize: '16px', opacity: 0.85, marginBottom: '28px', maxWidth: '440px', margin: '0 auto 28px' }}>Träna inför teoriprovet med Huvet. 450+ frågor, AI-driven träning och 94% godkända elever.</p>
            <Link href="/#demo" style={{ display: 'inline-block', background: '#f5d020', color: '#0d1f17', padding: '16px 36px', borderRadius: '999px', fontWeight: 800, textDecoration: 'none', fontSize: '16px' }}>Börja träna gratis</Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 900, color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Vanliga frågor om C-körkort</h2>
          {pageJsonLd.mainEntity.map((faq, i) => (
            <div key={i} style={{ background: 'white', border: '2px solid #dceee5', borderRadius: '16px', padding: '24px', marginBottom: '12px' }}>
              <div style={{ fontWeight: 800, fontSize: '16px', color: '#0d1f17', marginBottom: '8px' }}>{faq.name}</div>
              <p style={{ color: '#5a6b62', lineHeight: 1.65, fontSize: '15px', margin: 0 }}>{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <RelatedGuides currentPath="/korkort-c" />
        </div>
      </section>

      <footer style={{ background: '#0d1f17', color: 'rgba(255,255,255,0.4)', padding: '32px 20px', textAlign: 'center', fontSize: '13px' }}>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="/teoriprov" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Teoriprov</Link>
          <Link href="/korprov" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körprov</Link>
          <Link href="/b-korkort" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>B-körkort</Link>
          <Link href="/mc" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>MC-körkort</Link>
          <Link href="/korkort-kostnad" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körkort kostnad</Link>
          <Link href="/korkort-alder" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körkort ålder</Link>
        </div>
        <span>&copy; 2026 Huvet (huvet.se). Byggt för svenska körkortselever.</span>
      </footer>
    </div>
  );
}
