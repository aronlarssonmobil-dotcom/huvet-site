'use client';

import { useState, useRef, useCallback } from 'react';

type ShareResultProps = {
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  streak?: number;
};

export default function ShareResult({ score, total, percentage, passed, streak }: ShareResultProps) {
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateImage = useCallback((): Promise<Blob | null> => {
    return new Promise((resolve) => {
      const canvas = canvasRef.current;
      if (!canvas) { resolve(null); return; }

      const ctx = canvas.getContext('2d');
      if (!ctx) { resolve(null); return; }

      const w = 600;
      const h = 340;
      canvas.width = w;
      canvas.height = h;

      // Background
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#0d1f17');
      grad.addColorStop(1, '#003d24');
      ctx.fillStyle = grad;
      ctx.roundRect(0, 0, w, h, 20);
      ctx.fill();

      // Decorative circle
      ctx.beginPath();
      ctx.arc(w - 60, 60, 80, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(245, 208, 32, 0.08)';
      ctx.fill();

      // Score circle
      const cx = 100;
      const cy = 170;
      const r = 55;

      // Circle background
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = passed ? '#006B3F' : '#dc2626';
      ctx.fill();

      // Score text
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 32px system-ui';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${percentage}%`, cx, cy - 8);

      ctx.font = '14px system-ui';
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.fillText(`${score}/${total}`, cx, cy + 20);

      // Result text
      ctx.textAlign = 'left';
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 28px system-ui';
      ctx.fillText(passed ? 'Godkänt!' : 'Inte godkänt', 180, 130);

      ctx.font = '15px system-ui';
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.fillText('på Huvets övningsprov', 180, 158);

      // Streak
      if (streak && streak > 1) {
        ctx.fillStyle = '#f5d020';
        ctx.font = 'bold 16px system-ui';
        ctx.fillText(`🔥 ${streak} dagars streak`, 180, 195);
      }

      // Challenge text
      ctx.fillStyle = '#f5d020';
      ctx.font = 'bold 17px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Klarar du bättre? → huvet.se', w / 2, h - 60);

      // Huvet logo
      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      ctx.font = 'bold 13px system-ui';
      ctx.textAlign = 'right';
      ctx.fillText('huvet.se', w - 24, h - 20);

      canvas.toBlob((blob) => resolve(blob), 'image/png');
    });
  }, [score, total, percentage, passed, streak]);

  const handleShare = useCallback(async () => {
    const blob = await generateImage();
    if (!blob) return;

    const shareText = `Jag fick ${percentage}% (${score}/${total}) på Huvets körkortsprov! ${passed ? '✅ Godkänt!' : '❌ Inte godkänt.'} Klarar du bättre? 👉 huvet.se/ovningsprov`;

    // Try native share API first (mobile)
    if (navigator.share) {
      try {
        const file = new File([blob], 'huvet-resultat.png', { type: 'image/png' });
        await navigator.share({
          title: 'Mitt resultat på Huvet',
          text: shareText,
          files: [file],
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    // Fallback: copy text to clipboard
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Last resort
    }
  }, [generateImage, percentage, score, total, passed]);

  const handleDownload = useCallback(async () => {
    const blob = await generateImage();
    if (!blob) return;

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'huvet-resultat.png';
    a.click();
    URL.revokeObjectURL(url);
  }, [generateImage]);

  return (
    <div style={{ marginTop: '1rem' }}>
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <button
          onClick={handleShare}
          style={{
            flex: 1,
            padding: '0.75rem 1.25rem',
            background: '#f5d020',
            color: '#0d1f17',
            border: 'none',
            borderRadius: 12,
            fontWeight: 700,
            fontSize: '0.9rem',
            cursor: 'pointer',
            fontFamily: 'inherit',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
          }}
        >
          {copied ? '✓ Kopierat!' : '📤 Dela resultat'}
        </button>

        <button
          onClick={handleDownload}
          style={{
            padding: '0.75rem 1rem',
            background: '#f0f7f3',
            color: '#006B3F',
            border: '1px solid #dceee5',
            borderRadius: 12,
            fontWeight: 700,
            fontSize: '0.9rem',
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          📥
        </button>
      </div>
    </div>
  );
}
