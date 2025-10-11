import { Link } from "react-router-dom";
import "./Header.css";
import NavBar from "./NavBar";

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

        <Link to="/cart" className="cart">
          <i class="bi bi-cart-plus"></i>
        </Link>

        <div className="user-profile1">
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
