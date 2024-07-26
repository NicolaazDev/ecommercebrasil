import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

import { db } from "@/services/database";

export async function GET(req: NextRequest, res: NextApiResponse) {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const id = searchParams.get("id");

  if (typeof id !== "string") {
    return NextResponse.json(
      { message: "Parâmetro inválido" },
      { status: 400 }
    );
  }

  try {
    const product = await db.product.findUnique({
      where: {
        id,
      },
      include: {
        stockVariants: {
          include: {
            images: true,
          },
        },
        ramVariants: true,
        connectivityVariants: true,
      },
    });

    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    console.log(product); // até aq ta certo

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
