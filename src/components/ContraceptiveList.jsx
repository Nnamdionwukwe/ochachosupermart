import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
import { useProductFilter } from "../context/ProductFilterContext";

const ContraceptivesList = () => {
  const { filteredContraceptives, searchTerm } = useProductFilter();

  return (
    <div className={styles.productgrid}>
      {filteredContraceptives.length > 0 ? (
        <>
          {filteredContraceptives.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </>
      ) : (
        <p>No products found for "{searchTerm}".</p>
      )}
    </div>
  );
};

export default ContraceptivesList;
