import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import DefaultPage from "./components/DefaultPage";
import Cart from "./components/Cart";
// import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import About from "./components/About";
import PharmacyPage from "./components/PharmacyPage";
import ProductMainDetails from "./components/ProductMainDetails";
import ToiletriesPage from "./components/TioleteriesPage";
import CareersPage from "./components/CareersPage";
import CosmeticsPage from "./components/CosmeticsPage";
import BeveragesPage from "./components/BeveragesPage";
import CerealsPage from "./components/CerealsPage";
import KitchenUtensisPage from "./components/KitchenUtensisPage";
import FoodCondimentsPage from "./components/FoodCondimentsPage";
import SupermarketHomepage from "./components/SupermarketHomepage";
import ChocolatePage from "./components/ChocolatePage";
import CigarsPage from "./components/CigarsPage";
import FrozenFoodPage from "./components/FrozenFoodPage";
import WinesAndSpiritsPage from "./components/WinesAndSpiritsPage";
import SoftDrinksPage from "./components/SoftDrinksPage";
import ToysAndGamesPage from "./components/ToysAndGamesPage";
import StationariesPage from "./components/StationariesPage";
import ContraceptivesPage from "./components/ContraceptivesPage";
import WearsPage from "./components/WearsPage";
import CheckoutPage from "./components/CheckOutPage";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            {/* <Route path="/" element={<LayoutNav />} /> */}
            <Route index element={<SupermarketHomepage />} />
            {/* <Route index element={<HomePage />} /> */}
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductMainDetails />} />
            <Route path="/products/cosmetics" element={<CosmeticsPage />} />
            <Route path="/products/phamarcy" element={<PharmacyPage />} />
            <Route path="/products/beverages" element={<BeveragesPage />} />
            <Route path="/products/cereals" element={<CerealsPage />} />
            <Route path="/products/toiletries" element={<ToiletriesPage />} />
            <Route path="/products/food" element={<ToiletriesPage />} />
            <Route
              path="/products/kitchenutensis"
              element={<KitchenUtensisPage />}
            />
            <Route
              path="/products/foodcondiments"
              element={<FoodCondimentsPage />}
            />
            <Route path="/products/chocolate" element={<ChocolatePage />} />
            <Route path="/products/cigars" element={<CigarsPage />} />
            <Route path="/products/frozenfood" element={<FrozenFoodPage />} />
            <Route
              path="/products/winesspirits"
              element={<WinesAndSpiritsPage />}
            />
            <Route path="/products/softdrinks" element={<SoftDrinksPage />} />
            <Route path="/products/toysgames" element={<ToysAndGamesPage />} />
            <Route
              path="/products/stationaries"
              element={<StationariesPage />}
            />
            <Route
              path="/products/contraceptives"
              element={<ContraceptivesPage />}
            />
            <Route path="/products/wears" element={<WearsPage />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/checkout" element={<CheckoutPage />} />
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
