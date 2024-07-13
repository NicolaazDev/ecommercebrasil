"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { toast } from "@/components/ui/use-toast";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const form = useForm();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = form.handleSubmit(async (data) => {
    setIsLoading(true);

    try {
      setInterval(() => {
        setIsLoading(false);
      }, 5000);

      await signIn<"credentials">("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      router.push("/app");
    } catch (error) {
      toast({
        title: "Email ou senha inválidos!",
        description: "Não foi possível realizar o login",
      });
    }
  });

  return (
    <div className="mx-auto max-w-[450px] space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Entrar</h1>
        <p className="text-muted-foreground">
          Bem-vindo de volta, faça login para continuar
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="suaempresa@empresa.com"
            required
            {...form.register("email")}
          />
        </div>
        {/* <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" required />
        </div> */}
        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            placeholder="********"
            type="password"
            required
            {...form.register("password")}
          />
          <div />
        </div>
        {/* <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirme sua senha</Label>
          <Input id="confirm-password" required />
        </div> */}
        <Button disabled={isLoading} type="submit" className="w-full">
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Entrar
        </Button>
      </form>
    </div>
  );
}
