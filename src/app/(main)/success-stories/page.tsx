import type { Metadata } from 'next'
import Link from 'next/link'

import { SuccessStoryCard } from '@/components/success-story-card'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { successStories } from '@/data/success-stories-data'
import { makeDescription, makeTitle } from '@/lib/seo'

// Keywords from CSV row 14: confidential AI case studies, private AI success stories, TEE use cases, secure AI usecase, private AI usecases
export const metadata: Metadata = {
  title: makeTitle('Success Stories - Confidential AI Case Studies'),
  description: makeDescription(
    'Discover how leading companies leverage confidential AI and TEE technology. Real-world private AI success stories across healthcare, finance, and enterprise sectors.',
  ),
  keywords: [
    'confidential AI case studies',
    'private AI success stories',
    'TEE use cases',
    'secure AI usecase',
    'private AI usecases',
  ],
}

export default function SuccessStoriesPage() {
  // SEO: JSON-LD CollectionPage Schema
  const collectionPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Success Stories - Confidential AI Case Studies',
    description:
      'Real-world success stories of companies using Phala confidential AI and TEE technology for private, secure AI deployments.',
    url: 'https://phala.com/success-stories',
    publisher: {
      '@type': 'Organization',
      name: 'Phala',
      url: 'https://phala.com',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://phala.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Success Stories',
          item: 'https://phala.com/success-stories',
        },
      ],
    },
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />

      <section className="py-12 w-full max-w-md md:max-w-3xl xl:max-w-(--breakpoint-xl) px-4 md:px-6 mx-auto">
        <div className="mb-8 md:mb-16">
          <div className="flex flex-col gap-4 max-w-4xl">
            {/* Breadcrumb */}
            <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Success Stories</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-3xl font-semibold md:text-4xl">
            Real-World Success Stories
          </h1>
          <p className="text-muted-foreground font-medium text-lg md:text-xl">
            Discover how leading companies are leveraging Phala's confidential
            AI to build exceptional digital experiences while maintaining
            complete data privacy and regulatory compliance.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {successStories.map((story) => (
          <SuccessStoryCard key={story.id} story={story} />
        ))}
      </div>
    </section>
    </>
  )
}
