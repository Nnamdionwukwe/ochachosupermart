import { createContext, useContext, useState, useEffect } from "react";
import Data from "../Data.json";
import { useCart } from "./CartContext";
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const { selectedID } = useCart();

  useEffect(() => {
    // In a real app, this would be an API call
    const mockProducts = [Data.cosmetics];
    setProducts(selectedID);
    setLoading(false);
  }, [selectedID]);

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
