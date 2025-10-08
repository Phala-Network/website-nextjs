import type { SolutionContent } from "@/types/solutions";

export const trainingContent: SolutionContent = {
  seo: {
    title: "Confidential Model Training at Scale",
    description:
      "Distributed pre-training and instruction-tuning on sensitive data with confidential GPUs and attestation.",
    keywords: [
      "model training",
      "pre-training",
      "distributed training",
      "GPU cluster",
      "confidential AI",
    ],
  },

  hero: {
    eyebrow: "Confidential Training",
    headline: "Train big, train private",
    subheadline:
      "Multi-GPU clusters with verifiable isolation for pre-training and large-scale jobs.",
    primaryCTA: {
      text: "Talk to Us",
      url: "https://phala.com/contact",
    },
    secondaryCTA: {
      text: "Deploy on Phala",
      url: "https://cloud.phala.network",
    },
    features: [
      "Multi-node training",
      "Encrypted gradients",
      "Sealed checkpoints",
    ],
  },

  why: {
    title: "Why Confidential Training Matters",
    description:
      "Building foundation models requires massive proprietary datasets. IP protection, regulatory compliance, and consortium learning all demand confidential compute. Train on sensitive data without exposing it to cloud operators, partners, or even your own infrastructure team.",
    points: [
      "Protect proprietary training data (code, documents, user interactions)",
      "Enable multi-organization consortium learning",
      "Meet regulatory requirements for AI development",
      "Prevent model theft and gradient leakage",
    ],
  },

  how: {
    title: "How It Works",
    steps: [
      {
        number: "01",
        title: "Confidential scheduler",
        description:
          "Orchestrate training jobs across GPU TEE clusters with encrypted communication.",
      },
      {
        number: "02",
        title: "GPU enclaves with high-speed interconnect",
        description:
          "NVLink, InfiniBand, and RoCE support for distributed training inside TEEs.",
      },
      {
        number: "03",
        title: "Sealed checkpoints & reproducibility",
        description:
          "Every checkpoint is cryptographically signed with training provenance.",
      },
      {
        number: "04",
        title: "Audit trails for compliance",
        description:
          "Complete lineage tracking: data sources, code hash, hyperparameters, and outputs.",
      },
    ],
  },

  useCases: [
    {
      title: "Foundation Model Pre-training",
      description:
        "Train LLMs from scratch on proprietary corpora without data exposure.",
      benefit: "IP-protected base models",
    },
    {
      title: "Consortium Learning",
      description:
        "Multiple organizations contribute data without sharing it directly.",
      benefit: "Collaborative AI without trust",
    },
    {
      title: "Regulated Industry Training",
      description:
        "Financial services, healthcare, and government AI development with compliance.",
      benefit: "Audit-ready training logs",
    },
    {
      title: "Multimodal Training",
      description:
        "Train on sensitive image, video, and text data for vision-language models.",
      benefit: "Media privacy guaranteed",
    },
  ],

  stories: {
    featured: {
      logo: "/success-stories/consortium-logo.svg",
      company: "AI Consortium",
      tags: "MULTI-ORG TRAINING / ZERO-TRUST",
      title: "10-organization consortium model",
      subtitle: "trained without data sharing.",
      image: "/success-stories/consortium-preview.jpg",
      link: "/success-stories/ai-consortium",
    },
    additional: [
      {
        logo: "/success-stories/finance-logo.svg",
        company: "Financial AI",
        tags: "REGULATED / COMPLIANT",
        title: "Foundation model on sensitive",
        subtitle: "financial data.",
        link: "/success-stories/financial-ai",
      },
      {
        logo: "/success-stories/research-logo.svg",
        company: "Research Lab",
        tags: "ACADEMIC / OPEN SCIENCE",
        title: "Reproducible training with",
        subtitle: "cryptographic provenance.",
        link: "/success-stories/research-lab",
      },
    ],
  },

  devExp: {
    title: "Developer Experience",
    description:
      "Use standard training frameworks with confidential compute guarantees.",
    codeExamples: [
      {
        language: "python",
        filename: "distributed-training.py",
        code: `# Distributed training with PyTorch DDP inside TEEs
import torch
import torch.distributed as dist
from torch.nn.parallel import DistributedDataParallel as DDP
from phala_tee import SecureDataLoader, AttestationContext

# Initialize distributed training with encrypted communication
dist.init_process_group(
    backend='nccl',
    init_method='tcp://enclave-master:29500',
    world_size=8,
    rank=int(os.environ['RANK'])
)

# Verify all workers are running in genuine TEEs
attestation = AttestationContext.current()
attestation.verify_all_workers(dist.get_world_size())

# Load model
model = LlamaForCausalLM.from_pretrained("base-model")
model = DDP(model, device_ids=[local_rank])

# Load encrypted training data
dataloader = SecureDataLoader(
    dataset="s3://encrypted-corpus/",
    batch_size=32,
    kms_endpoint="https://kms.phala.network"
)

# Train with gradient encryption
for epoch in range(num_epochs):
    for batch in dataloader:
        outputs = model(**batch)
        loss = outputs.loss
        loss.backward()

        # Gradients are encrypted during all-reduce
        optimizer.step()
        optimizer.zero_grad()

        # Checkpoint with attestation
        if step % save_steps == 0:
            attestation.save_checkpoint(
                model.state_dict(),
                f"checkpoint-{step}.sealed"
            )`,
      },
      {
        language: "yaml",
        filename: "training-cluster.yaml",
        code: `# Phala training cluster configuration
apiVersion: phala.network/v1
kind: TrainingCluster
metadata:
  name: llama-pretraining
spec:
  workers: 8
  gpu:
    type: H100-80GB
    count: 8
    tee: nvidia-cc
  network:
    interconnect: nvlink
    encryption: tls-1.3
  attestation:
    policy: training-policy.json
    measurement: required
  storage:
    data:
      type: sealed
      source: s3://encrypted-training-data/
    checkpoints:
      type: sealed
      destination: s3://model-checkpoints/
      retention: 30d
  framework:
    type: pytorch
    version: "2.1"
    distributed: ddp
  monitoring:
    telemetry: enclave-safe
    logging: structured
    audit: enabled`,
      },
      {
        language: "bash",
        filename: "launch-training.sh",
        code: `# Launch distributed training job
phala train launch \\
  --config training-cluster.yaml \\
  --script train.py \\
  --data s3://encrypted-corpus/ \\
  --checkpoint-dir s3://checkpoints/ \\
  --verify-attestation

# Monitor training metrics (non-sensitive only)
phala train metrics --job-id \${JOB_ID}

# Verify checkpoint provenance
phala checkpoint verify \\
  --checkpoint checkpoint-5000.sealed \\
  --expect-data-hash \${DATA_HASH} \\
  --expect-code-hash \${CODE_HASH}`,
      },
    ],
    features: [
      "PyTorch, JAX, DeepSpeed support",
      "Slurm & Kubernetes orchestration",
      "Encrypted gradient synchronization",
      "Topology-aware placement",
    ],
  },

  proof: {
    title: "Training Provenance & Auditability",
    subtitle: "Cryptographic Lineage",
    description:
      "Every training run produces a signed lineage document: data sources, code hash, environment configuration, and hyperparameters. Auditors and partners can verify training provenance without accessing sensitive data. Reproducibility guarantees ensure the same inputs produce the same model.",
    features: [
      "Signed training lineage (data, code, env)",
      "Reproducible builds",
      "Dataset residency proofs",
      "Gradient privacy guarantees",
    ],
  },

  faqs: [
    {
      category: "PERFORMANCE",
      items: [
        {
          question: "What's the performance overhead for TEE training?",
          answer:
            "For GPU-bound workloads, overhead is typically 3-8%. Memory encryption adds minimal latency. Network encryption (for multi-node) adds 5-15% depending on communication patterns. Overall, expect 85-95% of bare-metal performance.",
        },
        {
          question: "How does multi-GPU scaling work?",
          answer:
            "NVLink and NVSwitch provide encrypted high-bandwidth GPU-to-GPU communication. Standard distributed training (DDP, FSDP, DeepSpeed) works normally. We support up to 8-node clusters (64 GPUs) with near-linear scaling.",
        },
      ],
    },
    {
      category: "DATA & COMPLIANCE",
      items: [
        {
          question: "Can we keep data in different regions/jurisdictions?",
          answer:
            "Yes. Data residency is enforced through policy. Training jobs can federate data across regions while keeping each dataset in its original jurisdiction. Only gradients (encrypted) cross boundaries.",
        },
        {
          question: "How do you prove training data wasn't leaked?",
          answer:
            "Attestation receipts prove that only authorized code ran. Audit logs show all data access (encrypted). Network logs prove no unauthorized egress. Together, these provide cryptographic proof of data containment.",
        },
      ],
    },
    {
      category: "TECHNICAL",
      items: [
        {
          question: "What training frameworks are supported?",
          answer:
            "PyTorch, JAX/Flax, TensorFlow. Distributed: DDP, FSDP, DeepSpeed, Megatron-LM. Optimizations like FlashAttention, PagedAttention, and mixed-precision training all work inside TEEs.",
        },
      ],
    },
  ],

  cta: {
    title: "Ready to train at scale?",
    description:
      "Build foundation models on confidential data with Phala's TEE clusters. From 8 GPUs to 512+, we support your training workloads.",
    buttonText: "Get Started",
    buttonUrl: "https://cloud.phala.network",
    items: [
      "Multi-GPU clusters",
      "Encrypted gradients",
      "Provenance tracking",
      "Audit-ready logs",
      "Enterprise support",
    ],
  },
};
