import React, { createContext, useState, useContext, useMemo } from "react";
import Data from "../Data.json"; // Contains "games" and "movies" nested objects

const ProductFilterContext = createContext();

// Helper to combine nested data from the JSON file
const getCombinedProducts = () => {
  const { cosmetics, pharmacy, toiletries, household, cereals, kitchen, food } =
    Data;

  return [
    ...cosmetics.map((c) => ({ ...c, type: "cosmetics" })),
    ...pharmacy.map((p) => ({ ...p, type: "pharmacy" })),
    ...toiletries.map((t) => ({
      ...t,
      type: "toiletries",
    })),
    ...household.map((h) => ({
      ...h,
      type: "household",
    })),
    ...kitchen.map((p) => ({ ...p, type: "kitchen" })),
    ...cereals.map((p) => ({ ...p, type: "cereals" })),
    ...food.map((p) => ({ ...p, type: "food" })),
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

  const filteredCereals = useMemo(() => {
    return filteredProducts.filter((product) => product.type === "cereals");
  }, [filteredProducts]);

  const filteredKitchen = useMemo(() => {
    return filteredProducts.filter((product) => product.type === "kitchen");
  }, [filteredProducts]);

  const filteredFood = useMemo(() => {
    return filteredProducts.filter((product) => product.type === "food");
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
        filteredFood,
      }}
    >
      {children}
    </ProductFilterContext.Provider>
  );
};

export const useProductFilter = () => useContext(ProductFilterContext);
