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
  title: "Private AI Inference | Phala Network",
  description: "Confidential LLM serving with zero-logging guarantees. Deploy AI inference endpoints where model weights and user prompts stay encrypted end-to-end.",
  keywords: ["private AI", "confidential inference", "TEE", "LLM serving", "encrypted prompts"],
};

export const revalidate = 3600;

export default async function PrivateAIInferencePage() {
  const models = await fetchAiModels(20);

  return (
    <>
      <Hero225 />
      <Feature206
        title="Why Private Inference Matters"
        description="Traditional AI APIs expose your prompts, model weights, and inference results to cloud operators."
        points={[
          "User prompts contain sensitive business logic",
          "Model weights are valuable IP assets",
          "Inference logs can leak confidential data",
          "Cloud admins have full access to memory"
        ]}
      />
      <Feature282 />
      <ModelsList models={models} />
      <Feature284 />
      <Feature280 />
      <Casestudies3
        featuredCasestudy={{
          logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
          company: "HealthTech AI",
          tags: "HEALTHCARE / CONFIDENTIAL AI",
          title: "HIPAA-compliant medical diagnosis AI.",
          subtitle: "Processing patient data with zero-trust TEE infrastructure",
          image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
          link: "#",
        }}
        casestudies={[
          {
            logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
            company: "FinanceGPT",
            tags: "FINANCE / PRIVATE LLM",
            title: "Private financial advisory chatbot.",
            subtitle: "Encrypted prompts and model weights for compliance",
            image: "",
            link: "#",
          },
          {
            logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
            company: "LegalAI",
            tags: "LEGAL / TEE INFERENCE",
            title: "Confidential legal document analysis.",
            subtitle: "Attorney-client privilege maintained in TEEs",
            image: "",
            link: "#",
          },
        ]}
      />
      <Codeexample1 />
      <Feature161 />
      <Faq14 />
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
