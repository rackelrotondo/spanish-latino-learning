import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/context/AuthContext'
import { GameProvider } from '@/context/GameContext'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'AyvuLab - Laboratório de Espanhol Latino-Americano',
  description: 'Aprenda espanhol através da rica cultura da América Latina com IA, gamificação e imersão cultural.',
  keywords: 'espanhol, américa latina, aprendizado, cultura, gamificação, IA',
  authors: [{ name: 'AyvuLab Team' }],
  creator: 'AyvuLab',
  publisher: 'AyvuLab',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://ayvulab.com',
    title: 'AyvuLab - Laboratório de Espanhol Latino-Americano',
    description: 'Aprenda espanhol através da rica cultura da América Latina com IA, gamificação e imersão cultural.',
    siteName: 'AyvuLab',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AyvuLab - Laboratório de Espanhol Latino-Americano',
    description: 'Aprenda espanhol através da rica cultura da América Latina com IA, gamificação e imersão cultural.',
    creator: '@ayvulab',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <AuthProvider>
          <GameProvider>
            {children}
          </GameProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
