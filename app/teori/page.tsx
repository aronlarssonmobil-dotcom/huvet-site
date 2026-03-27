import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Körkortsteori — Gratis komplett guide 2026 | Huvet',
  description: 'Lär dig all körkortsteori gratis. 7 kapitel: trafikregler, vägmärken, fordonskännedom, miljö, säkerhet, körning och första hjälpen. Uppdaterad 2026.',
  keywords: ['körkortsteori', 'körkortsteori gratis', 'teori körkort', 'körkortsteori 2026', 'lära sig körkortsteori', 'teoribok körkort'],
  alternates: { canonical: 'https://huvet.se/teori' },
  openGraph: {
    title: 'Körkortsteori — Gratis komplett guide 2026 | Huvet',
    description: 'All körkortsteori samlad. 7 kapitel med allt du behöver för att klara teoriprovet.',
    url: 'https://huvet.se/teori',
  },
};

const chapters = [
  {
    num: 1,
    slug: 'trafikregler',
    title: 'Trafikregler',
    desc: 'Hastighetsbegränsningar, högerregeln, stopplikt, väjningsplikt, omkörning och parkering.',
    icon: '🚦',
    color: '#1DB954',
  },
  {
    num: 2,
    slug: 'vagmarken',
    title: 'Vägmärken',
    desc: 'Alla kategorier: varning, förbud, påbud, anvisning och tilläggstavlor. 92 vägmärken.',
    icon: '🪧',
    color: '#D32F2F',
  },
  {
    num: 3,
    slug: 'fordonskanndom',
    title: 'Fordonskännedom',
    desc: 'Bromsar, däck, belysning, motor och säkerhetssystem du måste kunna.',
    icon: '🔧',
    color: '#1565C0',
  },
  {
    num: 4,
    slug: 'miljo',
    title: 'Miljö & Eco-driving',
    desc: 'Eco-driving, utsläpp, bränsleförbrukning och miljözoner i Sverige.',
    icon: '🌿',
    color: '#2E7D32',
  },
  {
    num: 5,
    slug: 'sakerhet',
    title: 'Säkerhet',
    desc: 'Bilbälte, krockkudde, bilbarnstol, alkohol, droger och trötthet.',
    icon: '🛡️',
    color: '#E65100',
  },
  {
    num: 6,
    slug: 'korning',
    title: 'Körning i olika förhållanden',
    desc: 'Mörker, halt väglag, regn, dimma, stad vs motorväg.',
    icon: '🌧️',
    color: '#37474F',
  },
  {
    num: 7,
    slug: 'forsta-hjalpen',
    title: 'Första hjälpen',
    desc: 'Varna–larma–rädda, stabilt sidoläge och HLR. Livräddande kunskaper.',
    icon: '🏥',
    color: '#C62828',
  },
];

export default function TeoriOverviewPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Vad ingår i körkortsteori?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Körkortsteori omfattar trafikregler, vägmärken, fordonskännedom, miljö och eco-driving, trafiksäkerhet, körning i olika förhållanden samt första hjälpen. Alla dessa ämnen testas på teoriprovet.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kan man lära sig körkortsteori gratis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja! På Huvet.se finns all körkortsteori gratis uppdelad i 7 kapitel. Du kan läsa, öva med frågor och testa dig själv utan att betala.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hur lång tid tar det att lära sig körkortsteori?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'De flesta behöver 2-4 veckor av regelbunden plugg. Med Huvets strukturerade kapitel och övningsprov kan du effektivt gå igenom all teori steg för steg.',
        },
      },
      {
        '@type': 'Question',
        name: 'Vilka ämnen kommer på teoriprovet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Teoriprovet täcker trafikregler, vägmärken, fordonskännedom, miljö, trafiksäkerhet, körning i olika förhållanden och första hjälpen. Provet har 65 frågor och du behöver minst 52 rätt.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <style>{`
        .teori-hero {
          background: linear-gradient(135deg, #1DB954 0%, #004D2C 60%, #003D23 100%);
          padding: 5.5rem 1.5rem 3rem;
          color: #fff;
        }
        .teori-hero-inner {
          max-width: 860px;
          margin: 0 auto;
        }
        .teori-hero h1 {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          line-height: 1.15;
          margin: 0.75rem 0 1rem;
        }
        .teori-hero p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.85);
          max-width: 600px;
        }
        .teori-grid {
          max-width: 860px;
          margin: 0 auto;
          padding: 2.5rem 1.5rem 4rem;
          display: grid;
          gap: 1rem;
        }
        .teori-card {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          padding: 1.5rem;
          border: 1px solid #e8e8e8;
          border-radius: 16px;
          text-decoration: none;
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .teori-card:hover {
          border-color: #1DB954;
          box-shadow: 0 4px 20px rgba(0,107,63,0.08);
          transform: translateY(-2px);
        }
        .teori-card-icon {
          font-size: 2rem;
          flex-shrink: 0;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
        }
        .teori-card-num {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 0.25rem;
        }
        .teori-card-title {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #0d1f17;
          margin-bottom: 0.35rem;
        }
        .teori-card-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #666;
        }
        .teori-bottom-cta {
          max-width: 860px;
          margin: 0 auto 3rem;
          padding: 0 1.5rem;
        }
        .teori-bottom-cta-inner {
          background: linear-gradient(135deg, #1DB954, #1DB954);
          padding: 2.5rem;
          border-radius: 16px;
          text-align: center;
        }
        .teori-bottom-cta-inner h2 {
          color: #fff;
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 1.5rem;
          margin: 0 0 0.75rem;
        }
        .teori-bottom-cta-inner p {
          color: rgba(255,255,255,0.85);
          margin: 0 0 1.5rem;
          font-size: 1rem;
        }
        .teori-cta-btn {
          display: inline-block;
          background: #fff;
          color: #1DB954;
          padding: 0.85rem 2rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .teori-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }
        @media (max-width: 600px) {
          .teori-hero { padding: 5rem 1rem 2rem; }
          .teori-grid { padding: 1.5rem 1rem 3rem; }
          .teori-card { flex-direction: column; gap: 0.75rem; }
        }
      `}</style>

      <SiteHeader />

      <div className="teori-hero">
        <div className="teori-hero-inner">
          <Breadcrumbs items={[{ label: 'Huvet', href: '/' }, { label: 'Körkortsteori' }]} />
          <h1>Körkortsteori — Komplett guide 2026</h1>
          <p>
            Allt du behöver kunna för att klara teoriprovet, samlat i 7 kapitel. Gratis, uppdaterat och
            strukturerat för effektivt lärande.
          </p>
        </div>
      </div>

      <div className="teori-grid">
        {chapters.map((ch) => (
          <Link key={ch.slug} href={`/teori/${ch.slug}`} className="teori-card">
            <div
              className="teori-card-icon"
              style={{ background: `${ch.color}12` }}
            >
              {ch.icon}
            </div>
            <div>
              <div className="teori-card-num" style={{ color: ch.color }}>
                Kapitel {ch.num}
              </div>
              <div className="teori-card-title">{ch.title}</div>
              <div className="teori-card-desc">{ch.desc}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="teori-bottom-cta">
        <div className="teori-bottom-cta-inner">
          <h2>Testa dina kunskaper</h2>
          <p>Gör vårt gratis övningsprov och se hur redo du är för körkortsprovet.</p>
          <Link href="/ovningsprov" className="teori-cta-btn">
            Gör gratis övningsprov →
          </Link>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
