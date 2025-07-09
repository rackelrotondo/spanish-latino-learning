'use client'
import { useState } from 'react'
import { Globe, Menu, X, User, BookOpen, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Início', href: '/', icon: Globe },
    { name: 'Aprender', href: '/learn', icon: BookOpen },
    { name: 'Ranking', href: '/ranking', icon: Trophy },
    { name: 'Perfil', href: '/profile', icon: User },
  ]

  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Globe className="h-8 w-8 text-white animate-bounce-gentle" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-latino-yellow rounded-full animate-ping"></div>
            </div>
            <h1 className="text-2xl font-display font-bold text-white text-shadow">
              Latino<span className="text-latino-yellow">Learn</span>
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-white hover:text-latino-yellow transition-colors duration-200 group"
              >
                <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm">
              🚀 Começar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <nav className="space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-white hover:text-latino-yellow transition-colors p-2 rounded-lg hover:bg-white/10"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="pt-3">
                <Button variant="primary" size="sm" className="w-full">
                  🚀 Começar Agora
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}