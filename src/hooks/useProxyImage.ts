import { useState, useEffect } from 'react'

export default function useProxyImage({
  image,
  block_id = '',
  page_id = '',
}: {
  image: { url: string; type: 'file' | 'external' }
  block_id?: string
  page_id?: string
}) {
  const [proxyUrl, setProxyUrl] = useState(image.url)
  useEffect(() => {
    ;(async () => {
      if (image.type === 'file') {
        const params = new URLSearchParams()
        params.append('url', image.url)
        if (block_id) {
          params.append('block_id', block_id)
        }
        if (page_id) {
          params.append('page_id', page_id)
        }
        try {
          const res = await fetch(`/api/image?${params.toString()}`)
          const data = await res.json()
          setProxyUrl(data.url)
        } catch (error) {
          console.error(error)
        }
      }
    })()
  }, [image])
  return proxyUrl
}
