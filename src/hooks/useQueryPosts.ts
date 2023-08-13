import { useState } from 'react'

import { ParsedListPage } from '@/lib/notion-client'

export default function useQueryPosts({
  initialPages,
  initialCursor,
  params = {},
}: {
  initialPages: ParsedListPage[]
  initialCursor: string
  params?: Record<string, string>
}) {
  const [pages, setPages] = useState(initialPages)
  const [isLoading, setIsLoading] = useState(false)
  const [cursor, setCursor] = useState(initialCursor)
  const load = async () => {
    setIsLoading(true)
    const res = await fetch(
      `/api/posts?${new URLSearchParams({
        cursor,
        ...params,
      })}`
    )
    const data = await res.json()
    setPages([...pages, ...data.pages])
    setCursor(data.next_cursor)
    setIsLoading(false)
  }
  return {
    isLoading,
    load,
    pages,
    hasMore: !!cursor,
  }
}
