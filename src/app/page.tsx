"use client";
import React from "react";

import {
  Categories,
  Footer,
  Header,
  Products,
  Realease,
} from "@/components/sections";

export default function HomePage() {
  return (
    <div className="scroll-smooth max-w-screen overflow-x-hidden mx-auto flex-col ">
      <Header />
      <Products />
      <Realease />
      <Categories />
      <Footer />
    </div>
  );
}
