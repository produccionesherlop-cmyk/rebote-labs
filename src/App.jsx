import { useState, useEffect } from 'react'
import './index.css'
import { Header } from './components/Header'
import { AccessCode } from './components/AccessCode'
import { AIDashboard } from './components/AIDashboard'
import { WelcomeModal } from './components/WelcomeModal'
import { Toaster } from 'react-hot-toast'

function App() {
  const [view, setView] = useState('landing') // 'landing', 'access', 'dashboard'

  useEffect(() => {
    const hasAccess = localStorage.getItem('rebote_access')
    if (hasAccess === 'true') {
      setView('dashboard')
    }
  }, [])

  const handleAccessSuccess = () => {
    localStorage.setItem('rebote_access', 'true')
    setView('dashboard')
  }

  const handleLogout = () => {
    localStorage.removeItem('rebote_access')
    setView('landing')
  }

  return (
    <div className="app-container">
      <Toaster position="top-center" />
      <WelcomeModal />

      {/* Header oficial se muestra siempre excepto cuando estemos en el Dashboard profundo */}
      {view !== 'dashboard' && <Header />}

      <main className="main-content">
        {view === 'landing' && (
          <div className="landing-layout anim-up">
            <section className="hero-activation" style={{ textAlign: 'center', padding: '2rem' }}>
              <img src="/pwa-192x192.svg" alt="Icono" style={{ width: '60px', opacity: 0.8, marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.4rem', marginBottom: '2rem' }}>Soberanía Narrativa desde el Barrio.</h3>

              <button
                className="btn-activate"
                onClick={() => setView('access')}
                style={{ marginBottom: '1rem' }}
              >
                Entrar al Laboratorio Master
              </button>

              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                Inicia sesión con tu código de Producciones Herlop
              </p>
            </section>
          </div>
        )}

        {view === 'access' && (
          <div className="access-view anim-up">
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <button onClick={() => setView('landing')} className="btn-close">← Volver</button>
            </div>
            <AccessCode onSuccess={handleAccessSuccess} />
          </div>
        )}

        {view === 'dashboard' && (
          <AIDashboard onLogout={handleLogout} />
        )}
      </main>

      {view !== 'dashboard' && (
        <footer style={{ textAlign: 'center', padding: '2rem', color: '#475569', fontSize: '0.8rem' }}>
          <p>© 2026 Producciones Herlop | Rebote Labs</p>
          <p>San José de Petare, Venezuela.</p>
        </footer>
      )}
    </div>
  )
}

export default App
