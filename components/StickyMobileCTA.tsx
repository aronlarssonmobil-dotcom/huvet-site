'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on mobile
    if (typeof window === 'undefined' || window.innerWidth > 768) return;

    const handleScroll = () => {
      // Show after scrolling 300px
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <>
      <style>{`
        .sticky-mobile-cta {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 90;
          padding: 12px 16px;
          padding-bottom: max(12px, env(safe-area-inset-bottom));
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(12px);
          border-top: 1px solid #e8e8e8;
          display: none;
          animation: slideUpCTA 300ms ease;
        }
        @keyframes slideUpCTA { from { transform: translateY(100%); } to { transform: translateY(0); } }
        @media (max-width: 768px) {
          .sticky-mobile-cta { display: block; }
        }
      `}</style>
      <div className="sticky-mobile-cta">
        <Link href="/ovningsprov" style={{
          display: 'block',
          width: '100%',
          padding: '14px',
          background: 'linear-gradient(135deg, #1DB954, #24D963)',
          color: '#fff',
          borderRadius: 12,
          fontWeight: 700,
          fontSize: '0.95rem',
          textDecoration: 'none',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(0,200,83,0.3)',
        }}>
          Börja öva — Gratis
        </Link>
      </div>
    </>
  );
}
