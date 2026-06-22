"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Text, Html, RoundedBox } from "@react-three/drei";

// --- Realistic Procedural Products ---

function RealisticCan({ position, color, label }: { position: [number, number, number], color: string, label: string }) {
  return (
    <group position={position}>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.24, 32]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.12, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.075, 0.008, 16, 32]} />
        <meshStandardMaterial color="#dddddd" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 0.115, 0]}>
        <cylinderGeometry args={[0.075, 0.075, 0.01, 32]} />
        <meshStandardMaterial color="#cccccc" metalness={1} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.122, 0.03]} rotation={[0, 0.5, 0]}>
        <boxGeometry args={[0.02, 0.005, 0.04]} />
        <meshStandardMaterial color="#eeeeee" metalness={1} roughness={0.1} />
      </mesh>
      <Text position={[0, 0, 0.081]} fontSize={0.03} color="#ffffff" anchorX="center" anchorY="middle">
        {label}
      </Text>
    </group>
  );
}

function RealisticBottle({ position, color, liquidColor }: { position: [number, number, number], color: string, liquidColor: string }) {
  return (
    <group position={position}>
      <mesh position={[0, -0.05, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.2, 32]} />
        <meshPhysicalMaterial color={color} transparent opacity={0.4} transmission={0.9} roughness={0.1} depthWrite={false} />
      </mesh>
      <mesh position={[0, -0.06, 0]}>
        <cylinderGeometry args={[0.075, 0.075, 0.18, 32]} />
        <meshStandardMaterial color={liquidColor} depthWrite={false} />
      </mesh>
      <mesh position={[0, -0.05, 0]}>
        <cylinderGeometry args={[0.082, 0.082, 0.1, 32]} />
        <meshStandardMaterial color="#222" roughness={0.6} />
      </mesh>
      <Text position={[0, -0.05, 0.083]} fontSize={0.025} color="#fff" anchorX="center" anchorY="middle">
        VendWater
      </Text>
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.03, 0.08, 0.1, 32]} />
        <meshPhysicalMaterial color={color} transparent opacity={0.4} transmission={0.9} roughness={0.1} depthWrite={false} />
      </mesh>
      <mesh position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 0.01, 32]} />
        <meshStandardMaterial color="#fff" roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.17, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.03, 32]} />
        <meshStandardMaterial color="#ffffff" roughness={0.4} />
      </mesh>
    </group>
  );
}

function RealisticSnack({ position, color, label }: { position: [number, number, number], color: string, label: string }) {
  return (
    <group position={position} rotation={[0.1, 0, 0]}>
      <RoundedBox args={[0.2, 0.22, 0.06]} radius={0.02} smoothness={4} position={[0, 0, 0]}>
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.2} />
      </RoundedBox>
      <mesh position={[0, 0.12, 0]}>
        <boxGeometry args={[0.2, 0.03, 0.01]} />
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} />
      </mesh>
      <mesh position={[0, -0.12, 0]}>
        <boxGeometry args={[0.2, 0.03, 0.01]} />
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} />
      </mesh>
      <Text position={[0, 0.02, 0.031]} fontSize={0.04} color="#fff" anchorX="center" anchorY="middle" outlineWidth={0.005} outlineColor="#000">
        {label}
      </Text>
      <Text position={[0, -0.04, 0.031]} fontSize={0.02} color="#fff" anchorX="center" anchorY="middle">
        CRISPS
      </Text>
    </group>
  );
}

function PriceTag({ position, price }: { position: [number, number, number], price: string }) {
  return (
    <group position={position}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.08, 0.03, 0.01]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      <Text position={[0, 0, 0.006]} fontSize={0.02} color="#00ffcc" anchorX="center" anchorY="middle">
        {price}
      </Text>
    </group>
  );
}

