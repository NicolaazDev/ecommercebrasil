"use client";

import NavbarComponent from "@/components/navbar";

import React from "react";
import HeaderSection from "@/components/header";
import ProductsSection from "@/components/products";
import { Html, ScrollControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "@/components/scene";

export default function HomePage() {
  return (
    <div className="max-w-screen max-h-screen overflow-x-hidden mx-auto flex items-center justify-center flex-col">
      <Canvas
        style={{ minWidth: "100vw", height: "100vh" }}
        camera={{
          position: [0, 0, 7.2],
          fov: 50,
          rotation: [0, 0, 0],
          zoom: 36,
        }}
      >
        <ambientLight intensity={0} />
        <directionalLight position={[0, 110, 40]} intensity={1} />

        <ScrollControls damping={0.25} pages={1}>
          <Stage
            preset="rembrandt"
            intensity={1}
            environment="city"
            adjustCamera={false}
            center={{ disable: true }}
          >
            <Model
              position={[0.09, -0.08, 0]}
              rotation={[-0.19, -3.66, 0.03]}
              initialRotation={[-0.19, -3.66, 0.04]}
            />
          </Stage>
          <Html
            center={true}
            style={{
              minWidth: "100vw",
              minHeight: "100vh",
            }}
          >
            <NavbarComponent />
            <HeaderSection />
            <ProductsSection />
          </Html>
        </ScrollControls>
      </Canvas>
    </div>
  );
}
