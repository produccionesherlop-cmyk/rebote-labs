@echo off
setlocal
title REBOTE LABS - CONTROLADOR MAESTRO V7
color 0B

echo ============================================================
echo           REBOTE LABS - SOBERANIA TECNOLOGICA V7
echo ============================================================
echo.
echo [1/4] AUDITORIA DE ARCHIVOS...
if not exist "package.json" ( echo [ERROR] No estas en la carpeta raiz. & pause & exit )
if not exist "src" ( echo [ERROR] Falta carpeta src. & pause & exit )

echo.
echo [2/4] SINCRONIZACION DE IDENTIDAD VISUAL...
git add .
git commit -m "Arquitectura Master V7: Sincronizacion Total PWA + DeepSeek + Cloudflare" 2>nul

echo.
echo [3/4] CONEXION CON GITHUB (PRODUCCIONES HERLOP)...
git remote remove origin 2>nul
git remote add origin https://github.com/produccionesherlop/rebote-labs.git
git branch -M main

echo.
echo [4/4] DESPLIEGUE A LA NUBE...
git push origin main --force

if %errorlevel% neq 0 (
    echo.
    echo [!] FALLA DE CONEXION. Intentando con Token Manual...
    set /p GITHUB_TOKEN="Pega tu Token (ghp_...) para forzar el acceso: "
    git remote set-url origin https://produccionesherlop:%GITHUB_TOKEN%@github.com/produccionesherlop/rebote-labs.git
    git push origin main --force
)

echo.
echo ============================================================
echo           !!! PUESTA EN MARCHA EXITOSA !!!
echo ============================================================
echo.
echo AJUSTES FINALES EN CLOUDFLARE PAGES (OBLIGATORIO):
echo ------------------------------------------------------------
echo 1. Proyecto: rebote-labs (Oficial)
echo 2. Marco (Framework): Vite
echo 3. Comando Build: npm run build
echo 4. Carpeta Salida: dist
echo 5. Directorio Raiz: [DEJAR TOTALMENTE VACIO] 👁️
echo.
echo VARIABLES EN CLOUDFLARE:
echo VITE_DEEPSEEK_API_KEY = sk-b7672f1a3af2440e8c94ae8779a384b2
echo ------------------------------------------------------------
echo.
echo Tu App esta viva en: https://rebote-labs.pages.dev
echo.
pause
