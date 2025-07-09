const { PrismaClient } = require('@prisma/client')

async function testConnection() {
  const prisma = new PrismaClient()
  
  try {
    console.log('🔄 Testando conexão...')
    await prisma.$connect()
    console.log('✅ Conexão estabelecida!')
    
    // Testar dados
    const countries = await prisma.country.findMany()
    console.log('🌎 Países encontrados:', countries.length)
    
    const lessons = await prisma.lesson.findMany()
    console.log('📚 Lições encontradas:', lessons.length)
    
    const badges = await prisma.badge.findMany()
    console.log('🏆 Badges criados:', badges.length)
    
  } catch (error) {
    console.error('❌ Erro:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testConnection()
