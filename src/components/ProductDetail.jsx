import { Link } from "react-router-dom";
import styles from "./ProductDetail.module.css";
import { useCart } from "../context/CartContext";
import { formatNGN } from "../utils/FormartCurrncyNG";

function ProductDetail() {
  const { addToCart, selectedID } = useCart();

  if (!selectedID) {
    return <div>Product not found!</div>;
  }

  return (
    <>
      <Link to="/products">
        <button className={styles.backBtn}>&larr;</button>
      </Link>

      <div className={styles.productpage}>
        <div className={styles.mainimage}>
          <div className={styles.thumbnailcontainer}>
            <img src={selectedID.imageUrl} />
          </div>
        </div>

        <div className={styles.productdetails}>
          <h2 className={styles.producttitle}>{selectedID.name}</h2>

          <div className={styles.priceContainer}>
            <p className={styles.productprice}>{formatNGN(selectedID.price)}</p>
          </div>

          <p className={styles.productdescription}>{selectedID.description}</p>
        </div>

        <Link
          to="/cart"
          onClick={() => addToCart(selectedID)}
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
