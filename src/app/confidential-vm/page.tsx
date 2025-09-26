'use client'

import { AnimatePresence, motion } from 'framer-motion'
import {
  CheckCircle,
  Cpu,
  Lock,
  Package,
  Search,
  Shield,
  Sparkles,
  Zap,
} from 'lucide-react'
import { useId, useState } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const DEPLOYMENT_STEPS = [
  {
    id: 'container-prep',
    title: 'Container Preparation',
    description:
      'Use your existing Docker workflow - no code changes needed. Build, tag, and deploy containers exactly as you do today.',
    link: 'https://docs.phala.com/phala-cloud/cvm/create-with-docker-compose',
    code: `# Build your Docker image
docker build -t myapp:latest .

# Create docker-compose.yml
cat > docker-compose.yml <<EOF
version: '3'
services:
  app:
    image: myapp:latest
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=\${DATABASE_URL}
      - API_KEY=\${API_KEY}
EOF

# Deploy to Phala CVM
npx phala cvms create -n myapp \\
  --compose docker-compose.yml`,
  },
  {
    id: 'auto-encryption',
    title: 'Automatic Encryption',
    description:
      'Environment variables and secrets automatically encrypted with TEE public keys. Only your running container can decrypt them.',
    link: 'https://docs.phala.com/phala-cloud/cvm/set-secure-environment-variables',
    code: `# Set secure environment variables
npx phala cvms env set myapp \\
  DATABASE_URL="postgresql://..." \\
  API_KEY="sk_live_..."

# Variables are encrypted with TEE public key
# Encryption happens automatically
✓ Fetching CVM public key...
✓ Encrypting environment variables...
✓ Variables encrypted successfully

# Only your TEE can decrypt
echo $API_KEY  # Works inside TEE
# Returns: sk_live_...`,
  },
  {
    id: 'hardware-attestation',
    title: 'Hardware Attestation',
    description:
      'TEE generates cryptographic proof of code integrity signed by Intel/NVIDIA hardware. Publicly verifiable by anyone.',
    link: 'https://docs.phala.com/phala-cloud/getting-started/attestation',
    code: `# Get attestation report
curl https://api.phala.network/attest/<cvm-id>

# Response: Cryptographic proof
{
  "quote": "AgABAL8LAAAMAAsA...",
  "mrenclave": "a7f2c8d9e1b4...",
  "mrsigner": "83d719e77deac...",
  "tcb_level": "UpToDate",
  "signature": "Intel/NVIDIA signed"
}

# Verify attestation
npx phala cvms verify <cvm-id>
✓ TEE signature valid
✓ Code integrity verified
✓ Hardware genuine`,
  },
  {
    id: 'runtime-isolation',
    title: 'Runtime Isolation',
    description:
      'Memory encrypted by CPU/GPU hardware. Operating system, hypervisor, and cloud provider cannot access your data.',
    link: null,
    code: `# Inside TEE: Full access
$ cat /proc/self/status
Name:   myapp
Tgid:   1
MemEncrypt: AES-XTS-256  ✓
TEE:    Intel TDX / NVIDIA H100

# Outside TEE: No access
$ sudo cat /proc/1234/mem
Permission denied (TEE protected)

# Cloud provider: No access
$ gdb -p 1234
Cannot attach: Memory encrypted
TEE isolation active`,
  },
  {
    id: 'live-verification',
    title: 'Live Verification',
    description:
      'Continuous attestation monitoring with real-time verification endpoints. Detect any tampering immediately.',
    link: null,
    code: `# Setup continuous monitoring
npx phala cvms monitor <cvm-id> \\
  --interval 60s \\
  --webhook https://your.app/alerts

# Real-time attestation status
{
  "status": "verified",
  "timestamp": "2025-09-26T16:50:00Z",
  "measurements": {
    "mrenclave": "a7f2c8d9...",
    "tcb_level": "UpToDate"
  },
  "next_check": "60s"
}

# Alert on tampering
if attestation_fails():
  send_alert("TEE compromised!")`,
  },
]

