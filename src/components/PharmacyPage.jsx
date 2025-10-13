import CategoryNavLinkSlider from "./CategoryNavLinkSlider";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import Layout from "./Layout";
import WhyChooseUs from "./WhyChooseUs";

import supermarketImage from "../assets/dis3.jpeg";
import PharmacyList from "./PharmacyList";
import CategoryName from "./CategoryName";

const benefits = [
  "Fresh, organic produce delivered daily from local farms. ",
  "Competitive pricing with daily deals and discounts.",
  "Fast and reliable delivery service right to your doorstep.",
  "Wide selection of products to meet all your household needs.",
  "Easy-to-use mobile app for a seamless shopping experience.",
];

function PharmacyPage() {
  return (
    <div>
      <Header />

      <ImageSlider />

      <CategoryNavLinkSlider />

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

export default PharmacyPage;
