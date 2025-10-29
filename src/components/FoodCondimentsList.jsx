import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
import { useProductFilter } from "../context/ProductFilterContext";

const FoodCondiments = () => {
  const { filteredFrozenFoods, searchTerm } = useProductFilter();

  return (
    <div className={styles.productgrid}>
      {filteredFrozenFoods.length > 0 ? (
        <>
          {filteredFrozenFoods.map((product) => (
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
