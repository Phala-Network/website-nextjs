'use client'

import { useEffect, useState } from 'react'

const DSTACK_DOMAIN = 'dstack.org'

/**
 * Client-side hook to check if the current domain is dstack.org
 * This is used instead of server-side headers() to avoid making pages dynamic
 */
export function useIsDstack(): boolean {
  const [isDstack, setIsDstack] = useState(false)

  useEffect(() => {
    // Check the hostname directly on the client
    const host = window.location.hostname
    setIsDstack(host.includes(DSTACK_DOMAIN))
  }, [])

  return isDstack
}
