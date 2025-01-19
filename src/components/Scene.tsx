import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import CameraController from "./CameraController";

interface SceneProps {
  children?: React.ReactNode;
  onSceneClick?: () => void;
}

const Scene: React.FC<SceneProps> = ({ children, onSceneClick }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleCanvasClick = () => {
    if (onSceneClick) {
      onSceneClick();
    }
  };

  return (
    <Canvas
      ref={canvasRef}
      style={{ width: "100%", height: "80vh" }}
      camera={{ position: [0, 2.3, 2], fov: 75 }}
      onPointerDown={handleCanvasClick}
    >
      <CameraController />
      <ambientLight intensity={2} />
      <pointLight position={[10, 10, 10]} />
      {children}
    </Canvas>
  );
};

export default Scene;
