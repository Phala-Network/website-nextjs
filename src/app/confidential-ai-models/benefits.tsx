'use client'
import Image from 'next/image'

const traditionalAI = [
  'Model provider can read your data',
  'Cloud provider has full access',
  'Your conversations are exposed',
]
const confidentialAI = [
  'True end-to-end encryption',
  'Al runs in isolated secure enclave',
  'Nobody can access your data',
]

const Benefits = () => {
  return (
    <section className="overflow-hidden py-24">
      <div className="relative container">
        <div className="relative gap-16 flex flex-col items-center max-w-5xl mx-auto">
          <div className="h-30 pointer-events-none absolute bg-linear-to-t from-background via-transparent to-transparent bottom-0 left-0 right-0"></div>

          <div className="flex flex-col items-center max-w-3xl text-center text-balance">
            <h2 className="font-display mt-6 mb-3 font-semibold text-foreground text-3xl leading-tight md:text-4xl lg:text-5xl">
              Win Your Users' Trust
            </h2>
            <p className="font-display text-muted-foreground mt-4 leading-6">
              Differentiate with verifiable privacy, build customer confidence
              with audit-ready cryptographic proofs, and enter regulated markets
              instantly.
            </p>
          </div>
          <div className="w-full grid lg:grid-cols-2 border rounded-lg p-6 sm:p-12 bg-background min-h-120 gap-12">
            <Image
              src="/confidential-ai-models/before.png"
              alt="Traditional AI"
              width={630}
              height={887}
            />
            <Image
              src="/confidential-ai-models/after.png"
              alt="Confidential AI"
              width={630}
              height={887}
            />
          </div>

          {/* For SEO */}
          <div className="hidden">
            <h3>Traditional AI</h3>
            <ul>
              {traditionalAI.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>Confidential AI</h3>
            <ul>
              {confidentialAI.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* <div className="relative mt-24 grid md:grid-cols-3 max-w-5xl mx-auto">
          <div className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8">
            <TrendingUp />
            <div>
              <h3 className="text-lg font-medium">Sales Advantage</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Differentiate with verifiable privacy
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8">
            <Users />
            <div>
              <h3 className="text-lg font-medium">Customer Confidence</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Audit-ready cryptographic proofs
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8">
            <Zap />
            <div>
              <h3 className="text-lg font-medium">Market Access</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Enter regulated markets instantly
              </p>
            </div>
          </div>
          <div className="absolute top-0 -right-4 -left-4 h-px bg-input md:hidden"></div>
          <div className="absolute top-[-0.5px] -right-4 -left-4 row-start-2 h-px bg-input md:hidden"></div>
          <div className="absolute top-[-0.5px] -right-4 -left-4 row-start-3 h-px bg-input md:hidden"></div>
          <div className="absolute -right-4 bottom-0 -left-4 row-start-4 h-px bg-input md:hidden"></div>
          <div className="absolute -top-2 bottom-0 -left-2 w-px bg-input md:hidden"></div>
          <div className="absolute -top-2 -right-2 bottom-0 col-start-2 w-px bg-input md:hidden"></div>
          <div className="absolute top-0 -right-2 -left-2 hidden h-px bg-input md:block"></div>
          <div className="absolute -top-2 bottom-0 left-0 hidden w-px bg-input md:block"></div>
          <div className="absolute -top-2 bottom-0 -left-[0.5px] col-start-2 hidden w-px bg-input md:block"></div>
          <div className="absolute -top-2 bottom-0 -left-[0.5px] col-start-3 hidden w-px bg-input md:block"></div>
          <div className="absolute -top-2 right-0 bottom-0 hidden w-px bg-input md:block"></div>
        </div> */}
      </div>
    </section>
  )
}

export default Benefits
