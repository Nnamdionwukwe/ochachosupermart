import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
import { useProductFilter } from "../context/ProductFilterContext";

const CerealsList = () => {
  const { filteredCereals, searchTerm } = useProductFilter();
  console.log(filteredCereals);

  return (
    <div className={styles.productgrid}>
      {filteredCereals.length > 0 ? (
        <>
          {filteredCereals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </>
      ) : (
        <p>No products found for "{searchTerm}".</p>
      )}
    </div>
  );
};

export default CerealsList;
