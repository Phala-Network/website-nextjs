'use server'

import { z } from 'zod'

import { env } from '@/env'
import { type SubscribeState, subscribeSchema } from '@/lib/subscribe'

export async function subscribe(
  _prevState: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  const { CUSTOMERIO_SITE_ID, CUSTOMERIO_API_KEY, CUSTOMERIO_FORM_ID } = env
  if (!CUSTOMERIO_FORM_ID || !CUSTOMERIO_SITE_ID || !CUSTOMERIO_API_KEY) {
    return { message: 'Configuration error', isError: true }
  }
  const rawData = {
    email: formData.get('email'),
  }

  try {
    const data = subscribeSchema.parse(rawData)

    const credentials = `${CUSTOMERIO_SITE_ID}:${CUSTOMERIO_API_KEY}`
    const base64Credentials = Buffer.from(credentials).toString('base64')

    const response = await fetch(
      `https://track.customer.io/api/v1/forms/${CUSTOMERIO_FORM_ID}/submit`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${base64Credentials}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            ...data,
            timestamp: new Date().toISOString(),
          },
        }),
      },
    )

    if (!response.ok) {
      return { message: 'Internal Server Error', isError: true }
    }

    return { message: 'Subscribed.', isError: false }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        message: error.issues[0]?.message || 'Validation error',
        isError: true,
      }
    }

    return { message: 'Internal Server Error', isError: true }
  }
}
