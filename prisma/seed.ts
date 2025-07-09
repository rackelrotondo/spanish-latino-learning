import { PrismaClient, Difficulty, LessonType } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...')

  // 1. Criar badges padrão
  const badges = await createBadges()
  console.log('✅ Badges criados')

  // 2. Criar países
  const countries = await createCountries()
  console.log('✅ Países criados')

  // 3. Criar lições do México
  const lessons = await createMexicoLessons()
  console.log('✅ Lições do México criadas')

  console.log('🎉 Seed concluído com sucesso!')
}

async function createBadges() {
  const badgeData = [
    {
      name: 'Primeiros Passos',
      description: 'Completou sua primeira lição!',
      icon: '🎯',
      conditionType: 'lesson_completed',
      conditionValue: JSON.stringify({ count: 1 })
    },
    {
      name: 'Explorador do México',
      description: 'Completou 100% das lições do México',
      icon: '🇲🇽',
      conditionType: 'country_completed',
      conditionValue: JSON.stringify({ country: 'MX' })
    },
    {
      name: 'Poliglota',
      description: 'Desbloqueou 3 países diferentes',
      icon: '🌎',
      conditionType: 'countries_unlocked',
      conditionValue: JSON.stringify({ count: 3 })
    },
    {
      name: 'Mestre Cultural',
      description: 'Completou 10 lições culturais',
      icon: '🎭',
      conditionType: 'culture_lessons',
      conditionValue: JSON.stringify({ count: 10 })
    },
    {
      name: 'Perfeccionista',
      description: 'Acertou 100% em 5 lições',
      icon: '⭐',
      conditionType: 'perfect_scores',
      conditionValue: JSON.stringify({ count: 5 })
    },
    {
      name: 'Guerreiro da Sequência',
      description: 'Manteve sequência de 7 dias',
      icon: '🔥',
      conditionType: 'streak_days',
      conditionValue: JSON.stringify({ days: 7 })
    }
  ]

  for (const badge of badgeData) {
    await prisma.badge.upsert({
      where: { name: badge.name },
      update: {},
      create: badge
    })
  }

  return badgeData
}

async function createCountries() {
  const culturalData = {
    description: 'Berço de civilizações milenares como os astecas e maias, o México é um país de contrastes fascinantes.',
    traditions: [
      'Día de los Muertos',
      'Mariachi e Serenatas',
      'Lucha Libre',
      'Festivais de Cores',
      'Artesanato Tradicional'
    ],
    musicGenres: [
      'Mariachi',
      'Ranchera',
      'Norteño',
      'Cumbia Mexicana',
      'Son Jarocho'
    ],
    foodItems: [
      'Tacos',
      'Mole',
      'Tamales',
      'Guacamole',
      'Chiles en Nogada'
    ],
    landmarks: [
      'Chichen Itzá',
      'Teotihuacán',
      'Centro Histórico CDMX',
      'Riviera Maya',
      'Frida Kahlo Museum'
    ],
    films: [
      { title: 'Coco', year: 2017, significance: 'Dia de los Muertos' },
      { title: 'Como Água para Chocolate', year: 1992, significance: 'Gastronomia e tradições' }
    ],
    artists: [
      { name: 'Vicente Fernández', genre: 'Ranchera', significance: 'Rei da música ranchera' },
      { name: 'Jesse & Joy', genre: 'Pop Latino', significance: 'Dupla mexicana internacional' }
    ]
  }

  const languageData = {
    variantName: 'Espanhol Mexicano',
    accentDescription: 'Pronúncia clara, ritmo melodioso, entonação característica',
    uniqueWords: [
      { word: '¡Órale!', meaning: 'Expressão de surpresa ou ânimo' },
      { word: 'Chamaco/a', meaning: 'Criança, jovem' },
      { word: 'Padre/Padrísimo', meaning: 'Muito legal, incrível' },
      { word: 'Chido', meaning: 'Legal, bacana' }
    ],
    commonPhrases: [
      { phrase: '¿Qué onda?', meaning: 'E aí? Como vai?' },
      { phrase: 'Está padrísimo', meaning: 'Está muito legal' },
      { phrase: 'No manches', meaning: 'Não acredito' },
      { phrase: 'Órale pues', meaning: 'Então tá bom' }
    ]
  }

  const mexicoData = {
    code: 'MX',
    name: 'México',
    nameSpanish: 'México',
    capital: 'Cidade do México',
    population: '128 milhões',
    flagUrl: '/flags/mexico.svg',
    requiredXP: 0,
    difficulty: Difficulty.BEGINNER,
    culturalComplexity: 4,
    linguisticVariation: 3,
    svgPath: 'M450,380 L470,360 L490,380 L510,400 L490,420 L470,400 Z',
    positionX: 450,
    positionY: 380,
    culturalData: JSON.stringify(culturalData),
    languageData: JSON.stringify(languageData)
  }

  await prisma.country.upsert({
    where: { code: 'MX' },
    update: {},
    create: mexicoData
  })

  return [mexicoData]
}

