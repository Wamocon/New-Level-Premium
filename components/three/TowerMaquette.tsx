'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import {
  Environment,
  Lightformer,
  Bounds,
  ContactShadows,
  RoundedBox,
  AdaptiveDpr,
  Html,
} from '@react-three/drei';
import { useMemo, useRef, useState, type MutableRefObject } from 'react';
import * as THREE from 'three';
import { useRouter } from '@/i18n/navigation';
import { projects } from '@/lib/data/projects';
import { prefersReducedMotion } from '@/lib/hooks';

const GOLD = '#C9A24B';

// Each tower links to a real complex. Use the main developments (skip sub-units);
// with more towers than complexes, the pool cycles.
const LINKABLE = projects.filter((p) => !p.subProduct);
const POOL = LINKABLE.length ? LINKABLE : projects;

type Router = ReturnType<typeof useRouter>;

interface TowerDef {
  x: number;
  z: number;
  h: number;
  w: number;
  glass?: boolean;
}

// A cluster (not one building): the maquette stands for the whole portfolio of
// developments listed below it. One frosted-glass anchor tower + six gold ones.
const TOWERS: TowerDef[] = [
  { x: 0, z: 0, h: 3.5, w: 0.95, glass: true },
  { x: -1.35, z: -0.4, h: 2.5, w: 0.8 },
  { x: 1.3, z: -0.3, h: 2.95, w: 0.85 },
  { x: -0.9, z: 1.15, h: 1.9, w: 0.7 },
  { x: 1.05, z: 1.0, h: 2.25, w: 0.72 },
  { x: 0.15, z: -1.55, h: 2.05, w: 0.68 },
  { x: -2.15, z: 0.6, h: 1.55, w: 0.6 },
];

function Tower({
  def,
  project,
  router,
  hoverRef,
}: {
  def: TowerDef;
  project: { id: string; name: string };
  router: Router;
  hoverRef: MutableRefObject<boolean>;
}) {
  const y = def.h / 2 - 0.9;
  const [hovered, setHovered] = useState(false);

  const over = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setHovered(true);
    hoverRef.current = true;
    document.body.style.cursor = 'pointer';
  };
  const out = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setHovered(false);
    hoverRef.current = false;
    document.body.style.cursor = '';
  };
  const click = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    document.body.style.cursor = '';
    router.push(`/complexes/${project.id}`);
  };

  return (
    <group position={[def.x, y, def.z]}>
      <RoundedBox
        args={[def.w, def.h, def.w]}
        radius={0.08}
        smoothness={3}
        scale={hovered ? 1.06 : 1}
        onPointerOver={over}
        onPointerOut={out}
        onClick={click}
      >
        {def.glass ? (
          // Cheap glossy translucent "glass", no transmission pass (big FPS win).
          <meshPhysicalMaterial
            color="#efe6cd"
            roughness={0.06}
            metalness={0}
            transparent
            opacity={hovered ? 0.5 : 0.34}
            ior={1.4}
            clearcoat={1}
            clearcoatRoughness={0.1}
            envMapIntensity={1.5}
          />
        ) : (
          <meshStandardMaterial
            color={GOLD}
            metalness={1}
            roughness={0.24}
            envMapIntensity={1.35}
            emissive={GOLD}
            emissiveIntensity={hovered ? 0.55 : 0.16}
          />
        )}
      </RoundedBox>
      {hovered && (
        <Html position={[0, def.h / 2 + 0.4, 0]} center zIndexRange={[40, 0]}>
          <div className="pointer-events-none whitespace-nowrap rounded-full border border-gold/30 bg-obsidian/85 px-3 py-1 text-[0.7rem] font-medium text-gold backdrop-blur-sm">
            {project.name}
          </div>
        </Html>
      )}
    </group>
  );
}

function Cluster({
  reduced,
  router,
  hoverRef,
}: {
  reduced: boolean;
  router: Router;
  hoverRef: MutableRefObject<boolean>;
}) {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    const d = Math.min(delta, 0.05); // clamp to avoid jumps after a pause
    // Slow museum turntable — paused while a tower is hovered so it's easy to aim.
    if (!reduced && !hoverRef.current) g.rotation.y += d * 0.11;
    // Barely-there pointer parallax; on touch the pointer stays at 0 so it just
    // sits centered.
    const px = state.pointer.x * 0.12;
    const py = state.pointer.y * 0.08;
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, py * 0.4, 0.05);
    g.position.x = THREE.MathUtils.lerp(g.position.x, px, 0.05);
  });
  return (
    <group ref={group}>
      {TOWERS.map((t, i) => (
        <Tower key={i} def={t} project={POOL[i % POOL.length]} router={router} hoverRef={hoverRef} />
      ))}
      {/* small reflective plinth disc — the base the model is seated on */}
      <mesh position={[0, -0.9, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[3.2, 64]} />
        <meshStandardMaterial color="#0c0c0f" metalness={0.9} roughness={0.35} />
      </mesh>
    </group>
  );
}

function Dust({ reduced }: { reduced: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 70;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 13;
      arr[i * 3 + 1] = Math.random() * 7 - 1;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 13;
    }
    return arr;
  }, []);
  useFrame((_, delta) => {
    if (ref.current && !reduced) ref.current.rotation.y += Math.min(delta, 0.05) * 0.02;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color={GOLD} transparent opacity={0.5} sizeAttenuation depthWrite={false} />
    </points>
  );
}

/**
 * A small, self-contained "architectural maquette" of the New Level tower
 * cluster — the reused hero sculpture, now scaled down to sit inside the
 * complexes-page vitrine. <Bounds> auto-frames the cluster so it crops cleanly
 * inside the portrait card regardless of viewport. Deferral / mount gating is
 * owned by the ComplexesShowcase island; this component just renders the scene.
 */
export default function TowerMaquette() {
  const reduced = prefersReducedMotion();
  const router = useRouter();
  const hoverRef = useRef(false);
  return (
    <Canvas
      frameloop={reduced ? 'demand' : 'always'}
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 1.2, 9], fov: 32 }}
    >
      <AdaptiveDpr pixelated />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 9, 5]} intensity={1.1} />
      {/* Fit only the cluster (not the wide dust field) to the frame, once. */}
      <Bounds fit clip margin={1.15}>
        <Cluster reduced={reduced} router={router} hoverRef={hoverRef} />
      </Bounds>
      <Dust reduced={reduced} />
      {/* Baked once (frames=1): soft, slow — a static bake is imperceptible and
         removes a full shadow pass per frame. */}
      <ContactShadows
        position={[0, -0.9, 0]}
        opacity={0.5}
        scale={10}
        blur={2.6}
        far={5}
        resolution={160}
        frames={1}
        color="#000000"
      />
      <Environment resolution={256} frames={1}>
        <Lightformer intensity={2.2} position={[0, 4, -6]} scale={[12, 6, 1]} color="#fff6df" />
        <Lightformer intensity={1.4} position={[-6, 1, 1]} scale={[8, 8, 1]} color="#f0d9a8" />
        <Lightformer intensity={1.1} position={[6, -1, 2]} scale={[8, 8, 1]} color="#b98b3f" />
        <Lightformer form="ring" intensity={2.4} position={[0, 2, 3.5]} scale={3} color="#ffffff" />
      </Environment>
    </Canvas>
  );
}
