import NavbarComponent from "@/components/navbar";
import Header from "@/components/header";

import React from "react";

export default function HomePage() {
  return (
    <div className="max-w-screen overflow-x-hidden mx-auto flex items-center justify-center flex-col">
      <NavbarComponent />
      <Header />
    </div>
  );
}
