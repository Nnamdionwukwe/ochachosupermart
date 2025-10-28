import React from "react";
import HeroBanner from "../components/HeroBanner";
import FeaturedCategories from "../components/FeaturedCategories";
import BestSellers from "../components/BestSellers";
import Testimonials from "../components/Testimonials";
// import PharmarcyHomepage from "./components/PharmarcyHomepage";
import "./SupermarketHomepage.css";
import Footer from "./Footer";

// Mock data (replace with API call)
const supermarketCategories = [
  {
    id: "products/cosmetics",
    name: "Cosmetics",
    image:
      "https://previews.123rf.com/images/seikachujo/seikachujo1902/seikachujo190200029/136920725-bangkok-thailand-february-10-foodland-supermarket-fully-stocks-various-brands-of-shampoo-hair.jpg",
  },
  {
    id: "products/phamarcy",
    name: "Pharmacy",
    image:
      "https://media.istockphoto.com/id/1135284188/photo/if-you-need-its-here.jpg?s=612x612&w=0&k=20&c=2yfZHUqTEGW4-5r4Sc4pzWKx0DtubpdbTkX3h_w1AJg=",
  },
  {
    id: "products/cereals",
    name: "Cereals & Biscuits",
    image:
      "https://c8.alamy.com/comp/2GBCNNF/miami-beach-floridapublix-grocery-store-supermarketshelves-display-sale-competing-brands-cereal-barskelloggs-store-brand-nature-valley-grain-fiber-2GBCNNF.jpg",
  },
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
    name: "MCVITIES CHOCOLATE SHORTBREAD 200G",
    price: "₦3,000.00",
    image:
      "https://renosuperstores.com.ng/wp-content/uploads/2025/02/2-Photoroom-1-3.jpg",
  },
  {
    id: 2,
    name: "COMPLAN MILK NDAC WHITE 400G",
    price: "₦12,600.00",
    image: "https://uzoebo.com/images/uzoebo/1628184223_complan_milk.jpg",
  },
  {
    id: 3,
    name: "SADOER VITAMIN C COTTON PADS",
    price: "4,500.00",
    image:
      "https://sc04.alicdn.com/kf/H5c5b2ca66dc340c7b0164c4f2dee017ew.jpg_350x350.jpg",
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
      <Footer />
    </div>
  );
};

export default SupermarketHomepage;
