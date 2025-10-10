import { Card } from "@/components/ui/card";

const integrations = [
  {
    title: "Open WebUI",
    description:
      "Self-hosted AI chat interface with complete data privacy and TEE protection",
    image: "/solutions/agents/openweb.png",
    url: "https://cloud.phala.network/templates/open-webui",
  },
  {
    title: "Bytebot",
    description:
      "Intelligent coding assistant with secure execution and private code analysis",
    image: "/solutions/agents/bytebot.jpeg",
    url: "https://cloud.phala.network/templates/bytebot",
  },
  {
    title: "Chatnio",
    description:
      "Privacy-first chat platform with end-to-end encryption in TEE",
    image: "/solutions/agents/chatnio.png",
    url: "https://cloud.phala.network/templates/chatnio",
  },
];

const Feature44 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <h2 className="mb-4 text-2xl font-semibold lg:text-4xl">
          Personal Agents
        </h2>
        <p className="text-muted-foreground lg:text-lg">
          Your digital assistant running in a secure enclave. Handle daily tasks with complete privacy and verifiable execution.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration, i) => (
            <li key={i}>
              <a href={integration.url} className="block">
                <Card className="overflow-hidden hover:bg-accent/50 transition-colors">
                  <img
                    src={integration.image}
                    alt={integration.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="mb-1 text-lg font-medium">
                      {integration.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {integration.description}
                    </p>
                  </div>
                </Card>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Feature44 };
