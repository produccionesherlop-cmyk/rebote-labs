import { useState } from 'react'
import { generateLogline, generateBudget, askCátedra, assistPostProd } from '../utils/aiService'
import toast from 'react-hot-toast'

export function AIDashboard({ onLogout }) {
    const [prompt, setPrompt] = useState('')
    const [result, setResult] = useState('')
    const [loading, setLoading] = useState(false)
    const [activeTab, setActiveTab] = useState('genesis')

    const handleAIGenerate = async () => {
        if (!prompt && activeTab !== 'catedra') return
        setLoading(true)
        try {
            let res = ''
            if (activeTab === 'genesis') res = await generateLogline(prompt)
            else if (activeTab === 'ingenieria') res = await generateBudget(prompt)
            else if (activeTab === 'sinfonia') res = await assistPostProd(prompt)
            else if (activeTab === 'catedra') res = await askCátedra(prompt)
            setResult(res)
        } catch (e) {
            toast.error("Motor desconectado")
        }
        setLoading(false)
    }

    const modules = [
        { id: 'genesis', icon: '💡', name: 'Génesis Creativa', sub: 'Loglines e Ideas' },
        { id: 'ingenieria', icon: '🎬', name: 'Puesta en Escena', sub: 'Presupuesto y Plan' },
        { id: 'sinfonia', icon: '✨', name: 'Alquimia Visual', sub: 'Edición y Post' },
        { id: 'catedra', icon: '📖', name: 'Cátedra Rebote', sub: 'Lenguaje y Teoría' }
    ]

    return (
        <div className="dashboard-container anim-up">
            <div className="dash-head">
                <div className="dash-title">
                    <h2>Estudio<br />Virtual Pro</h2>
                    <span className="badge-director">Director / Productor</span>
                </div>
                <button className="btn-close" onClick={onLogout}>Finalizar<br />Sesión</button>
            </div>

            <nav className="module-list">
                {modules.map(m => (
                    <button
                        key={m.id}
                        className={`module-row ${activeTab === m.id ? 'selected' : ''}`}
                        onClick={() => { setActiveTab(m.id); setResult(''); setPrompt(''); }}
                    >
                        <span className="row-icon-large">{m.icon}</span>
                        <div className="row-info">
                            <strong>{m.name}</strong>
                            <span>{m.sub}</span>
                        </div>
                    </button>
                ))}
            </nav>

            <div className="work-zone">
                <textarea
                    className="input-prompt"
                    placeholder="Describe tu visión o idea técnica aquí..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />

                <button
                    className="btn-activate"
                    onClick={handleAIGenerate}
                    disabled={loading || (!prompt && activeTab !== 'catedra')}
                >
                    {loading ? 'Procesando Master...' : 'Generar Resultado'}
                </button>

                {result && (
                    <div className="ai-output anim-up">
                        {result}
                    </div>
                )}
            </div>
        </div>
    )
}
