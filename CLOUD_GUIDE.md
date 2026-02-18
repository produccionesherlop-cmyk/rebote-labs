
# ☁️ Guía de Despliegue en la Nube (Master Guide)

Esta guía te lleva paso a paso para configurar **Rebote Labs** con **GitHub** (código), **Supabase** (base de datos) y **Netlify** (hosting web).

---

## 1. GitHub (Repositorio de Código)
Primero, subiremos tu código a la nube para que Netlify pueda acceder a él.

1.  Crea una cuenta en [GitHub.com](https://github.com) si no tienes una.
2.  Crea un **New Repository** (Nuevo Repositorio).
    -   Nombre: `rebote-labs`
    -   Público o Privado (tu elección).
    -   **No** inicialices con README (ya tenemos uno).
3.  Sube tu código local usando la terminal (o GitHub Desktop):
    ```bash
    # En la carpeta del proyecto
    git init
    git add .
    git commit -m "Versión inical Rebote Labs"
    git branch -M main
    git remote add origin https://github.com/TU_USUARIO/rebote-labs.git
    git push -u origin main
    ```

---

## 2. Supabase (Base de Datos)
Para guardar los registros de intentos de pago.

1.  Crea una cuenta en [Supabase.com](https://supabase.com).
2.  Haz clic en **New Project**.
    -   Organization: Tu organización por defecto.
    -   Name: `rebote-labs-db`
    -   Database Password: Genera una fuerte y **guárdala** (no la necesitarás en el código, pero sí para acceso directo).
    -   Region: Elige una cercana (ej. East US).
3.  Espera que se inicie el proyecto.
4.  Ve al menú lateral izquierdo -> **SQL Editor**.
5.  Copia el código del archivo `supabase_setup.sql` de tu proyecto (está en la carpeta raíz).
6.  Pégalo en el editor de Supabase y dale a **RUN** (botón verde). Esto creará la tabla `payments`.
7.  Ve a **Project Settings** (engranaje abajo a la izquierda) -> **API**.
8.  Mantén esta pestaña abierta, necesitamos copiar:
    -   `Project URL`
    -   `anon` public key

---

## 3. Netlify (Hosting Web)
Para que el mundo vea tu aplicación.

1.  Crea una cuenta en [Netlify.com](https://www.netlify.com).
2.  En el panel principal, haz clic en **Add new site** -> **Import from an existing project**.
3.  Selecciona **GitHub**.
4.  Autoriza a Netlify y selecciona tu repositorio `rebote-labs`.
5.  **Configuración de Build**:
    -   Base directory: (déjalo vacío)
    -   Build command: `npm run build`
    -   Publish directory: `dist`
6.  Haz clic en **Show advanced** -> **New Variable** (Variables de Entorno). Aquí conectamos Supabase:
    -   Key: `VITE_SUPABASE_URL`
        -   Value: (Pega la URL de Supabase del paso 2.8)
    -   Key: `VITE_SUPABASE_KEY`
        -   Value: (Pega la `anon` key del paso 2.8)
7.  Haz clic en **Deploy rebote-labs**.

---

## 4. Verificación
1.  Espera unos segundos. Netlify te dará una URL (ej. `https://rebote-labs-1234.netlify.app`).
2.  Entra a esa URL desde tu celular y PC.
3.  ¡Listo! Tu aplicación está en la nube, con base de datos activa y diseño profesional.
