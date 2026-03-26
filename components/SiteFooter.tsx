import Link from 'next/link';

export default function SiteFooter() {
  return (
    <>
      <style>{`
        .sf {
          background: #081610;
          color: rgba(255,255,255,0.5);
          padding: 80px 24px 40px;
          font-family: var(--font-dm-sans), sans-serif;
        }
        .sf-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .sf-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1.4fr 1fr;
          gap: 48px;
          margin-bottom: 64px;
        }
        .sf-brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .sf-brand-mark {
          width: 38px;
          height: 38px;
          background: #006B3F;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sf-brand-name {
          font-family: var(--font-playfair), serif;
          font-size: 22px;
          font-weight: 900;
          color: white;
        }
        .sf-brand-desc {
          font-size: 14px;
          line-height: 1.7;
          max-width: 240px;
          margin-bottom: 20px;
        }
        .sf-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(0,107,63,0.2);
          color: #4ade96;
          font-size: 12px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 999px;
        }
        .sf-col-title {
          color: white;
          font-weight: 700;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 20px;
        }
        .sf-link {
          display: block;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          font-size: 14px;
          padding: 6px 0;
          transition: color 0.15s;
        }
        .sf-link:hover { color: white; }
        .sf-bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 28px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 13px;
        }
        @media (max-width: 768px) {
          .sf-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
        }
        @media (max-width: 480px) {
          .sf-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>

      <footer className="sf">
        <div className="sf-inner">
          <div className="sf-grid">
            {/* Brand */}
            <div>
              <div className="sf-brand-logo">
                <div className="sf-brand-mark">
                  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="11" r="9" stroke="white" strokeWidth="2.2"/>
                    <circle cx="11" cy="11" r="2.8" fill="white"/>
                    <line x1="11" y1="2" x2="11" y2="8.2" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="3.6" y1="15" x2="8.5" y2="12.3" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="18.4" y1="15" x2="13.5" y2="12.3" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="sf-brand-name">Huvet</span>
              </div>
              <p className="sf-brand-desc">
                Sveriges smartaste förberedelse för körkortsprovet. Öva med 450+ frågor och klara provet på första försöket.
              </p>
              <div className="sf-badge">
                🇸🇪 Byggt i Sverige
              </div>
            </div>

            {/* Produkt */}
            <div>
              <div className="sf-col-title">Produkt</div>
              <a href="#demo" className="sf-link">Övningsprov</a>
              <a href="#demo" className="sf-link">Diagnostik</a>
              <a href="#demo" className="sf-link">Provsimulering</a>
              <a href="#kategorier" className="sf-link">Alla kategorier</a>
            </div>

            {/* Guider */}
            <div>
              <div className="sf-col-title">Guider</div>
              <Link href="/teoriprov" className="sf-link">Teoriprov</Link>
              <Link href="/korprov" className="sf-link">Körprov</Link>
              <Link href="/ovningskörning" className="sf-link">Övningskörning</Link>
              <Link href="/riskutbildning" className="sf-link">Riskutbildning</Link>
              <Link href="/intensivkurs" className="sf-link">Intensivkurs</Link>
              <Link href="/korkort-kostnad" className="sf-link">Körkort kostnad</Link>
              <Link href="/vagmarken" className="sf-link">Vägmärken</Link>
              <Link href="/trafikregler" className="sf-link">Trafikregler</Link>
              <Link href="/hastighetsgranser" className="sf-link">Hastighetsgränser</Link>
              <Link href="/korkortsfragor" className="sf-link">Körkortsfrågor</Link>
              <Link href="/mc" className="sf-link">MC-körkort</Link>
              <Link href="/moped" className="sf-link">Mopedkörkort</Link>
            </div>

            {/* Info */}
            <div>
              <div className="sf-col-title">Info</div>
              <a href="#" className="sf-link">Om oss</a>
              <a href="#" className="sf-link">Kontakt</a>
              <a href="#" className="sf-link">Integritetspolicy</a>
            </div>
          </div>

          <div className="sf-bottom">
            <span>© 2026 Huvet (huvet.se). Alla rättigheter förbehållna.</span>
            <span>Ingen officiell koppling till Trafikverket.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
