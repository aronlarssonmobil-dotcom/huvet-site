import type { Metadata } from 'next';
import Link from 'next/link';
import TheoryChapterLayout from '../../../components/TheoryChapterLayout';

export const metadata: Metadata = {
  title: 'Körkortsteori: Säkerhet — Komplett guide 2026 | Huvet',
  description: 'Lär dig om trafiksäkerhet för körkortsprovet. Bilbälte, krockkudde, bilbarnstol, alkohol, droger och trötthet. Allt som räddar liv i trafiken.',
  keywords: ['trafiksäkerhet', 'bilbälte', 'krockkudde', 'bilbarnstol körkort', 'rattfylleri', 'promillegräns', 'trötthet trafik', 'nollvisionen'],
  alternates: { canonical: 'https://huvet.se/teori/sakerhet' },
  openGraph: {
    title: 'Körkortsteori: Säkerhet — Komplett guide 2026 | Huvet',
    description: 'Bilbälte, krockkudde, alkohol och trötthet. Allt om trafiksäkerhet för körkortet.',
    url: 'https://huvet.se/teori/sakerhet',
  },
};

export default function TeoriSakerhet() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Vad är promillegränsen i Sverige?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gränsen är 0,2 promille. Över 0,2 promille räknas som rattfylleri. Över 1,0 promille räknas som grovt rattfylleri, vilket kan ge fängelse. Droger har nolltolerans — all påverkan är förbjuden.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hur länge ska barn sitta i bilbarnstol?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Barn under 135 cm måste använda bilbarnstol eller bälteskudde. Trafikverket rekommenderar att barn åker bakåtvänt så länge som möjligt, helst till 4–5 års ålder.',
        },
      },
      {
        '@type': 'Question',
        name: 'Vad är Nollvisionen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nollvisionen är Sveriges långsiktiga mål att ingen ska dödas eller skadas allvarligt i trafiken. Den antogs av riksdagen 1997 och innebär att vägsystemet ska utformas så att mänskliga misstag inte leder till dödsfall.',
        },
      },
      {
        '@type': 'Question',
        name: 'Varför är trötthet farligt vid bilkörning?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trötthet försämrar reaktionsförmåga, omdöme och uppmärksamhet lika mycket som alkohol. En person som varit vaken i 18 timmar kör ungefär som någon med 0,5 promille. Att somna vid ratten orsakar ca 30% av alla dödsolyckor.',
        },
      },
    ],
  };

  return (
    <TheoryChapterLayout currentSlug="sakerhet">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <h1 style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '0.5rem', color: '#0d1f17' }}>
        Säkerhet — Det som räddar liv
      </h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Kapitel 5 av 7 · Uppdaterad mars 2026
      </p>

      <p>
        Sverige har Nollvisionen — målet att ingen ska dödas eller skadas allvarligt i trafiken.
        Det kräver att alla tar sitt ansvar. Säkerhetskapitlet är ett av de viktigaste i hela
        körkortsteorin — frågorna om bilbälte, alkohol och trötthet dyker garanterat upp
        på <Link href="/ovningsprov" style={{ color: '#006B3F', fontWeight: 500 }}>teoriprovet</Link>.
      </p>

      <h2>Nollvisionen</h2>
      <p>
        Nollvisionen antogs av riksdagen 1997 och är grunden för svensk trafiksäkerhetspolitik.
        Tanken är att vägsystemet ska utformas så att <strong>mänskliga misstag inte leder till dödsfall
        eller allvarliga skador</strong>. Det innebär att ansvaret delas: förare ska följa regler, men
        vägar och fordon ska vara designade för att skydda oss när vi gör fel.
      </p>

      <h2>Bilbälte</h2>
      <p>
        Bilbältet är det enskilt viktigaste säkerhetssystemet i bilen. Det minskar risken för
        dödsfall i en krock med ungefär <strong>50%</strong>. Att använda bälte är lagkrav för alla
        i bilen — förare och passagerare.
      </p>

      <h3>Så fungerar bältet</h3>
      <p>
        Vid en krock med 50 km/h kastas din kropp framåt med en kraft motsvarande din vikt multiplicerad
        med 20–30 gånger. Utan bälte slungas du mot ratten, vindrutan eller framstolen. Bältet fördelar
        kraften över bröstkorgen och höfterna — kroppens starkaste delar.
      </p>

      <div className="theory-info-box">
        <p>💡 Bältet ska sitta tätt. Inga tjocka jackor under bältet — det skapar slack som minskar skyddet drastiskt.</p>
      </div>

      <h3>Vem ansvarar?</h3>
      <ul>
        <li><strong>Föraren</strong> ansvarar för att barn under 15 år har bälte</li>
        <li><strong>Passagerare över 15 år</strong> ansvarar själva för sitt bälte</li>
        <li>Föraren kan bötfällas om barn saknar bälte/bilbarnstol</li>
      </ul>

      <h2>Krockkuddar</h2>
      <p>
        Krockkuddar (airbags) är utformade att fungera <strong>tillsammans med bilbältet</strong>.
        Vid en kraftig kollision blåses kudden upp på millisekunder och fångar upp huvudet och
        överkroppen mjukt.
      </p>

      <div className="theory-warning-box">
        <p>⚠️ Utan bälte kan krockkudden faktiskt skada dig — din kropp slungas framåt och träffar den uppblåsta kudden med enorm kraft. Bälte + krockkudde = bästa skyddet.</p>
      </div>

      <p>
        Moderna bilar har krockkuddar på flera ställen: framför förare och passagerare,
        i sidorna (dörrar/säten), gardinkrockkuddar i taket, och ibland knäkrockkuddar.
        Ju fler, desto bättre — men bältet är fortfarande grunden.
      </p>

      <h2>Bilbarnstol</h2>
      <p>
        Barn är inte små vuxna — deras kroppar behöver anpassat skydd. Reglerna:
      </p>
      <ul>
        <li>Barn under <strong>135 cm</strong> måste använda bilbarnstol, bälteskudde eller liknande</li>
        <li>Barn ska åka <strong>bakåtvänt så länge som möjligt</strong> (Trafikverket rekommenderar till 4–5 år)</li>
        <li>Spädbarn i babyskydd — alltid bakåtvänt</li>
        <li>Barn 4–10 år i bälteskudde eller framåtvänd stol med bälte</li>
        <li>Krockkudden på <strong>passagerarsidan måste stängas av</strong> om barnet sitter framåt med bakåtvänd stol framför</li>
      </ul>

      <div className="theory-info-box">
        <p>💡 I en frontalkollision i 50 km/h väger ett barn på 20 kg plötsligt 600 kg. Utan bilbarnstol är det omöjligt att hålla fast barnet.</p>
      </div>

      <h2>Alkohol</h2>
      <p>
        Alkohol är en av de vanligaste orsakerna till allvarliga olyckor i trafiken. I Sverige gäller:
      </p>

      <table className="theory-table">
        <thead>
          <tr>
            <th>Promille</th>
            <th>Klassificering</th>
            <th>Straff</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>0,2–1,0 ‰</td><td>Rattfylleri</td><td>Böter eller fängelse upp till 6 mån</td></tr>
          <tr><td>Över 1,0 ‰</td><td>Grovt rattfylleri</td><td>Fängelse upp till 2 år</td></tr>
        </tbody>
      </table>

      <h3>Hur påverkar alkohol körningen?</h3>
      <p>
        Redan vid låga promillehalter försämras:
      </p>
      <ul>
        <li><strong>Omdömet</strong> — du tar risker du normalt inte skulle ta</li>
        <li><strong>Reaktionsförmågan</strong> — det tar längre tid att reagera</li>
        <li><strong>Synfältet</strong> — tunnelseende, sämre mörkerseende</li>
        <li><strong>Koordinationen</strong> — svårare att styra och hantera pedaler</li>
        <li><strong>Självkritiken</strong> — du tror att du kör bättre än du gör</li>
      </ul>

      <p>
        Det finns <strong>ingen genväg</strong> att nyktra till. Tid är det enda som hjälper.
        Kaffe, dusch eller frisk luft gör dig inte nykter — de gör dig bara mer vaken.
        En standarddrink (ett glas vin, en öl, en drink) tar ca 1,5–2 timmar att förbränna.
      </p>

      <h2>Droger</h2>
      <p>
        I Sverige gäller <strong>nolltolerans</strong> för narkotika vid bilkörning. Det spelar ingen
        roll om du "känner dig opåverkad" — har du narkotika i blodet är det rattfylleri. Det gäller
        även cannabis som kan finnas kvar i kroppen i veckor. Vissa läkemedel påverkar också
        körförmågan — kontrollera alltid med läkare eller farmaceut.
      </p>

      <div className="theory-warning-box">
        <p>⚠️ Varningstriangel på läkemedelsförpackningen = kan påverka körförmågan. Kontrollera ALLTID bipacksedeln.</p>
      </div>

      <h2>Trötthet</h2>
      <p>
        Trötthet är lika farligt som alkohol — kanske farligare, eftersom man inte märker det förrän
        det är för sent. Att vara vaken i <strong>18 timmar</strong> ger samma effekt på körförmågan
        som <strong>0,5 promille alkohol</strong>. Att ha varit vaken i 24 timmar motsvarar 1,0 promille.
      </p>

      <h3>Varningssignaler</h3>
      <ul>
        <li>Du gäspar ofta</li>
        <li>Dina ögon känns tunga</li>
        <li>Du kör över kantlinjen</li>
        <li>Du kommer inte ihåg de senaste kilometrarna</li>
        <li>Du har svårt att hålla jämn hastighet</li>
      </ul>

      <h3>Vad gör du?</h3>
      <p>
        Det enda som hjälper mot trötthet är <strong>sömn</strong>. Öppna fönstret, hög musik och
        kaffe är tillfälliga lösningar som inte löser problemet. Bästa strategin:
      </p>
      <ol>
        <li>Stanna på en säker plats</li>
        <li>Drick en kopp kaffe (koffein tar 20 min att verka)</li>
        <li>Ta en powernap på 15–20 minuter</li>
        <li>När du vaknar har koffeinet slagit in och du kan köra vidare</li>
      </ol>

      <h3>Riskfaktorer</h3>
      <p>
        De farligaste tiderna för trötthetsolyckor är <strong>kl. 02–06</strong> och <strong>kl. 14–16</strong> —
        det är då kroppens naturliga dygnsrytm gör dig sömnig. Monotona vägar (motorväg, raka landsvägar)
        ökar risken ytterligare. Ca 30% av alla dödsolyckor beror på att föraren somnat vid ratten.
      </p>

      <h2>Sammanfattning</h2>
      <p>
        Säkerhet i trafiken handlar om bälte, krockkuddar, barnstolar — och framförallt om ditt
        eget beteende. Kör aldrig påverkad, kör aldrig trött, och se alltid till att alla i bilen
        har bälte. Dessa frågor är centrala på provet. I nästa kapitel lär du dig
        om <Link href="/teori/korning" style={{ color: '#006B3F', fontWeight: 500 }}>körning i olika förhållanden</Link> —
        mörker, halt väglag, regn och dimma.
      </p>
    </TheoryChapterLayout>
  );
}
