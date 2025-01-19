import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { useCameraPosition } from "../utils/store";

const CameraController = () => {
  const { camera } = useThree();

  //{ x: -1, y: 1.2, z: 1.2 })
  const { cameraPosition } = useCameraPosition();
  useFrame(() => {
    camera.position.lerp(
      new Vector3(cameraPosition.x, cameraPosition.y, cameraPosition.z),
      0.1
    );
  });

  return null;
};

export default CameraController;
