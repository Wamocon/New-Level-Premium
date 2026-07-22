'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import {
  Environment,
  Lightformer,
  Float,
  ContactShadows,
  RoundedBox,
} from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { prefersReducedMotion } from '@/lib/hooks';

const GOLD = '#C9A24B';

interface TowerDef {
  x: number;
  z: number;
  h: number;
  w: number;
  glass?: boolean;
}

// An abstract architectural massing — a small skyline of polished towers.
const TOWERS: TowerDef[] = [
  { x: 0, z: 0, h: 3.5, w: 0.95, glass: true },
  { x: -1.35, z: -0.4, h: 2.5, w: 0.8 },
  { x: 1.3, z: -0.3, h: 2.95, w: 0.85 },
  { x: -0.9, z: 1.15, h: 1.9, w: 0.7 },
  { x: 1.05, z: 1.0, h: 2.25, w: 0.72 },
  { x: 0.15, z: -1.55, h: 2.05, w: 0.68 },
  { x: -2.15, z: 0.6, h: 1.55, w: 0.6 },
];

function Tower({ def }: { def: TowerDef }) {
  const y = def.h / 2 - 0.9;
  return (
    <RoundedBox
      args={[def.w, def.h, def.w]}
      radius={0.08}
      smoothness={4}
      position={[def.x, y, def.z]}
      castShadow
      receiveShadow
    >
      {def.glass ? (
        <meshPhysicalMaterial
          transmission={1}
          thickness={1.4}
          roughness={0.08}
          ior={1.45}
          color="#efe6cd"
          attenuationColor="#d8c184"
          attenuationDistance={2.6}
          clearcoat={1}
          clearcoatRoughness={0.12}
        />
      ) : (
        <meshStandardMaterial
          color={GOLD}
          metalness={1}
          roughness={0.24}
          envMapIntensity={1.35}
        />
      )}
    </RoundedBox>
  );
}

function Cluster({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    if (!reduced) g.rotation.y += delta * 0.12;
    const px = state.pointer.x * 0.28;
    const py = state.pointer.y * 0.18;
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, py * 0.5, 0.05);
    g.position.x = THREE.MathUtils.lerp(g.position.x, px, 0.05);
  });
  return (
    <group ref={group}>
      {TOWERS.map((t, i) => (
        <Tower key={i} def={t} />
      ))}
      {/* reflective plinth */}
      <mesh position={[0, -0.92, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[7, 64]} />
        <meshStandardMaterial color="#0c0c0f" metalness={0.9} roughness={0.35} />
      </mesh>
    </group>
  );
}

function Dust({ reduced }: { reduced: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 320;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 1] = Math.random() * 9 - 2;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    return arr;
  }, []);
  useFrame((_, delta) => {
    if (ref.current && !reduced) ref.current.rotation.y += delta * 0.02;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color={GOLD}
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function HeroCanvas() {
  const reduced = prefersReducedMotion();
  return (
    <Canvas
      shadows
      dpr={[1, 1.8]}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 1.1, 8.6], fov: 34 }}
      className="!absolute !inset-0"
    >
      <fog attach="fog" args={['#08080A', 9, 21]} />
      <ambientLight intensity={0.25} />
      <directionalLight
        position={[5, 9, 5]}
        intensity={1.1}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <Float
        speed={reduced ? 0 : 1.1}
        rotationIntensity={reduced ? 0 : 0.22}
        floatIntensity={reduced ? 0 : 0.5}
      >
        <Cluster reduced={reduced} />
      </Float>
      <Dust reduced={reduced} />
      <ContactShadows
        position={[0, -0.9, 0]}
        opacity={0.5}
        scale={18}
        blur={2.8}
        far={6}
        color="#000000"
      />
      <Environment resolution={256} frames={1}>
        <Lightformer intensity={2.2} position={[0, 4, -6]} scale={[12, 6, 1]} color="#fff6df" />
        <Lightformer intensity={1.4} position={[-6, 1, 1]} scale={[8, 8, 1]} color="#f0d9a8" />
        <Lightformer intensity={1.1} position={[6, -1, 2]} scale={[8, 8, 1]} color="#b98b3f" />
        <Lightformer form="ring" intensity={2.4} position={[0, 2, 3.5]} scale={3} color="#ffffff" />
      </Environment>
      <EffectComposer enableNormalPass={false}>
        <Bloom
          mipmapBlur
          intensity={0.55}
          luminanceThreshold={0.55}
          luminanceSmoothing={0.2}
        />
        <Vignette eskil={false} offset={0.25} darkness={0.72} />
      </EffectComposer>
    </Canvas>
  );
}
