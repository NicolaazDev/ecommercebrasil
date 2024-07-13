"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

import axios from "axios";

export type FormData = {
  username?: string;
  email?: string;
  password?: string;
};

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);

    const request = await axios.post("/api/users", {
      email: data.email,
      username: data.username,
      password: data.password,
    });

    if (request.status === 200 || request.status === 400) {
      setIsLoading(false);
    }

    if (request.status === 400) {
      toast({
        title: "Confirme seu Email!",
        description: request.data.message,
        variant: "destructive",
        action: (
          <ToastAction altText="Tente Novamente!">Tente Novamente!</ToastAction>
        ),
      });
    } else {
      router.push("/login");
    }
  };

  const validateConfirmPassword = (value: string) => {
    if (value === watch("password")) {
      return true;
    }
    return "As senhas não coincidem";
  };

  return (
    <div className="mx-auto max-w-[450px] space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Criar conta</h1>
        <p className="text-muted-foreground">
          Crie uma conta gratuita para começar.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="suaempresa@empresa.com"
            required
            {...register("email")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" required {...register("username")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            placeholder="********"
            type="password"
            required
            {...register("password")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirme sua senha</Label>
          <Input
            id="confirm-password"
            type="password"
            required
            {...register("confirm-password", {
              validate: validateConfirmPassword,
            })}
          />
          {errors["confirm-password"] &&
            typeof errors["confirm-password"].message === "string" && (
              <p className="text-red-500 text-sm">
                {errors["confirm-password"].message}
              </p>
            )}
        </div>
        <Button disabled={isLoading} type="submit" className="w-full">
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Criar Conta
        </Button>
      </form>
    </div>
  );
}
