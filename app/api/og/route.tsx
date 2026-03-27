import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a1f14 0%, #0d2a1a 40%, #112d1e 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle glow */}
        <div
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,200,83,0.15), transparent 70%)',
            top: '-100px',
            right: '-50px',
            display: 'flex',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255,255,255,0.1)',
            padding: '8px 20px',
            borderRadius: '100px',
            marginBottom: '24px',
            border: '1px solid rgba(255,255,255,0.15)',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              background: '#00C853',
              borderRadius: '50%',
              display: 'flex',
            }}
          />
          <span style={{ color: '#fff', fontSize: '18px', fontWeight: 600 }}>
            94% klarar provet
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 800,
            color: '#fff',
            textAlign: 'center',
            lineHeight: 1.1,
            marginBottom: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <span>Klara körkortsprovet.</span>
          <span style={{ color: '#00E676' }}>Första gången.</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '24px',
            color: 'rgba(255,255,255,0.6)',
            textAlign: 'center',
            maxWidth: '700px',
            display: 'flex',
          }}
        >
          450+ teorifrågor · Svaghetsanalys · 100% gratis
        </div>

        {/* Logo */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span style={{ fontSize: '28px', fontWeight: 800, color: '#fff' }}>
            Huvet
          </span>
          <span style={{ fontSize: '20px', color: 'rgba(255,255,255,0.4)' }}>
            huvet.se
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
