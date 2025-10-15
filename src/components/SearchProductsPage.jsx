import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext.jsx";
import ProductCard from "../components/ProductCard"; // A component to display each product

const SearchProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, loading } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const searchTerm = searchParams.get("q") || "";

  // Filter products based on the search query from the URL
  useEffect(() => {
    if (!loading) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products, loading]);

  // Handle input change and update the URL query
  const handleSearchChange = (e) => {
    const query = e.target.value;
    if (query) {
      setSearchParams({ q: query });
    } else {
      setSearchParams({}); // Clear the search query
    }
  };

  return (
    <div>
      <h1>Product Search</h1>
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products found for "{searchTerm}".</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchProductsPage;
