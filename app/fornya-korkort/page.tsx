import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Förnya körkort — så gör du (guide 2026) | Huvet',
  description:
    'Komplett guide till att förnya ditt körkort i Sverige 2026. Giltighetstid, kostnad, hur du ansöker, nya fotokrav, vad som händer om det gått ut och kommande EU-regler.',
  keywords: [
    'förnya körkort',
    'körkort förnya',
    'förnyelse körkort',
    'körkort giltighet',
    'körkort utgånget',
    'körkort giltighetstid',
    'nytt körkort foto',
    'transportstyrelsen körkort',
    'körkort 10 år',
    'körkort EU regler',
    'digitalt körkort',
  ],
  alternates: { canonical: 'https://huvet.se/fornya-korkort' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hur länge gäller ett svenskt körkort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ett svenskt körkort gäller normalt i 10 år. Med kommande EU-regler (EU:s fjärde körkortsdirektiv) kan giltighetstiden förlängas till 15 år. Efter det måste du förnya kortet med nytt foto.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad kostar det att förnya körkort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Det kostar 220 kr att förnya ditt körkort hos Transportstyrelsen (2026). Priset gäller oavsett om du förnyar innan eller efter att det gått ut. Tillkommer kostnad för nytt foto om du inte har godkänt e-foto.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan man köra med ett utgånget körkort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nej, det är olagligt att köra med ett utgånget körkort. Din körkortsrätt finns kvar, men du får inte framföra fordon. Du riskerar böter och att försäkringen inte gäller vid en olycka.',
      },
    },
    {
      '@type': 'Question',
      name: 'Behöver jag ta om körkortsprov vid förnyelse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nej, du behöver inte ta om något prov vid en vanlig förnyelse. Du ansöker bara om ett nytt kort med nytt foto. Om körkortet har varit ogiltigt i mer än 3 år kan Transportstyrelsen i undantagsfall kräva nytt prov, men det är mycket ovanligt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur lång tid tar det att få det nya körkortet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Det tar normalt 2-4 veckor att få det nya körkortet med posten efter att din ansökan godkänts. Under väntetiden kan du använda ett tillfälligt körkort som bevis på att du har giltig körkortsrätt.',
      },
    },
  ],
};

const facts = [
  { label: '10 år', sub: 'giltighetstid (nuvarande)', icon: '📅' },
  { label: '220 kr', sub: 'förnyelseavgift', icon: '💳' },
  { label: '2–4 v', sub: 'leveranstid nytt kort', icon: '📬' },
  { label: '15 år', sub: 'ny EU-giltighetstid', icon: '🇪🇺' },
];

const timelineSteps = [
  { step: '1', title: 'Kontrollera giltighetsdatum', desc: 'Titta på ditt körkorts baksida. Giltighetsdatumet står på rad 4b. Du kan ansöka om förnyelse upp till 12 månader innan det går ut.' },
  { step: '2', title: 'Ta nytt körkortsfoto', desc: 'Du behöver ett e-foto taget hos en godkänd fotograf (de flesta fotobutiker). Fotot skickas digitalt till Transportstyrelsen. Det kostar vanligtvis 100–200 kr.' },
  { step: '3', title: 'Ansök hos Transportstyrelsen', desc: 'Logga in på transportstyrelsen.se med BankID. Gå till "Mina fordon och körkort" och välj "Förnya körkort". Betala avgiften 220 kr.' },
  { step: '4', title: 'Vänta på det nya kortet', desc: 'Ditt nya körkort skickas med post till din folkbokföringsadress. Det tar normalt 2–4 veckor. Under tiden har du ett tillfälligt körkort.' },
  { step: '5', title: 'Klipp ditt gamla kort', desc: 'När det nya kortet kommer, klipp sönder ditt gamla körkort. Behåll det inte — det kan orsaka förvirring vid identitetskontroller.' },
];

