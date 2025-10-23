import { formatNGN } from "../utils/FormartCurrncyNG";
import styles from "./CartCard.module.css";

function CartCard({ item, removeFromCart, updateQuantity }) {
  // console.log(item.id);
  return (
    <div className={styles.cartCard}>
      <div className={styles.productImage}>
        <img src={item.imageUrl} alt="Product Name" />
      </div>
      <div className={styles.productDetails}>
        <h3 className={styles.productTitle}>{item.name.toUpperCase()}</h3>

        <div className={styles.priceContainer}>
          <p className={styles.productprice}>{formatNGN(item.price)}</p>
        </div>
        {/* <p className={styles.productPrice}>#{item.price}</p> */}
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
