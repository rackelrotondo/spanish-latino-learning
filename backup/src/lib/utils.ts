import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date)
}

export function generateAvatar(name: string): string {
  const colors = ['bg-latino-red', 'bg-latino-orange', 'bg-latino-yellow', 'bg-latino-green', 'bg-latino-blue', 'bg-latino-purple']
  const colorIndex = name.charCodeAt(0) % colors.length
  return colors[colorIndex]
}