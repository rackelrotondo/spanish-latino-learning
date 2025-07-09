import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const countries = [
  {
    name: "México",
    flag: "https://flagcdn.com/w320/mx.png",
    flagCode: "mx",
    color: "from-green-500 to-red-500",
    description: "Cultura vibrante, tacos deliciosos e tradições milenares dos maias e astecas",
    accent: "#16a34a",
    specialties: ["Día de los Muertos", "Mariachi", "Culinária Mexicana"]
  },
  {
    name: "Argentina",
    flag: "https://flagcdn.com/w320/ar.png",
    flagCode: "ar", 
    color: "from-blue-400 to-blue-600",
    description: "Terra do tango, futebol apaixonante e os melhores bifes do mundo",
    accent: "#3b82f6",
    specialties: ["Tango", "Futebol", "Parrilla"]
  },
  {
    name: "Colômbia",
    flag: "https://flagcdn.com/w320/co.png",
    flagCode: "co",
    color: "from-yellow-400 to-red-500",
    description: "Diversidade natural incrível, café excepcional e alegria contagiante",
    accent: "#facc15",
    specialties: ["Café", "Salsa", "Biodiversidade"]
  },
  {
    name: "Peru",
    flag: "https://flagcdn.com/w320/pe.png",
    flagCode: "pe",
    color: "from-red-500 to-yellow-400",
    description: "Berço dos incas, gastronomia mundialmente reconhecida e Machu Picchu",
    accent: "#ef4444",
    specialties: ["Machu Picchu", "Ceviche", "História Inca"]
  },
  {
    name: "Chile",
    flag: "https://flagcdn.com/w320/cl.png",
    flagCode: "cl",
    color: "from-blue-500 to-red-500",
    description: "Paisagens únicas do deserto aos glaciares e vinhos excepcionais",
    accent: "#3b82f6",
    specialties: ["Vinhos", "Atacama", "Patagônia"]
  },
  {
    name: "Espanha",
    flag: "https://flagcdn.com/w320/es.png",
    flagCode: "es",
    color: "from-red-500 to-yellow-400",
    description: "Berço do idioma espanhol, rica história e arquitetura deslumbrante",
    accent: "#ef4444",
    specialties: ["Flamenco", "Tapas", "Arte"]
  },
  {
    name: "Venezuela",
    flag: "https://flagcdn.com/w320/ve.png",
    flagCode: "ve",
    color: "from-yellow-400 to-blue-500",
    description: "Salto Angel, petróleo e uma cultura musical vibrante",
    accent: "#facc15",
    specialties: ["Salto Angel", "Música", "Arepas"]
  },
  {
    name: "Equador",
    flag: "https://flagcdn.com/w320/ec.png",
    flagCode: "ec",
    color: "from-yellow-400 to-blue-600",
    description: "Ilhas Galápagos, linha do equador e biodiversidade única",
    accent: "#facc15",
    specialties: ["Galápagos", "Equador", "Biodiversidade"]
  },
  {
    name: "Bolívia",
    flag: "https://flagcdn.com/w320/bo.png",
    flagCode: "bo",
    color: "from-red-500 to-green-500",
    description: "Salar de Uyuni, culturas ancestrais e paisagens de tirar o fôlego",
    accent: "#ef4444",
    specialties: ["Salar de Uyuni", "Altiplano", "Tradições"]
  },
  {
    name: "Uruguai",
    flag: "https://flagcdn.com/w320/uy.png",
    flagCode: "uy",
    color: "from-blue-400 to-white",
    description: "Pequeno país com grande coração, praias lindas e cultura única",
    accent: "#3b82f6",
    specialties: ["Montevidéu", "Praias", "Candombe"]
  },
  {
    name: "Paraguai",
    flag: "https://flagcdn.com/w320/py.png",
    flagCode: "py",
    color: "from-red-500 to-blue-500",
    description: "Coração da América do Sul, guarani vivo e tradições preservadas",
    accent: "#ef4444",
    specialties: ["Guarani", "Artesanato", "Tradições"]
  },
  {
    name: "Costa Rica",
    flag: "https://flagcdn.com/w320/cr.png",
    flagCode: "cr",
    color: "from-blue-500 to-red-500",
    description: "Pura vida, biodiversidade exuberante e ecoturismo sustentável",
    accent: "#3b82f6",
    specialties: ["Pura Vida", "Ecoturismo", "Biodiversidade"]
  }
]

export const features = [
  {
    icon: "🗺️",
    title: "Mapa Interativo",
    description: "Explore países latinos e suas culturas únicas através de um mapa dinâmico e envolvente."
  },
  {
    icon: "🤖",
    title: "IA Conversacional",
    description: "Pratique conversação com nativos virtuais alimentados por IA avançada."
  },
  {
    icon: "🏆",
    title: "Gamificação",
    description: "Conquiste badges, suba de nível e compete com amigos em desafios diários."
  },
  {
    icon: "⚡",
    title: "Microlearning",
    description: "Aprenda em sessões de 5-10 minutos que se encaixam na sua rotina."
  },
  {
    icon: "🎭",
    title: "Imersão Cultural",
    description: "Mergulhe na cultura latina através de histórias, música e tradições."
  },
  {
    icon: "📱",
    title: "Multiplataforma",
    description: "Acesse suas lições em qualquer dispositivo, a qualquer hora."
  }
]
