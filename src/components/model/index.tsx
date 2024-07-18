import React, {
  forwardRef,
  ComponentPropsWithRef,
  useRef,
  useLayoutEffect,
} from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three"; // Importa o THREE

import gsap from "gsap";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

type ModelProps = ComponentPropsWithRef<"div"> & {
  position: number[];
  rotation: number[];
};

export const Model = forwardRef<HTMLDivElement, ModelProps>((props) => {
  const { scene } = useGLTF("/assets/iphone14.glb");

  const mesh = useRef<THREE.Object3D>();

  // useFrame(({ mouse, camera }) => {
  //   camera.position.x = THREE.MathUtils.lerp(
  //     camera.position.x,
  //     mouse.x / 100,
  //     0.1
  //   );
  //   camera.position.y = THREE.MathUtils.lerp(
  //     camera.position.y,
  //     mouse.y / 100,
  //     0.01
  //   );
  // });

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".products__container",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      onUpdate: (self) => {
        if (mesh.current) {
          mesh.current.position.y = -0.08 - (self.progress * Math.PI) / 20;
          mesh.current.rotation.y = -3.66 - self.progress * Math.PI * 1.5;
        }
      },
    });
  }, [mesh]);

  return <primitive object={scene} ref={mesh} {...props} />;
});
