import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Uppkörning tips 2026 — Så klarar du uppkörningen | Huvet',
  description: 'Bästa tipsen för att klara uppkörningen 2026. Vanliga misstag, vad kontrollanten bedömer, körprovsrutt och hur du förbereder dig. Klara körprovet på första försöket.',
  keywords: ['uppkörning tips', 'klara uppkörningen', 'körprov tips', 'uppkörning 2026', 'körprov misstag', 'uppkörning nervös', 'uppkörning vad bedöms', 'körprov strategi'],
  openGraph: {
    title: 'Uppkörning tips 2026 — Klara körprovet | Huvet',
    description: 'Så klarar du uppkörningen. Vanliga misstag, tips och strategier för körprovet.',
  },
};

export default function UppkorningTipsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Vad kostar uppkörningen?', acceptedAnswer: { '@type': 'Answer', text: 'Uppkörningen (körprovet) kostar 800 kr per tillfälle hos Trafikverket (2026). Eventuell hyra av bil från trafikskola tillkommer, vanligtvis 500-1000 kr.' } },
      { '@type': 'Question', name: 'Hur lång är uppkörningen?', acceptedAnswer: { '@type': 'Answer', text: 'Uppkörningen tar cirka 30-45 minuter. Du kör i normal trafik och kontrollanten ger dig instruktioner om vart du ska köra.' } },
      { '@type': 'Question', name: 'Vilka är de vanligaste misstagen vid uppkörning?', acceptedAnswer: { '@type': 'Answer', text: 'De vanligaste misstagen är: bristande kontroll i korsningar (inte titta ordentligt), för hög hastighet i bostadsområden, dålig placering i körfält, missade vägmärken och otillräcklig spegelkoll.' } },
      { '@type': 'Question', name: 'Kan man ta med sin egen bil på uppkörningen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, du kan använda din egen bil (eller handledarens bil) förutsatt att den är godkänd för övningskörning med dubbelkommando eller utan. Bilen måste vara trafiksäker och försäkrad.' } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ background: '#1DB954', height: '64px' }}><SiteHeader /></div>
      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '2rem 1.25rem 4rem', color: '#0d1f17' }}>
        <nav style={{ fontSize: '0.8rem', color: '#555', marginBottom: '1.5rem' }}>
          <Link href="/" style={{ color: '#1DB954', textDecoration: 'none' }}>Huvet</Link> › <Link href="/korprov" style={{ color: '#1DB954', textDecoration: 'none' }}>Körprov</Link> › Tips
        </nav>

        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '0.75rem' }}>
          Uppkörning tips — Så klarar du körprovet 2026
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: '2rem' }}>
          Uppkörningen är det sista steget innan du får ditt körkort. Det är naturligt att vara nervös — men med rätt förberedelse ökar du dina chanser dramatiskt. Här delar vi de bästa tipsen från körlärare och elever som klarat provet på första försöket.
        </p>

        <div style={{ background: '#e6f4ee', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem' }}>
          <strong style={{ color: '#1DB954' }}>📋 Snabbfakta om uppkörningen</strong>
          <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', lineHeight: 2, color: '#333' }}>
            <li><strong>Kostnad:</strong> 800 kr (+ ev. bilhyra 500–1000 kr)</li>
            <li><strong>Längd:</strong> 30–45 minuter</li>
            <li><strong>Krav:</strong> Godkänt teoriprov + Riskettan + Risktvåan</li>
            <li><strong>Resultat:</strong> Direkt efter provet</li>
            <li><strong>Godkänt-frekvens:</strong> Cirka 55% klarar på första försöket</li>
          </ul>
        </div>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Vad kontrollanten bedömer</h2>
        <p style={{ lineHeight: 1.8, color: '#333' }}>
          Kontrollanten bedömer inte om du kör som en erfaren förare — utan om du kör <strong>säkert och regelrätt</strong>. De viktigaste bedömningskriterierna:
        </p>
        <ul style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
          <li><strong>Trafiksäkerhet:</strong> Du utgör ingen fara för dig själv eller andra.</li>
          <li><strong>Regelefterlevnad:</strong> Du följer trafikregler, vägmärken och signaler.</li>
          <li><strong>Samspel med andra trafikanter:</strong> Du anpassar dig, visar hänsyn och kommunicerar.</li>
          <li><strong>Körfältsplacering:</strong> Du håller dig rätt i körfältet och byter fält korrekt.</li>
          <li><strong>Hastighetanpassning:</strong> Du kör rätt hastighet för situationen.</li>
          <li><strong>Kontroll av fordonet:</strong> Du hanterar bilen smidigt (gas, broms, koppling, styrning).</li>
        </ul>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>10 tips för att klara uppkörningen</h2>
        <ol style={{ lineHeight: 2.2, paddingLeft: '1.5rem', color: '#333' }}>
          <li><strong>Kör den rutt du ska göra provet på.</strong> De flesta uppkörningar sker i närheten av Trafikverkets kontor. Öva på dessa vägar så att du är bekant med korsningar, rondeller och trafiksituationer.</li>
          <li><strong>Ta en lektion samma dag eller dagen innan.</strong> En uppvärmningslektion precis innan provet ger dig trygghet och hjälper dig komma i &quot;körzonen&quot;.</li>
          <li><strong>Kontrollera ALLTID speglar och döda vinkeln.</strong> Kontrollanten tittar specifikt på detta. Överdriva hellre — tydliga huvudrörelser visar att du kollar.</li>
          <li><strong>Kör lugnt — inte långsamt.</strong> Att köra för långsamt är lika fel som att köra för fort. Håll trafikrytmen men var aldrig stressad.</li>
          <li><strong>Gör en tydlig &quot;säkerhetskontroll&quot; innan start.</strong> Justera stol, speglar, bilbälte — även om allt redan är rätt. Det visar att du har rutin.</li>
          <li><strong>Vid tveksamhet — välj det säkra.</strong> Osäker i en korsning? Stanna hellre en gång extra. Kontrollanten straffar inte försiktighet.</li>
          <li><strong>Andas och slappna av.</strong> Nervositet gör att du missar saker. Ta djupa andetag. Påminn dig själv: du KAN köra, du har övat.</li>
          <li><strong>Ett litet misstag = inte kuggat.</strong> Kontrollanten förväntar sig inte perfektion. Ett glömt blinkertecken eller lite osäker parkering räcker inte för att kugga. Det är mönstret som räknas.</li>
          <li><strong>Lyssna noga på instruktionerna.</strong> Kontrollanten säger &quot;Sväng höger i nästa korsning&quot; — inte &quot;Sväng höger nu&quot;. Lyssna, förstå, utför.</li>
          <li><strong>Backning och parkering — öva extra.</strong> Fickparkering och backning i kurva är vanliga moment. Öva tills du kan dem reflexmässigt.</li>
        </ol>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Vanligaste misstagen (och hur du undviker dem)</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.95rem' }}>
          <thead>
            <tr style={{ background: '#fff3e0' }}>
              <th style={{ textAlign: 'left', padding: '0.6rem 1rem' }}>Misstag</th>
              <th style={{ textAlign: 'left', padding: '0.6rem 1rem' }}>Lösning</th>
            </tr>
          </thead>
          <tbody>
            {[
              { misstag: 'Dålig koll i korsningar', losning: 'Systematisk kontroll: vänster-höger-vänster + dödavinkel' },
              { misstag: 'För hög fart i 30-zon', losning: 'Kolla alltid vägmärken aktivt, särskilt i bostadsområden' },
              { misstag: 'Missad väjningsplikt', losning: 'Lär dig alla väjnings-/stoppmärken utantill' },
              { misstag: 'Osäker körfältsplacering', losning: 'Håll mitt i körfältet. Vid sväng: placera dig i rätt fil i god tid' },
              { misstag: 'Glömd blinkers', losning: 'Automatisera: spegel → blinkers → spegel → manöver' },
              { misstag: 'Panik vid oväntad situation', losning: 'Sänk hastigheten, andas, tänk. Bättre stanna än gissa.' },
            ].map((r) => (
              <tr key={r.misstag} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '0.6rem 1rem', color: '#D32F2F', fontWeight: 600 }}>{r.misstag}</td>
                <td style={{ padding: '0.6rem 1rem' }}>{r.losning}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Om du inte klarar provet</h2>
        <p style={{ lineHeight: 1.8, color: '#333' }}>
          Att inte klara uppkörningen på första försöket är <strong>vanligare än du tror</strong> — nästan hälften behöver göra om den. Det är inget misslyckande. Fråga kontrollanten vad du behöver förbättra, ta några extra körlektioner med fokus på de specifika bristerna, och boka om. Andra gången vet du exakt vad som förväntas.
        </p>

        <div style={{ background: '#e6f4ee', borderRadius: '12px', padding: '1.5rem', marginTop: '2rem' }}>
          <h3 style={{ marginTop: 0, color: '#1DB954' }}>Förbered teorin också</h3>
          <p style={{ margin: '0 0 1rem' }}>Teoriprovet måste vara klart innan uppkörningen. Öva med riktiga körkortsfrågor.</p>
          <Link href="/korkortsfragor" style={{ background: '#1DB954', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
            Öva körkortsfrågorna →
          </Link>
        </div>

        <nav style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e6f4ee', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/teoriprov-tips" style={{ color: '#1DB954', textDecoration: 'none' }}>← Teoriprov-tips</Link>
          <Link href="/vagmarken-guide" style={{ color: '#1DB954', textDecoration: 'none', marginLeft: 'auto' }}>Vägmärken guide →</Link>
        </nav>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link href="/korkort-kostnad-guide" style={{ color: '#1DB954', fontSize: '0.85rem', textDecoration: 'none' }}>Körkort kostnad</Link>
          <span style={{ color: '#ccc' }}>•</span>
          <Link href="/risktvaan" style={{ color: '#1DB954', fontSize: '0.85rem', textDecoration: 'none' }}>Risktvåan</Link>
          <span style={{ color: '#ccc' }}>•</span>
          <Link href="/ovningsprov-guide" style={{ color: '#1DB954', fontSize: '0.85rem', textDecoration: 'none' }}>Övningsprov-guide</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
