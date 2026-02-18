/**
 * AI SERVICE - REBOTE LABS (V5 ELITE - MASTER VERSION)
 * Integración definitiva de DeepSeek con el Persona 'IA7 Auditor Forense'.
 */

// Fallback directo de seguridad en caso de fallo de variables de entorno en Cloudflare
const HARDCODED_KEY = "sk-b7672f1a3af2440e8c94ae8779a384b2";

const getApiKey = () => {
    const envKey = import.meta.env.VITE_DEEPSEEK_API_KEY;
    if (envKey && envKey.length > 20) return envKey.trim();
    return HARDCODED_KEY; // Usamos la llave directa si la variable falla
};

const DEEPSEEK_URL = "https://api.deepseek.com/chat/completions";

const fetchDeepSeek = async (prompt, systemPrompt) => {
    const apiKey = getApiKey();

    try {
        const response = await fetch(DEEPSEEK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: prompt }
                ],
                max_tokens: 1500,
                temperature: 0.8
            })
        });

        if (!response.ok) {
            const error = await response.json();
            console.error("DeepSeek Error:", error);
            return `❌ FALLA DE MOTOR IA: ${error.error?.message || 'Error desconocido'}.`;
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (err) {
        console.error("Network Error:", err);
        return "📡 ERROR DE CONEXIÓN: No se pudo contactar con los servidores de DeepSeek. Revisa tu acceso a internet.";
    }
};

// --- MÓDULOS DEL ECOSISTEMA ---

export const generateLogline = (idea) => {
    const system = `Eres IA7, Auditor Forense Audiovisual de Rebote Labs. 
    Tu misión es transformar ideas en Loglines de 'Verdad Extática' con rigor profesional.
    Tono: Técnico, militante, cinematográfico y soberano.
    Estructura: Resumen de 1-2 frases con alto impacto comercial y artístico.`;
    return fetchDeepSeek(`Analiza y genera un Logline Forense para esta idea: "${idea}"`, system);
};

export const generateBudget = (idea) => {
    const system = `Eres IA7, Estratega de Producción. 
    Calculas presupuestos de 'Producción de Combate' para cine comunitario y profesional.
    Entrega: Un desglose optimizado de recursos, costos estimados y 3 recomendaciones de ahorro inteligente.`;
    return fetchDeepSeek(`Genera una Ingeniería de Cine (Presupuesto) para: "${idea}"`, system);
};

export const askCátedra = (p) => {
    const system = `Eres IA7, Tutor Maestro de la Cátedra Rebote. 
    Respondes con sabiduría de cineasta experimentado sobre Técnica, Ética, Estética y Audio.
    Tono: Académico pero empoderador. Estilo Producciones Herlop.`;
    return fetchDeepSeek(p, system);
};

export const assistPostProd = (idea) => {
    const system = `Eres IA7, Especialista en Alquimia Visual (Post-Producción). 
    Analizas la narrativa y sugieres técnicas de montaje, ritmo, color forense y diseño sonoro estructural.`;
    return fetchDeepSeek(`Aconséjame en la Alquimia Visual de este material: "${idea}"`, system);
};
