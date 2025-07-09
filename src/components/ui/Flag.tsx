'use client'

import Image from 'next/image'
import { useState } from 'react'

interface FlagProps {
  src: string
  alt: string
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function Flag({ src, alt, className = '', size = 'lg' }: FlagProps) {
  const [imageError, setImageError] = useState(false)
  
  const sizeClasses = {
    sm: 'w-12 h-8',
    md: 'w-16 h-12', 
    lg: 'w-24 h-16',
    xl: 'w-32 h-20'
  }

  // Fallback para emoji se a imagem não carregar
  const countryEmojis: { [key: string]: string } = {
    'México': '🇲��',
    'Argentina': '🇦🇷',
    'Colômbia': '🇨🇴', 
    'Peru': '🇵🇪',
    'Chile': '🇨🇱',
    'Espanha': '🇪🇸',
    'Venezuela': '🇻🇪',
    'Equador': '🇪🇨',
    'Bolívia': '🇧🇴',
    'Uruguai': '🇺🇾',
    'Paraguai': '🇵🇾',
    'Costa Rica': '🇨🇷'
  }

  if (imageError) {
    return (
      <div className={`${sizeClasses[size]} flex items-center justify-center text-4xl ${className}`}>
        {countryEmojis[alt] || '🏳️'}
      </div>
    )
  }

  return (
    <div className={`${sizeClasses[size]} relative overflow-hidden rounded-lg shadow-lg ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover hover:scale-110 transition-transform duration-300"
        onError={() => setImageError(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}
