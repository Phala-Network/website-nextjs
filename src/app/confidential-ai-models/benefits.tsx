'use client'
import {
  Lock,
  TrendingUp,
  TriangleAlert,
  Unlock,
  Users,
  Zap,
} from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const traditionalAI = [
  'Data visible to providers',
  'No cryptographic proof',
  'Trust-based security only',
  'Privacy vulnerabilities',
]
const confidentialAI = [
  'Data encrypted in secure hardware',
  'Cryptographic proof provided',
  'No one can see your data',
  'Same performance & cost',
]

const Benefits = () => {
  const [isConfidentialAI, setIsConfidentialAI] = useState(false)
  return (
    <section className="overflow-hidden py-32">
      <div className="relative container">
        <div className="relative gap-16 flex flex-col items-center max-w-5xl mx-auto">
          <div className="h-30 pointer-events-none absolute bg-linear-to-t from-background via-transparent to-transparent bottom-0 left-0 right-0"></div>

          <div className="flex flex-col items-center max-w-3xl text-center text-balance">
            <p className="font-mono text-sm text-muted-foreground">
              BENEFITS OF CONFIDENTIAL AI
            </p>
            <h2 className="mt-6 mb-3 text-3xl font-medium lg:text-4xl">
              Win Your Users' Trust
            </h2>
            <p className="text-muted-foreground mt-4">
              Differentiate with verifiable privacy, build customer confidence
              with audit-ready cryptographic proofs, and enter regulated markets
              instantly.
            </p>
          </div>
          <div className="w-full flex flex-col items-center border rounded-lg py-12 px-6 lg:px-12 bg-muted min-h-120 gap-12">
            <div className="flex items-center gap-4">
              <Label className="text-muted-foreground">
                <Unlock size={12} />
                Traditional AI
              </Label>
              <Switch
                className="scale-125"
                checked={isConfidentialAI}
                onCheckedChange={setIsConfidentialAI}
              />
              <Label>
                {/** biome-ignore lint/performance/noImgElement: svg */}
                <img
                  className="size-4"
                  src="/confidential-ai-models/phala.svg"
                  alt="Phala"
                />
                Confidential AI
              </Label>
            </div>
            {isConfidentialAI ? (
              <Image
                className="h-60"
                src="/confidential-ai-models/traditional-ai-apis.png"
                alt="Traditional AI"
                width={750}
                height={236}
              />
            ) : (
              <Image
                className="h-60"
                src="/confidential-ai-models/confidential-ai-apis.png"
                alt="Confidential AI"
                width={668}
                height={240}
              />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
              {isConfidentialAI
                ? confidentialAI.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 pl-12 md:pl-6"
                    >
                      <Lock size={16} className="text-primary-500" />
                      {item}
                    </div>
                  ))
                : traditionalAI.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 pl-12 md:pl-6"
                    >
                      <TriangleAlert size={16} className="text-destructive" />
                      {item}
                    </div>
                  ))}
            </div>
          </div>
        </div>
        <div className="relative mt-24 grid md:grid-cols-3 max-w-5xl mx-auto">
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
        </div>
      </div>
    </section>
  )
}

export default Benefits
