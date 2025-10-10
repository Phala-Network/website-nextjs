import type { Metadata } from 'next'

import { Codeexample3 } from '@/components/solutions/codeexample3'
import { Compliance5 } from '@/components/solutions/compliance5'
import { Cta4 } from '@/components/solutions/cta4'
import { Faq14 } from '@/components/solutions/faq14'
import { Feature95Training } from '@/components/solutions/feature95-training'
import { Feature206 } from '@/components/solutions/feature206'
import { Feature251Training } from '@/components/solutions/feature251-training'
import { Hero216 } from '@/components/solutions/hero216'

export const metadata: Metadata = {
  title: 'Confidential Model Training at Scale',
  description:
    'Distributed pre-training and instruction-tuning on sensitive data with confidential GPUs and attestation.',
  keywords: [
    'distributed training',
    'multi-GPU',
    'pre-training',
    'consortium learning',
    'confidential computing',
    'TEE',
    'LLM training',
  ],
}

export default function ConfidentialTrainingPage() {
  return (
    <>
      <Hero216 />
      <Feature206
        title="Why Confidential Training Matters"
        description="Centralized training infrastructure exposes datasets and model IP. Phala enables consortium learning and regulated-industry training with hardware isolation."
        points={[
          'Training data contains regulated information',
          'Model checkpoints encode proprietary techniques',
          'Gradient updates can leak training examples',
          'Consortium partners need data-custody guarantees',
        ]}
        images={[
          '/solutions/train/1.png',
          '/solutions/train/2.png',
          '/solutions/train/3.png',
          '/solutions/train/4.png',
        ]}
        links={[
          'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240SB1047',
          "https://www-cdn.anthropic.com/807c59454757214bfd37592d6e048079cd7a7728.pdf#:~:text=Anthropic's%20Responsible%20Scaling%20Policy%20(RSP)%20sets%20forth%20our%20commitment%20not,protecting%20model%20weights%20from%20theft.",
          'https://www.forbes.com/sites/hessiejones/2024/05/31/will-llm-adoption-demand-more-stringent-data-security-measures/',
          'https://www.cambridge.org/core/journals/journal-of-law-medicine-and-ethics/article/ai-chatbots-and-challenges-of-hipaa-compliance-for-ai-developers-and-vendors/C873B37AF3901C034FECAEE4598D4A6A',
        ]}
      />
      <Feature95Training />
      <Feature251Training />
      <Codeexample3
        leftCode={{
          title: 'Deploy Multi-GPU Training',
          description:
            'Launch distributed pre-training jobs on confidential GPU clusters. Slurm and Kubernetes templates with TEE attestation and sealed checkpoint storage.',
          filename: 'train-cluster.sh',
          language: 'bash',
          code: `# Deploy distributed training on TEE cluster
docker run -d \\
  --name phala-training \\
  --gpus all \\
  --device=/dev/tdx_guest \\
  -v $(pwd)/data:/data \\
  -v $(pwd)/checkpoints:/checkpoints \\
  -e WORLD_SIZE=8 \\
  -e RANK=0 \\
  -e MASTER_ADDR=10.0.1.100 \\
  -e MASTER_PORT=29500 \\
  -e MODEL_CONFIG=/data/llama-70b.json \\
  -e TRAINING_DATA=/data/consortium/*.jsonl \\
  -e CHECKPOINT_DIR=/checkpoints \\
  phalanetwork/training:latest

# Monitor training progress
docker logs -f phala-training

# Training output from sealed environment
# Epoch 1/10: Loss 2.134 | Throughput 1.2M tok/s
# Epoch 2/10: Loss 1.876 | Throughput 1.2M tok/s
# Checkpoint saved: /checkpoints/epoch-2.bin
# Attestation signed: 0x8a9b7c6d...`,
        }}
        rightCode={{
          title: 'Verify Training Lineage',
          description:
            'Generate cryptographic proofs of your training process. Verify cluster attestation, dataset hashes, and reproducible build IDs for auditors and consortium partners.',
          filename: 'verify-lineage.sh',
          language: 'bash',
          code: `# Get cluster attestation and training lineage
curl -X POST https://cloud-api.phala.network/api/v1/training/verify \\
  -H "Content-Type: application/json" \\
  -d '{
    "job_id": "train-consortium-llama-70b",
    "verify_cluster_attestation": true,
    "verify_dataset_hashes": true,
    "verify_checkpoint_lineage": true
  }'

# Attestation proves sealed training
{
  "verified": true,
  "cluster_size": 8,
  "tee_type": "Intel TDX",
  "dataset_hashes": [
    "0x8a9b7c6d...",
    "0x1a2b3c4d..."
  ],
  "checkpoint_lineage": "llama-70b-base -> epoch-10.bin",
  "reproducible_build_id": "0xfe7d8c9b...",
  "timestamp": "2025-01-15T14:30:00Z"
}`,
        }}
      />
      <Compliance5 />
      <Faq14
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about Confidential Training"
        faqItems={[
          {
            category: 'PERFORMANCE & COST',
            items: [
              {
                question:
                  "What's the performance overhead for multi-GPU TEE training?",
                answer:
                  'GPU TEE overhead is typically 5-15% compared to bare metal. Memory encryption happens at hardware speed with Intel TDX/AMD SEV. High-speed RDMA interconnect keeps gradient synchronization efficient even across encrypted enclaves.',
              },
              {
                question: 'How does cost compare to standard cloud training?',
                answer:
                  'TEE infrastructure adds 10-20% premium over standard GPU instances. However, consortium learning splits costs across partners while maintaining data custody—often more economical than each party training separately.',
              },
            ],
          },
          {
            category: 'SECURITY & PRIVACY',
            items: [
              {
                question: 'How do consortium partners maintain data custody?',
                answer:
                  "Each partner's data stays in separate sealed storage. Training orchestrator coordinates gradient updates without exposing raw data cross-party. Remote attestation proves proper isolation before any party sends datasets.",
              },
              {
                question:
                  'Can cloud operators access training data or gradients?',
                answer:
                  'No. Hardware memory encryption in TEEs prevents any operator access to runtime state. Gradients are computed and synchronized inside encrypted enclaves with cryptographic proofs of isolation.',
              },
              {
                question: 'What prevents gradient-based training data leakage?',
                answer:
                  'Gradients are computed inside TEEs and never leave in plaintext. Differential privacy techniques can be applied within the enclave. Only final model checkpoints are exported with signed attestation lineage.',
              },
            ],
          },
          {
            category: 'TECHNICAL',
            items: [
              {
                question: 'What distributed training patterns are supported?',
                answer:
                  "Tensor parallelism, data parallelism, pipeline parallelism, and hybrid strategies. Phala's confidential scheduler supports PyTorch FSDP, DeepSpeed, and Megatron-LM inside TEE clusters.",
              },
              {
                question: 'Can we use existing training scripts?',
                answer:
                  'Yes, minimal changes required. Wrap your training code in our confidential container and configure attestation policies. Standard frameworks (PyTorch, TensorFlow, JAX) run as-is inside TEEs.',
              },
              {
                question: 'How do we monitor training inside TEEs?',
                answer:
                  'Enclave-safe telemetry exports training metrics without exposing sensitive data. TensorBoard and Weights & Biases integrations available with differential privacy filters for metric publishing.',
              },
            ],
          },
        ]}
      />
      <Cta4
        title="Start Confidential Training Today"
        description="Train large-scale AI models on sensitive datasets with multi-GPU TEE clusters and hardware-enforced encryption."
        buttonText="Deploy on Phala"
        buttonUrl="https://cloud.phala.network"
        items={[
          'Multi-GPU TEE clusters',
          'Consortium learning support',
          'Sealed checkpoint storage',
          'Reproducible attestation',
          '24/7 technical support',
        ]}
      />
    </>
  )
}
