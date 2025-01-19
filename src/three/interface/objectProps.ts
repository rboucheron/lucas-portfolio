
import { position } from "./position";

export interface objectProps {
  assets: string;
  positionOnClick: position;
  onClick: (position: position) => void;
  onContextMenu?: (position: position) => void;
  onDoubleClick?: (position: position) => void;
  onWheel?: (position: position) => void;
  onPointerUp?: (position: position) => void;
  onPointerDown?: (position: position) => void;
  onPointerOver?: (position: position) => void;
  onPointerOut?: (position: position) => void;
  onPointerEnter?: (position: position) => void;
  onPointerLeave?: (position: position) => void;
  onPointerMove?: (position: position) => void;
  onPointerMissed?: (position: position) => void;
  onUpdate?: (position: position) => void;
}
