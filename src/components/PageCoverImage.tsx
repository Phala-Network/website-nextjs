'use client';

import { BsImage } from 'react-icons/bs'

import {
  type ParsedPage,
  type ParsedListPage,
} from '@/lib/notion-client'
import { cn } from '@/lib/utils'
import { useProxyImage } from '@/hooks/useProxyImage'

export default function PageCoverImage({
  page,
  width,
  height,
  className = '',
}: {
  page: ParsedPage | ParsedListPage
  width: number
  height: number
  className?: string
}) {
  const coverUrl = useProxyImage(page, {
    width,
    height,
  })
  return coverUrl ? (
    <img
      width={width}
      height={height}
      className={className}
      src={coverUrl}
      alt={page.title}
    />
  ) : (
    <div
      className={cn(
        "flex items-center justify-center bg-gray-200",
        className,
      )}
    >
      <BsImage color="#D1D5DB" size={50} />
    </div>
  )
}
