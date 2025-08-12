import { buildProxyImageUrl } from '@/lib/image'
import type { ParsedListPage, ParsedPage } from '@/lib/notion-client'

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
  const coverUrl = buildProxyImageUrl(page, {
    width,
    height,
  })
  return (
    <img
      width={width}
      height={height}
      className={className}
      src={coverUrl}
      alt={page.title}
    />
  )
}
