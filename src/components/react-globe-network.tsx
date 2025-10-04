'use client'

import { useEffect, useRef, useState } from 'react'
import Globe from 'react-globe.gl'
import type { PhalaNode } from '@/data/phala-nodes'

interface ReactGlobeNetworkProps {
  nodes: PhalaNode[]
  onNodeClick?: (node: PhalaNode) => void
  onGlobeReady?: (globe: any) => void
}

export function ReactGlobeNetwork({ nodes, onNodeClick, onGlobeReady }: ReactGlobeNetworkProps) {
  const globeRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [countriesData, setCountriesData] = useState<any>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!containerRef.current) return

    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setDimensions({ width, height })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [isMounted])

  useEffect(() => {
    if (!isMounted) return

    fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(setCountriesData)
  }, [isMounted])

  useEffect(() => {
    if (globeRef.current && onGlobeReady && countriesData) {
      onGlobeReady(globeRef.current)
    }
  }, [onGlobeReady, countriesData])

  if (!isMounted || !countriesData) {
    return (
      <div ref={containerRef} className="w-full h-full flex items-center justify-center bg-muted/20">
        <div className="text-muted-foreground">Loading globe...</div>
      </div>
    )
  }

  if (dimensions.width === 0 || dimensions.height === 0) {
    return (
      <div ref={containerRef} className="w-full h-full flex items-center justify-center bg-muted/20">
        <div className="text-muted-foreground">Initializing...</div>
      </div>
    )
  }

  const GPU_TO_VCPU_RATIO = 200

  const nodesByLocation = new Map<string, PhalaNode[]>()
  nodes.forEach((node) => {
    const key = `${node.location.city}-${node.location.countryCode}`
    const group = nodesByLocation.get(key) || []
    group.push(node)
    nodesByLocation.set(key, group)
  })

  const locationMeta = new Map<string, any>()
  nodesByLocation.forEach((locationNodes, key) => {
    const hasGPU = locationNodes.some(n => n.serverType === 'GPU TEE')
    const gpuCount = locationNodes.filter(n => n.serverType === 'GPU TEE').reduce((sum, n) => sum + (n.gpuCount || 0), 0)
    const vcpuCount = locationNodes.filter(n => n.serverType !== 'GPU TEE').reduce((sum, n) => sum + (n.cores || 0), 0)

    locationMeta.set(key, {
      city: locationNodes[0].location.city,
      countryCode: locationNodes[0].location.countryCode,
      lat: locationNodes[0].location.lat,
      lon: locationNodes[0].location.lon,
      hasGPU,
      gpuCount,
      vcpuCount,
      equivalentVCPUs: gpuCount * GPU_TO_VCPU_RATIO + vcpuCount,
      nodes: locationNodes,
      color: hasGPU ? '#8DD7FF' : '#BAE730'
    })
  })

  const countryNodeMap = new Map<string, any>()
  locationMeta.forEach((meta) => {
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
    if (!meta.hasGPU) countryData.hasCPU = true
    countryData.locations.push(meta)
  })

  const markersData = Array.from(locationMeta.values())

  const ringsData = markersData.map(loc => ({
    lat: loc.lat,
    lng: loc.lon,
    maxR: 5,
    propagationSpeed: 2,
    repeatPeriod: 2000,
    color: loc.color
  }))

  const arcData: any[] = []
  const locations = Array.from(locationMeta.values())
  locations.forEach(sourceLocation => {
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
        color: sourceLocation.hasGPU ? ['#8DD7FF', '#6DB7DF'] : ['#BAE730', '#9AC720']
      })
    })
  })

  return (
    <div ref={containerRef} className="w-full h-full">
      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
        hexPolygonsData={countriesData?.features}
        hexPolygonResolution={3}
        hexPolygonMargin={0.3}
        hexPolygonColor={(d: any) => {
          let countryCode = d.properties.ISO_A2
          if (countryCode === '-99' && d.properties.ADMIN === 'France') {
            countryCode = 'FR'
          }
          const nodeData = countryNodeMap.get(countryCode)
          if (!nodeData) return '#6a6a6a'
          return nodeData.hasGPU ? '#8DD7FF' : '#BAE730'
        }}
        htmlElementsData={markersData}
        htmlLat={(d: any) => d.lat}
        htmlLng={(d: any) => d.lon}
        htmlElement={(d: any) => {
          const wrapper = document.createElement('div')
          wrapper.style.width = '40px'
          wrapper.style.height = '40px'
          wrapper.style.display = 'flex'
          wrapper.style.alignItems = 'center'
          wrapper.style.justifyContent = 'center'
          wrapper.style.cursor = 'pointer'

          const el = document.createElement('div')
          el.style.width = '16px'
          el.style.height = '16px'
          el.style.borderRadius = '50%'
          el.style.backgroundColor = d.color
          el.style.border = '2px solid white'
          el.style.boxShadow = `0 0 15px ${d.color}`
          el.style.pointerEvents = 'none'

          wrapper.appendChild(el)
          wrapper.addEventListener('click', (e) => {
            e.stopPropagation()
            if (onNodeClick && d.nodes[0]) {
              onNodeClick(d.nodes[0])
            }
          })
          return wrapper
        }}
        ringsData={ringsData}
        ringColor={(d: any) => d.color}
        ringMaxRadius="maxR"
        ringPropagationSpeed="propagationSpeed"
        ringRepeatPeriod="repeatPeriod"
        arcsData={arcData}
        arcColor="color"
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={2000}
        arcStroke={0.5}
        arcAltitude={0.3}
      />
    </div>
  )
}
