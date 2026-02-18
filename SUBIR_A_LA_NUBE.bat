@echo off
setlocal
title OPTIMIZADOR MASTER - REBOTE LABS V8
color 0B

echo ============================================================
echo           REBOTE LABS - OPTIMIZACION DE ACERO V8
echo ============================================================
echo.
echo [1/3] Limpiando y Asegurando Identidad...
git config user.email "produccionesherlop@gmail.com"
git config user.name "Eduardo Hernandez"

echo.
echo [2/3] Empaquetando Código Master (IA + CSS + QR)...
git add .
git commit -m "Soberania Total V8: QR Elite, Motor Hibrido y Link Oficial" 2>nul

echo.
echo [3/3] Sincronizando con la Nube...
:: Intentamos con el repositorio que indico el usuario
git remote remove origin 2>nul
git remote add origin https://github.com/produccionesherlop/rebote-labs.git
git push origin main --force

if %errorlevel% neq 0 (
    echo.
    echo [!] Reintentando con Repositorio de Respaldo...
    git remote set-url origin https://github.com/produccionesherlop-cmyk/rebote-labs.git
    git push origin main --force
)

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] No se pudo conectar con GitHub. 
    echo 1. Verifica que tu internet sea estable.
    echo 2. Pega tu Token si GitHub lo solicita.
    pause
    exit
)

echo.
echo ============================================================
echo           !!! OPTIMIZACIÓN EXITOSA !!!
echo ============================================================
echo.
echo CONFIGURACIÓN FINAL PARA QUE EL LINK SIRVA:
echo ------------------------------------------------------------
echo 1. Link Oficial: https://rebote-labs.pages.dev
echo 2. En Cloudflare: ASEGURATE que el nombre sea "rebote-labs"
echo 3. Raiz (Root): DEJAR VACIO 👁️
echo 4. Carpeta Salida: dist
echo.
echo Ya puedes usar GENERAR_QR.html en tu PC para iOS/Android.
echo ============================================================
pause
