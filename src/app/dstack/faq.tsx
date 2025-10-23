import { Badge } from '@/components/ui/badge'

const faqs = [
  // Architecture & Purpose
  {
    question: 'What is dstack in Phala Cloud?',
    answer:
      "dstack is Phala's confidential orchestration layer — it manages GPU runners, scheduling, and attestation for AI workloads. Think of it as a trustless Kubernetes that can launch and verify fine-tuning, inference, or agent jobs across Phala's decentralized GPU network.",
    category: 'Architecture & Purpose',
  },
  {
    question: 'How does dstack differ from a normal cloud orchestrator?',
    answer:
      "Traditional orchestrators (like Docker Swarm or Kubernetes) manage containers but can't prove what actually ran. dstack extends orchestration with TEE attestation, encrypted storage, and verifiable job logs — so every AI job can be proven to run securely and untampered.",
    category: 'Architecture & Purpose',
  },
  {
    question: 'What types of workloads can dstack run?',
    answer:
      "dstack supports any containerized AI workload — from fine-tuning LLMs (PyTorch / TensorFlow) to serving inference APIs or autonomous agents. It handles both CPU and GPU nodes (H100 / H200 / A100 / A10) and integrates with Phala's confidential compute runtime for full isolation.",
    category: 'Architecture & Purpose',
  },
  {
    question: 'Is dstack open source?',
    answer:
      "Yes. dstack's core runner and job orchestration framework are open source and being upstreamed to the Phala ecosystem. Developers can self-host it or use Phala Cloud's managed control plane.",
    category: 'Architecture & Purpose',
  },
  // Developer Experience & Integration
  {
    question: 'How do I launch a job with dstack?',
    answer:
      'You can start any containerized workload with a single command or YAML file. For example: dstack run --gpu H200 --image unslothai/unsloth:latest --mount data:/mnt/data train.py. This spins up a verified GPU node, mounts your encrypted dataset, and runs inside a TEE.',
    category: 'Developer Experience',
  },
  {
    question: 'Does dstack work with existing ML frameworks?',
    answer:
      'Yes. dstack is framework-agnostic — it runs jobs that use PyTorch, TensorFlow, JAX, or even custom CUDA code. It automatically configures environment variables for CUDA, NCCL, and secure communication between GPUs.',
    category: 'Developer Experience',
  },
  {
    question: 'Can I use my own Docker images?',
    answer:
      'Absolutely. Any OCI-compatible container can be used. You can publish your own image (with dependencies, model code, etc.) and dstack will pull and execute it inside an enclave. Images can also be signed and verified to prevent tampering.',
    category: 'Developer Experience',
  },
  {
    question: 'How does dstack manage data privacy during training or inference?',
    answer:
      'All data volumes and environment secrets are encrypted. Decryption keys are only unsealed inside the TEE after successful remote attestation. This ensures that neither operators nor other workloads can access your raw data.',
    category: 'Developer Experience',
  },
  // Verification, Scaling & Monitoring
  {
    question: 'How can I verify my dstack job actually ran securely?',
    answer:
      'Every dstack job produces a Phala Attestation Bundle — a JSON report signed by the enclave hardware. It includes the code hash, image ID, node signature, and timestamps. You can verify it programmatically or attach it to your output artifacts for auditing.',
    category: 'Verification & Monitoring',
  },
  {
    question: 'Can dstack scale across multiple GPUs or nodes?',
    answer:
      "Yes. dstack supports distributed GPU training and multi-node clusters using PyTorch DDP or TensorFlow's collective ops. It automatically provisions encrypted interconnects between enclaves, so gradients never leave the secure boundary.",
    category: 'Verification & Monitoring',
  },
  {
    question: 'What happens if a node fails during training?',
    answer:
      'dstack checkpoints encrypted model states periodically. If a node fails, a new enclave can resume from the last checkpoint — preserving both progress and confidentiality.',
    category: 'Verification & Monitoring',
  },
  {
    question: 'How do I monitor or debug jobs in a confidential environment?',
    answer:
      'dstack streams secure logs to your dashboard, but filters sensitive data. You can see real-time metrics (GPU usage, loss curves, throughput) while ensuring no raw dataset or intermediate tensor is ever exposed.',
    category: 'Verification & Monitoring',
  },
]

export default function DstackFAQ() {
  return (
    <section className="w-full py-24 max-w-7xl mx-auto">
      <div className="container mx-auto">
        <div className="text-center">
          <Badge className="text-xs leading-4 font-medium">FAQ</Badge>
          <h2 className="font-display mt-4 font-semibold text-foreground text-3xl leading-tight md:text-4xl lg:text-5xl">
            dstack — FAQ
          </h2>
          <p className="mt-4 text-lg leading-7 md:text-xl font-display font-medium text-muted-foreground">
            Everything you need to know about confidential orchestration
          </p>
        </div>
        <div className="mx-auto mt-14 grid gap-8 md:grid-cols-2 md:gap-12">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="flex gap-4">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-sm bg-muted font-mono text-sm leading-5 text-muted-foreground font-semibold">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold text-lg leading-7">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground text-base leading-6 mt-1">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
