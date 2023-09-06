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
  const coverUrl = useProxyImage({
    image: {
      type: page.cover ? page.cover.type : 'external',
      url: page.cover ? page.cover.type == 'external' ? removeMediumFormat(page.cover.external.url) : page.cover.file.url : '',
    },
    page_id: page.id
  })
  return <img {...props} src={coverUrl} alt={page.title} />
}
