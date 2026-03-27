'use client';

import { useState, useEffect } from 'react';
import { loadState, recordAnswer, recordQuizComplete, type GamificationState } from '@/lib/gamification';
import XPNotification, { StreakIndicator } from './XPNotification';

const questions = [
  {
    id: 1,
    question: 'Vad gäller vid en stoppskylt?',
    options: [
      'Du måste stanna och ge företräde',
      'Du kan köra igenom om det är fritt',
      'Du ska sakta ned men behöver inte stanna',
    ],
    correct: 0,
    explanation: 'Vid en stoppskylt (oktagon med "STOP") måste du alltid stanna helt och ge företräde åt all trafik på den korsande vägen — även om det verkar fritt.',
    category: 'Skyltar',
  },
  {
    id: 2,
    question: 'Vilket fordon har väjningsplikt i en rondell?',
    options: [
      'Fordon inne i rondellen',
      'Fordon som ska in i rondellen',
      'Det beror på rondellens storlek',
    ],
    correct: 1,
    explanation: 'Det är alltid fordon som ska köra in i rondellen som har väjningsplikt mot trafik som redan befinner sig i rondellen.',
    category: 'Väjningsplikt',
  },
  {
    id: 3,
    question: 'Vad är den högsta tillåtna promillehalten för bilkörning i Sverige?',
    options: ['0,5 promille', '0,3 promille', '0,2 promille'],
    correct: 2,
    explanation: 'I Sverige är gränsen för rattfylleri 0,2 promille alkohol i blodet. Över 1,0 promille räknas som grovt rattfylleri.',
    category: 'Alkohol & droger',
  },
  {
    id: 4,
    question: 'Hur långt från ett övergångsställe får du parkera?',
    options: ['3 meter', '5 meter', '10 meter'],
    correct: 2,
    explanation: 'Du får inte parkera inom 10 meter från ett övergångsställe eller cykelöverfart. Det gäller att hålla god sikt för alla trafikanter.',
    category: 'Parkering',
  },
  {
    id: 5,
    question: 'Vad innebär en vit heldragen linje i mitten av körbanan?',
    options: [
      'Du får köra om om sikten är god',
      'Absolut körförbud att passera linjen',
      'Du får passera för att undvika hinder',
    ],
    correct: 1,
    explanation: 'En heldragen mittlinje innebär absolut förbud att korsa eller köra på linjen. Det är ett av de vanligaste felen på körkortsprovet.',
    category: 'Vägmarkeringar',
  },
];

const categoryColors: Record<string, string> = {
  'Skyltar': '#006B3F',
  'Väjningsplikt': '#d97706',
  'Alkohol & droger': '#7c3aed',
  'Parkering': '#0369a1',
  'Vägmarkeringar': '#dc2626',
};

