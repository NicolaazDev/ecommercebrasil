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
import { products } from "@/data/products";

import { ProductTypes } from "@/types/modelTypes";
import { StockVariant } from "@prisma/client";

import React from "react";

async function fetchProduct(id: string) {
  const response = await fetch(
    `${process.env.API_BASE_URL}/api/product/getproduct?id=${id}`
  );

  if (!response.ok) {
    return null;
  }

  const data = await response.json();

  return data;
}

export default async function ShopPage({
  params,
}: {
  params: { product: string };
}) {
  const product: any = await fetchProduct(params.product);

  if (!product) {
    return (
      <div className="w-full h-screen flex justify-center items-center space-x-1">
        <p>Produto não existe, volte home</p>
        <a className="underline" href="/">
          novo
        </a>
      </div>
    );
  }

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
                    <BreadcrumbPage className="capitalize">
                      {params.product}
                    </BreadcrumbPage>
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

              {product && <Form data={product.stockVariants} />}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
