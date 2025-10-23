import React, { createContext, useState, useContext, useMemo } from "react";
import { getPersistentProductsWithIds } from "./productsWithIds";

const ProductFilterContext = createContext();

export const ProductFilterProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const allProducts = useMemo(getPersistentProductsWithIds, []);

  // Filter products based on the search term
  const filteredProducts = useMemo(() => {
    if (!searchTerm) {
      return allProducts;
    }
    const lowerCaseSearch = searchTerm.toLowerCase();
    return allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerCaseSearch) ||
        (product.price &&
          product.description.toLowerCase().includes(lowerCaseSearch))
    );
  }, [searchTerm, allProducts]);

  // Separate filtered products by type
  const filteredCosmetics = useMemo(() => {
    return filteredProducts.filter((product) => product.type === "cosmetics");
  }, [filteredProducts]);

  const filteredPharmacy = useMemo(() => {
    return filteredProducts.filter((product) => product.type === "pharmacy");
  }, [filteredProducts]);

  const filteredToiletries = useMemo(() => {
    return filteredProducts.filter((product) => product.type === "toiletries");
  }, [filteredProducts]);

  const filteredHousehold = useMemo(() => {
    return filteredProducts.filter((product) => product.type === "household");
  }, [filteredProducts]);

  const filteredCereals = useMemo(() => {
    return filteredProducts.filter((product) => product.type === "cereals");
  }, [filteredProducts]);

  const filteredKitchen = useMemo(() => {
    return filteredProducts.filter((product) => product.type === "kitchen");
  }, [filteredProducts]);

  return (
    <ProductFilterContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        filteredCosmetics,
        filteredPharmacy,
        filteredToiletries,
        filteredHousehold,
        filteredCereals,
        filteredKitchen,
      }}
    >
      {children}
    </ProductFilterContext.Provider>
  );
};

export const useProductFilter = () => useContext(ProductFilterContext);
