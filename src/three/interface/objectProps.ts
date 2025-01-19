import { position } from "./position";

export interface objectProps {
  onClick: (cameraPosition: position) => void;
  assets: string;
  cameraPositionOnClick: position;
}
