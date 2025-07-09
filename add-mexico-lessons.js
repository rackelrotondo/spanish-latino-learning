const { PrismaClient, Difficulty, LessonType } = require('@prisma/client')

const prisma = new PrismaClient()

async function addMexicoLessons() {
  console.log('🇲🇽 Criando lições completas do México...')

  const lessons = [
    // Lição 3: Família Mexicana
    {
      id: 'mx-basic-3',
      countryCode: 'MX',
      title: 'Família Mexicana',
      type: LessonType.VOCABULARY,
      difficulty: Difficulty.BEGINNER,
      estimatedTime: 18,
      xpReward: 60,
      orderIndex: 3,
      culturalIntro: JSON.stringify({
        title: 'A Importância da Família na Cultura Mexicana',
        content: 'A família é o núcleo central da sociedade mexicana. As relações familiares são profundamente respeitadas e celebradas, com tradições que passam de geração em geração.',
        vocabulary: [
          {
            spanish: 'Familia',
            portuguese: 'Família',
            pronunciation: 'fa-mí-lia',
            culturalNote: 'Inclui não apenas pais e filhos, mas tios, primos e compadres'
          },
          {
            spanish: 'Papá/Papito',
            portuguese: 'Pai/Paizinho',
            pronunciation: 'pa-pá/pa-pí-to',
            culturalNote: 'Papito é uma forma carinhosa muito comum no México'
          },
          {
            spanish: 'Mamá/Mamita',
            portuguese: 'Mãe/Mãezinha',
            pronunciation: 'ma-má/ma-mí-ta',
            culturalNote: 'Mamita demonstra o carinho especial pela mãe'
          },
          {
            spanish: 'Abuelita',
            portuguese: 'Vovozinha',
            pronunciation: 'a-bue-lí-ta',
            culturalNote: 'As avós têm papel fundamental na transmissão de tradições'
          }
        ],
        culturalNotes: [
          'Dia das Mães (10 de maio) é uma das datas mais importantes no México',
          'É comum três gerações viverem na mesma casa ou muito próximas',
          'O conceito de "compadrazgo" (padrinhos) estende a família além do sangue'
        ]
      }),
      questions: JSON.stringify([
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'Como você diria "minha avozinha" em espanhol mexicano?',
          options: ['Mi abuela', 'Mi abuelita', 'Mi mama', 'Mi familia'],
          correctAnswer: 'Mi abuelita',
          explanation: 'Abuelita é a forma carinhosa e muito comum no México.',
          culturalContext: 'As avós são muito respeitadas e amadas na cultura mexicana!'
        },
        {
          id: 'q2',
          type: 'translation',
          question: 'Traduza: "Mi familia es muy importante"',
          correctAnswer: 'Minha família é muito importante',
          explanation: 'Uma frase que reflete perfeitamente os valores mexicanos.',
          culturalContext: 'A família está no centro de tudo na cultura mexicana.'
        }
      ]),
      isPublished: true
    },

    // Lição 4: Cores e Tradições
    {
      id: 'mx-basic-4',
      countryCode: 'MX',
      title: 'Cores e Tradições',
      type: LessonType.CULTURE,
      difficulty: Difficulty.BEGINNER,
      estimatedTime: 20,
      xpReward: 70,
      orderIndex: 4,
      culturalIntro: JSON.stringify({
        title: 'As Cores Vibrantes do México',
        content: 'As cores no México não são apenas estéticas - cada uma carrega significado cultural profundo, especialmente nas celebrações e no artesanato tradicional.',
        vocabulary: [
          {
            spanish: 'Rojo',
            portuguese: 'Vermelho',
            pronunciation: 'ró-jo',
            culturalNote: 'Cor da paixão e do sangue asteca, presente na bandeira'
          },
          {
            spanish: 'Verde',
            portuguese: 'Verde',
            pronunciation: 'vér-de',
            culturalNote: 'Representa esperança e independência na bandeira mexicana'
          },
          {
            spanish: 'Blanco',
            portuguese: 'Branco',
            pronunciation: 'blán-ko',
            culturalNote: 'Simboliza pureza e união na bandeira nacional'
          },
          {
            spanish: 'Colorido',
            portuguese: 'Colorido',
            pronunciation: 'ko-lo-rí-do',
            culturalNote: 'Essência do artesanato e festivais mexicanos'
          }
        ],
        culturalNotes: [
          'Papel picado usa cores específicas para diferentes celebrações',
          'Cada região tem suas cores tradicionais no artesanato',
          'Día de los Muertos é famoso por suas cores vibrantes e alegres'
        ]
      }),
      questions: JSON.stringify([
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'Quais são as cores da bandeira mexicana?',
          options: ['Rojo, blanco, azul', 'Verde, blanco, rojo', 'Amarillo, rojo, verde', 'Azul, blanco, rojo'],
          correctAnswer: 'Verde, blanco, rojo',
          explanation: 'Verde (esperança), branco (união) e vermelho (sangue dos heróis).',
          culturalContext: 'Cada cor tem um significado histórico profundo!'
        }
      ]),
      isPublished: true
    },

    // Lição 5: Números e Mercado
    {
      id: 'mx-basic-5',
      countryCode: 'MX',
      title: 'Números e Mercado',
      type: LessonType.VOCABULARY,
      difficulty: Difficulty.BEGINNER,
      estimatedTime: 15,
      xpReward: 55,
      orderIndex: 5,
      culturalIntro: JSON.stringify({
        title: 'Mercados Tradicionais Mexicanos',
        content: 'Os mercados são o coração da vida social mexicana. Saber números é essencial para pechinchar e interagir nos coloridos mercados locais.',
        vocabulary: [
          {
            spanish: 'Uno, dos, tres',
            portuguese: 'Um, dois, três',
            pronunciation: 'ú-no, dos, tres',
            culturalNote: 'Básico para pechinchar nos mercados'
          },
          {
            spanish: '¿Cuánto cuesta?',
            portuguese: 'Quanto custa?',
            pronunciation: 'kuán-to kués-ta',
            culturalNote: 'Pergunta essencial em qualquer mercado mexicano'
          },
          {
            spanish: 'Peso',
            portuguese: 'Peso (moeda)',
            pronunciation: 'pé-so',
            culturalNote: 'Moeda oficial do México'
          }
        ]
      }),
      questions: JSON.stringify([
        {
          id: 'q1',
          type: 'translation',
          question: 'Como perguntar "quanto custa" em espanhol?',
          correctAnswer: '¿Cuánto cuesta?',
          explanation: 'Frase essencial para compras no México.',
          culturalContext: 'Nos mercados mexicanos, pechinchar é parte da cultura!'
        }
      ]),
      isPublished: true
    },

    // Lição 6: Música e Celebrações
    {
      id: 'mx-basic-6',
      countryCode: 'MX',
      title: 'Música e Celebrações',
      type: LessonType.CULTURE,
      difficulty: Difficulty.BEGINNER,
      estimatedTime: 22,
      xpReward: 80,
      orderIndex: 6,
      culturalIntro: JSON.stringify({
        title: 'A Alma Musical do México',
        content: 'A música é a alma do México. Desde o mariachi até as canções populares, cada ritmo conta uma história da rica cultura mexicana.',
        vocabulary: [
          {
            spanish: 'Mariachi',
            portuguese: 'Mariachi',
            pronunciation: 'ma-riá-chi',
            culturalNote: 'Patrimônio Cultural da Humanidade pela UNESCO'
          },
          {
            spanish: 'Canción',
            portuguese: 'Canção',
            pronunciation: 'kan-sión',
            culturalNote: 'Cada região tem suas canções tradicionais'
          },
          {
            spanish: 'Fiesta',
            portuguese: 'Festa',
            pronunciation: 'fiés-ta',
            culturalNote: 'Celebrações são fundamentais na cultura mexicana'
          },
          {
            spanish: '¡Viva México!',
            portuguese: 'Viva o México!',
            pronunciation: 'ví-va mé-ji-ko',
            culturalNote: 'Grito tradicional de orgulho nacional'
          }
        ],
        culturalNotes: [
          'Mariachi surgiu no estado de Jalisco no século XVIII',
          'Cada festa tem suas músicas específicas e tradicionais',
          'Serenatas são tradição romântica ainda muito viva'
        ]
      }),
      questions: JSON.stringify([
        {
          id: 'q1',
          type: 'cultural-context',
          question: 'O que é o Mariachi?',
          options: ['Uma dança', 'Um gênero musical tradicional', 'Uma comida', 'Um festival'],
          correctAnswer: 'Um gênero musical tradicional',
          explanation: 'Mariachi é um gênero musical tradicional mexicano reconhecido pela UNESCO.',
          culturalContext: 'Representa a alma musical do México!'
        }
      ]),
      isPublished: true
    },

    // Lição 7: Dia de los Muertos
    {
      id: 'mx-basic-7',
      countryCode: 'MX',
      title: 'Día de los Muertos',
      type: LessonType.CULTURE,
      difficulty: Difficulty.BEGINNER,
      estimatedTime: 25,
      xpReward: 90,
      orderIndex: 7,
      culturalIntro: JSON.stringify({
        title: 'A Celebração da Vida e da Morte',
        content: 'O Día de los Muertos é uma das tradições mais importantes do México, onde a morte é celebrada como parte natural da vida, não temida.',
        vocabulary: [
          {
            spanish: 'Día de los Muertos',
            portuguese: 'Dia dos Mortos',
            pronunciation: 'dí-a de los muér-tos',
            culturalNote: 'Patrimônio Cultural da Humanidade'
          },
          {
            spanish: 'Ofrenda',
            portuguese: 'Oferenda',
            pronunciation: 'o-frén-da',
            culturalNote: 'Altar para honrar os que partiram'
          },
          {
            spanish: 'Calavera',
            portuguese: 'Caveira',
            pronunciation: 'ka-la-vé-ra',
            culturalNote: 'Símbolo alegre, não assustador'
          },
          {
            spanish: 'Cempasúchil',
            portuguese: 'Flor de cempasúchil',
            pronunciation: 'sem-pa-sú-chil',
            culturalNote: 'Flor laranja que guia as almas'
          }
        ],
        culturalNotes: [
          'Celebrado nos dias 1 e 2 de novembro',
          'Famílias visitam cemitérios para "conviver" com os mortos',
          'É uma celebração alegre, não triste'
        ]
      }),
      questions: JSON.stringify([
        {
          id: 'q1',
          type: 'cultural-context',
          question: 'Como os mexicanos veem a morte no Día de los Muertos?',
          options: ['Com medo', 'Com tristeza', 'Como parte natural da vida', 'Como algo ruim'],
          correctAnswer: 'Como parte natural da vida',
          explanation: 'No México, a morte é vista como continuação da vida, não como fim.',
          culturalContext: 'Por isso a celebração é alegre e colorida!'
        }
      ]),
      isPublished: true
    },

    // Lição 8: Frases Úteis
    {
      id: 'mx-basic-8',
      countryCode: 'MX',
      title: 'Frases Úteis do Dia a Dia',
      type: LessonType.VOCABULARY,
      difficulty: Difficulty.BEGINNER,
      estimatedTime: 16,
      xpReward: 65,
      orderIndex: 8,
      culturalIntro: JSON.stringify({
        title: 'Expressões Mexicanas Essenciais',
        content: 'Estas frases vão fazer você soar como um local e mostrar respeito pela cultura mexicana.',
        vocabulary: [
          {
            spanish: 'Por favor',
            portuguese: 'Por favor',
            pronunciation: 'por fa-vór',
            culturalNote: 'Cortesia é muito valorizada no México'
          },
          {
            spanish: 'Gracias',
            portuguese: 'Obrigado',
            pronunciation: 'grá-sias',
            culturalNote: 'Sempre acompanhado de um sorriso'
          },
          {
            spanish: 'De nada',
            portuguese: 'De nada',
            pronunciation: 'de ná-da',
            culturalNote: 'Resposta educada e calorosa'
          },
          {
            spanish: 'Con permiso',
            portuguese: 'Com licença',
            pronunciation: 'kon per-mí-so',
            culturalNote: 'Usado para pedir passagem educadamente'
          }
        ]
      }),
      questions: JSON.stringify([
        {
          id: 'q1',
          type: 'translation',
          question: 'Como dizer "obrigado" em espanhol?',
          correctAnswer: 'Gracias',
          explanation: 'Gracias é a forma universal de agradecer em espanhol.',
          culturalContext: 'No México, sempre vem acompanhado de um sorriso genuíno!'
        }
      ]),
      isPublished: true
    },

    // Lição 9: Geografia e Lugares
    {
      id: 'mx-basic-9',
      countryCode: 'MX',
      title: 'Geografia e Lugares Famosos',
      type: LessonType.CULTURE,
      difficulty: Difficulty.BEGINNER,
      estimatedTime: 20,
      xpReward: 75,
      orderIndex: 9,
      culturalIntro: JSON.stringify({
        title: 'Maravilhas do México',
        content: 'O México possui uma geografia diversa e lugares históricos únicos, desde pirâmides antigas até praias paradisíacas.',
        vocabulary: [
          {
            spanish: 'Chichen Itzá',
            portuguese: 'Chichen Itzá',
            pronunciation: 'chi-chen i-tsá',
            culturalNote: 'Uma das Sete Maravilhas do Mundo Moderno'
          },
          {
            spanish: 'Playa',
            portuguese: 'Praia',
            pronunciation: 'plá-ya',
            culturalNote: 'México tem praias no Pacífico e Atlântico'
          },
          {
            spanish: 'Pirámide',
            portuguese: 'Pirâmide',
            pronunciation: 'pi-rá-mi-de',
            culturalNote: 'Herança das civilizações maia e asteca'
          }
        ]
      }),
      questions: JSON.stringify([
        {
          id: 'q1',
          type: 'cultural-context',
          question: 'Chichen Itzá foi construída por qual civilização?',
          options: ['Astecas', 'Maias', 'Incas', 'Espanhóis'],
          correctAnswer: 'Maias',
          explanation: 'Chichen Itzá é uma das maiores cidades da civilização maia.',
          culturalContext: 'É Patrimônio Mundial da UNESCO e uma das Sete Maravilhas!'
        }
      ]),
      isPublished: true
    },

    // Lição 10: Revisão e Celebração
    {
      id: 'mx-basic-10',
      countryCode: 'MX',
      title: 'Celebrando o México - Revisão Final',
      type: LessonType.CULTURE,
      difficulty: Difficulty.BEGINNER,
      estimatedTime: 30,
      xpReward: 100,
      orderIndex: 10,
      culturalIntro: JSON.stringify({
        title: '¡Felicidades! Você Conhece o México',
        content: 'Parabéns! Você completou sua jornada inicial pelo México. Agora você conhece a cultura, tradições e expressões básicas deste país maravilhoso.',
        vocabulary: [
          {
            spanish: '¡Felicidades!',
            portuguese: 'Parabéns!',
            pronunciation: 'fe-li-si-dá-des',
            culturalNote: 'Celebração é parte da cultura mexicana'
          },
          {
            spanish: 'México lindo',
            portuguese: 'México lindo',
            pronunciation: 'mé-ji-ko lín-do',
            culturalNote: 'Expressão de carinho pelo país'
          }
        ],
        culturalNotes: [
          'Você aprendeu sobre família, comida, música e tradições',
          'Agora pode se comunicar básicamente em espanhol mexicano',
          'Está pronto para explorar outros países latinos!'
        ]
      }),
      questions: JSON.stringify([
        {
          id: 'q1',
          type: 'cultural-context',
          question: 'Qual tradição mexicana é Patrimônio da Humanidade?',
          options: ['Lucha Libre', 'Día de los Muertos', 'Tacos', 'Sombreros'],
          correctAnswer: 'Día de los Muertos',
          explanation: 'O Día de los Muertos foi reconhecido pela UNESCO em 2008.',
          culturalContext: 'Uma tradição que mostra a visão única mexicana sobre vida e morte!'
        },
        {
          id: 'q2',
          type: 'multiple-choice',
          question: 'Como você diria "Viva o México!" em espanhol?',
          options: ['¡Hola México!', '¡Viva México!', '¡Buenos México!', '¡Órale México!'],
          correctAnswer: '¡Viva México!',
          explanation: 'Grito tradicional de orgulho e celebração nacional.',
          culturalContext: 'Usado especialmente no Dia da Independência (16 de setembro)!'
        }
      ]),
      isPublished: true
    }
  ]

  // Inserir todas as lições
  for (const lesson of lessons) {
    await prisma.lesson.upsert({
      where: { id: lesson.id },
      update: {},
      create: lesson
    })
    console.log(`✅ Lição criada: ${lesson.title}`)
  }

  console.log('🎉 Todas as lições do México foram criadas!')
  console.log(`📊 Total: ${lessons.length} lições adicionais`)
  console.log('🇲🇽 México agora tem um curso completo para iniciantes!')
}

addMexicoLessons()
  .then(async () => {
    await prisma.$disconnect()
    console.log('✅ Processo concluído!')
  })
  .catch(async (e) => {
    console.error('❌ Erro:', e)
    await prisma.$disconnect()
    process.exit(1)
  })
