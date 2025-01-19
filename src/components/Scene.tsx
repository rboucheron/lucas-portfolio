import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import CameraController from "./CameraController";

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
