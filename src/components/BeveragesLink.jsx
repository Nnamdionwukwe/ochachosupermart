import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
import { useProductFilter } from "../context/ProductFilterContext";

const BeveragesList = () => {
  const { filteredHousehold, searchTerm } = useProductFilter();

  return (
    <div className={styles.productgrid}>
      {filteredHousehold.length > 0 ? (
        <>
          {filteredHousehold.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </>
      ) : (
        <p>No products found for "{searchTerm}".</p>
      )}
    </div>
  );
};

export default BeveragesList;
