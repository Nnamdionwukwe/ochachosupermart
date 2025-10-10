import { useParams } from "react-router-dom";
import { product } from "../data/products";
import "./ProductDetail.css";

function ProductDetail() {
  // const [products, setProducts] = useState(product);
  const { id } = useParams();
  const initialProduct = product.find((p) => p.id === parseInt(id));

  if (!initialProduct) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-page2 ">
      <div className="main-image2">
        <div className="thumbnail-container2">
          <img src={initialProduct.imageUrl} />
        </div>
      </div>

      <div className="product-details2">
        <h2 className="product-title2">{initialProduct.name}</h2>
        <p className="product-price2">#{initialProduct.price}</p>
        <p className="product-description2">{initialProduct.description}</p>
      </div>
    </div>
  );
}

export default ProductDetail;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const ProductDetail = () => {
//   const { productId } = useParams(); // Get the ID from the URL
//   const [product, setProduct] = useState(productId);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // useEffect(() => {
//   //   // This function fetches data based on the productId
//   //   const fetchProduct = async () => {
//   //     setLoading(true);
//   //     setError(null);
//   //     try {
//   //       // Replace with your actual API endpoint
//   //       const response = await fetch(
//   //         `https://dummyjson.com/products/${productId}`
//   //       );
//   //       if (!response.ok) {
//   //         throw new Error("Product not found");
//   //       }
//   //       const data = await response.json();
//   //       setProduct(data);
//   //     } catch (err) {
//   //       setError(err.message);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };

//   //   if (productId) {
//   //     fetchProduct();
//   //   }
//   // }, [productId]); // Rerun effect if productId changes

//   // if (loading) {
//   //   return <div>Loading product...</div>;
//   // }

//   // if (error) {
//   //   return <div>Error: {error}</div>;
//   // }

//   // if (!product) {
//   //   return <div>Product not found.</div>;
//   // }

//   return (
//     <div
//       style={{
//         padding: "20px",
//         maxWidth: "800px",
//         margin: "auto",
//         border: "1px solid #ccc",
//         borderRadius: "8px",
//       }}
//     >
//       <h1>{product.name}</h1>
//       <img
//         src={product.thumbnail}
//         alt={product.name}
//         style={{ width: "100%", height: "auto", borderRadius: "8px" }}
//       />
//       <p>{product.description}</p>
//       <h2>Price: ${product.price}</h2>
//       <p>Brand: {product.brand}</p>
//       <p>Category: {product.category}</p>
//       <p>Rating: {product.rating} / 5</p>
//     </div>
//   );
// };

// export default ProductDetail;
