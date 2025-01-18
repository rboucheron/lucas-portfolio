import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";

const CameraController = () => {
  const { camera } = useThree(); //{ x: -0.3, y: 1, z: 1.5 }
  const [targetPosition, setTargetPosition] = useState({ x: -1, y: 1.2, z: 1.2 });
  useFrame(() => {
    camera.position.lerp(new Vector3(targetPosition.x, targetPosition.y, targetPosition.z), 0.1);
  });

  return null;
};

const Scene: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);


  return (
    <Canvas
      ref={canvasRef}
      style={{ width: "90vw", height: "90vh" }}
      camera={{ position: [0, 3, 2], fov: 75 }}

    >
      <CameraController />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {children}
    </Canvas>
  );
};

export default Scene;

