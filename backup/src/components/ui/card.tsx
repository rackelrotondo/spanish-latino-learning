import * as React from "react"
import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'solid'
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'glass', children, ...props }, ref) => {
    const variants = {
      default: "bg-white border border-gray-200 shadow-sm",
      glass: "bg-white/10 backdrop-blur-md border border-white/20",
      solid: "bg-white shadow-lg border border-gray-100"
    }
    
    return (
      <div
        ref={ref}
        className={cn("rounded-xl p-6 transition-all duration-300", variants[variant], className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Card.displayName = "Card"

export { Card }