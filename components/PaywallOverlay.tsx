'use client';

import Link from 'next/link';
import { DAILY_LIMIT, getRemainingQuestions } from '../lib/paywall';

export default function PaywallOverlay() {
  const remaining = getRemainingQuestions();

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.7)',
      backdropFilter: 'blur(8px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 20,
        padding: '2.5rem 2rem',
        maxWidth: 440,
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 24px 80px rgba(0,0,0,0.3)',
      }}>
        <div style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #00C853, #00E676)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.25rem',
          fontSize: '1.8rem',
        }}>
          🔒
        </div>
        <h2 style={{
          fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#111',
          margin: '0 0 0.5rem',
        }}>
          Du har nått dagens gräns
        </h2>
        <p style={{
          color: '#666',
          fontSize: '0.95rem',
          lineHeight: 1.6,
          margin: '0 0 1.5rem',
        }}>
          Du har svarat på {DAILY_LIMIT} frågor idag. Uppgradera till Premium för obegränsat övande och svaghetsanalys.
        </p>
        <Link href="/priser" style={{
          display: 'block',
          width: '100%',
          padding: '0.95rem',
          background: 'linear-gradient(135deg, #00C853, #00E676)',
          color: '#fff',
          borderRadius: 12,
          fontWeight: 700,
          fontSize: '1rem',
          textDecoration: 'none',
          boxShadow: '0 4px 20px rgba(0,200,83,0.3)',
          marginBottom: '0.75rem',
        }}>
          Uppgradera — 99 kr
        </Link>
        <p style={{
          color: '#999',
          fontSize: '0.8rem',
          margin: 0,
        }}>
          Engångsbetalning · Inga prenumerationer
        </p>
      </div>
    </div>
  );
}
