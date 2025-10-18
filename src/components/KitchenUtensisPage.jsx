import CategoryNavLinkSlider from "./CategoryNavLinkSlider";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import Layout from "./Layout";
import WhyChooseUs from "./WhyChooseUs";

import supermarketImage from "../assets/dis3.jpeg";
import PharmacyList from "./PharmacyList";
import CategoryName from "./CategoryName";
import KitchenUtensisList from "./KitchenUtensisList";

const benefits = [
  "Fresh, organic produce delivered daily from local farms. ",
  "Competitive pricing with daily deals and discounts.",
  "Fast and reliable delivery service right to your doorstep.",
  "Wide selection of products to meet all your household needs.",
  "Easy-to-use mobile app for a seamless shopping experience.",
];

function KitchenUtensisPage() {
  return (
    <div>
      <Header />

      <ImageSlider />

      <CategoryNavLinkSlider />

      <CategoryName>Kitchen Utensis</CategoryName>

      <KitchenUtensisList />

      <WhyChooseUs
        title="Why Choose Us?"
        image={supermarketImage}
        benefits={benefits}
      />

      <Layout />
    </div>
  );
}

export default KitchenUtensisPage;
