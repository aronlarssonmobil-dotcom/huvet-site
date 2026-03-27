import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Bilinspektion & besiktning – regler, kostnad och tips 2026 | Huvet',
  description:
    'Komplett guide till bilbesiktning i Sverige 2026. När ska bilen besiktigas, vad kontrolleras, kostnad, vanliga fel och tips för att klara besiktningen.',
  keywords: [
    'bilinspektion',
    'besiktning bil',
    'bilbesiktning 2026',
    'besiktning kostnad',
    'besiktning regler',
    'besiktning vad kontrolleras',
    'vanliga besiktningsfel',
    'besiktning underkänd',
    'kontrollbesiktning',
    'besiktningsperiod',
  ],
  alternates: { canonical: 'https://huvet.se/bilinspektion' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'När ska bilen besiktigas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nya bilar besiktigas första gången efter 3 år. Därefter vartannat år tills bilen är 10 år gammal, sedan varje år. Din besiktningsperiod beror på bilens registreringsnummer — kolla Transportstyrelsens webbplats.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad kostar besiktning 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En vanlig kontrollbesiktning kostar 400–600 kr beroende på besiktningsföretag och ort. Opus, Bilprovningen och Dekra är de vanligaste. Ombesiktning kostar ca 200–400 kr om du inte klarade första gången.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad kontrolleras vid besiktning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kontrollbesiktningen omfattar bromsar, däck, belysning, avgaser, bärrande delar (rost), styrinrättning, stötdämpare, bälten, rutor och kaross. Totalt kontrolleras ett 50-tal punkter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad händer om bilen inte klarar besiktningen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Om bilen underkänns får du normalt en månad att åtgärda felen och komma tillbaka för ombesiktning. Vid allvarliga brister kan du få körförbud — bilen får då inte användas alls förrän felen är åtgärdade.',
      },
    },
  ],
};

const facts = [
  { label: '3 år', sub: 'första besiktning', icon: '📅' },
  { label: '400–600 kr', sub: 'kostnad', icon: '💰' },
  { label: '~50 punkter', sub: 'kontrolleras', icon: '🔧' },
  { label: '1 månad', sub: 'tid för ombesiktning', icon: '⏱️' },
];

const sections = [
  {
    title: 'Vad är bilbesiktning?',
    content: [
      'Bilbesiktning (kontrollbesiktning) är en obligatorisk kontroll som säkerställer att fordon på svenska vägar är trafiksäkra och miljögodkända. Alla registrerade personbilar, lastbilar och bussar måste genomgå regelbunden besiktning.',
      'Besiktningen utförs av godkända besiktningsföretag — inte av Transportstyrelsen eller Trafikverket. De vanligaste är Opus Bilprovning (tidigare Svensk Bilprovning), Bilprovningen och Dekra.',
      'Om du har tagit körkort nyligen och köpt din första bil är det viktigt att förstå besiktningsreglerna. En obesiktigad bil innebär körförbud och kan leda till böter.',
    ],
  },
  {
    title: 'När ska bilen besiktigas?',
    content: [
      'Nya personbilar: Första besiktningen sker 3 år efter att bilen först registrerades. Därefter besiktigas bilen vartannat år fram till att den är 10 år gammal. Från och med år 10 besiktigas bilen varje år.',
      'Besiktningsperioden beror på slutsiffran i ditt registreringsnummer. Varje bil har en tilldelad period (t.ex. januari–februari) under vilken besiktningen ska genomföras. Kolla exakt period på Transportstyrelsens webbplats.',
      'Observera: Om du köper en begagnad bil, kolla omedelbart när nästa besiktning förfaller. En missad besiktning innebär automatiskt körförbud.',
    ],
  },
  {
    title: 'Vad kontrolleras vid besiktningen?',
    content: [
      'Bromsar: Bromsverkan mäts på en rullbänk. Både frambroms, bakbroms och parkeringsbroms kontrolleras. Ojämna bromskrafter eller för svag bromsverkan är bland de vanligaste orsakerna till underkänt.',
      'Belysning: Alla lampor kontrolleras — helljus, halvljus, blinkers, bromsljus, backljus, bakljus och skyltbelysning. Även ljusriktningen på halvljuset mäts. Trasiga lampor är enkla att fixa men vanliga att missa.',
      'Avgaser och miljö: Avgasvärden mäts för att kontrollera att bilen uppfyller miljökraven. OBD-kontroll (felkodsläsning) görs på nyare bilar. Felkoder i motorstyrningen kan ge underkänt.',
    ],
  },
  {
    title: 'Vanliga besiktningsfel — och hur du undviker dem',
    content: [
      'Trasiga lampor (20% av alla anmärkningar): Kontrollera ALLA lampor innan besiktning. Ta med en kompis som kollar bromsljus och backljus medan du sitter i bilen. Byt trasiga lampor — det kostar bara 30–80 kr per lampa.',
      'Dåliga bromsar (15%): Känner du att bilen drar åt ett håll vid bromsning? Det kan tyda på ojämna bromsbelägg. Besöka en verkstad för bromskontroll innan besiktningen.',
      'Rost i bärande delar (10%): Inspektera undersidan av bilen, speciellt balkar och bärarmar. Kraftig genomrostning innebär underkänt och kan vara dyrt att laga. Äldre bilar i norra Sverige är extra utsatta.',
    ],
  },
  {
    title: 'Tips för att klara besiktningen',
    content: [
      'Gör en egen kontroll veckan innan: Lampor, blinkers, däck (mönsterdjup minst 1,6 mm), vindrutetorkare, spolarvätska, siktrutor (inga sprickor i förarens synfält). Åtgärda uppenbara fel.',
      'Boka tid i god tid: Besiktningsföretagen har ofta långa köer i slutet av besiktningsperioden. Boka tidigt så har du tid att åtgärda eventuella fel och komma tillbaka för ombesiktning.',
      'Välj rätt besiktningsföretag: Priserna varierar med 100–200 kr mellan företag och orter. Jämför priser online. Vissa erbjuder "klara-besiktningen-garanti" med gratis ombesiktning om bilen inte godkänns.',
    ],
  },
];

