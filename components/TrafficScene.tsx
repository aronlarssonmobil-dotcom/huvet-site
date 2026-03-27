export default function TrafficScene() {
  return (
    <div className="relative w-full overflow-hidden select-none" style={{ height: '420px' }}>
      {/* Sky */}
      <svg viewBox="0 0 1200 420" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Sky gradient */}
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c9e8ff"/>
            <stop offset="100%" stopColor="#e8f5ff"/>
          </linearGradient>
          <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a4a52"/>
            <stop offset="100%" stopColor="#3a3a42"/>
          </linearGradient>
        </defs>

        {/* Sky */}
        <rect width="1200" height="280" fill="url(#sky)"/>

        {/* Sun */}
        <circle cx="980" cy="70" r="52" fill="#FFD166" opacity="0.95"/>
        <circle cx="980" cy="70" r="42" fill="#FFEB99"/>

        {/* Clouds */}
        <g opacity="0.9">
          <ellipse cx="180" cy="90" rx="80" ry="32" fill="white"/>
          <ellipse cx="140" cy="90" rx="48" ry="28" fill="white"/>
          <ellipse cx="220" cy="90" rx="56" ry="26" fill="white"/>
        </g>
        <g opacity="0.8">
          <ellipse cx="620" cy="70" rx="60" ry="24" fill="white"/>
          <ellipse cx="580" cy="72" rx="40" ry="22" fill="white"/>
          <ellipse cx="660" cy="72" rx="44" ry="20" fill="white"/>
        </g>

        {/* Ground / grass */}
        <rect y="265" width="1200" height="30" fill="#7cc47b"/>
        <rect y="285" width="1200" height="30" fill="#5fa85e"/>

        {/* Road */}
        <rect y="300" width="1200" height="120" fill="url(#road)"/>

        {/* Road markings - center line */}
        <rect x="0" y="358" width="80" height="8" rx="4" fill="#f5e05a" opacity="0.9"/>
        <rect x="130" y="358" width="80" height="8" rx="4" fill="#f5e05a" opacity="0.9"/>
        <rect x="260" y="358" width="80" height="8" rx="4" fill="#f5e05a" opacity="0.9"/>
        <rect x="390" y="358" width="80" height="8" rx="4" fill="#f5e05a" opacity="0.9"/>
        <rect x="520" y="358" width="80" height="8" rx="4" fill="#f5e05a" opacity="0.9"/>
        <rect x="650" y="358" width="80" height="8" rx="4" fill="#f5e05a" opacity="0.9"/>
        <rect x="780" y="358" width="80" height="8" rx="4" fill="#f5e05a" opacity="0.9"/>
        <rect x="910" y="358" width="80" height="8" rx="4" fill="#f5e05a" opacity="0.9"/>
        <rect x="1040" y="358" width="80" height="8" rx="4" fill="#f5e05a" opacity="0.9"/>
        <rect x="1130" y="358" width="80" height="8" rx="4" fill="#f5e05a" opacity="0.9"/>

        {/* Road edges */}
        <rect x="0" y="300" width="1200" height="6" fill="#fff" opacity="0.12"/>
        <rect x="0" y="410" width="1200" height="6" fill="#fff" opacity="0.12"/>

        {/* TRAFFIC LIGHT POST */}
        <rect x="830" y="140" width="10" height="165" rx="5" fill="#2d2d35"/>
        {/* Light housing */}
        <rect x="808" y="100" width="54" height="120" rx="14" fill="#1a1a22"/>
        {/* Red light — off */}
        <circle cx="835" cy="120" r="16" fill="#3a1010"/>
        <circle cx="835" cy="120" r="12" fill="#7a2020"/>
        {/* Yellow light — off */}
        <circle cx="835" cy="150" r="16" fill="#3a3010"/>
        <circle cx="835" cy="150" r="12" fill="#7a6820"/>
        {/* Green light — ON */}
        <circle cx="835" cy="180" r="16" fill="#0a3a0a"/>
        <circle cx="835" cy="180" r="12" fill="#1fdd1f"/>
        <circle cx="835" cy="180" r="8" fill="#6aff6a" opacity="0.8"/>
        {/* Green glow */}
        <circle cx="835" cy="180" r="20" fill="#1fdd1f" opacity="0.12"/>

        {/* STOP SIGN POST */}
        <rect x="215" y="190" width="8" height="120" rx="4" fill="#aaa"/>
        {/* Octagon stop sign */}
        <polygon points="219,150 239,140 259,140 279,150 289,170 279,190 259,200 239,200 219,190 209,170" fill="#e82a2a"/>
        <polygon points="221,152 239,143 259,143 277,152 287,170 277,188 259,197 239,197 221,188 211,170" fill="#cc2020"/>
        <text x="249" y="178" textAnchor="middle" fill="white" fontSize="18" fontWeight="900" fontFamily="Arial, sans-serif" letterSpacing="1">STOP</text>

        {/* SPEED SIGN POST */}
        <rect x="440" y="200" width="8" height="110" rx="4" fill="#aaa"/>
        {/* Round speed sign */}
        <circle cx="444" cy="175" r="32" fill="white"/>
        <circle cx="444" cy="175" r="32" fill="none" stroke="#e82a2a" strokeWidth="6"/>
        <text x="444" y="183" textAnchor="middle" fill="#1a1a22" fontSize="22" fontWeight="900" fontFamily="Arial, sans-serif">70</text>

        {/* MAIN CAR — cute cartoon style */}
        <g transform="translate(480,295)">
          {/* Car shadow */}
          <ellipse cx="110" cy="95" rx="105" ry="10" fill="rgba(0,0,0,0.15)"/>
          {/* Car body */}
          <rect x="10" y="36" width="200" height="54" rx="12" fill="#e53e3e"/>
          {/* Car top / cabin */}
          <path d="M50 36 Q58 4 100 2 Q142 4 160 36 Z" fill="#c53030"/>
          {/* Windshield front */}
          <path d="M52 36 Q60 10 96 8 Q110 7 118 10 L130 36 Z" fill="#add8e6" opacity="0.85"/>
          {/* Rear window */}
          <path d="M130 36 L152 10 Q158 6 165 10 L175 36 Z" fill="#add8e6" opacity="0.85"/>
          {/* Window outline */}
          <path d="M52 36 Q60 10 96 8 Q115 7 130 10 L130 36 Z" fill="none" stroke="#9b2c2c" strokeWidth="2"/>
          {/* Door line */}
          <line x1="115" y1="40" x2="115" y2="86" stroke="#9b2c2c" strokeWidth="2"/>
          {/* Door handle left */}
          <rect x="85" y="60" width="18" height="5" rx="2.5" fill="#9b2c2c"/>
          {/* Door handle right */}
          <rect x="128" y="60" width="18" height="5" rx="2.5" fill="#9b2c2c"/>
          {/* Front bumper */}
          <rect x="5" y="72" width="18" height="12" rx="4" fill="#c53030"/>
          {/* Rear bumper */}
          <rect x="197" y="72" width="18" height="12" rx="4" fill="#c53030"/>
          {/* Headlight front */}
          <rect x="6" y="50" width="22" height="14" rx="5" fill="#fff9c4"/>
          <rect x="6" y="50" width="22" height="14" rx="5" fill="none" stroke="#b7791f" strokeWidth="1.5"/>
          {/* Taillight */}
          <rect x="192" y="50" width="18" height="14" rx="5" fill="#fc8181"/>
          {/* Front wheel */}
          <circle cx="60" cy="88" r="22" fill="#2d3748"/>
          <circle cx="60" cy="88" r="15" fill="#4a5568"/>
          <circle cx="60" cy="88" r="8" fill="#e2e8f0"/>
          {/* Rear wheel */}
          <circle cx="160" cy="88" r="22" fill="#2d3748"/>
          <circle cx="160" cy="88" r="15" fill="#4a5568"/>
          <circle cx="160" cy="88" r="8" fill="#e2e8f0"/>
          {/* Roof rack detail */}
          <rect x="68" y="4" width="76" height="4" rx="2" fill="#9b2c2c"/>
          {/* Antenna */}
          <line x1="200" y1="6" x2="207" y2="26" stroke="#666" strokeWidth="2"/>
          <circle cx="207" cy="25" r="3" fill="#e53e3e"/>
        </g>

        {/* SMALL BACKGROUND CAR */}
        <g transform="translate(60,318)" opacity="0.85">
          <ellipse cx="65" cy="62" rx="62" ry="7" fill="rgba(0,0,0,0.12)"/>
          <rect x="6" y="22" width="118" height="36" rx="8" fill="#3182ce"/>
          <path d="M28 22 Q34 4 62 2 Q84 2 94 22 Z" fill="#2b6cb0"/>
          <path d="M30 22 Q36 6 60 4 Q75 4 82 10 L90 22 Z" fill="#bee3f8" opacity="0.8"/>
          <circle cx="34" cy="58" r="14" fill="#2d3748"/>
          <circle cx="34" cy="58" r="9" fill="#4a5568"/>
          <circle cx="34" cy="58" r="5" fill="#e2e8f0"/>
          <circle cx="98" cy="58" r="14" fill="#2d3748"/>
          <circle cx="98" cy="58" r="9" fill="#4a5568"/>
          <circle cx="98" cy="58" r="5" fill="#e2e8f0"/>
          <rect x="4" y="34" width="12" height="9" rx="3" fill="#fefcbf"/>
          <rect x="116" y="34" width="10" height="9" rx="3" fill="#fc8181"/>
        </g>

        {/* Trees */}
        <g>
          <rect x="360" y="225" width="10" height="60" fill="#5d4037"/>
          <ellipse cx="365" cy="210" rx="32" ry="38" fill="#2d7a2d"/>
          <ellipse cx="365" cy="210" rx="24" ry="30" fill="#38a838"/>
        </g>
        <g>
          <rect x="720" y="230" width="10" height="55" fill="#5d4037"/>
          <ellipse cx="725" cy="215" rx="28" ry="34" fill="#2d7a2d"/>
          <ellipse cx="725" cy="215" rx="20" ry="26" fill="#38a838"/>
        </g>
        <g>
          <rect x="1050" y="228" width="10" height="58" fill="#5d4037"/>
          <ellipse cx="1055" cy="212" rx="30" ry="36" fill="#2d7a2d"/>
          <ellipse cx="1055" cy="212" rx="22" ry="28" fill="#38a838"/>
        </g>
      </svg>
    </div>
  );
}
