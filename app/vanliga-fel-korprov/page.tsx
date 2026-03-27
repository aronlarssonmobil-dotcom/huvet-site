import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Vanliga fel på körprov — 15 misstag att undvika 2026 | Huvet',
  description:
    'De 15 vanligaste misstagen på körprovet i Sverige. Lär dig vad som leder till direkt underkänt, hur förarprovstagaren bedömer och tips för att undvika varje fel.',
  keywords: [
    'vanliga fel på körprov',
    'vanliga fel körprov',
    'underkänd körprov',
    'körprov misstag',
    'körprov tips',
    'uppkörning vanliga fel',
    'direkt underkänd körprov',
    'körprov bedömning',
    'förarprovstagare',
    'klara körprovet',
  ],
  alternates: { canonical: 'https://huvet.se/vanliga-fel-korprov' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vilka är de vanligaste felen på körprovet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De vanligaste felen inkluderar bristande observation i korsningar, felaktig placering i körfält, att inte anpassa hastigheten, missad kontroll i backspeglar och att inte ge företräde vid övergångsställen. Många underkänns också på bristande uppmärksamhet vid vänstersvängar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad leder till direkt underkänt på körprovet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Allvarliga fel som leder till direkt underkänt inkluderar: att köra mot rött ljus, inte stanna vid stopplikt, farlig körning som tvingar förarprovstagaren att ingripa, att missa ett övergångsställe med fotgängare, och allvarliga hastighetsöverträdelser.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur bedöms körprovet av förarprovstagaren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Förarprovstagaren bedömer din förmåga att köra säkert och trafikvänligt. Bedömningen görs löpande under hela provet. Det finns inga poäng — förarprovstagaren gör en helhetsbedömning baserad på kritiska och icke-kritiska fel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur många fel får man göra på körprovet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Det finns inget exakt antal fel som är tillåtet. Ett enstaka allvarligt (kritiskt) fel leder till direkt underkänt. Mindre brister kan tolereras om helhetsintrycket visar säker körning, men flera icke-kritiska fel tillsammans kan ändå ge underkänt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur stor andel klarar körprovet på första försöket?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ungefär 47% av alla som gör körprovet för första gången blir godkända. Det innebär att över hälften underkänns. Med god förberedelse och medvetenhet om vanliga misstag ökar du dina chanser avsevärt.',
      },
    },
  ],
};

