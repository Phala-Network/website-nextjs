import {
  CheckCircle,
  CircleMinus,
  Eye,
  Gauge,
  HelpCircle,
  Shield,
  Sparkles,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const Compare3 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-4">
          <h2 className="mx-auto max-w-2xl text-center text-4xl font-semibold sm:text-5xl">
            dstack vs Others
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
            Compare dstack with traditional cloud providers and other confidential computing solutions
          </p>
        </div>
        <div className="-mx-7 overflow-x-auto">
          <div className="mt-14 grid min-w-4xl grid-cols-5 text-sm">
            <div className="border-b border-border p-4"></div>
            <div className="flex flex-col items-center gap-2 rounded-t-2xl border-b border-border bg-muted p-4">
              <p className="text-lg font-semibold">dstack</p>
              <p className="mt-1 text-center text-xs text-muted-foreground">
                Open-source confidential computing
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 border-b border-border p-4">
              <p className="text-lg font-semibold">AWS/GCP/Azure</p>
              <p className="mt-1 text-center text-xs text-muted-foreground">
                Cloud providers
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 border-b border-border p-4">
              <p className="text-lg font-semibold">ConfidentialContainers</p>
              <p className="mt-1 text-center text-xs text-muted-foreground">
                CNCF project
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 border-b border-border p-4">
              <p className="text-lg font-semibold">Others</p>
              <p className="mt-1 text-center text-xs text-muted-foreground">
                Alternative solutions
              </p>
            </div>
            {/* Transparency Row */}
            <div className="flex items-center gap-2 border-b border-border p-4">
              <Eye className="size-4 shrink-0" />
              <span className="font-semibold">Transparency</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 border-b border-border bg-muted p-4">
              <CheckCircle className="size-5 text-green-600" />
              <span className="text-xs text-muted-foreground">✓ Open Source</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 border-b border-border p-4">
              <CircleMinus className="size-5 text-red-600" />
              <span className="text-xs text-muted-foreground">✗ Proprietary</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 border-b border-border p-4">
              <CheckCircle className="size-5 text-green-600" />
              <span className="text-xs text-muted-foreground">✓ Open Source</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 border-b border-border p-4">
              <CircleMinus className="size-5 text-red-600" />
              <span className="text-xs text-muted-foreground">✗ Proprietary</span>
            </div>

            {/* Control Row */}
            <div className="flex items-center gap-2 border-b border-border p-4">
              <Shield className="size-4 shrink-0" />
              <span className="font-semibold">Control</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 border-b border-border bg-muted p-4">
              <CheckCircle className="size-5 text-green-600" />
              <span className="text-xs text-muted-foreground">✓ Code Controlled</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 border-b border-border p-4">
              <CircleMinus className="size-5 text-red-600" />
              <span className="text-xs text-muted-foreground">✗ Vendor Controlled</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 border-b border-border p-4">
              <CircleMinus className="size-5 text-red-600" />
              <span className="text-xs text-muted-foreground">✗ Developer Controlled</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 border-b border-border p-4">
              <CircleMinus className="size-5 text-red-600" />
              <span className="text-xs text-muted-foreground">✗ Third-party</span>
            </div>

            {/* Auditability Row */}
            <div className="flex items-center gap-2 border-b border-border p-4">
              <Shield className="size-4 shrink-0" />
              <span className="font-semibold">Auditability</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 border-b border-border bg-muted p-4">
              <CheckCircle className="size-5 text-green-600" />
              <span className="text-xs text-muted-foreground">✓ Audited by zkSecurity</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 border-b border-border p-4">
              <HelpCircle className="size-5 text-orange-500" />
              <span className="text-xs text-muted-foreground">△ Limited</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 border-b border-border p-4">
              <CircleMinus className="size-5 text-red-600" />
              <span className="text-xs text-muted-foreground">✗ No audit</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 border-b border-border p-4">
              <CircleMinus className="size-5 text-red-600" />
              <span className="text-xs text-muted-foreground">✗ None</span>
            </div>

            {/* Performance Row */}
            <div className="flex items-center gap-2 border-b border-border p-4">
              <Gauge className="size-4 shrink-0" />
              <span className="font-semibold">Performance</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 border-b border-border bg-muted p-4">
              <CheckCircle className="size-5 text-green-600" />
              <span className="text-xs text-muted-foreground">✓ &lt;5% Overhead</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 border-b border-border p-4">
              <HelpCircle className="size-5 text-orange-500" />
              <span className="text-xs text-muted-foreground">△ Varies</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 border-b border-border p-4">
              <HelpCircle className="size-5 text-gray-500" />
              <span className="text-xs text-muted-foreground">? Unknown</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 border-b border-border p-4">
              <HelpCircle className="size-5 text-gray-500" />
              <span className="text-xs text-muted-foreground">? Unknown</span>
            </div>

            {/* AI Focus Row */}
            <div className="flex items-center gap-2 border-border p-4">
              <Sparkles className="size-4 shrink-0" />
              <span className="font-semibold">AI Focus</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 border-border bg-muted p-4">
              <CheckCircle className="size-5 text-green-600" />
              <span className="text-xs text-muted-foreground">✓ Purpose-built</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 p-4">
              <HelpCircle className="size-5 text-orange-500" />
              <span className="text-xs text-muted-foreground">△ Generic Cloud</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 p-4">
              <HelpCircle className="size-5 text-orange-500" />
              <span className="text-xs text-muted-foreground">△ Generic</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 p-4">
              <HelpCircle className="size-5 text-orange-500" />
              <span className="text-xs text-muted-foreground">△ Limited</span>
            </div>

            {/* CTA Row */}
            <div className="border-border p-4"></div>
            <div className="flex items-center justify-center gap-2 rounded-b-2xl border-border bg-muted p-4">
              <Button className="w-full" asChild>
                <a href="https://docs.phala.network/dstack/design-documents" target="_blank" rel="noopener noreferrer">
                  🔬 Know More about dstack
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Compare3 }
