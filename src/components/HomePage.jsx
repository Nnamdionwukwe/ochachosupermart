import CategoryNavLinkSlider from "./CategoryNavLinkSlider";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import ProductList from "./ProductList";
import Layout from "./Layout";

function HomePage() {
  return (
    <div>
      <Header />

      <ImageSlider />

      <CategoryNavLinkSlider />

      <ProductList />

      <Layout />
    </div>
  );
}

export default HomePage;
