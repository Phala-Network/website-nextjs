"use client";

import { Button } from "@/components/ui/button";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Codeexample3 = () => {
  const deploymentCode = `# Deploy training job in TEE
docker run -d \\
  --name phala-training \\
  --device=/dev/tdx_guest \\
  -v $(pwd)/data:/data \\
  -e DATASET_PATH=/data/training.jsonl \\
  -e MODEL=llama-3-70b \\
  -e EPOCHS=3 \\
  -e LEARNING_RATE=1e-5 \\
  phalanetwork/training:latest

# Monitor training progress
docker logs -f phala-training

# Epoch 1/3: Loss 0.524
# Epoch 2/3: Loss 0.312
# Epoch 3/3: Loss 0.189
# Training complete! Model saved to /data/model.bin`;

  const verificationCode = `# Verify remote attestation
curl -X POST https://cloud-api.phala.network/api/v1/attestations/verify \\
  -H "Content-Type: application/json" \\
  -d '{
    "container_id": "phala-training",
    "verify_tdx": true,
    "verify_code_hash": true
  }'

# Response confirms genuine TEE hardware
{
  "verified": true,
  "tee_type": "Intel TDX",
  "code_hash": "0x1a2b3c4d5e6f...",
  "mrenclave": "a9f8e7d6c5b4...",
  "timestamp": "2025-01-15T10:30:00Z"
}`;

  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-start gap-16 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <span className="text-muted-foreground mb-6 text-xs uppercase">
              Deployment Example
            </span>
            <h2 className="mb-4 text-4xl font-bold">Deploy Training Jobs in TEEs</h2>
            <p className="text-muted-foreground text-lg">
              Use Docker containers to deploy confidential training jobs on encrypted datasets.
              Your training data and model weights stay encrypted in hardware TEEs with
              Intel TDX/AMD SEV. Monitor progress in real-time while maintaining
              zero-knowledge guarantees.
            </p>
            <div className="rounded-lg overflow-hidden bg-[#1e1e1e] border border-neutral-800 mt-6">
              <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-2 bg-[#252525]">
                <span className="text-sm text-neutral-400">deploy-training.sh</span>
              </div>
              <SyntaxHighlighter
                language="bash"
                style={oneDark}
                customStyle={{
                  margin: 0,
                  padding: "1.5rem",
                  background: "#1e1e1e",
                  fontSize: "0.875rem",
                  maxHeight: "350px",
                }}
                showLineNumbers={false}
              >
                {deploymentCode}
              </SyntaxHighlighter>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-muted-foreground mb-6 text-xs uppercase">
              Verification Example
            </span>
            <h2 className="mb-4 text-4xl font-bold">Verify TEE Attestation</h2>
            <p className="text-muted-foreground text-lg">
              Before deploying sensitive data, verify that your training job runs in genuine
              TEE hardware. Remote attestation provides cryptographic proof that your code
              executes in an isolated, tamper-proof environment.
            </p>
            <div className="rounded-lg overflow-hidden bg-[#1e1e1e] border border-neutral-800 mt-6">
              <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-2 bg-[#252525]">
                <span className="text-sm text-neutral-400">verify-attestation.sh</span>
              </div>
              <SyntaxHighlighter
                language="bash"
                style={oneDark}
                customStyle={{
                  margin: 0,
                  padding: "1.5rem",
                  background: "#1e1e1e",
                  fontSize: "0.875rem",
                  maxHeight: "350px",
                }}
                showLineNumbers={false}
              >
                {verificationCode}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Button size="lg" asChild>
            <a href="https://docs.phala.network">
              View Full Documentation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Codeexample3 };
