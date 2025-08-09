'use client'

import { renderBlocks } from '@/components/notion-render/Block'
import NotionBlocksProvider from '@/components/notion-render/NotionBlocksProvider'
import type { ParsedBlock } from '@/lib/notion-client'

interface PageContentProps {
  blocks: ParsedBlock[]
}

export default function PageContent({ blocks }: PageContentProps) {
  return (
    <div className="text-base">
      <NotionBlocksProvider blocks={blocks}>
        {renderBlocks(blocks)}
      </NotionBlocksProvider>
    </div>
  )
}