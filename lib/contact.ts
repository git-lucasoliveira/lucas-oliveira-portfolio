import emailjs from 'emailjs-com'

/** What a visitor fills in on the contact form. */
export interface ContactMessage {
  name: string
  email: string
  message: string
}

/**
 * Why a send failed. The caller only has to distinguish these, not know that
 * EmailJS exists, which credentials it needs, or what shape its payload takes.
 */
export type ContactSendFailure = 'not-configured' | 'send-failed'

export type ContactSendResult =
  | { ok: true }
  | { ok: false; reason: ContactSendFailure }

const SUBJECT = 'Contato via Portfólio'

/** Reads the credentials the mail provider needs, or null when any is absent. */
function credentials() {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) return null
  return { serviceId, templateId, publicKey }
}

/**
 * Delivers a contact message. Never throws: a caller rendering a form wants a
 * result to show, not an exception to catch.
 */
export async function sendContactMessage(
  message: ContactMessage
): Promise<ContactSendResult> {
  const config = credentials()

  if (!config) {
    console.warn('EmailJS credentials missing. Check your .env file.')
    return { ok: false, reason: 'not-configured' }
  }

  try {
    await emailjs.send(
      config.serviceId,
      config.templateId,
      { ...message, title: SUBJECT },
      config.publicKey
    )
    return { ok: true }
  } catch (error) {
    console.error('Contact message failed to send:', error)
    return { ok: false, reason: 'send-failed' }
  }
}
