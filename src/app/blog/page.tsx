import type { Metadata } from 'next'
import { BiRss } from 'react-icons/bi'

import { Button } from '@/components/ui/button'

export const revalidate = 7200

export const metadata: Metadata = {
  title: 'Blog',
}

export default async function BlogPage() {
  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-32 max-w-7xl mx-auto">
        <div className="container">
          <div className="mb-8 md:mb-14 lg:mb-16">
            <div className="flex items-start justify-between gap-8">
              <div>
                <h1 className="mb-4 w-full text-4xl font-bold md:mb-5 md:text-5xl lg:mb-6">
                  Phala Blog
                </h1>
              </div>
              <div>
                <Button asChild size="lg">
                  <a href="/atom.xml" target="_blank" rel="noopener">
                    <BiRss className="w-6 h-6" />
                    <span>Subscribe</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Temporary message */}
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              Blog content is temporarily unavailable during preview deployment.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}