'use client';

import { useEffect, useState } from 'react';
import {
  loadState,
  getCurrentLevel,
  getNextLevel,
  getLevelProgress,
  ACHIEVEMENTS,
  LEVELS,
  type GamificationState,
} from '@/lib/gamification';
import { FlameIcon, BoltIcon, TrophyIcon, AchievementIcon } from './GamificationIcons';

export default function GamificationDashboard() {
  const [state, setState] = useState<GamificationState | null>(null);
  const [showAchievements, setShowAchievements] = useState(false);

  useEffect(() => {
    setState(loadState());
  }, []);

  if (!state || (state.totalAnswered === 0 && state.streak === 0)) {
    return null; // Don't show if user hasn't started
  }

  const level = getCurrentLevel(state.xp);
  const nextLevel = getNextLevel(state.xp);
  const progress = getLevelProgress(state.xp);
  const unlockedAchievements = ACHIEVEMENTS.filter((a) => state.achievements.includes(a.id));
  const lockedAchievements = ACHIEVEMENTS.filter((a) => !state.achievements.includes(a.id));

  // Category progress for display
  const categoryEntries = Object.entries(state.categoryProgress).filter(
    ([, v]) => v.total > 0
  );

  return (
    <>
      <style>{`
        .gf-dashboard {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }
        .gf-stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .gf-stat-card {
          background: #fff;
          border: 1px solid #f0f0f0;
          border-radius: 16px;
          padding: 1.25rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .gf-stat-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .gf-stat-value {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1;
        }
        .gf-stat-label {
          font-size: 0.72rem;
          color: #888;
          margin-top: 2px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .gf-level-card {
          background: #111;
          border-radius: 20px;
          padding: 1.75rem;
          color: #fff;
          margin-bottom: 1.5rem;
          position: relative;
          overflow: hidden;
        }
        .gf-level-glow {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          top: -80px;
          right: -60px;
          pointer-events: none;
        }
        .gf-level-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          position: relative;
        }
        .gf-level-name {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
        }
        .gf-level-xp {
          font-size: 0.8rem;
          color: #888;
        }
        .gf-level-bar-bg {
          height: 8px;
          background: #222;
          border-radius: 100px;
          overflow: hidden;
          position: relative;
        }
        .gf-level-bar-fill {
          height: 100%;
          border-radius: 100px;
          transition: width 0.6s ease;
        }
        .gf-level-labels {
          display: flex;
          justify-content: space-between;
          margin-top: 0.5rem;
          position: relative;
        }
        .gf-level-label {
          font-size: 0.7rem;
          color: #555;
        }
        .gf-categories {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .gf-cat-card {
          background: #fff;
          border: 1px solid #f0f0f0;
          border-radius: 14px;
          padding: 1rem 1.25rem;
        }
        .gf-cat-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .gf-cat-name {
          font-size: 0.82rem;
          font-weight: 600;
        }
        .gf-cat-count {
          font-size: 0.72rem;
          color: #888;
        }
        .gf-cat-bar-bg {
          height: 6px;
          background: #f0f0f0;
          border-radius: 100px;
          overflow: hidden;
        }
        .gf-cat-bar-fill {
          height: 100%;
          background: #1DB954;
          border-radius: 100px;
          transition: width 0.4s ease;
        }
        .gf-achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .gf-ach-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #fff;
          border: 1px solid #f0f0f0;
          border-radius: 14px;
          padding: 0.85rem 1rem;
          transition: all 0.15s;
        }
        .gf-ach-card.locked {
          opacity: 0.4;
        }
        .gf-ach-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .gf-ach-name {
          font-size: 0.82rem;
          font-weight: 700;
        }
        .gf-ach-desc {
          font-size: 0.7rem;
          color: #888;
          margin-top: 1px;
        }
        .gf-show-more {
          background: none;
          border: 1.5px solid #e0e0e0;
          border-radius: 12px;
          padding: 0.6rem 1.25rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: #666;
          cursor: pointer;
          display: block;
          margin: 0 auto;
          transition: all 0.15s;
        }
        .gf-show-more:hover {
          border-color: #1DB954;
          color: #1DB954;
        }
        .gf-section-title {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        @media (max-width: 768px) {
          .gf-stats-row { grid-template-columns: repeat(2, 1fr); }
          .gf-categories { grid-template-columns: 1fr; }
          .gf-achievements-grid { grid-template-columns: 1fr; }
          .gf-dashboard { padding: 0 1.5rem; }
        }
      `}</style>

      <section style={{ padding: '3rem 0 2rem', background: '#fafafa' }}>
        <div className="gf-dashboard">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <h2 className="section-title">Din framsteg</h2>
            <p className="section-sub">Håll streaken, samla XP och lås upp achievements</p>
          </div>

          {/* Stats row */}
          <div className="gf-stats-row">
            <div className="gf-stat-card">
              <div className="gf-stat-icon" style={{ background: '#FFF3E0' }}>
                <FlameIcon size={22} />
              </div>
              <div>
                <div className="gf-stat-value">{state.streak}</div>
                <div className="gf-stat-label">{state.streak === 1 ? 'Dag streak' : 'Dagars streak'}</div>
              </div>
            </div>
            <div className="gf-stat-card">
              <div className="gf-stat-icon" style={{ background: '#F3E5F5' }}>
                <BoltIcon size={22} />
              </div>
              <div>
                <div className="gf-stat-value">{state.xp}</div>
                <div className="gf-stat-label">XP totalt</div>
              </div>
            </div>
            <div className="gf-stat-card">
              <div className="gf-stat-icon" style={{ background: '#e8f8ee' }}>
                <svg width={22} height={22} viewBox="0 0 24 24" fill="#1DB954">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
              </div>
              <div>
                <div className="gf-stat-value">{state.totalCorrect}</div>
                <div className="gf-stat-label">Rätt svar</div>
              </div>
            </div>
            <div className="gf-stat-card">
              <div className="gf-stat-icon" style={{ background: '#FFF8E1' }}>
                <TrophyIcon size={22} />
              </div>
              <div>
                <div className="gf-stat-value">{unlockedAchievements.length}</div>
                <div className="gf-stat-label">Achievements</div>
              </div>
            </div>
          </div>

          {/* Level card */}
          <div className="gf-level-card">
            <div className="gf-level-glow" style={{
              background: `radial-gradient(circle, ${level.color}22, transparent 70%)`
            }} />
            <div className="gf-level-top">
              <div>
                <div className="gf-level-name" style={{ color: level.color }}>
                  {level.name}
                </div>
                <div className="gf-level-xp">{state.xp} XP</div>
              </div>
              {nextLevel && (
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.72rem', color: '#555' }}>Nästa nivå</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: nextLevel.color }}>
                    {nextLevel.name}
                  </div>
                </div>
              )}
            </div>
            <div className="gf-level-bar-bg">
              <div
                className="gf-level-bar-fill"
                style={{ width: `${progress}%`, background: level.color }}
              />
            </div>
            <div className="gf-level-labels">
              <span className="gf-level-label">{level.name}</span>
              {nextLevel ? (
                <span className="gf-level-label">{nextLevel.minXP} XP</span>
              ) : (
                <span className="gf-level-label" style={{ color: level.color }}>MAX</span>
              )}
            </div>
          </div>

          {/* Category progress */}
          {categoryEntries.length > 0 && (
            <>
              <div className="gf-section-title">
                <svg width={18} height={18} viewBox="0 0 24 24" fill="#1DB954">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
                </svg>
                Framsteg per kategori
              </div>
              <div className="gf-categories">
                {categoryEntries.map(([cat, data]) => {
                  const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
                  return (
                    <div key={cat} className="gf-cat-card">
                      <div className="gf-cat-header">
                        <span className="gf-cat-name">{cat}</span>
                        <span className="gf-cat-count">{data.correct}/{data.total} ({pct}%)</span>
                      </div>
                      <div className="gf-cat-bar-bg">
                        <div className="gf-cat-bar-fill" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {/* Achievements */}
          {(unlockedAchievements.length > 0 || showAchievements) && (
            <>
              <div className="gf-section-title">
                <TrophyIcon size={18} />
                Achievements ({unlockedAchievements.length}/{ACHIEVEMENTS.length})
              </div>
              <div className="gf-achievements-grid">
                {unlockedAchievements.map((a) => (
                  <div key={a.id} className="gf-ach-card">
                    <div className="gf-ach-icon" style={{ background: '#e8f8ee' }}>
                      <AchievementIcon type={a.icon} size={20} />
                    </div>
                    <div>
                      <div className="gf-ach-name">{a.name}</div>
                      <div className="gf-ach-desc">{a.description}</div>
                    </div>
                  </div>
                ))}
                {showAchievements && lockedAchievements.map((a) => (
                  <div key={a.id} className="gf-ach-card locked">
                    <div className="gf-ach-icon" style={{ background: '#f5f5f5' }}>
                      <AchievementIcon type={a.icon} size={20} />
                    </div>
                    <div>
                      <div className="gf-ach-name">{a.name}</div>
                      <div className="gf-ach-desc">{a.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="gf-show-more"
                onClick={() => setShowAchievements(!showAchievements)}
              >
                {showAchievements ? 'Dölj låsta' : `Visa alla (${ACHIEVEMENTS.length})`}
              </button>
            </>
          )}
        </div>
      </section>
    </>
  );
}
