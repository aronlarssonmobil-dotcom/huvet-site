import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Boka teoriprov 2026 – steg-för-steg guide till Trafikverket | Huvet',
  description:
    'Lär dig boka teoriprovet via Trafikverket steg för steg. Kostnad 325 kr, vad du behöver ta med, väntetider, tips för val av provort och vad som händer om du inte klarar provet.',
  keywords: [
    'boka teoriprov',
    'boka teoriprov trafikverket',
    'boka teoriprov online',
    'teoriprov bokning',
    'boka teoriprov körkort',
    'teoriprov kostnad',
    'boka om teoriprov',
    'teoriprov väntetid',
    'teoriprov körkortstillstånd',
    'trafikverket boka prov',
  ],
  alternates: { canonical: 'https://huvet.se/boka-teoriprov' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hur bokar jag teoriprovet hos Trafikverket?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Du bokar teoriprovet via Trafikverkets bokningstjänst på trafikverket.se. Logga in med BankID, välj provtyp (B-körkort), stad och tid. Du kan också ringa Trafikverkets kundtjänst på 0771-119 119.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad kostar det att boka teoriprovet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Teoriprovet kostar 325 kr per tillfälle (2026). Avgiften betalas vid bokningstillfället och återbetalas inte vid utebliven närvaro. Om du behöver boka om måste det göras senast 24 timmar innan provtiden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad behöver jag ta med till teoriprovet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Du behöver ta med giltig legitimation (körkort, pass eller nationellt ID-kort). Du måste också ha ett giltigt körkortstillstånd. Utan dessa handlingar får du inte genomföra provet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur lång tid i förväg ska jag boka teoriprovet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Boka minst 2-4 veckor i förväg, särskilt i storstäder som Stockholm, Göteborg och Malmö. Mindre orter har ofta kortare väntetider. Under sommaren och kring jul kan väntetiderna vara längre.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad händer om jag inte klarar teoriprovet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Om du inte klarar teoriprovet kan du boka ett nytt prov direkt. Det finns ingen karenstid, men du måste betala 325 kr igen. Du får se ditt resultat direkt efter provet och vilka kategorier du behöver förbättra.',
      },
    },
  ],
};

const steps = [
  {
    number: '1',
    title: 'Skaffa körkortstillstånd',
    description: 'Ansök om körkortstillstånd via Transportstyrelsen. Det krävs en synundersökning hos optiker och ett godkänt handledarskap (om du övningskör privat). Körkortstillståndet måste vara giltigt innan du bokar teoriprovet.',
  },
  {
    number: '2',
    title: 'Gå till trafikverket.se',
    description: 'Besök Trafikverkets bokningstjänst. Du hittar den under "Boka prov" på trafikverket.se. Du kan också använda Trafikverkets app "Mitt förarprov" för att boka direkt från mobilen.',
  },
  {
    number: '3',
    title: 'Logga in med BankID',
    description: 'Identifiera dig med mobilt BankID eller BankID på fil. Systemet kontrollerar automatiskt att du har ett giltigt körkortstillstånd. Om tillståndet saknas kan du inte gå vidare med bokningen.',
  },
  {
    number: '4',
    title: 'Välj provtyp och ort',
    description: 'Välj "Teoriprov B" (personbil). Sedan väljer du vilken provort du vill skriva på. Tips: mindre orter som Västerås, Norrköping eller Borås har ofta kortare väntetider än Stockholm och Göteborg.',
  },
  {
    number: '5',
    title: 'Välj datum och tid',
    description: 'Bläddra igenom tillgängliga tider och välj en som passar. Du ser alla lediga tider i en kalendervy. Morgontider (kl 08-10) är populärast — boka tidigt om du vill ha dem.',
  },
  {
    number: '6',
    title: 'Betala 325 kr',
    description: 'Betalningen sker direkt vid bokningstillfället med kort (Visa eller Mastercard). Du får en bokningsbekräftelse via e-post och kan se din bokning under "Mina prov" på trafikverket.se.',
  },
];

const facts = [
  { label: '325 kr', sub: 'provavgift 2026', icon: '💳' },
  { label: '2-4 v', sub: 'typisk väntetid', icon: '📅' },
  { label: '65 frågor', sub: '52 rätt för godkänt', icon: '📋' },
  { label: '50 min', sub: 'provtid', icon: '⏱️' },
];

