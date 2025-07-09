import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { code: string } }
) {
  try {
    const { code } = params

    const country = await prisma.country.findUnique({
      where: { code: code.toUpperCase() },
      include: {
        lessons: {
          where: { isPublished: true },
          orderBy: { orderIndex: 'asc' }
        }
      }
    })

    if (!country) {
      return NextResponse.json(
        { error: 'País não encontrado' },
        { status: 404 }
      )
    }

    // Parse JSON fields
    const culturalData = country.culturalData ? JSON.parse(country.culturalData) : null
    const languageData = country.languageData ? JSON.parse(country.languageData) : null

    // Processar lições
    const processedLessons = country.lessons.map(lesson => ({
      ...lesson,
      isCompleted: false, // TODO: buscar do progresso do usuário
      isLocked: false, // TODO: implementar lógica de desbloqueio
      culturalIntro: lesson.culturalIntro ? JSON.parse(lesson.culturalIntro) : null,
      questions: lesson.questions ? JSON.parse(lesson.questions) : null
    }))

    const response = {
      ...country,
      culturalData,
      languageData,
      lessons: processedLessons
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Erro ao buscar país:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
