'use client'

import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function ApiCodeExamplesPhala() {
  const [activeTab, setActiveTab] = useState('api')

  const examples = {
    api: {
      left: {
        title: 'Make Secure API Requests',
        description:
          'Use OpenAI-compatible SDK to access 200+ models with hardware-enforced privacy. Drop-in replacement with zero code changes.',
        filename: 'secure_request.py',
        language: 'python',
        code: `from openai import OpenAI

client = OpenAI(
    api_key="<API_KEY>",
    base_url="https://api.redpill.ai/api/v1"
)

response = client.chat.completions.create(
    model="deepseek/deepseek-chat-v3.1",
    messages=[
        {"role": "system", "content": "You are a helpful assistant"},
        {"role": "user", "content": "What is your model name?"},
    ],
    stream=True
)
print(response.choices[0].message.content)`,
      },
      right: {
        title: 'Verify TEE Execution',
        description:
          'Every response includes cryptographic proof from NVIDIA and Intel TEE hardware. Verify attestation to ensure secure execution.',
        filename: 'verify_attestation.py',
        language: 'python',
        code: `import requests
import jwt

# Fetch attestation report
response = requests.get(
    "https://api.redpill.ai/v1/attestation/report?model=deepseek/deepseek-chat-v3.1",
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
    print(f"{gpu_id}: Verified ✓")`,
      },
    },
    tools: {
      left: {
        title: 'Tool Calling (Function Calling)',
        description:
          'Enable AI models to interact with external systems by invoking predefined functions. Access real-time data and extend model capabilities.',
        filename: 'tool_calling.sh',
        language: 'bash',
        code: `curl -s -X POST 'https://api.redpill.ai/v1/chat/completions' \\
  -H 'Authorization: Bearer <API_KEY>' \\
  -H 'Content-Type: application/json' \\
  -d '{
  "messages": [
    {
      "content": "What is the weather like in New York?",
      "role": "user"
    }
  ],
  "tools": [
      {
          "type": "function",
          "function": {
              "name": "get_weather",
              "description": "Get the current weather in a specified city",
              "parameters": {
                  "type": "object",
                  "properties": {
                      "city": {"type": "string"},
                      "metric": {"type": "string", "enum": ["celsius", "fahrenheit"]}
                  },
                  "required": ["city"]
              }
          }
      }
  ],
  "tool_choice": "auto",
  "model": "qwen/qwen3-coder-480b-a35b-instruct"
}'`,
      },
      right: {
        title: 'Invoke Tool Response',
        description:
          'After the model determines which tool to call, execute the function and return results to get the final AI response.',
        filename: 'invoke_tool.sh',
        language: 'bash',
        code: `curl -s -X POST 'https://api.redpill.ai/v1/chat/completions' \\
  -H 'Authorization: Bearer <API_KEY>' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "messages": [
      {"role": "user", "content": "What is the weather like in New York?"},
      {
        "role": "assistant",
        "tool_calls": [{
          "id": "chatcmpl-tool-471f2c795ab64a27ab671a9e302c94db",
          "type": "function",
          "function": {
            "name": "get_weather",
            "arguments": "{\\"city\\": \\"New York\\", \\"metric\\": \\"celsius\\"}"
          }
        }]
      },
      {
        "role": "tool",
        "content": "{\\"city\\": \\"New York\\", \\"temperature\\": 15, \\"description\\": \\"clear sky\\", \\"metric\\": \\"celsius\\"}",
        "tool_call_id": "chatcmpl-tool-471f2c795ab64a27ab671a9e302c94db"
      }
    ],
    "model": "qwen/qwen3-coder-480b-a35b-instruct"
  }'`,
      },
    },
    vision: {
      left: {
        title: 'Images & Vision Models',
        description:
          'Analyze images with vision models in TEE. Image recognition, object detection, and classification with hardware-level privacy.',
        filename: 'image_analysis.py',
        language: 'python',
        code: `from openai import OpenAI

client = OpenAI(
    base_url="https://api.redpill.ai/v1",
    api_key="<API_KEY>",
)

response = client.chat.completions.create(
    model="qwen/qwen3-vl-30b-a3b-instruct",
    messages=[{
        "role": "user",
        "content": [
            { "type": "text", "text": "What is in this image?" },
            {
                "type": "image_url",
                "image_url": {
                    "url": "https://example.com/image.jpg"
                }
            }
        ]
    }],
)

print(response.choices[0].message.content)`,
      },
      right: {
        title: 'Vision Model Response',
        description:
          'Get detailed analysis of images while keeping both the image data and inference encrypted in GPU TEE.',
        filename: 'response.txt',
        language: 'text',
        code: `Here's what I see in the image:

*   **Giant Pandas:** There are four young giant pandas
    in the image. They are black and white and appear
    to be playful.

*   **Bamboo:** The scene is full of lush, green bamboo.
    The pandas are among the bamboo and seemingly eating it.

*   **Greenery:** Besides the bamboo, there is other green
    vegetation surrounding the pandas.

*   **Outdoor Setting:** It appears to be a natural or
    zoo-like outdoor enclosure.

The overall impression is of a cute and peaceful scene
with baby pandas enjoying their habitat.`,
      },
    },
  }

  const currentExample = examples[activeTab as keyof typeof examples]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Powerful Features, Simple Integration
          </h2>
          <p className="text-lg text-muted-foreground">
            OpenAI-compatible APIs with advanced capabilities running in TEE
          </p>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full mb-8"
        >
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3">
            <TabsTrigger value="api">API & Verification</TabsTrigger>
            <TabsTrigger value="tools">Tool Calling</TabsTrigger>
            <TabsTrigger value="vision">Vision Models</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid items-start gap-16 md:grid-cols-2">
          {/* Left Code Block */}
          <div className="flex flex-col gap-6">
            <span className="text-muted-foreground mb-2 text-xs uppercase tracking-wider">
              {activeTab === 'api'
                ? 'Step 1'
                : activeTab === 'tools'
                  ? 'Define Tool'
                  : 'Analyze Image'}
            </span>
            <h3 className="text-3xl font-bold">{currentExample.left.title}</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {currentExample.left.description}
            </p>
            <div className="rounded-lg overflow-hidden bg-[#1e1e1e] border border-neutral-800 mt-6">
              <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-2 bg-[#252525]">
                <span className="text-sm text-neutral-400">
                  {currentExample.left.filename}
                </span>
              </div>
              <SyntaxHighlighter
                language={currentExample.left.language}
                style={oneDark}
                customStyle={{
                  margin: 0,
                  padding: '1.5rem',
                  background: '#1e1e1e',
                  fontSize: '0.875rem',
                  maxHeight: '500px',
                }}
                showLineNumbers={false}
              >
                {currentExample.left.code}
              </SyntaxHighlighter>
            </div>
          </div>

          {/* Right Code Block */}
          <div className="flex flex-col gap-6">
            <span className="text-muted-foreground mb-2 text-xs uppercase tracking-wider">
              {activeTab === 'api'
                ? 'Step 2'
                : activeTab === 'tools'
                  ? 'Invoke Tool'
                  : 'Response'}
            </span>
            <h3 className="text-3xl font-bold">{currentExample.right.title}</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {currentExample.right.description}
            </p>
            <div className="rounded-lg overflow-hidden bg-[#1e1e1e] border border-neutral-800 mt-6">
              <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-2 bg-[#252525]">
                <span className="text-sm text-neutral-400">
                  {currentExample.right.filename}
                </span>
              </div>
              <SyntaxHighlighter
                language={currentExample.right.language}
                style={oneDark}
                customStyle={{
                  margin: 0,
                  padding: '1.5rem',
                  background: '#1e1e1e',
                  fontSize: '0.875rem',
                  maxHeight: '500px',
                }}
                showLineNumbers={false}
              >
                {currentExample.right.code}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