const mistakes = [
  {
    number: 1,
    title: 'Bristande observation i korsningar',
    severity: 'critical',
    description: 'Det absolut vanligaste felet. Många elever tittar inte tillräckligt åt alla håll innan de kör in i en korsning. Förarprovstagaren vill se att du aktivt söker av hela korsningen — inte bara ett snabbt svep.',
    tip: 'Använd en tydlig huvudvridning åt båda hållen. Visa att du ser — inte bara tittar.',
  },
  {
    number: 2,
    title: 'Felaktig placering i körfält',
    severity: 'non-critical',
    description: 'Att ligga för långt till höger eller vänster i körfältet, eller att inte placera sig korrekt inför sväng. Många hamnar mitt emellan två körfält i rondeller.',
    tip: 'Vid högersväng — håll dig till höger. Vid vänstersväng — närma dig mittlinjen. I rondell — välj körfält innan du kör in.',
  },
  {
    number: 3,
    title: 'Hastighetanpassning',
    severity: 'critical',
    description: 'Att köra för fort eller för långsamt för situationen. Det handlar inte bara om hastighetsgränsen — du ska anpassa efter väderlek, sikt och trafiksituation. Att köra 60 km/h i regn på en 70-väg kan vara helt rätt.',
    tip: 'Öva på att känna av rätt hastighet utan att stirra på mätaren. Tänk framåt och anpassa i god tid.',
  },
  {
    number: 4,
    title: 'Backspegelkontroll',
    severity: 'non-critical',
    description: 'Att inte kontrollera backspeglarna tillräckligt ofta, särskilt inför filbyte, sväng och inbromsning. Förarprovstagaren ser dina ögonrörelser.',
    tip: 'Kolla backspeglarna var 5-8:e sekund under normal körning, och alltid innan du bromsar, byter fil eller svänger.',
  },
  {
    number: 5,
    title: 'Övergångsställen — företräde för gående',
    severity: 'critical',
    description: 'Att inte sakta ner eller stanna vid obevakade övergångsställen där fotgängare väntar. Detta är ett av de vanligaste skälen till direkt underkänt.',
    tip: 'Scanna alltid trottoarkanterna vid övergångsställen. Om någon väntar — sakta ner och var beredd att stanna. Bättre att stanna i onödan än att missa en gående.',
  },
  {
    number: 6,
    title: 'Bristande teckengivning (blinkers)',
    severity: 'non-critical',
    description: 'Att glömma blinkers, slå på den för sent, eller använda fel blinkers. Vanligt i rondeller och vid filbyten.',
    tip: 'Blinkers ska på i god tid innan manövern — inte samtidigt som du svänger. I rondell: blinkers höger när du ska ut.',
  },
  {
    number: 7,
    title: 'Vänstersväng i korsning',
    severity: 'critical',
    description: 'Vänstersväng är det mest komplexa momentet. Många missar mötande trafik, cyklister eller fotgängare som korsar. Felbedömning av gap i trafiken är vanligt.',
    tip: 'Placera dig rätt (nära mitten), signalera i tid, och kontrollera alla håll — särskilt cyklister och gående i din svängriktning.',
  },
  {
    number: 8,
    title: 'Rondellkörning',
    severity: 'non-critical',
    description: 'Felaktig placering, bristande observation vid infart, och att glömma blinkers vid utfart. Många vet inte hur flerfältiga rondeller fungerar.',
    tip: 'Sakta ner vid infarten, ge företräde åt fordon inne i rondellen, håll rätt körfält, och blinkers höger när du lämnar rondellen.',
  },
  {
    number: 9,
    title: 'Stopplikt — inte fullständigt stopp',
    severity: 'critical',
    description: 'Att rulla långsamt genom en stoppskylt utan att stanna helt. Fordonet måste stå helt stilla. Även om du ser att vägen är fri — du ska stanna.',
    tip: 'Stanna så att hjulen slutar rotera helt. Räkna till 2 i huvudet, kontrollera, och kör sedan.',
  },
  {
    number: 10,
    title: 'Otillräckligt avstånd till framförvarande',
    severity: 'non-critical',
    description: 'Att köra för nära bilen framför, särskilt i stadstrafik. Med kort avstånd hinner du inte reagera vid plötslig inbromsning.',
    tip: 'Använd 3-sekundersregeln: välj en fast punkt och räkna 3 sekunder efter att bilen framför passerar den. I halt väglag — öka till 6 sekunder.',
  },
  {
    number: 11,
    title: 'Döda vinkeln — inte kontrollera',
    severity: 'critical',
    description: 'Att byta fil utan att vända huvudet och kontrollera den döda vinkeln. Spegelkontroll räcker inte — det finns ett område som speglarna inte täcker.',
    tip: 'Före varje filbyte: spegel, döda vinkeln (kort blick över axeln), sedan manöver. Gör det till en automatisk rutin.',
  },
  {
    number: 12,
    title: 'Parkering och precision',
    severity: 'non-critical',
    description: 'Ficparkering och parallellparkering är stressmoment för många. Att köra upp på trottoaren, stå snett, eller använda för många korrigeringar.',
    tip: 'Öva systematiskt på ficka och parallell. Använd referenspunkter på bilen. Lugn och kontrollerad — det är okej att ta tid på sig.',
  },
  {
    number: 13,
    title: 'Stress och nervositet',
    severity: 'non-critical',
    description: 'Nervositet leder till ryckig körning, sena beslut och glömda kontroller. Det är den underliggande orsaken till många andra fel på listan.',
    tip: 'Prata igenom vad du gör (tyst för dig själv). Det hjälper hjärnan att strukturera. Kör som du gör under övningskörning — förarprovstagaren vill se normal körning.',
  },
  {
    number: 14,
    title: 'Eco-driving och kulle-start',
    severity: 'non-critical',
    description: 'Att rulla bakåt vid start i uppförsbacke (manuell växellåda), eller att gasa onödigt mycket. Eco-driving bedöms inte aktivt men visar bilkontroll.',
    tip: 'Öva på kuperad terräng. Lär dig handbromsstart om du kör manuellt. Visa att du har kontroll över fordonet.',
  },
  {
    number: 15,
    title: 'Bristande framförhållning',
    severity: 'critical',
    description: 'Att reagera sent på trafiksituationer istället för att planera framåt. Sena inbromsningar, sena filbyten och överraskade reaktioner visar bristande trafikvana.',
    tip: 'Titta långt framåt — inte bara på bilen framför. Läs trafiken 10-15 sekunder framåt. Planera nästa manöver innan du behöver utföra den.',
  },
];

const facts = [
  { label: '~47%', sub: 'klarar första försöket', icon: '📊' },
  { label: '25 min', sub: 'provets längd', icon: '⏱' },
  { label: '2 typer', sub: 'kritiskt & icke-kritiskt', icon: '⚖' },
  { label: '1 260 kr', sub: 'kostnad per försök', icon: '💳' },
];