const BENEFITS = [
  {
    title: 'Memory Encryption',
    description:
      'Hardware-level encryption of all memory pages with CPU/GPU generated keys',
    icon: Lock,
  },
  {
    title: 'Native Performance',
    description:
      '5% overhead while maintaining full security guarantees and hardware acceleration',
    icon: Zap,
  },
  {
    title: 'Attack Resistance',
    description:
      'Protection against privileged access, cold boot, and side-channel attacks',
    icon: Shield,
  },
  {
    title: 'Zero Migration',
    description:
      'Deploy existing Docker containers without code changes or special libraries',
    icon: Package,
  },
  {
    title: 'Live Attestation',
    description:
      'Real-time cryptographic proof of integrity with public verification endpoints',
    icon: Search,
  },
  {
    title: 'Multi-Hardware',
    description:
      'Support for Intel TDX, NVIDIA GPU TEE, and AMD SEV from one platform',
    icon: Cpu,
  },
]

const FAQ_QUESTIONS = [
  {
    question: "What's the difference between Intel TDX and NVIDIA GPU TEE?",
    answer:
      'Intel TDX provides VM-level CPU isolation while NVIDIA GPU TEE offers hardware-secured GPU memory and compute for AI workloads.',
  },
  {
    question: 'Do I need to modify my Docker containers for TEE deployment?',
    answer:
      'No modifications needed. Your existing containers work as-is with automatic TEE security applied at infrastructure level.',
  },
  {
    question: 'How do I verify my application is running in genuine TEE?',
    answer:
      'Use attestation endpoints to get cryptographic reports signed by Intel/NVIDIA hardware proving TEE genuineness and code integrity.',
  },
  {
    question: "What's the performance impact of memory encryption?",
    answer:
      'CPU workloads see 2-5% overhead, GPU AI/ML workloads see 5-7% overhead while maintaining hardware acceleration.',
  },
  {
    question: 'Can Phala operators access my running containers?',
    answer:
      'No. TEE hardware prevents any external access including from operators, cloud providers, or system administrators.',
  },
  {
    question: 'How does environment variable encryption work?',
    answer:
      'Variables are encrypted with TEE public keys during deployment. Only your running TEE instance can decrypt them.',
  },
  {
    question: 'What compliance standards does this meet?',
    answer:
      'Supports GDPR, HIPAA, SOC 2, FedRAMP requirements with hardware-backed security guarantees and audit trails.',
  },
  {
    question: 'How do I debug applications running in TEE?',
    answer:
      'Standard debugging tools work through encrypted channels. Remote debugging, logging, and profiling maintain security.',
  },
]

