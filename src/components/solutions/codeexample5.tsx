"use client";

import { useState } from "react";

import type { BundledLanguage } from "@/components/kibo-ui/code-block";
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockItem,
} from "@/components/kibo-ui/code-block";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CodeExample {
  language: string;
  filename: string;
  icon: string;
  code: string;
}

interface ApiExample {
  id: string;
  title: string;
  description: string;
  image: string;
  code: CodeExample[];
}

interface Codeexample5Props {
  title?: string;
  subtitle?: string;
  examples?: ApiExample[];
}

const defaultExamples: ApiExample[] = [
  {
    id: "deploy",
    title: "Deploy Data Enclave",
    description: "Set up confidential data processing environment",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/symbols/globe.svg",
    code: [
      {
        language: "yaml",
        filename: "data-enclave.yaml",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yaml/yaml-original.svg",
        code: `services:
  dstack-service:
    image: phala/dstack-service:latest
    restart: unless-stopped
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      - VPC_NODE_NAME=data-processor-\${NODE_IND}
      - VPC_SERVER_APP_ID=\${VPC_SERVER_APP_ID}

  data-processor:
    image: python:3.11-slim
    container_name: data-processor
    restart: unless-stopped
    working_dir: /app
    environment:
      - NODE_NAME=data-processor-\${NODE_IND}
    configs:
      - source: processor_script
        target: /app/processor.py
        mode: 0644
      - source: requirements
        target: /app/requirements.txt
        mode: 0644
    command: |
      sh -c "pip install -r requirements.txt && python processor.py"
    dns:
      - 100.100.100.100
    dns_search:
      - dstack.internal
    depends_on:
      dstack-service:
        condition: service_healthy

configs:
  processor_script:
    file: ./processor.py
  requirements:
    file: ./requirements.txt`,
      },
      {
        language: "bash",
        filename: "deploy.sh",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
        code: `#!/bin/bash
# Deploy confidential data enclave on Phala

# Set environment variables
export VPC_SERVER_APP_ID="your-vpc-id"
export NODE_IND=1

# Deploy using Phala CLI
phala cvm deploy \\
  --app-name "data-enclave" \\
  --compose-file data-enclave.yaml \\
  --env-file .env \\
  --tee-mode intel-tdx

# Verify deployment
phala cvm status --app-name "data-enclave"

# Get attestation proof
phala attest get --app-name "data-enclave" > attestation.json

echo "✓ Data enclave deployed with hardware attestation"`,
      },
      {
        language: "javascript",
        filename: "deploy.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        code: `// Deploy data enclave using Phala SDK
import { PhalaCloud } from '@phala/sdk';

const phala = new PhalaCloud({
  apiKey: process.env.PHALA_API_KEY
});

async function deployDataEnclave() {
  // Create VPC server
  const vpc = await phala.vpc.create({
    name: 'private-data-vpc',
    region: 'us-west-2'
  });

  // Deploy data processor nodes
  const nodes = [];
  for (let i = 1; i <= 3; i++) {
    const node = await phala.cvm.deploy({
      name: \`data-processor-\${i}\`,
      vpcId: vpc.id,
      composeFile: './data-enclave.yaml',
      env: {
        NODE_IND: i,
        VPC_SERVER_APP_ID: vpc.appId
      },
      teeMode: 'intel-tdx'
    });
    nodes.push(node);
  }

  // Get attestation proofs
  const attestations = await Promise.all(
    nodes.map(node => phala.attest.get(node.id))
  );

  console.log('✓ Data enclave cluster deployed');
  console.log('✓ Attestations:', attestations);

  return { vpc, nodes, attestations };
}

deployDataEnclave();`,
      },
    ],
  },
  {
    id: "process",
    title: "Process Private Data",
    description: "Compute on encrypted data inside TEE",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/python-icon.svg",
    code: [
      {
        language: "python",
        filename: "processor.py",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        code: `# Process encrypted data inside TEE
from phala_tee import SealedStorage, Attestation
import pandas as pd
import json

class PrivateDataProcessor:
    def __init__(self):
        self.storage = SealedStorage(
            policy_path="./access_policy.json"
        )
        self.attestation = Attestation.current()

    def load_datasets(self):
        """Load encrypted datasets from multiple sources"""
        # Dataset A: Healthcare records
        df_health = self.storage.read_dataframe(
            "s3://private-data/health_records.enc",
            encryption_key_id="health-kms-key"
        )

        # Dataset B: Financial transactions
        df_finance = self.storage.read_dataframe(
            "s3://private-data/transactions.enc",
            encryption_key_id="finance-kms-key"
        )

        return df_health, df_finance

    def compute_insights(self, df_health, df_finance):
        """Perform privacy-preserving computation"""
        # Join on user_id without exposing raw data
        result = df_health.merge(
            df_finance,
            on='user_id',
            how='inner'
        )

        # Aggregate insights (no individual records)
        insights = {
            'risk_scores': result.groupby('risk_category').agg({
                'total_amount': 'sum',
                'user_count': 'count',
                'avg_age': 'mean'
            }).to_dict(),
            'trend_analysis': result.groupby('month').agg({
                'transactions': 'count',
                'volume': 'sum'
            }).to_dict()
        }

        return insights

    def emit_results(self, insights):
        """Emit attested results (not raw data)"""
        output = {
            'insights': insights,
            'attestation': {
                'quote': self.attestation.quote(),
                'mrenclave': self.attestation.mrenclave(),
                'policy_hash': self.storage.policy_hash()
            },
            'timestamp': pd.Timestamp.now().isoformat()
        }

        # Write to egress (results only, never raw data)
        self.storage.write_json(
            "results/insights.json",
            output,
            allow_egress=True
        )

        print("✓ Insights computed and attested")
        return output

# Run processor
processor = PrivateDataProcessor()
df_health, df_finance = processor.load_datasets()
insights = processor.compute_insights(df_health, df_finance)
result = processor.emit_results(insights)`,
      },
      {
        language: "javascript",
        filename: "processor.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        code: `// Process private data in Node.js TEE
import { SealedStorage, Attestation } from '@phala/tee-sdk';
import * as dfd from 'danfojs-node';

class PrivateDataProcessor {
  constructor() {
    this.storage = new SealedStorage({
      policyPath: './access_policy.json'
    });
    this.attestation = Attestation.current();
  }

  async loadDatasets() {
    // Load encrypted datasets
    const healthData = await this.storage.readCSV(
      's3://private-data/health_records.enc',
      { encryptionKeyId: 'health-kms-key' }
    );

    const financeData = await this.storage.readCSV(
      's3://private-data/transactions.enc',
      { encryptionKeyId: 'finance-kms-key' }
    );

    return {
      health: new dfd.DataFrame(healthData),
      finance: new dfd.DataFrame(financeData)
    };
  }

  computeInsights(healthDf, financeDf) {
    // Privacy-preserving join
    const merged = dfd.merge({
      left: healthDf,
      right: financeDf,
      on: ['user_id'],
      how: 'inner'
    });

    // Aggregate only (no individual records)
    const insights = {
      riskScores: merged.groupby(['risk_category'])
        .agg({ total_amount: 'sum', user_count: 'count' }),
      trends: merged.groupby(['month'])
        .agg({ transactions: 'count', volume: 'sum' })
    };

    return insights;
  }

  async emitResults(insights) {
    const output = {
      insights,
      attestation: {
        quote: await this.attestation.quote(),
        mrenclave: this.attestation.mrenclave(),
        policyHash: this.storage.policyHash()
      },
      timestamp: new Date().toISOString()
    };

    // Emit results only (never raw data)
    await this.storage.writeJSON(
      'results/insights.json',
      output,
      { allowEgress: true }
    );

    console.log('✓ Insights computed and attested');
    return output;
  }
}

// Run
const processor = new PrivateDataProcessor();
const { health, finance } = await processor.loadDatasets();
const insights = processor.computeInsights(health, finance);
await processor.emitResults(insights);`,
      },
      {
        language: "rust",
        filename: "processor.rs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
        code: `// Process private data in Rust TEE
use phala_tee::{SealedStorage, Attestation};
use polars::prelude::*;
use serde_json::json;

struct PrivateDataProcessor {
    storage: SealedStorage,
    attestation: Attestation,
}

impl PrivateDataProcessor {
    fn new() -> Self {
        Self {
            storage: SealedStorage::from_policy("./access_policy.json"),
            attestation: Attestation::current(),
        }
    }

    fn load_datasets(&self) -> Result<(DataFrame, DataFrame)> {
        // Load encrypted datasets
        let health_df = self.storage.read_csv(
            "s3://private-data/health_records.enc",
            Some("health-kms-key"),
        )?;

        let finance_df = self.storage.read_csv(
            "s3://private-data/transactions.enc",
            Some("finance-kms-key"),
        )?;

        Ok((health_df, finance_df))
    }

    fn compute_insights(
        &self,
        health_df: DataFrame,
        finance_df: DataFrame,
    ) -> Result<serde_json::Value> {
        // Privacy-preserving join
        let merged = health_df.inner_join(
            &finance_df,
            ["user_id"],
            ["user_id"],
        )?;

        // Aggregate insights only
        let risk_scores = merged
            .groupby(["risk_category"])?
            .agg(&[("total_amount", &["sum"]), ("user_id", &["count"])])?;

        let insights = json!({
            "risk_scores": risk_scores.to_json()?,
            "computed_at": chrono::Utc::now(),
        });

        Ok(insights)
    }

    fn emit_results(&self, insights: serde_json::Value) -> Result<()> {
        let output = json!({
            "insights": insights,
            "attestation": {
                "quote": self.attestation.quote()?,
                "mrenclave": self.attestation.mrenclave(),
                "policy_hash": self.storage.policy_hash(),
            },
        });

        // Emit results only (never raw data)
        self.storage.write_json(
            "results/insights.json",
            &output,
            true, // allow_egress
        )?;

        println!("✓ Insights computed and attested");
        Ok(())
    }
}

fn main() -> Result<()> {
    let processor = PrivateDataProcessor::new();
    let (health, finance) = processor.load_datasets()?;
    let insights = processor.compute_insights(health, finance)?;
    processor.emit_results(insights)?;
    Ok(())
}`,
      },
    ],
  },
  {
    id: "verify",
    title: "Verify Attestation",
    description: "Cryptographically verify TEE execution",
    image: "https://api.iconify.design/lucide:shield-check.svg",
    code: [
      {
        language: "typescript",
        filename: "verify-attestation.ts",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        code: `// Verify attestation quote from data enclave
import { PhalaAttestationClient } from '@phala/sdk';
import { readFileSync } from 'fs';

const client = new PhalaAttestationClient({
  network: 'mainnet'
});

async function verifyDataEnclave() {
  // Load attestation from results
  const results = JSON.parse(
    readFileSync('results/insights.json', 'utf8')
  );

  const { quote, mrenclave, policy_hash } = results.attestation;

  // Verify the computation was performed in genuine TEE
  const verification = await client.verifyAttestation({
    quote,
    policyHash: policy_hash,
    mrenclave,
    teeType: 'intel-tdx'
  });

  if (!verification.verified) {
    throw new Error(\`Attestation failed: \${verification.error}\`);
  }

  // Verify policy allows this computation
  const policyCheck = await client.verifyPolicy({
    policyHash: policy_hash,
    expectedDataSources: [
      's3://private-data/health_records.enc',
      's3://private-data/transactions.enc'
    ],
    allowedOperations: ['read', 'aggregate', 'join'],
    egressAllowed: false // Only aggregated results
  });

  if (!policyCheck.valid) {
    throw new Error(\`Policy violation: \${policyCheck.violation}\`);
  }

  console.log('✅ Attestation verified:');
  console.log('  - Correct TEE:', verification.teeType);
  console.log('  - MRENCLAVE:', verification.mrenclave);
  console.log('  - Policy enforced:', policyCheck.policyHash);
  console.log('  - Data sources protected');
  console.log('  - No raw data egress');

  // Safe to use the insights
  return {
    verified: true,
    insights: results.insights,
    attestation: verification
  };
}

// Verify before consuming results
const result = await verifyDataEnclave();
console.log('Trusted insights:', result.insights);`,
      },
      {
        language: "python",
        filename: "verify_attestation.py",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        code: `# Verify attestation from data enclave
from phala_sdk import PhalaAttestationClient
import json

client = PhalaAttestationClient(network='mainnet')

def verify_data_enclave():
    # Load attestation from results
    with open('results/insights.json') as f:
        results = json.load(f)

    attestation = results['attestation']

    # Verify TEE execution
    verification = client.verify_attestation(
        quote=attestation['quote'],
        policy_hash=attestation['policy_hash'],
        mrenclave=attestation['mrenclave'],
        tee_type='intel-tdx'
    )

    if not verification['verified']:
        raise Exception(f"Attestation failed: {verification['error']}")

    # Verify policy compliance
    policy_check = client.verify_policy(
        policy_hash=attestation['policy_hash'],
        expected_data_sources=[
            's3://private-data/health_records.enc',
            's3://private-data/transactions.enc'
        ],
        allowed_operations=['read', 'aggregate', 'join'],
        egress_allowed=False
    )

    if not policy_check['valid']:
        raise Exception(f"Policy violation: {policy_check['violation']}")

    print('✅ Attestation verified:')
    print(f"  - Correct TEE: {verification['tee_type']}")
    print(f"  - MRENCLAVE: {verification['mrenclave']}")
    print(f"  - Policy enforced: {policy_check['policy_hash']}")
    print(f"  - Data sources protected")
    print(f"  - No raw data egress")

    return {
        'verified': True,
        'insights': results['insights'],
        'attestation': verification
    }

# Verify before consuming
result = verify_data_enclave()
print(f"Trusted insights: {result['insights']}")`,
      },
      {
        language: "bash",
        filename: "verify.sh",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
        code: `#!/bin/bash
# Verify attestation using Phala CLI

# Extract attestation from results
QUOTE=$(jq -r '.attestation.quote' results/insights.json)
MRENCLAVE=$(jq -r '.attestation.mrenclave' results/insights.json)
POLICY_HASH=$(jq -r '.attestation.policy_hash' results/insights.json)

# Verify TEE attestation
phala attest verify \\
  --quote "$QUOTE" \\
  --mrenclave "$MRENCLAVE" \\
  --policy-hash "$POLICY_HASH" \\
  --tee-type intel-tdx

if [ $? -eq 0 ]; then
  echo "✅ Attestation verified"
  echo "  - TEE: Intel TDX"
  echo "  - MRENCLAVE: $MRENCLAVE"
  echo "  - Policy: $POLICY_HASH"

  # Extract and display insights
  jq '.insights' results/insights.json
else
  echo "❌ Attestation verification failed"
  exit 1
fi`,
      },
    ],
  },
];

const Codeexample5 = ({
  title = "How It Works",
  subtitle = "Deploy confidential data workloads in three simple steps",
  examples = defaultExamples
}: Codeexample5Props) => {
  const [selectedApi, setSelectedApi] = useState(examples[0]?.id || "deploy");
  const [selectedLanguage, setSelectedLanguage] = useState(examples[0]?.code[0]?.language || "yaml");

  const currentApi = examples.find((api) => api.id === selectedApi);

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground text-lg">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* API Selection Cards */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {examples.map((api) => {
                return (
                  <div
                    key={api.id}
                    className={`cursor-pointer rounded-lg p-4 transition-all ${
                      selectedApi === api.id ? "bg-muted" : "hover:bg-muted"
                    }`}
                    onClick={() => {
                      setSelectedApi(api.id);
                      setSelectedLanguage(api.code[0]?.language || "yaml");
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg p-2">
                        <img
                          src={api.image}
                          alt={api.title}
                          className="size-6"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="truncate font-medium">{api.title}</h3>
                        <p className="text-muted-foreground line-clamp-2 text-sm">
                          {api.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Code Display */}
          <div className="min-w-0 lg:col-span-2">
            <div className="space-y-6">
              {/* Language Selection */}
              <Tabs
                value={selectedLanguage}
                onValueChange={setSelectedLanguage}
              >
                <div className="overflow-x-auto">
                  <TabsList className={`grid w-full min-w-max ${currentApi?.code.length === 2 ? 'grid-cols-2' : currentApi?.code.length === 3 ? 'grid-cols-3' : 'grid-cols-4'}`}>
                    {currentApi?.code.map((code) => (
                      <TabsTrigger
                        key={code.language}
                        value={code.language}
                        className="flex items-center gap-2 whitespace-nowrap capitalize"
                      >
                        <img
                          src={code.icon}
                          alt={code.language}
                          className="size-4 flex-shrink-0"
                        />
                        <span className="hidden lg:inline">
                          {code.language}
                        </span>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
              </Tabs>

              {/* Code Block */}
              <div className="w-full overflow-hidden">
                <CodeBlock
                  key={selectedLanguage}
                  data={currentApi?.code || []}
                  value={selectedLanguage}
                  className="w-full"
                >
                  <CodeBlockHeader>
                    <div className="text-muted-foreground px-4 py-2 text-sm">
                      {currentApi?.code.find(c => c.language === selectedLanguage)?.filename}
                    </div>
                    <CodeBlockCopyButton
                      onCopy={() => console.log("Copied code to clipboard")}
                      onError={() =>
                        console.error("Failed to copy code to clipboard")
                      }
                    />
                  </CodeBlockHeader>
                  <ScrollArea className="w-full">
                    <CodeBlockBody>
                      {(item) => (
                        <CodeBlockItem
                          key={item.language}
                          value={item.language}
                          className="max-h-96 w-full overflow-x-auto"
                        >
                          <CodeBlockContent
                            language={item.language as BundledLanguage}
                          >
                            {item.code}
                          </CodeBlockContent>
                        </CodeBlockItem>
                      )}
                    </CodeBlockBody>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </CodeBlock>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Codeexample5 };
