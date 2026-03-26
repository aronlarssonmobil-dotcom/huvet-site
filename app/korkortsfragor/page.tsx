import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Körkortsfrågor med svar – 20 vanliga teorifrågor 2026 | Huvet',
  description:
    'De 20 vanligaste körkortsfrågorna på teoriprov med fullständiga svar och förklaringar. Lär dig väjningsregler, vägmärken och trafikregler — baserat på Transportstyrelsens frågebank.',
  keywords: [
    'körkortsfrågor',
    'körkortsfrågor med svar',
    'teorifrågor körkort',
    'vanliga frågor körkortsprovet',
    'körkortsprov frågor',
    'teoriprov frågor och svar',
    'körkortsteorifrågor',
    'väjningsregler körkort',
    'vägmärken körkort frågor',
  ],
  alternates: { canonical: 'https://huvet.se/korkortsfragor' },
};

type QA = {
  q: string;
  a: string;
  explanation: string;
  category: string;
};

const faq: QA[] = [
  {
    category: 'Väjningsplikt',
    q: 'Vem har väjningsplikt i en rondell?',
    a: 'Fordon som kör in i rondellen.',
    explanation: 'Fordon som befinner sig i rondellen har alltid företräde. Det spelar ingen roll hur stor rondellen är eller hur lång fordonet inne i rondellen är. Den som ska köra in måste väja tills det är fritt.',
  },
  {
    category: 'Trafikmärken',
    q: 'Vad innebär en stoppskylt?',
    a: 'Fullständigt stopp krävs — alltid, oavsett om vägen verkar fri.',
    explanation: 'Stoppskylten (röd oktagon med texten "STOP") kräver att du stannar fullständigt vid stopplinjen eller skyltens placering. Att sakta ned utan att stanna är ett trafikbrott. Det gäller även om du ser att det är klart fritt.',
  },
  {
    category: 'Hastighet',
    q: 'Vad gäller om ingen hastighetsskylt syns på en väg i tätort?',
    a: '50 km/h är grundhastigheten i tätort.',
    explanation: 'Utan angivna skyltar gäller bashastigheten: 50 km/h i tätort och 70 km/h utanför tätort. "Tätort" definieras av en skylt med samhällets namn, inte av hur bebyggt det verkar vara.',
  },
  {
    category: 'Parkering',
    q: 'Hur nära ett övergångsställe får du parkera?',
    a: 'Inte inom 10 meter.',
    explanation: 'Parkering är förbjuden inom 10 meter i vardera riktning från ett övergångsställe eller cykelöverfart. Syftet är att ge god sikt för fotgängare och cyklister. 10 meter — memorera det.',
  },
  {
    category: 'Alkohol',
    q: 'Vad är promillegränsen för bilkörning i Sverige?',
    a: '0,2 promille.',
    explanation: '0,2 promille alkohol i blodet är gränsen för rattfylleri. Grovt rattfylleri inträder vid 1,0 promille eller om körförmågan är "påtagligt nedsatt". Kom ihåg: läkemedel och droger kan också ge körförbud utan mätbar promillehalt.',
  },
  {
    category: 'Omkörning',
    q: 'När är omkörning tillåten?',
    a: 'Omkörning är tillåten om sikten är fri, vägen medger det, och inget förbudsmärke gäller.',
    explanation: 'Du får köra om på väger med heldragen mittlinje. Heldragen linje = absolut körförbud att passera. Streckad linje = omkörning tillåten om säkert. Vid backkrön, kurva och på gångpassager är det alltid förbjudet.',
  },
  {
    category: 'Säkerhetsavstånd',
    q: 'Vad är ett rimligt säkerhetsavstånd bakom framförande fordon?',
    a: 'Minst 3 sekunder (mer vid dåligt väglag).',
    explanation: 'Tumregeln är 3-sekundersregeln: välj ett fast objekt vid vägkanten och räkna 3 sekunder från det att framförende fordon passerar det tills du gör det. Vid regn, dimma eller is ska avståndet vara minst dubbelt.',
  },
  {
    category: 'Körriktning',
    q: 'I vilken ordning gäller trafikreglering?',
    a: 'Trafikpolis → Trafikljus → Skyltar → Vägmarkering → Trafikregler.',
    explanation: 'Om en trafikpolis ger tecken som strider mot röd ljus: följ polismannen. Om skylt strider mot vägmarkering: följ skylten. Hierarkin är viktigt att kunna eftersom det kan testas med scenariofrågor.',
  },
  {
    category: 'Fordon',
    q: 'Vilken körkortsbehörighet krävs för att köra personbil?',
    a: 'Behörighet B.',
    explanation: 'B-körkort krävs för personbilar och lätta lastbilar (upp till 3,5 ton). Har du B kan du också köra lätt motorcykel (A1) med rätt tillstånd, och traktorer. AM-körkort krävs för moped klass I.',
  },
  {
    category: 'Trafikljus',
    q: 'Vad gäller vid gult blinkande trafikljus?',
    a: 'Kör försiktigt och var extra uppmärksam. Ingen prioritetsregel gäller.',
    explanation: 'Gult blinkande ljus (utan rödljus) innebär att du ska anpassa hastigheten och vara uppmärksam. Det används ofta nattetid eller vid trafikstörningar. Högerregeln och skyltar gäller som vanligt.',
  },
  {
    category: 'Körregel',
    q: 'Vad innebär högerregeln?',
    a: 'På likvärdiga vägar har fordon från din högra sida företräde.',
    explanation: 'Högerregeln gäller på vägar av lika standard utan skyltar. Det fordon som kommer från höger har rätt att köra först. Undantagen: stoppskyltar, väjningsskyltar, rondeller, och fordon på järnväg/spårväg har alltid företräde.',
  },
  {
    category: 'Vinterväghållning',
    q: 'Från vilket datum krävs vinterdäck i Sverige?',
    a: '1 december till 31 mars (eller vid vinterväglag).',
    explanation: 'Lagstadgat krav på vinterdäck gäller 1 dec–31 mars. Men det gäller även utanför denna period om det råder vinterväglag (snö, is, halka). Sommardäck på isig väg är ett trafikbrott.',
  },
  {
    category: 'Belysning',
    q: 'När måste du ha helljus påslaget?',
    a: 'Alltid utomhus när sikten kräver det, och alltid när det är mörkt.',
    explanation: 'I Sverige är det obligatoriskt att köra med strålkastare tända dygnet runt, hela året. Halvljus används normalt. Helljus används när det är mörkt och motkommande trafik eller fotgängare inte störs.',
  },
  {
    category: 'Övningskörning',
    q: 'Hur gammal måste handledaren vara vid privat övningskörning?',
    a: 'Minst 24 år och ha haft B-körkort i minst 5 år.',
    explanation: 'Handledaren måste uppfylla båda kraven: minst 24 år gammal och innehaft giltigt B-körkort i minst 5 år. Handledaren måste sitta bredvid eleven (inte i baksätet). Handledartillstånd krävs sedan 2012.',
  },
  {
    category: 'Miljö',
    q: 'Vad är en miljözon och vad gäller i den?',
    a: 'Område med skärpta krav på fordonets utsläpp. Äldre dieselbilar kan vara förbjudna.',
    explanation: 'Sverige har miljözoner klass 1, 2 och 3. I klass 1 (vanligast) är tunga fordon med gamla motorer förbjudna. I klass 3 (strängaste) kan även personbilar med förbränningsmotorer vara förbjudna. Kolla alltid lokala skyltar.',
  },
  {
    category: 'Järnväg',
    q: 'Vad gäller vid järnvägskorsning med rödblinkande ljus?',
    a: 'Stanna alltid. Kör inte förrän ljusen slutar blinka och eventuella bommar hissats.',
    explanation: 'Rödblinkande ljus = stanna och vänta. Även om du "ser" att tåget passerat — vänta tills ljusen slutar. Tåg kan komma från båda håll och ett tåg kan följas av ett annat. Försumlighet här är livsfarlig.',
  },
  {
    category: 'Parkering',
    q: 'Var är det alltid förbjudet att parkera?',
    a: 'Framför infart/utfart, på övergångsställe, vid vägkorsning, heldragen gul linje, och på brandpost.',
    explanation: 'Dessa förbud gäller alltid utan skylt: 10m från korsning, 10m från övergångsställe, framför infart/utfart, vid heldragen gul kantlinje. Utöver detta gäller specifika förbudsskyltar (blå P med rött kryss eller röd kant).',
  },
  {
    category: 'Säkerhet',
    q: 'Vad ska du göra om du är inblandad i en trafikolycka med personskada?',
    a: 'Stanna, larma SOS 112, ge första hjälpen och stanna kvar tills polis anlänt.',
    explanation: 'Att lämna en olycksplats med personskada utan att ha lämnat kontaktuppgifter är smitning och ett brott. Ordningen är: stanna → säkra platsen → larma 112 → ge första hjälpen → dokumentera → vänta på polis.',
  },
  {
    category: 'Körordning',
    q: 'Vem har företräde vid en obevakad korsning?',
    a: 'Fordon från höger (högerregeln), om inte skyltar eller vägmarkering anger annat.',
    explanation: 'Vid obevakad korsning (ingen skylt, ingen ljussignal) gäller högerregeln. Det fordon som befinner sig till höger om dig har företräde. I en T-korsning har sidovägen ofta väjningsplikt mot huvudvägen — kontrollera alltid.',
  },
  {
    category: 'Fordon',
    q: 'Vilken maxvikt får ett fordon ha för att köras med B-körkort?',
    a: '3 500 kg totalvikt (för fordonet plus eventuellt släp).',
    explanation: 'Med B-körkort får du köra fordon med en totalvikt på högst 3 500 kg. Vill du dra tungt släp (kombinationens totalvikt > 3 500 kg) krävs BE-körkort. Kontrollera alltid fordonets registreringsbevis.',
  },
];

