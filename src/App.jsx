import { useState, useEffect } from 'react'
import './index.css'
import { Header } from './components/Header'
import { Features } from './components/Features'
import { PaymentCard } from './components/PaymentSection'
import { Footer } from './components/Footer'
import { AccessCode } from './components/AccessCode'
import { AIDashboard } from './components/AIDashboard'
import { DocumentarySheet } from './components/DocumentarySheet'
import { MasterStructure } from './components/MasterStructure'
import { WelcomeModal } from './components/WelcomeModal'
import { Toaster } from 'react-hot-toast'

function App() {
  const [view, setView] = useState('landing') // 'landing', 'payment', 'access', 'dashboard'

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
      <Header />

      <main className="main-content">
        {view === 'landing' && (
          <div className="landing-layout fade-in-up">
            <section className="hero-section">
              <h1 className="hero-title">Ecosistema <br /><span className="orange">Rebote Labs</span></h1>
              <p className="hero-desc">
                Investigación, Acción y Soberanía Audiovisual. Un espacio nacido del documental
                <strong> "Rebote en San José"</strong> para empoderar a comunidades mediante el cine móvil.
              </p>
            </section>

            <DocumentarySheet />

            <MasterStructure />

            <Features />

            <div className="utility-footer">
              <div className="complementary-actions">
                <button className="btn-secondary-link" onClick={() => setView('access')}>
                  Acceso Pro (Directores)
                </button>
                <a href="https://petare-docs.org" target="_blank" className="btn-secondary-link">
                  Estrategia Petare
                </a>
              </div>

              <div className="activation-footer-box">
                <button
                  className="btn-activate-compact"
                  onClick={() => setView('payment')}
                >
                  Activar Motor IA7 ($10)
                </button>
                <p className="activation-note">Acceso permanente al ecosistema técnico y teórico.</p>
              </div>
            </div>
          </div>
        )}

        {view === 'payment' && (
          <PaymentCard
            onBack={() => setView('landing')}
            onSuccess={handleAccessSuccess}
          />
        )}

        {view === 'access' && (
          <div className="access-view">
            <button onClick={() => setView('landing')} className="btn-back-text">← Regresar al Inicio</button>
            <AccessCode onSuccess={handleAccessSuccess} />
          </div>
        )}

        {view === 'dashboard' && (
          <AIDashboard onLogout={handleLogout} />
        )}

        <Footer />
      </main>
    </div>
  )
}

export default App
