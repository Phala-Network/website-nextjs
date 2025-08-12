import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function LatestNews() {
  return (
    <section className="mx-auto max-w-6xl px-8 py-16">
      <header>
        <h2 className="text-2xl lg:text-4xl font-semibold text-black-800 mb-4 lg:mb-10 text-center">
          Latest News
        </h2>
      </header>
      <div className="mt-16 flex flex-col lg:flex-row gap-4 justify-center">
        <Button asChild>
          <Link href="/tags/Partnerships">View Partnership News</Link>
        </Button>
      </div>
    </section>
  )
}
