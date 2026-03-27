'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  loadProgress,
  getExamReadiness,
  getWeakCategories,
  type UserProgress,
} from '../lib/progress';
import { categoryLabels } from '../lib/questions/types';

export default function ProgressDashboard() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [readiness, setReadiness] = useState(0);

  useEffect(() => {
    const p = loadProgress();
    if (p.totalAnswered > 0) {
      setProgress(p);
      setReadiness(getExamReadiness(p));
    }
  }, []);

  if (!progress || progress.totalAnswered === 0) return null;

  const weakCats = getWeakCategories(progress);
  const accuracy = progress.totalAnswered > 0
    ? Math.round((progress.totalCorrect / progress.totalAnswered) * 100)
    : 0;

  return (
    <section style={{
      maxWidth: 1100,
      margin: '0 auto',
      padding: '2rem 1.5rem',
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #0d1f17 0%, #003d24 100%)',
        borderRadius: 20,
        padding: '2rem',
        color: '#fff',
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <div>
            <h2 style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              fontSize: '1.4rem',
              fontWeight: 800,
              margin: 0,
            }}>
              Välkommen tillbaka
            </h2>
            <p style={{ fontSize: '0.9rem', opacity: 0.7, margin: '0.25rem 0 0' }}>
              Fortsätt där du slutade
            </p>
          </div>

          {/* Streak */}
          {progress.currentStreak > 0 && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(245,208,32,0.15)',
              padding: '0.5rem 1rem',
              borderRadius: 12,
              border: '1px solid rgba(245,208,32,0.3)',
            }}>
              <span style={{ fontSize: '1.5rem' }}>🔥</span>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f5d020' }}>
                  {progress.currentStreak}
                </div>
                <div style={{ fontSize: '0.65rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  dagars streak
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '1rem',
          marginBottom: '1.5rem',
        }}>
          {/* XP */}
          <div style={{
            background: 'rgba(255,255,255,0.08)',
            borderRadius: 14,
            padding: '1rem',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f5d020' }}>
              {progress.totalXP}
            </div>
            <div style={{ fontSize: '0.7rem', opacity: 0.6, marginTop: 2, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Total XP
            </div>
          </div>

          {/* Accuracy */}
          <div style={{
            background: 'rgba(255,255,255,0.08)',
            borderRadius: 14,
            padding: '1rem',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>
              {accuracy}%
            </div>
            <div style={{ fontSize: '0.7rem', opacity: 0.6, marginTop: 2, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Träffsäkerhet
            </div>
          </div>

          {/* Questions */}
          <div style={{
            background: 'rgba(255,255,255,0.08)',
            borderRadius: 14,
            padding: '1rem',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>
              {progress.totalAnswered}
            </div>
            <div style={{ fontSize: '0.7rem', opacity: 0.6, marginTop: 2, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Frågor svarade
            </div>
          </div>

          {/* Readiness */}
          <div style={{
            background: 'rgba(255,255,255,0.08)',
            borderRadius: 14,
            padding: '1rem',
            textAlign: 'center',
          }}>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              color: readiness >= 80 ? '#4ade80' : readiness >= 50 ? '#f5d020' : '#f87171',
            }}>
              {readiness}%
            </div>
            <div style={{ fontSize: '0.7rem', opacity: 0.6, marginTop: 2, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Provredo
            </div>
          </div>
        </div>

        {/* Weak categories */}
        {weakCats.length > 0 && (
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '0.8rem', opacity: 0.6, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Svaga områden — öva mer
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {weakCats.slice(0, 4).map(({ category, accuracy: acc }) => (
                <span key={category} style={{
                  padding: '0.35rem 0.75rem',
                  background: 'rgba(248,113,113,0.15)',
                  border: '1px solid rgba(248,113,113,0.3)',
                  borderRadius: 8,
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#fca5a5',
                }}>
                  {categoryLabels[category as keyof typeof categoryLabels] || category} ({acc}%)
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link href="/ovningsprov" style={{
            padding: '0.8rem 1.5rem',
            background: '#f5d020',
            color: '#0d1f17',
            borderRadius: 14,
            fontWeight: 800,
            fontSize: '0.95rem',
            textDecoration: 'none',
            display: 'inline-block',
          }}>
            Fortsätt öva →
          </Link>
          {readiness >= 70 && (
            <Link href="/ovningsprov" style={{
              padding: '0.8rem 1.5rem',
              background: 'rgba(255,255,255,0.1)',
              color: '#fff',
              borderRadius: 14,
              fontWeight: 700,
              fontSize: '0.95rem',
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.2)',
              display: 'inline-block',
            }}>
              Gör ett provprov (65 frågor)
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
