'use server'

import { z } from 'zod'

import { env } from '@/env'
import {
  type SubscribeState,
  subscribeSchema,
  upsertSubscriber,
} from '@/lib/subscribe'

export async function subscribe(
  _prevState: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  const rawData = {
    email: formData.get('email') as string,
  }

  try {
    if (!env.MAILERLITE_GROUP_NEWSLETTER) {
      return { message: 'Newsletter configuration error', isError: true }
    }

    const validatedData = subscribeSchema.parse(rawData)

    await upsertSubscriber({
      email: validatedData.email,
      groups: [env.MAILERLITE_GROUP_NEWSLETTER],
    })

    return { message: 'Subscribed.', isError: false }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        message: error.issues[0]?.message || 'Validation error',
        isError: true,
      }
    }

    if (error instanceof Error) {
      return { message: error.message, isError: true }
    }

    return { message: 'Internal Server Error', isError: true }
  }
}
