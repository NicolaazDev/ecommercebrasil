"use client";

import NavbarComponent from "@/components/navbar";

import React from "react";
import HeaderSection from "@/components/header";
import ProductsSection from "@/components/products";

export default function HomePage() {
  return (
    <div className="max-w-screen overflow-x-hidden mx-auto flex items-center justify-center flex-col">
      <NavbarComponent />
      <HeaderSection />
      <ProductsSection />
    </div>
  );
}
