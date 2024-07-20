"use client";
import React from "react";

import {
  Categories,
  Footer,
  Header,
  Navbar,
  Products,
  Realease,
} from "@/components/sections";

export default function HomePage() {
  return (
    <div className="scroll-smooth max-w-screen overflow-x-hidden mx-auto flex-col ">
      <Navbar />
      <Header />
      <Products />
      <Realease />
      <Categories />
      <Footer />
    </div>
  );
}
