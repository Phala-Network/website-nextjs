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

interface ProxyImageOptions {
  width: number
  height: number
}

export function useProxyImage(
  source: ParsedListPage | ParsedPage | ImageBlockObjectResponse,
  options?: ProxyImageOptions
) {
  const [proxyUrl, setProxyUrl] = useState('')

  const getImageData = () => {
    if ('cover' in source && source.cover) {
      if (source.cover.type === 'external') {
        return {
          page_id: source.id,
          type: 'external',
          url: removeMediumFormat(source.cover.external.url),
        }
      }
      return {
        page_id: source.id,
        type: 'file',
        url: source.cover.file.url,
      }
    }
    if ('image' in source && source.image) {
      if (source.image.type === 'external') {
        return {
          block_id: source.id,
          type: 'external',
          url: removeMediumFormat(source.image.external.url),
        }
      }
      return {
        block_id: source.id,
        type: 'file',
        url: source.image.file.url,
      }
    }
    return null
  }

  useEffect(() => {
    ;(async () => {
      const data = getImageData()
      if (!data) {
        return
      }
      if (!options && data.type === 'external') {
        setProxyUrl(data.url)
        return
      }
      const params: Record<string, string> = {
        url: data.url,
      }
      if (data.page_id) {
        params.page_id = data.page_id
      }
      if (data.block_id) {
        params.block_id = data.block_id
      }
      if (options && options.width) {
        params.width = `${options.width}`
      }
      if (options && options.height) {
        params.height = `${options.height}`
      }
      const url = await requestProxyImage(params)
      if (url) {
        setProxyUrl(url)
      }
    })()
  }, [source])

  return proxyUrl
}
