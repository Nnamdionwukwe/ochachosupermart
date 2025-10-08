import React, { useState } from "react";
import "./CategorySlider.css";

const categories = [
  "All",
  "Electronics",
  "Apparel",
  "Home",
  "Books",
  "Tools",
  "Outdoor",
  "Gaming",
  "Toys",
  "Music",
];

const CategorySlider = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="category-slider-container">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-button ${
            activeCategory === category ? "active" : ""
          }`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySlider;
