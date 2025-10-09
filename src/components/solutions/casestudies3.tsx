import { MoveRight } from "lucide-react";
import React from "react";

interface CasestudyItem {
  logo: string;
  company: string;
  tags: string;
  title: string;
  subtitle: string;
  image: string;
  link?: string;
}

interface Casestudies3Props {
  featuredCasestudy: CasestudyItem;
  casestudies: CasestudyItem[];
}

const defaultFeaturedCasestudy: CasestudyItem = {
  logo: "/partnerships/eliza-os.svg",
  company: "ElizaOS",
  tags: "ARTIFICIAL INTELLIGENCE / AUTONOMOUS AGENTS",
  title: "Verifiable AI Agent Framework.",
  subtitle: "Building decentralized AI agents with cryptographic proofs.",
  image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  link: "https://www.elizaos.ai/",
};

const defaultCasestudies: CasestudyItem[] = [
  {
    logo: "/partnerships/rabbi.png",
    company: "Rabbi",
    tags: "FINANCIAL AI / TRADING AGENTS",
    title: "Confidential Trading Agents.",
    subtitle: "Private key management in TEE enclaves.",
    image: "",
    link: "https://koshercapital.net",
  },
  {
    logo: "/partnerships/crossmint.png",
    company: "Crossmint",
    tags: "WEB3 INFRASTRUCTURE / ONCHAIN AGENTS",
    title: "Secure Onchain Operations.",
    subtitle: "Hardware-protected agent execution.",
    image: "",
    link: "https://www.crossmint.com/",
  },
];

const Casestudies3 = ({
  featuredCasestudy = defaultFeaturedCasestudy,
  casestudies = defaultCasestudies,
}: Casestudies3Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="border-border border">
          <a
            href={featuredCasestudy.link || "#"}
            className="hover:bg-muted/40 group grid gap-4 overflow-hidden px-6 transition-colors duration-500 ease-out lg:grid-cols-2 xl:px-28"
          >
            <div className="flex flex-col justify-between gap-4 pt-8 md:pt-16 lg:pb-16">
              <div className="flex items-center gap-2 text-2xl font-medium">
                <img src={featuredCasestudy.logo} alt="logo" className="h-9" />
                {featuredCasestudy.company}
              </div>
              <div>
                <span className="text-muted-foreground text-xs sm:text-sm">
                  {featuredCasestudy.tags}
                </span>
                <h2 className="mb-5 mt-4 text-balance text-2xl font-semibold sm:text-3xl sm:leading-10">
                  {featuredCasestudy.title}
                  <span className="text-primary/80 group-hover:text-primary font-medium transition-colors duration-500 ease-out">
                    {" "}
                    {featuredCasestudy.subtitle}
                  </span>
                </h2>
                <div className="flex items-center gap-2 font-medium">
                  Read case study
                  <MoveRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
                </div>
              </div>
            </div>
            <div className="relative isolate py-16">
              <div className="border-border bg-background relative isolate h-full border p-2">
                <div className="h-full overflow-hidden">
                  <img
                    src={featuredCasestudy.image}
                    alt="placeholder"
                    className="aspect-14/9 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </a>
          <div className="border-border flex border-t">
            <div className="hidden w-28 shrink-0 bg-[radial-gradient(var(--muted-foreground)_1px,transparent_1px)] opacity-15 [background-size:10px_10px] xl:block"></div>
            <div className="grid lg:grid-cols-2">
              {casestudies.map((item, idx) => (
                <a
                  key={item.company}
                  href={item.link || "#"}
                  className={`border-border bg-background hover:bg-muted/40 group flex flex-col justify-between gap-12 px-6 py-8 transition-colors duration-500 ease-out md:py-16 lg:pb-16 xl:gap-16 ${
                    idx === 0
                      ? "xl:border-l xl:pl-8"
                      : "border-t lg:border-l lg:border-t-0 xl:border-r xl:pl-8"
                  }`}
                >
                  <div className="flex items-center gap-2 text-2xl font-medium">
                    <img src={item.logo} alt="logo" className="h-9" />
                    {item.company}
                  </div>
                  <div>
                    <span className="text-muted-foreground text-xs sm:text-sm">
                      {item.tags}
                    </span>
                    <h2 className="mb-5 mt-4 text-balance text-2xl font-semibold sm:text-3xl sm:leading-10">
                      {item.title}
                      <span className="text-primary/80 group-hover:text-primary font-medium transition-colors duration-500 ease-out">
                        {" "}
                        {item.subtitle}
                      </span>
                    </h2>
                    <div className="flex items-center gap-2 font-medium">
                      Read case study
                      <MoveRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="hidden w-28 shrink-0 bg-[radial-gradient(var(--muted-foreground)_1px,transparent_1px)] opacity-15 [background-size:10px_10px] xl:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Casestudies3 };
