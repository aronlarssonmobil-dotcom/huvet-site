import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Automatiskt körkort 2026 – automat vs manuell växellåda | Huvet',
  description:
    'Ska du ta körkort med automat eller manuell växellåda? Komplett guide om automatiskt körkort i Sverige 2026: regler, begränsningar, fördelar och nackdelar.',
  keywords: [
    'automatiskt körkort',
    'körkort automat',
    'automat vs manuell',
    'körkort automatväxlad',
    'automat begränsning körkort',
    'villkor 78 körkort',
    'ta körkort automat',
    'automatväxlat körkort regler',
  ],
  alternates: { canonical: 'https://huvet.se/automatiskt-korkort' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad innebär automatiskt körkort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Automatiskt körkort innebär att du tagit körprov med en automatväxlad bil. Det ger dig villkor 78 på körkortet, vilket betyder att du bara får köra bilar med automatväxellåda. Du får inte köra manuellt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan man ta bort automatbegränsningen på körkortet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja! Du kan ta bort villkor 78 genom att göra ett nytt körprov med manuell växellåda. Du behöver inte göra om teoriprovet — bara körprovet. Avgiften är 1 200 kr hos Trafikverket.',
      },
    },
    {
      '@type': 'Question',
      name: 'Är det enklare att ta körkort med automat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, för de flesta. Utan koppling och manuellt växlande kan du fokusera helt på trafiken, vägmärken och säkerhet. Många klarar körprovet på färre lektioner med automat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur många kör automat i Sverige 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Andelen som tar körkort med automat har ökat kraftigt. 2026 väljer uppskattningsvis 30–40% av nya förare automatväxlad bil vid körprovet, och trenden är stigande i takt med att elbilar (som alltid är automat) blir vanligare.',
      },
    },
  ],
};

const facts = [
  { label: 'Villkor 78', sub: 'automatbegränsning', icon: '🔒' },
  { label: 'Färre lektioner', sub: 'snabbare utbildning', icon: '⚡' },
  { label: '1 200 kr', sub: 'uppgradera till manuell', icon: '💰' },
  { label: '30–40%', sub: 'väljer automat 2026', icon: '📈' },
];

const sections = [
  {
    title: 'Vad är automatiskt körkort?',
    content: [
      'Ett automatiskt körkort är ett vanligt B-körkort med villkor 78 — en begränsning som innebär att du bara får köra bilar med automatväxellåda. Begränsningen beror på att du gjorde körprovet med en automatväxlad bil.',
      'Teoriprovet är exakt detsamma oavsett om du väljer automat eller manuell. Skillnaden ligger enbart i körprovet och vilken bil du övningskör med. Alla andra behörigheter och regler gäller likadant.',
      'Villkor 78 syns på baksidan av ditt fysiska körkort. Det påverkar inte din rätt att köra i andra EU-länder — men begränsningen gäller överallt.',
    ],
  },
  {
    title: 'Fördelar med automatiskt körkort',
    content: [
      'Enklare att lära sig: Utan koppling och manuellt växlande kan du fokusera helt på trafikbild, vägmärken, hastighetsanpassning och säkerhet. Många elever känner sig tryggare snabbare.',
      'Färre körlektioner: Studier och erfarenhet visar att elever som kör automat ofta behöver 5–10 färre körlektioner. Det sparar både tid och pengar — uppskattningsvis 5 000–15 000 kr.',
      'Framtidssäkert: Elbilar har alltid automatväxellåda. I takt med att elbilsmarknaden växer blir automatkörkort alltmer praktiskt. Om du planerar att köra elbil är det ett naturligt val.',
    ],
  },
  {
    title: 'Nackdelar med automatiskt körkort',
    content: [
      'Begränsad valfrihet: Med villkor 78 får du inte köra manuella bilar. Det kan bli problematiskt om du vill hyra bil utomlands (där manuella bilar ofta är billigare) eller låna en kompis manuella bil.',
      'Uppgradering kostar: Om du ångrar dig och vill ta bort begränsningen måste du göra ett nytt körprov med manuell bil. Det innebär extra körlektioner (2 000–5 000 kr) plus provavgift (1 200 kr).',
      'Arbetslivet: Vissa yrken kräver att du kan köra manuellt — till exempel om du ska köra äldre firmabilar, tunga fordon eller maskiner. Kontrollera detta innan du väljer automat.',
    ],
  },
  {
    title: 'Så tar du bort automatbegränsningen',
    content: [
      'Om du har automatiskt körkort och vill uppgradera till fullt körkort (utan villkor 78) behöver du göra ett nytt körprov med manuell växellåda. Du behöver inte göra om teoriprovet.',
      'Steg: 1) Öva med manuell bil (privat eller via trafikskola). 2) Boka körprov hos Trafikverket — välj manuell bil. 3) Klara provet. 4) Transportstyrelsen uppdaterar ditt körkort automatiskt.',
      'Tips: De flesta som redan har automatkörkort behöver 5–10 lektioner med manuell bil innan de är redo för provet. Fokusera på kopplingskänsla, backning och start i uppförsbacke.',
    ],
  },
  {
    title: 'Automat vs manuell — vad ska du välja?',
    content: [
      'Välj automat om: Du vill ta körkort snabbt och billigt, du planerar att köra elbil, du inte behöver manuell för jobbet, eller om du tycker att växling distraherar dig i trafiken.',
      'Välj manuell om: Du vill ha maximal flexibilitet, du planerar att köra utomlands ofta, ditt jobb kräver det, eller om du vill ha full valfrihet från start utan att behöva uppgradera senare.',
      'Kompromiss: Ta automat nu, spara pengar, och uppgradera till manuell senare om det visar sig att du behöver det. Många gör precis så. Det viktigaste är att du kommer ut i trafiken säkert.',
    ],
  },
];

