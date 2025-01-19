export interface objectProps {
  assets: string;
  onClick: () => void;
  onContextMenu?: () => void;
  onDoubleClick?: () => void;
  onWheel?: () => void;
  onPointerUp?: () => void;
  onPointerDown?: () => void;
  onPointerOver?: () => void;
  onPointerOut?: () => void;
  onPointerEnter?: () => void;
  onPointerLeave?: () => void;
  onPointerMove?: () => void;
  onPointerMissed?: () => void;
  onUpdate?: () => void;
}
