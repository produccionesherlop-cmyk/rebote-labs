# 🌐 Guía de Despliegue en Cloudflare Pages

Has decidido migrar **Rebote Labs** a Cloudflare Pages para obtener ancho de banda ilimitado y una red global más rápida. Sigue estos pasos para reemplazar Netlify:

## 1. Preparación del Proyecto
La aplicación ya está optimizada para Cloudflare. Hemos configurado:
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Framework Preset:** `Vite`

## 2. Pasos para el Despliegue (Panel Web)
1. Ve a [dash.cloudflare.com](https://dash.cloudflare.com/) e inicia sesión.
2. Navega a **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Selecciona tu repositorio de GitHub `Preyecto Rebote`.
4. En **Build settings**, elige:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. **CRÍTICO: Variables de Entorno**
   En la sección de "Environment Variables", añade las mismas que tienes en tu `.env`:
   - `VITE_SUPABASE_URL`: (Tu URL de Supabase)
   - `VITE_SUPABASE_KEY`: (Tu Key de Supabase)
   - `VITE_DEEPSEEK_API_KEY`: `sk-b7672f1a3af2440e8c94ae8779a384b2`
6. Haz clic en **Save and Deploy**.

## 3. Ventajas para Rebote Labs
- **Ancho de banda ilimitado:** Ideal para cuando el documental "Rebote en San José" se vuelva viral.
- **Seguridad Forense:** Cloudflare ofrece protección contra ataques DDoS de nivel empresarial incluida.
- **Velocidad Extática:** Tu aplicación cargará en milisegundos en cualquier parte del mundo.

---
**IA7 Auditor:** "La migración a Cloudflare es un acto de soberanía tecnológica. Nos libera de los límites de las plataformas tradicionales y nos da el poder de una infraestructura global."
