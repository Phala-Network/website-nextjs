import React from "react";

import { cn } from "@/lib/utils";

const Skills2 = () => {
  const stack = [
    {
      name: "Figma",
      category: "design tool",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-icon.svg",
      usage: "75%",
    },
    {
      name: "React",
      category: "javascript library",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-icon.svg",
      usage: "95%",
    },
    {
      name: "Next.js",
      category: "full stack framework",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-icon.svg",
      usage: "90%",
      className: "dark:invert",
    },
    {
      name: "Tailwind CSS",
      category: "css framework",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-icon.svg",
      usage: "90%",
    },
    {
      name: "v0",
      category: "ai tool",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/v0-icon.svg",
      usage: "85%",
      className: "dark:invert",
    },
    {
      name: "Vite",
      category: "build tool",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vite-icon.svg",
      usage: "80%",
    },
    {
      name: "TypeScript",
      category: "programming language",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/typescript-icon.svg",
      usage: "85%",
    },
    {
      name: "GitHub",
      category: "version control",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon.svg",
      usage: "95%",
      className: "dark:invert",
    },
    {
      name: "VS Code",
      category: "code editor",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vscode-icon.svg",
      usage: "70%",
    },
    {
      name: "Vercel",
      category: "hosting platform",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-icon.svg",
      usage: "80%",
      className: "dark:invert",
    },
    {
      name: "Notion",
      category: "productivity tool",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/notion-icon.svg",
      usage: "85%",
    },
    {
      name: "Cursor",
      category: "ai code editor",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/cursor-icon.svg",
      usage: "95%",
      className: "dark:invert",
    },
    {
      name: "Astro",
      category: "web framework",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-icon.svg",
      usage: "60%",
      className: "dark:invert",
    },
    {
      name: "Shadcn/ui",
      category: "component library",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-icon.svg",
      usage: "90%",
      className: "dark:invert",
    },
  ];

  return (
    <section className="py-32">
      <div className="container space-y-10">
        <h1 className="text-5xl font-semibold tracking-tight lg:text-7xl">
          Tools & Stack
        </h1>

        <ul className="relative grid w-full gap-3 lg:grid-cols-2">
          {stack.map((item, index) => (
            <li
              key={index}
              className="flex flex-row items-center justify-between gap-10 rounded-2xl p-2"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent, transparent 2px, var(--muted) 2px, var(--muted) 4px)",
              }}
            >
              <div className="flex items-center gap-4">
                <div className="flex size-20 items-center justify-center rounded-2xl p-2">
                  <img
                    src={item.icon}
                    alt=""
                    className={cn("h-8 w-8 object-contain", item.className)}
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">
                    {item.name}
                  </h2>
                  <p className="text-foreground/50 text-sm uppercase">
                    {item.category}
                  </p>
                </div>
              </div>
              <div className="rounded-full pr-5 font-semibold uppercase">
                {item.usage}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Skills2 };
