import { useState } from 'react'
import { generateLogline, generateBudget, askCátedra, assistPostProd } from '../utils/aiService'
import toast from 'react-hot-toast'

export function AIDashboard({ onLogout }) {
    const [idea, setIdea] = useState('')
    const [result, setResult] = useState('')
    const [loading, setLoading] = useState(false)
    const [mode, setMode] = useState('genesis')

    const handleGenerate = async () => {
        if (!idea && mode !== 'catedra') return
        setLoading(true)
        try {
            let output = ''
            if (mode === 'genesis') output = await generateLogline(idea)
            else if (mode === 'ingenieria') output = await generateBudget(idea)
            else if (mode === 'sinfonia') output = await assistPostProd(idea)
            else if (mode === 'catedra') output = await askCátedra(idea)
            setResult(output)
        } catch (e) {
            toast.error("Falla de red")
        }
        setLoading(false)
    }

    const menuItems = [
        { id: 'genesis', icon: '💡', title: 'Génesis Creativa', sub: 'Loglines e Ideas' },
        { id: 'ingenieria', icon: '🎬', title: 'Puesta en Escena', sub: 'Presupuesto y Plan' },
        { id: 'sinfonia', icon: '✨', title: 'Alquimia Visual', sub: 'Edición y Post' },
        { id: 'catedra', icon: '📖', title: 'Cátedra Rebote', sub: 'Lenguaje y Teoría' }
    ]

    return (
        <div className="dashboard-card fade-in">
            <div className="dashboard-header-ref">
                <div className="header-left">
                    <h2>Estudio<br />Virtual Pro</h2>
                    <span className="role-badge">Director / Productor</span>
                </div>
                <button className="btn-logout-ref" onClick={onLogout}>Finalizar<br />Sesión</button>
            </div>

            <nav className="production-list">
                {menuItems.map(item => (
                    <button
                        key={item.id}
                        className={`nav-row ${mode === item.id ? 'active' : ''}`}
                        onClick={() => { setMode(item.id); setResult(''); setIdea(''); }}
                    >
                        <span className="row-icon">{item.icon}</span>
                        <div className="row-text">
                            <strong>{item.title}</strong>
                            <small>{item.sub}</small>
                        </div>
                    </button>
                ))}
            </nav>

            <div className="workstation-ref">
                <textarea
                    className="workspace-input"
                    placeholder="Describe tu visión aquí..."
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                />

                <button
                    className="btn-generate-ref"
                    onClick={handleGenerate}
                    disabled={loading || !idea}
                >
                    {loading ? 'Procesando...' : 'Generar Resultado'}
                </button>

                {result && (
                    <div className="result-panel fade-in">
                        {result}
                    </div>
                )}
            </div>
        </div>
    )
}
