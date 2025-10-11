import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Install react-icons: npm install react-icons
import "./NavBar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="top-navbar">
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      <div
        className={
          isMenuOpen ? "fullscreen-overlay open" : "fullscreen-overlay"
        }
      >
        <ul className="fullscreen-menu">
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" onClick={closeMenu}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa"; // Install react-icons: npm install react-icons
// import "./NavBar.css";

// const NavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   // const toggleMenu = () => {
//   //   setIsMenuOpen(!isMenuOpen);
//   // };

//   const toggleMenu = () => {
//     setIsOpen((is) => !is);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       {/* Mobile menu toggle button */}
//       <div className="menu-icon" onClick={toggleMenu}>
//         {isOpen ? <FaTimes /> : <FaBars />}
//       </div>

//       {isOpen && (
//         <div className="navbar-container">
//           {/* Navigation links */}

//           <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
//             <li className="nav-item">
//               <NavLink to="/" className="nav-links" onClick={closeMenu}>
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink to="/products" className="nav-links" onClick={closeMenu}>
//                 Products
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink to="/about" className="nav-links" onClick={closeMenu}>
//                 About
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink to="/contact" className="nav-links" onClick={closeMenu}>
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;