async function createMexicoLessons() {
  const lessons = [
    {
      id: 'mx-basic-1',
      countryCode: 'MX',
      title: 'Saudações Mexicanas',
      type: LessonType.VOCABULARY,
      difficulty: Difficulty.BEGINNER,
      estimatedTime: 15,
      xpReward: 50,
      orderIndex: 1,
      culturalIntro: JSON.stringify({
        title: 'A Hospitalidade Mexicana',
        content: 'No México, as saudações são mais que cortesia - são uma expressão da calorosa hospitalidade mexicana. A cultura mexicana valoriza profundamente as relações interpessoais e isso se reflete na forma carinhosa de cumprimentar.',
        vocabulary: [
          {
            spanish: 'Hola',
            portuguese: 'Oi/Olá',
            pronunciation: 'ó-la',
            culturalNote: 'Saudação universal, sempre acompanhada de um sorriso'
          },
          {
            spanish: 'Buenos días',
            portuguese: 'Bom dia',
            pronunciation: 'bué-nos dí-as',
            culturalNote: 'Usado até aproximadamente 12h, muito respeitoso'
          },
          {
            spanish: '¿Qué tal?',
            portuguese: 'Como vai?',
            pronunciation: 'ké tal',
            culturalNote: 'Informal e amigável, perfeito entre amigos'
          },
          {
            spanish: '¡Órale!',
            portuguese: 'Nossa!/Poxa!',
            pronunciation: 'ó-ra-le',
            culturalNote: 'Expressão tipicamente mexicana de surpresa ou ânimo'
          }
        ],
        culturalNotes: [
          'Mexicanos frequentemente cumprimentam com beijo no rosto, mesmo em encontros casuais',
          'O contato visual durante a saudação é muito importante na cultura mexicana',
          'É comum perguntar sobre a família logo após a saudação'
        ],
        mediaReferences: [
          {
            type: 'filme',
            title: 'Coco',
            description: 'Observe como Miguel saúda diferentes personagens, refletindo a hierarquia familiar mexicana',
            connection: 'As saudações mostram respeito pela família e tradições'
          },
          {
            type: 'música',
            artist: 'Jesse & Joy',
            song: 'Espacio Sideral',
            description: 'Preste atenção nas saudações calorosas das entrevistas da dupla',
            connection: 'Demonstra a naturalidade mexicana em interações'
          }
        ]
      }),
      questions: JSON.stringify([
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'Como você diria "Oi" em espanhol mexicano?',
          options: ['Hola', 'Buenos', 'Órale', 'Qué'],
          correctAnswer: 'Hola',
          explanation: '"Hola" é a saudação mais comum e universal em espanhol.',
          culturalContext: 'No México, sempre é acompanhada de um sorriso caloroso!'
        },
        {
          id: 'q2',
          type: 'translation',
          question: 'Traduza: "Buenos días, ¿qué tal?"',
          correctAnswer: 'Bom dia, como vai?',
          explanation: 'Uma saudação completa muito comum no México.',
          culturalContext: 'Demonstra educação e interesse genuíno pela pessoa.'
        },
        {
          id: 'q3',
          type: 'cultural-context',
          question: 'Qual expressão é tipicamente mexicana para demonstrar surpresa?',
          options: ['¡Órale!', '¡Hola!', '¡Buenos!', '¡Qué!'],
          correctAnswer: '¡Órale!',
          explanation: '¡Órale! é uma expressão muito característica do espanhol mexicano.',
          culturalContext: 'Pode expressar surpresa, admiração ou simplesmente enfatizar algo!'
        }
      ]),
      isPublished: true
    },
    {
      id: 'mx-basic-2',
      countryCode: 'MX',
      title: 'Gastronomia Mexicana',
      type: LessonType.CULTURE,
      difficulty: Difficulty.BEGINNER,
      estimatedTime: 20,
      xpReward: 75,
      orderIndex: 2,
      culturalIntro: JSON.stringify({
        title: 'Patrimônio Gastronômico da Humanidade',
        content: 'A gastronomia mexicana foi declarada Patrimônio Cultural Imaterial da Humanidade pela UNESCO em 2010. Mais que alimentação, é uma expressão de identidade cultural que conecta o presente com as tradições ancestrais astecas e maias.',
        vocabulary: [
          {
            spanish: 'Taco',
            portuguese: 'Taco',
            pronunciation: 'tá-ko',
            culturalNote: 'O prato mais icônico, cada região tem sua versão especial'
          },
          {
            spanish: 'Tortilla',
            portuguese: 'Tortilha',
            pronunciation: 'tor-tí-lla',
            culturalNote: 'Base da alimentação mexicana, feita de milho sagrado'
          },
          {
            spanish: 'Salsa',
            portuguese: 'Molho',
            pronunciation: 'sál-sa',
            culturalNote: 'Cada família tem sua receita secreta de salsa'
          },
          {
            spanish: 'Guacamole',
            portuguese: 'Guacamole',
            pronunciation: 'gua-ka-mó-le',
            culturalNote: 'Criado pelos astecas, ainda preparado tradicionalmente'
          }
        ],
        culturalNotes: [
          'O milho é considerado sagrado na cultura mexicana - base das tortillas',
          'Mercados locais são o coração da gastronomia, onde encontrar ingredientes frescos',
          'Comida de rua é uma arte no México - taquerias são instituições culturais'
        ],
        mediaReferences: [
          {
            type: 'filme',
            title: 'Como Água para Chocolate',
            description: 'Mostra como a comida carrega emoções e tradições familiares',
            connection: 'Comida como linguagem de amor e memória cultural'
          },
          {
            type: 'tradição',
            title: 'Día de los Muertos',
            description: 'Pratos especiais para honrar os ancestrais',
            connection: 'Gastronomia conecta vivos e mortos na cultura mexicana'
          }
        ]
      }),
      questions: JSON.stringify([
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'Qual é a base tradicional da tortilla mexicana?',
          options: ['Trigo', 'Milho', 'Arroz', 'Aveia'],
          correctAnswer: 'Milho',
          explanation: 'As tortillas tradicionais são feitas de milho, ingrediente sagrado para os astecas.',
          culturalContext: 'O milho é considerado o alimento que deu origem aos seres humanos na mitologia maia.'
        },
        {
          id: 'q2',
          type: 'cultural-context',
          question: 'Por que a gastronomia mexicana é Patrimônio da Humanidade?',
          options: [
            'Por ser saborosa',
            'Por conectar tradições ancestrais com presente',
            'Por ser popular',
            'Por usar muitas especiarias'
          ],
          correctAnswer: 'Por conectar tradições ancestrais com presente',
          explanation: 'A UNESCO reconheceu a gastronomia mexicana por preservar tradições milenares.',
          culturalContext: 'Cada prato conta uma história que vem dos astecas e maias!'
        },
        {
          id: 'q3',
          type: 'translation',
          question: 'Como você pediria "um taco com guacamole" em espanhol?',
          correctAnswer: 'Un taco con guacamole',
          explanation: 'Estrutura simples: un + prato + con + acompanhamento.',
          culturalContext: 'Nos mercados mexicanos, é comum personalizar seu taco com diferentes molhos!'
        }
      ]),
      isPublished: true
    }
  ]

  for (const lesson of lessons) {
    await prisma.lesson.upsert({
      where: { id: lesson.id },
      update: {},
      create: lesson
    })
  }

  return lessons
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
