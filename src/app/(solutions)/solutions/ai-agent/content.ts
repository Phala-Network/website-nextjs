import type { SolutionContent } from "@/types/solutions";

export const aiAgentContent: SolutionContent = {
  seo: {
    title: "Verifiable AI Agents on Phala",
    description:
      "Autonomous, financial, ambient, and personal agents with enclave execution and on-chain attestations.",
    keywords: [
      "AI agents",
      "verifiable agents",
      "autonomous agents",
      "ERC-8004",
      "agent TEE",
    ],
  },

  hero: {
    eyebrow: "AI Agents",
    headline: "Agents people can trust",
    subheadline:
      "Run agent code, memory, and keys inside TEEs. Export verifiable attestations and policies.",
    primaryCTA: {
      text: "Talk to Us",
      url: "https://phala.com/contact",
    },
    secondaryCTA: {
      text: "Deploy on Phala",
      url: "https://cloud.phala.network",
    },
    features: [
      "ERC-8004 compatible",
      "Verifiable execution",
      "On-chain attestations",
    ],
  },

  why: {
    title: "Why Verifiable Agents Matter",
    description:
      "Autonomous agents need trust. Users must verify agent behavior, protect sensitive data, and ensure agents can't be tampered with. Phala TEEs provide hardware-backed guarantees: agents run exactly as specified, handle secrets securely, and produce cryptographic proofs of their actions.",
  },

  how: {
    title: "How It Works",
    steps: [
      {
        number: "01",
        title: "Identity binding ↔ attestation",
        description:
          "Each agent gets a TEE-bound identity. On-chain registration proves the agent's code and enclave.",
      },
      {
        number: "02",
        title: "Policy engine for permissions",
        description:
          "Define what the agent can do: APIs it can call, wallets it can access, data it can read.",
      },
      {
        number: "03",
        title: "Receipt posting for transparency",
        description:
          "Every agent action generates a signed receipt. Post to blockchain or audit log.",
      },
      {
        number: "04",
        title: "Optional on-chain proofs",
        description:
          "For critical actions, post attestations on-chain. Anyone can verify agent behavior.",
      },
    ],
  },

  useCases: [
    {
      title: "Autonomous Agents",
      description:
        "Immutable behavior, no hidden backdoors. Code attestation proves the agent hasn't been modified.",
      benefit: "Trustless autonomy",
    },
    {
      title: "Financial Agents",
      description:
        "Hold keys and execute trading strategies with hardware-grade isolation. No operator access.",
      benefit: "Custody without counterparty risk",
    },
    {
      title: "Ambient Agents",
      description:
        "Process private sensor/voice streams at edge or cloud. Data never leaves the enclave.",
      benefit: "Privacy-preserving context",
    },
    {
      title: "Personal Agents",
      description:
        "User-owned data vaults with AI processing. Private by default, verifiable by design.",
      benefit: "Self-sovereign AI",
    },
    {
      title: "Verifiable Agents (ERC-8004)",
      description:
        "On-chain agent identities with attestation receipts. Composable, trustable, and auditable.",
      benefit: "Web3-native agent framework",
    },
  ],

  stories: {
    featured: {
      logo: "/success-stories/elizaos-logo.svg",
      company: "ElizaOS",
      tags: "AGENT FRAMEWORK / VERIFIABLE",
      title: "Open-source agent framework",
      subtitle: "with Phala TEE integration.",
      image: "/success-stories/elizaos-preview.jpg",
      link: "/success-stories/elizaos",
    },
    additional: [
      {
        logo: "/success-stories/rabbi-logo.svg",
        company: "Rabbi Agent",
        tags: "AUTONOMOUS / FINANCIAL",
        title: "Autonomous trading agent",
        subtitle: "with verifiable execution.",
        link: "/success-stories/rabbi-agent",
      },
      {
        logo: "/success-stories/crossmint-logo.svg",
        company: "Crossmint",
        tags: "WEB3 AGENTS / CUSTODY",
        title: "Custodial agent infrastructure",
        subtitle: "for Web3 apps.",
        link: "/success-stories/crossmint",
      },
    ],
  },

  devExp: {
    title: "Developer Experience",
    description:
      "Build agents with familiar frameworks, enhanced with TEE guarantees.",
    codeExamples: [
      {
        language: "typescript",
        filename: "verifiable-agent.ts",
        code: `// ERC-8004 Verifiable Agent
import { PhalaAgent, AgentPolicy } from '@phala/agents';
import { elizaLogger } from '@ai16z/eliza';

// Define agent policy
const policy = new AgentPolicy({
  allowedAPIs: ['openai.com', 'anthropic.com'],
  allowedContracts: ['0x...wallet'],
  maxGasPerTx: '100000',
  dataRetention: 'none' // no persistent storage
});

// Create agent with TEE runtime
const agent = await PhalaAgent.create({
  name: 'TradingAgent',
  policy: policy,
  runtime: 'tee',
  attestation: {
    onChain: true,
    network: 'ethereum'
  }
});

// Register agent on-chain (ERC-8004)
const tx = await agent.register({
  metadata: {
    description: 'Autonomous trading agent',
    version: '1.0.0'
  }
});

// Agent actions are attested
const result = await agent.execute(async (ctx) => {
  // Access secrets inside TEE
  const apiKey = await ctx.secrets.get('OPENAI_KEY');

  // Make decisions
  const analysis = await ctx.ai.analyze(marketData);

  if (analysis.signal === 'buy') {
    // Execute trade (policy-checked)
    return ctx.wallet.execute({
      to: UNISWAP_ROUTER,
      data: swapCalldata,
      value: ethers.parseEther('1')
    });
  }
});

// Receipt includes attestation
elizaLogger.log('Action receipt:', result.attestation.receipt);`,
      },
      {
        language: "python",
        filename: "personal-agent.py",
        code: `# Personal AI Agent with Private Data
from phala_agent import Agent, SecretStore
from langchain import LLM

# Create agent with user's private data vault
agent = Agent(
    identity="user-123",
    data_vault="ipfs://Qm...",  # encrypted
    tee_policy="personal-agent.json"
)

# Load user context (stays in TEE)
@agent.on_context_load
async def load_context(vault):
    # Decrypt user data inside enclave only
    emails = await vault.read("emails.enc")
    calendar = await vault.read("calendar.enc")
    preferences = await vault.read("prefs.enc")

    return {
        "emails": emails,
        "calendar": calendar,
        "preferences": preferences
    }

# Process queries privately
@agent.on_query
async def handle_query(query: str, context: dict):
    # LLM inference inside TEE
    llm = LLM(model="phala/llama-3.3-70b")

    response = await llm.generate(
        prompt=f"""
        User context (private): {context}
        Query: {query}
        """,
        max_tokens=500
    )

    # Generate receipt (no context leaked)
    return {
        "response": response,
        "attestation": agent.attest({
            "query_hash": hash(query),
            "model": "llama-3.3-70b",
            "timestamp": now()
        })
    }

# User queries their agent
result = await agent.query(
    "What meetings do I have this week related to the AI project?"
)

print(result.response)
# User can verify attestation
print(f"Verified: {result.attestation.verify()}")`,
      },
      {
        language: "bash",
        filename: "deploy-agent.sh",
        code: `# Deploy verifiable agent
phala agent deploy \\
  --name TradingAgent \\
  --image ghcr.io/my-org/trading-agent:v1.0.0 \\
  --policy agent-policy.json \\
  --secrets OPENAI_KEY,WALLET_KEY \\
  --erc8004 \\
  --network ethereum

# Register agent on-chain (ERC-8004)
phala agent register \\
  --agent-id \${AGENT_ID} \\
  --metadata metadata.json \\
  --attestation-mode on-chain

# Monitor agent actions
phala agent logs --agent-id \${AGENT_ID} --receipts

# Verify agent attestation
phala agent verify \\
  --agent-id \${AGENT_ID} \\
  --expected-policy-hash \${POLICY_HASH}`,
      },
    ],
    features: [
      "ElizaOS framework integration",
      "LangChain & LlamaIndex support",
      "ERC-8004 on-chain registration",
      "Allowance-based key operations",
    ],
  },

  proof: {
    title: "Attested Agent Identities",
    subtitle: "Verifiable Execution Receipts",
    description:
      "Every agent action produces a cryptographic receipt. Attested identities ensure agents can't be impersonated. Red-team agents without data escape—attestation proves code integrity, policy enforcement, and action provenance.",
    features: [
      "Hardware-bound agent identities",
      "Action receipt signing",
      "On-chain attestation posting",
      "Policy violation alerts",
    ],
  },

  faqs: [
    {
      category: "SECURITY & CONTROL",
      items: [
        {
          question: "Can operators change agent code after deployment?",
          answer:
            "No. Agent code is measured during deployment. Any code change produces a different MRENCLAVE, which fails attestation verification. The agent's identity is cryptographically bound to its code.",
        },
        {
          question: "How are agent secrets managed?",
          answer:
            "Secrets are injected into the TEE at runtime via sealed channels. They exist only in encrypted memory. The agent can use them, but operators cannot extract them. Key rotation and revocation are supported.",
        },
        {
          question: "How do I verify the agent I'm interacting with?",
          answer:
            "Check the agent's attestation receipt. It contains the MRENCLAVE (code hash), policy hash, and identity proof. Compare against known-good measurements before trusting agent responses.",
        },
      ],
    },
    {
      category: "AGENT FRAMEWORKS",
      items: [
        {
          question: "Which agent frameworks are supported?",
          answer:
            "ElizaOS, LangChain, LlamaIndex, AutoGPT, and custom frameworks. Any framework that runs in a container can run in a TEE with attestation.",
        },
        {
          question: "Can agents interact with Web3?",
          answer:
            "Yes. Agents can hold wallet keys, sign transactions, and post attestations on-chain. ERC-8004 provides standard on-chain agent identity and verification.",
        },
      ],
    },
    {
      category: "USE CASES",
      items: [
        {
          question: "What's the difference between autonomous and verifiable agents?",
          answer:
            "Autonomous agents make decisions without human intervention. Verifiable agents produce cryptographic proofs of their actions. Phala enables both: autonomous decision-making with verifiable execution.",
        },
      ],
    },
  ],

  cta: {
    title: "Ready to build trustable agents?",
    description:
      "Deploy AI agents with hardware-backed verification on Phala. From personal assistants to autonomous DeFi strategies, build agents users can trust.",
    buttonText: "Get Started",
    buttonUrl: "https://cloud.phala.network",
    items: [
      "ERC-8004 compatible",
      "ElizaOS integration",
      "On-chain attestation",
      "Secret management",
      "Free tier available",
    ],
  },
};
