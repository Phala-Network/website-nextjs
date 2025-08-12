'use client'

import Cal from '@calcom/embed-react'

export default function Form() {
  return (
    <Cal
      className="w-full"
      namespace="talk"
      calLink="forms/1fb43c51-5d32-4040-8c38-0a8e3ee7cc00"
      config={{ theme: 'light', layout: 'month_view' }}
    />
  )
}
