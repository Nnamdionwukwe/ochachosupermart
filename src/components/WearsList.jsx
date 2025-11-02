import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
import { useProductFilter } from "../context/ProductFilterContext";

const WearsList = () => {
  const { filteredWears, searchTerm } = useProductFilter();

  return (
    <div className={styles.productgrid}>
      {filteredWears.length > 0 ? (
        <>
          {filteredWears.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </>
      ) : (
        <p>No products found for "{searchTerm}".</p>
      )}
    </div>
  );
};

export default WearsList;
