import { ChevronRight } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const Hero192 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto mb-12 flex max-w-5xl flex-col items-center gap-6">
          <a
            href="#"
            className="flex items-center gap-2 rounded-full bg-muted py-1 pr-4 pl-1"
          >
            <Badge variant="outline" className="bg-background">
              Beta
            </Badge>
            <div className="flex items-center gap-1">
              <p className="text-sm font-semibold">Try our platform</p>
              <ChevronRight className="h-4 w-4" />
            </div>
          </a>
          <h1 className="text-center text-5xl font-semibold md:text-7xl">
            Transform the way you do business
          </h1>
          <p className="text-center text-lg text-muted-foreground md:text-xl">
            Streamline your workflow, collaborate with your team, and boost
            productivity with our innovative platform.
          </p>
          <div className="flex gap-3">
            <Button size="lg">Get started</Button>
            <Button size="lg" variant="outline">
              Learn more
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            14-day free trial. No obligations.
          </p>
        </div>
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
          alt="placeholder"
          className="mx-auto max-h-[540px] rounded-lg object-cover drop-shadow sm:aspect-video"
        />
      </div>
    </section>
  )
}

export { Hero192 }
