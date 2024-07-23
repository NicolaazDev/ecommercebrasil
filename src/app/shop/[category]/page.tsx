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

  const categoryImages: { [key: string]: string } = {
    mac: "https://media.wired.com/photos/5bd883dc5b66a763e54f0b22/master/pass/macbookair3.jpg",
    airpods:
      "https://media.wired.com/photos/632b71c4f1e5c40d2b1bc705/master/pass/AirPods-Pro-2nd-Gen-Gear.jpg",
    iphone:
      "https://www.vodacombusiness.co.za/sites/vodacombusinesscoza/files/styles/extra_large_landscape/public/2022-11/vb_desktopbanner_1920x720_iphone_14_pro1.jpg?itok=i2n1frC_",
    ipad: "https://blogdoiphone.com/wp-content/uploads/2022/03/iPadAir5.jpg",
    watch:
      "https://www.apple.com/v/apple-watch-series-7/c/images/overview/hero/hero_intro_hardware__fg5bn8mfky2q_large.jpg",
  };

  const categoryInfo: { [key: string]: { title: string; desc: string } } = {
    mac: {
      title: "MacBooks",
      desc: " MacBook Air, MacBook Pro e Imac's. Confira aqui os modelos que a Apple oferece.",
    },
    airpods: {
      title: "AirPods",
      desc: "AirPods Pro, AirPods Max e AirPods 3. Confira aqui os modelos que a Apple oferece.",
    },
    iphone: {
      title: "iPhone",
      desc: "iPhone 14, iPhone 14 Plus e iPhone 14 Pro. Confira aqui os modelos que a Apple oferece.",
    },
    ipad: {
      title: "iPad",
      desc: "iPad, iPad Pro e iPad Air. Confira aqui os modelos que a Apple oferece.",
    },
    watch: {
      title: "Watch",
      desc: "Watch Series 7, Watch Series 8 e Watch Ultra. Confira aqui os modelos que a Apple oferece.",
    },
  };

  const imageUrl =
    categoryImages[params.category] || "/assets/default_topograph.webp";

  return (
    <main className="max-w-screen flex justify-center items-center overflow-y-hidden">
      <div className="max-w-screen-2xl w-full flex justify-center items-center flex-col">
        <div className="w-full mt-[100px] relative h-[410px] itens_container">
          <div className="w-full h-full bg-[#000000c0] rounded-[15px] flex justify-center items-center flex-col">
            <h1 className="text-4xl font-montagna text-center text-[#e7e7e7] font-black text-primary uppercase text-[180px] leading-[190px] ">
              {categoryInfo[params.category].title}
            </h1>
            <p className="text-center text-primary text-[#e7e7e7] max-w-[1000px] mt-[20px] text-[20px]">
              {categoryInfo[params.category].desc}
            </p>
          </div>
          <img
            src={imageUrl}
            alt="topo"
            className="h-full object-cover w-full rounded-[15px] absolute top-0 left-0 z-[-1]"
          />
        </div>

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

        <div className="w-full grid grid-cols-[1fr_3fr] h-[800px] mt-[40px]">
          <div>
            <div>
              <h2 className="text-3xl font-bold">
                {categoryInfo[params.category].title}
              </h2>
              <p>200 Produtos</p>
            </div>

            <div className="w-full h-[300px] pt-10">
              <Separator />
              <Accordion
                type="multiple"
                defaultValue={["item-1", "item-2", "item-3"]}
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-[28px]">
                    Preços
                  </AccordionTrigger>
                  <AccordionContent className="[&>p]:text-[15px] [&>p]:mt-[7px]">
                    <p>Até R$2.000,00</p>
                    <p>R$2.000,00 a R$5.000,00</p>
                    <p>R$5.000,00 a R$10.000,00</p>
                    <p>Acima de R$10.000,00</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-[28px]">
                    Capacidade
                  </AccordionTrigger>
                  <AccordionContent
                    className="[&>label]:text-[15px] [&>label]:mt-[7px] flex justify-center item
                  flex-col [&>button]:flex [&>button]:items-center [&>label]:ml-[10px] [&>button]:justify-center"
                  >
                    {Array.from({ length: 4 }, (_, index) => (
                      <div key={index} className="flex items-center mb-2 py-1">
                        <Checkbox id={`teste-${index}`} />
                        <label
                          htmlFor={`teste-${index}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          256GB
                        </label>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-[28px]">
                    Capacidade
                  </AccordionTrigger>
                  <AccordionContent
                    className="[&>label]:text-[15px] [&>label]:mt-[7px] flex justify-center item
                  flex-col [&>button]:flex [&>button]:items-center [&>label]:ml-[10px] [&>button]:justify-center"
                  >
                    {Array.from({ length: 4 }, (_, index) => (
                      <div key={index} className="flex items-center mb-2 py-1">
                        <Checkbox id={`teste-${index}`} />
                        <label
                          htmlFor={`teste-${index}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          256GB
                        </label>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div
            id="itens-shop"
            className="items-center px-4 grid grid-cols-4 w-full gap-10 max-h-[1300px] overflow-y-scroll"
          >
            {Array.from({ length: 20 }, (_, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-[400px] flex-col"
              >
                <img src="https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18762-zero.png?context=bWFzdGVyfGltYWdlc3w5NTEzNXxpbWFnZS9wbmd8YURZeEwyaGpNaTg1TnpNeE9UY3pNREl4TnpJMkx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RjMk1sOTZaWEp2TG5CdVp3fDY3ZGNkYjUzZGM0NzYxZjI2MGNhNTQxMjQwNGMxMzZmMjBiMmI0YjFkYjZjMTExYmQwZGYyMDhkYjU5YmNjZDM" />
                <div className="mt-[30px]">
                  <p className="text-[14px]">Apple</p>
                  <h1 className="text-[18px] font-extrabold mt-0">
                    iPhone 13 Pro
                  </h1>
                  <p className="opacity-80 my-2">Apple M1 - 8GB RAM - 256GB</p>
                  <div className="flex justify-between items-center">
                    <p className="text-[21px] font-black">R$ 12.999,99</p>
                    <span className="bg-green-300 py-1 px-2 rounded-[5px]">
                      - %35
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

// {products.products.map((product: any) => (
//   <div key={product.id}>
//     <h2>{product.name}</h2>
//     <p>{product.description}</p>
//     <img src={product.imageUrl} alt={product.name} />
//     {product.stockVariants.map((variant: StockVariant) => (
//       <div key={variant.id}>
//         <p>Color: {variant.color}</p>
//         <p>Storage: {variant.storage}</p>
//         <p>Price: ${variant.storagePrice}</p>
//         <p>Stock: {variant.stock}</p>
//       </div>
//     ))}
//   </div>
// ))}
