import Link from 'next/link'

import { cn } from '@/lib/utils'
import type { Post } from '../../types/blog'

export interface BlogCardProps {
  post: Post
  dir?: 'row' | 'col'
  theme?: 'light' | 'dark' | 'light2'
}

export function BlogPostCard({ post, dir, theme }: BlogCardProps) {
  return (
    <Link
      href={post.path}
      className={cn(
        'relative rounded-sm p-2',
        dir === 'col'
          ? 'flex gap-2 flex-col grow'
          : 'flex gap-2 flex-col lg:flex-row lg:gap-10',
        theme === 'dark'
          ? 'bg-[#232323]'
          : theme === 'light'
            ? 'bg-white'
            : 'bg-black-50',
        'group',
      )}
      shallow
    >
      <div
        className={cn(
          dir === 'col'
            ? 'w-full max-h-full aspect-360/195'
            : 'w-[360px] h-[195px] max-w-full',
          'aspect-360/195 overflow-hidden rounded-sm grow shrink-0',
          theme === 'dark'
            ? 'border border-transparent'
            : theme === 'light'
              ? 'border border-gray-50'
              : 'border border-black-150',
          'overflow-hidden',
        )}
      >
        <img
          src={post.cover ? post.cover : '/blog/default_cover.jpg'}
          alt={post.title}
          className={cn(
            'w-full h-full object-cover',
            'group-hover:scale-105 transition-transform transform-gpu duration-200',
          )}
        />
      </div>
      <div
        className={cn(dir === 'col' ? 'py-4 px-6' : 'px-2.5 py-2 lg:py-4 pr-6')}
      >
        <h4
          className={cn(
            dir === 'col'
              ? 'text-[16px] lg:text-[20px]'
              : 'text-[20px] lg:text-[24px]',
            'font-bold',
            theme === 'dark' ? 'text-white' : 'text-black-800',
            dir === 'col' && 'h-16',
          )}
        >
          {post.title}
        </h4>
        <div
          className={cn(
            'mt-2 lg:mt-4 text-sm lg:text-base',
            theme === 'dark' ? 'text-black-200' : 'text-black-800',
          )}
        >
          {post.summary}
        </div>
        <div
          className={cn(
            'd-btn d-btn-link d-btn-sm -ml-3 lg:d-btn-md lg:-ml-4',
            theme === 'dark' && 'text-black-100',
          )}
        >
          READ MORE
        </div>
      </div>
    </Link>
  )
}
