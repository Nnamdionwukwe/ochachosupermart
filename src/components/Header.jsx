import React from "react";
import "./Header.css"; // Import the stylesheet for styling
// import { ReactComponent as Logo } from "./logo.svg"; // Assuming you have an SVG logo
// import { ReactComponent as SearchIcon } from "./search.svg";
// import { ReactComponent as ProfileIcon } from "./profile.svg";
// import { ReactComponent as CartIcon } from "./cart.svg";

const logo = "./ochacho.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <a href="/">
          <img src={logo} className="logo-svg" alt="Business Logo" />
        </a>
      </div>

      <div className="header-actions">
        <div className="search-bar">
          <i class="bi bi-search-heart"></i>
          <input type="text" placeholder="Search..." />
        </div>

        <div className="user-profile">
          <i class="bi bi-person"></i>
        </div>

        <div className="cart">
          <i class="bi bi-cart-plus"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
// Compare this snippet from src/App.jsx:
