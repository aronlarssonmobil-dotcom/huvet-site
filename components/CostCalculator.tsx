'use client';

import { useState, useMemo } from 'react';

type PackageType = 'privatist' | 'trafikskola-budget' | 'trafikskola-paket';

const packages: Record<PackageType, { label: string; description: string }> = {
  privatist: { label: 'Privatist', description: 'Övningskör privat med handledare' },
  'trafikskola-budget': { label: 'Trafikskola (budget)', description: 'Köp enstaka lektioner' },
  'trafikskola-paket': { label: 'Trafikskola (paket)', description: 'Helpaket med alla moment' },
};

type CostItem = {
  label: string;
  amount: number;
  included: boolean;
  note?: string;
};

export default function CostCalculator() {
  const [pkg, setPkg] = useState<PackageType>('trafikskola-budget');
  const [extraLessons, setExtraLessons] = useState(10);
  const [hasHandledarkurs, setHasHandledarkurs] = useState(false);
  const [region, setRegion] = useState<'stockholm' | 'goteborg' | 'malmo' | 'other'>('other');

  const regionMultiplier = region === 'stockholm' ? 1.15 : region === 'goteborg' ? 1.1 : region === 'malmo' ? 1.08 : 1.0;
  const lessonPrice = Math.round(650 * regionMultiplier);

  const costs = useMemo((): CostItem[] => {
    const items: CostItem[] = [];

    // Körkortstillstånd
    items.push({ label: 'Körkortstillstånd', amount: 280, included: true, note: 'Obligatoriskt' });

    // Syntest
    items.push({ label: 'Syntest', amount: 0, included: true, note: 'Gratis hos optiker' });

    // Handledarkurs (privatist)
    if (pkg === 'privatist') {
      items.push({ label: 'Handledarkurs', amount: hasHandledarkurs ? 0 : 500, included: true, note: hasHandledarkurs ? 'Redan avklarad' : 'Krävs för övningskörning' });
    }

    // Teori
    if (pkg === 'privatist') {
      items.push({ label: 'Teoribok/app', amount: 299, included: true, note: 'Eller gratis med Huvet!' });
    } else if (pkg === 'trafikskola-budget') {
      items.push({ label: 'Teorikurs (trafikskola)', amount: Math.round(3500 * regionMultiplier), included: true });
    }

    // Körlektioner
    if (pkg === 'privatist') {
      items.push({ label: `Körlektioner (${Math.max(0, extraLessons)} st á ${lessonPrice} kr)`, amount: Math.max(0, extraLessons) * lessonPrice, included: extraLessons > 0, note: 'Frivilliga lektioner för extra träning' });
    } else if (pkg === 'trafikskola-budget') {
      items.push({ label: `Körlektioner (${extraLessons} st á ${lessonPrice} kr)`, amount: extraLessons * lessonPrice, included: true });
    } else {
      items.push({ label: 'Paketpris (teori + 15 lektioner)', amount: Math.round(16000 * regionMultiplier), included: true, note: 'Allt inkluderat' });
    }

    // Risk 1
    items.push({ label: 'Riskutbildning 1 (Riskettan)', amount: Math.round(1200 * regionMultiplier), included: true, note: 'Obligatorisk' });

    // Risk 2
    items.push({ label: 'Riskutbildning 2 (Halkbanan)', amount: Math.round(3500 * regionMultiplier), included: true, note: 'Obligatorisk' });

    // Teoriprov
    items.push({ label: 'Teoriprov (Trafikverket)', amount: 325, included: true, note: 'Obligatoriskt' });

    // Körprov
    items.push({ label: 'Körprov (Trafikverket)', amount: 800, included: true, note: 'Obligatoriskt' });

    return items;
  }, [pkg, extraLessons, hasHandledarkurs, regionMultiplier, lessonPrice]);

  const totalCost = costs.reduce((sum, item) => sum + (item.included ? item.amount : 0), 0);

  return (
    <div style={{
      maxWidth: 700,
      margin: '0 auto',
      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
    }}>
      {/* Controls */}
      <div style={{
        background: '#f0f7f3',
        borderRadius: 18,
        padding: '1.5rem',
        marginBottom: '1.5rem',
      }}>
        {/* Package selection */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0d1f17', display: 'block', marginBottom: '0.5rem' }}>
            Hur tänker du ta körkort?
          </label>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {(Object.entries(packages) as [PackageType, { label: string; description: string }][]).map(([key, { label }]) => (
              <button
                key={key}
                onClick={() => setPkg(key)}
                style={{
                  padding: '0.6rem 1rem',
                  borderRadius: 10,
                  border: `2px solid ${pkg === key ? '#006B3F' : '#dceee5'}`,
                  background: pkg === key ? '#006B3F' : '#fff',
                  color: pkg === key ? '#fff' : '#0d1f17',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Region */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0d1f17', display: 'block', marginBottom: '0.5rem' }}>
            Var bor du?
          </label>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {([
              ['stockholm', 'Stockholm'],
              ['goteborg', 'Göteborg'],
              ['malmo', 'Malmö'],
              ['other', 'Övriga Sverige'],
            ] as const).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setRegion(key)}
                style={{
                  padding: '0.5rem 0.85rem',
                  borderRadius: 8,
                  border: `1.5px solid ${region === key ? '#006B3F' : '#dceee5'}`,
                  background: region === key ? '#e6f4ee' : '#fff',
                  color: region === key ? '#006B3F' : '#5a6b62',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Lesson slider */}
        {pkg !== 'trafikskola-paket' && (
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0d1f17', display: 'block', marginBottom: '0.5rem' }}>
              Antal körlektioner: <span style={{ color: '#006B3F' }}>{extraLessons} st</span>
              <span style={{ fontWeight: 400, color: '#5a6b62' }}> ({extraLessons * lessonPrice} kr)</span>
            </label>
            <input
              type="range"
              min={0}
              max={30}
              value={extraLessons}
              onChange={(e) => setExtraLessons(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#006B3F' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#5a6b62' }}>
              <span>0 st</span>
              <span>30 st</span>
            </div>
          </div>
        )}

        {/* Handledare (privatist) */}
        {pkg === 'privatist' && (
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#0d1f17', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={hasHandledarkurs}
              onChange={(e) => setHasHandledarkurs(e.target.checked)}
              style={{ accentColor: '#006B3F', width: 18, height: 18 }}
            />
            <span>Handledaren har redan handledarkurs</span>
          </label>
        )}
      </div>

      {/* Cost breakdown */}
      <div style={{
        background: '#fff',
        borderRadius: 18,
        border: '1px solid #dceee5',
        overflow: 'hidden',
      }}>
        {costs.filter(c => c.included).map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.85rem 1.25rem',
              borderBottom: '1px solid #f0f7f3',
            }}
          >
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 500, color: '#0d1f17' }}>
                {item.label}
              </div>
              {item.note && (
                <div style={{ fontSize: '0.75rem', color: '#5a6b62', marginTop: 2 }}>
                  {item.note}
                </div>
              )}
            </div>
            <div style={{
              fontWeight: 700,
              fontSize: '0.95rem',
              color: item.amount === 0 ? '#006B3F' : '#0d1f17',
              whiteSpace: 'nowrap',
            }}>
              {item.amount === 0 ? 'Gratis' : `${item.amount.toLocaleString('sv-SE')} kr`}
            </div>
          </div>
        ))}

        {/* Total */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.25rem',
          background: '#0d1f17',
          color: '#fff',
        }}>
          <div>
            <div style={{ fontSize: '0.8rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Uppskattad totalkostnad
            </div>
            <div style={{ fontSize: '0.7rem', opacity: 0.5, marginTop: 2 }}>
              {packages[pkg].description}
              {region !== 'other' && ` • ${region === 'stockholm' ? 'Stockholm' : region === 'goteborg' ? 'Göteborg' : 'Malmö'}`}
            </div>
          </div>
          <div style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: '1.8rem',
            fontWeight: 800,
            color: '#f5d020',
          }}>
            {totalCost.toLocaleString('sv-SE')} kr
          </div>
        </div>
      </div>

      <p style={{ fontSize: '0.75rem', color: '#5a6b62', marginTop: '0.75rem', lineHeight: 1.5 }}>
        * Priserna är uppskattade och kan variera beroende på trafikskola och region. Uppdaterad mars 2026.
      </p>
    </div>
  );
}
