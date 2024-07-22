import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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
    <main className="max-w-screen flex justify-center items-center">
      <div className="max-w-screen-2xl w-full flex justify-center items-center flex-col">
        <div className="w-full mt-[100px] relative h-[410px]">
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
        <div className="w-full grid grid-cols-[1fr_3fr]">
          <div className=""></div>
          <div className="items-center"></div>
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
