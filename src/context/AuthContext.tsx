'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: string
  name: string
  email: string
  avatar?: string
  joinedAt: string
  totalXP: number
  level: number
  currentStreak: number
  badges: string[]
  unlockedCountries: string[]
  completedLessons: string[]
  preferences: {
    preferredDifficulty: 'beginner' | 'intermediate' | 'advanced'
    studyGoal: number // minutes per day
    notifications: boolean
  }
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  updateUser: (userData: Partial<User>) => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Carregar usuário do localStorage na inicialização
    const savedUser = localStorage.getItem('ayvulab_user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    
    // Simular API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock login - em produção, usar API real
    if (email && password) {
      const mockUser: User = {
        id: '1',
        name: email.split('@')[0],
        email,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        joinedAt: new Date().toISOString(),
        totalXP: 1250,
        level: 5,
        currentStreak: 7,
        badges: ['primeira-licao', 'explorador', 'dedicado'],
        unlockedCountries: ['mx', 'ar', 'es'],
        completedLessons: ['mx-basic-1', 'mx-basic-2', 'ar-tango-1'],
        preferences: {
          preferredDifficulty: 'intermediate',
          studyGoal: 30,
          notifications: true
        }
      }
      
      setUser(mockUser)
      localStorage.setItem('ayvulab_user', JSON.stringify(mockUser))
      setIsLoading(false)
      return true
    }
    
    setIsLoading(false)
    return false
  }

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    
    // Simular API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      joinedAt: new Date().toISOString(),
      totalXP: 0,
      level: 1,
      currentStreak: 0,
      badges: ['bem-vindo'],
      unlockedCountries: ['mx'], // Começar com México desbloqueado
      completedLessons: [],
      preferences: {
        preferredDifficulty: 'beginner',
        studyGoal: 15,
        notifications: true
      }
    }
    
    setUser(newUser)
    localStorage.setItem('ayvulab_user', JSON.stringify(newUser))
    setIsLoading(false)
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('ayvulab_user')
  }

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData }
      setUser(updatedUser)
      localStorage.setItem('ayvulab_user', JSON.stringify(updatedUser))
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      updateUser,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
