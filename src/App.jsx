import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryNavLinkSlider from "./components/CategoryNavLinkSlider";
import "./App.css";
import Header from "./components/Header";
import ProductSlider from "./components/productSlider";
import HomePage from "./components/HomePage";
import ImageSlider from "./components/ImageSlider";

// Simple placeholder components for each page
// const HomePage = () => <h2>Home Page</h2>;
const ProductsPage = () => <h2>All Products</h2>;
const ElectronicsPage = () => <h2>Electronics Products</h2>;
const ApparelPage = () => <h2>Apparel Products</h2>;
const DefaultPage = () => <h2>Category not found</h2>;

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <ImageSlider />

        {/* <ProductSlider /> */}

        <CategoryNavLinkSlider />

        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/electronics" element={<ElectronicsPage />} />
            <Route path="/products/apparel" element={<ApparelPage />} />
            {/* You would add more routes here for each category */}
            <Route path="*" element={<DefaultPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

// import "./App.css";
// import CardDisplay from "./components/CardDisplay";
// import Header from "./components/Header";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import ProductSlider from "./components/productSlider";
// import CategorySlider from "./components/CategoryNavLinkSlider";
// // Remember to run:
// // npm install react-slick slick-carousel --save

// function App() {
//   return (
//     <>
//       <Header />

//       <ProductSlider />

//       <CategorySlider />

//       <CardDisplay />

//     </>
//   );
// }

// export default App;
