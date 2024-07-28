"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import React, { useEffect, useMemo, useState } from "react";

type Image = {
  imageUrl: string;
};

type CarrouselProductProps = {
  imageArray: Image[];
};

export default function CarrouselProduct({
  imageArray,
}: CarrouselProductProps) {
  const [mainApi, setMainApi] = useState<any>();
  const [thumbnailApi, setThumbnailApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  const mainImage = useMemo(
    () =>
      imageArray.map(({ imageUrl }, index) => (
        <CarouselItem key={index} className="relative aspect-square w-full">
          <img
            src={imageUrl}
            className="h-full"
            alt={`Carousel Main Image ${index + 1}`}
            style={{ objectFit: "cover" }}
          />
        </CarouselItem>
      )),
    [imageArray]
  );

  const thumbnailImages = useMemo(
    () =>
      imageArray.map(({ imageUrl }, index) => (
        <CarouselItem
          key={index}
          className="relative aspect-square w-full basis-1/4"
          onClick={() => handleClick(index)}
        >
          <img
            className={`${index === current ? "border-2" : ""}`}
            src={imageUrl}
            alt={`Carousel Thumbnail Image ${index + 1}`}
            style={{ objectFit: "cover" }}
          />
        </CarouselItem>
      )),
    [imageArray, current]
  );

  useEffect(() => {
    if (!mainApi || !thumbnailApi) {
      return;
    }

    const handleTopSelect = () => {
      const selected = mainApi.selectedScrollSnap();
      setCurrent(selected);
      thumbnailApi.scrollTo(selected);
    };

    const handleBottomSelect = () => {
      const selected = thumbnailApi.selectedScrollSnap();
      setCurrent(selected);
      mainApi.scrollTo(selected);
    };

    mainApi.on("select", handleTopSelect);
    thumbnailApi.on("select", handleBottomSelect);

    return () => {
      mainApi.off("select", handleTopSelect);
      thumbnailApi.off("select", handleBottomSelect);
    };
  }, [mainApi, thumbnailApi]);

  const handleClick = (index: number) => {
    if (!mainApi || !thumbnailApi) {
      return;
    }
    thumbnailApi.scrollTo(index);
    mainApi.scrollTo(index);
    setCurrent(index);
  };

  return (
    <div className="w-[60%]">
      <Carousel setApi={setMainApi}>
        <CarouselContent className="m-1">{mainImage}</CarouselContent>
      </Carousel>
      <Carousel setApi={setThumbnailApi}>
        <CarouselContent className="m-1">{thumbnailImages}</CarouselContent>
      </Carousel>
    </div>
  );
}