export default function VanligaFelKorprovPage() {
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
            <span style={{ fontSize: '20px', fontWeight: '900', color: '#0d1f17', letterSpacing: '-0.04em', fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>Huvet</span>
          </Link>
          <Link href="/#demo" style={{ background: '#1DB954', color: 'white', padding: '10px 22px', borderRadius: '999px', fontSize: '14px', fontWeight: '700', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Träna gratis
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #f0f7f3 0%, #fff 60%)', padding: '64px 20px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Breadcrumbs items={[
            { label: 'Hem', href: '/' },
            { label: 'Körprov', href: '/korprov' },
            { label: 'Vanliga fel på körprov' },
          ]} />
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#1DB954', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>
            Körprov 2026
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: '900', lineHeight: '1.08', color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.03em' }}>
            Vanliga fel på körprovet — 15 misstag att undvika
          </h1>
          <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#5a6b62', maxWidth: '600px', margin: '0 0 40px' }}>
            Över hälften av alla som gör körprovet underkänns på första försöket. Här är de vanligaste misstagen — och hur du undviker dem.
          </p>

          {/* Facts grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginBottom: '48px' }}>
            {facts.map((f) => (
              <div key={f.label} style={{ background: 'white', border: '2px solid #dceee5', borderRadius: '16px', padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{f.icon}</div>
                <div style={{ fontSize: '20px', fontWeight: '900', color: '#1DB954', lineHeight: 1 }}>{f.label}</div>
                <div style={{ fontSize: '12px', color: '#5a6b62', marginTop: '4px' }}>{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How scoring works */}
      <section style={{ background: '#fff', padding: '0 20px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ background: '#f0f7f3', border: '2px solid #dceee5', borderRadius: '20px', padding: '32px' }}>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: '1.5rem', fontWeight: '800', color: '#0d1f17', margin: '0 0 16px' }}>
              Hur bedömer förarprovstagaren?
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#5a6b62', margin: '0 0 16px' }}>
              Körprovet bedöms inte med poäng. Förarprovstagaren gör en helhetsbedömning av din förmåga att framföra fordonet säkert och smidigt i trafiken. Fel delas in i två kategorier:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div style={{ background: 'white', borderRadius: '14px', padding: '20px', border: '2px solid #ff4d4d20' }}>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#cc0000', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Kritiska fel</div>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#5a6b62', margin: 0 }}>
                  Ett enda kritiskt fel leder till direkt underkänt. Det handlar om situationer som hade kunnat leda till olycka eller fara.
                </p>
              </div>
              <div style={{ background: 'white', borderRadius: '14px', padding: '20px', border: '2px solid #f5d02040' }}>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#b8960a', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Icke-kritiska fel</div>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#5a6b62', margin: 0 }}>
                  Enstaka små brister tolereras, men om de upprepas eller ackumuleras kan du ändå bli underkänd baserat på helhetsintrycket.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mistakes list */}
      <section style={{ background: '#fff', padding: '0 20px 80px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: '900', color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em' }}>
            De 15 vanligaste misstagen
          </h2>
          {mistakes.map((m, i) => (
            <div key={m.number} style={{
              marginBottom: '20px',
              background: '#fff',
              border: '2px solid #dceee5',
              borderRadius: '18px',
              padding: '28px',
              transition: 'all 0.2s',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  flexShrink: 0,
                  width: '44px', height: '44px',
                  background: m.severity === 'critical' ? '#1DB954' : '#f0f7f3',
                  color: m.severity === 'critical' ? 'white' : '#1DB954',
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '18px', fontWeight: '900',
                }}>
                  {m.number}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '8px' }}>
                    <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: '18px', fontWeight: '800', color: '#0d1f17', margin: 0 }}>
                      {m.title}
                    </h3>
                    <span style={{
                      fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em',
                      padding: '3px 10px', borderRadius: '999px',
                      background: m.severity === 'critical' ? '#cc000012' : '#f5d02025',
                      color: m.severity === 'critical' ? '#cc0000' : '#b8960a',
                    }}>
                      {m.severity === 'critical' ? 'Kritiskt' : 'Icke-kritiskt'}
                    </span>
                  </div>
                  <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#5a6b62', margin: '0 0 12px' }}>
                    {m.description}
                  </p>
                  <div style={{ background: '#e6f4ee', borderRadius: '12px', padding: '14px 18px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '16px', flexShrink: 0 }}>💡</span>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#17a34a', margin: 0, fontWeight: '500' }}>
                      {m.tip}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* CTA block */}
          <div style={{ background: 'linear-gradient(135deg, #1DB954 0%, #17a34a 100%)', borderRadius: '24px', padding: '40px', textAlign: 'center', color: 'white', marginTop: '48px' }}>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: '28px', fontWeight: '900', marginBottom: '12px', letterSpacing: '-0.03em' }}>
              Förbered dig ordentligt inför körprovet
            </div>
            <p style={{ fontSize: '16px', opacity: 0.8, marginBottom: '28px', maxWidth: '460px', margin: '0 auto 28px' }}>
              Öva teori och trafikregler med Huvet. Starkare teorikunskaper ger tryggare körning under provet.
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
            Vanliga frågor om körprovet
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
          <RelatedGuides currentPath="/vanliga-fel-korprov" />
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0d1f17', color: 'rgba(255,255,255,0.4)', padding: '32px 20px', textAlign: 'center', fontSize: '13px' }}>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="/korprov" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körprov</Link>
          <Link href="/teoriprov" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Teoriprov</Link>
          <Link href="/ovningskörning" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Övningskörning</Link>
          <Link href="/handledarkurs" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Handledarkurs</Link>
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
