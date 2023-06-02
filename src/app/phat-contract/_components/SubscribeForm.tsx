'use client';

import { ImSpinner2 } from 'react-icons/im'

import { cn } from '@/lib/utils'
import { useSubscribe } from '@/hooks/useSubscribe'

export default function SubscribeForm() {
  const { setEmail, onSubmit, isLoading, message, error, isSucceed, isError } = useSubscribe(
    '20647882',
    '0b071cad-c7bd-44dd-9f2d-e1a822e2e1cf'
  )
  return (
    <div>
      <form
        className="flex flex-col md:flex-row gap-y-2 relative w-full"
        onSubmit={ev => {
          ev.preventDefault()
          onSubmit()
        }}
      >
        {isSucceed && message ? (
          <div className="absolute w-full h-full py-2 px-3 text-white text-left bg-brand-400/95 z-[2] rounded">
            {message}
          </div>
        ) : null}
        {isError && error ? (
          <div className="absolute w-full h-full py-2 px-3 text-white text-left bg-red-400/95 z-[2] rounded">
            {error}
          </div>
        ) : null}
        <input
          placeholder="Enter your email address"
          className={cn(
            "px-3 py-2 border border-solid border-[#E2E8F0] rounded md:rounded-r-none md:min-w-[20rem]"
          )}
          onChange={ev => setEmail(ev.target.value)}
        />
        <button
          className={cn('btn md:btn-lg btn-purple md:rounded-l-none gap-1.5 items-center')}
          type="submit"
          disabled={isLoading || isError}
        >
          {isLoading ? (<ImSpinner2 className="h-5 w-5 text-brand-700 animate-spin" />) : null}
          Subscribe
        </button>
      </form>
      <p className="px-0.5 mt-2.5 text-sm text-white text-left">Stay informed about our no-code tool launch!</p>
    </div>
  )
}

