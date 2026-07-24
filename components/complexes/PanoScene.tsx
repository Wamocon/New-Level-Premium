'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { BackSide, RepeatWrapping } from 'three';
import { prefersReducedMotion } from '@/lib/hooks';

/** Equirectangular panorama mapped onto the inside of a sphere. */
function Sphere({ src }: { src: string }) {
  const tex = useTexture(src);
  // Flip horizontally so the inside-of-sphere view reads the right way round.
  tex.wrapS = RepeatWrapping;
  tex.repeat.x = -1;
  return (
    <mesh>
      <sphereGeometry args={[10, 64, 40]} />
      <meshBasicMaterial map={tex} side={BackSide} toneMapped={false} />
    </mesh>
  );
}

/**
 * Drag-to-look 360° viewer. The camera sits at the centre of a textured sphere;
 * OrbitControls provides the look-around (no zoom/pan). Slow auto-spin unless the
 * visitor prefers reduced motion. Mounted only on demand by Panorama360.
 */
export default function PanoScene({ src }: { src: string }) {
  const reduced = prefersReducedMotion();
  return (
    <Canvas camera={{ position: [0, 0, 0.1], fov: 72 }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <Sphere src={src} />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={-0.35}
        autoRotate={!reduced}
        autoRotateSpeed={0.3}
      />
    </Canvas>
  );
}
