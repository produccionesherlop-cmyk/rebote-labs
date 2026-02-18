import { GoogleGenerativeAI } from "@google/generative-ai";

// Cache for the model instance
let genAI = null;
let model = null;

const getModel = () => {
    if (model) return model;

    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

    if (!API_KEY || API_KEY.includes('your_api_key')) {
        console.error("Gemini API Key missing or invalid in .env");
        return null;
    }

    try {
        genAI = new GoogleGenerativeAI(API_KEY);
        model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        return model;
    } catch (e) {
        console.error("Failed to initialize GoogleGenerativeAI:", e);
        return null;
    }
};

export const generateLogline = async (idea) => {
    const activeModel = getModel();
    if (!activeModel) return "Error: La IA no está configurada correctamente en el archivo .env";

    try {
        const prompt = `Actúa como un productor de cine experto. Genera un 'Logline' (resumen de 1 o 2 oraciones máximas) atractivo y profesional para la siguiente idea de película: "${idea}". El tono debe ser intrigante.`;
        const result = await activeModel.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        return text || "La IA no devolvió resultados.";
    } catch (error) {
        console.error("Gemini Execution Error:", error);
        if (error.message?.includes('API_KEY_INVALID')) {
            return "Error: Tu API Key de Gemini parece ser inválida.";
        }
        return "Error de conexión con la IA. Verifica tu internet o la API Key.";
    }
};

export const generateBudget = async (projectDetails) => {
    const activeModel = getModel();
    if (!activeModel) return "Error: IA no configurada.";

    try {
        const prompt = `Actúa como un gerente de producción. Estima un presupuesto MUY aproximado en dólares para este proyecto: "${projectDetails}". Dame solo 3 líneas: Costo estimado bajo, costo estimado alto y 3 rubros principales de gasto. Sé breve.`;
        const result = await activeModel.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini Budget Error:", error);
        return "Error calculando presupuesto. Revisa la conexión.";
    }
};
