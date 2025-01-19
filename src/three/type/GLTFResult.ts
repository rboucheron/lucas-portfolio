import { Object3D } from "three";

export type GLTFResult = {
  scene: Object3D;
  nodes: Record<string, Object3D>;
  materials: Record<string, string>;
};
