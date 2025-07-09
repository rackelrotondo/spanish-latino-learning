'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 header-ayvulab">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo com Sol de Mayo */}
          <div className="flex items-center space-x-3">
            <span className="text-3xl animate-sol-pulse">☀️</span>
            <h1 className="text-2xl font-bold text-white">
              Ayvu<span className="accent-bege">Lab</span>
            </h1>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
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
            <button className="btn-primary">
              ☀️ Começar Grátis
            </button>
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
            <button className="btn-primary w-full">
              ☀️ Começar Grátis
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
