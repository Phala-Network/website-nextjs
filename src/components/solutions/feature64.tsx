const Feature64 = () => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <h2 className="mb-3 text-pretty font-display font-semibold text-foreground text-3xl leading-tight md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            Autonomous Agents
          </h2>
          <p className="text-muted-foreground lg:max-w-3xl lg:text-lg">
            Self-operating agents that make decisions, execute transactions, and
            interact with blockchains autonomously in secure enclaves
          </p>
        </div>
        <div className="grid w-full gap-6 lg:grid-cols-7">
          <a
            href="https://cloud.phala.network/eliza"
            className="border-border bg-accent flex flex-col rounded-lg border p-6 md:p-8 lg:col-span-4 hover:bg-accent/80 transition-colors"
          >
            <div className="flex justify-center items-center rounded-lg mb-6 md:mb-8 overflow-hidden">
              <img
                src="/solutions/agents/elizaos banner.png"
                alt="ElizaOS"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-auto flex flex-col">
              <p className="mb-2 text-sm font-semibold md:text-base">ElizaOS</p>
              <p className="text-muted-foreground text-sm md:text-base">
                Multi-agent simulation framework for autonomous AI characters
                and social agents
              </p>
            </div>
          </a>
          <a
            href="https://cloud.phala.network/templates/near-shade-agent"
            className="border-border bg-accent flex flex-col rounded-lg border p-6 md:p-8 lg:col-span-3 hover:bg-accent/80 transition-colors"
          >
            <div className="flex justify-center items-center rounded-lg mb-6 md:mb-8 overflow-hidden">
              <img
                src="/solutions/agents/nearai.webp"
                alt="NEAR Shade Agent"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-auto flex flex-col">
              <p className="mb-2 text-sm font-semibold md:text-base">
                NEAR Shade Agent
              </p>
              <p className="text-muted-foreground text-sm md:text-base">
                Privacy-preserving agents for NEAR Protocol with TEE protection
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export { Feature64 }
