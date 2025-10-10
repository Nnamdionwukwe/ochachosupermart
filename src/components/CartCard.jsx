// CartItem.jsx
import React from "react";
import styles from "./CartCard.module.css";

function CartCard({ item, removeFromCart, updateQuantity }) {
  return (
    <div className={styles.cartCard}>
      <div className={styles.productImage}>
        <img src={item.imageUrl} alt="Product Name" />
      </div>
      <div className={styles.productDetails}>
        <h3 className={styles.productTitle}>{item.name}</h3>
        <p className={styles.productPrice}>#{item.price.toFixed(2)}</p>
      </div>
      <div className={styles.quantityControls}>
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className={styles.quantityBtn}
        >
          -
        </button>
        <span class={styles.quantityCount}>{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className={styles.quantityBtn}
        >
          +
        </button>
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className={styles.removeBtn}
      >
        Remove
      </button>
    </div>
  );
}

export default CartCard;
