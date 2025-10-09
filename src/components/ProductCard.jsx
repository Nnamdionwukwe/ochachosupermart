import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="product-image"
      />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
        {/* <p className="product-description">{product.description}</p> */}
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
