# 🖥️ Guía de Instalación en la PC y Uso de IA

He configurado **Rebote Labs** para que sea una herramienta profesional lista para usar en tu computadora.

## 1. 🚀 Cómo Lanzar la App en tu PC (Nueva Forma)
He creado un archivo llamado **`COMPUTADORA_LANZAR.bat`** en la carpeta raíz.
-   **Instrucciones**: Solo haz **doble clic** en ese archivo.
-   **Qué hace**: Instalará lo que falte automáticamente, iniciará el servidor y abrirá la App en tu navegador.

## 2. 📱 Cómo "Instalar" Rebote Labs como App de Escritorio
Al ser una PWA (Progressive Web App), puedes tenerla como un icono en tu barra de tareas:
1.  Una vez abierta la App en Google Chrome o Microsoft Edge (usando el paso anterior).
2.  Busca un icono de **instalación** (una pantalla con una flecha) en la barra de direcciones (arriba a la derecha).
3.  Dale a **"Instalar"**.
4.  ¡Listo! Ahora tendrás **Rebote Labs** en tu escritorio como si fuera un programa de Windows.

## 3. 🧠 Configuración de la IA Gemini
Ya he configurado tu API Key (`AIzaSy...-1Y`) en el archivo `.env` de tu carpeta raíz.
-   **Uso**: Entra a la App, usa el código **3006**, y verás que ahora el "Estudio Virtual" funciona correctamente y responde tus consultas de cine.

## 🔗 Integración con Netlify
**IMPORTANTE**: Para que la IA funcione en internet (en tu link de Netlify), debes entrar a tu panel de Netlify y agregar la variable:
-   **Key**: `VITE_GEMINI_API_KEY`
-   **Value**: `AIzaSyDUQK4ZYgRogfy0CYXyRuflriwPguoe-1Y`

---
¡La aplicación ha sido optimizada para funcionar al 100%!