const tips = [
  {
    title: 'Välj rätt provort',
    body: 'Storstäder har längre väntetider. Mindre orter inom pendlingsavstånd kan spara dig veckor. Kolla Norrköping, Västerås, Uppsala eller Borås om du bor nära en storstad.',
  },
  {
    title: 'Boka tidigt på morgonen',
    body: 'Du är piggast och mest fokuserad tidigt på dagen. Provtider mellan 08:00 och 10:00 ger statistiskt bättre resultat enligt Trafikverkets egen data.',
  },
  {
    title: 'Avboka i tid',
    body: 'Om du behöver ändra din tid, avboka senast 24 timmar innan. Annars förlorar du hela avgiften (325 kr). Du kan avboka via trafikverket.se eller appen.',
  },
  {
    title: 'Ha allt redo kvällen innan',
    body: 'Lägg fram legitimation, kolla adressen till provlokalen och planera resan. Stress på provdagen påverkar ditt resultat negativt.',
  },
  {
    title: 'Öva tills du konsekvent klarar 90%+',
    body: 'Godkäntgränsen är 80% (52/65 rätt). Men sikta på 90% i dina övningsprov — det ger dig marginal för nervositet och oväntade frågor på det riktiga provet.',
  },
  {
    title: 'Boka körprovet samtidigt',
    body: 'Ett godkänt teoriprov gäller i 4 månader. Boka körprovet redan nu, ca 4-6 veckor efter teoriprovet. Då har du ett tydligt mål och undviker att teorin hinner gå ut.',
  },
];

const sections = [
  {
    title: 'Krav innan du bokar teoriprovet',
    content: [
      'Innan du kan boka teoriprovet finns det några saker som måste vara på plats. Det viktigaste är att du har ett giltigt körkortstillstånd från Transportstyrelsen. Utan det kan du inte ens logga in i Trafikverkets bokningssystem.',
      'För att få körkortstillståndet behöver du göra en synundersökning hos en optiker och skicka in ansökan till Transportstyrelsen. Det kostar 260 kr och tar normalt 1-2 veckor att behandla. Tillståndet är sedan giltigt i 5 år.',
      'Du behöver också vara minst 18 år gammal vid provtillfället (16 år för moped, 17 år och 9 månader för övningskörning med handledare). Det finns ingen övre åldersgräns för att ta körkort.',
    ],
  },
  {
    title: 'Vad kostar det att boka teoriprovet 2026?',
    content: [
      'Teoriprovet kostar 325 kr per provtillfälle (2026). Priset har varit oförändrat sedan 2024. Du betalar med kort (Visa eller Mastercard) direkt vid bokningstillfället.',
      'Om du inte klarar provet behöver du betala hela avgiften igen nästa gång. Det finns ingen rabatt för omgång och inga paketpriser. Varje enskilt prov kostar 325 kr.',
      'Om du avbokar mer än 24 timmar innan provtiden får du pengarna tillbaka. Vid sen avbokning eller utebliven närvaro förlorar du avgiften. Det lönar sig alltså att vara både förberedd och punktlig.',
    ],
  },
  {
    title: 'Väntetider — hur lång tid tar det att få en provtid?',
    content: [
      'Väntetiderna varierar kraftigt beroende på var i Sverige du bor. I Stockholm, Göteborg och Malmö kan du behöva vänta 3-6 veckor för en ledig tid. Under högsäsong (maj-augusti) kan det ta ännu längre.',
      'Mindre städer som Västerås, Norrköping, Eskilstuna och Borås har ofta betydligt kortare väntetider — ibland bara 1-2 veckor. Om du bor i pendlingsavstånd från en mindre ort kan det vara värt att boka där istället.',
      'Tips: kolla flera orter i Trafikverkets bokningssystem och jämför. Ibland dyker det upp avbokningar med kort varsel — håll utkik om du vill komma in snabbt.',
    ],
  },
  {
    title: 'Vad ska du ta med till provdagen?',
    content: [
      'Du måste ta med en giltig legitimation till provtillfället. Godkända legitimationer är svenskt körkort, pass (svenskt eller utländskt) och nationellt ID-kort. Bankkort och fotolegitimation från arbetsgivare gäller INTE.',
      'Du behöver inte ta med själva körkortstillståndet — det kontrolleras digitalt av Trafikverket. Men om du inte har ett giltigt tillstånd i systemet kommer du inte att få genomföra provet.',
      'Kom i god tid, gärna 10-15 minuter innan provtiden. Du blir insläppt i provlokalen och tilldelad en datorplats. En provledare ger instruktioner innan du börjar.',
    ],
  },
  {
    title: 'Om du inte klarar provet — ombokning',
    content: [
      'Om du inte klarar teoriprovet finns det ingen karenstid — du kan boka ett nytt prov redan samma dag. Dock måste du hitta en ledig tid och betala 325 kr igen.',
      'Direkt efter provet ser du ditt resultat: hur många rätt du fick totalt och vilka kategorier du var svag i. Använd den informationen för att rikta din övning innan nästa försök.',
      'I genomsnitt behöver de som underkänns 2-3 veckor ytterligare förberedelse innan de klarar provet. Fokusera på dina svaga kategorier och gör minst 5-10 övningsprov innan du bokar om.',
      'Det finns inget maxantal gånger du får göra provet. Men varje försök kostar 325 kr, och ditt körkortstillstånd gäller i 5 år — så det finns en praktisk tidsgräns.',
    ],
  },
];

