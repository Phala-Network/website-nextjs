'use client'

import { motion } from 'motion/react'
import { ImSpinner2 } from 'react-icons/im'

import Card from '@/components/Card'
import useQueryPosts from '@/hooks/useQueryPosts'
import type { ParsedListPage } from '@/lib/notion-client'
import { cn } from '@/lib/utils'

interface Props {
  initialPages: ParsedListPage[]
  nextCursor: string
}

export default function BlogClientWrapper({ initialPages, nextCursor }: Props) {
  const {
    pages = [],
    isLoading,
    load,
    hasMore,
  } = useQueryPosts({ initialPages, initialCursor: nextCursor })

  return (
    <>
      <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-12 xl:grid-cols-2 2xl:grid-cols-2 mt-8">
        {pages.map((page) => (
          <Card key={page.id} page={page} />
        ))}
      </div>
      <div
        className={cn('pt-20 pb-10 w-full flex items-center justify-center')}
      >
        {hasMore ? (
          <button
            className={cn(
              'py-4 px-16',
              'inline-flex flex-row items-center justify-center',
              'bg-white text-green-800 text-xl font-bold',
              'rounded-lg',
              isLoading ? 'opacity-75' : null,
            )}
            onClick={() => {
              load()
              if (typeof window !== 'undefined' && (window as any).umami) {
                ;(window as any).umami.track('blog_load_more')
              }
            }}
            disabled={isLoading}
          >
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{
                opacity: isLoading ? 1 : 0,
                width: isLoading ? 'auto' : 0,
              }}
              transition={{ duration: 0.2 }}
              className={cn(isLoading ? 'mr-2' : '')}
            >
              <ImSpinner2 className="h-5 w-5 text-primary-700 animate-spin" />
            </motion.span>
            View All Blogs
          </button>
        ) : null}
      </div>
    </>
  )
}
