'use client'

import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { useGame } from '@/context/GameContext'
import { MEXICO_MODULE } from '@/lib/mexicoModule'

interface LessonInterfaceProps {
  countryCode: string
  lessonId: string
  onComplete: (earnedXP: number) => void
  onExit: () => void
}

export default function LessonInterface({ countryCode, lessonId, onComplete, onExit }: LessonInterfaceProps) {
  const [currentPhase, setCurrentPhase] = useState<'intro' | 'questions' | 'completed'>('intro')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswers, setUserAnswers] = useState<string[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [score, setScore] = useState(0)
  
  const { user } = useAuth()
  const { completeLesson, earnXP } = useGame()

  // Buscar lição no módulo México
  const lesson = MEXICO_MODULE.lessons.find(l => l.id === `${countryCode}-${lessonId}`)
  
  if (!lesson) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl mb-4">Lição não encontrada</h2>
          <button onClick={onExit} className="btn-primary">Voltar</button>
        </div>
      </div>
    )
  }

  const handleStartQuestions = () => {
    setCurrentPhase('questions')
  }

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer)
  }

  const handleSubmitAnswer = () => {
    const currentQ = lesson.questions[currentQuestion]
    const correct = selectedAnswer.toLowerCase().trim() === currentQ.correctAnswer.toLowerCase().trim()
    setIsCorrect(correct)
    setShowResult(true)
    
    const newAnswers = [...userAnswers]
    newAnswers[currentQuestion] = selectedAnswer
    setUserAnswers(newAnswers)
    
    if (correct) {
      setScore(score + 15)
    }
  }

  const handleNextQuestion = () => {
    setShowResult(false)
    setSelectedAnswer('')
    
    if (currentQuestion < lesson.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Lição completa
      setCurrentPhase('completed')
      const finalScore = Math.max(50, score)
      completeLesson(countryCode, lessonId, finalScore)
      earnXP(finalScore, 'lesson-completion')
    }
  }

  const getScorePercentage = () => {
    const maxScore = lesson.questions.length * 15
    return Math.round((score / maxScore) * 100)
  }

  // FASE DE INTRODUÇÃO CULTURAL
  if (currentPhase === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <button 
              onClick={onExit}
              className="text-white/80 hover:text-white flex items-center space-x-2 transition-colors"
            >
              <span>←</span>
              <span>Voltar</span>
            </button>
            
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white">{lesson.title}</h1>
              <div className="text-white/80">
                📚 {lesson.estimatedTime} min • 🏆 {lesson.xpReward} XP
              </div>
            </div>
            
            <div className="w-20"></div>
          </div>

          {/* Introdução Cultural */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-amber-400/30 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">
              {lesson.culturalIntro.title}
            </h2>
            
            <div className="prose prose-invert max-w-none">
              <div className="text-white/90 leading-relaxed mb-6 whitespace-pre-line">
                {lesson.culturalIntro.content}
              </div>
            </div>

            {/* Vocabulário da Lição */}
            {lesson.culturalIntro.vocabulary && (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="text-2xl mr-2">📝</span>
                  Vocabulário Essencial
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {lesson.culturalIntro.vocabulary.map((item, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-amber-400 font-bold text-lg">{item.word}</span>
                        <span className="text-white/60 text-sm italic">[{item.pronunciation}]</span>
                      </div>
                      <div className="text-white font-medium">{item.meaning}</div>
                      <div className="text-white/70 text-sm mt-1">{item.usage}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Notas Culturais */}
            {lesson.culturalIntro.culturalNotes && (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="text-2xl mr-2">🎭</span>
                  Curiosidades Culturais
                </h3>
                <div className="space-y-3">
                  {lesson.culturalIntro.culturalNotes.map((note, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-4">
                      <div className="text-white/90">{note}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Referências de Mídia */}
            {lesson.culturalIntro.mediaReferences && (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="text-2xl mr-2">🎬</span>
                  Na Cultura Pop
                </h3>
                <div className="space-y-4">
                  {lesson.culturalIntro.mediaReferences.map((media, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-start space-x-4">
                        <div className="text-2xl">
                          {media.type === 'Filme' ? '🎬' : media.type === 'Música' ? '🎵' : '📺'}
                        </div>
                        <div>
                          <h4 className="text-white font-bold">{media.title}</h4>
                          <p className="text-white/80 text-sm mb-2">{media.reference}</p>
                          <p className="text-amber-400 text-sm italic">{media.culturalContext}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Botão para iniciar exercícios */}
          <div className="text-center">
            <button 
              onClick={handleStartQuestions}
              className="btn-primary text-xl px-8 py-4"
            >
              🚀 Iniciar Exercícios Práticos
            </button>
            <p className="text-white/70 text-sm mt-2">
              {lesson.questions.length} perguntas interativas baseadas no conteúdo cultural
            </p>
          </div>
        </div>
      </div>
    )
  }

  // FASE DE PERGUNTAS
  if (currentPhase === 'questions') {
    const currentQ = lesson.questions[currentQuestion]
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header da Pergunta */}
          <div className="flex justify-between items-center mb-6">
            <button 
              onClick={onExit}
              className="text-white/80 hover:text-white flex items-center space-x-2"
            >
              <span>←</span>
              <span>Sair</span>
            </button>
            
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white">{lesson.title}</h1>
              <div className="text-white/80">
                Pergunta {currentQuestion + 1} de {lesson.questions.length}
              </div>
            </div>
            
            <div className="text-white/80">
              {score} pontos
            </div>
          </div>

          {/* Barra de Progresso */}
          <div className="w-full bg-white/20 rounded-full h-3 mb-8">
            <div 
              className="bg-gradient-to-r from-amber-400 to-amber-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / lesson.questions.length) * 100}%` }}
            ></div>
          </div>

          {/* Pergunta */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-amber-400/30 mb-6">
            <h2 className="text-xl font-bold text-white mb-6">{currentQ.question}</h2>
            
            {currentQ.type === 'multiple-choice' && currentQ.options && (
              <div className="space-y-3">
                {currentQ.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                      selectedAnswer === option
                        ? 'border-amber-400 bg-amber-400/20 text-white'
                        : 'border-white/30 bg-white/10 text-white/90 hover:border-amber-400/50'
                    }`}
                    disabled={showResult}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
            
            {currentQ.type === 'translation' && (
              <input
                type="text"
                value={selectedAnswer}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-amber-400/30 text-white placeholder-white/60 focus:outline-none focus:border-amber-400"
                placeholder="Digite sua resposta em espanhol..."
                disabled={showResult}
              />
            )}

            {currentQ.type === 'audio-recognition' && (
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-4xl mb-2">🔊</div>
                  <div className="text-white/80 italic">"{currentQ.audioText}"</div>
                  <div className="text-white/60 text-sm mt-2">Escute o áudio acima</div>
                </div>
                <div className="space-y-3">
                  {currentQ.options?.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(option)}
                      className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                        selectedAnswer === option
                          ? 'border-amber-400 bg-amber-400/20 text-white'
                          : 'border-white/30 bg-white/10 text-white/90 hover:border-amber-400/50'
                      }`}
                      disabled={showResult}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentQ.type === 'cultural-context' && currentQ.options && (
              <div className="space-y-3">
                {currentQ.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                      selectedAnswer === option
                        ? 'border-amber-400 bg-amber-400/20 text-white'
                        : 'border-white/30 bg-white/10 text-white/90 hover:border-amber-400/50'
                    }`}
                    disabled={showResult}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Resultado da Pergunta */}
          {showResult && (
            <div className={`bg-white/10 backdrop-blur-md rounded-xl p-6 border mb-6 ${
              isCorrect ? 'border-green-500/50' : 'border-red-500/50'
            }`}>
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-3xl">{isCorrect ? '✅' : '❌'}</span>
                <span className="text-xl font-bold text-white">
                  {isCorrect ? '¡Excelente!' : 'Não foi desta vez'}
                </span>
                {isCorrect && (
                  <span className="text-amber-400 font-medium">+15 pontos</span>
                )}
              </div>
              
              {!isCorrect && (
                <div className="mb-3">
                  <span className="text-white/80">Resposta correta: </span>
                  <span className="text-amber-400 font-medium">{currentQ.correctAnswer}</span>
                </div>
              )}
              
              <div className="bg-white/10 rounded-lg p-4 mb-3">
                <h4 className="text-white font-medium mb-2">💡 Explicação:</h4>
                <p className="text-white/90">{currentQ.explanation}</p>
              </div>

              {currentQ.culturalContext && (
                <div className="bg-amber-400/10 rounded-lg p-4">
                  <h4 className="text-amber-400 font-medium mb-2">🎭 Contexto Cultural:</h4>
                  <p className="text-white/90">{currentQ.culturalContext}</p>
                </div>
              )}
            </div>
          )}

          {/* Botões de Ação */}
          <div className="text-center">
            {!showResult ? (
              <button 
                onClick={handleSubmitAnswer}
                disabled={!selectedAnswer}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-lg px-8 py-3"
              >
                Verificar Resposta
              </button>
            ) : (
              <button 
                onClick={handleNextQuestion}
                className="btn-primary text-lg px-8 py-3"
              >
                {currentQuestion < lesson.questions.length - 1 ? 'Próxima Pergunta' : 'Finalizar Lição'}
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  // FASE DE CONCLUSÃO
  if (currentPhase === 'completed') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-amber-400/30 max-w-lg w-full text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-white mb-4">¡Lección Completada!</h2>
          <p className="text-white/90 mb-6">Você concluiu: <strong>{lesson.title}</strong></p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-amber-400">{getScorePercentage()}%</div>
              <div className="text-white/80">Aproveitamento</div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-xl font-bold text-white">{score}</div>
                <div className="text-white/70 text-xs">Pontos</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-xl font-bold text-amber-400">+{lesson.xpReward}</div>
                <div className="text-white/70 text-xs">XP</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-xl font-bold text-white">{lesson.estimatedTime}</div>
                <div className="text-white/70 text-xs">min</div>
              </div>
            </div>
          </div>

          {/* Mensagem Cultural */}
          <div className="bg-amber-400/10 rounded-lg p-4 mb-6">
            <h3 className="text-amber-400 font-bold mb-2">🌟 ¡Muy bien!</h3>
            <p className="text-white/90 text-sm">
              Você aprendeu mais sobre a rica cultura mexicana! Continue explorando para descobrir 
              mais tradições, música e sabores únicos do México.
            </p>
          </div>
          
          <div className="space-y-3">
            <button 
              onClick={() => onComplete(lesson.xpReward)}
              className="btn-primary w-full"
            >
              ☀️ Continuar Explorando México
            </button>
            <button 
              onClick={onExit}
              className="btn-secondary w-full"
            >
              Voltar ao Mapa
            </button>
          </div>

          {/* Badge especial */}
          {getScorePercentage() >= 80 && (
            <div className="mt-4 bg-green-500/20 rounded-lg p-3 border border-green-500/50">
              <div className="text-2xl mb-1">🏆</div>
              <div className="text-green-400 font-bold text-sm">Badge Conquistado!</div>
              <div className="text-white/80 text-xs">Explorador Cultural Mexicano</div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return null
}
