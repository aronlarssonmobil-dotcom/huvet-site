'use client';

import { useState } from 'react';
import QuizEngine from '../../components/Quiz/QuizEngine';
import { allQuestions, getRandomQuestions, getQuestionsByCategory, categoryLabels, type QuizCategory } from '../../lib/questions';

type Mode = 'select' | 'practice' | 'exam';

const categories: { key: QuizCategory; icon: string }[] = [
  { key: 'vajningsplikt', icon: '⚠️' },
  { key: 'vagmarken', icon: '🛑' },
  { key: 'hastighet', icon: '🏎️' },
  { key: 'parkering', icon: '🅿️' },
  { key: 'alkohol-droger', icon: '🚫' },
  { key: 'vagmarkeringar', icon: '🛣️' },
  { key: 'miljo-bransle', icon: '🌱' },
  { key: 'fordon-teknik', icon: '🔧' },
  { key: 'riskbeteende', icon: '⚡' },
  { key: 'motorvag', icon: '🛤️' },
  { key: 'morkerkörning', icon: '🌙' },
];

export default function ExamSimulator() {
  const [mode, setMode] = useState<Mode>('select');
  const [selectedCategory, setSelectedCategory] = useState<QuizCategory | null>(null);
  const [questions, setQuestions] = useState(allQuestions);

  const startExam = () => {
    setQuestions(getRandomQuestions(65));
    setMode('exam');
  };

  const startPractice = (category?: QuizCategory) => {
    if (category) {
      setSelectedCategory(category);
      const catQuestions = getQuestionsByCategory(category);
      setQuestions(catQuestions.length > 0 ? catQuestions : getRandomQuestions(10));
    } else {
      setSelectedCategory(null);
      setQuestions(getRandomQuestions(20));
    }
    setMode('practice');
  };

  const goBack = () => {
    setMode('select');
    setSelectedCategory(null);
  };

  if (mode === 'exam') {
    return (
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '2rem 1rem' }}>
        <button
          onClick={goBack}
          style={{
            background: 'none',
            border: 'none',
            color: '#006B3F',
            fontWeight: 600,
            fontSize: '0.9rem',
            cursor: 'pointer',
            marginBottom: '1rem',
            fontFamily: 'inherit',
          }}
        >
          ← Tillbaka
        </button>
        <div style={{
          background: '#fff',
          borderRadius: 18,
          padding: '2rem',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          border: '1px solid #dceee5',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '0.3rem 0.8rem',
            background: '#dc2626',
            color: '#fff',
            borderRadius: 8,
            fontSize: '0.75rem',
            fontWeight: 700,
            marginBottom: '1rem',
          }}>
            PROVLÄGE — 65 frågor, 50 min
          </div>
          <QuizEngine questions={questions} mode="exam" count={65} />
        </div>
      </div>
    );
  }

  if (mode === 'practice') {
    return (
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '2rem 1rem' }}>
        <button
          onClick={goBack}
          style={{
            background: 'none',
            border: 'none',
            color: '#006B3F',
            fontWeight: 600,
            fontSize: '0.9rem',
            cursor: 'pointer',
            marginBottom: '1rem',
            fontFamily: 'inherit',
          }}
        >
          ← Tillbaka
        </button>
        <div style={{
          background: '#fff',
          borderRadius: 18,
          padding: '2rem',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          border: '1px solid #dceee5',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '0.3rem 0.8rem',
            background: '#006B3F',
            color: '#fff',
            borderRadius: 8,
            fontSize: '0.75rem',
            fontWeight: 700,
            marginBottom: '1rem',
          }}>
            ÖVNING {selectedCategory ? `— ${categoryLabels[selectedCategory]}` : '— Blandade frågor'}
          </div>
          <QuizEngine questions={questions} mode="practice" />
        </div>
      </div>
    );
  }

  // ─── SELECT MODE ───
  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      {/* Exam CTA */}
      <div style={{
        background: 'linear-gradient(135deg, #006B3F 0%, #004d2d 100%)',
        borderRadius: 20,
        padding: '2.5rem',
        color: '#fff',
        marginBottom: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: -20,
          right: -20,
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: 'rgba(245,208,32,0.15)',
        }} />
        <h2 style={{
          fontFamily: "var(--font-playfair), 'Playfair Display', serif",
          fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
          fontWeight: 800,
          margin: '0 0 0.75rem',
        }}>
          Simulera det riktiga provet
        </h2>
        <p style={{ fontSize: '1rem', opacity: 0.9, margin: '0 0 1.5rem', lineHeight: 1.6 }}>
          65 slumpade frågor, 50 minuters tidsgräns, 80% rätt för godkänt.
          Precis som Trafikverkets riktiga teoriprov.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button
            onClick={startExam}
            style={{
              padding: '0.9rem 2rem',
              background: '#f5d020',
              color: '#0d1f17',
              border: 'none',
              borderRadius: 14,
              fontWeight: 800,
              fontSize: '1rem',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            Starta provläge
          </button>
          <button
            onClick={() => startPractice()}
            style={{
              padding: '0.9rem 2rem',
              background: 'rgba(255,255,255,0.15)',
              color: '#fff',
              border: '2px solid rgba(255,255,255,0.3)',
              borderRadius: 14,
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            Öva fritt (blandade frågor)
          </button>
        </div>
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          marginTop: '1.5rem',
          fontSize: '0.85rem',
          opacity: 0.8,
          flexWrap: 'wrap',
        }}>
          <span>📝 {allQuestions.length}+ frågor</span>
          <span>⏱️ 50 min tidsgräns</span>
          <span>🎯 80% för godkänt</span>
          <span>📊 Kategorivis resultat</span>
        </div>
      </div>

      {/* Category grid */}
      <h3 style={{
        fontFamily: "var(--font-playfair), 'Playfair Display', serif",
        fontSize: '1.3rem',
        fontWeight: 800,
        color: '#0d1f17',
        marginBottom: '1rem',
      }}>
        Öva per kategori
      </h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '0.75rem',
      }}>
        {categories.map(({ key, icon }) => {
          const catQuestions = getQuestionsByCategory(key);
          return (
            <button
              key={key}
              onClick={() => startPractice(key)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 1.25rem',
                background: '#fff',
                border: '1px solid #dceee5',
                borderRadius: 14,
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s',
                fontFamily: 'inherit',
              }}
            >
              <span style={{ fontSize: '1.3rem' }}>{icon}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0d1f17' }}>
                  {categoryLabels[key]}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#5a6b62' }}>
                  {catQuestions.length} frågor
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
