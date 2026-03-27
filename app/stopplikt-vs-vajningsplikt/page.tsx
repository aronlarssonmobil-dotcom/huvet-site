import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Stopplikt vs väjningsplikt – skillnaden förklarad 2026 | Huvet',
  description:
    'Vad är skillnaden mellan stopplikt och väjningsplikt? Enkel förklaring med exempel, skyltar och regler. Undvik vanliga misstag på teoriprovet.',
  keywords: [
    'stopplikt vs väjningsplikt',
    'skillnad stopplikt väjningsplikt',
    'stopplikt',
    'väjningsplikt',
    'stoppskylt',
    'väjningspliktsskylt',
    'stopplikt regler',
    'väjningsplikt regler',
    'stopplinjen',
    'teoriprov stopplikt',
  ],
  alternates: { canonical: 'https://huvet.se/stopplikt-vs-vajningsplikt' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad är skillnaden mellan stopplikt och väjningsplikt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stopplikt innebär att du alltid måste stanna helt vid stopplinjen, även om ingen trafik syns. Väjningsplikt innebär att du ska anpassa hastigheten och lämna företräde, men du behöver inte stanna om vägen är fri.',
      },
    },
    {
      '@type': 'Question',
      name: 'Var ska man stanna vid stopplikt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Du ska stanna vid stopplinjen om den finns markerad på vägen. Om ingen stopplinje finns ska du stanna strax innan korsningen, på en plats där du har god sikt. Bilen ska stå helt stilla.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad händer om man inte stannar vid stoppskylt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Att köra förbi en stoppskylt utan att stanna helt är en trafikförseelse som kan ge böter på 3 000 kr. Vid körprovet innebär det direktkugg — du blir underkänd omedelbart.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur ser skyltarna ut?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stoppskylt: Röd åttakantig skylt med vit text "STOP". Väjningspliktsskylt: Nedåtvänd triangel med röd kant och vit insida. Båda är internationellt standardiserade och lätta att känna igen.',
      },
    },
  ],
};

const facts = [
  { label: 'STOP', sub: 'alltid stanna helt', icon: '🛑' },
  { label: '▽', sub: 'väj om trafik finns', icon: '⚠️' },
  { label: '3 000 kr', sub: 'böter vid miss', icon: '💰' },
  { label: 'Kugg', sub: 'vid körprov', icon: '❌' },
];

const sections = [
  {
    title: 'Stopplikt — vad innebär det?',
    content: [
      'Stopplikt innebär att du ALLTID måste stanna helt vid en korsning markerad med stoppskylt eller stopplinje. Du ska stanna även om du ser att vägen är helt fri — bilen ska stå helt stilla innan du kör vidare.',
      'Stoppskylten är den röda åttakantiga skylten med vit text "STOP". Den är unik i sin form — ingen annan skylt i Sverige har åtta sidor. Det gör den lätt att känna igen även bakifrån eller täckt av snö.',
      'Vid stopplikt ska du stanna vid stopplinjen (vit heldragen linje på vägen). Om det saknas stopplinje stannar du strax innan korsningen där du har god sikt åt båda hållen. Efter att du stannat helt bedömer du trafikläget och kör vidare när det är fritt.',
    ],
  },
  {
    title: 'Väjningsplikt — vad innebär det?',
    content: [
      'Väjningsplikt innebär att du ska sänka hastigheten och vara beredd att stanna för att lämna företräde åt korsande trafik. Men om vägen är fri behöver du INTE stanna — du kan sakta passera om det är säkert.',
      'Väjningspliktsskylten är en nedåtvänd vit triangel med röd kant. Den kallas ibland "shark-tanden" i dagligt tal. Skylten finns ofta i kombination med vägmarkeringar på asfalten.',
      'Skillnaden mot stopplikt är alltså avgörande: vid väjningsplikt gör du en bedömning, vid stopplikt stannar du alltid. Många teoretikare missar denna distinktion — det är ett av de vanligaste felen på teoriprovet.',
    ],
  },
  {
    title: 'Stopplikt vs väjningsplikt — direkt jämförelse',
    content: [
      'Stopplikt: Röd åttakantig skylt → Du MÅSTE stanna helt → Stanna vid stopplinjen → Stanna även om vägen är fri → Böter 3 000 kr om du missar → Direktkugg på körprov.',
      'Väjningsplikt: Nedåtvänd triangel → Sänk hastigheten och var beredd att stanna → Lämna företräde åt korsande trafik → Behöver inte stanna om vägen är fri → Böter 3 000 kr om du inte väjer → Trolig kugg på körprov.',
      'Gemensamt: Båda innebär att den korsande trafiken har företräde. Båda kräver att du anpassar din körning. Båda ersätter högerregeln — om en skylt finns gäller skylten, inte högerregeln.',
    ],
  },
  {
    title: 'När används stopplikt vs väjningsplikt?',
    content: [
      'Stopplikt används på platser med dålig sikt, hög olycksrisk eller tungt trafikerade korsningar. Den tvingar dig att stanna och verkligen titta ordentligt innan du kör ut. Typiskt vid korsningar med huvudled, järnvägsövergångar och farliga korsningar.',
      'Väjningsplikt används i korsningar där sikten normalt är acceptabel men där du ändå inte har företräde. Det är den vanligare av de två — du hittar väjningspliktsskyltar i rondeller, vid infarter till större vägar och i många vanliga korsningar.',
      'Tumregel: Ju farligare korsningen bedöms vara, desto mer sannolikt med stopplikt. Väjningsplikt används där det räcker att sänka hastigheten och vara uppmärksam.',
    ],
  },
  {
    title: 'Tips för teoriprovet',
    content: [
      'Trafikverket älskar frågor om stopplikt och väjningsplikt. Förvänta dig minst 2–3 frågor som testar din förståelse. De vanligaste scenarierna: Vem har företräde? Var ska du stanna? Vad händer om skylten saknas?',
      'Minnestrick: STOP = STANNA ALLTID. Triangeln pekar nedåt = sänk hastigheten (nedåt = ner i fart). Om du tänker på det visuellt fastnar det lättare.',
      'Vanligaste felet: Att tro att du behöver stanna vid väjningsplikt. Det behöver du inte om vägen är fri. Och det omvända: att tro att du kan rulla förbi en stoppskylt om ingen kommer. Det får du aldrig.',
    ],
  },
];

