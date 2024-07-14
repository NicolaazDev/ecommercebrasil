"use client";

import React, {
  Suspense,
  forwardRef,
  useEffect,
  useRef,
  ComponentPropsWithRef,
} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";

type ModelProps = ComponentPropsWithRef<"div"> & {
  position: number[];
  rotation: number[];
};

const Model = forwardRef<HTMLDivElement, ModelProps>((props, ref) => {
  const { scene } = useGLTF("/assets/iphone14.glb");

  useEffect(() => {
    console.log("Scene:", scene);
  }, [scene]);

  return <primitive object={scene} {...props} />;
});

const ThreeScene = () => {
  const modelRef = useRef<HTMLDivElement>(null);

  return (
    <Canvas
      style={{ position: "absolute" }}
      className="max-w-screen"
      camera={{
        position: [0, 0, 7.2],
        fov: 50,
        rotation: [0, 0, 0],
        zoom: 36,
      }}
    >
      <ambientLight intensity={0} />
      <directionalLight position={[0, 110, 40]} intensity={1} />
      <Suspense fallback={null}>
        <Stage
          preset="rembrandt"
          intensity={1}
          environment="city"
          adjustCamera={false}
          center={{ disable: true }}
        >
          <Model
            ref={modelRef}
            // position={[2.93, 0, -3.68]}
            position={[0.09, -0.08, 0]}
            rotation={[-0.19, -3.66, 0.03]}
          />
        </Stage>
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;
