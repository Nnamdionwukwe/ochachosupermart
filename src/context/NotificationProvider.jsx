import React, { useState, useEffect } from "react";
// import { useCart } from "../contexts/CartContext";
import "./Notification.css";
import { useCart } from "./CartContext";

const NotificationProvider = ({ children }) => {
  const { lastAddedItem } = useCart();
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // This effect runs whenever `lastAddedItem` changes
    if (lastAddedItem) {
      setMessage(`${lastAddedItem.name} added to cart!`);
      setShowPopup(true);

      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);

      // Cleanup function to clear the timer
      return () => clearTimeout(timer);
    }
  }, [lastAddedItem]);

  return (
    <>
      {children}
      {showPopup && (
        <div className="added-to-cart-popup">
          <p>✅ {message}</p>
        </div>
      )}
    </>
  );
};

export default NotificationProvider;
