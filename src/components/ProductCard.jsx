import { useCart } from "../context/CartContext";
import { formatNGN } from "../utils/FormartCurrncyNG";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart, setSelectedID } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={styles.productCard}>
      <Link to={`/products/${product.id}`}>
        <img
          onClick={() => setSelectedID(product)}
          src={product.imageUrl}
          alt={product.name}
          className={styles.productImage}
        />
      </Link>
      <div className={styles.productInfo}>
        <div className={styles.textContainer}>
          <h3 className={styles.ProductName}>{product.name.toUpperCase()}</h3>

          <div className={styles.priceContainer}>
            <p className={styles.productPrice}>{formatNGN(product.price)}</p>
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
