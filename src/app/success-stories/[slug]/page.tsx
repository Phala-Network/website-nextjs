import { DownloadIcon } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import {
  getSuccessStoryBySlug,
  successStories,
} from '@/data/success-stories-data'

interface SuccessStoryPageProps {
  params: Promise<{
    slug: string
  }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  return successStories.map((story) => ({
    slug: story.slug,
  }))
}

export async function generateMetadata({
  params,
}: SuccessStoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const story = getSuccessStoryBySlug(slug)

  if (!story) {
    notFound()
  }

  return {
    title: `${story.category.replace('\n', ' ')} + AI: ${story.title} -  Success Story`,
    description: story.description,
  }
}

export default async function SuccessStoryPage({
  params,
}: SuccessStoryPageProps) {
  const { slug } = await params
  const story = getSuccessStoryBySlug(slug)

  if (!story) {
    notFound()
  }

  return (
    <div className="min-h-screen max-w-4xl mx-auto mt-8">
      <div className="container mx-auto py-12">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/success-stories">Success Stories</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {story.category.replace('\n', ' ')}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Header Section */}
        <div className="mb-12 space-y-4">
          <h1 className="text-3xl font-bold">
            {story.category.replace('\n', ' ')} + AI: {story.title}
          </h1>

          <p className="text-muted-foreground">{story.description}</p>

          <div className="flex gap-4 flex-wrap">
            {story.stats.map((stat, index) => (
              <div
                key={`${story.id}-stat-${index}`}
                className="text-base text-muted-foreground flex items-center"
              >
                <span className="mr-2">•</span>
                {stat.replace('• ', '')}
              </div>
            ))}
          </div>

          <div className="flex gap-4 items-center mt-8">
            <Button asChild>
              <a href={story.pdfPath} target="_blank" rel="noopener noreferrer">
                View full report
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={story.pdfPath} download>
                <DownloadIcon className="size-4" />
                Download report
              </a>
            </Button>
          </div>
        </div>

        {/* PDF Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src={story.pdfPath}
            className="w-full h-[calc(100vh-5rem)] border-0"
            title={`${story.title} - ${story.category.replace('\n', ' ')} Success Story`}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
