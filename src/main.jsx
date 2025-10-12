import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import NotificationProvider from "./context/NotificationProvider.jsx";
// import { NotificationProvider } from "./context/NotificationProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </CartProvider>
  </StrictMode>
);
