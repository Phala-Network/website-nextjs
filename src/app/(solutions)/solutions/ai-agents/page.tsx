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
  title: "Verifiable AI Agents on Phala",
  description: "Autonomous, financial, ambient, and personal agents with enclave execution and on-chain attestations.",
  keywords: ["AI agents", "verifiable execution", "autonomous agents", "financial agents", "TEE", "ERC-8004", "attestation"],
};

export default function AIAgentsPage() {
  return (
    <>
      <Hero104 />
      <Feature206
        title="Why Verifiable Agents Matter"
        description="Traditional AI agents run in black-box environments. Users can't verify behavior, operators can modify code, and keys/secrets are exposed to infrastructure."
        points={[
          "Agent actions cannot be cryptographically proven",
          "Execution can be tampered with by operators",
          "Private keys exposed to cloud infrastructure",
          "No guarantee agent code matches what was published"
        ]}
        images={[
          "/solutions/agent/1.png",
          "/solutions/agent/2.png",
          "/solutions/agent/3.png",
          "/solutions/agent/4.png",
        ]}
      />
      <Feature282
        badge="Verifiable Agents"
        cardSubtitle="TEE-Protected Execution"
        cardTitle="Attested Identities"
        title="Run Agent Code, Memory, and Keys Inside TEEs"
        description1="Autonomous agents with hardware-enforced immutability. Deploy agent code inside Intel TDX/AMD SEV enclaves—no operator can modify behavior or access private keys. Identity binding via remote attestation ensures you interact with the exact agent you expect."
        description2="Export cryptographic receipts of agent actions. Policy engines enforce allowance-based key operations with on-chain proofs. ElizaOS, Rabbi Agent, Crossmint, and ERC-8004-compatible agents with verifiable execution and attested identities."
        features={[
          "Immutable agent behavior",
          "Hardware-protected keys",
          "On-chain attestations"
        ]}
      />
      <Feature65
        integrations={[
          {
            title: "Autonomous Agents",
            description: "Immutable behavior with no hidden backdoors. Agent code locked in TEE—operators cannot modify logic or inject backdoors after deployment.",
            icon: "swatchbook",
            color: "bg-red-400",
            tags: ["Use Case", "Autonomous", "Immutable", "No Backdoors", "Verifiable"],
          },
          {
            title: "Financial Agents",
            description: "Hold private keys and execute trading strategies with hardware-grade isolation. DeFi agents with cryptographic proofs of correct execution.",
            icon: "gitbranch",
            color: "bg-blue-400",
            tags: ["Use Case", "DeFi", "Trading", "Key Management", "On-Chain"],
          },
          {
            title: "Ambient Agents",
            description: "Private sensor and voice streams processed inside TEEs. Edge or cloud deployment with zero data leakage to operators.",
            icon: "sparkles",
            color: "bg-yellow-400",
            tags: ["Use Case", "IoT", "Voice", "Edge AI", "Privacy"],
          },
          {
            title: "Personal Agents",
            description: "User-owned data vaults with private-by-default execution. Personal AI assistants with hardware-enforced confidentiality.",
            icon: "ganttchart",
            color: "bg-green-400",
            tags: ["Use Case", "Personal AI", "Data Vaults", "User-Owned", "Privacy-First"],
          },
        ]}
      />
      <Feature284
        features={[
          {
            desc: "DeFi agents holding private keys and executing trading strategies. On-chain attestations prove correct execution with hardware isolation.",
            img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img1.jpeg",
            title: "Financial Agents",
            badgeTitle: "USE CASE",
            gridClass: "md:col-span-1",
          },
          {
            desc: "Autonomous agents with immutable behavior and verifiable execution. ERC-8004-compatible identities with cryptographic attestations.",
            img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg",
            title: "Autonomous Agents",
            badgeTitle: "USE CASE",
            gridClass: "lg:col-span-2",
          },
          {
            desc: "Personal AI assistants with user-owned data vaults. Private-by-default execution with hardware-enforced confidentiality.",
            img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img11.jpeg",
            title: "Personal Agents",
            badgeTitle: "USE CASE",
            gridClass: "md:col-span-1 lg:row-span-2",
          },
          {
            desc: "Gaming NPCs with provably fair behavior. Verifiable execution prevents cheating and ensures consistent game logic.",
            img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img2.jpeg",
            title: "Gaming AI Agents",
            badgeTitle: "USE CASE",
            gridClass: "lg:col-span-2",
          },
          {
            desc: "Ambient IoT agents processing sensor and voice data in TEEs. Privacy-preserving edge AI with zero data leakage.",
            img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img4.jpeg",
            title: "Ambient Agents",
            badgeTitle: "USE CASE",
            gridClass: "md:col-span-1",
          },
        ]}
      />
      <Feature280
        title="Trusted by Agent Ecosystems"
        subtitle="TESTIMONIALS"
        features={[
          "Verifiable execution",
          "Attested identities",
          "Hardware key protection",
          "ERC-8004 compatible",
          "On-chain receipts",
          "Policy enforcement",
          "Agent frameworks",
          "ElizaOS support",
          "Immutable behavior",
          "Red-team safe",
          "Enterprise SLA",
          "24/7 support"
        ]}
        cards={[
          {
            id: 0,
            name: "Alex Rivera",
            designation: "DeFi Protocol Founder",
            content: (
              <p>
                Our trading agents hold private keys in TEEs—<span className="bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500">no operator can access</span> them. On-chain attestations prove correct execution to our users.
              </p>
            ),
          },
          {
            id: 1,
            name: "Sofia Chen",
            designation: "AI Safety Researcher",
            content: (
              <p>
                Immutable agent behavior is critical for safety. <span className="bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500">Hardware-enforced execution</span> means no hidden backdoors—we can red-team without data escape.
              </p>
            ),
          },
          {
            id: 2,
            name: "Marcus Johnson",
            designation: "Enterprise Automation Lead",
            content: (
              <p>
                Phala's verifiable agents transformed our compliance story. <span className="bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500">Cryptographic audit trails</span> for every agent action—regulators love it.
              </p>
            ),
          },
        ]}
      />
      <Casestudies3
        featuredCasestudy={{
          logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
          company: "ElizaOS",
          tags: "AGENT FRAMEWORK / VERIFIABLE AI",
          title: "ElizaOS agents with TEE execution.",
          subtitle: "Autonomous agents with hardware-enforced behavior guarantees",
          image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
          link: "#",
        }}
        casestudies={[
          {
            logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
            company: "Crossmint",
            tags: "FINANCIAL AGENTS / KEY MANAGEMENT",
            title: "Financial agents holding private keys.",
            subtitle: "DeFi agents with hardware-protected key operations",
            image: "",
            link: "#",
          },
          {
            logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
            company: "Rabbi Agent",
            tags: "PERSONAL AI / PRIVACY-FIRST",
            title: "Personal agents with data vaults.",
            subtitle: "User-owned AI with hardware-enforced confidentiality",
            image: "",
            link: "#",
          },
        ]}
      />
      <Codeexample1
        badge="ERC-8004 Compatible"
        title="DEPLOY AGENTS"
        subtitle="IN 5 MINUTES"
        description="Deploy verifiable AI agents with attested identities and on-chain receipts. Compatible with ElizaOS, ERC-8004, and agent frameworks."
        buttonText="View Agent SDK"
        buttonUrl="https://docs.phala.network/agents"
        filename="deploy-agent.sh"
        language="bash"
        code={`# Deploy verifiable agent in TEE
docker run -d \\
  --name phala-agent \\
  --device=/dev/tdx_guest \\
  -e AGENT_CODE_HASH=0x8a9b7c6d... \\
  -e AGENT_IDENTITY=did:phala:agent-123 \\
  -e POLICY_CONTRACT=0x1a2b3c4d... \\
  -p 8080:8080 \\
  phalanetwork/agent:latest

# Get agent attestation
curl http://localhost:8080/v1/attestation

# Interact with verified agent
curl http://localhost:8080/v1/chat \\
  -H "Content-Type: application/json" \\
  -d '{
    "message": "Execute trading strategy",
    "verify_attestation": true
  }'

# Agent returns signed receipt
{
  "action": "trade_executed",
  "receipt_hash": "0xfe7d8c9b...",
  "attestation": "0x2b3c4d5e...",
  "on_chain_proof": "0x3c4d5e6f..."
}`}
      />
      <Feature161
        title="Attested Identities & Action Logs"
        description="Cryptographic receipts of agent actions with verifiable execution proofs. Red-teamable without data escape for AI safety research."
        primaryButtonText="Get Agent Attestation"
        primaryButtonUrl="https://cloud.phala.network/agent-attestation"
        secondaryButtonText="Agent SDK Docs"
        secondaryButtonUrl="https://docs.phala.network/agents"
      />
      <Faq14
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about Verifiable AI Agents"
        faqItems={[
          {
            category: "SECURITY & TRUST",
            items: [
              {
                question: "Can operators change agent code after deployment?",
                answer: "No. Agent code is locked inside TEE with hardware-enforced immutability. Remote attestation binds agent identity to specific code hash—any modification changes the measurement and fails verification."
              },
              {
                question: "How are agent secrets and keys managed?",
                answer: "Private keys are generated and stored inside TEE memory, never exported in plaintext. Policy engines enforce allowance-based key operations with cryptographic proofs. Hardware encryption prevents operator access."
              },
              {
                question: "How do I verify the agent I'm interacting with?",
                answer: "Each agent exposes /v1/attestation endpoint with Intel DCAP or AMD SEV-SNP quotes. Verify the code hash matches your expected agent identity and check on-chain registry for attested DID."
              }
            ]
          },
          {
            category: "TECHNICAL",
            items: [
              {
                question: "Is this compatible with ElizaOS and other agent frameworks?",
                answer: "Yes, Phala provides adapters for ElizaOS, LangChain agents, and ERC-8004-compatible frameworks. Standard agent code runs inside TEEs with added attestation and receipt generation."
              },
              {
                question: "How do on-chain attestations work?",
                answer: "Agents generate cryptographic receipts of actions. Policy contracts verify attestation signatures on-chain. ERC-8004-style identity binding ensures verifiable agent behavior with blockchain proofs."
              },
              {
                question: "Can agents interact with external APIs and tools?",
                answer: "Yes, agents can call external APIs with policy-enforced egress rules. Tool access is logged in sealed audit trails. Network policies prevent data exfiltration while allowing legitimate API interactions."
              }
            ]
          },
          {
            category: "USE CASES",
            items: [
              {
                question: "What makes financial agents safe for holding keys?",
                answer: "Hardware key protection in TEEs prevents operator access. Policy engines enforce transaction limits and allowance-based operations. On-chain attestations prove every key operation happened in verified enclave."
              },
              {
                question: "How do personal agents protect user data?",
                answer: "User data vaults are encrypted and isolated inside TEEs. Only the user's authenticated session can access vault contents. Hardware guarantees prevent cloud operators from seeing personal data."
              },
              {
                question: "Can I red-team agents without data leakage?",
                answer: "Yes, TEE isolation allows AI safety researchers to test agent behavior without risk of training data or prompt escape. Sealed audit trails capture all actions for analysis without exposing sensitive content."
              }
            ]
          }
        ]}
      />
      <Cta4
        title="Start Building Verifiable Agents Today"
        description="Deploy autonomous AI agents with hardware-enforced execution guarantees and cryptographic attestations."
        buttonText="Deploy on Phala"
        buttonUrl="https://cloud.phala.network"
        items={[
          "Verifiable execution",
          "Attested identities",
          "ERC-8004 compatible",
          "Agent framework adapters",
          "24/7 technical support",
        ]}
      />
    </>
  );
}
