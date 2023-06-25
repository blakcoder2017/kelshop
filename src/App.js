import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/UI/Header/Header";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import ShopService from "./services/ShopService";

function App() {
  const [shopDetails, setShopDetails] = useState([]);

  useEffect(() => {
    ShopService.getCategories().then((res) => {
      setShopDetails(res.data);
    });
  }, []);

  return (
    <div className="container-md">
      <Router>
        <Header shopDetails={shopDetails} />
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/cart/:id" Component={Cart}></Route>
          <Route path="/product/:id" Component={Product}></Route>
          <Route path="/products/:cat" Component={Products}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
