import { useState } from 'react'
import { generateWhatsAppLink } from '../utils/payment'
import { reportPayment } from '../utils/supabaseClient'
import toast from 'react-hot-toast'

export function PaymentCard({ onBack, onSuccess }) {
    const [transactionId, setTransactionId] = useState('')
    const [loading, setLoading] = useState(false)
    const [method, setMethod] = useState('pago_movil') // 'pago_movil' | 'zinli'

    const handleReport = async () => {
        if (!transactionId) {
            toast.error('Por favor ingresa el ID de transacción')
            return
        }

        // Acceso Instantáneo con 3006
        if (transactionId === '3006') {
            toast.success('¡Código de acceso rápido detectado! Bienvenido.')
            onSuccess()
            return
        }

        setLoading(true)
        const promise = reportPayment({
            transactionId,
            amount: 10,
            method: method === 'pago_movil' ? 'Pago Móvil' : 'Zinli'
        })

        toast.promise(promise, {
            loading: 'Registrando pago...',
            success: 'Pago registrado localmente!',
            error: 'Error registrando (igual abriremos WhatsApp)',
        })

        try {
            await promise
        } catch (e) {
            // Ignore error, proceed to WhatsApp
        } finally {
            setLoading(false)
            // Always open WhatsApp as fallback/primary method
            window.open(generateWhatsAppLink(transactionId, method), '_blank')
        }
    }

    return (
        <div className="card payment-section fade-in-up">
            <button
                onClick={onBack}
                className="btn-back"
                aria-label="Volver"
            >
                ← Volver
            </button>

            <h3>Detalles de Pago ($10)</h3>
            <p style={{ marginBottom: '1.5rem' }}>Elige tu método de pago preferido:</p>

            <div className="payment-tabs">
                <button
                    className={`tab-btn ${method === 'pago_movil' ? 'active' : ''}`}
                    onClick={() => setMethod('pago_movil')}
                >
                    📱 Pago Móvil
                </button>
                <button
                    className={`tab-btn ${method === 'zinli' ? 'active' : ''}`}
                    onClick={() => setMethod('zinli')}
                >
                    💜 Zinli
                </button>
            </div>

            <div className="payment-details fade-in-up" key={method}>
                {method === 'pago_movil' ? (
                    <>
                        <PaymentRow label="Banco" value="Bancamiga (0172)" />
                        <PaymentRow label="Teléfono" value="0424-147-9584" />
                        <PaymentRow label="Cédula" value="11.601.340" />
                        <PaymentRow label="Monto" value="$10.00 (Tasa BCV)" highlight />
                    </>
                ) : (
                    <>
                        <PaymentRow label="Plataforma" value="Zinli" />
                        <PaymentRow label="Titular" value="Eduardo Hernandez" />
                        <PaymentRow label="Cuenta" value="3-002-69359197-95" textSmall />
                        <PaymentRow label="Monto" value="$10.00 USD" highlight />
                    </>
                )}
            </div>

            <div className="input-group" style={{ marginTop: '1.5rem' }}>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem', textAlign: 'left' }}>
                    Ingresa el número de referencia / comprobante:
                </p>
                <input
                    type="text"
                    placeholder="Ej: 123456"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    className="input-field"
                />
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <button
                    className="btn-primary"
                    onClick={handleReport}
                    disabled={loading}
                    style={{
                        opacity: loading ? 0.7 : 1,
                        padding: '0.8rem 2rem',
                        fontSize: '0.95rem',
                        width: 'auto'
                    }}
                >
                    {loading ? 'Procesando...' : 'Reportar Pago en WhatsApp'}
                </button>
            </div>
        </div>
    )
}

function PaymentRow({ label, value, highlight, textSmall }) {
    return (
        <div className="payment-row">
            <span>{label}</span>
            <span style={{
                color: highlight ? 'var(--accent-secondary)' : 'inherit',
                fontSize: textSmall ? '0.85rem' : 'inherit',
                fontWeight: highlight ? 'bold' : 'normal'
            }}>
                {value}
            </span>
        </div>
    )
}
