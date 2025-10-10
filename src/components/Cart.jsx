import React from "react";
import { useCart } from "../context/CartContext";
import CartCard from "./CartCard";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  // Calculate the total cost of all items in the cart
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.cartContainer}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className={styles.emptyMessage}>Your cart is empty.</p>
      ) : (
        <div className={styles.cartContent}>
          <div className={styles.cartItemList}>
            {cartItems.map((item) => (
              <CartCard
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            ))}
          </div>
          <div className={styles.cartSummary}>
            <h3>Order Summary</h3>
            <div className={styles.cartTotal}>
              <span>Total:</span>
              <span className={styles.totalAmount}>#{total}</span>
            </div>
            <button className={styles.checkoutBtn}>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
