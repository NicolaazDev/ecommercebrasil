"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { ProductTypes } from "@/types/modelTypes";
import { StockVariant } from "@prisma/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap-trial/all";

import React, { useLayoutEffect } from "react";

async function fetchProducts(category: string): Promise<ProductTypes[]> {
  const response = await fetch(
    `${process.env.API_BASE_URL}/api/product/getbycategories?category=${category}`
  );

  const data = await response.json();
  return data;
}

export default async function ShopPage({
  params,
}: {
  params: { category: string };
}) {
  // const products: any = await fetchProducts(params.category);

  const imageArray = [
    "https://res.cloudinary.com/dmceve2cp/image/upload/v1721282594/513naL3U_8L_kmpuon.png",
    "https://res.cloudinary.com/dmceve2cp/image/upload/v1721282594/513naL3U_8L_kmpuon.png",
    "https://res.cloudinary.com/dmceve2cp/image/upload/v1721282594/513naL3U_8L_kmpuon.png",
    "https://res.cloudinary.com/dmceve2cp/image/upload/v1721282594/513naL3U_8L_kmpuon.png",
    "https://res.cloudinary.com/dmceve2cp/image/upload/v1721282594/513naL3U_8L_kmpuon.png",
    "https://res.cloudinary.com/dmceve2cp/image/upload/v1721282594/513naL3U_8L_kmpuon.png",
  ];

  return (
    <main className="max-w-screen flex justify-center items-center overflow-y-hidden">
      <div className="max-w-screen-2xl w-full flex justify-center items-center flex-col bg-red-400">
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
                <BreadcrumbPage className="capitalize">
                  {params.category}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="w-full grid grid-cols-[3fr_1fr] h-[800px] mt-[40px]">
          <div className="w-full h-full flex justify-center items-center">
            <img
              className="w-[300px] h-[300px] object-cover"
              src={imageArray[Math.floor(Math.random() * imageArray.length)]}
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
}
