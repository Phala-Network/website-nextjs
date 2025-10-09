import type { Metadata } from "next";
import { Hero225 } from "@/components/solutions/hero225";
import { Feature206 } from "@/components/solutions/feature206";
import { Feature282 } from "@/components/solutions/feature282";
import { Feature284 } from "@/components/solutions/feature284";
import { Feature280 } from "@/components/solutions/feature280";
import { Casestudies3 } from "@/components/solutions/casestudies3";
import { Codeexample1 } from "@/components/solutions/codeexample1";
import { Feature161 } from "@/components/solutions/feature161";
import { Faq14 } from "@/components/solutions/faq14";
import { Cta4 } from "@/components/solutions/cta4";
import ModelsList from "@/app/confidential-ai-models/models-list";
import { fetchAiModels } from "@/lib/ai-models";

export const metadata: Metadata = {
  title: "Private AI Inference: Confidential LLM Serving",
  description: "Keep prompts, outputs, and model weights private with GPU TEEs and verifiable attestation.",
  keywords: ["private AI", "confidential inference", "GPU TEE", "LLM serving", "encrypted prompts", "zero logging"],
};

export const revalidate = 3600;

export default async function PrivateAIInferencePage() {
  const models = await fetchAiModels(20);

  return (
    <>
      <Hero225 />
      <Feature206
        title="Why Private Inference Matters"
        description="Centralized inference can log prompts and leak IP. Phala enclaves ensure no operator—cloud or vendor—can peek."
        points={[
          "Prompts can expose sensitive queries",
          "Model weights are valuable IP",
          "Inference logs reveal business patterns",
          "No operator access to runtime memory"
        ]}
        images={[
          "/solutions/inference/1.png",
          "/solutions/inference/2.png",
          "/solutions/inference/3.png",
          "/solutions/inference/4.png",
        ]}
      />
      <Feature282
        badge="Confidential Serving"
        cardSubtitle="GPU TEE Protection"
        cardTitle="Zero-Trust Inference"
        title="OpenAI-Compatible API with Hardware Encryption"
        description1="GPU TEEs with Intel TDX and AMD SEV provide hardware-level memory encryption—your model weights, user prompts, and inference outputs stay encrypted in-use. Inputs, outputs, and weights stay inside attested GPU enclaves. Not even cloud admins or hypervisors can inspect runtime state."
        description2="Privacy as a human right—by design. Route requests via mTLS into enclave. Emit usage receipts; never store plaintext. OpenAI-compatible endpoints with verifiable attestation and zero-logging guarantees."
        features={[
          "GPU memory encryption",
          "OpenAI-compatible API",
          "Zero-logging architecture"
        ]}
      />
      <ModelsList models={models} />
      <Feature284
        features={[
          {
            desc: "Zero-logging assistants for consumers & NGOs. Privacy as a fundamental human right built into the infrastructure.",
            img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img1.jpeg",
            title: "Privacy as a Human Right",
            badgeTitle: "USE CASE",
            gridClass: "md:col-span-1",
          },
          {
            desc: "Protected PHI inference with HIPAA compliance. Clinic-side deployments with hardware-enforced confidentiality.",
            img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg",
            title: "Healthcare Inference",
            badgeTitle: "USE CASE",
            gridClass: "lg:col-span-2",
          },
          {
            desc: "Privileged document Q&A and drafting with strict confidentiality. Attorney-client privilege maintained in TEEs.",
            img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img11.jpeg",
            title: "Legal AI",
            badgeTitle: "USE CASE",
            gridClass: "md:col-span-1 lg:row-span-2",
          },
          {
            desc: "Enterprise prompts with IP protection. Keep strategic queries and business logic confidential from cloud operators.",
            img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img2.jpeg",
            title: "Enterprise AI",
            badgeTitle: "USE CASE",
            gridClass: "lg:col-span-2",
          },
          {
            desc: "Verifiable agent inference with on-chain attestations. Private ML SDK for autonomous agents with cryptographic proofs.",
            img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img4.jpeg",
            title: "Agent Inference",
            badgeTitle: "USE CASE",
            gridClass: "md:col-span-1",
          },
        ]}
      />
      <Feature280
        title="Trusted by Privacy-First Teams"
        subtitle="TESTIMONIALS"
        features={[
          "Zero-logging by design",
          "OpenAI-compatible API",
          "Hardware attestation",
          "HIPAA/SOC2 ready",
          "Multi-tenant isolation",
          "Enterprise SLA",
          "24/7 monitoring",
          "Audit trails",
          "Key management",
          "mTLS encryption",
          "Rate limiting",
          "Usage analytics"
        ]}
        cards={[
          {
            id: 0,
            name: "Dr. Sarah Martinez",
            designation: "Chief Medical Officer",
            content: (
              <p>
                HIPAA compliance out of the box. <span className="bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500">Patient data stays encrypted</span> even during inference—our clinic's privacy requirements finally met.
              </p>
            ),
          },
          {
            id: 1,
            name: "James Wong",
            designation: "Enterprise Security Lead",
            content: (
              <p>
                Migrated our legal AI to Phala TEEs. <span className="bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500">Attorney-client privilege</span> is now hardware-enforced, not just policy-based.
              </p>
            ),
          },
          {
            id: 2,
            name: "Maria Rodriguez",
            designation: "AI Product Manager",
            content: (
              <p>
                The OpenAI-compatible API made migration seamless. <span className="bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500">Zero code changes</span> and our customers love the privacy guarantee.
              </p>
            ),
          },
        ]}
      />
      <Casestudies3
        featuredCasestudy={{
          logo: "/partnerships/ooda.svg",
          company: "OODA AI",
          tags: "INFRASTRUCTURE / GPU TEE",
          title: "Decentralized GPUs with Phala-grade privacy.",
          subtitle: "Private GPU inference with hardware attestation guarantees",
          image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
          link: "https://ooda.ai/",
        }}
        casestudies={[
          {
            logo: "/partnerships/near.svg",
            company: "NEAR AI",
            tags: "WEB3 / VERIFIABLE ML",
            title: "Private ML SDK—verifiable agent inference.",
            subtitle: "Zero-knowledge inference for autonomous agents",
            image: "",
            link: "https://near.org/",
          },
          {
            logo: "/partnerships/open-router.svg",
            company: "OpenRouter",
            tags: "ENTERPRISE / CONFIDENTIAL API",
            title: "Confidential route for enterprise prompts.",
            subtitle: "TEE-protected LLM gateway with attestation",
            image: "",
            link: "https://openrouter.ai",
          },
        ]}
      />
      <Codeexample1
        badge="OpenAI-Compatible Endpoint"
        title="DEPLOY INFERENCE"
        subtitle="IN 5 MINUTES"
        description="Deploy OpenAI-compatible inference endpoints with hardware attestation. Run encrypted inference on GPU TEEs with verifiable execution."
        buttonText="View API Docs"
        buttonUrl="https://docs.phala.network"
        filename="deploy-inference.sh"
        language="bash"
        code={`# Deploy confidential LLM inference
docker run -d \\
  --name phala-inference \\
  --device=/dev/tdx_guest \\
  --gpus all \\
  -e MODEL=llama-3-70b \\
  -e OPENAI_API_KEY=your-key \\
  -p 8000:8000 \\
  phalanetwork/inference:latest

# Get attestation quote
curl http://localhost:8000/v1/attestation

# OpenAI-compatible inference
curl http://localhost:8000/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "llama-3-70b",
    "messages": [{"role": "user", "content": "Analyze this contract..."}]
  }'`}
      />
      <Feature161
        title="Verifiable & Compliant"
        description="Remote attestation receipts, SOC 2 Type II compliance, and cryptographic audit trails for HIPAA/GDPR workflows."
        primaryButtonText="Get Attestation Report"
        primaryButtonUrl="https://cloud.phala.network/attestation"
        secondaryButtonText="Compliance Docs"
        secondaryButtonUrl="https://docs.phala.network/compliance"
      />
      <Faq14
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about Private AI Inference"
        faqItems={[
          {
            category: "PERFORMANCE",
            items: [
              {
                question: "What's the latency/throughput overhead of TEEs?",
                answer: "GPU TEE overhead is typically 5-15% compared to bare metal. Memory encryption happens at hardware speed with Intel TDX/AMD SEV, so the performance impact is minimal for most inference workloads."
              },
              {
                question: "Can I use multiple GPUs for inference?",
                answer: "Yes, Phala supports multi-GPU TEE deployments with hardware-isolated tensor parallelism. Each GPU runs in its own encrypted enclave with verifiable attestation."
              }
            ]
          },
          {
            category: "SECURITY & PRIVACY",
            items: [
              {
                question: "How are logs handled?",
                answer: "Zero-logging by design. Inference requests never touch disk in plaintext. Usage receipts are generated with cryptographic proofs but contain no prompt content."
              },
              {
                question: "What prevents operators from seeing prompts?",
                answer: "Hardware memory encryption in TEEs prevents any access to runtime state, including prompts and outputs. Remote attestation proves the correct code is running before you send data."
              },
              {
                question: "Can we pin model versions to measurements?",
                answer: "Yes, each model deployment generates a unique measurement (mrenclave). You can verify the exact model version via remote attestation before sending prompts."
              }
            ]
          },
          {
            category: "INTEGRATION",
            items: [
              {
                question: "Is the API OpenAI-compatible?",
                answer: "Yes, drop-in replacement for OpenAI API endpoints. Use the same SDKs and client libraries—just point to Phala's attested endpoints."
              },
              {
                question: "How do we verify the enclave we interact with?",
                answer: "Each endpoint exposes /v1/attestation with Intel DCAP or AMD SEV-SNP quotes. Verify the measurement matches your expected code hash before sending requests."
              }
            ]
          }
        ]}
      />
      <Cta4
        title="Start Private AI Inference Today"
        description="Deploy confidential LLM endpoints with hardware-enforced encryption and zero-knowledge guarantees."
        buttonText="Deploy on Phala"
        buttonUrl="https://cloud.phala.network"
        items={[
          "Intel TDX & AMD SEV support",
          "Remote attestation built-in",
          "Zero-trust architecture",
          "Enterprise-ready compliance",
          "24/7 technical support",
        ]}
      />
    </>
  );
}