const categoryColors: Record<string, { bg: string; color: string }> = {
  'Väjningsplikt':   { bg: '#fef3c7', color: '#d97706' },
  'Trafikmärken':    { bg: '#fee2e2', color: '#dc2626' },
  'Hastighet':       { bg: '#dbeafe', color: '#1d4ed8' },
  'Parkering':       { bg: '#f3e8ff', color: '#7c3aed' },
  'Alkohol':         { bg: '#fce7f3', color: '#be185d' },
  'Omkörning':       { bg: '#e0f2fe', color: '#0369a1' },
  'Säkerhetsavstånd':{ bg: '#dcfce7', color: '#15803d' },
  'Körriktning':     { bg: '#fef9e7', color: '#92400e' },
  'Fordon':          { bg: '#f0fdf4', color: '#166534' },
  'Trafikljus':      { bg: '#fff7ed', color: '#c2410c' },
  'Körregel':        { bg: '#e6f4ee', color: '#006B3F' },
  'Vinterväghållning':{ bg: '#e0f2fe', color: '#0c4a6e' },
  'Belysning':       { bg: '#fef9e7', color: '#a16207' },
  'Övningskörning':  { bg: '#fdf4ff', color: '#7e22ce' },
  'Miljö':           { bg: '#f0fdf4', color: '#14532d' },
  'Järnväg':         { bg: '#fee2e2', color: '#b91c1c' },
  'Säkerhet':        { bg: '#fff1f2', color: '#e11d48' },
  'Körordning':      { bg: '#fffbeb', color: '#b45309' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: `${item.a} ${item.explanation}`,
    },
  })),
};

