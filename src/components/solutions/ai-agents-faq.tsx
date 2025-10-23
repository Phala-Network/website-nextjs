import { Badge } from '@/components/ui/badge'
import { faqPageSchema } from '@/lib/seo'

const faqs = [
  // Architecture & Security
  {
    question: 'What makes an AI Agent on Phala different from a regular agent?',
    answer:
      "A Phala-powered agent runs inside a Trusted Execution Environment (TEE) — meaning its code, data, and memory are sealed from everyone, including the cloud provider or its creator. It's the first kind of agent that is self-sovereign, tamper-proof, and verifiable by design.",
    category: 'Architecture & Security',
  },
  {
    question: 'Can an agent hold or use private keys safely?',
    answer:
      'Yes. Agents on Phala can generate, store, and use private keys inside an enclave. Keys never exist in plaintext outside the TEE, even to the developer. This enables autonomous DeFi agents or wallet-based bots that can sign transactions securely, similar to a hardware wallet — but fully automated.',
    category: 'Architecture & Security',
  },
  {
    question: 'How do I verify that an AI Agent is running the code it claims to?',
    answer:
      "Each agent instance produces a remote attestation proof, cryptographically signed by the hardware. This proof lists the enclave's code hash and identity. Anyone (users, DAOs, smart contracts) can verify it before interacting, ensuring the agent's logic matches its published version.",
    category: 'Architecture & Security',
  },
  {
    question: 'What prevents an operator from changing or spying on the agent?',
    answer:
      "The enclave's memory and I/O are encrypted, and the host OS or hypervisor cannot inspect or modify them. Even Phala's operators can't view the agent's internal state. Once deployed, the agent's code and model are sealed and immutable unless the developer redeploys a new signed build.",
    category: 'Architecture & Security',
  },
  // Development & Integration
  {
    question: 'How do I deploy my own agent to Phala?',
    answer:
      'You package your agent (LLM + logic) as a container image, then deploy it to Phala Cloud using the Phala SDK or dstack runner. During launch, the node performs remote attestation and joins the Agent Network. Once verified, your agent exposes APIs or smart contract endpoints securely.',
    category: 'Development & Integration',
  },
  {
    question: 'What frameworks and models can I use?',
    answer:
      'Phala supports agents built with LangChain, ElizaOS, AutoGen, or custom Python logic. Models can be any LLM (LLaMA, Mistral, Claude, GPT, etc.), provided they run inside the enclave. GPU enclaves (H200, A100) allow running both small and large model agents efficiently.',
    category: 'Development & Integration',
  },
  {
    question: 'Can agents interact with blockchains or external APIs?',
    answer:
      'Yes. Phala enclaves include secure outbound call gateways that let agents query APIs or interact with smart contracts — with full attestation of each call. Agents can fetch data, trigger trades, or communicate with other services while maintaining end-to-end privacy.',
    category: 'Development & Integration',
  },
  {
    question: "What's the difference between an AI Agent and an AI dApp?",
    answer:
      "An AI Agent is an autonomous process — it runs, decides, and acts independently, often long-lived. An AI dApp is a user-facing application that may invoke agents. Phala's stack supports both: dApps as frontends and agents as backend workers that think and act privately.",
    category: 'Development & Integration',
  },
  // Trust, Interoperability & Use Cases
  {
    question: 'Can multiple agents cooperate securely on Phala?',
    answer:
      'Yes. Agents can authenticate each other using attestation proofs and exchange encrypted messages. This makes multi-agent systems (like supply chain bots or DAO delegates) possible without a central authority.',
    category: 'Trust & Interoperability',
  },
  {
    question: 'What are "verifiable agents" and why do they matter?',
    answer:
      'Verifiable agents can prove their code and identity to others before acting. For example, an on-chain contract can verify that "Agent X is indeed running model Y in enclave Z." This transparency makes collaboration between humans, agents, and DAOs safe and auditable.',
    category: 'Trust & Interoperability',
  },
]

export default function AIAgentsFAQ() {
  // SEO: Generate FAQPage JSON-LD schema
  const faqJsonLd = faqPageSchema(faqs)

  return (
    <>
      {/* JSON-LD Structured Data for FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="w-full py-24 max-w-7xl mx-auto">
        <div className="container mx-auto">
          <div className="text-center">
            <Badge className="text-xs leading-4 font-medium">FAQ</Badge>
            <h2 className="font-display mt-4 font-semibold text-foreground text-3xl leading-tight md:text-4xl lg:text-5xl">
              AI Agent — FAQ
            </h2>
            <p className="mt-4 text-lg leading-7 md:text-xl font-display font-medium text-muted-foreground">
              Everything you need to know about building verifiable AI agents
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
    </>
  )
}
