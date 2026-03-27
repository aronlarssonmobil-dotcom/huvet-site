import type { Metadata } from 'next';
import Link from 'next/link';
import TheoryChapterLayout from '../../../components/TheoryChapterLayout';

export const metadata: Metadata = {
  title: 'Körkortsteori: Första hjälpen — Komplett guide 2026 | Huvet',
  description: 'Lär dig första hjälpen vid trafikolyckor. Varna–larma–rädda, stabilt sidoläge och HLR. Livräddande kunskaper för körkortsprovet.',
  keywords: ['första hjälpen', 'första hjälpen körkort', 'varna larma rädda', 'stabilt sidoläge', 'HLR', 'hjärt-lungräddning', 'trafikolycka'],
  alternates: { canonical: 'https://huvet.se/teori/forsta-hjalpen' },
  openGraph: {
    title: 'Körkortsteori: Första hjälpen — Komplett guide 2026 | Huvet',
    description: 'Varna–larma–rädda, stabilt sidoläge och HLR. Livräddande kunskaper du behöver.',
    url: 'https://huvet.se/teori/forsta-hjalpen',
  },
};

export default function TeoriForstaHjalpen() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Vad betyder varna–larma–rädda?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Det är den grundläggande handlingsordningen vid en olycka. Först varnar du andra trafikanter (varningstriangel, varningsblinkers). Sedan larmar du 112. Sist räddar du genom att ge första hjälpen till skadade.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hur gör man HLR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'HLR (hjärt-lungräddning): 1) Kontrollera medvetande och andning. 2) Ring 112. 3) Ge 30 bröstkompressioner (5-6 cm djupa, i takt med Stayin Alive). 4) Ge 2 inblåsningar. 5) Fortsätt 30:2 tills ambulans kommer.',
        },
      },
      {
        '@type': 'Question',
        name: 'När ska man lägga någon i stabilt sidoläge?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Stabilt sidoläge används när en person är medvetslös men andas. Syftet är att hålla luftvägarna öppna och förhindra att personen kvävs om den kräks. Kontrollera andningen regelbundet.',
        },
      },
      {
        '@type': 'Question',
        name: 'Var ska varningstriangeln placeras?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Varningstriangeln ska placeras minst 100 meter före olycksplatsen på landsväg och 200 meter på motorväg. I tätort räcker det med ca 50 meter. Placera den synligt och med rätt sida mot trafiken.',
        },
      },
      {
        '@type': 'Question',
        name: 'Ska man flytta en skadad person från bilen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Flytta bara en skadad person om det finns direkt livsfara — till exempel brand eller risk för explosion. Annars låt personen sitta kvar och vänta på ambulans. Felaktig förflyttning kan förvärra skador, särskilt rygg- och nackskador.',
        },
      },
    ],
  };

  return (
    <TheoryChapterLayout currentSlug="forsta-hjalpen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <h1 style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '0.5rem', color: '#0d1f17' }}>
        Första hjälpen — Livräddande kunskaper
      </h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Kapitel 7 av 7 · Uppdaterad mars 2026
      </p>

      <p>
        Om en trafikolycka inträffar kan dina handlingar under de första minuterna vara skillnaden
        mellan liv och död. Du behöver inte vara sjukvårdspersonal — men du behöver veta grunderna.
        Första hjälpen är ett obligatoriskt ämne på <Link href="/ovningsprov" style={{ color: '#1DB954', fontWeight: 500 }}>teoriprovet</Link> och
        en del av <Link href="/teori/sakerhet" style={{ color: '#1DB954', fontWeight: 500 }}>trafiksäkerheten</Link>.
      </p>

      <h2>Varna — Larma — Rädda</h2>
      <p>
        Detta är den grundläggande handlingsordningen vid alla olyckor. Lär dig den utantill.
      </p>

      <h3>1. VARNA</h3>
      <p>
        Det första du gör är att skydda olycksplatsen så att fler olyckor inte inträffar.
      </p>
      <ul>
        <li>Slå på <strong>varningsblinkers</strong> på din egen bil</li>
        <li>Placera ut <strong>varningstriangel</strong></li>
        <li>Stäng av tändningen på den havererade bilen om möjligt</li>
      </ul>

      <h3>Var ska varningstriangeln placeras?</h3>
      <table className="theory-table">
        <thead>
          <tr>
            <th>Plats</th>
            <th>Avstånd före olyckan</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>I tätort</td><td>Minst 50 meter</td></tr>
          <tr><td>Landsväg</td><td>Minst 100 meter</td></tr>
          <tr><td>Motorväg</td><td>Minst 200 meter</td></tr>
        </tbody>
      </table>

      <div className="theory-info-box">
        <p>💡 Placera triangeln synligt, med den reflekterande sidan mot trafiken. Bär reflexväst om du har — du vill synas.</p>
      </div>

      <h3>2. LARMA</h3>
      <p>
        Ring <strong>112</strong> (SOS Alarm). Operatören behöver veta:
      </p>
      <ul>
        <li><strong>Var</strong> olyckan har hänt (vägnummer, stad, landmärken)</li>
        <li><strong>Vad</strong> som har hänt (kollision, avåkning, brand)</li>
        <li><strong>Hur många</strong> som är skadade</li>
        <li><strong>Vilken typ</strong> av skador (medvetslös, blödning, klämd)</li>
        <li>Ditt <strong>telefonnummer</strong> (för återuppringning)</li>
      </ul>

      <p>
        Lägg <strong>inte på</strong> förrän operatören säger att du kan. De kan ge dig instruktioner
        för livräddande åtgärder medan ambulansen är på väg.
      </p>

      <h3>3. RÄDDA</h3>
      <p>
        Ge första hjälpen efter bästa förmåga. Prioriteringsordning:
      </p>
      <ol>
        <li><strong>Andning:</strong> Fungerar andningen? Om inte → HLR</li>
        <li><strong>Blödning:</strong> Stoppa kraftiga blödningar med tryckförband</li>
        <li><strong>Chock:</strong> Håll den skadade varm och lugn</li>
      </ol>

      <div className="theory-warning-box">
        <p>⚠️ Flytta ALDRIG en skadad person om det inte finns direkt livsfara (brand, explosion, drunkning). Felaktig förflyttning kan orsaka permanent skada, särskilt vid nacke/rygg.</p>
      </div>

      <h2>Stabilt sidoläge</h2>
      <p>
        Stabilt sidoläge används när en person är <strong>medvetslös men andas</strong>. Syftet är att
        hålla luftvägarna öppna och förhindra kvävning om personen kräks.
      </p>

      <h3>Så gör du — steg för steg</h3>
      <ol>
        <li><strong>Kontrollera medvetande:</strong> Ropa och skaka försiktigt i axlarna</li>
        <li><strong>Kontrollera andning:</strong> Böj huvudet bakåt (frigör luftvägarna), titta, lyssna och känn i max 10 sekunder</li>
        <li>Om personen andas men inte är vid medvetande → stabilt sidoläge:</li>
        <li><strong>Lägg armen närmast dig</strong> i rät vinkel mot kroppen</li>
        <li><strong>Lägg den bortre handen</strong> mot den närmaste kinden</li>
        <li><strong>Böj det bortre knäet</strong> och rulla personen mot dig</li>
        <li><strong>Justera</strong> så att huvudet är bakåtböjt med öppen mun nedåt</li>
        <li><strong>Kontrollera andningen regelbundet</strong> (minst varannan minut)</li>
      </ol>

      <div className="theory-info-box">
        <p>💡 Det viktigaste: håll luftvägarna öppna. Böj huvudet bakåt och se till att munnen pekar nedåt så att eventuell kräkning rinner ut.</p>
      </div>

      <h2>HLR — Hjärt-lungräddning</h2>
      <p>
        HLR ger du när en person är <strong>medvetslös och inte andas normalt</strong>.
        Varje minut utan HLR minskar chansen att överleva med ca 10%. Genom att starta HLR
        direkt kan du dubblera eller tredubbla överlevnadschansen.
      </p>

      <h3>Så gör du HLR</h3>
      <ol>
        <li><strong>Kontrollera medvetande</strong> — ropa, skaka</li>
        <li><strong>Kontrollera andning</strong> — böj huvudet bakåt, titta-lyssna-känn i max 10 sek</li>
        <li>Ingen normal andning → <strong>Ring 112</strong> (sätt på högtalare)</li>
        <li><strong>30 bröstkompressioner:</strong>
          <ul>
            <li>Lägg handroten mitt på bröstkorgen</li>
            <li>Lägg andra handen ovanpå</li>
            <li>Raka armar, tryck 5–6 cm djupt</li>
            <li>Frekvens: 100–120 kompressioner/minut (tänk takten i &quot;Stayin&apos; Alive&quot;)</li>
          </ul>
        </li>
        <li><strong>2 inblåsningar:</strong>
          <ul>
            <li>Böj huvudet bakåt</li>
            <li>Lyft hakan</li>
            <li>Kläm ihop näsan</li>
            <li>Blås in i munnen tills bröstkorgen höjer sig</li>
          </ul>
        </li>
        <li><strong>Fortsätt 30:2</strong> tills ambulans tar över eller personen börjar andas</li>
      </ol>

      <div className="theory-warning-box">
        <p>⚠️ Dålig HLR är bättre än ingen HLR. Om du inte vågar blåsa — gör bara kompressioner. Det räddar fortfarande liv.</p>
      </div>

      <h3>Hjärtstartare (AED)</h3>
      <p>
        En hjärtstartare (AED) kan återställa normal hjärtrytm vid hjärtstopp. De finns på
        många offentliga platser — köpcentra, flygplatser, idrottsanläggningar. Maskinen
        ger <strong>talade instruktioner</strong> steg för steg. Du behöver ingen utbildning
        — den är gjord för att vem som helst ska kunna använda den.
      </p>
      <ol>
        <li>Slå på hjärtstartaren</li>
        <li>Fäst elektroderna på bar hud (bröstet) enligt bilden på plattorna</li>
        <li>Följ maskinens instruktioner</li>
        <li>Rör INTE personen när maskinen analyserar eller ger stöt</li>
        <li>Fortsätt HLR mellan stötar</li>
      </ol>

      <h2>Blödningar</h2>
      <p>
        Vid kraftig blödning kan en person förblöda på minuter. Stoppa blödningen genom:
      </p>
      <ul>
        <li><strong>Tryck:</strong> Lägg ett tryckförband (ren trasa/kompressor) direkt mot såret och tryck hårt</li>
        <li><strong>Höjd:</strong> Höj den blödande kroppsdelen ovanför hjärthöjd om möjligt</li>
        <li><strong>Stöd:</strong> Låt den skadade ligga ner för att minska blodtrycket</li>
      </ul>

      <h2>Chock</h2>
      <p>
        Chock kan uppstå vid allvarliga skador, stora blödningar eller kraftig smärta. Tecken:
      </p>
      <ul>
        <li>Blek, kall, fuktig hud</li>
        <li>Snabb, svag puls</li>
        <li>Förvirring, rastlöshet</li>
        <li>Illamående</li>
      </ul>
      <p>
        Vid chock: <strong>lägg personen ner med benen högt</strong> (om inga benskador),
        håll personen <strong>varm</strong> med filt eller jacka, <strong>lugna och prata</strong>.
        Ge aldrig mat eller dryck.
      </p>

      <h2>Sammanfattning</h2>
      <p>
        Första hjälpen kan sammanfattas i tre steg: <strong>varna, larma, rädda</strong>.
        Lär dig stabilt sidoläge (medvetslös men andas) och HLR (medvetslös, andas inte).
        Var inte rädd att agera — dålig hjälp är bättre än ingen hjälp. Dessa frågor
        kommer på teoriprovet, men ännu viktigare: de kan rädda liv på riktigt.
      </p>

      <p>
        Du har nu gått igenom alla 7 kapitel av körkortsteori! Gå tillbaka
        till <Link href="/teori" style={{ color: '#1DB954', fontWeight: 500 }}>översikten</Link> eller
        testa dina kunskaper med ett övningsprov.
      </p>
    </TheoryChapterLayout>
  );
}
