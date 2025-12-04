import { Check } from 'lucide-react'
import Link from 'next/link'

import Form from './form'

export const metadata = {
  title: 'Contact Us',
  description:
    "Explore Phala's capabilities with a tailored walkthrough focused on your business requirements.",
}

const ContactPage = () => {
  return (
    <section className="relative py-24 max-w-5xl mx-auto w-full">
      <div className="container w-full gap-8 flex flex-col md:flex-row">
        <div className="w-full md:space-y-10 max-md:mx-auto max-w-[30rem] md:max-w-[18rem] lg:max-w-[22rem] hidden md:block">
          <div className="space-y-4">
            <h1 className="text-3xl lg:text-4xl font-semibold">Contact Us</h1>
            <div className="text-muted-foreground lg:text-lg">
              Explore Phala's capabilities with a tailored walkthrough focused
              on your business requirements.
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
                        href="https://docs.phala.com/phala-cloud/getting-started"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Documentation
                      </a>
                    </li>
                    <li>
                      <Link
                        href="/pricing"
                        className="underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Pricing
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center md:flex-1">
          <div className="w-full max-w-[30rem] flex-col">
            <div className="w-full rounded-xl border bg-card px-6 pt-2 pb-8 shadow">
              <div className="min-h-[583px]">
                <Form />
              </div>
              <p className="text-xs text-muted-foreground px-4">
                By submitting this form, you agree to our{' '}
                <Link
                  href="/terms"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link
                  href="/privacy"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </Link>
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
