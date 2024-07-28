import { StockVariant, ProductTypes } from "@/interfaces/model";

export interface ProductProps {
  selectedColor: string;
  selectedStorage: string;
  stock: number;
}

export interface PriceProps {
  price: number;
  basePrice: number;
  descountPercent: number;
}

export interface AdditionalProps {
  selectedIplaceBox: string;
  selectedSeguro: string;
}

export interface VariantsProduct {
  color: string;
  storage: string;
}

export interface FormProps {
  data: StockVariant[];
  updateImageArray: (images: { imageUrl: string }[]) => void;
  product: ProductTypes;
}

export interface CartItem {
  price: number;
  productId: string;
  insurancePrice: number;
  boxPrice: number;
  selectedIplaceBox: string;
  selectedSeguro: string;
  selectedColor: string;
  selectedStorage: string;
  stock: number;
}
