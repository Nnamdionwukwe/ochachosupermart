import { createContext, useState, useContext, useEffect, useMemo } from "react";
import Data from "../Data.json";

// Create the context
const CartContext = createContext();

// Create a custom hook for easy access to the cart context
export const useCart = () => {
  return useContext(CartContext);
};

// Create a provider component to wrap your app
export const CartProvider = ({ children }) => {
  //FOR THE SEARCH BAR TO SEARCH FOR PRODUCTS
  const [searchTerm, setSearchTerm] = useState("");

  // Combine the games and movies arrays into a single flat array
  const allProducts = useMemo(() => {
    return [...Data.cosmetics, ...Data.pharmacy];
  }, []); // Empty dependency array means this runs only once

  // Filter products based on the search term
  const filteredProducts = allProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const [cosmetic, setCosmetic] = useState(Data.cosmetics);
  const [pharmacy, setPharmacy] = useState(Data.pharmacy);
  const [selectedID, setSelectedID] = useState({});

  // const [loading, setLoading] = useState(true);

  // In a real app, this would be an API call
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     // Mock API data
  //     const mockProducts = [
  //       {
  //         id: 1,
  //         name: "Laptop",
  //         description: "A powerful and fast laptop.",
  //         price: 1200,
  //       },
  //       {
  //         id: 2,
  //         name: "Smartphone",
  //         description: "The latest model with an amazing camera.",
  //         price: 800,
  //       },
  //       {
  //         id: 3,
  //         name: "Headphones",
  //         description: "Noise-cancelling, over-ear headphones.",
  //         price: 150,
  //       },
  //     ];

  //     setProducts(mockProducts);
  //     setLoading(false);
  //   };

  //   fetchProducts();
  // }, []);

  // Use a lazy state initializer to read from localStorage only once
  const [cartItems, setCartItems] = useState(() => {
    try {
      const localCart = localStorage.getItem("cart");
      return localCart ? JSON.parse(localCart) : [];
    } catch (error) {
      console.error("Failed to load cart from localStorage", error);
      return [];
    }
  });

  // 3. Use useEffect to synchronize state with localStorage
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart to localStorage", error);
    }
  }, [cartItems]); // Dependency array ensures this runs whenever the cart state changes

  const [lastAddedItem, setLastAddedItem] = useState(null);

  const addToCart = (product) => {
    // Check if the product already exists in the cart
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // If it exists, create a new array with the quantity increased
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If it doesn't exist, add it as a new item with a quantity of 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    // Set the last added item to trigger the effect
    setLastAddedItem(product);
  };

  // (Optional) Add logic for removing items
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // (Optional) Add logic for updating quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    lastAddedItem,
    cosmetic,
    pharmacy,
    selectedID,
    setSelectedID,
    handleSearchChange,
    searchTerm,
    filteredProducts,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
