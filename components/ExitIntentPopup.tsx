'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Only on desktop
    if (typeof window === 'undefined' || window.innerWidth < 768) return;

    // Don't show if already shown this session
    if (sessionStorage.getItem('huvet_exit_shown')) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        setShow(true);
        sessionStorage.setItem('huvet_exit_shown', 'true');
      }
    };

    // Delay registering to avoid triggering on page load
    const timeout = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [dismissed]);

  if (!show || dismissed) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(4px)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      animation: 'fadeIn 300ms ease',
    }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
      <div style={{
        background: '#fff',
        borderRadius: 20,
        padding: '2.5rem 2rem',
        maxWidth: 460,
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 24px 80px rgba(0,0,0,0.25)',
        animation: 'slideUp 400ms ease',
        position: 'relative',
      }}>
        <button
          onClick={() => setDismissed(true)}
          style={{
            position: 'absolute',
            top: 12,
            right: 16,
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            color: '#999',
            cursor: 'pointer',
            lineHeight: 1,
          }}
        >
          ×
        </button>
        <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🧠</div>
        <h2 style={{
          fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
          fontSize: '1.4rem',
          fontWeight: 700,
          color: '#111',
          margin: '0 0 0.5rem',
        }}>
          Vänta! Testa dig själv
        </h2>
        <p style={{
          color: '#666',
          fontSize: '0.95rem',
          lineHeight: 1.6,
          margin: '0 0 1.5rem',
        }}>
          Svara på 5 gratis körkortsfrågor och se hur redo du är för teoriprovet.
        </p>
        <Link href="/ovningsprov" style={{
          display: 'block',
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
          Gör 5 gratis frågor →
        </Link>
        <button
          onClick={() => setDismissed(true)}
          style={{
            background: 'none',
            border: 'none',
            color: '#999',
            fontSize: '0.85rem',
            cursor: 'pointer',
          }}
        >
          Nej tack
        </button>
      </div>
    </div>
  );
}
