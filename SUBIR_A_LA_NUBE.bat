@echo off
setlocal
title ACTUALIZAR REBOTE LABS EN LA NUBE
color 0E

echo ============================================================
echo           SUBIR REBOTE LABS A GITHUB Y CLOUDFLARE
echo ============================================================
echo.
echo [PASO 1] Verificando conexion con GitHub...
echo.

:: 1. Vincular con el repositorio
git remote add origin https://github.com/produccionesherlop/rebote-labs.git 2>nul
if %errorlevel% neq 0 (
    echo [INFO] El vinculo ya existia o se actualizo.
    git remote set-url origin https://github.com/produccionesherlop/rebote-labs.git
)

:: 2. Asegurar rama main
echo.
echo [PASO 2] Configurando rama principal...
git branch -M main

:: 3. Subir cambios
echo.
echo [PASO 3] Subiendo archivos a la nube...
echo.
echo ATENCION: Es muy probable que se abra una ventana en tu 
echo navegador pidiendote entrar a GitHub. Dale a "Authorize".
echo.
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] No se pudo subir el codigo. 
    echo Asegurate de que:
    echo 1. Hayas creado el repositorio "rebote-labs" en GitHub.com
    echo 2. Estuvieras conectado a Internet.
    pause
    exit
)

echo.
echo ============================================================
echo           !!! EXITO TOTAL !!!
echo ============================================================
echo El codigo ya esta en GitHub. Cloudflare Pages lo detectara
echo y actualizara tu link: https://rebote-labs.pages.dev
echo.
echo Espere 2 minutos y verifique en su movil.
pause
