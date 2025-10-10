import { Check, ChevronRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";

const Feature22 = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="container">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-8 md:gap-12 lg:grid-cols-3 lg:gap-16">
          <h2 className="mb-4 text-3xl font-medium sm:col-span-2 sm:text-4xl md:mb-0 lg:col-span-1">
            Financial Agents
          </h2>
          <ul className="text-muted-foreground flex flex-col gap-3 sm:gap-4">
            <li className="flex items-center gap-2">
              <Check className="text-primary size-4" /> Autonomous trading with cryptographic execution proofs
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-primary size-4" /> Real-time market data analysis in secure enclaves
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-primary size-4" /> Risk management with verifiable calculations
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-primary size-4" /> Portfolio rebalancing with audit trails
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-primary size-4" /> DeFi protocol integration with privacy
            </li>
          </ul>
          <ul className="text-muted-foreground flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <Check className="text-primary size-4" /> MEV protection through private transactions
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-primary size-4" /> Yield optimization across multiple chains
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-primary size-4" /> Smart order routing with confidential strategies
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-primary size-4" /> Compliance monitoring with private data
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-primary size-4" /> API key security in hardware enclaves
            </li>
          </ul>
        </div>
        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 md:mt-20 md:gap-8 lg:grid-cols-3">
          <div className="rounded-lg border">
            <div className="relative p-1">
              <img
                src="/solutions/agents/copilot.png"
                alt="AI Wallet Copilot"
                className="h-64 w-full rounded-t-lg object-cover"
              />
            </div>
            <div>
              <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                <h3 className="font-medium">AI Wallet Copilot</h3>
                <p className="text-muted-foreground">
                  Intelligent wallet assistant with secure key management in TEE
                </p>
              </div>
              <div className="h-px border-t border-dashed"></div>
              <ul className="text-muted-foreground">
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="text-primary mt-1 size-4 shrink-0" />
                  Private key protection in hardware enclave
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="text-primary mt-1 size-4 shrink-0" />
                  AI-powered transaction insights and recommendations
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="text-primary mt-1 size-4 shrink-0" />
                  Verifiable execution for all wallet operations
                </li>
              </ul>
              <div className="h-px border-t border-dashed"></div>
              <a
                href="https://d5be0b710ecaa77985cf148109b1591bbc7023d0-3000.dstack-pha-prod8.phala.network/"
                className="my-3 flex items-center gap-2 px-4 font-medium sm:my-4 sm:px-5 md:px-6"
              >
                Try Demo
                <ChevronRight className="mt-0.5 size-4" />
              </a>
            </div>
          </div>

          <div className="rounded-lg border">
            <div className="relative p-1">
              <img
                src="/solutions/agents/8004.png"
                alt="ERC-8004 TEE Agent"
                className="h-64 w-full rounded-t-lg object-cover"
              />
            </div>
            <div>
              <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                <h3 className="font-medium">ERC-8004 TEE Agent</h3>
                <p className="text-muted-foreground">
                  Ethereum standard for verifiable AI agents with TEE attestation
                </p>
              </div>
              <div className="h-px border-t border-dashed"></div>
              <ul className="text-muted-foreground">
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="text-primary mt-1 size-4 shrink-0" />
                  On-chain attestation of agent execution
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="text-primary mt-1 size-4 shrink-0" />
                  Cryptographic proof of AI model integrity
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="text-primary mt-1 size-4 shrink-0" />
                  Standardized interface for verifiable agents
                </li>
              </ul>
              <div className="h-px border-t border-dashed"></div>
              <a
                href="https://github.com/Phala-Network/erc-8004-tee-agent"
                className="my-3 flex items-center gap-2 px-4 font-medium sm:my-4 sm:px-5 md:px-6"
              >
                View on GitHub
                <ChevronRight className="mt-0.5 size-4" />
              </a>
            </div>
          </div>
          <div className="rounded-lg border">
            <div className="relative p-1">
              <img
                src="/solutions/agents/x402.jpeg"
                alt="Coinbase X402 TEE"
                className="h-64 w-full rounded-t-lg object-cover"
              />
            </div>
            <div>
              <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                <h3 className="font-medium">Coinbase X402 TEE</h3>
                <p className="text-muted-foreground">
                  Secure Coinbase integration with TEE-protected API credentials
                </p>
              </div>
              <div className="h-px border-t border-dashed"></div>
              <ul className="text-muted-foreground">
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="text-primary mt-1 size-4 shrink-0" />
                  API key security in hardware enclave
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="text-primary mt-1 size-4 shrink-0" />
                  Private trading execution with attestation
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="text-primary mt-1 size-4 shrink-0" />
                  Verifiable transaction logs for compliance
                </li>
              </ul>
              <div className="h-px border-t border-dashed"></div>
              <a
                href="https://cloud.phala.network/templates/coinbase-x402-tee"
                className="my-3 flex items-center gap-2 px-4 font-medium sm:my-4 sm:px-5 md:px-6"
              >
                Deploy Template
                <ChevronRight className="mt-0.5 size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature22 };
