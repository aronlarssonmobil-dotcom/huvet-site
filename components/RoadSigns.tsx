'use client';

import React from 'react';

type SignProps = {
  size?: number;
};

// === COLORS (Swedish standard) ===
const RED = '#C8102E';
const BLUE = '#005BA6';
const GREEN = '#1DB954';
const YELLOW = '#FECC00';
const WHITE = '#FFFFFF';
const BLACK = '#1A1A1A';

// ============================================================
// HELPER SHAPES
// ============================================================

/** Red-bordered white circle (förbudsmärke base) */
function ProhibitionBase({ size = 80, children }: { size?: number; children?: React.ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill={RED} />
      <circle cx="50" cy="50" r="38" fill={WHITE} />
      {children}
    </svg>
  );
}

/** Red-bordered white triangle (varningsskylt base) */
function WarningBase({ size = 80, children }: { size?: number; children?: React.ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,5 97,90 3,90" fill={RED} />
      <polygon points="50,16 88,84 12,84" fill={WHITE} />
      {children}
    </svg>
  );
}

/** Blue circle (påbudsmärke base) */
function MandatoryBase({ size = 80, children }: { size?: number; children?: React.ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill={BLUE} />
      {children}
    </svg>
  );
}

// ============================================================
// FÖRBUDSMÄRKEN (Prohibition signs - red circle)
// ============================================================

/** C2 — Förbud mot infart */
export function SignInfartForbjuden({ size = 80 }: SignProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill={RED} />
      <rect x="20" y="42" width="60" height="16" rx="2" fill={WHITE} />
    </svg>
  );
}

/** C31 — Hastighetsbegränsning */
function SpeedLimitSign({ speed, size = 80 }: { speed: number; size?: number }) {
  return (
    <ProhibitionBase size={size}>
      <text
        x="50"
        y="58"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize={speed >= 100 ? '28' : '34'}
        fill={BLACK}
      >
        {speed}
      </text>
    </ProhibitionBase>
  );
}

export function SignHastighet30({ size = 80 }: SignProps) {
  return <SpeedLimitSign speed={30} size={size} />;
}
export function SignHastighet50({ size = 80 }: SignProps) {
  return <SpeedLimitSign speed={50} size={size} />;
}
export function SignHastighet70({ size = 80 }: SignProps) {
  return <SpeedLimitSign speed={70} size={size} />;
}
export function SignHastighet90({ size = 80 }: SignProps) {
  return <SpeedLimitSign speed={90} size={size} />;
}
export function SignHastighet110({ size = 80 }: SignProps) {
  return <SpeedLimitSign speed={110} size={size} />;
}

/** C25 — Omkörningsförbud */
export function SignOmkorningForbjuden({ size = 80 }: SignProps) {
  return (
    <ProhibitionBase size={size}>
      {/* Two cars side by side */}
      <rect x="24" y="36" width="14" height="24" rx="4" fill={RED} />
      <rect x="24" y="40" width="14" height="4" fill={WHITE} />
      <rect x="24" y="52" width="14" height="4" fill={WHITE} />
      <rect x="42" y="40" width="14" height="24" rx="4" fill={BLACK} />
      <rect x="42" y="44" width="14" height="4" fill={WHITE} />
      <rect x="42" y="56" width="14" height="4" fill={WHITE} />
    </ProhibitionBase>
  );
}

