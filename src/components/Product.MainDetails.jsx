import React from "react";
import ProductCard from "./ProductCard";
import { product } from "../data/products";
import "./ProductList.css";
import ProductDetail from "./ProductDetail";

const ProductMainDetails = () => {
  return (
    <div className="product-grid">
      {product.map((product) => (
        <ProductDetail key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductMainDetails;
