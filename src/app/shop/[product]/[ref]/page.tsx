import CarrouselProduct from "@/components/carrousel";
import ClientComponent from "@/components/shop/container";
import Form from "@/components/shop/form";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import React, { useState } from "react";

async function fetchProduct(ref: string) {
  const response = await fetch(
    `${process.env.API_BASE_URL}/api/product/getproduct?ref=${ref}`
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
  params: { ref: string };
}) {
  const refProduct: any = await fetchProduct(params.ref);

  if (!refProduct) {
    return (
      <div className="w-full h-screen flex justify-center items-center space-x-1">
        <p>Produto não existe, volte home</p>
        <a className="underline" href="/">
          novo
        </a>
      </div>
    );
  }

  return (
    <main className="max-w-screen flex justify-center items-center overflow-y-hidden">
      <div className="max-w-screen-2xl w-full flex justify-center items-center flex-col ">
        <ClientComponent
          initialImageArray={refProduct.stockVariants[0].images}
          product={refProduct}
        />
      </div>
    </main>
  );
}
