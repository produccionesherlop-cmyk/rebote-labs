@echo off
setlocal
title Rebote Labs - Centro de Control
color 0b

echo ============================================================
echo           REBOTE LABS - ENGINE DE PRODUCCION
echo ============================================================
echo.

node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] No se encontro Node.js instalado. 
    echo Por favor instala Node.js desde https://nodejs.org/ para correr la App.
    pause
    exit /b
)

echo [1/3] Verificando archivos del sistema...
if not exist node_modules (
    echo [INFO] Primera vez detectada. Instalando componentes...
    call npm install
)

echo.
echo [2/3] Preparando entorno cinematografico...
echo.
echo ------------------------------------------------------------
echo    EL ESTUDIO SE ABRIRA EN: http://localhost:5173
echo ------------------------------------------------------------
echo.

:: Abrir navegador despues de 3 segundos
start /b "" cmd /c "timeout /t 3 >nul && start http://localhost:5173"

echo [3/3] Lanzando Rebote Labs...
call npm run dev

if %errorlevel% neq 0 (
    echo.
    echo [!] Hubo un problema al iniciar la App.
    echo Intentando comando alternativo...
    npx vite
)

pause
