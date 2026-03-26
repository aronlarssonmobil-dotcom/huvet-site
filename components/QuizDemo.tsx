'use client';

import { useState } from 'react';

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
  }

  function handleNext() {
    if (current + 1 >= questions.length) {
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
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    const passed = pct >= 60;
    return (
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
        <div style={{ fontSize: '56px', marginBottom: '16px' }}>{passed ? '🎉' : '💪'}</div>
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
          {passed ? 'Godkänt resultat! ✓' : 'Fortsätt träna — du klarar det!'}
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
              {answers[i] === questions[i].correct ? '✓' : '✗'}
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
            Lås upp alla 450+ frågor →
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
    );
  }

  return (
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
                    ? isCorrect ? '✓' : isWrong ? '✗' : String.fromCharCode(65 + i)
                    : String.fromCharCode(65 + i)}
                </span>
                {opt}
              </button>
            );
          })}
        </div>

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
            {current + 1 >= questions.length ? 'Se resultat →' : 'Nästa fråga →'}
          </button>
        )}
      </div>
    </div>
  );
}