/** B2 — Stopplikt (octagonal) */
export function SignStopp({ size = 80 }: SignProps) {
  // Regular octagon
  const r = 47;
  const cx = 50, cy = 50;
  const points = Array.from({ length: 8 }, (_, i) => {
    const angle = (Math.PI / 8) + (i * Math.PI / 4);
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(' ');

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points={points} fill={RED} />
      <text
        x="50"
        y="54"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="24"
        fill={WHITE}
        letterSpacing="2"
      >
        STOP
      </text>
    </svg>
  );
}

/** C35 — Parkering förbjuden */
export function SignParkeringForbjuden({ size = 80 }: SignProps) {
  return (
    <ProhibitionBase size={size}>
      <text
        x="50"
        y="56"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="30"
        fill={BLUE}
      >
        P
      </text>
      <line x1="28" y1="72" x2="72" y2="28" stroke={RED} strokeWidth="6" strokeLinecap="round" />
    </ProhibitionBase>
  );
}

/** C36 — Stannande och parkering förbjuden */
export function SignStannandeForbjuden({ size = 80 }: SignProps) {
  return (
    <ProhibitionBase size={size}>
      <line x1="28" y1="28" x2="72" y2="72" stroke={RED} strokeWidth="6" strokeLinecap="round" />
      <line x1="72" y1="28" x2="28" y2="72" stroke={RED} strokeWidth="6" strokeLinecap="round" />
    </ProhibitionBase>
  );
}

/** C17 — Förbud mot vänstersväng */
export function SignVanstersvangForbjuden({ size = 80 }: SignProps) {
  return (
    <ProhibitionBase size={size}>
      <path d="M55 65 L55 45 Q55 35 45 35 L38 35" stroke={BLACK} strokeWidth="5" fill="none" strokeLinecap="round" />
      <polygon points="42,28 32,35 42,42" fill={BLACK} />
      <line x1="28" y1="72" x2="72" y2="28" stroke={RED} strokeWidth="6" strokeLinecap="round" />
    </ProhibitionBase>
  );
}

/** C7 — Förbud mot tung trafik */
export function SignTungTrafikForbjuden({ size = 80 }: SignProps) {
  return (
    <ProhibitionBase size={size}>
      {/* Simple truck silhouette */}
      <rect x="25" y="44" width="30" height="18" rx="2" fill={BLACK} />
      <rect x="55" y="50" width="18" height="12" rx="2" fill={BLACK} />
      <rect x="56" y="51" width="12" height="8" rx="1" fill={WHITE} opacity="0.5" />
      <circle cx="35" cy="64" r="4" fill={BLACK} />
      <circle cx="48" cy="64" r="4" fill={BLACK} />
      <circle cx="66" cy="64" r="4" fill={BLACK} />
    </ProhibitionBase>
  );
}

// ============================================================
// VARNINGSSKYLTAR (Warning signs - red triangle)
// ============================================================

/** A40 — Varning för fara (utropstecken) */
export function SignVarningFara({ size = 80 }: SignProps) {
  return (
    <WarningBase size={size}>
      <text
        x="50"
        y="62"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="36"
        fill={BLACK}
      >
        !
      </text>
    </WarningBase>
  );
}

/** A29 — Varning för korsning */
export function SignVarningKorsning({ size = 80 }: SignProps) {
  return (
    <WarningBase size={size}>
      {/* Cross shape */}
      <rect x="46" y="38" width="8" height="38" fill={BLACK} />
      <rect x="32" y="52" width="36" height="8" fill={BLACK} />
    </WarningBase>
  );
}

/** A1/A2 — Varning för kurva */
export function SignVarningKurva({ size = 80 }: SignProps) {
  return (
    <WarningBase size={size}>
      <path
        d="M35 72 Q35 48 50 48 Q65 48 65 38"
        stroke={BLACK}
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
      />
    </WarningBase>
  );
}

/** A15 — Varning för barn */
export function SignVarningBarn({ size = 80 }: SignProps) {
  return (
    <WarningBase size={size}>
      {/* Two simplified child figures */}
      {/* Child 1 (bigger) */}
      <circle cx="44" cy="42" r="5" fill={BLACK} />
      <line x1="44" y1="47" x2="44" y2="62" stroke={BLACK} strokeWidth="3" strokeLinecap="round" />
      <line x1="44" y1="53" x2="37" y2="48" stroke={BLACK} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="44" y1="53" x2="51" y2="57" stroke={BLACK} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="44" y1="62" x2="39" y2="73" stroke={BLACK} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="44" y1="62" x2="49" y2="73" stroke={BLACK} strokeWidth="2.5" strokeLinecap="round" />
      {/* Child 2 (smaller) */}
      <circle cx="58" cy="48" r="4.5" fill={BLACK} />
      <line x1="58" y1="52" x2="58" y2="64" stroke={BLACK} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="58" y1="57" x2="52" y2="53" stroke={BLACK} strokeWidth="2" strokeLinecap="round" />
      <line x1="58" y1="64" x2="54" y2="73" stroke={BLACK} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="58" y1="64" x2="62" y2="73" stroke={BLACK} strokeWidth="2.5" strokeLinecap="round" />
    </WarningBase>
  );
}

/** A18 — Varning för vilt (älg) */
export function SignVarningVilt({ size = 80 }: SignProps) {
  return (
    <WarningBase size={size}>
      {/* Simplified moose silhouette */}
      <path
        d="M38 74 L38 60 L34 52 L38 44 L42 40 L46 38 L52 38 L58 42 L62 48 L62 56 L62 74"
        fill={BLACK}
        stroke={BLACK}
        strokeWidth="1"
      />
      {/* Legs */}
      <line x1="42" y1="65" x2="40" y2="76" stroke={BLACK} strokeWidth="3" />
      <line x1="58" y1="65" x2="60" y2="76" stroke={BLACK} strokeWidth="3" />
      {/* Antlers */}
      <path d="M44 40 L38 32 L34 30 M44 40 L42 32 L44 28" stroke={BLACK} strokeWidth="2" fill="none" />
    </WarningBase>
  );
}

/** A7 — Varning för ojämn väg */
export function SignVarningOjamnVag({ size = 80 }: SignProps) {
  return (
    <WarningBase size={size}>
      <path
        d="M30 65 Q38 50 46 65 Q54 80 62 55 L70 65"
        stroke={BLACK}
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
    </WarningBase>
  );
}

/** A22 — Möte med mötande trafik */
export function SignMotandeTrafik({ size = 80 }: SignProps) {
  return (
    <WarningBase size={size}>
      {/* Red arrow (left, going up) */}
      <polygon points="40,38 34,50 37,50" fill={RED} />
      <rect x="37" y="50" width="6" height="24" fill={RED} />
      {/* Black arrow (right, going down) */}
      <polygon points="60,74 66,62 63,62" fill={BLACK} />
      <rect x="57" y="38" width="6" height="24" fill={BLACK} />
    </WarningBase>
  );
}

/** A34 — Varning för vägarbete */
export function SignVarningVagarbete({ size = 80 }: SignProps) {
  return (
    <WarningBase size={size}>
      {/* Person with shovel */}
      <circle cx="50" cy="40" r="5" fill={BLACK} />
      <line x1="50" y1="45" x2="50" y2="62" stroke={BLACK} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="52" x2="40" y2="46" stroke={BLACK} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="52" x2="62" y2="46" stroke={BLACK} strokeWidth="2.5" strokeLinecap="round" />
      {/* Shovel */}
      <line x1="62" y1="46" x2="66" y2="70" stroke={BLACK} strokeWidth="2.5" strokeLinecap="round" />
      <rect x="63" y="68" width="8" height="5" rx="1" fill={BLACK} />
      <line x1="50" y1="62" x2="45" y2="75" stroke={BLACK} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="62" x2="55" y2="75" stroke={BLACK} strokeWidth="2.5" strokeLinecap="round" />
    </WarningBase>
  );
}

// ============================================================
// PÅBUDSMÄRKEN (Mandatory signs - blue circle)
// ============================================================

/** D1 — Påbjuden körriktning rakt fram */
export function SignPabjudenRaktFram({ size = 80 }: SignProps) {
  return (
    <MandatoryBase size={size}>
      <polygon points="50,20 38,40 44,40" fill={WHITE} />
      <rect x="44" y="40" width="12" height="35" fill={WHITE} />
    </MandatoryBase>
  );
}

/** D1 — Påbjuden körriktning höger */
export function SignPabjudenHoger({ size = 80 }: SignProps) {
  return (
    <MandatoryBase size={size}>
      <polygon points="75,50 58,38 58,44" fill={WHITE} />
      <rect x="25" y="44" width="33" height="12" fill={WHITE} />
    </MandatoryBase>
  );
}

/** D1 — Cirkulationsplats (round arrow) */
export function SignCirculationsplats({ size = 80 }: SignProps) {
  return (
    <MandatoryBase size={size}>
      <path
        d="M50 28 A22 22 0 1 1 28 50"
        stroke={WHITE}
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
      />
      <polygon points="28,42 20,52 36,52" fill={WHITE} />
    </MandatoryBase>
  );
}

/** D4 — Cykelbana */
export function SignCykelbana({ size = 80 }: SignProps) {
  return (
    <MandatoryBase size={size}>
      {/* Bicycle */}
      <circle cx="38" cy="60" r="10" stroke={WHITE} strokeWidth="3" fill="none" />
      <circle cx="62" cy="60" r="10" stroke={WHITE} strokeWidth="3" fill="none" />
      <line x1="38" y1="60" x2="50" y2="46" stroke={WHITE} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="46" x2="62" y2="60" stroke={WHITE} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="46" x2="42" y2="46" stroke={WHITE} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="46" x2="54" y2="36" stroke={WHITE} strokeWidth="3" strokeLinecap="round" />
      <circle cx="54" cy="33" r="3" fill={WHITE} />
    </MandatoryBase>
  );
}

/** D8 — Lägsta tillåtna hastighet 30 */
export function SignLagstaHastighet30({ size = 80 }: SignProps) {
  return (
    <MandatoryBase size={size}>
      <text
        x="50"
        y="56"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="32"
        fill={WHITE}
      >
        30
      </text>
    </MandatoryBase>
  );
}

// ============================================================
// INFORMATIONSMÄRKEN (Information signs)
// ============================================================

/** E1 — Motorväg */
export function SignMotorvag({ size = 80 }: SignProps) {
  const h = size;
  const w = size * 1.2;
  return (
    <svg width={w} height={h} viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="116" height="96" rx="8" fill={GREEN} />
      {/* Motorway symbol: bridge over two lanes */}
      <rect x="30" y="60" width="12" height="24" rx="1" fill={WHITE} />
      <rect x="78" y="60" width="12" height="24" rx="1" fill={WHITE} />
      <rect x="54" y="60" width="12" height="24" rx="1" fill={WHITE} />
      <path d="M25 60 Q60 30 95 60" stroke={WHITE} strokeWidth="6" fill="none" />
      {/* White outline */}
      <rect x="2" y="2" width="116" height="96" rx="8" stroke={WHITE} strokeWidth="3" fill="none" />
    </svg>
  );
}

/** E3 — Motortrafikled */
export function SignMotortrafikled({ size = 80 }: SignProps) {
  const h = size;
  const w = size * 1.2;
  return (
    <svg width={w} height={h} viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="116" height="96" rx="8" fill={GREEN} />
      {/* Road with single lane marker */}
      <rect x="40" y="35" width="40" height="40" rx="2" fill="none" stroke={WHITE} strokeWidth="4" />
      <line x1="60" y1="35" x2="60" y2="75" stroke={WHITE} strokeWidth="3" strokeDasharray="6,4" />
      {/* White outline */}
      <rect x="2" y="2" width="116" height="96" rx="8" stroke={WHITE} strokeWidth="3" fill="none" />
    </svg>
  );
}

/** E19 — Övergångsställe */
export function SignOvergangsstalle({ size = 80 }: SignProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="96" height="96" rx="6" fill={BLUE} />
      {/* Triangle pointing up (white) */}
      <polygon points="50,14 82,80 18,80" fill={WHITE} />
      {/* Zebra crossing stripes */}
      <rect x="34" y="56" width="32" height="4" fill={BLACK} />
      <rect x="34" y="63" width="32" height="4" fill={BLACK} />
      <rect x="34" y="70" width="32" height="4" fill={BLACK} />
      {/* Walking person */}
      <circle cx="50" cy="30" r="4.5" fill={BLACK} />
      <line x1="50" y1="34" x2="50" y2="50" stroke={BLACK} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="40" x2="43" y2="46" stroke={BLACK} strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="40" x2="57" y2="46" stroke={BLACK} strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="50" x2="44" y2="56" stroke={BLACK} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="50" x2="56" y2="56" stroke={BLACK} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/** E19 — Parkering */
export function SignParkering({ size = 80 }: SignProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="96" height="96" rx="6" fill={BLUE} />
      <text
        x="50"
        y="58"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="56"
        fill={WHITE}
      >
        P
      </text>
    </svg>
  );
}

/** E9 — Gångfartsområde */
export function SignGangfartsomrade({ size = 80 }: SignProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="96" height="96" rx="6" fill={BLUE} />
      {/* House */}
      <polygon points="50,18 30,36 70,36" fill={WHITE} />
      <rect x="34" y="36" width="32" height="22" fill={WHITE} />
      {/* Person */}
      <circle cx="36" cy="65" r="4" fill={WHITE} />
      <line x1="36" y1="69" x2="36" y2="82" stroke={WHITE} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="36" y1="82" x2="32" y2="90" stroke={WHITE} strokeWidth="2" strokeLinecap="round" />
      <line x1="36" y1="82" x2="40" y2="90" stroke={WHITE} strokeWidth="2" strokeLinecap="round" />
      {/* Car */}
      <rect x="52" y="72" width="24" height="12" rx="3" fill={WHITE} />
      <rect x="54" y="67" width="10" height="6" rx="2" fill={WHITE} />
      <circle cx="58" cy="86" r="3" fill={WHITE} />
      <circle cx="70" cy="86" r="3" fill={WHITE} />
    </svg>
  );
}

