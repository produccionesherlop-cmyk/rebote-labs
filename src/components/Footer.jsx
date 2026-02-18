import { ShareButton } from './ShareButton'

export function Footer() {
    return (
        <footer className="footer">
            <div className="platform-icons">
                <div className="platform-item">
                    <span>📱</span>
                    <span>iOS</span>
                </div>
                <div className="platform-item">
                    <span>🤖</span>
                    <span>Android</span>
                </div>
                <div className="platform-item">
                    <span>💻</span>
                    <span>Web / PC</span>
                </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
                <ShareButton />
            </div>

            <p style={{ marginTop: '2rem', fontSize: '0.8rem', opacity: 0.5 }}>
                © 2026 Rebote Labs. Todos los derechos reservados.
            </p>
        </footer>
    )
}
