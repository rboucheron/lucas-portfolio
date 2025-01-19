import React from "react";
import Scene from "./Scene";
import { useCameraPosition } from "../utils/store";
import Object from "./Object";

const Project: React.FC = () => {
  const { setCameraPosition } = useCameraPosition();

  return (
    <Scene>
      <Object
        onClick={(position) => setCameraPosition(position)}
        assets="/assets/3d/fauteil.glb"
        cameraPositionOnClick={{ x: -1, y: 1.2, z: 1.2 }}
      />
    </Scene>
  );
};

export default Project;
