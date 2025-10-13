import CategoryNavLinkSlider from "./CategoryNavLinkSlider";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import Layout from "./Layout";

import WhyChooseUs from "./WhyChooseUs";
import supermarketImage from "../assets/dis3.jpeg"; // Path to your image
import CategoryName from "./CategoryName";
import ApparelList from "./ApparelList";

const benefits = [
  "Fresh, organic produce delivered daily from local farms. ",
  "Competitive pricing with daily deals and discounts.",
  "Fast and reliable delivery service right to your doorstep.",
  "Wide selection of products to meet all your household needs.",
  "Easy-to-use mobile app for a seamless shopping experience.",
];

function Apparel() {
  return (
    <div>
      <Header />

      <ImageSlider />

      <CategoryNavLinkSlider />

      <CategoryName>Apperals</CategoryName>

      <ApparelList />

      <WhyChooseUs
        title="Why Choose Us?"
        image={supermarketImage}
        benefits={benefits}
      />

      <Layout />
    </div>
  );
}

export default Apparel;
