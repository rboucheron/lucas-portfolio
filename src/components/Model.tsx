
import React from "react";
import { useGLTF } from "@react-three/drei";
import { Object3D } from "three";

type GLTFResult = {
  scene: Object3D;
  nodes: Record<string, Object3D>;
  materials: Record<string, string>;
};

const Model: React.FC = () => {
  const { scene } = useGLTF("/assets/3d/fauteil.glb") as unknown as GLTFResult;
  return <primitive object={scene} />;
};

export default Model;
