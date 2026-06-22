"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Bottle({ color, position }: { color: string; position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.01;
  });
  return (
    <group position={position} ref={ref}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[0, 1.2, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.2, 32]} />
          <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.9, 0]}>
          <cylinderGeometry args={[0.2, 0.4, 0.4, 32]} />
          <meshPhysicalMaterial color={color} transmission={0.9} opacity={1} metalness={0.1} roughness={0.1} thickness={0.5} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 1.4, 32]} />
          <meshPhysicalMaterial color={color} transmission={0.9} opacity={1} metalness={0.1} roughness={0.1} thickness={0.5} />
        </mesh>
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.35, 0.35, 1.0, 32]} />
          <meshStandardMaterial color={color} opacity={0.8} transparent />
        </mesh>
      </Float>
    </group>
  );
}

export default function ProductShowcase() {
  return (
    <section className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="section-card p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Premium <span className="text-gradient">Products</span>
            </h2>
            <p className="text-gray-400 text-lg">Interact with our 3D procedural products. Drag to rotate.</p>
          </div>

          {/* 3D Canvas */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ antialias: true, alpha: true }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#6D28FF" />
              <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.5} color="#A855F7" />
              <PresentationControls
                global
                rotation={[0, 0, 0]}
                polar={[-Math.PI / 3, Math.PI / 3]}
                azimuth={[-Math.PI / 1.4, Math.PI / 2]}
              >
                <Bottle color="#6D28FF" position={[-2, 0, 0]} />
                <Bottle color="#A855F7" position={[0, 0, 0]} />
                <Bottle color="#3b82f6" position={[2, 0, 0]} />
              </PresentationControls>
              <Environment preset="city" />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
