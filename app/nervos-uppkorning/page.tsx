import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedGuides from '../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Nervös inför uppkörning? Så hanterar du nerverna | Huvet',
  description:
    'Är du nervös inför uppkörningen? Här är beprövade tips för att hantera nervositet, andningstekniker, vad inspektören egentligen tittar på och varför det är okej att köra kugg.',
  keywords: [
    'nervös inför uppkörning',
    'nervös uppkörning',
    'uppkörning nervös',
    'hantera nerver uppkörning',
    'lugna nerver körprov',
    'uppkörning tips nervositet',
    'rädd för uppkörning',
    'misslyckas uppkörning',
    'andningsteknik körprov',
    'körprov ångest',
  ],
  alternates: { canonical: 'https://huvet.se/nervos-uppkorning' },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hur vanligt är det att vara nervös inför uppkörningen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Det är helt normalt. Studier från svenska trafikskolor visar att över 80% av eleverna upplever nervositet inför uppkörningen. Nervositet är kroppens naturliga sätt att förbereda dig för en utmaning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur många procent klarar uppkörningen på första försöket?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cirka 50% klarar uppkörningen på första försöket enligt Trafikverkets statistik. Det betyder att hälften av alla behöver göra om den. Det är vanligt och inget att skämmas för.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad händer om man kör kugg på uppkörningen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Om du inte klarar uppkörningen kan du boka en ny tid direkt. Det kostar 800 kr per försök. Ditt godkända teoriprov gäller fortfarande i 4 månader. De flesta som kör kugg klarar det på andra eller tredje försöket.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan inspektören se att jag är nervös?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, inspektörer är vana vid nervösa elever och tar hänsyn till det. En lätt nervositet påverkar inte bedömningen. Inspektören bedömer din körförmåga, inte ditt lugn. Du får göra mindre misstag utan att bli underkänd.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka andningstekniker hjälper mot nervositet vid uppkörning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '4-7-8-metoden är effektiv: andas in i 4 sekunder, håll andan i 7 sekunder, andas ut i 8 sekunder. Upprepa 3-4 gånger. Box-andning (4-4-4-4) är också bra. Börja gärna öva dagarna innan provet.',
      },
    },
  ],
};