export default function VendingMachine() {
  const outerGroup = useRef<THREE.Group>(null);
  const innerGroup = useRef<THREE.Group>(null);
  const pointer = useRef(new THREE.Vector2());

  const mWidth = 2.8;
  const mHeight = 4.8;
  const mDepth = 1.8;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const getResponsiveConfig = () => {
      const w = window.innerWidth;
      if (w < 640) {
        // Mobile: center the machine, scale it down
        return {
          startX: 0, startY: -0.5, startZ: 1,
          startRotY: 0.15,
          midX: 0, midY: 0, midZ: 0,
          midRotY: -0.15,
          endZ: 1.5,
          scale: 0.55,
        };
      } else if (w < 1024) {
        // Tablet: slightly offset, medium scale
        return {
          startX: -1.2, startY: -0.3, startZ: 0.5,
          startRotY: 0.15,
          midX: 0, midY: 0, midZ: -0.5,
          midRotY: -0.15,
          endZ: 1,
          scale: 0.7,
        };
      } else {
        // Desktop: original layout
        return {
          startX: -2.5, startY: -0.2, startZ: 0,
          startRotY: 0.2,
          midX: 0, midY: 0, midZ: -1,
          midRotY: -0.2,
          endZ: 1,
          scale: 1,
        };
      }
    };

    const setupAnimation = () => {
      const cfg = getResponsiveConfig();

      // Kill existing ScrollTriggers before recreating
      ScrollTrigger.getAll().forEach(t => t.kill());

      if (outerGroup.current) {
        outerGroup.current.scale.setScalar(cfg.scale);
        gsap.set(outerGroup.current.position, { x: cfg.startX, y: cfg.startY, z: cfg.startZ });
        gsap.set(outerGroup.current.rotation, { y: cfg.startRotY });

        const tl = gsap.timeline({
          scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1 }
        });

        tl.to(outerGroup.current.position, { x: cfg.midX, y: cfg.midY, z: cfg.midZ, duration: 1 })
          .to(outerGroup.current.rotation, { y: cfg.midRotY, duration: 1 }, "<")
          .to(outerGroup.current.position, { z: cfg.endZ, duration: 1 })
          .to(outerGroup.current.rotation, { y: Math.PI * 2, duration: 2 });
      }
    };

    setupAnimation();

    // Rebuild on resize for responsive behavior
    const onResize = () => {
      setupAnimation();
    };
    window.addEventListener("resize", onResize);

    const onPointerMove = (e: MouseEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", onPointerMove);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);


  useFrame(() => {
    if (!innerGroup.current) return;
    const targetX = pointer.current.y * 0.1;
    const targetY = pointer.current.x * 0.1;
    innerGroup.current.rotation.x += (targetX - innerGroup.current.rotation.x) * 0.1;
    innerGroup.current.rotation.y += (targetY - innerGroup.current.rotation.y) * 0.1;
  });

  const blackMetal = new THREE.MeshStandardMaterial({ color: "#08080a", metalness: 0.8, roughness: 0.2 });
  const darkMetal = new THREE.MeshStandardMaterial({ color: "#15151a", metalness: 0.6, roughness: 0.4 });
  const neonPurple = new THREE.MeshBasicMaterial({ color: "#d699ff" });
  
  const glassMat = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    transparent: true,
    opacity: 0.1,
    roughness: 0.05,
    metalness: 0.8,
    envMapIntensity: 2,
    depthWrite: false, 
  });

  return (
    <group ref={outerGroup}>
      <group ref={innerGroup}>
        {/* Pedestal */}
        <mesh position={[0, -mHeight / 2 - 0.1, 0]}>
          <cylinderGeometry args={[1.8, 2.0, 0.2, 64]} />
          <meshStandardMaterial color="#050507" metalness={0.8} roughness={0.4} />
        </mesh>
        
        {/* Hollow Outer Body */}
        <RoundedBox args={[0.2, 4.8, 1.8]} radius={0.05} smoothness={4} position={[-1.3, 0, 0]} material={blackMetal} />
        <RoundedBox args={[1.0, 4.8, 1.8]} radius={0.05} smoothness={4} position={[0.9, 0, 0]} material={blackMetal} />
        <RoundedBox args={[1.6, 0.3, 1.8]} radius={0.05} smoothness={4} position={[-0.4, 2.25, 0]} material={blackMetal} />
        <RoundedBox args={[1.6, 1.3, 1.8]} radius={0.05} smoothness={4} position={[-0.4, -1.75, 0]} material={blackMetal} />
        <RoundedBox args={[1.6, 3.2, 0.2]} radius={0.05} smoothness={4} position={[-0.4, 0.5, -0.8]} material={darkMetal} />

        {/* Cooling Vents on Right Panel */}
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh key={`vent-${i}`} position={[1.4, 1.5 - i * 0.1, 0]}>
            <boxGeometry args={[0.02, 0.05, 0.6]} />
            <meshStandardMaterial color="#000" />
          </mesh>
        ))}

        {/* Glass Door Hinges */}
        <mesh position={[-1.2, 1.5, 0.88]}>
          <cylinderGeometry args={[0.02, 0.02, 0.1, 16]} />
          <meshStandardMaterial color="#aaa" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[-1.2, -0.5, 0.88]}>
          <cylinderGeometry args={[0.02, 0.02, 0.1, 16]} />
          <meshStandardMaterial color="#aaa" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Inner Lighting */}
        <pointLight position={[-0.4, 1.9, 0.5]} color="#ffffff" intensity={5} distance={6} />
        <pointLight position={[-0.4, 0.5, 0.5]} color="#ffffff" intensity={5} distance={5} />
        <pointLight position={[-0.4, -0.5, 0.5]} color="#ffffff" intensity={5} distance={5} />
        <ambientLight intensity={1.5} color="#ffffff" />

        <mesh position={[-0.4, 2.05, 0.85]} material={neonPurple}>
          <boxGeometry args={[1.5, 0.02, 0.02]} />
        </mesh>

        {/* Glass Door */}
        <mesh position={[-0.4, 0.5, 0.88]} material={glassMat}>
          <boxGeometry args={[1.6, 3.2, 0.02]} />
        </mesh>

        {/* UI Panel (Right Side) */}
        <group position={[0.9, 0.5, 0.91]}>
          <mesh position={[0, 0.5, 0]}>
            <boxGeometry args={[0.55, 0.9, 0.02]} />
            <meshStandardMaterial color="#050508" metalness={0.9} roughness={0.1} />
          </mesh>
          <Html transform position={[0, 0.5, 0.015]} scale={0.06} className="w-[300px] h-[500px] bg-[#0a0a12] rounded-xl overflow-hidden border border-purple-500/30 flex flex-col pointer-events-none">
            <div className="w-full h-12 bg-purple-600/20 flex items-center justify-center border-b border-purple-500/30">
              <span className="text-white font-bold text-xl tracking-widest">VendAI UI</span>
            </div>
            <div className="flex-1 p-4 grid grid-cols-2 gap-4 content-start">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-lg bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
                  <div className="w-16 h-2 bg-white/20 rounded-full" />
                </div>
              ))}
            </div>
            <div className="h-20 bg-black flex items-center justify-between px-6 border-t border-white/10">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white text-2xl border border-white/20">💳</div>
              <div className="text-right">
                <div className="text-purple-400 text-sm">Total</div>
                <div className="text-white text-2xl font-bold">$0.00</div>
              </div>
            </div>
          </Html>

          {/* Payment & Hardware */}
          {/* NFC Reader */}
          <mesh position={[-0.1, -0.2, 0.01]}>
            <boxGeometry args={[0.15, 0.1, 0.02]} />
            <meshStandardMaterial color="#111" />
          </mesh>
          <mesh position={[-0.1, -0.2, 0.021]}>
            <ringGeometry args={[0.02, 0.025, 32]} />
            <meshBasicMaterial color="#d699ff" />
          </mesh>
          
          {/* Bill Validator */}
          <mesh position={[0.15, -0.2, 0.01]}>
            <boxGeometry args={[0.15, 0.1, 0.03]} />
            <meshStandardMaterial color="#050505" />
          </mesh>
          <mesh position={[0.15, -0.2, 0.026]}>
            <boxGeometry args={[0.1, 0.01, 0.01]} />
            <meshBasicMaterial color="#00ff00" />
          </mesh>

          {/* Keypad */}
          <group position={[-0.1, -0.4, 0.02]}>
            <mesh material={darkMetal}>
              <boxGeometry args={[0.15, 0.15, 0.02]} />
            </mesh>
            {Array.from({ length: 9 }).map((_, i) => (
              <group key={i} position={[(i % 3 - 1) * 0.04, -(Math.floor(i / 3) - 1) * 0.04, 0.015]}>
                <mesh material={new THREE.MeshStandardMaterial({ color: "#222" })}>
                  <boxGeometry args={[0.025, 0.025, 0.01]} />
                </mesh>
                <Text position={[0, 0, 0.006]} fontSize={0.015} color="#fff" anchorX="center" anchorY="middle">
                  {i + 1}
                </Text>
              </group>
            ))}
          </group>

          {/* Receipt/Change */}
          <mesh position={[0.15, -0.4, 0.01]}>
            <boxGeometry args={[0.15, 0.15, 0.02]} />
            <meshStandardMaterial color="#111" />
          </mesh>
          <mesh position={[0.15, -0.45, 0.02]}>
            <boxGeometry args={[0.08, 0.02, 0.01]} />
            <meshStandardMaterial color="#000" />
          </mesh>
        </group>

        {/* Bottom Logo Panel */}
        <group position={[-0.4, -1.75, 0.91]}>
          <Text position={[0, 0.2, 0]} fontSize={0.25} color="#ffffff" anchorX="center" anchorY="middle">
            VendAI
          </Text>
          <Text position={[0, -0.1, 0]} fontSize={0.08} color="#A855F7" anchorX="center" anchorY="middle">
            SMART VENDING SOLUTIONS
          </Text>
        </group>

        {/* Dispense Bin */}
        <mesh position={[-0.4, -1.3, 0.8]} material={darkMetal}>
          <boxGeometry args={[1.2, 0.3, 0.2]} />
        </mesh>
        {/* Push Flap */}
        <mesh position={[-0.4, -1.18, 0.9]} rotation={[Math.PI / 12, 0, 0]}>
          <boxGeometry args={[1.18, 0.28, 0.02]} />
          <meshPhysicalMaterial color="#000" transparent opacity={0.8} roughness={0.2} depthWrite={false} />
        </mesh>

        {/* Exterior Neon Strips */}
        <mesh position={[-1.4, 0, 0.9]} material={neonPurple}>
          <cylinderGeometry args={[0.02, 0.02, mHeight - 0.4, 16]} />
        </mesh>
        <pointLight position={[-1.4, 0, 1.0]} color="#b966ff" intensity={2} distance={4} />

        <mesh position={[1.4, 0, 0.9]} material={neonPurple}>
          <cylinderGeometry args={[0.02, 0.02, mHeight - 0.4, 16]} />
        </mesh>
        <pointLight position={[1.4, 0, 1.0]} color="#b966ff" intensity={2} distance={4} />

        {/* Shelves & High Detail Products */}
        <group position={[-0.4, 0.5, 0.1]}>
          {[-1.3, -0.5, 0.3, 1.1].map((y, i) => (
            <group key={`shelf-${i}`}>
              <mesh position={[0, y, 0]} material={new THREE.MeshStandardMaterial({ color: "#fff", transparent: true, opacity: 0.2, depthWrite: false })}>
                <boxGeometry args={[1.5, 0.02, 1.2]} />
              </mesh>
              <mesh position={[0, y - 0.01, 0.6]} material={neonPurple}>
                <boxGeometry args={[1.5, 0.01, 0.01]} />
              </mesh>
            </group>
          ))}

          {/* Top Shelf: Snacks */}
          {Array.from({ length: 5 }).map((_, i) => (
            <group key={`snack1-${i}`}>
              <RealisticSnack position={[-0.5 + i * 0.25, 1.25, 0.3]} color={["#ff4500", "#ffd700", "#1e90ff", "#ff1493", "#8a2be2"][i]} label={["FIRE", "CORN", "WAVE", "BERRY", "STAR"][i]} />
              <PriceTag position={[-0.5 + i * 0.25, 1.1, 0.61]} price="$1.50" />
            </group>
          ))}

          {/* 3rd Shelf: Snacks */}
          {Array.from({ length: 5 }).map((_, i) => (
            <group key={`snack2-${i}`}>
              <RealisticSnack position={[-0.5 + i * 0.25, 0.45, 0.3]} color={["#32cd32", "#ff69b4", "#ff8c00", "#4169e1", "#dc143c"][i]} label={["LIME", "SWEET", "SPICE", "COOL", "HOT"][i]} />
              <PriceTag position={[-0.5 + i * 0.25, 0.3, 0.61]} price="$1.25" />
            </group>
          ))}

          {/* 2nd Shelf: Cans */}
          {Array.from({ length: 6 }).map((_, i) => (
            <group key={`can-${i}`}>
              <RealisticCan position={[-0.6 + i * 0.24, -0.35, 0.4]} color={i % 2 === 0 ? "#e60000" : "#6D28FF"} label={i % 2 === 0 ? "COLA" : "ENERGY"} />
              <PriceTag position={[-0.6 + i * 0.24, -0.5, 0.61]} price="$2.00" />
            </group>
          ))}

          {/* Bottom Shelf: Bottles */}
          {Array.from({ length: 6 }).map((_, i) => (
            <group key={`bottle-${i}`}>
              <RealisticBottle position={[-0.6 + i * 0.24, -1.1, 0.4]} color={i < 3 ? "#00ffff" : "#32cd32"} liquidColor={i < 3 ? "#0088ff" : "#11aa11"} />
              <PriceTag position={[-0.6 + i * 0.24, -1.3, 0.61]} price="$2.50" />
            </group>
          ))}
        </group>
      </group>
    </group>
  );
}
