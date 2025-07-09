/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nova paleta neutra e quente
        'bege': '#cd9f83',
        'marrom': '#b0623f', 
        'azul': '#274f57',
        'verde': '#859e82',
        
        // Variações
        'bege-claro': '#e8d5c4',
        'bege-escuro': '#a67c5a',
        'marrom-claro': '#d4956f',
        'marrom-escuro': '#8b4a2f',
        'azul-medio': '#3a6b75',
        'azul-claro': '#4a7d87',
        'verde-claro': '#a4b5a1',
        'verde-escuro': '#6b7d68',
      },
      animation: {
        'bounce-gentle': 'bounceGentle 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'sol-pulse': 'solPulse 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-gentle': 'pulseGentle 2s ease-in-out infinite',
      },
      keyframes: {
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        solPulse: {
          '0%, 100%': { 
            opacity: '1', 
            transform: 'scale(1)',
          },
          '50%': { 
            opacity: '0.9', 
            transform: 'scale(1.05)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        }
      },
      fontSize: {
        '12xl': '12rem',
        '16xl': '16rem',
        '20xl': '20rem',
      },
      boxShadow: {
        'warm': '0 8px 25px rgba(205, 159, 131, 0.3)',
        'warm-lg': '0 10px 30px rgba(205, 159, 131, 0.4)',
      }
    },
  },
  plugins: [],
}
