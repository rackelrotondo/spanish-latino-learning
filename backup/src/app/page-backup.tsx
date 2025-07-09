'use client'
import { motion } from 'framer-motion'
import { MapPin, Users, Trophy, Zap, Star, ArrowRight, Play } from 'lucide-react'
import Header from '@/components/layout/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function Home() {
  const features = [
    {
      icon: MapPin,
      title: "Mapa Interativo",
      description: "Explore 20 países latinos com suas culturas únicas",
      emoji: "🗺️",
      color: "from-latino-red to-latino-orange"
    },
    {
      icon: Users,
      title: "IA Conversacional",
      description: "Pratique com avatares nativos de cada região",
      emoji: "🤖",
      color: "from-latino-blue to-latino-purple"
    },
    {
      icon: Trophy,
      title: "Gamificação Total",
      description: "Conquiste badges, níveis e desbloqueie países",
      emoji: "🏆",
      color: "from-latino-yellow to-latino-orange"
    },
    {
      icon: Zap,
      title: "Microlearning",
      description: "Apenas 5-10 minutos por dia para fluência",
      emoji: "⚡",
      color: "from-latino-green to-latino-blue"
    }
  ]

  const countries = [
    { name: "México", flag: "🇲🇽", users: "2.1k", color: "bg-red-500" },
    { name: "Argentina", flag: "🇦🇷", users: "1.8k", color: "bg-blue-500" },
    { name: "Colômbia", flag: "🇨🇴", users: "1.5k", color: "bg-yellow-500" },
    { name: "Peru", flag: "🇵🇪", users: "1.2k", color: "bg-red-600" },
    { name: "Chile", flag: "🇨🇱", users: "980", color: "bg-blue-600" },
    { name: "Equador", flag: "🇪🇨", users: "750", color: "bg-yellow-600" }
  ]

  return (
    <div className="min-h-screen gradient-latino">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium">
                🎉 Mais de 10.000 estudantes ativos
              </span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-display font-bold mb-6 text-shadow">
              Aprenda Espanhol
              <br />
              <span className="text-latino-yellow animate-pulse">da América Latina</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90">
              Descubra a riqueza cultural através do idioma. Método revolucionário com IA, 
              gamificação e imersão cultural que te leva da curiosidade à fluência.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="primary" size="lg" className="group">
                🚀 Começar Jornada Gratuita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="ghost" size="lg" className="group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Ver Demo (2 min)
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { number: "10k+", label: "Estudantes" },
                { number: "20", label: "Países" },
                { number: "500+", label: "Lições" },
                { number: "4.9★", label: "Avaliação" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-latino-yellow">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Por que escolher o LatinoLearn?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Não é apenas um curso, é uma jornada cultural revolucionária
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card className="h-full hover:bg-white/20 transition-all duration-300 group-hover:shadow-xl">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                    <span className="text-2xl">{feature.emoji}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Countries Preview */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              🌎 Explore a América Latina
            </h2>
            <p className="text-lg text-white/80">
              Cada país, uma nova aventura cultural
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <Card className="text-center hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                    {country.flag}
                  </div>
                  <h3 className="font-semibold text-white mb-1">{country.name}</h3>
                  <p className="text-sm text-white/70">{country.users} estudantes</p>
                  <div className={`w-full h-1 ${country.color} rounded-full mt-2 opacity-70 group-hover:opacity-100 transition-opacity`}></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="text-center max-w-4xl mx-auto hover:bg-white/20 transition-all duration-300">
              <div className="text-6xl mb-6">🎯</div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Sua aventura latina começa agora!
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Junte-se a milhares de estudantes que já descobriram o prazer de aprender 
                espanhol de forma divertida e cultural.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" className="group">
                  🎯 Começar Grátis Agora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="secondary" size="lg">
                  📱 Baixar App
                </Button>
              </div>

              <div className="mt-8 flex justify-center items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-latino-yellow fill-current" />
                ))}
                <span className="ml-2 text-white/80">4.9/5 - Mais de 1.000 avaliações</span>
              </div>
            </Card>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-md border-t border-white/20">
        <div className="container mx-auto px-4 py-8 text-center text-white/80">
          <p className="mb-2">© 2024 LatinoLearn - Desenvolvido com ❤️ para a comunidade latina</p>
          <p className="text-sm">Criado por George - Analista de Sistemas apaixonado por educação</p>
        </div>
      </footer>
    </div>
  )
}