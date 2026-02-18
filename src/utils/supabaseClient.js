
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://omphcmprvmrzhziqnuhm.supabase.co'
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY

// Only initialize if we have a key
export const supabase = SUPABASE_KEY
    ? createClient(SUPABASE_URL, SUPABASE_KEY)
    : null

export const reportPayment = async ({ transactionId, method = 'Pago Móvil', amount }) => {
    if (!supabase) {
        console.warn('Supabase not configured. Payment not saved to DB.')
        return { error: 'Database not configured' }
    }

    try {
        const { data, error } = await supabase
            .from('payments')
            .insert([
                {
                    transaction_id: transactionId,
                    method,
                    amount,
                    status: 'pending_verification',
                    created_at: new Date().toISOString()
                }
            ])
            .select()

        if (error) throw error
        return { data }
    } catch (error) {
        console.error('Error reporting payment:', error)
        return { error }
    }
}
