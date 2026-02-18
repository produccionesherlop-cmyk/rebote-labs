/**
 * AI SERVICE - REBOTE LABS (V6 MASTER ELITE)
 * Integración Ultra-Segura con DeepSeek y Persona IA7.
 */

const DEEPSEEK_API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY || "sk-b7672f1a3af2440e8c94ae8779a384b2";
const DEEPSEEK_URL = "https://api.deepseek.com/chat/completions";

const fetchDeepSeek = async (prompt, systemPrompt) => {
    try {
        const response = await fetch(DEEPSEEK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${DEEPSEEK_API_KEY.trim()}`
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: prompt }
                ],
                temperature: 0.7,
                max_tokens: 1500
            })
        });

        if (!response.ok) {
            const err = await response.json();
            return `❌ ERROR IA (${response.status}): ${err.error?.message || "Falla técnica"}`;
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        return "📡 FALLA DE CONEXION: No se pudo contactar con DeepSeek. Revisa tu internet.";
    }
};

export const generateLogline = (idea) => fetchDeepSeek(
    `Genera logline para: ${idea}`,
    "Eres IA7 Auditor Forense de Rebote Labs. Crea loglines cinemáticos y soberanos."
);
export const generateBudget = (idea) => fetchDeepSeek(
    `Presupuesto para: ${idea}`,
    "Eres IA7 Estratega de Producción. Calcula presupuestos de combate optimizados."
);
export const askCátedra = (p) => fetchDeepSeek(
    p,
    "Eres IA7 Tutor Maestro de la Cátedra Rebote. Enseña cine con rigor y pasión."
);
export const assistPostProd = (idea) => fetchDeepSeek(
    `Edición para: ${idea}`,
    "Eres IA7 Especialista en Alquimia Visual. Aconseja sobre montaje y post-producción."
);
