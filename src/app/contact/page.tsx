import { Check } from 'lucide-react'

import Form from './form'

const ContactPage = () => {
  return (
    <section className="relative py-32 max-w-5xl mx-auto w-full">
      <div className="container w-full gap-8 flex flex-col md:flex-row">
        <div className="w-full md:space-y-10 max-md:mx-auto max-w-[30rem] md:max-w-[18rem] lg:max-w-[22rem] hidden md:block">
          <div className="space-y-4">
            <h1 className="text-3xl lg:text-4xl font-semibold">
              Talk to Phala Team
            </h1>
            <div className="text-muted-foreground md:text-base lg:text-lg lg:leading-7 text-balance">
              Explore Phala Cloud's capabilities with a tailored walkthrough
              focused on your business requirements.
            </div>
          </div>
          <div>
            <div className="space-y-16 pb-20 lg:pb-0">
              <div className="space-y-12">
                <div className="space-y-4">
                  <p className="text-sm font-semibold">What you can expect:</p>
                  <div className="flex items-center space-x-2.5">
                    <Check className="size-5 shrink-0 text-muted-foreground" />
                    <p className="text-sm">Product demonstration</p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Check className="size-5 shrink-0 text-muted-foreground" />
                    <p className="text-sm">Enterprise pricing</p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Check className="size-5 shrink-0 text-muted-foreground" />
                    <p className="text-sm">Data strategy</p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Check className="size-5 shrink-0 text-muted-foreground" />
                    <p className="text-sm">Integration planning</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-sm font-semibold">Resources:</p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        className="underline"
                        href="https://docs.phala.network/phala-cloud/getting-started"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://cloud.phala.network/pricing"
                        className="underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Pricing structure
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center lg:mt-2.5 md:flex-1">
          <div className="w-full max-w-[30rem] flex-col">
            <div className="w-full rounded-xl border bg-card px-6 pt-2 pb-8 shadow">
              <div className="min-h-[583px]">
                <Form />
              </div>
              <p className="text-xs text-muted-foreground px-4">
                By submitting this form, you agree to our{' '}
                <a
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Terms of Service
                </a>{' '}
                and{' '}
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
