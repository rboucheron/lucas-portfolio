import { create } from "zustand";
import { position } from "../three/interface/position";

interface cameraPositionState {
  cameraPosition: position;
  setCameraPosition: (position: position) => void;
}

export const useCameraPosition = create<cameraPositionState>((set) => ({
  cameraPosition: {
    x: 0,
    y: 1,
    z: 2,
  },
  setCameraPosition: (cameraPosition) => {
    set({ cameraPosition });
  },
}));