function HeroSection() {
  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0 z-10 bg-[50%_0] bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/shadow-overlay.png')] bg-no-repeat" />
      <div className="container p-6 md:p-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr]">
          <div className="flex flex-col gap-8">
            <div>
              <Badge variant="outline">Enterprise Security</Badge>
              <h1 className="my-9 text-3xl font-medium md:text-5xl">
                Better Security.
                <br />
                <span className="text-muted-foreground">less complexity.</span>
              </h1>
              <p className="text-muted-foreground">
                Confidential Virtual Machines combine the simplicity of
                containerization with hardware-level security. Deploy any Docker
                container to Trusted Execution Environments (TEE) ensuring
                complete data isolation from cloud providers and system
                administrators.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="h-auto w-4" />
                Hardware Memory Encryption
              </div>
              <Separator />
              <div className="flex items-center gap-2 text-muted-foreground">
                <Lock className="h-auto w-4" />
                Cryptographic Attestation
              </div>
              <Separator />
              <div className="flex items-center gap-2 text-muted-foreground">
                <Package className="h-auto w-4" />
                Zero Code Changes
              </div>
              <Separator />
              <div className="flex items-center gap-2 text-muted-foreground">
                <Cpu className="h-auto w-4" />
                Intel TDX + NVIDIA Support
              </div>
              <Separator />
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-auto w-4" />
                Real-time Verification
              </div>
              <Separator />
            </div>
          </div>
          <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden px-6 md:px-8 rounded-lg" style={{backgroundColor: '#F9F9F7'}}>
            <div className="absolute inset-0 border-2 border-slate-400 rounded-lg"></div>
            <img
              src="/core.png"
              alt="CVM Architecture"
              className="max-h-[450px] w-full object-contain"
            />
            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-10 flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild>
                <a
                  href="https://cloud.phala.network/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Building
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://docs.phala.com/phala-cloud/getting-started/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Documentation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MultiTEESection() {
  return (
    <section className="bg-gray-50 py-32 dark:bg-background">
      <div className="container max-w-7xl">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Cpu className="size-5" />
          <p className="text-sm">Hardware Support</p>
        </div>
        <Separator className="mt-3 mb-8" />
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <h2 className="text-3xl font-medium md:w-1/2">
            Multi-TEE platform for every confidential computing use case you can
            think of.
          </h2>
          <p className="md:w-1/2">
            From CPU-intensive workloads to GPU-accelerated AI, we support all
            major Trusted Execution Environment technologies.
          </p>
        </div>
        <div className="mt-11 flex flex-col gap-6 md:flex-row">
          <div className="flex w-full flex-col gap-6">
            <Card className="p-6">
              <p className="mb-1 flex items-center gap-2 font-medium">
                Performance <Sparkles className="size-4" />
              </p>
              <p className="text-muted-foreground">
                95% native performance with full security guarantees. 2-5% CPU
                overhead, 5-7% GPU overhead while maintaining hardware
                acceleration.
              </p>
            </Card>
            <Card className="overflow-hidden pt-0">
              <img
                src="/tdx.webp"
                alt="Intel TDX Architecture"
                className="aspect-video w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/intel-logo.png"
                    alt="Intel"
                    className="h-8 w-auto object-contain"
                  />
                  <p className="flex items-center gap-2 font-medium">
                    Intel TDX Architecture <Sparkles className="size-4" />
                  </p>
                </div>
                <p className="text-muted-foreground mb-4">
                  Trust Domain Extensions for x86 with CPU-generated keys and
                  TDX Report attestation. Best for web services and traditional
                  ML.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://www.intel.com/content/www/us/en/products/docs/accelerator-engines/trust-domain-extensions.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                </Button>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/amd-logo.svg"
                  alt="AMD"
                  className="h-8 w-auto object-contain"
                />
                <p className="font-medium">AMD SEV</p>
              </div>
              <p className="text-muted-foreground mb-4">
                Secure Encrypted Virtualization technology providing VM-level
                isolation with encrypted memory for diverse workloads.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://www.amd.com/en/developer/sev.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
              </Button>
            </Card>
          </div>
          <div className="flex w-full flex-col gap-6">
            <Card className="overflow-hidden pt-0">
              <img
                src="/nvidia.jpeg"
                alt="NVIDIA Architecture"
                className="aspect-video w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/nvidia-logo.png"
                    alt="NVIDIA"
                    className="h-8 w-auto object-contain"
                  />
                  <p className="font-medium">NVIDIA Confidential Computing</p>
                </div>
                <p className="text-muted-foreground mb-4">
                  H100/H200 GPU TEE for AI workloads with 80GB+ secure memory
                  and hardware memory encryption on GPU.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://docs.phala.com/phala-cloud/confidential-ai/overview#confidential-gpu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                </Button>
              </div>
            </Card>
            <Card className="p-6">
              <p className="mb-1 flex items-center gap-2 font-medium">
                Multi-Hardware Support <Sparkles className="size-4" />
              </p>
              <p className="text-muted-foreground">
                Deploy across Intel Xeon 4th gen (Sapphire Rapids), NVIDIA
                H100/H200, and AMD EPYC processors from a single unified
                platform.
              </p>
            </Card>
            <Card className="border-dashed bg-transparent p-6 shadow-none">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/arm-logo.png"
                  alt="ARM"
                  className="h-8 w-auto object-contain"
                />
                <div className="flex items-center gap-2 font-medium">
                  ARM TrustZone
                  <Badge variant="outline">Coming soon</Badge>
                </div>
              </div>
              <p className="text-muted-foreground">
                Mobile and edge computing support with ARM Confidential Compute
                Architecture for IoT and edge deployments.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

interface PlusSignsProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

function PlusSigns({ className, ...props }: PlusSignsProps) {
  const GAP = 16
  const STROKE_WIDTH = 1
  const PLUS_SIZE = 6
  const id = useId()
  const patternId = `plus-pattern-${id}`

  return (
    <svg width={GAP * 2} height={GAP * 2} className={className} {...props}>
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width={GAP}
          height={GAP}
          patternUnits="userSpaceOnUse"
        >
          <line
            x1={GAP / 2}
            y1={(GAP - PLUS_SIZE) / 2}
            x2={GAP / 2}
            y2={(GAP + PLUS_SIZE) / 2}
            stroke="currentColor"
            strokeWidth={STROKE_WIDTH}
          />
          <line
            x1={(GAP - PLUS_SIZE) / 2}
            y1={GAP / 2}
            x2={(GAP + PLUS_SIZE) / 2}
            y2={GAP / 2}
            stroke="currentColor"
            strokeWidth={STROKE_WIDTH}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  )
}

function DeploymentSection() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <section className="container max-w-5xl py-32">
      <div className="from-gradient-1/20 relative overflow-hidden rounded-3xl border bg-linear-to-bl to-transparent py-5 sm:py-6 lg:py-8">
        <div className="absolute inset-0 z-[-1]">
          <PlusSigns className="h-full w-full text-foreground/[0.05]" />
        </div>
        <div className="sm:px-6 lg:px-8">
          <div className="px-5 sm:px-0">
            <h3 className="font-mono text-sm font-semibold tracking-widest text-accent-foreground">
              ZERO-TRUST DEPLOYMENT
            </h3>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Deploy confidential containers with cryptographic verification
            </h2>
          </div>
          <div className="mt-10 flex gap-12 overflow-hidden sm:mt-16 lg:mt-20">
            <Accordion
              type="single"
              className="flex-1"
              defaultValue="0"
              onValueChange={(value) => setSelectedIndex(Number(value))}
            >
              {DEPLOYMENT_STEPS.map((step, index) => (
                <AccordionItem
                  key={step.id}
                  value={index.toString()}
                  className="border-black/20 dark:border-white/20"
                >
                  <AccordionTrigger className="px-5 text-start hover:no-underline sm:px-0">
                    <h3 className="text-xl font-bold opacity-80">
                      {step.title}
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="px-5 leading-relaxed font-medium text-muted-foreground sm:px-0">
                      {step.description}
                    </p>
                    {step.link && (
                      <div className="px-5 sm:px-0 mt-4">
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={step.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Learn more
                          </a>
                        </Button>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="relative hidden sm:block sm:flex-1">
              <div className="rounded-2xl overflow-hidden shadow-lg bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-slate-400 ml-2 font-mono">
                    {DEPLOYMENT_STEPS[selectedIndex].title.toLowerCase().replace(/\s+/g, '-')}.sh
                  </span>
                </div>
                <pre className="p-6 text-sm leading-relaxed overflow-x-auto">
                  <code className="text-slate-100 font-mono">
                    {DEPLOYMENT_STEPS[selectedIndex].code}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type IntegrationItem = { src: string; text: string; className?: string }

const integrationsList1: IntegrationItem[] = [
  { src: 'https://cdn.simpleicons.org/github/white', text: 'GitHub' },
  { src: 'https://cdn.simpleicons.org/docker/2496ED', text: 'Docker' },
  { src: 'https://cdn.simpleicons.org/supabase/3FCF8E', text: 'Supabase' },
  { src: 'https://cdn.simpleicons.org/openai/412991', text: 'OpenAI' },
  { src: 'https://cdn.simpleicons.org/anthropic/191919', text: 'Anthropic' },
  { src: 'https://cdn.simpleicons.org/jupyter/F37626', text: 'Jupyter' },
  { src: 'https://cdn.simpleicons.org/databricks/FF3621', text: 'Databricks' },
  {
    src: '',
    text: '',
    className: 'bg-linear-to-br from-blue-500 to-blue-300',
  },
]

const integrationsList2: IntegrationItem[] = [
  {
    src: '',
    text: '',
    className: 'bg-linear-to-br from-green-500 to-green-300',
  },
  { src: 'https://cdn.simpleicons.org/tensorflow/FF6F00', text: 'TensorFlow' },
  { src: 'https://cdn.simpleicons.org/pytorch/EE4C2C', text: 'PyTorch' },
  { src: 'https://cdn.simpleicons.org/kubernetes/326CE5', text: 'Kubernetes' },
  { src: 'https://cdn.simpleicons.org/mongodb/47A248', text: 'MongoDB' },
  { src: 'https://cdn.simpleicons.org/ethereum/3C3C3D', text: 'Ethereum' },
  { src: 'https://cdn.simpleicons.org/coinbase/0052FF', text: 'Coinbase' },
  { src: 'https://cdn.simpleicons.org/solana/14F195', text: 'Solana' },
]

const integrationsList3: IntegrationItem[] = [
  { src: 'https://cdn.simpleicons.org/langchain/1C3C3C', text: 'LangChain' },
  { src: 'https://cdn.simpleicons.org/vercel/000000', text: 'Vercel' },
  { src: 'https://cdn.simpleicons.org/nextdotjs/000000', text: 'Next.js' },
  {
    src: '',
    text: '',
    className: 'bg-linear-to-br from-purple-500 to-purple-300',
  },
]

const IntegrationList = ({ list }: { list: IntegrationItem[] }) => {
  return (
    <div className="flex gap-3 flex-wrap">
      {list.map((item, i) =>
        item.src ? (
          <div
            className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-muted p-1"
            key={`list-item-${i}`}
          >
            <div className="flex size-8 overflow-hidden rounded-full bg-background p-2">
              <img
                src={item.src}
                alt={item.text}
                className="m-auto block size-full object-contain object-center"
              />
            </div>
            <p className="pr-2 text-sm font-medium">{item.text}</p>
          </div>
        ) : (
          <div
            className={`h-10 w-[6.25rem] shrink-0 rounded-full ${item?.className}`}
            key={`list-item-${i}`}
          />
        ),
      )}
    </div>
  )
}

function BenefitsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="overflow-hidden py-32">
      <div className="container">
        {/* Benefits Grid */}
        <div className="flex w-full flex-col items-center justify-center px-4 mb-20">
          <div className="flex items-center gap-2 text-muted-foreground mb-8">
            <Shield className="size-5" />
            <p className="text-sm">Technical Benefits</p>
          </div>
          <h2 className="relative z-20 py-2 text-center font-sans text-5xl font-semibold tracking-tighter md:py-7 lg:text-6xl">
            Zero-trust confidential computing
          </h2>
          <p className="text-md text-muted-foreground mx-auto max-w-xl text-center lg:text-lg mb-10">
            Hardware-backed security guarantees with enterprise-grade performance.
          </p>

          <div className="relative mt-10 grid w-full max-w-4xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((item, idx) => (
              <div
                key={idx}
                className="group relative block h-full w-full p-2"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="bg-muted-foreground/20 absolute inset-0 block h-full w-full rounded-2xl"
                      layoutId="hoverBackground"
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>

                <BenefitCard
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  className="flex flex-col items-center justify-center"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Integration Showcase */}
        <div className="grid w-full grid-cols-1 items-start justify-between overflow-hidden rounded-3xl border border-muted bg-background md:grid-cols-[minmax(18.75rem,28rem)_1fr] md:p-8">
          <div className="order-2 flex flex-col gap-4 p-6 pt-10 md:order-1 md:p-0">
            <h3 className="text-3xl font-semibold tracking-tight lg:text-4xl">
              Seamlessly integrates with your developer tools
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Deploy confidential containers using your existing development
              stack. No need to learn new tools or change your workflow.
            </p>
            <div className="mt-4">
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://docs.phala.com/dstack/design-documents/decentralized-root-of-trust"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn about Zero-Trust Framework
                </a>
              </Button>
            </div>
          </div>
          <div className="relative order-1 p-4 pb-0 md:order-2 md:p-0 space-y-3">
            <IntegrationList list={integrationsList1} />
            <div className="ml-8">
              <IntegrationList list={integrationsList2} />
            </div>
            <IntegrationList list={integrationsList3} />
          </div>
        </div>
      </div>
    </section>
  )
}

const BenefitCard = ({
  className,
  title,
  description,
  icon: Icon,
}: {
  className?: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}) => {
  return (
    <div
      className={cn(
        "bg-muted relative z-20 flex h-full flex-col items-center justify-center gap-4 rounded-2xl p-5 text-center",
        className,
      )}
    >
      <Icon className="text-muted-foreground mt-3 size-8 stroke-1" />
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  )
}

function FAQSection() {
  return (
    <section className="bg-background py-32">
      <div className="container">
        <h2 className="text-foreground mb-10 text-center text-6xl font-bold tracking-tighter">
          Technical Q&A
        </h2>
        <div className="border-border bg-background z-20 mx-auto max-w-2xl rounded-2xl border p-3">
          <Accordion
            type="single"
            collapsible
            className="flex w-full flex-col items-center justify-center gap-3"
          >
            {FAQ_QUESTIONS.map((item, index) => (
              <AccordionItem
                value={index.toString()}
                key={index}
                className="bg-muted m-0 w-full rounded-xl px-4 py-2"
              >
                <AccordionTrigger className="flex flex-1 justify-between text-left font-semibold transition-all hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground mt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default function ConfidentialVmPage() {
  return (
    <div className="w-full bg-background">
      <HeroSection />
      <MultiTEESection />
      <DeploymentSection />
      <BenefitsSection />
      <FAQSection />
    </div>
  )
}