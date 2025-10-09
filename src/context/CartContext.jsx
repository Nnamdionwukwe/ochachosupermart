import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const CartContext = createContext();

// Create a custom hook for easy access to the cart context
export const useCart = () => {
  return useContext(CartContext);
};

// Create a provider component to wrap your app
export const CartProvider = ({ children }) => {
  // const [cartItems, setCartItems] = useState([]);

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
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
