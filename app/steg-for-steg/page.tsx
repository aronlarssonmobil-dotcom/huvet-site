import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Ta körkort steg för steg — komplett guide 2026 | Huvet',
  description:
    'Komplett steg-för-steg guide till att ta körkort i Sverige 2026. Från syntest till körkort — alla steg, tider, kostnader och länkar du behöver.',
  keywords: [
    'ta körkort steg för steg',
    'körkort steg för steg',
    'hur tar man körkort',
    'körkort guide',
    'körkort process',
    'körkort alla steg',
    'körkort checklista',
    'ta körkort 2026',
    'körkort från början',
  ],
  alternates: { canonical: 'https://huvet.se/steg-for-steg' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hur lång tid tar det att ta körkort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Det tar i genomsnitt 3–12 månader att ta körkort i Sverige, beroende på hur ofta du övningskör och hur snabbt du läser teori. Med en intensivkurs kan det gå på 2–4 veckor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad kostar det att ta körkort totalt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Det totala priset för körkort varierar mellan 10 000 kr (privatist) och 25 000 kr (trafikskola). Kostnaden inkluderar körkortstillstånd, syntest, körlektioner, riskutbildning och prov.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka steg krävs för att ta körkort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stegen är: syntest, ansök om körkortstillstånd, handledarkurs (om privatist), övningskörning, teoristudier, riskutbildning 1, teoriprov, riskutbildning 2, körprov och slutligen hämta ut körkort.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan man ta körkort utan trafikskola?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, du kan ta körkort som privatist. Då behöver en handledare gå en handledarkurs, och du övningskör privat. Det är billigare men kräver en engagerad handledare med minst 5 års körerfarenhet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad är det första steget för att ta körkort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Det allra första steget är att göra ett syntest hos en optiker (gratis). Du behöver ett godkänt syntest för att ansöka om körkortstillstånd hos Transportstyrelsen.',
      },
    },
  ],
};

