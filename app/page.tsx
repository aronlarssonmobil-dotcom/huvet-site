import QuizDemo from "@/components/QuizDemo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProgressDashboard from "@/components/ProgressDashboard";
import Link from "next/link";
import Image from "next/image";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Huvet",
    url: "https://huvet.se",
    description: "Klara körkortsprovet första gången med Huvet. 450+ teorifrågor, vägmärken och övningsprov.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://huvet.se/ovningsprov",
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Huvet",
    url: "https://huvet.se",
    logo: "https://huvet.se/logo.svg",
    sameAs: [],
    description: "Sveriges smartaste körkortsutbildning online. Öva teoriprov med 450+ frågor och klara provet första gången.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Körkortsteoriprov — Övning med Huvet",
    description: "Komplett digital förberedelse för Sveriges körkortsteoriprov. 450+ frågor inom alla kategorier: trafikregler, vägmärken, väjningsplikt, riskbeteende och fordon.",
    provider: {
      "@type": "Organization",
      name: "Huvet",
      url: "https://huvet.se",
    },
    educationalLevel: "Beginner",
    inLanguage: "sv",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "SEK",
      availability: "https://schema.org/InStock",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT20H",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Hur många frågor är det på teoriprovet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Teoriprovet för B-körkort innehåller 70 frågor. Du behöver minst 52 rätt för att bli godkänd. Provet tar 50 minuter.",
        },
      },
      {
        "@type": "Question",
        name: "Är Huvet gratis?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, Huvet är helt gratis att använda. Du kan öva med 450+ teorifrågor, vägmärken och övningsprov utan kostnad.",
        },
      },
      {
        "@type": "Question",
        name: "Hur länge behöver man plugga för teoriprovet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "De flesta behöver 2-4 veckor med daglig övning (15-30 min/dag). Med Huvet kan du fokusera på dina svaga områden och bli redo snabbare.",
        },
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      {structuredData.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      <style>{`
        /* ── HERO ── */
        .hero {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 700px;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
        }
        .hero-bg img {
          object-fit: cover;
          object-position: center center;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.65) 100%);
        }
        .hero-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 1.5rem;
          text-align: center;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          color: #fff;
          padding: 0.45rem 1.25rem;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255,255,255,0.2);
        }
        .hero-badge .dot {
          width: 8px;
          height: 8px;
          background: #00C853;
          border-radius: 50%;
        }
        .hero-title {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.08;
          margin: 0 0 1rem;
          text-shadow: 0 2px 20px rgba(0,0,0,0.3);
          letter-spacing: -1px;
        }
        .hero-title .green {
          color: #00E676;
        }
        .hero-sub {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.8);
          margin: 0 0 2.5rem;
          max-width: 520px;
          line-height: 1.7;
        }
        .hero-ctas {
          display: flex;
          gap: 1rem;
          align-items: center;
          margin-bottom: 3rem;
        }
        .btn-hero {
          background: #00C853;
          color: #fff;
          padding: 1rem 2.25rem;
          border-radius: 14px;
          font-size: 1rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
          font-family: var(--font-inter), 'Inter', sans-serif;
          display: inline-block;
        }
        .btn-hero:hover {
          background: #00E676;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0,200,83,0.35);
        }
        .btn-ghost {
          color: #fff;
          padding: 1rem 1.5rem;
          font-size: 1rem;
          font-weight: 500;
          text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.3);
          border-radius: 14px;
          transition: all 0.2s;
          display: inline-block;
        }
        .btn-ghost:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.5);
        }
        .hero-stats {
          display: flex;
          gap: 3rem;
        }
        .hero-stat {
          text-align: center;
        }
        .hero-stat-num {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
        }
        .hero-stat-num .accent {
          color: #00E676;
        }
        .hero-stat-label {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.6);
          margin-top: 0.2rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* ── QUIZ SECTION ── */
        .quiz-section {
          padding: 5rem 2.5rem;
          background: #fafafa;
        }
        .quiz-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .quiz-layout {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 3rem;
          align-items: center;
        }
        .quiz-info h2 {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 1rem;
          letter-spacing: -0.5px;
        }
        .quiz-info p {
          color: #666;
          line-height: 1.7;
          margin: 0 0 1.5rem;
        }
        .quiz-features {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }
        .quiz-feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: #444;
        }
        .quiz-feature .check {
          width: 24px;
          height: 24px;
          background: #E8F5E9;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00C853;
          font-size: 0.75rem;
          flex-shrink: 0;
        }

        /* ── SECTIONS ── */
        .section-wrap {
          padding: 5rem 2.5rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        .section-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .section-title {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 0.5rem;
          letter-spacing: -0.5px;
        }
        .section-sub {
          color: #888;
          font-size: 0.95rem;
          margin: 0;
        }

        /* ── CATEGORIES ── */
        .cat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .cat-card {
          padding: 1.75rem;
          border-radius: 16px;
          background: #fafafa;
          border: 1px solid #f0f0f0;
          transition: all 0.2s;
          cursor: pointer;
          text-decoration: none;
          color: inherit;
          display: block;
        }
        .cat-card:hover {
          transform: translateY(-4px);
          background: #fff;
          box-shadow: 0 8px 30px rgba(0,0,0,0.06);
          border-color: #e0e0e0;
        }
        .cat-icon {
          font-size: 1.75rem;
          margin-bottom: 1rem;
        }
        .cat-name {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          margin-bottom: 0.35rem;
        }
        .cat-desc {
          color: #888;
          font-size: 0.8rem;
          line-height: 1.6;
        }
        .cat-count {
          display: inline-block;
          margin-top: 0.75rem;
          font-size: 0.7rem;
          font-weight: 600;
          color: #00C853;
          background: #E8F5E9;
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
        }

        /* ── JOURNEY ── */
        .journey {
          padding: 5rem 2.5rem;
          background: #111;
          color: #fff;
        }
        .journey-inner {
          max-width: 800px;
          margin: 0 auto;
        }
        .journey-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .journey-title {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 0.5rem;
        }
        .journey-sub {
          color: #666;
          font-size: 0.95rem;
          margin: 0;
        }
        .journey-steps {
          position: relative;
        }
        .journey-line {
          position: absolute;
          left: 20px;
          top: 10px;
          bottom: 10px;
          width: 2px;
          background: #222;
        }
        .journey-step {
          display: flex;
          gap: 1.75rem;
          padding: 1.25rem 0;
          position: relative;
        }
        .step-dot {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 700;
          z-index: 1;
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
        }
        .step-dot.done {
          background: #00C853;
          color: #fff;
        }
        .step-dot.next {
          background: #222;
          color: #00C853;
          border: 2px solid #00C853;
        }
        .step-title {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }
        .step-desc {
          color: #777;
          font-size: 0.82rem;
          line-height: 1.6;
        }

        /* ── STATS BAR ── */
        .stats-bar {
          padding: 2.5rem 2rem;
          background: #111;
          text-align: center;
        }
        .stats-bar-inner {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .stats-bar-item {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .stats-bar-item .num {
          color: #00E676;
          font-weight: 700;
        }
        .stats-bar-sep {
          color: #333;
          font-size: 1.2rem;
          user-select: none;
        }

        /* ── TRUST BADGES ── */
        .trust-badges {
          padding: 2rem 2rem;
          background: #fafafa;
          border-bottom: 1px solid #f0f0f0;
        }
        .trust-badges-inner {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .trust-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.82rem;
          font-weight: 500;
          color: #555;
        }
        .trust-badge-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: #E8F5E9;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* ── REVIEWS ── */
        .reviews {
          padding: 5rem 2.5rem;
          background: #fafafa;
        }
        .reviews-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .review-card {
          background: #fff;
          border-radius: 16px;
          padding: 1.75rem;
          border: 1px solid #f0f0f0;
          transition: all 0.25s ease;
        }
        .review-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.08);
          border-color: #e0e0e0;
        }
        .review-stars {
          display: flex;
          gap: 2px;
          margin-bottom: 0.75rem;
        }
        .review-text {
          font-size: 0.85rem;
          line-height: 1.7;
          color: #555;
          margin-bottom: 1rem;
        }
        .review-passed {
          font-size: 0.72rem;
          font-weight: 600;
          color: #00C853;
          background: #E8F5E9;
          display: inline-block;
          padding: 0.2rem 0.55rem;
          border-radius: 6px;
          margin-bottom: 0.75rem;
        }
        .review-author {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .review-avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #E8F5E9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 700;
          color: #2E7D32;
        }
        .review-name {
          font-weight: 600;
          font-size: 0.78rem;
        }
        .review-meta {
          font-size: 0.68rem;
          color: #999;
        }

        /* ── CTA ── */
        .cta-section {
          padding: 5rem 2.5rem;
        }
        .cta-inner {
          max-width: 800px;
          margin: 0 auto;
          background: #111;
          border-radius: 24px;
          padding: 4rem 3rem;
          text-align: center;
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        .cta-glow {
          position: absolute;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,200,83,0.12), transparent 70%);
          top: -80px;
          right: -80px;
        }
        .cta-title {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
          margin: 0 0 0.75rem;
          position: relative;
        }
        .cta-desc {
          color: #777;
          margin: 0 0 2rem;
          font-size: 0.9rem;
          position: relative;
        }
        .cta-btn {
          background: #00C853;
          color: #fff;
          padding: 1rem 2.5rem;
          border-radius: 14px;
          font-size: 0.95rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
          font-family: var(--font-inter), 'Inter', sans-serif;
          display: inline-block;
          text-decoration: none;
        }
        .cta-btn:hover {
          background: #00E676;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0,200,83,0.3);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .hero-stats { gap: 1.5rem; }
          .hero-stat-num { font-size: 1.5rem; }
          .hero-ctas { flex-direction: column; }
          .quiz-layout { grid-template-columns: 1fr; }
          .cat-grid { grid-template-columns: 1fr; }
          .reviews-grid { grid-template-columns: 1fr; }
          .stats-bar-inner { gap: 1rem; }
          .stats-bar-item { font-size: 0.9rem; }
          .trust-badges-inner { gap: 1rem; }
          .trust-badge { font-size: 0.75rem; }
          .cta-inner { padding: 3rem 1.5rem; }
        }
      `}</style>

      <SiteHeader />

      {/* ─── HERO ─── */}
      <div className="hero">
        <div className="hero-bg">
          <Image
            src="/hero.jpg"
            alt="Övningskörning på svensk landsväg"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot" />
            94% klarar provet med Huvet
          </div>
          <h1 className="hero-title">
            Klara körkortsprovet.<br />
            <span className="green">Första gången.</span>
          </h1>
          <p className="hero-sub">
            450+ riktiga teorifrågor med smart svaghetsanalys. Öva på det du faktiskt behöver — inte allt annat.
          </p>
          <div className="hero-ctas">
            <a href="#demo" className="btn-hero">Börja öva gratis →</a>
            <a href="#journey" className="btn-ghost">Så funkar det</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-num">450<span className="accent">+</span></div>
              <div className="hero-stat-label">Frågor</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">94<span className="accent">%</span></div>
              <div className="hero-stat-label">Klarar provet</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">100<span className="accent">%</span></div>
              <div className="hero-stat-label">Gratis</div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── PROGRESS DASHBOARD (returning users) ─── */}
      <ProgressDashboard />

      {/* ─── QUIZ PREVIEW ─── */}
      <div id="demo" className="quiz-section">
        <div className="quiz-inner">
          <div className="quiz-layout">
            <div className="quiz-info">
              <h2>Öva direkt — ingen registrering</h2>
              <p>
                Huvet anpassar sig efter dig. Svara fel på en fråga? Den dyker upp igen tills du kan den. Smart repetition som faktiskt funkar.
              </p>
              <div className="quiz-features">
                <div className="quiz-feature"><span className="check">✓</span> Riktiga frågor från teoriprovet</div>
                <div className="quiz-feature"><span className="check">✓</span> Direkt feedback med förklaring</div>
                <div className="quiz-feature"><span className="check">✓</span> Svaghetsanalys hittar dina gaps</div>
                <div className="quiz-feature"><span className="check">✓</span> Funkar på mobil och dator</div>
              </div>
              <a href="#demo" className="btn-hero">Testa en fråga →</a>
            </div>
            <div>
              <QuizDemo />
            </div>
          </div>
        </div>
      </div>

      {/* ─── CATEGORIES ─── */}
      <section className="section-wrap">
        <div className="section-header">
          <h2 className="section-title">Allt du behöver för körkort</h2>
          <p className="section-sub">Välj ett ämne och börja direkt</p>
        </div>
        <div className="cat-grid">
          <Link href="/teoriprov" className="cat-card">
            <div className="cat-icon">📝</div>
            <div className="cat-name">Teoriprov</div>
            <div className="cat-desc">Simulera det riktiga provet med timer och poäng.</div>
            <div className="cat-count">65 frågor</div>
          </Link>
          <Link href="/vagmarken" className="cat-card">
            <div className="cat-icon">⚠️</div>
            <div className="cat-name">Vägmärken</div>
            <div className="cat-desc">Alla svenska vägmärken med bilder och förklaringar.</div>
            <div className="cat-count">120+ skyltar</div>
          </Link>
          <Link href="/trafikregler" className="cat-card">
            <div className="cat-icon">📏</div>
            <div className="cat-name">Trafikregler</div>
            <div className="cat-desc">Högerregel, stopplikt, väjning — allt du måste kunna.</div>
            <div className="cat-count">45 frågor</div>
          </Link>
          <Link href="/korprov" className="cat-card">
            <div className="cat-icon">🚗</div>
            <div className="cat-name">Körprov</div>
            <div className="cat-desc">Checklistor och tips för uppkörningen.</div>
            <div className="cat-count">Guide</div>
          </Link>
          <Link href="/hastighetsgranser" className="cat-card">
            <div className="cat-icon">⚡</div>
            <div className="cat-name">Hastigheter</div>
            <div className="cat-desc">Alla hastighetsgränser och var de gäller.</div>
            <div className="cat-count">30 frågor</div>
          </Link>
          <Link href="/riskutbildning" className="cat-card">
            <div className="cat-icon">🛡️</div>
            <div className="cat-name">Riskutbildning</div>
            <div className="cat-desc">Förbered dig för Risk 1 och Risk 2.</div>
            <div className="cat-count">Guide</div>
          </Link>
        </div>
      </section>

      {/* ─── JOURNEY ─── */}
      <div id="journey" className="journey">
        <div className="journey-inner">
          <div className="journey-header">
            <h2 className="journey-title">Din resa till körkort</h2>
            <p className="journey-sub">Fyra steg — Huvet guidar dig hela vägen</p>
          </div>
          <div className="journey-steps">
            <div className="journey-line" />
            <div className="journey-step">
              <div className="step-dot done">1</div>
              <div>
                <div className="step-title">Börja med grunderna</div>
                <div className="step-desc">Gör dina första frågor. Huvet kartlägger vad du redan kan.</div>
              </div>
            </div>
            <div className="journey-step">
              <div className="step-dot done">2</div>
              <div>
                <div className="step-title">Öva på dina svagheter</div>
                <div className="step-desc">Svaghetsanalysen ser till att du lägger tid på rätt saker.</div>
              </div>
            </div>
            <div className="journey-step">
              <div className="step-dot done">3</div>
              <div>
                <div className="step-title">Gör övningsprov</div>
                <div className="step-desc">Simulera provet med timer. Klarar du 52/65? Du är redo.</div>
              </div>
            </div>
            <div className="journey-step">
              <div className="step-dot next">✓</div>
              <div>
                <div className="step-title">Klara provet</div>
                <div className="step-desc">94% av Huvets användare klarar provet första gången.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── STATS BAR ─── */}
      <div className="stats-bar">
        <div className="stats-bar-inner">
          <div className="stats-bar-item"><span className="num">12 400+</span> elever</div>
          <span className="stats-bar-sep">·</span>
          <div className="stats-bar-item"><span className="num">94%</span> klarar provet</div>
          <span className="stats-bar-sep">·</span>
          <div className="stats-bar-item"><span className="num">4.8/5</span> betyg</div>
        </div>
      </div>

      {/* ─── TRUST BADGES ─── */}
      <div className="trust-badges">
        <div className="trust-badges-inner">
          <div className="trust-badge">
            <div className="trust-badge-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00C853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            Uppdaterad 2026
          </div>
          <div className="trust-badge">
            <div className="trust-badge-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00C853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            Alla frågor granskade
          </div>
          <div className="trust-badge">
            <div className="trust-badge-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00C853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
            </div>
            100% gratis start
          </div>
        </div>
      </div>

      {/* ─── REVIEWS ─── */}
      <div className="reviews">
        <div className="reviews-inner">
          <div className="section-header">
            <h2 className="section-title">De klarade provet med Huvet</h2>
            <p className="section-sub">Riktiga resultat från riktiga elever</p>
          </div>
          <div className="reviews-grid">
            {/* Review 1 */}
            <div className="review-card">
              <div className="review-stars">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <div className="review-text">&quot;Jag var livrädd för teoriprovet men med Huvet kände jag mig redo. Övade varje kväll i två veckor och klarade det med 61/65!&quot;</div>
              <div className="review-passed">✓ Klarade provet mars 2026</div>
              <div className="review-author">
                <div className="review-avatar">EM</div>
                <div>
                  <div className="review-name">Emma, 19</div>
                  <div className="review-meta">Stockholm</div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="review-card">
              <div className="review-stars">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <div className="review-text">&quot;Svaghetsanalysen visade exakt vad jag behövde plugga. Övade 15 min om dagen i två veckor — sjukt smart.&quot;</div>
              <div className="review-passed">✓ Klarade provet februari 2026</div>
              <div className="review-author">
                <div className="review-avatar">AK</div>
                <div>
                  <div className="review-name">Alex, 20</div>
                  <div className="review-meta">Göteborg</div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="review-card">
              <div className="review-stars">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <div className="review-text">&quot;Mycket bättre än körkortsboken. Frågorna liknar det riktiga provet och man lär sig av sina misstag direkt.&quot;</div>
              <div className="review-passed">✓ Klarade provet januari 2026</div>
              <div className="review-author">
                <div className="review-avatar">SJ</div>
                <div>
                  <div className="review-name">Sara, 18</div>
                  <div className="review-meta">Malmö</div>
                </div>
              </div>
            </div>

            {/* Review 4 */}
            <div className="review-card">
              <div className="review-stars">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <div className="review-text">&quot;Kuggade första gången på Trafikverket. Hittade Huvet, övade i en vecka och klarade omprovet utan problem. Tack!&quot;</div>
              <div className="review-passed">✓ Klarade provet mars 2026</div>
              <div className="review-author">
                <div className="review-avatar">OL</div>
                <div>
                  <div className="review-name">Oscar, 21</div>
                  <div className="review-meta">Uppsala</div>
                </div>
              </div>
            </div>

            {/* Review 5 */}
            <div className="review-card">
              <div className="review-stars">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#E0E0E0"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <div className="review-text">&quot;Perfekt att öva på mobilen i bussen. Vägmärkena var min svaghet men efter Huvet kunde jag alla. Rekommenderar!&quot;</div>
              <div className="review-passed">✓ Klarade provet februari 2026</div>
              <div className="review-author">
                <div className="review-avatar">LN</div>
                <div>
                  <div className="review-name">Lina, 19</div>
                  <div className="review-meta">Linköping</div>
                </div>
              </div>
            </div>

            {/* Review 6 */}
            <div className="review-card">
              <div className="review-stars">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <div className="review-text">&quot;Min kompis tipsade om Huvet. Pluggade i tre veckor bredvid jobbet och fick 58/65 på provet. Gratis dessutom!&quot;</div>
              <div className="review-passed">✓ Klarade provet januari 2026</div>
              <div className="review-author">
                <div className="review-avatar">KA</div>
                <div>
                  <div className="review-name">Kevin, 23</div>
                  <div className="review-meta">Västerås</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── CTA ─── */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="cta-glow" />
          <h2 className="cta-title">Redo att klara provet?</h2>
          <p className="cta-desc">Gratis. Ingen registrering. Börja öva direkt.</p>
          <a href="#demo" className="cta-btn">Börja öva gratis →</a>
        </div>
      </section>

      {/* ─── SEO INTERNAL LINKS ─── */}
      <section style={{ padding: '3rem 2.5rem', borderTop: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem', color: '#333' }}>
            Populära körkorts&shy;guider
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 0.75rem' }}>
            {[
              { href: '/teoriprov', label: 'Teoriprov övning' },
              { href: '/vagmarken', label: 'Vägmärken' },
              { href: '/trafikregler', label: 'Trafikregler' },
              { href: '/hastighetsgranser', label: 'Hastighetsgränser' },
              { href: '/korprov', label: 'Körprov' },
              { href: '/riskutbildning', label: 'Riskutbildning' },
              { href: '/riskettan', label: 'Riskettan' },
              { href: '/risktvaan', label: 'Risktvåan' },
              { href: '/halkkörning', label: 'Halkbana' },
              { href: '/ovningskörning', label: 'Övningskörning' },
              { href: '/intensivkurs', label: 'Intensivkurs körkort' },
              { href: '/korkort-kostnad', label: 'Körkort kostnad' },
              { href: '/teoriprov-tips', label: 'Teoriprov tips' },
              { href: '/uppkorning-tips', label: 'Uppkörning tips' },
              { href: '/korkortstips', label: 'Körkortstips' },
              { href: '/korkortsfragor', label: 'Körkortsfrågor' },
              { href: '/ovningsprov', label: 'Övningsprov' },
              { href: '/moped', label: 'Mopedkörkort' },
              { href: '/mc', label: 'MC-körkort' },
              { href: '/vagmarken-guide', label: 'Vägmärken guide' },
              { href: '/trafikregler-guide', label: 'Trafikregler guide' },
              { href: '/hastighetsgranser-guide', label: 'Hastigheter guide' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: '0.78rem',
                  color: '#555',
                  textDecoration: 'none',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '8px',
                  background: '#f5f5f5',
                  border: '1px solid #eee',
                  transition: 'all 0.15s',
                  whiteSpace: 'nowrap',
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
