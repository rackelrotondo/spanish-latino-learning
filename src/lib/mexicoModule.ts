// Dados do módulo México
export interface LessonData {
  id: string
  title: string
  type: 'vocabulary' | 'grammar' | 'culture' | 'listening'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedTime: number
  xpReward: number
  culturalIntro: {
    title: string
    content: string
    vocabulary: Array<{
      word: string
      meaning: string
      pronunciation: string
      culturalNote: string
      usage: string
    }>
    culturalNotes?: string[]
    mediaReferences?: Array<{
      type: string
      title: string
      description: string
      reference: string
      culturalContext: string
      url?: string
    }>
  }
  questions: Array<{
    id: string
    type: string
    question: string
    options?: string[]
    correctAnswer: string
    explanation: string
    culturalContext: string
    audioText?: string
  }>
}

const mexicoLessons: LessonData[] = [
  {
    id: 'mx-basic-1',
    title: 'Saudações Mexicanas',
    type: 'vocabulary',
    difficulty: 'beginner',
    estimatedTime: 15,
    xpReward: 50,
    culturalIntro: {
      title: 'A Hospitalidade Mexicana',
      content: 'No México, as saudações são mais que cortesia - são uma expressão da calorosa hospitalidade mexicana.',
      vocabulary: [
        {
          word: 'Hola',
          meaning: 'Oi/Olá',
          pronunciation: 'ó-la',
          culturalNote: 'Saudação universal, sempre acompanhada de um sorriso',
          usage: 'Usado em qualquer hora do dia, formal ou informal'
        },
        {
          word: 'Buenos días',
          meaning: 'Bom dia',
          pronunciation: 'bué-nos dí-as',
          culturalNote: 'Usado até aproximadamente 12h, muito respeitoso',
          usage: 'Formal, usado pela manhã até meio-dia'
        },
        {
          word: '¿Qué tal?',
          meaning: 'Como vai?',
          pronunciation: 'ké tal',
          culturalNote: 'Informal e amigável, perfeito entre amigos',
          usage: 'Informal, entre amigos e conhecidos'
        },
        {
          word: '¡Órale!',
          meaning: 'Nossa!/Poxa!',
          pronunciation: 'ó-ra-le',
          culturalNote: 'Expressão tipicamente mexicana de surpresa ou ânimo',
          usage: 'Expressão de surpresa, admiração ou encorajamento'
        }
      ],
      culturalNotes: [
        'No México, é comum cumprimentar com um aperto de mão ou abraço, dependendo da proximidade.',
        'O contato visual durante as saudações é muito valorizado e demonstra respeito.',
        'Em situações formais, sempre use "Buenos días/tardes/noches" em vez de apenas "Hola".',
        'A expressão "¡Órale!" é exclusivamente mexicana e pode expressar desde surpresa até aprovação.'
      ],
      mediaReferences: [
        {
          type: 'Filme',
          title: 'Coco (2017)',
          description: 'Animação da Pixar que mostra autenticamente as saudações e tradições mexicanas.',
          reference: 'Disney-Pixar, 2017',
          culturalContext: 'Retrata fielmente como as famílias mexicanas se cumprimentam e interagem no Día de los Muertos.'
        },
        {
          type: 'Série',
          title: 'El Chavo del Ocho',
          description: 'Clássica série mexicana onde você pode ouvir saudações cotidianas.',
          reference: 'Roberto Gómez Bolaños, 1971-1980',
          culturalContext: 'Mostra o espanhol mexicano coloquial e as interações sociais típicas dos bairros mexicanos.'
        },
        {
          type: 'Música',
          title: 'Las Mañanitas',
          description: 'Canção tradicional mexicana cantada em aniversários, cheia de saudações carinhosas.',
          reference: 'Canção folclórica tradicional',
          culturalContext: 'Demonstra a importância das saudações afetuosas na cultura mexicana, especialmente em celebrações.'
        }
      ]
    },
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'Como você diria "Oi" em espanhol mexicano?',
        options: ['Hola', 'Buenos', 'Órale', 'Qué'],
        correctAnswer: 'Hola',
        explanation: '"Hola" é a saudação mais comum e universal em espanhol.',
        culturalContext: 'No México, sempre é acompanhada de um sorriso caloroso!',
        audioText: 'Hola, ¿cómo estás?'
      },
      {
        id: 'q2',
        type: 'translation',
        question: 'Traduza: "Buenos días, ¿qué tal?"',
        correctAnswer: 'Bom dia, como vai?',
        explanation: 'Uma saudação completa muito comum no México.',
        culturalContext: 'Demonstra educação e interesse genuíno pela pessoa.',
        audioText: 'Buenos días, ¿qué tal? ¿Cómo has estado?'
      },
      {
        id: 'q3',
        type: 'listening',
        question: 'O que você ouviu?',
        options: ['¡Órale, qué padre!', '¡Hola, amigo!', '¡Buenos días!', '¡Qué tal, compadre!'],
        correctAnswer: '¡Órale, qué padre!',
        explanation: 'Uma expressão tipicamente mexicana de admiração.',
        culturalContext: '"Qué padre" significa "que legal" no México.',
        audioText: '¡Órale, qué padre está el día!'
      }
    ]
  },
  {
    id: 'mx-basic-2',
    title: 'Gastronomia Mexicana',
    type: 'culture',
    difficulty: 'beginner',
    estimatedTime: 20,
    xpReward: 75,
    culturalIntro: {
      title: 'Patrimônio Gastronômico da Humanidade',
      content: 'A gastronomia mexicana foi declarada Patrimônio Cultural Imaterial da Humanidade pela UNESCO em 2010.',
      vocabulary: [
        {
          word: 'Taco',
          meaning: 'Taco',
          pronunciation: 'tá-ko',
          culturalNote: 'O prato mais icônico, cada região tem sua versão especial',
          usage: 'Comido com as mãos, acompanhado de salsa e limão'
        },
        {
          word: 'Tortilla',
          meaning: 'Tortilha',
          pronunciation: 'tor-tí-lla',
          culturalNote: 'Base da alimentação mexicana, feita de milho sagrado',
          usage: 'Base para tacos, quesadillas e outros pratos'
        },
        {
          word: 'Salsa',
          meaning: 'Molho',
          pronunciation: 'sál-sa',
          culturalNote: 'Cada família tem sua receita secreta de salsa',
          usage: 'Acompanha praticamente todos os pratos mexicanos'
        },
        {
          word: 'Guacamole',
          meaning: 'Guacamole',
          pronunciation: 'gua-ka-mó-le',
          culturalNote: 'Criado pelos astecas, ainda preparado tradicionalmente',
          usage: 'Servido como entrada com tortilla chips ou acompanhamento'
        }
      ],
      culturalNotes: [
        'A comida mexicana varia drasticamente de região para região, cada uma com especialidades únicas.',
        'O milho é considerado sagrado na cultura mexicana, sendo a base de muitos pratos tradicionais.',
        'As refeições são momentos sociais importantes, onde a família se reúne para conversar.',
        'Muitas receitas são passadas de geração em geração, mantendo tradições culinárias vivas.',
        'O uso de especiarias e pimentas não é apenas para tempero, mas também tem significado cultural.'
      ],
      mediaReferences: [
        {
          type: 'Documentário',
          title: 'Taco Chronicles',
          description: 'Série da Netflix que explora a rica tradição dos tacos mexicanos.',
          reference: 'Netflix, 2019',
          culturalContext: 'Mostra como cada tipo de taco representa uma região e história específica do México.'
        },
        {
          type: 'Filme',
          title: 'Como Água para Chocolate',
          description: 'Drama mexicano que mostra a importância da comida na cultura familiar.',
          reference: 'Alfonso Arau, 1992',
          culturalContext: 'Demonstra como a comida mexicana carrega emoções e tradições familiares profundas.'
        },
        {
          type: 'Livro',
          title: 'A Cozinha Mexicana de Diana Kennedy',
          description: 'Guia definitivo sobre a autêntica culinária mexicana.',
          reference: 'Diana Kennedy, 1972',
          culturalContext: 'Preserva receitas tradicionais que conectam o México moderno com suas raízes indígenas.'
        },
        {
          type: 'Programa',
          title: 'Street Food: Latin America - México',
          description: 'Episódio sobre o México mostra a comida de rua tradicional.',
          reference: 'Netflix, 2020',
          culturalContext: 'Revela como a comida de rua mexicana mantém vivas as tradições culinárias populares.'
        }
      ]
    },
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'Qual é a base tradicional da tortilla mexicana?',
        options: ['Trigo', 'Milho', 'Arroz', 'Aveia'],
        correctAnswer: 'Milho',
        explanation: 'As tortillas tradicionais são feitas de milho, ingrediente sagrado para os astecas.',
        culturalContext: 'O milho é considerado o alimento que deu origem aos seres humanos na mitologia maia.',
        audioText: 'Las tortillas se hacen con maíz, el grano sagrado de los aztecas.'
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
        culturalContext: 'Cada prato conta uma história que vem dos astecas e maias!',
        audioText: 'La gastronomía mexicana es Patrimonio de la Humanidad por preservar tradiciones ancestrales.'
      },
      {
        id: 'q3',
        type: 'listening',
        question: 'O que o chef está dizendo sobre os tacos?',
        options: [
          'Los tacos son muy picantes',
          'Los tacos son el alma de México',
          'Los tacos son caros',
          'Los tacos son difíciles de hacer'
        ],
        correctAnswer: 'Los tacos son el alma de México',
        explanation: 'O chef está expressando a importância cultural dos tacos.',
        culturalContext: 'Os tacos representam a essência da cultura mexicana.',
        audioText: 'Los tacos no son solo comida, son el alma de México, nuestra identidad en cada bocado.'
      }
    ]
  }
]

const mexicoCountryData = {
  code: 'MX',
  name: 'México',
  nameSpanish: 'México',
  capital: 'Cidade do México',
  population: '128 milhões',
  flagUrl: '/flags/mexico.svg',
  difficulty: 'beginner' as const,
  culturalComplexity: 4,
  linguisticVariation: 3,
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
  ]
}

// Exportação principal que o LessonInterface está esperando
export const MEXICO_MODULE = {
  country: mexicoCountryData,
  lessons: mexicoLessons,
  totalLessons: mexicoLessons.length,
  totalXP: mexicoLessons.reduce((sum, lesson) => sum + lesson.xpReward, 0),
  averageTime: Math.round(mexicoLessons.reduce((sum, lesson) => sum + lesson.estimatedTime, 0) / mexicoLessons.length)
}

// Exportações individuais
export { mexicoLessons, mexicoCountryData }
