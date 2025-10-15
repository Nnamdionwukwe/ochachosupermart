import React, { useState, useMemo } from "react";
import Data from "../Data.json"; // Import the JSON file

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Combine the games and movies arrays into a single flat array
  const allProducts = useMemo(() => {
    return [...Data.cosmetics, ...Data.pharmacy];
  }, []); // Empty dependency array means this runs only once

  // Filter products based on the search term
  const filteredProducts = allProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* <h1>Product Search (Games & Movies)</h1> */}

      <input
        type="text"
        placeholder="Search by title or genre..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
      />

      {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong> ({product.id}) -{" "}
              {/* {product.description} */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found for "{searchTerm}".</p>
      )}
    </div>
  );
};

export default ProductSearch;