// ============================================================
// VÄGVISARE & ÖVRIGA
// ============================================================

/** B1 — Väjningsplikt (triangel med spetsen ned) */
export function SignVajningsplikt({ size = 80 }: SignProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,95 3,10 97,10" fill={RED} />
      <polygon points="50,82 14,17 86,17" fill={WHITE} />
    </svg>
  );
}

/** B4 — Huvudled */
export function SignHuvudled({ size = 80 }: SignProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Diamond (rotated square) */}
      <polygon points="50,6 94,50 50,94 6,50" fill={YELLOW} />
      <polygon points="50,16 84,50 50,84 16,50" fill={WHITE} />
    </svg>
  );
}

/** Orienteringstavla (gul) */
export function SignOrienteringstavla({ size = 80 }: SignProps) {
  const w = size * 1.5;
  return (
    <svg width={w} height={size} viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="146" height="96" rx="4" fill={YELLOW} stroke={BLACK} strokeWidth="2" />
      <text
        x="75"
        y="38"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="18"
        fill={BLACK}
      >
        Centrum →
      </text>
      <line x1="10" y1="52" x2="140" y2="52" stroke={BLACK} strokeWidth="1" />
      <text
        x="75"
        y="72"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="18"
        fill={BLACK}
      >
        ← Station
      </text>
    </svg>
  );
}