const sections = [
  {
    title: 'När behöver du förnya körkortet?',
    paragraphs: [
      'Ditt svenska körkort har ett giltighetsdatum tryckt på kortets baksida (rad 4b). De flesta körkort utfärdade efter 2013 gäller i 10 år. Äldre körkort kan ha annan giltighetstid beroende på när de utfärdades.',
      'Transportstyrelsen skickar normalt en påminnelse ca 3 månader innan ditt körkort går ut, men det är ditt eget ansvar att hålla koll på datumet. Du kan ansöka om förnyelse redan 12 månader innan utgångsdatum.',
      'Med EU:s fjärde körkortsdirektiv, som förväntas börja gälla under 2026–2027, kan giltighetstiden förlängas till 15 år. Exakt datum för implementering i Sverige är ännu inte fastställt.',
    ],
  },
  {
    title: 'Vad kostar det att förnya körkortet?',
    paragraphs: [
      'Avgiften till Transportstyrelsen för att förnya körkortet är 220 kr (2026). Detta är samma pris oavsett om du förnyar innan eller efter att det gått ut.',
      'Utöver avgiften tillkommer kostnad för nytt körkortsfoto (e-foto). Priset varierar mellan 100 och 250 kr beroende på fotograf. Totalkostnaden blir alltså runt 320–470 kr.',
      'Om du behöver ett nytt syntest (gäller främst de som är 45 år eller äldre vid ansökan) tillkommer eventuellt en kostnad för det, beroende på optiker. Många optiker erbjuder gratis syntest.',
    ],
  },
  {
    title: 'Fotokrav för nya körkort',
    paragraphs: [
      'Sedan 2020 kräver Transportstyrelsen ett digitalt e-foto taget hos en godkänd fotograf. Du kan inte längre använda egna foton eller passfotoautomater.',
      'Fotot ska vara taget rakt framifrån, med neutralt ansiktsuttryck, mot ljus bakgrund. Glasögon är tillåtna om de inte ger reflexer. Religiösa huvudbonader tillåts om ansiktet syns tydligt.',
      'Fotografen laddar upp fotot digitalt till Transportstyrelsen, och det kopplas till ditt personnummer. Fotot är giltigt i 6 månader efter att det tagits. Ta fotot innan du ansöker online.',
    ],
  },
  {
    title: 'Vad händer om körkortet redan gått ut?',
    paragraphs: [
      'Om ditt körkort har gått ut får du inte köra. Din behörighet finns kvar — du förlorar inte den — men själva kortet är ogiltigt. Det innebär att du inte har rätt att framföra motorfordon på väg.',
      'Att köra med utgånget körkort räknas som olovlig körning och kan ge böter. Dessutom kan det påverka din trafikförsäkring: vid en olycka riskerar du att försäkringsbolaget inte betalar ut full ersättning.',
      'Du kan förnya körkortet även om det gått ut. Processen är exakt densamma: ta nytt foto, ansök online, betala 220 kr. Du behöver normalt inte ta om några prov, oavsett hur länge det gått ut.',
      'I extrema fall (om körkortet varit ogiltigt i väldigt lång tid) kan Transportstyrelsen begära ett nytt syntest. Detta är dock ovanligt för personer under 75 år.',
    ],
  },
  {
    title: 'Syntest vid förnyelse',
    paragraphs: [
      'Du behöver normalt inte göra något nytt syntest vid förnyelse om du är under 45 år. Transportstyrelsen kan dock kräva det i vissa fall.',
      'Från 45 års ålder kan du behöva bifoga ett syntest vid förnyelse. Från 75 års ålder krävs alltid en läkarkontroll och syntest vid förnyelse. Dessa regler kan ändras i samband med EU:s nya körkortsdirektiv.',
      'Syntestet görs hos valfri optiker och är ofta gratis. Optikern rapporterar resultatet direkt till Transportstyrelsen digitalt.',
    ],
  },
  {
    title: 'EU:s nya körkortsdirektiv — vad förändras?',
    paragraphs: [
      'EU arbetar med ett fjärde körkortsdirektiv som påverkar alla medlemsländer. De viktigaste förändringarna som förväntas:',
      'Giltighetstid: Förlängs troligen från 10 år till 15 år för standardkörkort (B). Det innebär färre förnyelseprocesser under en livstid.',
      'Digitalt körkort: EU planerar att introducera ett digitalt körkort som kan visas i en app på mobilen. Det fysiska kortet kommer initialt att finnas kvar parallellt.',
      'Ålderskontroller: Diskussion pågår om striktare hälsokontroller vid förnyelse för äldre förare, men detaljerna är inte klara. Sverige har redan relativt strikta regler för förare över 75.',
      'Miljözoner: Det finns förslag om att inkludera information om fordonstyper och miljöklassning i körkortssystemet, men detta är ännu inte beslutat.',
    ],
  },
  {
    title: 'Digitalt körkort — framtiden',
    paragraphs: [
      'Sverige har redan tagit steg mot digitalisering av körkortet. Transportstyrelsen arbetar med en digital lösning som gör att du kan visa ditt körkort i en app.',
      'Det digitala körkortet förväntas fungera som komplement till det fysiska kortet, inte ersätta det helt (åtminstone initialt). Det ska gå att verifiera digitalt av polis och andra myndigheter.',
      'EU-standarden för digitala körkort förväntas vara klar under 2026–2027. Sverige planerar att vara ett av de första länderna att implementera det.',
      'Fördelen med digitalt körkort: du behöver aldrig oroa dig för att glömma det hemma. Nackdelen: det kräver en smartphone och fungerar inte om batteriet tar slut. Därför behålls det fysiska kortet som backup.',
    ],
  },
  {
    title: 'Vanliga misstag vid förnyelse',
    paragraphs: [
      'Väntar för länge: Ansök inte i sista minuten. Det tar 2-4 veckor att få det nya kortet, och om du missar deadlinen får du inte köra under väntetiden.',
      'Glömmer fotoet: Du måste ta ett nytt e-foto innan du kan ansöka online. Fotot ska vara taget hos en godkänd fotograf, inte i automat.',
      'Fel adress: Körkortet skickas till din folkbokföringsadress. Har du flyttat utan att uppdatera Skatteverket? Gör det innan du ansöker.',
      'Tror att man måste ta om prov: Nej, förnyelse innebär bara ett nytt kort med nytt foto. Du behöver inte göra om teoriprov eller körprov vid en normal förnyelse.',
    ],
  },
];