export default function AutomatisktKorkortPage() {
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
          <Breadcrumbs items={[{ label: 'Hem', href: '/' }, { label: 'Automatiskt körkort' }]} />
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#006B3F', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>Automat vs manuell</div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 900, lineHeight: 1.05, color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.04em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Automatiskt körkort — automat vs manuell växellåda
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#5a6b62', maxWidth: '600px', margin: '0 0 40px' }}>
            Ska du köra med automat eller manuell? Allt fler väljer automatväxlad bil. Här förklarar vi skillnaderna, reglerna kring villkor 78 och vad som passar dig bäst.
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
            <div style={{ fontSize: '28px', fontWeight: 900, marginBottom: '12px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Redo att börja plugga?</div>
            <p style={{ fontSize: '16px', opacity: 0.85, marginBottom: '28px', maxWidth: '440px', margin: '0 auto 28px' }}>Teoriprovet är detsamma oavsett automat eller manuell. Börja träna med Huvets 450+ frågor.</p>
            <Link href="/#demo" style={{ display: 'inline-block', background: '#f5d020', color: '#0d1f17', padding: '16px 36px', borderRadius: '999px', fontWeight: 800, textDecoration: 'none', fontSize: '16px' }}>Börja träna gratis</Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 900, color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Vanliga frågor om automatiskt körkort</h2>
          {pageJsonLd.mainEntity.map((faq, i) => (
            <div key={i} style={{ background: 'white', border: '2px solid #dceee5', borderRadius: '16px', padding: '24px', marginBottom: '12px' }}>
              <div style={{ fontWeight: 800, fontSize: '16px', color: '#0d1f17', marginBottom: '8px' }}>{faq.name}</div>
              <p style={{ color: '#5a6b62', lineHeight: 1.65, fontSize: '15px', margin: 0 }}>{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}><RelatedGuides currentPath="/automatiskt-korkort" /></div>
      </section>

      <footer style={{ background: '#0d1f17', color: 'rgba(255,255,255,0.4)', padding: '32px 20px', textAlign: 'center', fontSize: '13px' }}>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="/teoriprov" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Teoriprov</Link>
          <Link href="/korprov" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körprov</Link>
          <Link href="/b-korkort" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>B-körkort</Link>
          <Link href="/korkort-kostnad" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körkort kostnad</Link>
          <Link href="/vagmarken" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Vägmärken</Link>
        </div>
        <span>&copy; 2026 Huvet (huvet.se). Byggt för svenska körkortselever.</span>
      </footer>
    </div>
  );
}
