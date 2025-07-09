import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'solid' | 'solar' | 'gradient'
  children: React.ReactNode
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'glass', children, ...props }, ref) => {
    const baseClasses = 'rounded-xl p-6 transition-all duration-300'
    
    const variants = {
      glass: 'bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-sol-dourado/50',
      solid: 'bg-white shadow-lg hover:shadow-xl',
      solar: 'bg-gradient-sol text-white shadow-sol hover:shadow-sol-lg transform hover:scale-105',
      gradient: 'bg-gradient-to-br from-sol-dourado/20 via-sol-amarelo/20 to-sol-laranja/20 border border-sol-dourado/30 hover:border-sol-dourado backdrop-blur-md'
    }

    return (
      <div
        className={cn(
          baseClasses,
          variants[variant],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card
