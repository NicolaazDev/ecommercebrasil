import { db } from "@/services/database";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { username, email, password } = data;

    if (!username || !email || !password) {
      return NextResponse.json(
        { message: "Preencha todos os campos!" },
        { status: 404 }
      );
    }

    const isUserExists = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (isUserExists) {
      return NextResponse.json(
        { message: "Email já existe!" },
        { status: 400 }
      );
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await db.user.create({
      data: {
        name: username,
        email,
        hashedPassword, // Certifique-se de que o campo está correto no seu modelo
      },
    });

    return NextResponse.json(
      { message: "Usuário criado com sucesso!" },
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
