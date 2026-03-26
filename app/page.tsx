import QuizDemo from "@/components/QuizDemo";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <style>{`
        /* ── Reset ── */
        *, *::before, *::after { box-sizing: border-box; }

        /* ── Tokens ── */
        :root {
          --green: #006B3F;
          --green-dark: #004d2d;
          --green-xdark: #0d1f17;
          --green-light: #e6f4ee;
          --green-mid: #c3ddd2;
          --green-bg: #f0f7f3;
          --text: #0d1f17;
          --muted: #555;
          --border: #e2efe9;
          --yellow: #f5d020;
          --font: var(--font-inter), system-ui, sans-serif;
        }

        body { margin: 0; background: #fff; color: var(--text); font-family: var(--font); }

        /* ── Utilities ── */
        .container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
        .container-sm { max-width: 900px; margin: 0 auto; padding: 0 20px; }

        /* ── Header ── */
        .site-header {
          position: sticky;
          top: 0;
          z-index: 200;
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--border);
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
          gap: 24px;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .logo-circle {
          width: 38px;
          height: 38px;
          background: var(--green);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .logo-text {
          font-size: 22px;
          font-weight: 900;
          color: var(--text);
          letter-spacing: -0.04em;
          line-height: 1;
        }
        .nav {
          display: flex;
          align-items: center;
          gap: 4px;
          flex: 1;
          justify-content: center;
        }
        .nav a {
          font-size: 14px;
          font-weight: 600;
          color: #444;
          text-decoration: none;
          padding: 8px 14px;
          border-radius: 8px;
          transition: color 0.15s, background 0.15s;
        }
        .nav a:hover { color: var(--green); background: var(--green-light); }
        .btn-primary {
          background: var(--green);
          color: white;
          padding: 11px 22px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          transition: background 0.15s, transform 0.1s;
          display: inline-block;
        }
        .btn-primary:hover { background: var(--green-dark); transform: translateY(-1px); }
        .btn-primary-lg {
          background: var(--green);
          color: white;
          padding: 18px 40px;
          border-radius: 999px;
          font-size: 18px;
          font-weight: 800;
          text-decoration: none;
          display: inline-block;
          box-shadow: 0 6px 28px rgba(0,107,63,0.35);
          transition: background 0.15s, transform 0.1s, box-shadow 0.1s;
        }
        .btn-primary-lg:hover { background: var(--green-dark); transform: translateY(-2px); box-shadow: 0 10px 36px rgba(0,107,63,0.4); }

        /* ── Hero ── */
        .hero {
          background: linear-gradient(150deg, #f0f7f3 0%, #fff 55%);
          padding: 80px 20px 0;
          overflow: hidden;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--green-light);
          color: var(--green);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          padding: 6px 16px;
          border-radius: 999px;
          margin-bottom: 28px;
        }
        .hero-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--green);
          display: inline-block;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .hero-h1 {
          font-size: clamp(2.6rem, 5vw, 4rem);
          font-weight: 900;
          line-height: 1.05;
          color: var(--text);
          margin: 0 0 24px;
          letter-spacing: -0.04em;
        }
        .hero-h1 .accent { color: var(--green); }
        .hero-sub {
          font-size: 18px;
          line-height: 1.7;
          color: var(--muted);
          max-width: 460px;
          margin: 0 0 36px;
        }
        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }
        .social-proof {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #666;
          font-weight: 500;
        }
        .stars { color: #f5d020; font-size: 16px; letter-spacing: 1px; }

        /* Hero card */
        .hero-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.12), 0 0 0 1px var(--border);
          max-width: 380px;
          margin-left: auto;
        }
        .hero-card-header {
          background: var(--green);
          padding: 18px 20px;
          color: white;
        }
        .hero-card-title { font-size: 12px; opacity: 0.75; margin-bottom: 4px; font-weight: 600; }
        .hero-card-q { font-size: 17px; font-weight: 800; margin-bottom: 14px; }
        .progress-bar {
          height: 6px;
          background: rgba(255,255,255,0.25);
          border-radius: 999px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: white;
          border-radius: 999px;
          width: 60%;
        }
        .hero-card-body { padding: 20px; }
        .question-text {
          font-size: 14px;
          font-weight: 700;
          color: var(--text);
          line-height: 1.5;
          margin-bottom: 16px;
        }
        .answer-opt {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 14px;
          border-radius: 12px;
          margin-bottom: 8px;
          font-size: 13px;
          font-weight: 600;
          border: 2px solid var(--border);
          background: white;
          color: var(--muted);
        }
        .answer-opt.correct {
          border-color: var(--green);
          background: var(--green-light);
          color: var(--green-dark);
          font-weight: 700;
        }
        .opt-circle {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          color: #999;
          flex-shrink: 0;
        }
        .opt-circle.correct-c { background: var(--green); color: white; }
        .score-chip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 14px;
          padding: 12px 16px;
          background: var(--green-bg);
          border-radius: 12px;
        }
        .score-label { font-size: 12px; font-weight: 700; color: var(--green); text-transform: uppercase; letter-spacing: 0.1em; }
        .score-bar-wrap { flex: 1; margin: 0 12px; height: 6px; background: var(--green-mid); border-radius: 999px; overflow: hidden; }
        .score-bar-fill { height: 100%; background: var(--green); border-radius: 999px; width: 68%; }
        .score-pct { font-size: 14px; font-weight: 900; color: var(--green); }

        /* ── Stats strip ── */
        .stats-strip {
          background: #0d3d27;
          padding: 48px 20px;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          max-width: 800px;
          margin: 0 auto;
        }
        .stat-item {
          text-align: center;
          padding: 0 24px;
        }
        .stat-item:not(:last-child) { border-right: 1px solid rgba(255,255,255,0.12); }
        .stat-value {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          color: #4ade96;
          line-height: 1;
          margin-bottom: 8px;
        }
        .stat-label { font-size: 16px; font-weight: 600; color: rgba(255,255,255,0.8); }

        /* ── How it works ── */
        .hiw { padding: 96px 20px; background: white; }
        .section-tag {
          display: inline-block;
          background: var(--green-light);
          color: var(--green);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          padding: 6px 16px;
          border-radius: 999px;
          margin-bottom: 20px;
        }
        .section-h2 {
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 900;
          color: var(--text);
          margin: 0 0 16px;
          letter-spacing: -0.03em;
        }
        .section-sub {
          font-size: 17px;
          color: var(--muted);
          margin: 0 auto 56px;
          max-width: 500px;
        }
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          position: relative;
        }
        .step-card {
          background: #fafcfb;
          border-radius: 20px;
          padding: 32px 28px;
          border: 2px solid var(--border);
          position: relative;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .step-card:hover { border-color: var(--green-mid); box-shadow: 0 8px 32px rgba(0,107,63,0.10); }
        .step-number {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--green);
          color: white;
          font-size: 18px;
          font-weight: 900;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }
        .step-title {
          font-size: 20px;
          font-weight: 800;
          color: var(--text);
          margin-bottom: 8px;
        }
        .step-detail {
          font-size: 13px;
          font-weight: 700;
          color: var(--green);
          margin-bottom: 10px;
        }
        .step-text { font-size: 15px; color: var(--muted); line-height: 1.6; margin: 0; }

        /* connector arrows between steps */
        .steps-grid .step-card:not(:last-child)::after {
          content: '→';
          position: absolute;
          right: -20px;
          top: 40px;
          font-size: 20px;
          color: var(--green-mid);
          font-weight: 900;
          z-index: 10;
        }

        /* ── Comparison ── */
        .comparison { padding: 96px 20px; background: var(--green-bg); }
        .comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          max-width: 800px;
          margin: 0 auto;
        }
        .comp-card {
          background: white;
          border-radius: 20px;
          padding: 32px;
          border: 2px solid var(--border);
        }
        .comp-card.good { border-color: var(--green); }
        .comp-card-header {
          font-size: 16px;
          font-weight: 800;
          color: #aaa;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .comp-card.good .comp-card-header { color: var(--green); }
        .comp-icon { font-size: 20px; }
        .comp-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
          font-size: 15px;
          line-height: 1.5;
        }
        .comp-x { color: #ef4444; font-weight: 700; font-size: 18px; flex-shrink: 0; }
        .comp-check { color: var(--green); font-weight: 700; font-size: 18px; flex-shrink: 0; }
        .comp-text-bad { color: #777; }
        .comp-text-good { color: var(--text); font-weight: 600; }

        /* ── Demo section ── */
        .demo-section { padding: 96px 20px; background: white; }

        /* ── Testimonials ── */
        .testimonials { padding: 96px 20px; background: var(--green-bg); }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 0;
        }
        .testimonial-card {
          background: white;
          border-radius: 20px;
          padding: 28px;
          border: 2px solid var(--border);
          transition: box-shadow 0.2s;
        }
        .testimonial-card:hover { box-shadow: 0 8px 32px rgba(0,107,63,0.10); }
        .t-stars { color: #f5d020; font-size: 16px; margin-bottom: 14px; letter-spacing: 2px; }
        .t-quote {
          font-size: 15px;
          line-height: 1.7;
          color: #444;
          font-style: italic;
          margin: 0 0 20px;
        }
        .t-author { display: flex; align-items: center; gap: 12px; }
        .t-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--green);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 15px;
          flex-shrink: 0;
        }
        .t-name { font-weight: 700; font-size: 14px; color: var(--text); }
        .t-city { font-size: 12px; color: #888; }

        /* ── Pricing ── */
        .pricing {
          padding: 96px 20px;
          background: linear-gradient(160deg, #0d1f17 0%, #1a3a26 100%);
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          max-width: 780px;
          margin: 0 auto;
        }
        .price-card {
          border-radius: 24px;
          padding: 36px 32px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.06);
        }
        .price-card.featured {
          background: var(--green);
          border-color: transparent;
          box-shadow: 0 20px 60px rgba(0,107,63,0.45);
          position: relative;
        }
        .featured-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: var(--yellow);
          color: #0d1f17;
          font-size: 11px;
          font-weight: 800;
          padding: 4px 12px;
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .price-tier {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: rgba(255,255,255,0.5);
          margin-bottom: 12px;
        }
        .price-amount {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 900;
          color: white;
          line-height: 1;
          margin-bottom: 4px;
        }
        .price-period { font-size: 14px; color: rgba(255,255,255,0.45); margin-bottom: 28px; }
        .price-feature {
          display: flex;
          gap: 10px;
          margin-bottom: 12px;
          font-size: 15px;
          color: rgba(255,255,255,0.75);
        }
        .price-feature.featured-f { color: rgba(255,255,255,0.92); }
        .price-checkmark { color: #4ade96; font-weight: 700; }
        .price-checkmark.wh { color: #a7f3d0; }
        .price-btn-ghost {
          display: block;
          margin-top: 28px;
          background: rgba(255,255,255,0.1);
          color: white;
          padding: 14px;
          border-radius: 999px;
          font-weight: 700;
          text-decoration: none;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.15);
          transition: background 0.15s;
          font-size: 15px;
        }
        .price-btn-ghost:hover { background: rgba(255,255,255,0.18); }
        .price-btn-solid {
          display: block;
          margin-top: 28px;
          background: white;
          color: var(--green);
          padding: 16px;
          border-radius: 999px;
          font-weight: 800;
          text-decoration: none;
          text-align: center;
          font-size: 16px;
          transition: background 0.15s, transform 0.1s;
        }
        .price-btn-solid:hover { background: #e6f4ee; transform: translateY(-1px); }

        /* ── Footer ── */
        .footer {
          background: #081610;
          color: rgba(255,255,255,0.45);
          padding: 56px 20px 32px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.5fr 1fr;
          gap: 40px;
          margin-bottom: 48px;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }
        .footer-logo-circle {
          width: 34px;
          height: 34px;
          background: var(--green);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .footer-logo-text { color: white; font-weight: 900; font-size: 18px; letter-spacing: -0.03em; }
        .footer-tagline { font-size: 13px; line-height: 1.6; max-width: 200px; }
        .footer-col-title { color: white; font-weight: 700; font-size: 13px; margin-bottom: 14px; text-transform: uppercase; letter-spacing: 0.1em; }
        .footer-link-row { margin-bottom: 8px; }
        .footer-link-row a {
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.15s;
        }
        .footer-link-row a:hover { color: rgba(255,255,255,0.85); }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 13px;
        }

        /* ── Mobile Responsive ── */
        @media (max-width: 768px) {
          .nav { display: none; }

          .hero { padding: 48px 16px 0; }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-h1 { font-size: 2.2rem; }
          .hero-sub { font-size: 16px; }
          .hero-card { max-width: 100%; margin: 0; }
          .hero-cta-row { flex-direction: column; align-items: flex-start; gap: 16px; }
          .btn-primary-lg { width: 100%; text-align: center; padding: 17px 32px; }

          .stats-grid { grid-template-columns: 1fr; gap: 20px; }
          .stat-item { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.12); padding: 20px 0; }
          .stat-item:last-child { border-bottom: none; }

          .hiw { padding: 64px 16px; }
          .steps-grid { grid-template-columns: 1fr; gap: 16px; }
          .steps-grid .step-card::after { display: none; }

          .comparison { padding: 64px 16px; }
          .comparison-grid { grid-template-columns: 1fr; }

          .testimonials { padding: 64px 16px; }
          .testimonials-grid { grid-template-columns: 1fr; }

          .pricing { padding: 64px 16px; }
          .pricing-grid { grid-template-columns: 1fr; }

          .footer { padding: 48px 16px 24px; }
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }

          .demo-section { padding: 64px 16px; }

          .section-sub { font-size: 15px; }
        }

        @media (max-width: 480px) {
          .header-inner { gap: 12px; }
          .hero-h1 { font-size: 1.9rem; }
          .footer-grid { grid-template-columns: 1fr; gap: 28px; }
        }
      `}</style>

      {/* ─── HEADER ─── */}
      <header className="site-header">
        <div className="container header-inner">
          {/* Logo */}
          <a href="/" className="logo">
            <div className="logo-circle">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="9" stroke="white" strokeWidth="2.2"/>
                <circle cx="11" cy="11" r="2.8" fill="white"/>
                <line x1="11" y1="2" x2="11" y2="8.2" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                <line x1="3.6" y1="15" x2="8.5" y2="12.3" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                <line x1="18.4" y1="15" x2="13.5" y2="12.3" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="logo-text">Huvet</span>
          </a>

          {/* Nav */}
          <nav className="nav">
            <Link href="/korkortsfragor">Guider</Link>
            <Link href="/mc">MC</Link>
            <Link href="/moped">Moped</Link>
            <a href="#pricing">Priser</a>
          </nav>

          {/* CTA */}
          <a href="#demo" className="btn-primary">Börja gratis</a>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-grid">
          {/* Left */}
          <div>
            <div className="hero-badge">
              <span className="hero-dot"/>
              Godkänd av 2 341 körkortselever
            </div>

            <h1 className="hero-h1">
              Klara körkortsprovet<br/>
              <span className="accent">på första försöket</span>
            </h1>

            <p className="hero-sub">
              Huvet analyserar dina svaga punkter och ger dig ett exakt träningsupplägg.
              Ingen slumpmässig drill.
            </p>

            <div className="hero-cta-row">
              <a href="#demo" className="btn-primary-lg">Börja gratis →</a>
              <div className="social-proof">
                <span className="stars">★★★★★</span>
                <span><strong>4.9/5</strong> · 2 341 elever har klarat körkortet</span>
              </div>
            </div>
          </div>

          {/* Right: quiz preview card */}
          <div>
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="hero-card-title">Din träning idag · Fråga 3 av 5</div>
                <div className="hero-card-q">Körkortsprovet — Väjningsplikt</div>
                <div className="progress-bar">
                  <div className="progress-fill"/>
                </div>
              </div>
              <div className="hero-card-body">
                <div className="question-text">
                  Vem har väjningsplikt vid en rondell?
                </div>

                <div className="answer-opt">
                  <span className="opt-circle">A</span>
                  Fordon inne i rondellen
                </div>
                <div className="answer-opt correct">
                  <span className="opt-circle correct-c">✓</span>
                  Fordon som kör in i rondellen
                </div>
                <div className="answer-opt">
                  <span className="opt-circle">C</span>
                  Störst fordon har företräde
                </div>

                <div className="score-chip">
                  <span className="score-label">Provredo</span>
                  <div className="score-bar-wrap">
                    <div className="score-bar-fill"/>
                  </div>
                  <span className="score-pct">68%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Road stripe divider */}
        <div style={{ marginTop: 64, height: 36, background: '#0d1f17', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            transform: 'translateY(-50%)',
            height: 4,
            backgroundImage: 'repeating-linear-gradient(90deg, #f5d020 0px, #f5d020 40px, transparent 40px, transparent 68px)',
          }}/>
        </div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section className="stats-strip">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-value">94%</div>
            <div className="stat-label">godkänns</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">450+</div>
            <div className="stat-label">frågor</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">38</div>
            <div className="stat-label">kategorier</div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" className="hiw">
        <div className="container-sm" style={{ textAlign: 'center' }}>
          <span className="section-tag">Hur det funkar</span>
          <h2 className="section-h2">Tre steg till godkänt</h2>
          <p className="section-sub">Ingen slumpmässig drill. Bara rätt frågor, i rätt ordning, för dig.</p>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <div className="step-title">Gör en snabb diagnos</div>
              <div className="step-detail">5 frågor · 2 minuter</div>
              <p className="step-text">
                Ett kort diagnosquiz avslöjar exakt vilka ämnen du är svag på — så du inte slösar tid på det du redan kan.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <div className="step-title">Träna dina svaga punkter</div>
              <div className="step-detail">Personaliserat upplägg</div>
              <p className="step-text">
                Huvet skapar ett träningsupplägg anpassat just för dig. Du övar på rätt saker och ser din progress i realtid.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <div className="step-title">Klara provet</div>
              <div className="step-detail">Genomsnitt 3,5 veckor</div>
              <p className="step-text">
                Med korta dagliga sessioner tar du dig till godkänt på minsta möjliga tid. 94% av Huvets elever klarar provet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMPARISON ─── */}
      <section className="comparison">
        <div className="container-sm" style={{ textAlign: 'center' }}>
          <span className="section-tag">Varför Huvet</span>
          <h2 className="section-h2">Huvet vs. att studera ensam</h2>
          <p className="section-sub" style={{ marginBottom: 48 }}>Sluta slösa tid på metoder som inte funkar.</p>

          <div className="comparison-grid">
            {/* Bad column */}
            <div className="comp-card">
              <div className="comp-card-header">
                <span className="comp-icon">✗</span>
                Utan Huvet
              </div>
              <div className="comp-item">
                <span className="comp-x">✗</span>
                <span className="comp-text-bad">Bläddrar igenom alla 450 frågor i slumpmässig ordning</span>
              </div>
              <div className="comp-item">
                <span className="comp-x">✗</span>
                <span className="comp-text-bad">Vet inte vilka ämnen du missar mest</span>
              </div>
              <div className="comp-item">
                <span className="comp-x">✗</span>
                <span className="comp-text-bad">Svår läroboksstil — hård att ta till sig</span>
              </div>
              <div className="comp-item">
                <span className="comp-x">✗</span>
                <span className="comp-text-bad">Ingen feedback — vet inte om du är redo</span>
              </div>
            </div>

            {/* Good column */}
            <div className="comp-card good">
              <div className="comp-card-header">
                <span className="comp-icon">✓</span>
                Med Huvet
              </div>
              <div className="comp-item">
                <span className="comp-check">✓</span>
                <span className="comp-text-good">Personaliserat upplägg baserat på dina svagheter</span>
              </div>
              <div className="comp-item">
                <span className="comp-check">✓</span>
                <span className="comp-text-good">Tydlig ämnesanalys visar exakt vad du ska fokusera på</span>
              </div>
              <div className="comp-item">
                <span className="comp-check">✓</span>
                <span className="comp-text-good">Förklaringar på vanlig svenska — sitter snabbt</span>
              </div>
              <div className="comp-item">
                <span className="comp-check">✓</span>
                <span className="comp-text-good">Realtidspoäng visar när du är provredo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE QUIZ ─── */}
      <section id="demo" className="demo-section">
        <div className="container-sm" style={{ textAlign: 'center' }}>
          <span className="section-tag" style={{ background: '#006B3F', color: 'white' }}>Testa direkt — ingen inloggning</span>
          <h2 className="section-h2">5 riktiga teorifrågor</h2>
          <p className="section-sub">
            Svara och se direkt hur Huvet förklarar varje svar. Precis som i riktiga provet.
          </p>
          <QuizDemo />
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="testimonials">
        <div className="container-sm" style={{ textAlign: 'center' }}>
          <span className="section-tag">Elever berättar</span>
          <h2 className="section-h2">2 341 har klarat körkortet med Huvet</h2>
          <p className="section-sub" style={{ marginBottom: 48 }}>Riktiga elever, riktiga resultat.</p>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="t-stars">★★★★★</div>
              <p className="t-quote">
                "Misslyckades tre gånger med ordinarie övning. Med Huvet klarade jag på en vecka.
                Ärlat talat galet hur bra det funkar."
              </p>
              <div className="t-author">
                <div className="t-avatar">S</div>
                <div>
                  <div className="t-name">Sofia, 19</div>
                  <div className="t-city">Stockholm</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="t-stars">★★★★★</div>
              <p className="t-quote">
                "Visste inte ens att väjningsreglerna var mitt svaga ämne förrän Huvet pekade ut det.
                Sedan gick det snabbt."
              </p>
              <div className="t-author">
                <div className="t-avatar">M</div>
                <div>
                  <div className="t-name">Marcus, 23</div>
                  <div className="t-city">Göteborg</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="t-stars">★★★★★</div>
              <p className="t-quote">
                "Förklaringarna är på svenska på riktigt — inte den där torra läroboksstilen.
                Sitter mycket bättre i minnet."
              </p>
              <div className="t-author">
                <div className="t-avatar">Y</div>
                <div>
                  <div className="t-name">Yasmin, 21</div>
                  <div className="t-city">Malmö</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="pricing">
        <div className="container-sm" style={{ textAlign: 'center' }}>
          <span className="section-tag" style={{ background: 'rgba(255,255,255,0.12)', color: '#4ade96' }}>Prisplan</span>
          <h2 className="section-h2" style={{ color: 'white' }}>Börja gratis. Uppgradera när du vill.</h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 17, marginBottom: 48 }}>
            Inget kreditkort krävs för att komma igång.
          </p>

          <div className="pricing-grid">
            {/* Free */}
            <div className="price-card">
              <div className="price-tier">Gratis</div>
              <div className="price-amount">0 kr</div>
              <div className="price-period">7 dagars full tillgång</div>
              <div className="price-feature">
                <span className="price-checkmark">✓</span>
                50 övningsfrågor
              </div>
              <div className="price-feature">
                <span className="price-checkmark">✓</span>
                Diagnostiktest
              </div>
              <div className="price-feature">
                <span className="price-checkmark">✓</span>
                Grundläggande feedback
              </div>
              <div className="price-feature">
                <span className="price-checkmark">✓</span>
                Provsimuleringsläge
              </div>
              <a href="#demo" className="price-btn-ghost">Kom igång gratis</a>
            </div>

            {/* Pro */}
            <div className="price-card featured">
              <div className="featured-badge">Populärast</div>
              <div className="price-tier" style={{ color: 'rgba(255,255,255,0.7)' }}>Pro</div>
              <div className="price-amount">79 kr</div>
              <div className="price-period">/mån · efter 7 dagars gratis provperiod</div>
              <div className="price-feature featured-f">
                <span className="price-checkmark wh">✓</span>
                Alla 450+ frågor
              </div>
              <div className="price-feature featured-f">
                <span className="price-checkmark wh">✓</span>
                Personlig träningsplan
              </div>
              <div className="price-feature featured-f">
                <span className="price-checkmark wh">✓</span>
                Detaljerad ämnesanalys
              </div>
              <div className="price-feature featured-f">
                <span className="price-checkmark wh">✓</span>
                Obegränsade provsimuleringar
              </div>
              <div className="price-feature featured-f">
                <span className="price-checkmark wh">✓</span>
                MC &amp; Moped-frågor ingår
              </div>
              <div className="price-feature featured-f">
                <span className="price-checkmark wh">✓</span>
                Avbryt när som helst
              </div>
              <a href="#demo" className="price-btn-solid">Testa 7 dagar gratis →</a>
            </div>
          </div>

          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, marginTop: 28 }}>
            Ingen bindningstid. Avbryt när som helst.
          </p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div>
              <div className="footer-logo">
                <div className="footer-logo-circle">
                  <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="11" r="9" stroke="white" strokeWidth="2.2"/>
                    <circle cx="11" cy="11" r="2.8" fill="white"/>
                    <line x1="11" y1="2" x2="11" y2="8.2" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="3.6" y1="15" x2="8.5" y2="12.3" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="18.4" y1="15" x2="13.5" y2="12.3" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="footer-logo-text">Huvet</span>
              </div>
              <p className="footer-tagline">
                Klara teorin. Kör vidare.<br/>
                Byggt för svenska körkortselever.
              </p>
            </div>

            {/* Produkt */}
            <div>
              <div className="footer-col-title">Produkt</div>
              {['Träna', 'Diagnostik', 'Provsimulering'].map(l => (
                <div key={l} className="footer-link-row">
                  <a href="#demo">{l}</a>
                </div>
              ))}
              <div className="footer-link-row">
                <a href="#pricing">Prisplan</a>
              </div>
            </div>

            {/* Guider */}
            <div>
              <div className="footer-col-title">Guider</div>
              {[
                { href: '/teoriprov', label: 'Teoriprov' },
                { href: '/korprov', label: 'Körprov' },
                { href: '/ovningskörning', label: 'Övningskörning' },
                { href: '/korkortstips', label: 'Körkortslips' },
                { href: '/vagmarken', label: 'Vägmärken' },
                { href: '/korkortsfragor', label: 'Körkortsfrågor' },
                { href: '/mc', label: 'MC-körkort' },
                { href: '/moped', label: 'Mopedkörkort' },
              ].map(item => (
                <div key={item.href} className="footer-link-row">
                  <Link href={item.href}>{item.label}</Link>
                </div>
              ))}
            </div>

            {/* Info */}
            <div>
              <div className="footer-col-title">Info</div>
              {['Om oss', 'Kontakt', 'Integritetspolicy'].map(l => (
                <div key={l} className="footer-link-row">
                  <a href="#">{l}</a>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Huvet (huvet.se). Alla rättigheter förbehållna.</span>
            <span>🇸🇪 Gjort i Sverige</span>
          </div>
        </div>
      </footer>
    </>
  );
}
