export interface ProductImage {
  imageUrl: string;
}

export interface StockVariant {
  color: string;
  hexColor: string;
  storage: string;
  storagePrice: number;
  stock: number;
  images: ProductImage[];
}

export interface RamVariant {
  ram: string;
  price: number;
}

export interface ConnectivityVariant {
  connectivity: string;
  price: number;
}

export interface ProductTypes {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  ref: string;
  imageUrl: string;
  boxIncluded?: boolean;
  descountedPrice: number;
  insurancePrice: number;
  descountPercent: number;
  descountIncluded?: boolean;
  insurancePercent: number;
  boxPrice: number;
  category: string;
  insuranceIncluded?: boolean;
  stockVariants: StockVariant[];
  ramVariants?: RamVariant[];
  connectivityVariants?: ConnectivityVariant[];
}
