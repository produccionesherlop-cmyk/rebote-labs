/**
 * AI SERVICE - REBOTE LABS (V5 PRO)
 * Integración de DeepSeek como motor principal para el Ecosistema Audiovisual.
 */

const DEEPSEEK_API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY;
const DEEPSEEK_URL = "https://api.deepseek.com/chat/completions";

const fetchDeepSeek = async (prompt, systemPrompt = "Eres un productor cinematográfico experto y tutor de cine comunitario.") => {
    if (!DEEPSEEK_API_KEY) {
        throw new Error("DeepSeek API Key no encontrada en .env");
    }

    try {
        const response = await fetch(DEEPSEEK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${DEEPSEEK_API_KEY}`
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: prompt }
                ],
                stream: false
            })
        });

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error("DeepSeek Error:", error);
        throw error;
    }
};

// --- SOPORTE AL ECOSISTEMA REBOTE ---

export const generateLogline = async (idea) => {
    const systemPrompt = `Actúa como IA7, Auditor Forense Audiovisual. Genera un logline (Verdad Extática). 
    Enfoque: Soberanía Narrativa. Resumen de 1-2 frases con rigor cinematográfico profesional.`;
    return await fetchDeepSeek(`Genera un logline para esta idea: "${idea}"`, systemPrompt);
};

export const generateBudget = async (projectDetails) => {
    const systemPrompt = `Actúa como IA7, Estratega de Producción. Calcula un presupuesto de 'Producción de Combate'. 
    Optimización de recursos móviles. Entrega: Costo Bajo, Costo Alto y 3 rubros clave.`;
    return await fetchDeepSeek(`Genera presupuesto para: "${projectDetails}"`, systemPrompt);
};

export const askCátedra = async (question) => {
    const systemPrompt = `Eres IA7, Tutor Maestro de Rebote Labs. Respondes sobre Lenguaje Audiovisual, 
    Técnica Forense, Audio de Resistencia y Ética. Tono académico y empoderador.`;
    return await fetchDeepSeek(question, systemPrompt);
};

/**
 * NUEVO: Sinfonía Visual (Asistente de Post-Producción)
 */
export const assistPostProd = async (projectDescription) => {
    const systemPrompt = `Actúa como IA7, Especialista en Montaje Estructural. 
    Analiza la idea del usuario y da consejos de edición:
    1. Ritmo sugerido.
    2. Uso de Room Tone.
    3. Técnica de color forense.
    4. Estilo de corte (CSI-Style).`;
    return await fetchDeepSeek(`Aconséjame en la post-producción de este proyecto: "${projectDescription}"`, systemPrompt);
};
