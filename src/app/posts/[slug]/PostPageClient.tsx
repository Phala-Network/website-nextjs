'use client'

import dayjs from 'dayjs'
import { type AnchorHTMLAttributes, useEffect, useState } from 'react'
import { BiRss } from 'react-icons/bi'
import {
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiCheck,
  FiClock,
  FiCopy,
  FiTag,
} from 'react-icons/fi'

import { renderBlocks } from '@/components/notion-render/Block'
import NotionBlocksProvider from '@/components/notion-render/NotionBlocksProvider'
import TableOfContents from '@/components/TableOfContents'
import { env } from '@/env'
import type { ParsedListPage, ParsedPage } from '@/lib/notion-client'

const remap: Readonly<Record<string, string>> = {
  '2250317e04a18058a89af73b666d10e0': '2250317e-04a1-8058-a89a-f73b666d10e0',
  '2300317e04a18074a132f0b95e4cc4d5': '2300317e-04a1-8074-a132-f0b95e4cc4d5',
}

interface Props {
  page: ParsedPage
  recentPages: ParsedListPage[]
  similarPages: ParsedListPage[]
  beforePages: ParsedListPage[]
  nextPages: ParsedListPage[]
}

function AboutLink({
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className="text-center text-xs text-green-700 font-medium leading-none hover:text-green-800 transition-colors px-3 py-2 rounded-md hover:bg-green-50"
      {...props}
    >
      {children}
    </a>
  )
}

