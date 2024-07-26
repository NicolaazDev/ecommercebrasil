"use client";

import PaymentsForm from "../paymentsForm";
import InputCep from "../inputs/inputCep";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";

import { z } from "zod";
import { useState } from "react";

const cepSchema = z.string().regex(/^\d{5}-\d{3}$/, "CEP inválido");

export default function Form() {
  const [cep, setCep] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCep(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = cepSchema.safeParse(cep);
    if (result.success) {
      setError("");
      // Handle valid CEP submission
      console.log("CEP válido:", cep);
    } else {
      setError(result.error.errors[0].message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 w-full ">
        <span className="block text-gray-700 text-[16px] font-bold mb-3">
          Calcular prazo de Entrega
        </span>
        <InputCep
          value={cep}
          onChange={handleChange}
          onSubmit={handleSubmit}
          error={error}
          id="cep"
          buttonText="Calcular"
          placeholder="Insira seu CEP"
        />
        <div className="flex flex-col my-4 w-full">
          <span className="flex justify-between items-center text-gray-700 text-[16px] font-bold mb-1">
            Normal <span className="font-black text-[14px]">R$ 80,58</span>
          </span>
          <p className="text-gray-700 text-[14px]">
            Previsão de entrega até 13 de agosto
          </p>
        </div>
      </div>

      <div className="mb-4">
        <span className="block text-gray-700 text-[16px] font-bold mb-3">
          Escolha a cor
        </span>
        <div className="flex gap-2">
          <ToggleGroup type="single" variant={"outline"} defaultValue="1">
            <ToggleGroupItem
              aria-span="Toggle red"
              value="1"
              className={`w-[50px] h-[50px] p-0 border-[1px] transition-[all__0.5s_ease] border-solid border-transparent data-[state=on]:border-[#ff8724] data-[state=on]:shadow-[0px_1px_10px_1px_#ff8724] `}
            >
              <div className="bg-yellow-500 h-full w-full rounded-sm"></div>
            </ToggleGroupItem>

            <ToggleGroupItem
              aria-span="Toggle red"
              value="2"
              className={`w-[50px] h-[50px] p-0 border-[1px] transition-[all__0.5s_ease] border-solid border-transparent data-[state=on]:border-[#ff8724] data-[state=on]:shadow-[0px_1px_10px_1px_#ff8724] `}
            >
              <div className="bg-yellow-500 h-full w-full rounded-sm"></div>
            </ToggleGroupItem>
            <ToggleGroupItem
              aria-span="Toggle red"
              value="3"
              className={`w-[50px] h-[50px] p-0 border-[1px] transition-[all__0.5s_ease] border-solid border-transparent data-[state=on]:border-[#ff8724] data-[state=on]:shadow-[0px_1px_10px_1px_#ff8724] `}
            >
              <div className="bg-yellow-500 h-full w-full rounded-sm"></div>
            </ToggleGroupItem>
            <ToggleGroupItem
              aria-span="Toggle red"
              value="4"
              className={`w-[50px] h-[50px] p-0 border-[1px] transition-[all__0.5s_ease] border-solid border-transparent data-[state=on]:border-[#ff8724] data-[state=on]:shadow-[0px_1px_10px_1px_#ff8724] `}
            >
              <div className="bg-yellow-500 h-full w-full rounded-sm"></div>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div className="mb-4">
        <span className="block text-gray-700 font-bold mb-3">
          Escolha a capacidade
        </span>
        <div className="flex gap-2">
          <ToggleGroup type="single" variant={"outline"} defaultValue="1">
            <ToggleGroupItem
              aria-span="Toggle red"
              value="1"
              className={`w-[90px] h-[50px] p-0 border-[1px] transition-[all__0.5s_ease] border-solid border-[#b4b4b4] data-[state=on]:border-[#ff8724] data-[state=on]:shadow-[0px_1px_10px_1px_#ff8724] `}
            >
              <div>64GB</div>
            </ToggleGroupItem>
            <ToggleGroupItem
              aria-span="Toggle red"
              value="2"
              className={`w-[90px] h-[50px] p-0 border-[1px] transition-[all__0.5s_ease] border-solid border-[#b4b4b4] data-[state=on]:border-[#ff8724] data-[state=on]:shadow-[0px_1px_10px_1px_#ff8724] `}
            >
              <div>64GB</div>
            </ToggleGroupItem>
            <ToggleGroupItem
              aria-span="Toggle red"
              value="3"
              className={`w-[90px] h-[50px] p-0 border-[1px] transition-[all__0.5s_ease] border-solid border-[#b4b4b4] data-[state=on]:border-[#ff8724] data-[state=on]:shadow-[0px_1px_10px_1px_#ff8724] `}
            >
              <div>64GB</div>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div className="mb-4">
        <span className="block text-gray-700 font-bold mb-3">
          Formas de pagamento
        </span>
        <PaymentsForm />
      </div>

      <div className="flex items-start justify-center mt-4 w-full flex-col">
        <span className="block text-gray-700 font-bold mb-3">Iplace Box</span>
        <div className="w-full">
          <ToggleGroup
            type="single"
            variant={"outline"}
            defaultValue="1"
            className="w-full flex flex-col gap-3"
          >
            <ToggleGroupItem
              aria-span="Toggle red"
              value="1"
              className={`border-[1px] w-full py-8 transition-[all__0.5s_ease] border-solid data-[state=on]:border-[#ff8724] data-[state=on]:shadow-[0px_1px_10px_1px_#ff8724] `}
            >
              <div className=" h-full w-full rounded-sm flex justify-center items-center">
                <span className="text-[16px] text-primary">
                  Não quero uma Iplace Box
                </span>
              </div>
            </ToggleGroupItem>

            <ToggleGroupItem
              aria-span="Toggle red"
              value="2"
              className={`border-[1px] h-[160px] w-full transition-[all__0.5s_ease] border-solid data-[state=on]:border-[#ff8724] data-[state=on]:shadow-[0px_1px_10px_1px_#ff8724] `}
            >
              <div className="h-full w-full rounded-sm flex justify-center items-center flex-col ">
                <span className="text-[16px] text-primary">
                  Sim! Eu quero uma Iplace Box
                </span>
                <p className="text-gray-600 text-sm max-w-[70%] my-2">
                  Compre seu produto e ganhe brindes em um valor de até 2000
                  Reais.
                </p>
                <div className="flex justify-around items-center space-x-2 max-w-[70%] w-full">
                  <a
                    href="/saiba-mais"
                    className="text-primary underline text-sm"
                  >
                    Saiba mais
                  </a>
                  <p className="text-green-400 text-[17px]">+ R$ 949,90</p>
                </div>
              </div>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div className="flex items-start justify-center mt-4 w-full flex-col">
        <span className="block text-gray-700 font-bold mb-3">Seguro</span>
        <div className="w-full">
          <ToggleGroup
            type="single"
            variant={"outline"}
            defaultValue="1"
            className="w-full flex flex-col gap-3"
          >
            <ToggleGroupItem
              aria-span="Toggle red"
              value="1"
              className={`border-[1px] w-full py-8 transition-[all__0.5s_ease] border-solid data-[state=on]:border-[#ff8724] data-[state=on]:shadow-[0px_1px_10px_1px_#ff8724] `}
            >
              <div className=" h-full w-full rounded-sm flex justify-center items-center">
                <span className="text-[16px] text-primary">
                  Não quero um seguro no momento!
                </span>
              </div>
            </ToggleGroupItem>

            <ToggleGroupItem
              aria-span="Toggle red"
              value="2"
              className={`border-[1px] h-[160px] w-full transition-[all__0.5s_ease] border-solid data-[state=on]:border-[#ff8724] data-[state=on]:shadow-[0px_1px_10px_1px_#ff8724] `}
            >
              <div className="h-full w-full rounded-sm flex justify-center items-center flex-col ">
                <span className="text-[16px] text-primary">
                  Sim! Preciso de um seguro
                </span>
                <p className="text-gray-600 text-sm max-w-[70%] my-2">
                  Com esse seguro você proteje seu produto contra roubo, furto e
                  quebra acidental.
                </p>
                <div className="flex justify-around items-center space-x-2 max-w-[70%] w-full">
                  <a
                    href="/saiba-mais"
                    className="text-primary underline text-sm"
                  >
                    Saiba mais
                  </a>
                  <p className="text-green-400 text-[17px]">+ R$ 1949,90</p>
                </div>
              </div>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div className="my-8">
        <Button
          type="submit"
          className=" text-white px-4 py-2 rounded w-full h-[60px]"
        >
          Adicionar ao carrinho
        </Button>
      </div>
    </form>
  );
}
