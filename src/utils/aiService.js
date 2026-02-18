/**
 * AI SERVICE - REBOTE LABS (V5 ELITE)
 * Motor optimizado para DeepSeek con manejo de errores silencioso y preventivo.
 */

const getApiKey = () => {
    const key = import.meta.env.VITE_DEEPSEEK_API_KEY;
    if (!key || key.includes('your_api_key')) return null;
    return key.trim();
};

const DEEPSEEK_URL = "https://api.deepseek.com/chat/completions";

const fetchDeepSeek = async (prompt, systemPrompt) => {
    const apiKey = getApiKey();

    if (!apiKey) {
        return "⚠️ ERROR DE CONFIGURACIÓN: La llave de IA no ha sido detectada en Cloudflare. Por favor, verifica las variables de entorno.";
    }

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
                temperature: 0.7
            })
        });

        if (!response.ok) {
            const error = await response.json();
            return `🔌 FALLA TÉCNICA: El motor DeepSeek está saturado o la llave es inválida. (Error: ${response.status})`;
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (err) {
        return "📡 ERROR DE RED: No se pudo contactar con el laboratorio central de IA. Revisa tu conexión.";
    }
};

export const generateLogline = (idea) => fetchDeepSeek(`Crea un logline soberano para: ${idea}`, "Eres IA7, experta en narrativa forense de Petare.");
export const generateBudget = (idea) => fetchDeepSeek(`Presupuesto de combate para: ${idea}`, "Eres IA7, estratega de producción de bajo costo.");
export const askCátedra = (p) => fetchDeepSeek(p, "Eres IA7, tutor maestro de cine comunitario.");
export const assistPostProd = (idea) => fetchDeepSeek(`Consejos de montaje para: ${idea}`, "Eres IA7, especialista en Sinfonía Visual.");
