import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

import { db } from "@/services/database";

export async function GET(req: NextRequest, res: NextApiResponse) {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const category = searchParams.get("category");

  if (typeof category !== "string") {
    return NextResponse.json(
      { message: "Parâmetro inválido" },
      { status: 400 }
    );
  }

  try {
    const products = await db.product.findMany({
      where: {
        category,
      },
      include: {
        stockVariants: true,
        ramVariants: true,
        connectivityVariants: true,
      },
    });

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
