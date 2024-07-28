import React from "react";
import ToggleGroup from "@/components/shop/toggleGroup";

interface ProductOptionsProps {
  filteredColors: {
    color: string;
    hexColor: string;
  }[];
  filteredStorage: { storage: string }[];
  selectedColor: string;
  selectedStorage: string;
  handleColorChange: (value: string) => void;
  handleStorageChange: (value: string) => void;
}

const ProductOptions = ({
  filteredColors,
  filteredStorage,
  selectedColor,
  selectedStorage,
  handleColorChange,
  handleStorageChange,
}: ProductOptionsProps) => (
  <>
    <div className="mb-4">
      <span className="block text-gray-700 text-[16px] font-bold mb-3">
        Escolha a cor
      </span>
      <div className="flex gap-2">
        <ToggleGroup
          type="single"
          variant="outline"
          defaultValue={selectedColor}
          onValueChange={handleColorChange}
        >
          {filteredColors.map(({ color, hexColor }) => (
            <ToggleGroup.Item
              key={color}
              aria-span={`Toggle ${color}`}
              value={color}
              className="w-[50px] h-[50px] p-0 border-[1px] transition-[all_0.5s_ease] border-solid data-[state=on]:border-[#ff8724] data-[state=on]:shadow-[0px_1px_10px_1px_#ff8724]"
            >
              <div
                className="h-full w-full rounded-sm"
                style={{ backgroundColor: hexColor }}
              ></div>
            </ToggleGroup.Item>
          ))}
        </ToggleGroup>
      </div>
    </div>
    <div className="mb-4">
      <span className="block text-gray-700 text-[16px] font-bold mb-3">
        Escolha o armazenamento
      </span>
      <div className="flex gap-2">
        <ToggleGroup
          type="single"
          variant="outline"
          defaultValue={selectedStorage}
          onValueChange={handleStorageChange}
        >
          {filteredStorage.map(({ storage }) => (
            <ToggleGroup.Item
              key={storage}
              aria-span={`Toggle ${storage}`}
              value={storage}
              className="w-auto h-[50px] p-2 border-[1px] transition-[all_0.5s_ease] border-solid data-[state=on]:border-[#ff8724] data-[state=on]:shadow-[0px_1px_10px_1px_#ff8724]"
            >
              {storage}
            </ToggleGroup.Item>
          ))}
        </ToggleGroup>
      </div>
    </div>
  </>
);

export default ProductOptions;
