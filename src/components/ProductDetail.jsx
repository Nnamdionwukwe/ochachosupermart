import { Link, useParams } from "react-router-dom";
import { product } from "../data/products";
import styles from "./ProductDetail.module.css";
import { useCart } from "../context/CartContext";

const nairaIconUrl = "/naira.jpeg";

function ProductDetail() {
  // const [products, setProducts] = useState(product);
  const { id } = useParams();
  const initialProduct = product.find((p) => p.id === parseInt(id));

  if (!initialProduct) {
    return <div>Product not found!</div>;
  }

  const { addToCart } = useCart();

  return (
    <>
      <Link to="/products">
        <button className={styles.backBtn}>&larr;</button>
      </Link>

      <div className={styles.productpage}>
        <div className={styles.mainimage}>
          <div className={styles.thumbnailcontainer}>
            <img src={initialProduct.imageUrl} />
          </div>
        </div>

        <div className={styles.productdetails}>
          <h2 className={styles.producttitle}>{initialProduct.name}</h2>

          <div className={styles.priceContainer}>
            <img
              src={nairaIconUrl}
              alt="Naira Symbol"
              className={styles.nairaIcon}
            />
            <p className={styles.productprice}>
              {initialProduct.price.toFixed(2)}
            </p>
          </div>

          <p className={styles.productdescription}>
            {initialProduct.description}
          </p>
        </div>

        <Link
          to="/cart"
          onClick={() => addToCart(initialProduct)}
          className={styles.buttonContainer1}
        >
          <div className={styles.buttonContainer}>
            <i class="bi bi-cart-plus"></i>
            <button className={styles.addToCartButton}>Add to Cart</button>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductDetail;
