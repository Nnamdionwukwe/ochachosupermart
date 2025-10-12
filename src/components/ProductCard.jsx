import { useCart } from "../context/CartContext";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

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
        <h3 className={styles.ProductName}>{product.name}</h3>
        <p className={styles.productPrice}>#{product.price}</p>
        {/* <p className="product-description">{product.description}</p> */}
        {/* <i class="bi bi-cart-plus"></i> */}
        <button onClick={handleAddToCart} className={styles.addToCartButton}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
