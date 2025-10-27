import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedCategories.css";

const FeaturedCategories = ({ categories }) => {
  return (
    <section className="featured-categories-section">
      <h2 className="section-title">Shop by Category</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <Link
            to={`/category/${category.id}`}
            key={category.id}
            className="category-card-link"
          >
            <div className="category-card">
              <img
                src={category.image}
                alt={category.name}
                className="category-image"
              />
              <div className="category-card-overlay">
                <h3>{category.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
