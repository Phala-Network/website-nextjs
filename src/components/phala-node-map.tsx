'use client'

import { ArrowLeft, Cpu, Filter, Zap } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useState } from 'react'

import { GlobeErrorBoundary } from '@/components/globe-error-boundary'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { type PhalaNode, phalaNodes } from '@/data/phala-nodes'

const ReactGlobeNetwork = dynamic(
  () =>
    import('@/components/react-globe-network').then(
      (mod) => mod.ReactGlobeNetwork,
    ),
  { ssr: false },
)

// Country flag emojis
const countryFlags: Record<string, string> = {
  US: '🇺🇸',
  GB: '🇬🇧',
  IN: '🇮🇳',
  FR: '🇫🇷',
}

export function PhalaNodeMap() {
  const [selectedNode, setSelectedNode] = useState<PhalaNode | null>(null)
  const [selectedNodeName, setSelectedNodeName] = useState<string | null>(null)
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [filterType, setFilterType] = useState<'all' | 'GPU' | 'CPU'>('all')
  const [globeInstance, setGlobeInstance] = useState<any>(null)

  // Get unique locations
  const locations = Array.from(
    new Set(phalaNodes.map((n) => n.location.city)),
  ).sort()

  // Filter nodes by selected location and type
  const filteredNodes = phalaNodes.filter((node) => {
    const locationMatch = selectedLocation
      ? node.location.city === selectedLocation
      : true
    const typeMatch =
      filterType === 'all'
        ? true
        : filterType === 'GPU'
          ? node.serverType === 'GPU TEE'
          : node.serverType === 'TDX'
    return locationMatch && typeMatch
  })

  // Calculate total stats based on vCPU and GPU requirements
  const totalVCPUs = phalaNodes.reduce((sum, node) => {
    // For CPU nodes, use cores count as vCPUs
    return sum + (node.cores || 0)
  }, 0)

  const totalGPUs = phalaNodes.reduce((sum, node) => {
    // Each GPU node has 8 H200 GPUs
    return sum + (node.gpuCount || 0)
  }, 0)

  const uniqueLocations = new Set(
    phalaNodes.map((n) => `${n.location.city},${n.location.country}`),
  ).size

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="bg-muted mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider">
            GLOBAL INFRASTRUCTURE
          </p>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            Phala Cloud Worldwide Network
          </h2>
          <p className="text-lg text-muted-foreground">
            Our distributed infrastructure spans multiple continents, providing
            low-latency access to confidential computing resources globally
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          <Card className="p-6">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="rounded-full bg-primary/10 p-3 mb-3">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <p className="text-4xl font-bold text-primary mb-1">
                {totalVCPUs}
              </p>
              <p className="text-sm text-muted-foreground">Total vCPUs</p>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="rounded-full bg-primary/10 p-3 mb-3">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <p className="text-4xl font-bold text-primary mb-1">
                {totalGPUs}
              </p>
              <p className="text-sm text-muted-foreground">Total H200 GPUs</p>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="rounded-full bg-primary/10 p-3 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-4xl font-bold text-primary mb-1">
                {uniqueLocations}
              </p>
              <p className="text-sm text-muted-foreground">Global Locations</p>
            </div>
          </Card>
        </div>

        {/* Globe and Controls Layout */}
        <div className="flex gap-8 mb-16">
          {/* Globe.gl Globe - Square, 50% width */}
          <div
            className="relative rounded-xl border overflow-hidden bg-background flex-shrink-0"
            style={{ width: '50%', aspectRatio: '1/1' }}
            suppressHydrationWarning
          >
            <GlobeErrorBoundary>
              <ReactGlobeNetwork
                nodes={phalaNodes}
                onNodeClick={(node) => {
                  console.log('onNodeClick called with:', node)
                  setSelectedNode(node)
                  setSelectedNodeName(node.name)
                  setSelectedLocation(node.location.city)
                }}
                onGlobeReady={(globe) => {
                  console.log('Globe ready, setting instance')
                  setGlobeInstance(globe)
                }}
              />
            </GlobeErrorBoundary>
          </div>

          {/* Right Side Panel - Same height as globe */}
          <div
            className="flex flex-col gap-4 flex-1"
            style={{ aspectRatio: '1/1' }}
          >
            {/* Node Details Card - Always visible, takes full height */}
            <Card className="p-6 flex flex-col h-full">
              {selectedNode ? (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSelectedNode(null)
                        setSelectedNodeName(null)
                      }}
                      className="gap-1"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </Button>
                    <h3 className="text-lg font-bold">Node Details</h3>
                  </div>
                  <div className="space-y-3 flex-1 overflow-y-auto">
                    <div>
                      <p className="text-sm text-muted-foreground">Product</p>
                      <p className="font-medium">{selectedNode.productName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Hardware</p>
                      <p className="font-medium">{selectedNode.hardware}</p>
                    </div>
                    {selectedNode.cores && (
                      <div>
                        <p className="text-sm text-muted-foreground">Cores</p>
                        <p className="font-medium">{selectedNode.cores}</p>
                      </div>
                    )}
                    {selectedNode.gpuCount && (
                      <div>
                        <p className="text-sm text-muted-foreground">GPUs</p>
                        <p className="font-medium">
                          {selectedNode.gpuType} × {selectedNode.gpuCount}
                        </p>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-muted-foreground">Memory</p>
                      <p className="font-medium">{selectedNode.ram}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">
                        {selectedNode.location.city},{' '}
                        {selectedNode.location.country}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Operator</p>
                      <p className="font-medium">{selectedNode.operator}</p>
                    </div>
                    {selectedNode.remark && (
                      <div>
                        <p className="text-sm text-muted-foreground">Notes</p>
                        <p className="font-medium text-sm">
                          {selectedNode.remark}
                        </p>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {/* Header with Filter */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">
                      Nodes ({filteredNodes.length})
                    </h3>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" size="sm" className="gap-2">
                          <Filter className="h-4 w-4" />
                          Filter
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80" align="end">
                        <div className="space-y-4">
                          {/* Type Filter */}
                          <div>
                            <p className="text-sm font-medium mb-2">
                              Node Type
                            </p>
                            <div className="flex gap-2">
                              <button
                                onClick={() => setFilterType('all')}
                                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                                  filterType === 'all'
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-muted hover:bg-muted/80'
                                }`}
                              >
                                All
                              </button>
                              <button
                                onClick={() => setFilterType('GPU')}
                                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                                  filterType === 'GPU'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-muted hover:bg-muted/80'
                                }`}
                              >
                                GPU
                              </button>
                              <button
                                onClick={() => setFilterType('CPU')}
                                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                                  filterType === 'CPU'
                                    ? 'bg-green-400 text-black'
                                    : 'bg-muted hover:bg-muted/80'
                                }`}
                              >
                                CPU
                              </button>
                            </div>
                          </div>

                          {/* Location Filter */}
                          <div>
                            <p className="text-sm font-medium mb-2">Location</p>
                            <div className="flex flex-wrap gap-2">
                              <button
                                onClick={() => setSelectedLocation(null)}
                                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                                  selectedLocation === null
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-muted hover:bg-muted/80'
                                }`}
                              >
                                All
                              </button>
                              {locations.map((location) => (
                                <button
                                  key={location}
                                  onClick={() => setSelectedLocation(location)}
                                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                                    selectedLocation === location
                                      ? 'bg-primary text-primary-foreground'
                                      : 'bg-muted hover:bg-muted/80'
                                  }`}
                                >
                                  {location}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Node List */}
                  <div className="space-y-2 flex-1 overflow-y-auto pr-2">
                    {filteredNodes.map((node) => (
                      <button
                        key={node.name}
                        onClick={() => {
                          setSelectedNode(node)
                          setSelectedNodeName(node.name)
                          // Rotate globe to node location
                          if (globeInstance) {
                            globeInstance.pointOfView(
                              {
                                lat: node.location.lat,
                                lng: node.location.lon,
                                altitude: 2,
                              },
                              1000,
                            ) // 1000ms transition
                          }
                        }}
                        className={`w-full p-3 rounded-lg border-2 transition-all text-left hover:border-primary hover:shadow-md ${
                          selectedNodeName === node.name
                            ? 'border-primary bg-primary/5'
                            : 'border-border bg-background'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xl">
                            {countryFlags[node.location.countryCode]}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-sm truncate">
                              {node.productName}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {node.location.city}
                            </p>
                          </div>
                          <Badge
                            variant={
                              node.serverType === 'GPU TEE'
                                ? 'default'
                                : 'secondary'
                            }
                            className="text-xs shrink-0"
                          >
                            {node.serverType === 'GPU TEE' ? 'GPU' : 'CPU'}
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {node.hardware}
                          {node.cores && ` • ${node.cores} cores`}
                          {node.gpuCount &&
                            ` • ${node.gpuType} x${node.gpuCount}`}
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
