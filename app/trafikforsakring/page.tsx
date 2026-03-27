import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Trafikförsäkring – vad det är, krav och kostnad 2026 | Huvet',
  description:
    'Allt om trafikförsäkring i Sverige 2026. Vad den täcker, vad den kostar, varför den är obligatorisk och skillnaden mot hel- och halvförsäkring. Guide för nya förare.',
  keywords: [
    'trafikförsäkring',
    'trafikförsäkring bil',
    'trafikförsäkring kostnad',
    'trafikförsäkring obligatorisk',
    'bilförsäkring ny förare',
    'trafikförsäkring vad täcker den',
    'oförsäkrad bil straff',
    'trafikförsäkringsavgift',
    'försäkring körkort',
  ],
  alternates: { canonical: 'https://huvet.se/trafikforsakring' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad är trafikförsäkring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trafikförsäkring är en obligatorisk försäkring som alla motorfordon i Sverige måste ha. Den täcker personskador på andra vid trafikolycka, oavsett vems fel det var. Den ersätter också personskador på föraren och passagerare i ditt eget fordon.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad kostar trafikförsäkring 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trafikförsäkring kostar typiskt 1 500–5 000 kr per år beroende på bilmodell, var du bor, din ålder och körerfarenhet. Nya unga förare betalar mest — ofta 4 000–8 000 kr per år.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad händer om man kör utan trafikförsäkring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Att köra utan trafikförsäkring innebär en trafikförsäkringsavgift (straffavgift) som Trafikförsäkringsföreningen tar ut — cirka 100 kr per dag bilen är oförsäkrad. Dessutom riskerar du böter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad är skillnaden mellan trafikförsäkring och halvförsäkring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trafikförsäkring täcker bara personskador. Halvförsäkring (delkasko) inkluderar trafikförsäkring PLUS skydd mot brand, stöld, glasskador och maskinskador. Helförsäkring lägger till vagnskadegaranti — även egna krockar.',
      },
    },
  ],
};

const facts = [
  { label: 'Obligatorisk', sub: 'krävs enligt lag', icon: '⚖️' },
  { label: '1 500–5 000 kr', sub: 'per år', icon: '💰' },
  { label: '~100 kr/dag', sub: 'straffavgift utan', icon: '⚠️' },
  { label: 'Alla fordon', sub: 'bilar, mc, moped', icon: '🚗' },
];

const sections = [
  {
    title: 'Vad är trafikförsäkring?',
    content: [
      'Trafikförsäkring är den mest grundläggande bilförsäkringen i Sverige och den enda som är obligatorisk enligt lag (trafikskadelagen). Alla motorfordon som kan användas i trafik MÅSTE ha trafikförsäkring — oavsett om du kör bilen dagligen eller har den parkerad.',
      'Försäkringen täcker personskador vid trafikolyckor. Det innebär skador på andra trafikanter (fotgängare, cyklister, passagerare i andra bilar), passagerare i ditt eget fordon, och dig som förare. Den ersätter INTE skador på fordon — bara personskador.',
      'Trafikförsäkringen gäller oavsett vems fel olyckan var. Det kallas strikt ansvar. Även om du inte var vållande till olyckan betalar trafikförsäkringen ut ersättning för personskador.',
    ],
  },
  {
    title: 'Vad täcker trafikförsäkringen?',
    content: [
      'Personskador: Sjukvårdskostnader, rehabilitering, inkomstförlust, sveda och värk, samt invaliditetsersättning vid bestående skador. Detta gäller alla inblandade — inte bara motparten.',
      'Sakskador på annans egendom: Om du orsakar en olycka täcker trafikförsäkringen skador på andra bilar, staket, vägräcken och annan egendom. Observera: den täcker INTE skador på din egen bil.',
      'Vad som INTE täcks: Skador på din egen bil, stöld av bilen, brand, glasskador eller motorhaveri. För det behöver du halvförsäkring (delkasko) eller helförsäkring (vagnskadegaranti).',
    ],
  },
  {
    title: 'Trafikförsäkring vs halvförsäkring vs helförsäkring',
    content: [
      'Trafikförsäkring (trafik): Lägsta nivån. Personskador + sakskador på annans egendom. Obligatorisk. Passar äldre bilar med lågt värde där du inte vill lägga pengar på att skydda bilen.',
      'Halvförsäkring (delkasko): Trafikförsäkring + brand, stöld, glas, maskinskador, rättsskydd, krishantering. Passar bilar i mellanklassen. Vanligaste valet för bilar 5–15 år gamla.',
      'Helförsäkring: Halvförsäkring + vagnskadegaranti (skador på din egen bil vid krock, dikeskörning, parkering etc). Rekommenderas för nya och värdefulla bilar. Mest kostsam men mest omfattande.',
    ],
  },
  {
    title: 'Kostnad för trafikförsäkring 2026',
    content: [
      'Priset varierar stort beroende på bilmodell, bostadsort, förarens ålder och körerfarenhet. Genomsnittligt: 1 500–5 000 kr per år för en vanlig personbil med erfaren förare.',
      'Unga förare (18–25 år) betalar mer — ofta 4 000–8 000 kr per år enbart för trafikförsäkring. Försäkringsbolagen bedömer unga förare som högre risk, vilket driver upp priset.',
      'Tips: Jämför alltid priser mellan olika bolag. Använd jämförelsesajter som Insplanet eller Compricer. Skillnaden kan vara tusentals kronor per år. Välj högre självrisk om du vill sänka premien.',
    ],
  },
  {
    title: 'Vad händer utan trafikförsäkring?',
    content: [
      'Om ditt fordon saknar trafikförsäkring tar Trafikförsäkringsföreningen (TFF) ut en trafikförsäkringsavgift — ungefär 100 kr per dag bilen är oförsäkrad. Det kan alltså bli tusentals kronor på bara några veckor.',
      'Om du orsakar en olycka utan försäkring betalar TFF ersättning till den skadelidande — men kräver sedan tillbaka hela beloppet från dig. Det kan handla om hundratusentals kronor.',
      'Du kan inte heller besiktiga bilen utan giltig trafikförsäkring. Och om bilen avställs hos Transportstyrelsen behövs ingen försäkring — men då får du absolut inte köra den.',
    ],
  },
];

