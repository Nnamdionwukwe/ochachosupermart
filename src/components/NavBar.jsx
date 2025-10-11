import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Install react-icons: npm install react-icons
import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Mobile menu toggle button */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className="navbar-container">
        {/* Navigation links */}
        {isMenuOpen && (
          <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-links" onClick={closeMenu}>
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-links" onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-links" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
