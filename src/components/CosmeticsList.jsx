import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
import { useProductFilter } from "../context/ProductFilterContext";

const CosmeticsList = () => {
  const { filteredCosmetics, searchTerm } = useProductFilter();

  return (
    <div className={styles.productgrid}>
      {filteredCosmetics.length > 0 ? (
        <>
          {filteredCosmetics.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </>
      ) : (
        <p>No products found for "{searchTerm}".</p>
      )}
    </div>
  );
};

export default CosmeticsList;
