'use client'

import { useEffect } from 'react'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import BadgeDisplay from '@/components/badges/BadgeDisplay'

export default function BadgesPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/')
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-azul flex items-center justify-center">
        <div className="text-center">
          <span className="text-6xl mb-4 block animate-sol-pulse">🏆</span>
          <div className="text-white text-xl">Carregando badges...</div>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-azul">
      <div className="container mx-auto">
        <div className="py-6">
          <button 
            onClick={() => router.back()}
            className="text-white/80 hover:text-white flex items-center space-x-2 mb-6"
          >
            <span>←</span>
            <span>Voltar</span>
          </button>
        </div>
        <BadgeDisplay />
      </div>
    </div>
  )
}
