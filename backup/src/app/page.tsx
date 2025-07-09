export default function TestPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #2563EB 0%, #9333EA 50%, #DC2626 100%)',
      color: 'white',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '1rem'
      }}>
        🚨 TESTE CSS
      </h1>
      
      <p style={{
        fontSize: '1.2rem',
        marginBottom: '2rem'
      }}>
        Se você vê este texto estilizado, o problema é só com o Tailwind.
      </p>
      
      <button style={{
        backgroundColor: '#EAB308',
        color: 'black',
        padding: '1rem 2rem',
        borderRadius: '50px',
        border: 'none',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
        Botão Teste
      </button>

      {/* Teste Tailwind */}
      <div style={{ marginTop: '2rem' }}>
        <h2>🎯 Teste Tailwind:</h2>
        <div className="bg-red-500 text-white p-4 rounded-lg mt-4">
          Se este texto tem fundo vermelho, Tailwind funciona!
        </div>
        <div className="bg-blue-500 text-white p-4 rounded-lg mt-2">
          Se este texto tem fundo azul, Tailwind funciona!
        </div>
      </div>
    </div>
  )
}