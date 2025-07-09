'use client'

import { useEffect } from 'react'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import CountryPage from '@/components/countries/CountryPage'

interface CountryPageProps {
  params: {
    code: string
  }
}

export default function CountryPageRoute({ params }: CountryPageProps) {
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
          <span className="text-6xl mb-4 block animate-sol-pulse">🏛️</span>
          <div className="text-white text-xl">Carregando país...</div>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return <CountryPage countryCode={params.code} />
}
