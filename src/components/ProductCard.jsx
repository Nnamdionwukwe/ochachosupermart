import { useCart } from "../context/CartContext";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

const nairaIconUrl = "/naira.png";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={styles.productCard}>
      <Link to={`/products/${product.id}`}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className={styles.productImage}
        />
      </Link>
      <div className={styles.productInfo}>
        <div className={styles.textContainer}>
          <h3 className={styles.ProductName}>{product.name}</h3>

          <div className={styles.priceContainer}>
            <img
              src={nairaIconUrl}
              alt="Naira Symbol"
              className={styles.nairaIcon}
            />
            <p className={styles.productPrice}>{product.price.toFixed(2)}</p>
          </div>
        </div>

        {/* <p className="product-description">{product.description}</p> */}
        {/* <i class="bi bi-cart-plus"></i> */}
        <div className={styles.buttonContainer}>
          <i class="bi bi-cart-plus"></i>
          <button onClick={handleAddToCart} className={styles.addToCartButton}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