/** E13 — Mötesplats */
export function SignMotesplats({ size = 80 }: SignProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="96" height="96" rx="6" fill={BLUE} />
      <rect x="15" y="35" width="70" height="30" rx="4" fill={WHITE} />
      {/* Wider section in middle */}
      <rect x="30" y="28" width="40" height="44" rx="4" fill={WHITE} />
    </svg>
  );
}

/** E20 — Zon parkeringsförbud */
export function SignZonParkeringForbjuden({ size = 80 }: SignProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="96" height="96" rx="6" fill={WHITE} stroke={RED} strokeWidth="3" />
      <text
        x="50"
        y="22"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="16"
        fill={RED}
      >
        ZON
      </text>
      {/* Small prohibition sign with P */}
      <circle cx="50" cy="55" r="22" fill={RED} />
      <circle cx="50" cy="55" r="17" fill={WHITE} />
      <text
        x="50"
        y="58"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="18"
        fill={BLUE}
      >
        P
      </text>
      <line x1="36" y1="67" x2="64" y2="43" stroke={RED} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

// ============================================================
// LOOKUP MAP for question integration
// ============================================================
export const roadSignComponents: Record<string, React.FC<SignProps>> = {
  'infart-forbjuden': SignInfartForbjuden,
  'hastighet-30': SignHastighet30,
  'hastighet-50': SignHastighet50,
  'hastighet-70': SignHastighet70,
  'hastighet-90': SignHastighet90,
  'hastighet-110': SignHastighet110,
  'omkörning-forbjuden': SignOmkorningForbjuden,
  'stopp': SignStopp,
  'parkering-forbjuden': SignParkeringForbjuden,
  'stannande-forbjuden': SignStannandeForbjuden,
  'vänstersväng-forbjuden': SignVanstersvangForbjuden,
  'tung-trafik-forbjuden': SignTungTrafikForbjuden,
  'varning-fara': SignVarningFara,
  'varning-korsning': SignVarningKorsning,
  'varning-kurva': SignVarningKurva,
  'varning-barn': SignVarningBarn,
  'varning-vilt': SignVarningVilt,
  'varning-ojämn-väg': SignVarningOjamnVag,
  'varning-mötande': SignMotandeTrafik,
  'varning-vägarbete': SignVarningVagarbete,
  'påbjuden-rakt-fram': SignPabjudenRaktFram,
  'påbjuden-höger': SignPabjudenHoger,
  'cirkulationsplats': SignCirculationsplats,
  'cykelbana': SignCykelbana,
  'lägsta-hastighet-30': SignLagstaHastighet30,
  'motorväg': SignMotorvag,
  'motortrafikled': SignMotortrafikled,
  'övergångsställe': SignOvergangsstalle,
  'parkering': SignParkering,
  'gångfartsområde': SignGangfartsomrade,
  'väjningsplikt': SignVajningsplikt,
  'huvudled': SignHuvudled,
  'orienteringstavla': SignOrienteringstavla,
  'mötesplats': SignMotesplats,
  'zon-parkering-forbjuden': SignZonParkeringForbjuden,
};

/** Helper to get a sign component by key */
export function getRoadSign(key: string): React.FC<SignProps> | undefined {
  return roadSignComponents[key];
}
