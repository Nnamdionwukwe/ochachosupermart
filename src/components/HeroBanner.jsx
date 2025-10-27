import React from "react";
import { Link } from "react-router-dom";
import "./HeroBanner.css";

const HeroBanner = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <Link to={ctaLink} className="hero-cta-btn">
          {ctaText}
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
