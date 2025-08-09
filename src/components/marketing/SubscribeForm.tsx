'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ImSpinner2 } from 'react-icons/im'
import { SlClose } from 'react-icons/sl'

import { useSubscribe } from '@/hooks/useSubscribe'
import { cn } from '@/lib/utils'

export default function SubscribeForm() {
  const [checked, setChecked] = useState(false)
  const {
    setEmail,
    onSubmit,
    isLoading,
    message,
    error,
    isSucceed,
    isError,
    dismiss,
  } = useSubscribe()
  return (
    <div
      className={cn(
        'row-start-1 col-span-full xl:col-start-2 xl:col-span-12 3xl:col-start-4 xl:px-10 bg-black-850',
      )}
    >
      <form
        className={cn('text-white py-16 flex flex-col gap-4')}
        onSubmit={(ev) => {
          ev.preventDefault()
          onSubmit()
        }}
      >
        <legend className={cn('text-[32px] font-bold max-w-xl')}>
          Get the latest Phala Content Straight To Your Inbox.
        </legend>
        <div
          className={cn('max-w-3xl flex flex-col lg:flex-row gap-6 relative')}
        >
          <motion.div
            className={cn(
              isSucceed ? 'bg-brand-400/95' : '',
              isError ? 'bg-red-400/95' : '',
              isSucceed || isError
                ? 'pointer-events-auto'
                : 'pointer-events-none',
              'absolute w-full h-full py-2 px-3 text-white text-left z-2 rounded leading-none flex flex-row items-center justify-between',
            )}
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: isSucceed || isError ? 1 : 0,
              y: isSucceed || isError ? 0 : -20,
            }}
          >
            {isSucceed && message ? message : ''}
            {isError && error ? error : ''}
            <button type="button" onClick={dismiss}>
              <SlClose className="h-5 w-5 text-gray-50 pointer-events-none" />
            </button>
          </motion.div>
          <input
            placeholder="Enter your email address"
            onChange={(ev) => setEmail(ev.target.value)}
            className={cn(
              'flex-1 rounded-xs border border-solid border-whiteAlpha-500 bg-transparent py-3 px-5',
            )}
          />
          <button
            type="submit"
            className={cn(
              'btn btn-lg btn-phala btn-rounded min-w-[240px] text-black uppercase inline-flex flex-row items-center justify-center transition-colors',
              'font-semibold text-sm lg:text-base xl:text-lg',
              'border border-whiteAlpha-500',
            )}
            disabled={isLoading || isError || !checked}
          >
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{
                opacity: isLoading ? 1 : 0,
                width: isLoading ? 'auto' : 0,
              }}
              transition={{ duration: 0.2 }}
              className={cn(isLoading ? 'mr-2' : '')}
            >
              <ImSpinner2 className="h-5 w-5 text-brand-700 animate-spin" />
            </motion.span>
            Subscribe Now
          </button>
        </div>
        <div className={cn('text-xs leading-5 lg:text-base lg:leading-6')}>
          <label className={cn('flex flex-row')}>
            <input
              className={cn('mr-3')}
              type="checkbox"
              onChange={(ev) => setChecked(ev.target.checked)}
            />
            <span>Yes, I agree to receive email communications from Phala</span>
          </label>
        </div>
      </form>
    </div>
  )
}
