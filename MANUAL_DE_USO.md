
# 🔐 Manual de Verificación de Pagos y Acceso

Este manual te explica cómo gestionar los nuevos usuarios de **Rebote Labs**.

## Flujo de Trabajo

1.  **El Cliente Paga**: El usuario entra a la app, ve los datos, paga $10 y te envía el comprobante por WhatsApp.
2.  **Tú Verificas**: Entras a tu banco (Bancamiga) y confirmas que recibiste el dinero.
3.  **Tú das Acceso**: Respondes al cliente por WhatsApp con el **Código de Acceso**.
4.  **El Cliente Entra**: El usuario vuelve a la app, toca en "¿Ya pagaste?", ingresa el código y accede.

---

## 🛠️ El Código de Acceso
Actualmente, el código maestro para entrar es:

# **REBOTE2026**

> **Instrucciones para enviar al cliente:**
> "¡Pago verificado! Muchas gracias. Para activar tu cuenta, vuelve a la aplicación, toca en '¿Ya pagaste?' y usa este código de activación: **REBOTE2026**"

---

## 🔗 Cómo Obtener el Link y QR
Para que los clientes puedan pagar, necesitan el LINK de tu app.

1.  Sigue la guía `CLOUD_GUIDE.md` para subir tu app a Netlify.
2.  Una vez subida, Netlify te dará un link (ej. `https://rebote-labs.netlify.app`).
3.  Ese es el link que compartirás.
4.  Si quieres el QR:
    -   Abre la app en tu celular.
    -   Baja hasta el final.
    -   Toca el botón **"🔗 Compartir App / QR"**.
    -   ¡Listo! Ahí tienes el QR para mostrar.

---

## ✅ Lista de Verificación (Checklist)

- [ ] Verificar pago en Bancamiga.
- [ ] Verificar monto correcto ($10 a tasa BCV).
- [ ] Enviar mensaje de bienvenida + Código `REBOTE2026`.
- [ ] (Opcional) Guardar el contacto del cliente para futuras promociones.
