import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Nya korkortsregler 2025-2026 — Alla forandringar du behover veta | Huvet',
  description:
    'Komplett oversikt over nya korkortsregler och lagforandringar 2025-2026 i Sverige. ADHD-krav borttagna, svarare kringgaende, digitalt korkort, beledsagad korning vid 17 och mer.',
  keywords: [
    'nya korkortsregler 2026',
    'nya regler korkort 2026',
    'korkortsregler 2026',
    'nya trafikregler 2026',
    'korkort nya regler',
    'digitalt korkort',
    'beledsagad korning',
    'korkort 17 ar',
    'ADHD korkort',
    'korkortstillstand ADHD',
    'korkort giltighetstid',
    'nya korkortslagen',
    'EU korkortsdirektiv',
    'B1 korkort',
    'korkort alternativa branslen',
  ],
  openGraph: {
    title: 'Nya korkortsregler 2025-2026 — Alla forandringar | Huvet',
    description:
      'Komplett oversikt over nya korkortsregler i Sverige 2025-2026. ADHD-krav borttagna, digitalt korkort, beledsagad korning vid 17 och mer.',
    locale: 'sv_SE',
    type: 'article',
  },
  alternates: { canonical: 'https://huvet.se/nya-regler-2026' },
};

const faqItems = [
  {
    question: 'Vilka nya korkortsregler galler fran 2026?',
    answer:
      'Fran 15 januari 2026 behover personer med ADHD eller autism inte langre ha lakarintyg for korkortstillstand. Fran 1 maj 2026 blir det svarare att kringgaa svenska korkortskrav genom att ta korkort i annat EU-land. Dessutom planeras beledsagad korning (B-korkort fran 17 ar), digitalt korkort, langre giltighetstid och hogre vikter for alternativa branslen.',
  },
  {
    question: 'Kan man ta korkort vid 17 ars alder i Sverige?',
    answer:
      'Det planeras att Sverige ska infora beledsagad korning, som innebar att du kan ta B-korkort redan vid 17 ars alder men maste kora med en godkand ledsagare tills du fyller 18. Forslaget ar del av EU:s nya korkortsdirektiv och vantade implementeras i svensk lag under 2026-2028.',
  },
  {
    question: 'Vad innebar borttagna ADHD-krav for korkort?',
    answer:
      'Fran 15 januari 2026 kravs inte langre lakarintyg for personer med ADHD, ADD eller autism vid ansokan om korkortstillstand. Tidigare behov av medicinsk bedomning har avskaffats for att minska diskriminering och onodiga hinder.',
  },
  {
    question: 'Nar kommer det digitala korkortet i Sverige?',
    answer:
      'EU:s nya korkortsdirektiv kraver att alla medlemslander infor digitala korkort senast 2032. Sverige arbetar med implementeringen och det digitala korkortet kan bli tillgangligt som komplement till det fysiska korkortet under perioden 2028-2030.',
  },
  {
    question: 'Hur lange kommer korkortet att galla i framtiden?',
    answer:
      'Enligt EU:s nya korkortsdirektiv planeras giltighetstiden for B-korkort att forlangas fran nuvarande 10 ar till 15 ar. For forare over 70 ar forblir giltighetstiden kortare med regelbundna halso- och synkontroller.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const timelineEvents = [
  {
    date: '15 jan 2026',
    status: 'active' as const,
    title: 'ADHD/autism-krav borttagna',
    description:
      'Lakarintyg for ADHD, ADD och autism kravs inte langre vid ansokan om korkortstillstand. Transportstyrelsens foreskrift TSFS 2024:91 trader i kraft.',
    icon: '🧠',
  },
  {
    date: '1 maj 2026',
    status: 'active' as const,
    title: 'Svarare kringgaa svenska korkortskrav',
    description:
      'Ny lagstiftning gor det svarare att kringgaa svenska korkortskrav genom att ta korkort i annat EU/EES-land. Sverige far battre mojligheter att neka utlandska korkort som tagits for att undvika svenska regler.',
    icon: '🛡️',
  },
  {
    date: '2026-2028',
    status: 'planned' as const,
    title: 'Beledsagad korning fran 17 ar',
    description:
      'EU:s nya korkortsdirektiv oppnar for B-korkort fran 17 ars alder med en godkand ledsagare i bilen. Sjalvstandig korning fran 18 ar. Sverige planerar att implementera detta under kommande ar.',
    icon: '👨‍👦',
  },
  {
    date: '2028-2032',
    status: 'planned' as const,
    title: 'Digitalt korkort',
    description:
      'Korkortet blir tillgangligt i digital form pa din mobiltelefon — som komplement till det fysiska korkortet. Alla EU-lander ska ha infort detta senast 2032.',
    icon: '📱',
  },
  {
    date: 'Planerat',
    status: 'planned' as const,
    title: 'Giltighetstid 15 ar istallet for 10',
    description:
      'EU-direktivet foreslar att B-korkortets giltighetstid forlangs fran 10 till 15 ar for forare under 70 ar. For aldre forare behovs fortsatt regelbundna halso- och synkontroller.',
    icon: '📅',
  },
  {
    date: 'Planerat',
    status: 'planned' as const,
    title: 'B-korkort upp till 4 250 kg for alternativa branslen',
    description:
      'Forare med B-korkort kan fa kora fordon upp till 4 250 kg totalvikt om fordonet drivs med alternativa branslen (el, vate, etc.) och overvikten beror pa drivlinan. Underlatttar overgangen till miljofordon.',
    icon: '⚡',
  },
  {
    date: 'Planerat',
    status: 'planned' as const,
    title: 'Ny behorighet B1 (moped-bil / latt fyrhjuling)',
    description:
      'EU utreder inforandet av en ny behorighet B1 for latta motorfordon (moped-bilar och latta fyrhjulingar). Detta kan ge ungdomar fler mobilitetsalternativ med lagre aldersgrans.',
    icon: '🚗',
  },
];

const practicalImplications = [
  {
    title: 'Du med ADHD/autism',
    icon: '🧠',
    text: 'Fran 15 januari 2026 behover du inte langre skaffa lakarintyg for att soka korkortstillstand. Ansokan ar enklare och snabbare.',
  },
  {
    title: 'Du som ar 16-17 ar',
    icon: '🎂',
    text: 'Inom nagra ar kan du troligtvis ta B-korkort redan vid 17 och kora med en ledsagare i bilen. Borja med teoriforeberedelserna redan nu!',
  },
  {
    title: 'Du som planerar kora elbil',
    icon: '⚡',
    text: 'Kommande regler tillater B-korkort for tyngre elfordon upp till 4 250 kg. Du behover inte A-korkort for en tyngre elbil.',
  },
  {
    title: 'Du som ska ta korkort utomlands',
    icon: '✈️',
    text: 'Fran 1 maj 2026 ar det svarare att ta korkort i annat EU-land for att undvika svenska krav. Se till att folja svenska regler.',
  },
  {
    title: 'Du som redan har korkort',
    icon: '💳',
    text: 'Ditt korkort gallnar i framtiden i 15 ar istallet for 10. Dessutom kommer ett digitalt korkort pa mobilen som komplement.',
  },
  {
    title: 'Du som pluggar till korkortet nu',
    icon: '📚',
    text: 'De nya reglerna andrar inte sjalva teoriprovet. Fokusera pa att klara provet — reglerna gynnar dig i framtiden.',
  },
];

export default function NyaReglerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <header style={{ background: 'rgba(255,255,255,0.96)', borderBottom: '1px solid #dceee5', padding: '0 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ width: '36px', height: '36px', background: '#006B3F', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2" />
                <circle cx="10" cy="10" r="2.5" fill="white" />
                <line x1="10" y1="2" x2="10" y2="7.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="3.4" y1="13.5" x2="7.8" y2="11.2" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="16.6" y1="13.5" x2="12.2" y2="11.2" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span style={{ fontSize: '20px', fontWeight: 900, color: '#0d1f17', letterSpacing: '-0.04em' }}>Huvet</span>
          </Link>
          <Link href="/#demo" style={{ background: '#006B3F', color: 'white', padding: '10px 22px', borderRadius: '999px', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}>
            Trana gratis
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '0 1.25rem 4rem' }}>
        <Breadcrumbs items={[{ label: 'Huvet', href: '/' }, { label: 'Nya regler 2025-2026' }]} />

        {/* Hero */}
        <section style={{ padding: '2rem 0 2.5rem' }}>
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#006B3F', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>
            Uppdaterad mars 2026
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', fontWeight: 800, lineHeight: 1.12, color: '#0d1f17', marginBottom: '1rem' }}>
            Nya korkortsregler 2025-2026
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1.1rem', color: '#5a6b62', lineHeight: 1.7, maxWidth: '640px' }}>
            Sveriges korkortslagstiftning genomgar stora forandringar. Fran borttagna ADHD-krav och skarpta regler mot korkortsfusk till kommande forandringar som digitalt korkort, beledsagad korning vid 17 ar och langre giltighetstid. Har far du hela oversikten.
          </p>
        </section>

        {/* Quick summary cards */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
            {[
              { label: '2 nya lagar', sub: 'redan i kraft 2026', icon: '⚖️' },
              { label: '5+ forandringar', sub: 'planerade fran EU', icon: '🇪🇺' },
              { label: 'Korkort vid 17', sub: 'med ledsagare (planerat)', icon: '🎓' },
              { label: '15 ars giltighet', sub: 'istallet for 10 (planerat)', icon: '📅' },
            ].map((f) => (
              <div key={f.label} style={{ background: '#f0f7f3', border: '1px solid #dceee5', borderRadius: 16, padding: '1.25rem 1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{f.icon}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#006B3F', lineHeight: 1.2, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>{f.label}</div>
                <div style={{ fontSize: '0.8rem', color: '#5a6b62', marginTop: '0.25rem' }}>{f.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', marginBottom: '1.5rem' }}>
            Tidslinje: alla forandringar
          </h2>
          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            {/* Timeline line */}
            <div style={{ position: 'absolute', left: '0.65rem', top: '0.5rem', bottom: '0.5rem', width: '3px', background: 'linear-gradient(to bottom, #006B3F 40%, #dceee5 40%)', borderRadius: '2px' }} />

            {timelineEvents.map((event, i) => (
              <div key={i} style={{ position: 'relative', marginBottom: '1.5rem', paddingBottom: i < timelineEvents.length - 1 ? '0.5rem' : 0 }}>
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute',
                  left: '-1.65rem',
                  top: '0.35rem',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: event.status === 'active' ? '#006B3F' : '#dceee5',
                  border: event.status === 'active' ? '3px solid #e6f4ee' : '3px solid #f0f7f3',
                }} />

                <div style={{ background: event.status === 'active' ? '#f0f7f3' : 'white', border: `1px solid ${event.status === 'active' ? '#006B3F' : '#dceee5'}`, borderRadius: 16, padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '1.3rem' }}>{event.icon}</span>
                    <span style={{
                      display: 'inline-block',
                      background: event.status === 'active' ? '#006B3F' : '#f5d020',
                      color: event.status === 'active' ? 'white' : '#0d1f17',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}>
                      {event.date}
                    </span>
                    {event.status === 'active' && (
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#006B3F', textTransform: 'uppercase', letterSpacing: '0.08em' }}>I kraft</span>
                    )}
                    {event.status === 'planned' && (
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#5a6b62', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Kommande</span>
                    )}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1.05rem', fontWeight: 700, color: '#0d1f17', margin: '0 0 0.4rem' }}>
                    {event.title}
                  </h3>
                  <p style={{ margin: 0, color: '#5a6b62', fontSize: '0.92rem', lineHeight: 1.65 }}>
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed section: ADHD */}
        <section style={{ marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid #dceee5' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', marginBottom: '1rem' }}>
            Borttagna ADHD/autism-krav (15 jan 2026)
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1rem', color: '#5a6b62', lineHeight: 1.75, marginBottom: '1rem' }}>
            En av de storsta forandringarna for dem som soker korkortstillstand 2026 ar att kravet pa lakarintyg for personer med ADHD, ADD och autismspektrumtillstand har avskaffats helt. Tidigare behov av medicinsk bedomning fran lakare for att soka korkortstillstand finns inte langre.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1rem', color: '#5a6b62', lineHeight: 1.75, marginBottom: '1rem' }}>
            Andringen baseras pa Transportstyrelsens foreskrift TSFS 2024:91 och trader i kraft den 15 januari 2026. Syftet ar att minska diskriminering och ta bort hinder som saknar medicinsk evidens. Manga personer med neuropsykiatriska funktionsnedsattningar upplevde att kravet var orattvist och forsenande.
          </p>
          <div style={{ background: '#f0f7f3', borderRadius: 16, padding: '1.25rem', border: '1px solid #dceee5', marginBottom: '1rem' }}>
            <strong style={{ color: '#006B3F', fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>Vad innebar detta i praktiken?</strong>
            <ul style={{ margin: '0.75rem 0 0', paddingLeft: '1.25rem', color: '#5a6b62', fontSize: '0.95rem', lineHeight: 1.75 }}>
              <li>Du behover inte langre lamna lakarintyg nar du ansoker om korkortstillstand</li>
              <li>Processen for att fa korkortstillstand blir snabbare och enklare</li>
              <li>Diagnosen ADHD, ADD eller autism ar inte langre ett sarskildt arende vid ansokan</li>
              <li>Du ansoker pa exakt samma satt som alla andra</li>
            </ul>
          </div>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '0.92rem', color: '#5a6b62', lineHeight: 1.75 }}>
            Observera att lakemedelsbehandling med centralstimulerande medel fortfarande kan paverka korkortstillstandet i sarskilda fall. Kontakta Transportstyrelsen om du ar osakerger.
          </p>
        </section>

        {/* Detailed section: Kringgaende */}
        <section style={{ marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid #dceee5' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', marginBottom: '1rem' }}>
            Svarare kringgaa svenska korkortskrav (1 maj 2026)
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1rem', color: '#5a6b62', lineHeight: 1.75, marginBottom: '1rem' }}>
            Fran och med 1 maj 2026 infor Sverige ny lagstiftning som gor det svarare att kringgaa svenska korkortskrav genom att ta korkort i ett annat EU- eller EES-land. Detta ar ett svar pa att vissa personer som blivit av med sitt svenska korkort — exempelvis pa grund av rattfylleri eller medicinska skal — har rest utomlands for att ta ett nytt korkort och sedan anvant det i Sverige.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1rem', color: '#5a6b62', lineHeight: 1.75, marginBottom: '1rem' }}>
            Med den nya lagen far Transportstyrelsen utokade mojligheter att kontrollera och neka erkannande av utlandska korkort som tagits for att undvika svenska regler. Lagen forstarker principen om att den som ar bosatt i Sverige ska folja svenska krav for att fa och behalla korkortet.
          </p>
          <div style={{ background: '#fff8e6', borderRadius: 16, padding: '1.25rem', border: '1px solid #f5d020', marginBottom: '1rem' }}>
            <strong style={{ color: '#0d1f17', fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>Viktigt att veta:</strong>
            <ul style={{ margin: '0.75rem 0 0', paddingLeft: '1.25rem', color: '#5a6b62', fontSize: '0.95rem', lineHeight: 1.75 }}>
              <li>Galler framfor allt personer som haft korkort aterkallade i Sverige</li>
              <li>Utlandska korkort tagna for att kringgaa svenska krav kan nekas</li>
              <li>Transportstyrelsen far utokade befogenheter att utreda fallen</li>
              <li>Paverkar inte dig som har ett legitimt utlandskt korkort</li>
            </ul>
          </div>
        </section>

        {/* Detailed section: Beledsagad korning */}
        <section style={{ marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid #dceee5' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', marginBottom: '1rem' }}>
            Beledsagad korning — B-korkort fran 17 ar
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1rem', color: '#5a6b62', lineHeight: 1.75, marginBottom: '1rem' }}>
            En av de mest omtalade forandringarna i EU:s nya korkortsdirektiv ar beledsagad korning (accompanied driving). Konceptet innebar att du kan ta B-korkort redan vid 17 ars alder, men du maste kora med en godkand ledsagare i passagerarsatet tills du fyller 18. Ledsagaren ska vara minst 25 ar och ha haft korkort i minst 5 ar.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1rem', color: '#5a6b62', lineHeight: 1.75, marginBottom: '1rem' }}>
            Systemet finns redan i lander som Tyskland och Frankrike dar det visat sig minska olycksrisken for unga forare markant. Tanken ar att unga forare far mer korerfarenhet under overvakning innan de slapper ut pa egen hand.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
            {[
              { rubrik: 'Alderskrav', detalj: 'Korkortsprov fran 17 ar, sjalvstandig korning fran 18', icon: '🎂' },
              { rubrik: 'Ledsagarens krav', detalj: 'Minst 25 ar, korkort i minst 5 ar, renlevnad i trafiken', icon: '👤' },
              { rubrik: 'Vad galler', detalj: 'Du kor — ledsagaren sitter bredvid. Inga egna turer.', icon: '🚘' },
              { rubrik: 'Tidsplan', detalj: 'EU-direktivet antaget. Svensk implementering vantad 2026-2028.', icon: '📆' },
            ].map((item) => (
              <div key={item.rubrik} style={{ background: '#f0f7f3', borderRadius: 16, padding: '1.1rem', border: '1px solid #dceee5' }}>
                <div style={{ fontSize: '1.3rem', marginBottom: '0.4rem' }}>{item.icon}</div>
                <strong style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '0.95rem', color: '#0d1f17' }}>{item.rubrik}</strong>
                <p style={{ margin: '0.3rem 0 0', color: '#5a6b62', fontSize: '0.88rem', lineHeight: 1.55 }}>{item.detalj}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed section: Digitalt korkort */}
        <section style={{ marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid #dceee5' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', marginBottom: '1rem' }}>
            Digitalt korkort pa mobilen
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1rem', color: '#5a6b62', lineHeight: 1.75, marginBottom: '1rem' }}>
            EU:s nya korkortsdirektiv kraver att alla medlemslander infor digitala korkort. Det innebar att du i framtiden kan ha ditt korkort som en app eller digital legitimation pa din mobiltelefon, som komplement till det fysiska kortkortet.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1rem', color: '#5a6b62', lineHeight: 1.75, marginBottom: '1rem' }}>
            Det digitala korkortet ska kunna anvandas vid poliskontroller, vid biluthyrning och i andra situationer dar du idag visar det fysiska korkortet. Direktivet kraver att alla EU-lander ska ha infart detta senast 2032, men manga lander siktar pa tidigare implementering.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1rem', color: '#5a6b62', lineHeight: 1.75 }}>
            Det fysiska korkortet kommer fortfarande att gallla — det digitala ar ett tillagg, inte en ersattning. Fordelen ar att du alltid har ditt korkort med dig sa lange du har din telefon.
          </p>
        </section>

        {/* Detailed section: Giltighetstid */}
        <section style={{ marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid #dceee5' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', marginBottom: '1rem' }}>
            Langre giltighetstid: 15 ar istallet for 10
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1rem', color: '#5a6b62', lineHeight: 1.75, marginBottom: '1rem' }}>
            Idag galler ett svenskt B-korkort i 10 ar innan du behover fornya det. Enligt EU:s nya korkortsdirektiv ska giltighetstiden forlangas till 15 ar for forare under 70 ar. Det innebar farre administrationstillfallen och lagre kostnader over tid.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1rem', color: '#5a6b62', lineHeight: 1.75 }}>
            For forare over 70 ar behalls kortare giltighetstider med krav pa regelbundna halso- och synkontroller. Detaljerna for hur Sverige implementerar detta ar inte helt klara annu, men forandringen vantades bora galla for nya och fornyade korkort nar direktivet blir svensk lag.
          </p>
        </section>

        {/* Detailed section: Alternativa branslen */}
        <section style={{ marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid #dceee5' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', marginBottom: '1rem' }}>
            B-korkort for tyngre elfordon (upp till 4 250 kg)
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1rem', color: '#5a6b62', lineHeight: 1.75, marginBottom: '1rem' }}>
            Elbilar och fordon med alternativa drivlinor (vate, etc.) vager ofta mer an sina fossildrivna motsvarigheter pa grund av tunga batterier. Idag gar gransen for B-korkort vid 3 500 kg totalvikt. EU:s nya regler oppnar for att forare med B-korkort ska kunna kora fordon upp till 4 250 kg — under forutsattning att overvikten beror pa den alternativa drivlinan.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1rem', color: '#5a6b62', lineHeight: 1.75 }}>
            Det innebar att du inte behover ta C-korkort for att kora en tyngre elbil eller plug-in hybrid. Regeln ar utformad for att underlatta omstallningen till miljofordon och gynnar bade privatpersoner och foretag.
          </p>
        </section>

        {/* Detailed section: B1 */}
        <section style={{ marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid #dceee5' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', marginBottom: '1rem' }}>
            Ny behorighet B1 — latt fyrhjuling / moped-bil
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1rem', color: '#5a6b62', lineHeight: 1.75, marginBottom: '1rem' }}>
            EU utreder inforandet av en ny korkortsbehorighet kallad B1, som skulle tackta latta motorfordon som moped-bilar och latta fyrhjulingar. Idag faller dessa fordon i en grazzon mellan moped och personbil.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1rem', color: '#5a6b62', lineHeight: 1.75 }}>
            Om B1 infors kan det ge ungdomar fler mobilitetsalternativ med lagre aldersgrans an for fullt B-korkort. Det ger ocksa en tydligare juridisk ram for den typ av smabilar som blivit populara i storstadar. Detaljerna ar fortfarande under utredning inom EU.
          </p>
        </section>

        {/* Practical implications */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', marginBottom: '1.25rem' }}>
            Vad betyder detta for dig?
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1rem', color: '#5a6b62', lineHeight: 1.75, marginBottom: '1.25rem' }}>
            De nya reglerna paverkar olika beroende pa var du befinner dig i din korkortsresa. Har ar en oversikt over vad forandringarna innebar i praktiken.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
            {practicalImplications.map((item) => (
              <div key={item.title} style={{ background: '#f0f7f3', borderRadius: 16, padding: '1.25rem', border: '1px solid #dceee5' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                  <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
                  <strong style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1rem', color: '#0d1f17' }}>{item.title}</strong>
                </div>
                <p style={{ margin: 0, color: '#5a6b62', fontSize: '0.92rem', lineHeight: 1.6 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Summary / sammanfattning */}
        <section style={{ marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid #dceee5' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', marginBottom: '1rem' }}>
            Sammanfattning: vad vi vet och vad som vantelas
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1rem', color: '#5a6b62', lineHeight: 1.75, marginBottom: '1rem' }}>
            Tva forandringar ar redan beslutade och trader i kraft under 2026: borttagna lakarintygskrav for ADHD/autism (15 januari) och skarpta regler mot att ta korkort utomlands for att kringgaa svenska krav (1 maj). Dessa galler och paverkar dig som soker korkortstillstand eller gor ansokan om att fa anvanda ett utlandskt korkort i Sverige.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1rem', color: '#5a6b62', lineHeight: 1.75, marginBottom: '1rem' }}>
            Ovriga forandringar — beledsagad korning, digitalt korkort, langre giltighetstid, hogre vikter for elfordon och ny behorighet B1 — ar alla del av EU:s nya korkortsdirektiv som antogs 2024. Sverige har upp till 2028 pa sig att implementera de flesta bestammelserna, och for det digitala korkortet galler deadline 2032.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1rem', color: '#5a6b62', lineHeight: 1.75 }}>
            Vi uppdaterar denna sida sa snart nya beslut fattas. Bokmork den garnet!
          </p>
        </section>

        {/* FAQ section */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', marginBottom: '1.25rem' }}>
            Vanliga fragor om nya korkortsregler 2026
          </h2>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {faqItems.map((faq, i) => (
              <div key={i} style={{ background: '#f0f7f3', border: '1px solid #dceee5', borderRadius: 16, padding: '1.25rem' }}>
                <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1rem', fontWeight: 700, color: '#0d1f17', margin: '0 0 0.5rem' }}>
                  {faq.question}
                </h3>
                <p style={{ margin: 0, color: '#5a6b62', fontSize: '0.92rem', lineHeight: 1.65 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA block */}
        <div style={{ background: 'linear-gradient(135deg, #006B3F 0%, #004d2d 100%)', borderRadius: 20, padding: '2.5rem', textAlign: 'center', color: 'white', marginBottom: '3rem' }}>
          <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, marginBottom: '0.75rem' }}>
            Oavsett nya regler — provet maste klaras
          </div>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '1rem', opacity: 0.85, marginBottom: '1.5rem', maxWidth: '480px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
            Lagforandringarna andrar inte sjalva teoriprovet. Forbered dig smart med Huvet — ovningsfragor, svaghetsanalys och simulerade prov. 94% av vara elever klarar provet pa forsta forsoket.
          </p>
          <Link href="/#demo" style={{ display: 'inline-block', background: '#f5d020', color: '#0d1f17', padding: '14px 32px', borderRadius: '999px', fontWeight: 800, textDecoration: 'none', fontSize: '1rem', fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
            Borja trana gratis
          </Link>
        </div>

        {/* Related guides */}
        <RelatedGuides currentPath="/nya-regler-2026" />
      </main>
    </>
  );
}
