import { useCallback, useState } from 'react'

// Poorman's Either
export type SendPostFormResult =
  | { succeed: true; message: string }
  | { succeed: false; error: string }

// @see https://emailregex.com/
const regexEmail =
  // eslint-disable-next-line no-control-regex
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

async function submit(email: string): Promise<SendPostFormResult> {
  try {
    const resp = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    if (resp.status >= 200 && resp.status < 300) {
      return { succeed: true, message: 'Subscribed.' }
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

export const useSubscribe = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [isSucceed, setIsSucceed] = useState(false)
  const [isError, setIsError] = useState(false)

  const onSubmit = useCallback(async (email: string) => {
    if (!regexEmail.test(email)) {
      setIsError(true)
      setError('Please enter a valid email address.')
      setTimeout(() => {
        setIsError(false)
      }, 5000)
      return
    }

    setIsLoading(true)
    const result = await submit(email)
    setIsLoading(false)

    if (result.succeed) {
      setIsSucceed(true)
      setMessage(result.message)
      setTimeout(() => {
        setIsSucceed(false)
      }, 3000)
    } else {
      setIsError(true)
      setError(result.error)
      setTimeout(() => {
        setIsError(false)
      }, 5000)
    }
  }, [])

  const dismiss = useCallback(() => {
    setIsError(false)
    setIsSucceed(false)
  }, [])

  return {
    onSubmit,
    isLoading,
    message,
    error,
    isSucceed,
    isError,
    dismiss,
  }
}
