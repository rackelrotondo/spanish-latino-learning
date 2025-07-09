export const CULTURAL_CRITERIA = {
  // COMPLEXIDADE CULTURAL (1-5 estrelas)
  culturalComplexity: {
    1: {
      description: "Cultura homogênea, poucas variações regionais",
      characteristics: ["Tradições centralizadas", "Pouca diversidade étnica", "Cultura mainstream dominante"],
      examples: ["Costa Rica", "Uruguai pequenas cidades"]
    },
    2: {
      description: "Algumas variações regionais, tradições distintas",
      characteristics: ["2-3 regiões culturais", "Alguma diversidade étnica", "Tradições regionais moderadas"],
      examples: ["Uruguai", "Paraguai urbano"]
    },
    3: {
      description: "Diversidade regional significativa, múltiplas tradições",
      characteristics: ["3-4 regiões culturais distintas", "Diversidade étnica moderada", "Tradições regionais fortes"],
      examples: ["México norte/sul", "Colômbia", "Costa Rica"]
    },
    4: {
      description: "Alta diversidade cultural, múltiplas etnias",
      characteristics: ["4-6 regiões culturais", "Grande diversidade étnica", "Tradições ancestrais vivas"],
      examples: ["Argentina", "Venezuela", "Equador", "Chile"]
    },
    5: {
      description: "Extrema diversidade, múltiplas culturas ancestrais",
      characteristics: ["Mais de 6 regiões culturais", "Múltiplas etnias indígenas", "Culturas milenares preservadas"],
      examples: ["Peru", "Bolívia", "México completo", "Espanha"]
    }
  },

  // VARIAÇÃO LINGUÍSTICA (1-5 estrelas)
  linguisticVariation: {
    1: {
      description: "Espanhol muito homogêneo, poucas variações",
      characteristics: ["Sotaque uniforme", "Vocabulário padrão", "Poucas gírias regionais"],
      examples: ["Costa Rica central"]
    },
    2: {
      description: "Pequenas variações regionais de pronúncia",
      characteristics: ["Sotaque levemente variável", "Algumas gírias", "Vocabulário regional limitado"],
      examples: ["México básico", "Colômbia urbana"]
    },
    3: {
      description: "Variações regionais notáveis de vocabulário",
      characteristics: ["Sotaques regionais distintos", "Gírias regionais", "Variações de velocidade"],
      examples: ["Colômbia", "Costa Rica", "Peru urbano"]
    },
    4: {
      description: "Grandes diferenças regionais, múltiplos sotaques",
      characteristics: ["Sotaques muito distintos", "Vocabulário regional extenso", "Expressões únicas"],
      examples: ["Argentina", "Venezuela", "Equador", "Peru"]
    },
    5: {
      description: "Variações extremas, quase dialetos diferentes",
      characteristics: ["Sotaques únicos", "Vocabulário completamente diferente", "Influência de outras línguas"],
      examples: ["Chile", "Espanha", "Bolívia", "Paraguai", "México completo"]
    }
  }
}

export const EXPLANATION_TEXT = `
## Como Avaliamos a Complexidade Cultural e Linguística

### �� Complexidade Cultural
Medimos com base em:
- **Diversidade étnica**: Quantas etnias e culturas coexistem
- **Regiões distintas**: Quantas áreas com tradições próprias
- **Tradições ancestrais**: Preservação de culturas pré-colombianas
- **Diversidade religiosa**: Sincretismo e variedade de crenças
- **Manifestações artísticas**: Variedade de música, dança, arte

### 🗣️ Variação Linguística
Baseamos em:
- **Sotaques regionais**: Diferenças de pronúncia entre regiões
- **Vocabulário específico**: Palavras únicas de cada região
- **Velocidade de fala**: Ritmo característico de cada área
- **Influências externas**: Línguas indígenas, imigração
- **Expressões idiomáticas**: Gírias e modismos locais

### 📊 Escala de Avaliação
⭐ = Baixa complexidade/variação
⭐⭐ = Complexidade/variação moderada  
⭐⭐⭐ = Complexidade/variação significativa
⭐⭐⭐⭐ = Alta complexidade/variação
⭐⭐⭐⭐⭐ = Extrema complexidade/variação
`
