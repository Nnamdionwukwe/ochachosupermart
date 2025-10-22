import React, { createContext, useState, useContext, useMemo } from "react";
import Data from "../Data.json"; // Contains "games" and "movies" nested objects

const ProductFilterContext = createContext();

// Helper to combine nested data from the JSON file
const getCombinedProducts = () => {
  const { cosmetics, pharmacy, toiletries, household } = Data;
  return [
    ...cosmetics.map((c) => ({ ...c, type: "cosmetics" })),
    ...pharmacy.map((p) => ({ ...p, type: "pharmacy" })),
    ...toiletries.map((t) => ({ ...t, type: "toiletries" })),
    ...household.map((h) => ({ ...h, type: "household" })),
  ];
};

export const ProductFilterProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const allProducts = useMemo(getCombinedProducts, []);

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

  return (
    <ProductFilterContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        filteredCosmetics,
        filteredPharmacy,
        filteredToiletries,
        filteredHousehold,
      }}
    >
      {children}
    </ProductFilterContext.Provider>
  );
};

export const useProductFilter = () => useContext(ProductFilterContext);
