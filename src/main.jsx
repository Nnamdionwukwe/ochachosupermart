import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import NotificationProvider from "./context/NotificationProvider.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import { ProductFilterProvider } from "./context/ProductFilterContext.jsx";
// import { NotificationProvider } from "./context/NotificationProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <ProductProvider>
        <ProductFilterProvider>
          <NotificationProvider>{/* <App /> */}Hello</NotificationProvider>
        </ProductFilterProvider>
      </ProductProvider>
    </CartProvider>
  </StrictMode>
);
