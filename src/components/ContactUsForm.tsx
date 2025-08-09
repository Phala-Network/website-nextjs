'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { AiOutlineLoading } from 'react-icons/ai'
import * as z from 'zod'

import { cn } from '@/lib/utils'

const contactUsSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(10),
})

type IContactUsInput = z.infer<typeof contactUsSchema>

async function sendPostFormRequest(input: IContactUsInput) {
  try {
    const resp = await fetch('/api/contact-us', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })
    if (resp.status >= 200 && resp.status < 300) {
      return {
        succeed: true,
        message: 'Thank you to reach us, we will get back to you soon!',
      }
    }
    if (resp.status === 400) {
      const body = await resp.json()
      return { succeed: false, error: body.message }
    }
    return { succeed: false, error: 'Unknown Error, please try again later.' }
  } catch (err) {
    console.error('Unexpected exception:', err)
    return { succeed: false, error: 'Unknown Error, please try again later.' }
  }
}

function FieldError({ error }: { error?: string }) {
  if (!error) {
    return null
  }
  return (
    <span
      className={cn(
        'absolute mt-0 left-0 z-10 text-red-500 text-xs w-full bg-red-100 p-2 rounded-bl-xs rounded-br-xs block text-left untanglable',
      )}
    >
      {error}
    </span>
  )
}

export function ContactUsForm({
  legend,
  className,
}: {
  legend?: React.ReactNode
  className?: string
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
  } = useForm<IContactUsInput>({
    resolver: zodResolver(contactUsSchema),
    mode: 'onChange',
  })
  return (
    <form
      className={cn(className, 'relative p-2')}
      onSubmit={handleSubmit(sendPostFormRequest)}
    >
      {isSubmitSuccessful && (
        <>
          <div className="absolute top-0 left-0 z-10 w-full h-full bg-black-50/70 backdrop-blur-sm rounded-sm flex items-center justify-center">
            <div className="text-center">
              <div className="text-[24px] font-bold mb-4 text-phalaPurple-400">
                Thank you for your interest!
              </div>
              <div className="text-[16px] mb-4">
                We will get back to you soon.
              </div>
              <button
                className="btn btn-sm btn-phala rounded-sm"
                onClick={() => reset()}
              >
                OK
              </button>
            </div>
          </div>
        </>
      )}
      {legend}
      <fieldset className="w-full flex flex-col lg:flex-row gap-3">
        <div className="relative w-full">
          <input
            {...register('name', { required: true })}
            type="text"
            placeholder="Gavin Belson"
            className="bg-black-50 rounded-xs px-5 py-2.5 w-full"
          />
          {errors.name && (
            <FieldError error={errors.name.message?.toString()} />
          )}
        </div>
        <div className="relative w-full">
          <input
            {...register('email', { required: true })}
            type="email"
            placeholder="gavin@hooli.com"
            className="bg-black-50 rounded-xs px-5 py-2.5 w-full"
          />
          {errors.email && <FieldError error={errors.email.message} />}
        </div>
      </fieldset>
      <div className="relative w-full">
        <textarea
          {...register('message', { required: true })}
          className="bg-black-50 rounded-xs px-5 py-2.5 w-full"
          rows={7}
          placeholder={`I'm gonna be asking you to say a few words. Just a bit about how much of a fan you are, dedicated to the cause, my cause, maybe lead with a joke. Be good to have you there, Richard. Securing my legacy with you at my wing. Wear pants you can kneel in.`}
        ></textarea>
        {errors.message && <FieldError error={errors.message.message} />}
      </div>
      <div>
        <button
          className="btn btn-primary btn-blk relative"
          disabled={!isValid || isSubmitting}
        >
          <span className={cn(isSubmitting && 'text-transparent')}>Submit</span>
          {isSubmitting && (
            <span className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center">
              <AiOutlineLoading className="animate-spin" />
            </span>
          )}
        </button>
      </div>
    </form>
  )
}
