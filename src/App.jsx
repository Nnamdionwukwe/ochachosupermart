import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import ApparelPage from "./components/ApparelPage";
import DefaultPage from "./components/DefaultPage";
import Cart from "./components/Cart";
// import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import About from "./components/About";
import PharmacyPage from "./components/PharmacyPage";
import ProductMainDetails from "./components/ProductMainDetails";
import MensWearPage from "./components/MensWearPage";
import ToiletriesPage from "./components/TioleteriesPage";
import CareersPage from "./components/CareersPage";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            {/* <Route path="/" element={<LayoutNav />} /> */}
            <Route index element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/phamarcy" element={<PharmacyPage />} />
            <Route path="/products/:id" element={<ProductMainDetails />} />
            <Route path="/products/apparel" element={<ApparelPage />} />
            <Route path="/products/MensWear" element={<MensWearPage />} />
            <Route path="/products/toiletries" element={<ToiletriesPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/checkout" element={<Checkout />} />
            <Route path="/About" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="careers" element={<CareersPage />} />
            {/* You would add more routes here for each category */}
            <Route path="*" element={<DefaultPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
