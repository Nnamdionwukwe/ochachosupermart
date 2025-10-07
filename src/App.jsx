import "./App.css";
import CardDisplay from "./components/CardDisplay";
import Header from "./components/Header";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSlider from "./components/productSlider";
// Remember to run:
// npm install react-slick slick-carousel --save

function App() {
  return (
    <>
      <Header />

      <ProductSlider />

      <CardDisplay />
    </>
  );
}

export default App;
