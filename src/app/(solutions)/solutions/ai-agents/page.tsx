import type { Metadata } from "next";
import { Hero104 } from "@/components/solutions/hero104";
import { Feature206 } from "@/components/solutions/feature206";
import { Feature282 } from "@/components/solutions/feature282";
import { Feature65 } from "@/components/solutions/feature65";
import { Feature284 } from "@/components/solutions/feature284";
import { Feature280 } from "@/components/solutions/feature280";
import { Casestudies3 } from "@/components/solutions/casestudies3";
import { Codeexample1 } from "@/components/solutions/codeexample1";
import { Feature161 } from "@/components/solutions/feature161";
import { Faq14 } from "@/components/solutions/faq14";
import { Cta4 } from "@/components/solutions/cta4";

export const metadata: Metadata = {
  title: "AI Agents | Phala Network",
  description: "Verifiable agent execution with TEE isolation. Deploy autonomous AI agents with cryptographic proof of correct execution and zero-trust guarantees.",
  keywords: ["AI agents", "verifiable execution", "TEE", "autonomous agents", "confidential computing"],
};

export default function AIAgentsPage() {
  return (
    <>
      <Hero104 />
      <Feature206
        title="Why Verifiable Agents Matter"
        description="Traditional AI agents run in black-box environments where execution cannot be verified or trusted."
        points={[
          "Agent actions cannot be cryptographically proven",
          "Execution logs can be tampered with",
          "Tool access and API calls are hidden",
          "No guarantee of correct behavior"
        ]}
      />
      <Feature282 />
      <Feature65 />
      <Feature284 />
      <Feature280 />
      <Casestudies3
        featuredCasestudy={{
          logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
          company: "DeFi Protocol",
          tags: "BLOCKCHAIN / VERIFIABLE AI",
          title: "On-chain AI agents with TEE proofs.",
          subtitle: "Autonomous trading agents with cryptographic guarantees",
          image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
          link: "#",
        }}
        casestudies={[
          {
            logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
            company: "Enterprise Automation",
            tags: "ENTERPRISE / TEE AGENTS",
            title: "Verifiable business process automation.",
            subtitle: "AI agents with audit trails and compliance",
            image: "",
            link: "#",
          },
          {
            logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
            company: "Gaming AI",
            tags: "GAMING / VERIFIABLE EXECUTION",
            title: "Provably fair game AI.",
            subtitle: "NPCs with verifiable behavior and anti-cheat",
            image: "",
            link: "#",
          },
        ]}
      />
      <Codeexample1 />
      <Feature161 />
      <Faq14 />
      <Cta4
        title="Start Building Verifiable Agents Today"
        description="Deploy autonomous AI agents with hardware-enforced execution guarantees and cryptographic proofs."
        buttonText="Deploy on Phala"
        buttonUrl="https://cloud.phala.network"
        items={[
          "Intel TDX & AMD SEV support",
          "Remote attestation for agents",
          "Cryptographic execution proofs",
          "Enterprise-ready compliance",
          "24/7 technical support",
        ]}
      />
    </>
  );
}