export default function BokaTeoriProvPage() {
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
          { label: 'Teoriprov', href: '/teoriprov' },
          { label: 'Boka teoriprov' },
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
            Boka teoriprov — steg-for-steg guide
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#5a6b62', maxWidth: '600px', margin: '0 0 40px' }}>
            Allt du behover veta for att boka teoriprovet hos Trafikverket. Fran korkortstillstand till provdagen — med tips for att valja ratt ort och tid.
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

      {/* Step-by-step guide */}
      <section style={{ padding: '64px 20px', background: '#fff' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
            fontWeight: 900,
            color: '#0d1f17',
            margin: '0 0 40px',
            letterSpacing: '-0.03em',
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
          }}>
            Sa bokar du teoriprovet — 6 steg
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

      {/* Tips */}
      <section style={{ background: '#fff', padding: '64px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
            fontWeight: 900,
            color: '#0d1f17',
            margin: '0 0 40px',
            letterSpacing: '-0.03em',
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
          }}>
            6 tips for att klara teoriprovet pa forsta forsoket
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {tips.map((tip) => (
              <div key={tip.title} style={{
                background: '#f0f7f3',
                border: '1px solid #dceee5',
                borderRadius: '18px',
                padding: '28px',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0d1f17', margin: '0 0 10px', letterSpacing: '-0.02em' }}>
                  {tip.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#5a6b62', margin: 0 }}>
                  {tip.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 20px 64px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #1DB954 0%, #17a34a 100%)', borderRadius: '24px', padding: '48px 40px', textAlign: 'center', color: 'white' }}>
            <div style={{ fontSize: '28px', fontWeight: 900, marginBottom: '12px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Forbered dig innan du bokar
            </div>
            <p style={{ fontSize: '16px', opacity: 0.85, marginBottom: '28px', maxWidth: '440px', margin: '0 auto 28px' }}>
              94% av Huvet-elever klarar teoriprovet pa forsta forsoket. Borja ova gratis och se hur redo du ar.
            </p>
            <Link href="/#demo" style={{ display: 'inline-block', background: '#f5d020', color: '#0d1f17', padding: '16px 36px', borderRadius: '999px', fontWeight: 800, textDecoration: 'none', fontSize: '16px' }}>
              Testa gratis ovningsprov &rarr;
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
            Vanliga fragor om att boka teoriprovet
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
        <RelatedGuides currentPath="/boka-teoriprov" />
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #dceee5', background: '#081610', color: 'rgba(255,255,255,0.4)', padding: '32px 20px', textAlign: 'center', fontSize: '13px' }}>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="/teoriprov" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Teoriprov</Link>
          <Link href="/korprov" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Korprov</Link>
          <Link href="/boka-uppkorning" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Boka uppkorning</Link>
          <Link href="/ovningskorning" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Ovningskorning</Link>
          <Link href="/korkort-kostnad" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Kostnad</Link>
          <Link href="/vagmarken" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Vagmarken</Link>
          <Link href="/korkortstips" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Tips</Link>
          <Link href="/korkortsfragor" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Fragor</Link>
        </div>
        <span>&copy; 2026 Huvet (huvet.se). Byggt for svenska korkortselever.</span>
      </footer>
    </main>
  );
}
