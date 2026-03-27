import Link from 'next/link';

export default function SiteFooter() {
  return (
    <>
      <style>{`
        .site-footer {
          border-top: 1px solid #f0f0f0;
          padding: 3.5rem 2.5rem 2rem;
        }
        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 2.5rem;
        }
        .footer-brand {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 0.6rem;
        }
        .footer-desc {
          color: #888;
          font-size: 0.78rem;
          line-height: 1.8;
        }
        .footer-col-title {
          font-weight: 700;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #999;
          margin-bottom: 0.85rem;
        }
        .footer-links {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .footer-links li {
          margin-bottom: 0.4rem;
        }
        .footer-links a {
          color: #888;
          text-decoration: none;
          font-size: 0.78rem;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: #111;
        }
        .footer-bottom {
          max-width: 1100px;
          margin: 2.5rem auto 0;
          padding-top: 1.5rem;
          border-top: 1px solid #f0f0f0;
          text-align: center;
          color: #ccc;
          font-size: 0.72rem;
        }
        @media (max-width: 768px) {
          .footer-inner { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .footer-inner { grid-template-columns: 1fr; }
        }
      `}</style>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">Huvet</div>
            <p className="footer-desc">
              Sveriges smartaste plattform för körkortsprovet. Öva, lär dig och klara provet — gratis.
            </p>
          </div>
          <div>
            <div className="footer-col-title">Öva</div>
            <ul className="footer-links">
              <li><Link href="/teoriprov">Teoriprov</Link></li>
              <li><Link href="/vagmarken">Vägmärken</Link></li>
              <li><Link href="/trafikregler">Trafikregler</Link></li>
              <li><Link href="/ovningsprov">Övningsprov</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Guider</div>
            <ul className="footer-links">
              <li><Link href="/vagmarken-guide">Vägmärken guide</Link></li>
              <li><Link href="/trafikregler-guide">Trafikregler guide</Link></li>
              <li><Link href="/hastighetsgranser-guide">Hastighetsgränser</Link></li>
              <li><Link href="/korkort-kostnad-guide">Körkort kostnad</Link></li>
              <li><Link href="/riskettan">Riskettan</Link></li>
              <li><Link href="/risktvaan">Risktvåan</Link></li>
              <li><Link href="/teoriprov-tips">Teoriprov-tips</Link></li>
              <li><Link href="/uppkorning-tips">Uppkörning-tips</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Huvet</div>
            <ul className="footer-links">
              <li><Link href="/priser">Se priser →</Link></li>
              <li><Link href="/om-oss">Om oss</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">© 2026 Huvet. Alla rättigheter förbehållna.</div>
      </footer>
    </>
  );
}
