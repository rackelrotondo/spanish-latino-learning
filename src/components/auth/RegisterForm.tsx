'use client'

import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'

interface RegisterFormProps {
  onSuccess?: () => void
  onSwitchToLogin?: () => void
}

export default function RegisterForm({ onSuccess, onSwitchToLogin }: RegisterFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const { register, isLoading } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!name || !email || !password || !confirmPassword) {
      setError('Por favor, preencha todos os campos')
      return
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem')
      return
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres')
      return
    }

    const success = await register(name, email, password)
    if (success) {
      onSuccess?.()
    } else {
      setError('Erro ao criar conta. Tente novamente.')
    }
  }

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-bege/30 max-w-md mx-auto">
      <div className="text-center mb-6">
        <span className="text-4xl mb-4 block">🧪</span>
        <h2 className="text-2xl font-bold text-white mb-2">
          Junte-se ao <span className="accent-bege">AyvuLab</span>
        </h2>
        <p className="text-white/80">Comece sua jornada de descoberta cultural</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-white/90 text-sm font-medium mb-2">
            Nome Completo
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-bege/30 text-white placeholder-white/60 focus:outline-none focus:border-bege backdrop-blur-md"
            placeholder="Seu nome"
            disabled={isLoading}
          />
        </div>

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
            placeholder="Mínimo 6 caracteres"
            disabled={isLoading}
          />
        </div>

        <div>
          <label className="block text-white/90 text-sm font-medium mb-2">
            Confirmar Senha
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-bege/30 text-white placeholder-white/60 focus:outline-none focus:border-bege backdrop-blur-md"
            placeholder="Digite a senha novamente"
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
              Criando conta...
            </div>
          ) : (
            '🧪 Criar Conta no Laboratório'
          )}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-white/80 text-sm">
          Já tem uma conta?{' '}
          <button
            onClick={onSwitchToLogin}
            className="accent-bege hover:underline font-medium"
          >
            Fazer login
          </button>
        </p>
      </div>
    </div>
  )
}
