import React from "react";
import ProductCard from "./ProductCard";
// import { product } from "../data/products";
import styles from "./ProductList.module.css";
import { useCart } from "../context/CartContext";
import { useProductFilter } from "../context/ProductFilterContext";

const ApparelList = () => {
  // const { filteredProducts, searchTerm } = useCart();
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

      {/* {pharmacy.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
    </div>
  );
};

export default ApparelList;
