import React, { useLayoutEffect } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap-trial/all";

import { ItemsBox } from "@/data/boxitems";

export const RealeaseSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.fromTo(
      ".items-grid",
      { y: 0, opacity: 0 },
      {
        y: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".box_container",
          start: "top 520px",
          end: "bottom 110%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".text_up",
      { y: 0, opacity: 0 },
      {
        y: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".box_container",
          start: "top 820px",
          end: "bottom 110%",
          scrub: true,
        },
      }
    );

    return () => {
      gsap.killTweensOf(".items-grid .text_up");
    };
  }, []);

  return (
    <section className="box_container bg-zinc-950 w-screen relative flex justify-center items-center overflow-hidden">
      <div className="max-w-screen-2xl h-full">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-8xl text_up text-center text-[#e6e6e6] uppercase font-montagna">
            Oque vem na caixa?
          </h1>
          <p className="text-[18px] text_up mt-5 opacity-85 text-center text-[#e6e6e6] ">
            Veja oque vem de brinde ao comprar um de nossos produtos
          </p>
        </div>
        <div className="grid items-grid grid-cols-3 gap-4 mt-12 translate-y-[40px]">
          {ItemsBox.map(({ src, alt, title, description }) => (
            <div
              key={src}
              className="radialcard-gradient flex justify-center items-center flex-col p-4 py-[60px] bg-transparent rounded-lg shadow-lg border border-solid  border-[#a8a8a854]"
            >
              <img
                src={src}
                alt={alt}
                className="mx-auto rounded-[10px] h-[200px]"
              />
              <h2 className="text-2xl font-bold text-center mt-[30px] text-[45px] text-[#e6e6e6]">
                {title}
              </h2>
              <p className="text-center mt-4 text-[#e6e6e6] max-w-[80%]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
