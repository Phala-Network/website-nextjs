import { useState, useEffect } from 'react'
import { type ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import {
  removeMediumFormat,
  type ParsedPage,
  type ParsedListPage,
} from '@/lib/notion-client'

async function requestProxyImage(params: Record<string, string>) {
  const query = new URLSearchParams(params)
  try {
    const res = await fetch(`/api/image?${query.toString()}`)
    const data = await res.json()
    return data.url
  } catch (error) {
    console.error(error)
  }
}

export function useProxyPageImage(page: ParsedPage | ParsedListPage) {
  const [proxyUrl, setProxyUrl] = useState(
    page.cover
      ? page.cover.type == 'external'
        ? removeMediumFormat(page.cover.external.url)
        : page.cover.file.url
      : ''
  )
  useEffect(() => {
    ;(async () => {
      if (page.cover && page.cover.type === 'file') {
        const url = await requestProxyImage({
          url: page.cover.file.url,
          page_id: page.id,
        })
        if (url) {
          setProxyUrl(url)
        }
      }
    })()
  }, [page])
  return proxyUrl
}

export function useProxyBlockImage(block: ImageBlockObjectResponse) {
  const [proxyUrl, setProxyUrl] = useState(
    block.image.type == 'external'
      ? block.image.external.url
      : block.image.file.url
  )
  useEffect(() => {
    ;(async () => {
      if (block.image.type === 'file') {
        const url = await requestProxyImage({
          url: block.image.file.url,
          block_id: block.id,
        })
        if (url) {
          setProxyUrl(url)
        }
      }
    })()
  }, [block])
  return proxyUrl
}
