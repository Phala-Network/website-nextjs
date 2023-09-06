import {
  removeMediumFormat,
  type ParsedPage,
  type ParsedListPage,
} from '@/lib/notion-client'
import useProxyImage from '@/hooks/useProxyImage'

export default function PageCoverImage({
  page,
  ...props
}: React.HTMLProps<HTMLImageElement> & { page: ParsedPage | ParsedListPage }) {
  const coverUrl = page.cover
    ? 'external' in page.cover
      ? removeMediumFormat(page.cover.external.url)
      : useProxyImage({ url: page.cover.file.url, page_id: page.id })
    : ''
  return <img {...props} src={coverUrl} alt={page.title} />
}
