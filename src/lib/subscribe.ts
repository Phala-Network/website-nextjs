import { z } from 'zod'

import { env } from '@/env'

type JSONSerializablePrimitive = string | number | boolean | null | undefined

// https://emailregex.com/
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const subscribeSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .regex(EMAIL_REGEX, 'Invalid email address'),
})

export type SubscribeFormData = z.infer<typeof subscribeSchema>

export type SubscribeState = {
  message: string
  isError: boolean
}

interface SubscriberGroup {
  id: string
  name: string
  active_count: number
  sent_count: number
  opens_count: number
  open_rate: {
    float: number
    string: string
  }
  clicks_count: number
  click_rate: {
    float: number
    string: string
  }
  unsubscribed_count: number
  unconfirmed_count: number
  bounced_count: number
  junk_count: number
  created_at: string
}

interface Subscriber {
  id: string
  email: string
  status: string
  source: string
  sent: number
  opens_count: number
  clicks_count: number
  open_rate: number
  click_rate: number
  ip_address: null
  subscribed_at: string
  unsubscribed_at: null
  created_at: string
  updated_at: string
  fields: {
    name: string | null
    city: string | null
    company: string | null
    country: string | null
    last_name: string | null
    phone: string | null
    state: string | null
    z_i_p: string | null
  }
}

interface UpsertSubscriberParams {
  email: string
  fields?: Record<string, JSONSerializablePrimitive>
  groups?: string[]
}

interface UpsertSubscriberResponse {
  data: Subscriber
  groups: SubscriberGroup[] | null
  opted_in_at: string | null
  opted_ip: string | null
}

export async function upsertSubscriber(
  params: UpsertSubscriberParams,
): Promise<UpsertSubscriberResponse> {
  const { email, groups, ...fields } = params

  if (!env.MAILERLITE_API_KEY) {
    throw new Error('MAILERLITE_API_KEY is not set.')
  }

  const resp = await fetch(`https://connect.mailerlite.com/api/subscribers`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      fields,
      groups,
    }),
    headers: {
      Authorization: `Bearer ${env.MAILERLITE_API_KEY}`,
      'Content-Type': 'application/json',
    },
  })

  if (resp.status === 200 || resp.status === 201) {
    const data = await resp.json()
    console.log(data)
    return data as UpsertSubscriberResponse
  }

  throw new Error(`Failed to upsert subscriber: ${resp.statusText}`)
}
