export default function Loading() {
  return (
    <div className="min-h-screen gradient-latino flex items-center justify-center">
      <div className="text-center">
        {/* Spinner animado */}
        <div className="relative w-20 h-20 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-yellow-400 rounded-full border-t-transparent animate-spin"></div>
        </div>
        
        {/* Texto de carregamento */}
        <h2 className="text-2xl font-bold text-white mb-4">
          Carregando AyvuLab...
        </h2>
        
        <p className="text-white/80 mb-6">
          Preparando seu laboratório de idiomas
        </p>
        
        {/* Emojis animados */}
        <div className="flex justify-center space-x-4 text-3xl">
          <span className="animate-bounce">🧪</span>
          <span className="animate-bounce" style={{animationDelay: '0.1s'}}>🗺️</span>
          <span className="animate-bounce" style={{animationDelay: '0.2s'}}>🎭</span>
          <span className="animate-bounce" style={{animationDelay: '0.3s'}}>🎵</span>
        </div>
      </div>
    </div>
  )
}
