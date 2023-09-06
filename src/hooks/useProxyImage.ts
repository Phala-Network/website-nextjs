import { useState, useEffect } from 'react'

export default function useProxyImage({
  url,
  block_id = '',
  page_id = '',
}: {
  url: string
  block_id?: string
  page_id?: string
}) {
  const [proxyUrl, setProxyUrl] = useState(url)
  useEffect(() => {
    ;(async () => {
      const params = new URLSearchParams()
      params.append('url', url)
      if (block_id) {
        params.append('block_id', block_id)
      }
      if (page_id) {
        params.append('page_id', page_id)
      }
      const res = await fetch(`/api/image?${params.toString()}`)
      const data = await res.json()
      setProxyUrl(data.url)
    })()
  }, [url])
  return proxyUrl
}
