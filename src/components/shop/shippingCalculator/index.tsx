import React from "react";

import InputCep from "@/components/shop/inputCep";

interface ShippingCalculatorProps {
  cep: string;
  error: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ShippingCalculator = ({
  cep,
  error,
  handleChange,
}: ShippingCalculatorProps) => (
  <div className="mb-4 w-full">
    <span className="block text-gray-700 text-[16px] font-bold mb-3">
      Calcular prazo de Entrega
    </span>
    <InputCep
      value={cep}
      onChange={handleChange}
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
);

export default ShippingCalculator;
