import styles from "./ProductCard.module.css";
import { useCart } from "../context/CartContext";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  // // ... inside ProductPage.jsx
  // const ProductPage = () => {
  //   const { id } = useParams(); // Get the ID from the URL
  //   // Use the 'id' to fetch the correct product from an API or local data

  //   useEffect(() => {
  //     // Fetch product logic based on `id`
  //   }, [id]);

  //   // ... rest of the component
  // };

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
        <button
          onClick={() => addToCart(product)}
          className={styles.addToCartButton}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
