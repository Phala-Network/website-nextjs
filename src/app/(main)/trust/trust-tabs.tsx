'use client'

import {
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  ExternalLink,
  FileText,
  Globe,
  Search,
  Shield,
} from 'lucide-react'
import Image from 'next/image'
import { parseAsStringLiteral, useQueryState } from 'nuqs'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { useMemo, useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  type Control,
  complianceReports,
  controls,
  getControlCategories,
  getControlsByCategory,
  subprocessors,
} from '@/data/trust-center'

const VALID_TABS = ['compliance', 'controls', 'subprocessors'] as const
type TabValue = (typeof VALID_TABS)[number]

// Compliance Tab Component
function ComplianceTab() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-2xl font-semibold">
          Compliance Reports
        </h2>
        <p className="text-muted-foreground mt-2">
          Download our compliance certifications and audit reports to verify our
          security posture.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {complianceReports.map((report) => (
          <Card
            key={report.id}
            className="relative overflow-hidden flex flex-col h-full"
          >
            <CardHeader className="pb-4 flex-1 flex flex-col items-center">
              <div className="flex justify-center items-center py-4 h-48">
                {report.icon === 'hipaa' ? (
                  <Image
                    src="/trust/hipaa.svg"
                    alt="HIPAA"
                    width={140}
                    height={140}
                    className="opacity-90 hover:opacity-100 transition-opacity object-contain"
                  />
                ) : (
                  <Image
                    src="/trust/soc2.png"
                    alt="SOC 2"
                    width={140}
                    height={140}
                    className="opacity-90 hover:opacity-100 transition-opacity object-contain"
                  />
                )}
              </div>
              <div className="text-center">
                <CardTitle className="text-xl">{report.name}</CardTitle>
                <div className="h-8 flex items-center justify-center mt-2">
                  {report.complianceStatus === 'compliant' && (
                    <Badge
                      variant="outline"
                      className="text-green-500 border-green-500"
                    >
                      <Check className="mr-1 size-3" />
                      Compliant
                    </Badge>
                  )}
                </div>
              </div>
              <CardDescription className="text-center flex-1">
                {report.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {report.reportStatus === 'available' && report.downloadUrl ? (
                <Button asChild className="w-full">
                  <a
                    href={report.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 size-4" />
                    View Report
                  </a>
                </Button>
              ) : (
                <Button variant="outline" disabled className="w-full">
                  <Clock className="mr-2 size-4" />
                  Report Coming Soon
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

// Category Accordion Component
function CategoryAccordion({
  category,
  controls,
  isExpanded,
  onToggle,
}: {
  category: string
  controls: Control[]
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 bg-muted/30 px-4 py-3 text-left hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Shield className="size-4 text-muted-foreground" />
          <span className="font-medium">{category}</span>
          <Badge variant="secondary" className="text-xs">
            {controls.length} controls
          </Badge>
        </div>
        {isExpanded ? (
          <ChevronDown className="size-4 text-muted-foreground" />
        ) : (
          <ChevronRight className="size-4 text-muted-foreground" />
        )}
      </button>
      {isExpanded && (
        <div className="divide-y">
          {controls.map((control) => (
            <div
              key={control.id}
              className="flex items-start gap-4 px-4 py-3 hover:bg-muted/20 transition-colors"
            >
              <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-green-500/10 mt-0.5">
                <Check className="size-3.5 text-green-500" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-xs text-muted-foreground">
                    {control.id}
                  </span>
                  <span className="font-medium">{control.name}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {control.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// Controls Tab Component
function ControlsTab() {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set([getControlCategories()[0]]),
  )

  const categories = useMemo(() => getControlCategories(), [])

  const filteredControlsByCategory = useMemo(() => {
    const query = searchQuery.toLowerCase()
    return categories.reduce(
      (acc, category) => {
        const categoryControls = getControlsByCategory(category).filter(
          (control) =>
            control.name.toLowerCase().includes(query) ||
            control.description.toLowerCase().includes(query) ||
            control.id.toLowerCase().includes(query) ||
            category.toLowerCase().includes(query),
        )
        if (categoryControls.length > 0) {
          acc[category] = categoryControls
        }
        return acc
      },
      {} as Record<string, Control[]>,
    )
  }, [categories, searchQuery])

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev)
      if (next.has(category)) {
        next.delete(category)
      } else {
        next.add(category)
      }
      return next
    })
  }

  const expandAll = () => {
    setExpandedCategories(new Set(Object.keys(filteredControlsByCategory)))
  }

  const collapseAll = () => {
    setExpandedCategories(new Set())
  }

  const totalControls = controls.length
  const implementedControls = controls.filter(
    (c) => c.status === 'implemented',
  ).length

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-semibold">
          Security Controls
        </h2>
        <p className="text-muted-foreground mt-2">
          Our comprehensive security control framework ensures protection of
          your data and systems.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-full bg-green-500/10">
              <Check className="size-4 text-green-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{implementedControls}</p>
              <p className="text-xs text-muted-foreground">Implemented</p>
            </div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <p className="text-2xl font-bold">{totalControls}</p>
            <p className="text-xs text-muted-foreground">Total Controls</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search controls..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={expandAll}>
            Expand All
          </Button>
          <Button variant="outline" size="sm" onClick={collapseAll}>
            Collapse All
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        {Object.entries(filteredControlsByCategory).length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            No controls found matching your search.
          </div>
        ) : (
          Object.entries(filteredControlsByCategory).map(
            ([category, categoryControls]) => (
              <CategoryAccordion
                key={category}
                category={category}
                controls={categoryControls}
                isExpanded={expandedCategories.has(category)}
                onToggle={() => toggleCategory(category)}
              />
            ),
          )
        )}
      </div>
    </div>
  )
}

// Subprocessors Tab Component
function SubprocessorsTab() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-semibold">Subprocessors</h2>
        <p className="text-muted-foreground mt-2">
          We work with trusted third-party service providers to deliver our
          services. Below is a list of our current subprocessors and their
          purposes.
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subprocessor</TableHead>
                <TableHead>Purpose</TableHead>
                <TableHead>Jurisdiction</TableHead>
                <TableHead className="w-[100px]">Website</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subprocessors.map((sp) => (
                <TableRow key={sp.name}>
                  <TableCell className="font-medium">{sp.name}</TableCell>
                  <TableCell>{sp.purpose}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1.5">
                      <Globe className="size-3.5 text-muted-foreground" />
                      {sp.jurisdiction}
                    </div>
                  </TableCell>
                  <TableCell>
                    {sp.website && (
                      <a
                        href={sp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary hover:underline"
                      >
                        <ExternalLink className="size-3.5" />
                        <span className="sr-only">Visit {sp.name}</span>
                      </a>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Data Processing Agreement</CardTitle>
          <CardDescription>
            Our commitment to protecting your data extends to our relationships
            with subprocessors.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                <Check className="size-3.5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">
                All subprocessor agreements impose data protection obligations
                substantially similar to those in our main DPA.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                <Check className="size-3.5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">
                We notify customers of any intended additions or replacements to
                the subprocessor list, allowing opportunity to object on data
                protection grounds.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                <Check className="size-3.5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">
                Phala remains liable for subprocessor performance in accordance
                with our DPA terms.
              </p>
            </div>
          </div>
          <div className="pt-2">
            <Button variant="outline" asChild>
              <a
                href="https://phala.com/data-processing-agreement"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 size-4" />
                View Full DPA
                <ExternalLink className="ml-2 size-3.5" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Inner component that uses useQueryState
function TrustTabsInner() {
  const [tab, setTab] = useQueryState(
    'tab',
    parseAsStringLiteral(VALID_TABS).withDefault('compliance'),
  )

  return (
    <Tabs
      value={tab}
      onValueChange={(v) => setTab(v as TabValue)}
      className="space-y-8"
    >
      <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
        <TabsTrigger value="compliance">Compliance</TabsTrigger>
        <TabsTrigger value="controls">Controls</TabsTrigger>
        <TabsTrigger value="subprocessors">Subprocessors</TabsTrigger>
      </TabsList>

      <TabsContent value="compliance">
        <ComplianceTab />
      </TabsContent>

      <TabsContent value="controls">
        <ControlsTab />
      </TabsContent>

      <TabsContent value="subprocessors">
        <SubprocessorsTab />
      </TabsContent>
    </Tabs>
  )
}

// Main Tabs Component with NuqsAdapter wrapper
export default function TrustTabs() {
  return (
    <NuqsAdapter>
      <TrustTabsInner />
    </NuqsAdapter>
  )
}
