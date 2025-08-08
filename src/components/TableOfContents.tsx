import React, { useEffect, useState } from 'react'
import { ParsedBlock } from '@/lib/notion-client'
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'

interface TOCItem {
  id: string
  text: string
  level: 1 | 2 | 3
}

interface TableOfContentsProps {
  blocks: ParsedBlock[]
}

function extractTextFromRichText(richText: RichTextItemResponse[]): string {
  return richText.map(item => item.plain_text).join('')
}

function generateId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function extractHeadings(blocks: ParsedBlock[]): TOCItem[] {
  const headings: TOCItem[] = []
  
  const processBlock = (block: ParsedBlock) => {
    if (block.type === 'heading_1' || block.type === 'heading_2' || block.type === 'heading_3') {
      const richText = (block as any)[block.type]?.rich_text as RichTextItemResponse[]
      if (richText) {
        const text = extractTextFromRichText(richText)
        const level = parseInt(block.type.slice(-1)) as 1 | 2 | 3
        const id = generateId(text)
        
        headings.push({
          id,
          text,
          level
        })
      }
    }
    
    // Process child blocks
    if (block.children) {
      block.children.forEach(processBlock)
    }
  }
  
  blocks.forEach(processBlock)
  return headings
}

export default function TableOfContents({ blocks }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>('')
  
  useEffect(() => {
    const tocItems = extractHeadings(blocks)
    setHeadings(tocItems)
    
    // Add IDs to actual heading elements in the DOM
    const addIdsToHeadings = () => {
      tocItems.forEach(item => {
        const headingElements = document.querySelectorAll('h1, h2, h3')
        headingElements.forEach(el => {
          const text = el.textContent?.trim()
          if (text && generateId(text) === item.id) {
            el.id = item.id
          }
        })
      })
    }
    
    // Wait for content to render
    const timer = setTimeout(addIdsToHeadings, 500)
    
    return () => clearTimeout(timer)
  }, [blocks])
  
  useEffect(() => {
    if (headings.length === 0) return
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -35% 0px',
        threshold: 0
      }
    )
    
    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })
    
    return () => observer.disconnect()
  }, [headings])
  
  if (headings.length === 0) {
    return null
  }
  
  const handleClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Account for any fixed header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }
  
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 p-4 shadow-sm">
      <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
        On This Page
      </h3>
      <nav className="space-y-1 max-h-[60vh] overflow-y-auto">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            onClick={(e) => handleClick(heading.id, e)}
            className={`
              block py-1 text-xs transition-colors leading-relaxed
              ${heading.level === 1 ? 'font-medium' : ''}
              ${heading.level === 2 ? 'pl-3' : ''}
              ${heading.level === 3 ? 'pl-6' : ''}
              ${
                activeId === heading.id
                  ? 'text-[#C4F144] font-medium border-l-2 border-[#C4F144] -ml-2 pl-2'
                  : 'text-gray-500 hover:text-gray-700'
              }
            `}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  )
}