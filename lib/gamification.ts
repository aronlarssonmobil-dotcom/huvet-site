// ── Gamification Engine for Huvet.se ──
// All state persisted in localStorage

export interface GamificationState {
  xp: number;
  totalCorrect: number;
  totalAnswered: number;
  streak: number;
  lastActiveDate: string; // YYYY-MM-DD
  categoryProgress: Record<string, { correct: number; total: number }>;
  achievements: string[];
  quizSessions: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: 'streak' | 'xp' | 'correct' | 'category' | 'session' | 'perfect';
  condition: (state: GamificationState) => boolean;
}

export interface Level {
  name: string;
  minXP: number;
  color: string;
}

const STORAGE_KEY = 'huvet_gamification';

export const LEVELS: Level[] = [
  { name: 'Nybörjare', minXP: 0, color: '#78909C' },
  { name: 'Avancerad', minXP: 200, color: '#42A5F5' },
  { name: 'Expert', minXP: 600, color: '#AB47BC' },
  { name: 'Mästare', minXP: 1500, color: '#FFD600' },
];

export const CATEGORIES = [
  'Vägmärken',
  'Trafikregler',
  'Hastigheter',
  'Skyltar',
  'Väjningsplikt',
  'Alkohol & droger',
  'Parkering',
  'Vägmarkeringar',
  'Riskutbildning',
] as const;

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_streak',
    name: 'Första Streaken',
    description: 'Övat 2 dagar i rad',
    icon: 'streak',
    condition: (s) => s.streak >= 2,
  },
  {
    id: 'streak_week',
    name: 'Veckokrigare',
    description: '7 dagar i rad',
    icon: 'streak',
    condition: (s) => s.streak >= 7,
  },
  {
    id: 'streak_month',
    name: 'Månadsmästare',
    description: '30 dagar i rad',
    icon: 'streak',
    condition: (s) => s.streak >= 30,
  },
  {
    id: 'first_correct',
    name: 'Första Rätt',
    description: 'Svara rätt på din första fråga',
    icon: 'correct',
    condition: (s) => s.totalCorrect >= 1,
  },
  {
    id: 'correct_10',
    name: 'På Rätt Väg',
    description: '10 rätta svar',
    icon: 'correct',
    condition: (s) => s.totalCorrect >= 10,
  },
  {
    id: 'correct_50',
    name: 'Halvvägs',
    description: '50 rätta svar',
    icon: 'correct',
    condition: (s) => s.totalCorrect >= 50,
  },
  {
    id: 'correct_100',
    name: 'Hundralansen',
    description: '100 rätta svar',
    icon: 'correct',
    condition: (s) => s.totalCorrect >= 100,
  },
  {
    id: 'correct_500',
    name: 'Trafikguru',
    description: '500 rätta svar',
    icon: 'correct',
    condition: (s) => s.totalCorrect >= 500,
  },
  {
    id: 'xp_100',
    name: 'XP-samlare',
    description: 'Nå 100 XP',
    icon: 'xp',
    condition: (s) => s.xp >= 100,
  },
  {
    id: 'xp_500',
    name: 'XP-maskin',
    description: 'Nå 500 XP',
    icon: 'xp',
    condition: (s) => s.xp >= 500,
  },
  {
    id: 'xp_1000',
    name: 'Poängkung',
    description: 'Nå 1000 XP',
    icon: 'xp',
    condition: (s) => s.xp >= 1000,
  },
  {
    id: 'category_skyltar',
    name: 'Skyltexpert',
    description: '10 rätt i Skyltar',
    icon: 'category',
    condition: (s) => (s.categoryProgress['Skyltar']?.correct || 0) >= 10,
  },
  {
    id: 'category_vagmarken',
    name: 'Vägmärkesmästare',
    description: '10 rätt i Vägmärken',
    icon: 'category',
    condition: (s) => (s.categoryProgress['Vägmärken']?.correct || 0) >= 10,
  },
  {
    id: 'category_trafikregler',
    name: 'Regelrätt',
    description: '10 rätt i Trafikregler',
    icon: 'category',
    condition: (s) => (s.categoryProgress['Trafikregler']?.correct || 0) >= 10,
  },
  {
    id: 'session_5',
    name: 'Flitig Elev',
    description: 'Slutfört 5 quiz-omgångar',
    icon: 'session',
    condition: (s) => s.quizSessions >= 5,
  },
  {
    id: 'session_20',
    name: 'Dedikerad',
    description: 'Slutfört 20 quiz-omgångar',
    icon: 'session',
    condition: (s) => s.quizSessions >= 20,
  },
  {
    id: 'perfect_quiz',
    name: 'Perfekt Omgång',
    description: 'Alla rätt i en quiz',
    icon: 'perfect',
    condition: () => false, // checked manually
  },
];

