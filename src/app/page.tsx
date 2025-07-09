'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/context/AuthContext'
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Countries from '@/components/sections/Countries'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'
import LoginForm from '@/components/auth/LoginForm'
import RegisterForm from '@/components/auth/RegisterForm'
import UserDashboard from '@/components/dashboard/UserDashboard'

export default function Home() {
  const { user, isLoading } = useAuth()
  const [showAuth, setShowAuth] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')

  // Se o usuário está logado, mostrar dashboard
  if (user) {
    return <UserDashboard />
  }

  // Mostrar loading
  if (isLoading) {
    return (
      <div className="min-h-screen bg-azul flex items-center justify-center">
        <div className="text-center">
          <span className="text-6xl mb-4 block animate-sol-pulse">☀️</span>
          <div className="text-white text-xl">Carregando AyvuLab...</div>
        </div>
      </div>
    )
  }

  // Modal de Autenticação
  const AuthModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-md">
        {authMode === 'login' ? (
          <LoginForm 
            onSuccess={() => setShowAuth(false)}
            onSwitchToRegister={() => setAuthMode('register')}
          />
        ) : (
          <RegisterForm 
            onSuccess={() => setShowAuth(false)}
            onSwitchToLogin={() => setAuthMode('login')}
          />
        )}
        
        <div className="text-center mt-4">
          <button
            onClick={() => setShowAuth(false)}
            className="text-white/70 hover:text-white text-sm"
          >
            Continuar sem conta
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <main className="min-h-screen">
      <Header />
      
      <div id="inicio">
        <Hero />
      </div>
      
      <div id="recursos">
        <Features />
      </div>
      
      <div id="paises">
        <Countries />
      </div>
      
      <div id="sobre">
        <CTA />
      </div>
      
      <Footer />
      
      {/* Botão Flutuante de Login */}
      <button
        onClick={() => {
          setAuthMode('login')
          setShowAuth(true)
        }}
        className="fixed bottom-6 right-6 bg-bege text-azul px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-bege-escuro transition-all duration-300 z-40 flex items-center space-x-2"
      >
        <span>☀️</span>
        <span>Entrar</span>
      </button>
      
      {/* Modal de Autenticação */}
      {showAuth && <AuthModal />}
    </main>
  )
}