const sections = [
  {
    title: 'Det är normalt att vara nervös',
    paragraphs: [
      'Låt oss börja med det viktigaste: du är inte ensam. Studier från svenska trafikskolor visar att över 80% av eleverna upplever nervositet inför uppkörningen. Det är inte ett tecken på svaghet eller dålig förberedelse — det är din kropp som förbereder sig.',
      'Nervositet innebär att hjärnan frisätter adrenalin och kortisol, hormoner som skärper dina sinnen och gör dig mer uppmärksam. I lagom doser gör nervositet dig faktiskt till en bättre förare. Problemet uppstår först när nervositeten blir så stark att den stör din koncentration.',
      'Forskning inom prestationspsykologi visar att elitidrottare, piloter och kirurger alla upplever nervositet inför viktiga moment. Skillnaden är att de har lärt sig tekniker för att kanalisera nervositeten — och det kan du också göra.',
    ],
  },
  {
    title: 'Vad inspektören faktiskt tittar på',
    paragraphs: [
      'En stor källa till nervositet är rädslan för det okända: vad bedöms egentligen? Inspektören tittar på din förmåga att köra säkert i verklig trafik. Det handlar om helhetsbedömning, inte enskilda småfel.',
      'Inspektören bedömer bland annat: körfältspositionering, hastighetsanpassning, trafikbeteende (blinkers, teckengivning), backspegelbeteende, väjningsplikt och förmågan att anpassa sig efter trafiksituationen. Du behöver inte köra perfekt — du behöver köra säkert.',
      'Du kan göra enstaka misstag utan att bli underkänd. Om du missar en blinkers en gång eller tar en sväng lite väl brett, är det inte automatiskt kugg. Det som leder till underkänt är upprepade säkerhetsbrister eller enstaka allvarliga fel (som att missa en stopplikt).',
      'Inspektörer är utbildade i att hantera nervösa elever. De vet att du är stressad, och de tar hänsyn till det i sin bedömning. De är inte där för att "fälla" dig — de är där för att se att du kan köra säkert.',
    ],
  },
  {
    title: 'Andningstekniker som fungerar',
    paragraphs: [
      'Andningen är det mest kraftfulla verktyget du har mot akut nervositet. När du är stressad andas du snabbt och ytligt, vilket ökar ångestkänslan. Genom att medvetet sakta ner andningen aktiverar du parasympatiska nervsystemet och lugnar kroppen.',
    ],
  },
  {
    title: 'Förberedelse som minskar nervositet',
    paragraphs: [
      'Den bästa nervdämparen är förberedelse. Ju mer förberedd du är, desto mer kontroll känner du. Här är konkreta saker du kan göra dagarna före provet:',
      'Kör provrundan: Om möjligt, övningskör i området där provet brukar genomföras. Bekanta dig med korsningar, rondeller och skyltning. Fråga din trafikskola vilka vägar som ofta används vid uppkörning.',
      'Simulera provsituationen: Be din handledare eller körskollärare att göra en "provkörning" med exakt samma upplägg som uppkörningen. Kör i 45 minuter utan prat, med handledaren som tyst passagerare.',
      'Sov ordentligt: Sömn påverkar din kognitiva förmåga enormt. Sikta på minst 7 timmar natten innan provet. Undvik koffein efter kl 14 dagen före.',
      'Ät frukost: Lågt blodsocker förstärker ångestsymptom. Ät en ordentlig frukost med långsamma kolhydrater (havregrynsgröt, fullkornsbröd) 1-2 timmar före provet.',
    ],
  },
  {
    title: 'Vanliga rädslor — avdramatiserade',
    paragraphs: [
      '"Tänk om jag glömmer allt": Din muskelminne för körning försvinner inte av nervositet. Du har övningskört i hundratals timmar. Kroppen minns även om hjärnan oroar sig.',
      '"Tänk om jag gör bort mig": Inspektören har sett tusentals nervösa elever. Det finns inget du kan göra som överraskar dem. De bedömer körning, inte personlighet.',
      '"Tänk om jag kör kugg": Ungefär 50% kör kugg på första försöket. Det är varken ovanligt eller något att skämmas för. Du bokar om, övar mer på det du behöver, och gör om det. De flesta klarar det på andra försöket.',
      '"Tänk om jag får panik": Om du känner panik under provet, säg till inspektören att du behöver stanna en stund. Det är bättre att stanna säkert och samla dig än att köra vidare med panik.',
    ],
  },
  {
    title: 'Mentala strategier från prestationspsykologin',
    paragraphs: [
      'Positiv visualisering: Kvällen innan provet, stäng ögonen och visualisera hela uppkörningen. Se dig själv köra lugnt, hantera korsningar, byta fil smidigt. Hjärnan kan inte skilja en livlig visualisering från en verklig upplevelse — du "övar" alltså även i huvudet.',
      'Reframing: Istället för att tänka "jag är nervös" — byt till "jag är laddad". Samma fysiska känsla (hjärtklappning, pirr i magen), men en positiv tolkning. Forskning visar att denna enkla omformulering förbättrar prestationen mätbart.',
      'Fokusera på processen, inte resultatet: Tänk inte "jag måste klara provet". Tänk "jag ska köra säkert i nästa korsning". Genom att bryta ner uppgiften i små bitar minskar du överväldigande stress.',
      'Power posing: Forskning antyder att att stå upprätt med breda axlar i 2 minuter innan en utmanande situation kan sänka kortisolnivåer. Gör det i bilen medan du väntar — det är gratis och kan hjälpa.',
    ],
  },
  {
    title: 'På provdagen: steg för steg',
    paragraphs: [
      'Morgonen: Vakna i god tid. Ät frukost. Undvik att plugga teori — fokusera på att vara lugn. Ta en kort promenad om du hinner.',
      'Resan dit: Kom minst 15 minuter tidigt. Att vara sen skapar onödig stress. Om du kör till provcentret med din handledare, kör bara lugnt — det är inte en övning.',
      'I väntrummet: Gör dina andningsövningar (4-7-8 eller box-andning). Undvik att prata med andra nervösa elever — nervositet smittar. Lyssna på lugn musik eller en podcast istället.',
      'I bilen: Ställ in speglar och stol som du brukar. Inspektören förklarar upplägget tydligt. Fråga om du inte förstår en instruktion. Ta dig tid att andas innan du startar motorn.',
      'Under körningen: Kör som du brukar. Prata inte om du inte vill (förutom att bekräfta instruktioner). Om du gör ett misstag, fortsätt bara. Fastna inte i tankar om vad som redan hänt.',
    ],
  },
];

const breathingTechniques = [
  {
    name: '4-7-8-metoden',
    desc: 'Andas in genom näsan i 4 sekunder. Håll andan i 7 sekunder. Andas ut genom munnen i 8 sekunder. Upprepa 3-4 gånger.',
    when: 'Bäst kvällen innan och morgonen innan provet',
  },
  {
    name: 'Box-andning (4-4-4-4)',
    desc: 'Andas in i 4 sekunder. Håll i 4 sekunder. Andas ut i 4 sekunder. Håll i 4 sekunder. Upprepa.',
    when: 'Bra i väntrummet och i bilen precis innan',
  },
  {
    name: 'Fysiologisk suck',
    desc: 'Ta två snabba inandningar genom näsan (dubbelinandning), följt av en lång, långsam utandning genom munnen. En enda repetition kan sänka stresskänslan.',
    when: 'Perfekt under körningen om stressen stiger',
  },
];

