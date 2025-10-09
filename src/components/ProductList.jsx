import React from "react";
import ProductCard from "./ProductCard";
import { product } from "../data/products";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="product-grid">
      {product.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
