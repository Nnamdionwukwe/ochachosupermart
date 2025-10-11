import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import ElectronicsPage from "./components/ElectronicsPage";
import ApparelPage from "./components/ApparelPage";

import DefaultPage from "./components/DefaultPage";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import About from "./components/About";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            {/* <Route path="/" element={<LayoutNav />} /> */}
            <Route index element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            {/* <Route path="/products/:id" element={<ProductPage />} /> */}
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/products/electronics" element={<ElectronicsPage />} />
            <Route path="/products/apparel" element={<ApparelPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/checkout" element={<Checkout />} />
            <Route path="/About" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* You would add more routes here for each category */}
            <Route path="*" element={<DefaultPage />} />
          </Routes>
        </div>
      </div>
      <Layout />
      <NavBar />
    </Router>
  );
}

export default App;
