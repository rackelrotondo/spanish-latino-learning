export const XP_SYSTEM = {
  // NÍVEL BÁSICO (0-200 XP)
  MEXICO: {
    xp: 0,
    rationale: "País inicial - Espanhol neutro, cultura conhecida no Brasil",
    complexity: "Baixa",
    linguistic_variation: "Moderada"
  },
  
  // NÍVEL INTERMEDIÁRIO (150-350 XP)
  COLOMBIA: {
    xp: 150,
    rationale: "Proximidade geográfica, espanhol claro, cultura similar",
    complexity: "Baixa-Média",
    linguistic_variation: "Moderada"
  },
  
  ARGENTINA: {
    xp: 200,
    rationale: "Laços culturais fortes, introdução ao rioplatense",
    complexity: "Média",
    linguistic_variation: "Alta"
  },
  
  SPAIN: {
    xp: 250,
    rationale: "Origem do idioma, múltiplos sotaques peninsulares",
    complexity: "Alta",
    linguistic_variation: "Muito Alta"
  },
  
  PERU: {
    xp: 300,
    rationale: "Influência indígena, múltiplas variantes",
    complexity: "Alta",
    linguistic_variation: "Alta"
  },
  
  COSTA_RICA: {
    xp: 300,
    rationale: "Centro-américa, foco específico regional",
    complexity: "Média",
    linguistic_variation: "Moderada"
  },
  
  // NÍVEL AVANÇADO (320-450 XP)
  ECUADOR: {
    xp: 320,
    rationale: "Múltiplas regiões, influência quéchua",
    complexity: "Alta",
    linguistic_variation: "Alta"
  },
  
  VENEZUELA: {
    xp: 350,
    rationale: "Variedade regional complexa, múltiplos sotaques",
    complexity: "Alta",
    linguistic_variation: "Alta"
  },
  
  CHILE: {
    xp: 400,
    rationale: "Espanhol muito específico, gírias únicas",
    complexity: "Alta",
    linguistic_variation: "Muito Alta"
  },
  
  BOLIVIA: {
    xp: 450,
    rationale: "Multilinguismo (quéchua, aimará), complexidade indígena",
    complexity: "Muito Alta",
    linguistic_variation: "Muito Alta"
  },
  
  // NÍVEL EXPERT (500-550 XP)
  URUGUAY: {
    xp: 500,
    rationale: "Rioplatense complexo, cultura refinada específica",
    complexity: "Alta",
    linguistic_variation: "Alta"
  },
  
  PARAGUAY: {
    xp: 550,
    rationale: "Bilinguismo único (guarani), cultura distintamente diferente",
    complexity: "Muito Alta",
    linguistic_variation: "Muito Alta"
  }
}

export const PROGRESSION_LOGIC = {
  phase1: "Familiarização com espanhol neutro (México)",
  phase2: "Expansão para culturas próximas (Colômbia, Argentina)",
  phase3: "Diversificação linguística (Espanha, Peru, Costa Rica)",
  phase4: "Complexidade regional (Equador, Venezuela, Chile)",
  phase5: "Especialização cultural (Bolívia, Uruguai, Paraguai)"
}
