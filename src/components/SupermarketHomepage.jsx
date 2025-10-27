import React from "react";
import HeroBanner from "../components/HeroBanner";
import FeaturedCategories from "../components/FeaturedCategories";
import BestSellers from "../components/BestSellers";
import Testimonials from "../components/Testimonials";
// import PharmarcyHomepage from "./components/PharmarcyHomepage";
import "./SupermarketHomepage.css";

// Mock data (replace with API call)
const supermarketCategories = [
  { id: 1, name: "Fresh Produce", image: "/images/produce.jpg" },
  { id: 2, name: "Meat & Seafood", image: "/images/meat.jpg" },
  { id: 3, name: "Dairy & Eggs", image: "/images/dairy.jpg" },
];

const testimonials = [
  {
    text: "The delivery service is incredibly fast and the produce is always fresh. My family loves it and we'll never go back to our old way of shopping!",
    author: "Alice Johnson",
    title: "Happy Customer",
    image: "/images/alice.jpg", // Path to the image
  },
  {
    text: "Great selection and easy ordering process. The quality of their meat and seafood is top-notch. Highly recommended!",
    author: "Robert Smith",
    title: "Online Shopper",
    image: "/images/robert.jpg",
  },
  {
    text: "I save so much time and the prices are very competitive. This is a game-changer for busy professionals like myself.",
    author: "Maria Garcia",
    title: "Busy Parent",
    image: "/images/maria.jpg",
  },
  {
    text: "Excellent customer service and a fantastic variety of organic options. This is my new favorite place to shop for groceries.",
    author: "David Lee",
    title: "Health Enthusiast",
    image: "/images/david.jpg",
  },
];

const supermarketBestsellers = [
  {
    id: 1,
    name: "Organic Bananas",
    price: "₦1,250.00",
    image: "/images/bananas.jpg",
  },
  {
    id: 2,
    name: "Fresh Chicken",
    price: "₦5,500.00",
    image: "/images/chicken.jpg",
  },
  {
    id: 3,
    name: "Whole Wheat Bread",
    price: "₦800.00",
    image: "/images/bread.jpg",
  },
];

const SupermarketHomepage = () => {
  return (
    <div className="supermarket-homepage">
      <HeroBanner
        title="Fresh Groceries, Delivered to Your Doorstep"
        subtitle="Shop quality produce, drinks, and household equipments with ease."
        ctaText="Shop Now"
        ctaLink="/products"
      />
      <FeaturedCategories categories={supermarketCategories} />
      <BestSellers products={supermarketBestsellers} title="Best Sellers" />
      <Testimonials testimonials={testimonials} />
    </div>
  );
};

export default SupermarketHomepage;
