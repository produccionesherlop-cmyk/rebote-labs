@echo off
setlocal
title ACTUALIZAR REBOTE LABS - REPARACIÓN
color 0B

echo ============================================================
echo           REBOTE LABS - ACTUALIZADOR DE ALTO IMPACTO
echo ============================================================
echo.
echo [1/4] Asegurando identidad de Producciones Herlop...
git config user.email "produccionesherlop@gmail.com"
git config user.name "Eduardo Hernandez"

echo.
echo [2/4] Preparando archivos para el despliegue...
:: Forzamos el agregado de todos los cambios de identidad visual
git add .
git commit -m "Sincronizacion de Identidad Visual V5 y DeepSeek" 2>nul
if %errorlevel% neq 0 (
    echo [INFO] No habia cambios nuevos para guardar, procediendo...
)

echo.
echo [3/4] Sincronizando con GitHub (produccionesherlop)...
:: Limpiamos el remote por si acaso para evitar conflictos
git remote remove origin 2>nul
git remote add origin https://github.com/produccionesherlop/rebote-labs.git
git branch -M main

echo.
echo [4/4] SUBIENDO A LA NUBE (DESPLIEGUE CLOUDFLARE)...
echo.
echo ************************************************************
echo ATENCION: Si GitHub no te deja subir, intentaremos un 
echo "Empuje de Emergencia" (Force Push).
echo ************************************************************
echo.

:: Intento normal
git push -u origin main
if %errorlevel% neq 0 (
    echo.
    echo [!] El empuje normal fallo. Intentando Empuje de Emergencia...
    git push -u origin main --force
)

if %errorlevel% neq 0 (
    echo.
    echo [ERROR CRITICO] No se pudo conectar con GitHub.
    echo 1. Verifica que el repositorio "rebote-labs" exista en tu cuenta.
    echo 2. Verifica tu conexion a internet.
    echo 3. Si te pide login en una ventana, HAZLO.
    pause
    exit
)

echo.
echo ============================================================
echo           ¡SINCRONIZACIÓN EXITOSA! 🚀
echo ============================================================
echo Cloudflare Pages esta actualizando tu sitio en este momento.
echo.
echo Tu link estara listo en 1 minuto:
echo https://rebote-labs.pages.dev
echo.
echo ============================================================
pause
