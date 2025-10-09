import type { Metadata } from "next";
import { Hero216 } from "@/components/solutions/hero216";
import { Feature206 } from "@/components/solutions/feature206";
import { Feature282 } from "@/components/solutions/feature282";
import { Feature172 } from "@/components/solutions/feature172";
import { Feature284 } from "@/components/solutions/feature284";
import { Feature280 } from "@/components/solutions/feature280";
import { Casestudies3 } from "@/components/solutions/casestudies3";
import { Codeexample3 } from "@/components/solutions/codeexample3";
import { Feature161 } from "@/components/solutions/feature161";
import { Faq14 } from "@/components/solutions/faq14";
import { Cta4 } from "@/components/solutions/cta4";

export const metadata: Metadata = {
  title: "Confidential Model Training at Scale",
  description: "Distributed pre-training and instruction-tuning on sensitive data with confidential GPUs and attestation.",
  keywords: ["distributed training", "multi-GPU", "pre-training", "consortium learning", "confidential computing", "TEE", "LLM training"],
};

export default function ConfidentialTrainingPage() {
  return (
    <>
      <Hero216 />
      <Feature206
        title="Why Confidential Training Matters"
        description="Centralized training infrastructure exposes datasets and model IP. Phala enables consortium learning and regulated-industry training with hardware isolation."
        points={[
          "Training data contains regulated information",
          "Model checkpoints encode proprietary techniques",
          "Gradient updates can leak training examples",
          "Consortium partners need data-custody guarantees"
        ]}
        images={[
          "/solutions/train/1.png",
          "/solutions/train/2.png",
          "/solutions/train/3.png",
          "/solutions/train/4.png",
        ]}
      />
      <Feature282
        badge="Confidential Training"
        cardSubtitle="Multi-GPU TEE Clusters"
        cardTitle="Distributed Pre-Training"
        title="Large-Scale Model Training with Hardware Encryption"
        description1="Multi-GPU clusters with Intel TDX and AMD SEV provide hardware-level isolation for distributed training. Pre-train LLMs on sensitive datasets with consortium partners—each party keeps data custody while contributing to shared model development."
        description2="Confidential scheduler coordinates tensor-parallel and data-parallel jobs across TEE nodes. High-speed interconnect with encrypted RDMA keeps gradient updates sealed. Checkpoints signed with reproducible build IDs for audit trails."
        features={[
          "Multi-GPU TEE clusters",
          "Sealed checkpoint storage",
          "Consortium learning support"
        ]}
      />
      <Feature172
        title="How It Works"
        topItems={[
          {
            title: "Deploy training job.",
            description: "Submit distributed training configuration to Phala's confidential scheduler with data sources, model architecture, and TEE policies.",
            images: [
              {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
                alt: "Training deployment",
                className: "aspect-495/186 max-w-lg rounded-xl",
              },
            ],
            className: "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
            fade: [""],
          },
          {
            title: "Verify cluster attestation.",
            description: "Each GPU node generates attestation proofs. Verify entire cluster runs in genuine TEE hardware before sending training data.",
            images: [
              {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/instagram-icon.svg",
                alt: "Node 1",
              },
              {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/linkedin-icon.svg",
                alt: "Node 2",
              },
              {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/producthunt-icon.svg",
                alt: "Node 3",
              },
              {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/twitter-icon.svg",
                alt: "Node 4",
              },
              {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-icon.svg",
                alt: "Node 5",
              },
              {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-icon.svg",
                alt: "Node 6",
              },
              {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg",
                alt: "Node 7",
              },
              {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg",
                alt: "Node 8",
              },
            ],
            className: "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 md:[&>.title-container]:translate-x-2 xl:[&>.title-container]:translate-x-4 [&>.title-container]:translate-x-0",
            fade: [],
          },
        ]}
        bottomItems={[
          {
            title: "Load confidential datasets.",
            description: "Encrypted training data streams into sealed storage. Consortium partners maintain data custody—no cross-party data leakage.",
            images: [
              {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
                alt: "Dataset loading",
                className: "aspect-305/280 rounded-t-xl max-w-[305px]",
              },
            ],
            className: "[&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
            fade: ["bottom"],
          },
          {
            title: "Training runs in TEE cluster.",
            description: "Distributed training with tensor-parallel and data-parallel execution. Gradient updates encrypted over high-speed RDMA interconnect.",
            images: [
              {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
                alt: "Training execution",
                className: "aspect-320/103 rounded-xl",
              },
            ],
            className: "justify-normal [&>.title-container]:mb-5 md:[&>.title-container]:mb-0 [&>.image-container]:flex-1 md:[&>.image-container]:place-items-center md:[&>.image-container]:-translate-y-3",
            fade: [""],
          },
          {
            title: "Export sealed checkpoints.",
            description: "Signed model artifacts with attestation lineage. Only authorized parties decrypt final weights—audit trail for regulators.",
            images: [
              {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg",
                alt: "Checkpoint export",
                className: "aspect-305/280 rounded-t-xl max-w-[305px]",
              },
            ],
            className: "[&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
            fade: ["bottom"],
          },
        ]}
      />
      <Feature284
        features={[
          {
            desc: "Multi-institution AI research on pooled datasets. Universities and labs train foundation models without exposing proprietary research data.",
            img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img1.jpeg",
            title: "Consortium Learning",
            badgeTitle: "USE CASE",
            gridClass: "md:col-span-1",
          },
          {
            desc: "Pharmaceutical AI trained on confidential molecular data, clinical trial results, and drug discovery datasets with regulatory compliance.",
            img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg",
            title: "Pharma & Healthcare Training",
            badgeTitle: "USE CASE",
            gridClass: "lg:col-span-2",
          },
          {
            desc: "Defense and government AI on classified datasets. Meet CMMC, FedRAMP, and national security requirements with hardware isolation.",
            img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img11.jpeg",
            title: "Defense & Classified Training",
            badgeTitle: "USE CASE",
            gridClass: "md:col-span-1 lg:row-span-2",
          },
          {
            desc: "Financial institutions training on transaction data, fraud patterns, and customer behavior with zero data leakage to cloud operators.",
            img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img2.jpeg",
            title: "Financial AI Training",
            badgeTitle: "USE CASE",
            gridClass: "lg:col-span-2",
          },
          {
            desc: "Enterprise foundation models trained on internal knowledge bases, customer data, and business intelligence with full IP protection.",
            img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img4.jpeg",
            title: "Enterprise Model Pre-Training",
            badgeTitle: "USE CASE",
            gridClass: "md:col-span-1",
          },
        ]}
      />
      <Feature280
        title="Trusted by Research & Enterprise Teams"
        subtitle="TESTIMONIALS"
        features={[
          "Multi-GPU TEE clusters",
          "Distributed training",
          "Tensor parallelism",
          "Data parallelism",
          "Sealed checkpoints",
          "Consortium learning",
          "Dataset custody",
          "Reproducible builds",
          "Audit trails",
          "Slurm/K8s support",
          "Enterprise SLA",
          "24/7 support"
        ]}
        cards={[
          {
            id: 0,
            name: "Dr. Michael Zhang",
            designation: "AI Research Director",
            content: (
              <p>
                Our consortium trained a 70B parameter model on pooled research data. <span className="bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500">Zero data leakage</span> between institutions—TEE isolation gave us the confidence to collaborate.
              </p>
            ),
          },
          {
            id: 1,
            name: "Jennifer Park",
            designation: "VP of Compliance",
            content: (
              <p>
                Phala's sealed checkpoints and attestation lineage meet our <span className="bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500">FedRAMP requirements</span>. First time we've trained on classified data in cloud infrastructure.
              </p>
            ),
          },
          {
            id: 2,
            name: "Raj Patel",
            designation: "ML Infrastructure Lead",
            content: (
              <p>
                Multi-GPU TEE training at scale—<span className="bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500">same performance</span> as bare metal with hardware-grade privacy. Game changer for enterprise AI.
              </p>
            ),
          },
        ]}
      />
      <Casestudies3
        featuredCasestudy={{
          logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
          company: "AI Research Consortium",
          tags: "RESEARCH / CONSORTIUM LEARNING",
          title: "70B parameter model on pooled datasets.",
          subtitle: "Multi-institution training with zero data leakage",
          image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
          link: "#",
        }}
        casestudies={[
          {
            logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
            company: "Pharma AI",
            tags: "PHARMACEUTICAL / CONFIDENTIAL TRAINING",
            title: "Drug discovery model on molecular data.",
            subtitle: "Regulatory-compliant training with attestation lineage",
            image: "",
            link: "#",
          },
          {
            logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
            company: "Defense AI Lab",
            tags: "DEFENSE / CLASSIFIED TRAINING",
            title: "Classified dataset training meets CMMC.",
            subtitle: "Hardware-enforced isolation for national security workloads",
            image: "",
            link: "#",
          },
        ]}
      />
      <Codeexample3
        leftCode={{
          title: "Deploy Multi-GPU Training",
          description: "Launch distributed pre-training jobs on confidential GPU clusters. Slurm and Kubernetes templates with TEE attestation and sealed checkpoint storage.",
          filename: "train-cluster.sh",
          language: "bash",
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
# Attestation signed: 0x8a9b7c6d...`
        }}
        rightCode={{
          title: "Verify Training Lineage",
          description: "Generate cryptographic proofs of your training process. Verify cluster attestation, dataset hashes, and reproducible build IDs for auditors and consortium partners.",
          filename: "verify-lineage.sh",
          language: "bash",
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
}`
        }}
      />
      <Feature161
        title="Reproducible Training Lineage"
        description="Attestation receipts, dataset custody proofs, and reproducible build IDs for regulatory compliance and consortium audit trails."
        primaryButtonText="Get Training Report"
        primaryButtonUrl="https://cloud.phala.network/training-report"
        secondaryButtonText="Compliance Docs"
        secondaryButtonUrl="https://docs.phala.network/compliance"
      />
      <Faq14
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about Confidential Training"
        faqItems={[
          {
            category: "PERFORMANCE & COST",
            items: [
              {
                question: "What's the performance overhead for multi-GPU TEE training?",
                answer: "GPU TEE overhead is typically 5-15% compared to bare metal. Memory encryption happens at hardware speed with Intel TDX/AMD SEV. High-speed RDMA interconnect keeps gradient synchronization efficient even across encrypted enclaves."
              },
              {
                question: "How does cost compare to standard cloud training?",
                answer: "TEE infrastructure adds 10-20% premium over standard GPU instances. However, consortium learning splits costs across partners while maintaining data custody—often more economical than each party training separately."
              }
            ]
          },
          {
            category: "SECURITY & PRIVACY",
            items: [
              {
                question: "How do consortium partners maintain data custody?",
                answer: "Each partner's data stays in separate sealed storage. Training orchestrator coordinates gradient updates without exposing raw data cross-party. Remote attestation proves proper isolation before any party sends datasets."
              },
              {
                question: "Can cloud operators access training data or gradients?",
                answer: "No. Hardware memory encryption in TEEs prevents any operator access to runtime state. Gradients are computed and synchronized inside encrypted enclaves with cryptographic proofs of isolation."
              },
              {
                question: "What prevents gradient-based training data leakage?",
                answer: "Gradients are computed inside TEEs and never leave in plaintext. Differential privacy techniques can be applied within the enclave. Only final model checkpoints are exported with signed attestation lineage."
              }
            ]
          },
          {
            category: "TECHNICAL",
            items: [
              {
                question: "What distributed training patterns are supported?",
                answer: "Tensor parallelism, data parallelism, pipeline parallelism, and hybrid strategies. Phala's confidential scheduler supports PyTorch FSDP, DeepSpeed, and Megatron-LM inside TEE clusters."
              },
              {
                question: "Can we use existing training scripts?",
                answer: "Yes, minimal changes required. Wrap your training code in our confidential container and configure attestation policies. Standard frameworks (PyTorch, TensorFlow, JAX) run as-is inside TEEs."
              },
              {
                question: "How do we monitor training inside TEEs?",
                answer: "Enclave-safe telemetry exports training metrics without exposing sensitive data. TensorBoard and Weights & Biases integrations available with differential privacy filters for metric publishing."
              }
            ]
          }
        ]}
      />
      <Cta4
        title="Start Confidential Training Today"
        description="Train large-scale AI models on sensitive datasets with multi-GPU TEE clusters and hardware-enforced encryption."
        buttonText="Deploy on Phala"
        buttonUrl="https://cloud.phala.network"
        items={[
          "Multi-GPU TEE clusters",
          "Consortium learning support",
          "Sealed checkpoint storage",
          "Reproducible attestation",
          "24/7 technical support",
        ]}
      />
    </>
  );
}
