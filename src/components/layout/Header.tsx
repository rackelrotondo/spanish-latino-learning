'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logout } = useAuth()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 header-ayvulab">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo com Sol de Mayo */}
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-3xl animate-sol-pulse">☀️</span>
            <h1 className="text-2xl font-bold text-white">
              Ayvu<span className="accent-bege">Lab</span>
            </h1>
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {user ? (
              // Menu para usuário logado
              <>
                <Link href="/map" className="text-white hover:text-bege transition-colors font-medium">
                  🗺️ Mapa
                </Link>
                <Link href="/badges" className="text-white hover:text-bege transition-colors font-medium">
                  🏆 Badges
                </Link>
                <div className="flex items-center space-x-2 text-white/90">
                  <span className="text-sm">Nível {user.level}</span>
                  <span className="text-bege">•</span>
                  <span className="text-sm">{user.totalXP} XP</span>
                </div>
                <button onClick={logout} className="btn-secondary text-sm">
                  Sair
                </button>
              </>
            ) : (
              // Menu para visitante
              <>
                <a href="#inicio" className="text-white hover:text-bege transition-colors font-medium">
                  Início
                </a>
                <a href="#recursos" className="text-white hover:text-bege transition-colors font-medium">
                  Recursos
                </a>
                <a href="#paises" className="text-white hover:text-bege transition-colors font-medium">
                  Países
                </a>
                <a href="#sobre" className="text-white hover:text-bege transition-colors font-medium">
                  Sobre
                </a>
              </>
            )}
          </nav>

          {/* Menu Mobile Button */}
          <button 
            className="md:hidden text-white hover:text-bege transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-bege/30">
            {user ? (
              <>
                <Link href="/map" className="block text-white hover:text-bege transition-colors font-medium">
                  🗺️ Mapa
                </Link>
                <Link href="/badges" className="block text-white hover:text-bege transition-colors font-medium">
                  🏆 Badges
                </Link>
                <div className="text-white/90 text-sm">
                  Nível {user.level} • {user.totalXP} XP
                </div>
                <button onClick={logout} className="btn-secondary w-full">
                  Sair
                </button>
              </>
            ) : (
              <>
                <a href="#inicio" className="block text-white hover:text-bege transition-colors font-medium">
                  Início
                </a>
                <a href="#recursos" className="block text-white hover:text-bege transition-colors font-medium">
                  Recursos
                </a>
                <a href="#paises" className="block text-white hover:text-bege transition-colors font-medium">
                  Países
                </a>
                <a href="#sobre" className="block text-white hover:text-bege transition-colors font-medium">
                  Sobre
                </a>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  )
}
