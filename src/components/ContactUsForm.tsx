'use client';

import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import * as R from "ramda"

import { cn } from "@/lib/utils"


const contactUsSchema = z.object({
  firstname: z.string().min(4),
  email: z.string().email().email(),
  message: z.string().min(10),
})

type IContactUsInput = z.infer<typeof contactUsSchema>

async function sendPostFormRequest(input: IContactUsInput) {
  const data = {
    fields: R.toPairs(input).map(([key, value]) => ({ name: key, value, objectTypeId: '0-1' })),
  }
  try {
    const resp = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/20647882/9068f08e-31e5-452c-8159-32535126f95e`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    if (resp.status === 200) {
      const body = await resp.json();
      return { succeed: true, message: body.inlineMessage };
    }
    if (resp.status === 400) {
      // const body = await resp.json();
      return { succeed: false, error: 'Invalid Email Address.' };
    }
    console.error('Unexpected response:', resp);
    return { succeed: false, error: 'Unknown Error, please try again later.' };
  } catch (err) {
    console.error('Unexpected exception:', err);
    return { succeed: false, error: 'Unknown Error, please try again later.' };
  }
}

function FieldError({ error }: { error?: string }) {
  if (!error) {
    return null
  }
  return (
    <span
      className={cn('absolute bottom-[-1.5cqh] left-0 z-10 text-red-500 text-xs w-full bg-red-100 p-2 rounded-bl-xs rounded-br-xs')}
    >
      {error}
    </span>
  )
}

export function ContactUsForm({ className }: { className?: string }) {
  const { register, handleSubmit, formState: { isValid, errors } } = useForm<IContactUsInput>({
    resolver: zodResolver(contactUsSchema)
  })
  const onSubmit: SubmitHandler<IContactUsInput> = async (data) => {
    console.log(data)
    await sendPostFormRequest(data)
  }
  console.log('error', JSON.stringify(errors, null, 2))
  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      <legend className="text-md lg:text-24 font-bold mb-4">We help you build your future.<br />Share your vision:</legend>
      <fieldset className="flex flex-col lg:flex-row gap-3">
        <div className="relative w-full">
          <input
            {...register("firstname", { required: true })}
            type="text"
            placeholder="Gavin Belson"
            className="bg-black-50 rounded-xs px-5 py-2.5 w-full"
          />
          {errors.firstname && <FieldError error={errors.firstname.message} />}
        </div>
        <div className="relative w-full">
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="gavin@hooli.com"
            className="bg-black-50 rounded-xs px-5 py-2.5 w-full"
          />
          {errors.email && <FieldError error={errors.email.message} />}
        </div>
      </fieldset>
      <div className="relative w-full">
        <textarea
          {...register("message", { required: true })}
          className="bg-black-50 rounded-xs px-5 py-2.5 w-full"
          rows={7}
          placeholder={`I'm gonna be asking you to say a few words. Just a bit about how much of a fan you are, dedicated to the cause, my cause, maybe lead with a joke. Be good to have you there, Richard. Securing my legacy with you at my wing. Wear pants you can kneel in.`}
        >
        </textarea>
        {errors.message && <FieldError error={errors.message.message} />}
      </div>
      <div>
        <button className="btn btn-primary btn-blk" disabled={!isValid}>
          Submit
        </button>
      </div>
    </form>
  )
}
