import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryNavLinkSlider from "./components/CategoryNavLinkSlider";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ImageSlider from "./components/ImageSlider";
import ProductsPage from "./components/ProductsPage";
import ElectronicsPage from "./components/ElectronicsPage";
import ApparelPage from "./components/ApparelPage";

import DefaultPage from "./components/DefaultPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <ImageSlider />

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
