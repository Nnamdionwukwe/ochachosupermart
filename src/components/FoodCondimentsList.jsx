import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
import { useProductFilter } from "../context/ProductFilterContext";

const FoodCondiments = () => {
  const { filteredFood, searchTerm } = useProductFilter();

  return (
    <div className={styles.productgrid}>
      {filteredFood.length > 0 ? (
        <>
          {filteredFood.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </>
      ) : (
        <p>No products found for "{searchTerm}".</p>
      )}
    </div>
  );
};

export default FoodCondiments;
