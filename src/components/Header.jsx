import { Link } from "react-router-dom";
import "./Header.css";
import NavBar from "./NavBar";
import { useCart } from "../context/CartContext";
import logo from "../assets/ochacho.svg"; // Path to your image
import { useProductFilter } from "../context/ProductFilterContext";

const Header = () => {
  const { cartItems, handleSearchChange } = useCart();
  const { searchTerm, setSearchTerm } = useProductFilter();

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
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search..."
          />
        </div>

        <Link to="/cart" className="cart">
          {cartItems.length > 0 && (
            <span className="cart-badge">{cartItems.length}</span>
          )}
          <i class="bi bi-cart-plus"></i>
        </Link>

        <div className="user-profile1">
          <NavBar />
        </div>
      </div>

      {/* <ProductSearch /> */}
    </header>
  );
};

export default Header;
