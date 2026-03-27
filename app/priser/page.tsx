'use client';

import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { useState } from 'react';

// Note: metadata is set via layout.tsx for client components

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 4.5L6.75 12.75L3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ZapIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function PriserPage() {
  const [loading, setLoading] = useState<string | null>(null);

  async function handleCheckout(plan: string) {
    setLoading(plan);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Något gick fel. Försök igen.');
        setLoading(null);
      }
    } catch {
      alert('Något gick fel. Försök igen.');
      setLoading(null);
    }
  }

  return (
    <>
      <style>{`
        .pricing-hero {
          background: linear-gradient(135deg, #001a0d 0%, #002e12 50%, #001a0d 100%);
          padding: 8rem 1.5rem 4rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .pricing-hero::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 30% 50%, rgba(0,200,83,0.08) 0%, transparent 50%),
                      radial-gradient(circle at 70% 50%, rgba(0,200,83,0.05) 0%, transparent 50%);
          pointer-events: none;
        }
        .pricing-hero h1 {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.75rem;
          letter-spacing: -0.5px;
          position: relative;
        }
        .pricing-hero h1 span {
          color: #00E676;
        }
        .pricing-hero p {
          color: rgba(255,255,255,0.65);
          font-size: 1.05rem;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.6;
          position: relative;
        }

        .pricing-grid {
          max-width: 1060px;
          margin: -2.5rem auto 0;
          padding: 0 1.5rem 4rem;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          position: relative;
          z-index: 2;
        }

        .pricing-card {
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 16px;
          padding: 2.25rem 1.75rem;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .pricing-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
        }

        .pricing-card.featured {
          border: 2px solid #00C853;
          box-shadow: 0 8px 40px rgba(0,200,83,0.15);
          position: relative;
          transform: scale(1.03);
        }
        .pricing-card.featured:hover {
          transform: scale(1.03) translateY(-2px);
          box-shadow: 0 12px 50px rgba(0,200,83,0.2);
        }

        .card-badge {
          position: absolute;
          top: -13px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #00C853, #00E676);
          color: #fff;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.3rem 1rem;
          border-radius: 100px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .card-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }
        .card-icon.free { background: #f0f0f0; color: #666; }
        .card-icon.premium { background: rgba(0,200,83,0.12); color: #00C853; }
        .card-icon.garanti { background: rgba(0,200,83,0.12); color: #00C853; }

        .card-name {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #111;
          margin: 0 0 0.35rem;
        }
        .card-desc {
          color: #888;
          font-size: 0.82rem;
          line-height: 1.5;
          margin: 0 0 1.25rem;
        }
        .card-price {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 2.75rem;
          font-weight: 700;
          color: #111;
          margin: 0 0 0.15rem;
          line-height: 1;
        }
        .card-price-sub {
          color: #999;
          font-size: 0.78rem;
          margin: 0 0 1.5rem;
        }

        .card-features {
          list-style: none;
          padding: 0;
          margin: 0 0 1.75rem;
          flex: 1;
        }
        .card-features li {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: #444;
          padding: 0.45rem 0;
        }
        .card-features li .check { color: #00C853; }
        .card-features li .x { color: #ccc; }
        .card-features li.disabled { color: #bbb; }

        .card-btn {
          display: block;
          width: 100%;
          padding: 0.85rem;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 600;
          text-align: center;
          cursor: pointer;
          border: none;
          transition: all 0.15s ease;
          text-decoration: none;
        }
        .card-btn.outline {
          background: #fff;
          color: #111;
          border: 1.5px solid #ddd;
        }
        .card-btn.outline:hover { border-color: #bbb; background: #fafafa; }
        .card-btn.primary {
          background: linear-gradient(135deg, #00C853, #00E676);
          color: #fff;
          box-shadow: 0 4px 15px rgba(0,200,83,0.3);
        }
        .card-btn.primary:hover { box-shadow: 0 6px 25px rgba(0,200,83,0.4); transform: translateY(-1px); }
        .card-btn.dark {
          background: #111;
          color: #fff;
        }
        .card-btn.dark:hover { background: #222; }
        .card-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .pricing-faq {
          max-width: 680px;
          margin: 0 auto 4rem;
          padding: 0 1.5rem;
        }
        .pricing-faq h2 {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 1.6rem;
          font-weight: 700;
          text-align: center;
          margin: 0 0 2rem;
        }
        .faq-item {
          border-bottom: 1px solid #eee;
          padding: 1.15rem 0;
        }
        .faq-q {
          font-weight: 600;
          font-size: 0.92rem;
          color: #111;
          margin: 0 0 0.4rem;
        }
        .faq-a {
          color: #666;
          font-size: 0.84rem;
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 420px;
            gap: 1rem;
          }
          .pricing-card.featured {
            transform: none;
            order: -1;
          }
          .pricing-card.featured:hover {
            transform: translateY(-2px);
          }
          .pricing-hero {
            padding: 7rem 1.5rem 3.5rem;
          }
        }
      `}</style>

      <SiteHeader />

      <section className="pricing-hero">
        <h1>Välj din <span>plan</span></h1>
        <p>Börja gratis och uppgradera när du vill. Engångsbetalning — inga dolda avgifter.</p>
      </section>

      <div className="pricing-grid">
        {/* Gratis */}
        <div className="pricing-card">
          <div className="card-icon free"><ZapIcon /></div>
          <h3 className="card-name">Gratis</h3>
          <p className="card-desc">Kom igång med grunderna</p>
          <div className="card-price">0 kr</div>
          <p className="card-price-sub">Alltid gratis</p>
          <ul className="card-features">
            <li><span className="check"><CheckIcon /></span>50 övningsfrågor</li>
            <li><span className="check"><CheckIcon /></span>Grundläggande statistik</li>
            <li><span className="check"><CheckIcon /></span>Vägmärken-guide</li>
            <li className="disabled"><span className="x"><XIcon /></span>Övningsprov</li>
            <li className="disabled"><span className="x"><XIcon /></span>Svaghetsanalys</li>
            <li className="disabled"><span className="x"><XIcon /></span>Klargaranti</li>
          </ul>
          <a href="/ovningsprov" className="card-btn outline">Börja öva</a>
        </div>

        {/* Premium — featured */}
        <div className="pricing-card featured">
          <div className="card-badge">Populärast</div>
          <div className="card-icon premium"><StarIcon /></div>
          <h3 className="card-name">Premium</h3>
          <p className="card-desc">Allt du behöver för att klara provet</p>
          <div className="card-price">99 kr</div>
          <p className="card-price-sub">Engångsbetalning</p>
          <ul className="card-features">
            <li><span className="check"><CheckIcon /></span>Alla 450+ frågor</li>
            <li><span className="check"><CheckIcon /></span>Obegränsade övningsprov</li>
            <li><span className="check"><CheckIcon /></span>Personlig svaghetsanalys</li>
            <li><span className="check"><CheckIcon /></span>Detaljerad statistik</li>
            <li><span className="check"><CheckIcon /></span>Alla guider</li>
            <li className="disabled"><span className="x"><XIcon /></span>Klargaranti</li>
          </ul>
          <button
            className="card-btn primary"
            onClick={() => handleCheckout('premium')}
            disabled={loading === 'premium'}
          >
            {loading === 'premium' ? 'Laddar...' : 'Välj Premium'}
          </button>
        </div>

        {/* Garanti */}
        <div className="pricing-card">
          <div className="card-icon garanti"><ShieldIcon /></div>
          <h3 className="card-name">Garanti</h3>
          <p className="card-desc">Premium + pengarna tillbaka om du inte klarar provet</p>
          <div className="card-price">249 kr</div>
          <p className="card-price-sub">Engångsbetalning</p>
          <ul className="card-features">
            <li><span className="check"><CheckIcon /></span>Allt i Premium</li>
            <li><span className="check"><CheckIcon /></span>Obegränsade övningsprov</li>
            <li><span className="check"><CheckIcon /></span>Personlig svaghetsanalys</li>
            <li><span className="check"><CheckIcon /></span>Detaljerad statistik</li>
            <li><span className="check"><CheckIcon /></span>Alla guider</li>
            <li><span className="check"><CheckIcon /></span>Klargaranti — pengarna tillbaka</li>
          </ul>
          <button
            className="card-btn dark"
            onClick={() => handleCheckout('garanti')}
            disabled={loading === 'garanti'}
          >
            {loading === 'garanti' ? 'Laddar...' : 'Välj Garanti'}
          </button>
        </div>
      </div>

      <section className="pricing-faq">
        <h2>Vanliga frågor</h2>
        <div className="faq-item">
          <p className="faq-q">Är det verkligen en engångsbetalning?</p>
          <p className="faq-a">Ja. Du betalar en gång och har tillgång för alltid. Inga prenumerationer, inga dolda avgifter.</p>
        </div>
        <div className="faq-item">
          <p className="faq-q">Hur fungerar klargarantin?</p>
          <p className="faq-a">Om du har Garanti-planen och inte klarar körkortsprovet inom 6 månader efter köpet, får du pengarna tillbaka. Skicka bara ditt provresultat till oss.</p>
        </div>
        <div className="faq-item">
          <p className="faq-q">Vilka betalmetoder accepteras?</p>
          <p className="faq-a">Vi accepterar Visa, Mastercard och andra vanliga korttyper. Betalningen hanteras säkert via Stripe.</p>
        </div>
        <div className="faq-item">
          <p className="faq-q">Kan jag uppgradera från Gratis till Premium?</p>
          <p className="faq-a">Absolut. Du kan uppgradera när som helst. Din statistik och framsteg sparas.</p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
