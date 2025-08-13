import * as Schema from '@effect/schema/Schema'
import { Effect } from 'effect'

import { env } from '@/env'

type JSONSerializablePrimitive = string | number | boolean | null | undefined

const subscriberGroupSchema = Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  active_count: Schema.Number,
  sent_count: Schema.Number,
  opens_count: Schema.Number,
  open_rate: Schema.Struct({
    float: Schema.Number,
    string: Schema.String,
  }),
  clicks_count: Schema.Number,
  click_rate: Schema.Struct({
    float: Schema.Number,
    string: Schema.String,
  }),
  unsubscribed_count: Schema.Number,
  unconfirmed_count: Schema.Number,
  bounced_count: Schema.Number,
  junk_count: Schema.Number,
  created_at: Schema.String,
})

const subscriberSchema = Schema.Struct({
  id: Schema.String,
  email: Schema.String,
  status: Schema.String,
  source: Schema.String,
  sent: Schema.Number,
  opens_count: Schema.Number,
  clicks_count: Schema.Number,
  open_rate: Schema.Number,
  click_rate: Schema.Number,
  ip_address: Schema.Null,
  subscribed_at: Schema.String,
  unsubscribed_at: Schema.Null,
  created_at: Schema.String,
  updated_at: Schema.String,
  fields: Schema.Struct({
    name: Schema.NullOr(Schema.String),
    city: Schema.NullOr(Schema.String),
    company: Schema.NullOr(Schema.String),
    country: Schema.NullOr(Schema.String),
    last_name: Schema.NullOr(Schema.String),
    phone: Schema.NullOr(Schema.String),
    state: Schema.NullOr(Schema.String),
    z_i_p: Schema.NullOr(Schema.String),
  }),
})

//
//
//

interface UpsertSubscriberParams {
  email: string
  fields?: Record<string, JSONSerializablePrimitive>
  groups?: string[]
}

const upsertSubscriberResponseSchema = Schema.Struct({
  data: subscriberSchema,
  groups: Schema.NullishOr(Schema.Array(subscriberGroupSchema)),
  opted_in_at: Schema.NullishOr(Schema.String),
  opted_ip: Schema.NullishOr(Schema.String),
})

type UpsertSubscriberReturns = typeof upsertSubscriberResponseSchema.Type

export function upsertSubscriber(
  params: UpsertSubscriberParams,
): Effect.Effect<UpsertSubscriberReturns> {
  const { email, groups, ...fields } = params
  if (!env.MAILERLITE_API_KEY) {
    return Effect.die('MAILERLITE_API_KEY is not set.')
  }
  return Effect.promise(async () => {
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
      return Schema.decodeUnknownSync(upsertSubscriberResponseSchema)(data)
    }
    throw new Error(`Failed to upsert subscriber: ${resp.statusText}`)
  })
}
