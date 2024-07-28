import { NextRequest, NextResponse } from "next/server";
import { db } from "@/services/database";

import {
  ConnectivityVariant,
  ProductTypes,
  RamVariant,
  StockVariant,
} from "@/interfaces/modelTypes";

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
      descountIncluded = false,
      boxPrice,
      ref,
      insurancePercent,
      descountPercent,
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

    const newProduct = await db.product.create({
      data: {
        name,
        description,
        basePrice,
        ref,
        imageUrl,
        category,
        boxIncluded,
        descountIncluded,
        descountPercent,
        boxPrice: boxIncluded ? boxPrice : null,
        descountedPrice: descountIncluded
          ? basePrice - (basePrice * descountPercent) / 100
          : null,
        insurancePrice: insuranceIncluded
          ? (basePrice * insurancePercent) / 100
          : null,
        insuranceIncluded,
        insurancePercent,
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
