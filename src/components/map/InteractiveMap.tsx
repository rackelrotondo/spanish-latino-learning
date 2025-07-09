'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useAuth } from '@/context/AuthContext'
import { useGame } from '@/context/GameContext'

interface CountryData {
  code: string
  name: string
  color: string
  position: { x: number, y: number }
  path: string
  requiredXP: number
  capital: string
  population: string
  language: string
  flag: string
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  culturalComplexity: number
  linguisticVariation: number
}

const countries: CountryData[] = [
  {
    code: 'mx',
    name: 'México',
    color: '#D4A574',
    position: { x: 180, y: 160 },
    path: 'M120,120 Q160,110 200,115 Q240,120 280,125 Q320,130 350,140 L355,165 Q350,190 340,210 Q330,230 310,245 Q280,255 250,250 Q220,245 190,240 Q160,230 140,215 Q125,200 120,180 Q118,150 120,120 Z',
    requiredXP: 0,
    capital: 'Ciudad de México',
    population: '128M',
    language: 'Español Mexicano',
    flag: 'https://flagcdn.com/w320/mx.png',
    difficulty: 'beginner',
    culturalComplexity: 3,
    linguisticVariation: 2
  },
  {
    code: 'co',
    name: 'Colômbia',
    color: '#8B9A6B',
    position: { x: 280, y: 280 },
    path: 'M250,260 Q270,255 290,260 Q310,265 325,275 Q335,290 340,310 Q335,330 325,345 Q310,355 290,360 Q270,365 250,360 Q230,355 220,340 Q215,325 220,310 Q225,295 235,280 Q242,265 250,260 Z',
    requiredXP: 150,
    capital: 'Bogotá',
    population: '51M',
    language: 'Español Colombiano',
    flag: 'https://flagcdn.com/w320/co.png',
    difficulty: 'beginner',
    culturalComplexity: 3,
    linguisticVariation: 3
  },
  {
    code: 'ar',
    name: 'Argentina',
    color: '#A67C5A',
    position: { x: 340, y: 500 },
    path: 'M310,420 Q330,415 350,425 Q370,435 385,450 Q395,470 400,490 Q405,520 400,550 Q395,580 390,610 Q385,640 375,665 Q365,685 350,695 Q330,700 310,695 Q290,690 275,675 Q265,655 270,635 Q275,605 280,575 Q285,545 290,515 Q295,485 300,455 Q305,435 310,420 Z',
    requiredXP: 200,
    capital: 'Buenos Aires',
    population: '45M',
    language: 'Español Rioplatense',
    flag: 'https://flagcdn.com/w320/ar.png',
    difficulty: 'intermediate',
    culturalComplexity: 4,
    linguisticVariation: 4
  },
  {
    code: 'es',
    name: 'Espanha',
    color: '#B85C38',
    position: { x: 520, y: 200 },
    path: 'M480,180 Q500,175 520,180 Q540,185 555,195 Q565,210 570,225 Q575,240 570,255 Q565,270 550,280 Q530,285 510,280 Q490,275 475,265 Q465,250 470,235 Q475,220 480,205 Q478,190 480,180 Z',
    requiredXP: 250,
    capital: 'Madrid',
    population: '47M',
    language: 'Español Peninsular',
    flag: 'https://flagcdn.com/w320/es.png',
    difficulty: 'intermediate',
    culturalComplexity: 5,
    linguisticVariation: 5
  },
  {
    code: 'cr',
    name: 'Costa Rica',
    color: '#4A5D4A',
    position: { x: 220, y: 240 },
    path: 'M200,220 Q220,215 240,220 Q255,225 260,240 Q255,255 240,260 Q220,265 200,260 Q180,255 175,240 Q180,225 190,220 Q195,215 200,220 Z',
    requiredXP: 300,
    capital: 'San José',
    population: '5M',
    language: 'Español Costarricense',
    flag: 'https://flagcdn.com/w320/cr.png',
    difficulty: 'intermediate',
    culturalComplexity: 3,
    linguisticVariation: 3
  },
  {
    code: 've',
    name: 'Venezuela',
    color: '#7A8A5A',
    position: { x: 320, y: 260 },
    path: 'M300,240 Q320,235 340,240 Q360,245 370,260 Q375,275 370,290 Q365,305 350,310 Q330,315 310,310 Q290,305 280,290 Q275,275 280,260 Q285,245 295,240 Q297,235 300,240 Z',
    requiredXP: 350,
    capital: 'Caracas',
    population: '28M',
    language: 'Español Venezolano',
    flag: 'https://flagcdn.com/w320/ve.png',
    difficulty: 'advanced',
    culturalComplexity: 4,
    linguisticVariation: 4
  },
  {
    code: 'pe',
    name: 'Peru',
    color: '#5A6B7A',
    position: { x: 280, y: 400 },
    path: 'M250,380 Q270,375 290,380 Q310,385 320,400 Q325,415 320,430 Q315,445 300,450 Q280,455 260,450 Q240,445 235,430 Q240,415 245,400 Q250,385 250,380 Z',
    requiredXP: 300,
    capital: 'Lima',
    population: '33M',
    language: 'Español Peruano',
    flag: 'https://flagcdn.com/w320/pe.png',
    difficulty: 'intermediate',
    culturalComplexity: 5,
    linguisticVariation: 4
  },
  {
    code: 'ec',
    name: 'Equador',
    color: '#4A5A6A',
    position: { x: 250, y: 360 },
    path: 'M230,340 Q250,335 270,340 Q285,345 290,360 Q285,375 270,380 Q250,385 230,380 Q210,375 205,360 Q210,345 220,340 Q225,335 230,340 Z',
    requiredXP: 320,
    capital: 'Quito',
    population: '18M',
    language: 'Español Ecuatoriano',
    flag: 'https://flagcdn.com/w320/ec.png',
    difficulty: 'advanced',
    culturalComplexity: 4,
    linguisticVariation: 4
  },
  {
    code: 'cl',
    name: 'Chile',
    color: '#8B7355',
    position: { x: 300, y: 520 },
    path: 'M290,460 Q300,465 305,480 Q310,500 308,520 Q306,540 304,560 Q302,580 300,600 Q298,620 295,640 Q292,655 287,667 Q282,675 275,677 Q268,675 263,667 Q268,647 270,627 Q272,607 274,587 Q276,567 278,547 Q280,527 282,507 Q284,487 286,467 Q288,465 290,460 Z',
    requiredXP: 400,
    capital: 'Santiago',
    population: '19M',
    language: 'Español Chileno',
    flag: 'https://flagcdn.com/w320/cl.png',
    difficulty: 'advanced',
    culturalComplexity: 4,
    linguisticVariation: 5
  },
  {
    code: 'bo',
    name: 'Bolívia',
    color: '#A67C5A',
    position: { x: 310, y: 440 },
    path: 'M290,420 Q310,415 330,420 Q345,425 350,440 Q345,455 330,460 Q310,465 290,460 Q270,455 265,440 Q270,425 280,420 Q285,415 290,420 Z',
    requiredXP: 450,
    capital: 'La Paz',
    population: '12M',
    language: 'Español Boliviano',
    flag: 'https://flagcdn.com/w320/bo.png',
    difficulty: 'expert',
    culturalComplexity: 5,
    linguisticVariation: 5
  },
  {
    code: 'py',
    name: 'Paraguai',
    color: '#7A6B5A',
    position: { x: 340, y: 460 },
    path: 'M320,440 Q340,435 360,440 Q375,445 380,460 Q375,475 360,480 Q340,485 320,480 Q300,475 295,460 Q300,445 310,440 Q315,435 320,440 Z',
    requiredXP: 550,
    capital: 'Assunção',
    population: '7M',
    language: 'Español/Guaraní',
    flag: 'https://flagcdn.com/w320/py.png',
    difficulty: 'expert',
    culturalComplexity: 5,
    linguisticVariation: 5
  },
  {
    code: 'uy',
    name: 'Uruguai',
    color: '#6B5A4A',
    position: { x: 370, y: 540 },
    path: 'M350,520 Q370,515 390,520 Q405,525 410,540 Q405,555 390,560 Q370,565 350,560 Q330,555 325,540 Q330,525 340,520 Q345,515 350,520 Z',
    requiredXP: 500,
    capital: 'Montevidéu',
    population: '3.5M',
    language: 'Español Rioplatense',
    flag: 'https://flagcdn.com/w320/uy.png',
    difficulty: 'expert',
    culturalComplexity: 4,
    linguisticVariation: 4
  }
]

