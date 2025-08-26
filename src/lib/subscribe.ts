import { z } from 'zod'

export const subscribeSchema = z.object({
  email: z.email('Invalid email address'),
})

export type SubscribeFormData = z.infer<typeof subscribeSchema>

export type SubscribeState = {
  message: string
  isError: boolean
}
