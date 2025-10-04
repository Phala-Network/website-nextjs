'use client'

import { useEffect, useRef } from 'react'
import * as topojson from 'topojson-client'
import * as THREE from 'three'
import type { PhalaNode } from '@/data/phala-nodes'

interface GlobeNetworkProps {
  nodes: PhalaNode[]
  onNodeClick?: (node: PhalaNode) => void
  onGlobeReady?: (globe: any) => void
}

export function GlobeNetwork({ nodes, onNodeClick, onGlobeReady }: GlobeNetworkProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const globeRef = useRef<any>(null)

  console.log('GlobeNetwork component rendered with', nodes.length, 'nodes')

  useEffect(() => {
    console.log('useEffect running, containerRef.current:', containerRef.current)

    if (!containerRef.current) {
      console.log('No container ref, exiting')
      return
    }

    let globe: any = null

    const initGlobe = async () => {
      console.log('initGlobe starting...')
      const GlobeGl = await import('globe.gl')
      const Globe = GlobeGl.default

      if (!containerRef.current) return

      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight || containerRef.current.clientWidth

      console.log('Creating globe with dimensions:', width, height)

      if (width === 0 || height === 0) {
        console.error('Container dimensions are 0!')
        return
      }

      // 1 GPU = 200 vCPUs equivalent
      const GPU_TO_VCPU_RATIO = 200

      // Create node data map - group by location for US regions
      const nodesByLocation = new Map<string, PhalaNode[]>()

      nodes.forEach((node) => {
        const key = `${node.location.city}-${node.location.countryCode}`
        const group = nodesByLocation.get(key) || []
        group.push(node)
        nodesByLocation.set(key, group)
      })

      // Create location metadata for polygon coloring
      const locationMeta = new Map<string, any>()
      nodesByLocation.forEach((locationNodes, key) => {
        const hasGPU = locationNodes.some(n => n.serverType === 'GPU TEE')
        const hasCPU = locationNodes.some(n => n.serverType !== 'GPU TEE')
        const gpuCount = locationNodes.filter(n => n.serverType === 'GPU TEE').reduce((sum, n) => sum + (n.gpuCount || 0), 0)
        const vcpuCount = locationNodes.filter(n => n.serverType !== 'GPU TEE').reduce((sum, n) => sum + (n.cores || 0), 0)
        const equivalentVCPUs = gpuCount * GPU_TO_VCPU_RATIO + vcpuCount

        locationMeta.set(key, {
          city: locationNodes[0].location.city,
          countryCode: locationNodes[0].location.countryCode,
          lat: locationNodes[0].location.lat,
          lon: locationNodes[0].location.lon,
          hasGPU,
          hasCPU,
          gpuCount,
          vcpuCount,
          equivalentVCPUs,
          nodes: locationNodes
        })
      })

      console.log('Locations with nodes:', Array.from(locationMeta.keys()))

      globe = new Globe(containerRef.current)
        .backgroundColor('rgba(0,0,0,0)')
        .showGlobe(true)
        .showAtmosphere(false)
        .globeImageUrl('//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg')
        .width(width)
        .height(height)
        .pointOfView({ altitude: 2 })

      // Load countries and create hexed polygons (like the example)
      fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson')
        .then(res => res.json())
        .then((countries) => {
          // Build a map of country code -> node metadata
          const countryNodeMap = new Map<string, any>()

          locationMeta.forEach((meta, key) => {
            const countryCode = meta.countryCode
            if (!countryNodeMap.has(countryCode)) {
              countryNodeMap.set(countryCode, {
                hasGPU: false,
                hasCPU: false,
                locations: []
              })
            }
            const countryData = countryNodeMap.get(countryCode)!
            if (meta.hasGPU) countryData.hasGPU = true
            if (meta.hasCPU) countryData.hasCPU = true
            countryData.locations.push(meta)
          })

          console.log('Country node map:', countryNodeMap)
          console.log('Country codes in map:', Array.from(countryNodeMap.keys()))

          // Check France in the GeoJSON
          const franceFeature = countries.features.find((f: any) =>
            f.properties.ADMIN === 'France' ||
            f.properties.ISO_A2 === 'FR' ||
            f.properties.NAME === 'France'
          )
          console.log('France feature in GeoJSON:', franceFeature?.properties)

          // LAYER 1: Hexed Polygons - show ALL countries with GPU/CPU colors
          globe
            .hexPolygonsData(countries.features)
            .hexPolygonResolution(3)
            .hexPolygonMargin(0.3)
            .hexPolygonUseDots(true)
            .hexPolygonColor((d: any) => {
              let countryCode = d.properties.ISO_A2

              // Handle special cases where ISO_A2 is non-standard
              if (countryCode === '-99' && d.properties.ADMIN === 'France') {
                countryCode = 'FR'
              }

              const nodeData = countryNodeMap.get(countryCode)

              if (!nodeData) {
                // Countries WITHOUT nodes - light grey
                return '#6a6a6a'
              }

              // Countries WITH nodes - blue for GPU, green for CPU
              return nodeData.hasGPU ? '#8DD7FF' : '#BAE730'
            })
            .hexPolygonAltitude(0.001)
            .onHexPolygonClick(() => {}) // Disable clicks on hexagons

          // LAYER 2: HTML Markers - mark cities with CPU/GPU
          const cityMarkers = Array.from(locationMeta.values()).map(meta => ({
            lat: meta.lat,
            lng: meta.lon,
            city: meta.city,
            countryCode: meta.countryCode,
            hasGPU: meta.hasGPU,
            hasCPU: meta.hasCPU,
            gpuCount: meta.gpuCount,
            vcpuCount: meta.vcpuCount,
            equivalentVCPUs: meta.equivalentVCPUs,
            nodes: meta.nodes,
            color: meta.hasGPU ? '#8DD7FF' : '#BAE730'
          }))

          globe
            .htmlElementsData(cityMarkers)
            .htmlLat('lat')
            .htmlLng('lng')
            .htmlAltitude(0.01)
            .htmlElement((d: any) => {
              // Create a larger clickable wrapper
              const wrapper = document.createElement('div')
              wrapper.style.width = '40px'
              wrapper.style.height = '40px'
              wrapper.style.display = 'flex'
              wrapper.style.alignItems = 'center'
              wrapper.style.justifyContent = 'center'
              wrapper.style.cursor = 'pointer'
              wrapper.style.position = 'relative'

              // Create the visible marker
              const el = document.createElement('div')
              el.style.width = '16px'
              el.style.height = '16px'
              el.style.borderRadius = '50%'
              el.style.backgroundColor = d.color
              el.style.border = '2px solid white'
              el.style.boxShadow = `0 0 15px ${d.color}`
              el.style.pointerEvents = 'none' // Let wrapper handle clicks

              wrapper.appendChild(el)

              wrapper.addEventListener('click', (e) => {
                e.stopPropagation()
                console.log('Marker clicked:', d.nodes[0])
                if (onNodeClick && d.nodes[0]) {
                  onNodeClick(d.nodes[0])
                }
              })

              return wrapper
            })

          // LAYER 3: Ripples - spread colors based on node numbers (much larger and stronger)
          const rippleData = Array.from(locationMeta.values()).map(meta => ({
            lat: meta.lat,
            lng: meta.lon,
            // Stronger color with higher opacity
            color: meta.hasGPU ?
              ['#8DD7FF', '#6DB7DF', '#4D97BF'] :  // Blue gradient
              ['#BAE730', '#9AC720', '#7AA710'],   // Green gradient
            // Much larger ripples - scale up significantly
            maxRadius: Math.min(50, 15 + (meta.equivalentVCPUs / 500)),
            propagationSpeed: 2,
            repeatPeriod: 2000
          }))

          globe
            .ringsData(rippleData)
            .ringLat('lat')
            .ringLng('lng')
            .ringAltitude(0.002)
            .ringColor('color')
            .ringMaxRadius('maxRadius')
            .ringPropagationSpeed('propagationSpeed')
            .ringRepeatPeriod('repeatPeriod')

          // LAYER 4: Arc Links - nodes sending connections to each other
          const locations = Array.from(locationMeta.values())
          const arcData: any[] = []

          locations.forEach(sourceLocation => {
            // Each node sends random arcs to other nodes
            const numConnections = Math.floor(Math.random() * (locations.length - 1)) + 1
            const shuffledTargets = locations
              .filter(loc => loc !== sourceLocation)
              .sort(() => Math.random() - 0.5)
              .slice(0, numConnections)

            shuffledTargets.forEach(targetLocation => {
              arcData.push({
                startLat: sourceLocation.lat,
                startLng: sourceLocation.lon,
                endLat: targetLocation.lat,
                endLng: targetLocation.lon,
                color: sourceLocation.hasGPU ?
                  ['#8DD7FF', '#6DB7DF'] :  // Blue gradient for GPU
                  ['#BAE730', '#9AC720'],   // Green gradient for CPU
              })
            })
          })

          globe
            .arcsData(arcData)
            .arcStartLat('startLat')
            .arcStartLng('startLng')
            .arcEndLat('endLat')
            .arcEndLng('endLng')
            .arcColor('color')
            .arcDashLength(0.4)
            .arcDashGap(0.2)
            .arcDashAnimateTime(2000)
            .arcStroke(0.5)
            .arcAltitude(0.3)
            .hexPolygonLabel(({ properties: d }: any) => {
              const countryCode = d.ISO_A2
              const countryName = d.ADMIN

              // Collect all nodes in this country
              const countryNodes: PhalaNode[] = []
              locationMeta.forEach((meta, key) => {
                if (key.endsWith(`-${countryCode}`)) {
                  countryNodes.push(...meta.nodes)
                }
              })

              if (countryNodes.length === 0) {
                return `<b>${countryName}</b>`
              }

              const gpuCount = countryNodes.filter(n => n.serverType === 'GPU TEE').reduce((sum, n) => sum + (n.gpuCount || 0), 0)
              const vcpuCount = countryNodes.filter(n => n.serverType !== 'GPU TEE').reduce((sum, n) => sum + (n.cores || 0), 0)
              const equivalentVCPUs = gpuCount * GPU_TO_VCPU_RATIO + vcpuCount

              return `
                <div style="background: rgba(0,0,0,0.9); padding: 12px; border-radius: 8px; color: white;">
                  <div style="font-size: 16px; font-weight: bold; margin-bottom: 6px;">${countryName}</div>
                  ${gpuCount > 0 ? `<div style="font-size: 14px; color: #8DD7FF; margin-bottom: 4px;">⬢ ${gpuCount} GPUs (${gpuCount * GPU_TO_VCPU_RATIO} equiv. vCPUs)</div>` : ''}
                  ${vcpuCount > 0 ? `<div style="font-size: 14px; color: #BAE730; margin-bottom: 4px;">⬢ ${vcpuCount} vCPUs</div>` : ''}
                  <div style="font-size: 15px; font-weight: 600; color: #fff; margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.2);">
                    Total: ${equivalentVCPUs.toLocaleString()} equiv. vCPUs
                  </div>
                  <div style="font-size: 12px; opacity: 0.7; margin-top: 6px;">
                    ${countryNodes.length} node${countryNodes.length > 1 ? 's' : ''}
                  </div>
                </div>
              `
            })
            .onHexPolygonClick((polygon: any) => {
              const countryCode = polygon.properties?.ISO_A2

              // Find first node in this country
              let firstNode: PhalaNode | null = null
              locationMeta.forEach((meta, key) => {
                if (key.endsWith(`-${countryCode}`) && meta.nodes.length > 0) {
                  firstNode = meta.nodes[0]
                }
              })

              if (onNodeClick && firstNode) {
                onNodeClick(firstNode)
              }
            })
            .onHexPolygonHover((polygon: any) => {
              if (containerRef.current) {
                containerRef.current.style.cursor = polygon ? 'pointer' : 'grab'
              }
            })
        })

      console.log('Globe instance created')
      console.log('Globe renderer:', globe.renderer())
      console.log('Globe scene:', globe.scene())
      console.log('Container children:', containerRef.current?.children)

      // Enable controls without auto-rotate (to prevent any visual shimmer)
      setTimeout(() => {
        const controls = globe.controls()
        if (controls) {
          controls.autoRotate = false
          controls.enableDamping = true
          controls.dampingFactor = 0.1
        }

        // Notify parent component that globe is ready
        if (onGlobeReady) {
          onGlobeReady(globe)
        }
      }, 100)

      globeRef.current = globe
      console.log('Globe created successfully')
    }

    initGlobe()

    return () => {
      if (globeRef.current) {
        globeRef.current._destructor()
      }
    }
  }, [nodes, onNodeClick, onGlobeReady])

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{ position: 'relative' }}
    />
  )
}
