import React from "react";
import Header from "./components/header";
import Home from "./components/home/index.js";
import ProductDetails from "./components/products/product-details.js";
import Cart from "./components/cart/index.js";
import Profile from "./components/user/profile.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [searchData, setSearchData] = useState("");
  const searchProducts = (searchData) => {
    setSearchData(searchData);
  };
  return (
    <div className="d-flex flex-column site-container">
      <BrowserRouter>
        <Header searchProducts={searchProducts} />
        <main>
          <Container>
            <Routes>
              <Route
                exact
                path="/"
                element={<Home searchData={searchData} />}
              />
              <Route path="/product/:productId" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
