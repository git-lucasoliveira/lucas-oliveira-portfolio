import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const send = vi.fn()

vi.mock('emailjs-com', () => ({ default: { send: (...args: unknown[]) => send(...args) } }))

const { sendContactMessage } = await import('@/lib/contact')

const message = {
  name: 'Ana',
  email: 'ana@example.com',
  message: 'Olá',
}

const credentials = {
  NEXT_PUBLIC_EMAILJS_SERVICE_ID: 'service',
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: 'template',
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: 'key',
}

beforeEach(() => {
  send.mockReset()
  vi.spyOn(console, 'warn').mockImplementation(() => {})
  vi.spyOn(console, 'error').mockImplementation(() => {})
  for (const [name, value] of Object.entries(credentials)) {
    vi.stubEnv(name, value)
  }
})

afterEach(() => {
  vi.unstubAllEnvs()
  vi.restoreAllMocks()
})

describe('sending a contact message', () => {
  it('reports success once the provider accepts it', async () => {
    send.mockResolvedValue({ status: 200 })
    await expect(sendContactMessage(message)).resolves.toEqual({ ok: true })
  })

  it('passes the visitor fields and a subject to the provider', async () => {
    send.mockResolvedValue({ status: 200 })
    await sendContactMessage(message)

    const [serviceId, templateId, payload, publicKey] = send.mock.calls[0]
    expect(serviceId).toBe('service')
    expect(templateId).toBe('template')
    expect(publicKey).toBe('key')
    expect(payload).toMatchObject(message)
    expect(payload.title).toBeTruthy()
  })

  it('reports a configuration problem when a credential is missing', async () => {
    vi.stubEnv('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY', '')

    await expect(sendContactMessage(message)).resolves.toEqual({
      ok: false,
      reason: 'not-configured',
    })
    expect(send).not.toHaveBeenCalled()
  })

  it('reports a send failure instead of throwing at the caller', async () => {
    send.mockRejectedValue(new Error('network down'))

    await expect(sendContactMessage(message)).resolves.toEqual({
      ok: false,
      reason: 'send-failed',
    })
  })
})
