@echo off
setlocal
title ASISTENTE DE DESPLIEGUE REBOTE V5
color 0B

echo ============================================================
echo           REBOTE LABS - ASISTENTE DE EXPERTO
echo ============================================================
echo.
echo [1/3] Sincronizando cambios locales...
git add .
git commit -m "Optimizacion Elite V5: Identidad Visual y Motor IA" 2>nul

echo.
echo [2/3] Subiendo a GitHub...
git push origin main --force

if %errorlevel% neq 0 (
    echo.
    echo [!] ERROR: No se pudo subir el codigo. 
    echo Verifica tu Internet o el Token.
    pause
    exit
)

echo.
echo ============================================================
echo           !!! CODIGO SUBIDO EXITOSAMENTE !!!
echo ============================================================
echo.
echo [3/3] CONFIGURACION CRITICA PARA CLOUDFLARE:
echo ------------------------------------------------------------
echo Copia estos valores EXACTAMENTE en tu panel de Cloudflare:
echo.
echo 1. Directorio Raiz (Root Directory):      [DEJAR VACIO]
echo 2. Comando de construccion (Build):        npm run build
echo 3. Carpeta de salida (Output):             dist
echo 4. Comando de implementacion (Deploy):     [DEJAR VACIO]
echo.
echo VARIABLES DE ENTORNO (Environment Variables):
echo Nombre: VITE_DEEPSEEK_API_KEY
echo Valor:  sk-b7672f1a3af2440e8c94ae8779a384b2
echo ------------------------------------------------------------
echo.
echo Tu link estara listo en 1 minuto en:
echo https://rebote-labs-petare.pages.dev
echo.
pause
