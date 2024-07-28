import React from "react";

interface PriceDisplayProps {
  price: number;
  basePrice: number;
  descountPercent: number;
}

const PriceDisplay = ({
  price,
  basePrice,
  descountPercent,
}: PriceDisplayProps) => (
  <div className="bg-gray-100 p-4 rounded-lg mb-4">
    <p className="text-gray-500 line-through">
      {basePrice.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}
    </p>
    <h3 className="text-[30px] font-[900] mb-2">
      {price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}
    </h3>
    <p className="text-green-500">- {descountPercent}% de desconto</p>
  </div>
);

export default PriceDisplay;