export default function BilinspektionPage() {
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
          <Breadcrumbs items={[{ label: 'Hem', href: '/' }, { label: 'Bilinspektion & besiktning' }]} />
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#006B3F', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>Fordon & underhåll</div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 900, lineHeight: 1.05, color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.04em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Bilinspektion & besiktning — regler, kostnad och tips
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#5a6b62', maxWidth: '600px', margin: '0 0 40px' }}>
            Besiktning är obligatoriskt för alla bilar i Sverige. Här förklarar vi reglerna, vad som kontrolleras, vad det kostar och hur du undviker vanliga fel.
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
            <p style={{ fontSize: '16px', opacity: 0.85, marginBottom: '28px', maxWidth: '440px', margin: '0 auto 28px' }}>Lär dig om besiktning, trafikförsäkring och allt annat inför teoriprovet med Huvets 450+ frågor.</p>
            <Link href="/#demo" style={{ display: 'inline-block', background: '#f5d020', color: '#0d1f17', padding: '16px 36px', borderRadius: '999px', fontWeight: 800, textDecoration: 'none', fontSize: '16px' }}>Börja träna gratis</Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 900, color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Vanliga frågor om besiktning</h2>
          {pageJsonLd.mainEntity.map((faq, i) => (
            <div key={i} style={{ background: 'white', border: '2px solid #dceee5', borderRadius: '16px', padding: '24px', marginBottom: '12px' }}>
              <div style={{ fontWeight: 800, fontSize: '16px', color: '#0d1f17', marginBottom: '8px' }}>{faq.name}</div>
              <p style={{ color: '#5a6b62', lineHeight: 1.65, fontSize: '15px', margin: 0 }}>{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}><RelatedGuides currentPath="/bilinspektion" /></div>
      </section>

      <footer style={{ background: '#0d1f17', color: 'rgba(255,255,255,0.4)', padding: '32px 20px', textAlign: 'center', fontSize: '13px' }}>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="/trafikforsakring" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Trafikförsäkring</Link>
          <Link href="/b-korkort" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>B-körkort</Link>
          <Link href="/korkort-kostnad" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Körkort kostnad</Link>
          <Link href="/trafikregler" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Trafikregler</Link>
        </div>
        <span>&copy; 2026 Huvet (huvet.se). Byggt för svenska körkortselever.</span>
      </footer>
    </div>
  );
}
