import { useState } from 'react'
import { generateLogline, generateBudget, askCátedra, assistPostProd } from '../utils/aiService'
import toast from 'react-hot-toast'

export function AIDashboard({ onLogout }) {
    const [idea, setIdea] = useState('')
    const [result, setResult] = useState('')
    const [loading, setLoading] = useState(false)
    const [mode, setMode] = useState('genesis') // 'genesis', 'ingenieria', 'sinfonia', 'catedra'

    const handleGenerate = async () => {
        if (!idea && mode !== 'catedra') return
        setLoading(true)
        let output = ''

        try {
            if (mode === 'genesis') {
                output = await generateLogline(idea)
            } else if (mode === 'ingenieria') {
                output = await generateBudget(idea)
            } else if (mode === 'sinfonia') {
                output = await assistPostProd(idea)
            } else if (mode === 'catedra') {
                output = await askCátedra(idea)
            }
        } catch (e) {
            output = "Se produjo un error al intentar contactar con el motor IA. Revisa tu conexión a internet.";
            toast.error("Falla en la red IA");
        }

        setResult(output)
        setLoading(false)
    }

    return (
        <div className="card dashboard-card fade-in-up">
            <div className="dashboard-header">
                <div className="header-info">
                    <h2 className="dashboard-title">Estudio Maestro Rebote</h2>
                    <div className="status-indicator">
                        <span className="dot pulse"></span> Motor: DeepSeek Optimizao (v5)
                    </div>
                </div>
                <button className="btn-logout-minimal" onClick={onLogout}>Cerrar Cámara</button>
            </div>

            <nav className="production-grid">
                <button
                    className={`nav-item ${mode === 'genesis' ? 'active' : ''}`}
                    onClick={() => { setMode('genesis'); setResult(''); setIdea(''); }}
                >
                    <span className="nav-icon">💡</span>
                    <div className="nav-text">
                        <strong>Génesis Narrativa</strong>
                        <small>IA7: Verdad Extática</small>
                    </div>
                </button>
                <button
                    className={`nav-item ${mode === 'ingenieria' ? 'active' : ''}`}
                    onClick={() => { setMode('ingenieria'); setResult(''); setIdea(''); }}
                >
                    <span className="nav-icon">⚖️</span>
                    <div className="nav-text">
                        <strong>Ingeniería de Cine</strong>
                        <small>IA7: Estructura Forense</small>
                    </div>
                </button>
                <button
                    className={`nav-item ${mode === 'sinfonia' ? 'active' : ''}`}
                    onClick={() => { setMode('sinfonia'); setResult(''); setIdea(''); }}
                >
                    <span className="nav-icon">🎬</span>
                    <div className="nav-text">
                        <strong>Sinfonía Visual</strong>
                        <small>Asistente de Montaje</small>
                    </div>
                </button>
                <button
                    className={`nav-item ${mode === 'catedra' ? 'active' : ''}`}
                    onClick={() => { setMode('catedra'); setResult(''); setIdea(''); }}
                >
                    <span className="nav-icon">📖</span>
                    <div className="nav-text">
                        <strong>Cátedra de Maestros</strong>
                        <small>Consultoría Técnica</small>
                    </div>
                </button>
            </nav>

            <div className="main-workstation">
                <div className="ai-workspace fade-in-up">
                    <div className="workspace-label">
                        {mode === 'genesis' ? 'Módulo: Construcción de Premisas Soberanas' :
                            mode === 'ingenieria' ? 'Módulo: Peritaje de Recursos y Costos' :
                                mode === 'sinfonia' ? 'Módulo: Sinfonía Visual y Montaje Estructural' :
                                    'Consultorio IA7: Preguntas de Técnica y Teoría'}
                    </div>

                    <textarea
                        className="workspace-input"
                        placeholder={mode === 'catedra' ? "Pregunta sobre Room Tone, AE/AF Lock, Ética..." :
                            mode === 'sinfonia' ? "Describe tu material grabado para recibir consejos de edición..." :
                                "Describe la esencia de tu proyecto..."}
                        value={idea}
                        onChange={(e) => setIdea(e.target.value)}
                    />

                    <button
                        className="btn-action-primary"
                        onClick={handleGenerate}
                        disabled={loading || !idea}
                    >
                        {loading ? 'Invocando conocimiento con DeepSeek...' : 'Activar Inteligencia Artística'}
                    </button>

                    {result && (
                        <div className="result-panel fade-in-up">
                            <div className="result-header">Dictamen de IA7 (DeepSeek Chat):</div>
                            <div className="result-body">{result}</div>
                        </div>
                    )}

                    {mode === 'sinfonia' && !result && (
                        <div className="protocol-info fade-in-up">
                            <h3>Protocolo CSI: Montaje Estructural</h3>
                            <ul>
                                <li><strong>Ingesta:</strong> Solo material con 'Verdad Extática'.</li>
                                <li><strong>Assembly:</strong> 60 min para estructura base.</li>
                                <li><strong>Audio:</strong> Sincronización vía claqueta sonar.</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
