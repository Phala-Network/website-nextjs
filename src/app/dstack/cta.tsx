import { ArrowRight, Book, ChevronRight, File } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const Cta3 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 flex-col gap-10 rounded-lg border p-6 shadow-sm lg:grid-cols-2 lg:px-20 lg:py-16">
          <div>
            <h4 className="mb-2 text-2xl font-bold lg:text-4xl">
              Call To Action
            </h4>
            <p className="text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto illo praesentium nisi, accusantium quae.
            </p>
            <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row">
              <Button className="w-full sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Contact Sales
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a href="#">
              <Card className="flex flex-row items-center justify-between gap-2 px-6 py-4 shadow-none hover:bg-accent">
                <div className="flex items-start gap-2">
                  <File className="size-4" />
                  <div>
                    <h5 className="mb-2 leading-4 font-medium">
                      Documentation
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor, sit amet consectetur.
                    </p>
                  </div>
                </div>
                <ChevronRight className="size-6" />
              </Card>
            </a>
            <a href="#">
              <Card className="flex flex-row items-center justify-between gap-2 px-6 py-4 shadow-none hover:bg-accent">
                <div className="flex items-start gap-2">
                  <Book className="size-4" />
                  <div>
                    <h5 className="mb-2 leading-4 font-medium">
                      Getting Started
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor, sit amet consectetur.
                    </p>
                  </div>
                </div>
                <ChevronRight className="size-6" />
              </Card>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Cta3 }
