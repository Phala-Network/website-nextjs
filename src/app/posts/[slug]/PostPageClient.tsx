'use client'

import dayjs from 'dayjs'
import { useCallback, useEffect, useState } from 'react'
import {
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiCheck,
  FiClock,
  FiCopy,
} from 'react-icons/fi'

import { renderBlocks } from '@/components/notion-render/Block'
import NotionBlocksProvider from '@/components/notion-render/NotionBlocksProvider'
import TagLink from '@/components/TagLink'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import type { ParsedListPage, ParsedPage } from '@/lib/notion-client'
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
  recentPages: ParsedListPage[]
  similarPages: ParsedListPage[]
  beforePages: ParsedListPage[]
  nextPages: ParsedListPage[]
}

export default function PostPageClient({
  url,
  page,
  recentPages = [],
  similarPages = [],
  beforePages = [],
  nextPages = [],
}: Props) {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [headings, setHeadings] = useState<Heading[]>([])
  const [isCopyingForAI, setIsCopyingForAI] = useState(false)

  // Extract headings from page content (only H2 headings)
  const extractHeadings = useCallback(() => {
    const headingElements = document.querySelectorAll('.notion_heading_2')
    const extractedHeadings: Heading[] = []

    headingElements.forEach((heading, index) => {
      const text = heading.textContent?.trim() || ''
      if (!text) return

      let id = heading.id

      // Create ID if it doesn't exist
      if (!id) {
        id = text
          .toLowerCase()
          .replace(/[^a-z0-9\s]/g, '')
          .replace(/\s+/g, '-')
          .substring(0, 50)

        // Ensure uniqueness
        if (extractedHeadings.find((h) => h.id === id)) {
          id = `${id}-${index}`
        }

        heading.id = id
      }

      extractedHeadings.push({ id, text, level: 2 })
    })

    setHeadings(extractedHeadings)
  }, [])

  // Extract headings after content loads
  useEffect(() => {
    const timer = setTimeout(extractHeadings, 1000)
    return () => clearTimeout(timer)
  }, [extractHeadings])

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

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-10% 0px -80% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    })

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

**Published:** ${dayjs(page.publishedTime).format('MMMM DD, YYYY')}
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
  const renderTableOfContents = () => (
    <div className="bg-muted shadow rounded-2xl border p-6 max-lg:hidden">
      <span className="font-semibold font-sans text-lg">On this page</span>
      {headings.length > 0 ? (
        <nav className="mt-4">
          <ul className="space-y-2">
            {headings.map((heading) => (
              <li key={heading.id}>
                <a
                  href={`#${heading.id}`}
                  className={cn(
                    'text-sm line-clamp-1',
                    activeSection === heading.id && 'font-semibold',
                  )}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <div className="mt-4 text-sm text-muted-foreground">
          Loading table of contents...
        </div>
      )}
    </div>
  )

  // Render post navigation
  const renderPostNavigation = () => (
    <nav className="flex flex-col sm:flex-row gap-4 pt-8 border-t mt-8">
      {beforePages.length > 0 && (
        <a
          href={`/posts${beforePages[0].slug}`}
          className="flex-1 p-4 border rounded-md block"
        >
          <div className="flex items-start gap-3">
            <FiArrowLeft className="w-5 h-5 mt-0.5 shrink-0" />
            <div>
              <div className="text-xs text-muted-foreground font-medium uppercase">
                Previous
              </div>
              <div className="text-sm font-medium line-clamp-2">
                {beforePages[0].title}
              </div>
            </div>
          </div>
        </a>
      )}

      {nextPages.length > 0 && (
        <a
          href={`/posts${nextPages[0].slug}`}
          className="flex-1 p-4 text-right border rounded-md block"
        >
          <div className="flex items-start gap-3">
            <div className="text-right">
              <div className="text-xs text-muted-foreground font-medium uppercase">
                Next
              </div>
              <div className="text-sm font-medium line-clamp-2">
                {nextPages[0].title}
              </div>
            </div>
            <FiArrowRight className="w-5 h-5 mt-0.5 shrink-0" />
          </div>
        </a>
      )}
    </nav>
  )

  return (
    <section className="py-32 flex flex-col items-center">
      <div className="mx-auto px-4 max-w-full">
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
                  <BreadcrumbPage>
                    {dayjs(page.publishedTime).format('YYYY')}
                  </BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    {dayjs(page.publishedTime).format('MMMM')}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>

        {/* Article Header */}
        <header className="mb-4 max-w-prose">
          <h1 className="my-6 text-4xl font-bold">{page.title}</h1>

          <div className="flex flex-wrap items-center justify-between">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <FiCalendar className="w-4 h-4" />
                <span>{dayjs(page.publishedTime).format('MMMM DD, YYYY')}</span>
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
        <div className="flex gap-8 max-lg:flex-col">
          {/* Article Content */}
          <article className="w-full max-w-prose">
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
            <div className="prose">
              <NotionBlocksProvider blocks={page.blocks}>
                {renderBlocks(page.blocks)}
              </NotionBlocksProvider>
            </div>

            {/* Post Navigation */}
            {renderPostNavigation()}
          </article>

          {/* Sidebar */}
          <aside className="space-y-4 sticky lg:top-20 lg:max-w-sm w-full">
            {/* Table of Contents */}
            {renderTableOfContents()}

            {/* Recent Posts */}
            {recentPages.length > 0 && (
              <div className="bg-muted shadow rounded-2xl border p-6">
                <h3 className="text-lg font-semibold mb-4 font-sans">
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {recentPages.map((recentPage) => (
                    <a
                      href={`/posts${recentPage.slug}`}
                      key={recentPage.id}
                      className="block"
                    >
                      <h4 className="text-sm font-medium line-clamp-2 mb-1">
                        {recentPage.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {dayjs(recentPage.publishedTime).format('MMM DD, YYYY')}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Related Posts */}
            {similarPages.length > 0 && (
              <div className="bg-muted shadow rounded-2xl border p-6">
                <h3 className="text-lg font-semibold mb-4 font-sans">
                  Related Posts
                </h3>
                <div className="space-y-4">
                  {similarPages.map((similarPage) => (
                    <a
                      href={`/posts${similarPage.slug}`}
                      key={similarPage.id}
                      className="block"
                    >
                      <h4 className="text-sm font-medium line-clamp-2 mb-1">
                        {similarPage.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {dayjs(similarPage.publishedTime).format(
                          'MMM DD, YYYY',
                        )}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  )
}
