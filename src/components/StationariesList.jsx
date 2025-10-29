import React from "react";
import ProductCard from "./ProductCard";
// import { product } from "../data/products";
import styles from "./ProductList.module.css";
import { useProductFilter } from "../context/ProductFilterContext";

const StationariesList = () => {
  const { filteredStationaries, searchTerm } = useProductFilter();

  return (
    <div className={styles.productgrid}>
      {filteredStationaries.length > 0 ? (
        <>
          {filteredStationaries.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </>
      ) : (
        <p>No products found for "{searchTerm}".</p>
      )}
    </div>
  );
};

export default StationariesList;
