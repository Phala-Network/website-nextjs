import {
  removeMediumFormat,
  type ParsedPage,
  type ParsedListPage,
} from '@/lib/notion-client'
import { useProxyPageImage } from '@/hooks/useProxyImage'

export default function PageCoverImage({
  page,
  ...props
}: React.HTMLProps<HTMLImageElement> & { page: ParsedPage | ParsedListPage }) {
  const coverUrl = useProxyPageImage(page)
  return <img {...props} src={coverUrl} alt={page.title} />
}
