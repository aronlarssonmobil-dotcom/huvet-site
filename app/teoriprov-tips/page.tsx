import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: '10 bästa tipsen för teoriprovet 2026 — Klara provet på första försöket | Huvet',
  description: 'De 10 bästa tipsen för att klara teoriprovet 2026. Studieteknik, vanliga fällor, tidshantering och vilka ämnen du ska fokusera på. 94% av Huvet-eleverna klarar provet.',
  keywords: ['teoriprov tips', 'klara teoriprovet', 'teoriprov 2026', 'tips teoriprovet', 'studera teoriprovet', 'körkortsprov tips', 'teoriprov strategi', 'plugga teoriprovet'],
  openGraph: {
    title: '10 bästa tipsen för teoriprovet 2026 | Huvet',
    description: 'Experternas tips för att klara körkortsprovet. Studieteknik, vanliga fällor och strategier.',
  },
};

export default function TeoriProvTipsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '10 bästa tipsen för teoriprovet 2026',
    description: 'De bästa strategierna för att klara teoriprovet på första försöket. Från studieteknik till provdagstips.',
    dateModified: '2026-03-27',
    author: { '@type': 'Organization', name: 'Huvet', url: 'https://huvet.se' },
    publisher: { '@type': 'Organization', name: 'Huvet', url: 'https://huvet.se' },
  };

  const tips = [
    {
      nummer: 1,
      titel: 'Börja med att förstå, inte memorera',
      text: 'Det vanligaste misstaget är att försöka memorera alla svar. Teoriprovet testar förståelse, inte minne. Om du förstår VARFÖR ett svar är rätt (t.ex. varför parkering är förbjuden 10 meter från korsning — på grund av sikt), kommer du klara även frågor du aldrig sett förut.',
    },
    {
      nummer: 2,
      titel: 'Gör minst 10 fullständiga övningsprov',
      text: 'Forskning visar att provövning (retrieval practice) är den mest effektiva studietekniken. Gör övningsprov tills du konsekvent klarar 60+ av 70 rätt. Då har du marginal för nervositet på provdagen. Huvet erbjuder gratis övningsprov med realistiska frågor.',
    },
    {
      nummer: 3,
      titel: 'Fokusera extra på dina svaga ämnen',
      text: 'Använd Huvets svaghetsanalys för att identifiera vilka ämnen du gör mest fel på. Sedan övar du BARA de ämnena tills du behärskar dem. Det är mer effektivt att fixa svagheter än att repetera det du redan kan.',
    },
    {
      nummer: 4,
      titel: 'Läs frågan noggrant — varje ord räknas',
      text: 'Ord som "alltid", "aldrig", "bör", "måste", "kan" och "ska" förändrar hela svarets innebörd. "Du bör sänka hastigheten" och "Du ska sänka hastigheten" har olika juridisk betydelse. Läs frågan minst två gånger innan du svarar.',
    },
    {
      nummer: 5,
      titel: 'Lär dig vägmärken med system',
      text: '10–15 frågor handlar om vägmärken. Lär dig systemet: rund + röd kant = förbud, rund + blå = påbud, triangel + röd = varning. När du kan systemet kan du lista ut vad okända skyltar betyder. Öva med vårt vägmärkesquiz för att cementera kunskapen.',
    },
    {
      nummer: 6,
      titel: 'Skippa inte miljöfrågorna',
      text: 'Många underskattar miljö- och eco-driving-frågorna. De utgör cirka 10% av provet och är ofta enkla poäng om du är förberedd. Tips: lägre hastighet = lägre bränsleförbrukning, högre växel = lägre förbrukning, tumregeln är att undvika onödiga accelerationer.',
    },
    {
      nummer: 7,
      titel: 'Sprid ut pluggandet — inte kvällen innan',
      text: 'Spaced repetition (sprida ut övning över tid) ger markant bättre långtidsminne än att maratonstugga. Plugga 30–45 minuter per dag i 2–3 veckor. Det är bevisat mer effektivt än 8 timmar kvällen före provet.',
    },
    {
      nummer: 8,
      titel: 'Simulera provmiljön',
      text: 'Gör övningsprov under realistiska förhållanden: 50 minuter, inga hjälpmedel, ingen telefon, inget fusk. Ju mer likt det riktiga provet, desto mindre nervös blir du. Nervositet kostar 3–5 rätt för de flesta — förberedelse minskar den.',
    },
    {
      nummer: 9,
      titel: 'Titta på bildfrågor extra noggrant',
      text: 'Bildfrågor är bland de svåraste. Det handlar om att läsa av en trafiksituation — vägmärken, andra bilar, fotgängare, vägmarkeringar. Titta på HELA bilden, inte bara det uppenbara. Ofta finns det en detalj i kanten som avgör svaret.',
    },
    {
      nummer: 10,
      titel: 'Sov ordentligt natten före provet',
      text: 'Sömn är avgörande för att hjärnan ska kunna minnas och tänka klart. Studera INTE sent kvällen innan provet — din hjärna bearbetar information under sömnen. Gå och lägg dig i tid, ät frukost, och kom utvilad till provet.',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Hur många frågor måste man klara på teoriprovet?', acceptedAnswer: { '@type': 'Answer', text: 'Teoriprovet består av 65 frågor och du måste svara rätt på minst 52 (80%) för att bli godkänd. Provet tar max 50 minuter. Varje fråga har 1–4 svarsalternativ och du måste markera alla rätta alternativ.' } },
          { '@type': 'Question', name: 'Vad är de vanligaste misstagen på teoriprovet?', acceptedAnswer: { '@type': 'Answer', text: 'De vanligaste misstagen är: feltolkning av vägmärken, missar i situationer med högerregeln, felaktiga hastigheter i olika zoner och missuppfattning om körfältsbyte på motorväg. Öva just de kategorier du är svag i.' } },
          { '@type': 'Question', name: 'Hur länge ska man studera innan teoriprovet?', acceptedAnswer: { '@type': 'Answer', text: 'De flesta behöver 2–6 veckors aktiv träning (30–60 min/dag). Huvet anpassar träningen efter dina svagheter — du kan klara provet snabbare om du fokuserar på rätt saker från start.' } },
          { '@type': 'Question', name: 'Vad händer om man kugglar teoriprovet?', acceptedAnswer: { '@type': 'Answer', text: 'Du kan boka om teoriprovet direkt. Det kostar 400 kr per försök. Identifiera vilka kategorier du missade och fokusera träningen där. Statistik visar att de flesta klarar provet på andra eller tredje försöket.' } },
        ],
      }) }} />
      <div style={{ background: '#1DB954', height: '64px' }}><SiteHeader /></div>
      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '2rem 1.25rem 4rem', color: '#0d1f17' }}>
        <nav style={{ fontSize: '0.8rem', color: '#555', marginBottom: '1.5rem' }}>
          <Link href="/" style={{ color: '#1DB954', textDecoration: 'none' }}>Huvet</Link> › <Link href="/teoriprov" style={{ color: '#1DB954', textDecoration: 'none' }}>Teoriprov</Link> › Tips
        </nav>

        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '0.75rem' }}>
          10 bästa tipsen för teoriprovet 2026
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: '2rem' }}>
          Ungefär 30% kuggar teoriprovet vid första försöket. Det behöver inte vara du. Med rätt förberedelse och strategi kan du klara provet på första försöket — och spara både tid och pengar (varje omprov kostar 325 kr). Här är de 10 bästa tipsen baserade på vad som faktiskt fungerar.
        </p>

        {tips.map((tip) => (
          <section key={tip.nummer} style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid #f0f0f0' }}>
            <h2 style={{ color: '#1DB954', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
              {tip.nummer}. {tip.titel}
            </h2>
            <p style={{ lineHeight: 1.8, color: '#333', margin: 0 }}>{tip.text}</p>
          </section>
        ))}

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Bonus: Provdagen — checklista</h2>
        <ul style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
          <li>✅ Legitimation (giltig ID-handling)</li>
          <li>✅ Bokningsbekräftelse</li>
          <li>✅ Ätit frukost</li>
          <li>✅ Sovit minst 7 timmar</li>
          <li>✅ Kom 15 minuter tidigt</li>
          <li>✅ Stäng av telefonen</li>
          <li>✅ Andas lugnt — du har förberett dig</li>
        </ul>

        <div style={{ background: '#e6f4ee', borderRadius: '12px', padding: '1.5rem', marginTop: '2rem' }}>
          <h3 style={{ marginTop: 0, color: '#1DB954' }}>Redo att öva?</h3>
          <p style={{ margin: '0 0 1rem' }}>Använd Huvets övningsprov och svaghetsanalys för att optimera ditt pluggande.</p>
          <Link href="/ovningsprov" style={{ background: '#1DB954', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginRight: '0.75rem' }}>
            Starta övningsprov →
          </Link>
          <Link href="/korkortsfragor" style={{ color: '#1DB954', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', display: 'inline-block', border: '2px solid #1DB954' }}>
            Öva ämnesvis
          </Link>
        </div>

        <nav style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e6f4ee', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/halkkörning" style={{ color: '#1DB954', textDecoration: 'none' }}>← Halkkörning</Link>
          <Link href="/uppkorning-tips" style={{ color: '#1DB954', textDecoration: 'none', marginLeft: 'auto' }}>Uppkörning-tips →</Link>
        </nav>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link href="/vagmarken-guide" style={{ color: '#1DB954', fontSize: '0.85rem', textDecoration: 'none' }}>Vägmärken guide</Link>
          <span style={{ color: '#ccc' }}>•</span>
          <Link href="/ovningsprov-guide" style={{ color: '#1DB954', fontSize: '0.85rem', textDecoration: 'none' }}>Övningsprov-guide</Link>
          <span style={{ color: '#ccc' }}>•</span>
          <Link href="/trafikregler-guide" style={{ color: '#1DB954', fontSize: '0.85rem', textDecoration: 'none' }}>Trafikregler guide</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
