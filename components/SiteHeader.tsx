'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .sh {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0,107,63,0.08);
          transition: background 0.3s;
        }
        .sh-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }
        .sh-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .sh-logo-mark {
          width: 42px;
          height: 42px;
          background: #006B3F;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
        }
        .sh-logo:hover .sh-logo-mark { transform: rotate(-4deg) scale(1.05); }
        .sh-logo-name {
          font-family: var(--font-playfair), serif;
          font-size: 24px;
          font-weight: 900;
          color: #0d1f17;
          letter-spacing: -0.03em;
        }
        .sh-nav {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .sh-nav a {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #444;
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 12px;
          transition: color 0.15s, background 0.15s;
        }
        .sh-nav a:hover {
          color: #006B3F;
          background: rgba(0,107,63,0.06);
        }
        .sh-cta {
          background: #006B3F;
          color: white !important;
          padding: 12px 28px !important;
          border-radius: 999px !important;
          font-weight: 700 !important;
          font-size: 14px !important;
          transition: background 0.15s, transform 0.15s !important;
          box-shadow: 0 2px 12px rgba(0,107,63,0.25);
        }
        .sh-cta:hover {
          background: #004d2d !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(0,107,63,0.3) !important;
        }
        .sh-burger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }
        .sh-burger span {
          display: block;
          width: 24px;
          height: 2.5px;
          background: #0d1f17;
          border-radius: 2px;
          margin: 5px 0;
          transition: transform 0.3s, opacity 0.3s;
        }
        .sh-burger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .sh-burger.open span:nth-child(2) { opacity: 0; }
        .sh-burger.open span:nth-child(3) { transform: rotate(-45deg) translate(6px, -6px); }
        .sh-mobile {
          display: none;
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          bottom: 0;
          background: white;
          z-index: 999;
          padding: 32px 24px;
          flex-direction: column;
          gap: 8px;
          overflow-y: auto;
        }
        .sh-mobile.open { display: flex; }
        .sh-mobile a {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #0d1f17;
          text-decoration: none;
          padding: 16px 20px;
          border-radius: 16px;
          transition: background 0.15s;
        }
        .sh-mobile a:hover { background: #f0f7f3; }
        .sh-mobile-cta {
          background: #006B3F !important;
          color: white !important;
          text-align: center;
          border-radius: 999px !important;
          margin-top: 16px;
          font-weight: 700 !important;
          font-size: 17px !important;
          padding: 18px 20px !important;
        }
        @media (max-width: 840px) {
          .sh-nav { display: none; }
          .sh-burger { display: block; }
        }
      `}</style>

      <header className="sh">
        <div className="sh-inner">
          <Link href="/" className="sh-logo">
            <div className="sh-logo-mark">
              <svg width="24" height="24" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="9" stroke="white" strokeWidth="2.2"/>
                <circle cx="11" cy="11" r="2.8" fill="white"/>
                <line x1="11" y1="2" x2="11" y2="8.2" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                <line x1="3.6" y1="15" x2="8.5" y2="12.3" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                <line x1="18.4" y1="15" x2="13.5" y2="12.3" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="sh-logo-name">Huvet</span>
          </Link>

          <nav className="sh-nav">
            <Link href="/teoriprov">Teoriprov</Link>
            <Link href="/korprov">Körprov</Link>
            <Link href="/vagmarken">Vägmärken</Link>
            <Link href="/korkort-kostnad">Kostnad</Link>
            <Link href="/mc">MC</Link>
            <a href="#demo" className="sh-cta">Börja gratis</a>
          </nav>

          <button
            className={`sh-burger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Meny"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`sh-mobile ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
        <Link href="/teoriprov">Teoriprov</Link>
        <Link href="/korprov">Körprov</Link>
        <Link href="/vagmarken">Vägmärken</Link>
        <Link href="/trafikregler">Trafikregler</Link>
        <Link href="/hastighetsgranser">Hastighetsgränser</Link>
        <Link href="/riskutbildning">Riskutbildning</Link>
        <Link href="/korkort-kostnad">Körkort kostnad</Link>
        <Link href="/mc">MC-körkort</Link>
        <Link href="/moped">Mopedkörkort</Link>
        <a href="#demo" className="sh-mobile-cta">Börja öva gratis</a>
      </div>
    </>
  );
}
