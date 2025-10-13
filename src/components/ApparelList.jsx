import React from "react";
import ProductCard from "./ProductCard";
// import { product } from "../data/products";
import styles from "./ProductList.module.css";
import { useCart } from "../context/CartContext";
import PharmacyCard from "./PharmacyCard";

const ApparelList = () => {
  const { pharmacy } = useCart();

  return (
    <div className={styles.productgrid}>
      {pharmacy.map((product) => (
        <PharmacyCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ApparelList;
