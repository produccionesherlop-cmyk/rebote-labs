@echo off
setlocal
title REBOTE LABS - Control de Lanzamiento
color 0B

echo ============================================================
echo           REBOTE LABS - ECOSISTEMA AUDIOVISUAL
echo ============================================================
echo.
echo [1] Verificando entorno...

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] No se encontro Node.js. Por favor instalalo en: https://nodejs.org
    pause
    exit
)

echo [2] Instalando dependencias necesarias (Solo si faltan)...
call npm install --no-fund --no-audit

echo [3] Iniciando Laboratorio Local...
echo.
echo La aplicacion se abrira en tu navegador automaticamente.
echo Si no abre, ve a: http://localhost:5173
echo.
echo ============================================================

start http://localhost:5173
npm run dev

pause
