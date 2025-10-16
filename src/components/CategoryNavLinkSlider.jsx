import React from "react";
import { NavLink } from "react-router-dom";
import "./CategoryNavLinkSlider.css";

const categories = [
  { name: "All", path: "/products" },
  { name: "Phamarcy", path: "/products/phamarcy" },
  { name: "Cosmetics", path: "/products/cosmetics" },
  { name: "Apparel", path: "/products/apparel" },
  { name: "Men's Wear", path: "/products/MensWear" },
  { name: "Toiletries", path: "/products/toiletries" },
  { name: "Books", path: "/products/books" },
  { name: "Tools", path: "/products/tools" },
  { name: "Outdoor", path: "/products/outdoor" },
  { name: "Gaming", path: "/products/gaming" },
  { name: "Toys", path: "/products/toys" },
  { name: "Music", path: "/products/music" },
];

const CategoryNavLinkSlider = () => {
  return (
    <div className="category-slider-container">
      {categories.map((category) => (
        <NavLink
          key={category.name}
          to={category.path}
          className={({ isActive }) =>
            `category-button-link ${isActive ? "active" : ""}`
          }
          // The `end` prop ensures "All" is active only on the exact path
          end={category.path === "/products"}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default CategoryNavLinkSlider;
