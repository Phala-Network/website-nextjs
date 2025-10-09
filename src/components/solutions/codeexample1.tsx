"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Codeexample1Props {
  badge?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  filename?: string;
  language?: string;
  code?: string;
}

const Codeexample1 = ({
  badge = "Cloud Attestation API",
  title = "VERIFY TEE",
  subtitle = "IN 5 MINUTES.",
  description = "Get shareable Intel DCAP quotes verified with Phala Cloud's API. Hardware attestation ensures your code runs in genuine TEE hardware.",
  buttonText = "View Docs",
  buttonUrl = "https://docs.phala.network",
  filename = "verify-quote.sh",
  language = "bash",
  code
}: Codeexample1Props) => {
  const codeExample = code || `# Verify attestation quote
curl -X POST "https://cloud-api.phala.network/api/v1/attestations/verify" \\
  -H "Content-Type: multipart/form-data" \\
  -F "file=@quote.bin"

# Response - verified TEE attestation
{
  "success": true,
  "quote": {
    "verified": true,
    "header": { "tee_type": "TEE_TDX" },
    "report_data": "0x9aa049fb...",
    "mr_enclave": "a1b2c3d4..."
  },
  "checksum": "9aa049fb9049d4f582ca316206f7cf34ee185c2b..."
}

# Share verification proof
https://proof.t16z.com/reports/9aa049fb9049d4f582...`;

  return (
    <section className="py-32">
      <div className="container">
        <div className="grid place-items-center gap-10 lg:grid-cols-2 lg:gap-0">
          <div className="flex flex-col gap-6 lg:pr-20">
            <span className="text-muted-foreground text-lg">
              {badge}
            </span>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              {title}
              <br />
              <span className="text-muted-foreground">{subtitle}</span>
            </h2>
            <p className="text-muted-foreground md:text-lg">
              {description}
            </p>
            <Button size="lg" className="w-fit" asChild>
              <a href={buttonUrl}>
                {buttonText}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="flex w-full flex-col gap-1 overflow-hidden">
            <div className="rounded-lg overflow-hidden bg-[#1e1e1e] border border-neutral-800">
              <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-2 bg-[#252525]">
                <span className="text-sm text-neutral-400">{filename}</span>
              </div>
              <SyntaxHighlighter
                language={language}
                style={oneDark}
                customStyle={{
                  margin: 0,
                  padding: "1.5rem",
                  background: "#1e1e1e",
                  fontSize: "0.875rem",
                  maxHeight: "400px",
                }}
                showLineNumbers={false}
              >
                {codeExample}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Codeexample1 };
