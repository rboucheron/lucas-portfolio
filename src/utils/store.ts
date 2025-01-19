
import { create } from "zustand";
import { position } from "../three/interface/position";

interface cameraPositionState {
  cameraPosition: position
  setCameraPosition: (position: position) => void; 
}

export const useCameraPosition = create<cameraPositionState>((set) => ({
    cameraPosition: {
        x: -0.3, 
        y: 1, 
        z: 1.5 
    },
    setCameraPosition: (cameraPosition) => {
        set({cameraPosition})
    }
}))