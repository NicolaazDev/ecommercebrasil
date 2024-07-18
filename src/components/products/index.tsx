import { products } from "@/data/products";
import React, { useRef } from "react";

import Slider, { Settings } from "react-slick";

import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "../ui/button";
import { PackagePlusIcon } from "lucide-react";

const Product = ({
  image,
  name,
  price,
  description,
  pricedesconto,
}: {
  image: string;
  name: string;
  price: number;
  description: string;
  pricedesconto: number;
}) => {
  return (
    <div
      className={`mx-[5px] justify-center bg-gradient-to-bl bg-[#050505] img-clip relative border-[1px] h-[600px] border-[#353535] border-solid rounded-[15px] flex flex-row items-center gap-2 p-4 z-[9999999]} `}
    >
      <img
        src={image}
        className="h-[90%] rounded-lg object-contain"
        alt={name}
      />
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center font-monte uppercase text-[80px] font-black max-w-[80%] min-w-[80%] text-background leading-[60px]">
          {name}
        </h2>

        <p className="text-[24px] opacity-80 font-[100] font-poppins leading-[28px] max-w-[80%] mt-[20px] min-w-[80%] text-background text-center">
          {description}
        </p>

        <div className="max-w-[80%] min-w-[80%] mt-[50px] flex justify-center items-center flex-col">
          <p className="text-lg text-background w-[100%] text-[24px] opacity-70 line-through text">
            R$ {price.toFixed(3)},00
          </p>
          <div className="flex items-center justify-start mt-2 gap-2 min-w-[100%]">
            <Button className="info_button rounded-[10px] h-[65px] text-[28px] px-8">
              R$ {pricedesconto.toFixed(3)},00
            </Button>
            <Button className="rounded-[10px] h-[65px] px-7 hover:bg-[#ececec] hover:text-[#0a0a0a]">
              <PackagePlusIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SimpleSlider = React.forwardRef<Slider, {}>((props, ref) => {
  const settings: Settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    swipeToSlide: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "50px",
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 5300,
  };

  return (
    <Slider className="my-slider" ref={ref} {...settings}>
      {products.map((product) => (
        <Product key={product.name} {...product} />
      ))}
    </Slider>
  );
});

export default function ProductsSection() {
  const sliderRef = useRef<Slider | null>(null);

  return (
    <section className=" py-[210px] products__container w-full min-h-screen  bg-zinc-950 opacity-100 z-[-100] flex flex-col justify-start items-center">
      <div className="content max-w-screen-2xl flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-8xl text-center text-[#e6e6e6] uppercase font-montagna">
            Lançamentos Recentes
          </h1>
          <p className="text-[18px] mt-5 opacity-85 text-center text-[#e6e6e6] ">
            Confira as última novidades do nosso box.
          </p>
        </div>
        <div className="container mt-[60px]">
          <SimpleSlider ref={sliderRef} />
        </div>
      </div>
    </section>
  );
}
