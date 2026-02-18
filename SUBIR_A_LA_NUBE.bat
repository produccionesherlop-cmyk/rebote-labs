@echo off
setlocal
title REBOTE LABS - REPARACIÓN DE CONEXIÓN
color 0E

echo ============================================================
echo           REBOTE LABS - DIAGNÓSTICO DE GITHUB
echo ============================================================
echo.
echo El error "Repository not found" significa que la direccion 
echo de tu repositorio en GitHub es diferente a la que intentamos.
echo.

:: Pedir datos al usuario
set /p GIT_USER="1. Escribe tu nombre de usuario de GitHub (Ej: EduardoH): "
set /p GIT_REPO="2. Escribe el nombre del repositorio (Ej: rebote-labs): "
set /p GIT_TOKEN="3. Pega tu TOKEN (ghp_...): "

if "%GIT_USER%"=="" set GIT_USER=produccionesherlop
if "%GIT_REPO%"=="" set GIT_REPO=rebote-labs

echo.
echo [PASO 1] Configurando identidad...
git config user.email "produccionesherlop@gmail.com"
git config user.name "Eduardo Hernandez"

echo.
echo [PASO 2] Vinculando a: https://github.com/%GIT_USER%/%GIT_REPO%.git
git remote remove origin 2>nul
git remote add origin https://%GIT_USER%:%GIT_TOKEN%@github.com/%GIT_USER%/%GIT_REPO%.git

echo.
echo [PASO 3] Sincronizando archivos locales...
git add .
git commit -m "Actualizacion de Identidad Visual V5" 2>nul

echo.
echo [PASO 4] Subiendo a la nube...
git push -u origin main --force

if %errorlevel% neq 0 (
    echo.
    echo [!] SIGUE FALLANDO. Por favor verifica:
    echo 1. Entra a GitHub.com y confirma que el repositorio EXISTE.
    echo 2. Confirma que tu nombre de usuario es EXACTAMENTE el que pusiste.
    echo 3. Confirma que el Token tiene marcado el permiso 'repo'.
    pause
    exit
)

echo.
echo ============================================================
echo           ¡SINCRONIZACIÓN EXITOSA! 🚀
echo ============================================================
echo Tu link actualizado estara listo en 1 minuto:
echo https://rebote-labs.pages.dev
echo ============================================================
pause
