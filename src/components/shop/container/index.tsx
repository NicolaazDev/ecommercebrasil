"use client";

import React, { useState } from "react";
import CarrouselProduct from "@/components/carrousel";
import Form from "@/components/shop/form";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type Image = {
  imageUrl: string;
};

type ClientComponentProps = {
  initialImageArray: Image[];
  product: any;
};

const ClientComponent: React.FC<ClientComponentProps> = ({
  initialImageArray,
  product,
}) => {
  const [imageArray, setImageArray] =
    useState<{ imageUrl: string }[]>(initialImageArray);

  return (
    <div className="w-full grid grid-cols-[2fr_1.3fr] h-[800px] overflow-y-hidden mt-[100px]">
      <div className="w-full h-full flex justify-center items-center flex-col">
        <div className="w-full py-8 flex justify-start items-center">
          <Breadcrumb>
            <BreadcrumbList className="text-[18px]">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="capitalize">aaa</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <CarrouselProduct imageArray={imageArray} />
      </div>

      <div className="w-full h-[95%] flex justify-center items-start overflow-y-scroll">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full">
          <h2 className="text-[32px] font-[900] leading-[32px] uppercase mb-2">
            {product.name}
          </h2>
          <p className="text-[18px] text-gray-600 mb-4">
            {product.description}
          </p>

          {product && (
            <Form
              product={product}
              data={product.stockVariants}
              updateImageArray={setImageArray}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientComponent;
