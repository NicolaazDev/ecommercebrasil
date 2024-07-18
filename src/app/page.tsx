"use client";

import NavbarComponent from "@/components/navbar";

import React from "react";
import HeaderSection from "@/components/header";
import ProductsSection from "@/components/products";
import { RealeaseSection } from "@/components/release";

export default function HomePage() {
  return (
    <div className="max-w-screen overflow-x-hidden mx-auto flex-col ">
      <NavbarComponent />
      <HeaderSection />
      <ProductsSection />
      <RealeaseSection />
    </div>
  );
}
