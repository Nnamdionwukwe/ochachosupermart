import CategoryNavLinkSlider from "./CategoryNavLinkSlider";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import ProductList from "./ProductList";
import Layout from "./Layout";

import WhyChooseUs from "./WhyChooseUs";
import supermarketImage from "../assets/dis3.jpeg"; // Path to your image
import PharmacyList from "./PharmacyList";
import CategoryName from "./CategoryName";
import Toiletries from "./Toiletries";
import BeveragesList from "./BeveragesLink";
import CerealsList from "./CerealsLink";
import KitchenUtensisList from "./KitchenUtensisList";
import FoodCondiments from "./FoodCondimentsList";
import Chocolate from "./Chocolate";
import FrozenFoodLink from "./FrozenFoodLink";
import WinesAndSpiritsLink from "./WinesAndSpiritsLink";
import SoftDrinksLink from "./SoftDrinksLink";
import ToysAndGamesLink from "./ToysAndGamesLink";
import StationariesList from "./StationariesList";

const benefits = [
  "Fresh, organic produce delivered daily from local farms. ",
  "Competitive pricing with daily deals and discounts.",
  "Fast and reliable delivery service right to your doorstep.",
  "Wide selection of products to meet all your household needs.",
  "Easy-to-use mobile app for a seamless shopping experience.",
];

function ProductsPage() {
  return (
    <div>
      <Header />

      <ImageSlider />

      <CategoryNavLinkSlider />

      <CategoryName>Cosmetics</CategoryName>
      <ProductList />

      <CategoryName>Medications</CategoryName>
      <PharmacyList />

      <CategoryName>Household</CategoryName>
      <BeveragesList />

      <CategoryName>Cereals</CategoryName>
      <CerealsList />

      <CategoryName>Toileteries</CategoryName>
      <Toiletries />

      <CategoryName>Kitchen Utensis</CategoryName>
      <KitchenUtensisList />

      <CategoryName>Food & Condiments</CategoryName>
      <FoodCondiments />

      <CategoryName>Chocolate & Candy</CategoryName>
      <Chocolate />

      <CategoryName>Cigars/Tobacco</CategoryName>
      <KitchenUtensisList />

      <CategoryName>Frozen Food</CategoryName>
      <FrozenFoodLink />

      <CategoryName>Wines & Spirits</CategoryName>
      <WinesAndSpiritsLink />

      <CategoryName>Soft drinks</CategoryName>
      <SoftDrinksLink />

      <CategoryName>Toys & Games</CategoryName>
      <ToysAndGamesLink />

      <CategoryName>Stationaries</CategoryName>
      <StationariesList />

      <WhyChooseUs
        title="Why Choose Us?"
        image={supermarketImage}
        benefits={benefits}
      />

      <Layout />
    </div>
  );
}

export default ProductsPage;
