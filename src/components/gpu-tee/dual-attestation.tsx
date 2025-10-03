'use client'

import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const GpuTeeDualAttestation = () => {
  const [selectedAttestation, setSelectedAttestation] = useState('intel-tdx')
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const currentAttestation = attestationExamples.find(
    (att) => att.id === selectedAttestation,
  )

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Verify Your Entire Workload with Dual Attestation
          </h2>
          <p className="text-lg text-muted-foreground">
            Every GPU TEE deployment on Phala Cloud provides{' '}
            <strong>two attestation reports</strong>: Intel TDX for CPU/memory
            and NVIDIA for GPU - cryptographic proof that your entire workload
            runs in a genuine, hardware-protected environment.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Attestation Type Selection Cards */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {attestationExamples.map((att) => {
                return (
                  <Card
                    key={att.id}
                    className={`cursor-pointer transition-all ${
                      selectedAttestation === att.id
                        ? 'border-primary bg-muted'
                        : 'hover:bg-muted'
                    }`}
                    onClick={() => setSelectedAttestation(att.id)}
                  >
                    <CardHeader>
                      <CardTitle className="text-base">{att.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {att.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Code Display */}
          <div className="min-w-0 lg:col-span-2">
            <Tabs defaultValue="javascript" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="go">Go</TabsTrigger>
              </TabsList>
              <TabsContent value="javascript" className="mt-4">
                <div className="relative rounded-lg border bg-muted p-4">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute right-2 top-2"
                    onClick={() =>
                      copyToClipboard(currentAttestation?.codeJs || '', 'js')
                    }
                  >
                    {copiedCode === 'js' ? (
                      <Check className="size-4" />
                    ) : (
                      <Copy className="size-4" />
                    )}
                  </Button>
                  <pre className="overflow-x-auto text-sm">
                    <code>{currentAttestation?.codeJs}</code>
                  </pre>
                </div>
              </TabsContent>
              <TabsContent value="python" className="mt-4">
                <div className="relative rounded-lg border bg-muted p-4">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute right-2 top-2"
                    onClick={() =>
                      copyToClipboard(currentAttestation?.codePy || '', 'py')
                    }
                  >
                    {copiedCode === 'py' ? (
                      <Check className="size-4" />
                    ) : (
                      <Copy className="size-4" />
                    )}
                  </Button>
                  <pre className="overflow-x-auto text-sm">
                    <code>{currentAttestation?.codePy}</code>
                  </pre>
                </div>
              </TabsContent>
              <TabsContent value="go" className="mt-4">
                <div className="relative rounded-lg border bg-muted p-4">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute right-2 top-2"
                    onClick={() =>
                      copyToClipboard(currentAttestation?.codeGo || '', 'go')
                    }
                  >
                    {copiedCode === 'go' ? (
                      <Check className="size-4" />
                    ) : (
                      <Copy className="size-4" />
                    )}
                  </Button>
                  <pre className="overflow-x-auto text-sm">
                    <code>{currentAttestation?.codeGo}</code>
                  </pre>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export { GpuTeeDualAttestation }

const attestationExamples = [
  {
    id: 'intel-tdx',
    title: 'Intel TDX Attestation',
    description: 'Verify CPU, memory, and VM environment security',
    codeJs: `// Verify Intel TDX Report
const tdxReport = await fetch('/api/attestation/tdx')
const verified = await verifyTdxAttestation(tdxReport)
console.log('✓ Intel TDX Verified')
console.log('✓ CPU/Memory Protected')`,
    codePy: `# Verify Intel TDX Report
tdx_report = requests.get('/api/attestation/tdx')
verified = verify_tdx_attestation(tdx_report)
print('✓ Intel TDX Verified')
print('✓ CPU/Memory Protected')`,
    codeGo: `// Verify Intel TDX Report
tdxReport := fetchTdxReport()
verified := verifyTdxAttestation(tdxReport)
fmt.Println("✓ Intel TDX Verified")
fmt.Println("✓ CPU/Memory Protected")`,
  },
  {
    id: 'nvidia-cc',
    title: 'NVIDIA GPU Attestation',
    description: 'Verify GPU confidential computing environment',
    codeJs: `// Verify NVIDIA GPU Report
const gpuReport = await fetch('/api/attestation/nvidia')
const verified = await verifyNvidiaAttestation(gpuReport)
console.log('✓ NVIDIA GPU Verified')
console.log('✓ GPU Memory Encrypted')`,
    codePy: `# Verify NVIDIA GPU Report
gpu_report = requests.get('/api/attestation/nvidia')
verified = verify_nvidia_attestation(gpu_report)
print('✓ NVIDIA GPU Verified')
print('✓ GPU Memory Encrypted')`,
    codeGo: `// Verify NVIDIA GPU Report
gpuReport := fetchNvidiaReport()
verified := verifyNvidiaAttestation(gpuReport)
fmt.Println("✓ NVIDIA GPU Verified")
fmt.Println("✓ GPU Memory Encrypted")`,
  },
  {
    id: 'combined',
    title: 'Combined Verification',
    description: 'Verify both Intel TDX and NVIDIA reports',
    codeJs: `// Verify Full-Stack TEE
const reports = await fetch('/api/attestation/full')
const tdxOk = await verifyTdxAttestation(reports.tdx)
const gpuOk = await verifyNvidiaAttestation(reports.nvidia)
console.log('✓ Full-Stack TEE Verified')
console.log('✓ Intel TDX + NVIDIA CC Protected')`,
    codePy: `# Verify Full-Stack TEE
reports = requests.get('/api/attestation/full')
tdx_ok = verify_tdx_attestation(reports['tdx'])
gpu_ok = verify_nvidia_attestation(reports['nvidia'])
print('✓ Full-Stack TEE Verified')
print('✓ Intel TDX + NVIDIA CC Protected')`,
    codeGo: `// Verify Full-Stack TEE
reports := fetchFullStackReports()
tdxOk := verifyTdxAttestation(reports.Tdx)
gpuOk := verifyNvidiaAttestation(reports.Nvidia)
fmt.Println("✓ Full-Stack TEE Verified")
fmt.Println("✓ Intel TDX + NVIDIA CC Protected")`,
  },
]
