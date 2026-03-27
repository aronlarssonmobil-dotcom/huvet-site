import { QuizCategory, categoryLabels } from './questions/types';

// ─── TYPES ───

export type UserProgress = {
  // Streak
  currentStreak: number;
  longestStreak: number;
  lastPracticeDate: string; // ISO date (YYYY-MM-DD)

  // XP
  totalXP: number;
  todayXP: number;
  todayDate: string;

  // Questions
  totalAnswered: number;
  totalCorrect: number;

  // Per-category mastery
  categories: Record<string, CategoryProgress>;

  // Spaced repetition data
  questionHistory: Record<string, QuestionSR>;

  // Exam attempts
  examAttempts: ExamAttempt[];

  // Daily challenge
  dailyChallengeDate: string;
  dailyChallengeCompleted: boolean;
};

export type CategoryProgress = {
  answered: number;
  correct: number;
  lastPracticed: string;
  level: number; // 0-5
};

export type QuestionSR = {
  lastSeen: string;
  interval: number; // days until next review
  easeFactor: number; // SM-2 ease factor
  repetitions: number;
  correct: number;
  wrong: number;
};

export type ExamAttempt = {
  date: string;
  score: number;
  total: number;
  passed: boolean;
  timeSpent: number;
};

// ─── CONSTANTS ───

const STORAGE_KEY = 'huvet_progress';
const XP_CORRECT = 10;
const XP_WRONG = 2;
const XP_STREAK_BONUS = 5; // bonus per correct in combo
const XP_DAILY_CHALLENGE = 50;
const MASTERY_THRESHOLD = 0.8; // 80% for mastery

// ─── STORAGE ───

function getToday(): string {
  return new Date().toISOString().split('T')[0];
}

export function loadProgress(): UserProgress {
  if (typeof window === 'undefined') return createDefaultProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createDefaultProgress();
    return JSON.parse(raw) as UserProgress;
  } catch {
    return createDefaultProgress();
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // localStorage full or unavailable
  }
}

function createDefaultProgress(): UserProgress {
  return {
    currentStreak: 0,
    longestStreak: 0,
    lastPracticeDate: '',
    totalXP: 0,
    todayXP: 0,
    todayDate: getToday(),
    totalAnswered: 0,
    totalCorrect: 0,
    categories: {},
    questionHistory: {},
    examAttempts: [],
    dailyChallengeDate: '',
    dailyChallengeCompleted: false,
  };
}

// ─── STREAK LOGIC ───

export function updateStreak(progress: UserProgress): UserProgress {
  const today = getToday();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  if (progress.lastPracticeDate === today) {
    // Already practiced today
    return progress;
  }

  if (progress.lastPracticeDate === yesterdayStr) {
    // Practiced yesterday — extend streak
    progress.currentStreak += 1;
  } else if (progress.lastPracticeDate === '') {
    // First time ever
    progress.currentStreak = 1;
  } else {
    // Streak broken
    progress.currentStreak = 1;
  }

  progress.lastPracticeDate = today;
  if (progress.currentStreak > progress.longestStreak) {
    progress.longestStreak = progress.currentStreak;
  }

  // Reset today XP if new day
  if (progress.todayDate !== today) {
    progress.todayXP = 0;
    progress.todayDate = today;
  }

  return progress;
}

// ─── XP LOGIC ───

export function awardXP(progress: UserProgress, correct: boolean, combo: number): { progress: UserProgress; xpGained: number } {
  let xp = correct ? XP_CORRECT : XP_WRONG;

  // Combo bonus for consecutive correct
  if (correct && combo > 1) {
    xp += XP_STREAK_BONUS * Math.min(combo - 1, 5); // cap at x5 bonus
  }

  progress.totalXP += xp;
  progress.todayXP += xp;

  return { progress, xpGained: xp };
}

// ─── QUESTION TRACKING ───

