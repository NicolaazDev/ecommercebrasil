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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ProductTypes } from "@/types/modelTypes";
import { StockVariant } from "@prisma/client";

import React from "react";

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
      <div className="max-w-screen-2xl w-full flex justify-center items-center flex-col ">
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

        <div className="w-full grid grid-cols-[2fr_1.3fr] h-[800px] mt-[40px] overflow-y-hidden">
          <div className="w-full h-full flex justify-center items-center">
            <CarrouselProduct imageArray={imageArray} />
          </div>

          <div className="w-full h-[95%] flex justify-center items-start overflow-y-scroll">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full">
              <h2 className="text-[32px] font-[900] leading-[32px] uppercase mb-2">
                Iphone 14 Pro Max
              </h2>
              <p className="text-[18px] text-gray-600 mb-4">
                64GB com camera dupla de 48MP e 12MP. Tela de 6.7 polegadas.
              </p>

              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="text-gray-500 line-through">R$ 10.999,00</p>
                <h3 className="text-[30px] font-[900] mb-2">R$ 7.999,00</h3>
                <p className="text-green-500">-20% de desconto</p>
              </div>

              <Separator className="my-8" />

              <Form />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
