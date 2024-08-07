import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

import { db } from "@/services/database";

export async function GET(req: NextRequest, res: NextApiResponse) {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const ref = searchParams.get("ref");

  if (typeof ref !== "string") {
    return NextResponse.json(
      { message: "Parâmetro inválido" },
      { status: 400 }
    );
  }

  try {
    const product = await db.product.findFirst({
      where: {
        ref,
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
      return NextResponse.json(null, { status: 400 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