export default function StoppliktVsVajningspliktPage() {
  return (
    <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", background: '#fff', minHeight: '100vh', color: '#0d1f17' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #dceee5', padding: '0 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ width: '36px', height: '36px', background: '#1DB954', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2"/><circle cx="10" cy="10" r="2.5" fill="white"/><line x1="10" y1="2" x2="10" y2="7.5" stroke="white" strokeWidth="2" strokeLinecap="round"/><line x1="3.4" y1="13.5" x2="7.8" y2="11.2" stroke="white" strokeWidth="2" strokeLinecap="round"/><line x1="16.6" y1="13.5" x2="12.2" y2="11.2" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <span style={{ fontSize: '20px', fontWeight: 900, color: '#0d1f17', letterSpacing: '-0.04em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Huvet</span>
          </Link>
          <Link href="/#demo" style={{ background: '#1DB954', color: 'white', padding: '10px 22px', borderRadius: '999px', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}>Träna gratis</Link>
        </div>
      </header>

      <section style={{ background: 'linear-gradient(160deg, #f0f7f3 0%, #fff 60%)', padding: '64px 20px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Breadcrumbs items={[{ label: 'Hem', href: '/' }, { label: 'Trafikregler', href: '/trafikregler' }, { label: 'Stopplikt vs väjningsplikt' }]} />
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#1DB954', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>Trafikregler</div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 900, lineHeight: 1.05, color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.04em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Stopplikt vs väjningsplikt — vad är skillnaden?
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#5a6b62', maxWidth: '600px', margin: '0 0 40px' }}>
            Stoppskylt eller nedåtvänd triangel — när ska du stanna och när räcker det att sakta ner? Vi förklarar skillnaden med tydliga exempel.
          </p>
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
          <div style={{ background: 'linear-gradient(135deg, #1DB954 0%, #17a34a 100%)', borderRadius: '20px', padding: '40px', textAlign: 'center', color: 'white' }}>
            <div style={{ fontSize: '28px', fontWeight: 900, marginBottom: '12px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Öva inför teoriprovet</div>
            <p style={{ fontSize: '16px', opacity: 0.85, marginBottom: '28px', maxWidth: '440px', margin: '0 auto 28px' }}>Testa dina kunskaper om stopplikt, väjningsplikt och högerregeln med 450+ riktiga körkortsfrågor.</p>
            <Link href="/#demo" style={{ display: 'inline-block', background: '#f5d020', color: '#0d1f17', padding: '16px 36px', borderRadius: '999px', fontWeight: 800, textDecoration: 'none', fontSize: '16px' }}>Börja träna gratis</Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 900, color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Vanliga frågor</h2>
          {pageJsonLd.mainEntity.map((faq, i) => (
            <div key={i} style={{ background: 'white', border: '2px solid #dceee5', borderRadius: '16px', padding: '24px', marginBottom: '12px' }}>
              <div style={{ fontWeight: 800, fontSize: '16px', color: '#0d1f17', marginBottom: '8px' }}>{faq.name}</div>
              <p style={{ color: '#5a6b62', lineHeight: 1.65, fontSize: '15px', margin: 0 }}>{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}><RelatedGuides currentPath="/stopplikt-vs-vajningsplikt" /></div>
      </section>

      <footer style={{ background: '#0d1f17', color: 'rgba(255,255,255,0.4)', padding: '32px 20px', textAlign: 'center', fontSize: '13px' }}>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="/trafikregler" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Trafikregler</Link>
          <Link href="/hogersregeln" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Högerregeln</Link>
          <Link href="/vagmarken" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Vägmärken</Link>
          <Link href="/teoriprov" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Teoriprov</Link>
        </div>
        <span>&copy; 2026 Huvet (huvet.se). Byggt för svenska körkortselever.</span>
      </footer>
    </div>
  );
}
