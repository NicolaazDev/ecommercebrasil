import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

import {
  ConnectivityVariant,
  ProductTypes,
  RamVariant,
  StockVariant,
} from "@/types/modelTypes";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const data: ProductTypes = await request.json();
    const {
      name,
      description,
      basePrice,
      imageUrl,
      category,
      boxIncluded = false,
      insuranceIncluded = false,
      stockVariants,
      ramVariants,
      connectivityVariants,
    } = data;

    if (
      !name ||
      !description ||
      !basePrice ||
      !imageUrl ||
      !stockVariants ||
      !stockVariants.length
    ) {
      return NextResponse.json(
        { message: "Preencha todos os campos corretamente!" },
        { status: 400 }
      );
    }

    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        basePrice,
        imageUrl,
        category,
        boxIncluded,
        insuranceIncluded,
        stockVariants: {
          create: stockVariants.map((variant: StockVariant) => ({
            color: variant.color,
            hexColor: variant.hexColor,
            storage: variant.storage,
            storagePrice: variant.storagePrice,
            stock: variant.stock,
            images: {
              create: variant.images.map((image: { imageUrl: string }) => ({
                imageUrl: image.imageUrl,
              })),
            },
          })),
        },
        ramVariants: ramVariants
          ? {
              create: ramVariants.map((variant: RamVariant) => ({
                ram: variant.ram,
                price: variant.price,
              })),
            }
          : undefined,
        connectivityVariants: connectivityVariants
          ? {
              create: connectivityVariants.map(
                (variant: ConnectivityVariant) => ({
                  connectivity: variant.connectivity,
                  price: variant.price,
                })
              ),
            }
          : undefined,
      },
    });

    return NextResponse.json(
      { message: "Produto adicionado com sucesso!", product: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao processar a solicitação:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
