import { useState, useEffect } from 'react'

export function WelcomeModal() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const welcomed = localStorage.getItem('rebote_welcomed')
        if (!welcomed) {
            setIsOpen(true)
        }
    }, [])

    const closeWelcome = () => {
        localStorage.setItem('rebote_welcomed', 'true')
        setIsOpen(false)
    }

    if (!isOpen) return null

    return (
        <div className="welcome-overlay fade-in">
            <div className="welcome-content fade-in-up">
                <div className="welcome-header">
                    <span className="welcome-icon">📽️</span>
                    <h3>Iniciando Ecosistema Rebote</h3>
                </div>
                <div className="welcome-body">
                    <p className="welcome-text">
                        Bienvenido a <strong>Rebote Labs</strong>, un espacio de <strong>Soberanía Narrativa</strong> y Pedagogía de la Mirada nacido desde las entrañas de San José de Petare.
                    </p>
                    <p className="welcome-mission">
                        Hoy dejas de ser un espectador para convertirte en el perito de tu propia realidad. Aquí, tu dispositivo móvil es un arma de construcción masiva.
                    </p>
                    <div className="welcome-signature">
                        <span>Eduardo Hernández</span>
                        <small>Producciones Herlop</small>
                    </div>
                </div>
                <button className="btn-welcome-action" onClick={closeWelcome}>
                    Asumir el Relato
                </button>
            </div>
        </div>
    )
}
