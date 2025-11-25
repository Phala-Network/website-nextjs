import { headers } from 'next/headers'

export const DSTACK_DOMAIN = 'dstack.org'

/**
 * Check if the current request is from dstack.org domain
 * This is used server-side to conditionally render Phala branding
 *
 * In development, you can test standalone mode by adding
 * `127.0.0.1 dstack.org` to /etc/hosts and visiting http://dstack.org:3000
 */
export async function isDstackDomain(): Promise<boolean> {
  const headersList = await headers()
  const host = headersList.get('host') || ''
  return host.includes(DSTACK_DOMAIN)
}

/**
 * Get the base URL based on the current domain
 */
export async function getDstackBaseUrl(): Promise<string> {
  const isDstack = await isDstackDomain()
  return isDstack ? `https://${DSTACK_DOMAIN}` : 'https://phala.com/dstack'
}
