'use client'

import type { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { format } from 'date-fns'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { FiCalendar, FiCheck, FiClock, FiCopy } from 'react-icons/fi'

import { renderBlocks } from '@/components/notion-render/Block'
import TagLink from '@/components/tag-link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import type { ParsedPage } from '@/lib/notion-client'
import { cn } from '@/lib/utils'

const remap: Readonly<Record<string, string>> = {
  '2250317e04a18058a89af73b666d10e0': '2250317e-04a1-8058-a89a-f73b666d10e0',
  '2300317e04a18074a132f0b95e4cc4d5': '2300317e-04a1-8074-a132-f0b95e4cc4d5',
}

interface Heading {
  id: string
  text: string
  level: number
}

interface Props {
  url: string
  page: ParsedPage
}

const extractHeadings = (blocks: BlockObjectResponse[]) => {
  const extractedHeadings: Heading[] = []
  for (const block of blocks) {
    if (block.type === 'heading_2') {
      const text = block.heading_2.rich_text
        .map((item) => item.plain_text)
        .join('')
      if (!text) continue

      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()

      extractedHeadings.push({ id, text, level: 2 })
    }
  }

  return extractedHeadings
}

export default function Post({ url, page }: Props) {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isCopyingForAI, setIsCopyingForAI] = useState(false)

  const headings = useMemo(() => extractHeadings(page.blocks), [page.blocks])

  // Table of Contents intersection observer with improved active section tracking
  useEffect(() => {
    if (headings.length === 0) return

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting)

      if (visibleEntries.length === 0) return

      // If multiple sections are visible, prioritize the one closest to the top
      let activeEntry = visibleEntries[0]
      let minDistance = Math.abs(visibleEntries[0].boundingClientRect.top)

      for (const entry of visibleEntries) {
        const distance = Math.abs(entry.boundingClientRect.top)
        if (distance < minDistance) {
          minDistance = distance
          activeEntry = entry
        }
      }

      setActiveSection(activeEntry.target.id)
    }

    const observer = new IntersectionObserver(observerCallback, {})

    // Observe all heading elements
    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [headings])

  // Copy content for AI function
  const copyForAI = useCallback(async () => {
    setIsCopyingForAI(true)
    try {
      const markdownContent = `# ${page.title}

**Published:** ${format(new Date(page.publishedTime), 'MMMM dd, yyyy')}
**Tags:** ${page.tags.join(', ')}
**URL:** ${url}/posts${page.slug}

---

${page.markdown}`

      await navigator.clipboard.writeText(markdownContent)
      setTimeout(() => setIsCopyingForAI(false), 2000)
    } catch (err) {
      console.error('Failed to copy content for AI:', err)
      setIsCopyingForAI(false)
    }
  }, [page.title, page.publishedTime, page.tags, page.slug, page.markdown, url])

  // Get processed cover image ID
  const coverImageId = (() => {
    const id = page.id.replace(/-/g, '')
    return remap[id] || id
  })()

  // Render table of contents
  const renderTableOfContents = () => {
    if (headings.length === 0) return null

    return (
      <div>
        <span className="font-semibold font-sans text-lg">On this page</span>
        <nav className="mt-4">
          <ul className="space-y-4">
            {headings.map((heading) => (
              <li key={heading.id}>
                <a
                  href={`#${heading.id}`}
                  className={cn(
                    'line-clamp-1 text-muted-foreground',
                    activeSection === heading.id &&
                      'font-medium text-foreground',
                  )}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  }

  return (
    <section>
      {/* Breadcrumb Navigation */}
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>
          {page.publishedTime && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage suppressHydrationWarning>
                  {format(new Date(page.publishedTime), 'yyyy')}
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage suppressHydrationWarning>
                  {format(new Date(page.publishedTime), 'MMMM')}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>

      {/* Article Header */}
      <header className="mb-4 max-w-prose xl:max-w-3xl">
        <h1 className="my-6 text-4xl font-bold">{page.title}</h1>

        <div className="flex flex-wrap items-center justify-between">
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <FiCalendar className="w-4 h-4" />
              <span suppressHydrationWarning>
                {format(new Date(page.publishedTime), 'MMMM dd, yyyy')}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <FiClock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={copyForAI}
            disabled={isCopyingForAI}
            title="Copy article content in markdown format for AI"
          >
            {isCopyingForAI ? (
              <>
                <FiCheck className="w-3 h-3" />
                Copied!
              </>
            ) : (
              <>
                <FiCopy className="w-3 h-3" />
                Copy for AI
              </>
            )}
          </Button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex gap-16 items-start max-lg:flex-col">
        {/* Article Content */}
        <article className="w-full max-w-prose xl:max-w-3xl">
          {page.cover && (
            // biome-ignore lint/performance/noImgElement: Using external CDN image
            <img
              src={`https://img0.phala.world/cover/1744x974/${coverImageId}.jpg?z=123`}
              alt={page.title}
              className="mb-8 mt-0 aspect-video w-full rounded-lg border object-cover"
            />
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {page.tags
              .filter((tag) => tag !== 'Changelog')
              .map((tag) => (
                <TagLink
                  key={`tag-${tag}`}
                  href={`/tags/${encodeURIComponent(tag)}`}
                >
                  {tag}
                </TagLink>
              ))}
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-3xl">
            {renderBlocks(page.blocks)}
          </div>
        </article>

        {/* Sidebar - Now only Table of Contents */}
        <aside className="space-y-4 lg:sticky lg:top-20 flex-1 max-lg:hidden">
          {/* Table of Contents */}
          {renderTableOfContents()}
        </aside>
      </div>
    </section>
  )
}
