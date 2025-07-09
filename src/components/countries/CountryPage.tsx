'use client'

import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { useGame } from '@/context/GameContext'
import Flag from '@/components/ui/Flag'
import LessonInterface from '@/components/lessons/LessonInterface'

interface Lesson {
  id: string
  title: string
  description: string
  type: 'vocabulary' | 'grammar' | 'culture' | 'listening'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  xpReward: number
  estimatedTime: number
  isCompleted: boolean
  isLocked: boolean
  icon: string
}

interface CountryData {
  code: string
  name: string
  flag: string
  culture: {
    description: string
    traditions: string[]
    music: string[]
    food: string[]
    landmarks: string[]
  }
  language: {
    accent: string
    uniqueWords: { word: string, meaning: string }[]
    commonPhrases: { phrase: string, meaning: string }[]
  }
  lessons: Lesson[]
}

const countryData: { [key: string]: CountryData } = {
  'mx': {
    code: 'mx',
    name: 'México',
    flag: 'https://flagcdn.com/w320/mx.png',
    culture: {
      description: 'O México é um país rico em tradições milenares, onde a cultura indígena se mistura harmoniosamente com a herança espanhola.',
      traditions: ['Día de los Muertos', 'Posadas', 'Quinceañera', 'Mariachi'],
      music: ['Mariachi', 'Ranchera', 'Banda', 'Cumbia'],
      food: ['Tacos', 'Mole', 'Pozole', 'Chiles en Nogada'],
      landmarks: ['Chichen Itzá', 'Teotihuacán', 'Palenque', 'Zócalo']
    },
    language: {
      accent: 'Sotaque mexicano caracterizado por entonação melodiosa e ritmo pausado',
      uniqueWords: [
        { word: 'Órale', meaning: 'Expressão de surpresa ou admiração' },
        { word: 'Chido', meaning: 'Legal, bacana' },
        { word: 'Neta', meaning: 'Sério, verdade' },
        { word: 'Padre', meaning: 'Ótimo, excelente' }
      ],
      commonPhrases: [
        { phrase: '¿Qué onda?', meaning: 'E aí? Como vai?' },
        { phrase: 'No manches', meaning: 'Não acredito!' },
        { phrase: 'Está padrísimo', meaning: 'Está ótimo!' },
        { phrase: 'Ándale pues', meaning: 'Então vamos!' }
      ]
    },
    lessons: [
      {
        id: 'basic-1',
        title: 'Saudações Mexicanas',
        description: 'Aprenda as saudações básicas usadas no México',
        type: 'vocabulary',
        difficulty: 'beginner',
        xpReward: 50,
        estimatedTime: 15,
        isCompleted: false,
        isLocked: false,
        icon: '👋'
      },
      {
        id: 'basic-2',
        title: 'Comida Mexicana',
        description: 'Vocabulário essencial sobre a rica gastronomia mexicana',
        type: 'vocabulary',
        difficulty: 'beginner',
        xpReward: 75,
        estimatedTime: 20,
        isCompleted: false,
        isLocked: false,
        icon: '🌮'
      },
      {
        id: 'culture-1',
        title: 'Día de los Muertos',
        description: 'Mergulhe na tradição mais emblemática do México',
        type: 'culture',
        difficulty: 'intermediate',
        xpReward: 100,
        estimatedTime: 25,
        isCompleted: false,
        isLocked: true,
        icon: '💀'
      }
    ]
  },
  'ar': {
    code: 'ar',
    name: 'Argentina',
    flag: 'https://flagcdn.com/w320/ar.png',
    culture: {
      description: 'A Argentina é a terra do tango, do futebol e da paixão. Uma cultura européia com alma latina.',
      traditions: ['Tango', 'Asado', 'Mate', 'Folklore'],
      music: ['Tango', 'Folk', 'Rock Nacional', 'Cuarteto'],
      food: ['Asado', 'Empanadas', 'Milanesa', 'Dulce de Leche'],
      landmarks: ['Buenos Aires', 'Cataratas do Iguaçu', 'Bariloche', 'Mendoza']
    },
    language: {
      accent: 'Sotaque porteño com características únicas do Rio da Prata',
      uniqueWords: [
        { word: 'Che', meaning: 'Cara, brother' },
        { word: 'Boludo', meaning: 'Cara, amigo (informal)' },
        { word: 'Pibe', meaning: 'Garoto, jovem' },
        { word: 'Bárbaro', meaning: 'Fantástico, ótimo' }
      ],
      commonPhrases: [
        { phrase: '¿Cómo andás?', meaning: 'Como você está?' },
        { phrase: 'Todo joya', meaning: 'Tudo ótimo' },
        { phrase: 'No te hagas drama', meaning: 'Não se preocupe' },
        { phrase: 'Está buenísimo', meaning: 'Está muito bom' }
      ]
    },
    lessons: [
      {
        id: 'tango-1',
        title: 'Vocabulário do Tango',
        description: 'Aprenda os termos essenciais da cultura tanguera',
        type: 'culture',
        difficulty: 'intermediate',
        xpReward: 80,
        estimatedTime: 20,
        isCompleted: false,
        isLocked: false,
        icon: '💃'
      }
    ]
  }
}

