'use client'

import { CULTURAL_CRITERIA, EXPLANATION_TEXT } from '@/lib/culturalCriteria'
import Link from 'next/link'

export default function CulturalGuidePage() {
  const renderStars = (count: number) => {
    return '⭐'.repeat(count) + '☆'.repeat(5 - count)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link 
            href="/map" 
            className="text-white/80 hover:text-white flex items-center space-x-2 justify-center mb-4"
          >
            <span>←</span>
            <span>Voltar ao Mapa</span>
          </Link>
          
          <h1 className="text-5xl font-bold text-white mb-4">
            Guia Cultural <span className="text-amber-400">AyvuLab</span>
          </h1>
          <p className="text-white/90 text-xl">
            Entenda como avaliamos a complexidade cultural e linguística de cada país
          </p>
        </div>

        {/* Explicação Geral */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-amber-400/30 mb-8">
          <div className="prose prose-invert max-w-none">
            <div className="whitespace-pre-line text-white/90 leading-relaxed">
              {EXPLANATION_TEXT}
            </div>
          </div>
        </div>

        {/* Complexidade Cultural */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-amber-400/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-3xl mr-3">🎭</span>
              Complexidade Cultural
            </h2>
            
            <div className="space-y-4">
              {Object.entries(CULTURAL_CRITERIA.culturalComplexity).map(([level, data]) => (
                <div key={level} className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl">{renderStars(parseInt(level))}</span>
                    <span className="text-amber-400 font-bold">Nível {level}</span>
                  </div>
                  <h3 className="text-white font-medium mb-2">{data.description}</h3>
                  <div className="text-white/80 text-sm space-y-1">
                    <div><strong>Características:</strong></div>
                    <ul className="list-disc list-inside ml-2 space-y-1">
                      {data.characteristics.map((char, index) => (
                        <li key={index}>{char}</li>
                      ))}
                    </ul>
                    <div className="mt-2"><strong>Exemplos:</strong> {data.examples.join(', ')}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Variação Linguística */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-amber-400/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-3xl mr-3">🗣️</span>
              Variação Linguística
            </h2>
            
            <div className="space-y-4">
              {Object.entries(CULTURAL_CRITERIA.linguisticVariation).map(([level, data]) => (
                <div key={level} className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl">{renderStars(parseInt(level))}</span>
                    <span className="text-amber-400 font-bold">Nível {level}</span>
                  </div>
                  <h3 className="text-white font-medium mb-2">{data.description}</h3>
                  <div className="text-white/80 text-sm space-y-1">
                    <div><strong>Características:</strong></div>
                    <ul className="list-disc list-inside ml-2 space-y-1">
                      {data.characteristics.map((char, index) => (
                        <li key={index}>{char}</li>
                      ))}
                    </ul>
                    <div className="mt-2"><strong>Exemplos:</strong> {data.examples.join(', ')}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Exemplos Práticos */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-amber-400/30">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-3xl mr-3">🌎</span>
            Exemplos Práticos por País
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="text-white font-bold mb-2 flex items-center">
                <img src="https://flagcdn.com/w320/mx.png" alt="México" className="w-8 h-5 mr-2 rounded" />
                México
              </h3>
              <div className="text-sm text-white/80 space-y-1">
                <div>🎭 Cultural: ⭐⭐⭐ (3/5)</div>
                <div>🗣️ Linguística: ⭐⭐ (2/5)</div>
                <div className="text-xs pt-2">
                  <strong>Por quê:</strong> Rica diversidade cultural (astecas, maias, colonos), mas espanhol relativamente uniforme no nível básico.
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="text-white font-bold mb-2 flex items-center">
                <img src="https://flagcdn.com/w320/ar.png" alt="Argentina" className="w-8 h-5 mr-2 rounded" />
                Argentina
              </h3>
              <div className="text-sm text-white/80 space-y-1">
                <div>🎭 Cultural: ⭐⭐⭐⭐ (4/5)</div>
                <div>🗣️ Linguística: ⭐⭐⭐⭐ (4/5)</div>
                <div className="text-xs pt-2">
                  <strong>Por quê:</strong> Múltiplas regiões (Buenos Aires, Patagônia, Norte), sotaque rioplatense muito específico.
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="text-white font-bold mb-2 flex items-center">
                <img src="https://flagcdn.com/w320/bo.png" alt="Bolívia" className="w-8 h-5 mr-2 rounded" />
                Bolívia
              </h3>
              <div className="text-sm text-white/80 space-y-1">
                <div>🎭 Cultural: ⭐⭐⭐⭐⭐ (5/5)</div>
                <div>🗣️ Linguística: ⭐⭐⭐⭐⭐ (5/5)</div>
                <div className="text-xs pt-2">
                  <strong>Por quê:</strong> Múltiplas culturas indígenas vivas, trilinguismo (espanhol/quéchua/aimará), extrema diversidade.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metodologia */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-amber-400/30 mt-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-3xl mr-3">🔬</span>
            Nossa Metodologia
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-bold mb-3 text-lg">Fontes de Pesquisa:</h3>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Estudos linguísticos acadêmicos</li>
                <li>• Análise antropológica cultural</li>
                <li>• Dados demográficos oficiais</li>
                <li>• Pesquisas sociolinguísticas</li>
                <li>• Observação de mídia local</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-3 text-lg">Critérios de Avaliação:</h3>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Diversidade étnica e regional</li>
                <li>• Variações de pronúncia</li>
                <li>• Vocabulário específico local</li>
                <li>• Tradições culturais ativas</li>
                <li>• Influências históricas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
