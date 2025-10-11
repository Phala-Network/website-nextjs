'use client'

import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function ApiCodeExamples() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const pythonCode = `# Install OpenAI SDK: pip3 install openai
from openai import OpenAI

client = OpenAI(
    api_key="<API_KEY>",
    base_url="https://api.redpill.ai/api/v1"
)

response = client.chat.completions.create(
    model="phala/deepseek-chat-v3-0324",
    messages=[
        {"role": "system", "content": "You are a helpful assistant"},
        {"role": "user", "content": "What is your model name?"},
    ],
    stream=True
)
print(response.choices[0].message.content)`

  const typescriptCode = `import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://api.redpill.ai/api/v1',
  apiKey: '<API_KEY>',
});

async function main() {
  const completion = await client.chat.completions.create({
    model: 'phala/deepseek-chat-v3-0324',
    messages: [
      {
        role: 'user',
        content: 'What is the meaning of life?',
      },
    ],
  });
  console.log(completion.choices[0].message);
}

main();`

  const curlCode = `curl -X 'POST' \\
  'https://api.redpill.ai/v1/chat/completions' \\
  -H 'accept: application/json' \\
  -H 'Content-Type: application/json' \\
  -H 'Authorization: Bearer <API_KEY>' \\
  -d '{
  "messages": [
    {
      "content": "You are a helpful assistant.",
      "role": "system"
    },
    {
      "content": "What is your model name?",
      "role": "user"
    }
  ],
  "stream": true,
  "model": "phala/deepseek-chat-v3-0324"
}'`

  const verifyCode = `import requests

# Fetch attestation report
response = requests.get(
    "https://api.redpill.ai/v1/attestation/report?model=phala/deepseek-v3",
    headers={"Authorization": f"Bearer {api_key}"}
)
report = response.json()

# Verify NVIDIA GPU attestation
gpu_response = requests.post(
    "https://nras.attestation.nvidia.com/v3/attest/gpu",
    headers={"Content-Type": "application/json"},
    data=report["nvidia_payload"]
)

# Check verification result
gpu_tokens = gpu_response.json()[1]
for gpu_id, token in gpu_tokens.items():
    decoded = jwt.decode(token, options={"verify_signature": False})
    assert decoded.get("measres") == "success"
    print(f"{gpu_id}: Verified ✓")`

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Get Started in Minutes
          </h2>
          <p className="text-lg text-muted-foreground">
            OpenAI-compatible API with hardware-enforced privacy. Drop-in
            replacement with zero code changes.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* API Usage */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Make Secure Requests
              </h3>
              <p className="text-muted-foreground mb-6">
                Use your favorite SDK or curl to access 200+ models with TEE
                protection
              </p>

              <Tabs defaultValue="python" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="typescript">TypeScript</TabsTrigger>
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                </TabsList>

                <TabsContent value="python" className="mt-4">
                  <div className="relative">
                    <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{pythonCode}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2"
                      onClick={() => copyCode(pythonCode, 'python')}
                    >
                      {copiedCode === 'python' ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="typescript" className="mt-4">
                  <div className="relative">
                    <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{typescriptCode}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2"
                      onClick={() => copyCode(typescriptCode, 'typescript')}
                    >
                      {copiedCode === 'typescript' ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="curl" className="mt-4">
                  <div className="relative">
                    <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{curlCode}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2"
                      onClick={() => copyCode(curlCode, 'curl')}
                    >
                      {copiedCode === 'curl' ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Verification */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Verify TEE Execution
              </h3>
              <p className="text-muted-foreground mb-6">
                Every response includes cryptographic proof from NVIDIA and
                Intel TEE hardware
              </p>

              <div className="relative">
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{verifyCode}</code>
                </pre>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2"
                  onClick={() => copyCode(verifyCode, 'verify')}
                >
                  {copiedCode === 'verify' ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
