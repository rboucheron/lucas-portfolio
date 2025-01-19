
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
        positionOnClick={{ x: -1, y: 0.8, z: 0.9 }}
      />

      <Object
        onClick={(position) => setCameraPosition(position)}
        assets="/assets/3d/ball.glb"
        positionOnClick={{ x: -1, y: 0.3, z: 1.7 }}
      />

      <Object
        onClick={(position) => setCameraPosition(position)}
        assets="/assets/3d/chaise.glb"
        positionOnClick={{ x: 0, y: 0.8, z: 0.9 }}
      />
    </Scene>
  );
};

export default Project;
