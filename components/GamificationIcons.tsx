// SVG icons for the gamification system — no emojis

export function FlameIcon({ size = 20, color = '#FF6D00' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.5 7 4 9.5 4 14a8 8 0 0016 0c0-4.5-4.5-7-8-12zm0 18a6 6 0 01-6-6c0-3.12 2.55-5.26 4.47-7.86.38-.51 1.07-.51 1.45 0C13.86 8.64 18 10.88 18 14a6 6 0 01-6 6zm-1-5c0 1.1.9 2 2 2s2-.9 2-2c0-1.5-2-3.5-2-3.5S11 13.5 11 15z" fill={color}/>
    </svg>
  );
}

export function StarIcon({ size = 20, color = '#FFD600' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill={color}/>
    </svg>
  );
}

export function TrophyIcon({ size = 20, color = '#FFD600' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" fill={color}/>
    </svg>
  );
}

export function CheckBadgeIcon({ size = 20, color = '#1DB954' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill={color}/>
    </svg>
  );
}

export function BoltIcon({ size = 20, color = '#AB47BC' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 21h-1l1-7H7.5c-.88 0-.33-.75-.31-.78C8.48 10.94 10.42 7.54 13.01 3h1l-1 7h3.51c.4 0 .62.19.4.66C12.97 17.55 11 21 11 21z" fill={color}/>
    </svg>
  );
}

export function TargetIcon({ size = 20, color = '#42A5F5' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill={color}/>
    </svg>
  );
}

export function DiamondIcon({ size = 20, color = '#FFD600' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 3H5L2 9l10 12L22 9l-3-6zM9.62 8l1.5-3h1.76l1.5 3H9.62zM11 10v6.68L5.44 10H11zm2 0h5.56L13 16.68V10zm6.26-2h-2.65l-1.5-3h2.65l1.5 3zM6.24 5h2.65l-1.5 3H4.74l1.5-3z" fill={color}/>
    </svg>
  );
}

export function AchievementIcon({ type, size = 20 }: { type: string; size?: number }) {
  switch (type) {
    case 'streak': return <FlameIcon size={size} />;
    case 'xp': return <BoltIcon size={size} />;
    case 'correct': return <CheckBadgeIcon size={size} />;
    case 'category': return <TargetIcon size={size} />;
    case 'session': return <StarIcon size={size} />;
    case 'perfect': return <DiamondIcon size={size} />;
    default: return <TrophyIcon size={size} />;
  }
}
