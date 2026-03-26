'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1rem 2.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-logo {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          text-shadow: 0 2px 8px rgba(0,0,0,0.3);
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav-links a {
          color: rgba(255,255,255,0.9);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          text-shadow: 0 1px 4px rgba(0,0,0,0.2);
          transition: color 0.2s;
        }
        .nav-links a:hover {
          color: #fff;
        }
        .nav-cta {
          background: #00C853 !important;
          color: #fff !important;
          padding: 0.6rem 1.5rem !important;
          border-radius: 10px !important;
          font-weight: 600 !important;
          text-shadow: none !important;
          transition: background 0.2s, transform 0.2s !important;
        }
        .nav-cta:hover {
          background: #00E676 !important;
          transform: translateY(-1px) !important;
        }
        .nav-burger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }
        .nav-burger span {
          display: block;
          width: 24px;
          height: 2.5px;
          background: #fff;
          border-radius: 2px;
          margin: 5px 0;
          transition: transform 0.3s, opacity 0.3s;
        }
        .nav-burger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .nav-burger.open span:nth-child(2) { opacity: 0; }
        .nav-burger.open span:nth-child(3) { transform: rotate(-45deg) translate(6px, -6px); }
        .nav-mobile {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.95);
          z-index: 99;
          padding: 100px 24px 32px;
          flex-direction: column;
          gap: 8px;
          overflow-y: auto;
        }
        .nav-mobile.open { display: flex; }
        .nav-mobile a {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          padding: 16px 20px;
          border-radius: 12px;
          transition: background 0.15s;
        }
        .nav-mobile a:hover { background: rgba(255,255,255,0.08); }
        .nav-mobile-cta {
          background: #00C853 !important;
          color: #fff !important;
          text-align: center;
          border-radius: 14px !important;
          margin-top: 16px;
          font-weight: 700 !important;
          font-size: 1.1rem !important;
          padding: 18px 20px !important;
        }
        @media (max-width: 768px) {
          .nav { padding: 1rem 1.5rem; }
          .nav-links { display: none; }
          .nav-burger { display: block; }
        }
      `}</style>

      <nav className="nav">
        <Link href="/" className="nav-logo">Huvet</Link>
        <div className="nav-links">
          <Link href="/teoriprov">Teoriprov</Link>
          <Link href="/vagmarken">Vägmärken</Link>
          <Link href="/trafikregler">Trafikregler</Link>
          <a href="#demo" className="nav-cta">Börja öva</a>
        </div>
        <button
          className={`nav-burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meny"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`nav-mobile ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
        <Link href="/teoriprov">Teoriprov</Link>
        <Link href="/korprov">Körprov</Link>
        <Link href="/vagmarken">Vägmärken</Link>
        <Link href="/trafikregler">Trafikregler</Link>
        <Link href="/hastighetsgranser">Hastighetsgränser</Link>
        <Link href="/riskutbildning">Riskutbildning</Link>
        <Link href="/korkort-kostnad">Körkort kostnad</Link>
        <Link href="/mc">MC-körkort</Link>
        <Link href="/moped">Mopedkörkort</Link>
        <a href="#demo" className="nav-mobile-cta">Börja öva gratis</a>
      </div>
    </>
  );
}
