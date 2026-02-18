export const generateWhatsAppLink = (transactionId, method) => {
    const phone = '584241479584'
    const methodText = method === 'zinli' ? 'Zinli' : 'Pago Móvil'
    const message = `Hola! He realizado el pago de $10 para la suscripción básica de Rebote Labs.\n\nMétodo: ${methodText}\nID/Ref: ${transactionId || '[PENDIENTE]'}\n\nAdjunto comprobante a continuación.`
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
