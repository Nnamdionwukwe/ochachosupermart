import "./ProductCard.css";
import { useCart } from "../context/CartContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  // ... inside ProductPage.jsx
  const ProductPage = () => {
    const { id } = useParams(); // Get the ID from the URL
    // Use the 'id' to fetch the correct product from an API or local data

    useEffect(() => {
      // Fetch product logic based on `id`
    }, [id]);

    // ... rest of the component
  };

  return (
    <div className="product-card">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="product-image"
      />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">#{product.price}</p>
        {/* <p className="product-description">{product.description}</p> */}
        {/* <i class="bi bi-cart-plus"></i> */}
        <button onClick={() => addToCart(product)} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