export default function PostPageClient({
  page,
  recentPages = [],
  similarPages = [],
  beforePages = [],
  nextPages = [],
}: Props) {
  // State for copy for AI button
  const [isCopyingForAI, setIsCopyingForAI] = useState(false)

  // Copy content for AI function
  const copyForAI = async () => {
    setIsCopyingForAI(true)
    try {
      // Create markdown content
      const markdownContent = `# ${page.title}

**Published:** ${dayjs(page.publishedTime).format('MMMM DD, YYYY')}
**Tags:** ${page.tags.join(', ')}
**URL:** https://${env.VERCEL_PROJECT_PRODUCTION_URL}/posts${page.slug}

---

${page.markdown}`

      await navigator.clipboard.writeText(markdownContent)

      // Reset after 2 seconds
      setTimeout(() => {
        setIsCopyingForAI(false)
      }, 2000)
    } catch (err) {
      console.error('Failed to copy content for AI:', err)
      setIsCopyingForAI(false)
    }
  }

  // Add copy buttons to code blocks
  useEffect(() => {
    const addCopyButtons = () => {
      const codeBlocks = document.querySelectorAll('pre code, .notion_code')
      codeBlocks.forEach((codeBlock) => {
        const pre = codeBlock.closest('pre') || codeBlock.parentElement
        if (!pre || pre.querySelector('.copy-button')) return // Skip if button already exists

        const button = document.createElement('button')
        button.className =
          'copy-button absolute top-2 right-2 p-2 rounded-md bg-gray-800 hover:bg-gray-700 text-white transition-colors z-10 opacity-0 group-hover:opacity-100'
        button.innerHTML =
          '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path><path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path></svg>'
        button.title = 'Copy code'

        // Make pre container relative and add group class
        pre.style.position = 'relative'
        pre.classList.add('group')

        button.addEventListener('click', async () => {
          const code = codeBlock.textContent || ''
          try {
            await navigator.clipboard.writeText(code)
            button.innerHTML =
              '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>'
            button.style.backgroundColor = '#10b981'
            setTimeout(() => {
              button.innerHTML =
                '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path><path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path></svg>'
              button.style.backgroundColor = ''
            }, 2000)
          } catch (err) {
            console.error('Failed to copy code:', err)
          }
        })

        pre.appendChild(button)
      })
    }

    // Add copy buttons when component mounts and after content changes
    const timer = setTimeout(addCopyButtons, 500)
    return () => clearTimeout(timer)
  }, [page.blocks])

  let id = page.id.replace(/-/g, '')
  id = remap[id] || id

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      {/* Breadcrumb - positioned on top of banner area */}
      <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <a
          href="/blog"
          className="flex items-center gap-1 hover:text-[#C4F144] transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" />
          Blog
        </a>
        {page.publishedTime && (
          <>
            <span className="text-gray-400">/</span>
            <span>{dayjs(page.publishedTime).format('YYYY')}</span>
            <span className="text-gray-400">/</span>
            <span>{dayjs(page.publishedTime).format('MMMM')}</span>
          </>
        )}
      </nav>

      <div className="lg:grid lg:grid-cols-12 lg:gap-12">
        {/* Main Content */}
        <article className="lg:col-span-8 xl:col-span-9 space-y-8">
          {/* Cover Image */}
          {page.cover && (
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg bg-linear-to-br from-green-100 to-green-200">
              <img
                className="w-full h-full object-cover"
                width={800}
                height={450}
                src={`https://img0.phala.world/cover/1744x974/${id}.jpg?z=123`}
                alt={page.title}
              />
            </div>
          )}

          {/* Article Header */}
          <header className="space-y-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {page.tags
                .filter((tag) => tag !== 'Changelog')
                .map((tag, i) => (
                  <a key={i} href={`/tags/${encodeURIComponent(tag)}`}>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-[#C4F144] text-black">
                      <FiTag className="w-3 h-3" />
                      {tag}
                    </span>
                  </a>
                ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight font-montserrat">
              {page.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-between border-b border-gray-200 pb-6">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <FiCalendar className="w-4 h-4" />
                  <span>
                    {dayjs(page.publishedTime).format('MMMM DD, YYYY')}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <FiClock className="w-4 h-4" />
                  <span>5 min read</span>
                </div>
              </div>

              {/* Copy for AI Button */}
              <button
                type="button"
                onClick={copyForAI}
                disabled={isCopyingForAI}
                className="flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors disabled:opacity-50"
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
              </button>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none font-inter">
            <style jsx>{`
                .prose {
                  --tw-prose-headings: #1f2937;
                  --tw-prose-body: #374151;
                  --tw-prose-links: #16a34a;
                  --tw-prose-bold: #1f2937;
                  --tw-prose-bullets: #16a34a;
                  --tw-prose-quotes: #6b7280;
                  --tw-prose-code: #1f2937;
                  --tw-prose-pre-bg: #f8fafc;
                  --tw-prose-pre-code: #374151;
                }
              `}</style>
            <NotionBlocksProvider blocks={page.blocks}>
              {renderBlocks(page.blocks)}
            </NotionBlocksProvider>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
            {beforePages.length > 0 && (
              <a
                href={`/posts${beforePages[0].slug}`}
                className="flex-1 h-auto p-4 text-left justify-start hover:bg-green-50 border border-green-200 rounded-md transition-colors block"
              >
                <div className="flex items-start gap-3">
                  <FiArrowLeft className="w-5 h-5 mt-0.5 text-green-600 shrink-0" />
                  <div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                      Previous
                    </div>
                    <div className="text-sm font-medium text-gray-900 line-clamp-2">
                      {beforePages[0].title}
                    </div>
                  </div>
                </div>
              </a>
            )}

            {nextPages.length > 0 && (
              <a
                href={`/posts${nextPages[0].slug}`}
                className="flex-1 h-auto p-4 text-right justify-end hover:bg-green-50 border border-green-200 rounded-md transition-colors block"
              >
                <div className="flex items-start gap-3">
                  <div className="text-right">
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                      Next
                    </div>
                    <div className="text-sm font-medium text-gray-900 line-clamp-2">
                      {nextPages[0].title}
                    </div>
                  </div>
                  <FiArrowRight className="w-5 h-5 mt-0.5 text-green-600 shrink-0" />
                </div>
              </a>
            )}
          </div>

          {/* About Phala Footer */}
          <footer className="pt-12 border-t border-gray-200 space-y-6">
            <div className="pt-4">
              <a
                href="#section-subscription"
                className="bg-primary hover:bg-primary-600 text-black font-bold inline-flex items-center justify-center gap-2 rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-6 py-2"
              >
                <BiRss className="w-4 h-4" />
                Subscribe to Updates
              </a>
            </div>
          </footer>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 xl:col-span-3 space-y-6">
          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 lg:sticky lg:top-32">
            <TableOfContents blocks={page.blocks} />
          </div>
        </aside>
      </div>

      {/* Related Posts Section - After main content */}
      {(recentPages.length > 0 || similarPages.length > 0) && (
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Recent Posts */}
            {recentPages.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {recentPages.map((recentPage) => (
                    <a
                      href={`/posts${recentPage.slug}`}
                      key={recentPage.id}
                      className="block p-3 rounded-lg hover:bg-green-50 transition-colors"
                    >
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                        {recentPage.title}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {dayjs(recentPage.publishedTime).format('MMM DD, YYYY')}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Related Posts */}
            {similarPages.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Related Posts
                </h3>
                <div className="space-y-4">
                  {similarPages.map((similarPage) => (
                    <a
                      href={`/posts${similarPage.slug}`}
                      key={similarPage.id}
                      className="block p-3 rounded-lg hover:bg-green-50 transition-colors"
                    >
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                        {similarPage.title}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {dayjs(similarPage.publishedTime).format(
                          'MMM DD, YYYY',
                        )}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
