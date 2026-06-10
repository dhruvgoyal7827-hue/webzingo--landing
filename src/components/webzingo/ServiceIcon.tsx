import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Shape({ kind }: { kind: "orb" | "cube" | "ring" }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((s) => {
    const t = s.clock.getElapsedTime();
    ref.current.rotation.x = t * 0.4;
    ref.current.rotation.y = t * 0.6;
    ref.current.position.y = Math.sin(t * 1.2) * 0.1;
  });
  return (
    <mesh ref={ref}>
      {kind === "orb" && <icosahedronGeometry args={[0.9, 1]} />}
      {kind === "cube" && <boxGeometry args={[1.1, 1.1, 1.1]} />}
      {kind === "ring" && <torusGeometry args={[0.8, 0.25, 24, 80]} />}
      <meshStandardMaterial
        color="#a855f7"
        emissive="#7c3aed"
        emissiveIntensity={0.6}
        metalness={0.9}
        roughness={0.2}
        wireframe={kind === "orb"}
      />
    </mesh>
  );
}

export default function ServiceIcon({ kind }: { kind: "orb" | "cube" | "ring" }) {
  return (
    <div className="h-28 w-28">
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.4} />
        <pointLight position={[2, 2, 2]} intensity={2} color="#a855f7" />
        <pointLight position={[-2, -1, 1]} intensity={1.5} color="#2563eb" />
        <Shape kind={kind} />
      </Canvas>
    </div>
  );
}
