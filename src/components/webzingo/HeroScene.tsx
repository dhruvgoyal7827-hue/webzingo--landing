import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Knot() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * 0.15;
    ref.current.rotation.y = t * 0.2;
    const s = 1 + Math.sin(t * 0.8) * 0.05;
    ref.current.scale.setScalar(s);
  });
  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1.1, 0.32, 220, 32]} />
      <meshStandardMaterial
        color="#a855f7"
        emissive="#7c3aed"
        emissiveIntensity={0.7}
        wireframe
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

function RimGlow() {
  return (
    <mesh scale={1.35}>
      <torusKnotGeometry args={[1.1, 0.34, 120, 24]} />
      <meshBasicMaterial
        color="#a855f7"
        transparent
        opacity={0.08}
        blending={THREE.AdditiveBlending}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

function Particles({ count = 3200 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);
  const { positions, base } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const base = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Galaxy: spiral arms
      const r = Math.pow(Math.random(), 0.7) * 9;
      const branch = (i % 3) * ((Math.PI * 2) / 3);
      const spin = r * 0.6;
      const rand = () => (Math.random() - 0.5) * 0.6 * r * 0.1;
      const x = Math.cos(branch + spin) * r + rand();
      const y = (Math.random() - 0.5) * 0.8;
      const z = Math.sin(branch + spin) * r + rand();
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      base[i * 3] = x;
      base[i * 3 + 1] = y;
      base[i * 3 + 2] = z;
    }
    return { positions, base };
  }, [count]);

  const mouse = useRef(new THREE.Vector2(0, 0));
  const { viewport } = useThree();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.03;
    mouse.current.lerp(state.pointer, 0.05);
    const arr = (ref.current.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
    const mx = mouse.current.x * viewport.width * 0.5;
    const my = mouse.current.y * viewport.height * 0.5;
    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const bx = base[ix];
      const bz = base[ix + 2];
      const dx = bx - mx;
      const dz = bz - my;
      const dist = Math.sqrt(dx * dx + dz * dz);
      const force = Math.max(0, 1.5 - dist) * 0.4;
      arr[ix] = bx + (dx / (dist || 1)) * force;
      arr[ix + 2] = bz + (dz / (dist || 1)) * force;
      arr[ix + 1] = base[ix + 1] + Math.sin(t + i) * 0.02;
    }
    (ref.current.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#c4b5fd"
        transparent
        opacity={0.85}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FogGlow() {
  return (
    <>
      <mesh position={[0, 0, -3]}>
        <planeGeometry args={[16, 10]} />
        <meshBasicMaterial
          color="#7c3aed"
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#07070c"]} />
      <fog attach="fog" args={["#07070c", 6, 18]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#a855f7" />
      <pointLight position={[-5, -3, 2]} intensity={1.5} color="#2563eb" />
      <FogGlow />
      <RimGlow />
      <Knot />
      <Particles />
    </Canvas>
  );
}