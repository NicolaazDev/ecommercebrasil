"use client";

// * Hooks

import { useEffect, useState } from "react";

// * Form components

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import PriceDisplay from "@/components/shop/priceDisplay";
import ShippingCalculator from "@/components/shop/shippingCalculator";
import ProductOptions from "@/components/shop/productOptions";
import AdditionalOptions from "@/components/shop/additionalOptions";
import PaymentsForm from "@/components/shop/paymentsForm";

// * Utils

import {
  filterUniqueColors,
  filterUniqueStorage,
} from "@/components/shop/form/filtersUtils";

// * Interfaces

import {
  ProductProps,
  AdditionalProps,
  PriceProps,
  VariantsProduct,
  FormProps,
  CartItem,
} from "@/interfaces/form";

// * Form

export default function Form({ data, updateImageArray, product }: FormProps) {
  const [cep, setCep] = useState("");
  const [error, setError] = useState("");

  const [productDetails, setProductDetails] = useState<ProductProps>({
    selectedColor: data[0].color,
    selectedStorage: data[0].storage,
    stock: data[0].stock,
  });

  const [priceDetails, setPriceDetails] = useState<PriceProps>({
    price: product.descountedPrice,
    basePrice: product.basePrice,
    descountPercent: product.descountPercent,
  });

  const [additionalOptions, setAdditionalOptions] = useState<AdditionalProps>({
    selectedIplaceBox: "1",
    selectedSeguro: "1",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCep(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const shoppingCartItem: CartItem = {
      ...productDetails,
      ...additionalOptions,
      price: priceDetails.price,
      productId: product.id,
      insurancePrice: product.insurancePrice,
      boxPrice: product.boxPrice,
    };

    const shoppingCart: CartItem[] = JSON.parse(
      localStorage.getItem("shoppingCart") || "[]"
    );

    shoppingCart.push(shoppingCartItem);

    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  };

  useEffect(() => {
    setPriceDetails((prev) => ({ ...prev, price: product.descountedPrice }));
  }, [product.descountedPrice]);

  const filteredColors = filterUniqueColors(data);
  const filteredStorage = filterUniqueStorage(data);

  const handleColorChange = (color: string) => {
    setProductDetails((prev) => ({ ...prev, selectedColor: color }));
    updateProductDetails(color, productDetails.selectedStorage);
  };

  const handleStorageChange = (storage: string) => {
    setProductDetails((prev) => ({ ...prev, selectedStorage: storage }));
    updateProductDetails(productDetails.selectedColor, storage);
  };

  const handleIplaceBoxChange = (value: string) => {
    setAdditionalOptions((prev) => ({ ...prev, selectedIplaceBox: value }));
  };

  const handleSeguroChange = (value: string) => {
    setAdditionalOptions((prev) => ({ ...prev, selectedSeguro: value }));
  };

  const updateProductDetails = (color: string, storage: string) => {
    const selectedVariant = data.find(
      (variant: VariantsProduct) =>
        variant.color === color && variant.storage === storage
    );
    if (selectedVariant) {
      setPriceDetails((prev) => ({
        price: product.descountedPrice + selectedVariant.storagePrice,
        basePrice: product.basePrice + selectedVariant.storagePrice,
        descountPercent: prev.descountPercent,
      }));
      setProductDetails((prev) => ({ ...prev, stock: selectedVariant.stock }));

      console.log("selectedVariant", selectedVariant);
      updateImageArray(selectedVariant.images);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PriceDisplay
        price={priceDetails.price}
        basePrice={priceDetails.basePrice}
        descountPercent={priceDetails.descountPercent}
      />

      <Separator className="my-8" />

      <ShippingCalculator cep={cep} error={error} handleChange={handleChange} />

      <PaymentsForm />

      <ProductOptions
        filteredColors={filteredColors}
        filteredStorage={filteredStorage}
        selectedColor={productDetails.selectedColor}
        selectedStorage={productDetails.selectedStorage}
        handleColorChange={handleColorChange}
        handleStorageChange={handleStorageChange}
      />

      <AdditionalOptions
        selectedIplaceBox={additionalOptions.selectedIplaceBox}
        selectedSeguro={additionalOptions.selectedSeguro}
        handleIplaceBoxChange={handleIplaceBoxChange}
        handleSeguroChange={handleSeguroChange}
        product={product}
      />

      <div className="flex justify-between items-center gap-4 mt-4 w-full">
        <Button
          type="submit"
          className="w-full p-8 h-full flex items-center justify-center"
        >
          Comprar
        </Button>
      </div>
    </form>
  );
}
