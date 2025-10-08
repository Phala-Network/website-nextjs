"use client";

import React, { createContext, useContext, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type BundledLanguage = "javascript" | "python" | "go" | "ruby" | "typescript" | "bash";

interface CodeBlockData {
  language: string;
  filename: string;
  code: string;
}

interface CodeBlockContextValue {
  data: CodeBlockData[];
  value: string;
  setValue: (value: string) => void;
}

const CodeBlockContext = createContext<CodeBlockContextValue | null>(null);

function useCodeBlock() {
  const context = useContext(CodeBlockContext);
  if (!context) {
    throw new Error("CodeBlock components must be used within CodeBlock");
  }
  return context;
}

interface CodeBlockProps {
  data: CodeBlockData[];
  value: string;
  className?: string;
  children: React.ReactNode;
}

export function CodeBlock({ data, value, className, children }: CodeBlockProps) {
  const [selectedValue, setSelectedValue] = useState(value);

  return (
    <CodeBlockContext.Provider value={{ data, value: selectedValue, setValue: setSelectedValue }}>
      <div className={cn("rounded-lg border bg-muted/50", className)}>
        {children}
      </div>
    </CodeBlockContext.Provider>
  );
}

interface CodeBlockHeaderProps {
  children: React.ReactNode;
}

export function CodeBlockHeader({ children }: CodeBlockHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b px-4 py-2">
      {children}
    </div>
  );
}

interface CodeBlockFilesProps {
  children: (item: CodeBlockData) => React.ReactNode;
}

export function CodeBlockFiles({ children }: CodeBlockFilesProps) {
  const { data } = useCodeBlock();
  return (
    <div className="flex items-center gap-2">
      {data.map((item) => children(item))}
    </div>
  );
}

interface CodeBlockFilenameProps {
  value: string;
  children: React.ReactNode;
}

export function CodeBlockFilename({ value, children }: CodeBlockFilenameProps) {
  const { value: selectedValue, setValue } = useCodeBlock();
  const isSelected = selectedValue === value;

  return (
    <button
      onClick={() => setValue(value)}
      className={cn(
        "rounded px-3 py-1 text-sm transition-colors",
        isSelected
          ? "bg-background text-foreground"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {children}
    </button>
  );
}

interface CodeBlockCopyButtonProps {
  onCopy?: () => void;
  onError?: () => void;
}

export function CodeBlockCopyButton({ onCopy, onError }: CodeBlockCopyButtonProps) {
  const { data, value } = useCodeBlock();
  const [copied, setCopied] = useState(false);

  const currentItem = data.find((item) => item.language === value);

  const handleCopy = async () => {
    if (!currentItem) return;

    try {
      await navigator.clipboard.writeText(currentItem.code);
      setCopied(true);
      onCopy?.();
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      onError?.();
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="rounded p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      aria-label="Copy code"
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
    </button>
  );
}

interface CodeBlockBodyProps {
  children: (item: CodeBlockData) => React.ReactNode;
}

export function CodeBlockBody({ children }: CodeBlockBodyProps) {
  const { data } = useCodeBlock();
  return <div>{data.map((item) => children(item))}</div>;
}

interface CodeBlockItemProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export function CodeBlockItem({ value, className, children }: CodeBlockItemProps) {
  const { value: selectedValue } = useCodeBlock();

  if (selectedValue !== value) return null;

  return <div className={className}>{children}</div>;
}

interface CodeBlockContentProps {
  language: BundledLanguage;
  children: string;
}

export function CodeBlockContent({ language, children }: CodeBlockContentProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={oneDark}
      customStyle={{
        margin: 0,
        padding: "1rem",
        background: "transparent",
        fontSize: "0.875rem",
      }}
      showLineNumbers={false}
    >
      {children}
    </SyntaxHighlighter>
  );
}