export default function QuizDemo() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [showExplanation, setShowExplanation] = useState(false);
  const [finished, setFinished] = useState(false);
  const [gfState, setGfState] = useState<GamificationState | null>(null);
  const [xpNotif, setXpNotif] = useState<{ xp: number; achievements: string[] } | null>(null);

  useEffect(() => {
    setGfState(loadState());
  }, []);

  const q = questions[current];
  const catColor = categoryColors[q.category] || '#006B3F';

  const score = answers.filter((a, i) => a === questions[i].correct).length;

  function handleSelect(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
    const updated = [...answers];
    updated[current] = idx;
    setAnswers(updated);
    setShowExplanation(true);

    // Record answer in gamification
    if (gfState) {
      const isCorrect = idx === q.correct;
      const result = recordAnswer(gfState, q.category, isCorrect);
      setGfState(result.state);
      if (result.xpGained > 0 || result.newAchievements.length > 0) {
        setXpNotif({ xp: result.xpGained, achievements: result.newAchievements });
      }
    }
  }

  function handleNext() {
    setXpNotif(null);
    if (current + 1 >= questions.length) {
      // Record quiz completion
      if (gfState) {
        const allCorrect = answers.every((a, i) => i === current ? selected === questions[i].correct : a === questions[i].correct);
        const result = recordQuizComplete(gfState, allCorrect);
        setGfState(result.state);
        if (result.newAchievements.length > 0) {
          setXpNotif({ xp: 0, achievements: result.newAchievements });
        }
      }
      setFinished(true);
    } else {
      setCurrent(current + 1);
      setSelected(null);
      setShowExplanation(false);
    }
  }

  function handleRestart() {
    setCurrent(0);
    setSelected(null);
    setAnswers(Array(questions.length).fill(null));
    setShowExplanation(false);
    setFinished(false);
    setXpNotif(null);
    setGfState(loadState());
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    const passed = pct >= 60;
    return (
      <>
        {xpNotif && (
          <XPNotification
            xpGained={xpNotif.xp}
            newAchievements={xpNotif.achievements}
            onDone={() => setXpNotif(null)}
          />
        )}
        <div style={{
          background: 'white',
          borderRadius: '24px',
          padding: '40px 32px',
          maxWidth: '560px',
          margin: '0 auto',
          boxShadow: '0 8px 40px rgba(0,107,63,0.10)',
          textAlign: 'center',
          border: '2px solid #e2efe9',
        }}>
          {/* XP earned summary */}
          {gfState && (
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#F3E5F5',
              color: '#7B1FA2',
              fontSize: '13px',
              fontWeight: 700,
              padding: '5px 14px',
              borderRadius: '999px',
              marginBottom: '12px',
            }}>
              <svg width={14} height={14} viewBox="0 0 24 24" fill="#7B1FA2">
                <path d="M11 21h-1l1-7H7.5c-.88 0-.33-.75-.31-.78C8.48 10.94 10.42 7.54 13.01 3h1l-1 7h3.51c.4 0 .62.19.4.66C12.97 17.55 11 21 11 21z"/>
              </svg>
              {gfState.xp} XP totalt
            </div>
          )}
          <div style={{ marginBottom: '16px' }}>
            <svg width={56} height={56} viewBox="0 0 24 24" fill={passed ? '#00C853' : '#FF9800'}>
              {passed ? (
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              ) : (
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm1.61-9.96c-2.06-.3-3.88.97-4.43 2.79-.18.58.26 1.17.87 1.17h.2c.41 0 .74-.29.88-.67.32-.89 1.27-1.5 2.3-1.28.95.2 1.65 1.13 1.57 2.1-.1 1.34-1.62 1.63-2.45 2.88 0 .01-.01.01-.01.02-.01.02-.02.03-.03.05-.09.15-.18.32-.25.5-.01.03-.03.05-.04.08-.01.02-.01.04-.02.07C11.1 15.4 11 15.56 11 16h2c0-.36.1-.67.28-.94.05-.08.11-.14.16-.21.28-.4.6-.74 1.01-1.01.56-.37 1.12-.74 1.53-1.31C16.73 11.41 16.15 9.51 15.03 8.67c-.54-.41-1.18-.67-1.87-.78z"/>
              )}
            </svg>
          </div>
          <h3 style={{ fontSize: '28px', fontWeight: '900', color: '#0d1f17', marginBottom: '8px' }}>
            {score} av {questions.length} rätt
          </h3>
          <div style={{
            display: 'inline-block',
            background: passed ? '#e6f4ee' : '#fef3cd',
            color: passed ? '#006B3F' : '#92400e',
            fontWeight: '700',
            fontSize: '15px',
            padding: '6px 18px',
            borderRadius: '999px',
            marginBottom: '24px',
          }}>
            {passed ? 'Godkänt resultat!' : 'Fortsätt träna — du klarar det!'}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '32px' }}>
            {questions.map((_, i) => (
              <div key={i} style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: answers[i] === questions[i].correct ? '#006B3F' : '#ef4444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: '700',
                fontSize: '16px',
              }}>
                {answers[i] === questions[i].correct ? (
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                ) : (
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="white"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                )}
              </div>
            ))}
          </div>
          <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.7', marginBottom: '32px' }}>
            Med Huvet Premium får du {questions.length * 90}+ fler frågor, detaljerad analys av dina svaga ämnen och personliga träningsplaner.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="#pricing" style={{
              background: '#006B3F',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '999px',
              fontWeight: '700',
              fontSize: '15px',
              textDecoration: 'none',
              display: 'block',
            }}>
              Lås upp alla 450+ frågor
            </a>
            <button onClick={handleRestart} style={{
              background: 'white',
              color: '#006B3F',
              border: '2px solid #006B3F',
              padding: '14px 32px',
              borderRadius: '999px',
              fontWeight: '700',
              fontSize: '14px',
              cursor: 'pointer',
            }}>
              Kör om
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {xpNotif && (
        <XPNotification
          xpGained={xpNotif.xp}
          newAchievements={xpNotif.achievements}
          onDone={() => setXpNotif(null)}
        />
      )}
      <div style={{
        background: 'white',
        borderRadius: '24px',
        overflow: 'hidden',
        maxWidth: '560px',
        margin: '0 auto',
        boxShadow: '0 8px 40px rgba(0,107,63,0.10)',
        border: '2px solid #e2efe9',
      }}>
        {/* Progress bar */}
        <div style={{ height: '4px', background: '#e2efe9' }}>
          <div style={{
            height: '100%',
            background: '#006B3F',
            width: `${((current) / questions.length) * 100}%`,
            transition: 'width 0.3s ease',
          }} />
        </div>

        <div style={{ padding: '28px 24px' }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div style={{
                background: catColor + '15',
                color: catColor,
                fontSize: '11px',
                fontWeight: '700',
                textTransform: 'uppercase' as const,
                letterSpacing: '0.14em',
                padding: '4px 12px',
                borderRadius: '999px',
              }}>
                {q.category}
              </div>
              {gfState && <StreakIndicator streak={gfState.streak} />}
            </div>
            <span style={{ fontSize: '13px', color: '#999', fontWeight: '600' }}>
              {current + 1} / {questions.length}
            </span>
          </div>

          {/* Question */}
          <h3 style={{
            fontSize: '20px',
            fontWeight: '800',
            color: '#0d1f17',
            lineHeight: '1.4',
            marginBottom: '24px',
          }}>
            {q.question}
          </h3>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
            {q.options.map((opt, i) => {
              const isSelected = selected === i;
              const isCorrect = i === q.correct;
              const isWrong = isSelected && !isCorrect;

              let bg = 'white';
              let border = '#e2efe9';
              let color = '#0d1f17';

              if (selected !== null) {
                if (isCorrect) { bg = '#e6f4ee'; border = '#006B3F'; color = '#004d2d'; }
                else if (isWrong) { bg = '#fef2f2'; border = '#ef4444'; color = '#991b1b'; }
                else { bg = '#fafafa'; border = '#e2efe9'; color = '#aaa'; }
              } else if (isSelected) {
                bg = '#e6f4ee'; border = '#006B3F';
              }

              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={selected !== null}
                  style={{
                    background: bg,
                    border: `2px solid ${border}`,
                    borderRadius: '14px',
                    padding: '14px 18px',
                    textAlign: 'left' as const,
                    fontSize: '15px',
                    fontWeight: '600',
                    color,
                    cursor: selected !== null ? 'default' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: selected !== null
                      ? isCorrect ? '#006B3F' : isWrong ? '#ef4444' : '#e2efe9'
                      : '#e2efe9',
                    color: selected !== null && (isCorrect || isWrong) ? 'white' : '#666',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px',
                    fontWeight: '700',
                    flexShrink: 0,
                  }}>
                    {selected !== null
                      ? isCorrect
                        ? <svg width={14} height={14} viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                        : isWrong
                          ? <svg width={12} height={12} viewBox="0 0 24 24" fill="white"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                          : String.fromCharCode(65 + i)
                      : String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>

          {/* XP indicator after answering */}
          {selected !== null && gfState && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '12px',
              fontSize: '12px',
              color: '#888',
            }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                background: '#F3E5F5',
                color: '#7B1FA2',
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: '999px',
              }}>
                <svg width={12} height={12} viewBox="0 0 24 24" fill="#7B1FA2">
                  <path d="M11 21h-1l1-7H7.5c-.88 0-.33-.75-.31-.78C8.48 10.94 10.42 7.54 13.01 3h1l-1 7h3.51c.4 0 .62.19.4.66C12.97 17.55 11 21 11 21z"/>
                </svg>
                {gfState.xp} XP
              </span>
              {gfState.streak > 0 && (
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  color: '#E65100',
                  fontWeight: 600,
                }}>
                  <svg width={12} height={12} viewBox="0 0 24 24" fill="#FF6D00">
                    <path d="M12 2C8.5 7 4 9.5 4 14a8 8 0 0016 0c0-4.5-4.5-7-8-12z"/>
                  </svg>
                  {gfState.streak} dagars streak
                </span>
              )}
            </div>
          )}

          {/* Explanation */}
          {showExplanation && (
            <div style={{
              background: '#f0f7f3',
              borderRadius: '14px',
              padding: '16px',
              marginBottom: '20px',
              borderLeft: '4px solid #006B3F',
            }}>
              <div style={{ fontSize: '12px', fontWeight: '700', color: '#006B3F', marginBottom: '6px', textTransform: 'uppercase' as const, letterSpacing: '0.1em' }}>
                Förklaring
              </div>
              <p style={{ fontSize: '14px', color: '#333', lineHeight: '1.6', margin: 0 }}>
                {q.explanation}
              </p>
            </div>
          )}

          {/* Next button */}
          {selected !== null && (
            <button
              onClick={handleNext}
              style={{
                background: '#006B3F',
                color: 'white',
                border: 'none',
                borderRadius: '999px',
                padding: '14px 28px',
                fontSize: '15px',
                fontWeight: '700',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              {current + 1 >= questions.length ? 'Se resultat' : 'Nästa fråga'}
            </button>
          )}
        </div>
      </div>
    </>
  );
}
