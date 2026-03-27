import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Link from 'next/link';

export const metadata = {
  title: 'Tack för ditt köp — Huvet',
  description: 'Betalningen lyckades! Du har nu tillgång till alla funktioner.',
};

const CheckCircle = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" stroke="#1DB954" strokeWidth="3" fill="rgba(0,200,83,0.08)" />
    <path d="M20 33l8 8 16-16" stroke="#1DB954" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function TackPage() {
  return (
    <>
      <style>{`
        .tack-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .tack-main {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8rem 1.5rem 4rem;
        }
        .tack-card {
          text-align: center;
          max-width: 480px;
        }
        .tack-icon {
          margin-bottom: 1.5rem;
        }
        .tack-title {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          color: #111;
          margin: 0 0 0.75rem;
        }
        .tack-desc {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.7;
          margin: 0 0 2rem;
        }
        .tack-btn {
          display: inline-block;
          padding: 0.85rem 2rem;
          background: linear-gradient(135deg, #1DB954, #24D963);
          color: #fff;
          font-size: 0.9rem;
          font-weight: 600;
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(0,200,83,0.3);
          transition: all 0.15s ease;
        }
        .tack-btn:hover {
          box-shadow: 0 6px 25px rgba(0,200,83,0.4);
          transform: translateY(-1px);
        }
      `}</style>

      <div className="tack-wrapper">
        <SiteHeader />
        <main className="tack-main">
          <div className="tack-card">
            <div className="tack-icon"><CheckCircle /></div>
            <h1 className="tack-title">Tack för ditt köp!</h1>
            <p className="tack-desc">
              Betalningen gick igenom. Du har nu tillgång till alla premiumfunktioner. 
              Börja öva direkt och ta dig ett steg närmare körkortet.
            </p>
            <Link href="/ovningsprov" className="tack-btn">
              Börja öva nu
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
