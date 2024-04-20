'use client'

import { atom, useSetAtom } from 'jotai'
import { type GenericComponent } from '@/types/components'
import { Button } from 'react-aria-components'
import { IoIosMail } from "react-icons/io"
import { AiOutlineLoading } from "react-icons/ai"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import * as R from 'ramda'
import Turnstile, { useTurnstile } from "react-turnstile"

import { cn } from '@/lib/utils'
import { OpenModalButton, Modal } from '@/components/Modal'

export const JoinWaitlistModalVisibleAtom = atom(false)

const contactUsSchema = z.object({
  email: z.string().email(),
  turnstile: z.string().min(1),
})

type IContactUsInput = z.infer<typeof contactUsSchema>

async function sendPostFormRequest(input: IContactUsInput) {
  const resp = await fetch('/api/waitlist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(input),
  })
  if (resp.status === 200) {
    return { succeed: true, message: 'Thank you for joining the waitlist!' }
  }
  const body = await resp.json()
  return { succeed: false, error: body.error }
}

function FieldError({ error }: { error?: string }) {
  if (!error) {
    return null
  }
  return (
    <span
      className={cn('absolute mt-[-6px] left-0 z-10 text-red-500 text-xs w-full bg-red-100 p-2 pl-12 rounded-bl-xs rounded-br-xs block text-left untanglable')}
    >
      {error}
    </span>
  )
}

export function JoinWaitlistForm() {
  const setVisible = useSetAtom(JoinWaitlistModalVisibleAtom)
  const { register, handleSubmit, reset, formState: { errors, isValid, isSubmitting, isSubmitSuccessful }, setValue } = useForm<IContactUsInput>({
    resolver: zodResolver(contactUsSchema),
    mode: 'onChange',
  })
  const turnstile = useTurnstile()
  return (
    <form className="text-black-900 flex flex-col gap-6" onSubmit={handleSubmit(async (input) => {
      await sendPostFormRequest(input)
      turnstile.reset()
    })}>
      {isSubmitSuccessful && (
        <>
          <div className="absolute top-0 left-0 z-10 w-full h-full bg-black-900 rounded-sm flex items-center justify-center">
            <div className="text-center">
              <div className="text-24 font-bold mb-6 text-ai-agent">Thank you for your interest!</div>
              <div className="text-16 leading-7 mb-8 px-10 text-white">
                Awesome! You've secured your spot on the Agent Wars Waitlist. Keep an eye on your inbox for your invite code when we launch the game. Stay Tuned!
              </div>
              <Button
                className="btn btn-sm btn-blk bg-transparent btn-rounded border-whiteAlpha-700 min-w-40"
                onPress={() => {
                  setVisible(false)
                  reset()
                }}
              >
                OK
              </Button>
            </div>
          </div>
        </>
      )}
      <p className="text-16 text-black-200">
        Join the waitlist for Agent Wars and we'll send your exclusive invite code directly to your inbox as the release date approaches.
      </p>
      <div className="relative w-full">
        <label className="d-input d-input-bordered flex items-center gap-2 grow">
          <IoIosMail className="w-6 h-6 opacity-70 text-black-500" />
          <input
            {...register("email", { required: true })}
            type="email"
            name="email"
            className="grow"
            placeholder="Email"
          />
        </label>
        {errors.email && <FieldError error={errors.email.message} />}
      </div>
      <Turnstile
        theme="dark"
        fixedSize={true}
        sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        refreshExpired="auto"
        onVerify={(token) => setValue("turnstile", token)}
      />
      <Button
        type="submit"
        className="btn btn-primary btn-ai-agent border-0 w-[65%] mx-auto mt-0 items-center"
        isDisabled={!isValid || isSubmitting}
      >
        {isSubmitting && (
          <AiOutlineLoading className="animate-spin text-white mr-2.5" />
        )}
        Join Now
      </Button>
    </form>
  )
}

export function JoinWaitlistButton({ className, children }: GenericComponent) {
  return (
    <OpenModalButton
      className={className}
      visiableAtom={JoinWaitlistModalVisibleAtom}
    >
      {children || 'Join the Waitlist'}
    </OpenModalButton>
  )
}

export function JoinWaitlistModal() {
  return (
    <Modal
      visiableAtom={JoinWaitlistModalVisibleAtom}
      title="Join the Agent Wars Waitlist"
      theme="dark"
    >
      <JoinWaitlistForm />
    </Modal>
  )
}
