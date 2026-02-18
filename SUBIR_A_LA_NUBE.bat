@echo off
setlocal
title REBOTE LABS - OPTIMIZACION TOTAL V6
color 0B

echo ============================================================
echo           REBOTE LABS - ACTUALIZADOR MAESTRO
echo ============================================================
echo.
echo [1/3] Preparando archivos (Version Master)...
git add .
git commit -m "Optimizacion Total V6: Estetica Dashboard, IA Blindada y Link Oficial" 2>nul

echo.
echo [2/3] Sincronizando con GitHub (rebote-labs)...
git remote remove origin 2>nul
git remote add origin https://github.com/produccionesherlop/rebote-labs.git
git push origin main --force

if %errorlevel% neq 0 (
    echo.
    echo [!] ERROR: No se pudo subir el codigo. 
    echo Revisa tu conexion o si el repo se llama 'rebote-labs'.
    pause
    exit
)

echo.
echo ============================================================
echo           !!! DESPLIEGUE EXITOSO !!!
echo ============================================================
echo.
echo Recuerda estos ajustes en Cloudflare Pages:
echo.
echo 1. Nombre del proyecto:  rebote-labs
echo 2. Directorio Raiz:      [DEJAR VACIO]
echo 3. Comando Build:        npm run build
echo 4. Carpeta Salida:        dist
echo.
echo LLAVE DE IA:
echo VITE_DEEPSEEK_API_KEY = sk-b7672f1a3af2440e8c94ae8779a384b2
echo.
echo Tu link oficial: https://rebote-labs.pages.dev
echo.
pause
