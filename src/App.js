import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./Components/UI/Header/Header";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Product from "./Components/Product/Product";
import Products from "./Components/Products/Products";
import ShopService from "./ApiServices/ShopService";

function App() {
  const [shopDetails, setShopDetails] = useState([]);

  useEffect(() => {
    ShopService.getCategories().then((res) => {
      //console.log(res.data);
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
