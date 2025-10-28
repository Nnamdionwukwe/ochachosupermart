import React from "react";
import HeroBanner from "../components/HeroBanner";
import FeaturedCategories from "../components/FeaturedCategories";
import BestSellers from "../components/BestSellers";
import Testimonials from "../components/Testimonials";
import "./SupermarketHomepage.css";
import Footer from "./Footer";
import WhyChooseUs from "./WhyChooseUs";
import supermarketImage from "../assets/dis3.jpeg"; // Path to your image

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
    author: "King Johnson",
    title: "Happy Customer",
    image:
      "https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg", // Path to the image
  },
  {
    text: "Great selection and easy ordering process. The quality of their produce and experience is top-notch. Highly recommended!",
    author: "KC Ugwu",
    title: "Online Shopper",
    image:
      "https://www.instacart.com/company/wp-content/uploads/2023/05/shopper-customer-1050x700.png",
  },
  {
    text: "I save so much time and the prices are very competitive. This is a game-changer for busy professionals like myself.",
    author: "Maria Jame",
    title: "Busy Parent",
    image:
      "https://www.parentmap.com/sites/default/files/styles/1180x660_scaled_cropped/public/2017-03/iStock-516034730-big%20res.jpg?itok=YhU1vNUp",
  },
  {
    text: "Excellent customer service and a fantastic variety of organic options. This is my new favorite place to shop for groceries.",
    author: "David Bright",
    title: "Health Enthusiast",
    image:
      "https://www.brgeneral.org/sites/default/files/hg_features/hg_post/66d5dc8f6af79ff92ca85f690753025d.jpg",
  },
];

const benefits = [
  "Fresh, organic produce delivered daily from local farms. ",
  "Competitive pricing with daily deals and discounts.",
  "Fast and reliable delivery service right to your doorstep.",
  "Wide selection of products to meet all your household needs.",
  "Easy-to-use mobile app for a seamless shopping experience.",
];

const supermarketBestsellers = [
  {
    id: 1,
    name: "ARBUTIN WHITE SLEEPING MASK",
    price: "₦3,250.00",
    image:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/0895814/1.jpg?4639",
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
      <WhyChooseUs
        title="Why Choose Us?"
        image={supermarketImage}
        benefits={benefits}
      />
      <Footer />
    </div>
  );
};

export default SupermarketHomepage;
