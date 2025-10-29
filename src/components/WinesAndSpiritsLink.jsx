import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
import { useProductFilter } from "../context/ProductFilterContext";

const WinesAndSpiritsLink = () => {
  const { filteredWinesSpirits, searchTerm } = useProductFilter();

  return (
    <div className={styles.productgrid}>
      {filteredWinesSpirits.length > 0 ? (
        <>
          {filteredWinesSpirits.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </>
      ) : (
        <p>No products found for "{searchTerm}".</p>
      )}
    </div>
  );
};

export default WinesAndSpiritsLink;
