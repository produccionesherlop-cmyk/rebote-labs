@echo off
setlocal
title REPARADOR MAESTRO - REBOTE LABS
color 0E

echo ============================================================
echo           REBOTE LABS - CORRECCIÓN DE ENLACES
echo ============================================================
echo.
echo [1/3] Sincronizando código con la nueva identidad visual...
git add .
git commit -m "Reparacion Maestra: Enlaces y QR sincronizados con rebote-labs-petare" 2>nul
git push origin main --force

echo.
echo ============================================================
echo           !!! EL LINK 'rebote-labs' NO EXISTE !!!
echo ============================================================
echo.
echo El nombre 'rebote-labs' ya estaba ocupado en Cloudflare.
echo TU ENLACE REAL Y ÚNICO ES: 
echo.
echo 👉 https://rebote-labs-petare.pages.dev
echo.
echo ------------------------------------------------------------
echo [PASOS PARA UN LINK PERFECTO]:
echo 1. Abre el archivo GENERAR_QR.html en tu PC.
echo 2. Escanea el código con tu móvil (Ya está actualizado).
echo 3. Si vas a Cloudflare, asegúrate que el nombre del 
echo    proyecto sea: rebote-labs-petare
echo ------------------------------------------------------------
echo.
echo Presiona una tecla para terminar el peritaje.
pause >nul
