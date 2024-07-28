import React from "react";
import ToggleGroup from "@/components/shop/toggleGroup";

interface AdditionalOptionsProps {
  selectedIplaceBox: string;
  selectedSeguro: string;
  handleIplaceBoxChange: (value: string) => void;
  handleSeguroChange: (value: string) => void;
  product: any;
}

const AdditionalOptions = ({
  selectedIplaceBox,
  selectedSeguro,
  handleIplaceBoxChange,
  handleSeguroChange,
  product,
}: AdditionalOptionsProps) => (
  <>
    <div className="mb-4">
      <span className="block text-gray-700 text-[16px] font-bold mb-3">
        Iplace Box
      </span>
      <ToggleGroup
        type="single"
        variant="outline"
        defaultValue={selectedIplaceBox}
        onValueChange={handleIplaceBoxChange}
        className="w-full flex flex-col gap-3"
      >
        <ToggleGroup.Item
          aria-span="Toggle red"
          value="1"
          className={`border-[1px] w-full py-8 transition-[all__0.5s_ease] border-solid data-[state=on]:border-[#ff8724] data-[state=on]:shadow-[0px_1px_10px_1px_#ff8724] `}
        >
          <div className=" h-full w-full rounded-sm flex justify-center items-center">
            <span className="text-[16px] text-primary">
              Não quero uma Iplace Box
            </span>
          </div>
        </ToggleGroup.Item>

        <ToggleGroup.Item
          aria-span="Toggle red"
          value="2"
          className={`border-[1px] h-[160px] w-full transition-[all__0.5s_ease] border-solid data-[state=on]:border-[#ff8724] data-[state=on]:shadow-[0px_1px_10px_1px_#ff8724] `}
        >
          <div className="h-full w-full rounded-sm flex justify-center items-center flex-col ">
            <span className="text-[16px] text-primary">
              Sim! Eu quero uma Iplace Box
            </span>
            <p className="text-gray-600 text-sm max-w-[70%] my-2">
              Compre seu produto e ganhe brindes em um valor de até 2000 Reais.
            </p>
            <div className="flex justify-around items-center space-x-2 max-w-[70%] w-full">
              <a href="/saiba-mais" className="text-primary underline text-sm">
                Saiba mais
              </a>
              <p className="text-green-400 text-[17px]">
                +{" "}
                {product.insurancePrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          </div>
        </ToggleGroup.Item>
      </ToggleGroup>
    </div>
    <div className="mb-4">
      <span className="block text-gray-700 text-[16px] font-bold mb-3">
        Seguro
      </span>
      <ToggleGroup
        type="single"
        variant="outline"
        defaultValue={selectedSeguro}
        onValueChange={handleSeguroChange}
        className="w-full flex flex-col gap-3"
      >
        <ToggleGroup.Item
          aria-span="Toggle red"
          value="1"
          className={`border-[1px] w-full py-8 transition-[all__0.5s_ease] border-solid data-[state=on]:border-[#ff8724] data-[state=on]:shadow-[0px_1px_10px_1px_#ff8724] `}
        >
          <div className=" h-full w-full rounded-sm flex justify-center items-center">
            <span className="text-[16px] text-primary">
              Não quero uma Iplace Box
            </span>
          </div>
        </ToggleGroup.Item>

        <ToggleGroup.Item
          aria-span="Toggle red"
          value="2"
          className={`border-[1px] h-[160px] w-full transition-[all__0.5s_ease] border-solid data-[state=on]:border-[#ff8724] data-[state=on]:shadow-[0px_1px_10px_1px_#ff8724] `}
        >
          <div className="h-full w-full rounded-sm flex justify-center items-center flex-col ">
            <span className="text-[16px] text-primary">
              Sim! Eu quero uma Iplace Box
            </span>
            <p className="text-gray-600 text-sm max-w-[70%] my-2">
              Compre seu produto e ganhe brindes em um valor de até 2000 Reais.
            </p>
            <div className="flex justify-around items-center space-x-2 max-w-[70%] w-full">
              <a href="/saiba-mais" className="text-primary underline text-sm">
                Saiba mais
              </a>
              <p className="text-green-400 text-[17px]">
                +{" "}
                {product.boxPrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          </div>
        </ToggleGroup.Item>
      </ToggleGroup>
    </div>
  </>
);

export default AdditionalOptions;
