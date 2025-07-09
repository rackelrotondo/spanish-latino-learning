export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen section-primary flex items-center justify-center relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 text-6xl animate-float text-bege">🗺️</div>
        <div className="absolute top-40 right-20 text-5xl animate-float text-verde" style={{animationDelay: '1s'}}>🎭</div>
        <div className="absolute bottom-40 left-20 text-4xl animate-float text-marrom" style={{animationDelay: '2s'}}>🎵</div>
        <div className="absolute bottom-20 right-10 text-6xl animate-float text-bege" style={{animationDelay: '0.5s'}}>🏛️</div>
        <div className="absolute top-1/2 left-1/4 text-3xl animate-sol-pulse text-bege" style={{animationDelay: '3s'}}>🧪</div>
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-bege/50">
            <span className="text-bege mr-2 animate-sol-pulse">☀️</span>
            <span className="text-white font-medium">Laboratório de Idiomas da América Latina</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow">
            Bem-vindo ao
            <br />
            <span className="accent-bege text-8xl md:text-9xl">AyvuLab</span>
          </h1>

          {/* Sol de Mayo */}
          <div className="flex justify-center mb-8">
            <span className="text-8xl animate-sol-pulse">☀️</span>
          </div>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed">
            Onde a <span className="accent-bege font-semibold">sabedoria ancestral</span> encontra a ciência moderna. 
            Aprenda espanhol com <span className="accent-bege font-semibold">IA</span>, 
            <span className="accent-bege font-semibold"> metodologia</span> e 
            <span className="accent-bege font-semibold"> imersão cultural</span>.
          </p>

          {/* Explicação do Nome */}
          <div className="card-glass max-w-2xl mx-auto mb-8 border-bege/50">
            <div className="flex items-center justify-center mb-4">
              <span className="text-4xl animate-sol-pulse mr-3">☀️</span>
              <span className="text-4xl animate-sol-pulse ml-3">☀️</span>
            </div>
            <p className="text-white/95 text-lg">
              <span className="accent-bege font-semibold">"Ayvu"</span> significa 
              <span className="accent-bege font-semibold"> "linguagem"</span> em guarani.
              <br />
              O <span className="accent-bege font-semibold">Sol de Mayo</span> representa a 
              <span className="accent-bege font-semibold"> luz do conhecimento</span> que guia sua jornada!
            </p>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn-primary text-lg px-8 py-4">
              ☀️ Iniciar Jornada
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              �� Ver o Laboratório
            </button>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="card-glass text-center border-bege/30">
              <div className="text-3xl font-bold accent-bege mb-2">500M+</div>
              <div className="text-white/90">Falantes Conectados</div>
            </div>
            <div className="card-glass text-center border-bege/30">
              <div className="text-3xl font-bold accent-bege mb-2">21</div>
              <div className="text-white/90">Países Explorados</div>
            </div>
            <div className="card-glass text-center border-bege/30">
              <div className="text-3xl font-bold accent-bege mb-2">95%</div>
              <div className="text-white/90">Taxa de Sucesso</div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-bege/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-bege rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
