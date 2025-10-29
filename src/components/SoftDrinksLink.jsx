import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
import { useProductFilter } from "../context/ProductFilterContext";

const SoftDrinksLink = () => {
  const { filteredSoftDrinks, searchTerm } = useProductFilter();

  return (
    <div className={styles.productgrid}>
      {filteredSoftDrinks.length > 0 ? (
        <>
          {filteredSoftDrinks.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </>
      ) : (
        <p>No products found for "{searchTerm}".</p>
      )}
    </div>
  );
};

export default SoftDrinksLink;
