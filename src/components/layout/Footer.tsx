export default function Footer() {
  return (
    <footer className="bg-azul/95 backdrop-blur-md border-t border-bege/30 py-12 relative overflow-hidden">
      {/* Sol de Mayo de fundo */}
      <div className="absolute top-0 right-0 text-8xl opacity-10">☀️</div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl animate-sol-pulse">☀️</span>
              <h3 className="text-2xl font-bold text-white">
                Ayvu<span className="accent-bege">Lab</span>
              </h3>
            </div>
            <p className="text-white/90 mb-4 max-w-md">
              Onde a <span className="accent-bege font-semibold">sabedoria ancestral</span> encontra 
              a ciência moderna. Descubra a América Latina através do idioma no AyvuLab.
            </p>
            <div className="flex space-x-4">
              <span className="text-2xl hover:scale-110 transition-transform cursor-pointer hover:text-bege">📱</span>
              <span className="text-2xl hover:scale-110 transition-transform cursor-pointer hover:text-bege">💻</span>
              <span className="text-2xl hover:scale-110 transition-transform cursor-pointer hover:text-bege">🎮</span>
              <span className="text-2xl hover:scale-110 transition-transform cursor-pointer hover:text-bege animate-sol-pulse">☀️</span>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <span className="text-bege mr-2">🔗</span>
              Navegação
            </h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-white/90 hover:text-bege transition-colors">🏠 Início</a></li>
              <li><a href="#recursos" className="text-white/90 hover:text-bege transition-colors">⚡ Recursos</a></li>
              <li><a href="#paises" className="text-white/90 hover:text-bege transition-colors">🌎 Países</a></li>
              <li><a href="#sobre" className="text-white/90 hover:text-bege transition-colors">ℹ️ Sobre</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <span className="text-bege mr-2 animate-sol-pulse">☀️</span>
              Contato
            </h4>
            <ul className="space-y-2">
              <li className="text-white/90 hover:text-bege transition-colors cursor-pointer">
                📧 contato@ayvulab.com
              </li>
              <li className="text-white/90 hover:text-bege transition-colors cursor-pointer">
                📱 +55 (11) 99999-9999
              </li>
              <li className="text-white/90 hover:text-bege transition-colors cursor-pointer">
                �� São Paulo, Brasil
              </li>
              <li className="text-white/90 hover:text-bege transition-colors cursor-pointer">
                �� Laboratório Cultural
              </li>
            </ul>
          </div>
        </div>

        {/* Seção de Newsletter */}
        <div className="border-t border-bege/30 mt-8 pt-8">
          <div className="max-w-2xl mx-auto text-center mb-6">
            <h4 className="text-xl font-bold text-white mb-3 flex items-center justify-center">
              <span className="text-bege mr-2 animate-sol-pulse">☀️</span>
              Conecte-se ao AyvuLab
              <span className="text-bege ml-2 animate-sol-pulse">☀️</span>
            </h4>
            <p className="text-white/90 mb-4">
              Seja o primeiro a descobrir novos experimentos e conquistas culturais!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input 
                type="email" 
                placeholder="seu-email@exemplo.com"
                className="px-4 py-2 rounded-full bg-white/10 border border-bege/50 text-white placeholder-white/70 backdrop-blur-md focus:outline-none focus:border-bege"
              />
              <button className="bg-bege text-azul px-6 py-2 rounded-full font-semibold hover:bg-bege/90 transition-all duration-300">
                ☀️ Conectar
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6">
          <div className="flex justify-center mb-4">
            <span className="text-4xl animate-sol-pulse">☀️</span>
          </div>
          <p className="text-white/80">
            © 2024 AyvuLab. Todos os direitos preservados com sabedoria ancestral. 
          </p>
          <p className="text-bege mt-2 font-medium">
            Feito com ☀️ respeito cultural para a América Latina
          </p>
          
          {/* Pequenos sóis decorativos */}
          <div className="flex justify-center space-x-4 mt-4">
            <span className="text-lg animate-sol-pulse text-bege" style={{animationDelay: '0s'}}>☀️</span>
            <span className="text-lg animate-sol-pulse text-marrom" style={{animationDelay: '0.5s'}}>☀️</span>
            <span className="text-lg animate-sol-pulse text-verde" style={{animationDelay: '1s'}}>☀️</span>
            <span className="text-lg animate-sol-pulse text-bege" style={{animationDelay: '1.5s'}}>☀️</span>
            <span className="text-lg animate-sol-pulse text-marrom" style={{animationDelay: '2s'}}>☀️</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
