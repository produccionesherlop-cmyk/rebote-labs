# 🎬 Rebote Labs - Plataforma Pro

La primera plataforma dedicada exclusivamente a la producción audiovisual y cinematográfica.

## 🚀 Características
- **Diseño Premium**: Interfaz oscura, elegante y optimizada para cineastas.
- **Multiplataforma**: Funciona en Android, iOS y Web (PWA instalable).
- **Pagos Integrados**: Reporte de Pago Móvil con validación vía WhatsApp.
- **Acceso Seguro**: Sistema de código de activación (`REBOTE2026`).

## 🛠️ Instalación y Despliegue

### 1. Variables de Entorno (.env)
Crea un archivo `.env` en la raíz con tus credenciales de Supabase:
```env
VITE_SUPABASE_URL=tu_url_aqui
VITE_SUPABASE_KEY=tu_key_aqui
```

### 2. Comandos Principales
```bash
# Instalar dependencias
npm install

# Correr en desarrollo
npm run dev

# Construir para producción
npm run build
```

### 3. Despliegue en Netlify
Este proyecto incluye un archivo `netlify.toml` preconfigurado.
Solo necesitas conectar tu repositorio de GitHub a Netlify y listo.

## 📂 Estructura del Proyecto
- `/src/components`: Componentes reutilizables (Header, Payment, AccessCode).
- `/src/utils`: Lógica de conexión con Supabase y WhatsApp.
- `/public`: Assets estáticos y logos SVG.
- `netlify.toml`: Configuración de servidor para Netlify.
- `supabase_setup.sql`: Script para crear la base de datos.