function getToday(): string {
  return new Date().toISOString().split('T')[0];
}

function getDefaultState(): GamificationState {
  return {
    xp: 0,
    totalCorrect: 0,
    totalAnswered: 0,
    streak: 0,
    lastActiveDate: '',
    categoryProgress: {},
    achievements: [],
    quizSessions: 0,
  };
}

export function loadState(): GamificationState {
  if (typeof window === 'undefined') return getDefaultState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultState();
    const parsed = JSON.parse(raw);
    return { ...getDefaultState(), ...parsed };
  } catch {
    return getDefaultState();
  }
}

export function saveState(state: GamificationState): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function getCurrentLevel(xp: number): Level {
  let current = LEVELS[0];
  for (const level of LEVELS) {
    if (xp >= level.minXP) current = level;
  }
  return current;
}

export function getNextLevel(xp: number): Level | null {
  for (const level of LEVELS) {
    if (xp < level.minXP) return level;
  }
  return null;
}

export function getLevelProgress(xp: number): number {
  const current = getCurrentLevel(xp);
  const next = getNextLevel(xp);
  if (!next) return 100;
  const range = next.minXP - current.minXP;
  const progress = xp - current.minXP;
  return Math.min(100, Math.round((progress / range) * 100));
}

export function updateStreak(state: GamificationState): GamificationState {
  const today = getToday();
  if (state.lastActiveDate === today) return state;
  
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];
  
  const newStreak = state.lastActiveDate === yesterdayStr ? state.streak + 1 : 1;
  
  return {
    ...state,
    streak: newStreak,
    lastActiveDate: today,
  };
}

export function recordAnswer(
  state: GamificationState,
  category: string,
  isCorrect: boolean
): { state: GamificationState; newAchievements: string[]; xpGained: number } {
  let updated = updateStreak(state);
  
  // XP: 10 per correct, 2 per wrong (for trying), streak bonus
  const baseXP = isCorrect ? 10 : 2;
  const streakBonus = isCorrect && updated.streak > 1 ? Math.min(updated.streak, 10) : 0;
  const xpGained = baseXP + streakBonus;
  
  updated = {
    ...updated,
    xp: updated.xp + xpGained,
    totalCorrect: updated.totalCorrect + (isCorrect ? 1 : 0),
    totalAnswered: updated.totalAnswered + 1,
    categoryProgress: {
      ...updated.categoryProgress,
      [category]: {
        correct: (updated.categoryProgress[category]?.correct || 0) + (isCorrect ? 1 : 0),
        total: (updated.categoryProgress[category]?.total || 0) + 1,
      },
    },
  };
  
  // Check for new achievements
  const oldAchievements = new Set(state.achievements);
  const newAchievements: string[] = [];
  
  for (const achievement of ACHIEVEMENTS) {
    if (!oldAchievements.has(achievement.id) && achievement.condition(updated)) {
      newAchievements.push(achievement.id);
    }
  }
  
  updated.achievements = [...updated.achievements, ...newAchievements];
  saveState(updated);
  
  return { state: updated, newAchievements, xpGained };
}

export function recordQuizComplete(
  state: GamificationState,
  allCorrect: boolean
): { state: GamificationState; newAchievements: string[] } {
  let updated = {
    ...state,
    quizSessions: state.quizSessions + 1,
  };
  
  const oldAchievements = new Set(state.achievements);
  const newAchievements: string[] = [];
  
  // Check perfect quiz
  if (allCorrect && !oldAchievements.has('perfect_quiz')) {
    newAchievements.push('perfect_quiz');
  }
  
  // Check session achievements
  for (const achievement of ACHIEVEMENTS) {
    if (!oldAchievements.has(achievement.id) && achievement.condition(updated)) {
      newAchievements.push(achievement.id);
    }
  }
  
  updated.achievements = [...updated.achievements, ...newAchievements];
  saveState(updated);
  
  return { state: updated, newAchievements };
}
