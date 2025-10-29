import React, { createContext, useState, useContext, useMemo } from "react";
import Data from "../Data.json"; // Contains "games" and "movies" nested objects

const ProductFilterContext = createContext();

// Helper to combine nested data from the JSON file
const getCombinedProducts = () => {
  const {
    cosmetics,
    pharmacy,
    toiletries,
    household,
    cereals,
    kitchen,
    food,
    chocolates,
    cigars,
    frozenfood,
    winespirits,
    softdrinks,
    toys,
    stationaries,
  } = Data;

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
    ...chocolates.map((p) => ({ ...p, type: "chocolates" })),
    ...cigars.map((p) => ({ ...p, type: "cigars" })),
    ...frozenfood.map((p) => ({ ...p, type: "frozenfood" })),
    ...winespirits.map((p) => ({ ...p, type: "winespirits" })),
    ...softdrinks.map((p) => ({ ...p, type: "softdrinks" })),
    ...toys.map((p) => ({ ...p, type: "toys" })),
    ...stationaries.map((p) => ({ ...p, type: "stationaries" })),
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
    return allProducts.filter((product) =>
      product.name.toLowerCase().includes(lowerCaseSearch)
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

  const filteredChocolates = useMemo(() => {
    return filteredProducts.filter((product) => product.type === "chocolates");
  }, [filteredProducts]);

  const filteredCigars = useMemo(() => {
    return filteredProducts.filter((product) => product.type === "chocolates");
  }, [filteredProducts]);

  const filteredFrozenFoods = useMemo(() => {
    return filteredProducts.filter((product) => product.type === "chocolates");
  }, [filteredProducts]);

  const filteredWinesSpirits = useMemo(() => {
    return filteredProducts.filter((product) => product.type === "chocolates");
  }, [filteredProducts]);

  const filteredSoftDrinks = useMemo(() => {
    return filteredProducts.filter((product) => product.type === "chocolates");
  }, [filteredProducts]);

  const filteredToys = useMemo(() => {
    return filteredProducts.filter((product) => product.type === "chocolates");
  }, [filteredProducts]);

  const filteredStationaries = useMemo(() => {
    return filteredProducts.filter((product) => product.type === "chocolates");
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
        filteredChocolates,
        filteredCigars,
        filteredFrozenFoods,
        filteredWinesSpirits,
        filteredSoftDrinks,
        filteredToys,
        filteredStationaries,
      }}
    >
      {children}
    </ProductFilterContext.Provider>
  );
};

export const useProductFilter = () => useContext(ProductFilterContext);
