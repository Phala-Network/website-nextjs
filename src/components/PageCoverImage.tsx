import {
  type ParsedPage,
  type ParsedListPage,
} from '@/lib/notion-client'
import { buildProxyImageUrl } from '@/lib/utils'

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
