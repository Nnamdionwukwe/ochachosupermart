import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
import { useProductFilter } from "../context/ProductFilterContext";

const PharmacyList = () => {
  const { filteredPharmacy, searchTerm } = useProductFilter();

  return (
    <div className={styles.productgrid}>
      {filteredPharmacy.length > 0 ? (
        <>
          {filteredPharmacy.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </>
      ) : (
        <p>No products found for "{searchTerm}".</p>
      )}
    </div>
  );
};

export default PharmacyList;
