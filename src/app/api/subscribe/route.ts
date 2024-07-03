import { Effect, Exit, Cause } from 'effect'
import * as S from '@effect/schema/Schema'
import { type ParseError } from '@effect/schema/ParseResult'

import { upsertSubscriber } from '@/lib/mailerlite'

const SubscribeSchema = S.Struct({
  email: S.propertySignature(
    S.String.pipe(
      S.pattern(
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
        {
          title: 'Email',
          message: () => 'Invalid email address',
        }
      ),
    )
  ).annotations({
    missingMessage: () => 'Email is required',
  })
})

const safeParseJson = (raw: unknown) => Effect.try(() => JSON.parse(raw as string)).pipe(Effect.orElse(() => Effect.succeed({})))

export async function POST(req: Request) {

  const exit = await Effect.runPromiseExit(Effect.gen(function* (_) {
    if (!process.env.MAILERLITE_GROUP_NEWSLETTER) {
      return yield* _(Effect.die('MAILERLITE_GROUP_NEWSLETTER is not set.'))
    }
    const raw = yield* _(Effect.tryPromise(() => req.text()))
    const parsed = yield* _(safeParseJson(raw))
    const decoded = yield* _(S.decodeUnknown(SubscribeSchema)(parsed))
    const result =yield* _(upsertSubscriber({
      ...decoded,
      groups: [process.env.MAILERLITE_GROUP_NEWSLETTER]
    }))
    console.log('result', result)
  }))

  const [code, body] = Exit.match(exit, {
    onSuccess: (value) => {
      console.log('Success', value)
      return [201, { message: 'Subscribed.' }] as const
    },
    onFailure: (cause) => Cause.match(cause, {
      onEmpty: [500, { message: 'Internal Server Error' }] as const,
      onFail: (error) => {
        if ((error as ParseError)._tag === 'ParseError') {
          return [400, { message: error.message }] as const
        }
        return [500, { message: 'Internal Server Error' as string }] as const
      },
      onDie: (defect) => {
        return [500, { message: `Defect: ${(defect as Error).message}` }] as const
      },
      onInterrupt: (_fiberId) => [500, { message: 'User rejected the request.' }] as const,
      onSequential: (left, right) => [500, { message: `(onSequential (left: ${left}) (right: ${right}))` }] as const,
      onParallel: (left, right) => [500, { message: `(onParallel (left: ${left}) (right: ${right}))` }] as const,
    })
  })
  return new Response(JSON.stringify(body), {
    status: code,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
