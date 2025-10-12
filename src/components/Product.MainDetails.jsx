import { product } from "../data/products";
import styles from "./ProductList.module.css";
import ProductDetail from "./ProductDetail";

const ProductMainDetails = () => {
  return (
    <div className={styles.productgrid}>
      {product.map((product) => (
        <ProductDetail key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductMainDetails;
