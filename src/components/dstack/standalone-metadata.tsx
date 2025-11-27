'use client'

import { useEffect } from 'react'

import { useIsDstack } from '@/hooks/use-is-dstack'

const DSTACK_DOMAIN = 'dstack.org'

interface StandaloneMetadataProps {
  title: string
  description: string
}

/**
 * Client-side component that updates document metadata when on dstack.org domain
 * This is necessary because we can't use headers() in server components for ISR
 */
export function StandaloneMetadata({
  title,
  description,
}: StandaloneMetadataProps) {
  const isDstack = useIsDstack()

  useEffect(() => {
    if (!isDstack) return

    // Update document title
    document.title = title

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    } else {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      metaDescription.setAttribute('content', description)
      document.head.appendChild(metaDescription)
    }

    // Update Open Graph tags
    const ogTags = {
      'og:title': title,
      'og:description': description,
      'og:url': `https://${DSTACK_DOMAIN}`,
      'og:site_name': 'dstack',
    }

    for (const [property, content] of Object.entries(ogTags)) {
      let meta = document.querySelector(`meta[property="${property}"]`)
      if (meta) {
        meta.setAttribute('content', content)
      } else {
        meta = document.createElement('meta')
        meta.setAttribute('property', property)
        meta.setAttribute('content', content)
        document.head.appendChild(meta)
      }
    }

    // Update Twitter tags
    const twitterTags = {
      'twitter:title': title,
      'twitter:description': description,
    }

    for (const [name, content] of Object.entries(twitterTags)) {
      let meta = document.querySelector(`meta[name="${name}"]`)
      if (meta) {
        meta.setAttribute('content', content)
      } else {
        meta = document.createElement('meta')
        meta.setAttribute('name', name)
        meta.setAttribute('content', content)
        document.head.appendChild(meta)
      }
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', `https://${DSTACK_DOMAIN}`)
    } else {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      canonical.setAttribute('href', `https://${DSTACK_DOMAIN}`)
      document.head.appendChild(canonical)
    }

    // Update favicon
    const icon = document.querySelector('link[rel="icon"]') as HTMLLinkElement
    if (icon) {
      icon.href = '/dstack-icon.svg'
    }
  }, [isDstack, title, description])

  return null
}
