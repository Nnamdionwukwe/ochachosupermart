import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
import { useProductFilter } from "../context/ProductFilterContext";

const Chocolate = () => {
  const { filteredChocolates, searchTerm } = useProductFilter();

  return (
    <div className={styles.productgrid}>
      {filteredChocolates.length > 0 ? (
        <>
          {filteredChocolates.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </>
      ) : (
        <p>No products found for "{searchTerm}".</p>
      )}
    </div>
  );
};

export default Chocolate;
