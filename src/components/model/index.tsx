import React, { forwardRef, useEffect, ComponentPropsWithRef } from "react";
import { useGLTF } from "@react-three/drei";

type ModelProps = ComponentPropsWithRef<"div"> & {
  position: number[];
  rotation: number[];
};

export const Model = forwardRef<HTMLDivElement, ModelProps>((props, ref) => {
  const { scene } = useGLTF("/assets/iphone14.glb");

  return <primitive object={scene} {...props} />;
});
