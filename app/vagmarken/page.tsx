import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Svenska vägmärken – alla skyltar för körkortsprovet | Huvet',
  description:
    'Lär dig alla svenska vägmärken inför körkortsprovet: varningsskyltar, förbudsskyltar, påbudsskyltar och anvisningsmärken. Visuella exempel och förklaringar som hjälper dig klara teoriprovet.',
  keywords: [
    'vägmärken',
    'svenska vägmärken',
    'vägmärken körkort',
    'vägmärken körkortsprovet',
    'varningsskyltar',
    'förbudsskyltar',
    'påbudsskyltar',
    'anvisningsmärken',
    'alla vägmärken',
    'vägmärken lista',
    'vägmärken lära sig',
    'trafikskyltar Sverige',
  ],
};

type Sign = {
  symbol: string;
  name: string;
  meaning: string;
  note?: string;
};

type Category = {
  id: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  shape: string;
  signs: Sign[];
};

const categories: Category[] = [
  {
    id: 'varning',
    title: 'Varningsmärken',
    description: 'Gul bakgrund med röd kant och svart symbol. Varnar för faror.',
    color: '#d97706',
    bgColor: '#fef3c7',
    shape: '▲',
    signs: [
      { symbol: '⚠️', name: 'Varning för vägkorsning', meaning: 'Korsning framför — var uppmärksam på trafik från sidorna.' },
      { symbol: '🔄', name: 'Varning för kurva', meaning: 'Skarp kurva framför. Sänk hastigheten i god tid.' },
      { symbol: '🚸', name: 'Varning för barn', meaning: 'Barns närvaro kan förekomma, t.ex. nära skola eller lekplats.' },
      { symbol: '🦌', name: 'Varning för djur', meaning: 'Risk för vilt i trafiken. Vanliga älgar i norra Sverige.' },
      { symbol: '❄️', name: 'Varning för halka', meaning: 'Halkrisk. Sänk hastigheten och öka följsamma avstånd.' },
      { symbol: '🚧', name: 'Varning för vägarbete', meaning: 'Vägarbete pågår. Hastighetsbegränsning gäller ofta.' },
      { symbol: '🚂', name: 'Varning för järnvägskorsning', meaning: 'Järnvägskorsning utan bommar. Stanna vid rödblinkande.' },
      { symbol: '🌊', name: 'Varning för ojämnhet', meaning: 'Väggupp, grop eller ojämn beläggning framför.' },
    ],
  },
  {
    id: 'forbud',
    title: 'Förbudsmärken',
    description: 'Röd cirkel med vit bakgrund. Förbjuder en trafikant att utföra en handling.',
    color: '#dc2626',
    bgColor: '#fee2e2',
    shape: '⊘',
    signs: [
      { symbol: '⛔', name: 'Förbud mot infart', meaning: 'Absolut infartförbud. Gäller alla fordon, inga undantag.' },
      { symbol: '🚫', name: 'Förbud mot trafik', meaning: 'Ingen fordonstrafik tillåten i någon riktning.' },
      { symbol: '🐌', name: 'Hastighetsbegränsning', meaning: 'Angiven maxhastighet gäller from skylten tills ny skylt visas eller vägen slutar.', note: 'Ex: "30" i röd cirkel = max 30 km/h' },
      { symbol: '🚗', name: 'Förbud mot omkörning', meaning: 'Ingen omkörning tillåten. Upphör vid förbudets slut-skylt eller korsning.' },
      { symbol: '🅿️', name: 'Förbud mot parkering', meaning: 'Parkering förbjuden på den sida skylten sitter. Stoppa är tillåtet.' },
      { symbol: '🛑', name: 'Förbud mot stannande', meaning: 'Varken parkering eller stannande är tillåtet.' },
      { symbol: '🔇', name: 'Förbud mot signalgivning', meaning: 'Tutan/horn förbjudet inom detta område, t.ex. natt i bostadskvarter.' },
    ],
  },
  {
    id: 'påbud',
    title: 'Påbudsmärken',
    description: 'Blå cirkel med vit symbol. Anger vad trafikanterna MÅSTE göra.',
    color: '#1d4ed8',
    bgColor: '#dbeafe',
    shape: '●',
    signs: [
      { symbol: '↗️', name: 'Påbjuden körriktning', meaning: 'Du måste köra i angiven riktning. Pil anger riktningen.', note: 'Kan peka rakt, till vänster, höger eller snett' },
      { symbol: '🔵', name: 'Påbjuden lägsta hastighet', meaning: 'Du måste köra minst angiven hastighet (om inte trafikförhållandena kräver lägre).' },
      { symbol: '🚴', name: 'Påbjuden cykelbana', meaning: 'Cyklister och mopedister av klass II måste använda denna bana.' },
      { symbol: '🦶', name: 'Påbjuden gångbana', meaning: 'Gångtrafikanter måste använda denna bana.' },
      { symbol: '💡', name: 'Påbjuden belysning', meaning: 'Fordonets strålkastare måste vara tändda, t.ex. i tunneln.' },
    ],
  },
  {
    id: 'anvisning',
    title: 'Anvisningsmärken',
    description: 'Blå rektangel med vit eller grön text/symbol. Ger information och vägledning.',
    color: '#0369a1',
    bgColor: '#e0f2fe',
    shape: '▬',
    signs: [
      { symbol: '🛣️', name: 'Motorväg börjar', meaning: 'Motorväg börjar. Hastighetsgräns är normalt 110 km/h. Endast motorfordon med viss hastighetskapacitet tillåtna.' },
      { symbol: '🏁', name: 'Motorväg slutar', meaning: 'Motorvägen upphör. Lägre hastighetsgräns och fler trafikregler börjar gälla.' },
      { symbol: '🚏', name: 'Busshållplats', meaning: 'Busshållplats. Cyklister och fordon ska inte blockera.' },
      { symbol: '↰', name: 'Omkörning tillåten', meaning: 'Upphävande av omkörningsförbud. Omkörning tillåten igen.' },
      { symbol: '🔵', name: 'Slut på begränsning', meaning: 'Alla lokala hastighetsbegränsningar upphör. Normalhastighet gäller.' },
      { symbol: '♿', name: 'Handikappparkering', meaning: 'Parkeringsplats reserverad för fordon med handikapptillstånd.' },
    ],
  },
  {
    id: 'vagvisning',
    title: 'Vägvisnings­märken',
    description: 'Gröna/blå skyltar med vita siffror och pilar. Anger vägnummer och riktningar.',
    color: '#15803d',
    bgColor: '#dcfce7',
    shape: '▷',
    signs: [
      { symbol: '🟢', name: 'Riksvägsskylt (grön)', meaning: 'Grön bakgrund = riksväg. Siffran är vägnumret, t.ex. E4, E18.' },
      { symbol: '🔵', name: 'Länsväg (blå)', meaning: 'Blå bakgrund = länsväg. Siffror 100–999.' },
      { symbol: '➡️', name: 'Riktningsvisare', meaning: 'Pekar mot ort eller destination. Avstånd kan anges i kilometer.' },
    ],
  },
];

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Svenska vägmärken – komplett guide med bilder',
  description: 'Lär dig alla svenska vägmärken: varningsskyltar, förbudsskyltar, påbudsskyltar och anvisningsmärken.',
  url: 'https://huvet.se/vagmarken',
  publisher: {
    '@type': 'Organization',
    name: 'Huvet',
    url: 'https://huvet.se',
  },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: categories.length,
    itemListElement: categories.map((cat, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: cat.title,
      description: cat.description,
    })),
  },
};

