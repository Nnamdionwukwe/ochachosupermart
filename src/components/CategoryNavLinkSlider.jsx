import React from "react";
import { NavLink } from "react-router-dom";
import "./CategoryNavLinkSlider.css";

const categories = [
  { name: "All", path: "/products" },
  { name: "Cosmetics", path: "/products/cosmetics" },
  { name: "Phamarcy", path: "/products/phamarcy" },
  { name: "Household", path: "/products/beverages" },
  { name: "Cereals", path: "/products/cereals" },
  { name: "Toiletries", path: "/products/toiletries" },
  { name: "Kitchen Utensis", path: "/products/kitchenutensis" },
  { name: "Food/Condiments", path: "/products/foodcondiments" },
  { name: "Chocolate", path: "/products/Chocolate" },
  { name: "Cigars", path: "/products/cigar" },
  { name: "Frozen Food", path: "/products/frozenfood" },
  { name: "Wines And Spirits", path: "/products/winesspritts" },
  { name: "Soft Drinks", path: "/products/softdrinks" },
  { name: "Toys And Games", path: "/products/toysgames" },
  { name: "Stationaries", path: "/products/stationaries" },
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
