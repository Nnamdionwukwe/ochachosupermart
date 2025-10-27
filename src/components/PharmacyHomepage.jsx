import React from "react";
import HeroBanner from "../components/HeroBanner";
import FeaturedProducts from "../components/FeaturedProducts";
import KeyServices from "../components/KeyServices";
import Testimonials from "../components/Testimonials";
import "./PharmacyHomepage.css";

// Mock data (replace with API call)
const pharmacyFeatured = [
  {
    id: 1,
    name: "Pain Relief",
    price: "₦1,500.00",
    image: "/images/pain-relief.jpg",
  },
  {
    id: 2,
    name: "Vitamins",
    price: "₦3,200.00",
    image: "/images/vitamins.jpg",
  },
  {
    id: 3,
    name: "First Aid Kit",
    price: "₦4,800.00",
    image: "/images/first-aid.jpg",
  },
];

const PharmacyHomepage = () => {
  return (
    <div className="pharmacy-homepage">
      <HeroBanner
        title="Your Health, Our Priority"
        subtitle="Trusted medication, expert advice, and wellness products."
        ctaText="Explore Products"
        ctaLink="/shop"
      />
      <KeyServices />
      <FeaturedProducts products={pharmacyFeatured} title="Featured Products" />
      <Testimonials />
    </div>
  );
};

export default PharmacyHomepage;
