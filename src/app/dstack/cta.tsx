import { ArrowRight, Book, ChevronRight, File } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const Cta3 = () => {
  return (
    <section className="py-16 max-w-6xl mx-auto">
      <div className="container">
        <div className="grid grid-cols-1 flex-col gap-10 rounded-lg border p-6 lg:grid-cols-2 lg:px-20 lg:py-16 bg-card">
          <div>
            <h1 className="mb-2 text-2xl font-semibold lg:text-3xl">
              Ready for Confidential Computing?
            </h1>
            <p className="text-muted-foreground">
              Join the open-source community building the future of secure
              computing. Get started with confidential AI and private cloud
              applications.
            </p>
            <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row">
              <Button className="w-full sm:w-auto" asChild>
                <a
                  href="https://github.com/Dstack-TEE/dstack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
              <Button variant="outline" className="w-full sm:w-auto" asChild>
                <a
                  href="https://t.me/+RF-yUoDduWAzZTUx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Community
                </a>
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="https://docs.phala.com/dstack/overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="flex flex-row items-center justify-between gap-2 px-6 py-4 shadow-none hover:bg-accent">
                <div className="flex items-start gap-2">
                  <File className="size-4" />
                  <div>
                    <h5 className="mb-2 leading-4 font-medium">
                      Documentation
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Learn how to deploy secure applications with dstack.
                    </p>
                  </div>
                </div>
                <ChevronRight className="size-6" />
              </Card>
            </a>
            <a
              href="https://cloud.phala.network/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="flex flex-row items-center justify-between gap-2 px-6 py-4 shadow-none hover:bg-accent">
                <div className="flex items-start gap-2">
                  <Book className="size-4" />
                  <div>
                    <h5 className="mb-2 leading-4 font-medium">
                      Try TEE Cloud
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Start deploying confidential applications today.
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