export default function KorkortsfragorPage() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#fff', minHeight: '100vh', color: '#0d1f17' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Header */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #e2efe9', padding: '0 20px',
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
            <span style={{ fontSize: '20px', fontWeight: '900', color: '#0d1f17', letterSpacing: '-0.04em' }}>Huvet</span>
          </Link>
          <Link href="/#demo" style={{ background: '#006B3F', color: 'white', padding: '10px 22px', borderRadius: '999px', fontSize: '14px', fontWeight: '700', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Börja träna gratis
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #f0f7f3 0%, #fff 60%)', padding: '64px 20px 48px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#006B3F', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>
            Frågor & Svar
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: '900', lineHeight: '1.1', color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.04em' }}>
            20 vanliga körkortsfrågor med svar
          </h1>
          <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#555', margin: '0 0 32px' }}>
            Dessa frågor dyker upp på nästan varje teoriprov. Lär dig dem — och läs förklaringarna, inte bara svaren.
          </p>
          <Link href="/#demo" style={{ background: '#006B3F', color: 'white', padding: '14px 28px', borderRadius: '999px', fontSize: '15px', fontWeight: '700', textDecoration: 'none', display: 'inline-block' }}>
            Testa interaktivt med Huvet →
          </Link>
        </div>
      </section>

      {/* Questions */}
      <section style={{ padding: '48px 20px 80px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {faq.map((item, i) => {
              const cat = categoryColors[item.category] || { bg: '#f0f7f3', color: '#006B3F' };
              return (
                <div key={i} style={{
                  background: '#fafcfb',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '2px solid #e2efe9',
                }}>
                  {/* Question */}
                  <div style={{ padding: '24px 28px 0' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '12px' }}>
                      <div style={{ background: '#0d1f17', color: 'white', width: '28px', height: '28px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>
                        {i + 1}
                      </div>
                      <div style={{ background: cat.bg, color: cat.color, fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '4px 12px', borderRadius: '999px', alignSelf: 'center' }}>
                        {item.category}
                      </div>
                    </div>
                    <h2 style={{ fontSize: '17px', fontWeight: '800', color: '#0d1f17', margin: '0 0 16px', lineHeight: '1.4' }}>
                      {item.q}
                    </h2>
                  </div>

                  {/* Answer */}
                  <div style={{ background: '#e6f4ee', padding: '14px 28px', borderTop: '1px solid #d4ebe1' }}>
                    <div style={{ fontSize: '11px', fontWeight: '700', color: '#006B3F', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '4px' }}>
                      ✓ Rätt svar
                    </div>
                    <p style={{ fontSize: '15px', fontWeight: '700', color: '#004d2d', margin: 0 }}>
                      {item.a}
                    </p>
                  </div>

                  {/* Explanation */}
                  <div style={{ padding: '16px 28px 24px' }}>
                    <div style={{ fontSize: '11px', fontWeight: '700', color: '#888', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>
                      Förklaring
                    </div>
                    <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7', margin: 0 }}>
                      {item.explanation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div style={{ marginTop: '60px', background: 'linear-gradient(160deg, #0d1f17 0%, #1a3a26 100%)', borderRadius: '24px', padding: '40px 32px', textAlign: 'center', color: 'white' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '12px' }}>Öva på alla 450+ frågor</h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '24px', fontSize: '15px' }}>
              Huvet tränar dig på exakt de frågor du behöver — och förklarar varje svar lika tydligt som ovan.
            </p>
            <Link href="/#demo" style={{ background: '#006B3F', color: 'white', padding: '16px 32px', borderRadius: '999px', fontSize: '16px', fontWeight: '700', textDecoration: 'none', display: 'inline-block', boxShadow: '0 4px 20px rgba(0,107,63,0.4)' }}>
              Börja träna gratis →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#081610', color: 'rgba(255,255,255,0.4)', padding: '40px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', marginBottom: '32px' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: '800', fontSize: '18px' }}>Huvet</Link>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {[
                { href: '/teoriprov', label: 'Teoriprov' },
                { href: '/korprov', label: 'Körprov' },
                { href: '/ovningskörning', label: 'Övningskörning' },
                { href: '/korkort-kostnad', label: 'Körkort kostnad' },
                { href: '/intensivkurs', label: 'Intensivkurs' },
                { href: '/korkortstips', label: 'Körkortslips' },
                { href: '/vagmarken', label: 'Vägmärken' },
                { href: '/korkortsfragor', label: 'Körkortsfrågor' },
                { href: '/mc', label: 'MC-körkort' },
                { href: '/moped', label: 'Mopedkörkort' },
              ].map(({ href, label }) => (
                <Link key={href} href={href} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px' }}>{label}</Link>
              ))}
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px', fontSize: '13px' }}>
            © 2026 Huvet (huvet.se). Alla rättigheter förbehållna.
          </div>
        </div>
      </footer>
    </div>
  );
}
