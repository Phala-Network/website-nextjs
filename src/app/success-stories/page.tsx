'use client'

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

export default function SuccessStoriesPage() {
  return (
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

          <h1 className="text-3xl font-bold md:text-4xl">
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
  )
}
