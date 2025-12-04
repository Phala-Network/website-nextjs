import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface TagWithCount {
  name: string
  count: number
  category: string
}

interface TagsSkills2Props {
  tags: TagWithCount[]
}

export default function TagsSkills2({ tags }: TagsSkills2Props) {
  if (!tags.length) return null

  return (
    <section id="topics" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="mb-12">
          <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight mb-4">
            Browse by Topic
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore articles organized by key areas of confidential computing
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tags.map((tag, index) => (
            <Link
              key={index}
              href={`/learn/tags/${tag.name}`}
              className="group relative flex items-center justify-between p-6 rounded-lg border border-border bg-background hover:border-foreground/20 hover:shadow-sm transition-all"
            >
              <div className="flex-1">
                <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-foreground transition-colors">
                  {tag.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tag.count} {tag.count === 1 ? 'article' : 'articles'}
                </p>
              </div>
              <ArrowRight className="size-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
