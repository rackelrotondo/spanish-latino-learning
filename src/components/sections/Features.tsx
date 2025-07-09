import { features } from '@/lib/utils'

export default function Features() {
  return (
    <section id="recursos" className="py-20 section-secondary">
      <div className="container mx-auto px-4">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <span className="text-6xl animate-sol-pulse">☀️</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow">
            Por que escolher o <span className="accent-bege">AyvuLab</span>?
          </h2>
          <p className="text-xl text-white/95 max-w-3xl mx-auto">
            Nosso laboratório combina <span className="accent-bege font-semibold">tradição</span> 
            com inovação para criar uma experiência de aprendizado autêntica e eficaz.
          </p>
        </div>

        {/* Grid de Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-glass group hover:scale-105 transition-all duration-300 cursor-pointer border-bege/30"
            >
              {/* Ícone */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              {/* Título */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-bege transition-colors">
                {feature.title}
              </h3>
              
              {/* Descrição */}
              <p className="text-white/95 leading-relaxed">
                {feature.description}
              </p>

              {/* Indicador de hover */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="accent-bege text-sm font-medium">
                  ☀️ Experimentar →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-glass max-w-2xl mx-auto border-bege/50">
            <div className="flex justify-center mb-4">
              <span className="text-4xl animate-sol-pulse">☀️</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para descobrir o <span className="accent-bege">AyvuLab</span>?
            </h3>
            <p className="text-white/95 mb-6">
              Junte-se aos exploradores que já descobriram a sabedoria do aprendizado no AyvuLab.
            </p>
            <button className="btn-primary">
              ☀️ Entrar no Laboratório
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
