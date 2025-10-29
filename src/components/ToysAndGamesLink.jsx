import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
import { useProductFilter } from "../context/ProductFilterContext";

const ToysAndGamesLink = () => {
  const { filteredToiletries, searchTerm } = useProductFilter();

  return (
    <div className={styles.productgrid}>
      {filteredToiletries.length > 0 ? (
        <>
          {filteredToiletries.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </>
      ) : (
        <p>No products found for "{searchTerm}".</p>
      )}
    </div>
  );
};

export default ToysAndGamesLink;
