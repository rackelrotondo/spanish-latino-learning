import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'solar' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sol-dourado focus:ring-offset-2 focus:ring-offset-transparent'
    
    const variants = {
      primary: 'bg-gradient-sol text-white hover:shadow-sol transform hover:scale-105 border-2 border-transparent hover:border-sol-dourado',
      secondary: 'border-2 border-white text-white hover:bg-white/10 hover:border-sol-dourado hover:shadow-sol',
      solar: 'bg-sol-dourado text-black hover:bg-sol-amarelo transform hover:scale-105 shadow-sol',
      outline: 'border-2 border-sol-dourado text-sol-dourado hover:bg-sol-dourado hover:text-black'
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    }

    return (
      <button
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
