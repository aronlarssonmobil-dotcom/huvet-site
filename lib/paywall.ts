'use client';

const PAYWALL_KEY = 'huvet_daily_questions';
const DAILY_LIMIT = 20;

type DailyUsage = {
  date: string;
  count: number;
};

function getTodayStr(): string {
  return new Date().toISOString().split('T')[0];
}

export function getDailyUsage(): DailyUsage {
  if (typeof window === 'undefined') return { date: getTodayStr(), count: 0 };
  try {
    const raw = localStorage.getItem(PAYWALL_KEY);
    if (!raw) return { date: getTodayStr(), count: 0 };
    const data: DailyUsage = JSON.parse(raw);
    if (data.date !== getTodayStr()) {
      return { date: getTodayStr(), count: 0 };
    }
    return data;
  } catch {
    return { date: getTodayStr(), count: 0 };
  }
}

export function incrementQuestionCount(): DailyUsage {
  const usage = getDailyUsage();
  usage.count += 1;
  usage.date = getTodayStr();
  if (typeof window !== 'undefined') {
    localStorage.setItem(PAYWALL_KEY, JSON.stringify(usage));
  }
  return usage;
}

export function hasReachedLimit(): boolean {
  if (isPremium()) return false;
  const usage = getDailyUsage();
  return usage.count >= DAILY_LIMIT;
}

export function getRemainingQuestions(): number {
  if (isPremium()) return Infinity;
  const usage = getDailyUsage();
  return Math.max(0, DAILY_LIMIT - usage.count);
}

export function isPremium(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return localStorage.getItem('huvet_premium') === 'true';
  } catch {
    return false;
  }
}

export function setPremium(value: boolean): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('huvet_premium', value ? 'true' : 'false');
}

export { DAILY_LIMIT };