const steps = [
  {
    num: 1,
    title: 'Syntest',
    desc: 'Gå till valfri optiker och gör ett syntest. Det är helt gratis och tar bara några minuter. Optikern rapporterar resultatet direkt till Transportstyrelsen. Om du behöver glasögon eller linser för att uppfylla kraven måste du alltid ha dem på dig när du kör.',
    time: '15 min',
    cost: 'Gratis',
    link: null,
    linkText: null,
  },
  {
    num: 2,
    title: 'Ansök om körkortstillstånd',
    desc: 'Logga in på Transportstyrelsens webbplats med BankID och ansök om körkortstillstånd. Du behöver ha gjort syntestet först. Tillståndet gäller i 5 år och är obligatoriskt innan du får börja övningskörning. Du måste vara minst 16 år för att ansöka (15 år och 9 månader med villkor).',
    time: '1–3 veckor',
    cost: '220 kr',
    link: '/korkortstillstand',
    linkText: 'Läs mer om körkortstillstånd',
  },
  {
    num: 3,
    title: 'Handledarkurs (om privatist)',
    desc: 'Om du planerar att övningsköra privat behöver din handledare gå en obligatorisk handledarkurs (3 timmar). Handledaren måste ha haft B-körkort i minst 5 år och vara minst 24 år. Kursen kan göras online eller på en trafikskola.',
    time: '3 timmar',
    cost: '300–600 kr',
    link: '/handledarkurs',
    linkText: 'Läs mer om handledarkurs',
  },
  {
    num: 4,
    title: 'Börja övningskörning',
    desc: 'Nu kan du börja övningsköra! Du kan köra privat med en godkänd handledare eller ta lektioner på trafikskola. De flesta behöver 15–25 körlektioner på trafikskola, eller motsvarande timmar privat. Fokusera på att bli trygg i olika trafikmiljöer: stadskörning, landsväg, motorväg och mörker.',
    time: '3–12 månader',
    cost: '0 kr (privat) / 8 000–15 000 kr (trafikskola)',
    link: '/ovningskorning',
    linkText: 'Tips för övningskörning',
  },
  {
    num: 5,
    title: 'Teoristudier',
    desc: 'Parallellt med övningskörningen börjar du plugga teori. Du behöver kunna trafikregler, vägmärken, hastighetsgränser, fordonskännedom och miljökunskap. Använd en app som Huvet för att öva med riktiga körkortsfrågor och hitta dina svagheter. Räkna med 40–80 timmar av teoristudier totalt.',
    time: '40–80 timmar',
    cost: '0–400 kr (appar/böcker)',
    link: '/teoriprov',
    linkText: 'Allt om teoriprovet',
  },
  {
    num: 6,
    title: 'Riskutbildning del 1 (Riskettan)',
    desc: 'Riskettan är en obligatorisk kurs som handlar om alkohol, droger, trötthet och riskbeteenden i trafiken. Kursen är 4 timmar och görs på en trafikskola. Du måste ha körkortstillstånd innan du kan gå kursen. Många gör den tidigt i processen.',
    time: '4 timmar',
    cost: '700–1 200 kr',
    link: '/riskutbildning',
    linkText: 'Läs mer om riskutbildning',
  },
  {
    num: 7,
    title: 'Boka och klara teoriprovet',
    desc: 'När du känner dig redo, boka teoriprovet via Trafikverkets webbplats. Provet består av 65 frågor och du behöver minst 52 rätt (80%) för att bli godkänd. Du har 50 minuter. Boka gärna 2–3 veckor i förväg i storstäder. Klarar du inte kan du boka om direkt.',
    time: '50 min (provet)',
    cost: '325 kr',
    link: '/boka-teoriprov',
    linkText: 'Så bokar du teoriprovet',
  },
  {
    num: 8,
    title: 'Riskutbildning del 2 (Risktvåan)',
    desc: 'Risktvåan görs på en halt bana och fokuserar på bilens beteende vid halkiga vägförhållanden. Du övar på nödbromsning, undanmanöver och att hantera sladd. Kursen är 4 timmar inklusive praktiska övningar. Du måste ha körkortstillstånd för att delta.',
    time: '4 timmar',
    cost: '1 500–3 000 kr',
    link: '/riskutbildning',
    linkText: 'Läs mer om Risk 2',
  },
  {
    num: 9,
    title: 'Boka och klara körprovet',
    desc: 'Körprovet (uppkörningen) tar ca 45 minuter. Du kör i verklig trafik med en inspektör. Provet bedömer din förmåga att köra säkert och följa trafikregler. Cirka 50% klarar inte på första försöket, så var inte orolig om det inte går bra direkt. Godkänt teoriprov gäller i 4 månader.',
    time: '45 min (provet)',
    cost: '800 kr',
    link: '/boka-uppkorning',
    linkText: 'Så bokar du uppkörningen',
  },
  {
    num: 10,
    title: 'Hämta ut körkort!',
    desc: 'Grattis! Efter godkänt körprov skickar Transportstyrelsen ditt körkort med post. Det tar normalt 1–2 veckor. Under tiden får du ett tillfälligt körkort som gäller direkt. Ditt körkort gäller i 10 år (15 år enligt nya EU-regler). Glöm inte att de första 2 åren har du prövotid med strängare regler.',
    time: '1–2 veckor',
    cost: 'Ingår i provavgift',
    link: null,
    linkText: null,
  },
];

const facts = [
  { label: '10 steg', sub: 'till körkort', icon: '🛣️' },
  { label: '3–12 mån', sub: 'genomsnittlig tid', icon: '📅' },
  { label: '10–25k kr', sub: 'total kostnad', icon: '💰' },
  { label: '50%', sub: 'klarar körprov direkt', icon: '🎯' },
];

