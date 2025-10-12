// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { product as fakeProductData } from "../data/products";
// import ProductGallery from "./ProductGallery";
// import ProductDetails from "./ProductDetails";
// import ProductReviews from "./ProductReviews";
// import "./ProductPage.css"; // Add a CSS file for styles

// const ProductPage = () => {
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   console.log(product);

//   useEffect(() => {
//     const fetchProduct = () => {
//       try {
//         // Simulate an API call
//         setTimeout(() => {
//           setProduct(fakeProductData);
//           setLoading(false);
//         }, 1000);
//       } catch (err) {
//         setError(err);
//         setLoading(false);
//       }
//     };
//     fetchProduct();
//   }, []);

//   if (loading) return <div>Loading product...</div>;
//   if (error) return <div>Error loading product: {error.message}</div>;
//   if (!product) return <div>Product not found.</div>;

//   return (
//     <div className="product-page-container">
//       <div className="product-layout">
//         <ProductGallery images={product.images} />
//         <ProductDetails product={product} />
//       </div>
//       <ProductReviews reviews={product.reviews} />
//     </div>
//   );
// };

// export default ProductPage;
