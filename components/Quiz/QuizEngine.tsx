'use client';

import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Question, QuizCategory, categoryLabels, categoryColors } from '../../lib/questions/types';
import { loadProgress, saveProgress, updateStreak, awardXP, recordAnswer } from '../../lib/progress';
import { hasReachedLimit, incrementQuestionCount, getRemainingQuestions, isPremium, DAILY_LIMIT } from '../../lib/paywall';
import ShareResult from '../ShareResult';
import PaywallOverlay from '../PaywallOverlay';
import { getRoadSign } from '../RoadSigns';

type QuizMode = 'practice' | 'exam';

type QuizEngineProps = {
  questions: Question[];
  mode?: QuizMode;
  count?: number;
  category?: QuizCategory;
  onComplete?: (results: QuizResult) => void;
};

type QuizResult = {
  totalQuestions: number;
  correctAnswers: number;
  categoryBreakdown: Record<string, { correct: number; total: number }>;
  timeSpent: number;
  passed: boolean;
};

type AnswerState = {
  selectedIndex: number | null;
  isCorrect: boolean | null;
  showExplanation: boolean;
};

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function QuizEngine({
  questions,
  mode = 'practice',
  count,
  onComplete,
}: QuizEngineProps) {
  const selectedQuestions = useMemo(() => {
    const shuffled = shuffleArray(questions);
    return count ? shuffled.slice(0, count) : shuffled;
  }, [questions, count]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [answerState, setAnswerState] = useState<AnswerState>({
    selectedIndex: null,
    isCorrect: null,
    showExplanation: false,
  });
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(mode === 'exam' ? 50 * 60 : 0);
  const [startTime] = useState(Date.now());
  const [combo, setCombo] = useState(0);
  const [xpPopup, setXpPopup] = useState<{ amount: number; visible: boolean }>({ amount: 0, visible: false });
  const [showConfetti, setShowConfetti] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const streakUpdated = useRef(false);

  // Update streak on first render
  useEffect(() => {
    if (!streakUpdated.current) {
      streakUpdated.current = true;
      const p = loadProgress();
      const updated = updateStreak(p);
      saveProgress(updated);
    }
  }, []);

  // Exam timer
  useEffect(() => {
    if (mode !== 'exam' || finished) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [mode, finished]);

  const currentQuestion = selectedQuestions[currentIndex];
  const progressPct = ((currentIndex + (finished ? 1 : 0)) / selectedQuestions.length) * 100;

  const handleAnswer = useCallback(
    (optionIndex: number) => {
      if (answerState.selectedIndex !== null) return;

      // Paywall check
      if (hasReachedLimit()) {
        setShowPaywall(true);
        return;
      }
      incrementQuestionCount();

      const isCorrect = optionIndex === currentQuestion.correctIndex;
      const newAnswers = [...answers, optionIndex];
      setAnswers(newAnswers);

      // Update combo
      const newCombo = isCorrect ? combo + 1 : 0;
      setCombo(newCombo);

      // Track progress + XP
      let p = loadProgress();
      p = recordAnswer(p, currentQuestion.id, currentQuestion.category, isCorrect);
      const { progress: pWithXP, xpGained } = awardXP(p, isCorrect, newCombo);
      saveProgress(pWithXP);

      // Show XP popup
      if (xpGained > 0) {
        setXpPopup({ amount: xpGained, visible: true });
        setTimeout(() => setXpPopup({ amount: 0, visible: false }), 1200);
      }

      if (mode === 'practice') {
        setAnswerState({
          selectedIndex: optionIndex,
          isCorrect,
          showExplanation: true,
        });
      } else {
        // Exam mode — no feedback, go straight to next
        setAnswerState({ selectedIndex: optionIndex, isCorrect, showExplanation: false });
        setTimeout(() => {
          if (currentIndex < selectedQuestions.length - 1) {
            setCurrentIndex((i) => i + 1);
            setAnswerState({ selectedIndex: null, isCorrect: null, showExplanation: false });
          } else {
            setFinished(true);
          }
        }, 300);
      }
    },
    [answerState, answers, currentIndex, currentQuestion, mode, selectedQuestions.length]
  );

  const handleNext = useCallback(() => {
    if (currentIndex < selectedQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setAnswerState({ selectedIndex: null, isCorrect: null, showExplanation: false });
    } else {
      setFinished(true);
    }
  }, [currentIndex, selectedQuestions.length]);

  const handleRestart = useCallback(() => {
    setCurrentIndex(0);
    setAnswers([]);
    setAnswerState({ selectedIndex: null, isCorrect: null, showExplanation: false });
    setFinished(false);
  }, []);

  // Calculate results
  const results = useMemo((): QuizResult => {
    const categoryBreakdown: Record<string, { correct: number; total: number }> = {};
    let correct = 0;

    selectedQuestions.forEach((q, i) => {
      const cat = categoryLabels[q.category] || q.category;
      if (!categoryBreakdown[cat]) categoryBreakdown[cat] = { correct: 0, total: 0 };
      categoryBreakdown[cat].total++;
      if (answers[i] === q.correctIndex) {
        correct++;
        categoryBreakdown[cat].correct++;
      }
    });

    return {
      totalQuestions: selectedQuestions.length,
      correctAnswers: correct,
      categoryBreakdown,
      timeSpent: Math.floor((Date.now() - startTime) / 1000),
      passed: mode === 'exam' ? correct >= Math.ceil(selectedQuestions.length * 0.8) : correct / selectedQuestions.length >= 0.8,
    };
  }, [answers, selectedQuestions, startTime, mode]);

  // Trigger confetti on perfect score
  useEffect(() => {
    if (finished) {
      const pct = Math.round((results.correctAnswers / results.totalQuestions) * 100);
      if (pct === 100) setShowConfetti(true);
      if (pct >= 80) {
        // Small celebration for passing
        setTimeout(() => setShowConfetti(true), 300);
        setTimeout(() => setShowConfetti(false), 3500);
      }
    }
  }, [finished, results]);

  // ─── CONFETTI COMPONENT ───
  const ConfettiEffect = () => {
    if (!showConfetti) return null;
    const colors = ['#006B3F', '#f5d020', '#00C853', '#FF6B6B', '#4ECDC4', '#FFD93D', '#6BCB77', '#FF8E53'];
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
      color: colors[i % colors.length],
      size: 6 + Math.random() * 8,
      rotation: Math.random() * 360,
    }));
    return (
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999, overflow: 'hidden' }}>
        {pieces.map(p => (
          <div key={p.id} style={{
            position: 'absolute',
            left: `${p.left}%`,
            top: -20,
            width: p.size,
            height: p.size * 0.6,
            background: p.color,
            borderRadius: p.size > 10 ? '50%' : 2,
            animation: `confettiFall ${p.duration}s ease-in ${p.delay}s forwards`,
            transform: `rotate(${p.rotation}deg)`,
          }} />
        ))}
      </div>
    );
  };

  // ─── RESULTS SCREEN ───
  if (finished) {
    const pct = Math.round((results.correctAnswers / results.totalQuestions) * 100);

    if (onComplete) onComplete(results);

    return (
      <div style={{ maxWidth: 600, margin: '0 auto', fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
        <ConfettiEffect />
        {/* Score circle */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: results.passed ? '#006B3F' : '#dc2626',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem',
            boxShadow: `0 8px 24px ${results.passed ? 'rgba(0,107,63,0.3)' : 'rgba(220,38,38,0.3)'}`,
          }}>
            <span style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              {pct}%
            </span>
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>
              {results.correctAnswers}/{results.totalQuestions}
            </span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: '1.6rem',
            fontWeight: 800,
            color: '#0d1f17',
            margin: '0 0 0.5rem',
          }}>
            {results.passed ? 'Godkänt!' : 'Inte godkänt'}
          </h2>
          <p style={{ color: '#5a6b62', fontSize: '0.95rem' }}>
            {results.passed
              ? 'Bra jobbat! Du klarade provet.'
              : `Du behöver minst ${mode === 'exam' ? '80%' : '80%'} rätt. Öva mer och försök igen!`}
          </p>
          {mode === 'exam' && (
            <p style={{ color: '#5a6b62', fontSize: '0.85rem', marginTop: '0.25rem' }}>
              Tid: {formatTime(results.timeSpent)}
            </p>
          )}
        </div>

        {/* Category breakdown */}
        <div style={{
          background: '#f0f7f3',
          borderRadius: 16,
          padding: '1.5rem',
          marginBottom: '1.5rem',
        }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 1rem', color: '#0d1f17' }}>
            Resultat per kategori
          </h3>
          {Object.entries(results.categoryBreakdown).map(([cat, { correct, total }]) => {
            const catPct = Math.round((correct / total) * 100);
            return (
              <div key={cat} style={{ marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: 4 }}>
                  <span style={{ fontWeight: 600, color: '#0d1f17' }}>{cat}</span>
                  <span style={{ color: '#5a6b62' }}>{correct}/{total} ({catPct}%)</span>
                </div>
                <div style={{ height: 6, borderRadius: 3, background: '#dceee5', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    width: `${catPct}%`,
                    background: catPct >= 80 ? '#006B3F' : catPct >= 50 ? '#d97706' : '#dc2626',
                    borderRadius: 3,
                    transition: 'width 0.6s ease',
                  }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button
            onClick={handleRestart}
            style={{
              flex: 1,
              padding: '0.85rem 1.5rem',
              background: '#006B3F',
              color: '#fff',
              border: 'none',
              borderRadius: 14,
              fontWeight: 700,
              fontSize: '0.95rem',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            Försök igen
          </button>
        </div>

        {/* Share */}
        <ShareResult
          score={results.correctAnswers}
          total={results.totalQuestions}
          percentage={pct}
          passed={results.passed}
          streak={loadProgress().currentStreak}
        />
      </div>
    );
  }

  // ─── QUESTION SCREEN ───
  const remaining = getRemainingQuestions();

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
      {showPaywall && <PaywallOverlay />}

      {/* Remaining questions indicator */}
      {!isPremium() && remaining <= 5 && remaining > 0 && (
        <div style={{
          background: '#FFF3E0',
          border: '1px solid #FFB74D',
          borderRadius: 10,
          padding: '0.6rem 1rem',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.82rem',
        }}>
          <span style={{ color: '#E65100', fontWeight: 600 }}>
            ⚡ {remaining} gratisfrågor kvar idag
          </span>
          <a href="/priser" style={{ color: '#00C853', fontWeight: 700, textDecoration: 'none', fontSize: '0.8rem' }}>
            Uppgradera →
          </a>
        </div>
      )}

      {/* Progress bar + timer */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#5a6b62' }}>
            Fråga {currentIndex + 1} av {selectedQuestions.length}
          </span>
          {mode === 'exam' && (
            <span style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              color: timeLeft < 300 ? '#dc2626' : '#5a6b62',
              fontVariantNumeric: 'tabular-nums',
            }}>
              {formatTime(timeLeft)}
            </span>
          )}
        </div>
        <div style={{ height: 5, borderRadius: 3, background: '#dceee5', overflow: 'hidden' }}>
          <div style={{
            height: '100%',
            width: `${progressPct}%`,
            background: '#006B3F',
            borderRadius: 3,
            transition: 'width 0.3s ease',
          }} />
        </div>
      </div>

      {/* XP Popup */}
      {xpPopup.visible && (
        <div style={{
          position: 'fixed',
          top: '20%',
          right: '10%',
          background: '#f5d020',
          color: '#0d1f17',
          padding: '0.5rem 1rem',
          borderRadius: 12,
          fontWeight: 800,
          fontSize: '1.1rem',
          zIndex: 100,
          animation: 'xpFloat 1.2s ease forwards',
          pointerEvents: 'none',
          boxShadow: '0 4px 16px rgba(245,208,32,0.4)',
        }}>
          +{xpPopup.amount} XP
        </div>
      )}

      {/* Combo indicator */}
      {combo >= 2 && (
        <div style={{
          textAlign: 'center',
          marginBottom: '0.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
        }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.35rem 0.8rem',
            borderRadius: 999,
            fontSize: '0.85rem',
            fontWeight: 800,
            color: combo >= 5 ? '#0d1f17' : '#006B3F',
            background: combo >= 5 ? '#f5d020' : '#e6f4ee',
            animation: 'comboScale 400ms ease-out',
            boxShadow: combo >= 5 ? '0 4px 16px rgba(245,208,32,0.4)' : 'none',
          }}>
            <span style={{ fontSize: '1.1rem', animation: 'streakFlame 800ms ease infinite' }}>🔥</span>
            {combo}x combo!
          </span>
        </div>
      )}

      {/* Category badge */}
      <div style={{
        display: 'inline-block',
        padding: '0.3rem 0.7rem',
        borderRadius: 8,
        fontSize: '0.75rem',
        fontWeight: 700,
        color: '#fff',
        background: categoryColors[currentQuestion.category] || '#006B3F',
        marginBottom: '1rem',
        letterSpacing: '0.02em',
      }}>
        {categoryLabels[currentQuestion.category]}
      </div>

      {/* Question */}
      <h3 style={{
        fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
        fontWeight: 700,
        color: '#0d1f17',
        lineHeight: 1.5,
        margin: '0 0 1.25rem',
      }}>
        {currentQuestion.question}
      </h3>

      {/* Road sign SVG */}
      {currentQuestion.signKey && (() => {
        const SignComponent = getRoadSign(currentQuestion.signKey);
        if (!SignComponent) return null;
        return (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            padding: '1.25rem',
            background: '#f8faf9',
            borderRadius: 16,
            border: '1px solid #e8f0ec',
          }}>
            <SignComponent size={100} />
          </div>
        );
      })()}

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.25rem' }}>
        {currentQuestion.options.map((option, i) => {
          const isSelected = answerState.selectedIndex === i;
          const isCorrectOption = i === currentQuestion.correctIndex;
          const showResult = answerState.selectedIndex !== null;

          let bg = '#fff';
          let borderColor = '#dceee5';
          let textColor = '#0d1f17';

          if (showResult && mode === 'practice') {
            if (isCorrectOption) {
              bg = '#e6f4ee';
              borderColor = '#006B3F';
              textColor = '#006B3F';
            } else if (isSelected && !answerState.isCorrect) {
              bg = '#fef2f2';
              borderColor = '#dc2626';
              textColor = '#dc2626';
            }
          } else if (isSelected) {
            bg = '#e6f4ee';
            borderColor = '#006B3F';
          }

          return (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={answerState.selectedIndex !== null}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.9rem 1rem',
                background: bg,
                border: `2px solid ${borderColor}`,
                borderRadius: 12,
                cursor: answerState.selectedIndex !== null ? 'default' : 'pointer',
                textAlign: 'left',
                fontSize: '0.95rem',
                color: textColor,
                fontWeight: isSelected ? 700 : 500,
                transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
                fontFamily: 'inherit',
                width: '100%',
                animation: showResult && isCorrectOption && mode === 'practice'
                  ? 'correctPulse 600ms ease-out'
                  : showResult && isSelected && !answerState.isCorrect && mode === 'practice'
                  ? 'shake 400ms ease-in-out'
                  : `fadeSlideUp 400ms cubic-bezier(0.4, 0, 0.2, 1) ${i * 80}ms both`,
                boxShadow: isSelected ? 'var(--shadow-md)' : 'none',
              }}
            >
              <span style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.8rem',
                fontWeight: 700,
                flexShrink: 0,
                background: isSelected ? borderColor : '#f0f7f3',
                color: isSelected ? '#fff' : '#5a6b62',
              }}>
                {String.fromCharCode(65 + i)}
              </span>
              {option}
            </button>
          );
        })}
      </div>

      {/* Explanation (practice mode) */}
      {answerState.showExplanation && mode === 'practice' && (
        <div style={{
          padding: '1rem 1.25rem',
          background: answerState.isCorrect ? '#e6f4ee' : '#fef2f2',
          borderLeft: `4px solid ${answerState.isCorrect ? '#006B3F' : '#dc2626'}`,
          borderRadius: '0 12px 12px 0',
          marginBottom: '1.25rem',
        }}>
          <p style={{
            fontSize: '0.85rem',
            fontWeight: 700,
            color: answerState.isCorrect ? '#006B3F' : '#dc2626',
            margin: '0 0 0.25rem',
          }}>
            {answerState.isCorrect ? 'Rätt!' : 'Fel!'}
          </p>
          <p style={{ fontSize: '0.9rem', color: '#0d1f17', margin: 0, lineHeight: 1.6 }}>
            {currentQuestion.explanation}
          </p>
        </div>
      )}

      {/* Next button (practice mode) */}
      {answerState.selectedIndex !== null && mode === 'practice' && (
        <button
          onClick={handleNext}
          style={{
            width: '100%',
            padding: '0.85rem',
            background: '#006B3F',
            color: '#fff',
            border: 'none',
            borderRadius: 14,
            fontWeight: 700,
            fontSize: '0.95rem',
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          {currentIndex < selectedQuestions.length - 1 ? 'Nästa fråga →' : 'Se resultat'}
        </button>
      )}
    </div>
  );
}
