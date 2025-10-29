import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
import { useProductFilter } from "../context/ProductFilterContext";

const CigarsLink = () => {
  const { filteredCigars, searchTerm } = useProductFilter();

  return (
    <div className={styles.productgrid}>
      {filteredCigars.length > 0 ? (
        <>
          {filteredCigars.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </>
      ) : (
        <p>No products found for "{searchTerm}".</p>
      )}
    </div>
  );
};

export default CigarsLink;
