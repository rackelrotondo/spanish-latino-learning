export default function CTA() {
  return (
    <section className="py-20 section-quaternary relative overflow-hidden">
      {/* Elementos Decorativos */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 left-10 text-8xl animate-sol-pulse text-azul">☀️</div>
        <div className="absolute top-20 right-20 text-6xl animate-float text-marrom">🚀</div>
        <div className="absolute bottom-20 left-20 text-7xl animate-sol-pulse text-verde" style={{animationDelay: '1s'}}>⭐</div>
        <div className="absolute bottom-10 right-10 text-5xl animate-float text-azul" style={{animationDelay: '2s'}}>🏆</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge de Urgência */}
          <div className="inline-flex items-center bg-azul/20 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-azul/50">
            <span className="text-azul mr-2 animate-sol-pulse">☀️</span>
            <span className="text-azul font-medium">Acesso Exclusivo ao Laboratório</span>
          </div>

          {/* Título Principal */}
          <h2 className="text-4xl md:text-6xl font-bold text-azul mb-6 text-shadow-warm">
            Desperte Seu Potencial no
            <br />
            <span className="accent-marrom">AyvuLab</span>
          </h2>

          {/* Sol de Mayo Central */}
          <div className="flex justify-center mb-8">
            <span className="text-12xl animate-sol-pulse">☀️</span>
          </div>

          {/* Descrição */}
          <p className="text-xl md:text-2xl text-azul/90 mb-8 leading-relaxed">
            A <span className="accent-marrom font-semibold">sabedoria ancestral</span> está esperando por você! 
            Junte-se aos exploradores que já descobriram o poder do 
            <span className="accent-marrom font-semibold"> AyvuLab</span>.
          </p>

          {/* Benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-azul/30 text-center">
              <div className="text-4xl mb-3 animate-sol-pulse">☀️</div>
              <span className="text-azul font-medium">7 dias de acesso completo</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-azul/30 text-center">
              <div className="text-4xl mb-3">🔬</div>
              <span className="text-azul font-medium">Experimentos personalizados</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-azul/30 text-center">
              <div className="text-4xl mb-3">🧮</div>
              <span className="text-azul font-medium">Resultados comprovados</span>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-marrom text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-marrom/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
              ☀️ Entrar no AyvuLab
            </button>
            <button className="border-2 border-marrom text-marrom px-10 py-5 rounded-full text-xl font-semibold hover:bg-marrom hover:text-white transition-all duration-300">
              🌅 Falar com Especialista
            </button>
          </div>

          {/* Prova Social */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 max-w-2xl mx-auto border border-azul/50">
            <div className="flex justify-center mb-4">
              <span className="text-4xl animate-sol-pulse">☀️</span>
            </div>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-bege rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-marrom rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-verde rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-azul rounded-full border-2 border-white"></div>
              </div>
              <div className="flex text-bege text-2xl">
                <span className="animate-sol-pulse">⭐</span>
                <span className="animate-sol-pulse" style={{animationDelay: '0.2s'}}>⭐</span>
                <span className="animate-sol-pulse" style={{animationDelay: '0.4s'}}>⭐</span>
                <span className="animate-sol-pulse" style={{animationDelay: '0.6s'}}>⭐</span>
                <span className="animate-sol-pulse" style={{animationDelay: '0.8s'}}>⭐</span>
              </div>
            </div>
            <p className="text-azul/90 text-lg">
              <span className="font-bold accent-marrom">+10.000 exploradores</span> já descobriram o AyvuLab
            </p>
            <p className="text-azul/80 mt-2">
              "O AyvuLab transformou minha conexão com o espanhol!" - Ana Cultura
            </p>
          </div>

          {/* Garantia */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center text-azul/90 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-azul/30">
              <span className="text-2xl mr-2 animate-sol-pulse">🛡️</span>
              <span>Garantia de 30 dias - Satisfação total</span>
              <span className="text-2xl ml-2 animate-sol-pulse">☀️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