export function recordAnswer(
  progress: UserProgress,
  questionId: string,
  category: QuizCategory,
  correct: boolean
): UserProgress {
  // Update totals
  progress.totalAnswered += 1;
  if (correct) progress.totalCorrect += 1;

  // Update category
  const catKey = category;
  if (!progress.categories[catKey]) {
    progress.categories[catKey] = {
      answered: 0,
      correct: 0,
      lastPracticed: getToday(),
      level: 0,
    };
  }
  progress.categories[catKey].answered += 1;
  if (correct) progress.categories[catKey].correct += 1;
  progress.categories[catKey].lastPracticed = getToday();

  // Calculate level (0-5 based on mastery %)
  const cat = progress.categories[catKey];
  const pct = cat.answered > 0 ? cat.correct / cat.answered : 0;
  cat.level = Math.min(5, Math.floor(pct * 5));

  // Spaced repetition for this question
  updateSR(progress, questionId, correct);

  return progress;
}

// ─── SPACED REPETITION (SM-2) ───

function updateSR(progress: UserProgress, questionId: string, correct: boolean): void {
  if (!progress.questionHistory[questionId]) {
    progress.questionHistory[questionId] = {
      lastSeen: getToday(),
      interval: 1,
      easeFactor: 2.5,
      repetitions: 0,
      correct: 0,
      wrong: 0,
    };
  }

  const sr = progress.questionHistory[questionId];
  sr.lastSeen = getToday();

  if (correct) {
    sr.correct += 1;
    sr.repetitions += 1;

    if (sr.repetitions === 1) {
      sr.interval = 1;
    } else if (sr.repetitions === 2) {
      sr.interval = 3;
    } else {
      sr.interval = Math.round(sr.interval * sr.easeFactor);
    }

    // Adjust ease factor (quality 4 = correct on first try)
    sr.easeFactor = Math.max(1.3, sr.easeFactor + 0.1 - 0.08);
  } else {
    sr.wrong += 1;
    sr.repetitions = 0;
    sr.interval = 1; // Reset — show again soon

    // Decrease ease factor
    sr.easeFactor = Math.max(1.3, sr.easeFactor - 0.2);
  }
}

export function getQuestionsForReview(progress: UserProgress): string[] {
  const today = new Date(getToday());
  const dueQuestions: string[] = [];

  for (const [qId, sr] of Object.entries(progress.questionHistory)) {
    const lastSeen = new Date(sr.lastSeen);
    const daysSince = Math.floor((today.getTime() - lastSeen.getTime()) / (1000 * 60 * 60 * 24));

    if (daysSince >= sr.interval) {
      dueQuestions.push(qId);
    }
  }

  return dueQuestions;
}

// ─── EXAM READINESS ───

export function getExamReadiness(progress: UserProgress): number {
  if (progress.totalAnswered === 0) return 0;

  const categoryNames = Object.keys(categoryLabels);
  let totalWeight = 0;
  let weightedScore = 0;

  for (const cat of categoryNames) {
    const catProgress = progress.categories[cat];
    if (!catProgress || catProgress.answered === 0) {
      // Unpracticed category = 0% readiness contribution
      totalWeight += 1;
      continue;
    }

    const accuracy = catProgress.correct / catProgress.answered;
    const volume = Math.min(1, catProgress.answered / 15); // Need at least 15 questions
    const recency = getRecencyScore(catProgress.lastPracticed);

    const categoryScore = accuracy * 0.6 + volume * 0.25 + recency * 0.15;
    weightedScore += categoryScore;
    totalWeight += 1;
  }

  return totalWeight > 0 ? Math.round((weightedScore / totalWeight) * 100) : 0;
}

function getRecencyScore(lastPracticed: string): number {
  if (!lastPracticed) return 0;
  const days = Math.floor(
    (new Date(getToday()).getTime() - new Date(lastPracticed).getTime()) / (1000 * 60 * 60 * 24)
  );
  if (days <= 1) return 1;
  if (days <= 3) return 0.8;
  if (days <= 7) return 0.5;
  if (days <= 14) return 0.3;
  return 0.1;
}

// ─── WEAK CATEGORIES ───

export function getWeakCategories(progress: UserProgress): { category: string; accuracy: number }[] {
  const weak: { category: string; accuracy: number }[] = [];

  for (const [cat, data] of Object.entries(progress.categories)) {
    if (data.answered >= 3) {
      const accuracy = data.correct / data.answered;
      if (accuracy < MASTERY_THRESHOLD) {
        weak.push({ category: cat, accuracy: Math.round(accuracy * 100) });
      }
    }
  }

  return weak.sort((a, b) => a.accuracy - b.accuracy);
}
