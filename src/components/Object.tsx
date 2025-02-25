import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "../three/type/GLTFResult";
import { objectProps } from "../three/interface/objectProps";

const Object: React.FC<objectProps> = ({
  onClick,
  assets,

}) => {
  const { scene } = useGLTF(assets) as unknown as GLTFResult;

  return (
    <>
      <primitive object={scene} onClick={() => onClick()} />
    </>
  );
};

export default Object;
