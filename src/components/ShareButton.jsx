import { useState } from 'react'

export function ShareButton() {
    const [showModal, setShowModal] = useState(false)

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Rebote Labs',
                text: 'Únete a la revolución del cine digital.',
                url: window.location.href,
            })
                .catch((error) => console.log('Error sharing', error));
        } else {
            setShowModal(true)
        }
    }

    return (
        <>
            <button onClick={handleShare} className="share-btn">
                🔗 Compartir App / QR
            </button>

            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <h3>Comparte este enlace</h3>
                        <p className="qr-url">{window.location.href}</p>
                        <div className="qr-placeholder">
                            {/* Uses an external API for zero dependency in modal if desired, or just text */}
                            <img
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(window.location.href)}`}
                                alt="QR Code"
                            />
                        </div>
                        <button onClick={() => setShowModal(false)} className="btn-close">Cerrar</button>
                    </div>
                </div>
            )}
        </>
    )
}
