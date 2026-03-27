'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function TackContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(180deg, #f0f7f3 0%, #fff 100%)',
      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
      padding: '2rem',
    }}>
      <div style={{ textAlign: 'center', maxWidth: 500 }}>
        {/* Success icon */}
        <div style={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: '#1DB954',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
          boxShadow: '0 8px 24px rgba(0,107,63,0.25)',
        }}>
          <span style={{ fontSize: '2rem', color: '#fff' }}>✓</span>
        </div>

        <h1 style={{
          fontFamily: "var(--font-playfair), 'Playfair Display', serif",
          fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
          fontWeight: 800,
          color: '#0d1f17',
          margin: '0 0 0.75rem',
        }}>
          Välkommen till Premium!
        </h1>

        <p style={{ fontSize: '1.05rem', color: '#5a6b62', lineHeight: 1.7, margin: '0 0 2rem' }}>
          Tack för ditt köp! Du har nu tillgång till alla 215+ frågor, provsimulering och svaghetsanalys. Lycka till med körkortet!
        </p>

        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/ovningsprov" style={{
            padding: '0.9rem 2rem',
            background: '#1DB954',
            color: '#fff',
            borderRadius: 14,
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: '0.95rem',
          }}>
            Börja öva →
          </Link>

          {sessionId && (
            <form action="/api/create-portal-session" method="POST">
              <input type="hidden" name="sessionId" value={sessionId} />
              <button type="submit" style={{
                padding: '0.9rem 1.5rem',
                background: '#f0f7f3',
                color: '#1DB954',
                border: '1px solid #dceee5',
                borderRadius: 14,
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}>
                Hantera prenumeration
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

export default function TackPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Laddar...</div>}>
      <TackContent />
    </Suspense>
  );
}
