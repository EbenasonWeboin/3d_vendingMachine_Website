"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Preload, Float, Sparkles } from "@react-three/drei";
import { Suspense } from "react";
import VendingMachine from "./VendingMachine";

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#6D28FF" />
        
        <Sparkles count={200} scale={12} size={2} speed={0.4} opacity={0.3} color="#a855f7" />

        <Suspense fallback={null}>
          {/* Vending Machine Outline 1 */}
          <Float speed={1} rotationIntensity={0.5} floatIntensity={1} position={[-6, 1, -8]}>
            <mesh>
              <boxGeometry args={[2.8, 4.8, 1.8]} />
              <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.06} />
            </mesh>
          </Float>
          
          {/* Vending Machine Outline 2 */}
          <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.5} position={[6, -2, -10]}>
            <mesh>
              <boxGeometry args={[2.8, 4.8, 1.8]} />
              <meshBasicMaterial color="#6D28FF" wireframe transparent opacity={0.04} />
            </mesh>
          </Float>

          {/* Floating Can Outline */}
          <Float speed={2} rotationIntensity={2} floatIntensity={2} position={[-4, -3, -5]}>
            <mesh>
              <cylinderGeometry args={[0.4, 0.4, 1.2, 16]} />
              <meshBasicMaterial color="#00ffcc" wireframe transparent opacity={0.08} />
            </mesh>
          </Float>

          {/* Floating Snack Bag Outline */}
          <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2} position={[5, 3, -6]}>
            <mesh>
              <boxGeometry args={[1.0, 1.2, 0.3]} />
              <meshBasicMaterial color="#ff4500" wireframe transparent opacity={0.05} />
            </mesh>
          </Float>

          {/* Floating Bottle Outline */}
          <Float speed={2.5} rotationIntensity={2} floatIntensity={1.5} position={[0, 4, -7]}>
            <group>
              <mesh position={[0, -0.2, 0]}>
                <cylinderGeometry args={[0.3, 0.3, 1.0, 16]} />
                <meshBasicMaterial color="#32cd32" wireframe transparent opacity={0.06} />
              </mesh>
              <mesh position={[0, 0.4, 0]}>
                <cylinderGeometry args={[0.1, 0.3, 0.4, 16]} />
                <meshBasicMaterial color="#32cd32" wireframe transparent opacity={0.06} />
              </mesh>
            </group>
          </Float>

          <Sparkles count={400} scale={20} size={4} speed={0.2} opacity={0.15} color="#d699ff" />

          <VendingMachine />
          <Environment preset="city" />
        </Suspense>
        
        <Preload all />
      </Canvas>
    </div>
  );
}
