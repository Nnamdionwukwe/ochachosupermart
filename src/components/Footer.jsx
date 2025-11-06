import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.mainfooter}>
      <div className={styles.footercontainer}>
        <div className={styles.footersection}>
          <h3>Company</h3>
          <ul className={styles.footernav}>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
        </div>
        {/* <div className={styles.footersection}>
          <h3>Help</h3>
          <ul className={styles.footernav}>
            <li>
              <Link to="/faq">FAQs</Link>
            </li>
            <li>
              <Link to="/shipping">Shipping</Link>
            </li>
            <li>
              <Link to="/returns">Returns</Link>
            </li>
          </ul>
        </div> */}
        <div className={styles.footersection}>
          <h3>Social</h3>
          <ul className={styles.sociallinks}>
            <li>
              <a href="https://www.facebook.com/share/1Gj1B46a3L/?mibextid=wwXIfr">
                <i class="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://whatsapp.com">
                <i class="bi bi-whatsapp"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ochacho_pharmacy_supermarket?igsh=MXFyNHQwdWlxencwMw%3D%3D&utm_source=qr">
                <i class="bi bi-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footercopyright}>
          <p>
            &copy; {new Date().getFullYear()} Ochacho Pharmacy/Supermarket. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
