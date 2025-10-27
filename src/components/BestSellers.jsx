import React from "react";
import { formatNGN } from "../utils/FormartCurrncyNG";
// import { formatNGN } from "../utils/formatCurrency"; // Utility function
import "./ProductGrid.css";

const BestSellers = ({ products, title }) => {
  return (
    <section className="product-grid-section">
      <h2 className="section-title">{title}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-card-body">
              <h3>{product.name}</h3>
              <p className="product-price">{formatNGN(product.price)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
