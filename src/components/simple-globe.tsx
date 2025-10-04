'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import type { PhalaNode } from '@/data/phala-nodes'

interface SimpleGlobeProps {
  nodes: PhalaNode[]
  onNodeClick?: (node: PhalaNode) => void
  onGlobeReady?: (controls: any) => void
}

function GlobeSphere() {
  return (
    <mesh>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        color="#1a1a2e"
        roughness={0.7}
        metalness={0.2}
      />
    </mesh>
  )
}

function NodeMarkers({ nodes, onNodeClick }: { nodes: PhalaNode[], onNodeClick?: (node: PhalaNode) => void }) {
  // Convert lat/lon to 3D coordinates on sphere
  const latLonToVector3 = (lat: number, lon: number, radius: number = 2.1) => {
    const phi = (90 - lat) * (Math.PI / 180)
    const theta = (lon + 180) * (Math.PI / 180)

    const x = -(radius * Math.sin(phi) * Math.cos(theta))
    const z = radius * Math.sin(phi) * Math.sin(theta)
    const y = radius * Math.cos(phi)

    return [x, y, z]
  }

  return (
    <group>
      {nodes.map((node, idx) => {
        const [x, y, z] = latLonToVector3(node.location.lat, node.location.lon)
        const color = node.serverType === 'GPU TEE' ? '#8DD7FF' : '#BAE730'

        return (
          <mesh
            key={idx}
            position={[x, y, z]}
            onClick={() => onNodeClick?.(node)}
          >
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.5}
            />
          </mesh>
        )
      })}
    </group>
  )
}

export function SimpleGlobe({ nodes, onNodeClick, onGlobeReady }: SimpleGlobeProps) {
  const controlsRef = useRef<any>()

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <GlobeSphere />
        <NodeMarkers nodes={nodes} onNodeClick={onNodeClick} />

        <OrbitControls
          ref={controlsRef}
          enablePan={false}
          enableZoom={true}
          minDistance={3}
          maxDistance={8}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
          onUpdate={() => {
            if (controlsRef.current && onGlobeReady) {
              onGlobeReady(controlsRef.current)
            }
          }}
        />
      </Canvas>
    </div>
  )
}
