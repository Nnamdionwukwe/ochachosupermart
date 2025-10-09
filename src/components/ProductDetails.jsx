import React, { useState } from "react";
// import "./ProductDetails.css"; // Add a CSS file for styles

const ProductDetails = ({ product }) => {
  const [selectedOption, setSelectedOption] = useState(
    product.options.color[0]
  );

  const handleAddToCart = () => {
    alert(`Added ${product.name} (${selectedOption}) to cart!`);
    // Add logic to update a global state or send data to a backend
  };

  return (
    <div className="product-details">
      <h1 className="product-name">{product.name}</h1>
      <p className="product-brand">by {product.brand}</p>
      <div className="price-container">
        <span className="product-price">${product.price.toFixed(2)}</span>
        <span className="product-rating">{product.rating} ★</span>
      </div>
      <p className="product-description">{product.description}</p>

      <div className="options-selector">
        <h4>Color:</h4>
        {product.options.color.map((color) => (
          <button
            key={color}
            className={`option-button ${
              color === selectedOption ? "active" : ""
            }`}
            onClick={() => setSelectedOption(color)}
          >
            {color}
          </button>
        ))}
      </div>

      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
