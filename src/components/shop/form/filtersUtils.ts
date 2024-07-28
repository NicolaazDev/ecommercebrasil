import { StockVariant } from "@/interfaces/model";
import { FilterColors, FilterStorage } from "@/interfaces/filter";

export const filterUniqueColors = (data: StockVariant[]): FilterColors[] => {
  const uniqueColors: FilterColors[] = [];

  data.forEach(({ color, hexColor }: { color: string; hexColor: string }) => {
    if (!uniqueColors.find((item: FilterColors) => item.color === color)) {
      uniqueColors.push({ color, hexColor });
    }
  });
  return uniqueColors;
};

export const filterUniqueStorage = (data: StockVariant[]): FilterStorage[] => {
  const uniqueStorage: FilterStorage[] = [];

  data.forEach(({ storage }: FilterStorage) => {
    if (
      !uniqueStorage.find((item: FilterStorage) => item.storage === storage)
    ) {
      uniqueStorage.push({ storage });
    }
  });
  return uniqueStorage;
};
