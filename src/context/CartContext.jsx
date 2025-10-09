import React, { createContext, useState, useContext } from "react";

// Create the context
const CartContext = createContext();

// Create a custom hook for easy access to the cart context
export const useCart = () => {
  return useContext(CartContext);
};

// Create a provider component to wrap your app
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

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