export default function StegForStegPage() {
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
          <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Link href="/teoriprov" style={{ color: '#5a6b62', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>Teoriprov</Link>
            <Link href="/korprov" style={{ color: '#5a6b62', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>Körprov</Link>
            <Link href="/#demo" style={{ background: '#006B3F', color: 'white', padding: '10px 22px', borderRadius: '999px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Träna gratis
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #f0f7f3 0%, #fff 60%)', padding: '64px 20px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Breadcrumbs items={[
            { label: 'Hem', href: '/' },
            { label: 'Ta körkort steg för steg' },
          ]} />
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#006B3F', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>
            Komplett guide 2026
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 900, lineHeight: 1.05, color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.04em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Ta körkort steg för steg
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#5a6b62', maxWidth: '600px', margin: '0 0 40px' }}>
            Från syntest till att hålla körkortet i handen. Här är varje steg, med tidsramar, kostnader och direktlänkar till djupguider. Uppdaterad för 2026.
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

      {/* Intro */}
      <section style={{ background: '#fff', padding: '0 20px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', margin: '0 0 16px', letterSpacing: '-0.02em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Hur tar man körkort i Sverige?
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#5a6b62', margin: '0 0 12px' }}>
            Att ta körkort i Sverige innebär att du genomgår en serie steg som Transportstyrelsen har bestämt. Processen tar typiskt 3 till 12 månader beroende på hur intensivt du övar. Totalkostnaden varierar stort: en privatist som övningskör med familj kan klara sig på runt 10 000 kr, medan den som tar alla lektioner på trafikskola kan räkna med 20 000 till 25 000 kr.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#5a6b62', margin: '0 0 12px' }}>
            Oavsett vilken väg du väljer ser stegen likadana ut. Vi har sammanställt alla tio steg i en tydlig ordning, med beräknade tider och kostnader. Klicka på varje steg för att läsa mer i vår djupguide.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 900, color: '#0d1f17', margin: '0 0 40px', letterSpacing: '-0.03em', textAlign: 'center', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Alla 10 steg till körkort
          </h2>

          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute', left: '28px', top: '40px', bottom: '40px',
              width: '3px', background: 'linear-gradient(180deg, #006B3F 0%, #f5d020 100%)',
              borderRadius: '2px',
            }} />

            {steps.map((step) => (
              <div key={step.num} style={{
                position: 'relative',
                display: 'flex',
                gap: '24px',
                marginBottom: '24px',
                alignItems: 'flex-start',
              }}>
                {/* Step number circle */}
                <div style={{
                  width: '56px', height: '56px', borderRadius: '50%',
                  background: step.num === 10 ? 'linear-gradient(135deg, #f5d020, #f5d020)' : '#006B3F',
                  color: step.num === 10 ? '#0d1f17' : 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 900, fontSize: '20px', flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(0,107,63,0.2)',
                  zIndex: 2,
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                }}>
                  {step.num}
                </div>

                {/* Card */}
                <div style={{
                  flex: 1,
                  background: 'white',
                  border: '1px solid #dceee5',
                  borderRadius: '16px',
                  padding: '24px',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}>
                  <h3 style={{
                    fontSize: '18px', fontWeight: 800, color: '#0d1f17',
                    margin: '0 0 8px',
                    fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#5a6b62', margin: '0 0 16px' }}>
                    {step.desc}
                  </p>

                  {/* Meta */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: step.link ? '12px' : '0' }}>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: '4px',
                      background: '#e6f4ee', color: '#006B3F', fontSize: '13px',
                      fontWeight: 600, padding: '4px 12px', borderRadius: '999px',
                    }}>
                      &#9200; {step.time}
                    </span>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: '4px',
                      background: '#fff8e1', color: '#8a7000', fontSize: '13px',
                      fontWeight: 600, padding: '4px 12px', borderRadius: '999px',
                    }}>
                      &#128176; {step.cost}
                    </span>
                  </div>

                  {step.link && (
                    <Link href={step.link} style={{
                      display: 'inline-block', color: '#006B3F', fontSize: '14px',
                      fontWeight: 700, textDecoration: 'none',
                    }}>
                      {step.linkText} &rarr;
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Total summary */}
      <section style={{ background: '#fff', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', margin: '0 0 24px', letterSpacing: '-0.02em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Sammanställning: tid och kostnad
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '40px' }}>
            <div style={{ background: '#f0f7f3', border: '1px solid #dceee5', borderRadius: '16px', padding: '24px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#006B3F', margin: '0 0 12px' }}>Privatist (billigaste alternativet)</h3>
              <div style={{ fontSize: '28px', fontWeight: 900, color: '#0d1f17', margin: '0 0 8px' }}>~10 000 kr</div>
              <p style={{ fontSize: '14px', color: '#5a6b62', margin: 0, lineHeight: 1.6 }}>
                Övningskörning med familj/vän, eget teoristrategiskt, minimalt med körlektioner. Kräver engagerad handledare.
              </p>
            </div>
            <div style={{ background: '#f0f7f3', border: '1px solid #dceee5', borderRadius: '16px', padding: '24px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#006B3F', margin: '0 0 12px' }}>Trafikskola (vanligast)</h3>
              <div style={{ fontSize: '28px', fontWeight: 900, color: '#0d1f17', margin: '0 0 8px' }}>~20 000–25 000 kr</div>
              <p style={{ fontSize: '14px', color: '#5a6b62', margin: 0, lineHeight: 1.6 }}>
                Paketpris med körlektioner, riskutbildning och provbokning. Enklast och mest strukturerat.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0d1f17', margin: '0 0 12px' }}>Tidslinje</h3>
          <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#5a6b62', margin: '0 0 12px' }}>
            De flesta tar körkort på 3 till 12 månader. Faktorer som påverkar tiden: hur ofta du kör, om du kör privat eller på trafikskola, hur snabbt du lär dig teori, och väntetider för provbokning (2-6 veckor i storstäder).
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#5a6b62', margin: '0 0 12px' }}>
            Med en intensivkurs kan du ta körkort på 2 till 4 veckor, men det kräver att du redan har grundläggande körerfarenhet och att du kan plugga teori på heltid.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0d1f17', margin: '24px 0 12px' }}>Privatist vs trafikskola</h3>
          <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#5a6b62', margin: '0 0 12px' }}>
            Att köra som privatist sparar pengar men kräver att du har en handledare som har tid och tålamod. Trafikskolan ger struktur, professionell feedback och ofta paketpriser. Många väljer en kombination: privat övningskörning plus några proffslektioner inför uppkörningen.
          </p>
        </div>
      </section>

      {/* Tips section */}
      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', margin: '0 0 24px', letterSpacing: '-0.02em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Smarta tips längs vägen
          </h2>
          <div style={{ display: 'grid', gap: '12px' }}>
            {[
              { tip: 'Boka teoriprov och körprov samtidigt', detail: 'Boka körprovet 3-6 veckor efter teoriprovet. Då har du ett konkret datum att jobba mot och slipper vänta på tider.' },
              { tip: 'Börja med teori tidigt', detail: 'Du kan börja plugga teori redan innan du får körkortstillståndet. Ju tidigare du börjar, desto mer hinner sjunka in.' },
              { tip: 'Öva i olika väder och tider på dygnet', detail: 'Övningskörning i regn, mörker och rusningstrafik gör dig till en bättre förare och förbereder dig för körprovet.' },
              { tip: 'Använd svaghetsanalys', detail: 'Istället för att plugga allt lika mycket, fokusera på dina svaga områden. Huvet identifierar dem automatiskt åt dig.' },
              { tip: 'Gör simulerade prov innan det riktiga', detail: 'Öva med fullständiga 65-frågorsprov under tidspress. Det bygger vana och minskar stressen på provdagen.' },
            ].map((t, i) => (
              <div key={i} style={{ background: 'white', border: '1px solid #dceee5', borderRadius: '14px', padding: '20px' }}>
                <div style={{ fontWeight: 700, fontSize: '15px', color: '#006B3F', marginBottom: '6px' }}>&#10003; {t.tip}</div>
                <p style={{ fontSize: '14px', color: '#5a6b62', margin: 0, lineHeight: 1.6 }}>{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 900, color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Vanliga frågor om att ta körkort
          </h2>
          {pageJsonLd.mainEntity.map((faq, i) => (
            <div key={i} style={{ background: '#f0f7f3', border: '1px solid #dceee5', borderRadius: '16px', padding: '24px', marginBottom: '12px' }}>
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
      <section style={{ padding: '0 20px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <RelatedGuides currentPath="/steg-for-steg" />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 20px 80px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #006B3F 0%, #004d2d 100%)', borderRadius: '20px', padding: '40px', textAlign: 'center', color: 'white' }}>
            <div style={{ fontSize: '28px', fontWeight: 900, marginBottom: '12px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Redo att börja din körkortsresa?
            </div>
            <p style={{ fontSize: '16px', opacity: 0.85, marginBottom: '28px', maxWidth: '440px', margin: '0 auto 28px' }}>
              Huvet guidar dig genom teoriprovet med personlig träning och svaghetsanalys. 94% av eleverna klarar provet.
            </p>
            <Link href="/#demo" style={{ display: 'inline-block', background: '#f5d020', color: '#0d1f17', padding: '16px 36px', borderRadius: '999px', fontWeight: 800, textDecoration: 'none', fontSize: '16px' }}>
              Börja träna gratis &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0d1f17', color: 'rgba(255,255,255,0.4)', padding: '32px 20px', textAlign: 'center', fontSize: '13px' }}>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="/teoriprov" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Teoriprov</Link>
          <Link href="/korprov" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körprov</Link>
          <Link href="/ovningskorning" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Övningskörning</Link>
          <Link href="/korkort-kostnad" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körkort kostnad</Link>
          <Link href="/nervos-uppkorning" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Nervös inför uppkörning</Link>
          <Link href="/fornya-korkort" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Förnya körkort</Link>
          <Link href="/vagmarken" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Vägmärken</Link>
          <Link href="/riskutbildning" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Riskutbildning</Link>
        </div>
        <span>&copy; 2026 Huvet (huvet.se). Byggt för svenska körkortselever.</span>
      </footer>
    </div>
  );
}