export default function VagmarkenPage() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#fff', minHeight: '100vh', color: '#0d1f17' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
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
            Vägmärken
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: '900', lineHeight: '1.1', color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.04em' }}>
            Svenska vägmärken — komplett guide
          </h1>
          <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#555', margin: '0 0 16px' }}>
            Alla kategorier av svenska vägmärken med visuella symboler, namn och exakta förklaringar. Lär dig se mönstret: form och färg berättar vilken typ av skylt det är.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{ background: '#fef3c7', color: '#d97706', padding: '8px 16px', borderRadius: '999px', fontSize: '13px', fontWeight: '700' }}>▲ Varning = Gul triangel</div>
            <div style={{ background: '#fee2e2', color: '#dc2626', padding: '8px 16px', borderRadius: '999px', fontSize: '13px', fontWeight: '700' }}>⊘ Förbud = Röd cirkel</div>
            <div style={{ background: '#dbeafe', color: '#1d4ed8', padding: '8px 16px', borderRadius: '999px', fontSize: '13px', fontWeight: '700' }}>● Påbud = Blå cirkel</div>
            <div style={{ background: '#e0f2fe', color: '#0369a1', padding: '8px 16px', borderRadius: '999px', fontSize: '13px', fontWeight: '700' }}>▬ Anvisning = Blå rektangel</div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section style={{ padding: '48px 20px 80px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          {categories.map((cat) => (
            <div key={cat.id} style={{ marginBottom: '56px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{
                  width: '52px', height: '52px',
                  background: cat.bgColor,
                  borderRadius: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '22px', color: cat.color, fontWeight: '900',
                }}>
                  {cat.shape}
                </div>
                <div>
                  <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#0d1f17', margin: '0 0 4px' }}>{cat.title}</h2>
                  <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>{cat.description}</p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
                {cat.signs.map((sign) => (
                  <div key={sign.name} style={{
                    background: cat.bgColor,
                    borderRadius: '16px',
                    padding: '20px',
                    border: `2px solid ${cat.color}22`,
                  }}>
                    <div style={{ fontSize: '32px', marginBottom: '10px' }}>{sign.symbol}</div>
                    <div style={{ fontSize: '14px', fontWeight: '800', color: '#0d1f17', marginBottom: '6px' }}>{sign.name}</div>
                    <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.6', margin: 0 }}>{sign.meaning}</p>
                    {sign.note && (
                      <div style={{ marginTop: '8px', background: `${cat.color}20`, color: cat.color, fontSize: '12px', fontWeight: '700', padding: '4px 10px', borderRadius: '8px', display: 'inline-block' }}>
                        {sign.note}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Quick Reference */}
          <div style={{ background: '#0d1f17', borderRadius: '24px', padding: '40px 32px', color: 'white', marginBottom: '48px' }}>
            <h3 style={{ fontSize: '22px', fontWeight: '900', marginBottom: '20px' }}>Snabbguide: form + färg = typ</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              {[
                { shape: '▲ Triangel', color: 'Gul med röd kant', type: 'Varning', desc: 'Fara framför' },
                { shape: '⊘ Cirkel', color: 'Röd', type: 'Förbud', desc: 'Ska ej göras' },
                { shape: '● Cirkel', color: 'Blå', type: 'Påbud', desc: 'Måste göras' },
                { shape: '▬ Rektangel', color: 'Blå', type: 'Anvisning', desc: 'Information' },
                { shape: '⬟ Romb', color: 'Gul', type: 'Huvudled', desc: 'Du har företräde' },
                { shape: '▽ Triangel', color: 'Röd (up-down)', type: 'Väjningsskylt', desc: 'Väj för annan trafik' },
              ].map(item => (
                <div key={item.type} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ fontSize: '20px', marginBottom: '6px' }}>{item.shape}</div>
                  <div style={{ fontSize: '13px', color: '#4ade96', fontWeight: '700', marginBottom: '2px' }}>{item.type}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>{item.color}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ background: 'linear-gradient(160deg, #006B3F, #004d2d)', borderRadius: '24px', padding: '40px 32px', textAlign: 'center', color: 'white' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '12px' }}>Testa dina vägmärken-kunskaper</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '24px', fontSize: '15px' }}>
              Huvet har 60+ specifika frågor om vägmärken med bildstöd och förklaringar.
            </p>
            <Link href="/#demo" style={{ background: 'white', color: '#006B3F', padding: '16px 32px', borderRadius: '999px', fontSize: '16px', fontWeight: '700', textDecoration: 'none', display: 'inline-block' }}>
              Testa gratis nu →
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
