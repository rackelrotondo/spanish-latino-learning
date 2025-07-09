'use client'

import { useAuth } from '@/context/AuthContext'
import { useGame } from '@/context/GameContext'
import Link from 'next/link'

export default function UserDashboard() {
  const { user, logout } = useAuth()
  const { countryProgress, getUserLevel, getXPForNextLevel, getStreakMultiplier } = useGame()

  if (!user) return null

  const totalCountries = countryProgress.length
  const unlockedCountries = user.unlockedCountries.length
  const completedCountries = countryProgress.filter(cp => 
    cp.completedLessons === cp.totalLessons
  ).length

  const todayGoalProgress = 45 // Mock: 45 minutos de meta de 60
  const weeklyXP = 890 // Mock: XP da semana

  return (
    <div className="min-h-screen bg-azul p-6">
      {/* Header do Dashboard */}
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Olá, <span className="accent-bege">{user.name}</span>! ☀️
            </h1>
            <p className="text-white/80">Bem-vindo de volta ao seu laboratório cultural</p>
          </div>
          
          <div className="flex space-x-4">
            <Link href="/map" className="btn-primary">
              🗺️ Explorar Mapa
            </Link>
            <button onClick={logout} className="btn-secondary">
              Sair
            </button>
          </div>
        </div>

        {/* Cards de Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card-glass border-bege/30 text-center">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-white">Nível {getUserLevel()}</div>
            <div className="text-white/70 text-sm">{getXPForNextLevel()} XP para próximo nível</div>
          </div>
          
          <div className="card-glass border-bege/30 text-center">
            <div className="text-3xl mb-2">💎</div>
            <div className="text-2xl font-bold accent-bege">{user.totalXP.toLocaleString()}</div>
            <div className="text-white/70 text-sm">Total de XP</div>
          </div>
          
          <div className="card-glass border-bege/30 text-center">
            <div className="text-3xl mb-2">🔥</div>
            <div className="text-2xl font-bold text-white">{user.currentStreak}</div>
            <div className="text-white/70 text-sm">Dias consecutivos</div>
          </div>
          
          <div className="card-glass border-bege/30 text-center">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-bold accent-bege">{user.badges.length}</div>
            <div className="text-white/70 text-sm">Badges conquistados</div>
          </div>
        </div>

        {/* Progresso de XP */}
        <div className="card-glass border-bege/30 mb-8">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <span className="text-2xl mr-2">📈</span>
            Progresso para Próximo Nível
          </h3>
          <div className="flex justify-between text-white/90 text-sm mb-2">
            <span>Nível {getUserLevel()}</span>
            <span>Nível {getUserLevel() + 1}</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-4">
            <div 
              className="bg-gradient-to-r from-bege to-marrom h-4 rounded-full transition-all duration-500"
              style={{ width: `${100 - (getXPForNextLevel() / (getUserLevel() * 250)) * 100}%` }}
            ></div>
          </div>
          <div className="text-center mt-2 text-white/80 text-sm">
            Faltam {getXPForNextLevel()} XP para o próximo nível
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Progresso dos Países */}
          <div className="card-glass border-bege/30">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="text-2xl mr-2">🌎</span>
              Progresso por Países
            </h3>
            
            <div className="space-y-4">
              {countryProgress.map((country) => {
                const isUnlocked = user.unlockedCountries.includes(country.countryCode)
                const progress = (country.completedLessons / country.totalLessons) * 100
                
                return (
                  <div key={country.countryCode} className={`p-3 rounded-lg ${isUnlocked ? 'bg-white/10' : 'bg-white/5 opacity-50'}`}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{country.countryName}</span>
                      <span className="text-white/70 text-sm">
                        {isUnlocked ? `${Math.round(progress)}%` : '🔒'}
                      </span>
                    </div>
                    {isUnlocked && (
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div 
                          className="bg-bege h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    )}
                    <div className="flex justify-between text-xs text-white/60 mt-1">
                      <span>{country.completedLessons}/{country.totalLessons} lições</span>
                      <span>{country.xpEarned} XP</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Atividade Recente */}
          <div className="card-glass border-bege/30">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="text-2xl mr-2">📋</span>
              Atividade Recente
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
                <span className="text-2xl">🏆</span>
                <div>
                  <div className="text-white font-medium">Badge conquistado!</div>
                  <div className="text-white/70 text-sm">Explorador Cultural - há 2 dias</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
                <span className="text-2xl">📚</span>
                <div>
                  <div className="text-white font-medium">Lição completada</div>
                  <div className="text-white/70 text-sm">México: Saudações Básicas - há 3 dias</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
                <span className="text-2xl">🔥</span>
                <div>
                  <div className="text-white font-medium">Streak de 7 dias!</div>
                  <div className="text-white/70 text-sm">Parabéns pela dedicação - há 1 semana</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meta Diária */}
        <div className="card-glass border-bege/30 mt-8">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <span className="text-2xl mr-2">🎯</span>
            Meta de Hoje
          </h3>
          
          <div className="flex justify-between text-white/90 text-sm mb-2">
            <span>Progresso diário</span>
            <span>{todayGoalProgress} / {user.preferences.studyGoal} minutos</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-bege to-marrom h-3 rounded-full transition-all duration-500"
              style={{ width: `${Math.min((todayGoalProgress / user.preferences.studyGoal) * 100, 100)}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <span className="text-white/80 text-sm">
              Multiplicador de streak: <span className="accent-bege">x{getStreakMultiplier()}</span>
            </span>
            <span className="text-white/80 text-sm">
              XP desta semana: <span className="accent-bege">{weeklyXP}</span>
            </span>
          </div>
        </div>

        {/* Ações Rápidas */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/map" className="card-glass border-bege/30 hover:scale-105 transition-all duration-300 cursor-pointer text-center">
            <div className="text-4xl mb-2">🗺️</div>
            <div className="text-white font-medium">Explorar Mapa</div>
          </Link>
          
          <Link href="/badges" className="card-glass border-bege/30 hover:scale-105 transition-all duration-300 cursor-pointer text-center">
            <div className="text-4xl mb-2">🏆</div>
            <div className="text-white font-medium">Ver Badges</div>
          </Link>
          
          <Link href="/profile" className="card-glass border-bege/30 hover:scale-105 transition-all duration-300 cursor-pointer text-center">
            <div className="text-4xl mb-2">⚙️</div>
            <div className="text-white font-medium">Configurações</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
