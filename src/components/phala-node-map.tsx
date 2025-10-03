'use client'

import { Server } from 'lucide-react'
import { useState } from 'react'

import { Globe } from '@/components/magicui/globe'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { type PhalaNode, phalaNodes } from '@/data/phala-nodes'

export function PhalaNodeMap() {
  const [selectedNode, setSelectedNode] = useState<PhalaNode | null>(null)

  // Convert nodes to globe markers
  const markers = phalaNodes.map((node) => ({
    location: [node.location.lat, node.location.lon] as [number, number],
    size: node.serverType === 'GPU TEE' ? 0.08 : 0.05,
  }))

  // Group nodes by location for better display
  const nodesByLocation = phalaNodes.reduce(
    (acc, node) => {
      const key = `${node.location.lat},${node.location.lon}`
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(node)
      return acc
    },
    {} as Record<string, PhalaNode[]>,
  )

  const locations = Object.entries(nodesByLocation).map(([key, nodes]) => ({
    location: key,
    nodes,
    primary: nodes[0],
  }))

  return (
    <section className="py-32 bg-muted/30">
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

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Globe Visualization */}
          <div className="relative flex items-center justify-center min-h-[600px]">
            <Globe
              className="top-0"
              config={{
                phi: 0,
                theta: 0.3,
                dark: 1,
                diffuse: 3,
                mapSamples: 16000,
                mapBrightness: 1.5,
                baseColor: [1, 1, 1],
                markerColor: [251 / 255, 146 / 255, 60 / 255],
                glowColor: [1, 1, 1],
              }}
              markers={markers}
            />
          </div>

          {/* Node List */}
          <div className="flex flex-col gap-4 max-h-[600px] overflow-y-auto pr-4">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">Active Nodes</h3>
              <div className="flex gap-2 text-sm text-muted-foreground">
                <Badge variant="secondary">
                  {phalaNodes.filter((n) => n.serverType === 'TDX').length} TDX
                  Nodes
                </Badge>
                <Badge variant="secondary">
                  {phalaNodes.filter((n) => n.serverType === 'GPU TEE').length}{' '}
                  GPU TEE Nodes
                </Badge>
                <Badge variant="secondary">
                  {locations.length} Locations
                </Badge>
              </div>
            </div>

            {locations.map(({ location, nodes, primary }) => (
              <Card
                key={location}
                className="p-6 hover:bg-muted/50 transition-colors cursor-pointer"
                onClick={() => setSelectedNode(primary)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                    <Server className="size-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">
                        {primary.location.city}, {primary.location.countryCode}
                      </h4>
                      <Badge
                        variant={
                          primary.serverType === 'GPU TEE'
                            ? 'default'
                            : 'secondary'
                        }
                      >
                        {primary.serverType}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {primary.operator}
                    </p>

                    {nodes.length === 1 ? (
                      <NodeDetails node={nodes[0]} />
                    ) : (
                      <div className="space-y-2">
                        <p className="text-xs font-medium text-muted-foreground">
                          {nodes.length} nodes at this location
                        </p>
                        {nodes.map((node) => (
                          <div
                            key={node.name}
                            className="text-xs p-2 bg-muted/30 rounded"
                          >
                            <div className="font-mono font-semibold mb-1">
                              {node.name}
                            </div>
                            <NodeDetails node={node} compact />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid gap-6 md:grid-cols-4">
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {phalaNodes.length}
            </div>
            <div className="text-sm text-muted-foreground">Active Nodes</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {locations.length}
            </div>
            <div className="text-sm text-muted-foreground">
              Global Locations
            </div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {
                phalaNodes.filter((n) => n.gpuCount && n.gpuCount > 0)
                  .length
              }
            </div>
            <div className="text-sm text-muted-foreground">GPU TEE Nodes</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              99.9%
            </div>
            <div className="text-sm text-muted-foreground">Uptime SLA</div>
          </Card>
        </div>
      </div>
    </section>
  )
}

function NodeDetails({
  node,
  compact = false,
}: {
  node: PhalaNode
  compact?: boolean
}) {
  const specs = []

  if (node.hardware) specs.push(node.hardware)
  if (node.cores) specs.push(`${node.cores} cores`)
  if (node.gpuCount && node.gpuType)
    specs.push(`${node.gpuType} x${node.gpuCount}`)
  if (node.ram) specs.push(node.ram)

  return (
    <div className={compact ? 'space-y-0.5' : 'space-y-1'}>
      {specs.length > 0 && (
        <p className={compact ? 'text-xs' : 'text-sm'}>
          <span className="text-muted-foreground">Hardware: </span>
          <span className="font-medium">{specs.join(' • ')}</span>
        </p>
      )}
      {node.host && (
        <p className={compact ? 'text-xs' : 'text-sm'}>
          <span className="text-muted-foreground">Host: </span>
          <span className="font-mono text-xs">{node.host}</span>
        </p>
      )}
      {node.ip && (
        <p className={compact ? 'text-xs' : 'text-sm'}>
          <span className="text-muted-foreground">IP: </span>
          <span className="font-mono text-xs">{node.ip}</span>
        </p>
      )}
      {node.remark && (
        <p className={compact ? 'text-xs' : 'text-sm'}>
          <span className="text-muted-foreground">Note: </span>
          <span className="italic">{node.remark}</span>
        </p>
      )}
    </div>
  )
}
