'use client'

import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'

interface LoginFormProps {
  onSuccess?: () => void
  onSwitchToRegister?: () => void
}

export default function LoginForm({ onSuccess, onSwitchToRegister }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login, isLoading } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Por favor, preencha todos os campos')
      return
    }

    const success = await login(email, password)
    if (success) {
      onSuccess?.()
    } else {
      setError('Email ou senha incorretos')
    }
  }

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-bege/30 max-w-md mx-auto">
      <div className="text-center mb-6">
        <span className="text-4xl mb-4 block">☀️</span>
        <h2 className="text-2xl font-bold text-white mb-2">
          Entrar no <span className="accent-bege">AyvuLab</span>
        </h2>
        <p className="text-white/80">Continue sua jornada de aprendizado</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-white/90 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-bege/30 text-white placeholder-white/60 focus:outline-none focus:border-bege backdrop-blur-md"
            placeholder="seu-email@exemplo.com"
            disabled={isLoading}
          />
        </div>

        <div>
          <label className="block text-white/90 text-sm font-medium mb-2">
            Senha
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-bege/30 text-white placeholder-white/60 focus:outline-none focus:border-bege backdrop-blur-md"
            placeholder="Sua senha"
            disabled={isLoading}
          />
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-200 text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full btn-primary py-3 disabled:opacity-50"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Entrando...
            </div>
          ) : (
            '☀️ Entrar no Laboratório'
          )}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-white/80 text-sm">
          Ainda não tem conta?{' '}
          <button
            onClick={onSwitchToRegister}
            className="accent-bege hover:underline font-medium"
          >
            Criar conta grátis
          </button>
        </p>
      </div>

      {/* Login demo */}
      <div className="mt-4 p-3 bg-bege/10 rounded-lg border border-bege/20">
        <p className="text-white/70 text-xs text-center">
          <strong>Demo:</strong> Use qualquer email e senha para testar
        </p>
      </div>
    </div>
  )
}
