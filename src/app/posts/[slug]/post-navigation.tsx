import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { use } from 'react'

import type { ParsedListPage } from '@/lib/notion-client'

interface PostNavigationProps {
  navigation: Promise<{
    beforePages: ParsedListPage[]
    nextPages: ParsedListPage[]
  }>
}

function PostNavigation({ navigation }: PostNavigationProps) {
  const { beforePages, nextPages } = use(navigation)

  const placeholder = <div className="flex-1 p-4" />
  if (beforePages.length === 0 && nextPages.length === 0) {
    return null
  }

  return (
    <nav className="flex flex-col sm:flex-row gap-8">
      {beforePages.length > 0 ? (
        <Link
          href={`/posts${beforePages[0].slug}`}
          className="flex-1 p-4 border rounded-lg space-y-2"
        >
          <div className="flex items-center gap-2">
            <ArrowLeft size={16} />
            <span className="text-sm uppercase">Previous</span>
          </div>

          <div className="font-medium line-clamp-1">{beforePages[0].title}</div>
        </Link>
      ) : (
        placeholder
      )}

      {nextPages.length > 0 ? (
        <Link
          href={`/posts${nextPages[0].slug}`}
          className="flex-1 p-4 border rounded-lg space-y-2"
        >
          <div className="flex items-center gap-2 justify-end">
            <span className="text-sm uppercase">Next</span>
            <ArrowRight size={16} />
          </div>

          <div className="font-medium line-clamp-1 text-right">
            {nextPages[0].title}
          </div>
        </Link>
      ) : (
        placeholder
      )}
    </nav>
  )
}

export default PostNavigation
