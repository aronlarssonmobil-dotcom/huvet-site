import QuizDemo from "@/components/QuizDemo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <style>{`
        /* ── Tokens ── */
        :root {
          --green: #006B3F;
          --green-dark: #004d2d;
          --green-xdark: #0d1f17;
          --green-light: #e6f4ee;
          --green-bg: #f0f7f3;
          --yellow: #f5d020;
          --yellow-dark: #d4af00;
          --text: #0d1f17;
          --muted: #5a6b62;
          --border: #dceee5;
          --card-bg: #f0f7f3;
          --heading: var(--font-playfair), 'Georgia', serif;
          --body: var(--font-dm-sans), system-ui, sans-serif;
          --radius: 18px;
          --radius-sm: 14px;
        }

        body { background: #fff; color: var(--text); font-family: var(--body); }

        /* ── Hero ── */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero-bg img {
          object-fit: cover;
          object-position: center 40%;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg,
              rgba(13,31,23,0.75) 0%,
              rgba(13,31,23,0.55) 40%,
              rgba(0,107,63,0.4) 70%,
              rgba(13,31,23,0.85) 100%
            );
          z-index: 1;
        }
        /* Animated road lines at the bottom of hero */
        .hero-road {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 6px;
          z-index: 3;
          background: var(--green-xdark);
          overflow: hidden;
        }
        .hero-road::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 200%;
          height: 3px;
          background: repeating-linear-gradient(
            90deg,
            var(--yellow) 0px,
            var(--yellow) 40px,
            transparent 40px,
            transparent 72px
          );
          animation: roadScroll 4s linear infinite;
        }
        @keyframes roadScroll {
          from { transform: translateY(-50%) translateX(0); }
          to { transform: translateY(-50%) translateX(-50%); }
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 120px 24px 80px;
          text-align: center;
        }

        /* Achievement-style badge above hero title */
        .hero-achievement {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(245,208,32,0.15);
          border: 1px solid rgba(245,208,32,0.3);
          backdrop-filter: blur(8px);
          padding: 8px 20px;
          border-radius: 999px;
          margin-bottom: 28px;
          animation: fadeSlideUp 0.6s ease-out;
        }
        .hero-achievement-icon {
          width: 28px;
          height: 28px;
          background: var(--yellow);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 800;
          color: var(--green-xdark);
        }
        .hero-achievement span {
          font-size: 14px;
          font-weight: 600;
          color: rgba(255,255,255,0.95);
          letter-spacing: 0.02em;
        }

        .hero-h1 {
          font-family: var(--heading);
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 900;
          color: white;
          line-height: 1.05;
          margin: 0 0 24px;
          letter-spacing: -0.03em;
          animation: fadeSlideUp 0.7s ease-out 0.1s both;
        }
        .hero-h1 .yellow { color: var(--yellow); }
        .hero-sub {
          font-size: clamp(17px, 2.2vw, 21px);
          color: rgba(255,255,255,0.8);
          max-width: 560px;
          margin: 0 auto 40px;
          line-height: 1.6;
          animation: fadeSlideUp 0.7s ease-out 0.2s both;
        }
        .hero-cta-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          animation: fadeSlideUp 0.7s ease-out 0.3s both;
        }
        .btn-yellow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--yellow);
          color: var(--green-xdark);
          padding: 18px 40px;
          border-radius: 999px;
          font-size: 17px;
          font-weight: 800;
          text-decoration: none;
          font-family: var(--body);
          box-shadow: 0 4px 20px rgba(245,208,32,0.4), 0 0 0 0 rgba(245,208,32,0.4);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-yellow:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 32px rgba(245,208,32,0.5), 0 0 40px rgba(245,208,32,0.15);
        }
        .btn-ghost-white {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.1);
          border: 1.5px solid rgba(255,255,255,0.25);
          backdrop-filter: blur(4px);
          color: white;
          padding: 16px 32px;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          font-family: var(--body);
          transition: background 0.2s, transform 0.2s;
        }
        .btn-ghost-white:hover {
          background: rgba(255,255,255,0.18);
          transform: translateY(-2px);
        }

        /* Floating stats in hero bottom */
        .hero-floats {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 56px;
          animation: fadeSlideUp 0.7s ease-out 0.5s both;
        }
        .hero-float-card {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(12px);
          padding: 14px 24px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .hero-float-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }
        .hero-float-icon.green { background: rgba(0,107,63,0.4); }
        .hero-float-icon.yellow { background: rgba(245,208,32,0.3); }
        .hero-float-icon.white { background: rgba(255,255,255,0.15); }
        .hero-float-value {
          font-size: 20px;
          font-weight: 800;
          color: white;
          line-height: 1.1;
          font-family: var(--heading);
        }
        .hero-float-label {
          font-size: 12px;
          color: rgba(255,255,255,0.6);
          font-weight: 500;
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── Trust bar ── */
        .trust-bar {
          background: var(--green-xdark);
          padding: 20px 24px;
          overflow: hidden;
        }
        .trust-bar-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
          max-width: 900px;
          margin: 0 auto;
        }
        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          color: rgba(255,255,255,0.7);
        }
        .trust-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--yellow);
        }

        /* ── Stats Section — Road Sign Style ── */
        .stats-section {
          padding: 96px 24px;
          background: white;
          position: relative;
        }
        .stats-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 48px;
          background: linear-gradient(180deg, var(--green-xdark), var(--border));
        }
        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: var(--green);
          margin-bottom: 16px;
        }
        .section-label-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--green);
        }
        .section-title {
          font-family: var(--heading);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          color: var(--text);
          margin: 0 0 16px;
          letter-spacing: -0.03em;
        }
        .section-desc {
          font-size: 17px;
          color: var(--muted);
          max-width: 520px;
          line-height: 1.65;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .stat-card {
          background: var(--card-bg);
          border: 2px solid var(--border);
          border-radius: var(--radius);
          padding: 32px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,107,63,0.12);
        }
        .stat-card-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          margin: 0 auto 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }
        .stat-card-icon.g { background: rgba(0,107,63,0.12); }
        .stat-card-icon.y { background: rgba(245,208,32,0.2); }
        .stat-card-icon.b { background: rgba(13,31,23,0.08); }
        .stat-card-value {
          font-family: var(--heading);
          font-size: 36px;
          font-weight: 900;
          color: var(--green);
          margin-bottom: 4px;
        }
        .stat-card-label {
          font-size: 14px;
          color: var(--muted);
          font-weight: 600;
        }
        /* Progress bar inside stat card */
        .stat-progress {
          margin-top: 14px;
          height: 6px;
          background: var(--border);
          border-radius: 999px;
          overflow: hidden;
        }
        .stat-progress-fill {
          height: 100%;
          border-radius: 999px;
          transition: width 1s ease-out;
        }
        .stat-progress-fill.green { background: var(--green); }
        .stat-progress-fill.yellow { background: var(--yellow); }

        /* ── Quiz Demo Section ── */
        .quiz-section {
          padding: 96px 24px;
          background: linear-gradient(160deg, #f0f7f3 0%, white 100%);
          position: relative;
        }
        .quiz-section-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 64px;
          align-items: start;
        }
        .quiz-info {
          position: sticky;
          top: 96px;
          padding-top: 20px;
        }
        .quiz-info-badges {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 32px;
        }
        .qi-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: white;
          border: 1.5px solid var(--border);
          padding: 8px 16px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          color: var(--text);
        }
        .qi-badge-icon {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }
        .qi-badge-icon.g { background: var(--green-light); color: var(--green); }
        .qi-badge-icon.y { background: rgba(245,208,32,0.2); }

        /* Road-style progress tracker */
        .road-progress {
          margin-top: 40px;
          padding: 24px;
          background: white;
          border-radius: var(--radius);
          border: 2px solid var(--border);
        }
        .road-progress-title {
          font-family: var(--heading);
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 20px;
          color: var(--text);
        }
        .road-steps {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .road-step {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          position: relative;
        }
        .road-step-line {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
        }
        .road-step-dot {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 800;
          flex-shrink: 0;
          z-index: 1;
        }
        .road-step-dot.active {
          background: var(--green);
          color: white;
          box-shadow: 0 0 0 4px rgba(0,107,63,0.15);
        }
        .road-step-dot.done {
          background: var(--yellow);
          color: var(--green-xdark);
        }
        .road-step-dot.future {
          background: var(--border);
          color: var(--muted);
        }
        .road-step-connector {
          width: 2px;
          height: 32px;
          background: var(--border);
        }
        .road-step-connector.done-c { background: var(--green); }
        .road-step-content {
          padding-bottom: 20px;
        }
        .road-step-title {
          font-weight: 700;
          font-size: 15px;
          color: var(--text);
          margin-bottom: 2px;
        }
        .road-step-sub {
          font-size: 13px;
          color: var(--muted);
        }

        /* ── Categories Section ── */
        .categories-section {
          padding: 96px 24px;
          background: white;
        }
        .categories-header {
          max-width: 1200px;
          margin: 0 auto 56px;
          text-align: center;
        }
        .cat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .cat-card {
          background: var(--card-bg);
          border: 2px solid var(--border);
          border-radius: var(--radius);
          padding: 28px 24px;
          text-decoration: none;
          color: var(--text);
          position: relative;
          overflow: hidden;
          transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
        }
        .cat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,107,63,0.1);
          border-color: var(--green);
        }
        .cat-card-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin-bottom: 16px;
        }
        .cat-card-icon.sign {
          background: #dc2626;
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
          color: white;
          font-size: 18px;
          font-weight: 900;
        }
        .cat-card-icon.triangle {
          background: var(--yellow);
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          color: var(--green-xdark);
          font-size: 16px;
          padding-top: 8px;
        }
        .cat-card-icon.circle {
          background: #2563eb;
          border-radius: 50%;
          color: white;
        }
        .cat-card-icon.rect {
          background: var(--green);
          border-radius: 8px;
          color: white;
        }
        .cat-card-icon.speed {
          background: white;
          border: 4px solid #dc2626;
          border-radius: 50%;
          color: var(--text);
          font-size: 18px;
          font-weight: 900;
          font-family: var(--heading);
        }
        .cat-card-icon.risk {
          background: var(--yellow);
          border-radius: 14px;
          color: var(--green-xdark);
        }
        .cat-card-title {
          font-weight: 800;
          font-size: 16px;
          margin-bottom: 6px;
          color: var(--text);
        }
        .cat-card-count {
          font-size: 13px;
          color: var(--muted);
          font-weight: 500;
        }
        .cat-card-arrow {
          position: absolute;
          bottom: 20px;
          right: 20px;
          font-size: 18px;
          color: var(--border);
          transition: color 0.2s, transform 0.2s;
        }
        .cat-card:hover .cat-card-arrow {
          color: var(--green);
          transform: translateX(4px);
        }

        /* ── Journey / Timeline Section ── */
        .journey-section {
          padding: 96px 24px;
          background: linear-gradient(160deg, var(--green-xdark) 0%, #0a3325 100%);
          position: relative;
          overflow: hidden;
        }
        /* Road dashes background */
        .journey-section::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 4px;
          background: repeating-linear-gradient(
            180deg,
            rgba(245,208,32,0.3) 0px,
            rgba(245,208,32,0.3) 24px,
            transparent 24px,
            transparent 48px
          );
          transform: translateX(-50%);
        }
        .journey-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 72px;
          position: relative;
          z-index: 1;
        }
        .journey-header .section-label { color: var(--yellow); }
        .journey-header .section-label-dot { background: var(--yellow); }
        .journey-header .section-title { color: white; }
        .journey-header .section-desc { color: rgba(255,255,255,0.6); margin: 0 auto; }

        .journey-steps {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .journey-step {
          display: grid;
          grid-template-columns: 1fr 60px 1fr;
          gap: 0;
          align-items: center;
          margin-bottom: 32px;
        }
        .journey-step:nth-child(odd) .j-content { grid-column: 1; text-align: right; }
        .journey-step:nth-child(odd) .j-empty { grid-column: 3; }
        .journey-step:nth-child(even) .j-content { grid-column: 3; text-align: left; }
        .journey-step:nth-child(even) .j-empty { grid-column: 1; }
        .j-marker {
          grid-column: 2;
          display: flex;
          justify-content: center;
        }
        .j-sign {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 900;
          border: 3px solid rgba(255,255,255,0.2);
        }
        .j-sign.s1 { background: var(--yellow); color: var(--green-xdark); }
        .j-sign.s2 { background: var(--green); color: white; }
        .j-sign.s3 { background: #2563eb; color: white; }
        .j-sign.s4 { background: white; color: var(--green-xdark); }
        .j-content {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: var(--radius);
          padding: 24px;
          backdrop-filter: blur(4px);
          transition: background 0.2s;
        }
        .j-content:hover { background: rgba(255,255,255,0.1); }
        .j-step-num {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--yellow);
          margin-bottom: 6px;
        }
        .j-step-title {
          font-family: var(--heading);
          font-size: 20px;
          font-weight: 800;
          color: white;
          margin-bottom: 8px;
        }
        .j-step-desc {
          font-size: 14px;
          color: rgba(255,255,255,0.55);
          line-height: 1.6;
        }
        .j-step-time {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 12px;
          background: rgba(245,208,32,0.1);
          color: var(--yellow);
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
        }
        .j-empty { min-height: 1px; }

        /* ── Guides Section ── */
        .guides-section {
          padding: 96px 24px;
          background: var(--card-bg);
        }
        .guides-header {
          max-width: 1200px;
          margin: 0 auto 56px;
          text-align: center;
        }
        .guides-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .guide-card {
          background: white;
          border: 2px solid var(--border);
          border-radius: var(--radius);
          padding: 32px 28px;
          text-decoration: none;
          color: var(--text);
          position: relative;
          overflow: hidden;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .guide-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,107,63,0.1);
        }
        .guide-card-emoji {
          font-size: 32px;
          margin-bottom: 16px;
          display: block;
        }
        .guide-card-title {
          font-family: var(--heading);
          font-size: 20px;
          font-weight: 800;
          color: var(--text);
          margin-bottom: 8px;
        }
        .guide-card-desc {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .guide-card-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--green);
          font-weight: 700;
          font-size: 14px;
        }
        .guide-card:hover .guide-card-link { text-decoration: underline; }

        /* ── CTA Banner ── */
        .cta-banner {
          padding: 96px 24px;
          background: white;
          text-align: center;
        }
        .cta-banner-inner {
          max-width: 800px;
          margin: 0 auto;
          background: var(--green);
          border-radius: 28px;
          padding: 64px 40px;
          position: relative;
          overflow: hidden;
        }
        .cta-banner-inner::before {
          content: '';
          position: absolute;
          top: -60px;
          right: -60px;
          width: 200px;
          height: 200px;
          background: rgba(245,208,32,0.15);
          border-radius: 50%;
        }
        .cta-banner-inner::after {
          content: '';
          position: absolute;
          bottom: -40px;
          left: -40px;
          width: 150px;
          height: 150px;
          background: rgba(255,255,255,0.05);
          border-radius: 50%;
        }
        .cta-banner-title {
          font-family: var(--heading);
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          font-weight: 900;
          color: white;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }
        .cta-banner-sub {
          font-size: 17px;
          color: rgba(255,255,255,0.8);
          margin-bottom: 32px;
          position: relative;
          z-index: 1;
        }
        .cta-banner .btn-yellow { position: relative; z-index: 1; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .cat-grid { grid-template-columns: repeat(2, 1fr); }
          .guides-grid { grid-template-columns: 1fr; }
          .quiz-section-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .quiz-info {
            position: static;
            text-align: center;
          }
          .quiz-info-badges { justify-content: center; }
          .road-progress { max-width: 400px; margin: 40px auto 0; }
        }
        @media (max-width: 768px) {
          .hero-content { padding: 100px 20px 60px; }
          .hero-h1 { font-size: 2.4rem; }
          .hero-floats { flex-direction: column; align-items: center; gap: 12px; }
          .hero-float-card { width: 100%; max-width: 280px; justify-content: center; }
          .trust-bar-inner { gap: 16px; }
          .trust-item { font-size: 12px; }

          .journey-step {
            grid-template-columns: 40px 1fr;
            gap: 16px;
          }
          .j-marker { grid-column: 1; grid-row: 1; }
          .j-sign { width: 36px; height: 36px; font-size: 16px; }
          .journey-step:nth-child(odd) .j-content,
          .journey-step:nth-child(even) .j-content {
            grid-column: 2;
            grid-row: 1;
            text-align: left;
          }
          .j-empty { display: none; }
          .journey-section::before { left: 44px; }

          .cta-banner-inner { padding: 48px 24px; }
        }
        @media (max-width: 520px) {
          .stats-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .cat-grid { grid-template-columns: 1fr; }
          .hero-cta-group { flex-direction: column; }
          .btn-yellow { width: 100%; justify-content: center; }
          .btn-ghost-white { width: 100%; justify-content: center; }
        }
      `}</style>

      <SiteHeader />

      {/* ─── HERO ─── */}
      <section className="hero">
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
          <div className="hero-achievement">
            <div className="hero-achievement-icon">🏆</div>
            <span>94% av eleverna klarar provet med Huvet</span>
          </div>

          <h1 className="hero-h1">
            Klara körkortsprovet.<br />
            <span className="yellow">Första gången.</span>
          </h1>

          <p className="hero-sub">
            450+ riktiga teorifrågor, smart träning som hittar dina svagheter,
            och förklaringar som faktiskt fastnar. Helt gratis att börja.
          </p>

          <div className="hero-cta-group">
            <a href="#demo" className="btn-yellow">
              Börja öva gratis
              <span>→</span>
            </a>
            <a href="#journey" className="btn-ghost-white">
              Se hur det funkar
            </a>
          </div>

          <div className="hero-floats">
            <div className="hero-float-card">
              <div className="hero-float-icon green">📝</div>
              <div>
                <div className="hero-float-value">450+</div>
                <div className="hero-float-label">Teorifrågor</div>
              </div>
            </div>
            <div className="hero-float-card">
              <div className="hero-float-icon yellow">⚡</div>
              <div>
                <div className="hero-float-value">12 min</div>
                <div className="hero-float-label">Genomsnittlig session</div>
              </div>
            </div>
            <div className="hero-float-card">
              <div className="hero-float-icon white">🎯</div>
              <div>
                <div className="hero-float-value">100%</div>
                <div className="hero-float-label">Gratis att börja</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-road" />
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="trust-bar">
        <div className="trust-bar-inner">
          <div className="trust-item"><span className="trust-dot" /> 450+ frågor</div>
          <div className="trust-item"><span className="trust-dot" /> 94% klarar provet</div>
          <div className="trust-item"><span className="trust-dot" /> 100% gratis</div>
          <div className="trust-item"><span className="trust-dot" /> Uppdaterat 2026</div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="stats-section">
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center', marginBottom: 56 }}>
          <div className="section-label">
            <span className="section-label-dot" />
            Dina resultat med Huvet
          </div>
          <h2 className="section-title">Siffror som talar</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Tusentals körkortselever har redan klarat provet med Huvet. Här är varför.
          </p>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-card-icon g">📚</div>
            <div className="stat-card-value">450+</div>
            <div className="stat-card-label">Teorifrågor</div>
            <div className="stat-progress">
              <div className="stat-progress-fill green" style={{ width: '90%' }} />
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon y">🏆</div>
            <div className="stat-card-value" style={{ color: '#d4af00' }}>94%</div>
            <div className="stat-card-label">Klarar provet</div>
            <div className="stat-progress">
              <div className="stat-progress-fill yellow" style={{ width: '94%' }} />
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon g">⏱️</div>
            <div className="stat-card-value">12 min</div>
            <div className="stat-card-label">Genomsnittlig session</div>
            <div className="stat-progress">
              <div className="stat-progress-fill green" style={{ width: '50%' }} />
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon b">🗂️</div>
            <div className="stat-card-value">38</div>
            <div className="stat-card-label">Kategorier</div>
            <div className="stat-progress">
              <div className="stat-progress-fill green" style={{ width: '76%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUIZ DEMO ─── */}
      <section id="demo" className="quiz-section">
        <div className="quiz-section-inner">
          <div className="quiz-info">
            <div className="section-label">
              <span className="section-label-dot" />
              Testa direkt
            </div>
            <h2 className="section-title">5 riktiga teorifrågor</h2>
            <p className="section-desc">
              Svara och se direkt hur Huvet förklarar varje fråga. Precis som
              på riktiga körkortsprovet — fast med bättre förklaringar.
            </p>

            <div className="quiz-info-badges">
              <div className="qi-badge">
                <span className="qi-badge-icon g">✓</span>
                Ingen inloggning
              </div>
              <div className="qi-badge">
                <span className="qi-badge-icon y">⚡</span>
                2 min att göra
              </div>
              <div className="qi-badge">
                <span className="qi-badge-icon g">📖</span>
                Förklaringar på varje fråga
              </div>
            </div>

            {/* Mini road progress */}
            <div className="road-progress">
              <div className="road-progress-title">🛣️ Din resa till körkort</div>
              <div className="road-steps">
                <div className="road-step">
                  <div className="road-step-line">
                    <div className="road-step-dot done">✓</div>
                    <div className="road-step-connector done-c" />
                  </div>
                  <div className="road-step-content">
                    <div className="road-step-title">Testa quizet</div>
                    <div className="road-step-sub">Gör 5 frågor nu →</div>
                  </div>
                </div>
                <div className="road-step">
                  <div className="road-step-line">
                    <div className="road-step-dot active">2</div>
                    <div className="road-step-connector" />
                  </div>
                  <div className="road-step-content">
                    <div className="road-step-title">Hitta dina svagheter</div>
                    <div className="road-step-sub">Diagnostik-analys av dina ämnen</div>
                  </div>
                </div>
                <div className="road-step">
                  <div className="road-step-line">
                    <div className="road-step-dot future">3</div>
                    <div className="road-step-connector" />
                  </div>
                  <div className="road-step-content">
                    <div className="road-step-title">Träna smart</div>
                    <div className="road-step-sub">Fokusera på det du behöver</div>
                  </div>
                </div>
                <div className="road-step">
                  <div className="road-step-line">
                    <div className="road-step-dot future">🏁</div>
                  </div>
                  <div className="road-step-content">
                    <div className="road-step-title">Klara provet!</div>
                    <div className="road-step-sub">94% lyckas med Huvet</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <QuizDemo />
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES ─── */}
      <section id="kategorier" className="categories-section">
        <div className="categories-header">
          <div className="section-label">
            <span className="section-label-dot" />
            Öva per ämne
          </div>
          <h2 className="section-title">Alla kategorier</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Välj ett ämne och börja öva direkt. Varje kategori har detaljerade förklaringar.
          </p>
        </div>
        <div className="cat-grid">
          <Link href="/vagmarken" className="cat-card">
            <div className="cat-card-icon sign">!</div>
            <div className="cat-card-title">Vägmärken</div>
            <div className="cat-card-count">120+ frågor</div>
            <span className="cat-card-arrow">→</span>
          </Link>
          <Link href="/trafikregler" className="cat-card">
            <div className="cat-card-icon circle">§</div>
            <div className="cat-card-title">Trafikregler</div>
            <div className="cat-card-count">85+ frågor</div>
            <span className="cat-card-arrow">→</span>
          </Link>
          <Link href="/hastighetsgranser" className="cat-card">
            <div className="cat-card-icon speed">50</div>
            <div className="cat-card-title">Hastighetsgränser</div>
            <div className="cat-card-count">45+ frågor</div>
            <span className="cat-card-arrow">→</span>
          </Link>
          <Link href="/riskutbildning" className="cat-card">
            <div className="cat-card-icon risk">⚠️</div>
            <div className="cat-card-title">Riskutbildning</div>
            <div className="cat-card-count">60+ frågor</div>
            <span className="cat-card-arrow">→</span>
          </Link>
          <Link href="/ovningskörning" className="cat-card">
            <div className="cat-card-icon rect">🚗</div>
            <div className="cat-card-title">Övningskörning</div>
            <div className="cat-card-count">40+ frågor</div>
            <span className="cat-card-arrow">→</span>
          </Link>
          <Link href="/korkortsfragor" className="cat-card">
            <div className="cat-card-icon circle">?</div>
            <div className="cat-card-title">Körkortsfrågor</div>
            <div className="cat-card-count">450+ frågor</div>
            <span className="cat-card-arrow">→</span>
          </Link>
          <Link href="/mc" className="cat-card">
            <div className="cat-card-icon rect">🏍️</div>
            <div className="cat-card-title">MC-körkort</div>
            <div className="cat-card-count">50+ frågor</div>
            <span className="cat-card-arrow">→</span>
          </Link>
          <Link href="/moped" className="cat-card">
            <div className="cat-card-icon triangle" style={{ fontSize: '14px', paddingTop: '12px' }}>🛵</div>
            <div className="cat-card-title">Mopedkörkort</div>
            <div className="cat-card-count">35+ frågor</div>
            <span className="cat-card-arrow">→</span>
          </Link>
        </div>
      </section>

      {/* ─── JOURNEY TIMELINE ─── */}
      <section id="journey" className="journey-section">
        <div className="journey-header">
          <div className="section-label">
            <span className="section-label-dot" />
            Din resa till körkort
          </div>
          <h2 className="section-title">Från nybörjare till godkänd</h2>
          <p className="section-desc">
            Huvet guidar dig genom varje steg. Smart, snabbt, och utan onödig stress.
          </p>
        </div>

        <div className="journey-steps">
          <div className="journey-step">
            <div className="j-content">
              <div className="j-step-num">Steg 1</div>
              <div className="j-step-title">Snabb diagnos</div>
              <div className="j-step-desc">
                Svara på 5 frågor. Huvet analyserar direkt vilka ämnen du behöver fokusera på.
              </div>
              <div className="j-step-time">⏱️ 2 minuter</div>
            </div>
            <div className="j-marker">
              <div className="j-sign s1">1</div>
            </div>
            <div className="j-empty" />
          </div>

          <div className="journey-step">
            <div className="j-empty" />
            <div className="j-marker">
              <div className="j-sign s2">2</div>
            </div>
            <div className="j-content">
              <div className="j-step-num">Steg 2</div>
              <div className="j-step-title">Personlig träningsplan</div>
              <div className="j-step-desc">
                Får ett upplägg baserat på dina svagheter. Ingen slösad tid på det du redan kan.
              </div>
              <div className="j-step-time">📊 Anpassat för dig</div>
            </div>
          </div>

          <div className="journey-step">
            <div className="j-content">
              <div className="j-step-num">Steg 3</div>
              <div className="j-step-title">Daglig övning</div>
              <div className="j-step-desc">
                12 minuter om dagen. Korta sessioner som bygger självförtroende och kunskap.
              </div>
              <div className="j-step-time">⚡ 12 min/dag</div>
            </div>
            <div className="j-marker">
              <div className="j-sign s3">3</div>
            </div>
            <div className="j-empty" />
          </div>

          <div className="journey-step">
            <div className="j-empty" />
            <div className="j-marker">
              <div className="j-sign s4">🏁</div>
            </div>
            <div className="j-content">
              <div className="j-step-num">Resultat</div>
              <div className="j-step-title">Klara provet!</div>
              <div className="j-step-desc">
                94% av Huvets elever klarar körkortsprovet på första försöket. Du kan också.
              </div>
              <div className="j-step-time">🏆 94% godkänns</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GUIDES ─── */}
      <section className="guides-section">
        <div className="guides-header">
          <div className="section-label">
            <span className="section-label-dot" />
            Guider
          </div>
          <h2 className="section-title">Allt du behöver veta</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Djupgående guider om teoriprovet, körprovet och allt däremellan.
          </p>
        </div>
        <div className="guides-grid">
          <Link href="/korprov" className="guide-card">
            <span className="guide-card-emoji">🚗</span>
            <div className="guide-card-title">Körprov — Komplett guide</div>
            <div className="guide-card-desc">
              Allt om uppkörningen: vad som testas, vanliga misstag och hur du förbereder dig bäst.
            </div>
            <span className="guide-card-link">Läs guiden →</span>
          </Link>
          <Link href="/teoriprov" className="guide-card">
            <span className="guide-card-emoji">📝</span>
            <div className="guide-card-title">Teoriprov — Så klarar du det</div>
            <div className="guide-card-desc">
              70 frågor, 65 minuter. Lär dig formatet, rätt studieteknik och vad som brukar komma.
            </div>
            <span className="guide-card-link">Läs guiden →</span>
          </Link>
          <Link href="/ovningskörning" className="guide-card">
            <span className="guide-card-emoji">🛣️</span>
            <div className="guide-card-title">Övningskörning — Regler & tips</div>
            <div className="guide-card-desc">
              Privat eller via trafikskola? Krav, regler och hur du samlar körminuter effektivt.
            </div>
            <span className="guide-card-link">Läs guiden →</span>
          </Link>
          <Link href="/riskutbildning" className="guide-card">
            <span className="guide-card-emoji">⚠️</span>
            <div className="guide-card-title">Riskutbildning 1 & 2</div>
            <div className="guide-card-desc">
              Obligatoriskt för alla. Vad ingår, hur bokar du, och vad kostar det?
            </div>
            <span className="guide-card-link">Läs guiden →</span>
          </Link>
          <Link href="/korkort-kostnad" className="guide-card">
            <span className="guide-card-emoji">💰</span>
            <div className="guide-card-title">Körkort — Vad kostar det?</div>
            <div className="guide-card-desc">
              Komplett prisguide: körskola, teoriprov, uppkörning, riskettan och halkbanan.
            </div>
            <span className="guide-card-link">Läs guiden →</span>
          </Link>
          <Link href="/intensivkurs" className="guide-card">
            <span className="guide-card-emoji">⚡</span>
            <div className="guide-card-title">Intensivkurs körkort</div>
            <div className="guide-card-desc">
              Ta körkort på 2-4 veckor. Fungerar det? Fördelar, nackdelar och vad det kostar.
            </div>
            <span className="guide-card-link">Läs guiden →</span>
          </Link>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="cta-banner">
        <div className="cta-banner-inner">
          <h2 className="cta-banner-title">Redo att klara provet?</h2>
          <p className="cta-banner-sub">
            Börja med 5 gratisfrågor och se exakt var du står. Ingen inloggning krävs.
          </p>
          <a href="#demo" className="btn-yellow">
            Börja öva gratis →
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
