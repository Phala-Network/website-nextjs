import type { Metadata } from "next";
import { Hero40 } from "@/components/solutions/hero40";
import { Feature206 } from "@/components/solutions/feature206";
import { Feature282 } from "@/components/solutions/feature282";
import { Feature65 } from "@/components/solutions/feature65";
import { Feature284 } from "@/components/solutions/feature284";
import { Feature280 } from "@/components/solutions/feature280";
import { Casestudies3 } from "@/components/solutions/casestudies3";
import { Codeexample3 } from "@/components/solutions/codeexample3";
import { Feature161 } from "@/components/solutions/feature161";
import { Faq14 } from "@/components/solutions/faq14";
import { Cta4 } from "@/components/solutions/cta4";

export const metadata: Metadata = {
  title: "Fine-Tuned Models: Private Customization",
  description: "Fine-tune foundation models on proprietary data inside TEEs. Better accuracy, zero data leakage.",
  keywords: ["fine-tuning", "LoRA", "PEFT", "model customization", "private AI", "TEE", "confidential computing"],
};

export default function FineTunedModelsPage() {
  return (
    <>
      <Hero40 />
      <Feature206
        title="Why Private Fine-Tuning Matters"
        description="Custom performance demands private corp data; Phala lets you use it safely."
        points={[
          "Training data contains business secrets",
          "Fine-tuned weights encode proprietary knowledge",
          "Model gradients can leak training examples",
          "Vendors should never see your data or weights"
        ]}
        images={[
          "/solutions/tune/1.png",
          "/solutions/tune/2.png",
          "/solutions/tune/3.png",
          "/solutions/tune/4.png",
        ]}
      />
      <Feature282
        badge="Confidential Fine-Tuning"
        cardSubtitle="LoRA/PEFT in TEEs"
        cardTitle="Sealed Checkpoints"
        title="Fine-Tune on Private Data Without Exposure"
        description1="Mount private corpus via sealed storage. Run supervised fine-tuning, LoRA, or PEFT inside hardware enclaves. Your proprietary datasets and custom model weights stay encrypted in Intel TDX/AMD SEV environments throughout the entire training process."
        description2="Export signed artifacts with restricted egress policies. Serve fine-tuned models in the same enclave family with verifiable lineage. No cloud operator can access your training data, gradients, or final model weights—only cryptographic attestations prove the training process."
        features={[
          "LoRA & PEFT support",
          "Sealed checkpoint storage",
          "Gradient privacy protection"
        ]}
      />
      <Feature65
        integrations={[
          {
            title: "Per-Tenant Models",
            description: "Fine-tune separate models for each customer on their private data. Hugging Face and PyTorch stack with confidential checkpoints.",
            icon: "swatchbook",
            color: "bg-red-400",
            tags: ["Use Case", "AI SaaS", "Multi-Tenant", "Custom Models", "Privacy-First"],
          },
          {
            title: "Sensitive Data Training",
            description: "Train on CRM threads, support tickets, HR records, or brand voice data without exposing raw datasets to cloud providers.",
            icon: "gitbranch",
            color: "bg-blue-400",
            tags: ["Use Case", "Enterprise Data", "CRM Integration", "HR Privacy", "Compliance"],
          },
          {
            title: "Model Customization",
            description: "Create domain-specific AI for SDR, support, hiring, or marketing with your proprietary knowledge base—all inside TEEs.",
            icon: "sparkles",
            color: "bg-yellow-400",
            tags: ["Use Case", "Domain AI", "Sales", "Support", "Marketing"],
          },
          {
            title: "IP Protection",
            description: "Keep competitive advantages safe. Training attestations and dataset access proofs with reproducible build IDs for audits.",
            icon: "ganttchart",
            color: "bg-green-400",
            tags: ["Security", "Attestation", "IP Protection", "Audit Trail", "Compliance"],
          },
        ]}
      />
      <Feature284
        features={[
          {
            desc: "AI SaaS platforms with per-tenant fine-tuned models. Each customer gets personalized AI trained on their data—privately.",
            img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img1.jpeg",
            title: "AI SaaS Per-Tenant Models",
            badgeTitle: "USE CASE",
            gridClass: "md:col-span-1",
          },
          {
            desc: "Sales AI trained on past email threads, CRM data, and closed deals. Personalized outreach without exposing customer data.",
            img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg",
            title: "AI SDR & Sales Automation",
            badgeTitle: "USE CASE",
            gridClass: "lg:col-span-2",
          },
          {
            desc: "Support AI tuned on your ticket history and knowledge base. Faster resolutions while protecting customer information.",
            img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img11.jpeg",
            title: "AI Support Assistant",
            badgeTitle: "USE CASE",
            gridClass: "md:col-span-1 lg:row-span-2",
          },
          {
            desc: "Hiring AI trained on HR records and interview transcripts. Screen candidates confidentially with zero data leakage.",
            img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img2.jpeg",
            title: "AI Hiring & Recruitment",
            badgeTitle: "USE CASE",
            gridClass: "lg:col-span-2",
          },
          {
            desc: "Marketing AI fine-tuned on brand voice, campaign results, and customer feedback. Generate content that matches your style.",
            img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img4.jpeg",
            title: "AI Marketing & Content",
            badgeTitle: "USE CASE",
            gridClass: "md:col-span-1",
          },
        ]}
      />
      <Feature280
        title="Trusted by AI-First Teams"
        subtitle="TESTIMONIALS"
        features={[
          "LoRA/PEFT support",
          "Hugging Face compatible",
          "Multi-GPU training",
          "Sealed checkpoints",
          "Gradient privacy",
          "Dataset custody",
          "Verifiable training",
          "Reproducible builds",
          "Model lineage",
          "Access proofs",
          "Enterprise SLA",
          "24/7 support"
        ]}
        cards={[
          {
            id: 0,
            name: "Alex Chen",
            designation: "VP of AI",
            content: (
              <p>
                We fine-tune models for 500+ customers. <span className="bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500">Each tenant's data stays private</span> in hardware enclaves—no cross-contamination possible.
              </p>
            ),
          },
          {
            id: 1,
            name: "Sarah Kim",
            designation: "Data Privacy Officer",
            content: (
              <p>
                Phala's sealed checkpoints changed everything. <span className="bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500">HR data fine-tuning</span> now meets our strictest compliance requirements.
              </p>
            ),
          },
          {
            id: 2,
            name: "Marcus Torres",
            designation: "ML Engineering Lead",
            content: (
              <p>
                Multi-GPU LoRA training in TEEs—<span className="bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500">same performance</span>, hardware-grade privacy. Game changer for enterprise AI.
              </p>
            ),
          },
        ]}
      />
      <Casestudies3
        featuredCasestudy={{
          logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
          company: "Enterprise SaaS Co",
          tags: "AI SAAS / PER-TENANT MODELS",
          title: "1000+ custom models, zero data leakage.",
          subtitle: "Private fine-tuning for multi-tenant AI platform",
          image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
          link: "#",
        }}
        casestudies={[
          {
            logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
            company: "Sales AI Startup",
            tags: "SALES / CRM TRAINING",
            title: "SDR AI trained on customer CRM data.",
            subtitle: "Personalized outreach without data exposure",
            image: "",
            link: "#",
          },
          {
            logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
            company: "HR Tech Platform",
            tags: "HR / CONFIDENTIAL TRAINING",
            title: "Hiring AI on sensitive HR records.",
            subtitle: "Compliant candidate screening with TEE isolation",
            image: "",
            link: "#",
          },
        ]}
      />
      <Codeexample3
        leftCode={{
          title: "Fine-Tune Models in TEEs",
          description: "Run LoRA/PEFT fine-tuning on confidential datasets inside hardware enclaves. Your training data and model weights stay encrypted with Intel TDX/AMD SEV. Monitor progress with sealed checkpoints.",
          filename: "finetune.sh",
          language: "bash",
          code: `# Fine-tune with LoRA in TEE
docker run -d \\
  --name phala-finetune \\
  --device=/dev/tdx_guest \\
  --gpus all \\
  -v $(pwd)/data:/data \\
  -e BASE_MODEL=llama-3-70b \\
  -e DATASET=/data/training.jsonl \\
  -e LORA_RANK=16 \\
  -e LEARNING_RATE=1e-4 \\
  phalanetwork/finetune:latest

# Monitor training
docker logs -f phala-finetune

# Training progress in sealed environment
# Epoch 1/3: Loss 0.421
# Epoch 2/3: Loss 0.298
# Epoch 3/3: Loss 0.176
# LoRA adapter saved to /data/adapter.bin`
        }}
        rightCode={{
          title: "Verify Training Attestation",
          description: "Generate cryptographic proofs of your fine-tuning process. Verify the training happened in genuine TEE hardware with signed lineage from data to final model.",
          filename: "verify-training.sh",
          language: "bash",
          code: `# Get training attestation
curl -X POST https://cloud-api.phala.network/api/v1/attestations/verify \\
  -H "Content-Type: application/json" \\
  -d '{
    "container_id": "phala-finetune",
    "verify_tdx": true,
    "verify_dataset_hash": true,
    "verify_code_hash": true
  }'

# Attestation proves sealed training
{
  "verified": true,
  "tee_type": "Intel TDX",
  "dataset_hash": "0x8a9b7c6d...",
  "code_hash": "0x1a2b3c4d...",
  "model_lineage": "llama-3-70b -> adapter.bin",
  "timestamp": "2025-01-15T14:30:00Z"
}`
        }}
      />
      <Feature161
        title="Verifiable Training Lineage"
        description="Training attestations, dataset access proofs, and reproducible build IDs for regulatory compliance and IP audits."
        primaryButtonText="Get Training Report"
        primaryButtonUrl="https://cloud.phala.network/training-report"
        secondaryButtonText="Compliance Docs"
        secondaryButtonUrl="https://docs.phala.network/compliance"
      />
      <Faq14
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about Private Fine-Tuning"
        faqItems={[
          {
            category: "SECURITY & PRIVACY",
            items: [
              {
                question: "Can vendors see our data or weights?",
                answer: "No. Hardware memory encryption in TEEs prevents any operator access to your training data, gradients, or model weights. Remote attestation cryptographically proves the correct code is running before you send data."
              },
              {
                question: "How do we prevent gradient leakage?",
                answer: "Gradients are computed inside the encrypted enclave and never leave in plaintext. Only the final LoRA adapter or fine-tuned weights are exported—sealed and signed with attestation proofs."
              },
              {
                question: "What happens to our training data after fine-tuning?",
                answer: "Your datasets never leave the sealed storage. After training completes, data remains encrypted in your custody. Only signed model artifacts are exported with your explicit policy approval."
              }
            ]
          },
          {
            category: "TECHNICAL",
            items: [
              {
                question: "Is multi-GPU fine-tuning supported?",
                answer: "Yes, Phala supports distributed LoRA/PEFT training across multiple GPU TEEs with hardware-isolated tensor parallelism. Each GPU runs in its own encrypted enclave."
              },
              {
                question: "What frameworks are supported?",
                answer: "Hugging Face Transformers, PyTorch, and popular fine-tuning libraries (LoRA, QLoRA, PEFT). We provide confidential trainer configs that work with standard ML workflows."
              },
              {
                question: "Can we use our existing fine-tuning scripts?",
                answer: "Yes, minimal changes required. Wrap your training code in our confidential container and add attestation verification. Your HuggingFace/PyTorch code runs as-is inside the TEE."
              }
            ]
          },
          {
            category: "COMPLIANCE",
            items: [
              {
                question: "How do we prove training compliance to auditors?",
                answer: "Each training job generates attestation receipts with dataset hashes, code hashes, and model lineage. Auditors can verify the cryptographic proof chain from raw data to final model."
              },
              {
                question: "Can we reproduce training results?",
                answer: "Yes, reproducible build IDs and sealed checkpoints allow deterministic verification. The same dataset + code + environment will produce identical measurements and outputs."
              }
            ]
          }
        ]}
      />
      <Cta4
        title="Start Private Fine-Tuning Today"
        description="Customize LLMs on your proprietary data with hardware-enforced confidentiality and zero-knowledge guarantees."
        buttonText="Deploy on Phala"
        buttonUrl="https://cloud.phala.network"
        items={[
          "LoRA/PEFT support",
          "Multi-GPU training",
          "Sealed checkpoints",
          "Training attestations",
          "24/7 technical support",
        ]}
      />
    </>
  );
}
