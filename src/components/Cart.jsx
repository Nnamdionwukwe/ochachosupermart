import React from "react";
import { useCart } from "../context/CartContext";
import CartCard from "./CartCard";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

const nairaIconUrl = "/naira.jpeg";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  // Calculate the total cost of all items in the cart
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <Link to="/products">
        <button className={styles.backBtn}>&larr;</button>
      </Link>

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
                <div className={styles.totalAmountContainer}>
                  <img
                    src={nairaIconUrl}
                    alt="Naira Symbol"
                    className={styles.nairaIcon}
                  />

                  <span className={styles.totalAmount}>{total}</span>
                </div>
              </div>
              <Link to="/cart/checkout">
                <button className={styles.checkoutBtn}>
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
