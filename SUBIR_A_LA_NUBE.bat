@echo off
setlocal
title ACTUALIZAR REBOTE LABS - MODO MANUAL (TOKEN)
color 0E

echo ============================================================
echo           REBOTE LABS - ACTUALIZADOR POR TOKEN
echo ============================================================
echo.
echo [1] Configurando identidad...
git config user.email "produccionesherlop@gmail.com"
git config user.name "Eduardo Hernandez"

echo.
echo [2] Preparando archivos...
git add .
git commit -m "Identidad Visual V5 y DeepSeek (Sync por Token)" 2>nul

echo.
echo ************************************************************
echo PASO CRITICO: Pega tu TOKEN de GitHub (el que empieza con ghp_)
echo ************************************************************
set /p GIT_TOKEN="Pega tu TOKEN aqui y presiona ENTER: "

if "%GIT_TOKEN%"=="" (
    echo [ERROR] No pusiste ningun token. Intenta de nuevo.
    pause
    exit
)

echo.
echo [3] Vinculando con el Token...
git remote remove origin 2>nul
git remote add origin https://produccionesherlop:%GIT_TOKEN%@github.com/produccionesherlop/rebote-labs.git

echo.
echo [4] Subiendo a la nube (Cloudflare)...
git push -u origin main --force

if %errorlevel% neq 0 (
    echo.
    echo [!] ERROR: El Token parece no ser valido o no tienes internet.
    echo Revisa que el Token tenga activado el permiso 'repo'.
    pause
    exit
)

echo.
echo ============================================================
echo           ¡SINCRONIZACIÓN EXITOSA! 🚀
echo ============================================================
echo Tu link estara listo con el nuevo logo y colores en 1 min:
echo https://rebote-labs.pages.dev
echo ============================================================
pause
