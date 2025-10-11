import { ArrowRight } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

interface SuccessStory {
  logo?: string
  company: string
  tags: string
  title: string
  subtitle: string
  image?: string
  link?: string
}

interface SuccessStoriesProps {
  featured: SuccessStory
  additional: SuccessStory[]
  title?: string
}

export function SuccessStories({
  featured,
  additional,
  title = 'Success Stories',
}: SuccessStoriesProps) {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-12 text-center">
          {title}
        </h2>

        {/* Featured Story */}
        <Card className="mb-8 overflow-hidden hover:shadow-lg transition-shadow">
          <a href={featured.link || '#'} className="block">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  {featured.logo && (
                    <div className="mb-4">
                      {/* TODO: Replace with actual logo */}
                      <div className="text-2xl font-bold">
                        {featured.company}
                      </div>
                    </div>
                  )}
                  <p className="text-xs font-medium text-primary uppercase tracking-wider mb-4">
                    {featured.tags}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {featured.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    {featured.subtitle}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    Read case study <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  {/* TODO: Replace with actual image */}
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    {featured.company} Preview
                  </div>
                </div>
              </div>
            </CardContent>
          </a>
        </Card>

        {/* Additional Stories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additional.map((story, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <a href={story.link || '#'} className="block">
                <CardContent className="p-6">
                  {story.logo && (
                    <div className="mb-4">
                      {/* TODO: Replace with actual logo */}
                      <div className="text-xl font-bold">{story.company}</div>
                    </div>
                  )}
                  <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
                    {story.tags}
                  </p>
                  <h3 className="text-lg font-semibold mb-2">{story.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {story.subtitle}
                  </p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </div>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
