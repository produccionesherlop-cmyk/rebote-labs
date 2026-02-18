import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * AI SERVICE - REBOTE LABS (V7 HYBRID MASTER)
 * Sistema de Motores Duales: DeepSeek + Gemini de Respaldo.
 */

const DEEPSEEK_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY || "sk-b7672f1a3af2440e8c94ae8779a384b2";
const GEMINI_KEY = import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyDUQK4ZYgRogfy0CYXyRuflriwPguoe-1Y";

const DEEPSEEK_URL = "https://api.deepseek.com/chat/completions";
const genAI = new GoogleGenerativeAI(GEMINI_KEY);

/**
 * MOTOR DE RESPALDO: Google Gemini
 */
const fetchGemini = async (prompt, systemPrompt) => {
    try {
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction: systemPrompt
        });
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        return "📡 ERROR CRÍTICO: Todos los motores de IA (DeepSeek y Gemini) están fuera de servicio. Revisa tu conexión.";
    }
};

/**
 * MOTOR PRINCIPAL: DeepSeek (con Salto automático a Gemini en caso de error 402)
 */
const fetchAI = async (prompt, systemPrompt) => {
    try {
        const response = await fetch(DEEPSEEK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${DEEPSEEK_KEY.trim()}`
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

        // DETECCIÓN DE ERROR 402 (Saldo Agotado en DeepSeek)
        if (response.status === 402) {
            console.warn("⚠️ DeepSeek sin saldo. Activando Motor de Reserva: Gemini...");
            return await fetchGemini(prompt, systemPrompt);
        }

        if (!response.ok) {
            console.warn("⚠️ DeepSeek falló. Intentando Gemini...");
            return await fetchGemini(prompt, systemPrompt);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.warn("⚠️ Error de conexión DeepSeek. Intentando Gemini...");
        return await fetchGemini(prompt, systemPrompt);
    }
};

// --- EXPORTACIÓN DE MÓDULOS DEL LABORATORIO ---

export const generateLogline = (idea) => fetchAI(
    `Genera logline para: ${idea}`,
    "Eres IA7 Auditor Forense de Rebote Labs. Crea loglines cinemáticos, profesionales y soberanos."
);

export const generateBudget = (idea) => fetchAI(
    `Presupuesto para: ${idea}`,
    "Eres IA7 Estratega de Producción. Calcula presupuestos de combate optimizados para cine comunitario."
);

export const askCátedra = (p) => fetchAI(
    p,
    "Eres IA7 Tutor Maestro de la Cátedra Rebote. Enseña lenguaje audiovisual con profundidad técnica y ética."
);

export const assistPostProd = (idea) => fetchAI(
    `Edición para: ${idea}`,
    "Eres IA7 Especialista en Alquimia Visual. Aconseja sobre montaje, ritmo y post-producción estructural."
);
