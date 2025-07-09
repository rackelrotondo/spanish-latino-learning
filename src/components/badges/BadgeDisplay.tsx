'use client'

import { useGame } from '@/context/GameContext'
import { useAuth } from '@/context/AuthContext'

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

export default function BadgeDisplay() {
  const { badges } = useGame()
  const { user } = useAuth()

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return '#cd9f83'
      case 'rare': return '#b0623f'
      case 'epic': return '#859e82'
      case 'legendary': return '#274f57'
      default: return '#cd9f83'
    }
  }

  const getRarityGlow = (rarity: string) => {
    switch (rarity) {
      case 'common': return '0 0 10px rgba(205, 159, 131, 0.5)'
      case 'rare': return '0 0 15px rgba(176, 98, 63, 0.6)'
      case 'epic': return '0 0 20px rgba(133, 158, 130, 0.7)'
      case 'legendary': return '0 0 25px rgba(39, 79, 87, 0.8)'
      default: return 'none'
    }
  }

  const earnedBadges = badges.filter(badge => user?.badges.includes(badge.id))
  const lockedBadges = badges.filter(badge => !user?.badges.includes(badge.id))

  return (
    <div className="p-6">
      <div className="text-center mb-8">
        <span className="text-6xl mb-4 block animate-sol-pulse">🏆</span>
        <h2 className="text-3xl font-bold text-white mb-2">
          Conquistas do <span className="accent-bege">AyvuLab</span>
        </h2>
        <p className="text-white/90">
          {earnedBadges.length} de {badges.length} badges conquistados
        </p>
      </div>

      {/* Progresso geral */}
      <div className="mb-8">
        <div className="flex justify-between text-white/90 text-sm mb-2">
          <span>Progresso de Badges</span>
          <span>{Math.round((earnedBadges.length / badges.length) * 100)}%</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-3">
          <div 
            className="bg-bege h-3 rounded-full transition-all duration-500"
            style={{ width: `${(earnedBadges.length / badges.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Badges Conquistados */}
      {earnedBadges.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <span className="text-2xl mr-2">✨</span>
            Badges Conquistados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {earnedBadges.map((badge) => (
              <div
                key={badge.id}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border transition-all duration-300 hover:scale-105"
                style={{ 
                  borderColor: badge.color,
                  boxShadow: getRarityGlow(badge.rarity)
                }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-2 animate-sol-pulse">{badge.icon}</div>
                  <h4 className="font-bold text-white mb-1">{badge.name}</h4>
                  <p className="text-white/80 text-sm mb-2">{badge.description}</p>
                  <div className="flex justify-between items-center text-xs">
                    <span 
                      className="px-2 py-1 rounded-full font-medium"
                      style={{ 
                        backgroundColor: badge.color + '20',
                        color: badge.color
                      }}
                    >
                      {badge.rarity.toUpperCase()}
                    </span>
                    <span className="text-white/70">+{badge.xpReward} XP</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Badges Bloqueados */}
      {lockedBadges.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <span className="text-2xl mr-2">🔒</span>
            Próximas Conquistas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lockedBadges.map((badge) => (
              <div
                key={badge.id}
                className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/20 transition-all duration-300 hover:bg-white/10 opacity-60"
              >
                <div className="text-center">
                  <div className="text-4xl mb-2 grayscale">{badge.icon}</div>
                  <h4 className="font-bold text-white/70 mb-1">{badge.name}</h4>
                  <p className="text-white/60 text-sm mb-2">{badge.description}</p>
                  <div className="text-xs text-white/50 mb-2">
                    <strong>Requisito:</strong> {badge.requirement}
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span 
                      className="px-2 py-1 rounded-full font-medium bg-gray-500/20 text-gray-400"
                    >
                      {badge.rarity.toUpperCase()}
                    </span>
                    <span className="text-white/50">+{badge.xpReward} XP</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Badge especial do Sol de Mayo */}
      <div className="mt-8 bg-gradient-to-r from-bege/20 to-marrom/20 rounded-xl p-6 border border-bege/30">
        <div className="text-center">
          <span className="text-6xl mb-4 block animate-sol-pulse">☀️</span>
          <h3 className="text-2xl font-bold text-white mb-2">
            Badge Especial: <span className="accent-bege">Sol de Mayo</span>
          </h3>
          <p className="text-white/90 mb-4">
            Complete todos os países para conquistar o badge mais especial do AyvuLab!
          </p>
          <div className="bg-white/10 rounded-lg p-3">
            <span className="text-white/80 text-sm">
              🏆 Conquiste este badge e torne-se um Mestre Cultural Latino-Americano!
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
