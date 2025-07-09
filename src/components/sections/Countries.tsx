import { countries } from '@/lib/utils'
import Flag from '@/components/ui/Flag'

export default function Countries() {
  return (
    <section id="paises" className="py-20 section-tertiary relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-8xl animate-float text-bege">🗺️</div>
        <div className="absolute top-20 right-20 text-6xl animate-float text-marrom" style={{animationDelay: '1s'}}>🌎</div>
        <div className="absolute bottom-20 left-20 text-7xl animate-float text-azul" style={{animationDelay: '2s'}}>🏛️</div>
        <div className="absolute bottom-10 right-10 text-5xl animate-float text-bege" style={{animationDelay: '0.5s'}}>🎭</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <span className="text-6xl animate-sol-pulse">☀️</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow">
            Países Iluminados pelo <span className="accent-bege">Conhecimento</span>
          </h2>
          <p className="text-xl text-white/95 max-w-3xl mx-auto">
            Cada país brilha com sua própria essência cultural. Descubra a diversidade 
            da América Latina através da sabedoria do AyvuLab.
          </p>
        </div>

        {/* Grid de Países */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {countries.map((country, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl border border-bege/30"
              style={{
                backgroundColor: getCountryColor(index),
              }}
            >
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              
              {/* Sol de Mayo pequeno no canto */}
              <div className="absolute top-2 right-2 text-2xl animate-sol-pulse opacity-60 group-hover:opacity-100 transition-opacity">
                ☀️
              </div>
              
              {/* Conteúdo */}
              <div className="relative z-10">
                {/* Bandeira como Imagem */}
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Flag 
                    src={country.flag}
                    alt={country.name}
                    size="xl"
                    className="shadow-lg border-2 border-white/20 group-hover:border-bege/50"
                  />
                </div>
                
                {/* Nome do País */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-bege transition-colors text-shadow text-center">
                  {country.name}
                </h3>
                
                {/* Descrição */}
                <p className="text-white/95 leading-relaxed mb-4 text-shadow text-center text-sm">
                  {country.description}
                </p>

                {/* Especialidades */}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {country.specialties.map((specialty, idx) => (
                    <span 
                      key={idx}
                      className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white font-medium border border-bege/30"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Badge de Explorar */}
                <div className="text-center">
                  <div className="inline-flex items-center bg-bege/20 backdrop-blur-sm rounded-full px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-bege/50">
                    <span className="text-white text-sm font-medium">
                      ☀️ Explorar {country.name} →
                    </span>
                  </div>
                </div>
              </div>

              {/* Efeito de brilho sutil */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white transform -skew-x-12 -translate-x-full group-hover:translate-x-full duration-1000"></div>
            </div>
          ))}
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="card-glass text-center border-bege/30">
            <div className="text-4xl mb-4 animate-sol-pulse">☀️</div>
            <div className="text-3xl font-bold accent-bege mb-2">{countries.length}</div>
            <div className="text-white/90">Países Conectados</div>
          </div>
          <div className="card-glass text-center border-bege/30">
            <div className="text-4xl mb-4">🗣️</div>
            <div className="text-3xl font-bold accent-bege mb-2">500M+</div>
            <div className="text-white/90">Vozes Unidas</div>
          </div>
          <div className="card-glass text-center border-bege/30">
            <div className="text-4xl mb-4">🎭</div>
            <div className="text-3xl font-bold accent-bege mb-2">∞</div>
            <div className="text-white/90">Culturas Vivas</div>
          </div>
        </div>

        {/* Mapa Interativo */}
        <div className="card-glass max-w-4xl mx-auto text-center border-bege/50">
          <div className="flex justify-center mb-6">
            <span className="text-6xl animate-sol-pulse">🗺️</span>
            <span className="text-6xl mx-4">☀️</span>
            <span className="text-6xl animate-sol-pulse">🗺️</span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4 text-shadow">
            Mapa Cultural Interativo em Breve
          </h3>
          <p className="text-white/95 mb-6 text-lg">
            Explore cada país através de nosso mapa interativo com culturas, 
            dialetos e tradições da América Latina!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              ☀️ Ser Notificado
            </button>
            <button className="btn-secondary">
              🗺️ Preview do Mapa
            </button>
          </div>
          
          {/* Preview das bandeiras */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {countries.slice(0, 6).map((country, index) => (
              <Flag 
                key={index}
                src={country.flag}
                alt={country.name}
                size="sm"
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Função para alternar cores de fundo dos países
function getCountryColor(index: number): string {
  const colors = [
    '#cd9f83', // bege-quente
    '#b0623f', // marrom-medio  
    '#859e82', // verde-suave
    '#274f57', // azul-escuro
  ]
  return colors[index % colors.length]
}
