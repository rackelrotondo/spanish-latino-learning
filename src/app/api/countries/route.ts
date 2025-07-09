import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const countries = await prisma.country.findMany({
      include: {
        lessons: {
          where: { isPublished: true },
          select: {
            id: true,
            title: true,
            type: true,
            difficulty: true,
            xpReward: true
          },
          orderBy: { orderIndex: 'asc' }
        },
        _count: {
          select: { lessons: true }
        }
      },
      orderBy: { requiredXP: 'asc' }
    })

    return NextResponse.json({ countries })
  } catch (error) {
    console.error('Erro ao buscar países:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
