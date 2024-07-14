"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface HeaderSectionProps {}

const HeaderSection: React.FC<HeaderSectionProps> = () => {
  return (
    <section className="header__container w-full h-screen min-h-screen flex justify-center items-center">
      <div className="header-ball"></div>
      <div className="max-w-screen-2xl w-full h-full z-[55] flex items-center justify-start">
        <div className="max-w-[1000px] flex items-center justify-center flex-col">
          <h1 className="text-4xl font-montagna text-center z-[-100] font-black text-primary uppercase text-[180px] leading-[190px]">
            Sua loja de iphones
          </h1>
          <p className="text-center text-primary max-w-[1000px] mt-[20px] text-[20px]">
            Os menores preços em iPhones estão a um clique.
          </p>
          <Button className="uppercase min-w-[600px] mt-[30px] h-[60px]">
            Compre agora!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
