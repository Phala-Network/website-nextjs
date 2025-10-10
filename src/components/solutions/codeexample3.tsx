'use client'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeBlock {
  filename: string
  language: string
  code: string
  title?: string
  description?: string
}

interface Codeexample3Props {
  leftCode?: CodeBlock
  rightCode?: CodeBlock
}

const Codeexample3 = ({ leftCode, rightCode }: Codeexample3Props) => {
  const defaultLeftCode: CodeBlock = {
    title: 'Deploy Training Jobs in TEEs',
    description:
      'Use Docker containers to deploy confidential training jobs on encrypted datasets. Your training data and model weights stay encrypted in hardware TEEs with Intel TDX/AMD SEV. Monitor progress in real-time while maintaining zero-knowledge guarantees.',
    filename: 'deploy-training.sh',
    language: 'bash',
    code: `# Deploy training job in TEE
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
# Training complete! Model saved to /data/model.bin`,
  }

  const defaultRightCode: CodeBlock = {
    title: 'Verify Hardware Attestation',
    description:
      'Generate cryptographic proofs that your code runs in genuine TEE hardware with Intel DCAP or AMD SEV-SNP. Remote attestation provides zero-trust verification before processing sensitive data.',
    filename: 'verify-attestation.sh',
    language: 'bash',
    code: `# Verify remote attestation
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
}`,
  }

  const leftCodeBlock = leftCode || defaultLeftCode
  const rightCodeBlock = rightCode || defaultRightCode

  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-start gap-16 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <span className="text-muted-foreground mb-6 text-xs uppercase">
              Deployment Example
            </span>
            <h2 className="mb-4 text-4xl font-bold">{leftCodeBlock.title}</h2>
            <p className="text-muted-foreground text-lg">
              {leftCodeBlock.description}
            </p>
            <div className="rounded-lg overflow-hidden bg-[#1e1e1e] dark:bg-[#1e1e1e] border border-neutral-200 dark:border-neutral-800 mt-6">
              <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 px-4 py-2 bg-neutral-50 dark:bg-[#252525]">
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {leftCodeBlock.filename}
                </span>
              </div>
              <div className="[&_pre]:!bg-[#1e1e1e] [&_code]:!text-[#abb2bf]">
                <SyntaxHighlighter
                  language={leftCodeBlock.language}
                  style={oneDark}
                  customStyle={{
                    margin: 0,
                    padding: '1.5rem',
                    background: '#1e1e1e',
                    fontSize: '0.875rem',
                    maxHeight: '350px',
                    color: '#abb2bf',
                  }}
                  showLineNumbers={false}
                >
                  {leftCodeBlock.code}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-muted-foreground mb-6 text-xs uppercase">
              Verification Example
            </span>
            <h2 className="mb-4 text-4xl font-bold">{rightCodeBlock.title}</h2>
            <p className="text-muted-foreground text-lg">
              {rightCodeBlock.description}
            </p>
            <div className="rounded-lg overflow-hidden bg-[#1e1e1e] dark:bg-[#1e1e1e] border border-neutral-200 dark:border-neutral-800 mt-6">
              <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 px-4 py-2 bg-neutral-50 dark:bg-[#252525]">
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {rightCodeBlock.filename}
                </span>
              </div>
              <div className="[&_pre]:!bg-[#1e1e1e] [&_code]:!text-[#abb2bf]">
                <SyntaxHighlighter
                  language={rightCodeBlock.language}
                  style={oneDark}
                  customStyle={{
                    margin: 0,
                    padding: '1.5rem',
                    background: '#1e1e1e',
                    fontSize: '0.875rem',
                    maxHeight: '350px',
                    color: '#abb2bf',
                  }}
                  showLineNumbers={false}
                >
                  {rightCodeBlock.code}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Codeexample3 }
