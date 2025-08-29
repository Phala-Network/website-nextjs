import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getComparisonData, validSlugs } from '@/data/comparisons'
import Compare from './compare'

interface ComparePageProps {
  params: Promise<{
    slug: string
  }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  return validSlugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: ComparePageProps): Promise<Metadata> {
  const { slug } = await params
  const comparison = getComparisonData(slug)

  if (!comparison) {
    notFound()
  }

  return comparison.metadata
}

export default async function ComparePage({ params }: ComparePageProps) {
  const { slug } = await params
  const data = getComparisonData(slug)
  if (!data) {
    notFound()
  }

  return <Compare data={data} />
}
