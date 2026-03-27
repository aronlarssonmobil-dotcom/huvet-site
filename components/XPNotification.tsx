'use client';

import { useEffect, useState } from 'react';
import { BoltIcon, TrophyIcon, FlameIcon } from './GamificationIcons';
import { ACHIEVEMENTS } from '@/lib/gamification';

interface XPNotificationProps {
  xpGained: number;
  streakBonus?: number;
  newAchievements?: string[];
  onDone?: () => void;
}

export default function XPNotification({ xpGained, newAchievements = [], onDone }: XPNotificationProps) {
  const [visible, setVisible] = useState(false);
  const [achievementIndex, setAchievementIndex] = useState(-1);

  useEffect(() => {
    if (xpGained <= 0 && newAchievements.length === 0) return;
    
    setVisible(true);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      if (newAchievements.length > 0) {
        setAchievementIndex(0);
      } else {
        onDone?.();
      }
    }, 1500);
    
    return () => clearTimeout(hideTimer);
  }, [xpGained, newAchievements, onDone]);

  useEffect(() => {
    if (achievementIndex < 0 || achievementIndex >= newAchievements.length) {
      if (achievementIndex >= newAchievements.length && achievementIndex > 0) {
        onDone?.();
      }
      return;
    }
    
    const timer = setTimeout(() => {
      setAchievementIndex((prev) => prev + 1);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [achievementIndex, newAchievements, onDone]);

  const currentAchievement = achievementIndex >= 0 && achievementIndex < newAchievements.length
    ? ACHIEVEMENTS.find((a) => a.id === newAchievements[achievementIndex])
    : null;

  return (
    <>
      {/* XP popup */}
      {visible && xpGained > 0 && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: '#111',
          color: '#fff',
          padding: '10px 18px',
          borderRadius: '14px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
          animation: 'gf-slide-in 0.3s ease',
          fontSize: '14px',
          fontWeight: 700,
        }}>
          <BoltIcon size={18} color="#AB47BC" />
          +{xpGained} XP
        </div>
      )}

      {/* Achievement popup */}
      {currentAchievement && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: '#111',
          color: '#fff',
          padding: '14px 22px',
          borderRadius: '16px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.25)',
          animation: 'gf-slide-in 0.3s ease',
          border: '1px solid #333',
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: '#1a3a2a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <TrophyIcon size={22} color="#FFD600" />
          </div>
          <div>
            <div style={{ fontSize: '11px', color: '#1DB954', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.1em' }}>
              Achievement Unlocked
            </div>
            <div style={{ fontSize: '15px', fontWeight: 700 }}>{currentAchievement.name}</div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes gf-slide-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

// Mini streak indicator for quiz header
export function StreakIndicator({ streak }: { streak: number }) {
  if (streak <= 0) return null;
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      background: '#FFF3E0',
      padding: '3px 10px',
      borderRadius: '999px',
      fontSize: '12px',
      fontWeight: 700,
      color: '#E65100',
    }}>
      <FlameIcon size={14} />
      {streak}
    </div>
  );
}
