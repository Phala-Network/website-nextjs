'use client'

import { useState } from 'react'

import type { BundledLanguage } from '@/components/kibo-ui/code-block'
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
} from '@/components/kibo-ui/code-block'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

const Codeexample5Finetune = () => {
  const [selectedStep, setSelectedStep] = useState('step1')

  const currentStep = tutorialSteps.find((step) => step.id === selectedStep)

  return (
    <section className="py-32 bg-muted/30">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Fine-Tuning LLaMA 3 with Unsloth on Phala Cloud
          </h2>
          <p className="text-lg text-muted-foreground">
            7-Step Tutorial: Confidential fine-tuning with hardware attestation
            and encrypted artifacts
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Step Selection Cards */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {tutorialSteps.map((step) => {
                return (
                  <div
                    key={step.id}
                    className={`cursor-pointer rounded-lg p-4 transition-all ${
                      selectedStep === step.id
                        ? 'bg-primary/10 border-2 border-primary'
                        : 'bg-background border-2 border-transparent hover:border-muted-foreground/20'
                    }`}
                    onClick={() => setSelectedStep(step.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm ${selectedStep === step.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}
                      >
                        {step.number}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-sm mb-1">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground line-clamp-2 text-xs">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Code Display */}
          <div className="min-w-0 lg:col-span-2">
            <div className="space-y-6">
              {/* Code Block */}
              <div className="w-full overflow-hidden">
                <CodeBlock
                  data={currentStep?.code || []}
                  value="python"
                  className="w-full"
                >
                  <CodeBlockHeader>
                    <CodeBlockFiles>
                      {(item) => (
                        <CodeBlockFilename
                          key={item.language}
                          value={item.language}
                        >
                          {item.filename}
                        </CodeBlockFilename>
                      )}
                    </CodeBlockFiles>
                    <CodeBlockCopyButton
                      onCopy={() => console.log('Copied code to clipboard')}
                      onError={() =>
                        console.error('Failed to copy code to clipboard')
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
  )
}

export { Codeexample5Finetune }

const tutorialSteps = [
  {
    id: 'step1',
    number: '1',
    title: 'Environment Setup',
    description: 'Install Unsloth and Hugging Face libraries with GPU support',
    code: [
      {
        language: 'python',
        filename: 'setup.sh',
        code: `# Install Unsloth and Hugging Face libraries
pip install unsloth transformers accelerate trl datasets

# (Optional) Ensure PyTorch 2.1 with CUDA 12.1 is installed for H200 GPU
pip install torch==2.1.0

# Verify that the GPU is accessible
python -c "import torch; print(torch.cuda.is_available(), torch.cuda.get_device_properties(0).name)"`,
      },
    ],
  },
  {
    id: 'step2',
    number: '2',
    title: 'Loading Chat Dataset Securely',
    description:
      'Mount and load encrypted fine-tuning dataset in conversational format',
    code: [
      {
        language: 'python',
        filename: 'load_dataset.py',
        code: `import json

# Path to the dataset (mounted securely by dstack)
dataset_path = "/mnt/data/chat_dataset.json"  # replace with actual path

with open(dataset_path, "r") as f:
    conversations = json.load(f)

print(f"Loaded {len(conversations)} conversations for fine-tuning.")

# Each item in 'conversations' is expected to have a structure:
# {"messages": [{"role": "user", "content": "..."},
#               {"role": "assistant", "content": "..."}, ... ]}`,
      },
    ],
  },
  {
    id: 'step3',
    number: '3',
    title: 'Loading LLaMA 3 with Unsloth',
    description:
      'Load base model with 4-bit quantization and memory optimization',
    code: [
      {
        language: 'python',
        filename: 'load_model.py',
        code: `import torch
from unsloth import FastLanguageModel

model_name = "meta-llama/Llama-3.1-8B"  # Example model ID for LLaMA 3

# Load the base LLaMA 3 model with Unsloth optimizations
model, tokenizer = FastLanguageModel.from_pretrained(
    model_name,
    max_seq_length=8192,      # LLaMA 3 supports 8k tokens (extend if needed)
    dtype=torch.bfloat16,     # Use BF16 for H200 (auto-detected if dtype=None)
    load_in_4bit=True         # Enable 4-bit quantization for efficiency
)`,
      },
    ],
  },
  {
    id: 'step4',
    number: '4',
    title: 'Applying LoRA Adapters',
    description: 'Add Low-Rank Adapters to attention and feed-forward layers',
    code: [
      {
        language: 'python',
        filename: 'apply_lora.py',
        code: `from unsloth import FastLanguageModel

# Apply LoRA (Low-Rank Adaptation) to the loaded model
model = FastLanguageModel.get_peft_model(
    model,
    r=16,  # LoRA rank
    lora_alpha=16,
    lora_dropout=0.0,
    bias="none",
    target_modules=[  # layers to inject LoRA into (LLaMA: QKV and projection layers)
        "q_proj", "k_proj", "v_proj", "o_proj",  # attention projections
        "gate_proj", "up_proj", "down_proj"      # feed-forward projections
    ],
    use_gradient_checkpointing=True  # enable grad checkpointing to save memory
)`,
      },
    ],
  },
  {
    id: 'step5',
    number: '5',
    title: 'Fine-Tuning with TRL',
    description: 'Supervised fine-tuning using HuggingFace TRL SFTTrainer',
    code: [
      {
        language: 'python',
        filename: 'train.py',
        code: `from trl import SFTTrainer, SFTConfig

# Configure training hyperparameters
training_args = SFTConfig(
    output_dir="./output",              # directory to save checkpoints
    num_train_epochs=3,
    per_device_train_batch_size=2,
    gradient_accumulation_steps=4,      # effective batch = 2*4 = 8
    learning_rate=2e-5,
    max_length=8192,                    # ensure it matches or is <= max_seq_length
    logging_steps=50,
    save_steps=1000,
    bf16=True                           # use bfloat16 precision for training on H200
)

# Initialize the SFT Trainer with our model, tokenizer, and dataset
trainer = SFTTrainer(
    model=model,
    tokenizer=tokenizer,
    args=training_args,
    train_dataset=conversations  # if using a HuggingFace Dataset, pass that instead
)

# Kick off training
trainer.train()`,
      },
    ],
  },
  {
    id: 'step6',
    number: '6',
    title: 'Merging LoRA into FP16 Weights',
    description: 'Merge LoRA adapters into base model for deployment',
    code: [
      {
        language: 'python',
        filename: 'merge_model.py',
        code: `# Merge LoRA weights into the base model and save in 16-bit precision
merged_model_dir = "./output/merged_model"

model.save_pretrained_merged(
    merged_model_dir,
    tokenizer,
    save_method="merged_16bit"
)

# This produces full model weights ready for inference`,
      },
    ],
  },
  {
    id: 'step7',
    number: '7',
    title: 'Saving and Uploading Model',
    description: 'Push merged model to Hugging Face Hub for inference',
    code: [
      {
        language: 'python',
        filename: 'upload_model.py',
        code: `from huggingface_hub import login

login(token="<YOUR_HF_TOKEN>")  # ensure auth for Hugging Face

# Push the merged model to the Hugging Face Hub (replace with your repo ID)
model.push_to_hub_merged(
    "MyOrg/llama3-finetuned-chatbot",
    tokenizer,
    save_method="merged_16bit"
)

# Your fine-tuned LLaMA 3 is now saved and ready to be deployed for inference!`,
      },
    ],
  },
]
