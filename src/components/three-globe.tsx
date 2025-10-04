'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef, useState, useMemo } from 'react'
import * as THREE from 'three'
import type { PhalaNode } from '@/data/phala-nodes'

interface NodeMarker {
  position: THREE.Vector3
  node: PhalaNode
  color: string
  count: number
}

interface ThreeGlobeProps {
  nodes: PhalaNode[]
  onNodeClick?: (node: PhalaNode) => void
}

function GlobeSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  // Create earth-like material similar to hero217
  const material = useMemo(() => {
    return new THREE.MeshPhongMaterial({
      color: 0x1a2332,
      emissive: 0x0a0f1a,
      specular: 0x111111,
      shininess: 5,
      transparent: true,
      opacity: 0.95,
    })
  }, [])

  return (
    <mesh ref={meshRef} material={material}>
      <sphereGeometry args={[2, 64, 64]} />
    </mesh>
  )
}

function NodeMarkers({ nodes, onNodeClick }: ThreeGlobeProps) {
  const groupRef = useRef<THREE.Group>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  // Group nodes by location to calculate intensity
  const nodeMarkers = useMemo(() => {
    const locationGroups = new Map<string, PhalaNode[]>()

    nodes.forEach((node) => {
      const key = `${node.location.lat},${node.location.lon}`
      const group = locationGroups.get(key) || []
      group.push(node)
      locationGroups.set(key, group)
    })

    const markers: NodeMarker[] = []

    locationGroups.forEach((locationNodes) => {
      locationNodes.forEach((node) => {
        // Convert lat/lon to 3D position on sphere
        const phi = (90 - node.location.lat) * (Math.PI / 180)
        const theta = (node.location.lon + 180) * (Math.PI / 180)
        const radius = 2.01 // Slightly above sphere surface

        const position = new THREE.Vector3(
          -(radius * Math.sin(phi) * Math.cos(theta)),
          radius * Math.cos(phi),
          radius * Math.sin(phi) * Math.sin(theta),
        )

        // Color based on type: GPU = blue, CPU = Phala green
        const color = node.serverType === 'GPU TEE' ? '#3b82f6' : '#86efac'

        markers.push({
          position,
          node,
          color,
          count: locationNodes.length,
        })
      })
    })

    return markers
  }, [nodes])

  // Rotate the group slowly
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001
    }
  })

  return (
    <group ref={groupRef}>
      {nodeMarkers.map((marker, index) => {
        const isHovered = hoveredNode === marker.node.name
        const baseSize = 0.03
        // Size based on count at location (more nodes = bigger marker)
        const size = baseSize * (1 + marker.count * 0.3)

        return (
          <group key={`${marker.node.name}-${index}`}>
            {/* Main marker */}
            <mesh
              position={marker.position}
              onClick={() => onNodeClick?.(marker.node)}
              onPointerOver={() => setHoveredNode(marker.node.name)}
              onPointerOut={() => setHoveredNode(null)}
            >
              <sphereGeometry args={[size, 16, 16]} />
              <meshBasicMaterial color={marker.color} />
            </mesh>

            {/* Glow effect - size based on node count */}
            <mesh position={marker.position}>
              <sphereGeometry args={[size * (1.5 + marker.count * 0.2), 16, 16]} />
              <meshBasicMaterial
                color={marker.color}
                transparent
                opacity={0.2 + marker.count * 0.05}
              />
            </mesh>

            {/* Outer halo when hovered */}
            {isHovered && (
              <mesh position={marker.position}>
                <sphereGeometry args={[size * 2.5, 16, 16]} />
                <meshBasicMaterial color={marker.color} transparent opacity={0.3} />
              </mesh>
            )}

            {/* Vertical beam from surface */}
            <mesh position={marker.position}>
              <cylinderGeometry args={[size * 0.3, size * 0.3, 0.3, 8]} />
              <meshBasicMaterial color={marker.color} transparent opacity={0.4} />
            </mesh>
          </group>
        )
      })}
    </group>
  )
}

function ConnectionLines({ nodes }: { nodes: PhalaNode[] }) {
  const lines = useMemo(() => {
    const connections: { start: THREE.Vector3; end: THREE.Vector3; color: string }[] = []

    // Create connections between nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const node1 = nodes[i]
        const node2 = nodes[j]

        // Convert to 3D positions
        const phi1 = (90 - node1.location.lat) * (Math.PI / 180)
        const theta1 = (node1.location.lon + 180) * (Math.PI / 180)
        const phi2 = (90 - node2.location.lat) * (Math.PI / 180)
        const theta2 = (node2.location.lon + 180) * (Math.PI / 180)
        const radius = 2.02

        const pos1 = new THREE.Vector3(
          -(radius * Math.sin(phi1) * Math.cos(theta1)),
          radius * Math.cos(phi1),
          radius * Math.sin(phi1) * Math.sin(theta1),
        )

        const pos2 = new THREE.Vector3(
          -(radius * Math.sin(phi2) * Math.cos(theta2)),
          radius * Math.cos(phi2),
          radius * Math.sin(phi2) * Math.sin(theta2),
        )

        // Use green for CPU connections, blue for GPU
        const color =
          node1.serverType === 'GPU TEE' || node2.serverType === 'GPU TEE' ? '#3b82f6' : '#86efac'

        connections.push({ start: pos1, end: pos2, color })
      }
    }

    return connections
  }, [nodes])

  return (
    <group>
      {lines.map((line, index) => {
        const points = [line.start, line.end]
        const geometry = new THREE.BufferGeometry().setFromPoints(points)

        return (
          <line key={index} geometry={geometry}>
            <lineBasicMaterial color={line.color} transparent opacity={0.15} />
          </line>
        )
      })}
    </group>
  )
}

export function ThreeGlobe({ nodes, onNodeClick }: ThreeGlobeProps) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        {/* Globe */}
        <GlobeSphere />

        {/* Connection lines between nodes */}
        <ConnectionLines nodes={nodes} />

        {/* Node markers */}
        <NodeMarkers nodes={nodes} onNodeClick={onNodeClick} />

        {/* Controls - allow rotation and zoom */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={3}
          maxDistance={8}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}
