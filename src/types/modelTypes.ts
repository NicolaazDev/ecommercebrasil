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
  name: string;
  description: string;
  basePrice: number;
  imageUrl: string;
  boxIncluded?: boolean;
  category: string;
  insuranceIncluded?: boolean;
  stockVariants: StockVariant[];
  ramVariants?: RamVariant[];
  connectivityVariants?: ConnectivityVariant[];
  products?: any;
}
