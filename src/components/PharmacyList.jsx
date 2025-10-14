import ProductCard from "./ProductCard";
// import { product } from "../data/products";
import styles from "./ProductList.module.css";
import { useCart } from "../context/CartContext";

const PharmacyList = () => {
  const { pharmacy } = useCart();

  return (
    <div className={styles.productgrid}>
      {pharmacy.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default PharmacyList;
