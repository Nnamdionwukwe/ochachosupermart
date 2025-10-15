import CategoryNavLinkSlider from "./CategoryNavLinkSlider";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import ProductList from "./ProductList";
import Layout from "./Layout";

import WhyChooseUs from "./WhyChooseUs";
import supermarketImage from "../assets/dis3.jpeg"; // Path to your image
import CategoryName from "./CategoryName";
import PharmacyList from "./PharmacyList";
import SearchProductsPage from "./SearchProductsPage";

const benefits = [
  "Fresh, organic produce delivered daily from local farms. ",
  "Competitive pricing with daily deals and discounts.",
  "Fast and reliable delivery service right to your doorstep.",
  "Wide selection of products to meet all your household needs.",
  "Easy-to-use mobile app for a seamless shopping experience.",
];

function HomePage() {
  return (
    <div>
      {/* <SearchProductsPage /> */}
      <Header />

      <ImageSlider />

      <CategoryNavLinkSlider />

      <CategoryName>Cosmetics</CategoryName>

      <ProductList />

      <CategoryName>Medications</CategoryName>

      <PharmacyList />

      <WhyChooseUs
        title="Why Choose Us?"
        image={supermarketImage}
        benefits={benefits}
      />

      <Layout />
    </div>
  );
}

export default HomePage;