const facts = [
  { label: '80%+', sub: 'är nervösa inför provet', icon: '😰' },
  { label: '~50%', sub: 'kör kugg första gången', icon: '📊' },
  { label: '45 min', sub: 'provet varar', icon: '⏱️' },
  { label: '800 kr', sub: 'kostnad per försök', icon: '💳' },
];

export default function NervosUppkorningPage() {
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
            <div style={{ width: '36px', height: '36px', background: '#006B3F', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
            <Link href="/#demo" style={{ background: '#006B3F', color: 'white', padding: '10px 22px', borderRadius: '999px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' }}>
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
            { label: 'Körprov', href: '/korprov' },
            { label: 'Nervös inför uppkörning' },
          ]} />
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#006B3F', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>
            Stöd och tips
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 900, lineHeight: 1.05, color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.04em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Nervös inför uppkörningen? Du är inte ensam
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#5a6b62', maxWidth: '600px', margin: '0 0 40px' }}>
            Över 80% av alla elever är nervösa innan uppkörningen. Här får du konkreta andningstekniker, mentala strategier och fakta som lugnar — från psykologin och från verkligheten.
          </p>

          {/* Facts grid */}
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

      {/* First two content sections */}
      <section style={{ background: '#fff', padding: '0 20px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {sections.slice(0, 2).map((s, i) => (
            <div key={i} style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid #dceee5' }}>
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

      {/* Breathing techniques — special section */}
      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', margin: '0 0 8px', letterSpacing: '-0.02em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Andningstekniker som fungerar
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#5a6b62', margin: '0 0 24px' }}>
            Andningen är det mest kraftfulla verktyget du har mot akut nervositet. När du är stressad andas du snabbt och ytligt, vilket ökar ångestkänslan. Genom att medvetet sakta ner andningen aktiverar du parasympatiska nervsystemet.
          </p>
          <div style={{ display: 'grid', gap: '16px' }}>
            {breathingTechniques.map((bt, i) => (
              <div key={i} style={{
                background: 'white',
                border: '2px solid #dceee5',
                borderRadius: '16px',
                padding: '24px',
              }}>
                <div style={{
                  display: 'inline-block', background: '#006B3F', color: 'white',
                  fontSize: '12px', fontWeight: 700, padding: '4px 12px',
                  borderRadius: '999px', marginBottom: '12px',
                }}>
                  Teknik {i + 1}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0d1f17', margin: '0 0 8px', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  {bt.name}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#5a6b62', margin: '0 0 8px' }}>
                  {bt.desc}
                </p>
                <p style={{ fontSize: '13px', color: '#006B3F', fontWeight: 600, margin: 0 }}>
                  &#128337; {bt.when}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remaining content sections */}
      <section style={{ background: '#fff', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {sections.slice(3).map((s, i) => (
            <div key={i} style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: i < sections.length - 4 ? '1px solid #dceee5' : 'none' }}>
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

      {/* Encouragement box */}
      <section style={{ background: '#f0f7f3', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>&#128170;</div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 900, color: '#0d1f17', margin: '0 0 16px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Kom ihåg detta
          </h2>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#5a6b62', maxWidth: '560px', margin: '0 auto 16px' }}>
            Du har redan klarat den svåraste delen: att lära dig köra. Uppkörningen är bara att visa vad du redan kan. Oavsett vad som händer är det inte hela världen. Du kan alltid göra om det.
          </p>
          <p style={{ fontSize: '16px', color: '#006B3F', fontWeight: 700 }}>
            Du klarar det. Vi tror på dig.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '64px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 900, color: '#0d1f17', margin: '0 0 32px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Vanliga frågor om nervositet vid uppkörning
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
          <RelatedGuides currentPath="/nervos-uppkorning" />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 20px 80px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #006B3F 0%, #004d2d 100%)', borderRadius: '20px', padding: '40px', textAlign: 'center', color: 'white' }}>
            <div style={{ fontSize: '28px', fontWeight: 900, marginBottom: '12px', letterSpacing: '-0.03em', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Förbered dig med Huvet
            </div>
            <p style={{ fontSize: '16px', opacity: 0.85, marginBottom: '28px', maxWidth: '440px', margin: '0 auto 28px' }}>
              Bästa sättet att minska nervositet? Var välförberedd. Huvet ger dig personlig träning och svaghetsanalys så du vet att du kan det.
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
          <Link href="/vanliga-fel-korprov" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Vanliga fel körprov</Link>
          <Link href="/boka-uppkorning" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Boka uppkörning</Link>
          <Link href="/fornya-korkort" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Förnya körkort</Link>
          <Link href="/vagmarken" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Vägmärken</Link>
          <Link href="/riskutbildning" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Riskutbildning</Link>
        </div>
        <span>&copy; 2026 Huvet (huvet.se). Byggt för svenska körkortselever.</span>
      </footer>
    </div>
  );
}
