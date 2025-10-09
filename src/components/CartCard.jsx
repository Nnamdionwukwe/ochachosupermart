// CartItem.jsx
import React from "react";
import "./CartCard.css";

function CartCard({ item, removeFromCart, updateQuantity }) {
  return (
    <div class="cart-card">
      <div class="product-image">
        <img src={item.imageUrl} alt="Product Name" />
      </div>
      <div class="product-details">
        <h3 class="product-title">{item.name}</h3>
        <p class="product-price">#{item.price.toFixed(2)}</p>
      </div>
      <div class="quantity-controls">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          class="quantity-btn"
        >
          -
        </button>
        <span class="quantity-count">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          class="quantity-btn"
        >
          +
        </button>
      </div>

      <button onClick={() => removeFromCart(item.id)} class="remove-btn">
        Remove
      </button>
    </div>
  );
}

export default CartCard;