export default function TrafikforsakringPage() {
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
          <Breadcrumbs items={[{ label: 'Hem', href: '/' }, { label: 'Trafikförsäkring' }]} />
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#006B3F', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>Försäkring & juridik</div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 900, lineHeight: 1.05, color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.04em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Trafikförsäkring — vad det är, krav och kostnad
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#5a6b62', maxWidth: '600px', margin: '0 0 40px' }}>
            Trafikförsäkring är obligatorisk för alla fordon i Sverige. Här förklarar vi vad den täcker, vad den kostar och hur den skiljer sig från halv- och helförsäkring.
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
            <div style={{ fontSize: '28px', fontWeight: 900, marginBottom: '12px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Pluggar du till körkort?</div>
            <p style={{ fontSize: '16px', opacity: 0.85, marginBottom: '28px', maxWidth: '440px', margin: '0 auto 28px' }}>Trafikförsäkring är ett ämne som dyker upp på teoriprovet. Öva med 450+ körkortsfrågor på Huvet.</p>
            <Link href="/#demo" style={{ display: 'inline-block', background: '#f5d020', color: '#0d1f17', padding: '16px 36px', borderRadius: '999px', fontWeight: 800, textDecoration: 'none', fontSize: '16px' }}>Börja träna gratis</Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 900, color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Vanliga frågor om trafikförsäkring</h2>
          {pageJsonLd.mainEntity.map((faq, i) => (
            <div key={i} style={{ background: 'white', border: '2px solid #dceee5', borderRadius: '16px', padding: '24px', marginBottom: '12px' }}>
              <div style={{ fontWeight: 800, fontSize: '16px', color: '#0d1f17', marginBottom: '8px' }}>{faq.name}</div>
              <p style={{ color: '#5a6b62', lineHeight: 1.65, fontSize: '15px', margin: 0 }}>{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}><RelatedGuides currentPath="/trafikforsakring" /></div>
      </section>

      <footer style={{ background: '#0d1f17', color: 'rgba(255,255,255,0.4)', padding: '32px 20px', textAlign: 'center', fontSize: '13px' }}>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="/b-korkort" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>B-körkort</Link>
          <Link href="/korkort-kostnad" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körkort kostnad</Link>
          <Link href="/rattfylleri" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Rattfylleri</Link>
          <Link href="/trafikregler" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Trafikregler</Link>
        </div>
        <span>&copy; 2026 Huvet (huvet.se). Byggt för svenska körkortselever.</span>
      </footer>
    </div>
  );
}
