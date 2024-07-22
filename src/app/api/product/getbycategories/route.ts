import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

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
    const products = await prisma.product.findMany({
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
