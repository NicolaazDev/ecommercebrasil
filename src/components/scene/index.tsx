"use client";

import React, { useLayoutEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Stage,
  useIntersect,
  ScrollControls,
  useScroll,
} from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface ModelProps {
  position: number[];
  rotation: number[];
  initialRotation: number[];
}

export const Model = React.forwardRef<THREE.Object3D, ModelProps>(
  (props: any) => {
    const { scene } = useGLTF("/assets/iphone14.glb");

    const modelRef = useRef<THREE.Object3D>(null);
    const tl = useRef<any>();

    const scroll = useScroll();

    useFrame(() => {
      tl.current.seek(scroll.offset * tl.current.duration());
    });

    useLayoutEffect(() => {
      tl.current = gsap.timeline();

      tl.current.to(modelRef.current!.position, {
        y: -33.08,
        duration: 1.5,
        ease: "power3.inOut",
      });
    }, []);

    return <primitive object={scene} ref={modelRef} {...props} />;
  }
);
