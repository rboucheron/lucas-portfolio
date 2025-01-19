import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { useCameraPosition } from "../utils/store";

const CameraController = () => {
  const { camera } = useThree();
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
