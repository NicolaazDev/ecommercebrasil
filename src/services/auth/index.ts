import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { compare } from "bcryptjs";

import { db } from "../database";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  pages: {
    signIn: "/login",
    signOut: "/",
    verifyRequest: "/login",
    newUser: "/app",
  },
  adapter: PrismaAdapter(db),
  providers: [
    CredentialProvider({
      name: "credentials",
      id: "credentials",
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials): Promise<any> {
        if (!credentials?.email || !credentials?.password)
          throw new Error("Email e senha devem ser informados");

        const user = await db.user.findUnique({
          where: {
            email: credentials?.email as string,
          },
        });

        if (!user || !user.hashedPassword) {
          throw new Error("Email ou senha inválidos");
        }

        const matchPassword = await compare(
          credentials?.password as string,
          user.hashedPassword
        );

        if (!matchPassword) {
          throw new Error("Senha inválida");
        }

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  debug: process.env.NODE_ENV !== "production",
});