interface CountryPageProps {
  countryCode: string
}

export default function CountryPage({ countryCode }: CountryPageProps) {
  const { user } = useAuth()
  const { completeLesson } = useGame()
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null)
  const [activeTab, setActiveTab] = useState<'overview' | 'lessons' | 'culture'>('overview')
  const [showLessonInterface, setShowLessonInterface] = useState(false)

  const country = countryData[countryCode]

  if (!country) {
    return (
      <div className="min-h-screen bg-azul flex items-center justify-center">
        <div className="text-center">
          <span className="text-6xl mb-4 block">🗺️</span>
          <h1 className="text-2xl font-bold text-white mb-2">País não encontrado</h1>
          <p className="text-white/80">O país solicitado não existe ou ainda não foi implementado.</p>
        </div>
      </div>
    )
  }

  const isUnlocked = user?.unlockedCountries.includes(countryCode) || false

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-azul flex items-center justify-center">
        <div className="card-glass border-bege/30 max-w-md text-center">
          <span className="text-6xl mb-4 block">🔒</span>
          <h1 className="text-2xl font-bold text-white mb-2">País Bloqueado</h1>
          <p className="text-white/80 mb-4">
            Você precisa desbloquear {country.name} primeiro no mapa interativo.
          </p>
          <button 
            onClick={() => window.location.href = '/map'}
            className="btn-primary"
          >
            🗺️ Ir para o Mapa
          </button>
        </div>
      </div>
    )
  }

  // Se está na interface de lição
  if (showLessonInterface && selectedLesson) {
    return (
      <LessonInterface
        countryCode={countryCode}
        lessonId={selectedLesson.id}
        onComplete={(earnedXP) => {
          setShowLessonInterface(false)
          setSelectedLesson(null)
          // Mostrar notificação de XP ganho
        }}
        onExit={() => {
          setShowLessonInterface(false)
          setSelectedLesson(null)
        }}
      />
    )
  }

  const completedLessons = country.lessons.filter(lesson => 
    user?.completedLessons.includes(`${countryCode}-${lesson.id}`)
  ).length

  const totalXP = country.lessons.reduce((sum, lesson) => 
    user?.completedLessons.includes(`${countryCode}-${lesson.id}`) ? sum + lesson.xpReward : sum, 0
  )

  const handleStartLesson = (lesson: Lesson) => {
    if (!lesson.isLocked) {
      setSelectedLesson(lesson)
      setShowLessonInterface(true)
    }
  }

  return (
    <div className="min-h-screen bg-azul">
      {/* Header do País */}
      <div className="bg-marrom py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => window.location.href = '/map'}
              className="text-white/80 hover:text-white flex items-center space-x-2"
            >
              <span>←</span>
              <span>Voltar ao Mapa</span>
            </button>
            
            <div className="text-center">
              <Flag 
                src={country.flag}
                alt={country.name}
                size="xl"
                className="mx-auto mb-4"
              />
              <h1 className="text-4xl font-bold text-white mb-2">
                {country.name}
              </h1>
              <div className="flex justify-center space-x-6 text-white/90">
                <div className="text-center">
                  <div className="font-bold">{completedLessons}</div>
                  <div className="text-sm">Lições</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">{totalXP}</div>
                  <div className="text-sm">XP Total</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">{Math.round((completedLessons / country.lessons.length) * 100)}%</div>
                  <div className="text-sm">Completo</div>
                </div>
              </div>
            </div>
            
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      {/* Navegação por Tabs */}
      <div className="bg-azul-medio py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2 px-4 transition-colors ${
                activeTab === 'overview'
                  ? 'text-bege border-b-2 border-bege'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              📊 Visão Geral
            </button>
            <button
              onClick={() => setActiveTab('lessons')}
              className={`pb-2 px-4 transition-colors ${
                activeTab === 'lessons'
                  ? 'text-bege border-b-2 border-bege'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              📚 Lições
            </button>
            <button
              onClick={() => setActiveTab('culture')}
              className={`pb-2 px-4 transition-colors ${
                activeTab === 'culture'
                  ? 'text-bege border-b-2 border-bege'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              🎭 Cultura
            </button>
          </div>
        </div>
      </div>

      {/* Conteúdo das Tabs */}
      <div className="container mx-auto px-4 py-8">
        {activeTab === 'lessons' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {country.lessons.map((lesson) => {
              const isCompleted = user?.completedLessons.includes(`${countryCode}-${lesson.id}`)
              
              return (
                <div 
                  key={lesson.id}
                  className={`card-glass transition-all duration-300 ${
                    lesson.isLocked 
                      ? 'border-white/20 opacity-50' 
                      : isCompleted 
                        ? 'border-green-500/50 bg-green-500/10'
                        : 'border-bege/30 hover:scale-105 cursor-pointer'
                  }`}
                  onClick={() => handleStartLesson(lesson)}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-3">{lesson.icon}</div>
                    <h4 className="font-bold text-white mb-2">{lesson.title}</h4>
                    <p className="text-white/80 text-sm mb-3">{lesson.description}</p>
                    
                    <div className="flex justify-between items-center text-xs mb-3">
                      <span className={`px-2 py-1 rounded-full ${
                        lesson.difficulty === 'beginner' ? 'bg-green-500/20 text-green-400' :
                        lesson.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {lesson.difficulty}
                      </span>
                      <span className="text-white/70">{lesson.estimatedTime} min</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-bege font-medium">+{lesson.xpReward} XP</span>
                      {isCompleted ? (
                        <span className="text-green-400">✅ Completa</span>
                      ) : lesson.isLocked ? (
                        <span className="text-white/50">🔒 Bloqueada</span>
                      ) : (
                        <span className="text-bege">▶️ Iniciar</span>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-glass border-bege/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-2xl mr-2">📈</span>
                Seu Progresso
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-white/90 text-sm mb-2">
                    <span>Lições Completadas</span>
                    <span>{completedLessons}/{country.lessons.length}</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div 
                      className="bg-bege h-3 rounded-full transition-all duration-300"
                      style={{ width: `${(completedLessons / country.lessons.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold accent-bege">{totalXP}</div>
                    <div className="text-white/70 text-sm">XP Conquistado</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold accent-bege">
                      {country.lessons.reduce((sum, lesson) => sum + lesson.estimatedTime, 0)}
                    </div>
                    <div className="text-white/70 text-sm">Minutos de Conteúdo</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-glass border-bege/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                Próximas Lições
              </h3>
              
              <div className="space-y-3">
                {country.lessons.slice(0, 3).map((lesson) => {
                  const isCompleted = user?.completedLessons.includes(`${countryCode}-${lesson.id}`)
                  
                  return (
                    <div 
                      key={lesson.id}
                      className={`p-3 rounded-lg border transition-all duration-300 ${
                        lesson.isLocked 
                          ? 'bg-white/5 border-white/20 opacity-50' 
                          : isCompleted 
                            ? 'bg-green-500/20 border-green-500/50'
                            : 'bg-white/10 border-bege/30 hover:bg-white/20 cursor-pointer'
                      }`}
                      onClick={() => !lesson.isLocked && handleStartLesson(lesson)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{lesson.icon}</span>
                          <div>
                            <div className="text-white font-medium">{lesson.title}</div>
                            <div className="text-white/70 text-sm">{lesson.estimatedTime} min • {lesson.xpReward} XP</div>
                          </div>
                        </div>
                        <div className="text-right">
                          {isCompleted ? (
                            <span className="text-green-400">✅</span>
                          ) : lesson.isLocked ? (
                            <span className="text-white/50">🔒</span>
                          ) : (
                            <span className="text-bege">▶️</span>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'culture' && (
          <div className="space-y-8">
            <div className="card-glass border-bege/30">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="text-3xl mr-3">🎭</span>
                Cultura de {country.name}
              </h3>
              <p className="text-white/90 text-lg leading-relaxed">
                {country.culture.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-glass border-bege/30">
                <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                  <span className="text-2xl mr-2">🏛️</span>
                  Tradições
                </h4>
                <ul className="space-y-2">
                  {country.culture.traditions.map((tradition, index) => (
                    <li key={index} className="text-white/90 flex items-center space-x-2">
                      <span className="text-bege">•</span>
                      <span>{tradition}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-glass border-bege/30">
                <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                  <span className="text-2xl mr-2">🎵</span>
                  Música
                </h4>
                <ul className="space-y-2">
                  {country.culture.music.map((music, index) => (
                    <li key={index} className="text-white/90 flex items-center space-x-2">
                      <span className="text-bege">•</span>
                      <span>{music}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-glass border-bege/30">
                <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                  <span className="text-2xl mr-2">🍽️</span>
                  Gastronomia
                </h4>
                <ul className="space-y-2">
                  {country.culture.food.map((food, index) => (
                    <li key={index} className="text-white/90 flex items-center space-x-2">
                      <span className="text-bege">•</span>
                      <span>{food}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-glass border-bege/30">
                <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                  <span className="text-2xl mr-2">🗺️</span>
                  Pontos Turísticos
                </h4>
                <ul className="space-y-2">
                  {country.culture.landmarks.map((landmark, index) => (
                    <li key={index} className="text-white/90 flex items-center space-x-2">
                      <span className="text-bege">•</span>
                      <span>{landmark}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="card-glass border-bege/30">
                <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                  <span className="text-2xl mr-2">🗣️</span>
                  Palavras Únicas
                </h4>
                <div className="space-y-3">
                  {country.language.uniqueWords.map((item, index) => (
                    <div key={index} className="border-l-2 border-bege pl-3">
                      <div className="text-bege font-medium">{item.word}</div>
                      <div className="text-white/80 text-sm">{item.meaning}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-glass border-bege/30">
                <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                  <span className="text-2xl mr-2">💬</span>
                  Frases Comuns
                </h4>
                <div className="space-y-3">
                  {country.language.commonPhrases.map((item, index) => (
                    <div key={index} className="border-l-2 border-bege pl-3">
                      <div className="text-bege font-medium">{item.phrase}</div>
                      <div className="text-white/80 text-sm">{item.meaning}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
