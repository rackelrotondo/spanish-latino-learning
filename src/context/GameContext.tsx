'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { useAuth } from './AuthContext'

interface Badge {
  id: string
  name: string
  description: string
  icon: string
  color: string
  requirement: string
  xpReward: number
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
}

interface CountryProgress {
  countryCode: string
  countryName: string
  isUnlocked: boolean
  completedLessons: number
  totalLessons: number
  xpEarned: number
  badges: string[]
  culturalKnowledge: number // 0-100%
  vocabularyMastery: number // 0-100%
  grammarProgress: number // 0-100%
  listeningSkills: number // 0-100%
}

interface GameContextType {
  badges: Badge[]
  countryProgress: CountryProgress[]
  earnXP: (amount: number, source: string) => void
  unlockBadge: (badgeId: string) => void
  unlockCountry: (countryCode: string) => void
  completeLesson: (countryCode: string, lessonId: string, xpEarned: number) => void
  getUserLevel: () => number
  getXPForNextLevel: () => number
  getStreakMultiplier: () => number
}

const allBadges: Badge[] = [
  {
    id: 'bem-vindo',
    name: 'Bem-vindo ao Lab',
    description: 'Primeiro passo na jornada do AyvuLab',
    icon: '🧪',
    color: '#cd9f83',
    requirement: 'Criar conta',
    xpReward: 50,
    rarity: 'common'
  },
  {
    id: 'primeira-licao',
    name: 'Primeira Descoberta',
    description: 'Complete sua primeira lição',
    icon: '📚',
    color: '#b0623f',
    requirement: 'Completar 1 lição',
    xpReward: 100,
    rarity: 'common'
  },
  {
    id: 'explorador',
    name: 'Explorador Cultural',
    description: 'Desbloqueie 3 países diferentes',
    icon: '🗺️',
    color: '#859e82',
    requirement: 'Desbloquear 3 países',
    xpReward: 250,
    rarity: 'rare'
  },
  {
    id: 'dedicado',
    name: 'Dedicação Solar',
    description: 'Mantenha um streak de 7 dias',
    icon: '☀️',
    color: '#274f57',
    requirement: '7 dias consecutivos',
    xpReward: 300,
    rarity: 'rare'
  },
  {
    id: 'mestre-mexico',
    name: 'Maestro Mexicano',
    description: 'Complete todos os módulos do México',
    icon: '🇲🇽',
    color: '#cd9f83',
    requirement: 'Completar México 100%',
    xpReward: 500,
    rarity: 'epic'
  },
  {
    id: 'tanguero',
    name: 'Tanguero Porteño',
    description: 'Domine a cultura argentina',
    icon: '🇦🇷',
    color: '#b0623f',
    requirement: 'Completar Argentina 100%',
    xpReward: 500,
    rarity: 'epic'
  },
  {
    id: 'poliglota',
    name: 'Políglota Latino',
    description: 'Complete 5 países diferentes',
    icon: '🌟',
    color: '#859e82',
    requirement: 'Completar 5 países',
    xpReward: 1000,
    rarity: 'legendary'
  }
]

const GameContext = createContext<GameContextType | undefined>(undefined)

export function GameProvider({ children }: { children: ReactNode }) {
  const { user, updateUser } = useAuth()
  const [badges] = useState<Badge[]>(allBadges)
  
  // Progresso inicial dos países
  const initialCountryProgress: CountryProgress[] = [
    {
      countryCode: 'mx',
      countryName: 'México',
      isUnlocked: true,
      completedLessons: 2,
      totalLessons: 12,
      xpEarned: 150,
      badges: ['primeira-licao'],
      culturalKnowledge: 25,
      vocabularyMastery: 30,
      grammarProgress: 20,
      listeningSkills: 15
    },
    {
      countryCode: 'ar',
      countryName: 'Argentina',
      isUnlocked: user?.unlockedCountries.includes('ar') || false,
      completedLessons: 1,
      totalLessons: 10,
      xpEarned: 75,
      badges: [],
      culturalKnowledge: 15,
      vocabularyMastery: 20,
      grammarProgress: 10,
      listeningSkills: 5
    },
    {
      countryCode: 'es',
      countryName: 'Espanha',
      isUnlocked: user?.unlockedCountries.includes('es') || false,
      completedLessons: 0,
      totalLessons: 15,
      xpEarned: 0,
      badges: [],
      culturalKnowledge: 0,
      vocabularyMastery: 0,
      grammarProgress: 0,
      listeningSkills: 0
    }
  ]

  const [countryProgress] = useState<CountryProgress[]>(initialCountryProgress)

  const earnXP = (amount: number, source: string) => {
    if (!user) return
    
    const streakMultiplier = getStreakMultiplier()
    const finalXP = Math.floor(amount * streakMultiplier)
    
    updateUser({
      totalXP: user.totalXP + finalXP,
      level: getUserLevel()
    })
  }

  const unlockBadge = (badgeId: string) => {
    if (!user || user.badges.includes(badgeId)) return
    
    const badge = badges.find(b => b.id === badgeId)
    if (badge) {
      updateUser({
        badges: [...user.badges, badgeId],
        totalXP: user.totalXP + badge.xpReward
      })
    }
  }

  const unlockCountry = (countryCode: string) => {
    if (!user || user.unlockedCountries.includes(countryCode)) return
    
    updateUser({
      unlockedCountries: [...user.unlockedCountries, countryCode]
    })
  }

  const completeLesson = (countryCode: string, lessonId: string, xpEarned: number) => {
    if (!user) return
    
    const lessonKey = `${countryCode}-${lessonId}`
    if (!user.completedLessons.includes(lessonKey)) {
      updateUser({
        completedLessons: [...user.completedLessons, lessonKey]
      })
      earnXP(xpEarned, 'lesson')
    }
  }

  const getUserLevel = (): number => {
    if (!user) return 1
    return Math.floor(user.totalXP / 250) + 1
  }

  const getXPForNextLevel = (): number => {
    if (!user) return 250
    const currentLevel = getUserLevel()
    const xpForNextLevel = currentLevel * 250
    return xpForNextLevel - user.totalXP
  }

  const getStreakMultiplier = (): number => {
    if (!user) return 1
    if (user.currentStreak >= 30) return 2.0
    if (user.currentStreak >= 14) return 1.5
    if (user.currentStreak >= 7) return 1.3
    if (user.currentStreak >= 3) return 1.1
    return 1.0
  }

  return (
    <GameContext.Provider value={{
      badges,
      countryProgress,
      earnXP,
      unlockBadge,
      unlockCountry,
      completeLesson,
      getUserLevel,
      getXPForNextLevel,
      getStreakMultiplier
    }}>
      {children}
    </GameContext.Provider>
  )
}

export function useGame() {
  const context = useContext(GameContext)
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider')
  }
  return context
}
