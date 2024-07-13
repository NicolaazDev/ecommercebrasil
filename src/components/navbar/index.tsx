"use client";

import { Search, ShoppingBag, PackageOpenIcon, BlocksIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import Link from "next/link";

const navData = {
  smartphones: [
    { name: "Apple iPhone 14 Pro Max" },
    { name: "Samsung Galaxy S21 Ultra" },
    { name: "Google Pixel 6 Pro" },
    { name: "OnePlus 9 Pro" },
    { name: "Huawei P40 Pro" },
    { name: "Xiaomi Mi 11 Ultra" },
    { name: "Nokia 7.3" },
    { name: "Motorola One Vision" },
  ],
  accessories: [
    { name: "Fones de Ouvido" },
    { name: "Power Bank" },
    { name: "Cabos" },
    { name: "Carregadores" },
    { name: "Telas" },
    { name: "Adaptadores" },
  ],
  laptops: [
    { name: "Apple MacBook Pro 16" },
    { name: "Asus ROG Strix" },
    { name: "Dell XPS 13" },
    { name: "HP Envy 13" },
    { name: "Lenovo Legion 5" },
    { name: "Samsung Chromebook 5" },
    { name: "Toshiba Tecra 5" },
  ],
  services: [
    { name: "Rastreio" },
    { name: "Troca" },
    { name: "Devolução" },
    { name: "Seguro" },
  ],
};

export const NavbarComponent = () => {
  return (
    <header className="bg-background w-full">
      <div className="mx-auto flex max-w-full items-center justify-between py-4">
        <a href="/" className="flex items-center flex-row">
          <PackageOpenIcon size={40} />
          {/* <img src="/logo.png" alt="Logo" className="w-auto h-[110px]" /> */}
          <span className="ml-[10px] leading-4 font-extrabold">
            IPLACE <br /> BOX
          </span>
        </a>
        <NavigationMenu>
          <NavigationMenuItem className="list-none pt-[15px]">
            <NavigationMenuTrigger>Smartphones</NavigationMenuTrigger>
            <NavigationMenuContent className="grid grid-cols-[.75fr_1fr] p-4 min-w-[500px]">
              <NavigationMenuLink>
                <a
                  className="flex h-full w-full min-w-[180px] select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/shop/smartphones"
                >
                  <img
                    src="/assets/smartphones.png"
                    alt=""
                    className="min-w-[130px]"
                  />
                  <div className="mb-2 mt-4 text-lg font-medium">Ver todos</div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Veja os celulares mais vendidos, com o melhor preço.
                  </p>
                </a>
              </NavigationMenuLink>
              <ul className="gap-1 p-4 ml-[20px]">
                <div className="mb-2 mt-4 text-lg font-bold text-[22px]">
                  Smartphones
                </div>
                <li className="row-span-3">
                  <NavigationMenuLink>
                    {navData.smartphones.map((item) => (
                      <a
                        className="flex whitespace-nowrap opacity-90 select-none flex-col justify-end text-[14px] my-[3px] no-underline outline-none hover:opacity-100"
                        href={`/shop/smartphones/${item.name}`}
                      >
                        {item.name}
                      </a>
                    ))}
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="list-none pt-[15px]">
            <NavigationMenuTrigger>Laptops</NavigationMenuTrigger>
            <NavigationMenuContent className="grid grid-cols-[.75fr_1fr] p-4 min-w-[500px]">
              <NavigationMenuLink>
                <a
                  className="flex h-full w-full min-w-[180px] select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/shop/laptops"
                >
                  <img
                    src="/assets/laptops.png"
                    alt=""
                    className="min-w-[130px]"
                  />
                  <div className="mb-2 mt-4 text-lg font-medium">Ver todos</div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Veja os laptops mais vendidos, com o melhor preço.
                  </p>
                </a>
              </NavigationMenuLink>
              <ul className="gap-1 p-4 ml-[20px]">
                <div className="mb-2 mt-4 text-lg font-bold text-[22px]">
                  Laptops
                </div>
                <li className="row-span-3">
                  <NavigationMenuLink>
                    {navData.laptops.map((item) => (
                      <a
                        className="flex whitespace-nowrap opacity-90 select-none flex-col justify-end text-[14px] my-[3px] no-underline outline-none hover:opacity-100"
                        href={`/shop/laptops/${item.name}`}
                      >
                        {item.name}
                      </a>
                    ))}
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="list-none pt-[15px]">
            <NavigationMenuTrigger>Acessórios</NavigationMenuTrigger>
            <NavigationMenuContent className="grid grid-cols-[.75fr_1fr] p-4 min-w-[500px]">
              <NavigationMenuLink>
                <a
                  className="flex h-full w-full min-w-[180px] select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/shop/accessories"
                >
                  <img
                    src="/assets/accessories.png"
                    alt=""
                    className="min-w-[130px]"
                  />
                  <div className="mb-2 mt-4 text-lg font-medium">Ver todos</div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Acessórios para o seu aparelho, com o melhor preço.
                  </p>
                </a>
              </NavigationMenuLink>
              <ul className="gap-1 p-4 ml-[20px]">
                <div className="mb-2 mt-4 text-lg font-bold text-[22px]">
                  Acessórios
                </div>
                <li className="row-span-3">
                  <NavigationMenuLink>
                    {navData.accessories.map((item) => (
                      <a
                        className="flex whitespace-nowrap opacity-90 select-none flex-col justify-end text-[14px] my-[3px] no-underline outline-none hover:opacity-100"
                        href={`/shop/acessorios/${item.name}`}
                      >
                        {item.name}
                      </a>
                    ))}
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="list-none pt-[15px]">
            <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
            <NavigationMenuContent className="grid grid-cols-[.75fr_1fr] p-4 min-w-[500px]">
              <NavigationMenuLink>
                <a
                  className="flex h-full w-full min-w-[180px] select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/shop/services"
                >
                  <BlocksIcon size={54} />
                  <div className="mb-2 mt-4 text-lg font-medium">Ver todos</div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Serviçoes que a Iplace Box oferece a voce.
                  </p>
                </a>
              </NavigationMenuLink>
              <ul className="gap-1 p-4 ml-[20px]">
                <div className="mb-2 mt-4 text-lg font-bold text-[22px]">
                  Serviços
                </div>
                <li className="row-span-3">
                  <NavigationMenuLink>
                    {navData.services.map((item) => (
                      <a
                        className="flex whitespace-nowrap opacity-90 select-none flex-col justify-end text-[14px] my-[3px] no-underline outline-none hover:opacity-100"
                        href={`/shop/services/${item.name}`}
                      >
                        {item.name}
                      </a>
                    ))}
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <button className="rounded-md p-2 border-[1px] border-red border-solid">
            <Search className="h-4 w-4" />
          </button>
          <button className="rounded-md bg-primary p-2 text-white">
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavbarComponent;