export default function FornyaKorkortPage() {
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
            <div style={{ width: '36px', height: '36px', background: '#1DB954', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
            <Link href="/#demo" style={{ background: '#1DB954', color: 'white', padding: '10px 22px', borderRadius: '999px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' }}>
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
            { label: 'Förnya körkort' },
          ]} />
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#1DB954', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>
            Guide 2026
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 900, lineHeight: 1.05, color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.04em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Förnya körkort — så gör du
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#5a6b62', maxWidth: '600px', margin: '0 0 40px' }}>
            Ditt körkort gäller i 10 år. Här är allt du behöver veta om förnyelse: kostnad, fotokerav, ansökan och vad som händer om det redan gått ut. Uppdaterat med EU:s nya regler.
          </p>

          {/* Facts grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginBottom: '48px' }}>
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

      {/* Timeline: How to renew */}
      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 900, color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em', textAlign: 'center', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            5 steg till nytt körkort
          </h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            {timelineSteps.map((s) => (
              <div key={s.step} style={{
                display: 'flex', gap: '20px', alignItems: 'flex-start',
                background: 'white', border: '1px solid #dceee5',
                borderRadius: '16px', padding: '24px',
              }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: '#1DB954', color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 900, fontSize: '18px', flexShrink: 0,
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                }}>
                  {s.step}
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0d1f17', margin: '0 0 6px', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#5a6b62', margin: 0 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost breakdown */}
      <section style={{ background: '#fff', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', margin: '0 0 24px', letterSpacing: '-0.02em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Kostnadsöversikt
          </h2>
          <div style={{ borderRadius: '16px', border: '1px solid #dceee5', overflow: 'hidden' }}>
            {[
              { item: 'Förnyelseansökan (Transportstyrelsen)', price: '220 kr' },
              { item: 'E-foto hos godkänd fotograf', price: '100–250 kr' },
              { item: 'Syntest (om det krävs)', price: 'Gratis–200 kr' },
              { item: 'Totalt', price: '320–670 kr' },
            ].map((row, i, arr) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 24px',
                background: i === arr.length - 1 ? '#1DB954' : i % 2 === 0 ? '#f0f7f3' : 'white',
                color: i === arr.length - 1 ? 'white' : '#0d1f17',
                fontWeight: i === arr.length - 1 ? 800 : 400,
                fontSize: i === arr.length - 1 ? '16px' : '15px',
              }}>
                <span>{row.item}</span>
                <span style={{ fontWeight: 700 }}>{row.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section style={{ background: '#fff', padding: '0 20px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {sections.map((s, i) => (
            <div key={i} style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: i < sections.length - 1 ? '1px solid #dceee5' : 'none' }}>
              <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', margin: '0 0 16px', letterSpacing: '-0.02em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                {s.title}
              </h2>
              {s.paragraphs.map((p, j) => (
                <p key={j} style={{ fontSize: '16px', lineHeight: 1.75, color: '#5a6b62', margin: '0 0 12px' }}>
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Important warning box */}
      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{
            background: '#fff8e1', border: '2px solid #f5d020',
            borderRadius: '16px', padding: '24px 28px',
          }}>
            <div style={{ fontSize: '20px', fontWeight: 800, color: '#0d1f17', marginBottom: '8px', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              &#9888; Viktigt att veta
            </div>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#5a6b62', margin: '0 0 8px' }}>
              Du får inte köra med ett utgånget körkort. Din körbehörighet finns kvar, men utan ett giltigt kort är det olovlig körning. Risken inkluderar böter och att försäkringsbolaget inte betalar ut ersättning vid olycka.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#5a6b62', margin: 0 }}>
              Förnya ditt körkort i god tid — helst 2-3 månader innan det går ut. Gör det idag om det redan gått ut.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 900, color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Vanliga frågor om att förnya körkort
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
          <RelatedGuides currentPath="/fornya-korkort" />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 20px 80px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #1DB954 0%, #17a34a 100%)', borderRadius: '20px', padding: '40px', textAlign: 'center', color: 'white' }}>
            <div style={{ fontSize: '28px', fontWeight: 900, marginBottom: '12px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Ny på körkort? Öva med Huvet
            </div>
            <p style={{ fontSize: '16px', opacity: 0.85, marginBottom: '28px', maxWidth: '440px', margin: '0 auto 28px' }}>
              Ska du ta körkort för första gången? Huvet hjälper dig klara teoriprovet med personlig träning och svaghetsanalys.
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
          <Link href="/steg-for-steg" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Steg för steg</Link>
          <Link href="/nervos-uppkorning" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Nervös inför uppkörning</Link>
          <Link href="/digitalt-korkort" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Digitalt körkort</Link>
          <Link href="/korkort-kostnad" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körkort kostnad</Link>
          <Link href="/vagmarken" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Vägmärken</Link>
          <Link href="/riskutbildning" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Riskutbildning</Link>
        </div>
        <span>&copy; 2026 Huvet (huvet.se). Byggt för svenska körkortselever.</span>
      </footer>
    </div>
  );
}
