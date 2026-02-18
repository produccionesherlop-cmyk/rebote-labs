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

/**
 * Génesis Narrativa: Generación de Loglines
 */
export const generateLogline = async (idea) => {
    const systemPrompt = `Actúa como IA7, Auditor Forense Audiovisual. 
    Tu objetivo es generar una 'Verdad Extática' (Logline). 
    Enfoque: Soberanía Narrativa y Cine Comunitario. 
    Resumen de 1 o 2 frases con rigor cinematográfico de nivel licenciatura.`;

    try {
        return await fetchDeepSeek(`Genera un logline para esta idea: "${idea}"`, systemPrompt);
    } catch (e) {
        return "Error en el motor DeepSeek. Verifica conexión.";
    }
};

/**
 * Ingeniería de Cine: Estructura y Presupuesto
 */
export const generateBudget = async (projectDetails) => {
    const systemPrompt = `Actúa como IA7, Estratega de Producción Comunitaria. 
    Calcula un presupuesto aproximado bajo estándares de 'Producción de Combate'. 
    Usa la lógica de optimización de recursos del Taller de Cine con Dispositivos Móviles.
    Entrega: Costo Bajo, Costo Alto y 3 rubros clave.`;

    try {
        return await fetchDeepSeek(`Genera presupuesto para: "${projectDetails}"`, systemPrompt);
    } catch (e) {
        return "Error calculando presupuesto con DeepSeek.";
    }
};

/**
 * Consultoría de Cátedra: Preguntas sobre técnica/teoría
 */
export const askCátedra = async (question) => {
    const systemPrompt = `Eres IA7, el Tutor Maestro de Rebote Labs. 
    Respondes sobre Lenguaje Audiovisual, Técnica Forense (Bloqueo AE/AF), 
    Audio de Resistencia (Room Tone) y Ética de DDHH en el cine. 
    Tu tono es académico, militante y empoderador.`;

    try {
        return await fetchDeepSeek(question, systemPrompt);
    } catch (e) {
        return "Error consultando a la Cátedra.";
    }
};
