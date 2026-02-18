# Guia de Instalación y Despliegue - Rebote Labs

## 1. Ejecutar Localmente
Para probar la aplicación en tu computadora:

1. Abre una terminal en esta carpeta.
2. Ejecuta:
   ```bash
   npm run dev
   ```
3. Abre el enlace local (ej. `http://localhost:5173`) en tu navegador.

## 2. Despliegue en Netlify (Gratis)
La forma más fácil de publicar tu aplicación web es usando Netlify conectado a GitHub.

### Pasos:
1. Sube este proyecto a un repositorio nuevo en GitHub.
2. Crea una cuenta en [Netlify](https://www.netlify.com).
3. Selecciona "Add new site" -> "Import from existing project".
4. Conecta tu cuenta de GitHub y selecciona el repositorio de `rebote-labs`.
5. En la configuración de construcción (Build settings):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Haz clic en "Deploy site".

## 3. Instalación como App (PWA)
Una vez desplegada, tu aplicación se puede instalar como una App nativa en celulares:

- **Android (Chrome):** Entra a la web, aparecerá un aviso "Instalar Rebote Labs" o ve al menú de Chrome -> "Instalar aplicación".
- **iOS (Safari):** Entra a la web, toca el botón "Compartir" (flecha hacia arriba) -> baja y selecciona "Agregar al inicio" (Add to Home Screen).
- **PC:** En Chrome/Edge aparecerá un icono de instalación en la barra de direcciones.

## 4. Configuración de Base de Datos (Supabase)
Para registrar los intentos de pago automáticamente:

1. Ve a tu proyecto en [Supabase](https://supabase.com).
2. Ve al **SQL Editor** (barra lateral izquierda).
3. Copia y pega el contenido del archivo `supabase_setup.sql` que está en la carpeta del proyecto.
4. Ejecuta el script (Run).
5. Ve a **Settings -> API**.
6. Copia la `Project URL` y la `anon public key`.

### Variables de Entorno
Al desplegar en Netlify (o localmente en `.env`), debes configurar:

- `VITE_SUPABASE_URL`: Tu URL del proyecto Supabase.
- `VITE_SUPABASE_KEY`: Tu clave anónima (`anon key`).

> **Nota:** Si no configuras esto, la aplicación seguirá funcionando, pero solo abrirá WhatsApp sin guardar el registro en la base de datos.

## 5. Pagos
Los pagos son manuales por ahora. El usuario ve los datos de Bancamiga y reporta el pago vía WhatsApp. Tú recibirás el mensaje y podrás verificarlo manualmente. Además, si configuraste Supabase, tendrás un respaldo en la tabla `payments`.