export default function InteractiveMap() {
  const { user } = useAuth()
  const { countryProgress, unlockCountry } = useGame()
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null)
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)
  const [showTooltip, setShowTooltip] = useState(false)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })

  const isCountryUnlocked = (countryCode: string) => {
    return user?.unlockedCountries.includes(countryCode) || false
  }

  const canUnlockCountry = (country: CountryData) => {
    if (isCountryUnlocked(country.code)) return true
    return (user?.totalXP || 0) >= country.requiredXP
  }

  const getCountryProgress = (countryCode: string) => {
    return countryProgress.find(cp => cp.countryCode === countryCode)
  }

  const isCountryCompleted = (countryCode: string) => {
    const progress = getCountryProgress(countryCode)
    return progress && progress.completedLessons === progress.totalLessons
  }

  const handleCountryClick = (country: CountryData) => {
    if (canUnlockCountry(country)) {
      if (!isCountryUnlocked(country.code)) {
        unlockCountry(country.code)
      }
      setSelectedCountry(country)
    }
  }

  const handleCountryHover = (country: CountryData, event: React.MouseEvent) => {
    setHoveredCountry(country.code)
    setShowTooltip(true)
    setTooltipPosition({ x: event.clientX, y: event.clientY })
  }

  const handleCountryLeave = () => {
    setHoveredCountry(null)
    setShowTooltip(false)
  }

  const getCountryOpacity = (country: CountryData) => {
    if (isCountryUnlocked(country.code)) return 1
    if (canUnlockCountry(country)) return 0.8
    return 0.4
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return '#22c55e'
      case 'intermediate': return '#f59e0b'
      case 'advanced': return '#ef4444'
      case 'expert': return '#8b5cf6'
      default: return '#6b7280'
    }
  }

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      
      {/* Header do Mapa */}
      <div className="relative z-20 p-6 text-center">
        <div className="mb-4">
          <button 
            onClick={() => window.location.href = '/'}
            className="text-white/80 hover:text-white flex items-center space-x-2 mx-auto mb-4 transition-colors"
          >
            <span>←</span>
            <span>Voltar ao Dashboard</span>
          </button>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
          Mapa Cultural <span className="text-amber-400">AyvuLab</span>
        </h1>
        <p className="text-white/90 mb-6 text-xl">
          Explore a diversidade linguística e cultural da América Latina
        </p>
        
        {/* Status do usuário */}
        {user && (
          <div className="flex flex-wrap justify-center items-center space-x-8 bg-white/10 backdrop-blur-md rounded-2xl px-8 py-4 border border-amber-400/30 max-w-5xl mx-auto">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">⭐</span>
              <div>
                <span className="text-white font-bold text-lg">Level {user.level}</span>
                <div className="text-white/70 text-sm">Nível Atual</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-3xl">💎</span>
              <div>
                <span className="text-amber-400 font-bold text-lg">{user.totalXP}</span>
                <div className="text-white/70 text-sm">XP Total</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-3xl">🔥</span>
              <div>
                <span className="text-white font-bold text-lg">{user.currentStreak}</span>
                <div className="text-white/70 text-sm">Dias Consecutivos</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-3xl">🗺️</span>
              <div>
                <span className="text-white font-bold text-lg">{user.unlockedCountries.length}/{countries.length}</span>
                <div className="text-white/70 text-sm">Países Desbloqueados</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Botão para Guia Cultural */}
      <div className="absolute top-20 right-6 lg:right-auto lg:left-80">
        <Link href="/cultural-guide" className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-amber-400/30 block hover:bg-white/20 transition-all duration-300">
          <div className="text-center">
            <span className="text-3xl block mb-2">📚</span>
            <span className="text-white font-medium text-sm">Guia Cultural</span>
            <div className="text-white/70 text-xs">Como avaliamos países</div>
          </div>
        </Link>
      </div>

      {/* Sistema de XP detalhado */}
      <div className="absolute top-20 left-6 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-amber-400/30 max-w-md">
        <h3 className="text-white font-bold mb-4 flex items-center text-lg">
          <span className="text-2xl mr-2">📊</span>
          Sistema de XP
        </h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-green-400">● Básico:</span>
            <span className="text-white/90">0-200 XP</span>
          </div>
          <div className="flex justify-between">
            <span className="text-yellow-400">● Intermediário:</span>
            <span className="text-white/90">150-350 XP</span>
          </div>
          <div className="flex justify-between">
            <span className="text-red-400">● Avançado:</span>
            <span className="text-white/90">320-450 XP</span>
          </div>
          <div className="flex justify-between">
            <span className="text-purple-400">● Expert:</span>
            <span className="text-white/90">450-550 XP</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-white/20">
          <h4 className="text-white font-medium mb-2">Progressão Lógica:</h4>
          <div className="text-xs text-white/80 space-y-1">
            <div>1. Familiarização (México)</div>
            <div>2. Proximidade Cultural</div>
            <div>3. Diversidade Linguística</div>
            <div>4. Complexidade Cultural</div>
            <div>5. Especialização Regional</div>
          </div>
        </div>
      </div>

      {/* Container do Mapa GRANDE */}
      <div className="relative z-10 flex justify-center items-center px-4">
        <div className="relative w-full max-w-7xl">
          <svg
            viewBox="0 0 800 700"
            className="w-full h-auto drop-shadow-2xl"
            style={{ minHeight: '600px', maxHeight: '80vh' }}
          >
            <defs>
              <radialGradient id="oceanGradient" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="rgba(30, 58, 138, 0.3)" />
                <stop offset="100%" stopColor="rgba(15, 23, 42, 0.5)" />
              </radialGradient>
              
              <filter id="countryGlow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              <filter id="countryShadow">
                <feDropShadow dx="3" dy="3" stdDeviation="4" floodColor="rgba(0,0,0,0.4)"/>
              </filter>

              <filter id="textShadow">
                <feDropShadow dx="1" dy="1" stdDeviation="2" floodColor="rgba(0,0,0,0.8)"/>
              </filter>
            </defs>

            {/* Oceano de fundo */}
            <rect width="800" height="700" fill="url(#oceanGradient)" rx="20" />
            
            {/* Grade de longitude/latitude sutil */}
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="800" height="700" fill="url(#grid)" />

            {/* Países */}
            {countries.map((country) => {
              const progress = getCountryProgress(country.code)
              const unlocked = isCountryUnlocked(country.code)
              const completed = isCountryCompleted(country.code)
              const canUnlock = canUnlockCountry(country)
              const isHovered = hoveredCountry === country.code
              
              return (
                <g key={country.code}>
                  {/* Sombra do país */}
                  <path
                    d={country.path}
                    fill="rgba(0,0,0,0.3)"
                    transform="translate(4,4)"
                    opacity={unlocked ? 0.6 : 0.3}
                  />
                  
                  {/* Área do país */}
                  <path
                    d={country.path}
                    fill={country.color}
                    opacity={getCountryOpacity(country)}
                    stroke={isHovered ? '#fbbf24' : unlocked ? '#ffffff' : 'rgba(255,255,255,0.3)'}
                    strokeWidth={isHovered ? 4 : unlocked ? 3 : 1}
                    className={`transition-all duration-300 ${canUnlock ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                    style={{
                      filter: isHovered ? 'url(#countryGlow) brightness(1.2)' : 'url(#countryShadow)',
                      transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                      transformOrigin: `${country.position.x}px ${country.position.y}px`
                    }}
                    onMouseEnter={(e) => handleCountryHover(country, e)}
                    onMouseLeave={handleCountryLeave}
                    onClick={() => handleCountryClick(country)}
                  />
                  
                  {/* Indicador de progresso */}
                  {unlocked && progress && (
                    <g>
                      <circle
                        cx={country.position.x}
                        cy={country.position.y - 40}
                        r="20"
                        fill="rgba(251, 191, 36, 0.9)"
                        stroke="#fff"
                        strokeWidth="3"
                        filter="url(#countryShadow)"
                      />
                      <text
                        x={country.position.x}
                        y={country.position.y - 35}
                        textAnchor="middle"
                        fill="white"
                        fontSize="14"
                        fontWeight="bold"
                        filter="url(#textShadow)"
                      >
                        {Math.round((progress.completedLessons / progress.totalLessons) * 100)}%
                      </text>
                    </g>
                  )}
                  
                  {/* Nome do país DESTACADO */}
                  <text
                    x={country.position.x}
                    y={country.position.y + 10}
                    textAnchor="middle"
                    fill="white"
                    fontSize="18"
                    fontWeight="bold"
                    filter="url(#textShadow)"
                    className="pointer-events-none"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                  >
                    {country.name.toUpperCase()}
                  </text>
                  
                  {/* Dificuldade do país */}
                  <rect
                    x={country.position.x - 25}
                    y={country.position.y + 20}
                    width="50"
                    height="16"
                    rx="8"
                    fill={getDifficultyColor(country.difficulty)}
                    opacity="0.9"
                    filter="url(#countryShadow)"
                  />
                  <text
                    x={country.position.x}
                    y={country.position.y + 31}
                    textAnchor="middle"
                    fill="white"
                    fontSize="10"
                    fontWeight="bold"
                    className="pointer-events-none"
                  >
                    {country.difficulty.toUpperCase()}
                  </text>
                  
                  {/* Status de desbloqueio */}
                  <text
                    x={country.position.x}
                    y={country.position.y + 45}
                    textAnchor="middle"
                    fill={unlocked ? '#22c55e' : canUnlock ? '#facc15' : '#ef4444'}
                    fontSize="12"
                    fontWeight="bold"
                    filter="url(#textShadow)"
                    className="pointer-events-none"
                  >
                    {unlocked ? '✅ DISPONÍVEL' : canUnlock ? '🔓 DESBLOQUEÁVEL' : `🔒 ${country.requiredXP} XP`}
                  </text>
                  
                  {/* Sol de Mayo para países COMPLETADOS */}
                  {completed && (
                    <text
                      x={country.position.x + 35}
                      y={country.position.y - 15}
                      fontSize="28"
                      className="pointer-events-none"
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.8))'
                      }}
                    >
                      ☀️
                    </text>
                  )}
                </g>
              )
            })}
          </svg>
        </div>
      </div>

      {/* Tooltip informativo */}
      {showTooltip && hoveredCountry && (
        <div 
          className="fixed z-50 bg-white/95 backdrop-blur-md rounded-xl p-6 border border-amber-400/30 shadow-2xl pointer-events-none max-w-sm"
          style={{ 
            left: Math.min(tooltipPosition.x + 15, window.innerWidth - 350), 
            top: Math.max(tooltipPosition.y - 10, 10),
            transform: 'translateY(-100%)'
          }}
        >
          {(() => {
            const country = countries.find(c => c.code === hoveredCountry)
            if (!country) return null
            
            return (
              <div className="text-center">
                <img 
                  src={country.flag} 
                  alt={country.name}
                  className="w-20 h-12 mx-auto mb-3 rounded shadow-lg"
                />
                <h3 className="font-bold text-slate-800 text-xl mb-2">{country.name}</h3>
                <div className="text-sm text-slate-700 space-y-2">
                  <div><strong>Capital:</strong> {country.capital}</div>
                  <div><strong>População:</strong> {country.population}</div>
                  <div><strong>Variante:</strong> {country.language}</div>
                  <div><strong>Dificuldade:</strong> 
                    <span className={`ml-1 px-2 py-1 rounded text-xs font-bold text-white`}
                          style={{ backgroundColor: getDifficultyColor(country.difficulty) }}>
                      {country.difficulty.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span><strong>Complexidade Cultural:</strong></span>
                    <span className="text-amber-600">{'★'.repeat(country.culturalComplexity)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>Variação Linguística:</strong></span>
                    <span className="text-amber-600">{'★'.repeat(country.linguisticVariation)}</span>
                  </div>
                  {!isCountryUnlocked(country.code) && (
                    <div className="text-red-600 font-bold pt-2 border-t">
                      Requer: {country.requiredXP} XP
                    </div>
                  )}
                </div>
              </div>
            )
          })()}
        </div>
      )}

      {/* Legenda completa */}
      <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-amber-400/30 max-w-sm">
        <h3 className="text-white font-bold mb-4 flex items-center text-lg">
          <span className="text-2xl mr-2">🗺️</span>
          Legenda do Mapa
        </h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-4 bg-green-500 rounded-sm shadow-sm"></div>
            <span className="text-white/90">País Desbloqueado</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-4 bg-yellow-500 rounded-sm shadow-sm"></div>
            <span className="text-white/90">Disponível para Desbloqueio</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-4 bg-gray-500 rounded-sm shadow-sm"></div>
            <span className="text-white/90">Bloqueado (Precisa mais XP)</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-2xl">☀️</span>
            <span className="text-white/90">Sol de Mayo - País Completado</span>
          </div>
          <div className="pt-2 border-t border-white/20">
            <div className="text-white/70 text-xs">
              <strong>Dificuldades:</strong> Básico → Intermediário → Avançado → Expert
            </div>
          </div>
        </div>
      </div>

      {/* Estatísticas do usuário */}
      <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-amber-400/30 max-w-sm">
        <h3 className="text-white font-bold mb-4 flex items-center text-lg">
          <span className="text-2xl mr-2">📈</span>
          Progresso Geral
        </h3>
        {user && (
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-white/90">Países Desbloqueados:</span>
              <span className="text-amber-400 font-bold">{user.unlockedCountries.length}/{countries.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/90">XP Total Acumulado:</span>
              <span className="text-amber-400 font-bold">{user.totalXP}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/90">Lições Completadas:</span>
              <span className="text-amber-400 font-bold">{user.completedLessons.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/90">Badges Conquistados:</span>
              <span className="text-amber-400 font-bold">{user.badges.length}</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3 mt-3">
              <div 
                className="bg-gradient-to-r from-amber-400 to-amber-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${(user.unlockedCountries.length / countries.length) * 100}%` }}
              ></div>
            </div>
            <div className="text-center text-white/70 text-xs">
              {Math.round((user.unlockedCountries.length / countries.length) * 100)}% dos países explorados
            </div>
          </div>
        )}
      </div>

      {/* Modal de país selecionado */}
      {selectedCountry && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-amber-400/30 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <img 
                  src={selectedCountry.flag} 
                  alt={selectedCountry.name}
                  className="w-20 h-12 rounded shadow-lg"
                />
                <div>
                  <h3 className="text-3xl font-bold text-white">{selectedCountry.name}</h3>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold text-white mt-1`}
                       style={{ backgroundColor: getDifficultyColor(selectedCountry.difficulty) }}>
                    {selectedCountry.difficulty.toUpperCase()}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedCountry(null)}
                className="text-white/70 hover:text-white text-4xl transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-white/70 text-sm">Capital</div>
                  <div className="text-white font-bold text-lg">{selectedCountry.capital}</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-white/70 text-sm">População</div>
                  <div className="text-white font-bold text-lg">{selectedCountry.population}</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-white/70 text-sm">Complexidade Cultural</div>
                  <div className="text-amber-400 text-lg">{'★'.repeat(selectedCountry.culturalComplexity)}</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-white/70 text-sm">Variação Linguística</div>
                  <div className="text-amber-400 text-lg">{'★'.repeat(selectedCountry.linguisticVariation)}</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4 mb-6">
              <div className="text-white/70 text-sm mb-1">Variedade do Espanhol</div>
              <div className="text-white font-medium text-lg">{selectedCountry.language}</div>
            </div>

            {getCountryProgress(selectedCountry.code) && (
              <div className="bg-white/10 rounded-lg p-4 mb-6">
                <div className="flex justify-between text-white/90 text-sm mb-2">
                  <span>Progresso no País</span>
                  <span>{Math.round((getCountryProgress(selectedCountry.code)!.completedLessons / getCountryProgress(selectedCountry.code)!.totalLessons) * 100)}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-amber-400 to-amber-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${(getCountryProgress(selectedCountry.code)!.completedLessons / getCountryProgress(selectedCountry.code)!.totalLessons) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}
            
            <div className="flex space-x-4">
              <button 
                className="btn-primary flex-1 text-lg py-3"
                onClick={() => {
                  window.location.href = `/country/${selectedCountry.code}`
                }}
              >
                <span className="mr-2">🗺️</span>
                Explorar {selectedCountry.name}
              </button>
              <button 
                className="btn-secondary px-6"
                onClick={() => setSelectedCountry(null)}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
