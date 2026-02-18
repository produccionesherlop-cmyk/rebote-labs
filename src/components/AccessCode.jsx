import { useState } from 'react'
import '../index.css'

export function AccessCode({ onSuccess }) {
    const [code, setCode] = useState('')
    const [error, setError] = useState('')

    const REQUIRED_CODE = 'REBOTE2026'

    const handleSubmit = (e) => {
        e.preventDefault()
        const validCodes = ['REBOTE2026', '3006']
        if (validCodes.includes(code.toUpperCase())) {
            onSuccess()
        } else {
            setError('Código o comprobante inválido.')
        }
    }

    return (
        <div className="card fade-in-up">
            <h3>🔑 Acceso para Miembros</h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                Ingresa el código que recibiste por WhatsApp al confirmar tu pago.
            </p>

            <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: '0 auto' }}>
                <input
                    type="text"
                    placeholder="Ingresa tu código"
                    className="input-field"
                    value={code}
                    onChange={(e) => {
                        setCode(e.target.value)
                        setError('')
                    }}
                    style={{ textAlign: 'center', letterSpacing: '2px', textTransform: 'uppercase' }}
                />

                {error && <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.5rem' }}>{error}</p>}

                <button type="submit" className="btn-primary" style={{ marginTop: '1.5rem' }}>
                    Entrar a la App
                </button>
            </form>
        </div>
    )
}
