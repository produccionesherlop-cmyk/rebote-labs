@echo off
setlocal
title REBOTE LABS - Verificacion Total V5
color 0E

echo ============================================================
echo           REBOTE LABS - AUDITORIA DE PRE-LANZAMIENTO
echo ============================================================
echo.
echo [1] Limpiando archivos temporales...
if exist dist rd /s /q dist

echo [2] Instalando/Actualizando dependencias...
call npm install --no-fund --no-audit

echo [3] Generando "Build" de produccion (Prueba de Cloudflare)...
call npm run build

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] La compilacion ha fallado. Revisa tu codigo.
    pause
    exit
)

echo.
echo [4] Iniciando Servidor de Vista Previa...
echo La App se abrira en: http://localhost:4173
echo.
echo REVISA:
echo - Mensaje de bienvenida de Producciones Herlop
echo - Funcionamiento de los 4 modulos de IA
echo - Diseño responsive (Movil/PC)
echo.
echo ============================================================

start http://localhost:4173
npm run preview

pause
