import { format } from 'date-fns'
import Link from 'next/link'
import { use } from 'react'
import { FiClock, FiTag } from 'react-icons/fi'

import type { ParsedListPage } from '@/lib/notion-client'

interface PostSuggestionsProps {
  pages: Promise<ParsedListPage[]>
  type: 'recent' | 'related'
}

export default function PostSuggestions({ pages, type }: PostSuggestionsProps) {
  const pagesData = use(pages)

  if (pagesData.length === 0) {
    return null
  }

  const icon = type === 'recent' ? FiClock : FiTag
  const title = type === 'recent' ? 'Recent Posts' : 'Related Posts'
  const Icon = icon

  return (
    <div className="rounded-2xl border p-6">
      <h3 className="text-lg font-semibold mb-4 font-sans flex items-center gap-2">
        <Icon className="w-5 h-5" />
        {title}
      </h3>
      <div className="space-y-4">
        {pagesData.map((page) => (
          <Link href={`/posts${page.slug}`} key={page.id} className="block">
            <h4 className="font-medium line-clamp-2 mb-1">{page.title}</h4>
            {page.publishedTime && (
              <p className="text-xs text-muted-foreground">
                {format(new Date(page.publishedTime), 'MMM dd, yyyy')}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
